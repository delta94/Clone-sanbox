myn6: function(e, t, n) {
    "use strict";
    var r, a, i;
    n.d(t, "c", (function() {
        return r
    }
    )),
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "d", (function() {
        return i
    }
    )),
    n.d(t, "f", (function() {
        return s.TraceFlags
    }
    )),
    n.d(t, "a", (function() {
        return c.CanonicalCode
    }
    )),
    n.d(t, "e", (function() {
        return g
    }
    )),
    function(e) {
        e[e.SUCCESS = 0] = "SUCCESS",
        e[e.FAILED_NOT_RETRYABLE = 1] = "FAILED_NOT_RETRYABLE",
        e[e.FAILED_RETRYABLE = 2] = "FAILED_RETRYABLE"
    }(r || (r = {})),
    function(e) {
        e.Event = "event",
        e.Log = "log",
        e.Metric = "metric",
        e.Tracing = "tracing"
    }(a || (a = {})),
    function(e) {
        e[e.Debug = 0] = "Debug",
        e[e.Info = 1] = "Info",
        e[e.Warn = 2] = "Warn",
        e[e.Error = 3] = "Error",
        e[e.Fatal = 4] = "Fatal"
    }(i || (i = {}));
    var s = n("t2hp")
      , o = n("Epg7")
      , c = n("aXcF");
    function l(e) {
        return e && function(e) {
            return Array.isArray(e) && 2 === e.length
        }(e) ? 1e3 * e[0] + e[1] / 1e6 : e
    }
    class u {
        constructor() {
            this.attributes = {
                lib: "@lark/acelogger@0.7.3",
                logger: "acelogger",
                spanKind: o.SpanKind.INTERNAL,
                spanName: "unknown"
            }
        }
        setAttributes(e) {
            Object.assign(this.attributes, e)
        }
        getAttributes() {
            return this.attributes
        }
        debug(e, t) {
            this.innerLog(Object.assign({}, t, {
                level: i.Debug,
                message: e,
                name: "log.debug",
                type: a.Log
            }))
        }
        info(e, t) {
            this.innerLog(Object.assign({}, t, {
                level: i.Info,
                message: e,
                name: "log.info",
                type: a.Log
            }))
        }
        warn(e, t) {
            this.innerLog(Object.assign({}, t, {
                level: i.Warn,
                message: e,
                name: "log.warn",
                type: a.Log
            }))
        }
        error(e, t) {
            this.innerLog(Object.assign({}, t, {
                level: i.Error,
                message: e.message,
                name: "log.error",
                stack: e.stack,
                type: a.Log
            }))
        }
        fatal(e, t) {
            this.innerLog(Object.assign({}, t, {
                level: i.Fatal,
                message: e.message,
                name: "log.fatal",
                stack: e.stack,
                type: a.Log
            }))
        }
        storeMetrics(e) {
            const t = e.message ? ", " + e.message : "";
            this.innerLog(Object.assign({}, e, {
                level: e.level || i.Debug,
                message: "store " + JSON.stringify(e.metrics) + t,
                name: "metric.store",
                type: a.Metric
            }))
        }
        event(e, t) {
            const n = Object.assign({}, t, {
                level: i.Info,
                message: t && t.message || "log event: " + e,
                name: e,
                type: a.Event
            });
            this.innerLog(n)
        }
        startSpan(e, t) {
            const n = this.span ? Object.assign({}, t, {
                parent: this.span.context
            }) : t
              , r = this.manager.tracer.createSpan(e, n)
              , s = new u;
            return s.span = r,
            s.manager = this.manager,
            s.setAttributes(Object.assign({}, this.attributes, r.attributes, {
                spanKind: r.kind,
                spanName: r.name
            })),
            s.innerLog({
                level: i.Info,
                message: r.name + ".start",
                metrics: {
                    [r.name + ".start.latency"]: r.startTime - r.userStartTime
                },
                name: r.name + ".start",
                type: a.Tracing
            }),
            s
        }
        endSpan(e) {
            if (!this.span)
                return void this.error(new Error("logger.endSpan must call after logger.startSpan"));
            const t = Object.assign({}, e, {
                name: this.span.name + ".end",
                type: a.Tracing
            });
            t.level = t.level || i.Info,
            this.span.endTime = l(t.time) || this.manager.timer.now();
            const n = this.span.endTime - this.span.startTime;
            t.metrics = Object.assign({}, {
                [this.span.name + ".duration"]: n
            }, t.metrics);
            const r = t.message ? ", " + t.message : "";
            t.message = this.span.name + " end with " + n + "ms" + r,
            this.innerLog(t)
        }
        flush(e) {
            this.manager.flush(e)
        }
        innerLog(e) {
            let t = e.traceFlags || s.TraceFlags.NONE;
            const n = Object.assign({}, {
                spanId: "0",
                traceId: "0"
            }, e.data)
              , r = Object.assign({}, this.attributes, e.attributes);
            this.span && (void 0 !== e.traceFlags && null !== e.traceFlags || (t = this.span.context.traceFlags),
            n.spanId = this.span.context.spanId,
            n.traceId = this.span.context.traceId,
            r.spanName = this.span.name,
            r.spanKind = this.span.kind);
            const a = e.status || c.CanonicalCode.OK
              , o = Math.max(function(e) {
                switch (e) {
                case c.CanonicalCode.OK:
                    return i.Debug;
                case c.CanonicalCode.INTERNAL:
                case c.CanonicalCode.RESOURCE_EXHAUSTED:
                case c.CanonicalCode.UNAVAILABLE:
                    return i.Error;
                default:
                    return i.Warn
                }
            }(a), e.level)
              , l = e.time || this.manager.timer.now();
            this.manager.addEvent({
                attributes: r,
                data: n,
                level: o,
                message: e.message,
                metrics: e.metrics,
                name: e.name,
                stack: e.stack,
                status: a,
                time: l,
                traceFlags: t,
                type: e.type
            })
        }
    }
    const d = {
        $rootSpan: 0
    };
    function p(e, t) {
        let n;
        return n = t ? d[t] ? d[t] = d[t] + 1 : d[t] = 1 : d.$rootSpan = d.$rootSpan + 1,
        t ? t + "." + n : e + "-" + n
    }
    class h {
        constructor() {
            this.data = {
                startTime: Date.now()
            }
        }
        toJSON() {
            return this.data
        }
        createSpanContext(e) {
            const t = Object.assign({}, e)
              , n = t.traceId || Math.random().toString(32).substring(2, 8) + Math.random().toString(32).substring(2, 8);
            return {
                isRemote: t.isRemote,
                spanId: p(n, t.spanId),
                traceFlags: t.traceFlags || s.TraceFlags.NONE,
                traceId: n,
                traceState: t.traceState
            }
        }
        createSpan(e, t) {
            const n = t || {}
              , r = this.manager.timer.now()
              , a = l(n.startTime) || r;
            return {
                attributes: n.attributes,
                context: this.createSpanContext(n.parent),
                endTime: 0,
                kind: n.kind || o.SpanKind.INTERNAL,
                name: e,
                parentContext: n.parent,
                startTime: r,
                userStartTime: a
            }
        }
        start(e) {
            this.data.startTime = l(e) || this.manager.timer.now()
        }
        end(e) {
            this.data.endTime = l(e) || this.manager.timer.now()
        }
    }
    const _ = {
        now: ()=>Date.now()
    };
    var f;
    !function(e) {
        e.Logger = "logger",
        e.Tracer = "tracer",
        e.Timer = "timer"
    }(f || (f = {}));
    class g {
        constructor() {
            this.eventBuffer = new Map,
            this.registries = new Map,
            this.exporterMap = new Map,
            this.bufferCount = 0,
            this.bufferSize = 10,
            this.defaultLogger = new u,
            this.defaultLogger.manager = this,
            this.defaultTracer = new h,
            this.defaultTracer.manager = this
        }
        setLogger(e) {
            this.registries.set("logger", e),
            e && (e.manager = this)
        }
        get logger() {
            return this.registries.get(f.Logger) || this.defaultLogger
        }
        setTracer(e) {
            this.registries.set("tracer", e),
            e && (e.manager = this)
        }
        get tracer() {
            return this.registries.get(f.Tracer) || this.defaultTracer
        }
        setTimer(e) {
            this.registries.set(f.Timer, e)
        }
        get timer() {
            return this.registries.get(f.Timer) || _
        }
        setBufferSize(e) {
            this.bufferSize = e
        }
        setExporter(e, t) {
            return Object.keys(i).forEach(n=>{
                const r = i[n];
                if ("number" == typeof r && r >= e) {
                    const e = this.exporterMap.get(r) || [];
                    e.push(t),
                    this.exporterMap.set(r, e)
                }
            }
            ),
            this
        }
        addEvent(e) {
            const t = this.eventBuffer.get(e.level) || [];
            return t.push(e),
            this.bufferCount++,
            this.eventBuffer.set(e.level, t),
            this.bufferCount >= this.bufferSize && this.flush(),
            this
        }
        flush(e) {
            this.flushTimer || (this.flushTimer = setTimeout(()=>{
                this.eventBuffer.forEach((e,t)=>{
                    this.export(t, e)
                }
                ),
                this.eventBuffer = new Map,
                this.bufferCount = 0,
                this.flushTimer = null,
                e && e()
            }
            , 0))
        }
        get flushing() {
            return !!this.flushTimer
        }
        export(e, t) {
            try {
                const n = this.exporterMap.get(e);
                n && n.forEach(e=>{
                    e.export(t, e=>{
                        e !== r.SUCCESS && console.error("Failed export event with " + (e === r.FAILED_NOT_RETRYABLE ? "no" : "") + " retry")
                    }
                    )
                }
                )
            } catch (e) {
                console.error("Failed export events with error", e)
            }
        }
    }
    i.Debug,
    i.Info,
    i.Warn,
    i.Error;
    const m = new g;
    t.g = m
},


