__d("ReQL", ["BPlusTree", "PromiseOrValue", "ReQLBounds", "ReQLGlobalQueryContext", "ReStoreKeyComparer", "unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = {
        bounds: b,
        filter: f,
        getKeyRange: o,
        map: q,
        take: u
    };

    function m(a, b) {
        try {
            var c = (h || (h = d("ReQLGlobalQueryContext"))).globalQueryContext.contents,
                e = h.getDependencies(b);
            e == null && (h || (h = d("ReQLGlobalQueryContext"))).setDependencies(b, []);
            h.globalQueryContext.contents = b;
            var f, g;
            try {
                f = (h || (h = d("ReQLGlobalQueryContext"))).runFromContextThatHandlesThrownPromise(a), g = (h || (h = d("ReQLGlobalQueryContext"))).getDependencies(b) || []
            } finally {
                (h || (h = d("ReQLGlobalQueryContext"))).setDependencies(b, e), h.globalQueryContext.contents = c
            }
            return [f, g]
        } catch (c) {
            if (c instanceof Promise) return c.then(function () {
                return m(a, b)
            });
            throw c
        }
    }

    function a() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        return b
    }

    function b(a) {
        var b = this;
        return Object.setPrototypeOf({
            direction: b.direction,
            iterator: function (c, e) {
                return b.iterator(c, (i || (i = d("ReQLBounds"))).mergeBounds(a, e))
            },
            keyLength: b.keyLength,
            subscribe: function (c, e) {
                return b.subscribe(c, (i || (i = d("ReQLBounds"))).mergeBounds(a, e))
            }
        }, l)
    }
    var n = Object.setPrototypeOf({
        direction: "asc",
        iterator: function () {
            return {
                next: function () {
                    return {
                        done: !0
                    }
                }
            }
        },
        keyLength: 0,
        subscribe: function () {
            return function () {}
        }
    }, l);

    function e() {
        return n
    }

    function f(a) {
        var b = this,
            c = new Map();
        return Object.setPrototypeOf({
            direction: b.direction,
            iterator: function (e, f) {
                var g = b.iterator(e, f);
                return {
                    next: function (b) {
                        return (j || (j = d("PromiseOrValue"))).loop(function (b) {
                            return (j || (j = d("PromiseOrValue"))).map(g.next(b), function (b) {
                                if (b.done) return {
                                    action: "break",
                                    value: b
                                };
                                var e = b.value,
                                    f = e[0];
                                e = e[1];
                                if (a(e)) {
                                    (i || (i = d("ReQLBounds"))).forEachMatchingBounds(c, f, function (a) {
                                        a.add(JSON.stringify(f))
                                    });
                                    return {
                                        action: "break",
                                        value: b
                                    }
                                }(i || (i = d("ReQLBounds"))).forEachMatchingBounds(c, f, function (a) {
                                    a.delete(JSON.stringify(f))
                                });
                                return {
                                    action: "continue",
                                    value: void 0
                                }
                            })
                        }, b)
                    }
                }
            },
            keyLength: b.keyLength,
            subscribe: function (e, f) {
                var g = {},
                    h = new Set();
                c.set(g, [(i || (i = d("ReQLBounds"))).extendBounds(f, b.keyLength), h]);
                var j = b.subscribe(function (b, c, d) {
                    var f = JSON.stringify(b);
                    if (c.operation === "add" && a(c.value)) {
                        h.add(f);
                        return e(b, c, d)
                    }
                    if (c.operation === "put" && a(c.value)) {
                        if (h.has(f)) return e(b, c, d);
                        h.add(f);
                        return e(b, {
                            operation: "add",
                            value: c.value
                        }, d)
                    }
                    if (c.operation === "put" && h.has(f)) {
                        h.delete(f);
                        return e(b, {
                            operation: "delete"
                        }, d)
                    }
                    if (c.operation === "delete" && h.has(f)) {
                        h.delete(f);
                        return e(b, c, d)
                    }
                }, f);
                return function () {
                    c.delete(g);
                    return j()
                }
            }
        }, l)
    }

    function o() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        var e = this;

        function f(a) {
            return a.gt != null ? {
                gt: [].concat(b, a.gt)
            } : {
                gte: [].concat(b, a.gte)
            }
        }

        function g(a) {
            return a.lt != null ? {
                lt: [].concat(b, a.lt)
            } : {
                lte: [].concat(b, a.lte)
            }
        }

        function h(a) {
            return a == null ? {
                gte: b,
                lte: b
            } : babelHelpers.extends({}, a.gte != null || a.gt != null ? f(a) : {
                gte: b
            }, a.lte != null || a.lt != null ? g(a) : {
                lte: b
            })
        }
        return Object.setPrototypeOf({
            direction: e.direction,
            iterator: function (a, c) {
                var f = e.iterator(a, h(c));
                return {
                    next: function (a) {
                        return (j || (j = d("PromiseOrValue"))).map(f.next(a == null ? a : [].concat(b, a)), function (a) {
                            return a.done ? {
                                done: !0
                            } : {
                                done: !1,
                                value: [a.value[0].slice(b.length), a.value[1]]
                            }
                        })
                    }
                }
            },
            keyLength: e.keyLength - b.length,
            subscribe: function (a, c) {
                return e.subscribe(function (c, d, e) {
                    return a(c.slice(b.length), d, e)
                }, h(c))
            }
        }, l)
    }

    function p(a, b) {
        if (a.direction !== b.direction) throw c("unrecoverableViolation")("merge join requires iterables to be sorted in the same direction", "messenger_web_product");
        return Object.setPrototypeOf({
            direction: a.direction,
            iterator: function (e, f) {
                var g = a.iterator(e, f),
                    h = b.iterator(e, f),
                    i = h.next();

                function l(a) {
                    return (j || (j = d("PromiseOrValue"))).map(i, function (b) {
                        var c = b.done ? !0 : (k || (k = d("ReStoreKeyComparer"))).compareKey(a, b.value[0]) <= 0;
                        c = c ? b : h.next(a);
                        i = c;
                        return c
                    })
                }
                return {
                    next: function (a) {
                        return (j || (j = d("PromiseOrValue"))).map(g.next(a), function (a) {
                            if (a.done) return {
                                done: !0,
                                value: void 0
                            };
                            var b = a.value;
                            b = b[0];
                            return (j || (j = d("PromiseOrValue"))).map(l(b), function (b) {
                                var e = a.value,
                                    f = e[0];
                                e = e[1];
                                if (b.done) return {
                                    done: !1,
                                    value: [f, [e, void 0]]
                                };
                                b = b.value;
                                var g = b[0];
                                b = b[1];
                                g = (k || (k = d("ReStoreKeyComparer"))).compareKey(f, g);
                                if (g > 0) throw c("unrecoverableViolation")("Right iterable should always be equal to or ahead", "messenger_web_product");
                                else if (g < 0) return {
                                    done: !1,
                                    value: [f, [e, void 0]]
                                };
                                else return {
                                    done: !1,
                                    value: [f, [e, b]]
                                }
                            })
                        })
                    }
                }
            },
            keyLength: Math.max(a.keyLength, b.keyLength),
            subscribe: function (c, e) {
                var f = !0,
                    g = a.subscribe(async function (a, e, g) {
                        return (j || (j = d("PromiseOrValue"))).map(b.iterator(g, {
                            gte: a,
                            lte: a
                        }).next(), function (b) {
                            b = b.value;
                            if (!f) return;
                            return c(a, e.operation === "add" ? {
                                operation: "add",
                                value: [e.value, b == null ? void 0 : b[1]]
                            } : e.operation === "put" ? {
                                operation: "put",
                                value: [e.value, b == null ? void 0 : b[1]]
                            } : {
                                operation: "delete"
                            }, g)
                        })
                    }, e),
                    h = b.subscribe(async function (b, e, g) {
                        return (j || (j = d("PromiseOrValue"))).map(a.iterator(g, {
                            gte: b,
                            lte: b
                        }).next(), function (a) {
                            if (!f || a.done) return;
                            return c(b, e.operation === "add" ? {
                                operation: "add",
                                value: [a.value[1], e.value]
                            } : e.operation === "put" ? {
                                operation: "put",
                                value: [a.value[1], e.value]
                            } : {
                                operation: "delete"
                            }, g)
                        })
                    }, e);
                return function () {
                    f = !1, g(), h()
                }
            }
        }, l)
    }

    function q(a) {
        var b = this,
            c = new Map();

        function e(a, b, c, e, g) {
            var h = JSON.stringify(c),
                i = a.get(h);
            i == null && (i = [], a.set(h, i));
            i.forEach(function (a) {
                return a()
            });
            i.length = 0;
            var k = i;
            g.forEach(function (g) {
                k.push(g.subscribe(function (g, h, i) {
                    return (j || (j = d("PromiseOrValue"))).map(f(a, b, c, e, i), function (a) {
                        return b(c, {
                            operation: "put",
                            value: a
                        }, i)
                    })
                }))
            })
        }

        function f(b, c, f, g, h) {
            return (j || (j = d("PromiseOrValue"))).map(m(function () {
                return a(g)
            }, h), function (a) {
                var d = a[0];
                a = a[1];
                e(b, c, f, g, a);
                return d
            })
        }

        function g(a, b) {
            var c = JSON.stringify(b);
            if (!a.has(c)) return;
            b = (b = a.get(JSON.stringify(b))) != null ? b : [];
            b.forEach(function (a) {
                return a()
            });
            b.length = 0;
            a.delete(c)
        }
        return Object.setPrototypeOf({
            direction: b.direction,
            iterator: function (f, g) {
                var h = b.iterator(f, g);
                return {
                    next: function (b) {
                        return (j || (j = d("PromiseOrValue"))).map(h.next(b), function (g) {
                            if (g.done) return g;
                            g = g.value;
                            var b = g[0],
                                h = g[1];
                            return (j || (j = d("PromiseOrValue"))).map(j.map(m(function () {
                                return a(h)
                            }, f), function (a) {
                                var f = a[0],
                                    g = a[1];
                                (i || (i = d("ReQLBounds"))).forEachMatchingBounds(c, b, function (a) {
                                    var c = a[0];
                                    a = a[1];
                                    return e(c, a, b, h, g)
                                });
                                return f
                            }), function (a) {
                                return {
                                    done: !1,
                                    value: [b, a]
                                }
                            })
                        })
                    }
                }
            },
            keyLength: b.keyLength,
            subscribe: function (a, e) {
                var h = {},
                    k = new Map();
                c.set(h, [(i || (i = d("ReQLBounds"))).extendBounds(e, b.keyLength), [k, a]]);
                var l = b.subscribe(function (b, c, e) {
                    if (c.operation === "delete") {
                        g(k, b);
                        return a(b, c, e)
                    } else if (c.operation === "add") {
                        var h = c.value;
                        return (j || (j = d("PromiseOrValue"))).map(f(k, a, b, h, e), function (c) {
                            return a(b, {
                                operation: "add",
                                value: c
                            }, e)
                        })
                    } else if (c.operation === "put") {
                        h = c.value;
                        return (j || (j = d("PromiseOrValue"))).map(f(k, a, b, h, e), function (c) {
                            return a(b, {
                                operation: "put",
                                value: c
                            }, e)
                        })
                    }
                }, e);
                return function () {
                    k.forEach(function (a) {
                        a.forEach(function (a) {
                            return a()
                        })
                    }), c.delete(h), l()
                }
            }
        }, l)
    }

    function r(a, b) {
        var c = s(a, b);
        for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
        return e.reduce(function (a, b) {
            return s(a, b)
        }, c)
    }

    function s(a, b) {
        if (a.direction !== b.direction) throw c("unrecoverableViolation")("union requires iterables to be sorted in the same direction", "messenger_web_product");
        var e = Math.max(a.keyLength, b.keyLength);

        function f(a, b) {
            return b === 0 || a.length === 0 ? [] : a.slice(0, b)
        }

        function g(a) {
            return a.gt != null ? {
                gt: f(a.gt, e)
            } : {
                gte: f(a.gte, e)
            }
        }

        function h(a) {
            return a.lt != null ? {
                lt: f(a.lt, e)
            } : {
                lte: f(a.lte, e)
            }
        }

        function i(a) {
            return a == null ? void 0 : babelHelpers.extends({}, a.gte != null || a.gt != null ? g(a) : {}, a.lte != null || a.lt != null ? h(a) : {})
        }
        return Object.setPrototypeOf({
            direction: a.direction,
            iterator: function (c, g) {
                var h = a.iterator(c, i(g)),
                    l = b.iterator(c, i(g)),
                    m = h.next(),
                    n = l.next();
                return {
                    next: function (b) {
                        b !== void 0 && (m = h.next(f(b, e)), n = l.next(f(b, e)));
                        return (j || (j = d("PromiseOrValue"))).map(j.all2(m, n), function (b) {
                            var c = b[0];
                            b = b[1];

                            function e(a, b) {
                                if (a.done) return {
                                    done: !0
                                };
                                a = {
                                    done: !1,
                                    value: [
                                        [].concat(a.value[0], [b]), a.value[1]
                                    ]
                                };
                                b ? m = h.next() : n = l.next();
                                return a
                            }
                            if (c.done) return e(b, !1);
                            if (b.done) return e(c, !0);
                            var f = a.direction === "asc" ? [c, b] : [b, c],
                                g = f[0];
                            f = f[1];
                            f = (k || (k = d("ReStoreKeyComparer"))).compareKey((g = g.value) == null ? void 0 : g[0], (g = f.value) == null ? void 0 : g[0]);
                            if (f < 0) return e(c, !0);
                            else return e(b, !1)
                        })
                    }
                }
            },
            keyLength: e + 1,
            subscribe: function (c, d) {
                var e = a.subscribe(function (a, b, d) {
                        return c([].concat(a, [!0]), b, d)
                    }, d),
                    f = b.subscribe(function (a, b, d) {
                        return c([].concat(a, [!1]), b, d)
                    }, d);
                return function () {
                    e(), f()
                }
            }
        }, l)
    }

    function t(a, b) {
        if (a.direction !== b.direction) throw c("unrecoverableViolation")("merge join requires iterables to be sorted in the same direction", "messenger_web_product");
        return Object.setPrototypeOf({
            direction: a.direction,
            iterator: function (c, e) {
                var f = a.iterator(c, e),
                    g = b.iterator(c, e);

                function h(a) {
                    return (j || (j = d("PromiseOrValue"))).loop(function (a) {
                        var b = a[0];
                        a = a[1];
                        if (b.done || a.done) return {
                            action: "break",
                            value: {
                                done: !0
                            }
                        };
                        var c = b.value,
                            e = c[0];
                        c = c[1];
                        var h = a.value,
                            i = h[0];
                        h = h[1];
                        var l = (k || (k = d("ReStoreKeyComparer"))).compareKey(e, i);
                        if (l > 0) return (j || (j = d("PromiseOrValue"))).map(j.all2(b, g.next(e)), function (a) {
                            return {
                                action: "continue",
                                value: a
                            }
                        });
                        else if (l < 0) return (j || (j = d("PromiseOrValue"))).map(j.all2(f.next(i), a), function (a) {
                            return {
                                action: "continue",
                                value: a
                            }
                        });
                        return {
                            action: "break",
                            value: {
                                done: !1,
                                value: [e, [c, h]]
                            }
                        }
                    }, a)
                }
                return {
                    next: function (a) {
                        return (j || (j = d("PromiseOrValue"))).map(j.all2(f.next(a), g.next(a)), h)
                    }
                }
            },
            keyLength: Math.max(a.keyLength, b.keyLength),
            subscribe: function (c, e) {
                var f = !0;

                function g(a, b, e, g, h) {
                    return (j || (j = d("PromiseOrValue"))).map(a.iterator(h, {
                        gte: e,
                        lte: e
                    }).next(), function (a) {
                        if (a.done || !f) return;
                        a = a.value[1];
                        a = g.operation === "add" ? {
                            operation: "add",
                            value: b(g.value, a)
                        } : g.operation === "put" ? {
                            operation: "put",
                            value: b(g.value, a)
                        } : g;
                        return c(e, a, h)
                    })
                }
                var h = a.subscribe(function () {
                        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                        return g.apply(void 0, [b, function (a, b) {
                            return [a, b]
                        }].concat(c))
                    }, e),
                    i = b.subscribe(function () {
                        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                        return g.apply(void 0, [a, function (a, b) {
                            return [b, a]
                        }].concat(c))
                    }, e);
                return function () {
                    f = !1, h(), i()
                }
            }
        }, l)
    }

    function u(a) {
        var b = this,
            e = new Map();
        return Object.setPrototypeOf({
            direction: b.direction,
            iterator: function (c, f) {
                var g = b.iterator(c, f),
                    h = 0;
                return {
                    next: function (b) {
                        if (h >= a) return {
                            done: !0
                        };
                        else return (j || (j = d("PromiseOrValue"))).map(g.next(b), function (b) {
                            b.done || (i || (i = d("ReQLBounds"))).forEachMatchingBounds(e, b.value[0], function (c) {
                                var d = c[0];
                                c = c[1];
                                c.contents <= a && (d.has(b.value[0]) || (c.contents += 1, d.set(b.value[0], void 0)))
                            });
                            h += 1;
                            return b
                        })
                    }
                }
            },
            keyLength: b.keyLength,
            subscribe: function (f, g) {
                var h = {},
                    l = b.direction === "asc" ? 1 : -1,
                    m = new(c("BPlusTree"))(function (a, b) {
                        return (k || (k = d("ReStoreKeyComparer"))).compareKey(a, b) * -l
                    }),
                    n = {
                        contents: 0
                    };
                e.set(h, [(i || (i = d("ReQLBounds"))).extendBounds(g, b.keyLength), [m, n]]);
                var o = b.subscribe(function (c, g, i) {
                    var o, p = (o = m.entries().next().value) == null ? void 0 : o[0];
                    o = p == null ? !0 : (k || (k = d("ReStoreKeyComparer"))).compareKey(c, p) * l <= 0;
                    if (g.operation === "delete" && o) {
                        var q;
                        n.contents > 0 && (m.delete(c), q = f(c, g, i));
                        return (j || (j = d("PromiseOrValue"))).map(q, function () {
                            return (j || (j = d("PromiseOrValue"))).map(b.iterator(i, p == null ? void 0 : l === 1 ? {
                                gt: p
                            } : {
                                lt: p
                            }).next(), function (a) {
                                if (!a.done && e.has(h)) {
                                    m.set(a.value[0], void 0);
                                    return f(a.value[0], {
                                        operation: "add",
                                        value: a.value[1]
                                    }, i)
                                }
                                n.contents > 0 && (n.contents -= 1)
                            })
                        })
                    }
                    if (g.operation === "add" && n.contents < a) {
                        n.contents += 1;
                        m.set(c, void 0);
                        return f(c, g, i)
                    }
                    if (g.operation === "add" && o) {
                        var r;
                        p != null && (m.delete(p), r = f(p, {
                            operation: "delete"
                        }, i));
                        return (j || (j = d("PromiseOrValue"))).map(r, function () {
                            m.set(c, void 0);
                            return f(c, g, i)
                        })
                    }
                    if (g.operation === "put" && o) return f(c, g, i)
                }, g);
                return function () {
                    e.delete(h);
                    return o()
                }
            }
        }, l)
    }
    var v = new WeakMap();

    function w(a, b) {
        var c = v.get(a);
        if (c != null) return c;
        c = b.reduce(function (b, c, d) {
            b[c] = a[d];
            return b
        }, {});
        v.set(a, c);
        return c
    }

    function x(a, b, c, e, f) {
        if (f == null || f.length > a.keyFields.length || f.some(function (b) {
                return a.keyFields.indexOf(b) === -1
            })) return a.entries(b, c, e);
        var g = a.keys(b, c, e);
        return {
            next: function (b) {
                return (j || (j = d("PromiseOrValue"))).map(g.next(b), function (b) {
                    return b.done ? {
                        done: !0
                    } : {
                        done: !1,
                        value: [b.value, w(b.value, a.keyFields)]
                    }
                })
            }
        }
    }

    function y(a, b) {
        return Object.setPrototypeOf({
            direction: "asc",
            iterator: function (c, d) {
                return x(a, c, "asc", d, b)
            },
            keyLength: a.keyFields.length,
            subscribe: function (c, d) {
                return a.subscribe(c, d, b)
            }
        }, l)
    }

    function z(a, b) {
        return Object.setPrototypeOf({
            direction: "desc",
            iterator: function (c, d) {
                return x(a, c, "desc", d, b)
            },
            keyLength: a.keyFields.length,
            subscribe: function (c, d) {
                return a.subscribe(c, d, b)
            }
        }, l)
    }

    function A(a) {
        var b = [],
            c = a.iterator(new WeakMap());
        return Promise.resolve((j || (j = d("PromiseOrValue"))).loop(function () {
            return (j || (j = d("PromiseOrValue"))).map(c.next(), function (a) {
                if (a.done) return {
                    action: "break",
                    value: b
                };
                b.push(a.value[1]);
                return {
                    action: "continue",
                    value: void 0
                }
            })
        }))
    }
    async function B(a) {
        a = a.iterator(new WeakMap());
        a = await a.next();
        return a.done ? void 0 : a.value[1]
    }
    async function C(a) {
        a = a.iterator(new WeakMap());
        a = await a.next();
        if (a.done) throw c("unrecoverableViolation")("expected result", "messenger_web_product");
        return a.value[1]
    }

    function D(a, b) {
        var c = new WeakMap();

        function e(a) {
            return a.gt != null ? {
                gt: a.gt.slice(1)
            } : {
                gte: a.gte.slice(1)
            }
        }

        function f(a) {
            return a.lt != null ? {
                lt: a.lt.slice(1)
            } : {
                lte: a.lte.slice(1)
            }
        }

        function g(a) {
            return a == null ? void 0 : babelHelpers.extends({}, a.gte != null || a.gt != null ? e(a) : {}, a.lte != null || a.lt != null ? f(a) : {})
        }
        return Object.setPrototypeOf({
            direction: a.direction,
            iterator: function (e, f) {
                var g = {};
                if (f) {
                    if (f.gt != null) {
                        var h = f.gt,
                            i = (k || (k = d("ReStoreKeyComparer"))).compareValue(b, h[0]);
                        if (i === 0)
                            if (h.length === 1) return {
                                next: function () {
                                    return {
                                        done: !0
                                    }
                                }
                            };
                            else g.gt = h.slice(1);
                        else if (i < 0) return {
                            next: function () {
                                return {
                                    done: !0
                                }
                            }
                        }
                    }
                    if (f.gte != null) {
                        h = f.gte;
                        i = (k || (k = d("ReStoreKeyComparer"))).compareValue(b, h[0]);
                        if (i === 0) g.gte = h.slice(1);
                        else if (i < 0) return {
                            next: function () {
                                return {
                                    done: !0
                                }
                            }
                        }
                    }
                    if (f.lte != null) {
                        h = f.lte;
                        i = (k || (k = d("ReStoreKeyComparer"))).compareValue(b, h[0]);
                        if (i === 0) h.length !== 1 && (g.lte = h.slice(1));
                        else if (i > 0) return {
                            next: function () {
                                return {
                                    done: !0
                                }
                            }
                        }
                    }
                    if (f.lt != null) {
                        h = f.lt;
                        i = (k || (k = d("ReStoreKeyComparer"))).compareValue(b, h[0]);
                        if (i === 0)
                            if (h.length === 1) return {
                                next: function () {
                                    return {
                                        done: !0
                                    }
                                }
                            };
                            else g.lt = h.slice(1);
                        else if (i > 0) return {
                            next: function () {
                                return {
                                    done: !0
                                }
                            }
                        }
                    }
                }
                var l = a.iterator(e, g);
                return {
                    next: function (a) {
                        return (j || (j = d("PromiseOrValue"))).map(l.next(a == null ? void 0 : a.slice(1)), function (a) {
                            if (a.done) return {
                                done: !0
                            };
                            var d = c.get(a.value[0]);
                            d == null && (d = [b].concat(a.value[0]), c.set(a.value[0], d));
                            return {
                                done: !1,
                                value: [d, a.value[1]]
                            }
                        })
                    }
                }
            },
            keyLength: a.keyLength + 1,
            subscribe: function (d, e) {
                return a.subscribe(function (a, e, f) {
                    var g = c.get(a);
                    g == null && (g = [b].concat(a), c.set(a, g));
                    return d(g, e, f)
                }, g(e))
            }
        }, l)
    }
    g.prototype = l;
    g.key = a;
    g.empty = e;
    g.leftJoin = p;
    g.union = r;
    g.mergeJoin = t;
    g.fromTableAscending = y;
    g.fromTableDescending = z;
    g.toArrayAsync = A;
    g.firstAsync = B;
    g.firstExnAsync = C;
    g.prependKey = D
}), 98);


