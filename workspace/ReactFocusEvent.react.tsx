import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from "react";
import checkPassiveEventsSupported from "./checkPassiveEventsSupported"
import ReactEventHelpers from "./ReactEventHelpers"
import ReactUseEvent from "./ReactUseEvent.react"
import ReactEventHookPropagation from "./ReactEventHookPropagation"

import {
  useLayoutEffect_SAFE_FOR_SSR
} from "useLayoutEffect_SAFE_FOR_SSR";

const globalFocusVisibleEvents = ReactEventHelpers.hasPointerEvents ?
  ["keydown", "pointermove", "pointerdown", "pointerup"] :
  [
    "keydown",
    "mousedown",
    "mousemove",
    "mouseup",
    "touchmove",
    "touchstart",
    "touchend"
  ]

const useEventProps = {
  passive: true
}

// Global state for tracking focus visible and emulation of mouse
let isGlobalFocusVisible = true
let hasTrackedGlobalFocusVisible = false;

const _5403 = false


function trackGlobalFocusVisible() {
  globalFocusVisibleEvents.forEach((type) => {
    window.addEventListener(
      type,
      handleGlobalFocusVisibleEvent,
      checkPassiveEventsSupported ? {
        capture: true,
        passive: true
      } : true)
  })
}

function isValidKey(nativeEvent: KeyboardEvent): boolean {
  const {
    metaKey,
    altKey,
    ctrlKey
  } = nativeEvent
  return !(metaKey || (!ReactEventHelpers.isMac && altKey) || ctrlKey)
}

function isTextInput(nativeEvent: KeyboardEvent) {

  const {
    key,
    target
  } = nativeEvent
  if (key === "Tab" || key === "Escape")
    return false;
  const {
    isContentEditable,
    tagName
  } = target as any
  return tagName === "INPUT" || tagName === "TEXTAREA" || isContentEditable
}

function handleGlobalFocusVisibleEvent(
  nativeEvent: any //MouseEvent | TouchEvent | KeyboardEvent
): void {
  if (nativeEvent.type === "keydown") {
    if (isValidKey(nativeEvent as any)) {
      isGlobalFocusVisible = true
    }
  } else {
    const nodeName = (nativeEvent.target as any).nodeName;
    // Safari calls mousemove/pointermove events when you tab out of the active
    // Safari frame.
    if (nodeName === "HTML")
      return;
    // Handle all the other mouse/touch/pointer events
    isGlobalFocusVisible = false
  }
}

function handleFocusVisibleTargetEvents(event: SyntheticEvent < EventTarget > , callback) {
  if (event.type === "keydown") {
    const {
      nativeEvent
    } = event;
    if (isValidKey(nativeEvent as any) && !isTextInput(nativeEvent as any)) {
      callback(true)
    }
  } else {
    isGlobalFocusVisible = false
    callback(false)
  }
}

function setFocusVisibleListeners(
  focusVisibleHandles,
  focusTarget: EventTarget,
  callback
) {
  focusVisibleHandles.forEach(focusVisibleHandle => {
    focusVisibleHandle.setListener(focusTarget, event =>
      handleFocusVisibleTargetEvents(event, callback)
    )
  })
}

function useFocusVisibleInputHandles() {
  const mousedownHandle = ReactUseEvent("mousedown", useEventProps)
  const pointTouchHandle = ReactUseEvent(ReactEventHelpers.hasPointerEvents ?
    "pointerdown" :
    "touchstart", useEventProps)
  const keydownHandle = ReactUseEvent("keydown", useEventProps);

  return useMemo(() => [mousedownHandle, pointTouchHandle, keydownHandle],
    [keydownHandle, mousedownHandle, pointTouchHandle])
}

function useFocusLifecycles() {
  useEffect(() => {
    hasTrackedGlobalFocusVisible || (hasTrackedGlobalFocusVisible = true,
      trackGlobalFocusVisible())
  }, [])
}

type FocusEvent = SyntheticEvent < EventTarget > ;

