__d("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", ["clearTimeout", "err", "react", "setTimeout"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
        j = b.useRef;

    function a(a, b) {
        var d = j(null),
            e = j();
        i(function () {
            var b = d.current;
            b !== null ? (c("clearTimeout")(b), d.current = null) : e.current = a();
            return function () {
                function a() {
                    d.current = null;
                    var a = e.current;
                    a && a()
                }
                d.current = c("setTimeout")(a, 0)
            }
        }, [])
    }
    e = i;
    f = e;
    g["default"] = f
}), 98);

import { useEffect, useRef } from 'react';
import { clearTimeout, setTimeout } from 'somewhere'; 

const useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED = (effect: () => void, deps: any[]) => {
  const timeoutRef = useRef<number | null>(null);
  const effectRef = useRef<() => void>();

  useEffect(() => {
    const handleCleanup = () => {
        timeoutRef.current = null;
        const effectResult = effectRef.current;
        effectResult && effectResult();
    };

    const timeoutId = timeoutRef.current;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutRef.current = null;
    } else {
      effectRef.current = effect()
    }

    return () => {
        timeoutRef.current = setTimeout(handleCleanup, 0);
    };
  }, []);
};

export default useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED;
