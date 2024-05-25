__d("useBoolean", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useState;

    function a(a) {
        a = j(a);
        var b = a[0],
            c = a[1];
        return {
            value: b,
            set: c,
            toggle: i(function () {
                return c(function (a) {
                    return !a
                })
            }, []),
            setTrue: i(function () {
                return c(!0)
            }, []),
            setFalse: i(function () {
                return c(!1)
            }, [])
        }
    }
    g["default"] = a
}), 98);

import { useCallback, useState } from 'react';

interface BooleanState {
  value: boolean;
  set: (value: boolean) => void;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

function useBoolean(initialValue: boolean): BooleanState {
  const [value, setValue] = useState<boolean>(initialValue);

  const set = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return {
    value,
    set,
    toggle,
    setTrue,
    setFalse,
  };
}

export default useBoolean;
