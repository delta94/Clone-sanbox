__d("useIntersectionObserver", ["DOMRectReadOnly", "ExecutionEnvironment", "JSScheduler", "observeIntersection", "react", "useDynamicCallbackDANGEROUS"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    i || (i = d("react"));
    e = i;
    var k = e.useCallback,
        l = e.useLayoutEffect,
        m = e.useRef,
        n = {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        },
        o = c("DOMRectReadOnly").fromRect(),
        p = {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0
        };

    function q(a) {
        var b;
        if (a == null) b = n;
        else if (typeof a === "string") return a;
        else typeof a === "number" ? b = {
            bottom: a,
            left: a,
            right: a,
            top: a
        } : b = babelHelpers["extends"]({}, n, a);
        a = b;
        b = a.bottom;
        var c = a.left,
            d = a.right;
        a = a.top;
        return a + "px " + d + "px " + b + "px " + c + "px"
    }

    function r(a, b, d, e) {
        var f = b.root,
            g = b.rootMargin,
            h = b.threshold;
        f = f === null ? null : f();
        var i = a == null || a.element !== d || a.onIntersect !== e || a.observedRoot !== f || a.rootMargin !== g || a.threshold !== h;
        if (i) {
            a && a.subscription.remove();
            i = c("observeIntersection")(d, e, {
                root: f,
                rootMargin: q(g),
                threshold: h
            });
            return babelHelpers["extends"]({}, b, {
                element: d,
                observedRoot: f,
                onIntersect: e,
                subscription: i
            })
        }
        return a
    }

    function a(a, b) {
        var e = b.root,
            f = b.rootMargin,
            g = b.threshold,
            h = m(null),
            i = m(null),
            n = m(null),
            q = m(null),
            s = m(!1),
            t = c("useDynamicCallbackDANGEROUS")(a);
        b = k(function (a) {
            if (h.current === a) return;
            if (h.current != null && a == null) {
                q.current != null && (j || (j = d("JSScheduler"))).cancelCallback(q.current);
                var b = h.current;
                q.current = (j || (j = d("JSScheduler"))).scheduleImmediatePriCallback(function () {
                    h.current === null && s.current === !1 && t({
                        boundingClientRect: p,
                        intersectionRatio: 0,
                        intersectionRect: p,
                        isIntersecting: !1,
                        isVisible: !1,
                        rootBounds: o,
                        target: b,
                        time: Date.now()
                    }), q.current = null
                })
            }
            h.current = a;
            i.current != null && (i.current.subscription.remove(), i.current = null);
            n.current != null && (j || (j = d("JSScheduler"))).cancelCallback(n.current);
            n.current = (j || (j = d("JSScheduler"))).scheduleImmediatePriCallback(function () {
                h.current != null && (i.current = r(i.current, {
                    root: e,
                    rootMargin: f,
                    threshold: g
                }, h.current, t)), n.current = null
            })
        }, [t, e, f, g]);
        l(function () {
            n.current != null && (j || (j = d("JSScheduler"))).cancelCallback(n.current);
            n.current = (j || (j = d("JSScheduler"))).scheduleImmediatePriCallback(function () {
                h.current != null && (i.current = r(i.current, {
                    root: e,
                    rootMargin: f,
                    threshold: g
                }, h.current, t)), n.current = null
            });
            return function () {
                i.current != null && (i.current.subscription.remove(), i.current = null), n.current != null && ((j || (j = d("JSScheduler"))).cancelCallback(n.current), n.current = null)
            }
        }, [t, e, f, g]);
        l(function () {
            s.current = !1;
            return function () {
                s.current = !0
            }
        }, []);
        return b
    }

    function b(a, b, c) {
        return function (a) {}
    }
    f = (h || (h = c("ExecutionEnvironment"))).canUseDOM ? a : b;
    g["default"] = f
}), 98);


import { DOMRectReadOnly, fromRect } from 'DOMRectReadOnly';
import { canUseDOM } from 'ExecutionEnvironment';  
import { 
  cancelCallback as cancelSchedulerCallback,
  scheduleImmediatePriCallback as scheduleSchedulerCallback
} from 'JSScheduler';
import { observeIntersection } from 'observeIntersection';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { useDynamicCallbackDANGEROUS } from 'useDynamicCallbackDANGEROUS';

interface RootMargin {
    top: number;
    left: number; 
    right: number;
    bottom: number;
}

interface Subscription {
    remove: () => void;
}

interface Options {
  root?: Element | null;
  rootMargin?: string | number | RootMargin;
  threshold?: number | number[];
  subscription?: Subscription;
  element?: any;
  onIntersect?: any;
  observedRoot?: any;

}

interface ObserverEntry {
  boundingClientRect: DOMRectReadOnly;
  intersectionRatio: number;
  intersectionRect: DOMRectReadOnly;
  isIntersecting: boolean;
  isVisible: boolean;
  rootBounds: DOMRectReadOnly;
  target: Element;
  time: number;
}

