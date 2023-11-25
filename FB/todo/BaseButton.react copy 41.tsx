__d("useVisibilityObserver", ["useViewportDuration"], (function(a, b, c, d, e, f, g) {
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
        var b = a.onHidden
          , d = a.onIntersection
          , e = a.onVisibilityDurationUpdated
          , f = a.onVisible;
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
}
), 98);


import { useViewportDuration } from 'useViewportDuration'; 

const LITE_THRESHOLD = 0;
const MODERATE_THRESHOLD = [0, 0.25, 0.5, 0.75, 1]; 
const EXPENSIVE_THRESHOLD = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1];

const Thresholds = {
  EXPENSIVE: EXPENSIVE_THRESHOLD,
  LITE: LITE_THRESHOLD,
  MODERATE: MODERATE_THRESHOLD  
};

interface Options {
  thresholdOverride?: keyof typeof Thresholds;
}

function useVisibilityObserver({
  onHidden,
  onIntersection,
  onVisibilityDurationUpdated,
  onVisible,
  options  
}: {
  onHidden?: () => void;
  onIntersection?: IntersectionObserverCallback;
  onVisibilityDurationUpdated?: () => void;
  onVisible?: () => void;
  options?: Options;
}) {

  return useViewportDuration({
    onHidden,
    onIntersection,
    onVisibilityDurationUpdated,
    onVisible,
    options,
    threshold: Thresholds[options?.thresholdOverride ?? 'LITE']
  });
}

export default useVisibilityObserver;