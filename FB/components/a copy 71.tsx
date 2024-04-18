__d("CometSection.react", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a, b) {
        var c = a.children,
            d = a.className,
            e = a.name,
            f = a.role;
        a = a.testid;
        return i.jsx("div", {
            "aria-label": e,
            className: d,
            "data-testid": void 0,
            ref: b,
            role: f,
            children: c
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b
}), 98);