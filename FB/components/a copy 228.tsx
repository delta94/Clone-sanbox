__d("deepEquals", ["isPrimitive"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
            return function (b, c) {
                return l(b, a[c])
            }
        },
        i = function (a, b) {
            return function (c) {
                return c in a && c in b && l(a[c], b[c])
            }
        },
        j = function (a, b) {
            if (a.size !== b.size) return !1;
            b = new Set(b);
            for (var a = a.keys(), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= a.length) break;
                    f = a[e++]
                } else {
                    e = a.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (b.has(f)) b["delete"](f);
                else if (c("isPrimitive")(f)) return !1;
                else {
                    f = k(b, f);
                    if (f != null) b["delete"](f);
                    else return !1
                }
            }
            return b.size === 0
        };

    function k(a, b) {
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
            if (l(e, b)) return e
        }
        return null
    }

    function l(a, b) {
        if (a === b) return !0;
        if (c("isPrimitive")(a)) return !1;
        if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) return !1;
        if (Array.isArray(a)) return a.length === b.length && a.every(h(b));
        if (a instanceof Set) return j(a, b);
        var d = Object.keys(a);
        return d.length !== Object.keys(b).length ? !1 : d.every(i(a, b))
    }
    g["default"] = l
}), 98);


import { isPrimitive } from './your_module_path';

const deepEquals = (a: any, b: any): boolean => {
    const arrayComparator = (arrA: any[], arrB: any[]): boolean => {
        if (arrA.length !== arrB.length) return false;
        const setB = new Set(arrB);
        for (const valA of arrA) {
            if (setB.has(valA)) {
                setB.delete(valA);
            } else if (isPrimitive(valA)) {
                return false;
            } else {
                const found = findInSet(setB, valA);
                if (found !== null) {
                    setB.delete(found);
                } else {
                    return false;
                }
            }
        }
        return setB.size === 0;
    };

    const findInSet = (set: Set<any>, val: any): any => {
        for (const entry of set) {
            if (deepEquals(entry, val)) {
                return entry;
            }
        }
        return null;
    };

    const objectComparator = (objA: object, objB: object): boolean => {
        const keysA = Object.keys(objA);
        if (keysA.length !== Object.keys(objB).length) return false;
        return keysA.every((key) => {
            if (!(key in objB) || !deepEquals(objA[key], objB[key])) return false;
            return true;
        });
    };

    if (a === b) return true;
    if (isPrimitive(a) || isPrimitive(b)) return false;
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) return false;
    if (Array.isArray(a)) return arrayComparator(a, b);
    if (a instanceof Set) return arrayComparator(Array.from(a), Array.from(b));
    if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
    return objectComparator(a, b);
};

export default deepEquals;
