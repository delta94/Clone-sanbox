oFUK: (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>M
    });
    var i = n("jg1C")
      , o = n("DTvD")
      , r = n("C6y2") //Flex
      , s = n("LCuF") //Box
      , a = n("cKr8") //VisuallyHidden
      , l = n("rLOQ") // Image
      , c = n("dFDU") // svg
      , u = n("nn0X") // theme
      , d = n("6+bd") // ?
      , h = n("v+2n")
      , p = n("EnIN")
      , f = n("TyPU")
      , x = n("V+WR")
      , v = n("S9o+")
      , g = n("7BLS")
      , m = n("BK7R")  // ?
      , b = n("QUKP")   //?
      , y = n("gZfF")  // ?
      , _ = n("u029")  // identify device
      , w = n("/Lz3") // Close Button
      , C = n("PEUE")   // Dialog
      , Z = n("eX3k")   // Drawer
      , j = (n("nLZj"),
    {
        height: ["56px", "64px"],
        lineHeight: ["56px", "64px"],
        pl: ["16px", "24px"]
    })
      , S = function(e) {
        var t = e.children
          , n = e.visible
          , o = void 0 !== n && n
          , a = e.onMaskClick
          , l = e.mask
          , c = void 0 === l || l
          , u = e.layerProps
          , d = void 0 === u ? {} : u
          , h = e.responsive
          , p = void 0 === h || h
          , f = e.keepMobileStyle
          , x = void 0 !== f && f
          , v = e.headerComponent
          , g = e.onCancel
          , S = void 0 === g ? function() {}
        : g
          , $ = e.hideClose
          , k = void 0 !== $ && $
          , M = e.mobileAsDialog
          , D = void 0 !== M && M
          , F = (0,
        y.Z)(e, ["children", "visible", "onMaskClick", "mask", "layerProps", "responsive", "keepMobileStyle", "headerComponent", "onCancel", "hideClose", "mobileAsDialog"]);
        return ((0,
        _.F)().isMobile && p || x) && !D ? (0,
        i.jsx)(i.Fragment, {
            children: (0,
            i.jsx)(Z.Z, (0,
            b.Z)((0,
            m.Z)({
                id: "kl999",
                maskBg: "dialog.mask",
                direction: "bottom",
                visible: o,
                bg: "dialog.mask",
                outerClick: a
            }, d), {
                children: (0,
                i.jsx)(s.Z, {
                    id: "drow-content",
                    sx: {
                        bg: "bg0",
                        height: "500px",
                        overflow: "auto",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px"
                    },
                    children: (0,
                    i.jsxs)(r.Z, (0,
                    b.Z)((0,
                    m.Z)({
                        tx: "modal",
                        variant: "drawer"
                    }, F), {
                        width: "100%",
                        height: "100%",
                        children: [k ? (0,
                        i.jsx)(i.Fragment, {}) : (0,
                        i.jsx)(w.Z, {
                            onClick: S,
                            size: 22,
                            sx: {
                                position: "absolute",
                                cursor: "pointer",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.02)",
                                borderRadius: "4px",
                                zIndex: 1e3,
                                top: "16px",
                                right: "16px",
                                color: "iconNormal"
                            }
                        }), v ? (0,
                        i.jsx)(s.Z, {
                            sx: {
                                originSx: j
                            },
                            children: v
                        }) : (0,
                        i.jsx)(i.Fragment, {}), t]
                    }))
                })
            }))
        }) : (0,
        i.jsx)(C.Z, (0,
        b.Z)((0,
        m.Z)({
            mask: c,
            visible: o,
            onMaskClick: a,
            width: ["298px", "360px"]
        }, d), {
            children: (0,
            i.jsxs)(i.Fragment, {
                children: [k ? (0,
                i.jsx)(i.Fragment, {}) : (0,
                i.jsx)(w.Z, {
                    onClick: S,
                    size: 22,
                    sx: {
                        position: "absolute",
                        cursor: "pointer",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.02)",
                        borderRadius: "4px",
                        zIndex: 1e3,
                        top: "20px",
                        right: "20px",
                        color: "iconNormal"
                    }
                }), v ? (0,
                i.jsx)(s.Z, {
                    sx: j,
                    children: v
                }) : (0,
                i.jsx)(i.Fragment, {}), (0,
                i.jsx)(r.Z, (0,
                b.Z)((0,
                m.Z)({
                    tx: "modal",
                    variant: "default"
                }, F), {
                    children: t
                }))]
            })
        }))
    };
    S.displayName = "Modal";
    const $ = S;
    const k = function(e) {
        var t = e.modalVisible
          , n = e.setModalVisible
          , a = e.coinList
          , c = e.onChooseCoin
          , d = e.isCrypto
          , h = e.fiatSymbol
          , m = e.onSearchClick
          , b = e.inputDataCy
          , y = (0,
        o.useRef)()
          , _ = (0,
        v.$)().t
          , w = (0,
        u.Fg)().isLight
          , C = (0,
        o.useState)("")
          , Z = C[0]
          , j = C[1]
          , S = (0,
        o.useState)(a)
          , k = S[0]
          , M = S[1]
          , D = (0,
        o.useState)(!1)
          , F = D[0]
          , z = D[1]
          , B = (0,
        o.useCallback)((function(e) {
            var t = []
              , n = [];
            return e.forEach((function(e) {
                e.hot ? t.push(e) : n.push(e)
            }
            )),
            t.sort((function(e, t) {
                return +(e.hotOrder || 0) - +(t.hotOrder || 0)
            }
            )),
            t.concat(n)
        }
        ), [])
          , L = (0,
        o.useCallback)((function(e, t) {
            return t.filter((function(t) {
                var n, i, o;
                return null === (i = null === t || void 0 === t || null === (n = t.assetCode) || void 0 === n ? void 0 : n.toUpperCase()) || void 0 === i ? void 0 : i.startsWith(null === (o = null === e || void 0 === e ? void 0 : e.toUpperCase()) || void 0 === o ? void 0 : o.trim())
            }
            ))
        }
        ), []);
        (0,
        o.useEffect)((function() {
            M(B(Z ? L(Z, a) : a))
        }
        ), [B]),
        (0,
        o.useEffect)((function() {
            (null === a || void 0 === a ? void 0 : a.length) && t && (j(""),
            M(B(a)),
            setTimeout((function() {
                m && m()
            }
            ), 0))
        }
        ), [a, t]);
        var I = (0,
        o.useCallback)((function(e) {
            e.target.value ? M(B(L(e.target.value, a))) : M(B(a)),
            j(e.target.value.toUpperCase())
        }
        ), [a, B, L])
          , H = (0,
        o.useCallback)((function(e) {
            c(e),
            n(!1)
        }
        ), [c, n])
          , O = (0,
        o.useCallback)((function() {
            j(""),
            M(B(a))
        }
        ), [a, B])
          , R = (0,
        o.useMemo)((function() {
            return (0,
            i.jsx)(s.Z, {
                pt: ["10px", "14px"],
                pb: ["10px", 0],
                children: (0,
                i.jsxs)(r.Z, {
                    sx: {
                        bg: w ? "#F5F5F5" : "#2B3139",
                        width: ["calc(100% - 80px)", "calc(100% - 56px)"],
                        height: ["32px", "36px"],
                        px: "sm",
                        paddingRight: "30px",
                        alignItems: "center",
                        position: "relative",
                        borderRadius: "20px",
                        ml: ["24px", 0]
                    },
                    children: [(0,
                    i.jsx)(p.Z, {
                        size: 20,
                        color: "t.placeholder"
                    }), (0,
                    i.jsx)(s.Z, {
                        "data-cy": b,
                        id: "coinModalInput",
                        ref: y,
                        as: "input",
                        value: Z,
                        placeholder: _("ocbs-buy-search"),
                        onInput: I,
                        onFocus: function() {
                            return z(!0)
                        },
                        onBlur: function() {
                            return z(!1)
                        },
                        onClick: function() {
                            m && m()
                        },
                        sx: {
                            ml: "xs",
                            height: "54px",
                            border: "0 none",
                            bg: "transparent",
                            fontSize: "14px",
                            width: "100%",
                            lineHeight: "20px",
                            color: "t.primary",
                            fontWeight: 400,
                            "&::placeholder": {
                                color: "t.placeholder",
                                fontWeight: 500
                            },
                            "&:focus, &:active": {
                                outline: "none"
                            }
                        }
                    }), Z && (0,
                    i.jsx)(f.Z, {
                        onClick: O,
                        color: "t.disabled",
                        sx: {
                            cursor: "pointer",
                            position: "absolute",
                            top: "6px",
                            right: "10px",
                            width: "20px !important",
                            height: "20px !important"
                        }
                    })]
                })
            })
        }
        ), [_, w, I, Z, F, m, O, b])
          , T = (0,
        o.useMemo)((function() {
            return (0,
            i.jsx)(s.Z, {
                sx: {
                    height: ["418px"],
                    width: "100%",
                    bg: "bg0"
                },
                children: k.length ? (0,
                i.jsx)(i.Fragment, {
                    children: (0,
                    i.jsx)(s.Z, {
                        sx: {
                            maxHeight: ["418px"],
                            overflow: "auto"
                        },
                        children: k.map((function(e, t) {
                            return (0,
                            i.jsx)(r.Z, {
                                id: "choose-coin-".concat(e.assetCode),
                                onClick: function() {
                                    return H((null === e || void 0 === e ? void 0 : e.assetCode) || "")
                                },
                                sx: {
                                    mx: "12px",
                                    px: "12px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    height: "48px",
                                    boxSizing: "border-box",
                                    cursor: "pointer",
                                    border: "1px solid transparent",
                                    ":hover": {
                                        borderRadius: "8px",
                                        border: w ? "1px solid #EAECEF" : "1px solid #474D57"
                                    }
                                },
                                children: (0,
                                i.jsxs)(r.Z, {
                                    sx: {
                                        flex: 1,
                                        fontWeight: 500
                                    },
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [(0,
                                    i.jsxs)(r.Z, {
                                        alignItems: "center",
                                        children: [(0,
                                        i.jsx)(l.Z, {
                                            src: e.logoUrl,
                                            sx: {
                                                width: "24px",
                                                height: "24px",
                                                borderRadius: "50%",
                                                border: "1px solid transparent"
                                            }
                                        }), (0,
                                        i.jsx)(s.Z, {
                                            sx: {
                                                ml: "12px"
                                            },
                                            children: (0,
                                            i.jsxs)(s.Z, {
                                                sx: {
                                                    fontSize: "sm",
                                                    color: "t.primary",
                                                    fontWeight: 500,
                                                    lineHeight: "20px"
                                                },
                                                children: [e.assetCode, e.hot && (0,
                                                i.jsx)(x.Z, {
                                                    size: 16,
                                                    color: "#F0B90B",
                                                    sx: {
                                                        position: "relative",
                                                        top: "3px",
                                                        ml: "4px"
                                                    }
                                                })]
                                            })
                                        })]
                                    }), d && (0,
                                    i.jsx)(r.Z, {
                                        sx: {
                                            color: "t.disabled",
                                            fontSize: "14px",
                                            fontWeight: 400
                                        },
                                        children: e.assetName
                                    })]
                                })
                            }, "".concat(e.assetCode, "-").concat(t))
                        }
                        ))
                    })
                }) : (0,
                i.jsxs)(s.Z, {
                    sx: {
                        height: "100%",
                        width: "100%",
                        textAlign: "center",
                        pt: "48px"
                    },
                    children: [(0,
                    i.jsx)(l.Z, {
                        width: "72px",
                        src: w ? (0,
                        g.Y)("assets/noResult.svg") : (0,
                        g.Y)("assets/noresult-dark.svg")
                    }), (0,
                    i.jsx)(s.Z, {
                        sx: {
                            color: "t.third",
                            fontSize: "sm"
                        },
                        children: _("ocbs-buy-No-results")
                    })]
                })
            })
        }
        ), [_, k, H, h, w, d]);
        return (0,
        i.jsx)($, {
            layerProps: {
                height: ["100vh", "480px"]
            },
            px: 0,
            visible: t,
            headerComponent: R,
            onCancel: function() {
                n(!1)
            },
            children: T
        })
    };
    const M = function(e) {
        var t = e.showBalance
          , n = e.placeholder
          , p = e.coinList
          , f = e.selectCoin
          , x = e.titleText
          , v = e.onChooseCoin
          , g = e.fiatSymbol
          , m = e.showPrice
          , b = e.isCrypto
          , y = e.error
          , _ = e.errorMessage
          , w = e.amount
          , C = e.onAmountInput
          , Z = e.size
          , j = e.onClickCoin
          , S = e.onSearchClick
          , $ = e.inputRef
          , M = e.disabled
          , D = e.loading
          , F = e.notLengthLimit
          , z = e.dataCy
          , B = e.inputDataCy
          , L = e.amountDataCy
          , I = e.hideChangeTab
          , H = e.bg
          , O = e.fontWeight
          , R = (0,
        o.useRef)()
          , T = (0,
        o.useState)(!1)
          , W = T[0]
          , A = T[1]
          , E = (0,
        o.useState)(!1)
          , U = E[0]
          , Y = E[1]
          , N = (0,
        d.B4)().isBuy
          , P = (0,
        u.Fg)().isLight
          , V = (0,
        o.useCallback)((function(e) {
            var t, n, i, o = null === (n = null === (t = e.target.value) || void 0 === t ? void 0 : t.replace(/\u3002/, ".")) || void 0 === n ? void 0 : n.replace(" ", "");
            if (!(!F && String(o).length > 11 && o.length >= (w || "").toString().length || Number.isNaN(+o) || +o < 0)) {
                var r = null === (i = o.split(".")) || void 0 === i ? void 0 : i[1];
                r && r.length > Number(Z) || C && C(o)
            }
        }
        ), [Z, C, w])
          , Q = (0,
        o.useMemo)((function() {
            return (0,
            i.jsx)(r.Z, {
                sx: {
                    color: "t.primary",
                    fontSize: "sm",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: x
            })
        }
        ), [x])
          , K = (0,
        o.useMemo)((function() {
            return (0,
            i.jsx)(r.Z, {
                sx: {
                    flex: 1
                },
                children: (0,
                i.jsx)(s.Z, {
                    ref: $ || R,
                    "data-cy": L,
                    as: "input",
                    disabled: M,
                    value: 0 === w ? "" : w,
                    onInput: V,
                    placeholder: n,
                    onFocus: function() {
                        return Y(!0)
                    },
                    onBlur: function() {
                        return Y(!1)
                    },
                    sx: {
                        width: "100%",
                        height: "40px",
                        color: y ? "#F6465D" : "t.primary",
                        fontSize: "24px",
                        outline: "none",
                        bg: H || (P ? "bg3" : "popupBg"),
                        border: "0 none",
                        lineHeight: "40px",
                        fontFamily: "inherit",
                        fontWeight: O || 500,
                        "&::placeholder": {
                            color: "t.placeholder"
                        },
                        "&:focus, &:active": {
                            outline: "none"
                        }
                    }
                })
            })
        }
        ), [O, $, H, M, w, V, n, P, L, y])
          , q = (0,
        o.useMemo)((function() {
            var e, t;
            return (0,
            i.jsxs)(r.Z, {
                sx: {
                    bg: "bg1",
                    borderRadius: "50px",
                    p: "xs",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    width: "116px"
                },
                onClick: function() {
                    j && j((null === f || void 0 === f ? void 0 : f.assetCode) || ""),
                    A(!0)
                },
                children: [D ? (0,
                i.jsx)(a.Z, {
                    width: "plus",
                    height: "24px"
                }) : (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsx)(l.Z, {
                        sx: {
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            flexShrink: 0
                        },
                        src: (null === f || void 0 === f ? void 0 : f.logoUrl) || (null === (e = p[0]) || void 0 === e ? void 0 : e.logoUrl)
                    }), (0,
                    i.jsx)(s.Z, {
                        sx: {
                            ml: "xs",
                            color: "t.primary",
                            fontSize: "md",
                            fontWeight: 500
                        },
                        "data-cy": z,
                        children: (null === f || void 0 === f ? void 0 : f.assetCode) || (null === (t = p[0]) || void 0 === t ? void 0 : t.assetCode) || ""
                    })]
                }), (0,
                i.jsx)(c.Z, {
                    sx: {
                        transform: "rotate(-90deg)"
                    },
                    size: 16,
                    color: "t.third",
                    ml: "20px"
                })]
            })
        }
        ), [p, f, j, D, z]);
        return (0,
        i.jsxs)(i.Fragment, {
            children: [(0,
            i.jsxs)(s.Z, {
                onClick: function() {
                    var e, t;
                    return null === (t = null === (e = $ || R) || void 0 === e ? void 0 : e.current) || void 0 === t ? void 0 : t.focus()
                },
                sx: {
                    width: "100%",
                    bg: H || (P ? "#F5F5F5" : "popupBg"),
                    borderRadius: "8px",
                    p: "16px",
                    border: y ? "1px solid #F6465D" : U ? "1px solid #F0B90B" : P ? "1px solid #FAFAFA" : "1px solid transparent",
                    ":hover": {
                        border: M ? "1px solid #FAFAFA" : y ? "1px solid #CF304A" : "1px solid #F0B90B"
                    }
                },
                children: [Q, (0,
                i.jsxs)(r.Z, {
                    sx: {
                        flex: 1,
                        mt: "8px",
                        alignItems: "center"
                    },
                    children: [K, q]
                }), _ && (0,
                i.jsx)(s.Z, {
                    sx: {
                        mt: "8px",
                        color: "#F6465D",
                        fontSize: "12px",
                        lineHeight: "16px",
                        fontWeight: 400
                    },
                    children: _
                })]
            }), N ? (0,
            i.jsx)(k, {
                inputDataCy: B,
                onSearchClick: function() {
                    return S && S((null === f || void 0 === f ? void 0 : f.assetCode) || "")
                },
                isCrypto: b,
                fiatSymbol: g,
                onChooseCoin: function(e) {
                    var t, n, i = (null === (t = p.find((function(t) {
                        return (null === t || void 0 === t ? void 0 : t.assetCode) === e
                    }
                    ))) || void 0 === t ? void 0 : t.size) || 8, o = null === (n = String(w).split(".")) || void 0 === n ? void 0 : n[1];
                    +(null === o || void 0 === o ? void 0 : o.length) > +i && (null === C || void 0 === C || C(Number(w).toFixed(+i))),
                    v(e)
                },
                coinList: p,
                modalVisible: W,
                setModalVisible: A
            }) : (0,
            i.jsx)(h.Z, {
                inputDataCy: B,
                onSearchClick: function() {
                    return S && S((null === f || void 0 === f ? void 0 : f.assetCode) || "")
                },
                showPrice: m,
                isCrypto: b,
                hideChangeTab: I,
                fiatSymbol: g,
                onChooseCoin: function(e) {
                    var t, n, i = (null === (t = p.find((function(t) {
                        return (null === t || void 0 === t ? void 0 : t.assetCode) === e
                    }
                    ))) || void 0 === t ? void 0 : t.size) || 8, o = null === (n = String(w).split(".")) || void 0 === n ? void 0 : n[1];
                    +(null === o || void 0 === o ? void 0 : o.length) > +i && (null === C || void 0 === C || C(Number(w).toFixed(+i))),
                    v(e)
                },
                coinList: p,
                modalVisible: W,
                setModalVisible: A,
                showBalance: t
            })]
        })
    }
},
yCpt: (e,n,t)=>{
    t.d(n, {
        Z6: ()=>v,
        ZP: ()=>b,
        u8: ()=>x
    });
    var i = t("sViW")
      , o = t("BK7R")
      , r = t("QUKP")
      , s = t("gZfF")
      , a = t("tEf9")
      , l = t("0GOp")
      , c = t.n(l)
      , u = t("jg1C")
      , d = t("DTvD")
      , h = t("cJDP")
      , p = t("cKr8")
      , f = t("LCuF")
      , v = function(e) {
        var n = e.onClick
          , t = e.loading
          , l = e.disabled
          , f = e.inactive
          , v = e.children
          , x = e.showSpinner
          , b = void 0 === x || x
          , g = e.enableAutoSubmit
          , m = (0,
        s.Z)(e, ["onClick", "loading", "disabled", "inactive", "children", "showSpinner", "enableAutoSubmit"])
          , Z = (0,
        d.useState)(!1)
          , k = Z[0]
          , w = Z[1]
          , y = (0,
        d.useRef)({
            handleOnClick: n
        })
          , C = (0,
        d.useMemo)((function() {
            return !f && (k || l || t)
        }
        ), [f, k, l, t])
          , S = (0,
        d.useCallback)((0,
        i.Z)(c().mark((function e() {
            var t, i, o, r = arguments;
            return c().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        for (t = r.length,
                        i = new Array(t),
                        o = 0; o < t; o++)
                            i[o] = r[o];
                        if (!f && !C && n) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return");
                    case 3:
                        return e.prev = 3,
                        w(!0),
                        e.next = 7,
                        n.apply(void 0, (0,
                        a.Z)(i));
                    case 7:
                        return e.abrupt("return", e.sent);
                    case 8:
                        return e.prev = 8,
                        w(!1),
                        e.finish(8);
                    case 11:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, null, [[3, , 8, 11]])
        }
        ))), [f, C, n]);
        return y.current = {
            handleOnClick: S
        },
        (0,
        d.useEffect)((function() {
            var e = function(e) {
                var n, t;
                "Enter" === e.key && (null === (n = y.current) || void 0 === n || null === (t = n.handleOnClick) || void 0 === t || t.call(n))
            };
            if (g)
                return window.addEventListener("keydown", e, !1),
                function() {
                    window.removeEventListener("keydown", e, !1)
                }
        }
        ), [g]),
        (0,
        u.jsx)(u.Fragment, {
            children: (0,
            u.jsxs)(h.Z, (0,
            r.Z)((0,
            o.Z)({
                type: "button",
                inactive: f,
                disabled: C,
                onClick: S
            }, m), {
                children: [b && (k || t) && (0,
                u.jsx)(p.Z, {
                    itemsColor: "t.third",
                    sx: {
                        mr: "sm",
                        height: "18px"
                    }
                }), v]
            }))
        })
    }
      , x = function(e) {
        var n = e.onClick
          , t = e.loading
          , l = e.disabled
          , v = e.inactive
          , x = e.children
          , b = e.showSpinner
          , g = void 0 === b || b
          , m = e.enableAutoSubmit
          , Z = e.sx
          , k = (0,
        s.Z)(e, ["onClick", "loading", "disabled", "inactive", "children", "showSpinner", "enableAutoSubmit", "sx"])
          , w = (0,
        d.useState)(!1)
          , y = w[0]
          , C = w[1]
          , S = (0,
        d.useRef)({
            handleOnClick: n
        })
          , E = (0,
        d.useMemo)((function() {
            return !v && (y || l || t)
        }
        ), [v, y, l, t])
          , D = (0,
        d.useMemo)((function() {
            return g && (y || t)
        }
        ), [g, y, t])
          , P = (0,
        d.useCallback)((0,
        i.Z)(c().mark((function e() {
            var t, i, o, r = arguments;
            return c().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        for (t = r.length,
                        i = new Array(t),
                        o = 0; o < t; o++)
                            i[o] = r[o];
                        if (!v && !E && n) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return");
                    case 3:
                        return e.prev = 3,
                        C(!0),
                        e.next = 7,
                        n.apply(void 0, (0,
                        a.Z)(i));
                    case 7:
                        return e.abrupt("return", e.sent);
                    case 8:
                        return e.prev = 8,
                        C(!1),
                        e.finish(8);
                    case 11:
                    case "end":
                        return e.stop()
                    }
            }
            ), e, null, [[3, , 8, 11]])
        }
        ))), [v, E, n]);
        return S.current = {
            handleOnClick: P
        },
        (0,
        d.useEffect)((function() {
            var e = function(e) {
                var n, t;
                "Enter" === e.key && (null === (n = S.current) || void 0 === n || null === (t = n.handleOnClick) || void 0 === t || t.call(n))
            };
            if (m)
                return window.addEventListener("keydown", e, !1),
                function() {
                    window.removeEventListener("keydown", e, !1)
                }
        }
        ), [m]),
        (0,
        u.jsx)(u.Fragment, {
            children: (0,
            u.jsxs)(h.Z, (0,
            r.Z)((0,
            o.Z)({
                type: "button",
                inactive: v,
                disabled: E,
                onClick: P,
                sx: (0,
                o.Z)({
                    position: "relative"
                }, Z || {})
            }, k), {
                children: [D ? (0,
                u.jsx)(f.Z, {
                    sx: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: (0,
                    u.jsx)(p.Z, {
                        itemsColor: "t.third",
                        sx: {
                            height: "18px"
                        }
                    })
                }) : null, (0,
                u.jsx)(f.Z, {
                    opacity: D ? 0 : 1,
                    children: x
                })]
            }))
        })
    };
    const b = v
},
"/Lz3": (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>o
    });
    var r = n("d5aF")
      , i = n("QxrR")
      , a = n("w/Qz"); // SVG
    const o = function(e) {
        return i.createElement(a.Z, (0,
        r.Z)({
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none"
        }, e), i.createElement("path", {
            d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
            fill: "currentColor"
        }))
    }
},
u029: (e,t,n)=>{
    "use strict";
    n.d(t, {
        F: ()=>s
    });
    var r = n("sZZk")
      , i = "undefined" === typeof window
      , a = {
        query: "screen and (max-width: 767px)"
    }
      , o = {
        query: "screen and (max-width: 1023px)"
    }
      , c = {
        query: "screen and (max-width: 1279px)"
    }
      , l = {
        query: "screen and (max-width: 1439px)"
    };
    function s() {
        if (i)
            return {
                isMobile: !1,
                isIPad: !1,
                is13Desk: !1,
                isLeastWebSize: !1
            };
        var e = (0,
        r.useMediaQuery)(a)
          , t = (0,
        r.useMediaQuery)(o)
          , n = (0,
        r.useMediaQuery)(c);
        return {
            isMobile: e,
            isIPad: t,
            is13Desk: (0,
            r.useMediaQuery)(l),
            isLeastWebSize: n
        }
    }
},

