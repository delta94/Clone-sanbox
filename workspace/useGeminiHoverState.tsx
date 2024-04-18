__d("useGeminiHoverState", ["react", "useBoolean"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useCallback;

    function a(a, b) {
        var d = c("useBoolean")(!1),
            e = d.set,
            f = d.setFalse,
            g = d.setTrue;
        d = d.value;
        var h = i(function (b) {
                g(), a == null ? void 0 : a(b)
            }, [g, a]),
            j = i(function (a) {
                f(), b == null ? void 0 : b(a)
            }, [f, b]);
        return [d, {
            onMouseEnter: h,
            onMouseLeave: j
        }, e]
    }
    g["default"] = a
}), 98);

import { useCallback } from 'react';
import { useBoolean } from 'useBoolean';

function useGeminiHoverState(
  onHoverIn?: (event: MouseEvent) => void,
  onHoverOut?: (event: MouseEvent) => void
): [boolean, {onMouseEnter: () => void, onMouseLeave: () => void}, (value: boolean) => void] {

  const {value, set, setTrue, setFalse} = useBoolean(false);

  const onMouseEnter = useCallback(
    (event: MouseEvent) => {
      setTrue();
      onHoverIn?.(event);
    }, 
    [setTrue, onHoverIn]
  );

  const onMouseLeave = useCallback(
    (event: MouseEvent) => {
      setFalse();
      onHoverOut?.(event);
    },
    [setFalse, onHoverOut]
  );

  return [
    value, 
    {onMouseEnter, onMouseLeave},
    set
  ];
}

export default useGeminiHoverState;