type UseFocusOptions = {
  disabled ? : boolean,
  onBlur ? : (e: FocusEvent) => void,
  onFocus ? : (e: FocusEvent) => void,
  onFocusChange ? : (e: boolean) => void,
  onFocusVisibleChange ? : (e: boolean) => void,
}

function useFocus(focusTargetRef: {
  current: null | Node
}, props: UseFocusOptions) {

  const {
    disabled,
    onBlur,
    onFocus,
    onFocusChange,
    onFocusVisibleChange
  } = props;

  const stateRef = useRef < undefined | {
    isFocused: boolean,
    isFocusVisible: boolean
  } > ({
    isFocused: false,
    isFocusVisible: false
  })

  const focusHandle = ReactUseEvent("focusin", useEventProps)
  const blurHandle = ReactUseEvent("focusout", useEventProps)
  const focusVisibleHandles = useFocusVisibleInputHandles();

  useLayoutEffect_SAFE_FOR_SSR(() => {
    const focusTarget = focusTargetRef.current
    const state = stateRef.current; // EventTarget | ReactScopeInstance

    if (focusTarget != null && state != null && focusTarget.nodeType === 1) {

      // Handle focus visible
      setFocusVisibleListeners(
        focusVisibleHandles,
        focusTarget,
        isFocusVisible => {
          if (state.isFocused && state.isFocusVisible !== isFocusVisible) {
            state.isFocusVisible = isFocusVisible
            if (onFocusVisibleChange) {
              onFocusVisibleChange(isFocusVisible)
            }
          }
        }
      );

      // Handle focus
      focusHandle.setListener(focusTarget, (event: FocusEvent) => {

        if (!_5403 && disabled === true) {
          return;
        }

        if (ReactEventHookPropagation.hasEventHookPropagationStopped(event, "useFocus"))
          return;
        ReactEventHookPropagation.stopEventHookPropagation(event, "useFocus");

        if (!state.isFocused && focusTarget === event.target) {
          state.isFocused = true
          state.isFocusVisible = isGlobalFocusVisible
          if (onFocus) {
            onFocus(event)
          }
          if (onFocusChange) {
            onFocusChange(true)
          }
          if (state.isFocusVisible && onFocusVisibleChange) {
            onFocusVisibleChange(true)
          }
        }
      });

      // Handle blur
      blurHandle.setListener(focusTarget, (event: FocusEvent) => {
        if (!_5403 && disabled === true)
          return;
        if (ReactEventHookPropagation.hasEventHookPropagationStopped(event, "useFocus"))
          return;
        ReactEventHookPropagation.stopEventHookPropagation(event, "useFocus");

        if (state.isFocused) {
          state.isFocused = false
          if (onBlur) {
            onBlur(event)
          }
          if (onFocusChange) {
            onFocusChange(false)
          }
          state.isFocusVisible && onFocusVisibleChange && onFocusVisibleChange(false)
          state.isFocusVisible = isGlobalFocusVisible;
        }
      })
    }
  }, [
    blurHandle,
    disabled,
    focusHandle,
    focusTargetRef,
    focusVisibleHandles,
    onBlur,
    onFocus,
    onFocusChange,
    onFocusVisibleChange
  ]);

  useEffect(() => {
    const focusTarget = focusTargetRef.current
    const state = stateRef.current;
    return function () {
      if (focusTargetRef.current == null && state != null && state.isFocused) {
        state.isFocused = false;
        const blurEvent = new window.FocusEvent("blur");
        Object.defineProperty(blurEvent, "target", {
          value: focusTarget
        });

        if (onBlur) {
          onBlur(blurEvent as any)
        }

        if (onFocusChange) {
          onFocusChange(false)
        }

        if (state.isFocusVisible && onFocusVisibleChange) {
          onFocusVisibleChange(false)
        }

        state.isFocusVisible = isGlobalFocusVisible
      }
    }
  });

  // Mount/Unmount logic
  useFocusLifecycles()
}

