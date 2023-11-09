__d("CometHeroInteractionWithDiv.react", ["LegacyHidden", "cr:1011783", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a, b) {
        var d = a.children
          , e = a.hidden
          , f = a.htmlAttributes
          , g = a.pageletAriaProps;
        a = a.xstyle;
        return h.jsx(c("LegacyHidden"), {
            htmlAttributes: babelHelpers["extends"]({
                className: c("stylex")(a),
                onMouseLeave: f == null ? void 0 : f.onMouseLeave,
                style: f == null ? void 0 : f.style
            }, g),
            mode: e === !0 ? "hidden" : "visible",
            ref: b,
            children: d
        })
    }
    ;
    f = (e = b("cr:1011783")) != null ? e : h.forwardRef(a);
    g["default"] = f
}
), 98);