import {
    BPlusTree
} from './BPlusTree';
import {
    PromiseOrValue
} from './PromiseOrValue';
import {
    ReQLBounds,
    extendBounds,
    forEachMatchingBounds,
    mergeBounds
} from './ReQLBounds';
import {
    globalQueryContext,
    getDependencies,
    runFromContextThatHandlesThrownPromise,
    setDependencies
} from './ReQLGlobalQueryContext';
import {
    compareKey,
    compareValue
} from './ReStoreKeyComparer';
import {
    unrecoverableViolation
} from './unrecoverableViolation';

const reQLPrototype = {
    bounds: bounds,
    filter: filter,
    getKeyRange: getKeyRange,
    map: map,
    take: take
};

async function runInContext(callback: () => any, context: any): Promise < [any, any[]] > {
    try {
        const prevContext = globalQueryContext.contents;
        let prevDependencies = getDependencies(context);
        if (prevDependencies == null) {
            setDependencies(context, []);
        }
        globalQueryContext.contents = context;
        let result, dependencies;
        try {
            result = await runFromContextThatHandlesThrownPromise(callback);
            dependencies = getDependencies(context) || [];
        } finally {
            setDependencies(context, prevDependencies);
            globalQueryContext.contents = prevContext;
        }
        return [result, dependencies];
    } catch (error) {
        if (error instanceof Promise) {
            return error.then(() => runInContext(callback, context));
        }
        throw error;
    }
}