type UseFocusWithinOptions = {
  disabled ? : boolean,
  onAfterBlurWithin ? : (e: FocusEvent) => void,
  onBeforeBlurWithin ? : (e: FocusEvent) => void,
  onBlurWithin ? : (e: FocusEvent) => void,
  onFocusWithin ? : (e: FocusEvent) => void,
  onFocusWithinChange ? : (e: boolean) => void,
  onFocusWithinVisibleChange ? : (value: boolean) => void,
};

function useFocusWithin < T > (
  focusWithinTargetRef: ((focusWithinTarget ? : T) => void) | {
    current ? : T
  }, {
    disabled,
    onAfterBlurWithin,
    onBeforeBlurWithin,
    onBlurWithin,
    onFocusWithin,
    onFocusWithinChange,
    onFocusWithinVisibleChange
  }: UseFocusWithinOptions
) {


  // Setup controlled state for this useFocus hook
  const stateRef = useRef < undefined | {
    isFocused: boolean,
    isFocusVisible: boolean
  } > ({
    isFocused: false,
    isFocusVisible: false
  })

  const focusHandle = ReactUseEvent("focusin", useEventProps)
  const blurHandle = ReactUseEvent("focusout", useEventProps)
  const afterBlurHandle = ReactUseEvent("afterblur", useEventProps)
  const beforeBlurHandle = ReactUseEvent("beforeblur", useEventProps)

  const focusVisibleHandles = useFocusVisibleInputHandles();


  const useFocusWithinRef = useCallback((focusWithinTarget ? : T) => {

    if (typeof focusWithinTargetRef === "function") {
      focusWithinTargetRef(focusWithinTarget)
    } else {
      focusWithinTargetRef.current = focusWithinTarget;
    }

    // typeof focusWithinTargetRef === "function" ? focusWithinTargetRef(focusWithinTarget) : focusWithinTargetRef.current = focusWithinTarget;
    const state = stateRef.current;

    if (focusWithinTarget != null && state != null) {

      setFocusVisibleListeners(
        focusVisibleHandles,
        // $FlowFixMe focusWithinTarget is not null here
        focusWithinTarget as any,
        isFocusVisible => {
          if (state.isFocused && state.isFocusVisible !== isFocusVisible) {
            state.isFocusVisible = isFocusVisible;
            if (onFocusWithinVisibleChange) {
              onFocusWithinVisibleChange(isFocusVisible);
            }
          }
        }
      )

      // Handle focus
      // $FlowFixMe focusWithinTarget is not null here
      focusHandle.setListener(focusWithinTarget as any, (event: FocusEvent) => {
        if (!_5403 && disabled === true) {
          return;
        }
        if (ReactEventHookPropagation.hasEventHookPropagationStopped(event, "useFocusWithin")) {
          return;
        }



        if (!state.isFocused /*|| state.isFocused*/ ) {
          state.isFocused = true
          state.isFocusVisible = isGlobalFocusVisible
          if (onFocusWithinChange) {
            onFocusWithinChange(true)
          }
          if (state.isFocusVisible && onFocusWithinVisibleChange) {
            onFocusWithinVisibleChange(true)
          }
        }

        if (!state.isFocusVisible && isGlobalFocusVisible) {
          state.isFocusVisible = isGlobalFocusVisible
          if (onFocusWithinVisibleChange) {
            onFocusWithinVisibleChange(true)
          }
        }

        if (onFocusWithin) {
          onFocusWithin(event);
        }
      })

      // Handle blur
      // $FlowFixMe focusWithinTarget is not null here
      blurHandle.setListener(focusWithinTarget as any, (event: FocusEvent) => {
        if (!_5403 && disabled === true) {
          return;
        }
        const {
          relatedTarget
        } = event.nativeEvent as any;
        if (ReactEventHookPropagation.hasEventHookPropagationStopped(event, "useFocusWithin")) {
          return;
        }

        if (
          state.isFocused &&
          !ReactEventHelpers.isRelatedTargetWithin(focusWithinTarget, relatedTarget)
        ) {
          state.isFocused = false;
          if (onFocusWithinChange) {
            onFocusWithinChange(false);
          }
          if (state.isFocusVisible && onFocusWithinVisibleChange) {
            onFocusWithinVisibleChange(false);
          }
          if (onBlurWithin) {
            onBlurWithin(event);
          }
        } else {
          ReactEventHookPropagation.stopEventHookPropagation(event, "useFocusWithin")
        }

      })

      // Handle before blur. This is a special
      // React provided event.
      // $FlowFixMe focusWithinTarget is not null here
      beforeBlurHandle.setListener(focusWithinTarget as any, (event: FocusEvent) => {
        if (!_5403 && disabled === true) {
          return;
        }
        if (onBeforeBlurWithin) {
          onBeforeBlurWithin(event)
          afterBlurHandle.setListener(
            document,
            (afterBlurEvent: FocusEvent) => {
              if (onAfterBlurWithin) {
                onAfterBlurWithin(afterBlurEvent);
              }
              // Clear listener on document
              afterBlurHandle.setListener(document, undefined)
            })
        }
      })
    }
  }, [
    afterBlurHandle,
    beforeBlurHandle,
    blurHandle,
    disabled,
    focusHandle,
    focusVisibleHandles,
    focusWithinTargetRef,
    onAfterBlurWithin,
    onBeforeBlurWithin,
    onBlurWithin,
    onFocusWithin,
    onFocusWithinChange,
    onFocusWithinVisibleChange
  ]);

  // Mount/Unmount logic
  useFocusLifecycles();

  return useFocusWithinRef
}

