jn = t(65146)
, Un = t(56442)
, Wn = t.n(Un)
, Bn = t(42953)
, qn = t.n(Bn)
, Gn = t(79705)
, Jn = t.n(Gn)
, Xn = t(33639)
, Kn = t(44564)
, Yn = t(8939)
, Qn = t(67675)
, $n = t(50799)
, et = t(71443)
, nt = t(8372)
, tt = t(523)
, rt = (0,
c.memo)((function(e) {
  var n = e.abTestData
    , t = void 0 === n ? {} : n
    , r = e.current
    , i = e.onReload
    , a = e.customProps
    , o = e.className
    , l = e.needGrayscale
    , u = e.errorRefresh
    , s = e.isSpider
    , d = e.tccConfig
    , f = e.isMainland
    , v = (0,
  c.useState)(r)
    , p = (0,
  D.Z)(v, 2)
    , m = p[0]
    , h = p[1]
    , g = (0,
  V.s0)()
    , b = ke.Context
    , y = (0,
  c.useContext)(b) || {}
    , w = y.userInfo
    , _ = y.dispatch;
  (0,
  c.useEffect)((function() {
      h(r)
  }
  ), [r]);
  var x = (0,
  c.useCallback)((function(e, n) {
      if ("discover" === e)
          switch (n) {
          case "enter":
              tt.qy.enter();
              break;
          case "leave":
              tt.qy.leave();
              break;
          case "click":
              tt.qy.click()
          }
  }
  ), [t]);
  return c.createElement(et.o, {    
      isSpider: s,
      userInfo: w,
      abTestData: t,
      activeClickable: !0,
      onChange: function(e, n) {
          var a, o;
          e !== $n.NavigationMenuItemVal.AsianGame && e === r ? (n.preventDefault(),
          fe.emit(fe.EVENT.refreshPage),
          null == i || null === (o = i.current) || void 0 === o || o.call(i),
          window.scrollTo(0, 0)) : $n.CHANNEL_REF[e].route && (n.preventDefault(),
          _ && _({
              type: "updateUserInfo"
          }),
          g({
              pathname: $n.CHANNEL_REF[e].route,
              search: (0,
              ae.stringify)((0,
              En.Z)((0,
              En.Z)({}, (0,
              nt.U)()), $n.CHANNEL_REF[e].params || {}))
          }),
          null == u || u($n.CHANNEL_REF[e].href));
          A()(a = [ue.m_.Cache, ue.m_.CacheToNextVideo]).call(a, null == t ? void 0 : t.recommendCache) && $n.NavigationMenuItemVal.Self === e && (_ && _({
              type: "updateUserInfo"
          }),
          n.preventDefault(),
          g({
              pathname: $n.CHANNEL_REF[e].href,
              search: (0,
              ae.stringify)((0,
              En.Z)((0,
              En.Z)({}, (0,
              nt.U)()), $n.CHANNEL_REF[e].params || {}))
          }),
          null == u || u($n.CHANNEL_REF[e].href)),
          h(e)
      },
      current: m,
      customProps: a,
      className: o,
      needGrayscale: l,
      tccConfig: d,
      isMainland: f,
      onLinkAction: x
  })
}
))





