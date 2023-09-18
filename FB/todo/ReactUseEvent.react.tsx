__d("ReactUseEvent.react", ["ReactDOMComet", "react", "useUnsafeRef_DEPRECATED"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useLayoutEffect;

    function a(a, b) {
        var e = c("useUnsafeRef_DEPRECATED")(null),
            f = e.current;
        b && (b.passive = void 0);
        if (f === null) {
            var g = d("ReactDOMComet").unstable_createEventHandle(a, b),
                i = new Map();
            f = {
                setListener: function (a, b) {
                    var c = i.get(a);
                    c !== void 0 && c();
                    if (b === null) {
                        i["delete"](a);
                        return
                    }
                    c = g(a, b);
                    i.set(a, c)
                },
                clear: function () {
                    var a = Array.from(i.values());
                    for (var b = 0; b < a.length; b++) a[b]();
                    i.clear()
                }
            };
            e.current = f
        }
        h(function () {
            return function () {
                f !== null && f.clear(), e.current = null
            }
        }, [f]);
        return f
    }
    g["default"] = a
}), 98);


import React, { SyntheticEvent, useRef } from "react";
const ReactDOMComet = require("react-dom");
import { useLayoutEffect_SAFE_FOR_SSR } from "@farfetchd/experimental";

interface UseEventHandle {
  clear: () => void;
  setListener: (
    target: EventTarget,
    callback?: (e: SyntheticEvent<EventTarget>) => void
  ) => void;
}

interface OwnOptions {
  passive?: any;
  capture?: boolean;
}

const reactUseEvent_React = (
  event: string,
  options?: OwnOptions
): UseEventHandle => {
  const handleRef = useRef<UseEventHandle | undefined>(undefined);
  let useEventHandle = handleRef.current;

  options && (options.passive = undefined);

  if (useEventHandle == null) {
    const setEventHandle = ReactDOMComet.unstable_createEventHandle(
      event,
      options
    );

    const clears = new Map();

    useEventHandle = {
      setListener: (
        target: EventTarget,
        callback?: (syncEvent: SyntheticEvent<EventTarget>) => void
      ) => {
        let clear = clears.get(target);

        if (clear != null) {
          clear();
        }

        if (callback == null) {
          clears.delete(target);
          return;
        }

        clear = setEventHandle(target, callback);
        clears.set(target, clear);
      },

      clear: (): void => {
        clears.forEach((clr) => clr());
        clears.clear();
      },
    };
    handleRef.current = useEventHandle;
  }

  // use effect | useLayoutEffect []
  useLayoutEffect_SAFE_FOR_SSR(() => {
    return function () {
      if (useEventHandle != null) {
        useEventHandle.clear();
      }
      handleRef.current = undefined;
    };
  }, [useEventHandle]);

  return useEventHandle;
};

export default reactUseEvent_React;
export { reactUseEvent_React as ReactUseEvent_React };