function key(...args: any[]): any[] {
    return args;
}

function bounds(this: any, newBounds: any): any {
    const self = this;
    return Object.setPrototypeOf({
        direction: self.direction,
        iterator: function(context: any, bounds: any) {
            return self.iterator(context, mergeBounds(newBounds, bounds));
        },
        keyLength: self.keyLength,
        subscribe: function(callback: any, bounds: any) {
            return self.subscribe(callback, mergeBounds(newBounds, bounds));
        }
    }, reQLPrototype);
}

const emptyIterable = Object.setPrototypeOf({
    direction: "asc",
    iterator: function() {
        return {
            next: function() {
                return {
                    done: true
                };
            }
        };
    },
    keyLength: 0,
    subscribe: function() {
        return function() {};
    }
}, reQLPrototype);

function empty(): any {
    return emptyIterable;
}

function filter(this: any, predicate: (value: any) => boolean): any {
    const self = this;
    const filterCache = new Map();
    return Object.setPrototypeOf({
        direction: self.direction,
        iterator: function(context: any, bounds: any) {
            const iterator = self.iterator(context, bounds);
            return {
                next: function(key: any) {
                    return PromiseOrValue.loop(
                        async (key: any) => {
                                const result = await iterator.next(key);
                                if (result.done) {
                                    return {
                                        action: "break",
                                        value: result
                                    };
                                }
                                const [currentKey, currentValue] = result.value;
                                if (predicate(currentValue)) {
                                    forEachMatchingBounds(filterCache, currentKey, (cache) => {
                                        cache.add(JSON.stringify(currentKey));
                                    });
                                    return {
                                        action: "break",
                                        value: result
                                    };
                                }
                                forEachMatchingBounds(filterCache, currentKey, (cache) => {
                                    cache.delete(JSON.stringify(currentKey));
                                });
                                return {
                                    action: "continue",
                                    value: undefined
                                };
                            },
                            key
                    );
                }
            };
        },
        keyLength: self.keyLength,
        subscribe: function(callback: any, bounds: any) {
            const cacheKey = {};
            const cache = new Set();
            filterCache.set(cacheKey, [extendBounds(bounds, self.keyLength), cache]);
            const unsubscribe = self.subscribe(
                (key: any, operation: any, context: any) => {
                    const keyStr = JSON.stringify(key);
                    if (operation.operation === "add" && predicate(operation.value)) {
                        cache.add(keyStr);
                        return callback(key, operation, context);
                    }
                    if (operation.operation === "put" && predicate(operation.value)) {
                        if (cache.has(keyStr)) {
                            return callback(key, operation, context);
                        }
                        cache.add(keyStr);
                        return callback(key, {
                            operation: "add",
                            value: operation.value
                        }, context);
                    }
                    if (operation.operation === "put" && cache.has(keyStr)) {
                        cache.delete(keyStr);
                        return callback(key, {
                            operation: "delete"
                        }, context);
                    }
                    if (operation.operation === "delete" && cache.has(keyStr)) {
                        cache.delete(keyStr);
                        return callback(key, operation, context);
                    }
                },
                bounds
            );
            return function() {
                filterCache.delete(cacheKey);
                return unsubscribe();
            };
        }
    }, reQLPrototype);
}

