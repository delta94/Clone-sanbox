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


import React, { useCallback, useContext, useLayoutEffect, useMemo, useRef } from 'react';
import { getStyleProperty } from './getStyleProperty'; 
import { HiddenSubtreePassiveContext } from './HiddenSubtreePassiveContext';
import { CometVisibilityUserActivityMonitor } from './CometVisibilityUserActivityMonitor';
import { Run } from './Run';
import { getIntersectionMarginFromViewportMargin } from './getIntersectionMarginFromViewportMargin';
import { intersectionObserverEntryIsIntersecting } from './intersectionObserverEntryIsIntersecting'; 
import { nullIntersectionObserverEntryLogger } from './nullIntersectionObserverEntryLogger';
import { gkx } from './gkx';
import { useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED } from './useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED';
import { useIntersectionObserver } from './useIntersectionObserver';
import { BaseViewportMarginsContext } from './BaseViewportMarginsContext';

interface Options {
  hiddenWhenZeroArea?: boolean;
  hiddenWhenCSSStyleHidden?: boolean;
  isEntryInViewport?: (entry: IntersectionObserverEntry) => boolean;
  activityMonitorOverride?: CometVisibilityUserActivityMonitor; 
  root?: Element | null;
  rootMargin?: string;
}

interface Props {
    onHidden?: any;
    onIntersection?: any;
    onVisibilityDurationUpdated?: any;
    onVisible?: any; 
    threshold?: any;
    options: Options
}

interface ViewportMargins {
  top: number;
  bottom: number;
  left: number;
  right: number; 
}