const ReactFocusEvent_React = {
  useFocus,
  useFocusWithin
}

export default ReactFocusEvent_React
export {
  useFocus,
  useFocusWithin
}


// __d("ReactFocusEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "checkPassiveEventsSupported", "gkx", "react", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f, g) {
//   "use strict";
//   e = d("react");
//   var h = e.useCallback,
//     i = e.useEffect,
//     j = e.useMemo,
//     k = e.useRef,
//     l = d("ReactEventHelpers").hasPointerEvents ? ["keydown", "pointermove", "pointerdown", "pointerup"] : ["keydown", "mousedown", "mousemove", "mouseup", "touchmove", "touchstart", "touchend"],
//     m = {
//       passive: !0
//     },
//     n = !0,
//     o = !1;

//   function p() {
//     l.forEach(function (a) {
//       window.addEventListener(a, s, c("checkPassiveEventsSupported") ? {
//         capture: !0,
//         passive: !0
//       } : !0)
//     })
//   }

//   function q(a) {
//     var b = a.metaKey,
//       c = a.altKey;
//     a = a.ctrlKey;
//     return !(b || !d("ReactEventHelpers").isMac && c || a)
//   }

//   function r(a) {
//     var b = a.key;
//     a = a.target;
//     if (b === "Tab" || b === "Escape") return !1;
//     b = a.isContentEditable;
//     a = a.tagName;
//     return a === "INPUT" || a === "TEXTAREA" || b
//   }

//   function s(a) {
//     if (a.type === "keydown") q(a) && (n = !0);
//     else {
//       a = a.target.nodeName;
//       if (a === "HTML") return;
//       n = !1
//     }
//   }

//   function t(a, b) {
//     if (a.type === "keydown") {
//       a = a.nativeEvent;
//       q(a) && !r(a) && b(!0)
//     } else n = !1, b(!1)
//   }

//   function u(a, b, c) {
//     a.forEach(function (a) {
//       a.setListener(b, function (a) {
//         return t(a, c)
//       })
//     })
//   }

//   function v() {
//     var a = c("ReactUseEvent.react")("mousedown", m),
//       b = c("ReactUseEvent.react")(d("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", m),
//       e = c("ReactUseEvent.react")("keydown", m);
//     return j(function () {
//       return [a, b, e]
//     }, [e, a, b])
//   }

//   function w() {
//     i(function () {
//       o || (o = !0, p())
//     }, [])
//   }