"7BLS": (e,t,n)=>{
    n.d(t, {
        Y: ()=>r,
        Z: ()=>a
    });
    var o = n("wRFv")
      , i = "".concat(o.Xs, "/image/julia/ocbs");
    function r(e) {
        var t = "".concat(o.Xs, "/static/images/ocbs");
        return "".concat(t, "/").concat(e)
    }
    const a = function(e) {
        return "".concat(i, "/").concat(e)
    }
},
"V+WR": (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>a
    });
    var i = n("M5j3")
      , o = n("DTvD")
      , r = n.n(o)
      , s = n("w/Qz");
    const a = function(e) {
        return r().createElement(s.Z, (0,
        i.Z)({
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none"
        }, e), r().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.343 7.565a7.78 7.78 0 000 11.13c3.124 3.073 8.19 3.073 11.314 0a7.78 7.78 0 000-11.13L12 2 6.343 7.565zm8.44 9.782a3.935 3.935 0 000-5.565L12 9l-2.783 2.782a3.935 3.935 0 005.566 5.565z",
            fill: "currentColor"
        }))
    }
}
,
TyPU: (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>a
    });
    var r = n("d5aF")
      , i = n("QxrR")
      , o = n("w/Qz");
    const a = function(e) {
        return i.createElement(o.Z, (0,
        r.Z)({
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none"
        }, e), i.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",
            fill: "currentColor"
        }))
    }
}
,

