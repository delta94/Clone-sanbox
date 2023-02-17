1555: function (e, t, n) {
    "use strict";
    var a, c, r = n(0),
        i = n.n(r),
        l = n(1),
        o = n(6),
        u = n(17),
        s = n(30),
        m = n(15),
        f = n(8),
        d = n(5),
        b = n.n(d),
        h = n(57),
        E = n(29),
        v = n(10),
        O = n(124),
        g = n(188),
        p = n(111),
        j = n(7),
        y = n(28),
        I = n(25),
        N = n(9),
        A = n(24),
        k = n(2),
        M = n(271);
    ! function (e) {
        e[e.FAVORITE = 0] = "FAVORITE",
            e[e.MV = 1] = "MV",
            e[e.ADD_TO_QUEUE = 2] = "ADD_TO_QUEUE",
            e[e.ADD_NEXT_PLAYING = 3] = "ADD_NEXT_PLAYING",
            e[e.REMOVE_FROM_QUEUE = 4] = "REMOVE_FROM_QUEUE",
            e[e.MORE = 5] = "MORE",
            e[e.ADD_TO_PLAYLIST = 6] = "ADD_TO_PLAYLIST",
            e[e.COMMENT = 7] = "COMMENT",
            e[e.SHARE = 8] = "SHARE",
            e[e.KARAOKE = 9] = "KARAOKE",
            e[e.RADIO = 10] = "RADIO",
            e[e.DOWNLOAD = 11] = "DOWNLOAD",
            e[e.RINGTONE = 12] = "RINGTONE",
            e[e.COPY_LINK = 13] = "COPY_LINK"
    }(c || (c = {}));
    a = {},
        Object(N.a)(a, c.ADD_TO_PLAYLIST, A.a),
        Object(N.a)(a, c.COMMENT, A.c),
        Object(N.a)(a, c.SHARE, A.m),
        Object(N.a)(a, c.RADIO, A.k),
        Object(N.a)(a, c.RINGTONE, A.l);
    var T = [c.FAVORITE, c.MORE];
    c.FAVORITE,
        c.MORE,
        c.ADD_TO_QUEUE,
        c.MORE,
        c.ADD_TO_QUEUE,
        c.ADD_NEXT_PLAYING,
        c.RINGTONE,
        c.ADD_TO_PLAYLIST,
        c.RADIO,
        c.COMMENT,
        c.COPY_LINK,
        c.SHARE,
        c.RINGTONE,
        c.ADD_TO_PLAYLIST,
        c.RADIO,
        c.KARAOKE,
        c.COMMENT,
        c.COPY_LINK,
        c.SHARE,
        c.REMOVE_FROM_QUEUE,
        c.FAVORITE,
        c.ADD_NEXT_PLAYING,
        c.RINGTONE,
        c.ADD_TO_PLAYLIST,
        c.RADIO,
        c.COMMENT,
        c.COPY_LINK,
        c.SHARE,
        c.ADD_TO_QUEUE,
        c.ADD_NEXT_PLAYING,
        c.RINGTONE,
        c.ADD_TO_PLAYLIST,
        c.RADIO,
        c.KARAOKE,
        c.COMMENT,
        c.COPY_LINK,
        c.SHARE;
    var C = n(101),
        x = n.n(C),
        w = function (e) {
            return "number" === typeof e ? x.a.unix(e) : x()("".concat(e, ":GMT+0700"), "DD/MM/YYYY:z")
        },
        R = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = w(e);
            return x()().diff(a, t, n)
        },
        _ = function (e) {
            var t = function (e) {
                var t = w(e);
                return x()().startOf("day").diff(t.startOf("day"), "days")
            }(e);
            if (t < 0)
                return "";
            if (0 === t) {
                var n = R(e, "minutes");
                if (n < 1)
                    return "V\u1eeba xong";
                if (n < 60)
                    return "".concat(n, " ph\xfat tr\u01b0\u1edbc");
                var a = R(e, "hours", !0);
                return a <= 6 ? "".concat(Math.floor(a), " gi\u1edd tr\u01b0\u1edbc") : "H\xf4m nay"
            }
            return 1 === t ? "H\xf4m qua" : t <= 6 ? "".concat(t, " ng\xe0y tr\u01b0\u1edbc") : t < 28 ? "".concat(Math.floor(t / 7), " tu\u1ea7n tr\u01b0\u1edbc") : w(e).format("DD/MM/YYYY")
        };
    var D = Object(r.memo)((function (e) {
            var t = e.typeButtons,
                n = void 0 === t ? T : t,
                a = e.item,
                r = e.handleContextMenu,
                o = e.hideContextMenu,
                u = e.isShowContextMenu;
            return i.a.createElement(i.a.Fragment, null, function (e, t) {
                return e.map((function (e) {
                    return i.a.createElement(l.y.Item, {
                        key: e
                    }, function (e) {
                        var t, n = e.type,
                            a = e.playlist,
                            r = e.showText,
                            l = e.showContextMenu,
                            o = e.isShowContextMenu;
                        switch (n) {
                            case c.FAVORITE:
                                t = i.a.createElement(A.g, {
                                    objectId: a.encodeId,
                                    objectType: k.D.PLAYLIST,
                                    showText: r,
                                    object: a
                                });
                                break;
                            case c.MORE:
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
                        showContextMenu: r,
                        hideContextMenu: o,
                        isShowContextMenu: u
                    }))
                }))
            }(n, a))
        })),
        S = (n(1535),
            function (e) {
                var t = e.item,
                    n = e.handleContextMenu,
                    a = e.isShowContextMenu;
                return i.a.createElement(l.A.Right, null, i.a.createElement(l.l, {
                    className: "hover-items"
                }, i.a.createElement(l.y, null, i.a.createElement(D, {
                    item: t,
                    handleContextMenu: n,
                    isShowContextMenu: a
                }))), i.a.createElement(l.l, {
                    className: "action-items"
                }, i.a.createElement(l.y, null, i.a.createElement(D, {
                    typeButtons: [c.FAVORITE],
                    item: t,
                    handleContextMenu: n,
                    isShowContextMenu: a
                }), i.a.createElement(l.y.Item, {
                    className: "duration"
                }, Object(y.formatTime)(300)))))
            }
        ),
        P = function (e) {
            var t = e.time;
            return i.a.createElement(l.l, {
                className: "time-release"
            }, i.a.createElement(l.l, {
                renderAs: "span"
            }, _(t)))
        },
        L = function (e) {
            var t = e.item,
                n = e.isActive,
                a = e.isPlaying,
                c = e.tracking,
                r = void 0 === c ? [] : c,
                o = e.clickTracking,
                u = void 0 === o ? [] : o,
                s = Object(v.e)(),
                d = s.ref,
                y = s.ContextMenu,
                N = s.handleContextMenu,
                A = s.hideContextMenu,
                k = s.isShowContextMenu,
                M = Object(v.s)(),
                T = Object(f.a)(M, 1)[0],
                C = Object(h.g)();
            return i.a.createElement(i.a.Fragment, null, i.a.createElement(g.b, {
                playlist: t
            }, i.a.createElement(l.A, {
                className: b()("zm-new-release-playlist", {
                    active: k || n
                }),
                domRef: d,
                onClick: function () {
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
                onClick: function (e) {
                    T.playPlaylist(t),
                        n || C.push(t.link),
                        I.a.apply(void 0, Object(m.a)(r)),
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
            })), i.a.createElement(P, {
                time: t.releaseDate
            }))), i.a.createElement(l.A.Content, null, i.a.createElement(l.l, null, _(t.releaseDate))), i.a.createElement(S, {
                handleContextMenu: N,
                item: t,
                isShowContextMenu: k
            }))), i.a.createElement(y, null, i.a.createElement(p.a, {
                playlist: t,
                hideContextMenu: A
            })))
        },
        F = function (e) {
            var t = e.items,
                n = e.sectionId,
                a = e.tracking,
                c = e.clickTracking,
                r = e.actionTracking,
                m = Object(o.c)(u.e),
                f = Object(o.c)(s.g);
            return i.a.createElement(l.z, null, t.map((function (e) {
                var t = e.encodeId === m,
                    o = t && f;
                return e.sectionId = n,
                    e.actionTracking = r,
                    i.a.createElement(l.z.Item, {
                        className: "bor-b-1",
                        key: e.encodeId
                    }, i.a.createElement(L, {
                        item: e,
                        isActive: t,
                        isPlaying: o,
                        tracking: a,
                        clickTracking: c
                    }))
            })))
        },
        Y = function (e) {
            var t = e.items,
                n = e.sectionId,
                a = e.tracking,
                c = e.clickTracking,
                r = e.actionTracking;
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
                clickTracking: c,
                actionTracking: r
            })) : null
        },
        z = n(3),
        B = n(179),
        U = n(12),
        G = n(40),
        K = n(35),
        V = n(64),
        H = function (e) {
            var t = e.song,
                n = Object(r.useMemo)((function () {
                    return i.a.createElement(l.l, null, _(t.album ? t.album.releaseDate : t.releaseDate))
                }), [t]),
                a = i.a.createElement(K.f, {
                    type: V.a.ICON,
                    icon: "song"
                });
            return i.a.createElement(K.l, Object.assign({}, e, {
                songMiddle: n,
                songLeftBefore: a
            }))
        },
        Q = function (e) {
            var t = e.items,
                n = e.sectionId,
                a = e.tracking,
                c = e.actionTracking,
                r = Object(o.c)(u.b),
                l = Object(o.c)(s.g),
                m = Object(o.c)(G.e),
                d = Object(o.c)(G.a),
                b = Object(o.c)(s.e),
                h = Object(o.c)(U.f),
                E = Object(o.c)(U.e),
                O = Object(v.s)(),
                g = Object(f.a)(O, 1)[0],
                p = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    g.playSongInList(e, Object(z.a)(Object(z.a)({}, n), {}, {
                        songs: t
                    }))
                };
            return i.a.createElement(B.b, {
                items: t,
                renderItem: function (e) {
                    var o = t[e];
                    if (!o)
                        return i.a.createElement(i.a.Fragment, null);
                    var u = o.encodeId === r,
                        s = l && u,
                        f = b && u;
                    return o.sectionId = n,
                        o.actionTracking = c,
                        i.a.createElement(H, {
                            key: o.encodeId,
                            order: e + 1,
                            song: o,
                            currentEncodeId: r,
                            isActive: u,
                            isPlaying: s,
                            isBuffering: f,
                            isUserVip: h,
                            mediasBlocked: m,
                            artistsBlocked: d,
                            isUserVN: E,
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
    n.d(t, "a", (function () {
            return Y
        })),
        n.d(t, "c", (function () {
            return P
        })),
        n.d(t, "b", (function () {
            return Q
        }))
},