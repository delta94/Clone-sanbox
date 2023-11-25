// __d("QPLUserFlow", ["ErrorMetadata", "ErrorPubSub", "QPLEvent", "QPLJoinUtils", "QuickPerformanceLogger", "cr:1752405"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j, k = typeof window !== "undefined" ? window : self;

//     function l(a, b) {
//         if (b === null) {
//             var c;
//             return (c = a) != null ? c : null
//         }
//         a = (c = a) != null ? c : {};
//         a.string || (a.string = {});
//         a.string.uf_debug_info = b;
//         return a\    
//     }
//     a = function () {
//         function a() {
//             var a = this;
//             b("cr:1752405")();
//             (j || (j = c("ErrorPubSub"))).unshiftListener(function (b) {
//                 if (b.type !== "fatal") return;
//                 var d = a.getActiveFlowIDs();
//                 if (d.length === 0) return;
//                 var e = new(c("ErrorMetadata"))();
//                 e.clearEntries();
//                 d.forEach(function (a) {
//                     e.addEntry("QPL", "ACTIVE_FLOW_ID", a.toString())
//                 });
//                 d = e.format();
//                 b.metadata ? b.metadata = [].concat(b.metadata, d) : b.metadata = d
//             });
//             this.$1 = new Map()
//         }
//         var e = a.prototype;
//         e.$2 = function (a, b, c, e, f) {
//             var g = this,
//                 i;
//             if (e == null) return;
//             e = k.setTimeout(function () {
//                 f != null && f(a, b, c), g.endTimeout(a, {
//                     instanceKey: b,
//                     joinID: c
//                 })
//             }, e);
//             this.$1.has((h || (h = d("QPLEvent"))).getMarkerId(a)) || this.$1.set((h || (h = d("QPLEvent"))).getMarkerId(a), new Map());
//             (i = this.$1.get((h || (h = d("QPLEvent"))).getMarkerId(a))) == null ? void 0 : i.set(b, e)
//         };
//         e.start = function (a, b) {
//             b = b === void 0 ? {} : b;
//             var e = b.instanceKey;
//             e = e === void 0 ? 0 : e;
//             var f = b.annotations,
//                 g = b.cancelExisting;
//             g = g === void 0 ? !1 : g;
//             var h = b.cancelOnUnload;
//             h = h === void 0 ? !0 : h;
//             var j = b.timestamp,
//                 k = b.trackedForLoss;
//             k = k === void 0 ? !0 : k;
//             var l = b.joinID,
//                 m = b.timeoutInMs,
//                 n = b.onFlowTimeout;
//             b = b.qplInternalDoNotUseAbsoluteTimeOrigin;
//             (i || (i = c("QuickPerformanceLogger"))).markerStart(a, e, j, {
//                 cancelExisting: g,
//                 cancelOnUnload: h,
//                 trackedForLoss: k,
//                 type: 2,
//                 samplingBasis: l,
//                 qplInternalDoNotUseAbsoluteTimeOrigin: b
//             });
//             this.$2(a, e, l, m, n);
//             f && (i || (i = c("QuickPerformanceLogger"))).markerAnnotate(a, f, {
//                 instanceKey: e
//             });
//             l != null && (d("QPLJoinUtils").setJoinId(i || (i = c("QuickPerformanceLogger")), a, l, {
//                 instanceKey: e
//             }), d("QPLJoinUtils").markJoinRequest(i, a, l, {
//                 instanceKey: e
//             }))
//         };
//         e.startFromNavStart = function (a, b) {
//             b = b === void 0 ? {} : b;
//             var d = b.instanceKey;
//             d = d === void 0 ? 0 : d;
//             var e = b.annotations,
//                 f = b.cancelExisting;
//             f = f === void 0 ? !1 : f;
//             var g = b.cancelOnUnload;
//             g = g === void 0 ? !0 : g;
//             var h = b.trackedForLoss;
//             h = h === void 0 ? !0 : h;
//             var j = b.joinID,
//                 k = b.timeoutInMs,
//                 l = b.onFlowTimeout;
//             b = b.qplInternalDoNotUseConvertToTimeOnServer;
//             (i || (i = c("QuickPerformanceLogger"))).markerStartFromNavStart(a, d, {
//                 cancelExisting: f,
//                 cancelOnUnload: g,
//                 trackedForLoss: h,
//                 type: 2,
//                 samplingBasis: j,
//                 qplInternalDoNotUseConvertToTimeOnServer: b
//             });
//             this.$2(a, d, j, k, l);
//             e && (i || (i = c("QuickPerformanceLogger"))).markerAnnotate(a, e, {
//                 instanceKey: d
//             })
//         };
//         e.endSuccess = function (a, b) {
//             b = b === void 0 ? {} : b;
//             var c = b.instanceKey;
//             c = c === void 0 ? 0 : c;
//             var d = b.annotations,
//                 e = b.joinID;
//             b = b.timestamp;
//             this.$3(a, 2, c, e, d, b)
//         };
//         e.endFailure = function (a, b, c) {
//             c = c === void 0 ? {} : c;
//             var d = c.instanceKey;
//             d = d === void 0 ? 0 : d;
//             var e = c.debugInfo,
//                 f = c.annotations,
//                 g = c.joinID,
//                 h = c.timestamp;
//             c = c.error;
//             this.markError(a, b, {
//                 debugInfo: e,
//                 instanceKey: d,
//                 error: c
//             });
//             this.$3(a, 3, d, g, f, h)
//         };
//         e.endValidationFailure_DO_NOT_USE = function (a, b) {
//             b = b === void 0 ? {} : b;
//             var c = b.instanceKey;
//             c = c === void 0 ? 0 : c;
//             var d = b.debugInfo,
//                 e = b.annotations,
//                 f = b.joinID;
//             b = b.timestamp;
//             this.markError(a, "validation_failed", {
//                 debugInfo: d,
//                 instanceKey: c
//             });
//             this.$3(a, 7952, c, f, e, b)
//         };
//         e.endTimeout = function (a, b) {
//             b = b === void 0 ? {} : b;
//             var c = b.instanceKey;
//             c = c === void 0 ? 0 : c;
//             var d = b.annotations,
//                 e = b.joinID;
//             b = b.timestamp;
//             this.$3(a, 113, c, e, d, b)
//         };
//         e.endCancel = function (a, b) {
//             b = b === void 0 ? {} : b;
//             var c = b.instanceKey;
//             c = c === void 0 ? 0 : c;
//             var d = b.cancelReason;
//             d = d === void 0 ? 4 : d;
//             var e = b.annotations,
//                 f = b.joinID;
//             b = b.timestamp;
//             this.$3(a, d, c, f, e, b)
//         };
//         e.$3 = function (a, b, e, f, g, j) {
//             var l;
//             l = (l = this.$1.get((h || (h = d("QPLEvent"))).getMarkerId(a))) == null ? void 0 : l.get(e);
//             if (l != null) {
//                 k.clearTimeout(l);
//                 (l = this.$1.get((h || (h = d("QPLEvent"))).getMarkerId(a))) == null ? void 0 : l["delete"](e)
//             }
//             g && (i || (i = c("QuickPerformanceLogger"))).markerAnnotate(a, g, {
//                 instanceKey: e
//             });
//             f != null && (j != null ? d("QPLJoinUtils").markJoinResponse(i || (i = c("QuickPerformanceLogger")), a, f, {
//                 instanceKey: e,
//                 timestamp: j
//             }) : d("QPLJoinUtils").markJoinResponse(i || (i = c("QuickPerformanceLogger")), a, f, {
//                 instanceKey: e
//             }));
//             j != null ? (i || (i = c("QuickPerformanceLogger"))).markerEnd(a, b, e, j) : (i || (i = c("QuickPerformanceLogger"))).markerEnd(a, b, e)
//         };
//         e.addAnnotations = function (a, b, d) {
//             d = d === void 0 ? {} : d;
//             d = d.instanceKey;
//             (i || (i = c("QuickPerformanceLogger"))).markerAnnotate(a, b, {
//                 instanceKey: d
//             })
//         };
//         e.addPoint = function (a, b, d) {
//             d = d === void 0 ? {} : d;
//             var e = d.instanceKey,
//                 f = d.debugInfo,
//                 g = d.data;
//             d = d.timestamp;
//             f = l(g, (g = f) != null ? g : null);
//             (i || (i = c("QuickPerformanceLogger"))).markerPoint(a, b, {
//                 data: f,
//                 instanceKey: e,
//                 timestamp: d
//             })
//         };
//         e.markError = function (a, b, d) {
//             d = d === void 0 ? {} : d;
//             var e = d.debugInfo,
//                 f = d.instanceKey;
//             d = d.error;
//             (i || (i = c("QuickPerformanceLogger"))).markerAnnotate(a, babelHelpers["extends"]({}, this.$4(d), {
//                 bool: (d = {}, d.uf_has_error = !0, d)
//             }), {
//                 instanceKey: f
//             });
//             this.addPoint(a, b, {
//                 debugInfo: e,
//                 instanceKey: f
//             })
//         };
//         e.storeBeforeNavigation = function (a, b) {
//             b = b === void 0 ? {} : b;
//             b = b.instanceKey;
//             b = b === void 0 ? 0 : b;
//             (i || (i = c("QuickPerformanceLogger"))).markerStoreBeforeNavigation(a, {
//                 instanceKey: b
//             })
//         };
//         e.getActiveFlowIDs = function () {
//             return (i || (i = c("QuickPerformanceLogger"))).getActiveMarkerIds({
//                 type: 2
//             })
//         };
//         e.$4 = function (a) {
//             var b;
//             if (a == null) return {};
//             var c = {
//                 "int": {},
//                 string: {}
//             };
//             c.string.uf_error_name = a.name;
//             a = a;
//             (a == null ? void 0 : (b = a.source) == null ? void 0 : b.code) != null && (c["int"].uf_graphql_error_code = a == null ? void 0 : a.source.code);
//             if ((a == null ? void 0 : (b = a.source) == null ? void 0 : (b = b.exception) == null ? void 0 : b["class"]) != null) {
//                 c.string.uf_graphql_exception_class = a == null ? void 0 : (b = a.source) == null ? void 0 : (a = b.exception) == null ? void 0 : a["class"]
//             }
//             return c
//         };
//         return a
//     }();
//     e = new a();
//     g["default"] = e
// }), 98);