EnIN: (e,t,n)=>{
    n.d(t, {
        Z: ()=>c
    });
    var i = n("M5j3")
      , a = n("DTvD")
      , r = n.n(a)
      , o = n("w/Qz");
    const c = function(e) {
        return r().createElement(o.Z, (0,
        i.Z)({
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none"
        }, e), r().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
            fill: "currentColor"
        }))
    }
}
,
wRFv: (e,t,n)=>{
    "use strict";
    n.d(t, {
        $S: ()=>K,
        $Z: ()=>pe,
        $k: ()=>ae,
        Au: ()=>O,
        EK: ()=>V,
        En: ()=>ge,
        Er: ()=>B,
        FC: ()=>X,
        GB: ()=>be,
        GL: ()=>le,
        Gv: ()=>m,
        H3: ()=>te,
        LH: ()=>ce,
        M$: ()=>F,
        OD: ()=>v,
        Oy: ()=>U,
        Qz: ()=>h,
        Rd: ()=>g,
        Sv: ()=>p,
        TK: ()=>de,
        WF: ()=>N,
        WU: ()=>he,
        Xd: ()=>j,
        Xs: ()=>w,
        Yz: ()=>Z,
        Zd: ()=>ne,
        _U: ()=>re,
        bb: ()=>M,
        cg: ()=>ee,
        d6: ()=>I,
        eE: ()=>u,
        eh: ()=>s,
        eu: ()=>ve,
        fh: ()=>P,
        fv: ()=>_,
        gb: ()=>oe,
        hu: ()=>Q,
        jv: ()=>x,
        k$: ()=>E,
        kd: ()=>y,
        ks: ()=>ie,
        lO: ()=>C,
        pD: ()=>f,
        qS: ()=>q,
        qX: ()=>se,
        qx: ()=>me,
        rY: ()=>ue,
        tG: ()=>Y,
        uE: ()=>R,
        vR: ()=>b,
        vs: ()=>$,
        xH: ()=>A,
        xy: ()=>d,
        yB: ()=>T,
        z6: ()=>fe,
        zY: ()=>W
    });
    var r = n("tEf9")
      , a = n("80kY")
      , i = n("a59x")
      , o = n("62D4")
      , c = (0,
    a.B8)()
      , s = 60;
    function l(e) {
        return e
    }
    var u = "ocbs-ref";
    function p(e) {
        return {
            multiFaq: "".concat(window.location.origin, "/").concat(e, "/support/faq/8df758a570ba4d18941f38423f63aae5"),
            cardFaq: "".concat(window.location.origin, "/").concat(e, "/support/faq/8df758a570ba4d18941f38423f63aae5")
        }
    }
    var d, f, m, v = [{
        key: "Daily",
        title: "ocbs-RecurringBuy-Daily",
        defaultTitle: "Daily",
        showDate: !1,
        showDay: !1
    }, {
        key: "Weekly",
        title: "ocbs-RecurringBuy-Weekly",
        defaultTitle: "Weekly",
        showDate: !1,
        showDay: !0
    }, {
        key: "Bi-weekly",
        title: "ocbs-RecurringBuy-Bi-weekly",
        defaultTitle: "Biweekly",
        showDate: !1,
        showDay: !0
    }, {
        key: "Monthly",
        title: "ocbs-RecurringBuy-Monthly",
        defaultTitle: "Monthly",
        showDate: !0,
        showDay: !1
    }], h = ["ocbs-RecurringBuy-Monday", "ocbs-RecurringBuy-Tuesday", "ocbs-RecurringBuy-Wednesday", "ocbs-RecurringBuy-Thursday", "ocbs-RecurringBuy-Friday", "ocbs-RecurringBuy-Saturday", "ocbs-RecurringBuy-Sunday"], g = [{
        type: "THREE_YEAR",
        simplei18nKey: "ocbs-RecurringBuy-3Y",
        defaultSimplei18n: "3Y",
        i18nKey: "ocbs-RecurringBuy-3years",
        defaultI18n: "3 years"
    }, {
        type: "ONE_YEAR",
        simplei18nKey: "ocbs-RecurringBuy-1Y",
        defaultSimplei18n: "1Y",
        i18nKey: "ocbs-RecurringBuy-1year",
        defaultI18n: "1 year"
    }, {
        type: "SIX_MONTH",
        simplei18nKey: "ocbs-RecurringBuy-6M",
        defaultSimplei18n: "6M",
        i18nKey: "ocbs-RecurringBuy-6months",
        defaultI18n: "6 months"
    }, {
        type: "THREE_MONTH",
        simplei18nKey: "ocbs-RecurringBuy-3M",
        defaultSimplei18n: "3M",
        i18nKey: "ocbs-RecurringBuy-3month",
        defaultI18n: "3 month"
    }], b = "2", y = "8", x = {
        CRYPTO: "CRYPTO",
        FIAT: "FIAT"
    }, _ = {
        CHECKOUT: "CHECKOUT",
        ThirdParty: "ThirdParty",
        TAP_COM: "tap_com",
        WORLD_PAY: "worldpay"
    }, E = {
        BUY: "BUY",
        SELL: "SELL"
    }, w = (c.SITE_HOST,
    c.STATIC_HOST), k = c.STATIC_HOST_PRIVATE, C = c.COMMIT_HEAD, Z = c.I18N_BASE_PUBLIC, S = c.MARKET_STREAM_HOST_TEMPLATE, T = c.SENSORS_SERVER_HOST, A = c.ES_LOG_SERVER_HOST, I = c.ES_LOG_APP_NAME, B = c.ES_LOG_TOKEN, F = c.DEPLOYMENT_ENV, N = c.SYBE_ORG_ID, M = c.API_SAAS, z = c.APPLE_PAY_MERCHANT_ID, P = void 0 === z ? "merchant.com.binance.fiat.sendbox" : z, D = c.GOOGLE_PAY_MERCHANT_ID, R = void 0 === D ? "BCR2DN4TXDNOHBT4" : D, L = c.GOOGLE_PAY_GATEWAY_MERCHANT_ID, O = void 0 === L ? "googletest" : L, H = c.GOOGLE_PAY_ENV, U = void 0 === H ? "TEST" : H, G = c.APPLE_PAY_WITH_CARD, V = void 0 === G ? "0" : G, W = c.WORLDPAY_HOST, j = c.WORLDPAY_DDC_URL, Y = c.CARDINAL_DDC_URL, q = c.CARDINAL_HOST, K = c.GOOGLE_RECAPTCHA_KEY, Q = (c.API_HOST,
    c.INTERNAL_API_HOST,
    c.API_HOST_PUBLIC_TEMPLATE), X = c.ACCOUNTS_HOST_PUBLIC_TEMPLATE, J = c.SITE_HOST_TEMPLATE, $ = "".concat(w, "/static/images/ocbs"), ee = "Binance", te = "https://public.bnbstatic.com", ne = function(e) {
        return "https://accounts.".concat((0,
        o.Z)(), "/").concat(e, "/login")
    }, re = (S || "").replace("{{rootDomain}}", (0,
    i.nc)(2)), ae = l(w, k), ie = "".concat(w, "/static/images/ocbs"), oe = "".concat(w, "/image/julia/ocbs");
    !function(e) {
        e.BUY = "BUY",
        e.SELL = "SELL"
    }(d || (d = {})),
    function(e) {
        e.HzBankcard = "hzbankcard",
        e.SafeCharge = "safecharge",
        e.tap = "tap",
        e.worldpay = "worldpay",
        e.tbc_bank = "TBC_BANK",
        e.EMP = "EMP",
        e.PAYNETICS = "PAYNETICS",
        e.ApplePay = "APPLE_PAY",
        e.GooglePay = "GOOGLE_PAY",
        e.TAP_COM = "TAP_COM",
        e.Mobilum = "Mobilum",
        e.SafetyPay = "SAFETY_PAY",
        e.Paxos = "Paxos",
        e.Wallet = "Wallet",
        e.P2P = "P2P",
        e.Inswitch = "INSWITCH",
        e.Card = "card",
        e.TAP_BUY = "TAP_BUY",
        e.DA5 = "DA5",
        e.MEDA = "MEDA",
        e.PAYMONADE = "PAYMONADE",
        e.PAYMONADE_BANK_TRANSFER = "PAYMONADE_BANK_TRANSFER",
        e.NUVEI_OCBS = "NUVEI_OCBS",
        e.cashier = "cashier",
        e.recurring = "recurring",
        e.calculator = "calculator"
    }(f || (f = {})),
    function(e) {
        e.OnlineBank = "ONLINE_BANKING",
        e.BANK_TRANSFER = "BANK_TRANSFER",
        e.INSWITCH_MOBILE_MONEY = "mobilemoney",
        e.INSWITCH_MOBILE_BANKING = "mobilebanking",
        e.INSWITCH_CASH_PAYMENT = "cashpayment",
        e.INSWITCH_QR_PAYMENT = "qrpayment",
        e.INSWITCH_FRI = "inswitchfri",
        e.INSWITCH_SINPEMOVIL = "SINPEMOVIL",
        e.PAYMONADE = "PAYMONADE",
        e.PAYMONADE_BANK_TRANSFER = "THIRD_PARTY",
        e.NUVEI_OCBS = "SEPA"
    }(m || (m = {}));
    var ce, se = {
        multipleBuy: "multiple_buy",
        singleBuy: "single_buy",
        multipleSell: "multiple_sell",
        singleSell: "single_sell",
        cryptoBalance: "cryptoBalance"
    }, le = {
        DEPOSIT: "DEPOSIT",
        BUY: "BUY",
        SELL: "SELL"
    }, ue = {
        BUY: "fea-title-Buy Crypto",
        SELL: "fea-title-Sell Crypto",
        DEPOSIT: "fea-title-Deposit Fiat",
        WITHDRAW: "fea-title-Withdraw Fiat",
        ThirdParty: "fea-title-Third Party"
    }, pe = {
        l: "low",
        c: "close",
        h: "high",
        o: "open",
        v: "volume",
        qv: "quoteVolume",
        s: "symbol",
        ts: "tickSize",
        i: "minQty",
        q: "quoteAsset",
        b: "baseAsset",
        m: "marginAsset",
        qn: "quoteName",
        an: "baseAssetName",
        pm: "parentMarket",
        pn: "parentMarketName",
        cs: "circulatingSupply",
        qp: "quantityPrecision",
        pp: "pricePrecision",
        f: "filters",
        etf: "etf",
        dd: "deliveryDate",
        p: "pair",
        ct: "contractType",
        cv: "contractVal",
        cts: "contractStatus",
        eqp: "equalQtyPrecision",
        bv: "baseVolume",
        sp: "settlePlan",
        pom: "delisted",
        pomt: "delistedTime",
        tp: "triggerProtect",
        tags: "tags",
        isDelivery: "isDelivery",
        type: "",
        lss: "limitStepSize",
        mss: "marketStepSize",
        st: "tradingStatus",
        lc: "lowCirculation",
        sd: "softDelisting"
    }, de = {
        RAIL_PAY: "1",
        SUCCESS: "4",
        DEPENDING: "2",
        REJECTED: "5",
        CANCEL: "10",
        QUOTE_EXPIRED: "100",
        PENDING: "6",
        QUOTE_EXPIRED_CANCEL: "200",
        LOOP_FINISH: "300"
    }, fe = {
        ORDER_EXECUTING: de.PENDING,
        ORDER_SUCCESS: de.SUCCESS,
        ORDER_FAILED: de.REJECTED,
        ORDER_QUOTE_EXPIRED: de.QUOTE_EXPIRED,
        ORDER_NEED_CHALLENGE: "ORDER_NEED_CHALLENGE",
        ORDER_EXECUTING_AUTHORIZE: "ORDER_EXECUTING_AUTHORIZE",
        ORDER_CANCEL: de.CANCEL,
        ORDER_NEED_FINGERPRINT: "ORDER_NEED_FINGERPRINT",
        ORDER_FINGERPRINT_PROCESSING: "ORDER_FINGERPRINT_PROCESSING",
        ORDER_NEED_ADDITIONAL: "ORDER_NEED_ADDITIONAL_ACTION"
    }, me = {
        APPLE: "/static/images/ocbs/apple.svg",
        GOOGLE: "/static/images/ocbs/google_pay.svg"
    }, ve = {
        SelectPaymentMethod: "select payment method",
        WalletSingleBuyHomePage: "wallet single buy home page",
        TapBuySingleBuyHomePage: "tap buy single buy home page",
        OnlineBankSingleBuyHomePage: "online bank single buy home page",
        InswitchSingleBuyHomePage: "inswitch single buy home page",
        CardSingleSelectPaymentMethod: "card single select payment method"
    };
    !function(e) {
        e.BUY = "buy",
        e.SELL = "sell",
        e.RECURRING = "recurring"
    }(ce || (ce = {}));
    var he = function() {
        return null === J || void 0 === J ? void 0 : J.replace("{{rootDomain}}", function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return window.location.href.indexOf("localhost") > -1 ? "devfdg.net" : i.nc.apply(void 0, (0,
            r.Z)(t))
        }(2))
    }
      , ge = {
        "/:lng/crypto/recurring": "recurring",
        "/:lng/crypto/recurring/:fiat": "recurring",
        "/:lng/crypto/recurring/:fiat/:crypto": "recurring"
    }
      , be = {
        "/:lng/crypto/recurring": "buy",
        "/:lng/crypto/recurring/:fiat": "buy",
        "/:lng/crypto/recurring/:fiat/:crypto": "buy"
    }
}
,