function getKeyRange(this: any, ...keyPrefix: any[]): any {
    const self = this;

    function gt(bounds: any) {
        return bounds.gt != null ? {
            gt: [...keyPrefix, ...bounds.gt]
        } : {
            gte: [...keyPrefix, ...bounds.gte]
        };
    }

    function lt(bounds: any) {
        return bounds.lt != null ? {
            lt: [...keyPrefix, ...bounds.lt]
        } : {
            lte: [...keyPrefix, ...bounds.lte]
        };
    }

    function getBounds(bounds: any) {
        return bounds == null ?
            {
                gte: keyPrefix,
                lte: keyPrefix
            } :
            {
                ...(bounds.gte != null || bounds.gt != null ? gt(bounds) : {
                    gte: keyPrefix
                }),
                ...(bounds.lte != null || bounds.lt != null ? lt(bounds) : {
                    lte: keyPrefix
                })
            };
    }

    return Object.setPrototypeOf({
        direction: self.direction,
        iterator: function(context: any, bounds: any) {
            const iterator = self.iterator(context, getBounds(bounds));
            return {
                next: function(key: any) {
                    return PromiseOrValue.map(iterator.next(key == null ? key : [...keyPrefix, ...key]), (result) => {
                        return result.done ? {
                            done: true
                        } : {
                            done: false,
                            value: [result.value[0].slice(keyPrefix.length), result.value[1]]
                        };
                    });
                }
            };
        },
        keyLength: self.keyLength - keyPrefix.length,
        subscribe: function(callback: any, bounds: any) {
            return self.subscribe(
                (key: any, operation: any, context: any) => {
                    return callback(key.slice(keyPrefix.length), operation, context);
                },
                getBounds(bounds)
            );
        }
    }, reQLPrototype);
}

