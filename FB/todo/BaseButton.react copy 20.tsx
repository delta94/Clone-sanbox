__d("JSScheduler", ["SchedulerFb-Internals_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        unstable_Immediate: (c = b("SchedulerFb-Internals_DO_NOT_USE")).unstable_ImmediatePriority,
        unstable_UserBlocking: c.unstable_UserBlockingPriority,
        unstable_Normal: c.unstable_NormalPriority,
        unstable_Low: c.unstable_LowPriority,
        unstable_Idle: c.unstable_IdlePriority
    }
      , h = !1
      , i = c.unstable_scheduleCallback
      , j = c.unstable_cancelCallback
      , k = {
        priorities: g,
        shouldYield: c.unstable_shouldYield,
        getCurrentPriorityLevel: c.unstable_getCurrentPriorityLevel,
        runWithPriority: c.unstable_runWithPriority,
        runWithPriority_DO_NOT_USE: c.unstable_runWithPriority,
        defer: function(a) {
            var b = k.getCurrentPriorityLevel();
            return i(b, a)
        },
        getCallbackScheduler: function() {
            var a = k.getCurrentPriorityLevel();
            return function(b) {
                return i(a, b)
            }
        },
        getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE: function() {
            var a = k.getCurrentPriorityLevel();
            return function(c) {
                return i(g.unstable_UserBlocking, function() {
                    b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(a, c)
                })
            }
        },
        deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function(a) {
            var c = k.getCurrentPriorityLevel();
            return i(g.unstable_UserBlocking, function() {
                b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(c, a)
            })
        },
        scheduleImmediatePriCallback: function(a) {
            return i(g.unstable_Immediate, a)
        },
        scheduleUserBlockingPriCallback: function(a) {
            return i(g.unstable_UserBlocking, a)
        },
        scheduleNormalPriCallback: function(a) {
            return i(g.unstable_Normal, a)
        },
        scheduleLoggingPriCallback: function(a) {
            return i(g.unstable_Low, a)
        },
        scheduleSpeculativeCallback: function(a) {
            return i(g.unstable_Idle, a)
        },
        cancelCallback: function(a) {
            j(a)
        },
        scheduleDelayedCallback_DO_NOT_USE: function(a, b, c) {
            a = i(a, c, {
                delay: b
            });
            return a
        },
        cancelDelayedCallback_DO_NOT_USE: function(a) {
            a = a;
            return j(a)
        },
        startEventProfiling: function() {
            var a;
            a = (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) == null ? void 0 : a.startLoggingProfilingEvents;
            typeof a == "function" && a()
        },
        stopEventProfiling: function() {
            var a;
            a = (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) == null ? void 0 : a.stopLoggingProfilingEvents;
            return typeof a == "function" ? a() : null
        },
        makeSchedulerGlobalEntry: function(c, d) {
            c === void 0 && (c = null),
            d === void 0 && (d = !1),
            c !== null && c !== void 0 && b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c),
            d && k.startEventProfiling(),
            a.ScheduleJSWork = function(a) {
                return function() {
                    for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
                        c[d] = arguments[d];
                    h ? a.apply(void 0, c) : k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                        h = !0;
                        try {
                            a.apply(void 0, c)
                        } finally {
                            h = !1
                        }
                    })
                }
            }
        }
    };
    e.exports = k
}
), null);



import * as Scheduler from 'SchedulerFb-Internals_DO_NOT_USE';

type Callback = () => void;
type DeferredCallback = { cancel: () => void };

const priorities = {
  unstable_Immediate: Scheduler.unstable_ImmediatePriority,
  unstable_UserBlocking: Scheduler.unstable_UserBlockingPriority,
  unstable_Normal: Scheduler.unstable_NormalPriority,
  unstable_Low: Scheduler.unstable_LowPriority,
  unstable_Idle: Scheduler.unstable_IdlePriority,
};

let isInCallbackExecution: boolean = false;