PEUE: (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>E
    });
    var r = n("BK7R")
      , a = n("QUKP")
      , i = n("gZfF")
      , o = n("aVXY")
      , c = n("N/Z2")
      , s = n("jg1C")
      , l = n("g80r")  //@emotion/react
      , u = n("DTvD")
      , p = n.n(u)
      , d = n("hTvQ") //ReactDOM
      , f = n.n(d)
      , m = n("C6y2")  // Flex
      , v = n("LCuF"); // Box
    function h() {
        var e = (0,
        c.Z)(["\n  0% {\n    transform: scale(0.95);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n"]);
        return h = function() {
            return e
        }
        ,
        e
    }
    function g() {
        var e = (0,
        c.Z)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);
        return g = function() {
            return e
        }
        ,
        e
    }
    var b = p().useLayoutEffect
      , y = (0,
    l.keyframes)(h())
      , x = (0,
    l.keyframes)(g())
      , _ = (0,
    u.forwardRef)((function(e, t) {
        var n = e.visible
          , c = e.mask
          , l = void 0 === c || c
          , d = e.onMaskClick
          , h = e.children
          , g = e.maskStyles
          , _ = e.onClick
          , E = e.onPressEnter
          , w = void 0 === E ? function() {}
        : E
          , k = e.onPressEsc
          , C = void 0 === k ? function() {}
        : k
          , Z = e.externalBlock
          , S = e.containerNode
          , T = (0,
        i.Z)(e, ["visible", "mask", "onMaskClick", "children", "maskStyles", "onClick", "onPressEnter", "onPressEsc", "externalBlock", "containerNode"])
          , A = (0,
        o.Z)(p().useState(!1), 2)
          , I = A[0]
          , B = A[1];
        p().useEffect((function() {
            n && B(!0)
        }
        ), [n]);
        var F = (0,
        u.useCallback)((function(e) {
            13 === e.keyCode ? w(e) : 27 === e.keyCode && C(e)
        }
        ), [w, C]);
        (0,
        u.useEffect)((function() {
            return n ? document.addEventListener("keydown", F) : document.removeEventListener("keydown", F),
            function() {
                document.removeEventListener("keydown", F)
            }
        }
        ), [n]),
        b((function() {
            return l && I ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
            function() {
                document.body.style.removeProperty("overflow")
            }
        }
        ), [l, I]);
        var N = (0,
        u.useMemo)((function() {
            return l ? {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                bg: "dialog.mask"
            } : {
                left: "50%",
                top: "50%",
                transform: "translate3d(-50%, -50%, 0)"
            }
        }
        ), [l])
          , M = (0,
        u.useMemo)((function() {
            return {
                animation: "".concat(n ? y : x, " 0.3s ease-in-out"),
                animationIterationCount: 1
            }
        }
        ), [n]);
        return I ? f().createPortal((0,
        s.jsxs)(m.Z, {
            ref: t,
            __css: (0,
            r.Z)({
                position: ["fixed", "absolute"],
                alignItems: "center",
                justifyContent: "center",
                zIndex: "modal",
                flexDirection: Z ? "column" : "unset"
            }, N),
            sx: g,
            onClick: function(e) {
                e.target === e.currentTarget && d && d(e)
            },
            children: [(0,
            s.jsx)(v.Z, (0,
            a.Z)((0,
            r.Z)({
                __css: (0,
                r.Z)({
                    position: "relative",
                    boxShadow: "dialog",
                    borderRadius: "large",
                    bg: "popupBg"
                }, M),
                onAnimationEnd: function() {
                    B(n)
                }
            }, T), {
                onClick: _,
                children: h
            })), (0,
            s.jsx)(v.Z, {
                __css: M,
                children: Z
            })]
        }), ("function" === typeof S ? S() : S) || document.body) : null
    }
    ));
    _.displayName = "Dialog";
    const E = _
},