function leftJoin(left: any, right: any): any {
    if (left.direction !== right.direction) {
        throw unrecoverableViolation("merge join requires iterables to be sorted in the same direction", "messenger_web_product");
    }
    return Object.setPrototypeOf({
        direction: left.direction,
        iterator: function(context: any, bounds: any) {
            const leftIterator = left.iterator(context, bounds);
            let rightIterator = right.iterator(context, bounds);
            let rightResult = rightIterator.next();

            async function getRightValue(leftKey: any) {
                return PromiseOrValue.map(rightResult, (result) => {
                    const done = result.done ? true : compareKey(leftKey, result.value[0]) <= 0;
                    const nextResult = done ? result : rightIterator.next(leftKey);
                    rightResult = nextResult;
                    return nextResult;
                });
            }

            return {
                next: function(key: any) {
                    return PromiseOrValue.map(leftIterator.next(key), async (leftResult) => {
                        if (leftResult.done) {
                            return {
                                done: true,
                                value: undefined
                            };
                        }
                        const [leftKey, leftValue] = leftResult.value;
                        return PromiseOrValue.map(await getRightValue(leftKey), (rightResult) => {
                            const [leftKey, leftValue] = leftResult.value;
                            if (rightResult.done) {
                                return {
                                    done: false,
                                    value: [leftKey, [leftValue, undefined]]
                                };
                            }
                            const [rightKey, rightValue] = rightResult.value;
                            const cmp = compareKey(leftKey, rightKey);
                            if (cmp > 0) {
                                throw unrecoverableViolation("Right iterable should always be equal to or ahead", "messenger_web_product");
                            } else if (cmp < 0) {
                                return {
                                    done: false,
                                    value: [leftKey, [leftValue, undefined]]
                                };
                            } else {
                                return {
                                    done: false,
                                    value: [leftKey, [leftValue, rightValue]]
                                };
                            }
                        });
                    });
                }
            };
        },
        keyLength: Math.max(left.keyLength, right.keyLength),
        subscribe: function(callback: any, bounds: any) {
            let active = true;
            const leftUnsubscribe = left.subscribe(
                async (key: any, operation: any, context: any) => {
                        return PromiseOrValue.map(
                            await right.iterator(context, {
                                gte: key,
                                lte: key
                            }).next(),
                            (rightResult) => {
                                const rightValue = rightResult.value;
                                if (!active) {
                                    return;
                                }
                                return callback(
                                    key,
                                    operation.operation === "add" ?
                                    {
                                        operation: "add",
                                        value: [operation.value, rightValue == null ? undefined : rightValue[1]]
                                    } :
                                    operation.operation === "put" ?
                                    {
                                        operation: "put",
                                        value: [operation.value, rightValue == null ? undefined : rightValue[1]]
                                    } :
                                    {
                                        operation: "delete"
                                    },
                                    context
                                );
                            }
                        );
                    },
                    bounds
            );
            const rightUnsubscribe = right.subscribe(
                async (key: any, operation: any, context: any) => {
                        return PromiseOrValue.map(
                            await left.iterator(context, {
                                gte: key,
                                lte: key
                            }).next(),
                            (leftResult) => {
                                if (!active || leftResult.done) {
                                    return;
                                }
                                return callback(
                                    key,
                                    operation.operation === "add" ?
                                    {
                                        operation: "add",
                                        value: [leftResult.value[1], operation.value]
                                    } :
                                    operation.operation === "put" ?
                                    {
                                        operation: "put",
                                        value: [leftResult.value[1], operation.value]
                                    } :
                                    {
                                        operation: "delete"
                                    },
                                    context
                                );
                            }
                        );
                    },
                    bounds
            );
            return function() {
                active = false;
                leftUnsubscribe();
                rightUnsubscribe();
            };
        }
    }, reQLPrototype);
}

