__d("useCometPreloaderImpl", ["Bootloader", "CometMouseActivity", "JSScheduler", "clearTimeout", "ifRequired", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = i || d("react");
    var j = b.useCallback
      , k = b.useEffect
      , l = b.useRef;
    function m(a) {
        return a.pointerType === "mouse"
    }
    function n(a) {
        a && (typeof a === "function" ? a() : a.preload())
    }
    var o = 50;
    function a(a, b, d, e) {
        var f = l(null)
          , g = l(null)
          , i = l(null)
          , p = function(a) {
            c("ifRequired")("setTimeoutCometInternals", function(b) {
                f.current = b.setTimeoutAtPriority_DO_NOT_USE((h || (h = c("JSScheduler"))).priorities.unstable_UserBlocking, a, o)
            }, function() {
                f.current = c("setTimeout")(a, o)
            })
        }
          , q = j(function(e, f, g) {
            if (a === "tooltip" || (a === "button" || a === "button_aggressive") && b != null) {
                e = function() {
                    a === "tooltip" ? (n(d),
                    n(b),
                    c("Bootloader").forceFlush()) : (a === "button" || a === "button_aggressive") && (n(b),
                    c("Bootloader").forceFlush()),
                    f && f()
                }
                ;
                p(e)
            }
            if (a === "button_aggressive") {
                e = function() {
                    n(d),
                    g && g()
                }
                ;
                i.current != null && (i.current(),
                i.current = null);
                i.current = c("CometMouseActivity").addOnMouseStopCallbackOnce(e)
            }
        }, [d, b, a])
          , r = j(function() {
            c("clearTimeout")(f.current),
            f.current = null,
            e && e(),
            g.current != null && g.current(),
            i.current != null && i.current()
        }, [e])
          , s = j(function(b) {
            if (!m(b))
                return;
            (a === "button" || a === "button_aggressive") && (n(d),
            c("Bootloader").forceFlush())
        }, [d, a])
          , t = j(function(a) {
            (h || (h = c("JSScheduler"))).scheduleSpeculativeCallback(function() {
                a === !0 && (n(d),
                n(b),
                c("Bootloader").forceFlush())
            })
        }, [d, b]);
        k(function() {
            return function() {
                g.current != null && g.current(),
                i.current != null && i.current(),
                c("clearTimeout")(f.current)
            }
        }, []);
        return [q, r, s, t]
    }
    g["default"] = a
}
), 98);

import React, { useCallback, useEffect, useRef } from 'react';
import { setTimeout, clearTimeout } from 'timers';
import Bootloader from 'Bootloader'; 
import CometMouseActivity from 'CometMouseActivity';
import JSScheduler from 'JSScheduler';
import ifRequired from 'ifRequired';

type PreloaderType = 'tooltip' | 'button' | 'button_aggressive';

interface PreloadCallbacks {
    onPreload: () => void;
    onPreloadFrame: () => void;
}
  

function isMouseEvent(event: React.MouseEvent) {
    return event.pointerType === 'mouse';
  }

function preload(loader) {
  if (typeof loader === 'function') {
    loader();
  } else {
    loader.preload();
  }
}

const defaultTimeoutMs = 50;


function useCometPreloaderImpl(
  type: PreloaderType,
  tooltipLoader: (() => void) | undefined,
  buttonLoader: () => void,
  cleanupCallback: () => void,
) {

  const timeoutId = useRef<number | null>(null);
  const mouseStopCallbackRef = useRef<(() => void) | null>(null);
  const aggressiveTimeoutRef = useRef<(() => void) | null>(null);

  const setTimeoutWrapped = (callback: () => void) => {
    ifRequired('setTimeoutCometInternals', (internals) => {
      timeoutId.current = internals.setTimeoutAtPriority_DO_NOT_USE(
        JSScheduler.priorities.unstable_UserBlocking,
        callback, 
        defaultTimeoutMs
      );
    }, () => {
      timeoutId.current = setTimeout(callback, defaultTimeoutMs);
    });
  };


  const handler = useCallback((callback: () => void, mouseStopCallback: () => void, aggressiveCallback: () => void) => {
    if (type === 'tooltip' || 
      (type === 'button' || type === 'button_aggressive') && tooltipLoader
    ) {
      callback = () => {
        if (type === 'tooltip') {
          preload(tooltipLoader);
          preload(buttonLoader);
          Bootloader.forceFlush();
        } else if (type === 'button' || type === 'button_aggressive') {
          preload(buttonLoader);
          Bootloader.forceFlush();
        }
        mouseStopCallback && mouseStopCallback();
      };
      setTimeoutWrapped(callback);
    }

    if (type === 'button_aggressive') {
      callback = () => {
        preload(buttonLoader);
        aggressiveCallback && aggressiveCallback(); 
      };
      if (aggressiveTimeoutRef.current) {
        aggressiveTimeoutRef.current();
        aggressiveTimeoutRef.current = null;  
      }
      aggressiveTimeoutRef.current = CometMouseActivity.addOnMouseStopCallbackOnce(callback); 
    }
  }, [tooltipLoader, buttonLoader, type]);

  const cancel = useCallback(() => {
    clearTimeout(timeoutId.current);
    timeoutId.current = null;
    if (cleanupCallback) {
        cleanupCallback();
    }
    if (mouseStopCallbackRef.current) {
        mouseStopCallbackRef.current();
    }
    if (aggressiveTimeoutRef.current != null) {
        aggressiveTimeoutRef.current();
    }
  }, [cleanupCallback]);

  const onMouseMove = useCallback((event) => {
    if (!isMouseEvent(event)) {
      return;
    }
    if (type === 'button' || type === 'button_aggressive') {
      preload(buttonLoader);
      Bootloader.forceFlush();
    }
  }, [buttonLoader, type]);

  const onInteraction = useCallback((state: boolean) => {
    JSScheduler.scheduleSpeculativeCallback(() => {
      if (state === true) {
        preload(buttonLoader);
        preload(tooltipLoader);
        Bootloader.forceFlush();
      }
    });
  }, [tooltipLoader, buttonLoader]);

  useEffect(() => {
    return () => {
      if (mouseStopCallbackRef.current) {
        mouseStopCallbackRef.current();
      }
      if (aggressiveTimeoutRef.current) {
        aggressiveTimeoutRef.current();  
      }
      clearTimeout(timeoutId.current);
    };
  }, []);

  return [
    handler, 
    cancel,
    onMouseMove,
    onInteraction,
  ];

}

export default useCometPreloaderImpl;