__d("useDelayedState", ["clearTimeout", "emptyFunction", "react", "setTimeout"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useEffect,
        k = b.useRef,
        l = b.useState;

    function a(a) {
        a = l(a);
        var b = a[0],
            d = a[1],
            e = k(null);
        j(function () {
            return function () {
                return c("clearTimeout")(e.current)
            }
        }, []);
        a = i(function (a, b, f) {
            b === void 0 && (b = 0), f === void 0 && (f = c("emptyFunction")), c("clearTimeout")(e.current), e.current = null, b === 0 ? (d(a), f(a)) : e.current = c("setTimeout")(function () {
                d(a), f(a), e.current = null
            }, b)
        }, []);
        return [b, a]
    }
    g["default"] = a
}), 98);

import { useCallback, useEffect, useRef, useState } from 'react';

type UseDelayedStateResult<T> = readonly [
    T,
    (newState: T, delay?: number, callback?: (state: T) => void) => void
];

function useDelayedState<T>(initialState: T): UseDelayedStateResult<T> {
  const [state, setState] = useState<T>(initialState);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => () => clearTimeout(timeoutRef.current!), []);

  const setDelayedState = useCallback(
    (newState: T, delay = 0, callback: (state: T) => void = () => {}) => {
      clearTimeout(timeoutRef.current!);
      timeoutRef.current = null;

      if (delay === 0) {
        setState(newState);
        callback(newState);
      } else {
        timeoutRef.current = setTimeout(() => {
          setState(newState);
          callback(newState);
          timeoutRef.current = null;
        }, delay);
      }
    },
    [setState]
  );

  return [state, setDelayedState];
}

export default useDelayedState;
