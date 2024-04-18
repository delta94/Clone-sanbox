__d("useFocusState", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useState;

    function a(a, b) {
        var c = j(!1),
            d = c[0],
            e = c[1];
        c = i(function (b) {
            e(!0), a && a(b)
        }, [a]);
        var f = i(function (a) {
            e(!1), b && b(a)
        }, [b]);
        return [d, c, f]
    }
    g["default"] = a
}), 98);

import React, { useCallback, useState } from 'react';

function useFocusState<T extends HTMLElement = HTMLElement>(onFocus: (event: React.FocusEvent<T>) => void, onBlur: (event: React.FocusEvent<T>) => void): [
    boolean, 
    (event: React.FocusEvent<T>) => void,
    (event: React.FocusEvent<T>) => void
  ] {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusCallback = useCallback((event?: React.FocusEvent<T>) => {
    setIsFocused(true);
    onFocus && onFocus(event);
  }, [onFocus]);

  const onBlurCallback = useCallback((event?: React.FocusEvent<T>) => {
    setIsFocused(false);
    onBlur && onBlur(event);
  }, [onBlur]);

  return [isFocused, onFocusCallback, onBlurCallback];
}

export default useFocusState;
