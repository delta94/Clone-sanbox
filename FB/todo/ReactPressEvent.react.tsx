__d("ReactPressEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect
      , i = b.useRef
      , j = {
        passive: !0
    };
    function k(a, b, c, d, e) {
        var f = {
            altKey: d.altKey,
            buttons: b,
            clientX: d.clientX,
            clientY: d.clientY,
            ctrlKey: d.ctrlKey,
            defaultPrevented: d.defaultPrevented,
            metaKey: d.metaKey,
            pageX: d.pageX,
            pageY: d.pageY,
            pointerType: c,
            screenX: d.screenX,
            screenY: d.screenY,
            shiftKey: d.shiftKey,
            target: e,
            timeStamp: d.timeStamp,
            type: a,
            x: d.clientX,
            y: d.clientY,
            preventDefault: function() {
                f.defaultPrevented = !0,
                d.preventDefault()
            },
            stopPropagation: function() {
                d.stopPropagation()
            }
        };
        return f
    }
    function a(a, b) {
        var e = b.disabled
          , f = b.onPressStart
          , g = b.onPressMove
          , l = b.onPressEnd
          , m = b.onPressChange
          , n = i({
            isPressed: !1,
            isPressActive: !1,
            pointerId: null,
            bounds: null,
            pointerType: "",
            buttons: 0,
            activationEvent: null
        })
          , o = c("ReactUseEvent.react")("pointerdown")
          , p = c("ReactUseEvent.react")("pointermove", j)
          , q = c("ReactUseEvent.react")("pointerup", j)
          , r = c("ReactUseEvent.react")("pointercancel", j)
          , s = c("ReactUseEvent.react")("mousedown")
          , t = c("ReactUseEvent.react")("mouseup", j)
          , u = c("ReactUseEvent.react")("mousemove", j)
          , v = c("ReactUseEvent.react")("dragstart", j)
          , w = c("ReactUseEvent.react")("focusout", j);
        h(function() {
            var b = a.current
              , c = n.current;
            if (b !== null) {
                var h = document
                  , i = function(a) {
                    if (e === !0) {
                        y(a);
                        return
                    }
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "usePress"))
                        return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "usePress");
                    if (a.buttons === 2 || a.buttons > 4 || d("ReactEventHelpers").isMac && a.pointerType === "mouse" && a.ctrlKey)
                        return;
                    c.buttons = a.buttons;
                    a.button === 1 && (c.buttons = 4);
                    j(a)
                }
                  , j = function(a) {
                    if (!c.isPressed) {
                        var e = a
                          , g = e.pointerId;
                        e = e.pointerType || "mouse";
                        c.isPressed = !0;
                        c.isPressActive = !0;
                        c.pointerId = g !== void 0 ? g : null;
                        c.pointerType = e;
                        c.activationEvent = a;
                        e !== "mouse" && (c.bounds = b.getBoundingClientRect());
                        f && f(k("pressstart", c.buttons, e, a, b));
                        m && m(!0);
                        d("ReactEventHelpers").hasPointerEvents ? (q.setListener(h, y),
                        p.setListener(h, z),
                        r.setListener(h, y)) : (u.setListener(h, z),
                        t.setListener(h, y),
                        v.setListener(h, y))
                    }
                }
                  , x = function(a) {
                    c.isPressed && (c.isPressed = !1,
                    l && l(k("pressend", c.buttons, c.pointerType, a, b)),
                    m && m(!1))
                }
                  , y = function(a) {
                    c.isPressActive = !1,
                    c.bounds = null,
                    c.activationEvent = null,
                    x(a),
                    d("ReactEventHelpers").hasPointerEvents ? (q.setListener(h, null),
                    p.setListener(h, null),
                    r.setListener(h, null)) : (u.setListener(h, null),
                    t.setListener(h, null),
                    v.setListener(h, null))
                }
                  , z = function(a) {
                    if (e === !0) {
                        y(a);
                        return
                    }
                    if (!c.isPressActive)
                        return;
                    var d = c.pointerType
                      , f = c.isPressed
                      , h = !1;
                    if (d === "mouse") {
                        var i = a.target;
                        h = b.contains(i)
                    } else {
                        i = a;
                        i = i.pointerId;
                        var l = c.bounds;
                        if (i !== c.pointerId || l === null)
                            return;
                        i = a.clientX;
                        var m = a.clientY
                          , n = l.top
                          , o = l.left
                          , p = l.right;
                        l = l.bottom;
                        i >= o && i <= p && m >= n && m <= l && (h = !0)
                    }
                    h ? f ? g && g(k("pressmove", c.buttons, d, a, b)) : j(a) : f && x(a)
                };
                d("ReactEventHelpers").hasPointerEvents ? o.setListener(b, i) : s.setListener(b, i);
                w.setListener(b, function(a) {
                    var d = c.activationEvent;
                    a.target === b && d !== null && y(d)
                });
                c.isPressActive && (d("ReactEventHelpers").hasPointerEvents ? (q.setListener(h, y),
                p.setListener(h, z),
                r.setListener(h, y)) : (u.setListener(h, z),
                t.setListener(h, y),
                v.setListener(h, y)));
                return function() {
                    var b = c.activationEvent;
                    a.current === null && b !== null && y(b)
                }
            }
        }, [e, v, w, s, u, t, m, l, g, f, r, o, p, q, a])
    }
    g.usePress = a
}
), 98);


