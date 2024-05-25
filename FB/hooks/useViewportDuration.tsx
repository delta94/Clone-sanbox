__d("useViewportDuration", ["BaseViewportMarginsContext", "CometVisibilityUserActivityMonitor", "HiddenSubtreePassiveContext", "Run", "getIntersectionMarginFromViewportMargin", "getStyleProperty", "gkx", "intersectionObserverEntryIsIntersecting", "nullIntersectionObserverEntryLogger", "react", "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", "useIntersectionObserver"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h;
  b = h || d("react");
  var i = b.useCallback,
    j = b.useContext,
    k = b.useLayoutEffect,
    l = b.useMemo,
    m = b.useRef,
    n = function (a) {
      if (a.target == null) return null;
      if (c("getStyleProperty")(a.target, "opacity") === "0") return "TARGET_TRANSPARENT";
      return c("getStyleProperty")(a.target, "visibility") === "hidden" ? "TARGET_HIDDEN" : null
    },
    o = function (a) {
      return a.boundingClientRect && (a.boundingClientRect.height === 0 || a.boundingClientRect.width === 0)
    };

  function a(a) {
    var b, e, f, g = arguments,
      h, p, q = a.onHidden,
      r = a.onIntersection,
      s = a.onVisibilityDurationUpdated,
      t = a.onVisible,
      u = a.options,
      v = u === void 0 ? {} : u,
      w = a.threshold,
      x = (b = v.hiddenWhenZeroArea) != null ? b : !1,
      y = (e = v.hiddenWhenCSSStyleHidden) != null ? e : !1,
      z = (f = v.isEntryInViewport) != null ? f : c("intersectionObserverEntryIsIntersecting"),
      A = m(null),
      B = m(!1),
      C = m(null),
      D = m(null),
      E = m(null),
      F = j(c("HiddenSubtreePassiveContext")),
      G = v.activityMonitorOverride !== void 0 ? v.activityMonitorOverride : c("CometVisibilityUserActivityMonitor"),
      H = i(function (a) {
        if (G && !G.isUserActive()) return "USER_INACTIVE";
        var b = F.getCurrentState();
        if (b.hidden) return "PUSH_VIEW_HIDDEN";
        if (b.backgrounded) return "BACKGROUNDED";
        if (B.current === !1) return "NOT_IN_VIEWPORT";
        if (x === !0 && o(a)) return "TARGET_SIZE_0";
        if (y === !0) {
          b = n(a);
          if (b !== null) return b
        }
        return null
      }, [G, F, y, x]),
      I = i(function (a) {
        return H(a) === null
      }, [H]),
      J = i(function (a, b, c) {
        var d = A.current != null;
        if (!d && c) {
          var e = Date.now();
          A.current = e;
          t != null && b != null && t({
            entry: b,
            visibleTime: e
          })
        } else if (d && !c) {
          d = (e = A.current) != null ? e : 0;
          c = Date.now();
          if (q != null) {
            e = a || b && H(b) || "UNKNOWN";
            q({
              entry: b,
              hiddenReason: e,
              hiddenTime: c,
              visibleDuration: c - d,
              visibleTime: d
            })
          }
          A.current = null
        }
      }, [H, q, s, t]),
      K = m(J);
    k(function () {
      K.current = J
    }, [J]);
    c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function () {
      return function () {
        K.current("COMPONENT_UNMOUNTED", null, !1), C.current != null && (C.current(), C.current = null), E.current != null && (E.current.remove(), E.current = null), D.current != null && (D.current.remove(), D.current = null)
      }
    }, []);
    var L = i(function (a) {
        c("nullIntersectionObserverEntryLogger")(a, "IntersectionObserverEntry is null. num_arguments=" + g.length);
        var b = B.current = z(a);
        r && r({
          entry: a,
          isElementVisible: I(a)
        });
        C.current == null ? b && (C.current = G && G.subscribe(function (b) {
          return K.current("USER_INACTIVE", a, I(a))
        }), E.current = F.subscribeToChanges(function (b) {
          return K.current(b.hidden ? "PUSH_VIEW_HIDDEN" : "BACKGROUNDED", a, I(a))
        }), c("gkx")("5223") && D.current != null && D.current.remove(), D.current = d("Run").onBeforeUnload(function (a) {
          K.current("PAGE_UNLOAD", null, !1)
        }, !1)) : b || (C.current != null && (C.current(), C.current = null), E.current && (E.current.remove(), E.current = null), D.current != null && (D.current.remove(), D.current = null));
        K.current(null, a, I(a))
      }, [I, G, F, z, r]),
      M = j(c("BaseViewportMarginsContext")),
      N = l(function () {
        return {
          bottom: M.bottom + 1,
          left: M.left + 1,
          right: M.right + 1,
          top: M.top + 1
        }
      }, [M.bottom, M.left, M.right, M.top]),
      O = (h = v.root) != null ? h : null,
      P = (p = v.rootMargin) != null ? p : c("getIntersectionMarginFromViewportMargin")(N);
    return c("useIntersectionObserver")(L, {
      root: O,
      rootMargin: P,
      threshold: w
    })
  }
  g["default"] = a
}), 98);