aVXY: (e,t,r)=>{
    "use strict";
    r.d(t, {
        Z: ()=>s
    });
    var n = r("51Xw")
      , o = r("x9Vb")
      , i = r("JAs2")
      , a = r("xjOY");
    function s(e, t) {
        return (0,
        n.Z)(e) || (0,
        o.Z)(e, t) || (0,
        a.Z)(e, t) || (0,
        i.Z)()
    }
},




eX3k: (e,n,t)=>{
    t.d(n, {
        Z: ()=>g
    });
    var i = t("BK7R")
      , o = t("QUKP")
      , r = t("gZfF")
      , s = t("aVXY")
      , a = t("jg1C")
      , l = t("DTvD")
      , c = t.n(l)
      , u = t("qVxr") //useResizeObserver
      , d = t("Reyh") // Portal
      , h = t("LCuF"); // Box
    function p(e, n) {
        "function" === typeof e ? e(n) : e && (e.current = n)
    }
    var f = {
        position: ["fixed", "absolute"],
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: "1100"
    }
      , v = {
        overflow: "auto",
        zIndex: "1100",
        maxHeight: "calc(100% - 16px)",
        overflowY: "auto"
    }
      , x = {
        top: {
            parent: {
                flexDirection: "column"
            },
            child: {
                width: "100%",
                transition: "all 0.5s ease"
            }
        },
        bottom: {
            parent: {
                flexDirection: "column-reverse"
            },
            child: {
                width: "100%",
                transition: "all 0.5s ease"
            }
        },
        left: {
            parent: {},
            child: {
                height: "100%",
                transition: "all 0.5s ease"
            }
        },
        right: {
            parent: {
                flexDirection: "row-reverse"
            },
            child: {
                height: "100%",
                transition: "all 0.5s ease"
            }
        }
    }
      , b = (0,
    l.forwardRef)((function(e, n) {
        var t, b, g = e.visible, m = void 0 !== g && g, Z = e.direction, k = void 0 === Z ? "right" : Z, w = e.bg, y = void 0 === w ? "background" : w, C = e.maskBg, S = e.children, E = e.childProps, D = void 0 === E ? {} : E, P = e.outerClick, j = e.containerNode, I = (0,
        r.Z)(e, ["visible", "direction", "bg", "maskBg", "children", "childProps", "outerClick", "containerNode"]), R = (0,
        l.useState)(m), A = R[0], B = R[1], F = (0,
        l.useRef)(), T = (0,
        l.useState)(), N = T[0], L = T[1], M = (0,
        l.useState)(), O = M[0], _ = M[1], K = (0,
        l.useState)("auto"), U = K[0], V = K[1], z = C ? {
            bg: C,
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        } : {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        }, Q = (0,
        s.Z)((0,
        u.Z)(), 2), W = Q[0], H = Q[1], J = H.width, X = H.height, G = (t = n,
        b = W,
        c().useMemo((function() {
            return null == t && null == b ? null : function(e) {
                p(t, e),
                p(b, e)
            }
        }
        ), [t, b])), Y = c().cloneElement(S, {
            ref: G
        });
        return (0,
        l.useEffect)((function() {
            "top" !== k && "bottom" !== k || _(m ? X : 0)
        }
        ), [X, k, m]),
        (0,
        l.useEffect)((function() {
            "left" !== k && "right" !== k || L(m ? J : 0)
        }
        ), [J, k, m]),
        (0,
        l.useEffect)((function() {
            return m ? (B(!0),
            V(document.body.style.overflow || "auto"),
            document.body.style.setProperty("overflow", "hidden")) : F.current = setTimeout((function() {
                return B(!1)
            }
            ), 500),
            function() {
                try {
                    clearTimeout(F.current)
                } catch (e) {}
                document.body.style.setProperty("overflow", U)
            }
        }
        ), [m]),
        (0,
        a.jsx)(d.ZP, {
            container: j,
            children: (0,
            a.jsxs)(h.Z, (0,
            o.Z)((0,
            i.Z)({
                __css: (0,
                i.Z)({}, f, x[k].parent),
                display: m || A ? "flex" : "none"
            }, I), {
                children: [(0,
                a.jsx)(h.Z, (0,
                o.Z)((0,
                i.Z)({
                    __css: (0,
                    i.Z)({}, v, x[k].child),
                    width: N,
                    height: O,
                    bg: y
                }, D), {
                    children: Y
                })), (0,
                a.jsx)(h.Z, (0,
                o.Z)((0,
                i.Z)({}, z), {
                    flex: 1,
                    onClick: function(e) {
                        return P && P(e)
                    }
                }))]
            }))
        })
    }
    ));
    b.displayName = "Drawer";
    const g = b
}