71443: function(e, n, t) {
    t.d(n, {
        o: function() {
            return er
        }
    });
    var r, o = t(65902), i = t(64408), a = t(30906), l = t(30673), c = t(32781), s = t(65146), u = t(88021), d = t.n(u), f = t(5594), m = t.n(f), v = t(94090), p = t.n(v), h = t(34346), g = t.n(h), w = t(88743), y = t.n(w), _ = t(52249), b = t.n(_), E = t(11227), k = t.n(E), C = t(26447), N = t.n(C), T = t(90457), x = t.n(T), S = t(53361), L = t.n(S), I = t(8369), Z = t.n(I), A = t(7943), P = t.n(A), D = t(79705), M = t.n(D), B = t(53864), O = t(21518), R = t(76335), V = t(56920), F = t(8939), W = t(50799), U = t(71116), H = t(72603), j = t(15909), G = t(28712), K = t(16016), q = t(5611), Q = t(32711), z = t(63320), Y = t(94556), J = "n9PPTk22", X = "N_HNXA04", $ = "gtbObvwD", ee = "JVPLvXh3", ne = "JsnJzo_w", te = "eSxOflMd", re = "HQwsRJFy", oe = "RzBzzWsU", ie = "Bo1o4KGi", ae = "aLqVEhhA", le = "XFvPYpcw", ce = "iViO9oMI", se = "BmcsyffA", ue = "kQ2JnIMK", de = "S9ST96Zy", fe = "YrFhKzRI", me = "pi5uYseT", ve = "NPFHI9Rb", pe = "gaIgCiUy", he = t(67321), ge = t(67330), we = t(92281), ye = t(92371), _e = [{
        url: "https://www.douyin.com/friend_links",
        title: "\u53cb\u60c5\u94fe\u63a5"
    }, {
        url: "https://www.douyin.com/htmlmap/hotauthor_0_1",
        title: "\u7ad9\u70b9\u5730\u56fe"
    }], be = p()(r = [{
        url: "https://www.oceanengine.com/resource/douyin",
        title: "\u5e7f\u544a\u6295\u653e"
    }, {
        url: "https://www.douyin.com/agreements/?id=6773906068725565448",
        title: "\u7528\u6237\u670d\u52a1\u534f\u8bae",
        needExtraParams: !0
    }, {
        url: "https://www.douyin.com/agreements/?id=6773901168964798477",
        title: "\u9690\u79c1\u653f\u7b56",
        needExtraParams: !0
    }, {
        url: "https://www.douyin.com/recovery_account/",
        title: "\u8d26\u53f7\u627e\u56de"
    }, {
        url: "https://www.douyin.com/aboutus/#contact",
        title: "\u8054\u7cfb\u6211\u4eec"
    }, {
        url: "https://www.douyin.com/aboutus/#join",
        title: "\u52a0\u5165\u6211\u4eec"
    }, {
        url: "https://www.douyin.com/business_license/",
        title: "\u8425\u4e1a\u6267\u7167"
    }]).call(r, _e, [{
        url: "https://www.douyin.com/downloadpage",
        title: "\u4e0b\u8f7d\u6296\u97f3"
    }, {
        url: "https://mix.jinritemai.com/falcon/mix_page/index.html?__live_platform__=webcast&allowMediaAutoPlay=1&enter_from=others&hide_nav_bar=1&hide_system_video_poster=1&id=7117178766052294949&origin_type=others&should_full_screen=1&trans_status_bar=1&ttwebview_extension_mixrender=1&hide_nav_bar=1&should_full_screen=1&trans_status_bar=1&web_bg_color=#ffffffff",
        title: "\u6296\u97f3\u7535\u5546"
    }]), Ee = [[{
        title: "".concat((new Date).getFullYear(), " \xa9 \u6296\u97f3")
    }, {
        url: "https://beian.miit.gov.cn/",
        title: "\u4eacICP\u590716016397\u53f7-3"
    }, {
        icon: "//p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/emblem.png",
        url: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002046",
        title: "\u4eac\u516c\u7f51\u5b89\u5907 11000002002046\u53f7"
    }, {
        url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbrpzps/douyin_license_online/radio_tv_license.jpg",
        title: "\u5e7f\u64ad\u7535\u89c6\u8282\u76ee\u5236\u4f5c\u7ecf\u8425\u8bb8\u53ef\u8bc1"
    }, {
        url: "https://p3-pc-weboff.byteimg.com/tos-cn-i-9r5gewecjs/zengzhixuke.jpeg",
        title: "\u4eacB2-20170846"
    }, {
        url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbrpzps/douyin_license_online/internet_culture_management.jpg",
        title: "\u7f51\u7edc\u6587\u5316\u8bb8\u53ef\u8bc1-\u4eac\u7f51\u6587-\uff082022\uff090938-030\u53f7"
    }, {
        title: "\u4e92\u8054\u7f51\u5b97\u6559\u4fe1\u606f\u670d\u52a1\u8bb8\u53ef\u8bc1 \u4eac\uff082022\uff090000057"
    }, {
        title: "\u836f\u54c1\u533b\u7597\u5668\u68b0\u7f51\u7edc\u4fe1\u606f\u670d\u52a1\u5907\u6848  \uff08\u4eac\uff09\u7f51\u836f\u68b0\u4fe1\u606f\u5907\uff082023\uff09\u7b2c00318\u53f7"
    }], [{
        url: "https://www.piyao.org.cn/yybgt/index.htm",
        title: "\u7f51\u7edc\u8c23\u8a00\u66dd\u5149\u53f0"
    }, {
        url: "https://www.12377.cn/",
        title: "\u7f51\u4e0a\u6709\u5bb3\u4fe1\u606f\u4e3e\u62a5"
    }, {
        title: "\u8fdd\u6cd5\u548c\u4e0d\u826f\u4fe1\u606f\u4e3e\u62a5 400-140-2108"
    }, {
        title: "\u9752\u5c11\u5e74\u5b88\u62a4\u4e13\u7ebf 400-9922-556"
    }, {
        title: "\u7b97\u6cd5\u63a8\u8350\u4e13\u9879\u4e3e\u62a5 sfjubao@bytedance.com"
    }, {
        title: "\u7f51\u7edc\u5185\u5bb9\u4ece\u4e1a\u4eba\u5458\u8fdd\u6cd5\u8fdd\u89c4\u884c\u4e3a\u4e3e\u62a5 feedback@douyin.com"
    }]], ke = "NRSpjbcb", Ce = "wQmC940F", Ne = "yA0rrc2M", Te = "o1h2uP_i", xe = "YfdKaFoj", Se = "h9hROuDG", Le = "eb9O5iw_", Ie = "XqQpcdUx", Ze = t(13795), Ae = new Ze.hD({
        pageClick: {
            eventName: "page_click",
            params: {
                click_position: "site_map"
            }
        }
    }), Pe = t(77060), De = (0,
    B.memo)((function(e) {
        var n = e.links;
        return B.createElement("div", {
            className: Ne
        }, g()(n).call(n, (function(e, n) {
            var t = e.url;
            return B.createElement("div", {
                key: "link_".concat(n),
                className: xe
            }, e.url ? B.createElement(Pe.a, {
                href: globalThis.xssNamespace.douyin_web.filterUrl(t, null, {
                    logType: "js.href/src",
                    mode: "black",
                    reportOnly: !1
                }),
                onClick: function(n) {
                    if ("\u7ad9\u70b9\u5730\u56fe" === e.title) {
                        var r, o, i, a, l, c, s, u, d, f = t, m = ge.parse(null !== (r = null === (o = window) || void 0 === o || null === (i = o.location) || void 0 === i ? void 0 : i.search) && void 0 !== r ? r : "");
                        m.from = null === (a = window) || void 0 === a || null === (l = a.location) || void 0 === l ? void 0 : l.pathname,
                        null !== (c = window) && void 0 !== c && null !== (s = c.location) && void 0 !== s && k()(u = s.href).call(u, we.LIVE_DOMAIN) && (m.from = "live"),
                        f += "".concat(decodeURIComponent("?".concat(ge.stringify(m)))),
                        null === (d = window) || void 0 === d || d.open(f, "_blank"),
                        Ae.sendLog("pageClick"),
                        n.preventDefault()
                    }
                },
                target: "_blank",
                rel: "noopener noreferrer ".concat((0,
                ye.P)(e.title)),
                isNeedSeoOpt: !(null != e && e.needExtraParams)
            }, e.title) : B.createElement("span", null, e.title))
        }
        )))
    }
    )), Me = (0,
    B.memo)((function(e) {
        var n = e.sublink;
        return B.createElement("div", {
            className: Se
        }, n.url ? B.createElement(Pe.a, {
            href: globalThis.xssNamespace.douyin_web.filterUrl(n.url, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            target: "_blank",
            rel: "noopener noreferrer"
        }, n.icon && B.createElement("img", {
            className: Le,
            src: globalThis.xssNamespace.douyin_web.filterUrl(n.icon, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            alt: "icon"
        }), n.title) : B.createElement("span", null, n.title))
    }
    )), Be = (0,
    B.memo)((function(e) {
        var n = e.sublinksGroup;
        return B.createElement(B.Fragment, null, g()(n).call(n, (function(e, n) {
            return B.createElement(B.Fragment, {
                key: "e_".concat(n)
            }, B.createElement("div", {
                key: "c_".concat(n),
                className: Te
            }, g()(e).call(e, (function(e, n) {
                return B.createElement(Me, {
                    key: "sublink_".concat(n),
                    sublink: e
                })
            }
            ))), B.createElement("div", {
                className: Ie,
                key: "g_".concat(n)
            }))
        }
        )))
    }
    ));
    function Oe(e) {
        var n = e.linkItems
          , t = e.subLinkItems
          , r = e.specTheme
          , o = e.isSpider
          , i = (0,
        B.useMemo)((function() {
            return n || (o ? _e : be)
        }
        ), [n])
          , a = (0,
        B.useMemo)((function() {
            return t || (o ? [] : Ee)
        }
        ), [t]);
        return B.createElement("footer", null, B.createElement("div", {
            className: M()(Ce, (0,
            s.Z)({}, ke, null == r ? void 0 : r.themeFurtherSwitch))
        }, B.createElement(Be, {
            sublinksGroup: a
        }), B.createElement(De, {
            links: i
        })))
    }
    var Re, Ve, Fe = t(18227), We = t(13529), Ue = "h0MeccaR", He = "Fb1750DZ", je = "IxmB8gaR", Ge = "vtuLG4fC", Ke = function(e) {
        var n = e.isSearchTab;
        return B.createElement("div", {
            className: M()(Ue, (0,
            s.Z)({}, Ge, n))
        }, B.createElement("img", {
            src: globalThis.xssNamespace.douyin_web.filterUrl(Fe, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            className: He
        }), B.createElement("img", {
            src: globalThis.xssNamespace.douyin_web.filterUrl(We, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            className: je
        }))
    }, qe = t(60443), Qe = t(92267), ze = t(96431), Ye = "fb6MCJLr", Je = "YFxRCLNZ", Xe = "X3ZcRwMR", $e = "taE6Nr_G", en = "jZNnk6WH", nn = "jq65FbDp", tn = "ufTsXeCz", rn = t(9909), on = t(20712), an = t(44635), ln = function(e) {
        var n = e.portalRef
          , t = e.btnRect
          , r = e.changeType
          , o = e.isSearch
          , i = (0,
        on.u)().cooperationDropdownItems
          , a = (0,
        B.useRef)(null)
          , l = (0,
        B.useMemo)((function() {
            return 39 * i.length + 48
        }
        ), [i])
          , c = (0,
        B.useMemo)((function() {
            return t ? t.bottom > l ? {
                top: "".concat(t.bottom - l, "px")
            } : {
                top: "".concat(t.top, "px")
            } : {
                display: "none"
            }
        }
        ), [t, l]);
        return (0,
        B.useEffect)((function() {
            var e, n = function(e) {
                null == e || e.preventDefault(),
                null == e || e.stopPropagation()
            };
            return null === (e = a.current) || void 0 === e || e.addEventListener("wheel", n),
            function() {
                var e;
                null === (e = a.current) || void 0 === e || e.removeEventListener("wheel", n)
            }
        }
        ), []),
        (0,
        qe.createPortal)(B.createElement("div", {
            ref: a,
            className: M()("coopPanel", (0,
            s.Z)({}, Je, o)),
            style: c,
            onMouseEnter: function() {
                r(!0)
            },
            onMouseLeave: function() {
                r(!1)
            }
        }, null == i ? void 0 : g()(i).call(i, (function(e, n) {
            return B.createElement(Pe.a, {
                key: e.key || n,
                className: tn,
                onClick: e.onClick,
                href: globalThis.xssNamespace.douyin_web.filterUrl(e.url, null, {
                    logType: "js.href/src",
                    mode: "black",
                    reportOnly: !1
                }),
                target: "_blank"
            }, e.text)
        }
        ))), n)
    }, cn = function(e) {
        var n, t = e.tabType, r = e.isSearch, o = (0,
        B.useRef)(null), i = (0,
        B.useState)(), a = (0,
        c.Z)(i, 2), l = a[0], u = a[1], d = (0,
        an.P)({
            delayDisappear: 50
        }), f = d.type, m = d.changeType;
        (0,
        B.useEffect)((function() {
            var e;
            o.current = document.createElement("div"),
            null === (e = document.body) || void 0 === e || e.appendChild(o.current)
        }
        ), []);
        return B.createElement("div", {
            onMouseEnter: function(e) {
                var n, t;
                if (!f) {
                    Qe.i.sendLog("cooperatePanelShow", {
                        enter_from: (0,
                        H.mo)()
                    });
                    var r = null == e || null === (n = e.target) || void 0 === n || null === (t = n.getBoundingClientRect) || void 0 === t ? void 0 : t.call(n);
                    u(r),
                    m(!0)
                }
            },
            onMouseLeave: function() {
                m(!1)
            }
        }, B.createElement("div", {
            className: M()(Xe, (n = {},
            (0,
            s.Z)(n, nn, t),
            (0,
            s.Z)(n, en, f),
            (0,
            s.Z)(n, Je, r),
            n)),
            onClick: function() {
                window.open("https://www.douyin.com/home", "_blank", "noopener")
            }
        }, t && B.createElement("div", {
            className: Ye
        }), B.createElement("div", {
            className: $e
        }, B.createElement("span", null, "\u4e1a\u52a1\u5408\u4f5c"), B.createElement(rn.Z, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(ze.Z, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            width: 12,
            height: 12,
            viewBox: "0 0 12 12"
        }))), f && B.createElement(ln, {
            btnRect: l,
            portalRef: o.current,
            changeType: m,
            isSearch: r
        }))
    }, sn = t(8e3), un = t.n(sn), dn = t(12083), fn = "HLKZ9U4X", mn = "r62Yt4yT", vn = "qoKzjoSV", pn = "L4Q5Pfp6", hn = new Ze.hD({
        navEnterDuration: {
            eventName: "nav_enter_duration",
            params: {
                duration: 0,
                tab_name: ""
            }
        }
    }), gn = t(21155), wn = t.n(gn), yn = t(59676), _n = t(93662), bn = t.n(_n), En = t(91287), kn = t(5277), Cn = {
        icon: "MOB6aWRv",
        hidden: "d_U4I_82",
        iconDark: "wgiDTgSZ",
        iconLight: "dki5MdEh",
        tab: "fuy_wmct",
        textWrap: "Hn1a7lpc",
        yellowPoint: "BR0rQm90",
        redPoint: "Oxwxk5t9",
        newRedPoint: "RDH0PrmQ",
        liveRedPoint: "d96_zlEE",
        liveNewIcon: "OkRi6llv",
        numberYellowPoint: "wnWWZubH",
        moreCount: "BxYyDMoK",
        numberRedPoint: "vXRPN9Nt",
        numberYellowPointPosText2: "xkdCyo8O",
        numberYellowPointPosText3: "PZM366wi",
        digitsNumberYellowPoint: "HVgmsdv9",
        digitsNumberRedPoint: "tJShiVlw",
        text: "xPz2YtoZ",
        activeClickable: "fFvA7aLB",
        itemLink: "qShuAbdm",
        active: "LXX79le5",
        borderNone: "wfyh1Wz6",
        searchTabWrap: "RWHJXAjL",
        planarIcon: "z_9g2ART",
        discover: "QsH66ENx",
        recommend: "vy2P7q_c",
        follow: "SZMIoGf2",
        friend: "w9t7wiDT",
        user_self: "VE5qN8zp",
        svgIcon: "GZrDRcCX",
        linearIcon: "JtwPigHZ"
    };
    function Nn() {
        return Nn = Object.assign ? Object.assign.bind() : function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }
        ,
        Nn.apply(this, arguments)
    }
    var Tn = function(e) {
        return B.createElement("svg", Nn({
            width: 22,
            height: 9,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), Re || (Re = B.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.483 1.137C4.923.379 4.113 0 3.055 0 2.187 0 1.461.284.876.853.292 1.413 0 2.128 0 2.996c0 .853.249 1.543.746 2.072.521.561 1.208.841 2.06.841.435 0 .822-.083 1.161-.248a2.32 2.32 0 00.912-.782h.06v.107c0 .797-.167 1.464-.498 2-.348.57-.81.853-1.386.853-.829 0-1.33-.402-1.504-1.207H.166C.379 8.21 1.338 9 3.043 9c1.003 0 1.8-.438 2.393-1.314.584-.869.876-2.01.876-3.423 0-1.326-.276-2.368-.83-3.126zm-3.612.556c.316-.347.726-.52 1.232-.52.497 0 .904.157 1.22.473.307.316.461.75.461 1.303 0 .56-.146 1.002-.438 1.326-.3.324-.714.486-1.243.486-.521 0-.932-.162-1.232-.486-.308-.316-.462-.742-.462-1.279 0-.529.154-.963.462-1.303zM12.754 1.137C12.194.379 11.384 0 10.326 0c-.868 0-1.594.284-2.179.853-.584.56-.876 1.275-.876 2.143 0 .853.249 1.543.746 2.072.521.561 1.208.841 2.06.841.435 0 .822-.083 1.161-.248a2.32 2.32 0 00.912-.782h.06v.107c0 .797-.167 1.464-.498 2-.348.57-.81.853-1.386.853-.829 0-1.33-.402-1.504-1.207H7.437C7.65 8.21 8.609 9 10.315 9c1.002 0 1.8-.438 2.392-1.314.584-.869.876-2.01.876-3.423 0-1.326-.276-2.368-.83-3.126zm-3.612.556c.316-.347.726-.52 1.232-.52.497 0 .904.157 1.22.473.307.316.461.75.461 1.303 0 .56-.146 1.002-.438 1.326-.3.324-.714.486-1.243.486-.521 0-.932-.162-1.232-.486-.308-.316-.462-.742-.462-1.279 0-.529.154-.963.462-1.303z",
            fill: "#fff"
        })), Ve || (Ve = B.createElement("path", {
            d: "M19.181 1.654h-1.137V4.14h-2.498v1.15h2.498v2.486h1.137V5.289h2.487V4.14H19.18V1.654z",
            fill: "#fff"
        })))
    }
      , xn = t(67624)
      , Sn = t.n(xn)
      , Ln = t(92762)
      , In = t(34080)
      , Zn = "MoQWZoTN"
      , An = "UqusYa12"
      , Pn = "kVDE1onh"
      , Dn = "AJbcSJri"
      , Mn = "LQOiJJXR"
      , Bn = "T3FP2rdt"
      , On = "CyFHfLRN"
      , Rn = "I6O_p7Gl"
      , Vn = "Rlk_prZy"
      , Fn = "e0OEnO1u"
      , Wn = "_XYQB999"
      , Un = function(e) {
        var n, t, r = e.value, o = e.spa, i = e.href, a = e.label, l = e.target, c = e.handleTabClick, u = e.className, d = e.showYellowPoint, f = void 0 !== d && d, m = e.showDotRedPoint, v = void 0 !== m && m, p = e.showLiveRedPoint, h = void 0 !== p && p, g = e.showNumberYellowPoint, w = void 0 !== g && g, y = e.showLiveRedCnPoint, _ = void 0 !== y && y, b = e.numberYellowPointCount, E = void 0 === b ? 0 : b, k = e.numberYellowClassName, C = e.showNumberRedPoint, N = e.numberRedPointCount, T = e.active, x = e.renderLabel, S = new (Sn())([]);
        return B.createElement("div", {
            className: M()(Zn, u)
        }, B.createElement(Pe.a, {
            className: Fn,
            spa: o,
            href: globalThis.xssNamespace.douyin_web.filterUrl(i, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            target: l,
            onClick: c,
            title: a
        }, B.createElement("div", {
            className: M()(Dn, S.get(r))
        }, f && B.createElement("div", {
            className: An
        }), v && B.createElement("div", {
            className: Pn
        }), h && B.createElement("div", {
            className: Mn
        }, B.createElement(rn.Z, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(Ln.Z, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            viewBox: "0 0 19 7",
            height: 7,
            width: 19
        })), w && B.createElement("div", {
            className: M()(k, (n = {},
            (0,
            s.Z)(n, Rn, E < 10),
            (0,
            s.Z)(n, On, E >= 10),
            n))
        }, E > 99 ? "99+" : E), C && B.createElement("div", {
            className: M()(k, (t = {},
            (0,
            s.Z)(t, Vn, N < 10),
            (0,
            s.Z)(t, Wn, N >= 10),
            t))
        }, N > 99 ? "99+" : N), _ && B.createElement("div", {
            className: Bn
        }, B.createElement(rn.Z, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(In.Z, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            viewBox: "0 0 44 20",
            height: 20,
            width: 44
        })), null == x ? void 0 : x({
            active: T
        }))))
    }
      , Hn = t(58144)
      , jn = t.n(Hn)
      , Gn = function(e) {
        var n = e.pointInfoList
          , t = e.typeList
          , r = e.active
          , o = g()(t).call(t, (function(e) {
            return jn()(n).call(n, (function(n) {
                return n.type === e
            }
            ))
        }
        ));
        return g()(o).call(o, (function(e) {
            return function(e) {
                var n = e.active
                  , t = e.point;
                return {
                    state: !n && Boolean((null == t ? void 0 : t.hasNotice) && (null == t ? void 0 : t.count) > 0),
                    count: (null == t ? void 0 : t.count) || 0
                }
            }({
                active: r,
                point: e
            })
        }
        ))
    }
      , Kn = function(e) {
        var n = e.pointInfoList
          , t = e.typeList
          , r = e.active
          , o = g()(t).call(t, (function(e) {
            return jn()(n).call(n, (function(n) {
                return n.type === e
            }
            ))
        }
        ));
        return g()(o).call(o, (function(e) {
            return function(e) {
                var n = e.active
                  , t = e.point;
                return !n && Boolean(null == t ? void 0 : t.hasNotice)
            }({
                active: r,
                point: e
            })
        }
        ))
    }
      , qn = ["friend", "home", "recommend", "follow", "live", "hot", "channel_300201", "channel_200204", "channel_300203", "channel_300205", "channel_300204", "channel_300207", "channel_300208", "channel_300209", "channel_300202"]
      , Qn = ["channel_300206"]
      , zn = t(96716)
      , Yn = t(63947)
      , Jn = "_3Syl4Ec"
      , Xn = "ds4s9SnU"
      , $n = "iqcvlDqG"
      , et = "gzD0_2Jt"
      , nt = "Xg89vTrh"
      , tt = "OxjNdzou"
      , rt = "gTUXGZGk"
      , ot = "OfUHFMQV"
      , it = "kbZWis6L"
      , at = "_kS28Pcj"
      , lt = t(76928).s
      , ct = new Ze.hD(lt)
      , st = function() {
        var e = (0,
        B.useRef)(null);
        return (0,
        B.useEffect)((function() {
            return e.current = document.createElement("div"),
            document.body.append(e.current),
            function() {
                document.body.removeChild(e.current)
            }
        }
        ), []),
        e.current
    }
      , ut = "wIQp1VgG"
      , dt = "oTg5zq34"
      , ft = function(e) {
        var n = e.portalElement
          , t = e.children
          , r = e.referenceRect
          , o = e.isSearch
          , i = void 0 !== o && o
          , a = e.setIsHover
          , l = {
            top: r.top - 12
        };
        return (0,
        qe.createPortal)(B.createElement("div", {
            onClick: function(e) {
                e.stopPropagation()
            },
            onMouseEnter: function() {
                null == a || a(!0)
            },
            onMouseLeave: function() {
                null == a || a(!1)
            },
            className: M()(ut, (0,
            s.Z)({}, dt, i)),
            style: l
        }, t), n)
    }
      , mt = t(58585)
      , vt = t(36609)
      , pt = function(e) {
        var n, t, r = e.specTheme, o = e.current, i = e.textPositionClassName, a = e.iconPositionClassName, l = e.abTestData, c = e.isSearch, u = e.isLive, d = e.isTabHover, f = e.setIsTabHover, m = e.positionRect, v = (0,
        vt.Z)(), p = v.liveList, h = v.updateData, g = v.loading, w = st(), y = null == p ? void 0 : p[0], _ = 2 === (null == y || null === (n = y.episodeExtra) || void 0 === n || null === (t = n.mod) || void 0 === t ? void 0 : t.episode_stage), b = Boolean(l.liveListType) && y, E = (0,
        zn.x)((function() {
            ct.sendLog("fastLiveHeadShow", {
                entrance_type: "follow",
                anchor_id: null == y ? void 0 : y.anchorId,
                room_id: null == y ? void 0 : y.roomId,
                show_type: "default"
            })
        }
        ));
        (0,
        B.useEffect)((function() {
            l.liveListType && h()
        }
        ), [o, l, h]),
        (0,
        B.useEffect)((function() {
            d && (h(),
            ct.sendLog("fastLiveHeadHover", {
                entrance_type: "follow",
                hover_show_cnt: p.length
            }))
        }
        ), [d, h]);
        var k = B.createElement("div", null, B.createElement("div", {
            ref: E,
            className: M()(Jn, a)
        }, B.createElement("div", {
            className: M()(Xn, (0,
            s.Z)({}, $n, _))
        }), B.createElement("div", {
            className: M()(Xn, (0,
            s.Z)({}, $n, _), _ ? it : ot, (0,
            s.Z)({}, at, d))
        }), B.createElement(Yn.x, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(null == y ? void 0 : y.coverSrc, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            imgClass: M()(et, (0,
            s.Z)({}, at, d)),
            renderDefault: B.createElement("div", {
                className: nt
            })
        })), d ? B.createElement(ft, {
            portalElement: w,
            referenceRect: m,
            isSearch: c,
            setIsHover: f
        }, B.createElement(mt.Z, {
            abTestData: l,
            loading: g,
            liveList: p,
            hasLimit: l.liveListType === V.ZP.Short,
            logParams: {
                enter_method: "follow_tab_fast_live_head",
                enter_from_merge: (0,
                H.yW)(),
                entrance_type: "follow"
            },
            isInDouyinWeb: !c && !u
        })) : null);
        return b ? k : B.createElement("div", {
            className: M()(i, tt, (0,
            s.Z)({}, rt, (null == r ? void 0 : r.themeFurtherSwitch) || !0))
        }, B.createElement(rn.Z, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(Ln.Z, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            viewBox: "0 0 19 7",
            height: 7,
            width: 19
        }))
    };
    var ht, gt, wt = t(55931), yt = (0,
    yn.default)((function() {
        return Promise.all([t.e(2447), t.e(7134)]).then(t.bind(t, 17134))
    }
    ), {
        ssr: !1
    }), _t = (0,
    kn.b_)(), bt = function(e) {
        var n, t, r, o = e.label, l = e.value, u = e.type, d = e.onClick, f = e.active, v = e.className, p = e.renderLabel, h = e.renderImg, g = e.href, w = e.target, y = e.spa, _ = e.activeClickable, b = e.iconBackgroundPosition, E = e.iconAnimation, C = e.points, N = e.pointClick, T = e.pointShow, x = e.userInfo, S = void 0 === x ? {} : x, L = (e.tccKeyWord,
        e.socialInfo), I = void 0 === L ? {} : L, Z = e.customProps, A = e.abTestData, P = e.isSpider, D = e.onLinkAction, O = e.current, R = B.useState(bn()(E) ? null : E), F = (0,
        c.Z)(R, 2), U = F[0], H = (F[1],
        B.useState(!1)), j = (0,
        c.Z)(H, 2), G = j[0], K = j[1], q = B.useState(!1), Q = (0,
        c.Z)(q, 2), Y = Q[0], J = (Q[1],
        B.useState(!1)), X = (0,
        c.Z)(J, 2), $ = X[0], ee = X[1], ne = B.useState(!1), te = (0,
        c.Z)(ne, 2), re = te[0], oe = te[1], ie = B.useState(!1), ae = (0,
        c.Z)(ie, 2), le = ae[0], ce = ae[1], se = B.useState(!1), ue = (0,
        c.Z)(se, 2), de = ue[0], fe = ue[1], me = B.useState(!1), ve = (0,
        c.Z)(me, 2), pe = ve[0], he = ve[1], ge = B.useState(!1), we = (0,
        c.Z)(ge, 2), ye = we[0], _e = we[1], be = B.useState(0), Ee = (0,
        c.Z)(be, 2), ke = Ee[0], Ce = Ee[1], Ne = B.useState(!1), Te = (0,
        c.Z)(Ne, 2), xe = Te[0], Se = Te[1], Le = B.useState(0), Ie = (0,
        c.Z)(Le, 2), Ze = Ie[0], Ae = Ie[1], De = function() {
            var e = (0,
            an.P)({
                delayDisappear: 100
            })
              , n = e.changeType;
            return {
                isHover: e.type,
                setIsHover: n,
                positionRectRef: (0,
                B.useRef)()
            }
        }(), Me = De.isHover, Be = De.setIsHover, Oe = De.positionRectRef, Re = B.useRef(), Ve = B.useRef(), Fe = B.useCallback((function(e) {
            if (null == D || D(l, "click"),
            d) {
                var n = [{
                    isShow: re,
                    type: W.TabPointType.YellowDot
                }, {
                    isShow: ye,
                    type: W.TabPointType.YellowNumber
                }, {
                    isShow: $,
                    type: W.TabPointType.RedDot
                }, {
                    isShow: le,
                    type: W.TabPointType.RedNew
                }, {
                    isShow: de,
                    type: W.TabPointType.RedLive
                }, {
                    isShow: pe,
                    type: W.TabPointType.RedLiveCn
                }, {
                    isShow: xe,
                    type: W.TabPointType.RedNumber
                }];
                wn()(n).call(n, (function(e) {
                    var n = e.isShow
                      , t = e.type;
                    n && (null == N || N((0,
                    a.Z)((0,
                    a.Z)({}, S.info), {}, {
                        pointType: t,
                        isLogin: S.isLogin,
                        redPointCount: Ze
                    })))
                }
                )),
                oe(!1),
                ee(!1),
                ce(!1),
                _e(!1),
                fe(!1),
                he(!1),
                Se(!1),
                _ ? d(l, e) : f || d(l, e)
            }
        }
        ), [l, d, f, S, re, ye, $, le, de, pe, _, N, xe, Ze, D]);
        B.useEffect((function() {
            var e = !1;
            return "function" == typeof C && (f ? (oe(!1),
            ee(!1),
            ce(!1),
            _e(!1),
            fe(!1),
            he(!1),
            Se(!1)) : (0,
            i.Z)(m().mark((function n() {
                var t, r, o, i, l, s, u, d, v, p, h, g;
                return m().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2,
                            C((0,
                            a.Z)((0,
                            a.Z)({}, null == S ? void 0 : S.info), {}, {
                                isLogin: null == S ? void 0 : S.isLogin,
                                socialInfo: I,
                                abTestData: A
                            }));
                        case 2:
                            if (n.t0 = n.sent,
                            n.t0) {
                                n.next = 5;
                                break
                            }
                            n.t0 = [];
                        case 5:
                            t = n.t0,
                            e || (o = Kn({
                                pointInfoList: t,
                                typeList: [W.TabPointType.YellowDot, W.TabPointType.RedDot, W.TabPointType.RedNew, W.TabPointType.RedLive],
                                active: f
                            }),
                            i = (0,
                            c.Z)(o, 4),
                            l = i[0],
                            s = i[1],
                            u = i[2],
                            d = i[3],
                            v = Gn({
                                pointInfoList: t,
                                typeList: [W.TabPointType.YellowNumber, W.TabPointType.RedNumber],
                                active: f
                            }),
                            p = (0,
                            c.Z)(v, 2),
                            h = p[0],
                            g = p[1],
                            oe(l),
                            _e(h.state),
                            Ce(h.count),
                            Se(g.state),
                            Ae(g.count),
                            ee(s),
                            ce(u),
                            k()(r = [V.hE.AllLive, V.hE.SomeLive]).call(r, null == A ? void 0 : A.newSkylight) || fe(d));
                        case 7:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))()),
            function() {
                e = !0
            }
        }
        ), [S, f, I]),
        B.useEffect((function() {
            var e = [{
                isShow: re,
                type: W.TabPointType.YellowDot
            }, {
                isShow: ye,
                type: W.TabPointType.YellowNumber
            }, {
                isShow: $,
                type: W.TabPointType.RedDot
            }, {
                isShow: de,
                type: W.TabPointType.RedLive
            }, {
                isShow: pe,
                type: W.TabPointType.RedLiveCn
            }, {
                isShow: xe,
                type: W.TabPointType.RedNumber
            }];
            wn()(e).call(e, (function(e) {
                e.isShow && (null == T || T({
                    pointType: e.type,
                    isLogin: null == S ? void 0 : S.isLogin,
                    redPointCount: Ze
                }))
            }
            ))
        }
        ), [null == S ? void 0 : S.isLogin, re, ye, $, le, de, pe, xe, Ze, T]);
        var We = B.useCallback((function() {
            var e, n, t = null === (e = Re.current) || void 0 === e || null === (n = e.getLottieInstance) || void 0 === n ? void 0 : n.call(e);
            return {
                playLottie: function() {
                    var e, n;
                    null == t || null === (e = t.setDirection) || void 0 === e || e.call(t, 1),
                    null == t || null === (n = t.play) || void 0 === n || n.call(t)
                },
                resetLottie: function() {
                    var e;
                    null == t || null === (e = t.goToAndStop) || void 0 === e || e.call(t, 0)
                },
                reversePlayLottie: function() {
                    var e, n;
                    null == t || null === (e = t.setDirection) || void 0 === e || e.call(t, -1),
                    null == t || null === (n = t.play) || void 0 === n || n.call(t)
                },
                endOfLottie: function() {
                    var e;
                    null == t || null === (e = t.goToAndStop) || void 0 === e || e.call(t, null == t ? void 0 : t.getDuration(!0), !0)
                }
            }
        }
        ), []);
        B.useEffect((function() {
            Ve.current && clearTimeout(Ve.current),
            f ? We().endOfLottie() : We().resetLottie()
        }
        ), [f]);
        var Ue = (0,
        wt.Z)().specTheme
          , He = B.useCallback((function(e) {
            var n, t;
            null == D || D(l, "enter"),
            Oe.current = null == e || null === (n = e.currentTarget) || void 0 === n || null === (t = n.getBoundingClientRect) || void 0 === t ? void 0 : t.call(n),
            Be(!0)
        }
        ), [D, Be])
          , je = B.useCallback((function() {
            Be(!1),
            null == D || D(l, "leave")
        }
        ), [Be, D, l]);
        return B.createElement(B.Fragment, null, "text" === u && B.createElement("div", {
            className: M()(Cn.tab, Cn.linearIcon, (n = {},
            (0,
            s.Z)(n, Cn.active, f),
            (0,
            s.Z)(n, null == Cn ? void 0 : Cn[l], l),
            (0,
            s.Z)(n, Cn.activeClickable, _ && f),
            (0,
            s.Z)(n, Cn.searchTabWrap, null == Z ? void 0 : Z.isSearchSideNav),
            n), v)
        }, B.createElement(Pe.a, {
            className: Cn.itemLink,
            spa: y,
            href: globalThis.xssNamespace.douyin_web.filterUrl(g, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            target: w,
            onClick: Fe,
            onMouseEnter: He,
            onMouseLeave: je
        }, re && B.createElement("div", {
            className: Cn.yellowPoint
        }), $ && B.createElement("div", {
            className: Cn.redPoint
        }), de && B.createElement(pt, {
            isSearch: null == Z ? void 0 : Z.isSearchSideNav,
            isLive: null == Z ? void 0 : Z.isLiveSideNav,
            specTheme: Ue,
            current: O,
            textPositionClassName: Cn.liveRedPoint,
            iconPositionClassName: Cn.liveNewIcon,
            abTestData: A,
            isTabHover: Me,
            setIsTabHover: Be,
            positionRect: Oe.current
        }), ye && B.createElement("div", {
            className: M()((t = {},
            (0,
            s.Z)(t, Cn.numberYellowPointPosText2, k()(qn).call(qn, l)),
            (0,
            s.Z)(t, Cn.numberYellowPointPosText3, k()(Qn).call(Qn, l)),
            (0,
            s.Z)(t, Cn.digitsNumberYellowPoint, ke < 10 || !1),
            (0,
            s.Z)(t, Cn.numberYellowPoint, ke >= 10),
            (0,
            s.Z)(t, Cn.moreCount, ke > 99),
            (0,
            s.Z)(t, Cn.borderNone, (null == Ue ? void 0 : Ue.themeFurtherSwitch) || !0),
            t))
        }, ke > 99 ? B.createElement(rn.Z, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(Tn, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            viewBox: "0 0 22 9",
            height: 9,
            width: 22
        }) : ke), xe && B.createElement("div", {
            className: M()((r = {},
            (0,
            s.Z)(r, Cn.numberYellowPointPosText2, k()(qn).call(qn, l)),
            (0,
            s.Z)(r, Cn.numberYellowPointPosText3, k()(Qn).call(Qn, l)),
            (0,
            s.Z)(r, Cn.digitsNumberRedPoint, Ze < 10),
            (0,
            s.Z)(r, Cn.numberRedPoint, Ze >= 10),
            (0,
            s.Z)(r, Cn.moreCount, Ze > 99),
            (0,
            s.Z)(r, Cn.borderNone, (null == Ue ? void 0 : Ue.themeFurtherSwitch) || !0),
            r))
        }, Ze > 99 ? B.createElement(rn.Z, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(Tn, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            viewBox: "0 0 22 9",
            height: 9,
            width: 22
        }) : Ze), !P && !h && B.createElement(B.Fragment, null, B.createElement("div", {
            className: M()(Cn.icon, Cn.iconDark, (0,
            s.Z)({}, Cn.hidden, G)),
            style: {
                backgroundPosition: "".concat(f ? b.darkActive : b.dark),
                backgroundSize: "".concat(z.U2, "px auto")
            }
        }), B.createElement("div", {
            className: M()(Cn.icon, Cn.iconLight, (0,
            s.Z)({}, Cn.hidden, G)),
            style: {
                backgroundPosition: "".concat(f ? b.lightActive : b.light),
                backgroundSize: "".concat(z.U2, "px auto")
            }
        })), !P && (null == h ? void 0 : h()), !_t && Y && B.createElement(En.SV, null, B.createElement(yt, {
            data: U,
            hidden: !1,
            loop: !1,
            autoplay: !1,
            ref: Re,
            className: M()(Cn.icon, (0,
            s.Z)({}, Cn.hidden, !G)),
            onInit: function() {
                K(!0),
                f ? We().endOfLottie() : We().resetLottie()
            }
        })), B.createElement("div", {
            className: Cn.textWrap
        }, B.createElement("span", {
            className: Cn.text
        }, p ? p() : o)))), "image" === u && B.createElement(Un, {
            spa: y,
            href: globalThis.xssNamespace.douyin_web.filterUrl(g, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            label: o,
            target: w,
            value: l,
            handleTabClick: Fe,
            showLiveRedPoint: de,
            showYellowPoint: re,
            showDotRedPoint: $,
            showNumberYellowPoint: ye,
            showLiveRedCnPoint: pe,
            showNumberRedPoint: xe,
            active: f,
            activeClickable: _,
            renderLabel: p
        }))
    }, Et = function(e) {
        var n, t = e.list, r = e.current, l = e.onChange, u = e.className, d = e.activeClickable, f = e.userInfo, v = e.abTestData, p = e.customProps, h = e.onLinkAction, w = e.isSpider, y = B.useRef(null), _ = (0,
        B.useState)(), b = (0,
        c.Z)(_, 2), E = b[0], k = b[1];
        (0,
        B.useEffect)((function() {
            var e = !1;
            return r && (0,
            i.Z)(m().mark((function n() {
                var t, o, i;
                return m().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2,
                            (0,
                            dn.U)();
                        case 2:
                            t = n.sent,
                            e || (o = U.Le.getConfig(U.gI.TabPointCache),
                            i = t,
                            U.Le.setConfig(U.gI.TabPointCache, {
                                followCount: "follow" === r ? 0 : (null == i ? void 0 : i.count) || (null == o ? void 0 : o.followCount),
                                followHasLive: "follow" !== r && ((null == i ? void 0 : i.hasLive) || (null == o ? void 0 : o.followHasNotice)),
                                followHasNotice: "follow" !== r && ((null == i ? void 0 : i.hasNotice) || (null == o ? void 0 : o.followHasLive)),
                                friendHasNotice: "friend" !== r && ((null == i ? void 0 : i.friendHasNotice) || (null == o ? void 0 : o.friendHasNotice)),
                                friendNoticeCount: "friend" === r ? 0 : (null == i ? void 0 : i.friendNoticeCount) || (null == o ? void 0 : o.friendNoticeCount)
                            }),
                            i.count = "follow" === r ? 0 : t.count || (null == o ? void 0 : o.followCount),
                            i.hasNotice = "follow" !== r && (t.hasNotice || (null == o ? void 0 : o.followHasNotice)),
                            i.hasLive = "follow" !== r && (t.hasLive || (null == o ? void 0 : o.followHasLive)),
                            i.friendHasNotice = "friend" !== r && (t.friendHasNotice || (null == o ? void 0 : o.friendHasNotice)),
                            i.friendNoticeCount = "friend" === r ? 0 : t.friendNoticeCount || (null == o ? void 0 : o.friendNoticeCount),
                            k(i));
                        case 4:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))(),
            function() {
                e = !0
            }
        }
        ), [r]);
        var C = function(e) {
            var n = e.tabsGroupRef
              , t = (0,
            B.useRef)(0)
              , r = function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                t.current > 0 && (hn.sendLog("navEnterDuration", {
                    duration: N()() - t.current,
                    tab_name: e
                }),
                t.current = 0)
            };
            return (0,
            B.useEffect)((function() {
                var e = n.current
                  , o = function() {
                    t.current = N()()
                }
                  , i = function() {
                    r()
                };
                return e && (e.addEventListener("mouseenter", o),
                e.addEventListener("mouseleave", i)),
                function() {
                    e && e.removeEventListener("mouseenter", o),
                    e && e.removeEventListener("mouseleave", i)
                }
            }
            ), [n]),
            {
                reportNavViewLog: r
            }
        }({
            tabsGroupRef: y
        })
          , T = C.reportNavViewLog;
        return B.createElement("div", {
            className: M()(fn, u, (0,
            s.Z)({}, pn, null == p ? void 0 : p.isSearchSideNav)),
            ref: y
        }, g()(n = un()(t).call(t, (function(e) {
            return !e.hideTab
        }
        ))).call(n, (function(e) {
            return "divider" === e.value ? B.createElement("div", {
                key: e.value,
                className: mn
            }) : B.createElement(bt, (0,
            o.Z)({
                abTestData: v,
                userInfo: f,
                active: e.value === r,
                activeClickable: d,
                className: vn,
                onClick: function() {
                    return T(e.value),
                    l.apply(void 0, arguments)
                },
                customProps: (0,
                a.Z)((0,
                a.Z)({}, p), e.custom),
                isHidden: e.hideTab,
                key: e.value,
                socialInfo: E,
                onLinkAction: h,
                isSpider: w,
                current: r
            }, e))
        }
        )))
    }, kt = t(60417), Ct = "AEhxbQ9p", Nt = "feLvD87d", Tt = "kHddjwtt", xt = "gZklyibl", St = "_Wk55hML", Lt = "ff4e_cKJ", It = "zNTHpW_u";
    function Zt() {
        return Zt = Object.assign ? Object.assign.bind() : function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }
        ,
        Zt.apply(this, arguments)
    }
    var At = function(e) {
        return B.createElement("svg", Zt({
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), ht || (ht = B.createElement("g", {
            clipPath: "url(#icon-large_svg__clip0_6093_17602)"
        }, B.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.282 3.5a1 1 0 00-.97 1.243l.638 2.553A7.967 7.967 0 0112 5.5c1.915 0 3.674.673 5.051 1.796l.638-2.553a1 1 0 00-.97-1.243H7.282zM12 19.5a6 6 0 100-12 6 6 0 000 12z",
            fill: "#fff"
        }), B.createElement("path", {
            d: "M11.552 10.409a.5.5 0 01.896 0l.611 1.237a.5.5 0 00.377.274l1.366.198a.5.5 0 01.277.853l-.989.964a.5.5 0 00-.143.442l.233 1.36a.5.5 0 01-.726.528l-1.221-.643a.5.5 0 00-.466 0l-1.221.643a.5.5 0 01-.726-.527l.233-1.36a.5.5 0 00-.143-.443l-.989-.964a.5.5 0 01.277-.853l1.366-.198a.5.5 0 00.377-.274l.61-1.238z",
            fill: "#282934"
        }))), gt || (gt = B.createElement("defs", null, B.createElement("clipPath", {
            id: "icon-large_svg__clip0_6093_17602"
        }, B.createElement("path", {
            fill: "#fff",
            transform: "translate(2 1.5)",
            d: "M0 0h20v20H0z"
        })))))
    }
      , Pt = function(e) {
        var n, t = e.isSearchTab, r = e.isActive, o = (0,
        B.useState)(!1), i = (0,
        c.Z)(o, 2), a = i[0], l = i[1];
        return B.createElement("div", {
            className: M()(Ct, (n = {},
            (0,
            s.Z)(n, Tt, a),
            (0,
            s.Z)(n, Nt, t),
            (0,
            s.Z)(n, xt, r),
            n)),
            onMouseLeave: function() {
                l(!0)
            }
        }, B.createElement("div", {
            className: St
        }, B.createElement("span", {
            className: Lt
        }, B.createElement(rn.Z, {
            src: globalThis.xssNamespace.douyin_web.filterUrl(At, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            needRenderInSSR: !0
        })), B.createElement("span", {
            className: It
        }, "\u4e9a\u8fd0\u4f1a")))
    }
      , Dt = t(42155)
      , Mt = "GuSbEOy7"
      , Bt = "PZ9RCv1n"
      , Ot = "H3w1iDzb"
      , Rt = "zPc4oZVy"
      , Vt = "vUCGH4WQ"
      , Ft = "ETaKHYhF"
      , Wt = "vrKoVatG"
      , Ut = "MxoM7PCk"
      , Ht = "D8gl48qZ"
      , jt = "SKasw4pP"
      , Gt = "GctVLOFA"
      , Kt = "PFKtPjJX"
      , qt = (0,
    B.memo)((function(e) {
        var n = e.showType
          , t = e.miniImageDark
          , r = e.miniImageLight
          , o = e.miniImageLightHover
          , i = e.miniImageDarkHover
          , a = e.miniAnimationLight
          , l = e.miniAnimationDark
          , u = e.miniTextLight
          , d = e.miniTextDark
          , f = (0,
        B.useState)(!1)
          , m = (0,
        c.Z)(f, 2)
          , v = m[0]
          , h = m[1];
        (0,
        B.useEffect)((function() {
            var e, n, c, s = [{
                name: "--vs-spring-entry-mini-animation-light",
                value: a
            }, {
                name: "--vs-spring-entry-mini-animation-dark",
                value: l
            }, {
                name: "--vs-spring-entry-mini-image-light",
                value: r
            }, {
                name: "--vs-spring-entry-mini-image-dark",
                value: t
            }, {
                name: "--vs-spring-entry-mini-image-light-hover",
                value: o
            }, {
                name: "--vs-spring-entry-mini-image-dark-hover",
                value: i
            }, {
                name: "--vs-spring-entry-mini-text-light",
                value: u
            }, {
                name: "--vs-spring-entry-mini-text-dark",
                value: d
            }], f = g()(s).call(s, (function(e) {
                var n;
                return p()(n = "".concat(e.name, ": url(")).call(n, e.value, ");")
            }
            )).join("");
            null === (e = document.getElementsByClassName(Wt)) || void 0 === e || null === (n = e[0]) || void 0 === n || null === (c = n.setAttribute) || void 0 === c || c.call(n, "style", f)
        }
        ), [t, r, o, i, a, l, u, d]);
        var w = n === Dt.pC.Animation && !v;
        return B.createElement("div", {
            className: M()(Wt),
            onMouseEnter: function() {
                h(!0)
            }
        }, B.createElement("div", {
            className: M()(Ut, jt, (0,
            s.Z)({}, Kt, w))
        }), B.createElement("div", {
            className: M()(Ut, Ht, (0,
            s.Z)({}, Kt, !w))
        }), B.createElement("div", {
            className: Gt
        }), B.createElement("img", {
            className: Kt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(r, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Kt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(t, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Kt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(o, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Kt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(i, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Kt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(u, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Kt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(d, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }))
    }
    ))
      , Qt = new Ze.hD({
        brandAdBadgeShow: {
            eventName: "brand_ad_badge_show",
            params: {
                web_rid: ""
            }
        }
    })
      , zt = (0,
    B.memo)((function(e) {
        var n = e.showType
          , t = e.imageDark
          , r = e.imageLight
          , o = e.imageDarkHover
          , i = e.imageLightHover
          , a = e.animationDark
          , l = e.animationLight
          , u = e.animationDarkV2
          , d = e.animationLightV2
          , f = e.abtest
          , m = e.webRid
          , v = (0,
        B.useState)(!1)
          , h = (0,
        c.Z)(v, 2)
          , w = h[0]
          , y = h[1]
          , _ = (0,
        zn.x)((function() {
            Qt.sendLog("brandAdBadgeShow", {
                web_rid: m
            })
        }
        ));
        (0,
        B.useEffect)((function() {
            var e, n, c, s = [{
                name: "--vs-spring-entry-animation-light",
                value: null != f && f.vsEntryAnimate ? d : l
            }, {
                name: "--vs-spring-entry-animation-dark",
                value: null != f && f.vsEntryAnimate ? u : a
            }, {
                name: "--vs-spring-entry-image-light",
                value: r
            }, {
                name: "--vs-spring-entry-image-dark",
                value: t
            }, {
                name: "--vs-spring-entry-image-light-hover",
                value: i
            }, {
                name: "--vs-spring-entry-image-dark-hover",
                value: o
            }], m = g()(s).call(s, (function(e) {
                var n;
                return p()(n = "".concat(e.name, ": url(")).call(n, e.value, ");")
            }
            )).join("");
            null === (e = document.getElementsByClassName(Mt)) || void 0 === e || null === (n = e[0]) || void 0 === n || null === (c = n.setAttribute) || void 0 === c || c.call(n, "style", m)
        }
        ), [l, a, r, t, i, o, u, d, null == f ? void 0 : f.vsEntryAnimate]);
        var b = n === Dt.pC.Animation && !w;
        return B.createElement("div", {
            className: M()(Mt),
            onMouseEnter: function() {
                y(!0)
            },
            ref: _
        }, B.createElement("div", {
            className: Ft
        }, B.createElement(qt, e)), B.createElement("div", {
            className: M()(Bt, Rt, (0,
            s.Z)({}, Vt, b))
        }), B.createElement("div", {
            className: M()(Bt, Ot, (0,
            s.Z)({}, Vt, !b))
        }), B.createElement("img", {
            className: Vt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(r, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Vt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(t, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Vt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(i, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }), B.createElement("img", {
            className: Vt,
            src: globalThis.xssNamespace.douyin_web.filterUrl(o, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            })
        }))
    }
    ))
      , Yt = W
      , Jt = Yt.commonChannelMenu
      , Xt = Yt.channelMenu
      , $t = (0,
    s.Z)({
        hot: "trend"
    }, "user_self", "personal_tab")
      , er = function(e) {
        var n, t, r, u, f, v, h, w, _, E, C, T, S, I, A = B.useState(undefined), D = (0,
        c.Z)(A, 2), ge = D[0], we = D[1], ye = B.useState((null == e || null === (n = e.customProps) || void 0 === n ? void 0 : n.isClient) || !1), _e = (0,
        c.Z)(ye, 1)[0], be = B.useState(!_e), Ee = (0,
        c.Z)(be, 2), ke = Ee[0], Ce = Ee[1], Ne = B.useRef(null), Te = e.refEl, xe = e.abTestData, Se = e.current, Le = e.isSpider, Ie = e.tccConfig, Ze = void 0 === Ie ? {} : Ie, Ae = e.userInfo, De = e.isMainland, Me = void 0 === De || De, Be = e.isAsianGamesLive, Re = void 0 !== Be && Be, Ve = null !== (t = null !== (r = null == Ze ? void 0 : Ze[O.TccKey.VsSpringEntry]) && void 0 !== r ? r : null === (u = U.Le.getConfig(U.gI.TccData)) || void 0 === u ? void 0 : u[O.TccKey.VsSpringEntry]) && void 0 !== t ? t : {}, Fe = B.useMemo((function() {
            var e, n, t, r = p()(e = []).call(e, (0,
            l.Z)(Jt()), [{
                value: "divider"
            }], (0,
            l.Z)(Xt()));
            return g()(n = y()(d()(p()(t = []).call(t, (0,
            l.Z)(r), (0,
            l.Z)(z.F4)), "value"))).call(n, (function(e) {
                return b()(e).call(e, (function(e, n) {
                    return (0,
                    a.Z)((0,
                    a.Z)({}, e), n)
                }
                ), {})
            }
            ))
        }
        ), []);
        B.useEffect((function() {
            (0,
            i.Z)(m().mark((function e() {
                var n;
                return m().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            R.h.getVar({
                                name: "showNewTab",
                                defaultValue: 0
                            });
                        case 2:
                            n = e.sent,
                            we(n);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))()
        }
        ), []);
        var We = function(e) {
            var n;
            return null !== (n = $t[e]) && void 0 !== n ? n : e
        };
        B.useEffect((function() {
            var n = {
                only: "stayVideoTab",
                event: function(n, t) {
                    t > 0 && he.Z.sendLog("stayVideoTab", {
                        tab_name: We(e.current),
                        duration: t,
                        is_visible: Number(n)
                    }, !1)
                }
            };
            (0,
            j.vP)(n)
        }
        ), [e.current]);
        var Ue = B.useMemo((function() {
            var n, t, r, i = null == e || null === (n = e.customProps) || void 0 === n || null === (t = n.os) || void 0 === t ? void 0 : t.isMas, l = g()(Fe).call(Fe, (function(n) {
                var t, r, l, c, s;
                if ("/discover" === n.route)
                    return (0,
                    a.Z)((0,
                    a.Z)({}, n), {}, {
                        hideTab: Boolean(xe.discoverTabHidden)
                    });
                if (ge) {
                    if (function(e) {
                        return "channel_300203" === e.value
                    }(n))
                        return (0,
                        a.Z)((0,
                        a.Z)({}, n), {}, {
                            hideTab: !0
                        });
                    if (function(e) {
                        return "channel_200204" === e.value
                    }(n) || function(e) {
                        return "channel_200202" === e.value
                    }(n))
                        return (0,
                        a.Z)((0,
                        a.Z)({}, n), {}, {
                            hideTab: !1
                        })
                }
                if (n.value === W.NavigationMenuItemVal.Vs) {
                    var u, d, f, m, v, p, h, g = null !== (u = null !== (d = null == Ze || null === (f = Ze.masConfig) || void 0 === f ? void 0 : f.vsEntryOpen) && void 0 !== d ? d : null === (m = U.Le.getConfig(U.gI.TccData)) || void 0 === m || null === (v = m.masConfig) || void 0 === v ? void 0 : v.vsEntryOpen) && void 0 !== u && u;
                    i || !(0,
                    G.p)() && (null === (p = window.TTE_ENV) || void 0 === p || p.isMas);
                    if (i)
                        return (0,
                        a.Z)((0,
                        a.Z)({}, n), {}, {
                            hideTab: !g
                        });
                    if (!(0,
                    G.p)() && null !== (h = window.TTE_ENV) && void 0 !== h && h.isMas)
                        return (0,
                        a.Z)((0,
                        a.Z)({}, n), {}, {
                            hideTab: !g
                        })
                }
                if (n.value === W.NavigationMenuItemVal.CarCarnival) {
                    var w = Ve.timeInterval
                      , y = Ve.webRid
                      , _ = N()();
                    null != w && x()(w).call(w, (function(e) {
                        var n = e.startTime
                          , t = e.endTime;
                        return _ >= n && _ <= t
                    }
                    )) ? (n.href = globalThis.xssNamespace.douyin_web.filterUrl((0,
                    K.CT)(y), null, {
                        logType: "js.href/src",
                        mode: "black",
                        reportOnly: !1
                    }),
                    n.renderLabel = function() {
                        return B.createElement(zt, (0,
                        o.Z)({}, Ve, {
                            webRid: y
                        }))
                    }
                    ,
                    n.hideTab = !1,
                    n.type = "image") : n.hideTab = !0
                }
                var b = null === (t = null !== (r = null == Ze || null === (l = Ze.NCEE) || void 0 === l ? void 0 : l.offLine) && void 0 !== r ? r : null === (c = U.Le.getConfig(U.gI.TccData)) || void 0 === c || null === (s = c.NCEE) || void 0 === s ? void 0 : s.offLine) || void 0 === t || t;
                if (n.value === W.NavigationMenuItemVal.Knowledge && (null == xe ? void 0 : xe.NCEE) === V.gp.LiveAndWaterfall && !b)
                    return (0,
                    a.Z)((0,
                    a.Z)({}, n), {}, {
                        type: Se === n.value ? "text" : "image",
                        renderLabel: Se === n.value ? undefined : function() {
                            var n;
                            return B.createElement(Ke, {
                                isSearchTab: null == e || null === (n = e.customProps) || void 0 === n ? void 0 : n.isSearchSideNav
                            })
                        }
                    });
                if (n.value === W.NavigationMenuItemVal.AsianGame) {
                    var E, k, C, T, S, L, I = null !== (E = null == xe ? void 0 : xe.asianGameEntryOnline) && void 0 !== E && E, Z = null !== (k = null !== (C = null == Ze || null === (T = Ze.asiangame_entry) || void 0 === T ? void 0 : T.masOnline) && void 0 !== C ? C : null === (S = U.Le.getConfig(U.gI.TccData)) || void 0 === S || null === (L = S.asiangame_entry) || void 0 === L ? void 0 : L.masOnline) && void 0 !== k && k;
                    return (0,
                    a.Z)((0,
                    a.Z)({}, n), {}, {
                        renderLabel: function(n) {
                            var t = n.active;
                            return B.createElement(Pt, {
                                isActive: t,
                                isSearchTab: e.customProps.isSearchSideNav
                            })
                        },
                        hideTab: !I || !Me || i && !Z
                    })
                }
                return n
            }
            ));
            if (k()(r = [V.gp.WaterfallAndEntrance, V.gp.LiveAndWaterfall]).call(r, null == xe ? void 0 : xe.NCEE)) {
                var c = L()(l).call(l, (function(e) {
                    return "\u70ed\u70b9" === e.label
                }
                ))
                  , s = L()(l).call(l, (function(e) {
                    return "\u77e5\u8bc6" === e.label
                }
                ));
                if (c - s != 1) {
                    var u = Z()(l).call(l, s, 1)[0];
                    Z()(l).call(l, c, -1, u)
                }
            }
            return l
        }
        ), [ge, Fe, Se, xe, Ze, Ae])
          , He = B.useCallback((function() {
            var e, n = null !== (e = (0,
            q.FJ)().awemePcClient) && void 0 !== e ? e : "";
            _e && (0,
            Q.y)(n, ">=", "1.2.0") ? Ce(!1) : Ce(!0)
        }
        ), [_e]);
        B.useEffect((function() {
            He()
        }
        ), [He]),
        B.useEffect((function() {
            var e, n, t = function(e) {
                "ArrowDown" !== e.key && "ArrowUp" !== e.key || null == e || e.preventDefault()
            };
            return null === (e = Ne.current) || void 0 === e || e.setAttribute("tabindex", 0),
            null === (n = Ne.current) || void 0 === n || n.addEventListener("keydown", t),
            function() {
                var e;
                null === (e = Ne.current) || void 0 === e || e.removeEventListener("keydown", t)
            }
        }
        ), []);
        var je = (0,
        wt.Z)()
          , Ge = je.specTheme
          , qe = je.isDark
          , Qe = B.useMemo((function() {
            return null != Ge && Ge.themeFurtherSwitch ? {
                backgroundImage: "url(".concat(qe ? null == Ge ? void 0 : Ge.siderDark : null == Ge ? void 0 : Ge.siderLight, ")")
            } : {}
        }
        ), [Ge, qe])
          , ze = (0,
        F.T)({
            canShow: !(Re || k()(f = ["vs", "asianGame"]).call(f, Se) || null != Se && P()(Se).call(Se, "/search"))
        }).isShow;
        return B.createElement("div", {
            className: M()(X, null == e ? void 0 : e.className, (0,
            s.Z)({}, ee, null == e || null === (v = e.customProps) || void 0 === v ? void 0 : v.isSearchSideNav)),
            ref: function(e) {
                Te && (Te.current = e)
            }
        }, B.createElement("div", {
            className: M()(ne, (0,
            s.Z)({}, te, !ze))
        }, B.createElement("div", {
            className: M()(re, (_ = {},
            (0,
            s.Z)(_, ie, null == e || null === (h = e.customProps) || void 0 === h ? void 0 : h.isLogoFixed),
            (0,
            s.Z)(_, oe, _e),
            (0,
            s.Z)(_, le, null == e || null === (w = e.customProps) || void 0 === w ? void 0 : w.isSearchLogoFixed),
            (0,
            s.Z)(_, $, null == e ? void 0 : e.needGrayscale),
            (0,
            s.Z)(_, ae, !0),
            _))
        }, !(_e && "Mac" === (null == e || null === (E = e.customProps) || void 0 === E || null === (C = E.os) || void 0 === C ? void 0 : C.os)) && B.createElement("div", {
            className: M()(ce, (0,
            s.Z)({}, ae, !0))
        }, B.createElement(Pe.a, {
            href: globalThis.xssNamespace.douyin_web.filterUrl((0,
            K.kj)(), null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            className: se,
            onClick: function() {
                he.Z.sendLog("clickAwemeLogo", {
                    enter_from: (0,
                    H.yW)()
                })
            }
        }))), B.createElement("div", {
            "data-e2e": "douyin-navigation",
            className: M()(ue, de, (T = {},
            (0,
            s.Z)(T, $, null == e ? void 0 : e.needGrayscale),
            (0,
            s.Z)(T, ae, !0),
            T)),
            style: Qe,
            ref: Ne
        }, B.createElement("div", {
            className: M()(fe, (0,
            s.Z)({}, me, !ke))
        }, B.createElement(Et, (0,
        o.Z)({}, e, {
            onChange: function(n, t) {
                var r, o, i, l, c = (0,
                H.yW)(), s = c.match(Y.PH) ? c : "";
                null !== (r = location) && void 0 !== r && null !== (o = r.pathname) && void 0 !== o && k()(o).call(o, "/search") && (s = "search_result");
                var u, d, f, m, v, p, h, g, w = {};
                !(0,
                G.p)() && "live.douyin.com" === (null === (i = window.location) || void 0 === i ? void 0 : i.host) && /^\/[0-9|a-z|A-Z]{1,}.*/.test(null === (l = window.location) || void 0 === l ? void 0 : l.pathname) && (s = "live_detail",
                w = {
                    anchor_id: null === (u = window.__STORE__) || void 0 === u || null === (d = u.roomStore) || void 0 === d || null === (f = d.roomInfo) || void 0 === f || null === (m = f.anchor) || void 0 === m ? void 0 : m.id_str,
                    room_id: null === (v = window.__STORE__) || void 0 === v || null === (p = v.roomStore) || void 0 === p || null === (h = p.roomInfo) || void 0 === h ? void 0 : h.roomId,
                    url: null === (g = window) || void 0 === g ? void 0 : g.location.href
                });
                he.Z.sendLog("enterVideoTab", (0,
                a.Z)({
                    tab_name: We(n),
                    previous_page: s
                }, w)),
                n === W.NavigationMenuItemVal.CarCarnival && he.Z.sendLog("brandAdBadgeClick", {
                    web_rid: Ve.webRid
                }),
                (0,
                kt.b)(),
                e.onChange && e.onChange(n, t)
            },
            className: e.className,
            list: Ue,
            customProps: null == e ? void 0 : e.customProps,
            isSpider: Le
        }))), !_e && B.createElement("div", {
            className: ve
        }), !_e && B.createElement(cn, {
            tabType: !0,
            isSearch: null == e || null === (S = e.customProps) || void 0 === S ? void 0 : S.isSearchSideNav
        }), !_e && B.createElement("div", {
            className: ve,
            style: {
                marginTop: "2px"
            }
        }), ke && B.createElement("div", {
            className: M()(J, (I = {},
            (0,
            s.Z)(I, pe, null == Ge ? void 0 : Ge.themeFurtherSwitch),
            (0,
            s.Z)(I, ae, !0),
            I))
        }, B.createElement(Oe, {
            specTheme: Ge,
            isSpider: Le
        })))))
    }
}


77060: function(e, n, t) {
    t.d(n, {
        a: function() {
            return y
        }
    });
    var r = t(65902)
      , o = t(32781)
      , i = t(67161)
      , a = t(92524)
      , l = t.n(a)
      , c = t(56442)
      , s = t.n(c)
      , u = t(53864)
      , d = t(67330)
      , f = t(79705)
      , m = t.n(f)
      , v = t(79297)
      , p = t(8372)
      , h = t(71043)
      , g = {
        aLink: "B3AsdZT9"
    }
      , w = ["href", "children", "style", "className", "passParamKeys", "spa", "isNeedSeoOpt", "refEl"];
    function y(e) {
        var n = e.href
          , t = void 0 === n ? "" : n
          , a = e.children
          , c = e.style
          , f = e.className
          , y = e.passParamKeys
          , _ = void 0 === y ? [] : y
          , b = e.spa
          , E = e.isNeedSeoOpt
          , k = void 0 === E || E
          , C = e.refEl
          , N = (0,
        i.Z)(e, w)
          , T = (0,
        u.useState)("")
          , x = (0,
        o.Z)(T, 2)
          , S = x[0]
          , L = x[1]
          , I = (0,
        u.useRef)(null);
        (0,
        u.useEffect)((function() {
            var e = (0,
            p.U)({
                passParamKeys: _
            })
              , n = (0,
            d.stringify)(e);
            L(n)
        }
        ), []);
        var Z = (0,
        u.useMemo)((function() {
            if (!t)
                return undefined;
            var e, n, r = l()(t).call(t, "#");
            -1 !== r ? (e = s()(t).call(t, 0, r),
            n = s()(t).call(t, r + 1)) : (e = t,
            n = "");
            var o = l()(e).call(e, "?")
              , i = ""
              , a = "";
            -1 !== o ? (i = s()(e).call(e, 0, o),
            a = s()(e).call(e, o + 1)) : (i = e,
            a = "");
            var c = [];
            return S && c.push(S),
            a && c.push(a),
            c.length > 0 ? [i, c.join("&")].join("?") + (n && "#".concat(n)) : i + (n && "#".concat(n))
        }
        ), [S, t])
          , A = Z;
        if (k && !b && A) {
            var P = A.split("#")
              , D = (0,
            o.Z)(P, 2);
            A = D[0],
            D[1];
            var M = A.split("?")
              , B = (0,
            o.Z)(M, 2);
            A = B[0],
            B[1]
        }
        return b ? u.createElement(v.rU, (0,
        r.Z)({
            to: Z,
            className: m()(g.aLink, f),
            style: c
        }, N, {
            suppressHydrationWarning: !0
        }), a) : u.createElement("a", (0,
        r.Z)({
            suppressHydrationWarning: !0,
            href: globalThis.xssNamespace.douyin_web.filterUrl(A, null, {
                logType: "js.href/src",
                mode: "black",
                reportOnly: !1
            }),
            className: m()(g.aLink, f),
            style: c,
            ref: function(e) {
                I.current = e,
                C && (C.current = e)
            }
        }, N, {
            target: (0,
            h.f)() ? "_self" : N.target,
            onClick: function(e) {
                try {
                    var n;
                    I.current.href = globalThis.xssNamespace.douyin_web.filterUrl(Z, null, {
                        logType: "js.href/src",
                        mode: "black",
                        reportOnly: !1
                    }),
                    null == N || null === (n = N.onClick) || void 0 === n || n.call(N, e)
                } catch (t) {}
            }
        }), a)
    }
},