import { TraceFlags, CanonicalCode, SpanKind } from './dependencies'; // Thay thế './dependencies' bằng đường dẫn thực tế

const spanCounters = {
  $rootSpan: 0,
};

const getLogLevelFromStatus = (status) => {
  switch (status) {
    case CanonicalCode.OK:
      return LogLevel.Debug;
    case CanonicalCode.INTERNAL:
    case CanonicalCode.RESOURCE_EXHAUSTED:
    case CanonicalCode.UNAVAILABLE:
      return LogLevel.Error;
    default:
      return LogLevel.Warn;
  }
};


function convertToMilliseconds(e) {
    return e && function(e) {
        return Array.isArray(e) && 2 === e.length
    }(e) ? 1e3 * e[0] + e[1] / 1e6 : e
}

function generateSpanName(prefix, parent) {
  let count;
  if (parent) {
    count = spanCounters[parent] ? (spanCounters[parent] += 1) : (spanCounters[parent] = 1);
  } else {
    count = spanCounters.$rootSpan += 1;
  }
  return parent ? `${parent}.${count}` : `${prefix}-${count}`;
}

class Timer {
  constructor() {
    this.data = {
      startTime: Date.now(),
    };
  }

  toJSON() {
    return this.data;
  }

  createSpanContext(config) {
    const contextConfig = { ...config };
    const traceId = contextConfig.traceId || Math.random().toString(32).substring(2, 8) + Math.random().toString(32).substring(2, 8);
    return {
      isRemote: contextConfig.isRemote,
      spanId: generateSpanName(traceId, contextConfig.spanId),
      traceFlags: contextConfig.traceFlags || TraceFlags.NONE,
      traceId,
      traceState: contextConfig.traceState,
    };
  }

