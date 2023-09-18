__d("ReactHoverEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect
      , i = b.useRef;
    function j(a, b, c) {
        return {
            clientX: b.clientX,
            clientY: b.clientY,
            pageX: b.pageX,
            pageY: b.pageY,
            screenX: b.screenX,
            screenY: b.screenY,
            target: c,
            timeStamp: b.timeStamp,
            type: a,
            x: b.clientX,
            y: b.clientY
        }
    }
    var k = {
        passive: !0
    };
    function l(a, b) {
        b = b;
        while (b != null) {
            if (b === a)
                return !0;
            if (b._hoverEventTarget)
                return !1;
            b = b.parentNode
        }
        return !1
    }
    function a(a, b) {
        var e = b.disabled
          , f = b.onHoverStart
          , g = b.onHoverMove
          , m = b.onHoverEnd
          , n = b.onHoverChange
          , o = c("ReactUseEvent.react")("touchstart", k)
          , p = c("ReactUseEvent.react")("mouseover", k)
          , q = c("ReactUseEvent.react")("mouseout", k)
          , r = c("ReactUseEvent.react")("mousemove", k)
          , s = c("ReactUseEvent.react")("pointerover", k)
          , t = c("ReactUseEvent.react")("pointerout", k)
          , u = c("ReactUseEvent.react")("pointermove", k)
          , v = c("ReactUseEvent.react")("pointercancel", k)
          , w = i({
            isHovered: !1,
            isTouched: !1
        });
        h(function() {
            var b = a.current
              , c = w.current;
            if (b !== null && c !== null) {
                b._hoverEventTarget = !0;
                var h = document
                  , i = function(a) {
                    if (e === !0) {
                        y(a);
                        return
                    }
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useHover"))
                        return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useHover");
                    !c.isHovered && !l(b, a.relatedTarget) && (c.isHovered = !0,
                    f && f(j("hoverstart", a, b)),
                    n && n(!0),
                    d("ReactEventHelpers").hasPointerEvents ? (u.setListener(h, x),
                    v.setListener(h, y),
                    t.setListener(h, k)) : q.setListener(h, k))
                }
                  , k = function(a) {
                    c.isHovered && !l(b, a.relatedTarget) && (c.isHovered = !1,
                    m && m(j("hoverend", a, b)),
                    n && n(!1),
                    y(a))
                }
                  , x = function(a) {
                    c.isTouched = !1;
                    if (e === !0) {
                        y(a);
                        return
                    }
                    c.isHovered && (g && g(j("hovermove", a, b)))
                }
                  , y = function(a) {
                    c.isTouched = !1,
                    d("ReactEventHelpers").hasPointerEvents ? (u.setListener(h, null),
                    v.setListener(h, null),
                    t.setListener(h, null)) : q.setListener(h, null),
                    k(a)
                };
                d("ReactEventHelpers").hasPointerEvents ? s.setListener(b, function(a) {
                    a.pointerType !== "touch" && i(a)
                }) : (p.setListener(b, function(a) {
                    c.isTouched || i(a)
                }),
                o.setListener(b, function() {
                    c.isTouched = !0
                }),
                r.setListener(h, x));
                c.isHovered && (d("ReactEventHelpers").hasPointerEvents ? (u.setListener(h, x),
                v.setListener(h, y),
                t.setListener(h, k)) : q.setListener(h, k))
            }
        }, [e, n, m, g, f, v, u, t, s, r, q, p, a, o])
    }
    g.useHover = a
}
), 98);


import React, { useEffect, useRef } from 'react';
import { hasEventHookPropagationStopped, stopEventHookPropagation } from 'ReactEventHookPropagation';
import { useEvent } from 'ReactUseEvent.react';
import { hasPointerEvents } from 'ReactEventHelpers';

interface HoverEvent {
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  target: HTMLElement;
  timeStamp: number;
  type: string;
  x: number;
  y: number;
}

interface HoverOptions {
  disabled: boolean;
  onHoverStart?: (event: HoverEvent) => void;
  onHoverMove?: (event: HoverEvent) => void;
  onHoverEnd?: (event: HoverEvent) => void;
  onHoverChange?: (isHovered: boolean) => void;
}

const passiveOptions = {
    passive: true,
};