import ErrorMetadata from 'ErrorMetadata';
import ErrorPubSub from 'ErrorPubSub';
import QPLEvent from 'QPLEvent';
import * as QPLJoinUtils from 'QPLJoinUtils';
import QuickPerformanceLogger from 'QuickPerformanceLogger';
import registerHeaderProvider from 'QPLAddCometRequestHeaders';

interface StartOptions {
  instanceKey?: number;
  annotations?: any;
  cancelExisting?: boolean;
  cancelOnUnload?: boolean;
  timestamp?: number;
  trackedForLoss?: boolean;
  joinID?: string;
  timeoutInMs?: number;
  onFlowTimeout?: (markerId: string, instanceKey: number, joinID: string) => void;
  qplInternalDoNotUseAbsoluteTimeOrigin?: boolean; 
  qplInternalDoNotUseConvertToTimeOnServer?: boolean;
}

interface EndOptions {
  instanceKey?: number;
  annotations?: any;
  joinID?: string;
  timestamp?: number;
  debugInfo?: any;
  error?: Error;
  cancelReason?: number;
}

interface ErrorFormatting {
    int: {[key: string]: number};
    string: {[key: string]: string}; 
  }
  
  interface ErrorSource {
    code?: number;
    exception?: {
      class?: string;
    }
  }
  
  interface Error {
    name?: string;
    source?: ErrorSource;
  }
  interface FormattedData {
    string?: {
      uf_debug_info?: string;
    };
  }
  
