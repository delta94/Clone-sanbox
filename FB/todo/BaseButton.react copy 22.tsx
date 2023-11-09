__d("SchedulerFeatureFlags", ["gkx"], (function(a, b, c, d, e, f, g) {
    a = !0;
    b = c("gkx")("1099893");
    d = !0;
    e = !0;
    f = 5;
    c = 10;
    var h = 10;
    g.enableSchedulerDebugging = a;
    g.enableProfiling = b;
    g.enableIsInputPending = d;
    g.enableIsInputPendingContinuous = e;
    g.frameYieldMs = f;
    g.continuousYieldMs = c;
    g.maxYieldMs = h
}
), 98);
__d("Scheduler-dev.classic", ["SchedulerFeatureFlags"], (function(a, b, c, d, e, f) {
    "use strict"
}
), null);


import gkx from 'gkx';

const enableSchedulerDebugging: boolean = true;
const enableProfiling: boolean = false;
const enableIsInputPending: boolean = true;
const enableIsInputPendingContinuous: boolean = true;
const frameYieldMs: number = 5;
const continuousYieldMs: number = 10;
const maxYieldMs: number = 10;

export {
  enableSchedulerDebugging,
  enableProfiling,
  enableIsInputPending,
  enableIsInputPendingContinuous,
  frameYieldMs,
  continuousYieldMs,
  maxYieldMs,
};
