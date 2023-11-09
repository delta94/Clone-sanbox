__d("I64", ["bs_caml", "bs_caml_format", "bs_caml_int64", "bs_int64", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    if (typeof BigInt === "function" && c("gkx")("9387")) {
        var j = BigInt(32)
          , k = BigInt(4294967295);
        b = function(a) {
            return BigInt.asIntN(64, (BigInt(a[0]) << j) + BigInt(a[1])).toString()
        }
        ;
        d = function(a) {
            a = BigInt.asIntN(64, BigInt(a));
            return [Number(a >> j), Number(a & k)]
        }
    } else
        b = (h || (h = c("bs_caml_int64"))).to_string,
        d = c("bs_caml_format").caml_int64_of_string;
    e = b;
    f = d;
    function a(a) {
        return Array.isArray(a) && a.length === 2 && Number.isInteger(a[0]) && Number.isInteger(a[1]) ? a : void 0
    }
    g.mk = (h || (h = c("bs_caml_int64"))).mk;
    g.succ = h.succ;
    g.min_int = h.min_int;
    g.max_int = h.max_int;
    g.one = h.one;
    g.zero = h.zero;
    g.neg_one = h.neg_one;
    g.of_int32 = h.of_int32;
    g.to_int32 = h.to_int32;
    g.add = h.add;
    g.neg = h.neg;
    g.sub = h.sub;
    g.lsl_ = h.lsl_;
    g.lsr_ = h.lsr_;
    g.asr_ = h.asr_;
    g.is_zero = h.is_zero;
    g.mul = h.mul;
    g.xor = h.xor;
    g.or_ = h.or_;
    g.and_ = h.and_;
    g.to_float = h.to_float;
    g.of_float = h.of_float;
    g.div = h.div;
    g.mod_ = h.mod_;
    g.compare = h.compare;
    g.minus_one = c("bs_int64").minus_one;
    g.abs = c("bs_int64").abs;
    g.lognot = c("bs_int64").lognot;
    g.of_string_opt = c("bs_int64").of_string_opt;
    g.equal = c("bs_int64").equal;
    g.to_string = e;
    g.of_string = f;
    g.gt = (i || (i = c("bs_caml"))).i64_gt;
    g.ge = i.i64_ge;
    g.lt = i.i64_lt;
    g.le = i.i64_le;
    g.max = i.i64_max;
    g.min = i.i64_min;
    g.cast = a
}
), 98);