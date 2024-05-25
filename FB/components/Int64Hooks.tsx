__d("Int64Hooks", ["I64", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    f = h || d("react");
    var j = f.useCallback,
        k = f.useEffect,
        l = f.useMemo;

    function m(a) {
        var b = [];
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            Array.isArray(e) && e.length === 2 && Number.isInteger(e[0]) && Number.isInteger(e[1]) ? b.push(e[0], e[1]) : b.push(e, void 0)
        }
        return b
    }

    function a(a, b) {
        return k(a, b == null ? null : m(b))
    }

    function b(a, b) {
        return j(a, b == null ? null : m(b))
    }

    function n(a, b) {
        return l(a, b == null ? null : m(b))
    }

    function c(a, b) {
        return n(function () {
            return a
        }, [a == null].concat(b.map(function (b) {
            return a == null ? void 0 : a[b]
        })))
    }

    function o(a, b) {
        if (a === b) return a !== 0 || b !== 0 || 1 / a === 1 / b;
        else {
            var c = (i || (i = d("I64"))).cast(a);
            if (c != null) {
                var e = (i || (i = d("I64"))).cast(b);
                if (e != null) return (i || (i = d("I64"))).equal(c, e)
            }
            return a !== a && b !== b
        }
    }
    var p = Object.prototype.hasOwnProperty;

    function e(a, b) {
        if (o(a, b)) return !0;
        if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) return !1;
        var c = Object.keys(a),
            d = Object.keys(b);
        if (c.length !== d.length) return !1;
        for (d = 0; d < c.length; d++)
            if (!p.call(b, c[d]) || !o(a[c[d]], b[c[d]])) return !1;
        return !0
    }
    g.useEffectInt64 = a;
    g.useCallbackInt64 = b;
    g.useMemoInt64 = n;
    g.usePickInt64 = c;
    g.mostlyShallowEqual = e
}), 98);
import I64 from 'I64';
import { useCallback, useEffect, useMemo } from 'react';

function flattenArray(arr: Array<any>): number[] {
  const result: number[] = [];
  for (const item of arr) {
    if (Array.isArray(item) && item.length === 2 && Number.isInteger(item[0]) && Number.isInteger(item[1])) {
      result.push(item[0], item[1]);
    } else {
      result.push(item, undefined as any);
    }
  }
  return result;
}

export function useEffectInt64(effect: React.EffectCallback, deps?: Array<number | [number, number]>) {
  return useEffect(effect, deps == null ? null : flattenArray(deps));
}

export function useCallbackInt64<T extends (...args: any[]) => any>(callback: T, deps?: Array<number | [number, number]>) {
  return useCallback(callback, deps == null ? null : flattenArray(deps));
}

export function useMemoInt64<T>(factory: () => T, deps?: Array<number | [number, number]>) {
  return useMemo(factory, deps == null ? null : flattenArray(deps));
}

export function usePickInt64<T extends object>(obj: T, keys: Array<keyof T>) {
  return useMemo(() => {
    const result: Partial<T> = {};
    for (const key of keys) {
      result[key] = obj?.[key];
    }
    return result;
  }, [obj == null, ...keys.map(key => obj?.[key])]);
}

function mostlyShallowEqual(a: any, b: any): boolean {
  if (a === b) return a !== 0 || b !== 0 || 1 / a === 1 / b;
  else {
    const aInt64 = I64.cast(a);
    if (aInt64 != null) {
      const bInt64 = I64.cast(b);
      if (bInt64 != null) return I64.equal(aInt64, bInt64);
    }
    return a !== a && b !== b;
  }
}

export function deepEqual(a: any, b: any): boolean {
  if (mostlyShallowEqual(a, b)) return true;
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!Object.prototype.hasOwnProperty.call(b, key) || !mostlyShallowEqual(a[key], b[key])) return false;
  }

  return true;
}