export function useHover(
  targetElement: React.RefObject<HTMLElement>,
  options: HoverOptions
) {
  const {
    disabled,
    onHoverStart,
    onHoverMove,
    onHoverEnd,
    onHoverChange,
  } = options;

  const touchstartEvent = useEvent('touchstart', { passive: true });
  const mouseoverEvent = useEvent('mouseover', { passive: true });
  const mouseoutEvent = useEvent('mouseout', { passive: true });
  const mousemoveEvent = useEvent('mousemove', { passive: true });
  const pointeroverEvent = useEvent('pointerover', { passive: true });
  const pointeroutEvent = useEvent('pointerout', { passive: true });
  const pointermoveEvent = useEvent('pointermove', { passive: true });
  const pointercancelEvent = useEvent('pointercancel', { passive: true });

  const stateRef = useRef({
    isHovered: false,
    isTouched: false,
  });

  useEffect(() => {
    const element = targetElement.current;
    const state = stateRef.current;


    if (element && !disabled) {
      element._hoverEventTarget = true;

      const documentElement = document;

      const handleHoverStart = (event: MouseEvent) => {
        if (disabled) {
          handlePointerCancel(event)
          return;
        }

        if (hasEventHookPropagationStopped(event, 'useHover')) {
          return;
        }

        stopEventHookPropagation(event, 'useHover');

        if (!state.isHovered && !isHovered(element, event.relatedTarget)) {
          state.isHovered = true;

          if (onHoverStart) {
            onHoverStart(createHoverEvent('hoverstart', event, element));
          }

          if (onHoverChange) {
            onHoverChange(true);
          }

          if (hasPointerEvents) {
            pointermoveEvent.setListener(documentElement, handlePointerMove);
            pointercancelEvent.setListener(documentElement, handlePointerCancel);
            pointeroutEvent.setListener(documentElement, handlePointerOut);
          } else {
            mouseoutEvent.setListener(documentElement, handlePointerOut);
          }
        }
      };

      const handlePointerCancel = (event: HoverEvent) => {
        stateRef.isTouched = false;

        if (hasPointerEvents) {
          pointermoveEvent.setListener(documentElement, null);
          pointercancelEvent.setListener(documentElement, null);
          pointeroutEvent.setListener(documentElement, null);
        } else {
          mouseoutEvent.setListener(documentElement, null);
        }

        handlePointerOut(event as PointerEvent);
      };


      const handlePointerOut = (event: HoverEvent) => {
        if (stateRef.isHovered && !isHovered(element, event.relatedTarget)) {
          state.isHovered = false;
      
          if (onHoverEnd) {
            onHoverEnd(createHoverEvent('hoverend', event, element));
          }
      
          if (onHoverChange) {
            onHoverChange(false);
          }
      
          handlePointerCancel(event)
        }
      };

      const handlePointerMove = (event: PointerEvent) => {
        stateRef.isTouched = false;

        if (disabled) {
          handlePointerCancel(event)
          return;
        }

        stateRef.isHovered && (onHoverMove && onHoverMove(createHoverEvent('hoverend', event, element)));
      };


      if (hasPointerEvents) {
        pointeroverEvent.setListener(element, (e) => {
            e.pointerType !== "touch" && handleHoverStart(e);
        })
      } else {
        mouseoverEvent.setListener(element, (e) => {
            stateRef.isTouched || handleHoverStart(e)
        });
        touchstartEvent.setListener(element, () => {
            stateRef.isTouched = true;
        });
        mousemoveEvent.setListener(documentElement, handlePointerMove);
      }

      if(stateRef.isHovered && hasPointerEvents) {
        
      }


      if (stateRef.isHovered && hasPointerEvents) {
        pointermoveEvent.setListener(documentElement, handlePointerMove);
        pointercancelEvent.setListener(documentElement, handlePointerCancel);
        pointeroutEvent.setListener(documentElement, handlePointerOut);
      } else {
        mouseoutEvent.setListener(documentElement, handlePointerOut);
      }
    }
  }, [disabled, onHoverStart, onHoverMove, onHoverEnd, onHoverChange, touchstartEvent, mouseoverEvent, mouseoutEvent, mousemoveEvent, pointeroverEvent, pointeroutEvent, pointermoveEvent, pointercancelEvent, targetElement]);
}

function createHoverEvent(type: string, event: HoverEvent | MouseEvent | PointerEvent, target: HTMLElement): HoverEvent {
  return {
    clientX: event.clientX,
    clientY: event.clientY,
    pageX: event.pageX,
    pageY: event.pageY,
    screenX: event.screenX,
    screenY: event.screenY,
    target,
    timeStamp: event.timeStamp,
    type,
    x: event.clientX,
    y: event.clientY,
  };
}

function isHovered(target: React.RefObject<HTMLElement> | null, event: Event): boolean {
  while (target !== null) {
    if (target === event.target) {
      return true;
    }

    if (target._hoverEventTarget) {
        return false;
    }
    target = target.parentNode as HTMLElement;
  }

  return false;
}