function map(this: any, mapper: (value: any) => any): any {
    const self = this;
    const mapCache = new Map();

    function setUpMapCache(
        cache: Map < string, (() => void)[] > ,
        callback: (key: any, operation: any, context: any) => void,
        key: any,
        value: any,
        dependencies: any[]
    ) {
        const keyStr = JSON.stringify(key);
        let cacheEntry = cache.get(keyStr);
        if (cacheEntry == null) {
            cacheEntry = [];
            cache.set(keyStr, cacheEntry);
        }
        cacheEntry.forEach((unsubscribe) => unsubscribe());
        cacheEntry.length = 0;
        const unsubscribeList = cacheEntry;
        dependencies.forEach((dependency) => {
            unsubscribeList.push(
                dependency.subscribe((depKey: any, depOperation: any, depContext: any) => {
                    return PromiseOrValue.map(getMappedValue(cache, callback, key, value, depContext), (mappedValue) => {
                        return callback(key, {
                            operation: "put",
                            value: mappedValue
                        }, depContext);
                    });
                })
            );
        });
    }

    async function getMappedValue(
        cache: Map < string, (() => void)[] > ,
        callback: (key: any, operation: any, context: any) => void,
        key: any,
        value: any,
        context: any
    ): Promise < any > {
        return PromiseOrValue.map(
            await runInContext(() => mapper(value), context),
            ([mappedValue, dependencies]) => {
                setUpMapCache(cache, callback, key, value, dependencies);
                return mappedValue;
            }
        );
    }

    function tearDownMapCache(cache: Map < string, (() => void)[] > , key: any) {
        const keyStr = JSON.stringify(key);
        if (!cache.has(keyStr)) {
            return;
        }
        const unsubscribeList = cache.get(JSON.stringify(key)) ?? [];
        unsubscribeList.forEach((unsubscribe) => unsubscribe());
        unsubscribeList.length = 0;
        cache.delete(keyStr);
    }

    return Object.setPrototypeOf({
        direction: self.direction,
        iterator: function(context: any, bounds: any) {
            const iterator = self.iterator(context, bounds);
            return {
                next: function(key: any) {
                    return PromiseOrValue.map(iterator.next(key), async (result) => {
                        if (result.done) {
                            return result;
                        }
                        const [currentKey, currentValue] = result.value;
                        return PromiseOrValue.map(
                            await PromiseOrValue.map(
                                runInContext(() => mapper(currentValue), context),
                                ([mappedValue, dependencies]) => {
                                    forEachMatchingBounds(mapCache, currentKey, ([cache, callback]) => {
                                        setUpMapCache(cache, callback, currentKey, currentValue, dependencies);
                                    });
                                    return mappedValue;
                                }
                            ),
                            (mappedValue) => {
                                return {
                                    done: false,
                                    value: [currentKey, mappedValue]
                                };
                            }
                        );
                    });
                }
            };
        },
        keyLength: self.keyLength,
        subscribe: function(callback: any, bounds: any) {
            const cacheKey = {};
            const cache = new Map();
            mapCache.set(cacheKey, [extendBounds(bounds, self.keyLength), [cache, callback]]);
            const unsubscribe = self.subscribe(
                (key: any, operation: any, context: any) => {
                    if (operation.operation === "delete") {
                        tearDownMapCache(cache, key);
                        return callback(key, operation, context);
                    } else if (operation.operation === "add") {
                        const value = operation.value;
                        return PromiseOrValue.map(getMappedValue(cache, callback, key, value, context), (mappedValue) => {
                            return callback(key, {
                                operation: "add",
                                value: mappedValue
                            }, context);
                        });
                    } else if (operation.operation === "put") {
                        const value = operation.value;
                        return PromiseOrValue.map(getMappedValue(cache, callback, key, value, context), (mappedValue) => {
                            return callback(key, {
                                operation: "put",
                                value: mappedValue
                            }, context);
                        });
                    }
                },
                bounds
            );
            return function() {
                cache.forEach((unsubscribeList) => unsubscribeList.forEach((unsubscribe) => unsubscribe()));
                cache.clear();
                mapCache.delete(cacheKey);
                unsubscribe();
            };
        }
    }, reQLPrototype);
}

function scan(this: any, reducer: (acc: any, value: any) => any, initialValue: any): any {
    const self = this;
    const scanCache = new Map();

    function setUpScanCache(
        cache: Map < string, (() => void)[] > ,
        callback: (key: any, operation: any, context: any) => void,
        key: any,
        value: any,
        dependencies: any[]
    ) {
        const keyStr = JSON.stringify(key);
        let cacheEntry = cache.get(keyStr);
        if (cacheEntry == null) {
            cacheEntry = [];
            cache.set(keyStr, cacheEntry);
        }
        cacheEntry.forEach((unsubscribe) => unsubscribe());
        cacheEntry.length = 0;
        const unsubscribeList = cacheEntry;
        dependencies.forEach((dependency) => {
            unsubscribeList.push(
                dependency.subscribe((depKey: any, depOperation: any, depContext: any) => {
                    return PromiseOrValue.map(getReducedValue(cache, callback, key, value, depContext), (reducedValue) => {
                        return callback(key, {
                            operation: "put",
                            value: reducedValue
                        }, depContext);
                    });
                })
            );
        });
    }

    async function getReducedValue(
        cache: Map < string, (() => void)[] > ,
        callback: (key: any, operation: any, context: any) => void,
        key: any,
        value: any,
        context: any
    ): Promise < any > {
        const previousValue = cache.get(JSON.stringify(key.slice(0, -1)))?.find((entry) => entry[0] === key[key.length - 1])?.[1];
        return PromiseOrValue.map(
            await runInContext(() => reducer(previousValue ?? initialValue, value), context),
            ([reducedValue, dependencies]) => {
                setUpScanCache(cache, callback, key, value, dependencies);
                return reducedValue;
            }
        );
    }

    function tearDownScanCache(cache: Map < string, (() => void)[] > , key: any) {
        const keyStr = JSON.stringify(key);
        if (!cache.has(keyStr)) {
            return;
        }
        const unsubscribeList = cache.get(JSON.stringify(key)) ?? [];
        unsubscribeList.forEach((unsubscribe) => unsubscribe());
        unsubscribeList.length = 0;
        cache.delete(keyStr);
    }

    return Object.setPrototypeOf({
        direction: self.direction,
        iterator: function(context: any, bounds: any) {
            const iterator = self.iterator(context, bounds);
            return {
                next: function(key: any) {
                    return PromiseOrValue.map(iterator.next(key), async (result) => {
                        if (result.done) {
                            return result;
                        }
                        const [currentKey, currentValue] = result.value;
                        return PromiseOrValue.map(
                            await PromiseOrValue.map(
                                runInContext(
                                    () => reducer(cache.get(JSON.stringify(currentKey.slice(0, -1)))?.find((entry) => entry[0] === currentKey[currentKey.length - 1])?.[1] ?? initialValue, currentValue),
                                    context
                                ),
                                ([reducedValue, dependencies]) => {
                                    forEachMatchingBounds(scanCache, currentKey, ([cache, callback]) => {
                                        setUpScanCache(cache, callback, currentKey, currentValue, dependencies);
                                    });
                                    return reducedValue;
                                }
                            ),
                            (reducedValue) => {
                                return {
                                    done: false,
                                    value: [currentKey, reducedValue]
                                };
                            }
                        );
                    });
                }
            };
        },
        keyLength: self.keyLength + 1,
        subscribe: function(callback: any, bounds: any) {
            const cacheKey = {};
            const cache = new Map();
            scanCache.set(cacheKey, [extendBounds(bounds, self.keyLength), [cache, callback]]);
            const unsubscribe = self.subscribe(
                (key: any, operation: any, context: any) => {
                    if (operation.operation === "delete") {
                        tearDownScanCache(cache, [...key, operation.value]);
                        return callback([...key, operation.value], operation, context);
                    } else if (operation.operation === "add") {
                        const value = operation.value;
                        return PromiseOrValue.map(
                            getReducedValue(cache, callback, [...key, operation.value], value, context),
                            (reducedValue) => {
                                return callback([...key, operation.value], {
                                    operation: "add",
                                    value: reducedValue
                                }, context);
                            }
                        );
                    } else if (operation.operation === "put") {
                        const value = operation.value;
                        return PromiseOrValue.map(
                            getReducedValue(cache, callback, [...key, operation.value], value, context),
                            (reducedValue) => {
                                return callback([...key, operation.value], {
                                    operation: "put",
                                    value: reducedValue
                                }, context);
                            }
                        );
                    }
                },
                bounds
            );
            return function() {
                cache.forEach((unsubscribeList) => unsubscribeList.forEach((unsubscribe) => unsubscribe()));
                cache.clear();
                scanCache.delete(cacheKey);
                unsubscribe();
            };
        }
    }, reQLPrototype);
}