  createSpan(spanName, config) {
    const spanConfig = config || {};
    const startTime = this.manager.timer.now();
    const userStartTime = spanConfig.startTime ? l(spanConfig.startTime) : startTime;
    return {
      attributes: spanConfig.attributes,
      context: this.createSpanContext(spanConfig.parent),
      endTime: 0,
      kind: spanConfig.kind || SpanKind.INTERNAL,
      name: spanName,
      parentContext: spanConfig.parent,
      startTime,
      userStartTime,
    };
  }

  start(time) {
    this.data.startTime = l(time) || this.manager.timer.now();
  }

  end(time) {
    this.data.endTime = l(time) || this.manager.timer.now();
  }
}

const DEFAULT_TIMER = {
  now: () => Date.now(),
};

class Logger {
  constructor() {
    this.attributes = {
      lib: '@lark/acelogger@0.7.3',
      logger: 'acelogger',
      spanKind: SpanKind.INTERNAL,
      spanName: 'unknown',
    };
  }

  setAttributes(attributes) {
    Object.assign(this.attributes, attributes);
  }

  getAttributes() {
    return this.attributes;
  }

  debug(message, options) {
    this.innerLog({
      ...options,
      level: LogLevel.Debug,
      message,
      name: 'log.debug',
      type: LogType.Log,
    });
  }