const JSScheduler = {
  priorities,
  shouldYield: Scheduler.unstable_shouldYield,
  getCurrentPriorityLevel: Scheduler.unstable_getCurrentPriorityLevel,
  runWithPriority: Scheduler.unstable_runWithPriority,
  runWithPriority_DO_NOT_USE: Scheduler.unstable_runWithPriority,
  defer(callback: Callback): DeferredCallback {
    const priority = this.getCurrentPriorityLevel();
    return Scheduler.unstable_scheduleCallback(priority, callback);
  },
  getCallbackScheduler(): (callback: Callback) => DeferredCallback {
    const priority = this.getCurrentPriorityLevel();
    return (callback) => Scheduler.unstable_scheduleCallback(priority, callback);
  },
  getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE(): (callback: Callback) => DeferredCallback {
    const priority = this.getCurrentPriorityLevel();
    return (callback) => {
      return Scheduler.unstable_scheduleCallback(priorities.unstable_UserBlocking, () => {
        Scheduler.unstable_runWithPriority(priority, callback);
      });
    };
  },
  deferUserBlockingRunAtCurrentPri_DO_NOT_USE(callback: Callback): DeferredCallback {
    const priority = this.getCurrentPriorityLevel();
    return Scheduler.unstable_scheduleCallback(priorities.unstable_UserBlocking, () => {
      Scheduler.unstable_runWithPriority(priority, callback);
    });
  },
  scheduleImmediatePriCallback(callback: Callback): DeferredCallback {
    return Scheduler.unstable_scheduleCallback(priorities.unstable_Immediate, callback);
  },
  scheduleUserBlockingPriCallback(callback: Callback): DeferredCallback {
    return Scheduler.unstable_scheduleCallback(priorities.unstable_UserBlocking, callback);
  },
  scheduleNormalPriCallback(callback: Callback): DeferredCallback {
    return Scheduler.unstable_scheduleCallback(priorities.unstable_Normal, callback);
  },
  scheduleLoggingPriCallback(callback: Callback): DeferredCallback {
    return Scheduler.unstable_scheduleCallback(priorities.unstable_Low, callback);
  },
  scheduleSpeculativeCallback(callback: Callback): DeferredCallback {
    return Scheduler.unstable_scheduleCallback(priorities.unstable_Idle, callback);
  },
  cancelCallback(callback: DeferredCallback): void {
    Scheduler.unstable_cancelCallback(callback);
  },
  scheduleDelayedCallback_DO_NOT_USE(priority: any, delay: number, callback: Callback): DeferredCallback {
    return Scheduler.unstable_scheduleCallback(priority, callback, { delay });
  },
  cancelDelayedCallback_DO_NOT_USE(callback: DeferredCallback): void {
    Scheduler.unstable_cancelCallback(callback);
  },
  startEventProfiling(): void {
    const { startLoggingProfilingEvents } = Scheduler.unstable_Profiling ?? {};
    if (typeof startLoggingProfilingEvents === 'function') {
      startLoggingProfilingEvents();
    }
  },
  stopEventProfiling(): void {
    const { stopLoggingProfilingEvents } = Scheduler.unstable_Profiling ?? {};
    if (typeof stopLoggingProfilingEvents === 'function') {
      stopLoggingProfilingEvents();
    }
  },
  makeSchedulerGlobalEntry(frameRate?: number, enableProfiling: boolean = false): void {
    if (frameRate != null) {
      Scheduler.unstable_forceFrameRate(frameRate);
    }
    if (enableProfiling) {
      this.startEventProfiling();
    }
    globalThis.ScheduleJSWork = (...args: any[]) => {
      if (isInCallbackExecution) {
        Scheduler.unstable_runWithPriority(priorities.unstable_Immediate, () => args[0](...args.slice(1)));
      } else {
        this.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(() => {
          isInCallbackExecution = true;
          try {
            args[0](...args.slice(1));
          } finally {
            isInCallbackExecution = false;
          }
        });
      }
    };
  },
};

export default JSScheduler;
