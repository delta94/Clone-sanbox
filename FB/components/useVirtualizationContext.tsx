__d("useVirtualizationContext", ["VirtualizationContext", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useMemo,
        l = b.useRef;

    function a() {
        var a = j(c("VirtualizationContext")),
            b = l(0),
            d = l(null);
        d.current == null && (d.current = new Map());
        var e = i(function (a) {
                var c, e = b.current++;
                (c = d.current) == null ? void 0 : c.set(e, a);
                return function () {
                    var a;
                    (a = d.current) == null ? void 0 : a["delete"](e)
                }
            }, []),
            f = i(function () {
                return d.current == null ? !1 : d.current.size > 0
            }, []),
            g = l(null);
        g.current == null && (g.current = new Map());
        var h = i(function (a, c) {
                var d = b.current++,
                    e = null,
                    f = g.current;
                if (f != null) {
                    var h;
                    f.has(a) || f.set(a, new Map());
                    e = f.get(a);
                    (h = e) == null ? void 0 : h.set(d, c)
                }
                return function () {
                    var b;
                    (b = e) == null ? void 0 : b["delete"](d);
                    ((b = e) == null ? void 0 : b.size) === 0 && (f == null ? void 0 : f["delete"](a))
                }
            }, []),
            m = i(function (a) {
                var b;
                return (b = (b = g.current) == null ? void 0 : b.has(a)) != null ? b : !1
            }, []),
            n = k(function () {
                var b;
                return (b = a) != null ? b : {
                    createFlag: h,
                    createPin: e,
                    hasFlag: m,
                    hasPin: f
                }
            }, [a, e, h, m, f]);
        return n
    }
    g["default"] = a
}), 98);


import { VirtualizationContext } from "VirtualizationContext";
import React, { useCallback, useContext, useMemo, useRef } from "react";

function useVirtualizationContext() {
  const virtContext = useContext(VirtualizationContext);
  const pinCountRef = useRef(0);
  const pinMapRef = useRef<Map<number, any>>(null);

  if (pinMapRef.current == null) {
    pinMapRef.current = new Map();
  }

  const createPin = useCallback(
    (obj: any) => {
      const pinId = pinCountRef.current++;
      pinMapRef.current?.set(pinId, obj);
      return () => {
        pinMapRef.current?.delete(pinId);
      };
    },
    []
  );

  const hasPin = useCallback(
    () => (pinMapRef.current == null ? false : pinMapRef.current.size > 0),
    []
  );

  const flagMapRef = useRef<Map<string, Map<number, any>>>();

  if (flagMapRef.current == null) {
    flagMapRef.current = new Map();
  }

  const createFlag = useCallback(
    (key: string, obj: any) => {
      const flagId = pinCountRef.current++;
      let flagMap = flagMapRef.current?.get(key);
      if (flagMap == null) {
        flagMapRef.current?.set(key, new Map());
        flagMap = flagMapRef.current?.get(key);
      }
      flagMap?.set(flagId, obj);
      return () => {
        flagMap?.delete(flagId);
        if (flagMap?.size === 0) {
          flagMapRef.current?.delete(key);
        }
      };
    },
    []
  );

  const hasFlag = useCallback(
    (key: string) =>
      flagMapRef.current == null ? false : flagMapRef.current.has(key),
    []
  );

  const virtContextValue = useMemo(
    () =>
      virtContext ?? {
        createFlag,
        createPin,
        hasFlag,
        hasPin,
      },
    [virtContext, createFlag, createPin, hasFlag, hasPin]
  );

  return virtContextValue;
}

export default useVirtualizationContext;