  info(message, options) {
    this.innerLog({
      ...options,
      level: LogLevel.Info,
      message,
      name: 'log.info',
      type: LogType.Log,
    });
  }

  warn(message, options) {
    this.innerLog({
      ...options,
      level: LogLevel.Warn,
      message,
      name: 'log.warn',
      type: LogType.Log,
    });
  }

  error(error, options) {
    this.innerLog({
      ...options,
      level: LogLevel.Error,
      message: error.message,
      name: 'log.error',
      stack: error.stack,
      type: LogType.Log,
    });
  }

  fatal(error, options) {
    this.innerLog({
      ...options,
      level: LogLevel.Fatal,
      message: error.message,
      name: 'log.fatal',
      stack: error.stack,
      type: LogType.Log,
    });
  }

  storeMetrics(metrics) {
    const message = metrics.message ? `, ${metrics.message}` : '';
    this.innerLog({
      ...metrics,
      level: metrics.level || LogLevel.Debug,
      message: `store ${JSON.stringify(metrics.metrics)}${message}`,
      name: 'metric.store',
      type: LogType.Metric,
    });
  }

  event(eventName, options) {
    const eventOptions = {
      ...options,
      level: LogLevel.Info,
      message: options && options.message || `log event: ${eventName}`,
      name: eventName,
      type: LogType.Event,
    };
    this.innerLog(eventOptions);
  }

  startSpan(spanName, options) {
    const spanOptions = this.span ? { ...options, parent: this.span.context } : options;
    const newSpan = this.manager.tracer.createSpan(spanName, spanOptions);
    const nestedLogger = new Logger();
    nestedLogger.span = newSpan;
    nestedLogger.manager = this.manager;
    nestedLogger.setAttributes({
      ...this.attributes,
      ...newSpan.attributes,
      spanKind: newSpan.kind,
      spanName: newSpan.name,
    });
    nestedLogger.innerLog({
      level: LogLevel.Info,
      message: `${newSpan.name}.start`,
      metrics: {
        [`${newSpan.name}.start.latency`]: newSpan.startTime - newSpan.userStartTime,
      },
      name: `${newSpan.name}.start`,
      type: LogType.Tracing,
    });
    return nestedLogger;
  }

  endSpan(options) {
    if (!this.span) {
      return void this.error(new Error('logger.endSpan must be called after logger.startSpan'));
    }
    const spanOptions = {
      ...options,
      name: `${this.span.name}.end`,
      type: LogType.Tracing,
    };
    spanOptions.level = spanOptions.level || LogLevel.Info;
    this.span.endTime = convertToMilliseconds(spanOptions.time) || this.manager.timer.now();
    const duration = this.span.endTime - this.span.startTime;
    spanOptions.metrics = {
      ...{
        [`${this.span.name}.duration`]: duration,
      },
      ...spanOptions.metrics,
    };
    const message = spanOptions.message ? `, ${spanOptions.message}` : '';
    spanOptions.message = `${this.span.name} end with ${duration}ms${message}`;
    this.innerLog(spanOptions);
  }

  flush(callback) {
    this.manager.flush(callback);
  }

