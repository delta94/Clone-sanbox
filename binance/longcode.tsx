oTKh: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>z
        });
        var r = n("4wDe")
          , i = n("zjfJ");
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                r.forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                ))
            }
            return e
        }
        var a = n("9fIP")
          , s = n("MMYH")
          , c = n("K/z8")
          , l = n("sRHE")
          , u = n("pWxA")
          , p = n("8K1b")
          , d = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        }
          , f = new (function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                a.Z)(this, e),
                this.init(t, n)
            }
            return (0,
            s.Z)(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:",
                    this.logger = e || d,
                    this.options = t,
                    this.debug = t.debug
                }
            }, {
                key: "setDebug",
                value: function(e) {
                    this.debug = e
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(e, t, n, r) {
                    return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                    this.logger[t](e))
                }
            }, {
                key: "create",
                value: function(t) {
                    return new e(this.logger,o({}, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }, this.options))
                }
            }]),
            e
        }())
          , m = function() {
            function e() {
                (0,
                a.Z)(this, e),
                this.observers = {}
            }
            return (0,
            s.Z)(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return e.split(" ").forEach((function(e) {
                        n.observers[e] = n.observers[e] || [],
                        n.observers[e].push(t)
                    }
                    )),
                    this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                        return e !== t
                    }
                    )) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (this.observers[e]) {
                        var i = [].concat(this.observers[e]);
                        i.forEach((function(e) {
                            e.apply(void 0, n)
                        }
                        ))
                    }
                    if (this.observers["*"]) {
                        var o = [].concat(this.observers["*"]);
                        o.forEach((function(t) {
                            t.apply(t, [e].concat(n))
                        }
                        ))
                    }
                }
            }]),
            e
        }();
        function g() {
            var e, t, n = new Promise((function(n, r) {
                e = n,
                t = r
            }
            ));
            return n.resolve = e,
            n.reject = t,
            n
        }
        function y(e) {
            return null == e ? "" : "" + e
        }
        function h(e, t, n) {
            e.forEach((function(e) {
                t[e] && (n[e] = t[e])
            }
            ))
        }
        function b(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            function i() {
                return !e || "string" === typeof e
            }
            for (var o = "string" !== typeof t ? [].concat(t) : t.split("."); o.length > 1; ) {
                if (i())
                    return {};
                var a = r(o.shift());
                !e[a] && n && (e[a] = new n),
                e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
            }
            return i() ? {} : {
                obj: e,
                k: r(o.shift())
            }
        }
        function v(e, t, n) {
            var r = b(e, t, Object);
            r.obj[r.k] = n
        }
        function w(e, t) {
            var n = b(e, t)
              , r = n.obj
              , i = n.k;
            if (r)
                return r[i]
        }
        function x(e, t, n) {
            var r = w(e, n);
            return void 0 !== r ? r : w(t, n)
        }
        function S(e, t, n) {
            for (var r in t)
                "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r]instanceof String || "string" === typeof t[r] || t[r]instanceof String ? n && (e[r] = t[r]) : S(e[r], t[r], n) : e[r] = t[r]);
            return e
        }
        function O(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var k = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function T(e) {
            return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                return k[e]
            }
            )) : e
        }
        var C = "undefined" !== typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
          , R = function(e) {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return (0,
                a.Z)(this, t),
                n = (0,
                c.Z)(this, (0,
                l.Z)(t).call(this)),
                C && m.call((0,
                u.Z)(n)),
                n.data = e || {},
                n.options = r,
                void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                n
            }
            return (0,
            p.Z)(t, e),
            (0,
            s.Z)(t, [{
                key: "addNamespaces",
                value: function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces",
                value: function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                      , o = [e, t];
                    return n && "string" !== typeof n && (o = o.concat(n)),
                    n && "string" === typeof n && (o = o.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 && (o = e.split(".")),
                    w(this.data, o)
                }
            }, {
                key: "addResource",
                value: function(e, t, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    }
                      , o = this.options.keySeparator;
                    void 0 === o && (o = ".");
                    var a = [e, t];
                    n && (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (r = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t),
                    v(this.data, a, r),
                    i.silent || this.emit("added", e, t, n, r)
                }
            }, {
                key: "addResources",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (var i in n)
                        "string" !== typeof n[i] && "[object Array]" !== Object.prototype.toString.apply(n[i]) || this.addResource(e, t, i, n[i], {
                            silent: !0
                        });
                    r.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle",
                value: function(e, t, n, r, i) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }
                      , s = [e, t];
                    e.indexOf(".") > -1 && (r = n,
                    n = t,
                    t = (s = e.split("."))[1]),
                    this.addNamespaces(t);
                    var c = w(this.data, s) || {};
                    r ? S(c, n, i) : c = o({}, c, n),
                    v(this.data, s, c),
                    a.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "removeResourceBundle",
                value: function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle",
                value: function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle",
                value: function(e, t) {
                    return t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI ? o({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage",
                value: function(e) {
                    return this.data[e]
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]),
            t
        }(m)
          , P = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, r, i) {
                var o = this;
                return e.forEach((function(e) {
                    o.processors[e] && (t = o.processors[e].process(t, n, r, i))
                }
                )),
                t
            }
        }
          , E = {}
          , _ = function(e) {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0,
                a.Z)(this, t),
                n = (0,
                c.Z)(this, (0,
                l.Z)(t).call(this)),
                C && m.call((0,
                u.Z)(n)),
                h(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, (0,
                u.Z)(n)),
                n.options = r,
                void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                n.logger = f.create("translator"),
                n
            }
            return (0,
            p.Z)(t, e),
            (0,
            s.Z)(t, [{
                key: "changeLanguage",
                value: function(e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }
                      , n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey",
                value: function(e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , i = t.ns || this.options.defaultNS;
                    if (n && e.indexOf(n) > -1) {
                        var o = e.match(this.interpolator.nestingRegexp);
                        if (o && o.length > 0)
                            return {
                                key: e,
                                namespaces: i
                            };
                        var a = e.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(a[0]) > -1) && (i = a.shift()),
                        e = a.join(r)
                    }
                    return "string" === typeof i && (i = [i]),
                    {
                        key: e,
                        namespaces: i
                    }
                }
            }, {
                key: "translate",
                value: function(e, t, n) {
                    var i = this;
                    if ("object" !== (0,
                    r.Z)(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                    t || (t = {}),
                    void 0 === e || null === e)
                        return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , s = this.extractFromKey(e[e.length - 1], t)
                      , c = s.key
                      , l = s.namespaces
                      , u = l[l.length - 1]
                      , p = t.lng || this.language
                      , d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (p && "cimode" === p.toLowerCase()) {
                        if (d) {
                            var f = t.nsSeparator || this.options.nsSeparator;
                            return u + f + c
                        }
                        return c
                    }
                    var m = this.resolve(e, t)
                      , g = m && m.res
                      , y = m && m.usedKey || c
                      , h = m && m.exactUsedKey || c
                      , b = Object.prototype.toString.apply(g)
                      , v = ["[object Number]", "[object Function]", "[object RegExp]"]
                      , w = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                      , x = !this.i18nFormat || this.i18nFormat.handleAsObject
                      , S = "string" !== typeof g && "boolean" !== typeof g && "number" !== typeof g;
                    if (x && g && S && v.indexOf(b) < 0 && ("string" !== typeof w || "[object Array]" !== b)) {
                        if (!t.returnObjects && !this.options.returnObjects)
                            return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                            this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, g, t) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                        if (a) {
                            var O = "[object Array]" === b
                              , k = O ? [] : {}
                              , T = O ? h : y;
                            for (var C in g)
                                if (Object.prototype.hasOwnProperty.call(g, C)) {
                                    var R = "".concat(T).concat(a).concat(C);
                                    k[C] = this.translate(R, o({}, t, {
                                        joinArrays: !1,
                                        ns: l
                                    })),
                                    k[C] === R && (k[C] = g[C])
                                }
                            g = k
                        }
                    } else if (x && "string" === typeof w && "[object Array]" === b)
                        (g = g.join(w)) && (g = this.extendTranslation(g, e, t, n));
                    else {
                        var P = !1
                          , E = !1;
                        if (!this.isValidLookup(g) && void 0 !== t.defaultValue) {
                            if (P = !0,
                            void 0 !== t.count) {
                                var _ = this.pluralResolver.getSuffix(p, t.count);
                                g = t["defaultValue".concat(_)]
                            }
                            g || (g = t.defaultValue)
                        }
                        this.isValidLookup(g) || (E = !0,
                        g = c);
                        var L = t.defaultValue && t.defaultValue !== g && this.options.updateMissing;
                        if (E || P || L) {
                            if (this.logger.log(L ? "updateKey" : "missingKey", p, u, c, L ? t.defaultValue : g),
                            a) {
                                var A = this.resolve(c, o({}, t, {
                                    keySeparator: !1
                                }));
                                A && A.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var M = []
                              , j = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && j && j[0])
                                for (var I = 0; I < j.length; I++)
                                    M.push(j[I]);
                            else
                                "all" === this.options.saveMissingTo ? M = this.languageUtils.toResolveHierarchy(t.lng || this.language) : M.push(t.lng || this.language);
                            var B = function(e, n) {
                                i.options.missingKeyHandler ? i.options.missingKeyHandler(e, u, n, L ? t.defaultValue : g, L, t) : i.backendConnector && i.backendConnector.saveMissing && i.backendConnector.saveMissing(e, u, n, L ? t.defaultValue : g, L, t),
                                i.emit("missingKey", e, u, n, g)
                            };
                            if (this.options.saveMissing) {
                                var N = void 0 !== t.count && "string" !== typeof t.count;
                                this.options.saveMissingPlurals && N ? M.forEach((function(e) {
                                    i.pluralResolver.getPluralFormsOfKey(e, c).forEach((function(t) {
                                        return B([e], t)
                                    }
                                    ))
                                }
                                )) : B(M, c)
                            }
                        }
                        g = this.extendTranslation(g, e, t, m, n),
                        E && g === c && this.options.appendNamespaceToMissingKey && (g = "".concat(u, ":").concat(c)),
                        E && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(g))
                    }
                    return g
                }
            }, {
                key: "extendTranslation",
                value: function(e, t, n, r, i) {
                    var a = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                        e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
                            resolved: r
                        });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init(o({}, n, {
                            interpolation: o({}, this.options.interpolation, n.interpolation)
                        }));
                        var s, c = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                        if (c) {
                            var l = e.match(this.interpolator.nestingRegexp);
                            s = l && l.length
                        }
                        var u = n.replace && "string" !== typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (u = o({}, this.options.interpolation.defaultVariables, u)),
                        e = this.interpolator.interpolate(e, u, n.lng || this.language, n),
                        c) {
                            var p = e.match(this.interpolator.nestingRegexp);
                            s < (p && p.length) && (n.nest = !1)
                        }
                        !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                                r[o] = arguments[o];
                            return i && i[0] === r[0] && !n.context ? (a.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])),
                            null) : a.translate.apply(a, r.concat([t]))
                        }
                        ), n)),
                        n.interpolation && this.interpolator.reset()
                    }
                    var d = n.postProcess || this.options.postProcess
                      , f = "string" === typeof d ? [d] : d;
                    return void 0 !== e && null !== e && f && f.length && !1 !== n.applyPostProcessor && (e = P.handle(f, e, t, this.options && this.options.postProcessPassResolved ? o({
                        i18nResolved: r
                    }, n) : n, this)),
                    e
                }
            }, {
                key: "resolve",
                value: function(e) {
                    var t, n, r, i, o, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        if (!a.isValidLookup(t)) {
                            var c = a.extractFromKey(e, s)
                              , l = c.key;
                            n = l;
                            var u = c.namespaces;
                            a.options.fallbackNS && (u = u.concat(a.options.fallbackNS));
                            var p = void 0 !== s.count && "string" !== typeof s.count
                              , d = void 0 !== s.context && "string" === typeof s.context && "" !== s.context
                              , f = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                            u.forEach((function(e) {
                                a.isValidLookup(t) || (o = e,
                                !E["".concat(f[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(o) && (E["".concat(f[0], "-").concat(e)] = !0,
                                a.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(o, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                                f.forEach((function(n) {
                                    if (!a.isValidLookup(t)) {
                                        i = n;
                                        var o, c, u = l, f = [u];
                                        if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                            a.i18nFormat.addLookupKeys(f, l, n, e, s);
                                        else
                                            p && (o = a.pluralResolver.getSuffix(n, s.count)),
                                            p && d && f.push(u + o),
                                            d && f.push(u += "".concat(a.options.contextSeparator).concat(s.context)),
                                            p && f.push(u += o);
                                        for (; c = f.pop(); )
                                            a.isValidLookup(t) || (r = c,
                                            t = a.getResource(n, e, c, s))
                                    }
                                }
                                )))
                            }
                            ))
                        }
                    }
                    )),
                    {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: i,
                        usedNS: o
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
            }]),
            t
        }(m);
        function L(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var A = function() {
            function e(t) {
                (0,
                a.Z)(this, e),
                this.options = t,
                this.whitelist = this.options.supportedLngs || !1,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = f.create("languageUtils")
            }
            return (0,
            s.Z)(e, [{
                key: "getScriptPartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(),
                    "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(e) {
                    if ("string" === typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                          , n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                        n[1] = n[1].toUpperCase(),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = L(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = L(n[2].toLowerCase()))),
                        n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isWhitelisted",
                value: function(e) {
                    return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),
                    this.isSupportedCode(e)
                }
            }, {
                key: "isSupportedCode",
                value: function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(e) {
                    var t, n = this;
                    return e ? (e.forEach((function(e) {
                        if (!t) {
                            var r = n.formatLanguageCode(e);
                            n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                        }
                    }
                    )),
                    !t && this.options.supportedLngs && e.forEach((function(e) {
                        if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r))
                                return t = r;
                            t = n.options.supportedLngs.find((function(e) {
                                if (0 === e.indexOf(r))
                                    return e
                            }
                            ))
                        }
                    }
                    )),
                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t) : null
                }
            }, {
                key: "getFallbackCodes",
                value: function(e, t) {
                    if (!e)
                        return [];
                    if ("function" === typeof e && (e = e(t)),
                    "string" === typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                        return e;
                    if (!t)
                        return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(e, t) {
                    var n = this
                      , r = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                      , i = []
                      , o = function(e) {
                        e && (n.isSupportedCode(e) ? i.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                    };
                    return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" === typeof e && o(this.formatLanguageCode(e)),
                    r.forEach((function(e) {
                        i.indexOf(e) < 0 && o(n.formatLanguageCode(e))
                    }
                    )),
                    i
                }
            }]),
            e
        }()
          , M = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , j = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        };
        function I() {
            var e = {};
            return M.forEach((function(t) {
                t.lngs.forEach((function(n) {
                    e[n] = {
                        numbers: t.nr,
                        plurals: j[t.fc]
                    }
                }
                ))
            }
            )),
            e
        }
        var B = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                a.Z)(this, e),
                this.languageUtils = t,
                this.options = n,
                this.logger = f.create("pluralResolver"),
                this.rules = I()
            }
            return (0,
            s.Z)(e, [{
                key: "addRule",
                value: function(e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule",
                value: function(e) {
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural",
                value: function(e) {
                    var t = this.getRule(e);
                    return t && t.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey",
                value: function(e, t) {
                    var n = this
                      , r = []
                      , i = this.getRule(e);
                    return i ? (i.numbers.forEach((function(i) {
                        var o = n.getSuffix(e, i);
                        r.push("".concat(t).concat(o))
                    }
                    )),
                    r) : r
                }
            }, {
                key: "getSuffix",
                value: function(e, t) {
                    var n = this
                      , r = this.getRule(e);
                    if (r) {
                        var i = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t))
                          , o = r.numbers[i];
                        this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                        var a = function() {
                            return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                        };
                        return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" === typeof o ? "_plural_".concat(o.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
                    }
                    return this.logger.warn("no plural rule found for: ".concat(e)),
                    ""
                }
            }]),
            e
        }()
          , N = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                a.Z)(this, e),
                this.logger = f.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || function(e) {
                    return e
                }
                ,
                this.init(t)
            }
            return (0,
            s.Z)(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : T,
                    this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                    this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                    this.prefix = t.prefix ? O(t.prefix) : t.prefixEscaped || "{{",
                    this.suffix = t.suffix ? O(t.suffix) : t.suffixEscaped || "}}",
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                    this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                    this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                    this.nestingPrefix = t.nestingPrefix ? O(t.nestingPrefix) : t.nestingPrefixEscaped || O("$t("),
                    this.nestingSuffix = t.nestingSuffix ? O(t.nestingSuffix) : t.nestingSuffixEscaped || O(")"),
                    this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                    this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                    this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                    this.resetRegExp()
                }
            }, {
                key: "reset",
                value: function() {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp",
                value: function() {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e,"g");
                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(t,"g");
                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(n,"g")
                }
            }, {
                key: "interpolate",
                value: function(e, t, n, r) {
                    var i, o, a, s = this, c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                    function l(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    var u = function(e) {
                        if (e.indexOf(s.formatSeparator) < 0) {
                            var i = x(t, c, e);
                            return s.alwaysFormat ? s.format(i, void 0, n) : i
                        }
                        var o = e.split(s.formatSeparator)
                          , a = o.shift().trim()
                          , l = o.join(s.formatSeparator).trim();
                        return s.format(x(t, c, a), l, n, r)
                    };
                    this.resetRegExp();
                    var p = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                      , d = r && r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: function(e) {
                            return l(e)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(e) {
                            return s.escapeValue ? l(s.escape(e)) : l(e)
                        }
                    }].forEach((function(t) {
                        for (a = 0; i = t.regex.exec(e); ) {
                            if (void 0 === (o = u(i[1].trim())))
                                if ("function" === typeof p) {
                                    var n = p(e, i, r);
                                    o = "string" === typeof n ? n : ""
                                } else {
                                    if (d) {
                                        o = i[0];
                                        continue
                                    }
                                    s.logger.warn("missed to pass in variable ".concat(i[1], " for interpolating ").concat(e)),
                                    o = ""
                                }
                            else
                                "string" === typeof o || s.useRawValueToEscape || (o = y(o));
                            if (e = e.replace(i[0], t.safeValue(o)),
                            t.regex.lastIndex = 0,
                            ++a >= s.maxReplaces)
                                break
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "nest",
                value: function(e, t) {
                    var n, r, i = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = o({}, a);
                    function c(e, t) {
                        var n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0)
                            return e;
                        var r = e.split(new RegExp("".concat(n, "[ ]*{")))
                          , i = "{".concat(r[1]);
                        e = r[0],
                        i = (i = this.interpolate(i, s)).replace(/'/g, '"');
                        try {
                            s = JSON.parse(i),
                            t && (s = o({}, t, s))
                        } catch (a) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), a),
                            "".concat(e).concat(n).concat(i)
                        }
                        return delete s.defaultValue,
                        e
                    }
                    for (s.applyPostProcessor = !1,
                    delete s.defaultValue; n = this.nestingRegexp.exec(e); ) {
                        var l = []
                          , u = !1;
                        if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            var p = n[1].split(this.formatSeparator).map((function(e) {
                                return e.trim()
                            }
                            ));
                            n[1] = p.shift(),
                            l = p,
                            u = !0
                        }
                        if ((r = t(c.call(this, n[1].trim(), s), s)) && n[0] === e && "string" !== typeof r)
                            return r;
                        "string" !== typeof r && (r = y(r)),
                        r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                        r = ""),
                        u && (r = l.reduce((function(e, t) {
                            return i.format(e, t, a.lng, a)
                        }
                        ), r.trim())),
                        e = e.replace(n[0], r),
                        this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]),
            e
        }();
        var D = function(e) {
            function t(e, n, r) {
                var i, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return (0,
                a.Z)(this, t),
                i = (0,
                c.Z)(this, (0,
                l.Z)(t).call(this)),
                C && m.call((0,
                u.Z)(i)),
                i.backend = e,
                i.store = n,
                i.services = r,
                i.languageUtils = r.languageUtils,
                i.options = o,
                i.logger = f.create("backendConnector"),
                i.state = {},
                i.queue = [],
                i.backend && i.backend.init && i.backend.init(r, o.backend, o),
                i
            }
            return (0,
            p.Z)(t, e),
            (0,
            s.Z)(t, [{
                key: "queueLoad",
                value: function(e, t, n, r) {
                    var i = this
                      , o = []
                      , a = []
                      , s = []
                      , c = [];
                    return e.forEach((function(e) {
                        var r = !0;
                        t.forEach((function(t) {
                            var s = "".concat(e, "|").concat(t);
                            !n.reload && i.store.hasResourceBundle(e, t) ? i.state[s] = 2 : i.state[s] < 0 || (1 === i.state[s] ? a.indexOf(s) < 0 && a.push(s) : (i.state[s] = 1,
                            r = !1,
                            a.indexOf(s) < 0 && a.push(s),
                            o.indexOf(s) < 0 && o.push(s),
                            c.indexOf(t) < 0 && c.push(t)))
                        }
                        )),
                        r || s.push(e)
                    }
                    )),
                    (o.length || a.length) && this.queue.push({
                        pending: a,
                        loaded: {},
                        errors: [],
                        callback: r
                    }),
                    {
                        toLoad: o,
                        pending: a,
                        toLoadLanguages: s,
                        toLoadNamespaces: c
                    }
                }
            }, {
                key: "loaded",
                value: function(e, t, n) {
                    var r = e.split("|")
                      , i = r[0]
                      , o = r[1];
                    t && this.emit("failedLoading", i, o, t),
                    n && this.store.addResourceBundle(i, o, n),
                    this.state[e] = t ? -1 : 2;
                    var a = {};
                    this.queue.forEach((function(n) {
                        !function(e, t, n, r) {
                            var i = b(e, t, Object)
                              , o = i.obj
                              , a = i.k;
                            o[a] = o[a] || [],
                            r && (o[a] = o[a].concat(n)),
                            r || o[a].push(n)
                        }(n.loaded, [i], o),
                        function(e, t) {
                            for (var n = e.indexOf(t); -1 !== n; )
                                e.splice(n, 1),
                                n = e.indexOf(t)
                        }(n.pending, e),
                        t && n.errors.push(t),
                        0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
                            a[e] || (a[e] = []),
                            n.loaded[e].length && n.loaded[e].forEach((function(t) {
                                a[e].indexOf(t) < 0 && a[e].push(t)
                            }
                            ))
                        }
                        )),
                        n.done = !0,
                        n.errors.length ? n.callback(n.errors) : n.callback())
                    }
                    )),
                    this.emit("loaded", a),
                    this.queue = this.queue.filter((function(e) {
                        return !e.done
                    }
                    ))
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var r = this
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350
                      , a = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.backend[n](e, t, (function(s, c) {
                        s && c && i < 5 ? setTimeout((function() {
                            r.read.call(r, e, t, n, i + 1, 2 * o, a)
                        }
                        ), o) : a(s, c)
                    }
                    )) : a(null, {})
                }
            }, {
                key: "prepareLoading",
                value: function(e, t) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , i = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend)
                        return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                        i && i();
                    "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" === typeof t && (t = [t]);
                    var o = this.queueLoad(e, t, r, i);
                    if (!o.toLoad.length)
                        return o.pending.length || i(),
                        null;
                    o.toLoad.forEach((function(e) {
                        n.loadOne(e)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
            }, {
                key: "reload",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , r = e.split("|")
                      , i = r[0]
                      , o = r[1];
                    this.read(i, o, "read", void 0, void 0, (function(r, a) {
                        r && t.logger.warn("".concat(n, "loading namespace ").concat(o, " for language ").concat(i, " failed"), r),
                        !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(o, " for language ").concat(i), a),
                        t.loaded(e, r, a)
                    }
                    ))
                }
            }, {
                key: "saveMissing",
                value: function(e, t, n, r, i) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== n && null !== n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, o({}, a, {
                        isUpdate: i
                    })),
                    e && e[0] && this.store.addResource(e[0], t, n, r))
                }
            }]),
            t
        }(m);
        function q() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                whitelist: !1,
                nonExplicitWhitelist: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(e) {
                    var t = {};
                    if ("object" === (0,
                    r.Z)(e[1]) && (t = e[1]),
                    "string" === typeof e[1] && (t.defaultValue = e[1]),
                    "string" === typeof e[2] && (t.tDescription = e[2]),
                    "object" === (0,
                    r.Z)(e[2]) || "object" === (0,
                    r.Z)(e[3])) {
                        var n = e[3] || e[2];
                        Object.keys(n).forEach((function(e) {
                            t[e] = n[e]
                        }
                        ))
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: function(e, t, n, r) {
                        return e
                    },
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !1
                }
            }
        }
        function F(e) {
            return "string" === typeof e.ns && (e.ns = [e.ns]),
            "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])),
            e.supportedLngs = e.whitelist),
            e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
            e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        }
        function U() {}
        const z = new (function(e) {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
                if ((0,
                a.Z)(this, t),
                e = (0,
                c.Z)(this, (0,
                l.Z)(t).call(this)),
                C && m.call((0,
                u.Z)(e)),
                e.options = F(n),
                e.services = {},
                e.logger = f,
                e.modules = {
                    external: []
                },
                r && !e.isInitialized && !n.isClone) {
                    if (!e.options.initImmediate)
                        return e.init(n, r),
                        (0,
                        c.Z)(e, (0,
                        u.Z)(e));
                    setTimeout((function() {
                        e.init(n, r)
                    }
                    ), 0)
                }
                return e
            }
            return (0,
            p.Z)(t, e),
            (0,
            s.Z)(t, [{
                key: "init",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    function r(e) {
                        return e ? "function" === typeof e ? new e : e : null
                    }
                    if ("function" === typeof t && (n = t,
                    t = {}),
                    t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),
                    t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),
                    this.options = o({}, q(), this.options, F(t)),
                    this.format = this.options.interpolation.format,
                    n || (n = U),
                    !this.options.isClone) {
                        this.modules.logger ? f.init(r(this.modules.logger), this.options) : f.init(null, this.options);
                        var i = new A(this.options);
                        this.store = new R(this.options.resources,this.options);
                        var a = this.services;
                        a.logger = f,
                        a.resourceStore = this.store,
                        a.languageUtils = i,
                        a.pluralResolver = new B(i,{
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }),
                        a.interpolator = new N(this.options),
                        a.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        },
                        a.backendConnector = new D(r(this.modules.backend),a.resourceStore,a,this.options),
                        a.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                                r[i - 1] = arguments[i];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector),
                        a.languageDetector.init(a, this.options.detection, this.options)),
                        this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat),
                        a.i18nFormat.init && a.i18nFormat.init(this)),
                        this.translator = new _(this.services,this.options),
                        this.translator.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                                r[i - 1] = arguments[i];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.external.forEach((function(t) {
                            t.init && t.init(e)
                        }
                        ))
                    }
                    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                    var c = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                    c.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments)
                        }
                    }
                    ));
                    var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                    l.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments),
                            e
                        }
                    }
                    ));
                    var u = g()
                      , p = function() {
                        e.changeLanguage(e.options.lng, (function(t, r) {
                            e.isInitialized = !0,
                            e.options.isClone || e.logger.log("initialized", e.options),
                            e.emit("initialized", e.options),
                            u.resolve(r),
                            n(t, r)
                        }
                        ))
                    };
                    return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0),
                    u
                }
            }, {
                key: "loadResources",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U
                      , r = n
                      , i = "string" === typeof e ? e : this.language;
                    if ("function" === typeof e && (r = e),
                    !this.options.resources || this.options.partialBundledLanguages) {
                        if (i && "cimode" === i.toLowerCase())
                            return r();
                        var o = []
                          , a = function(e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                o.indexOf(e) < 0 && o.push(e)
                            }
                            ))
                        };
                        if (i)
                            a(i);
                        else {
                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            s.forEach((function(e) {
                                return a(e)
                            }
                            ))
                        }
                        this.options.preload && this.options.preload.forEach((function(e) {
                            return a(e)
                        }
                        )),
                        this.services.backendConnector.load(o, this.options.ns, r)
                    } else
                        r(null)
                }
            }, {
                key: "reloadResources",
                value: function(e, t, n) {
                    var r = g();
                    return e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = U),
                    this.services.backendConnector.reload(e, t, (function(e) {
                        r.resolve(),
                        n(e)
                    }
                    )),
                    r
                }
            }, {
                key: "use",
                value: function(e) {
                    if (!e)
                        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type)
                        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && P.addPostProcessor(e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                }
            }, {
                key: "changeLanguage",
                value: function(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    var r = g();
                    this.emit("languageChanging", e);
                    var i = function(e) {
                        var i = "string" === typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                        i && (n.language || (n.language = i,
                        n.languages = n.services.languageUtils.toResolveHierarchy(i)),
                        n.translator.language || n.translator.changeLanguage(i),
                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(i)),
                        n.loadResources(i, (function(e) {
                            !function(e, i) {
                                i ? (n.language = i,
                                n.languages = n.services.languageUtils.toResolveHierarchy(i),
                                n.translator.changeLanguage(i),
                                n.isLanguageChangingTo = void 0,
                                n.emit("languageChanged", i),
                                n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0,
                                r.resolve((function() {
                                    return n.t.apply(n, arguments)
                                }
                                )),
                                t && t(e, (function() {
                                    return n.t.apply(n, arguments)
                                }
                                ))
                            }(e, i)
                        }
                        ))
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()),
                    r
                }
            }, {
                key: "getFixedT",
                value: function(e, t) {
                    var n = this
                      , i = function e(t, i) {
                        var a;
                        if ("object" !== (0,
                        r.Z)(i)) {
                            for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++)
                                c[l - 2] = arguments[l];
                            a = n.options.overloadTranslationOptionHandler([t, i].concat(c))
                        } else
                            a = o({}, i);
                        return a.lng = a.lng || e.lng,
                        a.lngs = a.lngs || e.lngs,
                        a.ns = a.ns || e.ns,
                        n.t(t, a)
                    };
                    return "string" === typeof e ? i.lng = e : i.lngs = e,
                    i.ns = t,
                    i
                }
            }, {
                key: "t",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function(e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized)
                        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                        !1;
                    if (!this.languages || !this.languages.length)
                        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                        !1;
                    var r = this.languages[0]
                      , i = !!this.options && this.options.fallbackLng
                      , o = this.languages[this.languages.length - 1];
                    if ("cimode" === r.toLowerCase())
                        return !0;
                    var a = function(e, n) {
                        var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                        return -1 === r || 2 === r
                    };
                    if (n.precheck) {
                        var s = n.precheck(this, a);
                        if (void 0 !== s)
                            return s
                    }
                    return !!this.hasResourceBundle(r, e) || (!this.services.backendConnector.backend || !(!a(r, e) || i && !a(o, e)))
                }
            }, {
                key: "loadNamespaces",
                value: function(e, t) {
                    var n = this
                      , r = g();
                    return this.options.ns ? ("string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }
                    )),
                    this.loadResources((function(e) {
                        r.resolve(),
                        t && t(e)
                    }
                    )),
                    r) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function(e, t) {
                    var n = g();
                    "string" === typeof e && (e = [e]);
                    var r = this.options.preload || []
                      , i = e.filter((function(e) {
                        return r.indexOf(e) < 0
                    }
                    ));
                    return i.length ? (this.options.preload = r.concat(i),
                    this.loadResources((function(e) {
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "dir",
                value: function(e) {
                    if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
                    !e)
                        return "rtl";
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
                }
            }, {
                key: "createInstance",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    return new t(e,n)
                }
            }, {
                key: "cloneInstance",
                value: function() {
                    var e = this
                      , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U
                      , i = o({}, this.options, n, {
                        isClone: !0
                    })
                      , a = new t(i)
                      , s = ["store", "services", "language"];
                    return s.forEach((function(t) {
                        a[t] = e[t]
                    }
                    )),
                    a.services = o({}, this.services),
                    a.services.utils = {
                        hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                    },
                    a.translator = new _(a.services,a.options),
                    a.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        a.emit.apply(a, [e].concat(n))
                    }
                    )),
                    a.init(i, r),
                    a.translator.options = a.options,
                    a.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                    },
                    a
                }
            }]),
            t
        }(m))
    }