class QPLUserFlow {

  private timeouts = new Map();

  constructor() {
    registerHeaderProvider();

    ErrorPubSub.unshiftListener((error) => {
      if (error.type !== 'fatal') {
        return;
      }

      const activeFlowIDs = this.getActiveFlowIDs();
      if (activeFlowIDs.length === 0) {
        return; 
      }

      const metadata = new ErrorMetadata();
      metadata.clearEntries();

      activeFlowIDs.forEach(id => {
        metadata.addEntry('QPL', 'ACTIVE_FLOW_ID', id.toString());  
      });

      const formatted = metadata.format();

      if (error.metadata) {
        error.metadata = [...error.metadata, ...formatted];
      } else {
        error.metadata = formatted;
      }
    });
  }

  setTimeout(
    markerId: string,
    instanceKey: number,
    joinID: string,
    timeoutMs: number,
    onTimeout: (markerId: string, instanceKey: number, joinID: string) => void
  ) {
    let timeoutId;

    if (timeoutMs == null) {
      return;
    }

    timeoutId = self.setTimeout(() => {
      if (onTimeout) {
        onTimeout(markerId, instanceKey, joinID);
      }
      this.endTimeout(markerId, {instanceKey, joinID});  
    }, timeoutMs);

    if (!this.timeouts.has(QPLEvent.getMarkerId(markerId))) {
      this.timeouts.set(QPLEvent.getMarkerId(markerId), new Map());
    }

    const timeouts = this.timeouts.get(QPLEvent.getMarkerId(markerId));
    if (timeouts) {
      timeouts.set(instanceKey, timeoutId);
    }
  }