  innerLog(logOptions) {
    let traceFlags = logOptions.traceFlags || TraceFlags.NONE;
    const data = {
      spanId: '0',
      traceId: '0',
      ...logOptions.data,
    };
    const attributes = {
      ...this.attributes,
      ...logOptions.attributes,
    };
    if (this.span) {
      if (void 0 === logOptions.traceFlags || null !== logOptions.traceFlags) {
        traceFlags = this.span.context.traceFlags;
      }
      data.spanId = this.span.context.spanId;
      data.traceId = this.span.context.traceId;
      attributes.spanName = this.span.name;
      attributes.spanKind = this.span.kind;
    }
    const statusCode = logOptions.status || CanonicalCode.OK;
    const logLevel = Math.max(getLogLevelFromStatus(statusCode), logOptions.level);
    const logTime = logOptions.time || this.manager.timer.now();
    this.manager.addEvent({
      attributes,
      data,
      level: logLevel,
      message: logOptions.message,
      metrics: logOptions.metrics,
      name: logOptions.name,
      stack: logOptions.stack,
      status: statusCode,
      time: logTime,
      traceFlags,
      type: logOptions.type,
    });
  }
}


enum ExportResult {
  SUCCESS = 0,
  FAILED_NOT_RETRYABLE = 1,
  FAILED_RETRYABLE = 2,
}

enum LogType {
  Event = "event",
  Log = "log",
  Metric = "metric",
  Tracing = "tracing",
}

enum LogLevel {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
  Fatal = 4,
}

class TracerManager {
  constructor() {
    this.eventBuffer = new Map();
    this.registries = new Map();
    this.exporterMap = new Map();
    this.bufferCount = 0;
    this.bufferSize = 10;
    this.defaultLogger = new Logger();
    this.defaultLogger.manager = this;
    this.defaultTracer = new Timer();
    this.defaultTracer.manager = this;
  }

  setLogger(logger) {
    this.registries.set(TracerManagerType.Logger, logger);
    logger && (logger.manager = this);
  }

  get logger() {
    return this.registries.get(TracerManagerType.Logger) || this.defaultLogger;
  }

  setTracer(tracer) {
    this.registries.set(TracerManagerType.Tracer, tracer);
    tracer && (tracer.manager = this);
  }

  get tracer() {
    return this.registries.get(TracerManagerType.Tracer) || this.defaultTracer;
  }

  setTimer(timer) {
    this.registries.set(TracerManagerType.Timer, timer);
  }

  get timer() {
    return this.registries.get(TracerManagerType.Timer) || DEFAULT_TIMER;
  }

  setBufferSize(bufferSize) {
    this.bufferSize = bufferSize;
  }

  setExporter(code, exporter) {
    Object.keys(CanonicalCode).forEach(codeName => {
      const codeValue = CanonicalCode[codeName];
      if (typeof codeValue === 'number' && codeValue >= code) {
        const exporters = this.exporterMap.get(codeValue) || [];
        exporters.push(exporter);
        this.exporterMap.set(codeValue, exporters);
      }
    });
    return this;
  }

  addEvent(event) {
    const eventList = this.eventBuffer.get(event.level) || [];
    eventList.push(event);
    this.bufferCount++;
    this.eventBuffer.set(event.level, eventList);
    if (this.bufferCount >= this.bufferSize) {
      this.flush();
    }
    return this;
  }

  flush(callback) {
    if (!this.flushTimer) {
      this.flushTimer = setTimeout(() => {
        this.eventBuffer.forEach((eventList, level) => {
          this.export(level, eventList);
        });
        this.eventBuffer = new Map();
        this.bufferCount = 0;
        this.flushTimer = null;
        callback && callback();
      }, 0);
    }
  }

  get flushing() {
    return !!this.flushTimer;
  }

  export(level, events) {
    try {
      const exporters = this.exporterMap.get(level);
      exporters && exporters.forEach(exporter => {
        exporter.export(events, result => {
          result !== ExportResult.SUCCESS && console.error(`Failed export event with ${result === ExportResult.FAILED_NOT_RETRYABLE ? 'no' : ''} retry`);
        });
      });
    } catch (e) {
      console.error('Failed export events with error', e);
    }
  }
}

const TracerManagerType = {
  Logger: 'logger',
  Tracer: 'tracer',
  Timer: 'timer',
};

const tracerManager = new TracerManager();
export default tracerManager;
