__d("FocusWithinHandlerStrictMode.react", ["ReactFocusEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useInsertionEffect
      , j = b.useMemo
      , k = b.useRef
      , l = b.useState
      , m = h.unstable_Scope;
    function a(a) {
        var b, c = a.children, e = a.onFocusChange, f = a.onFocusVisibleChange, g = a.onFocusWithin, n = a.onBlurWithin;
        a = a.testOnly;
        var o = k(null);
        b = l((b = a && a.focus) != null ? b : !1);
        var p = b[0]
          , q = b[1];
        a = l((b = a && a.focusVisible) != null ? b : !1);
        b = a[0];
        var r = a[1]
          , s = d("ReactFocusEvent.react").useFocusWithinStrictMode(j(function() {
            return {
                onFocusWithin: function(a) {
                    g && !p && g(a)
                },
                onBlurWithin: function(a) {
                    n && p && n(a)
                },
                onFocusWithinChange: e ? function(a) {
                    q(a),
                    e(a)
                }
                : q,
                onFocusWithinVisibleChange: f ? function(a) {
                    r(a),
                    f(a)
                }
                : r
            }
        }, [p, n, e, f, g]));
        i(function() {
            s(o.current);
            return function() {
                s(null)
            }
        }, [o, s]);
        return h.jsx(m, {
            ref: o,
            children: typeof c === "function" ? c(p, b) : c
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React, { useMemo, useRef, useState, useEffect, useInsertionEffect } from 'react';
import { useFocusWithin as unstable_Scope } from 'react';
import { useFocusWithinStrictMode } from 'ReactFocusEvent.react';

interface FocusWithinHandlerProps {
  children: (focus: boolean, focusVisible: boolean) => React.ReactNode;
  onFocusChange?: (focus: boolean) => void;
  onFocusVisibleChange?: (focusVisible: boolean) => void;
  onFocusWithin?: (event: React.FocusEvent) => void;
  onBlurWithin?: (event: React.FocusEvent) => void;
  testOnly?: {
    focus?: boolean;
    focusVisible?: boolean;
  };
}

const FocusWithinHandlerStrictMode: React.FC<FocusWithinHandlerProps> = ({
  children,
  onFocusChange,
  onFocusVisibleChange,
  onFocusWithin,
  onBlurWithin,
  testOnly,
}) => {
  const focusRef = useRef(null);
  const [focus, setFocus] = useState(testOnly?.focus || false);
  const [focusVisible, setFocusVisible] = useState(testOnly?.focusVisible || false);

  const _onFocusWithin = (value) => {
    onFocusWithin && !focus && onFocusWithin(value);
  };

  const _onBlurWithin = (value) => {
    onBlurWithin && focus && onBlurWithin(value);
  };

  const handler = useFocusWithinStrictMode(
    focusRef,
    useMemo(() => {
      return {
        onFocusWithin: _onFocusWithin,
        onBlurWithin: _onBlurWithin,
        onFocusWithinChange: onFocusChange ? (value) => {
            setFocus(value)
            onFocusChange(value)
        } : setFocus,
        onFocusWithinVisibleChange: onFocusVisibleChange ? (value) => {
            setFocusVisible(value)
            onFocusVisibleChange(value)
        } : setFocusVisible,
      };
    }, [focus, onBlurWithin, onFocusWithin, onFocusChange, onFocusVisibleChange])
  );

  useInsertionEffect(() => {
    handler(focusRef.current);
    return () => {
        handler(null);
    };
  }, [handler, focusRef]);

  return (
    <unstable_Scope ref={focusRef}>
      {typeof children === 'function' ? children(focus, focusVisible) : children}
    </unstable_Scope>
  );
};

FocusWithinHandlerStrictMode.displayName = `${FocusWithinHandlerStrictMode.name} [from ${'your module ID'}]`;

export default FocusWithinHandlerStrictMode;


