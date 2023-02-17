1528: function (e, t, n) {
    "use strict";
    var a = n(8),
        c = n(0),
        r = n.n(c),
        i = n(1),
        l = n(5),
        o = n.n(l),
        u = n(26);
    n(1529);
    t.a = Object(c.memo)((function (e) {
        var t = e.images,
            n = e.isPlay,
            l = void 0 !== n && n,
            s = e.timeout,
            m = void 0 === s ? 10 : s,
            f = e.shuffle,
            d = void 0 === f || f,
            b = e.once,
            h = e.className,
            E = Object(c.useState)(0),
            v = Object(a.a)(E, 2),
            O = v[0],
            g = v[1],
            p = Object(c.useMemo)((function () {
                return d ? u.Array.shuffle(t) : t
            }), [t]),
            j = Object(c.useRef)(O),
            y = Object(c.useRef)(!b);
        j.current = O,
            Object(c.useEffect)((function () {
                if (l && !b) {
                    var e = setTimeout((function () {
                        g(O === p.length - 1 ? 0 : O + 1)
                    }), 1e3 * m);
                    return function () {
                        return clearTimeout(e)
                    }
                }
            }), [p, O, l, b]),
            Object(c.useEffect)((function () {
                l && b && (y.current = !0,
                    g(O === p.length - 1 ? 0 : O + 1))
            }), [l]);
        var I = Object(c.useMemo)((function () {
            return O <= 0 ? [p[p.length - 1], p[0]] : [p[O - 1], p[O]]
        }), [p, O]);
        return r.a.createElement(i.l, {
            className: o()("image-effect", h, {
                "is-play": l
            })
        }, r.a.createElement(i.l, {
            renderAs: "ul"
        }, I.map((function (e, t) {
            var n = t === I.length - 1;
            return r.a.createElement(i.l, {
                renderAs: "li",
                key: "".concat(t, "-").concat(e),
                className: o()({
                    enter: !!y.current && n,
                    exit: !!y.current && !n
                })
            }, r.a.createElement(i.l, {
                renderAs: "img",
                src: e
            }))
        }))))
    }))
},