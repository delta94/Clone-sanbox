__d("ReactFocusEvent.react", ["ReactDOMComet", "ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "gkx", "react", "useUnsafeRef_DEPRECATED"], (function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react");
    var h = f.useCallback,
        i = f.useEffect,
        j = f.useLayoutEffect,
        k = f.useMemo,
        l = f.useRef,
        m = d("ReactEventHelpers").hasPointerEvents ? ["keydown", "pointermove", "pointerdown", "pointerup"] : ["keydown", "mousedown", "mousemove", "mouseup", "touchmove", "touchstart", "touchend"],
        n = {
            passive: !0
        },
        o = !0,
        p = !1;

    function q() {
        m.forEach(function (a) {
            window.addEventListener(a, t, !0)
        })
    }

    function r(a) {
        var b = a.metaKey,
            c = a.altKey;
        a = a.ctrlKey;
        return !(b || !d("ReactEventHelpers").isMac && c || a)
    }

    function s(a) {
        var b = a.key;
        a = a.target;
        if (b === "Tab" || b === "Escape") return !1;
        b = a.isContentEditable;
        a = a.tagName;
        return a === "INPUT" || a === "TEXTAREA" || b
    }

    function t(a) {
        if (a.type === "keydown") r(a) && (o = !0);
        else {
            a = a.target.nodeName;
            if (a === "HTML") return;
            o = !1
        }
    }

    function u(a, b) {
        if (a.type === "keydown") {
            a = a.nativeEvent;
            r(a) && !s(a) && b(!0)
        } else o = !1, b(!1)
    }

    function v(a, b, c) {
        a.forEach(function (a) {
            a.setListener(b, function (a) {
                return u(a, c)
            })
        })
    }

    function w() {
        var a = c("ReactUseEvent.react")("mousedown", n),
            b = c("ReactUseEvent.react")(d("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", n),
            e = c("ReactUseEvent.react")("keydown", n);
        return k(function () {
            return [a, b, e]
        }, [e, a, b])
    }

    function x() {
        i(function () {
            p || (p = !0, q())
        }, [])
    }

    function a(a, b) {
        var e = b.disabled,
            f = b.onBlur,
            g = b.onFocus,
            h = b.onFocusChange,
            k = b.onFocusVisibleChange,
            m = l({
                isFocused: !1,
                isFocusVisible: !1
            }),
            p = c("ReactUseEvent.react")("focusin", n),
            q = c("ReactUseEvent.react")("focusout", n),
            r = w();
        j(function () {
            var b = a.current,
                i = m.current;
            if (b !== null && b.nodeType === 1) {
                v(r, b, function (a) {
                    i.isFocused && i.isFocusVisible !== a && (i.isFocusVisible = a, k && k(a))
                });
                var j = function (a) {
                    i.isFocused && (i.isFocused = !1, f && f(a), h && h(!1), i.isFocusVisible && k && k(!1), i.isFocusVisible = o)
                };
                p.setListener(b, function (a) {
                    if (!c("gkx")("5403") && e === !0) return;
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
                    !i.isFocused && b === a.target && (i.isFocused = !0, i.isFocusVisible = o, g && g(a), h && h(!0), i.isFocusVisible && k && k(!0))
                });
                q.setListener(b, function (a) {
                    if (!c("gkx")("5403") && e === !0) return;
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
                    j(a)
                })
            }
        }, [q, e, p, a, r, f, g, h, k]);
        i(function () {
            var b = a.current,
                c = m.current;
            return function () {
                if (a.current === null && c.isFocused) {
                    c.isFocused = !1;
                    var d = new window.FocusEvent("blur");
                    Object.defineProperty(d, "target", {
                        value: b
                    });
                    f && f(d);
                    h && h(!1);
                    c.isFocusVisible && k && k(!1);
                    c.isFocusVisible = o
                }
            }
        });
        x()
    }

    function b(a, b) {
        var e = b.disabled,
            f = b.onAfterBlurWithin,
            g = b.onBeforeBlurWithin,
            i = b.onBlurWithin,
            j = b.onFocusWithin,
            k = b.onFocusWithinChange,
            m = b.onFocusWithinVisibleChange,
            p = l({
                isFocused: !1,
                isFocusVisible: !1
            }),
            q = c("ReactUseEvent.react")("focusin", n),
            r = c("ReactUseEvent.react")("focusout", n),
            s = c("ReactUseEvent.react")("afterblur", n),
            t = c("ReactUseEvent.react")("beforeblur", n),
            u = w();
        b = h(function (b) {
            typeof a === "function" ? a(b) : a.current = b;
            var h = p.current;
            b !== null && h !== null && (v(u, b, function (a) {
                h.isFocused && h.isFocusVisible !== a && (h.isFocusVisible = a, m && m(a))
            }), q.setListener(b, function (a) {
                if (!c("gkx")("5403") && e === !0) return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                h.isFocused || (h.isFocused = !0, h.isFocusVisible = o, k && k(!0), h.isFocusVisible && m && m(!0));
                !h.isFocusVisible && o && (h.isFocusVisible = o, m && m(!0));
                j && j(a)
            }), r.setListener(b, function (a) {
                if (!c("gkx")("5403") && e === !0) return;
                var f = a.nativeEvent.relatedTarget;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                h.isFocused && !d("ReactEventHelpers").isRelatedTargetWithin(b, f) ? (h.isFocused = !1, k && k(!1), h.isFocusVisible && m && m(!1), i && i(a)) : d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin")
            }), t.setListener(b, function (a) {
                if (!c("gkx")("5403") && e === !0) return;
                g && (g(a), s.setListener(document, function (a) {
                    f && f(a), s.setListener(document, null)
                }))
            }))
        }, [s, t, r, e, q, u, a, f, g, i, j, k, m]);
        x();
        return b
    }

    function y() {
        var a = z("mousedown", n),
            b = z(d("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", n),
            c = z("keydown", n);
        return k(function () {
            return [a, b, c]
        }, [c, a, b])
    }

    function e(a) {
        var b = a.disabled,
            e = a.onAfterBlurWithin,
            f = a.onBeforeBlurWithin,
            g = a.onBlurWithin,
            i = a.onFocusWithin,
            j = a.onFocusWithinChange,
            k = a.onFocusWithinVisibleChange,
            m = l({
                isFocused: !1,
                isFocusVisible: !1
            }),
            p = z("focusin", n),
            q = z("focusout", n),
            r = z("afterblur", n),
            s = z("beforeblur", n),
            t = y();
        a = h(function (a) {
            var h = m.current;
            a !== null && h !== null ? (v(t, a, function (a) {
                h.isFocused && h.isFocusVisible !== a && (h.isFocusVisible = a, k && k(a))
            }), p.setListener(a, function (a) {
                if (!c("gkx")("5403") && b === !0) return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                h.isFocused || (h.isFocused = !0, h.isFocusVisible = o, j && j(!0), h.isFocusVisible && k && k(!0));
                !h.isFocusVisible && o && (h.isFocusVisible = o, k && k(!0));
                i && i(a)
            }), q.setListener(a, function (e) {
                if (!c("gkx")("5403") && b === !0) return;
                var f = e.nativeEvent.relatedTarget;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(e, "useFocusWithin")) return;
                h.isFocused && !d("ReactEventHelpers").isRelatedTargetWithin(a, f) ? (h.isFocused = !1, j && j(!1), h.isFocusVisible && k && k(!1), g && g(e)) : d("ReactEventHookPropagation").stopEventHookPropagation(e, "useFocusWithin")
            }), s.setListener(a, function (a) {
                if (!c("gkx")("5403") && b === !0) return;
                f && (f(a), r.setListener(document, function (a) {
                    e && e(a), r.setListener(document, null)
                }))
            })) : a === null && (p.clear(), q.clear(), s.clear())
        }, [r, s, q, b, p, t, e, f, g, i, j, k]);
        x();
        return a
    }

    function z(a, b) {
        var e = c("useUnsafeRef_DEPRECATED")(null),
            f = e.current;
        b && (b.passive = void 0);
        if (f === null) {
            var g = d("ReactDOMComet").unstable_createEventHandle(a, b),
                h = new Map();
            f = {
                setListener: function (a, b) {
                    var c = h.get(a);
                    c !== void 0 && c();
                    if (b === null) {
                        h["delete"](a);
                        return
                    }
                    c = g(a, function () {
                        b.apply(void 0, arguments)
                    });
                    h.set(a, c)
                },
                clear: function () {
                    var a = Array.from(h.values());
                    for (var b = 0; b < a.length; b++) a[b]();
                    h.clear()
                }
            };
            e.current = f
        }
        return f
    }
    g.useFocus = a;
    g.useFocusWithin = b;
    g.useFocusWithinStrictMode = e
}), 98);





import React, {
    SyntheticEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef
  } from "react";
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
        true)
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
  