import { useCallback, useContext, useLayoutEffect, useMemo, useRef } from 'react';
import { HiddenSubtreePassiveContext, BaseViewportMarginsContext, CometVisibilityUserActivityMonitor, Run, getIntersectionMarginFromViewportMargin, getStyleProperty, gkx, intersectionObserverEntryIsIntersecting, nullIntersectionObserverEntryLogger, useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED, useIntersectionObserver } from 'your-imports'; // Replace 'your-imports' with correct import paths

type VisibilityReason =
  | 'USER_INACTIVE'
  | 'PUSH_VIEW_HIDDEN'
  | 'BACKGROUNDED'
  | 'NOT_IN_VIEWPORT'
  | 'TARGET_SIZE_0'
  | 'TARGET_TRANSPARENT'
  | 'TARGET_HIDDEN'
  | 'UNKNOWN'
  | 'COMPONENT_UNMOUNTED'
  | 'PAGE_UNLOAD';

interface UseViewportDurationOptions {
  hiddenWhenZeroArea?: boolean;
  hiddenWhenCSSStyleHidden?: boolean;
  isEntryInViewport?: (entry: IntersectionObserverEntry) => boolean;
  activityMonitorOverride?: typeof CometVisibilityUserActivityMonitor | undefined;
  root?: HTMLElement | null;
  rootMargin?: string;
}

interface UseViewportDurationProps {
  onHidden?: (data: any) => void;
  onIntersection?: (data: any) => void;
  onVisibilityDurationUpdated?: (data: any) => void;
  onVisible?: (data: any) => void;
  options?: UseViewportDurationOptions;
  threshold?: number | number[];
}

interface ActivityMonitor {
  isUserActive(): boolean;
  subscribe(callback: () => void): () => void; 
}

function isSizeZero(entry: IntersectionObserverEntry): boolean {
  return !!entry.boundingClientRect && 
    (entry.boundingClientRect.height === 0 || entry.boundingClientRect.width === 0);
}

function getHiddenReason(entry: IntersectionObserverEntry | null): string | null {

  if (!entry?.target) {
    return null;
  }

  if (getStyleProperty(entry.target, 'opacity') === '0') {
    return 'TARGET_TRANSPARENT';
  }

  if (getStyleProperty(entry.target, 'visibility') === 'hidden') {
    return 'TARGET_HIDDEN';
  }

  return null;

}

