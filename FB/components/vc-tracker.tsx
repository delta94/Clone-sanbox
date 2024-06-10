__d(
  "vc-tracker",
  [
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionAttributes",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionTracing",
    "VisualCompletionUtil",
    "currentVCTraces",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "performanceNowSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    e = {
      findVCTraces: (a = d("VisualCompletionUtil")).findVCTraces,
      getCurrentVCTraces: (b = d("currentVCTraces")).getCurrentVCTraces,
      getCurrentNavigationVCTrace: b.getCurrentNavigationVCTrace,
      getLastNavigationVCReport: b.getLastNavigationVCReport,
      ignoreElement: a.ignoreElement,
      setCurrentNavigationVCTrace: b.setCurrentNavigationVCTrace,
      setLastNavigationVCReport: b.setLastNavigationVCReport,
      performanceAbsoluteNow: h || (h = c("performanceAbsoluteNow")),
      performanceNavigationStart: c("performanceNavigationStart"),
      performanceNow: c("performanceNowSinceAppStart"),
      trimHash: d("VisualCompletionUtil").trimHash,
      trackLoadingState: d("VisualCompletionUtil").trackLoadingState,
      trackImageLoad: d("VisualCompletionUtil").trackImageLoad,
      VisibilityState: {
        canUseVisibilityAPI: d("VisibilityAPI").canUseVisibilityAPI,
        subscribe: d("VisibilityState").subscribe,
        getHiddenSpans: d("VisibilityState").getHiddenSpans,
        wasHidden: d("VisibilityState").wasHidden,
      },
      VisualCompletionAttributes: c("VisualCompletionAttributes"),
      VisualCompletionConstants: i || (i = c("VisualCompletionConstants")),
      VisualCompletionTracing: c("VisualCompletionTracing"),
      VisualCompletionTraceObserver: c("VisualCompletionTraceObserver"),
    };
    g["default"] = e;
  },
  98
);

import VisibilityAPI from "VisibilityAPI";
import VisibilityState from "VisibilityState";
import VisualCompletionAttributes from "VisualCompletionAttributes";
import VisualCompletionConstants from "VisualCompletionConstants";
import VisualCompletionTraceObserver from "VisualCompletionTraceObserver";
import VisualCompletionTracing from "VisualCompletionTracing";
import VisualCompletionUtil from "VisualCompletionUtil";
import currentVCTraces from "currentVCTraces";
import performanceAbsoluteNow from "performanceAbsoluteNow";
import performanceNavigationStart from "performanceNavigationStart";
import performanceNowSinceAppStart from "performanceNowSinceAppStart";

const vcTracker = {
  findVCTraces: VisualCompletionUtil.findVCTraces,
  getCurrentVCTraces: currentVCTraces.getCurrentVCTraces,
  getCurrentNavigationVCTrace: currentVCTraces.getCurrentNavigationVCTrace,
  getLastNavigationVCReport: currentVCTraces.getLastNavigationVCReport,
  ignoreElement: VisualCompletionUtil.ignoreElement,
  setCurrentNavigationVCTrace: currentVCTraces.setCurrentNavigationVCTrace,
  setLastNavigationVCReport: currentVCTraces.setLastNavigationVCReport,
  performanceAbsoluteNow,
  performanceNavigationStart,
  performanceNow: performanceNowSinceAppStart,
  trimHash: VisualCompletionUtil.trimHash,
  trackLoadingState: VisualCompletionUtil.trackLoadingState,
  trackImageLoad: VisualCompletionUtil.trackImageLoad,
  VisibilityState: {
    canUseVisibilityAPI: VisibilityAPI.canUseVisibilityAPI,
    subscribe: VisibilityState.subscribe,
    getHiddenSpans: VisibilityState.getHiddenSpans,
    wasHidden: VisibilityState.wasHidden,
  },
  VisualCompletionAttributes,
  VisualCompletionConstants,
  VisualCompletionTracing,
  VisualCompletionTraceObserver,
};

export default vcTracker;
