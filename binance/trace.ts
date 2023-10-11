export enum SpanStatus {
    Started = 0,
    Stopped = 1,
}
  
  const isNode = typeof window === 'undefined';
  const serverReporterSymbol = Symbol.for('shuvi_server_reporter');
  let spanIdCounter = 0;
  let globalReporter;
  
  export const setReporter = (reporter) => {
    if (isNode) {
      if (globalThis[serverReporterSymbol]) {
        throw new Error('Reporter already set !');
      }
      globalThis[serverReporterSymbol] = reporter;
    } else {
      if (globalReporter) {
        throw new Error('Reporter already set !');
      }
      globalReporter = reporter;
    }
  };
  
  export class Span {
    private _name: string;
    private _parentId?: number;
    private _attrs: Record<string, string>;
    private _status: SpanStatus = SpanStatus.Started;
    private _id: number;
  
    private _start: number;
    private _now: number;
  
    constructor({
      name,
      parentId,
      attrs,
      startTime,
    }: {
      name: string;
      parentId?: number;
      attrs?: Record<string, string>;
      startTime?: number;
    }) {
      this._name = name;
      this._parentId = parentId;
      this._attrs = attrs ? { ...attrs } : {};
      this._id = spanIdCounter++;
  
      const now = Date.now();
      this._start = startTime || now;
      this._now = now;
    }
  
    get status() {
      return this._status;
    }
  
    stop(time?: number) {
      const reporter = isNode ? globalThis[serverReporterSymbol] : globalReporter;
      if (!reporter) {
        return;
      }
  
      const endTime = time || Date.now();
      const duration = endTime - this._start;
      this._status = SpanStatus.Stopped;
  
      if (duration > Number.MAX_SAFE_INTEGER) {
        console.warn(`Duration is too long to express as float64: ${duration}`);
      }
  
      reporter({
        timestamp: this._now,
        name: this._name,
        duration,
        startTime: this._start,
        endTime,
        id: this._id,
        parentId: this._parentId,
        attrs: this._attrs,
      });
    }
  
    traceChild(name: string, attrs?: Record<string, string>) {
      return new Span({
        name,
        parentId: this._id,
        attrs,
      });
    }
  
    manualTraceChild(name: string, startTime: number, endTime: number, attrs?: Record<string, string>) {
      new Span({
        name,
        parentId: this._id,
        attrs,
        startTime,
      }).stop(endTime);
    }
  
    setAttribute(name: string, value: any) {
      this._attrs[name] = String(value);
    }
  
    setAttributes(attributes: Record<string, string>) {
      Object.keys(attributes).forEach((key) => {
        this.setAttribute(key, attributes[key]);
      });
    }
  
    traceFn<T>(fn: (span: Span) => T): T {
      try {
        return fn(this);
      } finally {
        this.stop();
      }
    }
  
    async traceAsyncFn<T>(fn: (span: Span) => Promise<T>): Promise<T> {
      try {
        return await fn(this);
      } finally {
        this.stop();
      }
    }
  }
  
  export const trace = (name: string, parentId?: number, attrs?: Record<string, string>) =>
    new Span({
      name,
      parentId,
      attrs,
    });
  