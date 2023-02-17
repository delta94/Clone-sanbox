(this["webpackJsonp@zmedia/zmp3-desktop"] = this["webpackJsonp@zmedia/zmp3-desktop"] || []).push([[13], {
    1506: function(e, t) {
        if (!n)
            var n = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map((function(e, a) {
                        return n.index = a,
                        t.call(n, e)
                    }
                    )) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, a, r) {
                        return n.index = r,
                        e + t.call(n, a)
                    }
                    : function(e, t) {
                        return e + t
                    }
                    , 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? n.map(e, t) : e)
                }
            };
        var a = function() {
            function e(e, t, n) {
                return (e << 10) + (t << 5) + n
            }
            function t(e) {
                var t = []
                  , n = !1;
                function a() {
                    t.sort(e),
                    n = !0
                }
                return {
                    push: function(e) {
                        t.push(e),
                        n = !1
                    },
                    peek: function(e) {
                        return n || a(),
                        void 0 === e && (e = t.length - 1),
                        t[e]
                    },
                    pop: function() {
                        return n || a(),
                        t.pop()
                    },
                    size: function() {
                        return t.length
                    },
                    map: function(e) {
                        return t.map(e)
                    },
                    debug: function() {
                        return n || a(),
                        t
                    }
                }
            }
            function a(e, t, n, a, r, c, i) {
                this.r1 = e,
                this.r2 = t,
                this.g1 = n,
                this.g2 = a,
                this.b1 = r,
                this.b2 = c,
                this.histo = i
            }
            function r() {
                this.vboxes = new t((function(e, t) {
                    return n.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                }
                ))
            }
            function c(t, a) {
                if (a.count()) {
                    var r = a.r2 - a.r1 + 1
                      , c = a.g2 - a.g1 + 1
                      , i = a.b2 - a.b1 + 1
                      , l = n.max([r, c, i]);
                    if (1 == a.count())
                        return [a.copy()];
                    var o, u, s, m, f = 0, d = [], b = [];
                    if (l == r)
                        for (o = a.r1; o <= a.r2; o++) {
                            for (m = 0,
                            u = a.g1; u <= a.g2; u++)
                                for (s = a.b1; s <= a.b2; s++)
                                    m += t[e(o, u, s)] || 0;
                            f += m,
                            d[o] = f
                        }
                    else if (l == c)
                        for (o = a.g1; o <= a.g2; o++) {
                            for (m = 0,
                            u = a.r1; u <= a.r2; u++)
                                for (s = a.b1; s <= a.b2; s++)
                                    m += t[e(u, o, s)] || 0;
                            f += m,
                            d[o] = f
                        }
                    else
                        for (o = a.b1; o <= a.b2; o++) {
                            for (m = 0,
                            u = a.r1; u <= a.r2; u++)
                                for (s = a.g1; s <= a.g2; s++)
                                    m += t[e(u, s, o)] || 0;
                            f += m,
                            d[o] = f
                        }
                    return d.forEach((function(e, t) {
                        b[t] = f - e
                    }
                    )),
                    h(l == r ? "r" : l == c ? "g" : "b")
                }
                function h(e) {
                    var t, n, r, c, i, l = e + "1", u = e + "2", s = 0;
                    for (o = a[l]; o <= a[u]; o++)
                        if (d[o] > f / 2) {
                            for (r = a.copy(),
                            c = a.copy(),
                            i = (t = o - a[l]) <= (n = a[u] - o) ? Math.min(a[u] - 1, ~~(o + n / 2)) : Math.max(a[l], ~~(o - 1 - t / 2)); !d[i]; )
                                i++;
                            for (s = b[i]; !s && d[i - 1]; )
                                s = b[--i];
                            return r[u] = i,
                            c[l] = r[u] + 1,
                            [r, c]
                        }
                }
            }
            return a.prototype = {
                volume: function(e) {
                    return this._volume && !e || (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)),
                    this._volume
                },
                count: function(t) {
                    var n = this.histo;
                    if (!this._count_set || t) {
                        var a, r, c, i = 0;
                        for (a = this.r1; a <= this.r2; a++)
                            for (r = this.g1; r <= this.g2; r++)
                                for (c = this.b1; c <= this.b2; c++)
                                    i += n[e(a, r, c)] || 0;
                        this._count = i,
                        this._count_set = !0
                    }
                    return this._count
                },
                copy: function() {
                    return new a(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)
                },
                avg: function(t) {
                    var n = this.histo;
                    if (!this._avg || t) {
                        var a, r, c, i, l = 0, o = 0, u = 0, s = 0;
                        for (r = this.r1; r <= this.r2; r++)
                            for (c = this.g1; c <= this.g2; c++)
                                for (i = this.b1; i <= this.b2; i++)
                                    l += a = n[e(r, c, i)] || 0,
                                    o += a * (r + .5) * 8,
                                    u += a * (c + .5) * 8,
                                    s += a * (i + .5) * 8;
                        this._avg = l ? [~~(o / l), ~~(u / l), ~~(s / l)] : [~~(8 * (this.r1 + this.r2 + 1) / 2), ~~(8 * (this.g1 + this.g2 + 1) / 2), ~~(8 * (this.b1 + this.b2 + 1) / 2)]
                    }
                    return this._avg
                },
                contains: function(e) {
                    var t = e[0] >> 3;
                    return gval = e[1] >> 3,
                    bval = e[2] >> 3,
                    t >= this.r1 && t <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                }
            },
            r.prototype = {
                push: function(e) {
                    this.vboxes.push({
                        vbox: e,
                        color: e.avg()
                    })
                },
                palette: function() {
                    return this.vboxes.map((function(e) {
                        return e.color
                    }
                    ))
                },
                size: function() {
                    return this.vboxes.size()
                },
                map: function(e) {
                    for (var t = this.vboxes, n = 0; n < t.size(); n++)
                        if (t.peek(n).vbox.contains(e))
                            return t.peek(n).color;
                    return this.nearest(e)
                },
                nearest: function(e) {
                    for (var t, n, a, r = this.vboxes, c = 0; c < r.size(); c++)
                        ((n = Math.sqrt(Math.pow(e[0] - r.peek(c).color[0], 2) + Math.pow(e[1] - r.peek(c).color[1], 2) + Math.pow(e[2] - r.peek(c).color[2], 2))) < t || void 0 === t) && (t = n,
                        a = r.peek(c).color);
                    return a
                },
                forcebw: function() {
                    var e = this.vboxes;
                    e.sort((function(e, t) {
                        return n.naturalOrder(n.sum(e.color), n.sum(t.color))
                    }
                    ));
                    var t = e[0].color;
                    t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                    var a = e.length - 1
                      , r = e[a].color;
                    r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[a].color = [255, 255, 255])
                }
            },
            {
                quantize: function(i, l) {
                    if (!i.length || l < 2 || l > 256)
                        return !1;
                    var o = function(t) {
                        var n, a, r, c, i = new Array(32768);
                        return t.forEach((function(t) {
                            a = t[0] >> 3,
                            r = t[1] >> 3,
                            c = t[2] >> 3,
                            n = e(a, r, c),
                            i[n] = (i[n] || 0) + 1
                        }
                        )),
                        i
                    }(i);
                    o.forEach((function() {
                        0
                    }
                    ));
                    var u = function(e, t) {
                        var n, r, c, i = 1e6, l = 0, o = 1e6, u = 0, s = 1e6, m = 0;
                        return e.forEach((function(e) {
                            n = e[0] >> 3,
                            r = e[1] >> 3,
                            c = e[2] >> 3,
                            n < i ? i = n : n > l && (l = n),
                            r < o ? o = r : r > u && (u = r),
                            c < s ? s = c : c > m && (m = c)
                        }
                        )),
                        new a(i,l,o,u,s,m,t)
                    }(i, o)
                      , s = new t((function(e, t) {
                        return n.naturalOrder(e.count(), t.count())
                    }
                    ));
                    function m(e, t) {
                        for (var n, a = 1, r = 0; r < 1e3; )
                            if ((n = e.pop()).count()) {
                                var i = c(o, n)
                                  , l = i[0]
                                  , u = i[1];
                                if (!l)
                                    return;
                                if (e.push(l),
                                u && (e.push(u),
                                a++),
                                a >= t)
                                    return;
                                if (r++ > 1e3)
                                    return
                            } else
                                e.push(n),
                                r++
                    }
                    s.push(u),
                    m(s, .75 * l);
                    for (var f = new t((function(e, t) {
                        return n.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                    }
                    )); s.size(); )
                        f.push(s.pop());
                    m(f, l - f.size());
                    for (var d = new r; f.size(); )
                        d.push(f.pop());
                    return d
                }
            }
        }();
        e.exports = a.quantize
    },  // https://github.com/olivierlesnicki/quantize




    1520: function(e, t, n) {
        "use strict";
        var a = n(8)
          , r = n(191)
          , c = n(192)
          , i = n(1506)
          , l = n.n(i);
        var o = {
            createPixelArray: function(e, t, n) {
                for (var a, r, c, i, l, o = e, u = [], s = 0; s < t; s += n)
                    r = o[(a = 4 * s) + 0],
                    c = o[a + 1],
                    i = o[a + 2],
                    ("undefined" === typeof (l = o[a + 3]) || l >= 125) && (r > 250 && c > 250 && i > 250 || u.push([r, c, i]));
                return u
            },
            validateOptions: function(e) {
                var t = e.colorCount
                  , n = e.quality;
                if ("undefined" !== typeof t && Number.isInteger(t)) {
                    if (1 === t)
                        throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
                    t = Math.max(t, 2),
                    t = Math.min(t, 20)
                } else
                    t = 10;
                return ("undefined" === typeof n || !Number.isInteger(n) || n < 1) && (n = 10),
                {
                    colorCount: t,
                    quality: n
                }
            }
        }
          , u = function() {
            function e(t) {
                Object(r.a)(this, e),
                this.canvas = void 0,
                this.context = void 0,
                this.width = void 0,
                this.height = void 0,
                this.canvas = document.createElement("canvas"),
                this.context = this.canvas.getContext("2d"),
                this.width = this.canvas.width = t.naturalWidth,
                this.height = this.canvas.height = t.naturalHeight,
                this.context && this.context.drawImage(t, 0, 0, this.width, this.height)
            }
            return Object(c.a)(e, [{
                key: "getImageData",
                value: function() {
                    var e;
                    return null === (e = this.context) || void 0 === e ? void 0 : e.getImageData(0, 0, this.width, this.height)
                }
            }]),
            e
        }()
          , s = function(e, t, n) {
            var a = function(e) {
                return e.toString(16).padStart(2, "0")
            };
            return "#".concat(a(e)).concat(a(t)).concat(a(n))
        }
          , m = function() {
            function e() {
                Object(r.a)(this, e)
            }
            return Object(c.a)(e, null, [{
                key: "getPalette",
                value: function(e, t, n) {
                    var a = o.validateOptions({
                        colorCount: t,
                        quality: n
                    })
                      , r = new u(e)
                      , c = r.getImageData()
                      , i = r.width * r.height;
                    if (!c)
                        return null;
                    var s = o.createPixelArray(c.data, i, a.quality)
                      , m = l()(s, a.colorCount);
                    return m ? m.palette() : null
                }
            }, {
                key: "getColorFromUrl",
                value: function(t, n, a, r) {
                    !function(e, t) {
                        var n = new XMLHttpRequest;
                        n.open("GET", e, !0),
                        n.responseType = "arraybuffer",
                        n.onload = function() {
                            if (200 == this.status) {
                                for (var e = new Uint8Array(this.response), n = e.length, a = new Array(n), r = 0; r < e.length; r++)
                                    a[r] = String.fromCharCode(e[r]);
                                var c = a.join("")
                                  , i = window.btoa(c);
                                t("data:image/png;base64," + i)
                            }
                        }
                        ,
                        n.send()
                    }(t, (function(c) {
                        var i = document.createElement("img");
                        i.addEventListener("load", (function() {
                            var c = e.getPalette(i, r, a)[0];
                            n(c, t)
                        }
                        )),
                        i.src = c
                    }
                    ))
                }
            }, {
                key: "getColor",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5
                      , c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    return new Promise((function(i, l) {
                        e.getColorFromUrl(t, (function(e) {
                            var t = Object(a.a)(e, 3)
                              , n = t[0]
                              , r = t[1]
                              , l = t[2]
                              , o = c >= 0 && c < 1 ? "rgba(".concat(n, ", ").concat(r, ", ").concat(l, ", ").concat(c, ")") : s(n, r, l);
                            i(o)
                        }
                        ), n, r)
                    }
                    ))
                }
            }]),
            e
        }();
        t.a = m
    }, // https://github.com/lokesh/color-thief





    1528: function(e, t, n) {
        "use strict";
        var a = n(0);
        t.a = function(e) {
            var t = Object(a.useRef)();
            return Object(a.useEffect)((function() {
                t.current = e
            }
            )),
            t.current
        }
    }, // useRefWithCurrent.ts


    
    1529: function(e, t, n) {
        "use strict";
        var a = n(8)
          , r = n(0) // React
          , c = n.n(r)
          , i = n(1)
          , l = n(5)
          , o = n.n(l)
          , u = n(26);
        n(1530);
        t.a = Object(r.memo)((function(e) {
            var t = e.images
              , n = e.isPlay
              , l = void 0 !== n && n
              , s = e.timeout
              , m = void 0 === s ? 10 : s
              , f = e.shuffle
              , d = void 0 === f || f
              , b = e.once
              , h = e.className
              , E = Object(r.useState)(0)
              , v = Object(a.a)(E, 2)
              , O = v[0]
              , g = v[1]
              , p = Object(r.useMemo)((function() {
                return d ? u.Array.shuffle(t) : t
            }
            ), [t])
              , j = Object(r.useRef)(O)
              , y = Object(r.useRef)(!b);
            j.current = O,
            Object(r.useEffect)((function() {
                if (l && !b) {
                    var e = setTimeout((function() {
                        g(O === p.length - 1 ? 0 : O + 1)
                    }
                    ), 1e3 * m);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), [p, O, l, b]),
            Object(r.useEffect)((function() {
                l && b && (y.current = !0,
                g(O === p.length - 1 ? 0 : O + 1))
            }
            ), [l]);
            var I = Object(r.useMemo)((function() {
                return O <= 0 ? [p[p.length - 1], p[0]] : [p[O - 1], p[O]]
            }
            ), [p, O]);
            return c.a.createElement(i.l, {
                className: o()("image-effect", h, {
                    "is-play": l
                })
            }, c.a.createElement(i.l, {
                renderAs: "ul"
            }, I.map((function(e, t) {
                var n = t === I.length - 1;
                return c.a.createElement(i.l, {
                    renderAs: "li",
                    key: "".concat(t, "-").concat(e),
                    className: o()({
                        enter: !!y.current && n,
                        exit: !!y.current && !n
                    })
                }, c.a.createElement(i.l, {
                    renderAs: "img",
                    src: e
                }))
            }
            ))))
        }
        ))
    }, // ImageEffect.react.tsx



    1530: function(e, t, n) {},
    1532: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return r
        }
        ));
        var a = function(e) {
            return e.nonLogged.recentSongs
        }
          , r = function(e) {
            return e.nonLogged.recentPlaylists
        }
    },