const emptyRect = fromRect({});
const emptyObserverEntry: ObserverEntry = {
  boundingClientRect: emptyRect,
  intersectionRatio: 0,
  intersectionRect: emptyRect,
  isIntersecting: false,
  isVisible: false,
  rootBounds: emptyRect,
  target: null!,
  time: 0
};

const noopRect: DOMRectReadOnly = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
};

function parseRootMargin(rootMargin: string | number | Options['rootMargin']) {
  let res;
  if (rootMargin == null) {
    res = {
      bottom: 0,
      left: 0, 
      right: 0,
      top: 0  
    };
  } else if (typeof rootMargin === 'string') {
    res = rootMargin;
  } else if (typeof rootMargin === 'number') {
    res = {
        bottom: rootMargin,
        left: rootMargin,
        right: rootMargin,
        top: rootMargin
      }
  }  else {    
      res = {
        ...{
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        },
        ...rootMargin
      };
  }

  const { top, bottom, left, right } = res

  return `${top}px ${right}px ${bottom}px ${left}px`

}

function reconcileObserverOptions(
  prevOptions: Options, 
  options: Options, 
  target: Element, 
  callback: (entry: ObserverEntry) => void
) {
  const {
    root,
    rootMargin,
    threshold
  } = options;
  const rootElement = root ?? null;

  const needsReinit = 
  !prevOptions ||
  prevOptions.element !== target ||
  prevOptions.onIntersect !== callback ||
  prevOptions.observedRoot !== rootElement ||  
  prevOptions.rootMargin !== rootMargin ||
  prevOptions.threshold !== threshold;

  if (needsReinit) {
    if (prevOptions) {
      prevOptions.subscription?.remove();
    }
  }

  const subscription = observeIntersection(
    target, 
    callback,
    {
      root,
      rootMargin: parseRootMargin(rootMargin),
      threshold  
    }
  );

  return {
    ...options,
    element: target,
    observedRoot: root,
    onIntersect: callback,
    subscription
  };
}

function useIntersectionObserverImpl(
  callback: (entry: ObserverEntry) => void, 
  options?: Options
) {
  const target = useRef(null);
  const observer = useRef(null);
  const scheduledCallback = useRef(null);
  const refCallback = useRef(null);
  const skipOnUnmount = useRef(false);

  const dynamicCallback = useDynamicCallbackDANGEROUS(callback);

  const setElement = useCallback((nextTarget: Element | null) => {
    if (target.current === nextTarget) {
      return;
    }

    if (target.current != null && nextTarget == null) {
      scheduledCallback.current != null && cancelSchedulerCallback(scheduledCallback.current);

      const prevTarget = target.current;

      scheduledCallback.current = scheduleSchedulerCallback(() => {
        if (target.current === null && !skipOnUnmount.current) {
          dynamicCallback({
            boundingClientRect: emptyRect,
            intersectionRatio: 0,
            intersectionRect: emptyRect,
            isIntersecting: false,
            isVisible: false,
            rootBounds: noopRect,
            target: prevTarget,
            time: Date.now(),
          });
        }
        scheduledCallback.current = null;
      });
    }

    target.current = nextTarget;

    if (observer.current != null) {
      observer.current.subscription.remove();
      observer.current = null; 
    }

    if (refCallback.current != null) {
      cancelSchedulerCallback(refCallback.current);
    }

    refCallback.current = scheduleSchedulerCallback(() => {
      if (target.current != null) {
        observer.current = reconcileObserverOptions(
          observer.current, 
          {
            root: options?.root,
            rootMargin: options?.rootMargin,
            threshold: options?.threshold  
          },
          target.current,
          dynamicCallback
        );
      }
      refCallback.current = null;
    });

  }, [dynamicCallback, options?.root, options?.rootMargin, options?.threshold]);

  useLayoutEffect(() => {
    if (refCallback.current != null) {
      cancelSchedulerCallback(refCallback.current);
    }
    
    refCallback.current = scheduleSchedulerCallback(() => {
      if (target.current != null) {
        observer.current = reconcileObserverOptions(
          observer.current,
          {
            root: options?.root,
            rootMargin: options?.rootMargin,
            threshold: options?.threshold
          },
          target.current,
          dynamicCallback  
        );
      }
      refCallback.current = null;
    });

    return () => {
      if (observer.current != null) {
        observer.current.subscription.remove();
        observer.current = null;
      }
      if (refCallback.current != null) {
        cancelSchedulerCallback(refCallback.current);
        refCallback.current = null;
      }
    };
  }, [dynamicCallback, options?.root, options?.rootMargin, options?.threshold]);

  useLayoutEffect(() => {
    skipOnUnmount.current = false;
    return () => {
      skipOnUnmount.current = true;
    };
  }, []);

  return setElement;
}

function noop() {}

const useIntersectionObserverFallback = () => noop;

const useIntersectionObserver: typeof useIntersectionObserverImpl = 
  canUseDOM ? useIntersectionObserverImpl : useIntersectionObserverFallback;

export default useIntersectionObserver;