function take(this: any, limit: number): any {
    const self = this;
    const takeCache = new Map();
  
    return Object.setPrototypeOf({
      direction: self.direction,
      iterator: function (context: any, bounds: any) {
        const iterator = self.iterator(context, bounds);
        let taken = 0;
  
        return {
          next: function (key: any) {
            if (taken >= limit) {
              return Promise.resolve({ done: true, value: undefined });
            }
  
            return PromiseOrValue.map(iterator.next(key), (result) => {
              if (result.done) {
                return result;
              }
  
              ReQLBounds.forEachMatchingBounds(takeCache, result.value[0], ([cache, count]) => {
                if (!cache.has(result.value[0]) && count.contents <= limit) {
                  count.contents += 1;
                  cache.set(result.value[0], undefined);
                }
              });
  
              taken += 1;
              return result;
            });
          }
        };
      },
      keyLength: self.keyLength,
      subscribe: function (callback: any, bounds: any) {
        const cacheKey = {};
        const order = self.direction === "asc" ? 1 : -1;
        const cache = new BPlusTree((a: any, b: any) => compareKey(a, b) * -order);
        const count = { contents: 0 };
  
        takeCache.set(cacheKey, [ReQLBounds.extendBounds(bounds, self.keyLength), [cache, count]]);
  
        const unsubscribe = self.subscribe(
          (key: any, operation: any, context: any) => {
            const first = cache.entries().next().value?.[0];
            const isFirst = first == null || compareKey(key, first) * order <= 0;
  
            if (operation.operation === "delete" && isFirst) {
              let result;
              if (count.contents > 0) {
                cache.delete(key);
                result = callback(key, operation, context);
              }
  
              return PromiseOrValue.map(result, () => {
                return PromiseOrValue.map(
                  self.iterator(context, first == null ? undefined : order === 1 ? { gt: first } : { lt: first }).next(),
                  (next) => {
                    if (!next.done && takeCache.has(cacheKey)) {
                      cache.set(next.value[0], undefined);
                      return callback(next.value[0], { operation: "add", value: next.value[1] }, context);
                    }
                    if (count.contents > 0) {
                      count.contents -= 1;
                    }
                  }
                );
              });
            }
  
            if (operation.operation === "add" && count.contents < limit) {
              count.contents += 1;
              cache.set(key, undefined);
              return callback(key, operation, context);
            }
  
            if (operation.operation === "add" && isFirst) {
              let result;
              if (first != null) {
                cache.delete(first);
                result = callback(first, { operation: "delete" }, context);
              }
  
              return PromiseOrValue.map(result, () => {
                cache.set(key, undefined);
                return callback(key, operation, context);
              });
            }
  
            if (operation.operation === "put" && isFirst) {
              return callback(key, operation, context);
            }
          },
          bounds
        );
  
        return function () {
          takeCache.delete(cacheKey);
          return unsubscribe();
        };
      }
    }, reQLPrototype);
}

function union(this: any, other: any, ...others: any[]): any {
  const self = this;
  const unionResult = _union(self, other);
  
  return others.reduce((result, nextOther) => {
    return _union(result, nextOther);
  }, unionResult);
}

function _union(left: any, right: any): any {
  return Object.setPrototypeOf({
    direction: left.direction,
    iterator: function (context: any, bounds: any) {
      const leftIterator = left.iterator(context, bounds);
      const rightIterator = right.iterator(context, bounds);
      let leftResult: any = { done: false, value: undefined };
      let rightResult: any = { done: false, value: undefined };

      return {
        next: function (key: any) {
          return PromiseOrValue.map(leftResult.done ? rightIterator.next(key) : leftIterator.next(key), (result) => {
            if (result.done) {
              leftResult = result;
              return rightResult.done ? result : rightIterator.next(key);
            }
            const [currentKey, currentValue] = result.value;
            leftResult = result;
            return PromiseOrValue.map(
              rightResult.done ? result : key == null ? rightIterator.next() : rightIterator.next(currentKey),
              (nextResult) => {
                if (nextResult.done) {
                  rightResult = nextResult;
                  return result;
                }
                const [nextKey, nextValue] = nextResult.value;
                const comparison = compareKey(currentKey, nextKey);
                rightResult = nextResult;
                if (comparison < 0) {
                  return result;
                } else if (comparison > 0) {
                  return { done: false, value: [nextKey, nextValue] };
                } else {
                  return { done: false, value: [currentKey, currentValue] };
                }
              }
            );
          });
        }
      };
    },
    keyLength: Math.max(left.keyLength, right.keyLength),
    subscribe: function (callback: any, bounds: any) {
      const leftUnsubscribe = left.subscribe((key: any, operation: any, context: any) => {
        return callback(key, operation, context);
      }, bounds);

      const rightUnsubscribe = right.subscribe((key: any, operation: any, context: any) => {
        return callback(key, operation, context);
      }, bounds);

      return function () {
        leftUnsubscribe();
        rightUnsubscribe();
      };
    }
  }, reQLPrototype);
}

function fromTableAscending(table: any, keyFields?: any[]): any {
  return Object.setPrototypeOf({
    direction: "asc",
    iterator: function (context: any, bounds: any) {
      return _iterate(table, context, "asc", bounds, keyFields);
    },
    keyLength: table.keyFields.length,
    subscribe: function (callback: any, bounds: any) {
      return table.subscribe(callback, bounds, keyFields);
    }
  }, reQLPrototype);
}

function _iterate(table: any, context: any, direction: "asc" | "desc", bounds: any, keyFields?: any[]): any {
  if (keyFields == null || keyFields.length > table.keyFields.length || keyFields.some((field) => table.keyFields.indexOf(field) === -1)) {
    return table.entries(context, direction, bounds);
  }

  const keyIterator = table.keys(context, direction, bounds);

  return {
    next: function (key: any) {
      return PromiseOrValue.map(keyIterator.next(key), (result) => {
        if (result.done) {
          return { done: true };
        } else {
          return {
            done: false,
            value: [result.value, _extractValues(result.value, table.keyFields)]
          };
        }
      });
    }
  };
}

const _extractedValuesCache = new Map();

function _extractValues(key: any[], keyFields: any[]): any {
  const cachedValue = _extractedValuesCache.get(key);
  if (cachedValue != null) {
    return cachedValue;
  }

  const extractedValue = keyFields.reduce((obj, field, index) => {
    obj[field] = key[index];
    return obj;
  }, {});

  _extractedValuesCache.set(key, extractedValue);
  return extractedValue;
}

function fromTableDescending(table: any, keyFields?: any[]): any {
  return Object.setPrototypeOf({
    direction: "desc",
    iterator: function (context: any, bounds: any) {
      return _iterate(table, context, "desc", bounds, keyFields);
    },
    keyLength: table.keyFields.length,
    subscribe: function (callback: any, bounds: any) {
      return table.subscribe(callback, bounds, keyFields);
    }
  }, reQLPrototype);
}