,


qVxr: (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>c
    });
    var r = n("DTvD")
      , i = function() {};
    var a = "undefined" !== typeof window;
    const o = a ? r.useLayoutEffect : r.useEffect;
    var s = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };
    const c = a && "undefined" !== typeof window.ResizeObserver ? function() {
        var e = (0,
        r.useState)(null)
          , t = e[0]
          , n = e[1]
          , i = (0,
        r.useState)(s)
          , a = i[0]
          , c = i[1]
          , u = (0,
        r.useMemo)((function() {
            return new window.ResizeObserver((function(e) {
                if (e[0]) {
                    var t = e[0].contentRect
                      , n = t.x
                      , r = t.y
                      , i = t.width
                      , a = t.height
                      , o = t.top
                      , s = t.left
                      , u = t.bottom
                      , l = t.right;
                    c({
                        x: n,
                        y: r,
                        width: i,
                        height: a,
                        top: o,
                        left: s,
                        bottom: u,
                        right: l
                    })
                }
            }
            ))
        }
        ), []);
        return o((function() {
            if (t)
                return u.observe(t),
                function() {
                    u.disconnect()
                }
        }
        ), [t]),
        [n, a]
    }
    : function() {
        return [i, s]
    }
}
,

Reyh: (e,t,n)=>{
    "use strict";
    n.d(t, {
        ZP: ()=>f
    });
    var r = n("DTvD")
      , a = n.n(r)
      , i = n("tgNr") //useMultiSourcePortals
      , o = n("aVXY")
      , c = n("hTvQ") //ReactDOM
      , s = n.n(c)
      , l = "undefined" !== typeof window ? a().useLayoutEffect : a().useEffect
      , u = function(e, t) {
        "function" === typeof e ? e(t) : e && (e.current = t)
    };
    const p = a().forwardRef((function(e, t) {
        var n = e.children
          , r = e.container
          , i = e.disablePortal
          , c = void 0 !== i && i
          , p = (0,
        o.Z)(a().useState(), 2)
          , d = p[0]
          , f = p[1];
        return l((function() {
            c || f(function(e) {
                return e = "function" === typeof e ? e() : e,
                s().findDOMNode(e)
            }(r) || document.body)
        }
        ), [r]),
        l((function() {
            if (d && !c)
                return u(t, d),
                function() {
                    u(t, null)
                }
        }
        ), [t, d, c]),
        c ? a().isValidElement(n) ? a().cloneElement(n, {
            ref: t
        }) : n : d ? s().createPortal(n, d) : null
    }
    ));
    var d = (0,
    i.m)();
    (0,
    r.createContext)(d.Source);
    const f = p
}
,


tgNr: (e,t,r)=>{
    "use strict";
    r.d(t, {
        m: ()=>l
    });
    var n = r("DPeK")
      , o = r("aiFg")
      , i = r("DTvD")
      , a = r.n(i)
      , s = r("hTvQ") //ReactDOM
      , c = r.n(s)
      , u = ["as"];
    function l(e) {
        var t = (void 0 === e ? {} : e).multiSources
          , r = {};
        function i(e) {
            r.value = e,
            r.set && r.set.current && r.set.current(e)
        }
        return {
            Source: function(e) {
                var n = e.children
                  , o = a().useState(null)
                  , i = o[0]
                  , s = o[1];
                return a().useLayoutEffect((function() {
                    var e, n = {
                        current: s
                    };
                    return r.set && (e = r.set,
                    t || r.set.current(null)),
                    r.set = n,
                    s(r.value),
                    function() {
                        n.current = null,
                        r.set = null,
                        e && e.current && (r.set = e,
                        r.set.current(r.value))
                    }
                }
                ), []),
                i ? c().createPortal(n, i) : null
            },
            Target: function(e) {
                var t = e.as
                  , r = void 0 === t ? "div" : t
                  , s = (0,
                o.Z)(e, u);
                return a().createElement(r, (0,
                n.Z)({
                    ref: i
                }, s))
            },
            useTargetRef: function() {
                return i
            }
        }
    }
}
,

cKr8: (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>b
    });
    var r = n("M5j3")
      , a = n("gZfF")
      , i = n("N/Z2")
      , o = n("DTvD")
      , c = n.n(o)
      , s = n("g80r")
      , l = n("6aZm")
      , u = n("LCuF")
      , p = (0,
    l.YP)("uikit-core", "VisuallyHidden");
    const d = function(e) {
        var t = e.children;
        return p(""),
        c().createElement(u.Z, {
            as: "span",
            __css: {
                border: "0px",
                clip: "rect(0px, 0px, 0px, 0px)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                padding: "0px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "absolute"
            }
        }, t)
    };
    function f() {
        var e = (0,
        i.Z)(["\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1.0);\n  }\n"]);
        return f = function() {
            return e
        }
        ,
        e
    }
    var m = (0,
    l.YP)("uikit-core", "Spinner")
      , v = (0,
    o.forwardRef)((function(e, t) {
        e.variant;
        var n = e.itemsColor
          , i = void 0 === n ? "primary" : n
          , o = e.label
          , s = (0,
        a.Z)(e, ["variant", "itemsColor", "label"]);
        m("");
        var l = Array(4).fill(1).map((function(e, t) {
            return "-".concat(t / 10, "s")
        }
        )).reverse();
        return c().createElement(u.Z, (0,
        r.Z)({
            ref: t
        }, s, {
            __css: {
                display: "flex",
                width: "30px",
                height: "30px",
                alignItems: "center",
                justifyContent: "space-between"
            }
        }), o && c().createElement(d, null, o), l.map((function(e, t) {
            return c().createElement(g, {
                key: t,
                delay: e,
                color: i
            })
        }
        )))
    }
    ))
      , h = (0,
    s.keyframes)(f())
      , g = function(e) {
        var t = e.delay
          , n = e.color;
        return c().createElement(u.Z, {
            __css: {
                backgroundColor: n,
                height: "100%",
                width: "3px",
                animation: "".concat(h, " 1.2s infinite ease-in-out"),
                animationDelay: t
            }
        })
    };
    v.displayName = "Spinner";
    const b = v
}

