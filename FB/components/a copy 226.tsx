__d("useStableValue", ["I64", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = (h || d("react")).useRef;

    function a(a) {
        return k(a, (i || (i = d("I64"))).equal)
    }

    function k(a, b) {
        var c = j(a);
        b(c.current, a) || (c.current = a);
        return c.current
    }
    g.useStableI64 = a;
    g.useStableValue = k
}), 98);