export default function useViewportDuration(props: Props) {
  const {
    onHidden,
    onIntersection,
    onVisibilityDurationUpdated,
    onVisible,
    threshold,
    options
  } = props;

  const hiddenWhenZeroArea = options.hiddenWhenZeroArea ?? false;
  const hiddenWhenCSSStyleHidden = options.hiddenWhenCSSStyleHidden ?? false;
  const isEntryInViewport = options.isEntryInViewport ?? intersectionObserverEntryIsIntersecting;

  const ref = useRef<number | null>(null);
  const inViewportRef = useRef(false);
  const activityMonitorUnsubscribeRef = useRef<() => void | null>(null);
  const hiddenSubtreeUnsubscribeRef = useRef<() => void | null>(null);
  const beforeUnloadUnsubscribeRef = useRef<() => void | null>(null);

  const hiddenSubtreeContext = useContext(HiddenSubtreePassiveContext);

  const activityMonitor = options.activityMonitorOverride ?? CometVisibilityUserActivityMonitor;

  const getHiddenReason = useCallback((entry: IntersectionObserverEntry) => {
    if (activityMonitor && !activityMonitor.isUserActive()) {
      return 'USER_INACTIVE';
    }

    const hiddenState = hiddenSubtreeContext.getCurrentState();
    if (hiddenState.hidden) {
      return 'PUSH_VIEW_HIDDEN'; 
    }

    if (hiddenState.backgrounded) {
      return 'BACKGROUNDED';
    }

    if (inViewportRef.current === false) {
      return 'NOT_IN_VIEWPORT';
    }

    if (hiddenWhenZeroArea === true && elementHasZeroArea(entry)) {
      return 'TARGET_SIZE_0';
    }

    if (hiddenWhenCSSStyleHidden === true) {
      const reason = getHiddenCSSReason(entry);
      if (reason !== null) {
        return reason;
      }
    }

    return null;
  }, [activityMonitor, hiddenSubtreeContext, hiddenWhenCSSStyleHidden, hiddenWhenZeroArea]);

  const isVisible = useCallback((entry: IntersectionObserverEntry) => {
    return getHiddenReason(entry) === null;
  }, [getHiddenReason]);

  const handleChange = useCallback((reason: string | null, entry: IntersectionObserverEntry | null, isCurrentlyVisible: boolean) => {
    const wasVisible = ref.current != null;

    if (!wasVisible && isCurrentlyVisible) {
      const now = Date.now();
      ref.current = now;
      if (onVisible != null && entry != null) {
        onVisible({entry, visibleTime: now}); 
      }
    } else if (wasVisible && !isCurrentlyVisible) {
      const visibleStartTime = ref.current ?? 0;
      const now = Date.now();
      if (onHidden != null) {
        const hiddenReason = reason || getHiddenReason(entry) || 'UNKNOWN';
        onHidden({
          entry,
          hiddenReason,
          hiddenTime: now, 
          visibleDuration: now - visibleStartTime,
          visibleTime: visibleStartTime
        });
      }
      ref.current = null; 
    }
  }, [getHiddenReason, onHidden, onVisibilityDurationUpdated, onVisible]);

  const setHandleChange = useRef(handleChange);
  useLayoutEffect(() => {
    setHandleChange.current = handleChange;
  }, [handleChange]);

  useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED(() => {
    return () => {
      setHandleChange.current('COMPONENT_UNMOUNTED', null, false);
      if (activityMonitorUnsubscribeRef.current != null) {
        activityMonitorUnsubscribeRef.current();
        activityMonitorUnsubscribeRef.current = null;
      }
      if (hiddenSubtreeUnsubscribeRef.current != null) {
        hiddenSubtreeUnsubscribeRef.current();
        hiddenSubtreeUnsubscribeRef.current = null;  
      }
      if (beforeUnloadUnsubscribeRef.current != null) {
        beforeUnloadUnsubscribeRef.current();
        beforeUnloadUnsubscribeRef.current = null;
      }
    };
  }, []);

  const handleIntersection = useCallback((entry: IntersectionObserverEntry) => {
    nullIntersectionObserverEntryLogger(entry, 'IntersectionObserverEntry is null. num_arguments=' + arguments.length);

    const isCurrentlyVisible = inViewportRef.current = isEntryInViewport(entry);

    if (onIntersection != null) {
      onIntersection({entry, isElementVisible: isVisible(entry)});
    }

    if (activityMonitorUnsubscribeRef.current == null) {
      if (isCurrentlyVisible) {
        activityMonitorUnsubscribeRef.current = activityMonitor && activityMonitor.subscribe(() => {
          setHandleChange.current('USER_INACTIVE', entry, isVisible(entry)); 
        });
        
        hiddenSubtreeUnsubscribeRef.current = hiddenSubtreeContext.subscribeToChanges(state => {
          setHandleChange.current(state.hidden ? 'PUSH_VIEW_HIDDEN' : 'BACKGROUNDED', entry, isVisible(entry));
        });

        if (gkx('5223')) {
          if (beforeUnloadUnsubscribeRef.current != null) {
            beforeUnloadUnsubscribeRef.current();  
          }
          beforeUnloadUnsubscribeRef.current = Run.onBeforeUnload(() => {
            setHandleChange.current('PAGE_UNLOAD', null, false);
          }, false);
        }
      } else {
        if (activityMonitorUnsubscribeRef.current != null) {
          activityMonitorUnsubscribeRef.current();
          activityMonitorUnsubscribeRef.current = null;
        }
        if (hiddenSubtreeUnsubscribeRef.current != null) {
          hiddenSubtreeUnsubscribeRef.current();
          hiddenSubtreeUnsubscribeRef.current = null;
        }
        if (beforeUnloadUnsubscribeRef.current != null) {
          beforeUnloadUnsubscribeRef.current();
          beforeUnloadUnsubscribeRef.current = null;
        }
      }
    }

    setHandleChange.current(null, entry, isVisible(entry));
  }, [isVisible, activityMonitor, hiddenSubtreeContext, isEntryInViewport, onIntersection, setHandleChange.current]);

  const viewportMarginsContext = useContext(BaseViewportMarginsContext);

  const rootMargin: ViewportMargins = useMemo(() => {
    return {
      bottom: viewportMarginsContext.bottom + 1,
      left: viewportMarginsContext.left + 1,
      right: viewportMarginsContext.right + 1,
      top: viewportMarginsContext.top + 1
    };
  }, [viewportMarginsContext.bottom, viewportMarginsContext.left, viewportMarginsContext.right, viewportMarginsContext.top]);

  const root = options.root ?? null;
  const margin = options.rootMargin ?? getIntersectionMarginFromViewportMargin(rootMargin);

  useIntersectionObserver(handleIntersection, {
    root,
    rootMargin: margin,
    threshold
  });
}

function getHiddenCSSReason(entry: IntersectionObserverEntry) {
  if (entry.target == null) {
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

function elementHasZeroArea(entry: IntersectionObserverEntry) {
  return entry.boundingClientRect != null && 
    (entry.boundingClientRect.height === 0 || entry.boundingClientRect.width === 0);
}