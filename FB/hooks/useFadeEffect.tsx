__d("useFadeEffect", ["clearTimeout", "react", "setTimeout", "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useLayoutEffect,
        k = b.useReducer,
        l = b.useRef,
        m = 1e3;

    function n(a, b) {
        switch (b.type) {
            case "start":
                return {
                    isTransitioning: !0, shouldBeVisible: b.shouldBeVisible
                };
            case "finish":
                return {
                    isTransitioning: !1, shouldBeVisible: a.shouldBeVisible
                };
            default:
                return a
        }
    }

    function a(a) {
        var b = l(null),
            d = k(n, {
                isTransitioning: !1,
                shouldBeVisible: !1
            }),
            e = d[0],
            f = e.isTransitioning;
        e = e.shouldBeVisible;
        var g = d[1],
            h = l(null),
            o = l(null);
        c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function () {
            return function () {
                h.current != null && c("clearTimeout")(h.current), o.current != null && window.cancelAnimationFrame(o.current)
            }
        }, []);
        var p = i(function () {
                g({
                    type: "finish"
                }), h.current != null && c("clearTimeout")(h.current), h.current = null
            }, []),
            q = i(function (a) {
                o.current != null && window.cancelAnimationFrame(o.current), o.current = window.requestAnimationFrame(function () {
                    g({
                        shouldBeVisible: a,
                        type: "start"
                    }), o.current = null, h.current != null && c("clearTimeout")(h.current), h.current = c("setTimeout")(p, m)
                })
            }, [p]),
            r = l(!1);
        j(function () {
            r.current !== a && (!a || b.current != null) && q(a), r.current = a
        }, [a, q]);
        d = i(function (a) {
            var c = b.current;
            b.current = a;
            a != null ? (a.addEventListener != null && (a.addEventListener("transitionend", p), a.addEventListener("webkitTransitionEnd", p)), r.current === !0 && q(!0)) : c != null && c.removeEventListener != null && (c.removeEventListener("transitionend", p), c.removeEventListener("webkitTransitionEnd", p))
        }, [p, q]);
        f = f || e || a;
        return [f, e, d]
    }
    g["default"] = a
}), 98);


import * as React from 'react';
import { useCallback, useLayoutEffect, useReducer, useRef } from 'react';
import { clearTimeout, setTimeout } from 'clearTimeout'; 
import { useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED } from 'useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED';

const TIMEOUT_MS = 1000;

interface State {
  isTransitioning: boolean;
  shouldBeVisible: boolean;  
}

type Action = 
  | {type: 'start', shouldBeVisible: boolean}
  | {type: 'finish'};

function reducer(state: State, action: Action): State {
  switch(action.type) {
    case 'start': 
      return {
        isTransitioning: true,
        shouldBeVisible: action.shouldBeVisible  
      };
    case 'finish':
      return {
        ...state,
        isTransitioning: false
      }; 
    default:
      return state;
  }
}

export default function useFadeEffect(visible: boolean) {

  const nodeRef = useRef<HTMLElement | null>(null);
  const timeoutIdRef = useRef<HTMLElement | null>(null);
  const animationFrameIdRef = useRef<HTMLElement | null>(null);

  const [state, dispatch] = useReducer(reducer, {
    isTransitioning: false,
    shouldBeVisible: false
  });

  const {isTransitioning, shouldBeVisible} = state;

  useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED(() => {
    if (timeoutIdRef.current !== null) {
      clearTimeout(timeoutIdRef.current);
      if (animationFrameIdRef.current !== null) {
        window.cancelAnimationFrame(animationFrameIdRef.current); 
      }
    }
  }, [])

  const finishTransition = useCallback(() => {
    dispatch({type: 'finish'});
    if (timeoutIdRef.current !== null) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  }, []);

  const startTransition = useCallback((shouldBeVisible: boolean) => {
    if (animationFrameIdRef.current !== null) {
      window.cancelAnimationFrame(animationFrameIdRef.current); 
    }
    animationFrameIdRef.current = window.requestAnimationFrame(() => {
      dispatch({type: 'start', shouldBeVisible});
      animationFrameIdRef.current = null;
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);  
      }
      timeoutIdRef.current = setTimeout(finishTransition, TIMEOUT_MS);
    });
  }, [finishTransition]);

  const visibleRef = useRef(false);

  useLayoutEffect(() => {
    if (visibleRef.current !== visible && (!visible || nodeRef.current !== null)) {
      startTransition(visible);
    }
    visibleRef.current = visible;
  }, [visible, startTransition]);

  const setNodeRef = useCallback((node: HTMLElement | null) => {
    const prevNode = nodeRef.current;
    nodeRef.current = node;
    if (node !== null) {
      if (node.addEventListener != null) {
        node.addEventListener('transitionend', finishTransition);
        node.addEventListener('webkitTransitionEnd', finishTransition);  
      }
      if (visibleRef.current === true) {
        startTransition(true);
      }
    } else if (prevNode !== null && prevNode.removeEventListener != null) {
      prevNode.removeEventListener('transitionend', finishTransition);
      prevNode.removeEventListener('webkitTransitionEnd', finishTransition);
    }
  }, [finishTransition, startTransition]);

  const show = isTransitioning || shouldBeVisible || visible;

  return [show, shouldBeVisible, setNodeRef] as 
    const;

}