,
"4FAR": (e,t,r)=>{
    "use strict";
    r.d(t, {
        R: ()=>o,
        _: ()=>i
    });
    var n = r("tVb+")
      , o = {
        sell: n.Q6[400],
        textSell: n.Q6[450],
        sellHover: n.Q6[300],
        depthSellBg: n.Q6[10],
        buy: n.ek[400],
        textBuy: n.ek[500],
        buyHover: n.ek[300],
        depthBuyBg: n.ek[10],
        line: n.MA[50],
        outlineHover: n.er[50],
        primary: n.er[100],
        primaryHover: n.er[200],
        error: n.Q6[450],
        errorBg: n.Q6[10],
        success: n.ek[400],
        successBg: n.ek[10],
        disable: n.MA[50],
        iconNormal: n.MA[250],
        textWhite: n.MA[0],
        textGray: n.MA[50],
        textBlack: n.MA[1e3],
        textPrimary: n.MA[800],
        textSecondary: n.MA[600],
        textThird: n.MA[400],
        textDisabled: n.MA[200],
        textBrand: n.er[300],
        textToast: n.er[500],
        bg1: n.MA[0],
        bg2: n.MA[5],
        bg3: n.MA[10],
        bg4: n.MA[500],
        bg6: n.MA[0],
        bg7: n.MA[5],
        popupBg: n.MA[0],
        badgeBg: n.er[10],
        gradientBrand: n.FL.primary,
        gradientPrimary: n.FL.light
    }
      , i = {
        sell: n.Q6[400],
        textSell: n.Q6[400],
        sellHover: n.Q6[300],
        depthSellBg: n.Q6[800],
        buy: n.ek[400],
        textBuy: n.ek[400],
        buyHover: n.ek[300],
        depthBuyBg: n.ek[800],
        line: n.MA[700],
        outlineHover: n.er[600],
        primary: n.er[100],
        primaryHover: n.er[200],
        error: n.Q6[400],
        errorBg: n.Q6[800],
        success: n.ek[400],
        successBg: n.ek[800],
        disable: n.MA[600],
        iconNormal: n.MA[300],
        textWhite: n.MA[0],
        textGray: n.MA[50],
        textBlack: n.MA[1e3],
        textPrimary: n.MA[50],
        textSecondary: n.MA[200],
        textThird: n.MA[300],
        textDisabled: n.MA[500],
        textBrand: n.er[200],
        textToast: n.er[400],
        bg1: n.MA[900],
        bg2: n.MA[1e3],
        bg3: n.MA[700],
        bg4: n.MA[500],
        bg6: n.MA[850],
        bg7: n.MA[950],
        popupBg: n.MA[800],
        badgeBg: n.er[700],
        gradientBrand: n.FL.primary,
        gradientPrimary: n.FL.dark
    }
},

,
"tVb+": (e,t,r)=>{
    "use strict";
    r.d(t, {
        FL: ()=>s,
        MA: ()=>n,
        Q6: ()=>a,
        ek: ()=>i,
        er: ()=>o
    });
    var n = {
        0: "#FFFFFF",
        5: "#FAFAFA",
        10: "#F5F5F5",
        50: "#EAECEF",
        100: "#D8DCE1",
        200: "#B7BDC6",
        250: "#929AA5",
        300: "#848E9C",
        400: "#707A8A",
        500: "#5E6673",
        600: "#474D57",
        700: "#2B3139",
        800: "#1E2329",
        850: "#20262D",
        900: "#181A20",
        950: "#191A1F",
        1e3: "#0B0E11"
    }
      , o = {
        5: "#FFFDE6",
        10: "#FEF6D8",
        50: "#FFEF87",
        100: "#FCD535",
        200: "#F0B90B",
        300: "#C99400",
        400: "#A37200",
        500: "#8D5F02",
        600: "#6A4403",
        700: "#3C2601",
        800: "#281A00",
        900: "#181301",
        1e3: "#0C0900"
    }
      , i = {
        5: "#F2FFF7",
        10: "#E6FFF1",
        50: "#B5FFD9",
        100: "#85F2BE",
        200: "#5AE6A7",
        300: "#32D993",
        400: "#0ECB81",
        500: "#03A66D",
        600: "#008057",
        700: "#005940",
        800: "#102821",
        900: "#091F19",
        1e3: "#00110B"
    }
      , a = {
        5: "#FEF6F7",
        10: "#FEF1F2",
        50: "#FDDDDE",
        100: "#FFC2C4",
        200: "#FF99A0",
        300: "#FF707E",
        400: "#F6465D",
        450: "#E33B54",
        500: "#CF304A",
        600: "#A81E3A",
        700: "#82112B",
        800: "#35141D",
        900: "#2C1018",
        1e3: "#1F0A10"
    }
      , s = {
        primary: "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)",
        dark: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
        light: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
    }
}
,


var Tn = n("4FAR")
, An = n("oBAM")
, In = n("ulLh");
n("D1Xs");
function Bn() {
  return "dark" === function(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + e + "=([^;]*)"));
      return t ? t[1] : null
  }("theme") ? "dark" : "light"
}
const Fn = function(e) {
  var t = e.config
    , n = (0,
  T.Z)(e, ["config"])
    , r = t || {}
    , a = r.prefixCls
    , i = r.theme
    , o = "light" === (void 0 === i ? Bn() : i)
    , c = o ? Tn.R : Tn._
    , s = o ? An.X : An.k;
  return g().createElement(In.Z, {
      scope: !0,
      mode: o ? "light" : "dark",
      prefixCls: a,
      iconConfig: {
          path: "https://www.binance.com/bapi/fe/micro/static/icon"
      },
      themeColors: c,
      themeExtraColors: s
  }, n.children)
};










Ciiy: (e,i,t)=>{
    t.r(i),
    t.d(i, {
        default: ()=>X
    });
    var o = t("BK7R")
      , n = t("jg1C")
      , a = t("DTvD")
      , c = t("S9o+")
      , r = t("HIvj")
      , l = t("LCuF")
      , _ = t("aVXY")
      , m = t("6+bd")
      , g = t("oFUK")  // CurrencyExchangeInput
      , h = t("Jd/b") // useExchangeCurrency
      , k = t("wRFv")
      , w = t("vWiH")
      , Z = t("qK/R")
      , U = t("BCcu")  
      , A = t("k5o8")
      , D = t("TUzu")
      , R = t("W+qk")
      , T = t("g+2F")
      , O = function(e) {
        var i, t, J = e.InputLineTitle, te = (0,
        a.useRef)(), oe = (0,
        a.useRef)(), ne = (0,
        m.B4)(), ae = ne.isBuy, ce = ne.isCalculator, se = (0,
        Z.Z)(), re = (0,
        c.$)().t, le = (0,
        r.f0)(), ue = le.isLoggedIn, he = (0,
        U.Z)(), ke = he.fiatLoading, we = he.cryptoLoading, Ze = he.fiatList, je = he.cryptoList, Fe = he.selectFiat, Me = he.selectCrypto, Ie = he.amount, Be = he.cacheAmount, Ke = he.baseCoin, Se = he.setSelectFiat, ze = he.setSelectCrypto, Ue = he.setAmount, Ae = he.setBaseCoinFiat, De = he.setBaseCoinCrypto, Re = he.currencyMap, Te = he.buttonLoading, Ne = null === (i = Re.currencies) || void 0 === i || null === (t = i[(null === Fe || void 0 === Fe ? void 0 : Fe.assetCode) || ""]) || void 0 === t ? void 0 : t.symbol, qe = (0,
        _.Z)((0,
        D._)(ae, [ke, we]), 2), Qe = qe[0], We = qe[1], Oe = (0,
        _.Z)((0,
        D._)(ae, [te, oe]), 2), Ee = Oe[0], Pe = Oe[1], Xe = (0,
        _.Z)((0,
        D._)(ae, [+((null === Fe || void 0 === Fe ? void 0 : Fe.size) || 0), +((null === Me || void 0 === Me ? void 0 : Me.size) || 0)]), 2), He = Xe[0], Je = Xe[1], $e = (0,
        _.Z)((0,
        D._)(ae, [Fe, Me]), 2), oi = (0,
        _.Z)((0,
        D._)(ae, [Ze, je]), 2), ci = [re("ocbs-buy-label-spend"), re("ocbs-buy-receive")], si = ci[0], ri = ci[1], li = (0,
        _.Z)((0,
        D._)(ae, [Se, ze]), 2), _i = (0,
        _.Z)((0,
        D._)(ae, [Ke === k.jv.FIAT ? Ie : Be, Ke === k.jv.FIAT ? Be : Ie]), 2), pi = _i[0], vi = _i[1], mi = (0,
        _.Z)(ae ? [!1, !0] : [!1, !1], 2), yi = (0,
        a.useCallback)((function(e) {
            Ae(),
            Ue(e)
        }
        ), [Ue, Ae]), bi = (0,
        a.useCallback)((function(e) {
            De(),
            Ue(e)
        }
        ), [De, Ue]), xi = (0,
        _.Z)((0,
        D._)(ae, [yi, bi]), 2), gi = xi[0], Li = xi[1], Zi = (0,
        R.Z)()
        }
    
        return (0,
                n.jsx)(g.Z, {
                    size: He,
                    loading: Qe,
                    inputRef: Ee,
                    showPrice: Ci,
                    isCrypto: !ae,
                    onClickCoin: function() {
                        (0,
                        w.e1)(w.Ql.webClick, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_click_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_switch_currency"),
                            extraInfo: (0,
                            o.Z)({
                                isFiat: ae
                            }, Gi)
                        }),
                        (0,
                        w.e1)(w.Ql.pageView, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_view_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_switch_currency_popup_view"),
                            extraInfo: (0,
                            o.Z)({
                                isFiat: ae
                            }, Gi)
                        })
                    },
                    onSearchClick: function(e) {
                        (0,
                        w.e1)(w.Ql.webClick, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_click_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_switch_currency_search"),
                            extraInfo: (0,
                            o.Z)({
                                coin_id: e,
                                isFiat: ae
                            }, Gi)
                        })
                    },
                    amount: pi,
                    placeholder: nt,
                    coinList: ni,
                    titleText: (0,
                    n.jsxs)(n.Fragment, {
                        children: [si || (0,
                        n.jsx)(n.Fragment, {}), J || (ae ? ct : (0,
                        n.jsx)(n.Fragment, {}))]
                    }),
                    selectCoin: ei,
                    onChooseCoin: function(e) {
                        (0,
                        w.e1)(w.Ql.webClick, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_click_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_popup_select_currency"),
                            extraInfo: (0,
                            o.Z)({
                                coin_id: e,
                                isFiat: ae
                            }, Gi)
                        });
                        var i = ni.find((function(i) {
                            return i.assetCode === e
                        }
                        ));
                        i && ui(i)
                    },
                    error: !!Ji,
                    errorMessage: Ji,
                    onAmountInput: gi,
                    fiatSymbol: Ne
                }), (0,
                n.jsx)(l.Z, {
                    mt: "8px"
                }), (0,
                n.jsx)(g.Z, {
                    size: Je,
                    inputRef: Pe,
                    loading: We,
                    isCrypto: ae,
                    onClickCoin: function() {
                        (0,
                        w.e1)(w.Ql.webClick, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_click_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_switch_currency"),
                            extraInfo: (0,
                            o.Z)({
                                isFiat: !ae
                            }, Gi)
                        }),
                        (0,
                        w.e1)(w.Ql.pageView, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_view_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_switch_currency_popup_view"),
                            extraInfo: (0,
                            o.Z)({
                                isFiat: !ae
                            }, Gi)
                        })
                    },
                    placeholder: at,
                    selectCoin: ii,
                    showPrice: fi,
                    fiatSymbol: Ne,
                    amount: vi,
                    coinList: ai,
                    titleText: ri,
                    onChooseCoin: function(e) {
                        (0,
                        w.e1)(w.Ql.webClick, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_click_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_popup_select_currency"),
                            extraInfo: (0,
                            o.Z)({
                                coin_id: e,
                                isFiat: !ae
                            }, Gi)
                        });
                        var i = ai.find((function(i) {
                            return i.assetCode === e
                        }
                        ));
                        i && di(i)
                    },
                    onSearchClick: function(e) {
                        (0,
                        w.e1)(w.Ql.webClick, {
                            pageName: "binance_fiat_".concat(Le.toLowerCase(), "_crypto_page"),
                            elementID: "Web_click_".concat(Le.toLowerCase(), "_binance_fiat_").concat(Le.toLowerCase(), "_crypto_page_enter_amount_page_switch_currency_search"),
                            extraInfo: (0,
                            o.Z)({
                                coin_id: e,
                                isFiat: !ae
                            }, Gi)
                        })
                    },
                    onAmountInput: Li,
                    disabled: !(null === ii || void 0 === ii ? void 0 : ii.quotation),
                    error: !!$i,
                    errorMessage: $i
                }),
    
            
}
}