import React, { useEffect, useRef } from 'react';
import { useEvent as useReactUseEvent } from './ReactUseEvent.react'; // Assuming this is the correct import path
import ReactEventHelpers from 'ReactEventHelpers'; // Assuming this is the correct import path
import ReactEventHookPropagation from 'ReactEventHookPropagation'; // Assuming this is the correct import path

const passiveOptions = { passive: true };

function createPressEvent(type, buttons, pointerType, event, target) {
    return {
        altKey: event.altKey,
        buttons: buttons,
        clientX: event.clientX,
        clientY: event.clientY,
        ctrlKey: event.ctrlKey,
        defaultPrevented: event.defaultPrevented,
        metaKey: event.metaKey,
        pageX: event.pageX,
        pageY: event.pageY,
        pointerType: pointerType,
        screenX: event.screenX,
        screenY: event.screenY,
        shiftKey: event.shiftKey,
        target: target,
        timeStamp: event.timeStamp,
        type: type,
        x: event.clientX,
        y: event.clientY,
        preventDefault: function() {
            this.defaultPrevented = true;
            event.preventDefault();
        },
        stopPropagation: function() {
            event.stopPropagation();
        }
    };
}

export function usePress(ref, {
    disabled,
    onPressStart,
    onPressMove,
    onPressEnd,
    onPressChange
}) {
    const stateRef = useRef({
        isPressed: false,
        isPressActive: false,
        pointerId: null,
        bounds: null,
        pointerType: "",
        buttons: 0,
        activationEvent: null
    });

    const pointerDownEvent = useReactUseEvent("pointerdown");
    const pointerMoveEvent = useReactUseEvent("pointermove", passiveOptions);
    const pointerUpEvent = useReactUseEvent("pointerup", passiveOptions);
    const pointerCancelEvent = useReactUseEvent("pointercancel", passiveOptions);
    const mouseDownEvent = useReactUseEvent("mousedown");
    const mouseUpEvent = useReactUseEvent("mouseup", passiveOptions);
    const mouseMoveEvent = useReactUseEvent("mousemove", passiveOptions);
    const dragStartEvent = useReactUseEvent("dragstart", passiveOptions);
    const focusOutEvent = useReactUseEvent("focusout", passiveOptions);

    useEffect(() => {
        const element = ref.current;
        const state = stateRef.current;

        if (element !== null) {
            const documentRef = document;

            const handlePointerDown = (event) => {
                if (disabled === true) {
                    handleRelease(event);
                    return;
                }

                if (ReactEventHookPropagation.eventHookPropagationStopped(event, "usePress")) return;
                ReactEventHookPropagation.stopEventHookPropagation(event, "usePress");

                if (event.buttons === 2 || event.buttons > 4 || (ReactEventHelpers.isMac && event.pointerType === "mouse" && event.ctrlKey)) {
                    return;
                }

                state.buttons = event.buttons;

                if (event.button === 1) {
                    state.buttons = 4;
                }

                handlePress(event);
            };

            const handlePress = (event) => {
                if (!state.isPressed) {
                    const pointerId = event.pointerId !== undefined ? event.pointerId : null;
                    const pointerType = event.pointerType || "mouse";

                    state.isPressed = true;
                    state.isPressActive = true;
                    state.pointerId = pointerId;
                    state.pointerType = pointerType;
                    state.activationEvent = event;

                    if (pointerType !== "mouse") {
                        state.bounds = element.getBoundingClientRect();
                    }

                    onPressStart && onPressStart(createPressEvent("pressstart", state.buttons, pointerType, event, element));
                    onPressChange && onPressChange(true);

                    if (ReactEventHelpers.hasPointerEvents) {
                        pointerUpEvent.setListener(documentRef, handleRelease);
                        pointerMoveEvent.setListener(documentRef, handleMove);
                        pointerCancelEvent.setListener(documentRef, handleRelease);
                    } else {
                        mouseMoveEvent.setListener(documentRef, handleMove);
                        mouseUpEvent.setListener(documentRef, handleRelease);
                        dragStartEvent.setListener(documentRef, handleRelease);
                    }
                }
            };

            function handlePressRelease(event) {
                if (state.isPressed) {
                    state.isPressed = false;
                    onPressEnd && onPressEnd(createPressEvent("pressend", state.buttons, state.pointerType, event, element));
                    onPressChange && onPressChange(false);
                }
            }

            const handleRelease = (event) => {
                state.isPressActive = false;
                state.bounds = null;
                state.activationEvent = null;

                handlePressRelease(event)

                if (ReactEventHelpers.hasPointerEvents) {
                    pointerUpEvent.setListener(documentRef, null);
                    pointerMoveEvent.setListener(documentRef, null);
                    pointerCancelEvent.setListener(documentRef, null);
                } else {
                    mouseMoveEvent.setListener(documentRef, null);
                    mouseUpEvent.setListener(documentRef, null);
                    dragStartEvent.setListener(documentRef, null);
                }
            };

            const handleMove = (event) => {
                if (disabled === true) {
                    handleRelease(event);
                    return;
                }

                if (!state.isPressActive) return;

                const pointerType = state.pointerType;
                const isPressed = state.isPressed;
                let insideBounds = false;

                if (pointerType === "mouse") {
                    const target = event.target;
                    insideBounds = element.contains(target);
                } else {
                    const pointerId = event.pointerId;
                    const bounds = state.bounds;

                    if (pointerId !== state.pointerId || bounds === null) return;

                    const clientX = event.clientX;
                    const clientY = event.clientY;

                    const { top, left, right, bottom } = bounds;

                    if (clientX >= left && clientX <= right && clientY >= top && clientY <= bottom) {
                        insideBounds = true;
                    }
                }

                if (insideBounds) {
                    if (isPressed) {
                        onPressMove && onPressMove(createPressEvent("pressmove", state.buttons, pointerType, event, element));
                    } else {
                        handlePress(event);
                    }
                } else {
                    if (isPressed) {
                        handlePressRelease(event);
                    }
                }
            };

            const handleFocusOut = (event) => {
                const activationEvent = state.activationEvent;
                if (event.target === element && activationEvent !== null) {
                    handleRelease(activationEvent);
                }
            };

            if (ReactEventHelpers.hasPointerEvents) {
                pointerDownEvent.setListener(element, handlePointerDown);
            } else {
                mouseDownEvent.setListener(element, handlePointerDown);
            }

            focusOutEvent.setListener(element, handleFocusOut);

            if (state.isPressActive) {
                if (ReactEventHelpers.hasPointerEvents) {
                    pointerUpEvent.setListener(documentRef, handleRelease);
                    pointerMoveEvent.setListener(documentRef, handleMove);
                    pointerCancelEvent.setListener(documentRef, handleRelease);
                } else {
                    mouseMoveEvent.setListener(documentRef, handleMove);
                    mouseUpEvent.setListener(documentRef, handleRelease);
                    dragStartEvent.setListener(documentRef, handleRelease);
                }
            }

            return () => {
                const activationEvent = state.activationEvent;
                if (ref.current === null && activationEvent !== null) {
                    handleRelease(activationEvent);
                }
            };
        }
    }, [disabled, focusOutEvent, mouseDownEvent, mouseMoveEvent, mouseUpEvent])
}
