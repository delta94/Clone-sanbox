LL52: (e,t,n)=>{
    "use strict";
    n.d(t, {
        he: ()=>S,
        sO: ()=>N,
        U2: ()=>M,
        dz: ()=>T,
        v_: ()=>j,
        Md: ()=>B,
        gz: ()=>I
    });
    var r = n("D57K")
      , i = n("vpUY") //done a
      , o = n("T3Fm") 
      , a = n("H/f1")
      , s = n("zJWh")
      , c = n("WOT1")
      , l = n.n(c)
      , u = n("Kttv")
      , p = n.n(u)
      , d = n("W33l")
      , f = n("zpx2")
      , m = n("cZy4")
      , g = n("Utn3")
      , y = n("Dzha");
    const h = (0,
    y.Ue)((0,
    y.xf)((0,
    r.__assign)((0,
    r.__assign)({}, g), {})));
    var b = n("2WI7")
      , v = n("qK6d")
      , w = (0,
    i.L)().isHybrid
      , x = function(e, t) {
        return (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            return (0,
            r.__generator)(this, (function(n) {
                return [2, h.fetch(e, t)]
            }
            ))
        }
        ))
    }
      , S = o.C ? x.bind(window) : x
      , O = console.log
      , k = console.warn
      , T = function() {
        return (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            var e, t;
            return (0,
            r.__generator)(this, (function(n) {
                switch (n.label) {
                case 0:
                    return !o.C || w ? [2, {}] : (t = {},
                    e = "device-info",
                    [4, (0,
                    a.sP)()]);
                case 1:
                    return [2, (t[e] = n.sent(),
                    t)]
                }
            }
            ))
        }
        ))
    }
      , C = function() {
        if (!o.C)
            return "";
        var e = s.Q.read("bnc-uuid");
        return e || (e = (0,
        f.v4)(),
        s.Q.writeCookieWithDomainLevel("bnc-uuid", e, 1825, !0)),
        e
    }()
      , R = function() {
        return o.C && (document.location.pathname.split("/").slice(1)[0] || s.Q.read("lang")) || "en"
    }
      , P = function() {
        if (o.C)
            return "";
        try {
            return "{}".CDN_REGION
        } catch (e) {
            return "en"
        }
    }()
      , E = function(e, t) {
        return (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            var n, i, a, c, l, u, p, d, f, m, g;
            return (0,
            r.__generator)(this, (function(y) {
                switch (y.label) {
                case 0:
                    return n = t.omitHeader,
                    i = t.lang,
                    a = t.headers,
                    c = t.req,
                    l = t.credentials,
                    u = t.request,
                    [4, T()];
                case 1:
                    return p = y.sent(),
                    d = n ? {} : (0,
                    r.__assign)({
                        lang: i || R(),
                        "X-UI-REQUEST-TRACE": e,
                        "X-TRACE-ID": e,
                        "BNC-UUID": C,
                        "Content-Type": "application/json"
                    }, p),
                    !n && P && (d = Object.assign(d, {
                        "X-CDN-REGION": P
                    })),
                    n || w || (d = Object.assign(d, {
                        clienttype: "web"
                    })),
                    o.C && !w && (d = Object.assign(d, {
                        "FVIDEO-ID": s.Q.read("BNC_FV_KEY") || ""
                    })),
                    f = function(e) {
                        var t;
                        if (o.C)
                            return {};
                        var n = (null === (t = null === e || void 0 === e ? void 0 : e.headers) || void 0 === t ? void 0 : t.cookie) || null;
                        return n ? {
                            cookie: n
                        } : {}
                    }(c),
                    m = function() {
                        if (o.C)
                            return {};
                        var e = globalThis.ssrHeaders
                          , t = void 0 === e ? {} : e
                          , n = {};
                        return Object.keys(t).forEach((function(e) {
                            ("k8scluster" === e || /x-gateway-gray/i.test(e) || /x-gray-env/i.test(e) && "gray" === t[e]) && (n[e] = t[e])
                        }
                        )),
                        n
                    }(),
                    g = function(e) {
                        var t = "";
                        o.C && (t = window.location.href);
                        try {
                            var n = (0,
                            v.E)();
                            o.C || (t = e ? "https://" + e.headers.host + e.url : n)
                        } catch (r) {}
                        return t
                    }(u || c),
                    [2, {
                        opts: {
                            method: "GET",
                            mode: "cors",
                            headers: (0,
                            r.__assign)((0,
                            r.__assign)((0,
                            r.__assign)((0,
                            r.__assign)({}, d), f), a), m),
                            credentials: l
                        },
                        page: g
                    }]
                }
            }
            ))
        }
        ))
    }
      , _ = function(e) {
        if ("undefined" === typeof window)
            return e;
        var t = s.Q.read("cr00");
        return e.headers = e.headers || {},
        e.headers.csrftoken || (e.headers.csrftoken = p()(t || "")),
        e
    }
      , L = function(e) {
        var t, n, r = b.vc.baseUrl, i = b.vc.accelerateOrigin, a = b.vc.checkAccelerable, s = b.vc.accelerate;
        if (a = s.checkAccelerable || a,
        o.C) {
            var c = s.enbleSites;
            "string" === typeof (i = window._ACCELERATE_ORIGIN || s.defaultOrigin || i) && (i = (n = i) ? /^https?:/.test(n) ? n : "https://" + n : n),
            c && (t = c,
            "[object Array]" === D.call(t)) && !~c.indexOf(window.location.hostname) && (i = "")
        }
        return /^(https?:)?\/\//.test(e) ? e : o.C && !w && i && "string" === typeof i && /^(https?:)?\/\//.test(i) && a && a(e) ? "" + i + e : r ? "" + r + e : o.C ? "" + window.location.origin + e : e
    }
      , A = function(e, t, n, i, a) {
        return (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            var s, c, l, u, p, f, g, y, h, x, T, P, E, _, A, j, I, B, N, q, F, U, z, V, G, Z, H, Q;
            return (0,
            r.__generator)(this, (function(K) {
                switch (K.label) {
                case 0:
                    s = b.vc.debug,
                    c = b.vc.responseInterceptor,
                    l = b.vc.requestInterceptor,
                    u = b.vc.resultInterceptor,
                    p = b.vc.needAuthCheck,
                    f = b.vc.staticUrl,
                    g = Date.now(),
                    K.label = 1;
                case 1:
                    return K.trys.push([1, 10, , 11]),
                    e = L(e),
                    G = l(e, t, a),
                    e = G[0],
                    t = G[1],
                    e.includes("gateway-api"),
                    h = c,
                    [4, S(e, t)];
                case 2:
                    return [4, h.apply(void 0, [K.sent(), a, t])];
                case 3:
                    return y = K.sent(),
                    x = Date.now(),
                    T = x - g,
                    [4, (J = y,
                    (0,
                    r.__awaiter)(void 0, void 0, void 0, (function() {
                        var e, t, n;
                        return (0,
                        r.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                if ((i = J.status) >= 200 && i < 300 || 401 === i)
                                    return [2, J];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]),
                                [4, J.json()];
                            case 2:
                                throw e = r.sent(),
                                (t = new Error(J.statusText || J.status)).errorMsg = e,
                                t;
                            case 3:
                                throw (n = r.sent()).code = J.status,
                                o.C && (n.name = J.status),
                                n;
                            case 4:
                                return [2]
                            }
                            var i
                        }
                        ))
                    }
                    )))];
                case 4:
                    return K.sent(),
                    (P = y._bodyBlob) && ["application/vnd.ms-excel", "application/vnd.ms-pdf", "application/pdf", "application/octet-stream"].some((function(e) {
                        return ("" + P.type).includes(e)
                    }
                    )) ? [2, y.blob()] : [4, y.json()];
                case 5:
                    if (E = K.sent(),
                    !p || "undefined" === typeof window)
                        return [3, 9];
                    if (-1 !== e.indexOf("accounts/v1/public/authcenter/auth") || !["100001005", "100002001", "600000007"].includes(null === E || void 0 === E ? void 0 : E.code))
                        return [3, 9];
                    if (_ = R(),
                    A = {},
                    !sessionStorage.getItem(_ + "basecommontranslate"))
                        return [3, 6];
                    try {
                        A = JSON.parse(sessionStorage.getItem(_ + "basecommontranslate") || "") || {}
                    } catch (Y) {}
                    return [3, 8];
                case 6:
                    return [4, M(f + "/api/i18n/-/web/cms/" + _ + "/infra-common")];
                case 7:
                    j = K.sent(),
                    sessionStorage.setItem(_ + "basecommontranslate", JSON.stringify(j)),
                    A = j,
                    K.label = 8;
                case 8:
                    !function(e, t) {
                        if ("undefined" !== typeof window && !document.querySelector("#svdfnjnojksmodel")) {
                            var n = !(window.innerWidth < 768)
                              , r = document.createElement("div");
                            r.id = "svdfnjnojksmodel",
                            r.style.display = "flex",
                            r.style.justifyContent = "center",
                            r.style.alignItems = "center",
                            r.style.position = "fixed",
                            r.style.top = "0",
                            r.style.left = "0",
                            r.style.width = "100%",
                            r.style.height = "100%",
                            r.style.zIndex = "999999",
                            r.style.backgroundColor = "rgba(0,0,0,0.5)";
                            var i = n ? 360 : 298
                              , o = n ? 60 : 96
                              , a = n ? 500 : 600
                              , s = n ? 16 : 20
                              , c = n ? 24 : 28
                              , l = n ? 36 : 40
                              , u = document.createElement("div");
                            u.style.cssText = "width: " + i + "px;background-color: #fff;border-radius: 5px;display: flex;flex-direction: column;justify-content: center;align-items: center;box-shadow: 0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16);border-radius: 8px;padding: 24px;",
                            u.innerHTML = '\n      <div style="width: ' + o + "px;height: " + o + "px;margin-bottom: 16px;background-size: contain;background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMzYiIHk9IjU0IiB3aWR0aD0iMjQiIGhlaWdodD0iMzAiIGZpbGw9IiM3NjgwOEYiLz4KPHBhdGggZD0iTTY1Ljk5NzYgMjguMDAwN0M2NS45OTc2IDE4LjA1OTcgNTcuOTM4OSAxMC4wMDAyIDQ3Ljk5OCAxMEMzOC4wNTY4IDEwIDI5Ljk5OCAxOC4wNTg5IDI5Ljk5OCAyOEw2NS45OTc2IDI4LjAwMDdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTU5ODFfMTI3NTc2KSIvPgo8cGF0aCBkPSJNMjkuOTk4MyAyOC4wMDAzQzI5Ljk5ODMgMzcuOTQxMyAzOC4wNTY5IDQ2LjAwMDggNDcuOTk3OSA0Ni4wMDFDNTcuOTM5IDQ2LjAwMSA2NS45OTc5IDM3Ljk0MjEgNjUuOTk3OSAyOC4wMDFMMjkuOTk4MyAyOC4wMDAzWiIgZmlsbD0iI0U2RThFQSIvPgo8cGF0aCBkPSJNMzYgNTRIMjhDMTkuMTYzNCA1NCAxMiA2MS4xNjM0IDEyIDcwVjg0SDM2VjU0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE1OTgxXzEyNzU3NikiLz4KPHBhdGggZD0iTTYwIDg0SDg0VjcwQzg0IDYxLjE2MzQgNzYuODM2NiA1NCA2OCA1NEg2MFY4NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xNTk4MV8xMjc1NzYpIi8+CjxwYXRoIGQ9Ik02MCA1NEw2MCA2NEw1MCA1NEw2MCA1NFoiIGZpbGw9IiNFNkU4RUEiLz4KPHBhdGggZD0iTTM2IDU0TDM2IDY0TDQ2IDU0TDM2IDU0WiIgZmlsbD0iI0U2RThFQSIvPgo8cGF0aCBkPSJNNzIgNDhDNjMuNzE1NyA0OCA1NyA1NC43MTU3IDU3IDYzQzU3IDcxLjI4NDMgNjMuNzE1NyA3OCA3MiA3OEM4MC4yODQzIDc4IDg3IDcxLjI4NDMgODcgNjNDODcgNTQuNzE1NyA4MC4yODQzIDQ4IDcyIDQ4WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzE1OTgxXzEyNzU3NikiLz4KPHBhdGggZD0iTTczLjUgNzJINzAuNVY2OUg3My41VjcyWiIgZmlsbD0iIzE0MTUxQSIvPgo8cGF0aCBkPSJNNzAuNSA2NlY1NEg3My41VjY2TDcwLjUgNjZaIiBmaWxsPSIjMTQxNTFBIi8+CjxyZWN0IHg9IjQ2IiB5PSI1NCIgd2lkdGg9IjQiIGhlaWdodD0iMzAiIGZpbGw9IiNFNkU4RUEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNTk4MV8xMjc1NzYiIHgxPSI2NS45OTc2IiB5MT0iMTkuMDAwMyIgeDI9IjI5Ljk5OCIgeTI9IjE5LjAwMDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzkyOUFBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3NjgwOEYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzE1OTgxXzEyNzU3NiIgeDE9IjQ4IiB5MT0iODQiIHgyPSI0OCIgeTI9IjU0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5MjlBQTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY4MDhGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8xNTk4MV8xMjc1NzYiIHgxPSI0OCIgeTE9Ijg0IiB4Mj0iNDgiIHkyPSI1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTI5QUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc2ODA4RiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMTU5ODFfMTI3NTc2IiB4MT0iNTciIHkxPSI2MyIgeDI9Ijg3IiB5Mj0iNjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0YwQjkwQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGOEQzM0EiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K')\"></div>\n      <div style=\"font-size: " + s + "px;line-height: " + c + "px; font-weight: " + a + '; color: #1E2329;margin-bottom: 8px;">' + (t["cm-without-auth-title"] || "Logged Out") + '</div>\n      <div style="font-size: 14px;line-height: 20px; font-weight: 400; color: #707A8A;margin-bottom: 24px;text-align: center;">' + (t["cm-without-auth-content"] || "You have been logged out. You must log in again to continue.") + "</div>\n      <style>\n      .svdfnjnojksmodelbtn:hover{opacity:0.7;}\n      </style>\n  ";
                            var p = document.createElement("div");
                            p.innerHTML = t["cm-without-auth-primary-btn"] || "Log In",
                            p.className = "svdfnjnojksmodelbtn",
                            p.style.cssText = "font-size: 14px;font-weight: 500;cursor: pointer;width: 100%;height: " + l + "px; background: #FCD535; border-radius: 4px; display: flex;justify-content: center;align-items: center;margin-bottom: 12px;";
                            var f = window.location.href;
                            p.onclick = function() {
                                var t = window.location.host.split(".");
                                t.shift(),
                                t.unshift("accounts");
                                var n = t.join(".");
                                window.location.href = "https://" + n + "/" + e + "/login/?return_to=" + (0,
                                d.Ok)(f)
                            }
                            ;
                            var m = document.createElement("div");
                            m.innerHTML = t["cm-without-auth-cancel-btn"] || "Close",
                            m.className = "svdfnjnojksmodelbtn",
                            m.style.cssText = "font-size: 14px;font-weight: 500;cursor: pointer;width: 128px;height: " + l + "px; color: #C99400;display: flex;align-items:center;justify-content: center;",
                            m.onclick = function() {
                                document.body.removeChild(r),
                                window.location.reload()
                            }
                            ,
                            u.appendChild(p),
                            u.appendChild(m),
                            r.appendChild(u),
                            document.body.appendChild(r)
                        }
                    }(_, A),
                    K.label = 9;
                case 9:
                    return v.yI && (0,
                    v.h0)({
                        startTime: g,
                        status: y.status,
                        url: y.url,
                        page: i,
                        uuid: null === (Z = null === t || void 0 === t ? void 0 : t.headers) || void 0 === Z ? void 0 : Z["X-TRACE-ID"],
                        bncUuid: C
                    }),
                    s && O("\n      Request url: " + e + ",\n      params is: " + JSON.stringify(n) + "\n      responseStatus: " + y.status + "\n      duration time is " + T + ",\n      " + (T > 500 ? "more than 500ms, " : "")),
                    W = u,
                    "[object Function]" === D.call(W) ? [2, u(E) || E] : [2, E];
                case 10:
                    throw I = K.sent(),
                    B = b.vc.enableSentry,
                    N = I.status || I.code || (null === (H = I.errorMsg) || void 0 === H ? void 0 : H.status),
                    "undefined" !== typeof Sentry && B && 401 !== N && (q = I.message,
                    I.message = (null === I || void 0 === I ? void 0 : I.defaultErrorMessage) || I.message,
                    F = e.split("?"),
                    U = F[0],
                    z = F[1],
                    V = (t || {}).method,
                    Sentry.captureException(I, {
                        tags: {
                            component: "api",
                            path: U,
                            method: V,
                            status: N,
                            isSSR: "undefined" === typeof window
                        },
                        fingerprint: [V, e, N],
                        level: "error",
                        contexts: {
                            api: {
                                req: {
                                    path: U,
                                    method: V,
                                    querystring: z,
                                    body: t.body
                                },
                                res: (0,
                                r.__assign)((0,
                                r.__assign)({}, I.errorMsg), {
                                    status: N
                                })
                            }
                        }
                    }),
                    I.message = q),
                    o.C && !w && I && "TypeError" === I.name && (0,
                    m.aP)(),
                    v.yI && (0,
                    v.h0)({
                        startTime: g,
                        status: y && y.status,
                        url: e,
                        page: i,
                        error: I,
                        uuid: null === (Q = null === t || void 0 === t ? void 0 : t.headers) || void 0 === Q ? void 0 : Q["X-TRACE-ID"],
                        bncUuid: C
                    }),
                    s && O("\n      BAD REQUEST:\n      Request url: {" + e + "},\n      params is: " + JSON.stringify(n) + ",\n      parse ERROR is " + JSON.stringify(I)),
                    k(I),
                    I;
                case 11:
                    return [2]
                }
                var W, J
            }
            ))
        }
        ))
    }
      , M = function(e, t) {
        return (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            var n, i, o, a;
            return (0,
            r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return t = t || {},
                    n = (0,
                    f.v4)(),
                    [4, E(n, _(t))];
                case 1:
                    return i = r.sent(),
                    o = i.opts,
                    a = i.page,
                    [2, A(e, o, {}, a, t)]
                }
            }
            ))
        }
        ))
    }
      , j = function(e, t, n) {
        return void 0 === n && (n = {}),
        (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            var i, o, a, s;
            return (0,
            r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return i = (0,
                    f.v4)(),
                    [4, E(i, _(n))];
                case 1:
                    return o = r.sent(),
                    a = o.opts,
                    s = o.page,
                    a = Object.assign(a, {
                        method: "POST",
                        body: JSON.stringify(t)
                    }),
                    [2, A(e, a, t, s, n)]
                }
            }
            ))
        }
        ))
    }
      , I = function(e, t, n) {
        return void 0 === n && (n = {}),
        (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            var i, o, a, s;
            return (0,
            r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return i = (0,
                    f.v4)(),
                    [4, E(i, _(n))];
                case 1:
                    return o = r.sent(),
                    a = o.opts,
                    s = o.page,
                    a = Object.assign(a, {
                        method: "PUT",
                        body: JSON.stringify(t)
                    }),
                    [2, A(e, a, t, s, n)]
                }
            }
            ))
        }
        ))
    }
      , B = function(e, t, n) {
        return void 0 === n && (n = {}),
        (0,
        r.__awaiter)(void 0, void 0, void 0, (function() {
            var i, o, a, s;
            return (0,
            r.__generator)(this, (function(r) {
                switch (r.label) {
                case 0:
                    return i = (0,
                    f.v4)(),
                    [4, E(i, _(n))];
                case 1:
                    return o = r.sent(),
                    a = o.opts,
                    s = o.page,
                    n.headers && n.headers["Content-Type"] || delete a.headers["Content-Type"],
                    a = Object.assign(a, {
                        method: "POST",
                        body: t
                    }),
                    [2, A(e, a, t, s, n)]
                }
            }
            ))
        }
        ))
    }
      , N = l()
      , D = Object.prototype.toString
}