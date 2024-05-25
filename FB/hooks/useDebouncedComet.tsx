__d("useDebouncedComet", ["CometDebounce", "react", "useStable"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
        j = b.useLayoutEffect,
        k = b.useRef;

    function a(a, b) {
        var d = k(a);
        j(function () {
            d.current = a
        }, [a]);
        var e = c("useStable")(function () {
            return c("CometDebounce")(function () {
                d.current.apply(void 0, arguments)
            }, b)
        });
        i(function () {
            return function () {
                e.reset()
            }
        }, []);
        return e
    }
    g["default"] = a
}), 98);


import { useEffect, useLayoutEffect, useRef } from 'react';
import useStable from './useStable'; // Assuming useStable is exported from a separate file
import CometDebounce from 'CometDebounce'; // Assuming CometDebounce is exported from a separate file

const useDebouncedComet = <T extends (...args: any[]) => void>(callback: T, delay: number): T => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useStable(() => {
    return CometDebounce((...args: any[]) => {
      callbackRef.current(...args);
    }, delay);
  });

  useEffect(() => {
    return () => {
      debouncedCallback.reset();
    };
  }, []);

  return debouncedCallback as T;
};

export default useDebouncedComet;