  start(
    markerId: string, 
    options: StartOptions = {}
  ) {
    const {
      instanceKey = 0,
      annotations,
      cancelExisting = false,
      cancelOnUnload = true,
      timestamp,
      trackedForLoss = true,
      joinID = "",
      timeoutInMs = 1000,
      onFlowTimeout = () => ({}),
      qplInternalDoNotUseAbsoluteTimeOrigin
    } = options;

    QuickPerformanceLogger.markerStart(
      markerId,
      instanceKey,
      timestamp, 
      {
        cancelExisting,
        cancelOnUnload,
        trackedForLoss,
        type: 2,
        samplingBasis: joinID,
        qplInternalDoNotUseAbsoluteTimeOrigin  
      }
    );

    this.setTimeout(
      markerId,
      instanceKey,
      joinID,
      timeoutInMs,
      onFlowTimeout
    );

    if (annotations) {
      QuickPerformanceLogger.markerAnnotate(markerId, annotations, {instanceKey}); 
    }

    if (joinID != null) {
      QPLJoinUtils.setJoinId(QuickPerformanceLogger, markerId, joinID, {instanceKey});
      QPLJoinUtils.markJoinRequest(QuickPerformanceLogger, markerId, joinID, {instanceKey});
    }
  }

  startFromNavStart(
    markerId: string,
    options: StartOptions = {}  
  ) {
    const {
      instanceKey = 0,
      annotations,
      cancelExisting = false, 
      cancelOnUnload = true,
      trackedForLoss = true,
      joinID = "",
      timeoutInMs  = 1000,
      onFlowTimeout = () => ({}),
      qplInternalDoNotUseConvertToTimeOnServer
    } = options;
  
    QuickPerformanceLogger.markerStartFromNavStart(
      markerId,
      instanceKey,
      {
        cancelExisting,
        cancelOnUnload,
        trackedForLoss,
        type: 2,
        samplingBasis: joinID,
        qplInternalDoNotUseConvertToTimeOnServer
      }
    );
    
    this.setTimeout(
      markerId, 
      instanceKey,
      joinID,
      timeoutInMs,
      onFlowTimeout
    );
  
    if (annotations) {
      QuickPerformanceLogger.markerAnnotate(markerId, annotations, {instanceKey});
    }
  }
  
  endSuccess(
    markerId: string,
    options: EndOptions = {}
  ) {
    const {
      instanceKey = 0,
      annotations,
      joinID,
      timestamp    
    } = options;
  
    this.end(
      markerId, 
      2, // QPL status success
      instanceKey,
      joinID,
      annotations,
      timestamp
    );
  }
  
  endFailure(
    markerId: string,
    errorCode: string,
    options: EndOptions = {}  
  ) {
    const {
      instanceKey = 0,
      debugInfo,
      annotations,
      joinID,
      timestamp,
      error  
    } = options;
  
    this.markError(markerId, errorCode, {
      debugInfo,
      instanceKey, 
      error
    });
    
    this.end(
      markerId,
      3, // QPL status failure
      instanceKey, 
      joinID,
      annotations,
      timestamp
    );
  }
  
  endValidationFailure(
    markerId: string, 
    options: EndOptions = {}
  ) {
    // QPL status validation_failed
    this.endFailure(markerId, 'validation_failed', options); 
  }
  
  endTimeout(
    markerId: string,
    options: EndOptions = {}
  ) {
    const {
      instanceKey = 0,
      annotations,
      joinID,
      timestamp    
    } = options;
    
    this.end(
      markerId,
      113, // QPL status timeout
      instanceKey,
      joinID,
      annotations,
      timestamp
    );
  }  
  
