__d("CometSettingsListDropdownLoadingState.react", ["ARIA_LABEL_PLACEHOLDER_FIXME", "CometListCellGlimmer.react", "CometPopover.react", "TetraText.react", "qex", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"),
        k = c("qex")._("999"),
        l = {
            actions: {
                height: "x17rw0jw",
                width: "xvy4d1p",
                $$css: !0
            },
            card: {
                width: "x1cvmir6",
                $$css: !0
            },
            cardFullHeight: {
                height: "x20eyyc",
                maxWidth: "xvv7f4i",
                $$css: !0
            },
            heading: {
                alignItems: "x6s0dn4",
                display: "x78zum5",
                flexShrink: "x2lah0s",
                justifyContent: "x1qughib",
                minHeight: "x21xpn4",
                paddingTop: "xz9dl7a",
                paddingEnd: "x1pi30zi",
                paddingBottom: "xjkvuk6",
                paddingStart: "x1swvt13",
                $$css: !0
            },
            root: {
                marginEnd: "x1emribx",
                marginLeft: null,
                marginRight: null,
                marginTop: "x1ok221b",
                $$css: !0
            }
        };

    function m(a) {
        var b = a.glimmerSize;
        b = b === void 0 ? 56 : b;
        var d = a.hasActions;
        d = d === void 0 ? !1 : d;
        var e = a.numberOfItems,
            f = a.shouldAnimate;
        a = a.title;
        return f !== !1 && k === !0 ? j.jsx(m.WithoutPopover, {
            glimmerSize: b,
            hasActions: d,
            numberOfItems: e,
            title: a
        }) : j.jsx("div", {
            className: "x1emribx x1ok221b",
            children: j.jsx(c("CometPopover.react"), {
                "aria-label": c("ARIA_LABEL_PLACEHOLDER_FIXME"),
                children: j.jsx(m.WithoutPopover, {
                    glimmerSize: b,
                    hasActions: d,
                    numberOfItems: e,
                    title: a
                })
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    var n = 76;
    m.InnerGlimmer = function (a) {
        var b = a.numberOfItems;
        a = a.size;
        a = a === void 0 ? 56 : a;
        return j.jsx(c("CometListCellGlimmer.react"), {
            imageSize: a,
            imageStyle: "circle",
            numberOfItems: b != null ? b : Math.max(Math.ceil((window.innerHeight - 72 - 45) / n), 1)
        })
    };
    m.WithoutPopover = function (a) {
        var b = a.glimmerSize;
        b = b === void 0 ? 56 : b;
        var d = a.hasActions;
        d = d === void 0 ? !1 : d;
        var e = a.numberOfItems;
        a = a.title;
        return j.jsxs("div", {
            className: (h || (h = c("stylex")))(l.card, e == null && l.cardFullHeight),
            children: [j.jsxs("div", {
                className: h([l.heading]),
                children: [j.jsx(c("TetraText.react"), {
                    isSemanticHeading: !0,
                    type: "headlineEmphasized1",
                    children: a
                }), d && j.jsx("div", {
                    className: "x17rw0jw xvy4d1p"
                })]
            }), j.jsx(m.InnerGlimmer, {
                numberOfItems: e,
                size: b
            })]
        })
    };
    g["default"] = m
}), 98);