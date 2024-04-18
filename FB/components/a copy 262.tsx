__d("I64", ["bs_caml", "bs_caml_format", "bs_caml_int64", "bs_int64", "nullthrows"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;

    function a(a) {
        return function () {
            var b = a.apply(void 0, arguments);
            b._tag = "i64";
            return b
        }
    }

    function b(a) {
        return function () {
            var b = a.apply(void 0, arguments);
            b != null && (b._tag = "i64");
            return b
        }
    }
    f = a((h || (h = c("bs_caml_int64"))).mk);
    var j = a(h.succ),
        k = a(function () {
            return (h || (h = c("bs_caml_int64"))).min_int
        })(),
        l = a(function () {
            return (h || (h = c("bs_caml_int64"))).max_int
        })(),
        m = a(function () {
            return (h || (h = c("bs_caml_int64"))).one
        })(),
        n = a(function () {
            return (h || (h = c("bs_caml_int64"))).zero
        })(),
        o = a(function () {
            return (h || (h = c("bs_caml_int64"))).neg_one
        })(),
        p = a(h.of_int32),
        q = a(h.add),
        r = a(h.neg),
        s = a(h.sub),
        t = a(h.lsl_),
        u = a(h.lsr_),
        v = a(h.asr_),
        w = a(h.mul),
        x = a(h.xor),
        y = a(h.or_),
        z = a(h.and_),
        A = a(h.of_float),
        B = a(h.div),
        C = a(h.mod_),
        D = a(function () {
            return c("bs_int64").minus_one
        })(),
        E = a(c("bs_int64").abs),
        F = a(c("bs_int64").lognot);
    b = b(c("bs_int64").of_string_opt);
    var G, H;
    if (typeof BigInt === "function") {
        var I = BigInt(32),
            J = BigInt(4294967295);
        G = function (a) {
            return BigInt.asIntN(64, (BigInt(a[0]) << I) + BigInt(a[1])).toString()
        };
        H = function (a) {
            a = BigInt.asIntN(64, BigInt(a));
            a = [Number(a >> I), Number(a & J)];
            a._tag = "i64";
            return a
        }
    } else G = (h || (h = c("bs_caml_int64"))).to_string, H = a(c("bs_caml_format").caml_int64_of_string);
    G = G;
    H = H;
    var K = a((i || (i = c("bs_caml"))).i64_max);
    a = a(i.i64_min);

    function L(a) {
        if (Array.isArray(a) && a.length === 2) {
            var b = a[0];
            a = a[1];
            if (typeof b === "number" && Number.isInteger(b) && typeof a === "number" && Number.isInteger(a)) {
                b = [b, a];
                b._tag = "i64";
                return b
            }
        }
        return void 0
    }

    function d(a) {
        return c("nullthrows")(L(a))
    }

    function e(a) {
        return (a == null ? void 0 : a._tag) === "i64"
    }
    g.mk = f;
    g.succ = j;
    g.min_int = k;
    g.max_int = l;
    g.one = m;
    g.zero = n;
    g.neg_one = o;
    g.of_int32 = p;
    g.to_int32 = h.to_int32;
    g.add = q;
    g.neg = r;
    g.sub = s;
    g.lsl_ = t;
    g.lsr_ = u;
    g.asr_ = v;
    g.is_zero = h.is_zero;
    g.mul = w;
    g.xor = x;
    g.or_ = y;
    g.and_ = z;
    g.to_float = h.to_float;
    g.of_float = A;
    g.div = B;
    g.mod_ = C;
    g.compare = h.compare;
    g.minus_one = D;
    g.abs = E;
    g.lognot = F;
    g.of_string_opt = b;
    g.equal = c("bs_int64").equal;
    g.to_string = G;
    g.of_string = H;
    g.gt = i.i64_gt;
    g.ge = i.i64_ge;
    g.lt = i.i64_lt;
    g.le = i.i64_le;
    g.max = K;
    g.min = a;
    g.cast = L;
    g.castExn = d;
    g.isI64 = e
}), 98);

import { bs_caml, bs_caml_format, bs_caml_int64, bs_int64, nullthrows } from "somewhere";

export function mk(a) {
    return function () {
        var b = a.apply(undefined, arguments);
        b._tag = "i64";
        return b;
    }
}

export function succ(a) {
    return function () {
        var b = a.apply(undefined, arguments);
        b != null && (b._tag = "i64");
        return b;
    }
}

export const min_int = mk(bs_caml_int64.mk)();
export const max_int = mk(bs_caml_int64.mk)();
export const one = mk(bs_caml_int64.one)();
export const zero = mk(bs_caml_int64.zero)();
export const neg_one = mk(bs_caml_int64.neg_one)();
export const of_int32 = mk(bs_caml_int64.of_int32)();
export const to_int32 = bs_caml_int64.to_int32;
export const add = mk(bs_caml_int64.add)();
export const neg = mk(bs_caml_int64.neg)();
export const sub = mk(bs_caml_int64.sub)();
export const lsl_ = mk(bs_caml_int64.lsl_)();
export const lsr_ = mk(bs_caml_int64.lsr_)();
export const asr_ = mk(bs_caml_int64.asr_)();
export const mul = mk(bs_caml_int64.mul)();
export const xor = mk(bs_caml_int64.xor)();
export const or_ = mk(bs_caml_int64.or_)();
export const and_ = mk(bs_caml_int64.and_)();
export const to_float = bs_caml_int64.to_float;
export const of_float = mk(bs_caml_int64.of_float)();
export const div = mk(bs_caml_int64.div)();
export const mod_ = mk(bs_caml_int64.mod_)();
export const minus_one = mk(bs_int64.minus_one)();
export const abs = mk(bs_int64.abs)();
export const lognot = mk(bs_int64.lognot)();
export const of_string_opt = b => b(bs_int64.of_string_opt);
export const equal = bs_int64.equal;
export const to_string = bs_caml_int64.to_string;
export const of_string = bs_caml_format.caml_int64_of_string;

export const gt = bs_caml.i64_gt;
export const ge = bs_caml.i64_ge;
export const lt = bs_caml.i64_lt;
export const le = bs_caml.i64_le;

export const max = mk(bs_caml.i64_max)();
export const min = mk(bs_caml.i64_min)();
export const cast = a => {
    if (Array.isArray(a) && a.length === 2) {
        var b = a[0];
        a = a[1];
        if (typeof b === "number" && Number.isInteger(b) && typeof a === "number" && Number.isInteger(a)) {
            b = [b, a];
            b._tag = "i64";
            return b;
        }
    }
    return undefined;
};
export const castExn = a => nullthrows(cast(a));
export const isI64 = a => (a == null ? undefined : a._tag) === "i64";