  endCancel(
    markerId: string, 
    options: EndOptions = {}
  ) {
    const {
      instanceKey = 0,
      cancelReason = 4, // QPL status canceled
      annotations,
      joinID,
      timestamp
    } = options;
  
    this.end(
      markerId, 
      cancelReason,
      instanceKey,
      joinID,
      annotations,
      timestamp
    );
  }

  private end(
    markerId: string,
    status: number,
    instanceKey: number,
    joinID: string | undefined,
    annotations: any,
    timestamp: number | undefined
  ) {
    const timeout = this.timeouts.get(QPLEvent.getMarkerId(markerId))?.get(instanceKey);
    if (timeout) {
      clearTimeout(timeout);
      const timeouts = this.timeouts.get(QPLEvent.getMarkerId(markerId));
      if (timeouts) {
        timeouts.delete(instanceKey);
      }
    }
  
    if (annotations) {
      QuickPerformanceLogger.markerAnnotate(markerId, annotations, {instanceKey});
    }
  
    if (joinID != null) {
      if (timestamp != null) {
        QPLJoinUtils.markJoinResponse(
          QuickPerformanceLogger, 
          markerId, 
          joinID,
          {instanceKey, timestamp}
        );
      } else {
        QPLJoinUtils.markJoinResponse(
          QuickPerformanceLogger,
          markerId,
          joinID,
          {instanceKey}  
        );
      }
    }
  
    if (timestamp != null) {
      QuickPerformanceLogger.markerEnd(markerId, status, instanceKey, timestamp);
    } else {
      QuickPerformanceLogger.markerEnd(markerId, status, instanceKey);
    }
  }
  
  addAnnotations(
    markerId: string,
    annotations: any,
    options: {instanceKey?: number} = {}
  ) {
    const {instanceKey} = options;
    QuickPerformanceLogger.markerAnnotate(markerId, annotations, {instanceKey});
  }
  
  addPoint(
    markerId: string,
    point: string,
    options: {
      instanceKey?: number; 
      debugInfo?: any;
      data?: any;
      timestamp?: number
    } = {}
  ) {
    const {instanceKey, debugInfo, data, timestamp} = options;
    
    const formattedData = this.formatData(data, debugInfo);
  
    QuickPerformanceLogger.markerPoint(
      markerId, 
      point,
      {
        data: formattedData,
        instanceKey,
        timestamp
      }
    );
  }

  markError(
    markerId: string,
    errorCode: string,
    options: {
      debugInfo?: any;
      instanceKey?: number;
      error?: Error  
    } = {}
  ) {
    const {debugInfo, instanceKey, error} = options;
  
    QuickPerformanceLogger.markerAnnotate(
      markerId,
      {
        ...this.formatError(error),
        bool: {uf_has_error: true}
      },
      {instanceKey}
    );
  
    this.addPoint(markerId, errorCode, {
      debugInfo,
      instanceKey
    });
  }

  private formatData(
    data: any = {}, 
    debugInfo: string | null
  ): FormattedData {
  
    if (debugInfo === null) {
      return data ?? null;
    }
  
    const formatted = {...(data || {})};
  
    formatted.string = formatted.string || {};
    formatted.string.uf_debug_info = debugInfo;
  
    return formatted;
  }

  private formatError(error?: Error): ErrorFormatting {
    if (error == null) {
        return {
            int: {},
            string: {}
        };
    }
  
    const formatted: ErrorFormatting = {
      int: {},
      string: {}
    };
  
    formatted.string.uf_error_name = error.name ?? '';
  
    if (error?.source?.code != null) {
      formatted.int.uf_graphql_error_code = error.source.code;
    }
  
    if (error?.source?.exception?.class != null) {
      formatted.string.uf_graphql_exception_class = error.source.exception.class;
    }
  
    return formatted;
  }

  getActiveFlowIDs(): string[] {
    return QuickPerformanceLogger.getActiveMarkerIds({
      type: 2  
    });
  }
  
 
storeBeforeNavigation(
    markerId: string,
    options: EndOptions = {}
  ) {
  
    const { instanceKey = 0 } = options;
  
    QuickPerformanceLogger.markerStoreBeforeNavigation(markerId, {
      instanceKey  
    });
  
  }
  
}

const userFlow = new QPLUserFlow();
export default userFlow;