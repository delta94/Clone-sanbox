import React, {
    SyntheticEvent,
    useRef
} from "react";
import { unstable_createEventHandle } from 'react-dom';

import {
    useLayoutEffect_SAFE_FOR_SSR
} from "useLayoutEffect_SAFE_FOR_SSR";
import gkx from 'gkx';

interface UseEventHandle {
    clear: () => void;
    setListener: (
        target: EventTarget,
        callback ? : (e: SyntheticEvent < EventTarget > ) => void
    ) => void;
}

interface OwnOptions {
    passive ? : any;
    capture ? : boolean;
}

const reactUseEvent = (
    event: string,
    options ? : OwnOptions
): UseEventHandle => {
    const eventHandleRef = useRef < UseEventHandle | undefined > (undefined);
    let eventHandle = eventHandleRef.current;

    if (gkx("1703328")) {
        options && (options.passive = undefined);
      }

    if (eventHandle == null) {
        const setEventHandle = unstable_createEventHandle(
            event,
            options
        );

        const listeners = new Map();

        eventHandle = {
            setListener: (
                target: EventTarget,
                listener ? : (syncEvent: SyntheticEvent < EventTarget > ) => void
            ) => {
                const previousListener = listeners.get(target);
                previousListener !== undefined && previousListener();

              
                if (listener == null) {
                    listeners.delete(target);
                    return;
                }

                const currentListener = setEventHandle(target, listener);
                listeners.set(target, currentListener);
            },

            clear: (): void => {
                const values = Array.from(listeners.values());
                for (let i = 0; i < values.length; i++) {
                  values[i]();
                }
                listeners.clear();
            },
        };
        eventHandleRef.current = eventHandle;
    }

    // use effect | useLayoutEffect []
    useLayoutEffect_SAFE_FOR_SSR(() => {
        return () => {
            if (eventHandle != null) {
                eventHandle.clear();
            }
            eventHandleRef.current = null;
        };
    }, [eventHandle]);

    return eventHandle;
};

export default reactUseEvent;
export {
    reactUseEvent as ReactUseEvent
};


// __d("ReactUseEvent.react", ["ReactDOMComet", "gkx", "react", "useLayoutEffect_SAFE_FOR_SSR", "useUnsafeRef_DEPRECATED"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     d("react").useRef;

//     function a(a, b) {
//         var e = c("useUnsafeRef_DEPRECATED")(null),
//             f = e.current;
//         c("gkx")("1703328") && (b && (b.passive = void 0));
//         if (f === null) {
//             var g = d("ReactDOMComet").unstable_createEventHandle(a, b),
//                 h = new Map();
//             f = {
//                 setListener: function (a, b) {
//                     var c = h.get(a);
//                     c !== void 0 && c();
//                     if (b === null) {
//                         h["delete"](a);
//                         return
//                     }
//                     c = g(a, b);
//                     h.set(a, c)
//                 },
//                 clear: function () {
//                     var a = Array.from(h.values());
//                     for (var b = 0; b < a.length; b++) a[b]();
//                     h.clear()
//                 }
//             };
//             e.current = f
//         }
//         c("useLayoutEffect_SAFE_FOR_SSR")(function () {
//             return function () {
//                 f !== null && f.clear(), e.current = null
//             }
//         }, [f]);
//         return f
//     }
//     g["default"] = a
// }), 98);