__d("SchedulerFb-Internals_DO_NOT_USE", ["Scheduler-dev.classic", "Scheduler-profiling.classic", "SchedulerPostTask-dev.classic", "SchedulerPostTask-profiling.classic", "ifRequireable", "qex", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    "use strict";
    c = a.scheduler !== void 0 && a.scheduler.postTask !== void 0 && b("qex")._("420");
    a.requestAnimationFrame === void 0 && (a.requestAnimationFrame = b("requestAnimationFramePolyfill"));
    var g;
    c ? g = b("SchedulerPostTask-profiling.classic") : g = b("Scheduler-profiling.classic");
    e.exports = {
        unstable_ImmediatePriority: g.unstable_ImmediatePriority,
        unstable_UserBlockingPriority: g.unstable_UserBlockingPriority,
        unstable_NormalPriority: g.unstable_NormalPriority,
        unstable_LowPriority: g.unstable_LowPriority,
        unstable_IdlePriority: g.unstable_IdlePriority,
        unstable_getCurrentPriorityLevel: g.unstable_getCurrentPriorityLevel,
        unstable_runWithPriority: g.unstable_runWithPriority,
        unstable_now: g.unstable_now,
        unstable_scheduleCallback: function(a, c, d) {
            var e = b("ifRequireable")("TimeSlice", function(a) {
                return a.guard(c, "unstable_scheduleCallback", {
                    propagationType: a.PropagationType.CONTINUATION,
                    registerCallStack: !0
                })
            }, function() {
                return c
            });
            return g.unstable_scheduleCallback(a, e, d)
        },
        unstable_cancelCallback: function(a) {
            return g.unstable_cancelCallback(a)
        },
        unstable_wrapCallback: function(a) {
            var c = b("ifRequireable")("TimeSlice", function(b) {
                return b.guard(a, "unstable_wrapCallback", {
                    propagationType: b.PropagationType.CONTINUATION,
                    registerCallStack: !0
                })
            }, function() {
                return a
            });
            return g.unstable_wrapCallback(c)
        },
        unstable_pauseExecution: function() {
            return g.unstable_pauseExecution()
        },
        unstable_continueExecution: function() {
            return g.unstable_continueExecution()
        },
        unstable_shouldYield: g.unstable_shouldYield,
        unstable_requestPaint: g.unstable_requestPaint,
        unstable_forceFrameRate: g.unstable_forceFrameRate,
        unstable_Profiling: g.unstable_Profiling
    }
}
), null);




import SchedulerDevClassic from 'Scheduler-dev.classic';
import SchedulerProfilingClassic from 'Scheduler-profiling.classic';
import SchedulerPostTaskDevClassic from 'SchedulerPostTask-dev.classic';
import SchedulerPostTaskProfilingClassic from 'SchedulerPostTask-profiling.classic';
import ifRequireable from 'ifRequireable';
import qex from 'qex';
import requestAnimationFramePolyfill from 'requestAnimationFramePolyfill';

declare global {
  interface Window {
    scheduler?: any;
    requestAnimationFrame?: any;
  }
}

const isPostTaskSchedulerAvailable: boolean =
  window.scheduler !== undefined &&
  window.scheduler.postTask !== undefined &&
  qex._("420");

if (window.requestAnimationFrame === undefined) {
  window.requestAnimationFrame = requestAnimationFramePolyfill;
}

let scheduler;
if (isPostTaskSchedulerAvailable) {
  scheduler = SchedulerPostTaskProfilingClassic;
} else {
  scheduler = SchedulerProfilingClassic;
}

const SchedulerFbInternals = {
  unstable_ImmediatePriority: scheduler.unstable_ImmediatePriority,
  unstable_UserBlockingPriority: scheduler.unstable_UserBlockingPriority,
  unstable_NormalPriority: scheduler.unstable_NormalPriority,
  unstable_LowPriority: scheduler.unstable_LowPriority,
  unstable_IdlePriority: scheduler.unstable_IdlePriority,
  unstable_getCurrentPriorityLevel: scheduler.unstable_getCurrentPriorityLevel,
  unstable_runWithPriority: scheduler.unstable_runWithPriority,
  unstable_now: scheduler.unstable_now,
  unstable_scheduleCallback: (priority: any, callback: Function, options?: any) => {
    const wrappedCallback = ifRequireable('TimeSlice', (TimeSlice: any) => {
      return TimeSlice.guard(callback, 'unstable_scheduleCallback', {
        propagationType: TimeSlice.PropagationType.CONTINUATION,
        registerCallStack: true,
      });
    }, () => callback);
    return scheduler.unstable_scheduleCallback(priority, wrappedCallback, options);
  },
  unstable_cancelCallback: (callback: any) => {
    return scheduler.unstable_cancelCallback(callback);
  },
  unstable_wrapCallback: (callback: Function) => {
    const wrappedCallback = ifRequireable('TimeSlice', (TimeSlice: any) => {
      return TimeSlice.guard(callback, 'unstable_wrapCallback', {
        propagationType: TimeSlice.PropagationType.CONTINUATION,
        registerCallStack: true,
      });
    }, () => callback);
    return scheduler.unstable_wrapCallback(wrappedCallback);
  },
  unstable_pauseExecution: scheduler.unstable_pauseExecution,
  unstable_continueExecution: scheduler.unstable_continueExecution,
  unstable_shouldYield: scheduler.unstable_shouldYield,
  unstable_requestPaint: scheduler.unstable_requestPaint,
  unstable_forceFrameRate: scheduler.unstable_forceFrameRate,
  unstable_Profiling: scheduler.unstable_Profiling,
};

export default SchedulerFbInternals;
