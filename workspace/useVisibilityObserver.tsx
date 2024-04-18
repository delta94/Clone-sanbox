__d("useVisibilityObserver", ["useViewportDuration"], (function (a, b, c, d, e, f, g) {
  "use strict";
  b = 0;
  d = [0, .25, .5, .75, 1];
  e = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1];
  var h = {
    EXPENSIVE: e,
    LITE: b,
    MODERATE: d
  };

  function a(a) {
    var b = a.onHidden,
      d = a.onIntersection,
      e = a.onVisibilityDurationUpdated,
      f = a.onVisible;
    a = a.options;
    return c("useViewportDuration")({
      onHidden: b,
      onIntersection: d,
      onVisibilityDurationUpdated: e,
      onVisible: f,
      options: a,
      threshold: h[(b = a == null ? void 0 : a.thresholdOverride) != null ? b : "LITE"]
    })
  }
  g["default"] = a
}), 98);