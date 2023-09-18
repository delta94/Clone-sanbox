__d("FocusWithinHandlerNonStrictMode_DEPRECATED.react", ["ReactFocusEvent.react", "react"], (function (a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
        j = b.useRef,
        k = b.useState,
        l = h.unstable_Scope;

    function a(a) {
        var b, c = a.children,
            e = a.onFocusChange,
            f = a.onFocusVisibleChange,
            g = a.onFocusWithin,
            m = a.onBlurWithin;
        a = a.testOnly;
        var n = j(null);
        b = k((b = a && a.focus) != null ? b : !1);
        var o = b[0],
            p = b[1];
        a = k((b = a && a.focusVisible) != null ? b : !1);
        b = a[0];
        var q = a[1];
        a = d("ReactFocusEvent.react").useFocusWithin(n, i(function () {
            return {
                onFocusWithin: function (a) {
                    g && !o && g(a)
                },
                onBlurWithin: function (a) {
                    m && o && m(a)
                },
                onFocusWithinChange: e ? function (a) {
                    p(a), e(a)
                } : p,
                onFocusWithinVisibleChange: f ? function (a) {
                    q(a), f(a)
                } : q
            }
        }, [o, m, e, f, g]));
        return h.jsx(l, {
            ref: a,
            children: typeof c === "function" ? c(o, b) : c
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { useMemo, useRef, useState } from 'react';
import { useFocusWithin } from 'ReactFocusEvent.react';

type FocusWithinHandlerNonStrictModeProps = {
  children: (focused: boolean, focusVisible: boolean) => React.ReactNode;
  onFocusChange?: (focused: boolean) => void;
  onFocusVisibleChange?: (focusVisible: boolean) => void;
  onFocusWithin?: (event: Event) => void;
  onBlurWithin?: (event: Event) => void;
  testOnly?: boolean;
};

const FocusWithinHandlerNonStrictMode_DEPRECATED: React.FC<FocusWithinHandlerNonStrictModeProps> = ({
  children,
  onFocusChange,
  onFocusVisibleChange,
  onFocusWithin,
  onBlurWithin,
  testOnly,
}) => {
  const scopeRef = useRef(null);
  const [focus, setFocus] = useState(testOnly?.focus || false);
  const [focusVisible, setFocusVisible] = useState(testOnly?.focusVisible || false);

  const handlers = useFocusWithin(scopeRef, useMemo(() => {
    return {
      onFocusWithin: (event) => {
        onFocusWithin && !focus && onFocusWithin(event);
      },
      onBlurWithin: (event) => {
        onBlurWithin && focus && onBlurWithin(event);
      },
      onFocusWithinChange: (isFocused) => {
        setFocus(isFocused);
        onFocusChange && onFocusChange(isFocused);
      },
      onFocusWithinVisibleChange: (isVisible) => {
        setFocusVisible(isVisible);
        onFocusVisibleChange && onFocusVisibleChange(isVisible);
      },
    };
  }, [focus, onFocusWithin, onBlurWithin, onFocusChange, onFocusVisibleChange]));

  return (
    <React.unstable_Scope ref={handlers}>
      {typeof children === 'function' ? children(focus, focusVisible) : children}
    </React.unstable_Scope>
  );
};

FocusWithinHandlerNonStrictMode_DEPRECATED.displayName = 'FocusWithinHandlerNonStrictMode_DEPRECATED';

export default FocusWithinHandlerNonStrictMode_DEPRECATED;
