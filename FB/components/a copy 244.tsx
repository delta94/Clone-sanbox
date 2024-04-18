__d("bs_int64", ["bs_caml", "bs_caml_format", "bs_caml_int64", "bs_caml_js_exceptions"], (function (a, b, c, d, e, f) {
    "use strict";
    var g, h;

    function a(a) {
        return (g || (g = b("bs_caml_int64"))).sub(a, g.one)
    }

    function c(a) {
        if ((h || (h = b("bs_caml"))).i64_ge(a, (g || (g = b("bs_caml_int64"))).zero)) return a;
        else return (g || (g = b("bs_caml_int64"))).neg(a)
    }

    function d(a) {
        return (g || (g = b("bs_caml_int64"))).xor(a, g.neg_one)
    }

    function e(a) {
        try {
            return b("bs_caml_format").caml_int64_of_string(a)
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Failure") return;
            throw a
        }
    }
    var i = (g || (g = b("bs_caml_int64"))).compare;

    function j(a, c) {
        return (g || (g = b("bs_caml_int64"))).compare(a, c) === 0
    }
    var k = g.zero,
        l = g.one,
        m = g.neg_one,
        n = g.succ,
        o = g.max_int,
        p = g.min_int,
        q = g.to_string;
    f.zero = k;
    f.one = l;
    f.minus_one = m;
    f.succ = n;
    f.pred = a;
    f.abs = c;
    f.max_int = o;
    f.min_int = p;
    f.lognot = d;
    f.of_string_opt = e;
    f.to_string = q;
    f.compare = i;
    f.equal = j
}), null);