function useViewportDuration(props: UseViewportDurationProps): IntersectionObserver | undefined {
  const {
    onHidden,
    onIntersection,
    onVisibilityDurationUpdated,
    onVisible,
    options = {},
    threshold
  } = props;

  const {
    hiddenWhenZeroArea = false,
    hiddenWhenCSSStyleHidden = false,
    isEntryInViewport = intersectionObserverEntryIsIntersecting,
  } = options;

  const visibleRef = useRef<number | null>(null);
  const inViewportRef = useRef(false);
  const unsubscribeActivityMonitorRef = useRef<() => void | null>(null);
  const unsubscribeHiddenPassiveContextRef = useRef<() => void | null>(null);
  const unsubscribeBeforeUnloadRef = useRef<() => void | null>(null);
  const callbackRef = useRef<(...args: any[]) => void>(() => {});

  const hiddenSubtreePassiveContext = useContext(HiddenSubtreePassiveContext);
  const baseViewportMarginsContext = useContext(BaseViewportMarginsContext);
  
  const activityMonitor: ActivityMonitor = 
  options.activityMonitorOverride ?? CometVisibilityUserActivityMonitor;

  const hiddenReasonCallback = useCallback((entry: IntersectionObserverEntry) => {
    if (activityMonitor && !activityMonitor.isUserActive()) {
      return 'USER_INACTIVE';
    }
    
    const state = hiddenSubtreePassiveContext.getCurrentState();
    if (state.hidden) {
      return 'PUSH_VIEW_HIDDEN'; 
    }
    
    if (state.backgrounded) {
      return 'BACKGROUNDED';
    }
    
    if (inViewportRef.current === false) {
      return 'NOT_IN_VIEWPORT';
    }
    
    if (hiddenWhenZeroArea && isSizeZero(entry)) {
      return 'TARGET_SIZE_0';
    }
    
    if (hiddenWhenCSSStyleHidden) {
      const reason = getHiddenReason(entry);
      if (reason !== null) {
        return reason;
      }
    }
    
    return null;

  }, [activityMonitor, hiddenSubtreePassiveContext, hiddenWhenZeroArea, hiddenWhenCSSStyleHidden]);

  const isEntryVisible = useCallback(
    (entry: IntersectionObserverEntry) => {
      return hiddenReasonCallback(entry) === null;
    }, 
    [hiddenReasonCallback]
  );

  const handleVisibilityChange = useCallback(
    (
      reason: string | null,
      entry: IntersectionObserverEntry | null,
      isVisible: boolean
    ) => {
  
      const wasVisible = visibleRef.current !== null;
  
      if (!wasVisible && isVisible) {
        
        const now = Date.now();
  
        visibleRef.current = now;
  
        if (onVisible && entry) {
          onVisible({
            entry,
            visibleTime: now  
          });
        }
  
      } else if (wasVisible && !isVisible) {
  
        const visibleTime = visibleRef.current ?? 0;
        const now = Date.now();
  
        if (onHidden) {
          const hiddenReason:VisibilityReason = reason ?? hiddenReasonCallback(entry) ?? 'UNKNOWN';
  
          onHidden({
            entry, 
            hiddenReason,
            hiddenTime: now,
            visibleDuration: now - visibleTime,
            visibleTime        
          });
        }
  
        visibleRef.current = null;
  
      }
  
    },
    [hiddenReasonCallback, onHidden, onVisible, onVisibilityDurationUpdated]  
  );

  useLayoutEffect(() => {
    callbackRef.current = handleVisibilityChange; 
  }, [handleVisibilityChange]);

  useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED(() => {
  
    return () => {
  
      callbackRef.current('COMPONENT_UNMOUNTED', null, false);
  
      if (unsubscribeActivityMonitorRef.current) {
        unsubscribeActivityMonitorRef.current();
        unsubscribeActivityMonitorRef.current = null;
      }
  
      if (unsubscribeHiddenPassiveContextRef.current) {
        unsubscribeHiddenPassiveContextRef.remove();
        unsubscribeHiddenPassiveContextRef.current = null; 
      }
  
      if (unsubscribeBeforeUnloadRef.current) {
        unsubscribeBeforeUnloadRef.remove();
        unsubscribeBeforeUnloadRef.current = null;
      }
  
    };
  
  }, []);

  const handleIntersection = useCallback(
    (entry: IntersectionObserverEntry) => {
  
      nullIntersectionObserverEntryLogger(entry, `IntersectionObserverEntry is null. num_arguments=${g.length}`)
  
      const inViewport = inViewportRef.current = isEntryInViewport(entry);
  
      if (onIntersection) {
        onIntersection({
          entry,
          isElementVisible: isEntryVisible(entry) 
        });
      }
  
      if (!unsubscribeActivityMonitorRef.current) {
        if (activityMonitor) {
          unsubscribeActivityMonitorRef.current = activityMonitor.subscribe(() => {
            callbackRef.current('USER_INACTIVE', entry, isEntryVisible(entry));
          });
        }
  
        unsubscribeHiddenPassiveContextRef.current = hiddenSubtreePassiveContext.subscribeToChanges(state => {
          callbackRef.current(
            state.hidden ? 'PUSH_VIEW_HIDDEN' : 'BACKGROUNDED',  
            entry,
            isEntryVisible(entry)
          );
        });
  
        // GKX check
  
        unsubscribeBeforeUnloadRef.current = Run.onBeforeUnload(() => {
          callbackRef.current('PAGE_UNLOAD', null, false);
        }, false);
  
      } else if (!inViewport) {
  
        if (unsubscribeActivityMonitorRef.current) {
          unsubscribeActivityMonitorRef.current();
          unsubscribeActivityMonitorRef.current = null;
        }
        if (unsubscribeHiddenPassiveContextRef.current) {
          unsubscribeHiddenPassiveContextRef.current.remove();
          unsubscribeHiddenPassiveContextRef.current = null; 
        }
        if (unsubscribeBeforeUnloadRef.current) {
          unsubscribeBeforeUnloadRef.current.remove();
          unsubscribeBeforeUnloadRef.current = null; 
        }
  
      }
  
      callbackRef.current(null, entry, isEntryVisible(entry));
  
    }, 
    [callbackRef, options.isEntryInViewport, isEntryVisible, activityMonitor, HiddenSubtreePassiveContext]
  );

  const expandedMargins = useMemo(() => {
    return {
      bottom: baseViewportMarginsContext.bottom + 1,
      left: baseViewportMarginsContext.left + 1, 
      right: baseViewportMarginsContext.right + 1,
      top: baseViewportMarginsContext.top + 1
    };
  }, [baseViewportMarginsContext.bottom, baseViewportMarginsContext.left, baseViewportMarginsContext.right, baseViewportMarginsContext.top]);
  
  const root = options.root ?? null;
  const rootMargin = options.rootMargin ?? getIntersectionMarginFromViewportMargin(expandedMargins);


  return useIntersectionObserver(handleIntersection, {
    root,
    rootMargin,
    threshold: threshold,
  });
}

export default useViewportDuration;