//     export const selectRecentSongs = state => state.nonLogged.recentSongs;
// export const selectRecentPlaylists = state => state.nonLogged.recentPlaylists;



    1536: function(e, t, n) {},
    1556: function(e, t, n) {
        "use strict";
        var a, r, c = n(0), i = n.n(c), l = n(1), o = n(6), u = n(17), s = n(31), m = n(15), f = n(8), d = n(5), b = n.n(d), h = n(57), E = n(29), v = n(10), O = n(124), g = n(189), p = n(111), j = n(7), y = n(28), I = n(25), N = n(9), A = n(24), k = n(2), M = n(271);
      
        var D = Object(c.memo)((function(e) {
            var t = e.typeButtons
              , n = void 0 === t ? T : t
              , a = e.item
              , c = e.handleContextMenu
              , o = e.hideContextMenu
              , u = e.isShowContextMenu;
            return i.a.createElement(i.a.Fragment, null, function(e, t) {
                return e.map((function(e) {
                    return i.a.createElement(l.y.Item, {
                        key: e
                    }, function(e) {
                        var t, n = e.type, a = e.playlist, c = e.showText, l = e.showContextMenu, o = e.isShowContextMenu;
                        switch (n) {
                        case r.FAVORITE:
                            t = i.a.createElement(A.g, {
                                objectId: a.encodeId,
                                objectType: k.D.PLAYLIST,
                                showText: c,
                                object: a
                            });
                            break;
                        case r.MORE:
                            t = i.a.createElement(M.a, {
                                object: a,
                                showContextMenu: l,
                                isShowContextMenu: o
                            });
                            break;
                        default:
                            return null
                        }
                        return t
                    }({
                        type: e,
                        playlist: t,
                        showText: !1,
                        showContextMenu: c,
                        hideContextMenu: o,
                        isShowContextMenu: u
                    }))
                }
                ))
            }(n, a))
        }
        ))
          , P = (n(1536),
        function(e) {
            var t = e.item
              , n = e.handleContextMenu
              , a = e.isShowContextMenu;
            return i.a.createElement(l.A.Right, null, i.a.createElement(l.l, {
                className: "hover-items"
            }, i.a.createElement(l.y, null, i.a.createElement(D, {
                item: t,
                handleContextMenu: n,
                isShowContextMenu: a
            }))), i.a.createElement(l.l, {
                className: "action-items"
            }, i.a.createElement(l.y, null, i.a.createElement(D, {
                typeButtons: [r.FAVORITE],
                item: t,
                handleContextMenu: n,
                isShowContextMenu: a
            }), i.a.createElement(l.y.Item, {
                className: "duration"
            }, Object(y.formatTime)(300)))))
        }
        )
          , S = function(e) {
            var t = e.time;
            return i.a.createElement(l.l, {
                className: "time-release"
            }, i.a.createElement(l.l, {
                renderAs: "span"
            }, _(t)))
        }
          , L = function(e) {
            var t = e.item
              , n = e.isActive
              , a = e.isPlaying
              , r = e.tracking
              , c = void 0 === r ? [] : r
              , o = e.clickTracking
              , u = void 0 === o ? [] : o
              , s = Object(v.e)()
              , d = s.ref
              , y = s.ContextMenu
              , N = s.handleContextMenu
              , A = s.hideContextMenu
              , k = s.isShowContextMenu
              , M = Object(v.s)()
              , T = Object(f.a)(M, 1)[0]
              , C = Object(h.g)();
            return i.a.createElement(i.a.Fragment, null, i.a.createElement(g.b, {
                playlist: t
            }, i.a.createElement(l.A, {
                className: b()("zm-new-release-playlist", {
                    active: k || n
                }),
                domRef: d,
                onClick: function() {
                    I.a.apply(void 0, Object(m.a)(u))
                }
            }, i.a.createElement(l.A.Left, null, i.a.createElement(l.l, {
                className: "thumb"
            }, i.a.createElement(l.l, {
                className: "thumb-action"
            }, i.a.createElement(l.x, {
                src: t.thumbnailM
            }), i.a.createElement(l.l, {
                className: "actions",
                onClick: function(e) {
                    T.playPlaylist(t),
                    n || C.push(t.link),
                    I.a.apply(void 0, Object(m.a)(c)),
                    j.b.preventDefault(e)
                }
            }, i.a.createElement(l.r, {
                icon: a ? " ic-gif-playing-white" : "play"
            }))), i.a.createElement(l.x, {
                className: "disk",
                src: E.o + "/icons/album-disk.png"
            })), i.a.createElement(l.l, {
                className: "card-info"
            }, i.a.createElement(l.N, null, i.a.createElement(l.M, null, t.title)), i.a.createElement(l.N, {
                subtitle: !0,
                className: "is-one-line is-truncate"
            }, i.a.createElement(O.a, {
                artists: t.artists
            })), i.a.createElement(S, {
                time: t.releaseDate
            }))), i.a.createElement(l.A.Content, null, i.a.createElement(l.l, null, _(t.releaseDate))), i.a.createElement(P, {
                handleContextMenu: N,
                item: t,
                isShowContextMenu: k
            }))), i.a.createElement(y, null, i.a.createElement(p.a, {
                playlist: t,
                hideContextMenu: A
            })))
        }
          , F = function(e) {
            var t = e.items
              , n = e.sectionId
              , a = e.tracking
              , r = e.clickTracking
              , c = e.actionTracking
              , m = Object(o.c)(u.e)
              , f = Object(o.c)(s.g);
            return i.a.createElement(l.z, null, t.map((function(e) {
                var t = e.encodeId === m
                  , o = t && f;
                return e.sectionId = n,
                e.actionTracking = c,
                i.a.createElement(l.z.Item, {
                    className: "bor-b-1",
                    key: e.encodeId
                }, i.a.createElement(L, {
                    item: e,
                    isActive: t,
                    isPlaying: o,
                    tracking: a,
                    clickTracking: r
                }))
            }
            )))
        }
          , Y = function(e) {
            var t = e.items
              , n = e.sectionId
              , a = e.tracking
              , r = e.clickTracking
              , c = e.actionTracking;
            return t.length ? i.a.createElement(i.a.Fragment, null, i.a.createElement(l.A, {
                className: "top-header"
            }, i.a.createElement(l.A.Left, null, i.a.createElement(l.l, {
                className: "column-text"
            }, "Album")), i.a.createElement(l.A.Content, null, i.a.createElement(l.l, {
                className: "column-text"
            }, "Ph\xe1t h\xe0nh")), i.a.createElement(l.A.Right, null, i.a.createElement(l.l, {
                className: "column-text"
            }, " Th\u1eddi gian"))), i.a.createElement(F, {
                items: t,
                sectionId: n,
                tracking: a,
                clickTracking: r,
                actionTracking: c
            })) : null
        }
          , z = n(3)
          , B = n(180)
          , G = n(13)
          , K = n(40)
          , U = n(35)
          , H = n(64)
          , V = function(e) {
            var t = e.song
              , n = Object(c.useMemo)((function() {
                return i.a.createElement(l.l, null, _(t.album ? t.album.releaseDate : t.releaseDate))
            }
            ), [t])
              , a = i.a.createElement(U.f, {
                type: H.a.ICON,
                icon: "song"
            });
            return i.a.createElement(U.l, Object.assign({}, e, {
                songMiddle: n,
                songLeftBefore: a
            }))
        }
          , Q = function(e) {
            var t = e.items
              , n = e.sectionId
              , a = e.tracking
              , r = e.actionTracking
              , c = Object(o.c)(u.b)
              , l = Object(o.c)(s.g)
              , m = Object(o.c)(K.e)
              , d = Object(o.c)(K.a)
              , b = Object(o.c)(s.e)
              , h = Object(o.c)(G.k)
              , E = Object(o.c)(G.e)
              , O = Object(v.s)()
              , g = Object(f.a)(O, 1)[0]
              , p = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                g.playSongInList(e, Object(z.a)(Object(z.a)({}, n), {}, {
                    songs: t
                }))
            };
            return i.a.createElement(B.b, {
                items: t,
                renderItem: function(e) {
                    var o = t[e];
                    if (!o)
                        return i.a.createElement(i.a.Fragment, null);
                    var u = o.encodeId === c
                      , s = l && u
                      , f = b && u;
                    return o.sectionId = n,
                    o.actionTracking = r,
                    i.a.createElement(V, {
                        key: o.encodeId,
                        order: e + 1,
                        song: o,
                        currentEncodeId: c,
                        isActive: u,
                        isPlaying: s,
                        isBuffering: f,
                        mediasBlocked: m,
                        artistsBlocked: d,
                        streamPrivilege: E,
                        isUserVN: h,
                        playSongFn: p,
                        tracking: a,
                        className: "bor-b-1"
                    })
                },
                className: "",
                disableSort: !0,
                columnTexts: ["B\xe0i h\xe1t", "Ph\xe1t h\xe0nh", "Th\u1eddi gian"]
            })
        };
        n.d(t, "a", (function() {
            return Y
        }
        )),
        n.d(t, "c", (function() {
            return S
        }
        )),
        n.d(t, "b", (function() {
            return Q
        }
        ))
    },
    1646: function(e, t, n) {},
    1647: function(e, t, n) {},
    1648: function(e, t, n) {},
    1649: function(e, t, n) {},
    1650: function(e, t, n) {},
    1651: function(e, t, n) {},
    1652: function(e, t, n) {},
    1653: function(e, t, n) {},
    1736: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(3)
          , r = n(8)
          , c = n(9)
          , i = n(0)
          , l = n.n(i)
          , o = n(6)
          , u = n(79)
          , s = n(2)
          , m = n(10)
          , f = n(1)
          , d = n(13)
          , b = n(84)
          , h = n(31)
          , E = n(17)
          , v = n(57)
          , O = n(36)
          , g = n(1529)
          , p = n(38)
          , j = n(189)
          , y = n(26)
          , I = n(111)
          , N = n(124)
          , A = Object(i.memo)((function(e) {
            var t = e.playlist
              , n = e.isPlaying
              , a = e.isBuffering
              , c = void 0 !== a && a
              , o = e.isActive
              , u = void 0 !== o && o
              , d = e.isOwner
              , b = void 0 !== d && d
              , h = e.animate
              , E = Object(v.g)()
              , A = Object(m.s)()
              , k = Object(r.a)(A, 1)[0]
              , M = Object(m.e)()
              , T = M.ref
              , C = M.ContextMenu
              , x = M.handleContextMenu
              , w = M.hideContextMenu
              , R = M.isShowContextMenu
              , _ = t.thumbnails
              , D = void 0 === _ ? [] : _
              , P = t.thumbnailM
              , S = t.artists
              , L = void 0 === S ? [] : S
              , F = t.description
              , Y = Object(i.useMemo)((function() {
                return y.Array.isEmpty(D) ? [P] : y.Array.shuffle(D)
            }
            ), []);
            return l.a.createElement(f.e, {
                className: "zm-playlist-item-animation",
                domRef: T
            }, l.a.createElement(f.e.Image, {
                className: n || R ? "active" : ""
            }, l.a.createElement(j.b, {
                playlist: t
            }, l.a.createElement(g.a, {
                images: Y,
                isPlay: h,
                timeout: 2,
                once: !0,
                shuffle: !1
            }), l.a.createElement(f.G, null), l.a.createElement(p.a, {
                className: "playlist-actions",
                objectId: t.encodeId,
                object: t,
                haveLikeBtn: !t.isDailymix && !b,
                haveOtherBtn: !t.isDailymix,
                isPlaying: n,
                isBuffering: c,
                isActive: u,
                handleContext: x,
                playFn: function() {
                    k.playPlaylist(t),
                    u || E.push(t.link)
                },
                thumbnail: t.thumbnailM,
                objectType: t.isAlbum ? s.D.ALBUM : s.D.PLAYLIST
            }))), l.a.createElement(f.e.Content, null, l.a.createElement(g.a, {
                images: Y,
                isPlay: h,
                timeout: 2,
                once: !0,
                shuffle: !1
            }), l.a.createElement(f.l, {
                className: "content"
            }, l.a.createElement(O.b, {
                to: t.link
            }, l.a.createElement(f.l, {
                className: "name"
            }, t.title)), l.a.createElement(f.l, {
                className: "artist"
            }, y.Array.isEmpty(L) ? F : l.a.createElement(f.N, {
                subtitle: !0,
                className: "is-one-line is-truncate"
            }, l.a.createElement(N.a, {
                artists: L
            }))))), l.a.createElement(C, null, l.a.createElement(I.a, {
                playlist: t,
                hideContextMenu: w
            })))
        }
        ))
          , k = n(5)
          , M = n.n(k)
          , T = (n(1646),
        Object(i.memo)((function(e) {
            var t = e.items
              , n = void 0 === t ? [] : t
              , a = e.sectionId
              , c = e.autoSlider
              , u = e.subTitle
              , s = e.title
              , m = e.link
              , v = e.className
              , O = Object(o.c)(E.e)
              , g = Object(o.c)(d.m)
              , j = Object(o.c)(h.g)
              , y = Object(o.c)(h.e)
              , I = Object(o.c)(b.c)
              , N = Object(i.useMemo)((function() {
                return n.slice(0, 5).filter((function(e) {
                    var t;
                    return (null === e || void 0 === e || null === (t = e.thumbnails) || void 0 === t ? void 0 : t.length) > 2
                }
                )).map((function(e) {
                    return e.encodeId
                }
                ))
            }
            ), [])
              , k = Object(i.useState)(N[0])
              , T = Object(r.a)(k, 2)
              , C = T[0]
              , x = T[1];
            Object(i.useEffect)((function() {
                var e = setTimeout((function() {
                    var e = N.indexOf(C)
                      , t = e === N.length - 1 ? 0 : e + 1;
                    x(N[t])
                }
                ), 2e3);
                return function() {
                    return clearTimeout(e)
                }
            }
            ), [C, N]);
            return l.a.createElement(f.K, {
                className: M()("playlist-section", v)
            }, l.a.createElement(f.i, null, u ? l.a.createElement(p.b, {
                subTitle: u,
                title: s
            }) : l.a.createElement(p.d, {
                link: m,
                title: s
            }), l.a.createElement(f.f, {
                infinite: c,
                hideArrow: !0
            }, n.map((function(e, t) {
                return function(e, t) {
                    e.zoneid && I[e.zoneid] && (e = I[e.zoneid]);
                    var n = e.encodeId === O
                      , r = n && j
                      , c = g > 0 && g === e.uid
                      , i = y && n
                      , o = C === e.encodeId;
                    return e.sectionId = a,
                    l.a.createElement(A, {
                        key: e.encodeId,
                        playlist: e,
                        isActive: n,
                        isPlaying: r,
                        isOwner: c,
                        isBuffering: i,
                        animate: o
                    })
                }(e)
            }
            )))))
        }
        )))
          , C = n(218)
          , x = n(1520);
        var w = Object(i.memo)((function(e) {
            var t = e.item
              , n = e.sectionId
              , a = Object(o.c)(E.e)
              , c = Object(o.c)(h.g)
              , u = t.encodeId === a
              , s = u && c
              , d = Object(i.useState)("rgba(0, 0, 0, 0.7)")
              , b = Object(r.a)(d, 2)
              , v = b[0]
              , g = b[1]
              , p = Object(i.useState)("".concat(19, "px"))
              , y = Object(r.a)(p, 2)
              , N = y[0];
            y[1],
            t.sectionId = n;
            var A = Object(m.e)()
              , k = A.ref
              , M = A.ContextMenu
              , T = A.isShowContextMenu
              , C = A.handleContextMenu
              , w = A.hideContextMenu
              , R = Object(m.s)()
              , _ = Object(r.a)(R, 1)[0]
              , D = t.song
              , P = t.artistsNames
              , S = t.link
              , L = Object(i.useCallback)((function() {
                var e;
                _.playPlaylist(t, {
                    domRect: null === k || void 0 === k || null === (e = k.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
                })
            }
            ), [t])
              , F = Object(i.useMemo)((function() {
                var e;
                return (null === D || void 0 === D || null === (e = D.items) || void 0 === e ? void 0 : e.slice(0, 3).map((function(e) {
                    return e.thumbnail
                }
                ))) || []
            }
            ), [D])
              , Y = Object(m.k)({
                delayEnter: 100
            })
              , z = Object(r.a)(Y, 2)
              , B = z[0]
              , G = z[1];
            return Object(i.useEffect)((function() {
                x.a.getColor(t.thumbnailM).then((function(e) {
                    return g(e)
                }
                ))
            }
            ), []),
            l.a.createElement(l.a.Fragment, null, l.a.createElement(O.b, {
                to: S
            }, l.a.createElement(f.l, Object.assign({
                className: "playlist-wrapper",
                domRef: k
            }, G), l.a.createElement(f.e, null, l.a.createElement(j.c, {
                playlist: t,
                handleContextMenu: C,
                isShowContextMenu: B || T,
                isActive: u,
                isPlaying: s,
                playFn: L
            }), l.a.createElement(f.l, {
                className: "blur-bg",
                style: {
                    backgroundImage: "linear-gradient(\n                                    to bottom,\n                                    rgba(0, 0, 0, 0),\n                                    rgba(0, 0, 0, 0) 50%,\n                                    ".concat(v, "\n                                )")
                }
            }), l.a.createElement(f.l, {
                className: "mix-content"
            }, l.a.createElement(f.N, null, l.a.createElement(f.M, {
                lines: 2,
                minFontSize: N,
                allowCutting: !0
            }, P)), l.a.createElement(f.l, {
                className: "thumbs"
            }, F.map((function(e, t) {
                return l.a.createElement(f.l, {
                    key: t,
                    className: "thumb-item"
                }, l.a.createElement(f.x, {
                    src: e
                }))
            }
            ))))))), l.a.createElement(M, null, l.a.createElement(I.a, {
                songs: [],
                playlist: t,
                hideContextMenu: w
            })))
        }
        ))
          , R = ["V\xec b\u1ea1n y\xeau th\xedch", "B\u1ea1n \u0111\xe3 quan t\xe2m", "T\u1eeb th\u01b0 vi\u1ec7n c\u1ee7a b\u1ea1n", "V\xec b\u1ea1n nghe nhi\u1ec1u", "B\u1ea1n nghe g\u1ea7n \u0111\xe2y", "C\xf3 th\u1ec3 b\u1ea1n th\xedch"]
          , _ = Object(i.memo)((function(e) {
            var t = e.items
              , n = void 0 === t ? [] : t
              , a = e.fullhd
              , r = void 0 === a ? 20 : a
              , c = e.widescreen
              , i = void 0 === c ? 20 : c
              , o = e.desktop
              , u = void 0 === o ? 3 : o
              , s = e.touch
              , m = void 0 === s ? 3 : s
              , f = e.tablet
              , d = void 0 === f ? 3 : f
              , b = e.autoSlider
              , h = e.sectionId;
            if (y.Array.isEmpty(n))
                return null;
            var E = y.Array.shuffle(R);
            return l.a.createElement(C.b, {
                infinite: b,
                hideArrow: !0
            }, n.map((function(e, t) {
                return function(e, t) {
                    var n = E[t % E.length];
                    return l.a.createElement(w, {
                        key: "mix.".concat(e.encodeId),
                        fullhd: r,
                        widescreen: i,
                        desktop: u,
                        touch: m,
                        tablet: d,
                        item: e,
                        sectionId: h,
                        subTitle: n
                    })
                }(e, t)
            }
            )))
        }
        ))
          , D = (n(626),
        Object(i.memo)((function(e) {
            var t = e.items
              , n = void 0 === t ? [] : t
              , a = e.viewType
              , r = (void 0 === a && s.fb.SLIDER,
            e.title)
              , c = e.link
              , i = e.className
              , o = void 0 === i ? "" : i
              , u = e.sectionId
              , m = e.subTitle
              , d = e.options
              , b = (void 0 === d ? {} : d).autoSlider;
            if (!n.length)
                return null;
            return l.a.createElement(f.K, {
                className: M()("mix-section", o)
            }, l.a.createElement(f.i, null, m ? l.a.createElement(p.b, {
                subTitle: m,
                title: r
            }) : l.a.createElement(p.d, {
                link: c,
                title: r
            }), l.a.createElement(_, {
                autoSlider: b,
                items: n,
                sectionId: u
            })))
        }
        )))
          , P = n(186)
          , S = n(35)
          , L = n(126)
          , F = n(406)
          , Y = n(164)
          , z = n(153)
          , B = n(151)
          , G = n(7)
          , K = n(83)
          , U = n(187)
          , H = n(28)
          , V = n(12)
          , Q = "/page/get/home"
          , q = "/user/recent-play-home"
          , X = {
            get: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , a = {
                    page: e,
                    count: t
                };
                return (n || []).length > 0 && (a.segments = n),
                Object(V.b)((function() {
                    return Object(V.c)(Q, a)
                }
                ))
            },
            getRecentHome: function() {
                return Object(V.b)((function() {
                    return Object(V.c)(q)
                }
                ))
            }
        }
          , W = (n(1647),
        n(11))
          , Z = n.n(W)
          , J = n(20)
          , $ = n(15)
          , ee = n(621)
          , te = n(1528)
          , ne = n(404)
          , ae = n(127)
          , re = n(188)
          , ce = n(137)
          , ie = n(264)
          , le = n(16)
          , oe = n(67)
          , ue = (n(1648),
        ["gallery-item-selected", "gallery-item-next", "gallery-item-last", "gallery-item-first", "gallery-item-previous"]);
        var se = function(e) {
            var t = e.slide
              , n = e.sectionId
              , a = Object(i.useRef)(null)
              , c = Object(o.b)()
              , u = Object(m.u)()
              , d = Object(r.a)(u, 1)[0]
              , b = Object(m.s)()
              , h = Object(r.a)(b, 1)[0]
              , E = Object(re.a)()
              , v = Object(r.a)(E, 1)[0]
              , g = Object(ie.a)().playVideo;
            Object(m.a)(t.tracking, a);
            var p = Object(i.useMemo)((function() {
                return Object(oe.b)(t.link) || Object(G.g)(t.link)
            }
            ), [t.link])
              , j = Object(i.useCallback)((function() {
                return l.a.createElement(l.a.Fragment, null, l.a.createElement(f.e.Image, null, l.a.createElement(f.x, {
                    src: t.banner
                })), l.a.createElement(f.e.Content, null, l.a.createElement(f.N, {
                    renderAs: "div"
                }, t.title), l.a.createElement(f.N, {
                    subtitle: !0
                }, t.description)))
            }
            ), [t])
              , y = Object(i.useCallback)(function() {
                var e = Object(J.a)(Z.a.mark((function e(a) {
                    var r, i, l, o, u;
                    return Z.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t.link.includes("/bai-hat/")) {
                                    e.next = 16;
                                    break
                                }
                                return a.preventDefault(),
                                e.prev = 2,
                                e.next = 5,
                                ce.a.getInfo(t.encodeId);
                            case 5:
                                r = e.sent,
                                (i = r.data).sectionId = n,
                                l = {
                                    song: i,
                                    playSongFn: function() {
                                        h.playSong(i, {
                                            forcePlay: !0
                                        })
                                    },
                                    addToQueueFn: function(e) {
                                        return d.add(i, void 0, e)
                                    }
                                },
                                c(Object(le.o)({
                                    type: s.y.FROM_BANNER,
                                    option: l
                                })),
                                e.next = 16;
                                break;
                            case 13:
                                e.prev = 13,
                                e.t0 = e.catch(2),
                                e.t0 && G.p.error(e.t0.err, "Banner | Play song | encodeId | link | title | Error", t.encodeId, t.link, t.title, e.t0);
                            case 16:
                                t.link.includes("/video-clip/") && (a.preventDefault(),
                                (o = {
                                    encodeId: t.encodeId
                                }).sectionId = n,
                                g(o)),
                                (u = Object(G.l)(t.link)) && (a.preventDefault(),
                                v.playLivestreamWithId(u, !0, "hSlider"));
                            case 19:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 13]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [t]);
            return l.a.createElement(f.e, {
                domRef: a
            }, p ? l.a.createElement(f.l, {
                renderAs: "a",
                href: t.link,
                target: "_blank"
            }, j()) : l.a.createElement(O.b, {
                title: t.title,
                onClick: y,
                to: {
                    pathname: t.link,
                    state: {
                        sectionId: n
                    }
                }
            }, j()))
        }
          , me = Object(i.memo)((function(e) {
            var t = e.items
              , n = e.pause
              , a = void 0 === n ? "hover" : n
              , c = e.interval
              , u = void 0 === c ? 5e3 : c
              , s = e.sectionId
              , m = Object(ee.a)().width
              , d = Object(i.useRef)(null)
              , h = Object(i.useRef)([])
              , v = Object(i.useRef)(1)
              , O = Object(i.useState)(!1)
              , g = Object(r.a)(O, 2)
              , p = g[0]
              , j = g[1]
              , I = Object(i.useState)(y.Array.shuffle(t))
              , N = Object(r.a)(I, 1)[0]
              , A = Object(o.c)(E.i)
              , k = Object(o.c)(b.c)
              , M = Object(i.useState)(ue)
              , T = Object(r.a)(M, 2)
              , C = T[0]
              , x = T[1]
              , w = Object(i.useState)(0)
              , R = Object(r.a)(w, 2)
              , _ = R[0]
              , D = R[1]
              , P = Object(i.useMemo)((function() {
                var e = Object($.a)(N);
                return k[ae.b.BANNER_ZID] && (e = y.Array.insert(e, k[ae.b.BANNER_ZID], y.Number.random(0, e.length - 1))),
                k[ae.b.BANNER_MP3_ZID] && (e = y.Array.insert(e, k[ae.b.BANNER_MP3_ZID], 3)),
                e
            }
            ), [N, k]);
            Object(i.useEffect)((function() {
                var e = P.length - C.length;
                if (e > 0) {
                    var t = Object($.a)(Array(e)).map((function() {
                        return "gallery-item-add"
                    }
                    ));
                    t = y.Array.insert(Object($.a)(C), t, 3),
                    x(t)
                }
            }
            ), [P]);
            var S = Object(te.a)(C);
            Object(i.useEffect)((function() {
                L()
            }
            ), [C]);
            var L = function() {
                for (var e = 0; e < C.length; e++) {
                    var t = C[e]
                      , n = h.current[e];
                    n && (S && n.classList.remove(S[e]),
                    n.classList.add(t))
                }
            }
              , F = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = Object($.a)(C);
                if (e) {
                    var n = t.pop();
                    n && t.unshift(n)
                } else {
                    var a = t.shift();
                    a && t.push(a)
                }
                x(t)
            }
              , Y = Object(i.useCallback)((function() {
                "hover" === a && j(!0)
            }
            ), [a])
              , z = Object(i.useCallback)((function() {
                j(!1)
            }
            ), [a]);
            return Object(i.useEffect)((function() {
                return p || (v.current = setInterval((function() {
                    F(!0)
                }
                ), u)),
                function() {
                    clearInterval(v.current)
                }
            }
            ), [p, F, u]),
            Object(i.useEffect)((function() {
                var e, t = null === (e = h.current[0]) || void 0 === e ? void 0 : e.firstElementChild;
                if (t && d.current) {
                    var n = t.getBoundingClientRect().height;
                    d.current.style.height = n + "px",
                    D(n)
                }
            }
            ), [m, _, A]),
            l.a.createElement(f.i, null, l.a.createElement(f.l, {
                className: "gallery"
            }, l.a.createElement(f.l, {
                className: "gallery-container",
                domRef: d,
                onMouseEnter: Y,
                onMouseLeave: z
            }, l.a.createElement(f.l, {
                className: "zm-gallery-prev",
                onClick: function() {
                    return F(!1)
                }
            }, l.a.createElement(ne.a, {
                type: "prev",
                classNameIcon: "ic-go-left",
                enable: !0
            })), P.map((function(e, t) {
                return l.a.createElement(f.l, {
                    className: "gallery-item",
                    key: "".concat(t, "-").concat(e.encodeId),
                    domRef: function(e) {
                        return h.current[t] = e
                    }
                }, l.a.createElement(se, {
                    slide: e,
                    sectionId: s
                }))
            }
            )), l.a.createElement(f.l, {
                className: "zm-gallery-next",
                onClick: function() {
                    return F(!0)
                }
            }, l.a.createElement(ne.a, {
                type: "next",
                classNameIcon: "ic-go-right",
                enable: !0
            })))))
        }
        ))
          , fe = n(25)
          , de = Object(i.memo)((function(e) {
            var t = e.item
              , n = e.sectionId
              , a = Object(m.s)()
              , c = Object(r.a)(a, 1)[0]
              , i = t.playlist
              , u = t.title
              , s = t.subtitle
              , d = t.icon
              , b = Object(o.c)(E.e)
              , v = Object(o.c)(h.g)
              , O = i.encodeId === b
              , g = O && v
              , p = Object(o.c)(h.e) && O
              , j = function() {
                i.sectionId = n,
                c.playPlaylist(i),
                Object(fe.a)("Home", "HActivities_tags", s)
            };
            return l.a.createElement(f.A, {
                className: "zm-genre-mood-item",
                onClick: j
            }, l.a.createElement(f.A.Left, null, l.a.createElement(f.t, {
                src: i.thumbnail
            }), l.a.createElement(f.l, {
                className: "action"
            }, l.a.createElement(f.s, {
                isPlaying: g,
                onClick: j,
                isOutlinePlayBtn: !1,
                className: O && p ? "is-hide" : ""
            }), O && p && l.a.createElement(f.c, {
                className: p ? "" : "is-hide"
            }))), l.a.createElement(f.A.Content, null, l.a.createElement(f.N, {
                title: u
            }, l.a.createElement(f.M, null, u)), l.a.createElement(f.N, {
                subtitle: !0
            }, l.a.createElement(f.t, {
                src: d
            }), " ", s)))
        }
        ))
          , be = (n(1649),
        Object(i.memo)((function(e) {
            var t = e.items
              , n = e.className
              , a = e.title
              , r = e.link
              , c = e.sectionId;
            return l.a.createElement(f.K, {
                className: M()("zm-genre-mood-home-section", n)
            }, l.a.createElement(p.d, {
                link: r,
                title: a
            }), l.a.createElement(f.h, {
                oneline: !0
            }, t.map((function(e, t) {
                return l.a.createElement(f.h.Column, {
                    fullhd: 3,
                    tablet: 4,
                    marginClass: "mar-b-0"
                }, l.a.createElement(de, {
                    key: t,
                    item: e,
                    sectionId: c
                }))
            }
            ))))
        }
        )))
          , he = n(1556)
          , Ee = (n(1650),
        "ALL")
          , ve = [{
            id: Ee,
            text: "T\u1ea5t c\u1ea3",
            labelGA: "All",
            filter: "all",
            itemKey: "all"
        }, {
            id: "VPOP",
            text: "Vi\u1ec7t Nam",
            labelGA: "VietNam",
            filter: "vpop",
            itemKey: "vPop"
        }, {
            id: "OTHERS",
            text: "Qu\u1ed1c t\u1ebf",
            labelGA: "QuocTe",
            filter: "usuk",
            itemKey: "others"
        }]
          , Oe = ["Home Section", "_hNewReleases_play", "Single"]
          , ge = ["Home Section", "_hNewRelease_actionSong"]
          , pe = {
            className: "hide-right",
            songMiddle: null,
            thumbSize: 60,
            buttonsType: [S.b.FAVORITE, S.b.ADD_TO_QUEUE, S.b.ADD_NEXT_PLAYING, S.b.ADD_TO_PLAYLIST, S.b.RADIO, S.b.COMMENT, S.b.COPY_LINK, S.b.SHARE],
            otherInfo: function(e) {
                var t, n, a = e.song;
                return l.a.createElement(he.c, {
                    time: null !== (t = null === (n = a.album) || void 0 === n ? void 0 : n.releaseDate) && void 0 !== t ? t : a.releaseDate
                })
            }
        }
          , je = function(e) {
            var t = e.items
              , n = e.sectionId
              , c = e.genreId
              , u = Object(m.s)()
              , s = Object(r.a)(u, 1)[0]
              , f = Object(o.b)()
              , d = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = function() {
                    f(Object(Y.e)(c))
                };
                e && s.playSongInList(e, Object(a.a)(Object(a.a)({}, n), {}, {
                    songs: t.map((function(e) {
                        return Object(a.a)(Object(a.a)({}, e), {}, {
                            listInfo: {
                                title: "M\u1edbi ph\xe1t h\xe0nh",
                                link: "/",
                                scrollTo: "zm-new-release-section",
                                afterClickFn: r
                            }
                        })
                    }
                    ))
                }))
            };
            return l.a.createElement(ye, null, Array.from({
                length: 3
            }).map((function(e, a) {
                return l.a.createElement(i.Fragment, {
                    key: "song-list-item-".concat(a)
                }, l.a.createElement(S.m, {
                    items: t.slice(4 * a, 4 * (a + 1)),
                    SongItemProps: pe,
                    sectionId: n,
                    tracking: Oe,
                    actionTracking: ge,
                    playSongFn: d
                }))
            }
            )))
        }
          , ye = function(e) {
            var t = e.children;
            return l.a.createElement(f.h, null, l.a.Children.map(t, (function(e, t) {
                var n = 2 === t ? "0" : 6;
                return l.a.createElement(i.Fragment, {
                    key: "item-list-".concat(t)
                }, l.a.createElement(f.h.Column, {
                    marginClass: "mar-b-0",
                    fullhd: 4,
                    widescreen: 4,
                    desktop: 4,
                    touch: n,
                    tablet: n
                }, e))
            }
            )))
        }
          , Ie = Object(i.memo)((function(e) {
            var t = e.items
              , n = e.className
              , a = e.title
              , c = e.link
              , u = void 0 === c ? "/new-release/song" : c
              , s = e.sectionId
              , m = void 0 === s ? "_hNewReleases" : s
              , d = Object(o.b)()
              , b = Object(o.c)(z.b)
              , h = Object(i.useState)(b || Ee)
              , E = Object(r.a)(h, 2)
              , v = E[0]
              , O = E[1];
            if (Object(i.useEffect)((function() {
                b && O(b)
            }
            ), [b]),
            !t)
                return l.a.createElement(l.a.Fragment, null);
            var g = ve.find((function(e) {
                return e.id === v
            }
            ));
            if (!g)
                return l.a.createElement(l.a.Fragment, null);
            var j = t[g.itemKey] || []
              , y = "".concat(u, "?filter=").concat(g.filter);
            return l.a.createElement(f.K, {
                className: M()("zm-new-release-section", n)
            }, l.a.createElement(p.d, {
                link: y,
                title: a,
                tracking: ["Home Section", "_hNewRelease_viewAll"]
            }), l.a.createElement(f.l, {
                className: "genre-select"
            }, ve.map((function(e) {
                return l.a.createElement(f.d, {
                    key: e.id,
                    onClick: function() {
                        return function(e) {
                            var t;
                            O(e),
                            d(Object(Y.e)(e));
                            var n = null === (t = ve.find((function(t) {
                                return t.id === e
                            }
                            ))) || void 0 === t ? void 0 : t.labelGA;
                            Object(fe.a)("Home Section", "_hNewReleases_tab", n)
                        }(e.id)
                    },
                    className: M()({
                        active: v === e.id
                    })
                }, e.text)
            }
            ))), l.a.createElement(je, {
                items: j,
                sectionId: m,
                genreId: v
            }))
        }
        ))
          , Ne = n(412)
          , Ae = n(1532)
          , ke = function(e) {
            var t = Object(o.c)(Ae.a);
            return l.a.createElement(Ne.a, Object.assign({}, e, {
                items: t,
                fullhd: "1.4",
                widescreen: "1.4",
                desktop: 2,
                touch: 20,
                tablet: 20
            }))
        }
          , Me = n(52)
          , Te = (n(1651),
        function(e) {
            var t = e.source;
            return l.a.createElement(f.l, {
                className: "zm-partner-item"
            }, l.a.createElement(f.l, {
                className: "content"
            }, l.a.createElement(f.x, {
                src: t
            })))
        }
        )
          , Ce = Object(i.memo)((function() {
            var e = Object(o.c)(Me.f)
              , t = Object(i.useMemo)((function() {
                var t = e || {}
                  , n = t.title
                  , a = t.items
                  , r = void 0 === a ? [] : a
                  , c = t.isShuffle
                  , i = void 0 === c || c
                  , l = t.maxItems;
                return {
                    title: n,
                    maxItems: void 0 === l ? 16 : l,
                    items: i ? y.Array.shuffle(r) : r
                }
            }
            ), [e])
              , n = Object(m.p)()
              , a = n.Modal
              , r = n.show
              , c = n.hide;
            return t ? l.a.createElement(f.i, {
                className: "zm-partner-section"
            }, l.a.createElement(f.N, null, l.a.createElement(f.l, {
                renderAs: "span",
                onClick: r
            }, t.title)), l.a.createElement(f.h, {
                multiline: !0
            }, null === t || void 0 === t ? void 0 : t.items.slice(0, t.maxItems).map((function(e, t) {
                return function(e, t) {
                    return l.a.createElement(f.h.Column, {
                        key: t,
                        widescreen: 3,
                        fullhd: 3,
                        desktop: 3,
                        touch: 3,
                        tablet: 3
                    }, l.a.createElement(Te, {
                        source: e
                    }))
                }(e, t)
            }
            ))), l.a.createElement(a, null, l.a.createElement(f.l, {
                className: "zm-partner-modal"
            }, l.a.createElement(f.N, null, t.title), null === t || void 0 === t ? void 0 : t.items.map((function(e, t) {
                return l.a.createElement(f.h.Column, {
                    key: t,
                    widescreen: 20,
                    fullhd: 20,
                    desktop: 20,
                    touch: 3,
                    tablet: 3
                }, l.a.createElement(Te, {
                    source: e
                }))
            }
            )), l.a.createElement(f.P, {
                title: "\u0110\xf3ng",
                icon: "close",
                className: "close-btn",
                onClick: c
            })))) : l.a.createElement(l.a.Fragment, null)
        }
        ))
          , xe = n(190)
          , we = n(122)
          , Re = n(422)
          , _e = n(215)
          , De = (n(1652),
        Object(i.memo)((function(e) {
            var t = e.className
              , n = e.title
              , a = e.link;
            return l.a.createElement(f.K, {
                className: M()("playlist-section zm-home-recent", t)
            }, l.a.createElement(f.i, null, l.a.createElement(p.d, {
                link: a,
                title: n
            }), l.a.createElement(Pe, e)))
        }
        )));
        function Pe(e) {
            var t, n = Object(o.c)(E.e), a = Object(o.c)(d.m), c = Object(o.c)(h.g), b = Object(o.c)(h.e), v = Object(o.c)(we.c), O = Object(o.c)(we.i), g = Object(o.c)(we.g), p = Object(re.a)(), j = Object(r.a)(p, 1)[0], y = Object(i.useCallback)((function(e) {
                j.playLivestream(e)
            }
            ), []), I = e.sectionId, N = e.autoSlider, A = Object(m.b)((function() {
                return X.getRecentHome()
            }
            )), k = Object(r.a)(A, 2), M = k[0], T = k[1];
            Object(i.useEffect)((function() {
                T()
            }
            ), []);
            var C = (null === M || void 0 === M || null === (t = M.value) || void 0 === t ? void 0 : t.data) || [];
            return G.p.debug("PlaylistList | render"),
            M.loading ? l.a.createElement(u.a, {
                showTitle: !1,
                fullhd: "1.4",
                widescreen: "1.4",
                desktop: 2,
                touch: 20,
                tablet: 20,
                viewType: s.fb.SLIDER,
                countSection: 1,
                className: "loader"
            }) : l.a.createElement(f.f, {
                infinite: N,
                hideArrow: !0
            }, C.map((function(e) {
                return e.type === s.D.LIVESTREAM ? function(e) {
                    var t = e.encodeId === v
                      , n = t && O
                      , a = t && g;
                    return e.sectionId = "hRecent",
                    l.a.createElement(Re.a, {
                        item: e,
                        key: e.encodeId,
                        playFn: y,
                        isPlaying: n,
                        isBuffering: a,
                        isLive: !0,
                        hideActiveUsers: !0,
                        fullhd: "1.4",
                        widescreen: "1.4",
                        desktop: 2,
                        touch: 20,
                        tablet: 20
                    })
                }(e) : e.type === s.D.PODCAST ? function(e) {
                    return l.a.createElement(_e.a, {
                        item: e,
                        key: e.encodeId,
                        sectionId: I,
                        fullhd: "1.4",
                        widescreen: "1.4",
                        desktop: 2,
                        touch: 20,
                        tablet: 20,
                        showLabel: !0
                    })
                }(e) : function(e) {
                    var t = e.encodeId === n
                      , r = t && c
                      , i = a > 0 && a === e.uid
                      , o = b && t;
                    return e.sectionId = I,
                    l.a.createElement(xe.a, {
                        key: e.encodeId,
                        playlist: e,
                        isActive: t,
                        isPlaying: r,
                        isOwner: i,
                        isBuffering: o,
                        fullhd: "1.4",
                        widescreen: "1.4",
                        desktop: 2,
                        touch: 20,
                        tablet: 20,
                        itemType: "title"
                    })
                }(e)
            }
            )))
        }
        n(1653);
        var Se = n(46);
        function Le(e) {
            var t = e.chart;
            return l.a.createElement(f.e, null, l.a.createElement(f.e.Image, {
                className: "banner-image"
            }, l.a.createElement(Se.a, {
                to: t.link
            }, l.a.createElement(f.x, {
                src: t.cover
            }))))
        }
        var Fe, Ye = (Fe = {
            weekChart: l.a.memo((function(e) {
                var t = e.items
                  , n = void 0 === t ? [] : t;
                return l.a.createElement(f.i, {
                    className: "week-chart-section"
                }, l.a.createElement(f.h, {
                    multiline: !0
                }, n.map((function(e) {
                    return t = e,
                    l.a.createElement(f.h.Column, {
                        key: "weekChart.item.".concat(t.link),
                        fullhd: 4,
                        widescreen: 4,
                        desktop: 4,
                        touch: 4,
                        tablet: 4
                    }, l.a.createElement(Le, {
                        chart: t
                    }));
                    var t
                }
                ))))
            }
            ))
        },
        Object(c.a)(Fe, s.P.BANNER, me),
        Object(c.a)(Fe, s.P.SONG, S.g),
        Object(c.a)(Fe, s.P.MIX, D),
        Object(c.a)(Fe, s.P.RECENT, De),
        Object(c.a)(Fe, s.P.NONLOGGED_RECENT, ke),
        Object(c.a)(Fe, s.P.EFFECT_PLAYLIST, T),
        Object(c.a)(Fe, s.P.GENRE_MOOD_HOME, be),
        Object(c.a)(Fe, s.P.NEW_RELEASE, Ie),
        Fe), ze = [s.P.PLAYLIST, s.P.EFFECT_PLAYLIST, s.P.MIX];
        var Be = Object(i.memo)((function() {
            var e = Object(o.b)()
              , t = Object(o.c)(d.l)
              , n = Object(o.c)(B.c)
              , c = Object(o.c)(b.a)
              , f = Object(i.useRef)(t)
              , h = Object(o.c)(z.a)
              , E = Object(o.c)(d.g);
            Object(U.g)();
            var v = Object(i.useCallback)((function(t) {
                var n = Object(H.currentTime)()
                  , a = [];
                E && E.length > 0 && (E.some((function(e) {
                    return e.expireTime < n
                }
                )) || (a = E.map((function(e) {
                    return e.key
                }
                ))));
                return new Promise((function(n) {
                    X.get(t, 30, a).then((function(t) {
                        var a;
                        (null === (a = t.data) || void 0 === a ? void 0 : a.userSegments) && e(Object(L.d)({
                            newSegments: t.data.userSegments
                        })),
                        n(t)
                    }
                    )).catch((function(e) {
                        e && G.p.error(e.err, "getHomePage | error ", e)
                    }
                    ))
                }
                ))
            }
            ), [E])
              , O = Object(m.n)(v, {
                rootMargin: "300px"
            })
              , g = Object(r.a)(O, 3)
              , j = g[0]
              , y = g[1]
              , I = g[2];
            Object(i.useEffect)((function() {
                var t = document.getElementById(s.O)
                  , n = void 0
                  , a = void 0;
                return h && (a = setInterval((function() {
                    var r = document.getElementsByClassName(h)[0];
                    r && (clearInterval(a),
                    n = setTimeout((function() {
                        Object(K.scrollTo)(t, r.offsetTop, 500),
                        e(Object(Y.d)())
                    }
                    ), 100))
                }
                ), 100)),
                function() {
                    a && clearInterval(a),
                    n && clearTimeout(n)
                }
            }
            ), [h]),
            Object(i.useEffect)((function() {
                f.current != t && (I.refresh(),
                f.current = t)
            }
            ), [t]),
            Object(i.useEffect)((function() {
                y.isFetching || "/" !== n.path || I.refresh()
            }
            ), [n]),
            Object(i.useEffect)((function() {
                return c && e(Object(F.d)()),
                function() {
                    c && e(Object(F.c)())
                }
            }
            ), [c]);
            var N = Object(i.useMemo)((function() {
                return y.items.filter((function(e) {
                    var t = e.items
                      , n = e.sectionType;
                    return !(t && t.length < 5 && ze.includes(n))
                }
                )).map((function(e) {
                    var t = e.items
                      , n = void 0 === t ? [] : t
                      , r = e.sectionType
                      , c = e.options
                      , i = void 0 === c ? {} : c;
                    return r === s.P.PLAYLIST && !i.autoSlider && n.length > 5 ? Object(a.a)(Object(a.a)({}, e), {}, {
                        items: n.slice(0, 5)
                    }) : e
                }
                ))
            }
            ), [y.items]);
            return l.a.createElement(l.a.Fragment, null, l.a.createElement(P.a, {
                error: y.err,
                loading: y.isFetching,
                currentPage: y.currentPage
            }, Object(p.e)(N, Ye, "pad-0"), y.isFetching ? l.a.createElement(u.a, null) : null, y.hasMore && !y.isFetching && l.a.createElement("div", {
                ref: j,
                style: {
                    marginTop: "-300px",
                    height: "1px"
                }
            }), !y.hasMore && l.a.createElement(Ce, null)))
        }
        ));
        t.default = Be
    }
}]);
