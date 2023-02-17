Ul.displayName = "EmailAndPhonePopup";
const Ql = i().memo(Ul);
var Dl = n("nn0X") //done
, Zl = n("7rGg") //done
, Nl = n("isBrowser") // done
, Gl = n("apiCalls") // done
, ql = n("NotFoundDataLight") // done
, Kl = n("NotFoundDataDark")
, Jl = n("Nyzd")
, Xl = n("NsjG")
, Wl = i().memo((function() {
    var e = (0,
    Gr.$)().t
      , t = (0,
    Dl.Fg)().isLight;
    return i().createElement(Br.Z, {
        textAlign: "center",
        paddingTop: "60px",
        width: "100%",
        margin: "auto"
    }, t ? i().createElement(ql.Z, {
        size: 96
    }) : i().createElement(Kl.Z, {
        size: 96
    }), i().createElement(Kr.Z, {
        variant: "body2",
        color: "t.third",
        my: "md"
    }, e("noRecordsFound", {
        defaultValue: "No records found"
    })))
}
)),
Yl = (0,
    l.memo)((function(e) {
        var t = e.mobileCode
          , n = e.countryWhitelist
          , a = (e.countryList,
        e.label)
          , o = e.help
          , c = e.disabled
          , s = e.optional
          , u = e.setLastMobileCode
          , d = e.pageName
          , p = e.onFocusProp
          , m = e.onChangeProp
          , h = e.initialValue
          , f = e.btype
          , v = void 0 === f ? "normal" : f
          , g = (0,
        r.__rest)(e, ["mobileCode", "countryWhitelist", "countryList", "label", "help", "disabled", "optional", "setLastMobileCode", "pageName", "onFocusProp", "onChangeProp", "initialValue", "btype"])
          , E = (0,
        Gr.$)()
          , _ = E.t
          , z = E.i18n.language
          , y = yr(g)
          , C = y[0]
          , A = C.name
          , b = C.value
          , M = y[1]
          , w = M.touched
          , x = M.error
          , B = y[2]
          , S = B.setValue
          , k = B.setTouched
          , I = (0,
        l.useRef)()
          , F = (0,
        l.useRef)(!1)
          , O = i().useState(!1)
          , R = O[0]
          , L = O[1]
          , H = "login" !== v ? Fl : Ql;
        i().useEffect((function() {
            h && S(h)
        }
        ), [h]);
        var P = i().useCallback((function() {
            p && p(),
            "mobile" === A && d && (0,
            Rr.ZP)("webFocus", {
                pageName: d,
                elementID: d.replace("_web", "") + "_phone_focus"
            }),
            I.current && I.current.removeAttribute("readOnly"),
            L(!0)
        }
        ), [I])
          , T = i().useCallback((function() {
            I.current && I.current.removeAttribute("readOnly")
        }
        ), [I])
          , V = i().useCallback((function(e) {
            F.current ? F.current = !1 : (g.onBlur && g.onBlur(b),
            e && e.target.value ? k && k(!0) : k && k(!1),
            L(!1))
        }
        ), [g, k, b])
          , j = i().useMemo((function() {
            var e = (0,
            Jl.ur)();
            return n.map((function(t) {
                return {
                    code: t.code,
                    name: t[e] || t.en,
                    callingCode: t.mobileCode,
                    flag: t.countryImageUrl
                }
            }
            ))
        }
        ), [n, z])
          , U = i().useCallback((function(e) {
            m && m(e),
            "mobile" === A && d && (0,
            Rr.ZP)("onChange", {
                pageName: d,
                elementID: d.replace("_web", "") + "_phone_input",
                extraInfo: {
                    length: e.nationalNumber.length
                }
            }),
            !e.nationalNumber && k(!1),
            S(e),
            e.code && u(e.code),
            g.onValueChange && g.onValueChange(e, {
                setTouched: k,
                setValue: S
            })
        }
        ), [k, S, g.onValueChange, m])
          , Q = (0,
        l.useMemo)((function() {
            return {
                fontSize: "2",
                "& + label": {
                    fontSize: "1"
                }
            }
        }
        ), [])
          , D = (0,
        l.useMemo)((function() {
            return {
                width: "100%",
                mr: 0,
                fontSize: "14px",
                color: "t.third",
                lineHeight: "32px"
            }
        }
        ), [])
          , Z = i().useCallback((function(e) {
            k(!1),
            S((0,
            r.__assign)((0,
            r.__assign)({}, b), {
                nationalNumber: ""
            })),
            m && m((0,
            r.__assign)((0,
            r.__assign)({}, b), {
                nationalNumber: ""
            })),
            F.current = !0,
            e.preventDefault && e.preventDefault()
        }
        ), [S])
          , N = (0,
        l.useMemo)((function() {
            return !c && (null === b || void 0 === b ? void 0 : b.nationalNumber) && R
        }
        ), [c, b, R])
          , G = (0,
        l.useMemo)((function() {
            var e;
            return i().createElement(H, (0,
            r.__assign)({
                modalTitle: _("select-area-code", "Select area code"),
                selectSearchPlaceholder: _("search", "Search"),
                readOnly: !0,
                type: "tel",
                sx: Q,
                autocomplete: "email",
                empty: i().createElement(Wl, null)
            }, g, {
                countryCode: (null === b || void 0 === b ? void 0 : b.code) || t,
                value: b ? null === (e = b.nationalNumber) || void 0 === e ? void 0 : e.trim() : "",
                error: x && w,
                onValueChange: U,
                countrys: j,
                ref: I,
                variant: sl.Q6 ? "filled" : "outline",
                onBlur: V,
                onFocus: P,
                biz: "bids",
                onTouchStart: T,
                suffix: i().createElement(Or.Z, {
                    alignItems: "center"
                }, i().createElement(Ur, {
                    sx: {
                        mr: "xs"
                    },
                    show: N,
                    onClick: Z
                }))
            }))
        }
        ), [g, b, x, w, t, U, j, I, V, P, T, c, R]);
        return i().createElement(Lr.Z, {
            optional: s,
            help: x && w ? x : o,
            status: x && w ? "error" : "default",
            label: a,
            labelProps: {
                sx: D
            }
        }, G)
    }
    ));

    const $l = i().memo((function(e) {
        var t = e.isStoreCode
          , n = e.countryList
          , a = e.label
          , o = e.help
          , c = void 0 === o ? "" : o
          , s = e.disabled
          , u = e.optional
          , d = (0,
        r.__rest)(e, ["isStoreCode", "countryList", "label", "help", "disabled", "optional"])
          , p = function() {
            var e = (0,
            Zl.Z)((function() {
                return (0,
                r.__awaiter)(void 0, void 0, void 0, (function() {
                    return (0,
                    r.__generator)(this, (function(e) {
                        return [2, (0,
                        Nl.GJ)()]
                    }
                    ))
                }
                ))
            }
            ), []);
            return {
                countryShortName: e.value,
                loading: e.loading
            }
        }().countryShortName
          , m = void 0 === p ? "--" : p
          , h = function(e) {
            var t = (0,
            l.useState)([{
                code: "CN",
                en: "China(\u4e2d\u56fd)",
                mobileCode: "86"
            }])
              , n = t[0]
              , i = t[1];
            return (0,
            l.useEffect)((function() {
                !e && function() {
                    (0,
                    r.__awaiter)(this, void 0, void 0, (function() {
                        var e, t, n;
                        return (0,
                        r.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, (0,
                                Gl.fv)()];
                            case 1:
                                return e = r.sent(),
                                t = e.success,
                                n = e.data,
                                t && i(n),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }()
            }
            ), []),
            (0,
            l.useMemo)((function() {
                return e || n
            }
            ), [e, n])
        }(n)
          , f = (0,
        l.useRef)("")
          , v = (0,
        l.useMemo)((function() {
            return t && Ir.C ? (f.current || (f.current = Xl.tO.getItem("lastMobileCode", "", !0) || ""),
            f.current || "AT" === m ? "--" : m) : "AT" === m ? "--" : m
        }
        ), [m, h, t])
          , g = (0,
        l.useCallback)((function(e) {
            t && (Ir.C || sl.Q6) && e && f.current !== e && (f.current = e,
            Xl.tO.setItem("lastMobileCode", e, !0))
        }
        ), [t]);
        return i().createElement(Yl, (0,
        r.__assign)({
            mobileCode: v,
            countryWhitelist: h,
            countryList: n,
            label: a,
            help: c,
            disabled: s,
            optional: u,
            setLastMobileCode: g
        }, d))
    }
    ));