//   function a(a, b) {
//     var e = b.disabled,
//       f = b.onBlur,
//       g = b.onFocus,
//       h = b.onFocusChange,
//       j = b.onFocusVisibleChange,
//       l = k({
//         isFocused: !1,
//         isFocusVisible: !1
//       }),
//       o = c("ReactUseEvent.react")("focusin", m),
//       p = c("ReactUseEvent.react")("focusout", m),
//       q = v();
//     c("useLayoutEffect_SAFE_FOR_SSR")(function () {
//       var b = a.current,
//         i = l.current;
//       if (b !== null && b.nodeType === 1) {
//         u(q, b, function (a) {
//           i.isFocused && i.isFocusVisible !== a && (i.isFocusVisible = a, j && j(a))
//         });
//         var k = function (a) {
//           i.isFocused && (i.isFocused = !1, f && f(a), h && h(!1), i.isFocusVisible && j && j(!1), i.isFocusVisible = n)
//         };
//         o.setListener(b, function (a) {
//           if (!c("gkx")("5403") && e === !0) return;
//           if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
//           d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
//           !i.isFocused && b === a.target && (i.isFocused = !0, i.isFocusVisible = n, g && g(a), h && h(!0), i.isFocusVisible && j && j(!0))
//         });
//         p.setListener(b, function (a) {
//           if (!c("gkx")("5403") && e === !0) return;
//           if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
//           d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
//           k(a)
//         })
//       }
//     }, [p, e, o, a, q, f, g, h, j]);
//     i(function () {
//       var b = a.current,
//         c = l.current;
//       return function () {
//         if (a.current === null && c.isFocused) {
//           c.isFocused = !1;
//           var d = new window.FocusEvent("blur");
//           Object.defineProperty(d, "target", {
//             value: b
//           });
//           f && f(d);
//           h && h(!1);
//           c.isFocusVisible && j && j(!1);
//           c.isFocusVisible = n
//         }
//       }
//     });
//     w()
//   }

//   function b(a, b) {
//     var e = b.disabled,
//       f = b.onAfterBlurWithin,
//       g = b.onBeforeBlurWithin,
//       i = b.onBlurWithin,
//       j = b.onFocusWithin,
//       l = b.onFocusWithinChange,
//       o = b.onFocusWithinVisibleChange,
//       p = k({
//         isFocused: !1,
//         isFocusVisible: !1
//       }),
//       q = c("ReactUseEvent.react")("focusin", m),
//       r = c("ReactUseEvent.react")("focusout", m),
//       s = c("ReactUseEvent.react")("afterblur", m),
//       t = c("ReactUseEvent.react")("beforeblur", m),
//       x = v();
//     b = h(function (b) {
//       typeof a === "function" ? a(b) : a.current = b;
//       var h = p.current;
//       b !== null && h !== null && (u(x, b, function (a) {
//         h.isFocused && h.isFocusVisible !== a && (h.isFocusVisible = a, o && o(a))
//       }), q.setListener(b, function (a) {
//         if (!c("gkx")("5403") && e === !0) return;
//         if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
//         h.isFocused || (h.isFocused = !0, h.isFocusVisible = n, l && l(!0), h.isFocusVisible && o && o(!0));
//         !h.isFocusVisible && n && (h.isFocusVisible = n, o && o(!0));
//         j && j(a)
//       }), r.setListener(b, function (a) {
//         if (!c("gkx")("5403") && e === !0) return;
//         var f = a.nativeEvent.relatedTarget;
//         if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
//         h.isFocused && !d("ReactEventHelpers").isRelatedTargetWithin(b, f) ? (h.isFocused = !1, l && l(!1), h.isFocusVisible && o && o(!1), i && i(a)) : d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin")
//       }), t.setListener(b, function (a) {
//         if (!c("gkx")("5403") && e === !0) return;
//         g && (g(a), s.setListener(document, function (a) {
//           f && f(a), s.setListener(document, null)
//         }))
//       }))
//     }, [s, t, r, e, q, x, a, f, g, i, j, l, o]);
//     w();
//     return b
//   }
//   g.useFocus = a;
//   g.useFocusWithin = b
// }), 98);