async function toArrayAsync(reql: any): Promise<any[]> {
  const result: any[] = [];
  const iterator = reql.iterator(new WeakMap());

  return Promise.resolve(PromiseOrValue.loop(async () => {
    return PromiseOrValue.map(await iterator.next(), (item) => {
      if (item.done) {
        return { action: "break", value: result };
      }
      result.push(item.value[1]);
      return { action: "continue", value: undefined };
    });
  }));
}

async function firstAsync(reql: any): Promise<any | null> {
  const iterator = reql.iterator(new WeakMap());
  const firstItem = await iterator.next();
  return firstItem.done ? null : firstItem.value[1];
}

async function firstExnAsync(reql: any): Promise<any> {
    const iterator = reql.iterator(new WeakMap());
    const firstItem = await iterator.next();
    if (firstItem.done) {
      throw unrecoverableViolation("expected result", "messenger_web_product");
    }
    return firstItem.value[1];
}

function prependKey(key: any, reql: any): any {
  const keyCache = new WeakMap();

 function getUpperBound(bound: any): any {
    return bound.gt != null ? { gt: bound.gt.slice(1) } : { gte: bound.gte.slice(1) };
  }

  function getLowerBound(bound: any): any {
    return bound.lt != null ? { lt: bound.lt.slice(1) } : { lte: bound.lte.slice(1) };
  }

  function getBounds(bounds: any): any {
    return bounds == null
      ? undefined
      : {
          ...(bounds.gte != null || bounds.gt != null ? getUpperBound(bounds) : {}),
          ...(bounds.lte != null || bounds.lt != null ? getLowerBound(bounds) : {}),
        };
  }

  return Object.setPrototypeOf({
    direction: reql.direction,
    iterator: function (context: any, bounds: any) {
      const newBounds: any = {};
      if (bounds) {
        if (bounds.gt != null) {
          const gt = bounds.gt;
          const cmp = compareValue(key, gt[0]);
          if (cmp === 0) {
            if (gt.length === 1) {
              return {
                next: function () {
                  return { done: true };
                },
              };
            } else {
              newBounds.gt = gt.slice(1);
            }
          } else if (cmp < 0) {
            return {
              next: function () {
                return { done: true };
              },
            };
          }
        }
        if (bounds.gte != null) {
          const gte = bounds.gte;
          const cmp = compareValue(key, gte[0]);
          if (cmp === 0) {
            newBounds.gte = gte.slice(1);
          } else if (cmp < 0) {
            return {
              next: function () {
                return { done: true };
              },
            };
          }
        }
        if (bounds.lte != null) {
          const lte = bounds.lte;
          const cmp = compareValue(key, lte[0]);
          if (cmp === 0) {
            if (lte.length !== 1) {
              newBounds.lte = lte.slice(1);
            }
          } else if (cmp > 0) {
            return {
              next: function () {
                return { done: true };
              },
            };
          }
        }
        if (bounds.lt != null) {
          const lt = bounds.lt;
          const cmp = compareValue(key, lt[0]);
          if (cmp === 0) {
            if (lt.length === 1) {
              return {
                next: function () {
                  return { done: true };
                },
              };
            } else {
              newBounds.lt = lt.slice(1);
            }
          } else if (cmp > 0) {
            return {
              next: function () {
                return { done: true };
              },
            };
          }
        }
      }

      const iterator = reql.iterator(context, newBounds);
      return {
        next: function (value: any) {
          return PromiseOrValue.map(iterator.next(value == null ? undefined : value.slice(1)), (item) => {
            if (item.done) {
              return { done: true };
            }
            let newKey = keyCache.get(item.value[0]);
            if (newKey == null) {
              newKey = [key].concat(item.value[0]);
              keyCache.set(item.value[0], newKey);
            }
            return { done: false, value: [newKey, item.value[1]] };
          });
        },
      };
    },
    keyLength: reql.keyLength + 1,
    subscribe: function (callback: any, bounds: any) {
      return reql.subscribe((changedKey: any, operation: any, extra: any) => {
        let newKey = keyCache.get(changedKey);
        if (newKey == null) {
          newKey = [key].concat(changedKey);
          keyCache.set(changedKey, newKey);
        }
        return callback(newKey, operation, extra);
      }, getBounds(bounds));
    },
  }, reQLPrototype);
}

function mergeJoin(a: any, b: any): any {
    if (a.direction !== b.direction) {
      throw unrecoverableViolation("unrecoverableViolation")("merge join requires iterables to be sorted in the same direction", "messenger_web_product");
    }
  
    return Object.setPrototypeOf({
      direction: a.direction,
      iterator: function (context: any, bounds: any) {
        const iteratorA = a.iterator(context, bounds);
        const iteratorB = b.iterator(context, bounds);
  
        function nextValue(result: any): any {
          return PromiseOrValue.loop((value: any) => {
            const [itemA, itemB] = value;
            if (itemA.done || itemB.done) {
              return { action: "break", value: { done: true } };
            }
  
            const [keyA, valueA] = itemA.value;
            const [keyB, valueB] = itemB.value;
            const cmp = ReStoreKeyComparer.compareKey(keyA, keyB);
  
            if (cmp > 0) {
              return PromiseOrValue.map(PromiseOrValue.all2(itemA, iteratorB.next(keyA)), (result: any) => {
                return { action: "continue", value: result };
              });
            } else if (cmp < 0) {
              return PromiseOrValue.map(PromiseOrValue.all2(iteratorA.next(keyB), itemB), (result: any) => {
                return { action: "continue", value: result };
              });
            }
  
            return { action: "break", value: { done: false, value: [keyA, [valueA, valueB]] } };
          }, result);
        }
  
        return {
          next: function (value: any) {
            return PromiseOrValue.map(PromiseOrValue.all2(iteratorA.next(value), iteratorB.next(value)), nextValue);
          },
        };
      },
      keyLength: Math.max(a.keyLength, b.keyLength),
      subscribe: function (callback: any, bounds: any) {
        let active = true;
  
        function handleChange(reql: any, valueMapper: any, key: any, operation: any, context: any) {
          return PromiseOrValue.map(
            reql.iterator(context, { gte: key, lte: key }).next(),
            (item: any) => {
              if (item.done || !active) {
                return;
              }
              const value = item.value[1];
              const newOperation = operation.operation === "add"
                ? { operation: "add", value: valueMapper(operation.value, value) }
                : operation.operation === "put"
                ? { operation: "put", value: valueMapper(operation.value, value) }
                : operation;
              return callback(key, newOperation, context);
            }
          );
        }
  
        const unsubscribeA = a.subscribe((...args: any[]) => {
          return handleChange(b, (valueA: any, valueB: any) => [valueA, valueB], ...args);
        }, bounds);
  
        const unsubscribeB = b.subscribe((...args: any[]) => {
          return handleChange(a, (valueA: any, valueB: any) => [valueB, valueA], ...args);
        }, bounds);
  
        return () => {
          active = false;
          unsubscribeA();
          unsubscribeB();
        };
      },
    }, reQLPrototype);
}


export const ReQL = {
    prototype: reQLPrototype,
    key,
    empty,
    leftJoin,
    union,
    mergeJoin,
    fromTableAscending,
    fromTableDescending,
    toArrayAsync,
    firstAsync,
    firstExnAsync,
    prependKey
};