BCcu: (e,t,n)=>{
    "use strict";
    n.d(t, {
        Z: ()=>s
    });
    var r = n("DTvD")
      , a = n("GLJ6")
      , i = n("Sc5v")
      , o = n("wRFv");
    const s = (0,
    i.NY)((function() {
        var e = (0,
        r.useState)(0)
          , t = e[0]
          , n = e[1]
          , i = (0,
        r.useState)(!0)
          , s = i[0]
          , c = i[1]
          , u = (0,
        r.useState)(!1)
          , l = u[0]
          , d = u[1]
          , f = (0,
        r.useState)(!0)
          , p = f[0]
          , v = f[1]
          , g = (0,
        r.useState)(!1)
          , w = g[0]
          , h = g[1]
          , m = (0,
        r.useState)({
            assetCode: "",
            assetName: "",
            size: o.vR,
            logoUrl: ""
        })
          , _ = m[0]
          , b = m[1]
          , y = (0,
        r.useState)()
          , x = y[0]
          , k = y[1]
          , C = (0,
        r.useState)("")
          , E = C[0]
          , P = C[1]
          , Z = (0,
        r.useState)("")
          , A = Z[0]
          , S = Z[1]
          , T = (0,
        r.useState)("")
          , R = T[0]
          , j = T[1]
          , I = (0,
        r.useState)([])
          , D = I[0]
          , z = I[1]
          , L = (0,
        r.useState)([])
          , O = L[0]
          , M = L[1]
          , $ = (0,
        r.useState)(!1)
          , N = $[0]
          , K = $[1]
          , F = (0,
        r.useState)({})
          , B = F[0]
          , H = F[1]
          , U = (0,
        r.useState)({
            currencies: {},
            loading: !0
        })
          , W = U[0]
          , Y = U[1]
          , V = (0,
        r.useState)()
          , Q = V[0]
          , G = V[1]
          , q = (0,
        r.useState)("")
          , J = q[0]
          , X = q[1];
        return (0,
        r.useEffect)((function() {
            a.ZP.send({
                t: "flow",
                ts: "step change",
                suc: "true"
            })
        }
        ), [t]),
        {
            step: t,
            setStep: n,
            fiatLoading: s,
            setFiatLoading: c,
            cryptoLoading: p,
            setCryptoLoading: v,
            selectFiat: _,
            setSelectFiat: b,
            selectCrypto: x,
            setSelectCrypto: k,
            baseCoin: E,
            setBaseCoin: P,
            setBaseCoinFiat: (0,
            r.useCallback)((function() {
                return P(o.jv.FIAT)
            }
            ), []),
            setBaseCoinCrypto: (0,
            r.useCallback)((function() {
                return P(o.jv.CRYPTO)
            }
            ), []),
            amount: A,
            setAmount: S,
            cacheAmount: R,
            setCacheAmount: j,
            cryptoList: D,
            setCryptoList: z,
            fiatList: O,
            setFiatList: M,
            openRecurring: N,
            setOpenRecurring: K,
            hotCryptos: B,
            setHotCryptos: H,
            currencyMap: W,
            setCurrencyMap: Y,
            buttonLoading: l,
            setButtonLoading: d,
            bncLocation: J,
            setBncLocation: X,
            containerLoading: w,
            setContainerLoading: h,
            currentChannel: Q,
            setCurrentChannel: G
        }
    }
    ))
}

Sc5v: (e,t,n)=>{
    "use strict";
    var r = n("M3He");
    t.NY = r.createModel,
    r.createLazyModel,
    n("d9MN").withModel
}


M3He: function(e, t, n) {
    "use strict";
    var r = this && this.__read || function(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, l, i = n.call(e), u = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                u.push(r.value)
        } catch (a) {
            l = {
                error: a
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (l)
                    throw l.error
            }
        }
        return u
    }
      , l = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n("0z+b")
      , u = n("0bsQ")
      , a = l(n("DTvD"))
      , o = n("eoB1");
    function c(e, t) {
        var n = new i.Container(e);
        o.render(a.default.createElement(u.Executor, {
            onUpdate: function(e) {
                n.data = e,
                n.notify()
            },
            hook: function() {
                return e(t)
            }
        }));
        var l = function(e) {
            var t, l = r(a.useState((function() {
                return n ? n.data : void 0
            }
            )), 2), i = l[0], u = l[1], o = a.useRef(e);
            o.current = e;
            var c = a.useRef((null === (t = o.current) || void 0 === t ? void 0 : t.call(o, n.data)) || []);
            return a.useEffect((function() {
                if (n)
                    return n.subscribers.add(e),
                    function() {
                        n.subscribers.delete(e)
                    }
                    ;
                function e(e) {
                    if (o.current) {
                        var t = c.current
                          , n = o.current(e);
                        (function(e, t) {
                            if (e.length !== t.length)
                                return !0;
                            for (var n in t)
                                if (e[n] !== t[n])
                                    return !0;
                            return !1
                        }
                        )(t, n) && u(e),
                        c.current = n
                    } else
                        u(e)
                }
            }
            ), [n]),
            i
        };
        return Object.defineProperty(l, "data", {
            get: function() {
                return n.data
            }
        }),
        l
    }
    t.createModel = c,
    t.createLazyModel = function(e, t) {
        var n, r = function(r) {
            return n || (n = c(e, t)),
            n(r)
        };
        return Object.defineProperty(r, "data", {
            get: function() {
                return null === n || void 0 === n ? void 0 : n.data
            }
        }),
        r
    }
},

eoB1: function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = r(n("9cDu"))
      , i = {
        now: Date.now,
        getRootHostContext: function() {
            return {}
        },
        prepareForCommit: function() {},
        resetAfterCommit: function() {},
        getChildHostContext: function() {
            return {}
        },
        shouldSetTextContent: function() {
            return !0
        },
        createInstance: function() {},
        createTextInstance: function() {},
        appendInitialChild: function() {},
        appendChild: function() {},
        finalizeInitialChildren: function() {},
        supportsMutation: !0,
        appendChildToContainer: function() {},
        prepareUpdate: function() {
            return !0
        },
        commitUpdate: function() {},
        commitTextUpdate: function() {},
        removeChild: function() {}
    }
      , u = l.default(i);
    t.render = function(e) {
        var t = u.createContainer(null, !1, !1);
        return u.updateContainer(e, t, null, null)
    }
},