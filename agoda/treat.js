74974: function(e, t, n) {
    var r, i, a, o, l, s, c, u, d, m, p, f, y, g, h, v, b, w, C, x, S, k, M, N;
    self,
    e.exports = (r = n(67294), // React
    i = n(90993),
    a = n(35781),
    o = n(12788),
    l = n(38937),
    s = n(7098),
    c = n(18633),
    u = n(3208),
    d = n(8575),
    m = n(48759),
    p = n(16829),
    f = n(24955),
    y = n(15112),
    g = n(51347),
    h = n(88615),
    v = n(47007),
    b = n(90765),
    w = n(4755),
    C = n(6829),
    x = n(64521),
    S = n(63959),
    k = n(44145),
    M = n(18609),
    N = n(30889),
    function() {
        "use strict";
        var e = {
            5422: function(e, t, n) {
                var r = n(2);
                t.Re = {
                    eur: {
                        display: "€",
                        type: r.CurrencyType.symbol
                    },
                    gbp: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    hkd: {
                        display: "HKD",
                        type: r.CurrencyType.code
                    },
                    myr: {
                        display: "RM",
                        type: r.CurrencyType.symbol
                    },
                    sgd: {
                        display: "SGD",
                        type: r.CurrencyType.code
                    },
                    thb: {
                        display: "฿",
                        type: r.CurrencyType.symbol
                    },
                    usd: {
                        display: "USD",
                        type: r.CurrencyType.code
                    },
                    nzd: {
                        display: "NZD",
                        type: r.CurrencyType.code
                    },
                    aud: {
                        display: "AUD",
                        type: r.CurrencyType.code
                    },
                    jpy: {
                        display: "¥",
                        type: r.CurrencyType.symbol
                    },
                    zar: {
                        display: "R",
                        type: r.CurrencyType.symbol
                    },
                    cad: {
                        display: "CAD",
                        type: r.CurrencyType.code
                    },
                    aed: {
                        display: "AED",
                        type: r.CurrencyType.code
                    },
                    rmb: {
                        display: "RMB",
                        type: r.CurrencyType.code
                    },
                    php: {
                        display: "₱",
                        type: r.CurrencyType.symbol
                    },
                    chf: {
                        display: "CHF",
                        type: r.CurrencyType.code
                    },
                    dkk: {
                        display: "DKK",
                        type: r.CurrencyType.code
                    },
                    sek: {
                        display: "SEK",
                        type: r.CurrencyType.code
                    },
                    czk: {
                        display: "Kč",
                        type: r.CurrencyType.symbol
                    },
                    pln: {
                        display: "zł",
                        type: r.CurrencyType.symbol
                    },
                    brl: {
                        display: "R$",
                        type: r.CurrencyType.symbol
                    },
                    idr: {
                        display: "Rp",
                        type: r.CurrencyType.symbol
                    },
                    krw: {
                        display: "₩",
                        type: r.CurrencyType.symbol
                    },
                    inr: {
                        display: "Rs.",
                        type: r.CurrencyType.symbol
                    },
                    twd: {
                        display: "NT$",
                        type: r.CurrencyType.symbol
                    },
                    nok: {
                        display: "NOK",
                        type: r.CurrencyType.code
                    },
                    omr: {
                        display: "OMR",
                        type: r.CurrencyType.code
                    },
                    fjd: {
                        display: "FJ$",
                        type: r.CurrencyType.symbol
                    },
                    bhd: {
                        display: "BHD",
                        type: r.CurrencyType.code
                    },
                    ars: {
                        display: "AR$",
                        type: r.CurrencyType.symbol
                    },
                    bgn: {
                        display: "лв",
                        type: r.CurrencyType.symbol
                    },
                    xpf: {
                        display: "XPF",
                        type: r.CurrencyType.code
                    },
                    vnd: {
                        display: "₫",
                        type: r.CurrencyType.symbol
                    },
                    egp: {
                        display: "EGP",
                        type: r.CurrencyType.code
                    },
                    huf: {
                        display: "Ft",
                        type: r.CurrencyType.symbol
                    },
                    uah: {
                        display: "грн",
                        type: r.CurrencyType.symbol
                    },
                    jod: {
                        display: "JOD",
                        type: r.CurrencyType.code
                    },
                    lak: {
                        display: "₭",
                        type: r.CurrencyType.symbol
                    },
                    kwd: {
                        display: "KWD",
                        type: r.CurrencyType.code
                    },
                    mxn: {
                        display: "MXN",
                        type: r.CurrencyType.code
                    },
                    ngn: {
                        display: "₦",
                        type: r.CurrencyType.symbol
                    },
                    ils: {
                        display: "₪",
                        type: r.CurrencyType.symbol
                    },
                    ron: {
                        display: "lei",
                        type: r.CurrencyType.symbol
                    },
                    pkr: {
                        display: "PKR",
                        type: r.CurrencyType.code
                    },
                    qar: {
                        display: "QAR",
                        type: r.CurrencyType.code
                    },
                    khr: {
                        display: "៛",
                        type: r.CurrencyType.symbol
                    },
                    mvr: {
                        display: "Rf",
                        type: r.CurrencyType.symbol
                    },
                    rub: {
                        display: "₽",
                        type: r.CurrencyType.symbol
                    },
                    sar: {
                        display: "SAR",
                        type: r.CurrencyType.code
                    },
                    lkr: {
                        display: "රු",
                        type: r.CurrencyType.symbol
                    },
                    bdt: {
                        display: "Tk",
                        type: r.CurrencyType.symbol
                    },
                    kzt: {
                        display: "₸",
                        type: r.CurrencyType.symbol
                    },
                    try: {
                        display: "TL",
                        type: r.CurrencyType.symbol
                    },
                    afn: {
                        display: "؋",
                        type: r.CurrencyType.symbol
                    },
                    awg: {
                        display: "ƒ",
                        type: r.CurrencyType.symbol
                    },
                    azn: {
                        display: "₼",
                        type: r.CurrencyType.symbol
                    },
                    bsd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    bbd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    byr: {
                        display: "p.",
                        type: r.CurrencyType.symbol
                    },
                    bzd: {
                        display: "BZ$",
                        type: r.CurrencyType.symbol
                    },
                    bmd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    bob: {
                        display: "Bs.",
                        type: r.CurrencyType.symbol
                    },
                    bam: {
                        display: "KM",
                        type: r.CurrencyType.symbol
                    },
                    bwp: {
                        display: "P",
                        type: r.CurrencyType.symbol
                    },
                    bnd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    kyd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    clp: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    cny: {
                        display: "RMB",
                        type: r.CurrencyType.symbol
                    },
                    cop: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    crc: {
                        display: "₡",
                        type: r.CurrencyType.symbol
                    },
                    hrk: {
                        display: "kn",
                        type: r.CurrencyType.symbol
                    },
                    cup: {
                        display: "₱",
                        type: r.CurrencyType.symbol
                    },
                    dop: {
                        display: "RD$",
                        type: r.CurrencyType.symbol
                    },
                    xcd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    svc: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    eek: {
                        display: "kr",
                        type: r.CurrencyType.symbol
                    },
                    fkp: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    ghc: {
                        display: "¢",
                        type: r.CurrencyType.symbol
                    },
                    gip: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    gtq: {
                        display: "Q",
                        type: r.CurrencyType.symbol
                    },
                    ggp: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    gyd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    hnl: {
                        display: "L",
                        type: r.CurrencyType.symbol
                    },
                    isk: {
                        display: "kr",
                        type: r.CurrencyType.symbol
                    },
                    irr: {
                        display: "﷼",
                        type: r.CurrencyType.symbol
                    },
                    imp: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    jmd: {
                        display: "J$",
                        type: r.CurrencyType.symbol
                    },
                    jep: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    kes: {
                        display: "KSh",
                        type: r.CurrencyType.symbol
                    },
                    kpw: {
                        display: "₩",
                        type: r.CurrencyType.symbol
                    },
                    kgs: {
                        display: "лв",
                        type: r.CurrencyType.symbol
                    },
                    lvl: {
                        display: "Ls",
                        type: r.CurrencyType.symbol
                    },
                    lbp: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    lrd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    ltl: {
                        display: "Lt",
                        type: r.CurrencyType.symbol
                    },
                    mkd: {
                        display: "ден",
                        type: r.CurrencyType.symbol
                    },
                    mur: {
                        display: "₨",
                        type: r.CurrencyType.symbol
                    },
                    mnt: {
                        display: "₮",
                        type: r.CurrencyType.symbol
                    },
                    mzn: {
                        display: "MT",
                        type: r.CurrencyType.symbol
                    },
                    nad: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    npr: {
                        display: "₨",
                        type: r.CurrencyType.symbol
                    },
                    ang: {
                        display: "ƒ",
                        type: r.CurrencyType.symbol
                    },
                    nio: {
                        display: "C$",
                        type: r.CurrencyType.symbol
                    },
                    pab: {
                        display: "B/.",
                        type: r.CurrencyType.symbol
                    },
                    pyg: {
                        display: "Gs",
                        type: r.CurrencyType.symbol
                    },
                    pen: {
                        display: "S/.",
                        type: r.CurrencyType.symbol
                    },
                    shp: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    rsd: {
                        display: "Дин.",
                        type: r.CurrencyType.symbol
                    },
                    scr: {
                        display: "₨",
                        type: r.CurrencyType.symbol
                    },
                    sbd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    sos: {
                        display: "S",
                        type: r.CurrencyType.symbol
                    },
                    srd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    syp: {
                        display: "£",
                        type: r.CurrencyType.symbol
                    },
                    tzs: {
                        display: "TSh",
                        type: r.CurrencyType.symbol
                    },
                    ttd: {
                        display: "TT$",
                        type: r.CurrencyType.symbol
                    },
                    trl: {
                        display: "₤",
                        type: r.CurrencyType.symbol
                    },
                    tvd: {
                        display: "$",
                        type: r.CurrencyType.symbol
                    },
                    ugx: {
                        display: "USh",
                        type: r.CurrencyType.symbol
                    },
                    uyu: {
                        display: "$U",
                        type: r.CurrencyType.symbol
                    },
                    uzs: {
                        display: "лв",
                        type: r.CurrencyType.symbol
                    },
                    vef: {
                        display: "Bs",
                        type: r.CurrencyType.symbol
                    },
                    yer: {
                        display: "﷼",
                        type: r.CurrencyType.symbol
                    },
                    zwd: {
                        display: "Z$",
                        type: r.CurrencyType.symbol
                    }
                },
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.code,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                r.CurrencyType.symbol,
                t.oq = {},
                Object.keys(t.Re).forEach((function(e) {
                    t.oq[e] = t.Re[e].display
                }
                ))
            },
            2: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.Symbol = 0] = "Symbol",
                    e[e.Code = 1] = "Code",
                    e[e.AppSymbol = 2] = "AppSymbol"
                }(t.CurrencyDisplay || (t.CurrencyDisplay = {})),
                function(e) {
                    e.code = "code",
                    e.symbol = "symbol"
                }(t.CurrencyType || (t.CurrencyType = {})),
                function(e) {
                    e.pre = "pre",
                    e.preSpace = "preSpace",
                    e.post = "post",
                    e.postSpace = "postSpace"
                }(t.CurrencyLocation || (t.CurrencyLocation = {})),
                function(e) {
                    e.withNumber = "withNumber",
                    e.withCurrency = "withCurrency",
                    e.afterNumber = "afterNumber"
                }(t.NegativeSignLocation || (t.NegativeSignLocation = {}))
            },
            9338: function(e, t, n) {
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                }
                : function(e, t, n, r) {
                    void 0 === r && (r = n),
                    e[r] = t[n]
                }
                )
                  , i = this && this.__exportStar || function(e, t) {
                    for (var n in e)
                        "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                i(n(9841), t)
            },
            9058: function(e, t, n) {
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                }
                : function(e, t, n, r) {
                    void 0 === r && (r = n),
                    e[r] = t[n]
                }
                )
                  , i = this && this.__exportStar || function(e, t) {
                    for (var n in e)
                        "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                i(n(3262), t)
            },
            8941: function(e, t) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.FallbackStrategy = void 0,
                function(e) {
                    e[e.Enable = 1] = "Enable",
                    e[e.Disable = 2] = "Disable",
                    e[e.ThrowException = 3] = "ThrowException"
                }(n = t.FallbackStrategy || (t.FallbackStrategy = {})),
                t.default = n
            },
            7209: function(e, t) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.Variant = void 0,
                function(e) {
                    e[e.Experiment = 1] = "Experiment",
                    e[e.Origin = 2] = "Origin",
                    e[e.Culture = 3] = "Culture",
                    e[e.DeviceType = 4] = "DeviceType",
                    e[e.WhiteLabelId = 5] = "WhiteLabelId",
                    e[e.WhiteLabelFeature = 6] = "WhiteLabelFeature",
                    e[e.DomainName = 7] = "DomainName",
                    e[e.ServerSideBehavior = 8] = "ServerSideBehavior"
                }(n = t.Variant || (t.Variant = {})),
                t.default = n
            },
            3262: function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.Variant = t.FallbackStrategy = void 0;
                var i = n(8941);
                Object.defineProperty(t, "FallbackStrategy", {
                    enumerable: !0,
                    get: function() {
                        return r(i).default
                    }
                });
                var a = n(7209);
                Object.defineProperty(t, "Variant", {
                    enumerable: !0,
                    get: function() {
                        return r(a).default
                    }
                })
            },
            7076: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function() {
                    function e(e) {
                        this.condition = e
                    }
                    return e.prototype.evaluate = function(e) {
                        return this.condition.evaluate(e)
                    }
                    ,
                    e.prototype.describe = function() {
                        return "(" + this.condition.describe() + ")"
                    }
                    ,
                    e
                }();
                t.default = n
            },
            578: function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(4788))
                  , a = r(n(9176))
                  , o = r(n(6241))
                  , l = function() {
                    function e(e) {
                        this.condition = e
                    }
                    return Object.defineProperty(e.prototype, "and", {
                        get: function() {
                            return new i.default({
                                pendingOperation: {
                                    condition: this.condition,
                                    operation: a.default
                                },
                                invert: !1
                            })
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "or", {
                        get: function() {
                            return new i.default({
                                pendingOperation: {
                                    condition: this.condition,
                                    operation: o.default
                                },
                                invert: !1
                            })
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e.prototype.build = function() {
                        return this.condition
                    }
                    ,
                    e
                }();
                t.default = l
            },
            4788: function(e, t, n) {
                var r = this && this.__assign || function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                    ,
                    r.apply(this, arguments)
                }
                  , i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i(n(1892))
                  , o = i(n(3231))
                  , l = i(n(6035))
                  , s = n(7209)
                  , c = i(n(7076))
                  , u = function() {
                    function e(e) {
                        this.context = e
                    }
                    return Object.defineProperty(e.prototype, "not", {
                        get: function() {
                            return new e(r(r({}, this.context), {
                                invert: !this.context.invert
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e.prototype.with = function(e) {
                        return new l.default(this.context).performPendingOperation(new c.default(e.build()))
                    }
                    ,
                    Object.defineProperty(e.prototype, "experiment", {
                        get: function() {
                            return new a.default(s.Variant.Experiment,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "origin", {
                        get: function() {
                            return new o.default(s.Variant.Origin,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "culture", {
                        get: function() {
                            return new o.default(s.Variant.Culture,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "deviceType", {
                        get: function() {
                            return new o.default(s.Variant.DeviceType,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "whiteLabelId", {
                        get: function() {
                            return new o.default(s.Variant.WhiteLabelId,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "whiteLabelFeature", {
                        get: function() {
                            return new a.default(s.Variant.WhiteLabelFeature,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "domainName", {
                        get: function() {
                            return new o.default(s.Variant.DomainName,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "serverSide", {
                        get: function() {
                            return new a.default(s.Variant.ServerSideBehavior,this.context)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e
                }();
                t.default = u
            },
            6035: function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(578))
                  , a = r(n(8869))
                  , o = function() {
                    function e(e) {
                        this.context = e
                    }
                    return e.prototype.performPendingOperation = function(e) {
                        var t = this.context.invert ? a.default(e) : e;
                        return new i.default(this.context.pendingOperation ? this.context.pendingOperation.operation(this.context.pendingOperation.condition, t) : t)
                    }
                    ,
                    e
                }();
                t.default = o
            },
            1892: function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(6035))
                  , a = n(2614)
                  , o = r(n(2811))
                  , l = r(n(8030))
                  , s = function() {
                    function e(e, t) {
                        void 0 === t && (t = a.EmptyContext),
                        this.variant = e,
                        this.contextHolder = new i.default(t)
                    }
                    return e.prototype.contains = function(e) {
                        var t = new l.default(this.variant,e);
                        return this.contextHolder.performPendingOperation(t)
                    }
                    ,
                    e.prototype.containsAll = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        var n = new o.default(this.variant,e);
                        return this.contextHolder.performPendingOperation(n)
                    }
                    ,
                    e
                }();
                t.default = s
            },
            3231: function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(6035))
                  , a = n(2614)
                  , o = r(n(4794))
                  , l = r(n(2465))
                  , s = function() {
                    function e(e, t) {
                        void 0 === t && (t = a.EmptyContext),
                        this.variant = e,
                        this.contextHolder = new i.default(t)
                    }
                    return e.prototype.equal = function(e) {
                        var t = new l.default(this.variant,e);
                        return this.contextHolder.performPendingOperation(t)
                    }
                    ,
                    e.prototype.any = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        var n = new o.default(this.variant,e);
                        return this.contextHolder.performPendingOperation(n)
                    }
                    ,
                    e
                }();
                t.default = s
            },
            7538: function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.IntermediateResolverConditionBuilder = t.IntermediateLookupResolverConditionBuilder = t.IntermediateContextHolder = t.IntermediateBuilder = t.ConditionBuilder = void 0;
                var i = n(578);
                Object.defineProperty(t, "ConditionBuilder", {
                    enumerable: !0,
                    get: function() {
                        return r(i).default
                    }
                });
                var a = n(4788);
                Object.defineProperty(t, "IntermediateBuilder", {
                    enumerable: !0,
                    get: function() {
                        return r(a).default
                    }
                });
                var o = n(6035);
                Object.defineProperty(t, "IntermediateContextHolder", {
                    enumerable: !0,
                    get: function() {
                        return r(o).default
                    }
                });
                var l = n(1892);
                Object.defineProperty(t, "IntermediateLookupResolverConditionBuilder", {
                    enumerable: !0,
                    get: function() {
                        return r(l).default
                    }
                });
                var s = n(3231);
                Object.defineProperty(t, "IntermediateResolverConditionBuilder", {
                    enumerable: !0,
                    get: function() {
                        return r(s).default
                    }
                })
            },
            2614: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.EmptyContext = void 0,
                t.EmptyContext = {
                    invert: !1
                }
            },
            9841: function(e, t, n) {
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                ;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.serverSide = t.whiteLabelFeature = t.experiment = t.domainName = t.whiteLabelId = t.origin = t.deviceType = t.culture = t.not = t.With = void 0;
                var i = n(7538)
                  , a = r(n(578))
                  , o = r(n(3231))
                  , l = r(n(1892))
                  , s = r(n(7076))
                  , c = n(7209);
                t.With = function(e) {
                    return new a.default(new s.default(e.build()))
                }
                ,
                t.not = new i.IntermediateBuilder({
                    invert: !0
                }),
                t.culture = new o.default(c.Variant.Culture),
                t.deviceType = new o.default(c.Variant.DeviceType),
                t.origin = new o.default(c.Variant.Origin),
                t.whiteLabelId = new o.default(c.Variant.WhiteLabelId),
                t.domainName = new o.default(c.Variant.DomainName),
                t.experiment = new l.default(c.Variant.Experiment),
                t.whiteLabelFeature = new l.default(c.Variant.WhiteLabelFeature),
                t.serverSide = new l.default(c.Variant.ServerSideBehavior)
            },
            9176: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function() {
                    function e(e, t) {
                        this.left = e,
                        this.right = t
                    }
                    return e.prototype.evaluate = function(e) {
                        return this.left.evaluate(e) && this.right.evaluate(e)
                    }
                    ,
                    e.prototype.describe = function() {
                        return this.left.describe() + " && " + this.right.describe()
                    }
                    ,
                    e
                }();
                t.default = function(e, t) {
                    return new n(e,t)
                }
            },
            8869: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function() {
                    function e(e) {
                        this.condition = e
                    }
                    return e.prototype.evaluate = function(e) {
                        return !this.condition.evaluate(e)
                    }
                    ,
                    e.prototype.describe = function() {
                        return "!(" + this.condition.describe() + ")"
                    }
                    ,
                    e
                }();
                t.default = function(e) {
                    return new n(e)
                }
            },
            6241: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function() {
                    function e(e, t) {
                        this.left = e,
                        this.right = t
                    }
                    return e.prototype.evaluate = function(e) {
                        return this.left.evaluate(e) || this.right.evaluate(e)
                    }
                    ,
                    e.prototype.describe = function() {
                        return this.left.describe() + " || " + this.right.describe()
                    }
                    ,
                    e
                }();
                t.default = function(e, t) {
                    return new n(e,t)
                }
            },
            2811: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(7209)
                  , i = function() {
                    function e(e, t) {
                        this.variant = e,
                        this.values = t
                    }
                    return e.prototype.evaluate = function(e) {
                        var t = e.getLookupResolver(this.variant);
                        if (this.values && this.values.length > 0)
                            return this.values.every((function(e) {
                                return t.getBy(e) === e
                            }
                            ));
                        throw new Error("values is null or empty")
                    }
                    ,
                    e.prototype.describe = function() {
                        return r.Variant[this.variant] + ".containsAll(" + this.values.join(", ") + ")"
                    }
                    ,
                    e
                }();
                t.default = i
            },
            8030: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(7209)
                  , i = function() {
                    function e(e, t) {
                        this.variant = e,
                        this.value = t
                    }
                    return e.prototype.evaluate = function(e) {
                        var t = e.getLookupResolver(this.variant);
                        if (null !== this.value && void 0 !== this.value)
                            return t.getBy(this.value) === this.value;
                        throw Error("value is null or undefined")
                    }
                    ,
                    e.prototype.describe = function() {
                        return r.Variant[this.variant] + ".contains(" + this.value + ")"
                    }
                    ,
                    e
                }();
                t.default = i
            },
            4794: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(7209)
                  , i = function() {
                    function e(e, t) {
                        this.variant = e,
                        this.values = t
                    }
                    return e.prototype.evaluate = function(e) {
                        var t = e.getResolver(this.variant);
                        if (this.values && this.values.length > 0)
                            return this.values.some((function(e) {
                                return t.get() === e
                            }
                            ));
                        throw new Error("values is null or empty")
                    }
                    ,
                    e.prototype.describe = function() {
                        return r.Variant[this.variant] + ".any(" + this.values.join(", ") + ")"
                    }
                    ,
                    e
                }();
                t.default = i
            },
            2465: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(7209)
                  , i = function() {
                    function e(e, t) {
                        this.variant = e,
                        this.expectedValue = t
                    }
                    return e.prototype.evaluate = function(e) {
                        return e.getResolver(this.variant).get() === this.expectedValue
                    }
                    ,
                    e.prototype.describe = function() {
                        return r.Variant[this.variant] + " == " + this.expectedValue
                    }
                    ,
                    e
                }();
                t.default = i
            },
            5255: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M13 1a1 1 0 0 1 1 1v.223a8.994 8.994 0 0 1 4.74 2.812A.97.97 0 0 1 19 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.223a9.03 9.03 0 0 1 0 4H21a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2c-.09 0-.178-.012-.26-.034a9.03 9.03 0 0 1-3.046 2.244L16.39 22H17.5a.5.5 0 1 1 0 1h-11a.5.5 0 1 1 0-1h1.108l.698-2.79a9.026 9.026 0 0 1-3.046-2.245A.97.97 0 0 1 5 17H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.223a9.03 9.03 0 0 1 0-4H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2c.09 0 .178.012.26.034A8.995 8.995 0 0 1 10 2.223V2a1 1 0 0 1 1-1zm-1 10a.78.78 0 0 0-.757.591L8.64 22h6.719l-2.602-10.409a.78.78 0 0 0-.651-.584zm-2.113 1.886L6 15.279V16c0 .087-.011.172-.032.253a8 8 0 0 0 2.587 1.97l1.332-5.337zm4.225 0l1.333 5.336a8.027 8.027 0 0 0 2.589-1.97A.93.93 0 0 1 18 16v-.721l-3.888-2.393zM5 14H3v2h2v-2zm16 0h-2v2h2v-2zm-3-6.106l-4.576 2.817c.14.186.244.401.304.638l.037.15L18 14.105V14a1 1 0 0 1 .883-.993L19 13h.748c.164-.639.252-1.31.252-2s-.087-1.36-.252-2H19a1 1 0 0 1-1-1v-.106zM6 7.895V8a1 1 0 0 1-1 1h-.748A8.015 8.015 0 0 0 4 11c0 .69.088 1.361.252 2H5a1 1 0 0 1 1 1v.104l4.234-2.605.038-.15c.06-.237.164-.452.304-.638L6 7.895zm8-4.643V4a1 1 0 0 1-1 1h-.5l.001 5.072.034.01L18 6.72V6c0-.087.011-.172.032-.253A7.986 7.986 0 0 0 14 3.252zM6.103 5.594l-.135.153c.02.081.032.166.032.253v.72l5.464 3.363.036-.011V5H11a1 1 0 0 1-.993-.883L10 4v-.748a7.996 7.996 0 0 0-3.897 2.342zM5 6H3v2h2V6zm16 0h-2v2h2V6zm-8-4h-2v2h2V2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "ActivityFerrisWheelLineIcon",
                e.exports = l
            },
            4506: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M11 2.05V3a2 2 0 0 0 1.85 1.995L13 5h1a2 2 0 0 1 1.995 1.85L16 7v1a2 2 0 0 0 1.85 1.995L18 10h3.8c.131.646.2 1.315.2 2 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zm-.992 1.171l-.198.047A9.006 9.006 0 0 0 3 12a9 9 0 1 0 17.971-.729L20.943 11h-2.98l-.186-.007a3 3 0 0 1-2.772-2.818L15 8v-.963l-.003-.113a1 1 0 0 0-.878-.917L14 6h-1.037l-.186-.008a3 3 0 0 1-2.757-2.647l-.012-.124zM9 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "FoodCookieLineIcon",
                e.exports = l
            },
            2676: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.89 9.553c0-1.133.911-1.988 2.034-1.988.723 0 1.21.354 1.453.763h.031V6.3c0-.178.126-.301.314-.301.197 0 .314.123.314.3v3.26c0 1.134-.918 1.982-2.073 1.982-1.146 0-2.073-.856-2.073-1.989zm3.534 0c0-.817-.628-1.433-1.46-1.433-.833 0-1.461.616-1.461 1.433 0 .817.628 1.434 1.46 1.434.833 0 1.461-.617 1.461-1.434zM5.764 12.83c-.164-.077-.243-.216-.18-.378.063-.17.22-.239.385-.162.282.132.636.224 1.013.224.934 0 1.5-.547 1.5-1.48v-.254H8.45c-.243.408-.73.763-1.453.763-1.115 0-2.034-.848-2.034-1.989 0-1.133.927-1.988 2.074-1.988 1.154 0 2.073.848 2.073 1.98v1.45c0 1.248-.817 2.088-2.152 2.088-.408 0-.817-.077-1.194-.254zm2.733-3.276c0-.817-.628-1.433-1.46-1.433-.833 0-1.461.616-1.461 1.433 0 .817.628 1.434 1.46 1.434.833 0 1.461-.617 1.461-1.434zM2.073 7.565C.927 7.565 0 8.42 0 9.553c0 1.14.919 1.989 2.034 1.989.722 0 1.21-.355 1.453-.763h.031v.508c0 .178.118.301.314.301.189 0 .314-.123.314-.3V9.546c0-1.133-.918-1.981-2.073-1.981zm0 .555c.833 0 1.46.616 1.46 1.433 0 .817-.627 1.434-1.46 1.434-.832 0-1.46-.617-1.46-1.434S1.24 8.12 2.072 8.12zM.27 16.253c0-.964.799-1.748 1.78-1.748.982 0 1.781.784 1.781 1.748 0 .963-.799 1.747-1.78 1.747-.982 0-1.78-.784-1.78-1.747zm4.976 0c0-.964.799-1.748 1.78-1.748.982 0 1.78.784 1.78 1.748 0 .963-.798 1.747-1.78 1.747-.981 0-1.78-.784-1.78-1.747zM12 14.505c-.982 0-1.78.784-1.78 1.748 0 .963.798 1.747 1.78 1.747s1.78-.784 1.78-1.747c0-.964-.798-1.748-1.78-1.748zm8.17 1.748c0-.964.8-1.748 1.781-1.748.982 0 1.78.784 1.78 1.748 0 .963-.798 1.747-1.78 1.747s-1.78-.784-1.78-1.747zm-3.194-1.748c-.982 0-1.78.784-1.78 1.748 0 .963.798 1.747 1.78 1.747s1.78-.784 1.78-1.747c0-.964-.798-1.748-1.78-1.748zM12 7.565c-1.154 0-2.073.855-2.073 1.988s.919 1.989 2.073 1.989 2.073-.856 2.073-1.989S13.154 7.565 12 7.565zm0 .555c.832 0 1.46.616 1.46 1.433 0 .817-.628 1.434-1.46 1.434s-1.46-.617-1.46-1.434S11.167 8.12 12 8.12zm9.927-.555c-1.147 0-2.073.855-2.073 1.988 0 1.14.918 1.989 2.034 1.989.722 0 1.209-.355 1.452-.763h.032v.508c0 .178.117.301.314.301.188 0 .314-.123.314-.3V9.546c0-1.133-.919-1.981-2.073-1.981zm0 .555c.832 0 1.46.616 1.46 1.433 0 .817-.628 1.434-1.46 1.434-.833 0-1.46-.617-1.46-1.434s.627-1.433 1.46-1.433z",
                        fill: "#000"
                    }))
                };
                o.defaultProps = {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "LogoAgoda1FillIcon",
                e.exports = l
            },
            6024: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22a10 10 0 0 1-9-5.637l-.08-.169A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2zm-.5 12h-3v4h3v-4zm4 0h-3v4h3v-4zm-4-5c-1.624.274-2.84 1.632-2.985 3.272l-.012.19L8.5 13h3V9zm1 0v4h3v-.508l-.01-.193c-.129-1.593-1.265-2.917-2.796-3.261L12.5 9zM12 3.5a8.5 8.5 0 0 0-8.485 9.014L12 4.5l8.485 8.013A8.5 8.5 0 0 0 12 3.5z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "LogoAgodahomeFillIcon",
                e.exports = l
            },
            3929: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.125 2a.875.875 0 0 0-.868.765l-.007.11v1.128c-.445-.01-.853.005-1.226.037l-.274.028V4.875a.875.875 0 0 0-1.743-.11L9 4.875v1.592a5.544 5.544 0 0 0-.608.262 4.08 4.08 0 0 0-1.257.984c-.357.43-.575.926-.58 1.474 0 .686.556 1.242 1.242 1.242.307 0 .631-.098.805-.295.143-.176.285-.35.42-.53l.196-.276c.252-.389.603-.71 1.02-.937.48-.206.892-.29 1.377-.31l.25-.006h.442l.15.006c.99.073 1.779.86 1.855 1.849l.006.157v.226l-5.28 1.16-.254.074c-.756.229-1.432.525-1.979 1.07a2.88 2.88 0 0 0-.804 2.055 3.027 3.027 0 0 0 .486 1.658 3.37 3.37 0 0 0 1.39 1.213c.112.053.227.101.343.145l.247.086c.078.025.218.066.41.106l.123.024v1.221a.875.875 0 0 0 1.743.11l.007-.11v-1.161c.368-.04.766-.115 1.183-.243l.317-.106v1.51a.875.875 0 0 0 1.743.11l.007-.11-.001-2.434.033-.02.242-.167.237-.174h.072l.173.266c.239.349.512.673.815.968.25.257.587.41.944.424.375.002.738-.131 1.016-.37.269-.192.434-.498.447-.827a5.15 5.15 0 0 0-.29-1.155 5.69 5.69 0 0 1-.28-1.434l-.01-.293v-3.34l.005-.303a6.047 6.047 0 0 0-.487-2.347 2.934 2.934 0 0 0-1.675-1.446 9.253 9.253 0 0 0-.822-.23l-.418-.087L14 4.875A.875.875 0 0 0 13.125 4zm1.194 8.007v1.128c0 1.358-1.1 2.458-2.458 2.458h-.46a1.916 1.916 0 0 1-1.29-.423 1.313 1.313 0 0 1-.516-1.024 1.081 1.081 0 0 1 .418-.91c.26-.207.502-.305.883-.436l3.423-.793z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "LogoCircleAgodacashFillIcon",
                e.exports = l
            },
            3994: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1.486 4l.192.005a3.515 3.515 0 0 1 0 7.019l-.193.005h-2.487V17a1 1 0 0 1-1.991.116L9 17.001V8a1 1 0 0 1 .883-.993L10 7h3.486zm-.083 2H11v3h2.377l.183-.008c.123-.012.248-.034.375-.068.19-.051.366-.134.526-.248.16-.115.29-.267.39-.458.1-.19.149-.43.149-.718 0-.297-.043-.542-.13-.737a1.18 1.18 0 0 0-.857-.7 2.807 2.807 0 0 0-.61-.063zM11.19 4.048a.5.5 0 0 1 .022.996 7.004 7.004 0 0 0-6.144 5.973.5.5 0 0 1-.99-.139A8.004 8.004 0 0 1 11.1 4.05l.09-.002z",
                        fill: "#000"
                    }))
                };
                o.defaultProps = {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "LogoPointmaxLineIcon",
                e.exports = l
            },
            5857: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M10.636 1.99c.43-1.32 2.299-1.32 2.728 0l2.054 6.316h6.645c1.39 0 1.967 1.779.843 2.595l-5.375 3.901 2.053 6.314c.43 1.321-1.082 2.42-2.207 1.604L12 18.817 6.623 22.72c-1.125.816-2.637-.283-2.207-1.604l2.053-6.314-5.375-3.901c-1.124-.816-.547-2.595.843-2.595h6.645l2.054-6.315z",
                        fill: "#2A2A3A"
                    }))
                };
                o.defaultProps = {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "LogoVipstarFillIcon",
                e.exports = l
            },
            1247: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M11.519 8.516a1.019 1.019 0 0 1-1.026-1.026c0-.573.453-1.026 1.026-1.026s1.026.453 1.026 1.026c0 .549-.453 1.026-1.026 1.026m-5.26 0A1.019 1.019 0 0 1 5.233 7.49c0-.573.454-1.026 1.026-1.026.573 0 1.027.453 1.027 1.026 0 .549-.454 1.026-1.027 1.026m10.135.577c3.659 0 6.606 2.458 6.606 5.505 0 1.647-.884 3.146-2.284 4.154a.347.347 0 0 0-.172.368c0 .05 0 .098.025.148.098.417.294 1.081.294 1.106 0 .073.025.122.025.172a.22.22 0 0 1-.221.22c-.05 0-.074-.024-.123-.048l-1.449-.836a.799.799 0 0 0-.344-.098c-.073 0-.147 0-.196.024-.688.197-1.4.295-2.161.295-3.66 0-6.607-2.457-6.607-5.505 0-3.047 2.947-5.505 6.607-5.505zM8.95 3c3.963 0 7.261 2.404 7.827 5.568h-.443c-3.987 0-7.237 2.699-7.237 6.01 0 .565.099 1.104.271 1.62h-.443a9.963 9.963 0 0 1-2.584-.368c-.074-.025-.148-.025-.222-.025a.832.832 0 0 0-.418.123l-1.748 1.005c-.05.025-.099.05-.148.05a.273.273 0 0 1-.27-.27c0-.074.024-.123.049-.197.024-.024.246-.834.369-1.324 0-.05.024-.123.024-.172a.556.556 0 0 0-.221-.442C2.058 13.376 1 11.586 1 9.598 1 5.945 4.57 3 8.95 3zm9.623 8.915c-.499 0-.898.4-.898.898 0 .5.4.898.898.898a.91.91 0 0 0 .898-.898c0-.498-.399-.898-.898-.898zm-4.425 0c-.5 0-.898.4-.898.898 0 .5.399.898.898.898a.91.91 0 0 0 .898-.898c0-.498-.4-.898-.898-.898z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "LogoWechatFillIcon",
                e.exports = l
            },
            1142: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M20.75 18a3.75 3.75 0 0 1-3.55 3.745l-.2.005-3.146.001a2 2 0 1 1 0-1.501H17a2.25 2.25 0 0 0 2.245-2.096L19.25 18h1.5zM12 1.25a8.752 8.752 0 0 1 8.694 7.759A2.499 2.499 0 0 1 23 11.5v3a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h.682A7.252 7.252 0 0 0 4.818 9H5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-2A2.5 2.5 0 0 1 1 14.5v-3a2.5 2.5 0 0 1 2.305-2.493A8.751 8.751 0 0 1 12 1.25zM10 9a1 1 0 0 1 .993.883L11 10v1a1 1 0 0 1-1 1H9v1h1.5a.5.5 0 1 1 0 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1v-1H8.5a.5.5 0 0 1 0-1H10zm4.5 0a.5.5 0 0 1 .5.5V11h.5a.5.5 0 1 1 0 1H15v1.5a.5.5 0 1 1-1 0V12h-1a1 1 0 0 1-1-1V9.5a.5.5 0 1 1 1 0V11h1V9.5a.5.5 0 0 1 .5-.5z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "ServiceCs24FillIcon",
                e.exports = l
            },
            8969: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fill: "#010202",
                        d: "M20.5 9a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2 2.45V18a3.5 3.5 0 0 1-3.308 3.495l-.192.005-2.563.001a2 2 0 1 1 0-1.001H17.5a2.5 2.5 0 0 0 2.495-2.336L20 18v-.001L19 18a1 1 0 0 1-.993-.883L18 17v-7a1 1 0 0 1 1-1zM13 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 1.5a8.502 8.502 0 0 1 7.873 5.292.5.5 0 1 1-.925.377A7.502 7.502 0 0 0 4.566 9L5 9a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3.5A2.5 2.5 0 0 1 1 15.5v-4A2.5 2.5 0 0 1 3.5 9h.058A8.501 8.501 0 0 1 12 1.5zM5 10H3.5a1.5 1.5 0 0 0-1.493 1.356L2 11.5v4a1.5 1.5 0 0 0 1.356 1.493L3.5 17H5v-7zm15.5 0H19v7h1.5l.144-.007A1.5 1.5 0 0 0 22 15.5v-4l-.007-.144A1.5 1.5 0 0 0 20.5 10z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "ServiceCsLineIcon",
                e.exports = l
            },
            8446: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M11 15a1 1 0 0 1 0 2H8.5a.5.5 0 1 0 0 1h3.956l5.525-1.575a.954.954 0 0 1 1.13.524.932.932 0 0 1-.36 1.179l-5.33 3.279a4 4 0 0 1-2.096.593H6v-7h5zm-6 0v7H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h2zm7-13a8 8 0 0 1 6.4 12.8l-5.013 1.4v-.476a2 2 0 0 0-1.85-1.995l-.15-.005h-6.47A8 8 0 0 1 12 2zm-.079 2a.441.441 0 0 0-.44.44v.738C10.338 5.308 9.633 6 9.633 7c0 .634.282 1.114.84 1.429.304.17.647.287 1.148.39.964.215 1.036.236 1.277.375.248.137.379.382.379.708 0 .641-.51 1.024-1.363 1.024-.534 0-.973-.177-1.204-.485a.85.85 0 0 1-.182-.404.52.52 0 1 0-1.016.214c.072.311.168.524.34.757.337.453.898.733 1.627.813v.738a.441.441 0 0 0 .882 0v-.736c1.224-.127 1.924-.83 1.924-1.936 0-1.038-.564-1.581-1.946-1.876l-.106-.023c-.823-.178-.826-.18-1.018-.258-.408-.166-.59-.396-.59-.746 0-.55.495-.919 1.233-.919.469 0 .834.14 1.057.405.088.107.14.2.18.332a.51.51 0 0 0 .56.356l.014-.002a.511.511 0 0 0 .408-.67 1.7 1.7 0 0 0-.28-.52c-.316-.422-.812-.69-1.436-.778V4.44a.441.441 0 0 0-.44-.441z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "ServiceHandCashFillIcon",
                e.exports = l
            },
            1299: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M21.5 15a.5.5 0 0 1 .5.5V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a.5.5 0 1 1 1 0V21h18v-5.5a.5.5 0 0 1 .5-.5zM12 2a.5.5 0 0 1 .5.5v12.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-6 6a.5.5 0 0 1-.638.057l-.07-.057-6-6a.5.5 0 0 1 .638-.765l.07.057 5.146 5.147V2.5A.5.5 0 0 1 12 2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolArrowDownloadLineIcon",
                e.exports = l
            },
            2347: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M9.5 3a.5.5 0 0 1 0 1H4v16h16v-5.5a.5.5 0 1 1 1 0V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.5zm3.91-.992L13.5 2h8.012c.02 0 .041.002.062.005L21.5 2l.053.003.075.014.063.02.076.04.055.04.032.03.037.041.042.062.03.06.02.062.015.082L22 2.5v8a.5.5 0 0 1-.992.09L21 10.5V3.706l-8.646 8.648a.5.5 0 0 1-.765-.638l.057-.07L20.292 3H13.5a.5.5 0 0 1-.492-.41L13 2.5a.5.5 0 0 1 .41-.492z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolArrowShareLineIcon",
                e.exports = l
            },
            365: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M2.602 7h18.796a.5.5 0 0 1 .376.83l-9.02 10.31a1 1 0 0 1-1.506 0L2.226 7.83A.5.5 0 0 1 2.602 7z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolArrowThickDropdownFillIcon",
                e.exports = l
            },
            3483: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M15.47 1.47a.75.75 0 0 1 1.133.976l-.073.084L7.061 12l9.47 9.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-10-10a.75.75 0 0 1-.073-.976l.073-.084 10-10z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolArrowThinBackLineIcon",
                e.exports = l
            },
            2732: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M1.616 7.616a1.25 1.25 0 0 1 1.666-.091l.102.091L12 16.233l8.616-8.617a1.25 1.25 0 0 1 1.666-.091l.102.091a1.25 1.25 0 0 1 .091 1.666l-.091.102-9.5 9.5a1.25 1.25 0 0 1-1.666.091l-.102-.091-9.5-9.5a1.25 1.25 0 0 1 0-1.768z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolArrowThinDropdownFillIcon",
                e.exports = l
            },
            7536: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M1.47 7.47a.75.75 0 0 1 .976-.073l.084.073L12 16.939l9.47-9.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084-10 10a.75.75 0 0 1-.976.073l-.084-.073-10-10a.75.75 0 0 1 0-1.06z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolArrowThinDropdownLineIcon",
                e.exports = l
            },
            170: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M7.53 1.47a.75.75 0 0 0-1.133.976l.073.084L15.939 12l-9.47 9.47a.75.75 0 0 0-.072.976l.073.084a.75.75 0 0 0 .976.073l.084-.073 10-10a.75.75 0 0 0 .073-.976l-.073-.084-10-10z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolArrowThinForwardLineIcon",
                e.exports = l
            },
            7814: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M19 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3.792l-2.344 4.02a1 1 0 0 1-.253.287l-.107.072a1 1 0 0 1-1.303-.262l-.065-.098L8.792 18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14zm0 1H5a2 2 0 0 0-1.995 1.85L3 5v10a2 2 0 0 0 1.85 1.995L5 17h4.366L12 21.515 14.634 17H19a2 2 0 0 0 1.995-1.85L21 15V5a2 2 0 0 0-1.85-1.995L19 3zm-2 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolBubbleChatLineIcon",
                e.exports = l
            },
            387: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M22 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12zm-1-6H3v6a1 1 0 0 0 .883.993L4 19h16a1 1 0 0 0 .993-.883L21 18v-6zm-10.5 3a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1h5zM21 9H3v2h18V9zm-1-4H4a1 1 0 0 0-.993.883L3 6v2h18V6a1 1 0 0 0-.883-.993L20 5z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCardLineIcon",
                e.exports = l
            },
            2371: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M21.453 4.487l1.094 1.026a.5.5 0 0 1 .023.707L10.412 19.188a1.25 1.25 0 0 1-1.692.122l-.104-.093-7.146-7.146a.5.5 0 0 1 0-.707l1.06-1.061a.5.5 0 0 1 .707 0l6.234 6.234L20.746 4.51a.5.5 0 0 1 .707-.023z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCheckFillIcon",
                e.exports = l
            },
            5856: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm.5 7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h1zM12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCircleInfoLineIcon",
                e.exports = l
            },
            9896: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm.716-10.937A4.002 4.002 0 0 0 8 8.937c0 .035.027.07.062.072h1.87c.036.003.068-.034.068-.072l.004-.084a2.006 2.006 0 0 1 2.367-1.82 2.01 2.01 0 0 1 1.596 1.596c.173.987-.37 1.91-1.266 2.245l-.175.072c-.916.417-1.526 1.3-1.526 2.312v1.08c0 .09.073.163.164.163h1.671a.164.164 0 0 0 .164-.164v-1.079l.007-.08c.033-.184.174-.348.395-.43a4 4 0 0 0-.685-7.685z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCircleQuestionFillIcon",
                e.exports = l
            },
            5089: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm.716-10.937a4 4 0 0 1 .685 7.684c-.22.083-.362.247-.395.431l-.007.08v1.08c0 .09-.073.163-.164.163h-1.67a.164.164 0 0 1-.165-.164v-1.079c0-1.012.61-1.895 1.526-2.312l.175-.072a2.004 2.004 0 0 0 1.266-2.245 2.01 2.01 0 0 0-1.596-1.597 2.006 2.006 0 0 0-2.367 1.821L10 8.937c0 .038-.032.075-.069.072H8.062C8.027 9.007 8 8.972 8 8.937a4.002 4.002 0 0 1 4.716-3.874z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCircleQuestionLineIcon",
                e.exports = l
            },
            9375: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.194 2.636l-1.745 4.82H5.266a.265.265 0 0 0-.157.478l3.829 2.972-1.708 5.246c-.079.244.2.446.408.297L12 15.283l4.363 3.166c.208.15.486-.053.407-.297l-1.707-5.246 3.828-2.972a.265.265 0 0 0-.156-.479H13.94l-1.745-4.819a.207.207 0 0 0-.39 0z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCircleStarFillIcon",
                e.exports = l
            },
            4489: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm.466 3.042l4.619.42a.5.5 0 0 1 .453.453l.42 4.619a1 1 0 0 1-.29.797l-6.46 6.462a1 1 0 0 1-1.415 0l-4.586-4.586a1 1 0 0 1 0-1.414L11.67 6.33a1 1 0 0 1 .797-.289zm-.09.996L5.914 13.5l4.586 4.586 6.462-6.462-.383-4.204-4.203-.382zM14.5 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCircleTagLineIcon",
                e.exports = l
            },
            7354: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 13a6.998 6.998 0 0 0-6.12 3.6l.114.103A8.967 8.967 0 0 0 12 21a8.967 8.967 0 0 0 6.006-2.297l.114-.104a6.999 6.999 0 0 0-5.88-3.595L12 15zm0-12a9 9 0 0 0-7.03 14.62l.19.23A7.993 7.993 0 0 1 12 14a7.995 7.995 0 0 1 6.84 3.848A9 9 0 0 0 12 3zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCircleUserLineIcon",
                e.exports = l
            },
            9124: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M3.666 2.643l.082.071L12 10.966l8.252-8.252a.73.73 0 0 1 1.105.952l-.071.082L13.034 12l8.252 8.252a.73.73 0 0 1-.952 1.105l-.082-.071L12 13.034l-8.252 8.252a.73.73 0 0 1-1.105-.952l.071-.082L10.966 12 2.714 3.748a.73.73 0 0 1 .952-1.105z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCloseLineIcon",
                e.exports = l
            },
            945: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.25 11l2.25 4.5 2.25-4.5h1.75l-3.134 6H22v1h-2.75v1H22v1h-2.75v2.5h-1.5V20H15v-1h2.75v-1H15v-1h2.672L14.5 11h1.75zM2.338 15.074a.635.635 0 0 1 .893.343 9.769 9.769 0 0 0 4.712 5.256l.283.138.738-1.87a.24.24 0 0 1 .346-.12l.049.04 3.562 3.666a.28.28 0 0 1-.128.464l-.07.009h-.439c-4.686 0-8.677-2.962-10.241-7.122a.648.648 0 0 1 .295-.804zM6.25 1a.75.75 0 0 1 .75.75V3h1.75a.75.75 0 0 1 0 1.5H5a1 1 0 0 0-1 1c0 .59.395 1.108.965 1.263l2.324.634A3 3 0 0 1 9.5 10.291v.209A2.5 2.5 0 0 1 7 13v1.25a.75.75 0 0 1-1.5 0V13H3.25a.75.75 0 0 1 0-1.5h3.5c.69 0 1.25-.56 1.25-1.25 0-.724-.518-1.344-1.23-1.474l-1.81-.329A2.996 2.996 0 0 1 2.5 5.5 2.5 2.5 0 0 1 5 3h.5V1.75A.75.75 0 0 1 6.25 1zm5.466 0c4.686 0 8.677 2.962 10.241 7.122a.648.648 0 0 1-.295.804.635.635 0 0 1-.893-.343 9.769 9.769 0 0 0-4.712-5.256l-.283-.138-.738 1.87a.24.24 0 0 1-.346.12l-.049-.04-3.562-3.666a.28.28 0 0 1 .128-.465l.07-.008h.439z",
                        fill: "#000"
                    }))
                };
                o.defaultProps = {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolCurrencyLineIcon",
                e.exports = l
            },
            4957: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fill: "#2A2A2E",
                        fillRule: "evenodd",
                        d: "M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16zm0 1H4v18h16v-7h-6.5a.5.5 0 1 1 0-1H20V8h-6.5a.5.5 0 1 1 0-1H20V3zm-8.646 8.646a.5.5 0 0 1 .057.638l-.057.07-3 3a.5.5 0 0 1-.638.057l-.07-.057-1.5-1.5a.5.5 0 0 1 .638-.765l.07.057L8 14.293l2.646-2.647a.5.5 0 0 1 .708 0zm0-6.5a.5.5 0 0 1 .057.638l-.057.07-3 3a.5.5 0 0 1-.638.057l-.07-.057-1.5-1.5a.5.5 0 0 1 .638-.765l.07.057L8 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolDocChecklistLineIcon",
                e.exports = l
            },
            314: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fill: "#333",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9.03 9.03 0 0 0-2 .223V5h2.113a1.5 1.5 0 0 1 1.465 1.82l-.042.154-1.334 4a1.5 1.5 0 0 1-1.286 1.02L10.78 12H8v1.15l3.139 1.141a2.5 2.5 0 0 1 1.495 3.204l-.035.09-.039.09-1.489 3.278a8.991 8.991 0 0 0 8.412-3.951L17.5 17a2.5 2.5 0 0 1-2.495-2.336L15 14.5V12c0-.42.176-.818.48-1.1l.12-.1 1.2-.9a.5.5 0 0 0 .191-.307L17 9.5V7.833c0-.27.073-.535.21-.765l.09-.135 1.012-1.348A8.971 8.971 0 0 0 12 3zM4.157 7.583L5.58 9.72a2.5 2.5 0 0 1 .411 1.176l.009.21V14.5a.5.5 0 0 0 .41.492L6.5 15H7a1 1 0 0 1 .993.883L8 16v4h-.126c.679.351 1.408.618 2.173.788l1.603-3.527a1.5 1.5 0 0 0-.72-1.974l-.133-.056-3.139-1.141a1 1 0 0 1-.65-.816L7 13.15V12a1 1 0 0 1 .883-.993L8 11h2.78a.5.5 0 0 0 .437-.259l.037-.083 1.333-4a.5.5 0 0 0-.385-.65L12.112 6H10a1 1 0 0 1-.993-.883L9 5V3.512a9.029 9.029 0 0 0-4.843 4.071zM3 12a8.991 8.991 0 0 0 3.999 7.484L7 16h-.5a1.5 1.5 0 0 1-1.493-1.356L5 14.5v-3.394a1.5 1.5 0 0 0-.176-.706l-.076-.126L3.652 8.63A8.975 8.975 0 0 0 3 12zm15.997-5.661L18.1 7.533a.5.5 0 0 0-.094.22l-.006.08V9.5a1.5 1.5 0 0 1-.48 1.1l-.12.1-1.2.9a.5.5 0 0 0-.191.307L16 12v2.5a1.5 1.5 0 0 0 1.356 1.493L17.5 16l2.564.001c.6-1.205.936-2.564.936-4.001 0-2.145-.75-4.115-2.003-5.661z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolGlobeLineIcon",
                e.exports = l
            },
            9691: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M16.445 3C19.513 3 22 5.507 22 8.6c0 1.427-.53 2.73-1.403 3.718l-7.85 8.84a1 1 0 0 1-1.411.084l-.043-.041-7.89-8.883A5.604 5.604 0 0 1 2 8.6C2 5.507 4.487 3 7.555 3c1.818 0 3.431.88 4.445 2.239A5.534 5.534 0 0 1 16.445 3zm0 1c-1.37 0-2.638.613-3.496 1.65l-.147.187L12 6.912l-.802-1.075A4.533 4.533 0 0 0 7.555 4C5.041 4 3 6.057 3 8.6c0 1.055.353 2.054.986 2.857l.165.197L12 20.494l7.847-8.837A4.603 4.603 0 0 0 21 8.599C21 6.057 18.959 4 16.445 4z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolHeartLineIcon",
                e.exports = l
            },
            7667: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M12.518 2.146l9 5.445a1 1 0 0 1 .482.855V21a1 1 0 0 1-1 1h-6v-7.067a1 1 0 0 0-.883-.993L14 13.933h-4a1 1 0 0 0-.993.883L9 14.933V22H3a1 1 0 0 1-1-1V8.446a1 1 0 0 1 .482-.855l9-5.445a1 1 0 0 1 1.036 0zM21 8.446l-9-5.445-9 5.445V21l5-.001.002-6.124.011-.174a2 2 0 0 1 1.828-1.762l.159-.006 4.058.002.174.011a2 2 0 0 1 1.762 1.828l.006.159v6.066L21 21V8.446z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolHomeLineIcon",
                e.exports = l
            },
            6358: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M12.003 1L14.5 3H18v3.872L20.5 9.5 18 11.935v3.532l-2 .018V22.5a.5.5 0 0 1-.718.45l-.073-.043L12 20.613l-3.208 2.294a.5.5 0 0 1-.784-.323L8 22.5v-7H6v-3.532L3.5 9.5 6 6.905V3.033L9.381 3l2.622-2zM15 15.495l-.5.005-2.5 2-2.619-2H9v6.028l2.71-1.935a.5.5 0 0 1 .503-.045l.078.045L15 21.53v-6.034zM11.988 2.269L9.723 3.997 7 4.023v3.286L4.905 9.482 7 11.55v2.95h2.72l2.265 1.731 2.16-1.728L17 14.476v-2.963l2.094-2.04L17 7.272V4h-2.851l-2.161-1.731zM12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolMedal2LineIcon",
                e.exports = l
            },
            7596: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M21.5 20a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 0 1 0-1h19z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolMenuLineIcon",
                e.exports = l
            },
            3073: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M20 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolMoreFillIcon",
                e.exports = l
            },
            5110: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M6.973 15a.5.5 0 0 1 .09.992l-.09.008H4.34l-1.205 5h17.724l-1.25-5h-2.634a.5.5 0 0 1-.492-.41l-.008-.09a.5.5 0 0 1 .41-.492l.09-.008H20a.5.5 0 0 1 .458.299l.027.08 1.5 6a.5.5 0 0 1-.399.614L21.5 22h-19a.5.5 0 0 1-.5-.532l.014-.085 1.447-6a.5.5 0 0 1 .4-.376L3.948 15h3.026zM12 2c3.314 0 6 2.71 6 6.053a6.063 6.063 0 0 1-.815 3.048l-4.349 6.625a1 1 0 0 1-1.672 0l-4.348-6.625A6.064 6.064 0 0 1 6 8.053C6 4.71 8.686 2 12 2zm0 1C9.24 3 7 5.26 7 8.053c0 .808.188 1.587.52 2.255l.132.245L12 17.178l4.32-6.578c.443-.765.68-1.637.68-2.547C17 5.26 14.76 3 12 3zm0 2.4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolPinLocationLineIcon",
                e.exports = l
            },
            1143: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M10.5 2a8.5 8.5 0 0 1 6.829 13.562l5.055 5.054a1.25 1.25 0 0 1-1.666 1.859l-.102-.091-5.054-5.055A8.5 8.5 0 1 1 10.5 2zm0 2.5a6 6 0 1 0 4.176 10.308.629.629 0 0 1 .062-.07l.07-.062A6 6 0 0 0 10.5 4.5z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolSearchFillIcon",
                e.exports = l
            },
            9844: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2l.202.18.243.2.214.165c1.213.917 4.069 2.72 8.334 3.234l.006.279-.002.492-.008.269C20.887 9.876 19.901 18.822 12 22 2.406 18.141 3.007 5.78 3.007 5.78 8.806 5.078 12 2 12 2zm.254 1.5L12 3.31l-.045.035c-.602.458-1.419.984-2.446 1.506a18.903 18.903 0 0 1-5.38 1.775l-.125.019.009.273c.019.468.057.995.122 1.57l.042.35c.23 1.801.67 3.58 1.365 5.233 1.274 3.033 3.275 5.345 6.152 6.705l.306.139.306-.14c2.766-1.307 4.723-3.494 6.002-6.358l.15-.346c.695-1.653 1.134-3.432 1.365-5.234.09-.71.142-1.358.164-1.919l.008-.273-.125-.02a18.953 18.953 0 0 1-4.973-1.573l-.406-.2A16.711 16.711 0 0 1 12.254 3.5zM12 6a3 3 0 0 1 3 3v1h.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H9V9a3 3 0 0 1 3-3zm0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-5a2 2 0 0 0-2 2v1h4V9a2 2 0 0 0-2-2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolShieldLockerLineIcon",
                e.exports = l
            },
            5495: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M12 2l.202.18.243.2c1.064.844 4.007 2.851 8.548 3.4l.006.278-.002.492C20.942 9.312 20.148 18.723 12 22 2.406 18.141 3.007 5.78 3.007 5.78 8.806 5.078 12 2 12 2zm-.16 13.5c-1.734 0-3.32.63-4.543 1.674a11.63 11.63 0 0 0 4.397 3.602l.306.139.306-.14a11.622 11.622 0 0 0 4.268-3.43 6.962 6.962 0 0 0-4.494-1.84l-.24-.005zm.414-12L12 3.31l-.045.035c-.602.458-1.419.984-2.446 1.506a18.903 18.903 0 0 1-5.38 1.775l-.125.019.009.273c.019.468.057.995.122 1.57l.042.35c.23 1.801.67 3.58 1.365 5.233.341.813.735 1.574 1.184 2.28A7.955 7.955 0 0 1 11.84 14.5a7.97 7.97 0 0 1 5.32 2.025c.43-.653.813-1.357 1.148-2.108l.15-.346c.695-1.653 1.134-3.432 1.365-5.234.09-.71.142-1.358.164-1.919l.008-.273-.125-.02a18.953 18.953 0 0 1-4.973-1.573l-.406-.2A16.711 16.711 0 0 1 12.254 3.5zM11.84 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolShieldUserLineIcon",
                e.exports = l
            },
            6415: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M8.582 8.295l-6.64.966-.084.019a.5.5 0 0 0-.193.833l4.804 4.684-1.134 6.613-.007.08a.5.5 0 0 0 .733.447L12 18.814l5.94 3.123.073.032a.5.5 0 0 0 .652-.559l-1.135-6.613 4.805-4.684.057-.065a.5.5 0 0 0-.334-.787l-6.641-.966-2.969-6.016a.5.5 0 0 0-.896 0l-2.97 6.016zM12 3.63l2.638 5.344.051.083a.5.5 0 0 0 .325.19l5.897.857-4.267 4.16-.063.075a.5.5 0 0 0-.08.368l1.006 5.873-5.274-2.773-.09-.036a.5.5 0 0 0-.376.036L6.492 20.58 7.5 14.707l.007-.097a.5.5 0 0 0-.151-.346l-4.268-4.16 5.898-.857a.5.5 0 0 0 .376-.273L12 3.63z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolStarLineIcon",
                e.exports = l
            },
            1974: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M21 2a1 1 0 0 1 1 1v7.095a2 2 0 0 1-.586 1.414l-9.898 9.898a2 2 0 0 1-2.828 0l-6.095-6.095a2 2 0 0 1 0-2.828l9.898-9.898A2 2 0 0 1 13.905 2H21zm-3.957 2.974a1.983 1.983 0 1 0 0 3.966 1.983 1.983 0 0 0 0-3.966z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolTagFillIcon",
                e.exports = l
            },
            8512: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M15.917 5.5a3.5 3.5 0 0 1 3.479 3.889l-.027.19-.694 4.136 1.733 2.423c.19.266.298.576.32.897v.054l.004.013.007.084v4.083a1.738 1.738 0 0 1-3.47.15l-.007-.15v-3.553l-1.433-2.003-.963 5.83a1.74 1.74 0 0 1-1.854 1.453l-.15-.019a1.74 1.74 0 0 1-1.446-1.852l.018-.15L13.893 6.66l-.075.018a5.961 5.961 0 0 0-4.192 3.854.5.5 0 0 1-.946-.323 6.96 6.96 0 0 1 6.315-4.704l.272-.005h.65zm-6.94 7.292a.56.56 0 0 1 .342.716l-2.557 7.18a1.5 1.5 0 0 1-2.585 1.52l-1.579-.692a.999.999 0 0 1-.57-1.146l.034-.115 1.506-4.083a2.5 2.5 0 0 1 3.211-1.48l.14.056.726.318.679-1.957a.514.514 0 0 1 .653-.317zm6.94-6.292l-.774.001-.211.009-2.512 14.631a.74.74 0 0 0 .51.827l.097.023a.74.74 0 0 0 .83-.512l.023-.098 1.16-7.022a.5.5 0 0 1 .844-.276l.056.066 2.229 3.116a.5.5 0 0 1 .087.213l.006.078v3.713a.739.739 0 0 0 1.47.1l.007-.1V17.27l-.002-.011-.006-.086a.753.753 0 0 0-.075-.35l-.062-.103-1.853-2.592a.5.5 0 0 1-.093-.275l.007-.099.728-4.34A2.5 2.5 0 0 0 15.917 6.5zM5.5 21a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm-.937-4.616l-.057.133L3 20.6l1.064.465A1.5 1.5 0 0 1 5.92 20.06l1.396-4.046-.84-.368-.043-.016a1.5 1.5 0 0 0-1.87.754zM18 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolTravelerLineIcon",
                e.exports = l
            },
            9030: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 12a8 8 0 0 1 8 8v2H4v-2a8 8 0 0 1 8-8zm0-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolUserFillIcon",
                e.exports = l
            },
            7505: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M12 12a8 8 0 0 1 8 8v2H4v-2a8 8 0 0 1 8-8zm0 1a7 7 0 0 0-6.996 6.76L5 20v1h14v-1a7 7 0 0 0-6.76-6.996L12 13zm0-11a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "SymbolUserLineIcon",
                e.exports = l
            },
            7519: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M14.584 4.5l-3.601-3.243a1 1 0 0 0-.67-.257H8.749l1.95 3.5H6.812l-.96-1.088a1 1 0 0 0-.75-.338H4l1.035 3.231A1 1 0 0 0 5.987 7H17.75a1.25 1.25 0 0 0 0-2.5h-3.166zM12 8.5c2.096 0 3.771.188 4.993.454.32.07.592.28.767.602l.055.124L19.412 14 20.5 14c.716 0 1.322.504 1.47 1.21l.022.145.008.145c0 .763-.573 1.403-1.355 1.492L20.5 17l-.488-.001.001 4.245c0 .853-.61 1.572-1.451 1.727l-.151.022-.154.007a1.762 1.762 0 0 1-1.749-1.602l-.007-.154v-.232h-9v.24c0 .917-.707 1.67-1.605 1.742L5.75 23c-.899 0-1.649-.682-1.741-1.596l-.007-.153-.001-4.253L3.5 17a1.502 1.502 0 0 1-1.47-1.21l-.022-.145L2 15.5c0-.763.573-1.403 1.355-1.492L3.5 14l1.099-.001L6.2 9.672c.103-.265.292-.483.557-.621l.139-.062.123-.036C8.231 8.69 9.903 8.5 12 8.5zm-8 6.499h-.471l-.088.004a.496.496 0 0 0-.442.468l.004.088A.5.5 0 0 0 3.5 16l1.502-.001v5.227l.005.103A.749.749 0 0 0 6.5 21.25v-1.238h11v1.206l.004.103a.752.752 0 0 0 .727.679l.103-.005a.756.756 0 0 0 .678-.752v-5.246l1.46.003.087-.004a.496.496 0 0 0 .442-.468l-.004-.088A.5.5 0 0 0 20.5 15l-.5-.001V15H4v-.001zM7 16.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5-7c-2.023 0-3.624.18-4.73.42l-.05.014a.16.16 0 0 0-.084.092L5.665 14h12.682l-1.455-3.936-.025-.057c-.024-.044-.057-.07-.087-.076C15.627 9.68 14.023 9.5 12 9.5z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "TransportationCarFlightLineIcon",
                e.exports = l
            },
            9825: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M3.146 6.805l-.055.064a.498.498 0 0 0 .202.74l7.096 3.193-2.938 2.936-1.494-.335a1.49 1.49 0 0 0-1.38.4l-1.37 1.37-.053.063a.498.498 0 0 0 .186.735l3.148 1.54L8.03 20.66a.496.496 0 0 0 .797.133l1.367-1.367.103-.114c.288-.354.4-.824.297-1.274l-.341-1.48 2.936-2.936 3.203 7.085a.497.497 0 0 0 .804.148l1.775-1.776.103-.114c.291-.359.401-.835.292-1.29l-1.992-8.24 3.044-3.043a1.987 1.987 0 0 0 0-2.81l-.108-.101a1.987 1.987 0 0 0-2.701.101l-3.027 3.026-8.26-1.975a1.49 1.49 0 0 0-1.4.395L3.146 6.805zM4.4 15.383l.879-.878c.12-.12.294-.17.46-.133l1.76.396a.496.496 0 0 0 .46-.134l3.641-3.64.054-.064a.495.495 0 0 0-.202-.74L4.357 7 5.624 5.73a.495.495 0 0 1 .467-.131l8.53 2.038a.495.495 0 0 0 .467-.13l3.223-3.224a.992.992 0 1 1 1.405 1.405l-3.24 3.24a.493.493 0 0 0-.132.468l2.055 8.512.013.084a.496.496 0 0 1-.144.384l-1.267 1.267-3.202-7.086a.497.497 0 0 0-.804-.147l-3.64 3.638a.499.499 0 0 0-.132.463l.402 1.749.012.083a.496.496 0 0 1-.145.38l-.876.875-1.312-2.677a.49.49 0 0 0-.227-.227L4.4 15.383z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "TransportationFlight3LineIcon",
                e.exports = l
            },
            5613: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.986 4.5H8.5v11h1.998v-3.971h2.488a3.514 3.514 0 0 0 0-7.029zm-.083 2c.216 0 .42.021.61.064a1.18 1.18 0 0 1 .857.7c.087.194.13.44.13.736 0 .288-.05.528-.15.718-.099.19-.229.343-.389.458-.16.114-.335.197-.526.248a2.16 2.16 0 0 1-.558.076H10.5v-3z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "TransportationParkingFillIcon",
                e.exports = l
            },
            9839: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M14.595 6.197c-.257-.47-1.009-.708-2.469-.708-1.15 0-2.04.178-2.639.503-.716.456-1.194.92-1.509 1.497a6.264 6.264 0 0 1-.214.363c-.203.319-.724.997-.747 1.043l-.074.149-.15.074c-.453.227-.776.312-1.45.312-.815 0-1.405-.228-1.904-.728-.53-.53-.728-1.035-.728-1.775 0-.947.42-2.027 1.043-2.782.548-.891 1.567-1.592 3.144-2.268C8.352 1.282 10.078 1 12.126 1c2.387 0 4.231.282 5.577.888 1.293.613 2.228 1.513 2.876 2.738.607 1.145.898 2.74.898 4.691v5.88c0 .845.136 1.897.371 2.778.058.217.112.429.174.684l.135.55c.076.304.129.473.14.49l.085.127v.151c0 .82-.253 1.384-.987 1.869l.083-.053c-.345.268-1.222.672-1.593.808l-.017.008h-.007c-.132.047-.189.055-.111 0-.36 0-.677-.09-1.01-.269-.208-.11-.413-.247-.818-.525-.524-.35-.987-.89-1.54-1.756-1.151.84-2.252 1.482-3.186 1.811-1.43.5-2.7.74-4.106.74-1.516 0-2.7-.284-3.713-.893-1.015-.508-1.727-1.189-2.448-2.23-.62-.894-.929-1.951-.929-3.063 0-1.537.428-2.753 1.35-3.816.933-1.078 2.255-1.81 3.83-2.09.138-.068.309-.126.528-.184.207-.054.447-.107.835-.186l.513-.103.559-.114c.358-.09.71-.17 1.103-.252.239-.05 1.114-.225.965-.195.494-.1.825-.174 1.136-.257-.002 0 1.034-.323 1.36-.42.408-.123.782-.229 1.148-.322-.135-.996-.391-1.773-.732-2.288zm6.592 13.255l-.136-.555a32.985 32.985 0 0 0-.17-.664 12.513 12.513 0 0 1-.404-3.037V9.317c0-1.803-.263-3.245-.782-4.224-.548-1.035-1.323-1.781-2.412-2.297-1.185-.533-2.9-.796-5.157-.796-1.927 0-3.527.262-4.842.8-1.397.598-2.263 1.195-2.717 1.924-.522.637-.856 1.498-.856 2.203 0 .481.098.73.435 1.068.306.306.639.435 1.197.435.446 0 .633-.035.888-.15.192-.277.566-.772.689-.964.064-.101.124-.202.18-.306.405-.742 1.002-1.322 1.88-1.879.793-.433 1.842-.642 3.146-.642 1.794 0 2.86.337 3.324 1.191.468.703.792 1.784.921 3.138l.041.434-.424.1c-.485.114-.97.246-1.521.412-.32.096-1.351.418-1.372.424-.353.094-.7.172-1.213.276.144-.03-.725.145-.96.194-.38.08-.72.156-1.083.247l-.585.12-.512.103c-.37.075-.596.125-.779.173a1.67 1.67 0 0 0-.36.125l-.175.064c-1.386.231-2.528.855-3.323 1.773C3.345 14.139 3 15.12 3 16.423c0 .915.251 1.773.751 2.494.633.914 1.226 1.481 2.107 1.924.88.527 1.886.768 3.232.768 1.286 0 2.447-.217 3.774-.682.933-.33 2.119-1.05 3.352-1.993l.444-.34.288.48c.617 1.028 1.073 1.605 1.529 1.909.418.286.576.392.733.475.163.087.302.134.448.147.17-.07.43-.167.488-.191.27-.114.5-.241.801-.463l-.053.032c.347-.232.468-.459.486-.889a4.375 4.375 0 0 1-.193-.642zM8.322 13.66c.154-.106.267-.18.381-.248.313-.187.599-.31.924-.382.283-.063 2.216-.547 2.9-.71 2.672-.635 2.636-.626 3.176-.823l.67-.244v1.425c0 1.877-.268 3.273-.771 3.986-.429.785-1.068 1.373-2.039 1.895-1.05.484-2.036.756-2.987.756-1.101 0-1.938-.309-2.615-.986-.66-.66-.986-1.428-.986-2.292 0-.813.286-1.463.933-2.095l.417-.285-.003.003zm.555.831c.134-.091-.307.211-.338.22-.389.388-.564.787-.564 1.326 0 .596.218 1.11.693 1.585.48.479 1.06.693 1.908.693.785 0 1.638-.235 2.54-.65.783-.422 1.28-.878 1.637-1.527.386-.55.62-1.771.62-3.46v-.02c-.38.104-1.032.259-2.614.635-.673.16-2.616.646-2.915.713-.21.047-.4.128-.626.263a6.91 6.91 0 0 0-.343.223h.002z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "BadgeDiscountIcon",
                e.exports = l
            },
            5513: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M14.309 7.442a1.238 1.238 0 1 1-.515-2.42 1.238 1.238 0 0 1 .515 2.42zm4.462-1.968l.931 3.51a2.981 2.981 0 0 1-.408 2.238l-6.03 9.631 8.427-.058-.048-12.122a.983.983 0 0 0-.279-.69l-2.593-2.509zm-1.535-4.067c.172.04.336.125.472.256l5.059 4.895a2.99 2.99 0 0 1 .876 2.111l.048 12.129a1.996 1.996 0 0 1-1.99 1.997l-10.306.071a1.997 1.997 0 0 1-1.631-.247L1.16 17.033a1.996 1.996 0 0 1-.592-2.754L7.333 3.474a3.017 3.017 0 0 1 1.94-1.306l6.553-1.034a1.84 1.84 0 0 1 1.41.273zm-6.493 19.464h.006l.145-.002 6.713-10.723a.976.976 0 0 0 .15-.697l-1.68-6.332-6.44 1.017a.983.983 0 0 0-.617.416L2.26 15.346l-.007.011 8.49 5.514zM8.92 16.05l-.011.016a1 1 0 0 1-1.657-1.12l-.373-.261a1 1 0 0 1 1.148-1.639l1.611 1.129a.298.298 0 0 0 .421-.405l-1.178-1.8a2.298 2.298 0 0 1 2.816-3.373l.01-.016a1 1 0 0 1 1.658 1.12l.366.257a1 1 0 0 1-1.147 1.638l-1.607-1.125a.298.298 0 0 0-.421.405l1.178 1.8a2.298 2.298 0 0 1-2.814 3.374z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "BadgePriceDisplayBoldIcon",
                e.exports = l
            },
            6520: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M6.981 2.268c1.03.503 1.89 1.401 2.612 2.582.64 1.047 1.593 3.445 1.316 2.914.15.433.024.878-.318 1.175l-.098.077-2.1 1.535c.685 2.087 2.238 3.575 4.276 4.797.225-.235.528-.59 1.09-1.263l.145-.175.05-.06c.186-.223.32-.383.469-.556.3-.319.75-.452 1.18-.314 1.107.355 2.12 1.049 3.05 1.986.477.481.895.988 1.289 1.53.097.133.132.183.254.36l.069.1.057-.001.142.277c.063.123.103.233.124.35.016.09.02.148.016.376-.188 1.248-1.048 2.361-2.347 3.35-.774.59-1.63 1.072-2.216 1.333a.754.754 0 0 1-.372.153l-.069.007-.07.002h-.043c-.03.001-.03.001-.135-.006-5.84-1.01-9.704-4.192-11.94-8.76A19.626 19.626 0 0 1 1.79 9.145c-.177-.914-.266-1.707-.285-2.143l-.003-.11-.004-.255.026-.169c.372-1.095 1.136-2.033 2.174-2.832.499-.384 1.03-.712 1.574-.994.316-.163.823-.394.756-.358a1.02 1.02 0 0 1 .954-.016zm-.484.899c.032-.017-.483.217-.766.363a9.474 9.474 0 0 0-1.424.899c-.789.607-1.381 1.291-1.716 2.05l-.093.23.003.166c.026 1.488.535 4.119 1.81 6.723 2.048 4.186 5.525 7.112 10.715 8.132l.402.075.073-.002.07-.049c.517-.221 1.344-.681 2.08-1.242 1.113-.846 1.823-1.767 1.96-2.62a.974.974 0 0 0-.007-.131.168.168 0 0 0-.014-.04l-.016-.033.065-.033c-.498-.523-1.29-1.574-1.696-1.985-.826-.832-1.71-1.438-2.647-1.738a.132.132 0 0 0-.13.03l-.34.403-.103.125-.05.06c-.907 1.089-1.218 1.45-1.539 1.741l-.06.055-.269.236-.31-.178c-.949-.542-1.766-1.103-2.604-1.885-1.149-1.073-2.006-2.302-2.463-3.703l-.098-.327-.092-.333.279-.204 2.392-1.748c.063-.044.07-.066.082-.048-.018-.035-.235-.66-.363-.981-.25-.63-.543-1.238-.888-1.804-.631-1.032-1.365-1.798-2.198-2.205-.024-.012-.021-.012-.045 0zm13.585 13.79l-.071.003.223-.004c-.031-.012-.07-.004-.152.001zM17 6.922a3.8 3.8 0 0 1 1.08 3.236.5.5 0 0 1-.989-.143 2.8 2.8 0 0 0-3.185-3.169.5.5 0 0 1-.148-.99A3.8 3.8 0 0 1 17 6.923zm-3.051-5.375a7.684 7.684 0 0 1 8.487 8.498.5.5 0 0 1-.994-.112A6.684 6.684 0 0 0 14.06 2.54a.5.5 0 0 1-.11-.994z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "HotelFacilitiesTelephoneIcon",
                e.exports = l
            },
            2101: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5zm4.727-17.135l-7.047 8.58-1.933-2.174A1 1 0 0 0 6.253 14.1l2.71 3.048a1 1 0 0 0 1.52-.03l7.79-9.483a1 1 0 0 0-1.546-1.27z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "RoomFilterGenericFilledIcon",
                e.exports = l
            },
            4555: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("defs", null, a.createElement("path", {
                        id: "download-apps-bold_24px-a",
                        d: "M2.11 18.218a1.002 1.002 0 0 1-.001-.47L2.062 4.051a2 2 0 0 1 2-2h3.525a1 1 0 1 1 0 2H4.062l.044 12.929h10.926v-.273a1 1 0 1 1 2 0v4.238a2 2 0 0 1-2 2H4.12a2 2 0 0 1-2-1.996l-.01-2.73zm2.003.762l.007 1.965h10.912V18.98H4.112zm12.594-8.023a1.002 1.002 0 0 1-1.414 0l-2.25-2.25a1 1 0 1 1 1.414-1.414l.543.543V4.25a1 1 0 0 1 2 0v3.586l.543-.543a1 1 0 0 1 1.414 1.414l-2.25 2.25zM16 14.25a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
                    })), a.createElement("use", {
                        xlinkHref: "#download-apps-bold_24px-a"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "WebElementDownloadAppsBoldIcon",
                e.exports = l
            },
            4849: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("defs", null, a.createElement("path", {
                        id: "bookings_24px-a",
                        d: "M20.538 13.29a1.661 1.661 0 0 1 1.091 1.938l-1.47 7.37a.5.5 0 0 1-.49.402h-8a.5.5 0 0 1-.45-.282l-3.505-7.23A1.671 1.671 0 0 1 9.169 13h.501c.631.002 1.227.288 1.622.778l.077.095.3.373V7a2 2 0 1 1 4 0v4.641l4.87 1.65zm.114 1.727a.665.665 0 0 0-.435-.78l-5.209-1.763a.5.5 0 0 1-.34-.474V7a1 1 0 1 0-2 0v8.693a.5.5 0 0 1-.895.305 78.424 78.424 0 0 0-1.182-1.497l-.077-.094A1.091 1.091 0 0 0 9.67 14h-.5a.671.671 0 0 0-.577.332.687.687 0 0 0 .008.694L11.982 22h7.277l1.393-6.983zM9.017 9.5a.5.5 0 1 1 0 1H3.502a1.5 1.5 0 0 1-1.5-1.5V3.48a1.5 1.5 0 0 1 1.5-1.5h17.034a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5h-2.412a.5.5 0 1 1 0-1h2.412a.5.5 0 0 0 .5-.5V3.48a.5.5 0 0 0-.5-.5H3.502a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 .5.5h5.515z"
                    })), a.createElement("use", {
                        xlinkHref: "#bookings_24px-a"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "WebMenuBookingsIcon",
                e.exports = l
            },
            4750: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("defs", null, a.createElement("path", {
                        id: "pointsmax-line-logo_24px-a",
                        d: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.839-8.532c.903 0 1.629-.706 1.629-1.57v-.828c0-.864-.726-1.57-1.63-1.57H10.5v3.968h2.339zM10.5 17a.5.5 0 1 1-1 0V9a.5.5 0 0 1 .5-.5h2.839c1.449 0 2.629 1.147 2.629 2.57v.828c0 1.422-1.18 2.57-2.63 2.57H10.5V17zM9.895 4.8a.5.5 0 1 1 .28.96 6.515 6.515 0 0 0-4.417 4.42.5.5 0 0 1-.96-.28 7.515 7.515 0 0 1 5.097-5.1z"
                    })), a.createElement("use", {
                        xlinkHref: "#pointsmax-line-logo_24px-a"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "WebMenuPointsmaxLineLogoIcon",
                e.exports = l
            },
            6347: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M4.5 21.901h14.965a.5.5 0 0 0 .5-.5v-2.46H4v2.46a.5.5 0 0 0 .5.5zm14.965-19.9H4.5a.5.5 0 0 0-.5.5v1.44h15.965v-1.44a.5.5 0 0 0-.5-.5zM4 17.94h15.965v-13H4v13zm.5-16.94h14.965c.827 0 1.5.671 1.5 1.5v18.9c0 .827-.673 1.5-1.5 1.5H4.5c-.827 0-1.5-.673-1.5-1.5v-18.9C3 1.671 3.673 1 4.5 1zm10.489 13.507v-4.293a.5.5 0 0 0-.5-.5H9.5a.5.5 0 0 0-.5.5v4.293a.5.5 0 0 0 .5.5h4.989a.5.5 0 0 0 .5-.5zm-3.625-7.066c-.627 0-1.137.509-1.137 1.136v.137h3.546v-.137c0-.627-.51-1.136-1.137-1.136h-1.272zm3.409 1.3a1.502 1.502 0 0 1 1.216 1.473v4.293c0 .827-.673 1.5-1.5 1.5H9.5c-.827 0-1.5-.673-1.5-1.5v-4.293a1.5 1.5 0 0 1 1.227-1.473v-.164c0-1.178.958-2.136 2.137-2.136h1.272c1.178 0 2.137.958 2.137 2.136v.165zM12 10.943a1 1 0 1 1-.001 2 1 1 0 0 1 0-2z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "WebMenuPrivacyPolicyIcon",
                e.exports = l
            },
            5038: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("defs", null, a.createElement("path", {
                        id: "search_24px-a",
                        d: "M16.864 16.134l4.497 4.471a.5.5 0 0 1-.705.71l-4.497-4.472a8.5 8.5 0 1 1 .706-.708zM10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
                    })), a.createElement("use", {
                        xlinkHref: "#search_24px-a"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "WebMenuSearchIcon",
                e.exports = l
            },
            2238: function(e, t, n) {
                var r = n(8156)
                  , i = n(6197)
                  , a = function(e) {
                    if (e && e.__esModule)
                        return e;
                    var t = Object.create(null);
                    return e && Object.keys(e).forEach((function(n) {
                        if ("default" !== n) {
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            Object.defineProperty(t, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        }
                    }
                    )),
                    t.default = e,
                    Object.freeze(t)
                }(r)
                  , o = function(e) {
                    return a.createElement("svg", e, a.createElement("path", {
                        d: "M5.5 9a.5.5 0 0 1 0-1H15a.5.5 0 1 1 0 1H5.5zm0 3a.5.5 0 1 1 0-1h4.445a.5.5 0 1 1 0 1H5.5zm0-6a.5.5 0 0 1 0-1h9.44a.5.5 0 1 1 0 1H5.5zm5 16a.5.5 0 1 1 0 1h-7A1.5 1.5 0 0 1 2 21.5v-19A1.5 1.5 0 0 1 3.5 1h11.293a1.5 1.5 0 0 1 1.06.44l3.708 3.706A1.5 1.5 0 0 1 20 6.207v3.903a.5.5 0 1 1-1 0V6.207a.5.5 0 0 0-.147-.353l-3.707-3.708A.5.5 0 0 0 14.793 2H3.5a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h7zm6-10.5c3.301 0 6 2.699 6 6s-2.699 6-6 6-6-2.699-6-6 2.699-6 6-6zm0 1c-2.749 0-5 2.251-5 5s2.251 5 5 5 5-2.251 5-5-2.251-5-5-5zm.49 7.583a.5.5 0 0 1-1 .002l-.007-3.646a.5.5 0 0 1 1-.002l.007 3.646zm-.007-5.354a.5.5 0 0 1-1 0v-.145a.5.5 0 0 1 1 0v.145z"
                    }))
                };
                o.defaultProps = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                };
                var l = a.memo((function(e) {
                    return a.createElement(i.SvgIcon, e, a.createElement(o, {
                        width: "1em",
                        height: "1em"
                    }))
                }
                ));
                l.displayName = "WebMenuTermsOfUseIcon",
                e.exports = l
            },
            1035: function(e) {
                e.exports = f
            },
            2072: function(e) {
                e.exports = c
            },
            8787: function(e) {
                e.exports = a
            },
            5566: function(e) {
                e.exports = y
            },
            7326: function(e) {
                e.exports = g
            },
            8871: function(e) {
                e.exports = h
            },
            8532: function(e) {
                e.exports = v
            },
            8194: function(e) {
                e.exports = b
            },
            7151: function(e) {
                e.exports = w
            },
            2144: function(e) {
                e.exports = C
            },
            5920: function(e) {
                e.exports = x
            },
            4351: function(e) {
                e.exports = S
            },
            8273: function(e) {
                e.exports = M
            },
            8435: function(e) {
                e.exports = k
            },
            4186: function(e) {
                e.exports = i
            },
            4625: function(e) {
                e.exports = p
            },
            6197: function(e) {
                e.exports = u
            },
            732: function(e) {
                e.exports = l
            },
            4424: function(e) {
                e.exports = s
            },
            2478: function(e) {
                e.exports = N
            },
            8156: function(e) {
                e.exports = r
            },
            6322: function(e) {
                e.exports = m
            },
            1608: function(e) {
                e.exports = o
            },
            6874: function(e) {
                e.exports = d
            }
        }
          , t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i)
                return i.exports;
            var a = t[r] = {
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n),
            a.exports
        }
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, {
                a: t
            }),
            t
        }
        ,
        n.d = function(e, t) {
            for (var r in t)
                n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ;
        var E = {};
        return function() {
            n.r(E),
            n.d(E, {
                AgodaMenus: function() {
                    return eu
                },
                AnalyticsActions: function() {
                    return Rt
                },
                BreadcrumbType: function() {
                    return gm
                },
                Breadcrumbs: function() {
                    return vm
                },
                CitiProfile: function() {
                    return Om
                },
                CurrencyMenu: function() {
                    return xu
                },
                DevicePlatform: function() {
                    return qp
                },
                FeatureId: function() {
                    return Yr
                },
                FlagTypes: function() {
                    return Up
                },
                GetCurrencyList: function() {
                    return Le
                },
                GetLanguages: function() {
                    return _e
                },
                GetUserNotifications: function() {
                    return je
                },
                Header: function() {
                    return Wp
                },
                HeaderMobileComponent: function() {
                    return hm
                },
                HeaderMobileHamburgerButton: function() {
                    return Fm
                },
                LanguageMenu: function() {
                    return Vc
                },
                LayoutLoginParams: function() {
                    return De
                },
                LoginMenu: function() {
                    return Md
                },
                MainMenuLinks: function() {
                    return hr
                },
                MenuFooter: function() {
                    return Ku
                },
                MenuHeader: function() {
                    return Vo
                },
                MenuIcon: function() {
                    return Zl
                },
                MenuNavigation: function() {
                    return ec
                },
                MenuNavigationKey: function() {
                    return To
                },
                MenuState: function() {
                    return yc
                },
                MenuSubItem: function() {
                    return Sm
                },
                MenuWithOverlay: function() {
                    return oc
                },
                MyBookingsMenu: function() {
                    return Cm
                },
                NotificationIcon: function() {
                    return Pe
                },
                PartnerLoyaltyProfile: function() {
                    return Em
                },
                PointsMaxTrafficType: function() {
                    return Rc
                },
                PriceView: function() {
                    return qa
                },
                UserMenuViewModelApi: function() {
                    return Re
                },
                VipThemeType: function() {
                    return Hp
                },
                WhiteLabelIds: function() {
                    return h
                },
                defaultIconStyles: function() {
                    return Ne
                },
                defaultMenus: function() {
                    return Fc
                },
                getLocalizedUrl: function() {
                    return Zs
                },
                getMenuList: function() {
                    return Xu
                },
                menuNavigationInfoList: function() {
                    return Jl
                }
            });
            var e, t, r, i, a = n(8156), o = n.n(a), l = n(4186), s = n(8787), c = n(1608), u = n.n(c), d = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, m = (0,
            c.createGlobalStyle)(e || (e = d(['\n    div[data-placement="bottom-end"][style*="z-index: 1400"] {\n        z-index: 1200 !important;\n    }\n'], ['\n    div[data-placement="bottom-end"][style*="z-index: 1400"] {\n        z-index: 1200 !important;\n    }\n']))), p = u().section.withConfig({
                displayName: "Headerstyled__HeaderSection",
                componentId: "sc-vtperc-0"
            })(t || (t = d(["\n    display: flex;\n    padding: 0 ", ";\n    background-color: ", ";\n    color: ", ";\n    align-items: center;\n    flex: 1 1 0;\n\n    a {\n        text-decoration: none;\n    }\n"], ["\n    display: flex;\n    padding: 0 ", ";\n    background-color: ", ";\n    color: ", ";\n    align-items: center;\n    flex: 1 1 0;\n\n    a {\n        text-decoration: none;\n    }\n"])), (function(e) {
                return e.theme.spacing.L
            }
            ), (function(e) {
                return e.theme.palette.header.background
            }
            ), (function(e) {
                return e.theme.palette.header.text.color
            }
            )), f = u()(l.Box).withConfig({
                displayName: "Headerstyled__RightContainer",
                componentId: "sc-vtperc-1"
            })(r || (r = d(["\n    flex: 1;\n    min-width: unset;\n    @media (max-width: 768px) {\n        min-width: 0;\n    }\n\n    & a {\n        text-decoration: none;\n\n        &:hover {\n            text-decoration: none;\n        }\n\n        body:not(.themed) & {\n            color: ", ";\n        }\n    }\n"], ["\n    flex: 1;\n    min-width: unset;\n    @media (max-width: 768px) {\n        min-width: 0;\n    }\n\n    & a {\n        text-decoration: none;\n\n        &:hover {\n            text-decoration: none;\n        }\n\n        body:not(.themed) & {\n            color: ", ";\n        }\n    }\n"])), (function(e) {
                return e.theme.palette.text[800]
            }
            )), y = u().span.withConfig({
                displayName: "Headerstyled__SpanIconWrapper",
                componentId: "sc-vtperc-2"
            })(i || (i = d(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
            function g(e) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                g(e)
            }
            var h, v = function() {
                return v = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                v.apply(this, arguments)
            }, b = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator
                  , n = t && e[t]
                  , r = 0;
                if (n)
                    return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && r >= e.length && (e = void 0),
                            {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, w = {
                dataId: "data-component",
                dataValue: "data-value",
                dataSection: "data-section",
                dataSelenium: "data-selenium",
                dataElementName: "data-element-name",
                dataEventVersion: 1,
                fetch: {},
                callbacks: {
                    onCurrencySelected: function() {},
                    onLanguageSelected: function() {},
                    onCartIngressSelected: function() {},
                    clearPriceFilter: function() {},
                    signOut: function() {
                        return function() {}
                    },
                    redirect: function() {},
                    updateApplyGiftcard: function() {},
                    updatePriceView: function() {}
                },
                featureConfigs: {},
                baseApiUrl: "",
                cms: {},
                languageId: 1,
                icons: {},
                selectedLanguage: {},
                hideLanguage: !1,
                shouldShowCurrency: !0
            }, C = v({}, w), x = function e(t) {
                var n, r, i = Object.getOwnPropertyNames(t);
                try {
                    for (var a = b(i), l = a.next(); !l.done; l = a.next()) {
                        var s = t[l.value];
                        s && "object" === g(s) && !o().isValidElement(s) && e(s)
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        l && !l.done && (r = a.return) && r.call(a)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
                return Object.freeze(t)
            }, S = function(e) {
                C = v(v({}, C), e),
                x(C)
            }, k = function(e) {
                var t = C
                  , n = {};
                return e.dataComponentId && (n[t.dataId || ""] = e.dataComponentId,
                t.dataSelenium && (n[t.dataSelenium] = e.dataComponentId)),
                t.dataValue && e.dataValue && (n[t.dataValue] = e.dataValue),
                t.dataSection && e.dataSection && (n[t.dataSection] = e.dataSection),
                t.dataSelenium && e.dataSelenium && (n[t.dataSelenium] = e.dataSelenium),
                t.dataElementName && e.dataElementName && (n[t.dataElementName] = e.dataElementName),
                t.dataEventVersion && e.dataEventVersion && (n[t.dataEventVersion] = e.dataEventVersion),
                n
            }, M = function(e) {
                return (null == e ? void 0 : e.dataEventVersion) || 1
            }, N = function(e, t) {
                var n = C
                  , r = {};
                return r[n.dataId || ""] = e,
                n.dataElementName && (r[n.dataElementName] = e),
                n.dataEventVersion && (r[n.dataEventVersion] = t),
                r
            }, P = function(e) {
                return {
                    dataId: e.dataId,
                    dataValue: e.dataValue,
                    dataSection: e.dataSection,
                    dataSelenium: e.dataSelenium,
                    dataElementName: e.dataElementName,
                    dataEventVersion: e.dataEventVersion
                }
            }, V = function(e, t) {
                if (e[t])
                    return e[t];
                var n = function(e) {
                    return e ? e.charAt(0).toLowerCase() + e.slice(1) : ""
                }(t);
                return e[n]
            }, T = function() {
                return C.fetch
            }, O = function() {
                return C.baseApiUrl
            }, I = function() {
                return C.callbacks
            }, z = function(e) {
                return C.cms[e]
            }, A = function(e) {
                return V(C.featureConfigs, e)
            }, F = function(e, t) {
                return V(e, t)
            }, B = function(e) {
                return !!A(e)
            };
            !function(e) {
                e[e.All = 0] = "All",
                e[e.Agoda = 1] = "Agoda",
                e[e.Jtb = 2] = "Jtb",
                e[e.Japanican = 3] = "Japanican",
                e[e.Rurubu = 4] = "Rurubu",
                e[e.Priceline = 5] = "Priceline",
                e[e.ClubPremier = 14] = "ClubPremier",
                e[e.TMobile = 32] = "TMobile",
                e[e.ClubTravel = 45] = "ClubTravel",
                e[e.LotteDFS = 47] = "LotteDFS",
                e[e.ANA = 50] = "ANA",
                e[e.CitiUS = 51] = "CitiUS",
                e[e.CitiUSUat1 = 5101] = "CitiUSUat1",
                e[e.CitiUSUat2 = 5102] = "CitiUSUat2",
                e[e.CitiUSUat3 = 5103] = "CitiUSUat3",
                e[e.CitiMexico = 52] = "CitiMexico",
                e[e.KrisFlyer = 53] = "KrisFlyer",
                e[e.TestStrategicPartners = 999] = "TestStrategicPartners"
            }(h || (h = {}));
            var R = [h.CitiUS, h.CitiUSUat1, h.CitiUSUat2, h.CitiUSUat3]
              , D = o().memo((function(e) {
                return e.shouldi ? o().createElement(o().Fragment, null, e.children) : null
            }
            ));
            D.displayName = "ShouldiRender";
            var L = D
              , _ = function(e) {
                if ("" === e.cdnPath)
                    return null;
                var t = 0 === e.cdnPath.indexOf("http") ? e.cdnPath : e.cdnUrl + e.cdnPath;
                return e.size ? o().createElement("img", {
                    className: e.className,
                    src: t,
                    alt: e.alt || e.cdnPath,
                    width: e.size,
                    height: "auto"
                }) : o().createElement("img", {
                    className: e.className,
                    src: t,
                    alt: e.alt || e.cdnPath
                })
            };
            _.displayName = "CdnIcon";
            var j, q = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, H = function() {
                return H = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                H.apply(this, arguments)
            }, U = H(H({}, ["en-ca", "en-in", "en-gb", "en-za", "en-au", "en-sg", "en-nz", "en-ie"].reduce((function(e, t) {
                var n;
                return H(H({}, e), ((n = {})[t] = "us",
                n))
            }
            ), {})), ["es-ar", "es-mx"].reduce((function(e, t) {
                var n;
                return H(H({}, e), ((n = {})[t] = "es",
                n))
            }
            ), {})), W = u()(_).withConfig({
                displayName: "Flag__StyledCdnIcon",
                componentId: "sc-nifs7d-0"
            })(j || (j = q(["\n    border: none;\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 1.2;\n"], ["\n    border: none;\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 1.2;\n"]))), G = function(e) {
                var t, n, r = "/images/mobile/flag-".concat((t = e.flag,
                void 0 === (n = e.cultureCode) && (n = ""),
                U[n] || t), "@2x.png");
                return o().createElement(W, {
                    className: e.className,
                    size: e.size || 18,
                    cdnPath: r,
                    alt: e.alt,
                    cdnUrl: e.cdnUrl
                })
            };
            function X(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(n), !0).forEach((function(t) {
                        Y(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function Y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function $() {
                return $ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                $.apply(this, arguments)
            }
            function Z(e, t) {
                if (null == e)
                    return {};
                var n, r, i = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, i = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            function J(e, t) {
                return t || (t = e.slice(0)),
                Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            function Q(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                            !t || a.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw i
                            }
                        }
                        return a
                    }
                }(e, t) || ee(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ee(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0
                }
            }
            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            G.displayName = "Flag";
            var ne = n(732)
              , re = n(4424)
              , ie = u().h1.withConfig({
                displayName: "Typographystyled__TypographyStyled",
                componentId: "sc-j18mtu-0"
            })(["font-size:", ";line-height:", ";font-weight:", ";", ";", " margin:0;", " text-decoration:", ";html[dir='ltr'] &&{", ";}html[dir='rtl'] &&{", ";}"], (function(e) {
                return e.theme.typography[e.variant].textSize
            }
            ), (function(e) {
                return function(e) {
                    var t = e.short
                      , n = e.theme
                      , r = e.variant
                      , i = n.typography[r];
                    return t || "NONE" === i.long ? i.short : i.long
                }(e)
            }
            ), (function(e) {
                return e.theme.font.weights[e.theme.typography[e.variant].weight]
            }
            ), (function(e) {
                return (0,
                ne.textColor)(e.textColor, "plainText")
            }
            ), (function(e) {
                return (0,
                ne.text)(e.text)
            }
            ), (function(e) {
                return (0,
                ne.spacing)(e)
            }
            ), (function(e) {
                return e.textDecoration
            }
            ), (function(e) {
                return e.textAlign && "text-align:".concat(e.textAlign, ";")
            }
            ), (function(e) {
                return e.textAlign && "text-align:".concat(ne.OppositeDirections[e.textAlign], ";")
            }
            ));
            ie.displayName = "TypographyStyled",
            ie.defaultProps = {
                theme: re.coreDefaultTheme
            };
            var ae = ["as", "variant", "color", "children", "className"]
              , oe = {
                heading1: "h1",
                heading2: "h2",
                heading3: "h3",
                heading4: "h4",
                heading5: "h5",
                subHeading1: "h6",
                subHeading2: "h6",
                body1: "p",
                body1Strong: "p",
                body2: "p",
                body3: "p",
                body4: "p",
                caption1: "span",
                caption2: "span",
                caption3: "span",
                pricing1: "span",
                pricing2: "span",
                paragraph1: "span",
                paragraph2: "span"
            }
              , le = a.forwardRef((function(e, t) {
                var n = e.as
                  , r = e.variant
                  , i = e.color
                  , o = e.children
                  , l = e.className
                  , s = void 0 === l ? "" : l
                  , c = Z(e, ae)
                  , u = Q((0,
                ne.getTextColor)(i), 2)
                  , d = u[0]
                  , m = u[1];
                return a.createElement(ie, $({
                    as: n || oe[r],
                    ref: t,
                    variant: r,
                    textColor: d,
                    text: m,
                    className: "kite-js-Typography ".concat(s)
                }, c), o)
            }
            ));
            le.displayName = "Typography",
            le.defaultProps = {
                variant: "heading1",
                short: !0
            },
            le.Style = ie;
            var se, ce, ue = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, de = function() {
                return de = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                de.apply(this, arguments)
            }, me = u().div.withConfig({
                displayName: "HeaderItem__HeaderItemContainer",
                componentId: "sc-1xwqe53-0"
            })(ce || (ce = ue(["\n    text-align: center;\n    cursor: pointer;\n    ", ";\n"], ["\n    text-align: center;\n    cursor: pointer;\n    ", ";\n"])), (function(e) {
                return e.displayName && (0,
                c.css)(se || (se = ue(["min-width: ", ""], ["min-width: ", ""])), e.theme.spacing.XL)
            }
            )), pe = o().memo((function(e) {
                var t = o().useCallback((function(t) {
                    "Enter" === t.key && e.onClick()
                }
                ), [e.onClick]);
                return o().createElement(l.Box, de({
                    display: "flex",
                    alignSelf: "center",
                    alignItems: "center",
                    p: e.displayName ? "NONE" : "L",
                    onClick: e.onClick,
                    role: "button",
                    onKeyDown: t,
                    width: "100%",
                    tabIndex: 0
                }, k({
                    dataComponentId: e.dataComponent,
                    dataValue: e.dataValue
                })), o().createElement(me, null, e.children), e.displayName && o().createElement(le, de({
                    as: "span",
                    variant: e.isStrongText ? "body1" : "body2",
                    px: "S"
                }, k({
                    dataComponentId: e.nameDataComponent
                })), e.name))
            }
            )), fe = pe, ye = function(e) {
                var t, n = e.selectedLanguage;
                return n.name && 0 !== n.name.length ? (t = e.isEnterpriseWhitelabel ? a.createElement(l.Span, {
                    textSize: "S",
                    color: 500,
                    role: "button"
                }, n.name) : a.createElement(G, {
                    cultureCode: n.cultureCode,
                    flag: n.flag,
                    size: 26,
                    alt: n.name,
                    cdnUrl: e.cdnUrl
                }),
                a.createElement(a.Fragment, null, a.createElement(fe, {
                    dataComponent: "language-container-selected-language",
                    dataValue: n.cultureCode,
                    displayName: e.displayName,
                    isStrongText: void 0 === e.isDropDown || !e.isDropDown,
                    name: n.name,
                    onClick: function() {
                        e.openLanguagePopUp(),
                        e.closeHamburgerMenu && e.closeHamburgerMenu(),
                        e.analytics.click("language-popup", 3)
                    }
                }, t))) : null
            };
            ye.displayName = "LanguageContainer";
            var ge, he, ve, be = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, we = u()(l.Box).withConfig({
                displayName: "NotificationIconstyled__StyledIconContainer",
                componentId: "sc-1fi401s-0"
            })(ge || (ge = be(["\n    html[dir='rtl'] & {\n        transform: scaleX(-1);\n    }\n    position: relative;\n"], ["\n    html[dir='rtl'] & {\n        transform: scaleX(-1);\n    }\n    position: relative;\n"]))), Ce = u()(l.Box).withConfig({
                displayName: "NotificationIconstyled__CounterContainer",
                componentId: "sc-1fi401s-1"
            })(he || (he = be(["\n    html[dir='ltr'] & {\n        left: 55%;\n    }\n\n    html[dir='rtl'] & {\n        right: 55%;\n    }  \n"], ["\n    html[dir='ltr'] & {\n        left: 55%;\n    }\n\n    html[dir='rtl'] & {\n        right: 55%;\n    }  \n"]))), xe = u()(l.Button).withConfig({
                displayName: "NotificationIconstyled__NotificationButton",
                componentId: "sc-1fi401s-2"
            })(ve || (ve = be(["\n    &:focus {\n        outline: ", ";\n    }\n"], ["\n    &:focus {\n        outline: ", ";\n    }\n"])), (function(e) {
                return e.hasFocusOutline ? "1px auto -webkit-focus-ring-color" : "none"
            }
            )), Se = function() {
                return Se = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Se.apply(this, arguments)
            }, ke = {
                color: "alert",
                variant: "solid"
            }, Me = {
                padding: "1px 3px",
                boxSizing: "border-box"
            }, Ne = {
                size: "XXL",
                variant: "background",
                colorVariant: {
                    color: "primary",
                    variant: "darkSolid"
                }
            }, Ee = o().memo((function(e) {
                var t, n = e.notificationText, r = e.onClick, i = e.hasFocusOutline, a = n ? o().createElement(Ce, {
                    position: "absolute",
                    radius: "ROUNDED",
                    bottom: "47%",
                    backgroundColor: ke
                }, o().createElement(l.Box, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "17px",
                    minWidth: "17px",
                    style: Me
                }, o().createElement(le, {
                    variant: "caption1",
                    color: 0
                }, n))) : null, s = null !== (t = e.iconStyles) && void 0 !== t ? t : Ne;
                return o().createElement(l.Box, {
                    display: "flex",
                    alignSelf: "center",
                    alignItems: "center"
                }, o().createElement(xe, {
                    "data-component": "ShoppingCartIngressWithCounter",
                    variant: "no-style",
                    onClick: r,
                    "aria-label": "Shopping Cart Button",
                    hasFocusOutline: i
                }, o().createElement(we, null, o().createElement(l.Box, {
                    display: "flex"
                }, o().createElement(e.icon, Se({}, s)))), a))
            }
            )), Pe = Ee;
            Pe.displayName = "NotificationIcon";
            var Ve, Te, Oe = n(9124), Ie = n.n(Oe), ze = function() {
                return ze = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                ze.apply(this, arguments)
            }, Ae = function(e) {
                return a.createElement(l.Card, ze({
                    display: "flex",
                    px: "M",
                    py: "M"
                }, k({
                    dataComponentId: e.dataComponent
                })), a.createElement(l.DottedProgress, {
                    size: "M"
                }))
            }, Fe = function(e, t) {
                return T().get("".concat(O()).concat(e), t)
            }, Be = function(e, t, n) {
                return T().post("".concat(O()).concat(e), t, n)
            }, Re = "/api/cronos/layout/PageHeaderApi/UserMenuViewModel", De = "/api/cronos/layout/login/params", Le = "/api/cronos/layout/currency/getlist", _e = "/api/cronos/layout/culture/getlanguages", je = function() {
                return "/api/cronos/layout/notification/get"
            }, qe = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, a) {
                    function o(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, l)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }, He = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function l(l) {
                    return function(s) {
                        return function(l) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0,
                            l[0] && (o = 0)),
                            o; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, l[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (l = [2 & l[0], i.value]),
                                    l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        r = l[1],
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1],
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2],
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    l = t.call(e, o)
                                } catch (e) {
                                    l = [6, e],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            }, Ue = function(e, t) {
                return qe(void 0, void 0, Promise, (function() {
                    var n, r, i, a;
                    return He(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            n = {
                                "AG-Language-Id": e.toString()
                            },
                            [4, Fe(_e, n)];
                        case 1:
                            return r = o.sent().body,
                            i = function(e) {
                                if (e) {
                                    if ("SuggestedLanguageHeader"in e) {
                                        var t = e
                                          , n = t.Languages && t.Languages.length > 0 ? t.Languages.filter((function(e) {
                                            return e
                                        }
                                        )).map((function(e) {
                                            return function(e) {
                                                if ("CultureCode"in e) {
                                                    var t = e;
                                                    return {
                                                        cultureCode: t.CultureCode,
                                                        countryCode: t.CountryCode,
                                                        flag: t.Flag,
                                                        isForHeader: t.IsForHeader,
                                                        isSelected: t.IsSelected,
                                                        languageAbbr: t.LanguageAbbr,
                                                        languageId: t.LanguageId,
                                                        mainLocale: t.MainLocale,
                                                        realLanguageId: t.RealLanguageId,
                                                        translation: t.Translation,
                                                        uiCulture: t.UiCulture
                                                    }
                                                }
                                                return e
                                            }(e)
                                        }
                                        )) : [];
                                        return {
                                            languages: n || [],
                                            suggestedLanguageHeader: t.SuggestedLanguageHeader,
                                            allLanguagesHeader: t.AllLanguagesHeader,
                                            languageHeader: t.LanguageHeader
                                        }
                                    }
                                    return e
                                }
                            }(r),
                            [2, i];
                        case 2:
                            return a = o.sent(),
                            t.error("Error while fetching language", a),
                            [3, 3];
                        case 3:
                            return [2, void 0]
                        }
                    }
                    ))
                }
                ))
            }, We = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Ge = u()(l.Box).withConfig({
                displayName: "EnterpriseWhitelabelLanguageItemBox",
                componentId: "sc-10nyyz-0"
            })(Ve || (Ve = We(["\n    cursor: pointer;\n    padding: ", ";\n    border-width: 1px;\n    border-style: solid;\n    border-color: ", ";\n    border-radius: ", ";\n    background-color: transparent;\n    &:hover {\n        border-color: ", ";\n        background-color: ", ";\n        color: ", ";\n    }\n\n    // Flag, adding here because we could not override Flag style using styled(Flag)\n    & > i {\n        vertical-align: middle;\n\n        html[dir=ltr] & {\n            margin-right: ", ";\n        }\n        html[dir=rtl] & {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    cursor: pointer;\n    padding: ", ";\n    border-width: 1px;\n    border-style: solid;\n    border-color: ", ";\n    border-radius: ", ";\n    background-color: transparent;\n    &:hover {\n        border-color: ", ";\n        background-color: ", ";\n        color: ", ";\n    }\n\n    // Flag, adding here because we could not override Flag style using styled(Flag)\n    & > i {\n        vertical-align: middle;\n\n        html[dir=ltr] & {\n            margin-right: ", ";\n        }\n        html[dir=rtl] & {\n            margin-left: ", ";\n        }\n    }\n"])), (function(e) {
                return e.theme.spacing.L
            }
            ), (function(e) {
                return e.selected ? e.theme.palette.primary.bordered.border : "transparent"
            }
            ), (function(e) {
                return e.theme.border.L
            }
            ), (function(e) {
                return e.theme.palette.primary.darkSolid.background
            }
            ), (function(e) {
                return e.theme.palette.primary.darkSolid.background
            }
            ), (function(e) {
                return e.theme.palette.primary.solid.text
            }
            ), (function(e) {
                return e.theme.spacing.M
            }
            ), (function(e) {
                return e.theme.spacing.M
            }
            ));
            !function(e) {
                e.AE = "ae",
                e.EN = "en",
                e.ES = "es",
                e.MX = "mx",
                e.SA = "sa",
                e.US = "us",
                e.CA_ES = "ca-es",
                e.ES_CT = "es-ct"
            }(Te || (Te = {}));
            var Xe = function(e, t) {
                return e === Te.AE ? Te.SA : t && e == Te.ES ? Te.MX : e === Te.CA_ES ? Te.ES_CT : e
            }
              , Ke = n(2072)
              , Ye = n(9058)
              , $e = n(9338)
              , Ze = new Ke.ClientSideBehavior("MexicoFlagBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable)
              , Je = function() {
                return Je = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Je.apply(this, arguments)
            }
              , Qe = a.memo((function(e) {
                var t = a.useCallback((function(t) {
                    "keydown" !== t.type || "Enter" !== t.key && " " !== t.key || (e.language && e.onSelected && e.onSelected(e.language),
                    t.preventDefault())
                }
                ), [e.language, e.onSelected])
                  , n = a.useCallback((function() {
                    return e.language && e.onSelected && e.onSelected(e.language)
                }
                ), [e.language, e.onSelected]);
                if (!e.language)
                    return null;
                var r = e.getBehaviorManager().isEnabled(Ze)
                  , i = Xe(e.language.flag, r);
                return a.createElement(l.GridV2.Item, Je({
                    key: e.language.languageId,
                    sm: 6
                }, k({
                    dataComponentId: "language-popup-menu-item",
                    dataValue: e.language.cultureCode
                })), a.createElement(Ge, Je({
                    selected: e.language.isSelected,
                    onClick: n,
                    onKeyDown: t
                }, k({
                    dataComponentId: "language-popup-menu-item-box"
                }), {
                    role: "button",
                    tabIndex: 0
                }), a.createElement(l.Flag, {
                    flagSize: "S",
                    country: i
                }), a.createElement(le, {
                    as: "span",
                    variant: "body2",
                    short: !1
                }, e.language.translation)))
            }
            ));
            Qe.displayName = "EnterpriseWhitelabelLanguageItem";
            var et = function() {
                return et = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                et.apply(this, arguments)
            }
              , tt = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , nt = function(e) {
                var t = tt(a.useState(void 0), 2)
                  , n = t[0]
                  , r = t[1]
                  , i = a.useRef(null);
                a.useEffect((function() {
                    Ue(e.languageId, e.logger).then((function(e) {
                        e && e.languages && r(e)
                    }
                    )).catch((function(t) {
                        e.logger.error("Error while fetching language", t)
                    }
                    ))
                }
                ), []),
                a.useEffect((function() {
                    i && i.current && i.current.focus()
                }
                ), [n, i]);
                var o = a.useCallback((function(t) {
                    "keydown" !== t.type || "Enter" !== t.key && " " !== t.key || (e.onClose(),
                    t.preventDefault())
                }
                ), [e.onClose]);
                return n ? a.createElement(l.Card, et({
                    className: "LanguagePopup__LanguageContainer",
                    border: {
                        width: "NONE"
                    },
                    px: "NONE",
                    py: "NONE",
                    radius: "M",
                    shadow: "L"
                }, k({
                    dataComponentId: "language-popup"
                })), a.createElement(l.Box, {
                    width: "100%",
                    px: "L",
                    py: "XL",
                    border: {
                        direction: "bottom",
                        width: "S",
                        color: 100
                    },
                    className: "LanguagePopup__ButtonContainer",
                    position: "relative"
                }, a.createElement(l.Button, {
                    ref: i,
                    "aria-label": "back",
                    variant: "no-style",
                    startIcon: a.createElement(Ie(), {
                        size: "XL"
                    }),
                    iconSize: "XL",
                    px: "NONE",
                    py: "NONE",
                    style: {
                        position: "absolute"
                    },
                    isFocusIndicatorOutside: !0,
                    onClick: e.onClose,
                    onKeyDown: o
                }), a.createElement(le, {
                    variant: "body2",
                    short: !1,
                    style: {
                        textAlign: "center"
                    }
                }, n.languageHeader || "Language")), a.createElement(l.Box, {
                    py: "M"
                }, a.createElement(l.Box, et({
                    px: "L",
                    py: "M"
                }, k({
                    dataComponentId: "language-popup-section-all"
                })), a.createElement(le, {
                    variant: "body3",
                    color: 500,
                    short: !1
                }, n.allLanguagesHeader)), a.createElement(l.Box, {
                    clone: !0,
                    px: "L",
                    py: "S",
                    maxHeight: "45vh",
                    overflowY: "auto"
                }, a.createElement(l.GridV2, {
                    spacing: "L"
                }, n.languages.sort((function(e, t) {
                    return e.isSelected ? -1 : 1
                }
                )).map((function(t) {
                    return a.createElement(Qe, {
                        key: t.cultureCode,
                        language: t,
                        onSelected: e.onSelected,
                        getBehaviorManager: e.getBehaviorManager
                    })
                }
                )))))) : a.createElement(Ae, {
                    dataComponent: "language-popup-loading"
                })
            };
            nt.displayName = "EnterpriseWhitelabelLanguagePopup";
            var rt, it, at, ot, lt, st, ct = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, ut = u().div.withConfig({
                displayName: "ModalContainerstyled__ModalContainer",
                componentId: "sc-1naz9hv-0"
            })(rt || (rt = ct(["\n    background-color: transparent;\n    border: none;\n    border-radius: ", ";\n    cursor: pointer;\n    margin: 3% auto;\n    width: ", ";\n\n    /*\n      set min-width to make it working with children white-space: nowrap; property\n      More info: https://stackoverflow.com/questions/38223879/white-space-nowrap-breaks-flexbox-layout/38224283#38224283\n    */\n    min-width: 0;\n\n    &:focus {\n        outline: none;\n    }\n\n    & div {\n        &::-webkit-scrollbar {\n            width: 6px;\n            background-color: white;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: ", ";\n        }\n\n        &::-webkit-scrollbar-track {\n            background-color: ", ";\n        }\n    }\n\n    @media (max-width: 430px) {\n        width: 95%;\n        max-width: 95%;\n    }\n\n    @media (min-width: 431px) {\n        width: 85%;\n        max-width: 85%;\n    }\n\n    @media (min-width: 768px) {\n        width: 75%;\n        max-width: 75%;\n    }\n\n    @media (min-width: 1024px) {\n        width: 60%;\n        max-width: 60%;\n    }\n\n    @media (min-width: 1280px) {\n        width: 46%;\n        max-width: 50%;\n    }\n"], ["\n    background-color: transparent;\n    border: none;\n    border-radius: ", ";\n    cursor: pointer;\n    margin: 3% auto;\n    width: ", ";\n\n    /*\n      set min-width to make it working with children white-space: nowrap; property\n      More info: https://stackoverflow.com/questions/38223879/white-space-nowrap-breaks-flexbox-layout/38224283#38224283\n    */\n    min-width: 0;\n\n    &:focus {\n        outline: none;\n    }\n\n    & div {\n        &::-webkit-scrollbar {\n            width: 6px;\n            background-color: white;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: ", ";\n        }\n\n        &::-webkit-scrollbar-track {\n            background-color: ", ";\n        }\n    }\n\n    @media (max-width: 430px) {\n        width: 95%;\n        max-width: 95%;\n    }\n\n    @media (min-width: 431px) {\n        width: 85%;\n        max-width: 85%;\n    }\n\n    @media (min-width: 768px) {\n        width: 75%;\n        max-width: 75%;\n    }\n\n    @media (min-width: 1024px) {\n        width: 60%;\n        max-width: 60%;\n    }\n\n    @media (min-width: 1280px) {\n        width: 46%;\n        max-width: 50%;\n    }\n"])), (function(e) {
                return e.theme.radius.S
            }
            ), (function(e) {
                return e.width || "46%"
            }
            ), (function(e) {
                return e.theme.palette.background[200]
            }
            ), (function(e) {
                return e.theme.palette.background[0]
            }
            )), dt = function() {
                return dt = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                dt.apply(this, arguments)
            }, mt = function(e) {
                return a.createElement(l.Modal, dt({
                    open: e.open,
                    onClose: e.onClose,
                    customContainer: !0,
                    modalId: e.modalId
                }, k({
                    dataComponentId: e.dataComponent
                })), a.createElement(ut, dt({
                    width: e.width,
                    tabIndex: -1
                }, k({
                    dataComponentId: e.dataComponent,
                    dataSection: e.dataSection
                })), e.children))
            }, pt = mt, ft = ["theme", "color", "variant", "badgeSize", "fullWidth", "innerRef"], yt = ["iconSpacing", "variant", "color"], gt = ["iconSpacing", "variant", "color"], ht = {
                dark: "darkSolid",
                light: "light",
                solid: "solid",
                highlighted: "light"
            }, vt = u()((function(e) {
                e.theme,
                e.color,
                e.variant,
                e.badgeSize,
                e.fullWidth;
                var t = e.innerRef
                  , n = Z(e, ft);
                return a.createElement(l.Box, $({}, n, {
                    innerRef: t
                }))
            }
            )).withConfig({
                displayName: "Badgestyled__BadgeStyled",
                componentId: "sc-110jpdn-0"
            })(["", " ", " ", " ", " ", ""], (function(e) {
                var t = e.theme
                  , n = e.badgeSize
                  , r = e.variant
                  , i = e.radius;
                return (0,
                c.css)(lt || (lt = J(["\n        ", "\n        ", "\n    "])), "outlined" !== r && (0,
                ne.spacing)({
                    px: "transparent" === r ? "NONE" : t.badge[n].px,
                    py: t.badge[n].py
                }), (0,
                ne.radius)(i || t.badge[n].radius))
            }
            ), (function(e) {
                return e.fullWidth && "width:100%;"
            }
            ), (function(e) {
                return "transparent" === e.variant && function(e) {
                    return (0,
                    c.css)(at || (at = J(["\n    background-color: transparent;\n    ", "\n"])), (0,
                    ne.textColor)(e.color, "plainText"))
                }(e)
            }
            ), (function(e) {
                return ("outlined" === e.variant || "highlighted" === e.variant) && function(e) {
                    return (0,
                    c.css)(ot || (ot = J(["\n    border: 1px solid;\n    border-color: ", ";\n    ", "\n    ", "\n    ", "\n"])), e.theme.palette[e.color].bordered.border, function(e) {
                        var t = e.theme
                          , n = t.badge
                          , r = t.spacingNumber
                          , i = e.badgeSize
                          , a = n[i].px
                          , o = n[i].py
                          , l = r[a]
                          , s = r[o];
                        return "padding:".concat(s - 1, "px ").concat(l - 1, "px;")
                    }(e), "highlighted" !== e.variant && (0,
                    ne.backgroundColor)(e.color, "bordered"), (0,
                    ne.textColor)(e.color, "bordered"))
                }(e)
            }
            ), (function(e) {
                return ("solid" === e.variant || "dark" === e.variant || "light" === e.variant || "highlighted" === e.variant) && function(e) {
                    return (0,
                    c.css)(it || (it = J(["\n    ", "\n    ", "\n"])), (0,
                    ne.backgroundColor)(e.color, ht[e.variant]), "highlighted" !== e.variant && (0,
                    ne.textColor)(e.color, ht[e.variant]))
                }(e)
            }
            ));
            vt.defaultProps = {
                theme: re.coreDefaultTheme
            };
            var bt = function(e, t) {
                return (0,
                c.css)(st || (st = J(["\n    svg {\n        ", "\n        ", "\n        ", "\n    }\n"])), ("outlined" === t || "highlighted" === t) && (0,
                ne.svgColor)(e, "bordered", "text"), "transparent" === t && (0,
                ne.svgColor)(e, "plainText", "text"), ("solid" === t || "dark" === t || "light" === t) && (0,
                ne.svgColor)(e, ht[t], "text"))
            }
              , wt = u()((function(e) {
                e.iconSpacing,
                e.variant,
                e.color;
                var t = Z(e, yt);
                return a.createElement(l.Box, t)
            }
            )).withConfig({
                displayName: "Badgestyled__BadgeStartIconContainer",
                componentId: "sc-110jpdn-1"
            })(["", " display:flex;", ""], (function(e) {
                return bt(e.color, e.variant)
            }
            ), (function(e) {
                return (0,
                ne.margin)({
                    me: e.iconSpacing
                })
            }
            ));
            wt.defaultProps = {
                theme: re.coreDefaultTheme
            };
            var Ct = u()((function(e) {
                e.iconSpacing,
                e.variant,
                e.color;
                var t = Z(e, gt);
                return a.createElement(l.Box, t)
            }
            )).withConfig({
                displayName: "Badgestyled__BadgeEndIconContainer",
                componentId: "sc-110jpdn-2"
            })(["", " display:flex;", ""], (function(e) {
                return bt(e.color, e.variant)
            }
            ), (function(e) {
                return (0,
                ne.margin)({
                    ms: e.iconSpacing
                })
            }
            ));
            Ct.defaultProps = {
                theme: re.coreDefaultTheme
            };
            var xt = ["theme", "color", "variant", "startIcon", "endIcon", "highlight", "badgeSize", "children", "width", "fullWidth", "textAlign", "alignItems"]
              , St = a.forwardRef((function(e, t) {
                var n = e.theme
                  , r = e.color
                  , i = e.variant
                  , o = e.startIcon
                  , l = e.endIcon
                  , s = e.highlight
                  , c = e.badgeSize
                  , u = e.children
                  , d = e.width
                  , m = e.fullWidth
                  , p = e.textAlign
                  , f = e.alignItems
                  , y = Z(e, xt)
                  , g = n.badge[c]
                  , h = g.iconSize
                  , v = g.iconSpacing
                  , b = g.typography
                  , w = g.typographyHighlight;
                return a.createElement(vt, $({
                    innerRef: t,
                    color: r,
                    variant: i,
                    badgeSize: c,
                    display: "flex",
                    alignItems: f,
                    width: d || "fit-content",
                    fullWidth: m,
                    justifyContent: "center",
                    textAlign: p
                }, y), o && a.createElement(wt, {
                    iconSpacing: v,
                    color: r,
                    variant: i
                }, a.cloneElement(o, {
                    size: h
                })), a.Children.map(u, (function(e) {
                    return (0,
                    ne.isValidStringOrNumber)(e) ? a.createElement(le, {
                        variant: s ? w : b
                    }, e) : e
                }
                )), l && a.createElement(Ct, {
                    iconSpacing: v,
                    color: r,
                    variant: i
                }, a.cloneElement(l, {
                    size: h
                })))
            }
            ));
            St.displayName = "Badge",
            St.Style = vt,
            St.defaultProps = {
                theme: re.coreDefaultTheme,
                color: "primary",
                variant: "solid",
                badgeSize: "S",
                fullWidth: !1,
                highlight: !0,
                textAlign: "center",
                alignItems: "center"
            };
            var kt, Mt, Nt, Et, Pt, Vt, Tt, Ot, It, zt, At, Ft, Bt, Rt, Dt = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Lt = u().span.withConfig({
                displayName: "MenuLinkstyled__IconContainer",
                componentId: "sc-rfzdfl-0"
            })(kt || (kt = Dt(["\n    margin: 0;\n    display: inline-block;\n\n    svg {\n        vertical-align: middle;\n    }\n\n    html[dir=ltr] & {\n        margin-right: ", ";\n    }\n\n    html[dir=rtl] & {\n        margin-left: ", ";\n    }\n"], ["\n    margin: 0;\n    display: inline-block;\n\n    svg {\n        vertical-align: middle;\n    }\n\n    html[dir=ltr] & {\n        margin-right: ", ";\n    }\n\n    html[dir=rtl] & {\n        margin-left: ", ";\n    }\n"])), (function(e) {
                return e.theme.spacing.XS
            }
            ), (function(e) {
                return e.theme.spacing.XS
            }
            )), _t = u().div.withConfig({
                displayName: "MenuLinkstyled__BadgeContainer",
                componentId: "sc-rfzdfl-1"
            })(Mt || (Mt = Dt(["\n    position: absolute;\n    z-index: 1;\n    display: inline-block;\n    cursor: pointer;\n    width: max-content;\n    line-height: 0;\n\n    & > div {\n        padding: ", ";\n    }\n\n    & * {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n    }\n"], ["\n    position: absolute;\n    z-index: 1;\n    display: inline-block;\n    cursor: pointer;\n    width: max-content;\n    line-height: 0;\n\n    & > div {\n        padding: ", ";\n    }\n\n    & * {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n    }\n"])), (function(e) {
                return e.theme.spacing.XS
            }
            ), (function(e) {
                return e.theme.font.sizes.XS
            }
            ), (function(e) {
                return e.theme.font.weights.Normal
            }
            ), (function(e) {
                return e.theme.font.sizes.XS
            }
            )), jt = u().span.withConfig({
                displayName: "MenuLinkstyled__DropdownContainer",
                componentId: "sc-rfzdfl-2"
            })(Nt || (Nt = Dt(["\n    cursor: pointer;\n"], ["\n    cursor: pointer;\n"]))), qt = n(6874), Ht = n.n(qt), Ut = function() {
                return Ut = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ut.apply(this, arguments)
            }, Wt = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                var r, i, a = Ht().parse(e, !0), o = (r = t.reduce((function(e, t) {
                    return Ut(Ut({}, e), t)
                }
                ), {}),
                i = {},
                Object.keys(r).forEach((function(e) {
                    var t;
                    (function(e) {
                        return "number" == typeof e
                    }(t = r[e]) || t) && (i[e] = r[e])
                }
                )),
                i);
                return a.query = Ut(Ut({}, a.query), o),
                a.search = "",
                Ht().format(a)
            }, Gt = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Xt = u().div.withConfig({
                displayName: "LinkContainerstyled__MenuItemContainer",
                componentId: "sc-1iblxzq-0"
            })(Et || (Et = Gt(["\n    ", "\n"], ["\n    ", "\n"])), (function(e) {
                return e.showLinkAsDefaultText ? "\n        padding: ".concat(e.theme.spacing.S, ";\n        min-width: 220px;\n\n        a {\n             text-decoration: none;\n             color: ").concat(e.theme.palette.text[800], ";\n\n             &:active, &:focus, &:visited {\n                 color: ").concat(e.theme.palette.text[800], ";\n             }\n\n             &:hover {\n                 color: ").concat(e.theme.palette.header.text.hover, ";\n             }\n        }\n    ") : "\n        display: inline-block;\n        position: relative;\n        margin: 0 !important;\n        line-height: ".concat(e.theme.font.sizes.XXXXL, ";\n\n        a {\n            text-decoration: none;\n            font-weight: 500;\n            color: ").concat(e.theme.palette.header.text.color, ";\n\n            &:active, &:focus, &:visited {\n                color: ").concat(e.theme.palette.header.text.color, ";\n            }\n\n            &:hover {\n                color: ").concat(e.theme.palette.header.text.hover, ";\n            }\n        }\n    ")
            }
            )), Kt = u().div.withConfig({
                displayName: "LinkContainerstyled__LinkStyled",
                componentId: "sc-1iblxzq-1"
            })(Pt || (Pt = Gt(["\n    html[dir=ltr] & {\n        padding-left: ", ";\n        padding-right: 0;\n        ", "\n    }\n\n    html[dir=rtl] & {\n        padding-left: 0;\n        padding-right: ", ";\n        ", "\n    }\n"], ["\n    html[dir=ltr] & {\n        padding-left: ", ";\n        padding-right: 0;\n        ", "\n    }\n\n    html[dir=rtl] & {\n        padding-left: 0;\n        padding-right: ", ";\n        ", "\n    }\n"])), (function(e) {
                return e.theme.spacing[e.linkSpacing]
            }
            ), (function(e) {
                return e.useDrone && "\n            margin: 0 4px;\n            "
            }
            ), (function(e) {
                return e.theme.spacing[e.linkSpacing]
            }
            ), (function(e) {
                return e.useDrone && "\n            margin: 0 4px;\n            "
            }
            )), Yt = u().div.withConfig({
                displayName: "LinkContainerstyled__EllipsisLinkStyled",
                componentId: "sc-1iblxzq-2"
            })(Vt || (Vt = Gt([""], [""]))), $t = u().div.withConfig({
                displayName: "LinkContainerstyled__DroneEllipsisLinkStyled",
                componentId: "sc-1iblxzq-3"
            })(Tt || (Tt = Gt(["\n        padding-left: ", ";\n        padding-right: 0;\n        margin: 0 4px;\n        div:first-child  {\n            display: inline-block;\n        }\n"], ["\n        padding-left: ", ";\n        padding-right: 0;\n        margin: 0 4px;\n        div:first-child  {\n            display: inline-block;\n        }\n"])), (function(e) {
                return e.theme.spacing[e.linkSpacing]
            }
            )), Zt = u().span.withConfig({
                displayName: "LinkContainerstyled__EllipsisIconContainer",
                componentId: "sc-1iblxzq-4"
            })(Ot || (Ot = Gt(["\n    display: inline-block;\n    cursor: pointer;\n    vertical-align: middle;\n    padding-top: ", ";\n\n    html[dir=ltr] & {\n        padding-left: ", ";\n    }\n\n    html[dir=rtl] & {\n        padding-right: ", ";\n    }\n"], ["\n    display: inline-block;\n    cursor: pointer;\n    vertical-align: middle;\n    padding-top: ", ";\n\n    html[dir=ltr] & {\n        padding-left: ", ";\n    }\n\n    html[dir=rtl] & {\n        padding-right: ", ";\n    }\n"])), (function(e) {
                return e.theme.spacing.XS
            }
            ), (function(e) {
                return e.theme.spacing.XL
            }
            ), (function(e) {
                return e.theme.spacing.XL
            }
            )), Jt = u()(l.Box).attrs({
                as: "div"
            }).withConfig({
                displayName: "LinkContainerstyled__EllipsisTextContainer",
                componentId: "sc-1iblxzq-5"
            })(It || (It = Gt(["\n    cursor: pointer;\n    height: ", ";\n"], ["\n    cursor: pointer;\n    height: ", ";\n"])), (function(e) {
                return e.theme.font.sizes.XXXXL
            }
            )), Qt = (0,
            c.css)(zt || (zt = Gt(["\n    @media (max-width: 619px) {\n        & ul > li {\n            display: none;\n        }\n    }\n\n    @media (min-width: 620px) and (max-width: 767px) {\n        & ul > li:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 520px) and (max-width: 767px) {\n        & ul > li:nth-child(n+4) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 768px) and (max-width: 1023px) {\n        & ul > li:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 1024px) {\n        & ul > li {\n            display: inline-block;\n        }\n    }\n"], ["\n    @media (max-width: 619px) {\n        & ul > li {\n            display: none;\n        }\n    }\n\n    @media (min-width: 620px) and (max-width: 767px) {\n        & ul > li:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 520px) and (max-width: 767px) {\n        & ul > li:nth-child(n+4) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 768px) and (max-width: 1023px) {\n        & ul > li:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 1024px) {\n        & ul > li {\n            display: inline-block;\n        }\n    }\n"]))), en = (0,
            c.css)(At || (At = Gt(["\n    @media (max-width: 619px) {\n        > div {\n            display: none;\n        }\n    }\n\n    @media (min-width: 620px) and (max-width: 767px) {\n        > div:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 520px) and (max-width: 767px) {\n        > div:nth-child(n+4) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 768px) and (max-width: 1023px) {\n        > div:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 1024px) {\n        > div {\n            display: inline-block;\n        }\n    }\n"], ["\n    @media (max-width: 619px) {\n        > div {\n            display: none;\n        }\n    }\n\n    @media (min-width: 620px) and (max-width: 767px) {\n        > div:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 520px) and (max-width: 767px) {\n        > div:nth-child(n+4) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 768px) and (max-width: 1023px) {\n        > div:nth-child(n+3) {\n            display: none;\n        }\n    }\n\n    @media (min-width: 1024px) {\n        > div {\n            display: inline-block;\n        }\n    }\n"]))), tn = (0,
            c.css)(Ft || (Ft = Gt(['\n    // this is the container of the popover target\n    // this is the only way to select, unfortunately :(\n    div[aria-describedby] {\n        display: inline-block;\n    }\n\n    // this is the div that has the content of the popover\n    div[role="tooltip"] {\n        border-radius: 0;\n    }\n'], ['\n    // this is the container of the popover target\n    // this is the only way to select, unfortunately :(\n    div[aria-describedby] {\n        display: inline-block;\n    }\n\n    // this is the div that has the content of the popover\n    div[role="tooltip"] {\n        border-radius: 0;\n    }\n']))), nn = u()(l.Box).withConfig({
                displayName: "LinkContainerstyled__LinkContainerStyled",
                componentId: "sc-1iblxzq-6"
            })(Bt || (Bt = Gt(["\n    vertical-align: middle;\n\n    ", "\n"], ["\n    vertical-align: middle;\n\n    ", "\n"])), (function(e) {
                return e.useDrone ? "\n                > div {\n                    display: inline-block;\n                }\n\n                @media (max-width: 1450px) {\n                    > div:nth-child(n+6):not(:nth-last-of-type(-n+1)) {\n                        display: none;\n                    }\n                }\n                ".concat(en, "\n                ").concat(tn, "\n            ") : "\n                & ul > li {\n                    display: inline-block;\n                }\n\n                @media (max-width: 1450px) {\n                    & ul > li:nth-child(n+6):not(:nth-last-of-type(-n+1)) {\n                        display: none;\n                    }\n                }\n                ".concat(Qt, "\n            ")
            }
            ));
            !function(e) {
                e.Click = "click",
                e.Visit = "visit",
                e.Leave = "leave",
                e.Custom = "custom",
                e.Scroll = "scroll",
                e.Change = "change",
                e.Seen = "seen",
                e.Reveal = "reveal",
                e.Error = "error",
                e.Hover = "hover",
                e.Swipe = "swipe",
                e.Close = "close"
            }(Rt || (Rt = {}));
            var rn = function() {
                return rn = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                rn.apply(this, arguments)
            }
              , an = {
                "header-activities-links": 0,
                "header-apartments-links": 2,
                "header-flights-links": 5,
                "header-flight-hotel-packages-links": 3,
                "header-hotels-links": 5,
                "header-deals-links": 5,
                "header-special-feature-links": 1,
                "header-transfers-links": 1
            }
              , on = a.memo((function(e) {
                var t = e.menu
                  , n = decodeURI(Wt(t.link || "")).replace("{currency}", e.currency)
                  , r = an[t.dataElementName];
                return a.createElement(Xt, {
                    key: t.dataSelenium,
                    className: e.className,
                    "data-selenium": t.dataSelenium,
                    showLinkAsDefaultText: e.showLinkAsDefaultText
                }, a.createElement(yn, rn({}, t, {
                    link: n,
                    dataId: t.tagText || t.link || "menu-link",
                    dataEventVersion: Number.isNaN(r) ? 1 : r,
                    dataElementName: t.dataElementName,
                    textVariant: e.textVariant,
                    blur: e.onBlur,
                    isRtl: e.isRtl,
                    analytics: e.analytics
                })))
            }
            ))
              , ln = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
              , sn = function() {
                return sn = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                sn.apply(this, arguments)
            }
              , cn = a.memo((function(e) {
                if (e.linkItems instanceof Array) {
                    var t = e.linkItems.map((function(e, t) {
                        return a.cloneElement(e, {
                            key: e.key || t
                        })
                    }
                    ));
                    return a.createElement(a.Fragment, null, t)
                }
                var n = e.linkItems
                  , r = n.secondaryText && a.createElement("span", {
                    key: "".concat(e.dataId, "-secondary-text"),
                    className: "".concat(e.className, "__secondary-text")
                }, n.secondaryText);
                return a.createElement(a.Fragment, null, n.icon && a.createElement(Lt, {
                    title: n.iconTooltip
                }, a.cloneElement(n.icon, {
                    size: "L"
                })), n.text && a.createElement(le, {
                    as: "span",
                    key: "".concat(e.dataId, "-text"),
                    className: "".concat(e.className, "__text"),
                    variant: e.textVariant || "paragraph1",
                    short: !0
                }, n.text), r)
            }
            ))
              , un = function(e) {
                return a.createElement(St, sn({}, e))
            }
              , dn = u()(un).withConfig({
                displayName: "MenuLink__MenuBadgeStyled",
                componentId: "sc-8it71c-0"
            })(pn || (pn = ln(['\n    &:before {\n        content: "";\n        position: absolute;\n        bottom: -4px;\n        ', ": 0;\n        border-top: 5px solid ", ";\n        border-", ": 5px solid transparent;\n    }\n"], ['\n    &:before {\n        content: "";\n        position: absolute;\n        bottom: -4px;\n        ', ": 0;\n        border-top: 5px solid ", ";\n        border-", ": 5px solid transparent;\n    }\n"])), (function(e) {
                return e.isRtl ? "right" : "left"
            }
            ), (function(e) {
                return e.theme.palette.alert.darkSolid.background
            }
            ), (function(e) {
                return e.isRtl ? "right" : "left"
            }
            ))
              , mn = function(e) {
                var t, n, r, i, o = a.createElement(a.Fragment, null, ((null == e ? void 0 : e.dropdownLinks) || []).map((function(t, n) {
                    return a.createElement(Yt, {
                        key: "header-ellipsis-link-".concat(n)
                    }, a.createElement(on, sn({}, e, {
                        className: "Header__LogoAndLinks__Links__Links",
                        menu: t,
                        currency: "",
                        isRtl: !!e.isRtl
                    })))
                }
                )));
                return a.createElement(a.Fragment, null, e.showTag && (r = e.tagText,
                i = e.isRtl,
                a.createElement(_t, null, a.createElement(dn, {
                    variant: "solid",
                    color: "error",
                    badgeSize: "XS",
                    isRtl: i
                }, r))), !(null === (t = null == e ? void 0 : e.dropdownLinks) || void 0 === t ? void 0 : t.length) && a.createElement("a", sn({
                    href: e.link,
                    onClick: function(t) {
                        e.action && e.action(t),
                        e.dataElementName && e.dataEventVersion && e.analytics.click(e.dataElementName, e.dataEventVersion)
                    },
                    onMouseEnter: e.mouseEnterAction,
                    onMouseLeave: e.mouseLeaveAction,
                    onBlur: e.blur,
                    target: e.target,
                    className: e.className,
                    "aria-label": e.ariaLabel
                }, k({
                    dataComponentId: e.dataId || e.className,
                    dataValue: e.dataValue,
                    dataSelenium: e.dataSelenium || e.className,
                    dataElementName: e.dataElementName
                })), a.createElement(cn, sn({}, e))), a.createElement(L, {
                    shouldi: !!(null === (n = e.dropdownLinks) || void 0 === n ? void 0 : n.length)
                }, a.createElement($t, {
                    linkSpacing: "NONE",
                    key: "header-ellipsis-link-".concat("index")
                }, a.createElement(s.Popover, {
                    content: o,
                    zIndex: 1400,
                    pointerPosition: "start-below"
                }, a.createElement("a", sn({
                    className: e.className,
                    "aria-label": e.ariaLabel
                }, k({
                    dataComponentId: e.dataId || e.className,
                    dataValue: e.dataValue,
                    dataSelenium: e.dataSelenium || e.className,
                    dataElementName: e.dataElementName
                }), {
                    type: "button"
                }), a.createElement(jt, null, a.createElement(cn, sn({}, e)))), a.createElement(s.Box, {
                    py: "none",
                    px: "none",
                    mx: "s",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }, a.createElement(s.Icon, {
                    id: "ThinDropdownArrowFill",
                    size: "s"
                }))))))
            };
            mn.displayName = "MenuLink";
            var pn, fn, yn = mn, gn = n(6322), hn = function(e, t, n) {
                if (!t || !e.normal.match(/pix\d\.agoda\.net/g))
                    return function(e, t) {
                        var n;
                        return n = t ? function(e, t, n) {
                            var r, i;
                            return e.normal = e.normal.replace(t, n),
                            e.retina = null === (r = e.retina) || void 0 === r ? void 0 : r.replace(t, n),
                            e.superRetina = null === (i = e.superRetina) || void 0 === i ? void 0 : i.replace(t, n),
                            e
                        }(e, "//pix6", "//pix7") : e,
                        {
                            src: n.normal,
                            srcSet: [n.retina, n.superRetina].map((function(e, t) {
                                return e && "".concat(e, " ").concat(t + 2, "x")
                            }
                            )).filter(Boolean).join(",")
                        }
                    }(e, n);
                var r = e.normal.replace(/(&?ar=\d*x\d*)/g, "")
                  , i = r.replace(/s=\d*x\d*/g, "s=");
                return {
                    sizes: t,
                    src: n ? r.replace("//pix6", "//pix7") : r,
                    srcSet: (n ? [116, 375] : [116, 375, 800, 1024]).map((function(e) {
                        return "".concat(n ? i.replace("//pix6", "//pix7") : i).concat(e, "x ").concat(e, "w")
                    }
                    )).filter(Boolean).join(",")
                }
            }, vn = function(e, t) {
                return t ? Object.keys(t).reduce((function(e, n) {
                    return e.replace(new RegExp("\\{".concat(n, "\\}"),"g"), (function() {
                        return t[n]
                    }
                    ))
                }
                ), e) : e
            }, bn = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, wn = (fn = function(e, t) {
                return fn = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                fn(e, t)
            }
            ,
            function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function n() {
                    this.constructor = e
                }
                fn(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
            }
            ), Cn = function() {
                return Cn = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Cn.apply(this, arguments)
            }, xn = u().img.withConfig({
                displayName: "Image__StyledImg",
                componentId: "sc-6jbuhk-0"
            })(Sn || (Sn = bn(["\n    transition: filter 700ms;\n    flex: 1;\n\n    &.blur {\n        filter: blur(3px);\n    }\n"], ["\n    transition: filter 700ms;\n    flex: 1;\n\n    &.blur {\n        filter: blur(3px);\n    }\n"])));
            xn.displayName = "StyledImg";
            var Sn, kn, Mn, Nn, En, Pn, Vn, Tn, On, In, zn, An, Fn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isNativeLazyLoad = !0 === n.props.lazy && "loading"in HTMLImageElement.prototype,
                    n.isFallbackLazyLoad = !0 === n.props.lazy && !("loading"in HTMLImageElement.prototype) && "IntersectionObserver"in window,
                    n.handleError = function() {
                        n.setState({
                            loaded: "placeholder"
                        })
                    }
                    ,
                    n.handle1pxImage = function(e) {
                        var t = e.target
                          , r = n.hasPlaceholder() && (n.state.deferred || t.naturalWidth <= 1) ? "placeholder" : "loaded";
                        n.props.onLoaded && "loaded" === r && "loaded" !== n.state.loaded && n.props.onLoaded();
                        var i = "loaded" === r && "loaded" !== n.state.loaded;
                        n.setState({
                            loaded: r,
                            shouldRemoveLoader: i
                        })
                    }
                    ,
                    n.onVisible = function(e) {
                        n.setState({
                            hasLoadedWithFallbackLazyLoad: e
                        })
                    }
                    ,
                    n.state = {
                        src: t.src,
                        loaded: null,
                        deferred: n.props.defer,
                        hasLoadedWithFallbackLazyLoad: !1,
                        shouldRemoveLoader: !1
                    },
                    n
                }
                return wn(t, e),
                t.prototype.componentWillReceiveProps = function(e) {
                    var t, n, r = this, i = e.src, a = e.defer, o = null, l = function() {};
                    !a && this.state.deferred && (o = {
                        loaded: null,
                        deferred: a
                    }),
                    t = this.props.src,
                    n = i,
                    t && n && Object.keys(t).every((function(e) {
                        return t[e] === n[e]
                    }
                    )) || (o = {
                        src: void 0,
                        loaded: null,
                        deferred: a
                    },
                    l = function() {
                        return r.setState({
                            src: i
                        })
                    }
                    ),
                    o && this.setState(o, l)
                }
                ,
                t.prototype.hasPlaceholder = function() {
                    return this.props.placeholder && this.props.placeholder.normal
                }
                ,
                t.prototype.render = function() {
                    if (!this.state.src || !this.state.src.normal)
                        return null;
                    var e = this.props
                      , t = this.state
                      , n = t.loaded
                      , r = t.deferred
                      , i = e.placeholder && (r || "placeholder" === this.state.loaded) ? e.placeholder : this.state.src
                      , a = o().createElement(xn, Cn({
                        className: this.props.className
                    }, hn(i, e.sizes, e.pix7Only), {
                        hidden: !("placeholder" !== this.state.loaded || !e.hideSelfOnFailedLoad) || void 0,
                        alt: "placeholder" === n && e.hideSelfOnFailedLoad ? void 0 : e.alt,
                        onLoad: null == n ? this.handle1pxImage : void 0,
                        onError: "placeholder" !== n || e.hideSelfOnFailedLoad ? this.handleError : void 0,
                        onClick: e.onClick,
                        width: e.width,
                        height: e.height
                    }, k({
                        dataComponentId: e.dataComponentId
                    }), e.dataSection && {
                        "data-section": e.dataSection
                    }, this.isNativeLazyLoad && {
                        loading: "lazy"
                    }));
                    if (this.isFallbackLazyLoad && !this.state.hasLoadedWithFallbackLazyLoad)
                        return o().createElement(gn.InView, {
                            className: e.className,
                            triggerOnce: !0,
                            rootMargin: "1500px 0px",
                            onChange: this.onVisible
                        }, e.alt ? e.alt : "");
                    if (e.loader) {
                        var l = this.state.shouldRemoveLoader ? e.loaderRemover || null : e.loader;
                        return o().createElement("div", null, l, a)
                    }
                    return a
                }
                ,
                t
            }(o().PureComponent), Bn = Fn, Rn = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Dn = u().div.withConfig({
                displayName: "PartnerLogo__PartnerLogoWrapper",
                componentId: "sc-p2fdov-0"
            })(kn || (kn = Rn(["\n    display: inline-block;\n    position: relative;\n    width: 200px;\n    line-height: ", ";\n\n    html[dir=ltr] & {\n        margin-left: ", ";\n    }\n\n    html[dir=rtl] & {\n        margin-right: ", ";\n    }\n"], ["\n    display: inline-block;\n    position: relative;\n    width: 200px;\n    line-height: ", ";\n\n    html[dir=ltr] & {\n        margin-left: ", ";\n    }\n\n    html[dir=rtl] & {\n        margin-right: ", ";\n    }\n"])), (function(e) {
                return e.theme.font.sizes.XXXXL
            }
            ), (function(e) {
                return e.theme.spacing.L
            }
            ), (function(e) {
                return e.theme.spacing.L
            }
            )), Ln = n(4625), _n = ((Mn = {})[h.All] = {
                default: "agoda-color-default",
                light: "agoda-color-light",
                white: "agoda-white",
                black: "agoda-black"
            },
            Mn[h.Agoda] = {
                default: "agoda-color-default",
                light: "agoda-color-light",
                white: "agoda-white",
                black: "agoda-black"
            },
            Mn[h.ClubPremier] = {
                default: "clubpremier-color-default"
            },
            Mn[h.Jtb] = {
                default: "japanican-color-default"
            },
            Mn[h.Japanican] = {
                default: "japanican-color-default",
                "zh-cn": "japanican-zh-cn",
                "zh-hk": "japanican-zh-hk",
                "ko-kr": "japanican-ko-kr",
                "zh-tw": "japanican-zh-tw"
            },
            Mn[h.Rurubu] = {
                default: "rurubu-color-default"
            },
            Mn[h.Priceline] = {
                default: "priceline-color-default-2"
            },
            Mn[h.TMobile] = {
                default: "tmobile-white-default-with-priceline"
            },
            Mn[h.ClubTravel] = {
                default: "clubtravel-color-default"
            },
            Mn[h.LotteDFS] = {
                default: "lottedfs-white"
            },
            Mn[h.ANA] = {
                default: "ana-ana-color-default"
            },
            Mn[h.CitiUS] = {
                default: "citius-color-default-6"
            },
            Mn[h.CitiUSUat1] = {
                default: "citius-color-default-6"
            },
            Mn[h.CitiUSUat2] = {
                default: "citius-color-default-6"
            },
            Mn[h.CitiUSUat3] = {
                default: "citius-color-default-6"
            },
            Mn[h.CitiMexico] = {
                default: "japanican-color-default"
            },
            Mn[h.KrisFlyer] = {
                default: "krisflyer-krisflyer-color-default"
            },
            Mn[h.TestStrategicPartners] = {
                default: "japanican-color-default"
            },
            Mn), jn = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, qn = u()(l.Box).withConfig({
                displayName: "PrimaryLogo__PrimaryLogoWrapper",
                componentId: "sc-111tzin-0"
            })(Nn || (Nn = jn(["\n    line-height: normal;\n    vertical-align: middle;\n"], ["\n    line-height: normal;\n    vertical-align: middle;\n"]))), Hn = new Ke.ClientSideBehavior("AriaPrimaryLogoLabelBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), Un = function(e, t, n) {
                return e.isEnabled(Hn) ? t : "".concat(h[n], " logo Home link")
            }, Wn = function(e) {
                var t, n;
                return {
                    normal: (null === (t = null == e ? void 0 : e.url) || void 0 === t ? void 0 : t.original) || "",
                    retina: null === (n = null == e ? void 0 : e.url) || void 0 === n ? void 0 : n.original2x
                }
            }, Gn = new Ke.ClientSideBehavior("SecondaryLogoNameBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), Xn = function(e, t) {
                return e.isEnabled(Gn) ? "SecondaryLogo" : t
            }, Kn = new Ke.ClientSideBehavior("SecondaryLogoBehavior",$e.whiteLabelId.equal(h.Agoda).build(),Ye.FallbackStrategy.Disable), Yn = new Ke.ClientSideBehavior("LanguageLogoBehavior",$e.whiteLabelId.equal(h.Japanican).build(),Ye.FallbackStrategy.Disable), $n = function(e) {
                var t = e.getBehaviorManager()
                  , n = t.isEnabled(Yn) ? e.culture : "default"
                  , r = function(e) {
                    switch (e) {
                    case h.Agoda:
                        return {
                            width: "89px",
                            height: "37px"
                        };
                    case h.Japanican:
                        return {
                            width: "210px",
                            height: "43px"
                        };
                    case h.TestStrategicPartners:
                        return {
                            width: "210px",
                            height: "23px"
                        };
                    case h.Rurubu:
                        return {
                            width: "190px",
                            height: "36px"
                        };
                    case h.TMobile:
                        return {
                            width: "132px",
                            height: "95px"
                        };
                    case h.ClubPremier:
                        return {
                            width: "160px",
                            height: "20px"
                        };
                    case h.ClubTravel:
                        return {
                            width: "192px",
                            height: "40px"
                        };
                    case h.LotteDFS:
                        return {
                            width: "36px",
                            height: "32px"
                        };
                    case h.ANA:
                        return {
                            width: "170px",
                            height: "47px"
                        };
                    case h.CitiUS:
                    case h.CitiUSUat1:
                    case h.CitiUSUat2:
                    case h.CitiUSUat3:
                        return {
                            width: "137px",
                            height: "37px"
                        };
                    case h.CitiMexico:
                        return {
                            width: "192px",
                            height: "40px"
                        };
                    case h.KrisFlyer:
                        return {
                            width: "132px",
                            height: "41px"
                        };
                    default:
                        throw new Error("No dimension mapping for ".concat(h[e]))
                    }
                }(e.whiteLabelId)
                  , i = function(e, t) {
                    if (!_n[e])
                        throw new Error("No Logo mapping for ".concat(h[e]));
                    var n = _n[e];
                    return n && !n[t] ? n.default : n[t]
                }(e.whiteLabelId, n)
                  , a = t.isEnabled(Kn) && function(e, t, n) {
                    var r = e;
                    if (r && "" !== r && t) {
                        var i = t;
                        7 !== n && 8 !== n && 20 !== n && (i = i.split("-")[0]),
                        r = r.replace("{}", i)
                    }
                    return r
                }(e.agodaSecondaryLogoPath, e.culture, e.languageId) || "";
                return o().createElement(l.Box, {
                    key: "logo-container",
                    display: "flex",
                    alignItems: "center"
                }, o().createElement(l.Box, {
                    key: "primary-logo",
                    width: r.width,
                    height: r.height,
                    display: "flex",
                    alignItems: "center",
                    "data-element-name": "primary-logo"
                }, o().createElement(Ln.Logo, {
                    name: i,
                    alt: "Primary Logo"
                })), o().createElement(L, {
                    shouldi: t.isEnabled(Kn)
                }, o().createElement(Bn, {
                    key: "secondary-logo",
                    alt: Xn(t, e.secondaryLogoAriaLabel),
                    className: "LogoAndLinksMenu__SecondaryLogo",
                    src: {
                        normal: a,
                        retina: a
                    }
                })))
            }, Zn = new Ke.ClientSideBehavior("LogoMarginBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), Jn = function(e) {
                return e.isEnabled(Zn) ? "XS" : "M"
            }, Qn = function() {
                return Qn = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Qn.apply(this, arguments)
            }, er = function(e) {
                var t = a.createElement($n, {
                    getBehaviorManager: e.getBehaviorManager,
                    culture: e.culture,
                    languageId: e.languageId,
                    whiteLabelId: e.whitelabelId,
                    agodaSecondaryLogoPath: e.logoAndLinks.agodaSecondaryLogoPath,
                    secondaryLogoAriaLabel: e.logoAndLinks.secondaryLogoAriaLabel
                });
                return a.createElement(a.Fragment, null, a.createElement(L, {
                    shouldi: e.whitelabelId > 0
                }, a.createElement(qn, {
                    className: "Header__LogoAndLinks__PrimaryLogo",
                    display: "inline-block",
                    position: "relative",
                    me: Jn(e.getBehaviorManager())
                }, a.createElement(yn, Qn({
                    className: "Header__LogoAndLinks__PrimaryLogo__LogoLink",
                    link: e.logoAndLinks.homeUrl,
                    linkItems: [t]
                }, P({
                    dataElementName: "primary-logo",
                    dataEventVersion: 1
                }), {
                    dataEventVersion: 1,
                    ariaLabel: Un(e.getBehaviorManager(), e.logoAndLinks.primaryLogoAriaLabel, e.whitelabelId),
                    isRtl: e.isRtl,
                    analytics: e.analytics
                })))), a.createElement(L, {
                    shouldi: !!e.logoAndLinks.bltLogo
                }, a.createElement(Dn, {
                    className: "Header__LogoAndLinks__PartnerLogo",
                    "data-picture-id": "blt-logo"
                }, a.createElement(Bn, {
                    className: "Header__LogoAndLinks__PartnerLogo__Image",
                    src: Wn(e.logoAndLinks.bltLogo),
                    alt: "partner-logo",
                    width: "100%",
                    height: "100%",
                    dataComponentId: "partner-logo"
                }))))
            }, tr = n(3073), nr = n.n(tr), rr = n(2732), ir = n.n(rr), ar = n(6024), or = n.n(ar), lr = new Ke.ClientSideBehavior("MainMenuLinkSpacingBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), sr = function(e) {
                return e.isEnabled(lr) ? "S" : "XL"
            }, cr = new Ke.ClientSideBehavior("MainMenuLinkTextVariantBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), ur = function(e) {
                return e.isEnabled(cr) ? "heading5" : void 0
            }, dr = new Ke.ClientSideBehavior("MainMenuEllipsisTextVariantBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), mr = function(e) {
                return e.isEnabled(dr) ? "body2" : void 0
            }, pr = new Ke.ClientSideBehavior("MainMenuEllipsisDefaultTextBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), fr = new Ke.ClientSideBehavior("MainMenuLinkMarginBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), yr = function(e) {
                return e.isEnabled(fr) ? "XS" : "M"
            }, gr = function() {
                return gr = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                gr.apply(this, arguments)
            }, hr = function(e) {
                var t, n = e.getBehaviorManager(), r = a.createElement(a.Fragment, null, (e.logoAndLinks.ellipsisLinks || []).map((function(t, r) {
                    return a.createElement(Yt, {
                        key: "header-ellipsis-link-".concat(r)
                    }, a.createElement(on, gr({}, e, {
                        className: "Header__LogoAndLinks__Links__Links",
                        menu: t,
                        currency: e.currency,
                        textVariant: mr(n),
                        showLinkAsDefaultText: n.isEnabled(pr)
                    })))
                }
                )));
                return a.createElement(L, {
                    shouldi: !e.logoAndLinks.bltLogo
                }, a.createElement(nn, gr({
                    useDrone: !0,
                    display: "inline-block",
                    className: "Header__LogoAndLinks__Links",
                    ms: yr(n)
                }, k({
                    dataComponentId: "header-link-container"
                })), a.createElement(a.Fragment, null, e.logoAndLinks.links.map((function(t, r) {
                    var i = "icon"in t.linkItems ? gr(gr({}, t), {
                        linkItems: gr(gr({}, t.linkItems), {
                            icon: t.linkItems.icon && "".concat(t.linkItems.icon).includes("ficon-agoda-homes") ? a.createElement(or(), {
                                size: "L"
                            }) : t.linkItems.icon
                        })
                    }) : t;
                    return a.createElement(Kt, {
                        key: "header-link-".concat(r),
                        linkSpacing: sr(n),
                        useDrone: !0
                    }, a.createElement(on, gr({}, e, {
                        className: "Header__LogoAndLinks__Links__Links",
                        menu: i,
                        currency: e.currency,
                        textVariant: ur(n)
                    })))
                }
                )), a.createElement(L, {
                    shouldi: !!(null === (t = e.logoAndLinks.ellipsisLinks) || void 0 === t ? void 0 : t.length)
                }, a.createElement($t, {
                    key: "header-ellipsis-links",
                    linkSpacing: "NONE"
                }, a.createElement(s.Popover, {
                    content: r,
                    pointerPosition: "start-below",
                    zIndex: 1400
                }, a.createElement(L, {
                    shouldi: !!e.logoAndLinks.ellipsisText
                }, a.createElement(Jt, {
                    display: "inline-flex",
                    alignItems: "center",
                    ps: sr(n)
                }, a.createElement(le, {
                    as: "span",
                    variant: ur(n),
                    pe: "S",
                    "aria-label": e.logoAndLinks.ellipsisText
                }, e.logoAndLinks.ellipsisText), a.createElement(ir(), {
                    size: "M",
                    color: "secondary"
                }))), a.createElement(L, {
                    shouldi: !e.logoAndLinks.ellipsisText
                }, a.createElement(Zt, {
                    "aria-label": "Ellipsis Icon",
                    role: "button"
                }, a.createElement(nr(), {
                    size: "L"
                })))))))))
            }, vr = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, br = u()(l.Span).withConfig({
                displayName: "UserMenustyled__UserName",
                componentId: "sc-14cll85-0"
            })(En || (En = vr(["\n    white-space: nowrap;\n    flex-wrap: wrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: flex;\n    align-items: baseline;\n    flex-direction: column;\n    html[dir='ltr'] & {\n        margin-right: 0;\n        @media (min-width: 421px) {\n            margin-right: ", ";\n        }\n    }\n    html[dir='rtl'] & {\n        margin-left: 0;\n        @media (min-width: 421px) {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    white-space: nowrap;\n    flex-wrap: wrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: flex;\n    align-items: baseline;\n    flex-direction: column;\n    html[dir='ltr'] & {\n        margin-right: 0;\n        @media (min-width: 421px) {\n            margin-right: ", ";\n        }\n    }\n    html[dir='rtl'] & {\n        margin-left: 0;\n        @media (min-width: 421px) {\n            margin-left: ", ";\n        }\n    }\n"])), (function(e) {
                return e.theme.spacing.M
            }
            ), (function(e) {
                return e.theme.spacing.M
            }
            )), wr = u().div.withConfig({
                displayName: "UserMenustyled__UserMenuDisplay",
                componentId: "sc-14cll85-1"
            })(Pn || (Pn = vr(["\n    cursor: pointer;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex: 1;\n\n    border-left: none;\n    border-right: none;\n\n    @media (max-width: 420px) {\n        margin-left: 0;\n        margin-right: 0;\n        flex-direction: column;\n        align-items: flex-end;\n\n        .UserAvatar {\n            display: none;\n        }\n    }\n"], ["\n    cursor: pointer;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex: 1;\n\n    border-left: none;\n    border-right: none;\n\n    @media (max-width: 420px) {\n        margin-left: 0;\n        margin-right: 0;\n        flex-direction: column;\n        align-items: flex-end;\n\n        .UserAvatar {\n            display: none;\n        }\n    }\n"]))), Cr = u().span.withConfig({
                displayName: "UserMenustyled__GiftCardBalanceDisplay",
                componentId: "sc-14cll85-2"
            })(Vn || (Vn = vr(["\n    display: flex;\n    z-index: 1000;\n    html[dir='ltr'] & {\n        margin-right: ", ";\n    }\n    html[dir='rtl'] & {\n        margin-left: ", ";;\n    }\n    & span {\n        html[dir='ltr'] & {\n            margin-right: ", ";\n        }\n        html[dir='rtl'] & {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    z-index: 1000;\n    html[dir='ltr'] & {\n        margin-right: ", ";\n    }\n    html[dir='rtl'] & {\n        margin-left: ", ";;\n    }\n    & span {\n        html[dir='ltr'] & {\n            margin-right: ", ";\n        }\n        html[dir='rtl'] & {\n            margin-left: ", ";\n        }\n    }\n"])), (function(e) {
                return e.theme.spacing.NONE
            }
            ), (function(e) {
                return e.theme.spacing.NONE
            }
            ), (function(e) {
                return e.theme.spacing.XS
            }
            ), (function(e) {
                return e.theme.spacing.XS
            }
            )), xr = u().span.withConfig({
                displayName: "UserMenustyled__RewardContainer",
                componentId: "sc-14cll85-3"
            })(Tn || (Tn = vr(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    white-space: nowrap;\n"], ["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    white-space: nowrap;\n"]))), Sr = u().div.withConfig({
                displayName: "UserMenustyled__NotificationContainer",
                componentId: "sc-14cll85-4"
            })(On || (On = vr(["\n    display: inline-block;\n    background: ", ";\n    color: ", ";\n    border-radius: ", ";\n    min-width: ", ";\n    position: absolute;\n    top: -1px;\n    font-size: ", ";\n    line-height: ", ";\n    text-align: center;\n    html[dir='ltr'] & {\n        left: -2.5%;\n    }\n    html[dir='rtl'] & {\n        right: -2.5%;\n    }\n"], ["\n    display: inline-block;\n    background: ", ";\n    color: ", ";\n    border-radius: ", ";\n    min-width: ", ";\n    position: absolute;\n    top: -1px;\n    font-size: ", ";\n    line-height: ", ";\n    text-align: center;\n    html[dir='ltr'] & {\n        left: -2.5%;\n    }\n    html[dir='rtl'] & {\n        right: -2.5%;\n    }\n"])), (function(e) {
                return e.theme.palette.error.solid.background
            }
            ), (function(e) {
                return e.theme.palette.error.solid.text
            }
            ), (function(e) {
                return e.theme.radius.ROUNDED
            }
            ), (function(e) {
                return e.theme.font.basicLineHeights.M
            }
            ), (function(e) {
                return e.theme.font.sizes.XS
            }
            ), (function(e) {
                return e.theme.font.basicLineHeights.M
            }
            )), kr = u().img.withConfig({
                displayName: "UserMenustyled__LoyaltyCardImgDisplay",
                componentId: "sc-14cll85-5"
            })(In || (In = vr(["\n    width: 44px;\n    height: auto;\n    object-fit: contain;\n    margin-right: ", ";\n"], ["\n    width: 44px;\n    height: auto;\n    object-fit: contain;\n    margin-right: ", ";\n"])), (function(e) {
                return e.theme.spacing.M
            }
            )), Mr = u()(l.Box).withConfig({
                displayName: "UserMenustyled__DronePopoverWrapper",
                componentId: "sc-14cll85-6"
            })(zn || (zn = vr(['\n    // this is the div that has the content of the popover\n    div[role="tooltip"] {\n        border-radius: 0;\n        width: 300px;\n    }\n'], ['\n    // this is the div that has the content of the popover\n    div[role="tooltip"] {\n        border-radius: 0;\n        width: 300px;\n    }\n']))), Nr = n(365), Er = n.n(Nr), Pr = n(9030), Vr = n.n(Pr), Tr = new Ke.ClientSideBehavior("PartnerLoyaltyBalanceBehavior",$e.whiteLabelId.any(h.ANA, h.ClubTravel, h.KrisFlyer).build(),Ye.FallbackStrategy.Disable), Or = function(e) {
                var t;
                return (null === (t = e.partnerLoyaltyMenuViewModel) || void 0 === t ? void 0 : t.partnerLoyaltyCardImageUrl) ? o().createElement(kr, {
                    src: e.partnerLoyaltyMenuViewModel.partnerLoyaltyCardImageUrl,
                    role: "none"
                }) : null
            }, Ir = function(e) {
                switch (e) {
                case 5:
                    return "secondary";
                case 4:
                    return "positive";
                case 3:
                    return "primary";
                case 2:
                    return "error";
                default:
                    return "warning"
                }
            }, zr = "mob-none", Ar = "mob-main-menu", Fr = "mob-currency-overlay-search-currency", Br = "mob-currency-overlay-back-button", Rr = "mob-price-type", Dr = "mob-currency", Lr = "header-partner-loyalty-balance", _r = function() {
                return _r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                _r.apply(this, arguments)
            }, jr = function(e) {
                var t, n, r, i, a = null !== (r = null === (n = null === (t = e.menuItems) || void 0 === t ? void 0 : t.partnerLoyaltyMenuViewModel) || void 0 === n ? void 0 : n.partnerLoyaltyBalance) && void 0 !== r ? r : 0;
                return o().useEffect((function() {
                    a && e.analytics.custom(Rt.Seen, {
                        action_element_name: Lr,
                        action_element_value: "".concat(a),
                        event_version: 1
                    })
                }
                ), [a, e.analytics]),
                (null === (i = e.menuItems) || void 0 === i ? void 0 : i.partnerLoyaltyMenuViewModel) ? o().createElement(l.Box, _r({
                    display: "flex",
                    as: "span",
                    me: "XS"
                }, N("partner-loyalty-balance-container")), o().createElement(le, _r({
                    as: "span",
                    color: "cash",
                    variant: "body2",
                    short: !1
                }, N(Lr)), a)) : null
            }, qr = function() {
                return qr = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                qr.apply(this, arguments)
            }, Hr = function(e) {
                var t, n, r, i, a, l, c, u = e.menuItems, d = null !== (n = null === (t = null == u ? void 0 : u.giftCardsMenuViewModel) || void 0 === t ? void 0 : t.giftCardBalance) && void 0 !== n ? n : 0;
                if (o().useEffect((function() {
                    e.analytics.custom(Rt.Seen, {
                        action_element_name: "header-giftcard-balance",
                        action_element_value: "".concat(d),
                        event_version: 9
                    })
                }
                ), []),
                !(null === (r = null == u ? void 0 : u.giftCardsMenuViewModel) || void 0 === r ? void 0 : r.giftCardBalance))
                    return null;
                var m = C.icons
                  , p = null !== (i = null == m ? void 0 : m.giftCardBalanceIcon) && void 0 !== i ? i : o().createElement(s.Icon, {
                    id: "CircleLoyaltycashBrandFill",
                    size: "l",
                    color: "primary.cash",
                    label: null === (a = null == u ? void 0 : u.giftCardsMenuViewModel) || void 0 === a ? void 0 : a.giftCardMenuText
                })
                  , f = null !== (c = null === (l = null == u ? void 0 : u.giftCardsMenuViewModel) || void 0 === l ? void 0 : l.giftCardBalance) && void 0 !== c ? c : 0
                  , y = o().createElement(o().Fragment, null, o().createElement("span", qr({}, N("gift-card-balance-icon")), p), o().createElement(le, qr({
                    as: "span",
                    color: "cash",
                    variant: "body2",
                    short: !1
                }, N("gift-card-balance")), f));
                return o().createElement(Cr, qr({}, N("gift-card-balance-container")), y)
            }, Ur = n(1035);
            !function(e) {
                e[e.Holdout = -1] = "Holdout",
                e[e.VipBronze = 0] = "VipBronze",
                e[e.VipGold = 1] = "VipGold",
                e[e.VipBasic = 2] = "VipBasic",
                e[e.VipSilver = 3] = "VipSilver",
                e[e.VipPlatinum = 4] = "VipPlatinum"
            }(An || (An = {}));
            var Wr, Gr = function() {
                return Gr = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Gr.apply(this, arguments)
            };
            !function(e) {
                e[e.None = 0] = "None",
                e[e.Gold = 1] = "Gold",
                e[e.Silver = 2] = "Silver",
                e[e.Platinum = 3] = "Platinum",
                e[e.Bronze = 4] = "Bronze"
            }(Wr || (Wr = {}));
            var Xr = function(e) {
                if (void 0 === e)
                    return null;
                switch (e) {
                case An.VipPlatinum:
                    return Wr.Platinum;
                case An.VipGold:
                    return Wr.Gold;
                case An.VipSilver:
                    return Wr.Silver;
                case An.VipBronze:
                    return Wr.Bronze;
                default:
                    return null
                }
            }
              , Kr = function(e) {
                var t;
                if (!e || !e.theme)
                    return null;
                var n, r, i, a, s = null !== (t = e.elementName) && void 0 !== t ? t : "agoda-vip-badge", c = function(e) {
                    switch (e.theme) {
                    case Wr.Silver:
                        return "vipSilverV2";
                    case Wr.Platinum:
                        return "vipPlatinumV2";
                    case Wr.Gold:
                        return "vipGoldV2";
                    case Wr.Bronze:
                        return "vipBronze";
                    default:
                        return "primary"
                    }
                };
                return o().createElement(l.Box, Gr({}, (i = e.size,
                a = e.isRtl,
                {
                    position: "relative",
                    display: "inline-flex",
                    radius: "XS",
                    overflow: "hidden",
                    p: "NONE",
                    textColor: {
                        color: "darkmode",
                        variant: "darkSolid"
                    },
                    minHeight: "m" === i ? "26px" : "20px",
                    style: {
                        background: "linear-gradient(".concat(a ? "to left" : "to right", ", #1d2129 90%, transparent)"),
                        direction: "ltr"
                    }
                }), {
                    "data-element-name": s
                }), o().createElement(l.Box, Gr({}, {
                    display: "flex",
                    alignItems: "center",
                    pl: (r = e.isRtl) ? "XS" : "S",
                    pr: r ? "S" : "XS",
                    zIndex: 2,
                    minWidth: "41px"
                }), o().createElement("img", {
                    alt: "star_with_vip",
                    src: "https://cdn6.agoda.net/images/LOY-5758/default/VIP.svg"
                })), o().createElement(l.Box, Gr({}, function(e, t) {
                    return {
                        position: "relative",
                        backgroundColor: {
                            color: e,
                            variant: "gradient"
                        },
                        display: "flex",
                        flex: "none",
                        zIndex: 1,
                        pr: t ? "M" : "S",
                        pl: t ? "S" : "M",
                        alignItems: "center",
                        style: {
                            borderRadius: "0 2px 2px 0",
                            transform: "scaleX(".concat(t ? "-1" : "1", ")"),
                            justifyContent: t ? "flex-end" : "none"
                        }
                    }
                }(c(e), e.isRtl)), o().createElement(l.Span, Gr({}, function(e, t) {
                    return {
                        color: e === Wr.Platinum ? 0 : 800,
                        textSize: "S",
                        strong: !0,
                        style: {
                            transform: "scaleX(".concat(t ? "-1" : "1", ")")
                        }
                    }
                }(e.theme, e.isRtl)), function() {
                    if (e.text)
                        return e.text;
                    switch (e.theme) {
                    case Wr.Platinum:
                    case Wr.Gold:
                    case Wr.Silver:
                    case Wr.Bronze:
                        return e.themeText;
                    default:
                        return ""
                    }
                }()), o().createElement(l.Box, Gr({}, (n = {
                    backgroundColor: {
                        color: c(e),
                        variant: "solid"
                    }
                },
                Gr(Gr(Gr({}, {
                    position: "absolute",
                    bottom: "-12px",
                    left: "-10px",
                    width: "16px",
                    height: "60px",
                    style: {
                        transform: "rotate(20deg)"
                    },
                    zIndex: 1
                }), n), {
                    left: "3px",
                    width: "4px"
                })))), o().createElement(l.Box, Gr({}, {
                    position: "absolute",
                    bottom: "-12px",
                    height: "60px",
                    style: {
                        transform: "rotate(20deg)"
                    },
                    left: "-4px",
                    width: "8px",
                    zIndex: -1,
                    backgroundColor: {
                        color: "darkmode",
                        variant: "darkSolid"
                    }
                }))))
            };
            Kr.displayName = "VipBadge";
            var Yr, $r = o().memo(Kr);
            !function(e) {
                e.Login = "Login",
                e.SignUp = "SignUp",
                e.AgodaCash = "AgodaCash",
                e.AgodaHomes = "AgodaHomes",
                e.AgodaVip = "AgodaVip",
                e.Accommodation = "Accommodation",
                e.Activities = "Activities",
                e.Favorites = "Favorites",
                e.NavigationProductMenu = "NavigationProductMenu",
                e.UserManageBooking = "UserManageBooking",
                e.UserMessaging = "UserMessaging",
                e.Reviews = "Reviews",
                e.PointsMax = "PointsMax",
                e.RegulationShowExclusivePriceSetting = "RegulationShowExclusivePriceSetting",
                e.Cars = "Cars",
                e.MyBookingsButton = "MyBookingsButton",
                e.CashBack = "CashBack",
                e.SsoPartnerLinks = "SsoPartnerLinks",
                e.UsePartnerLoyaltyMemberBalance = "UsePartnerLoyaltyMemberBalance",
                e.Transfers = "Transfers"
            }(Yr || (Yr = {}));
            var Zr = {
                arrow: {
                    enabled: !0
                }
            }
              , Jr = function(e, t) {
                var n, r, i, a, s = null === (r = null === (n = null == t ? void 0 : t.giftCardsMenuViewModel) || void 0 === n ? void 0 : n.loyaltyProfileInfo) || void 0 === r ? void 0 : r.vipLevel, c = A(Yr.AgodaVip), u = t && void 0 !== s && t.isShowAgodaVipMenu && c;
                if (!Xr(s))
                    return null;
                var d = function(n) {
                    var r, i, a, l;
                    return u ? o().createElement($r, {
                        elementName: "vipBadgeHome",
                        theme: null !== (r = Xr(s)) && void 0 !== r ? r : void 0,
                        text: n,
                        themeText: null === (l = null === (a = null === (i = null == t ? void 0 : t.giftCardsMenuViewModel) || void 0 === i ? void 0 : i.loyaltyProfileInfo) || void 0 === a ? void 0 : a.agodaVIP) || void 0 === l ? void 0 : l.themeText,
                        isRtl: e
                    }, n) : null
                };
                if (t) {
                    var m = null === (a = null === (i = t.giftCardsMenuViewModel) || void 0 === i ? void 0 : i.loyaltyProfileInfo) || void 0 === a ? void 0 : a.agodaVIP
                      , p = (null == m ? void 0 : m.toolTipText) || ""
                      , f = function(e, t) {
                        switch (e) {
                        case Wr.Platinum:
                        case Wr.Gold:
                        case Wr.Silver:
                        case Wr.Bronze:
                            return t || "";
                        default:
                            return ""
                        }
                    }(Xr(s), null == m ? void 0 : m.themeText)
                      , y = Ur.StringFormatter.format(p, f)
                      , g = o().createElement(le, {
                        variant: "body2",
                        short: !1
                    }, y);
                    return o().createElement(l.Popover, {
                        interactionType: "hover",
                        popoverContent: g,
                        placement: "bottom-end",
                        modifiers: Zr
                    }, o().createElement("div", null, d((null == m ? void 0 : m.themeText) || "")))
                }
                return d()
            }
              , Qr = function(e) {
                switch (e) {
                case "silver":
                    return Wr.Silver;
                case "gold":
                    return Wr.Gold;
                case "platinum":
                    return Wr.Platinum;
                case "bronze":
                    return Wr.Bronze;
                default:
                    return Wr.None
                }
            }
              , ei = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
              , ti = u().div.withConfig({
                displayName: "UserMenuLinksstyled__MenuListContainer",
                componentId: "sc-179518m-0"
            })(ai || (ai = ei(["\n    display: ", ";\n    flex-direction: column;\n    ", "\n"], ["\n    display: ", ";\n    flex-direction: column;\n    ", "\n"])), (function(e) {
                return e.hasUserOrHostMenu ? "flex" : "none"
            }
            ), (function(e) {
                return e.isEnterpriseWhitelabel ? (0,
                c.css)(ri || (ri = ei(["\n        padding: 0;\n    "], ["\n        padding: 0;\n    "]))) : (0,
                c.css)(ii || (ii = ei(["\n        padding: ", " ", " 0;\n    "], ["\n        padding: ", " ", " 0;\n    "])), e.theme.spacing.L, e.theme.spacing.M)
            }
            ))
              , ni = u().li.withConfig({
                displayName: "UserMenuLinksstyled__MenuItem",
                componentId: "sc-179518m-1"
            })(ui || (ui = ei(["\n    cursor: ", ";\n    display: flex;\n    font-weight: ", ";\n\n    & a {\n        flex: 1;\n        align-items: center;\n    }\n\n    ", ";\n\n    ", ";\n"], ["\n    cursor: ", ";\n    display: flex;\n    font-weight: ", ";\n\n    & a {\n        flex: 1;\n        align-items: center;\n    }\n\n    ", ";\n\n    ", ";\n"])), (function(e) {
                return e.noHover ? "default" : "pointer"
            }
            ), (function(e) {
                return e.theme.font.weights.Normal
            }
            ), (function(e) {
                return e.isSubLink ? (0,
                c.css)(oi || (oi = ei(["\n        font-size: ", ";\n        border-left: ", " solid 1px;\n        margin: 0 0 0 ", " !important;\n    "], ["\n        font-size: ", ";\n        border-left: ", " solid 1px;\n        margin: 0 0 0 ", " !important;\n    "])), (function(e) {
                    return e.theme.font.sizes.S
                }
                ), e.theme.palette.secondary.bordered.border, (function(e) {
                    return e.theme.spacing.L
                }
                )) : (0,
                c.css)(li || (li = ei(["\n        margin: 0 !important;\n        font-size: ", ";\n    "], ["\n        margin: 0 !important;\n        font-size: ", ";\n    "])), (function(e) {
                    return e.theme.font.sizes.M
                }
                ))
            }
            ), (function(e) {
                return e.isEnterpriseWhitelabel ? (0,
                c.css)(si || (si = ei(["\n        color: ", ";\n        padding: ", " ", ";\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n        }\n    "], ["\n        color: ", ";\n        padding: ", " ", ";\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n        }\n    "])), (function(e) {
                    return e.theme.palette.text[800]
                }
                ), (function(e) {
                    return e.isSubLink ? e.theme.spacing.S : e.theme.spacing.M
                }
                ), (function(e) {
                    return e.isSubLink ? e.theme.spacing.S : e.theme.spacing.L
                }
                ), (function(e) {
                    return e.noHover ? "inherit" : e.theme.palette.primary.darkSolid.background
                }
                ), (function(e) {
                    return e.noHover ? "inherit" : e.theme.palette.primary.darkSolid.text
                }
                )) : (0,
                c.css)(ci || (ci = ei(["\n        padding: ", " ", ";\n        &:hover {\n            background-color: ", ";\n        }\n    "], ["\n        padding: ", " ", ";\n        &:hover {\n            background-color: ", ";\n        }\n    "])), (function(e) {
                    return e.theme.spacing.S
                }
                ), (function(e) {
                    return e.theme.spacing.M
                }
                ), (function(e) {
                    return e.theme.palette.background[20]
                }
                ))
            }
            ));
            ni.displayName = "MenuItem";
            var ri, ii, ai, oi, li, si, ci, ui, di, mi, pi, fi, yi, gi, hi, vi, bi, wi, Ci, xi, Si, ki = u().a.withConfig({
                displayName: "UserMenuLinksstyled__MenuLink",
                componentId: "sc-179518m-2"
            })(pi || (pi = ei(["\n    &&& {\n        text-decoration: none;\n        ", "\n        ", ";\n    }\n"], ["\n    &&& {\n        text-decoration: none;\n        ", "\n        ", ";\n    }\n"])), (function(e) {
                return e.flex && "flex: ".concat(e.flex, ";")
            }
            ), (function(e) {
                return e.isEnterpriseWhitelabel ? (0,
                c.css)(di || (di = ei(["\n            color: inherit;\n        "], ["\n            color: inherit;\n        "]))) : (0,
                c.css)(mi || (mi = ei(["\n            color: ", ";\n            &:hover {\n                color: ", ";\n            }\n        "], ["\n            color: ", ";\n            &:hover {\n                color: ", ";\n            }\n        "])), (function(e) {
                    return e.theme.palette.text[800]
                }
                ), (function(e) {
                    return e.theme.palette.primary.plainText.text
                }
                ))
            }
            )), Mi = u().div.withConfig({
                displayName: "UserMenuLinksstyled__MenuGroupHeader",
                componentId: "sc-179518m-3"
            })(fi || (fi = ei(["\n    display: block;\n    font-size: ", ";\n    color: ", ";\n    background-color: ", ";\n    padding: ", " ", ";\n    text-transform: uppercase;\n"], ["\n    display: block;\n    font-size: ", ";\n    color: ", ";\n    background-color: ", ";\n    padding: ", " ", ";\n    text-transform: uppercase;\n"])), (function(e) {
                return e.theme.font.sizes.S
            }
            ), (function(e) {
                return e.theme.palette.text[600]
            }
            ), (function(e) {
                return e.theme.palette.background[20]
            }
            ), (function(e) {
                return e.theme.spacing.M
            }
            ), (function(e) {
                return e.theme.spacing.XL
            }
            )), Ni = u().a.withConfig({
                displayName: "UserMenuLinksstyled__MenuLinkGroupWithHref",
                componentId: "sc-179518m-4"
            })(yi || (yi = ei(["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    text-decoration: none;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    text-decoration: none;\n"]))), Ei = u().div.withConfig({
                displayName: "UserMenuLinksstyled__MenuGroup",
                componentId: "sc-179518m-5"
            })(gi || (gi = ei(["\n    //padding: ", " ", ";\n    //padding: 10px 15px;\n"], ["\n    //padding: ", " ", ";\n    //padding: 10px 15px;\n"])), (function(e) {
                return e.theme.spacing.M
            }
            ), (function(e) {
                return e.theme.spacing.L
            }
            )), Pi = u().div.withConfig({
                displayName: "UserMenuLinksstyled__GiftCardBalanceBadge",
                componentId: "sc-179518m-6"
            })(hi || (hi = ei(["\n    background: ", ";\n    color: ", ";\n    white-space: break-spaces;\n    padding: ", " ", ";\n    border-radius: ", ";\n    word-break: break-all;\n    display: block;\n    width: auto;\n    min-width: 40px;\n\n    html[dir='ltr'] & {\n        text-align: right;\n    }\n\n    html[dir='rtl'] & {\n        text-align: left;\n    }\n"], ["\n    background: ", ";\n    color: ", ";\n    white-space: break-spaces;\n    padding: ", " ", ";\n    border-radius: ", ";\n    word-break: break-all;\n    display: block;\n    width: auto;\n    min-width: 40px;\n\n    html[dir='ltr'] & {\n        text-align: right;\n    }\n\n    html[dir='rtl'] & {\n        text-align: left;\n    }\n"])), (function(e) {
                return e.theme.palette.cash.solid.background
            }
            ), (function(e) {
                return e.theme.palette.cash.solid.text
            }
            ), (function(e) {
                return e.theme.spacing.XS
            }
            ), (function(e) {
                return e.theme.spacing.S
            }
            ), (function(e) {
                return e.theme.radius.XS
            }
            )), Vi = u().div.withConfig({
                displayName: "UserMenuLinksstyled__NotificationCount",
                componentId: "sc-179518m-7"
            })(vi || (vi = ei(["\n    display: block;\n    min-width: 15px;\n    font-size: ", ";\n    background: ", ";\n    color: ", ";\n    border-radius: ", ";\n    padding: 0 ", ";\n    text-align: center;\n\n    html[dir='ltr'] & {\n        left: ", ";\n    }\n\n    html[dir='rtl'] & {\n        right: ", ";\n    }\n"], ["\n    display: block;\n    min-width: 15px;\n    font-size: ", ";\n    background: ", ";\n    color: ", ";\n    border-radius: ", ";\n    padding: 0 ", ";\n    text-align: center;\n\n    html[dir='ltr'] & {\n        left: ", ";\n    }\n\n    html[dir='rtl'] & {\n        right: ", ";\n    }\n"])), (function(e) {
                return e.theme.font.sizes.S
            }
            ), (function(e) {
                return e.theme.palette.error.solid.background
            }
            ), (function(e) {
                return e.theme.palette.error.solid.text
            }
            ), (function(e) {
                return e.theme.radius.M
            }
            ), (function(e) {
                return e.theme.spacing.S
            }
            ), (function(e) {
                return e.theme.spacing.S
            }
            ), (function(e) {
                return e.theme.spacing.S
            }
            )), Ti = u().div.withConfig({
                displayName: "UserMenuLinksstyled__UserMenuButtonContainer",
                componentId: "sc-179518m-8"
            })(bi || (bi = ei(["\n    width: 100%;\n    padding-top: ", ";\n\n    button {\n        padding: ", " ", ";\n    }\n"], ["\n    width: 100%;\n    padding-top: ", ";\n\n    button {\n        padding: ", " ", ";\n    }\n"])), (function(e) {
                return e.theme.spacing.M
            }
            ), (function(e) {
                return e.theme.spacing.S
            }
            ), (function(e) {
                return e.theme.spacing.M
            }
            )), Oi = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Ii = u().div.withConfig({
                displayName: "ListYourPlacestyled__ListYourPlaceLinkHeader",
                componentId: "sc-1yulzf3-0"
            })(wi || (wi = Oi(["\n    color: ", ";\n    background-color: ", ";\n    padding: ", " ", ";\n    text-transform: uppercase;\n"], ["\n    color: ", ";\n    background-color: ", ";\n    padding: ", " ", ";\n    text-transform: uppercase;\n"])), (function(e) {
                return e.theme.palette.text[500]
            }
            ), (function(e) {
                return e.theme.palette.background[20]
            }
            ), (function(e) {
                return e.theme.spacing.XS
            }
            ), (function(e) {
                return e.theme.spacing.S
            }
            )), zi = u().div.withConfig({
                displayName: "ListYourPlacestyled__ListYourPropertyDetail",
                componentId: "sc-1yulzf3-1"
            })(Ci || (Ci = Oi(["\n    cursor: pointer;\n    display: inline-block;\n    color: ", " !important;\n\n    &:hover {\n        color: ", " !important;\n    }\n"], ["\n    cursor: pointer;\n    display: inline-block;\n    color: ", " !important;\n\n    &:hover {\n        color: ", " !important;\n    }\n"])), (function(e) {
                return e.theme.palette.text[500]
            }
            ), (function(e) {
                return e.theme.palette.text[800]
            }
            )), Ai = u().a.withConfig({
                displayName: "ListYourPlacestyled__ListYourPropertyLink",
                componentId: "sc-1yulzf3-2"
            })(xi || (xi = Oi(["\n    cursor: pointer;\n    text-align: left;\n    color: ", " !important;\n    padding: ", " ", ";\n\n    &:hover, &:active, &:focus {\n        color: ", " !important;\n    }\n\n    &:hover {\n        text-decoration: underline !important;\n    }\n"], ["\n    cursor: pointer;\n    text-align: left;\n    color: ", " !important;\n    padding: ", " ", ";\n\n    &:hover, &:active, &:focus {\n        color: ", " !important;\n    }\n\n    &:hover {\n        text-decoration: underline !important;\n    }\n"])), (function(e) {
                return e.theme.palette.starRating.darkSolid.background
            }
            ), (function(e) {
                return e.theme.spacing.XS
            }
            ), (function(e) {
                return e.theme.spacing.S
            }
            ), (function(e) {
                return e.theme.palette.starRating.darkSolid.background
            }
            )), Fi = u()(l.Button).withConfig({
                displayName: "ListYourPlacestyled__ListYourPlaceButtonComponent",
                componentId: "sc-1yulzf3-3"
            })(Si || (Si = Oi(["\n    align-self: center;\n    white-space: nowrap;\n\n    border-color: ", ";\n    color: ", ";\n\n    &:hover, &:active, &:focus {\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n    }\n\n    & span {\n        font-weight: normal;\n    }\n"], ["\n    align-self: center;\n    white-space: nowrap;\n\n    border-color: ", ";\n    color: ", ";\n\n    &:hover, &:active, &:focus {\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n    }\n\n    & span {\n        font-weight: normal;\n    }\n"])), (function(e) {
                return e.theme.palette.starRating.darkSolid.background
            }
            ), (function(e) {
                return e.theme.palette.starRating.darkSolid.background
            }
            ), (function(e) {
                return e.theme.palette.starRating.darkSolid.text
            }
            ), (function(e) {
                return e.theme.palette.starRating.darkSolid.background
            }
            ), (function(e) {
                return e.theme.palette.starRating.darkSolid.background
            }
            )), Bi = function() {
                return window.location.pathname
            }, Ri = function() {
                return window.location.search
            }, Di = function(e) {
                window.open(e, "_blank")
            }, Li = function() {
                return Li = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Li.apply(this, arguments)
            }, _i = "header-list-your-place-button", ji = function(e) {
                var t = k({
                    dataComponentId: _i,
                    dataSelenium: "list-your-place-btn",
                    dataElementName: "header-list-your-place-button"
                });
                return A(Yr.AgodaHomes) ? o().createElement(Fi, Li({}, t, {
                    onClick: function() {
                        e.analytics.click(_i, 6),
                        Di(e.href)
                    },
                    variant: "outlined"
                }, k({
                    dataComponentId: "header-list-your-place-button"
                })), e.buttonText) : null
            }, qi = function(e) {
                return A(Yr.AgodaHomes) ? o().createElement(l.Box, Li({
                    display: "flex",
                    flexDirection: "column",
                    mt: "XS",
                    textAlign: "center"
                }, k({
                    dataComponentId: "header-list-your-place-link"
                })), o().createElement(Ii, null, e.titleText), o().createElement(Ai, {
                    target: "_blank",
                    href: e.href
                }, o().createElement(zi, null, e.detailText), o().createElement(le, {
                    as: "div",
                    variant: "body2",
                    mt: "XS"
                }, e.buttonText))) : null
            }, Hi = n(5422), Ui = a.memo((function(e) {
                var t = I().clearPriceFilter
                  , n = e.selectedCurrency;
                return n && n.code && 0 !== n.code.length ? a.createElement(a.Fragment, null, a.createElement(fe, {
                    dataComponent: "currency-container-selected-currency",
                    dataValue: n.code,
                    displayName: e.displayName && !e.displayCode,
                    isStrongText: void 0 === e.isDropDown || !e.isDropDown,
                    name: n.name,
                    nameDataComponent: "currency-container-selected-currency-name",
                    onClick: function() {
                        e.openCurrencyPopUp(),
                        e.closeHamburgerMenu && e.closeHamburgerMenu(),
                        e.analytics.click("currency-trigger", 5),
                        t()
                    }
                }, a.createElement(le, {
                    variant: "body2",
                    className: "CurrencyContainer__SelectedCurrency__Symbol"
                }, e.displayCode ? n.code.toUpperCase() : function(e) {
                    var t;
                    return null === (t = Hi.Re[e.toLowerCase()]) || void 0 === t ? void 0 : t.display
                }(n.code)))) : null
            }
            ));
            Ui.displayName = "CurrencyContainer";
            var Wi = new Ke.ClientSideBehavior("SettingMenuBehavior",$e.not.with($e.whiteLabelId.equal(h.Rurubu)).build(),Ye.FallbackStrategy.Enable)
              , Gi = function() {
                return Gi = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Gi.apply(this, arguments)
            }
              , Xi = function(e) {
                return e.text ? o().createElement(ki, Gi({
                    key: e.dataId,
                    onClick: function(t) {
                        e.analyticsClickVersion && e.analytics.click(e.dataId, e.analyticsClickVersion),
                        e.onClick && e.onClick(t)
                    },
                    href: e.url,
                    className: e.className,
                    isEnterpriseWhitelabel: e.isEnterpriseWhitelabel
                }, N(e.dataId)), e.text) : null
            }
              , Ki = function(e, t) {
                return e.text || t ? o().createElement(Ni, {
                    key: e.dataId,
                    href: e.url
                }, o().createElement(ki, Gi({
                    className: e.className,
                    flex: "1",
                    onClick: function(t) {
                        e.analyticsClickVersion && e.analytics.click(e.dataId, e.analyticsClickVersion),
                        e.onClick && e.onClick(t)
                    }
                }, k({
                    dataComponentId: e.dataId
                })), e.text), t) : null
            }
              , Yi = function(e) {
                var t, n, r, i = e.menuViewModel, a = i.cms, s = i.links, c = C.selectedLanguage, u = null === (n = null === (t = e.menuViewModel) || void 0 === t ? void 0 : t.currencyMenuViewModel) || void 0 === n ? void 0 : n.cms, d = {
                    isApplyGiftcard: e.menuViewModel.isApplyGiftcard,
                    applyGiftcardMenuText: null === (r = e.menuViewModel) || void 0 === r ? void 0 : r.applyGiftcardMenuText
                }, m = e.shouldShowCurrency && o().createElement(ni, {
                    key: "SettingsCurrency",
                    as: "div"
                }, o().createElement(Ui, Gi({
                    key: 2,
                    displayName: !0,
                    isDropDown: !0
                }, d, u, e, {
                    onCurrencyChange: e.onCurrencyChange
                })));
                return o().createElement(o().Fragment, null, o().createElement(Mi, null, a.settingsHeader), o().createElement(L, {
                    shouldi: e.getBehaviorManager().isEnabled(Wi)
                }, o().createElement(Ei, null, o().createElement(l.List, {
                    className: "SettingLinks",
                    variant: "vertical",
                    mx: "NONE",
                    my: "NONE",
                    px: "M",
                    py: "S"
                }, o().createElement(ni, {
                    key: "SettingsLanguage",
                    as: "div"
                }, o().createElement(ye, Gi({
                    key: 1,
                    displayName: !0,
                    selectedLanguage: c,
                    isDropDown: !0,
                    isEnterpriseWhitelabel: !1
                }, e))), m))), o().createElement(qi, Gi({}, e, {
                    buttonText: a.listYourPlaceText || "",
                    detailText: a.listingYourPlaceDetailText || "",
                    titleText: a.listingYourPlaceTitleText || "",
                    href: s.listYourPlaceLink
                })))
            }
              , $i = n(4750)
              , Zi = n.n($i)
              , Ji = function(e) {
                var t, n;
                return (null == e ? void 0 : e.selectedProgram) ? o().createElement("img", {
                    width: "32px",
                    height: "32px",
                    src: null === (t = null == e ? void 0 : e.selectedProgram) || void 0 === t ? void 0 : t.imageUrl,
                    alt: null === (n = null == e ? void 0 : e.selectedProgram) || void 0 === n ? void 0 : n.translatedProgramName
                }) : o().createElement(Zi(), {
                    size: "XL"
                })
            }
              , Qi = "sign-out-btn"
              , ea = function() {
                return ea = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                ea.apply(this, arguments)
            }
              , ta = {
                margin: 0,
                padding: 0
            }
              , na = function(e) {
                var t, n, r, i = e.menuItems, o = e.notificationItems, s = i && i.cms, c = o && o.inboxCount >= 0 ? o.inboxCount : 0, u = e.whiteLabelId === h.CitiUS || e.whiteLabelId === h.CitiUSUat1 || e.whiteLabelId === h.CitiUSUat2 || e.whiteLabelId === h.CitiUSUat3, d = a.useCallback((function() {
                    var t, n, r, l, d, m, p, f, y, g, v, b, w, C, x, S, k, M, N = [], E = s || {};
                    u ? N.push(Xi({
                        analyticsClickVersion: 1,
                        dataId: "my-bookings-link",
                        text: E.myBookingsText || "My bookings",
                        className: "booking-menu",
                        url: void 0,
                        isEnterpriseWhitelabel: e.isEnterpriseWhitelabel,
                        analytics: e.analytics
                    })) : N.push(Xi({
                        analyticsClickVersion: 1,
                        dataId: "my-bookings-link",
                        text: E.myBookingsText || "My bookings",
                        className: "booking-menu",
                        url: null === (t = e.links) || void 0 === t ? void 0 : t.manageBookingsUrl,
                        analytics: e.analytics
                    })),
                    A(Yr.UserMessaging) && N.push(Ki({
                        analyticsClickVersion: 1,
                        dataId: "inbox",
                        text: E.inboxText,
                        url: null === (n = e.links) || void 0 === n ? void 0 : n.inboxUrl,
                        analytics: e.analytics
                    }, c > 0 ? a.createElement(Vi, null, c) : null));
                    var P = A(Yr.AgodaCash)
                      , V = i && i.giftCardsMenuViewModel || void 0;
                    P && V && N.push(Ki({
                        dataId: "member-giftcard-balance",
                        text: V.giftCardMenuText,
                        url: null === (r = e.links) || void 0 === r ? void 0 : r.giftCardUrl,
                        analytics: e.analytics
                    }, V.isShowGiftCardBalance ? a.createElement(Pi, null, V.giftCardBalance) : null)),
                    (null == e ? void 0 : e.isCashbackRewardsEnabled) && i && i.isShowCashBackMenu && N.push(Ki({
                        dataId: "cashback-link",
                        text: E.cashbackText,
                        url: null === (l = e.links) || void 0 === l ? void 0 : l.cashbackLink,
                        analytics: e.analytics
                    }, (null === (d = null == i ? void 0 : i.cashBackMenuViewModel) || void 0 === d ? void 0 : d.cashBackBalanceInUSD) && (null === (m = null == i ? void 0 : i.cashBackMenuViewModel) || void 0 === m ? void 0 : m.cashBackBalanceInUSD) > 0 && (null == e ? void 0 : e.isShowCashBackBalance) ? a.createElement(le, {
                        variant: "subHeading1",
                        short: !1,
                        color: 800
                    }, null === (p = null == i ? void 0 : i.cashBackMenuViewModel) || void 0 === p ? void 0 : p.cashBackBalance) : null));
                    var T = A(Yr.AgodaVip);
                    if (i && i.isShowAgodaVipMenu && T) {
                        var O = null === (y = null === (f = null == i ? void 0 : i.giftCardsMenuViewModel) || void 0 === f ? void 0 : f.loyaltyProfileInfo) || void 0 === y ? void 0 : y.agodaVIP
                          , I = Qr(null == O ? void 0 : O.agodaVIPTheme);
                        N.push(Ki({
                            analyticsClickVersion: 1,
                            dataId: "agoda-vip-menu",
                            text: null === (g = E.agodaVipMenu) || void 0 === g ? void 0 : g.agodaVipMenuText,
                            url: null === (v = e.links) || void 0 === v ? void 0 : v.agodaVipUrl,
                            analytics: e.analytics
                        }, a.createElement($r, {
                            elementName: "vipBadge",
                            theme: I,
                            themeText: null == O ? void 0 : O.themeText,
                            isRtl: e.isRtl
                        })))
                    }
                    A(Yr.Favorites) && N.push(Xi({
                        analyticsClickVersion: 1,
                        dataId: "favorite-menu",
                        text: E.myFavoritesText,
                        url: null === (b = e.links) || void 0 === b ? void 0 : b.favoriteLink,
                        analytics: e.analytics
                    }));
                    var F = A(Yr.Reviews);
                    if (F && F.isSubmissionEnabled && e.whiteLabelId !== h.ClubPremier) {
                        var R = o && o.reviews && o.reviews.totalPendingReviews || 0;
                        N.push(Ki({
                            dataId: "review-menu",
                            text: E.myReviewsText,
                            url: null === (w = e.links) || void 0 === w ? void 0 : w.myReviewsUrl,
                            analytics: e.analytics
                        }, R > 0 ? a.createElement(Vi, null, R) : null))
                    }
                    var D = A(Yr.PointsMax);
                    if (i && D && (null == e ? void 0 : e.isPointsmaxEnabled) && N.push(Ki({
                        analyticsClickVersion: 1,
                        dataId: "pointsmax-menu",
                        text: E.pointsMaxText,
                        onClick: e.openPointsMaxPopUp,
                        analytics: e.analytics
                    }, D && e.whiteLabelId === h.Agoda && (null == e ? void 0 : e.isPointsmaxEnabled) ? a.createElement(Ji, {
                        selectedProgram: e.selectedPointsMaxProgram
                    }) : null)),
                    i && i.isShowUserProfileMenu && N.push(Xi({
                        dataId: "profile-menu",
                        text: E.myProfileText,
                        url: null === (C = e.links) || void 0 === C ? void 0 : C.myProfileLink,
                        analytics: e.analytics
                    })),
                    e.links && e.links.remainingPointsLink && N.push(Xi({
                        dataId: "remaining-points",
                        text: E.remainingPoints,
                        url: null === (x = e.links) || void 0 === x ? void 0 : x.remainingPointsLink,
                        analytics: e.analytics
                    })),
                    u && (null === (S = e.links) || void 0 === S ? void 0 : S.manageBookingsUrl) && N.push(Xi({
                        dataId: "new-citi-bookings",
                        text: E.newBookingsText || "Made on or after Mar 19, 2023",
                        url: e.links.manageBookingsUrl,
                        isEnterpriseWhitelabel: e.isEnterpriseWhitelabel,
                        analytics: e.analytics
                    })),
                    u && B(Yr.SsoPartnerLinks)) {
                        var L = A(Yr.SsoPartnerLinks)
                          , _ = null != (null == L ? void 0 : L.links) ? L.links.VISIT_OLD_CITI_BOOKINGS : null;
                        _ && N.push(Xi({
                            dataId: "old-citi-bookings",
                            text: E.oldBookingsText || "Made before Mar 19, 2023",
                            url: _,
                            isEnterpriseWhitelabel: e.isEnterpriseWhitelabel,
                            analytics: e.analytics
                        }))
                    }
                    return u && (null === (k = e.links) || void 0 === k ? void 0 : k.citiUsCardSelect) && N.push(Xi({
                        dataId: "change-card",
                        text: E.changeCardText || "Use a different card",
                        url: null === (M = e.links) || void 0 === M ? void 0 : M.citiUsCardSelect,
                        isEnterpriseWhitelabel: e.isEnterpriseWhitelabel,
                        analytics: e.analytics
                    })),
                    e.isEnterpriseWhitelabel && e.signoutButton && N.push(Xi({
                        analyticsClickVersion: 5,
                        onClick: function(t) {
                            t.preventDefault(),
                            e.onSignOutClick && e.onSignOutClick()
                        },
                        dataId: Qi,
                        text: z("signOut"),
                        url: "#",
                        isEnterpriseWhitelabel: e.isEnterpriseWhitelabel,
                        analytics: e.analytics
                    })),
                    N.filter((function(e) {
                        return !!e
                    }
                    )).map((function(t, n) {
                        var r = !("new-citi-bookings" !== (null == t ? void 0 : t.key) && "old-citi-bookings" !== (null == t ? void 0 : t.key))
                          , i = !("my-bookings-link" !== (null == t ? void 0 : t.key) || !u);
                        return a.createElement(ni, {
                            key: n,
                            isEnterpriseWhitelabel: e.isEnterpriseWhitelabel,
                            noHover: i,
                            isSubLink: r
                        }, t)
                    }
                    ))
                }
                ), [s, i, c, o, e.links, e.whiteLabelId]), m = a.useCallback((function() {
                    return null == i ? void 0 : i.hostMenuViewModel.hostMenuItemsLink.filter((function(e) {
                        return null !== e.url && -1 === e.url.indexOf("cid=1828702")
                    }
                    )).map((function(t) {
                        return a.createElement(ki, {
                            key: t.url,
                            href: t.url,
                            className: "host-menu-link",
                            isEnterpriseWhitelabel: e.isEnterpriseWhitelabel
                        }, t.cmsText)
                    }
                    ))
                }
                ), [i]), p = d(), f = i && i.isHost ? m() : [], y = !!(p && p.length > 0 || f && f.length > 0), g = null === (r = null === (n = null === (t = e.headerParams) || void 0 === t ? void 0 : t.menuViewModel) || void 0 === n ? void 0 : n.cms) || void 0 === r ? void 0 : r.loginHeader, v = e.signInButton || e.signUpButton ? a.createElement(l.Box, ea({}, k({
                    dataComponentId: "user-menu-signin-button-container"
                }), {
                    className: "header-menu__item",
                    clone: !0,
                    display: "block",
                    flexDirection: "column",
                    width: "100%",
                    px: "XL",
                    py: "S",
                    alignItems: "center"
                }), g && a.createElement(Mi, null, g), e.showSignIn && e.signInButton ? a.createElement(Ti, ea({}, k({
                    dataComponentId: "user-menu-signin-button-container"
                })), e.signInButton) : a.createElement(a.Fragment, null), e.showSignUp && e.signUpButton ? a.createElement(Ti, ea({}, k({
                    dataComponentId: "user-menu-signup-button-container"
                })), e.signUpButton) : a.createElement(a.Fragment, null)) : a.createElement(a.Fragment, null);
                return a.createElement(a.Fragment, null, !e.isEnterpriseWhitelabel && !(!s || !s.myAccountHeader) && a.createElement(Mi, null, s.myAccountHeader), a.createElement(ti, {
                    className: "UserOrHostMenuContainer",
                    isEnterpriseWhitelabel: e.isEnterpriseWhitelabel,
                    hasUserOrHostMenu: y
                }, p && p.length > 0 && a.createElement("ul", {
                    className: "UserOrHostMenuContainer__UserMenu",
                    style: ta
                }, p), f && f.length > 0 && a.createElement("ul", {
                    className: "UserOrHostMenuContainer__HostMenu",
                    style: ta
                }, f)), v, a.createElement(l.Box, {
                    className: "header-menu__item",
                    display: "block"
                }, !e.isEnterpriseWhitelabel && e.signoutButton), e.showHamburgerMenu && a.createElement(Yi, {
                    experiments: e.experiments,
                    cdnUrl: e.cdnUrl,
                    wysiwyp: e.wysiwyp,
                    analytics: e.analytics,
                    logger: e.logger,
                    getBehaviorManager: e.getBehaviorManager,
                    menuViewModel: e.headerParams.menuViewModel,
                    shouldShowCurrency: e.shouldShowCurrency,
                    onCurrencyChange: e.onCurrencyChange,
                    selectedCurrency: e.selectedCurrency,
                    openCurrencyPopUp: e.openCurrencyPopUp,
                    openLanguagePopUp: e.openLanguagePopUp
                }))
            };
            na.displayName = "UserMenuLinks";
            var ra, ia, aa = function() {
                return aa = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                aa.apply(this, arguments)
            }, oa = {
                margin: 0,
                width: "100%"
            }, la = function(e) {
                var t = o().useCallback((function() {
                    e.analytics.click(Qi, 5),
                    e.onSignOutClick && e.onSignOutClick()
                }
                ), [e]);
                return o().createElement(l.Box, aa({
                    mx: "L",
                    my: "XL",
                    mt: "NONE"
                }, N("menu-user-sign-out-container")), o().createElement(l.Button, aa({
                    variant: "outlined",
                    onClick: t,
                    key: "signOut",
                    fullWidth: !0,
                    color: "primary",
                    radius: "S",
                    style: oa
                }, N(Qi)), o().createElement(le, {
                    variant: "body2",
                    short: !1
                }, z("signOut").toUpperCase())))
            }, sa = function() {
                return sa = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                sa.apply(this, arguments)
            }, ca = function(e) {
                var t;
                return e && (e.inboxCount || (null === (t = e.reviews) || void 0 === t ? void 0 : t.totalPendingReviews)) ? e.inboxCount + e.reviews.totalPendingReviews : 0
            }, ua = (o().createElement(l.Box, {
                as: "span",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }, o().createElement(Vr(), sa({
                size: "L",
                color: 0
            }, k({
                dataComponentId: "user-avatar-icon"
            })))),
            function(e) {
                return o().createElement(l.Card, sa({
                    px: "NONE",
                    py: "NONE",
                    width: "18.5em"
                }, e, k({
                    dataComponentId: "user-menu-dropdown-container"
                })))
            }
            ), da = {
                arrow: {
                    enabled: !0
                },
                positionFixed: {
                    enabled: !0
                }
            }, ma = function(e, t) {
                return {
                    firstName: (null == e ? void 0 : e.firstName) || (null == t ? void 0 : t.firstName) || "",
                    lastName: (null == e ? void 0 : e.lastName) || (null == t ? void 0 : t.lastName) || ""
                }
            }, pa = function(e, t, n, r) {
                if (!e && t)
                    return t;
                var i = [];
                return n && i.push(n.charAt(0).toUpperCase() + n.slice(1)),
                r && (e ? i.push("".concat(r.charAt(0).toUpperCase() + r.slice(1))) : i.push(r.charAt(0).toUpperCase())),
                i.length > 0 ? "".concat(i.join(" ")).concat(e ? "" : ".") : ""
            }, fa = function(e) {
                var t = e.children
                  , n = e.userMenuDropDown;
                return o().createElement(Mr, null, o().createElement(s.Popover, {
                    content: n,
                    pointerPosition: "start-below",
                    zIndex: 1400
                }, o().createElement(s.Box, {
                    as: "button"
                }, t)))
            }, ya = function() {
                return ya = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                ya.apply(this, arguments)
            }, ga = function(e) {
                var t, n, r, i, a, s, c, u, d = e.getBehaviorManager().isEnabled(Tr) && o().createElement(jr, {
                    menuItems: e.userMenuVm,
                    analytics: e.analytics
                }), m = ca(e.userNotifications), p = ma(e.user, e.userMenuVm), f = p.firstName, y = p.lastName, g = e.user ? pa(e.isEnterprise, null === (n = e.userMenuVm) || void 0 === n ? void 0 : n.shortenedRewardMemberName, f, y) : "", h = o().createElement(br, ya({}, N("user-name")), e.isEnterprise ? o().createElement(le, {
                    variant: "subHeading1",
                    short: !1
                }, g, (null === (i = null === (r = e.userMenuVm) || void 0 === r ? void 0 : r.partnerLoyaltyMenuViewModel) || void 0 === i ? void 0 : i.partnerLoyaltyCardLastFourDigits) ? " (...".concat(e.userMenuVm.partnerLoyaltyMenuViewModel.partnerLoyaltyCardLastFourDigits, ")") : "") : o().createElement(le, {
                    variant: "body1"
                }, g), Jr(e.isRtl, e.userMenuVm), function() {
                    var t, n, r, i, a = null;
                    return e.isEnterprise && (function(t) {
                        var n;
                        t && (null === (n = null == e ? void 0 : e.analytics) || void 0 === n ? void 0 : n.custom) && e.analytics.custom(Rt.Seen, {
                            action_element_name: Lr,
                            action_element_value: "".concat(t),
                            event_version: 1
                        })
                    }(null === (n = null === (t = e.userMenuVm) || void 0 === t ? void 0 : t.partnerLoyaltyMenuViewModel) || void 0 === n ? void 0 : n.partnerLoyaltyBalance),
                    a = o().createElement(le, {
                        variant: "body3",
                        short: !1
                    }, null === (i = null === (r = e.userMenuVm) || void 0 === r ? void 0 : r.partnerLoyaltyMenuViewModel) || void 0 === i ? void 0 : i.partnerLoyaltyBalance)),
                    a
                }()), v = e.isEnterprise ? o().createElement(Or, {
                    partnerLoyaltyMenuViewModel: null === (a = e.userMenuVm) || void 0 === a ? void 0 : a.partnerLoyaltyMenuViewModel
                }) : o().createElement(l.Avatar, ya(((t = {
                    className: "UserAvatar",
                    avatarSize: "M",
                    backgroundColor: {
                        color: Ir((null === (s = e.user) || void 0 === s ? void 0 : s.userIconIndex) || 0),
                        variant: "solid"
                    }
                })[(0,
                l.isRtl)() ? "ml" : "mr"] = "M",
                t), N("user-avatar")), (null === (c = e.userMenuVm) || void 0 === c ? void 0 : c.userIconOverlay) ? null === (u = e.userMenuVm) || void 0 === u ? void 0 : u.userIconOverlay : o().createElement(l.Box, {
                    as: "span",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%"
                }, o().createElement(Vr(), ya({
                    size: "L",
                    color: 0
                }, k({
                    dataComponentId: "user-avatar-icon"
                })))));
                return o().createElement(o().Fragment, null, o().createElement(o().Fragment, null, e.shouldShowNotificationCounter && m > 0 && o().createElement(Sr, null, m), v, h, e.isEnterprise ? o().createElement(ir(), {
                    size: "S",
                    variant: "background",
                    colorVariant: {
                        color: "primary",
                        variant: "darkSolid"
                    }
                }) : o().createElement(xr, ya({}, N("reward-container")), d, e.shouldShowGiftCardBalance && o().createElement(Hr, {
                    menuItems: e.userMenuVm,
                    analytics: e.analytics,
                    isRtl: e.isRtl
                }), o().createElement(Er(), {
                    size: "S"
                }))))
            }, ha = function(e) {
                return function() {
                    var t, n, r, i, o, l, s, c, u, d = [], m = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links;
                    d.push(Xi({
                        analyticsClickVersion: 1,
                        dataId: "my-bookings-link",
                        text: (null === (r = null === (n = e.menuVm) || void 0 === n ? void 0 : n.cms) || void 0 === r ? void 0 : r.myBookingsText) || "My bookings",
                        className: "booking-menu",
                        url: void 0,
                        isEnterpriseWhitelabel: !0,
                        analytics: e.analytics
                    })),
                    (null == m ? void 0 : m.manageBookingsUrl) && d.push(Xi({
                        dataId: "new-citi-bookings",
                        text: (null === (o = null === (i = e.userMenuVm) || void 0 === i ? void 0 : i.cms) || void 0 === o ? void 0 : o.newBookingsText) || "Made on or after Mar 19, 2023",
                        url: m.manageBookingsUrl,
                        isEnterpriseWhitelabel: !0,
                        analytics: e.analytics
                    }));
                    var p = F(e.featureConfigs, Yr.SsoPartnerLinks);
                    if (p) {
                        var f = null != (null == p ? void 0 : p.links) ? p.links.VISIT_OLD_CITI_BOOKINGS : null;
                        f && d.push(Xi({
                            dataId: "old-citi-bookings",
                            text: (null === (s = null === (l = e.userMenuVm) || void 0 === l ? void 0 : l.cms) || void 0 === s ? void 0 : s.oldBookingsText) || "Made before Mar 19, 2023",
                            url: f,
                            isEnterpriseWhitelabel: !0,
                            analytics: e.analytics
                        }))
                    }
                    return (null == m ? void 0 : m.citiUsCardSelect) && d.push(Xi({
                        dataId: "change-card",
                        text: (null === (u = null === (c = e.userMenuVm) || void 0 === c ? void 0 : c.cms) || void 0 === u ? void 0 : u.changeCardText) || "Use a different card",
                        url: null == m ? void 0 : m.citiUsCardSelect,
                        isEnterpriseWhitelabel: !0,
                        analytics: e.analytics
                    })),
                    d.push(Xi({
                        analyticsClickVersion: 5,
                        onClick: function(t) {
                            t.preventDefault(),
                            e.onSignOutClick()
                        },
                        dataId: Qi,
                        text: z("signOut"),
                        url: "#",
                        isEnterpriseWhitelabel: !0,
                        analytics: e.analytics
                    })),
                    d.filter((function(e) {
                        return !!e
                    }
                    )).map((function(e, t) {
                        var n = "new-citi-bookings" === (null == e ? void 0 : e.key) || "old-citi-bookings" === (null == e ? void 0 : e.key)
                          , r = "my-bookings-link" === (null == e ? void 0 : e.key);
                        return a.createElement(ni, {
                            key: t,
                            isEnterpriseWhitelabel: !0,
                            noHover: r,
                            isSubLink: n
                        }, e)
                    }
                    ))
                }
            }, va = {
                1: {
                    render: function(e) {
                        return function() {
                            var t, n, r, i, o, l, s, c, u, d, m, p, f, y, g, h = [], v = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links, b = null === (n = e.userMenuVm) || void 0 === n ? void 0 : n.cms;
                            if (h.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (r = e.menuVm) || void 0 === r ? void 0 : r.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == v ? void 0 : v.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            F(e.featureConfigs, Yr.UserMessaging)) {
                                var w = (null === (i = e.userNotifications) || void 0 === i ? void 0 : i.inboxCount) || 0;
                                h.push(Ki({
                                    dataId: "inbox",
                                    text: null == b ? void 0 : b.inboxText,
                                    url: null == v ? void 0 : v.inboxUrl,
                                    analytics: e.analytics,
                                    analyticsClickVersion: 1
                                }, w > 0 ? a.createElement(Vi, null, w) : null))
                            }
                            var C = F(e.featureConfigs, Yr.AgodaCash)
                              , x = null === (o = e.userMenuVm) || void 0 === o ? void 0 : o.giftCardsMenuViewModel;
                            if (C && x && h.push(Ki({
                                dataId: "member-giftcard-balance",
                                text: x.giftCardMenuText,
                                url: null == v ? void 0 : v.giftCardUrl,
                                analytics: e.analytics
                            }, x.isShowGiftCardBalance ? a.createElement(Pi, null, x.giftCardBalance) : null)),
                            (null == e ? void 0 : e.isCashbackRewardsEnabled) && (null === (l = null == e ? void 0 : e.userMenuVm) || void 0 === l ? void 0 : l.isShowCashBackMenu)) {
                                var S = null === (s = null == e ? void 0 : e.userMenuVm) || void 0 === s ? void 0 : s.cashBackMenuViewModel;
                                h.push(Ki({
                                    dataId: "cashback-link",
                                    text: null == b ? void 0 : b.cashbackText,
                                    url: null == v ? void 0 : v.cashbackLink,
                                    analytics: e.analytics
                                }, (null == S ? void 0 : S.cashBackBalanceInUSD) && (null == S ? void 0 : S.cashBackBalanceInUSD) > 0 && (null == e ? void 0 : e.isShowCashBackBalance) ? a.createElement(le, {
                                    variant: "subHeading1",
                                    short: !1,
                                    color: 800
                                }, null == S ? void 0 : S.cashBackBalance) : null))
                            }
                            var k = F(e.featureConfigs, Yr.AgodaVip);
                            if ((null === (c = null == e ? void 0 : e.userMenuVm) || void 0 === c ? void 0 : c.isShowAgodaVipMenu) && k) {
                                var M = null === (m = null === (d = null === (u = null == e ? void 0 : e.userMenuVm) || void 0 === u ? void 0 : u.giftCardsMenuViewModel) || void 0 === d ? void 0 : d.loyaltyProfileInfo) || void 0 === m ? void 0 : m.agodaVIP
                                  , N = Qr(null == M ? void 0 : M.agodaVIPTheme);
                                h.push(Ki({
                                    analyticsClickVersion: 1,
                                    dataId: "agoda-vip-menu",
                                    text: null === (p = null == b ? void 0 : b.agodaVipMenu) || void 0 === p ? void 0 : p.agodaVipMenuText,
                                    url: null == v ? void 0 : v.agodaVipUrl,
                                    analytics: e.analytics
                                }, a.createElement($r, {
                                    elementName: "vipBadge",
                                    theme: N,
                                    themeText: null == M ? void 0 : M.themeText,
                                    isRtl: e.isRtl
                                })))
                            }
                            F(e.featureConfigs, Yr.Favorites) && h.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "favorite-menu",
                                text: null == b ? void 0 : b.myFavoritesText,
                                url: null == v ? void 0 : v.favoriteLink,
                                analytics: e.analytics
                            }));
                            var E = F(e.featureConfigs, Yr.Reviews);
                            if (E && E.isSubmissionEnabled) {
                                var P = (null === (y = null === (f = null == e ? void 0 : e.userNotifications) || void 0 === f ? void 0 : f.reviews) || void 0 === y ? void 0 : y.totalPendingReviews) || 0;
                                h.push(Ki({
                                    dataId: "review-menu",
                                    text: null == b ? void 0 : b.myReviewsText,
                                    url: null == v ? void 0 : v.myReviewsUrl,
                                    analytics: e.analytics
                                }, P > 0 ? a.createElement(Vi, null, P) : null))
                            }
                            var V = F(e.featureConfigs, Yr.PointsMax);
                            return e.userMenuVm && V && (null == e ? void 0 : e.isPointsMaxEnabled) && h.push(Ki({
                                analyticsClickVersion: 1,
                                dataId: "pointsmax-menu",
                                text: null == b ? void 0 : b.pointsMaxText,
                                onClick: e.onPointsMaxPopUpOpen,
                                analytics: e.analytics
                            }, a.createElement(Ji, {
                                selectedProgram: e.selectedPointsMax
                            }))),
                            (null === (g = null == e ? void 0 : e.userMenuVm) || void 0 === g ? void 0 : g.isShowUserProfileMenu) && h.push(Xi({
                                dataId: "profile-menu",
                                text: null == b ? void 0 : b.myProfileText,
                                url: null == v ? void 0 : v.myProfileLink,
                                analytics: e.analytics
                            })),
                            h.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                3: {
                    render: function(e) {
                        return function() {
                            var t, n, r, i, o = [], l = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links, s = null === (n = e.userMenuVm) || void 0 === n ? void 0 : n.cms;
                            return o.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (r = e.menuVm) || void 0 === r ? void 0 : r.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == l ? void 0 : l.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            (null === (i = null == e ? void 0 : e.userMenuVm) || void 0 === i ? void 0 : i.isShowUserProfileMenu) && o.push(Xi({
                                dataId: "profile-menu",
                                text: null == s ? void 0 : s.myProfileText,
                                url: null == l ? void 0 : l.myProfileLink,
                                analytics: e.analytics
                            })),
                            o.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                4: {
                    render: function(e) {
                        return function() {
                            var t, n, r, i, o = [], l = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links, s = null === (n = e.userMenuVm) || void 0 === n ? void 0 : n.cms;
                            return o.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (r = e.menuVm) || void 0 === r ? void 0 : r.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == l ? void 0 : l.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            (null === (i = e.userMenuVm) || void 0 === i ? void 0 : i.isShowUserProfileMenu) && o.push(Xi({
                                dataId: "profile-menu",
                                text: null == s ? void 0 : s.myProfileText,
                                url: null == l ? void 0 : l.myProfileLink,
                                analytics: e.analytics
                            })),
                            (null == l ? void 0 : l.remainingPointsLink) && o.push(Xi({
                                dataId: "remaining-points",
                                text: null == s ? void 0 : s.remainingPoints,
                                url: null == l ? void 0 : l.remainingPointsLink,
                                analytics: e.analytics
                            })),
                            o.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                999: {
                    render: function(e) {
                        return function() {
                            var t, n, r = [], i = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links;
                            return r.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (n = e.menuVm) || void 0 === n ? void 0 : n.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == i ? void 0 : i.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            r.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                32: {
                    render: function(e) {
                        return function() {
                            var t, n, r, i, o = [], l = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links, s = null === (n = e.userMenuVm) || void 0 === n ? void 0 : n.cms;
                            return o.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (r = e.menuVm) || void 0 === r ? void 0 : r.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == l ? void 0 : l.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            (null === (i = null == e ? void 0 : e.userMenuVm) || void 0 === i ? void 0 : i.isShowUserProfileMenu) && o.push(Xi({
                                dataId: "profile-menu",
                                text: null == s ? void 0 : s.myProfileText,
                                url: null == l ? void 0 : l.myProfileLink,
                                analytics: e.analytics
                            })),
                            o.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                45: {
                    render: function(e) {
                        return function() {
                            var t, n, r = [], i = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links;
                            return r.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (n = e.menuVm) || void 0 === n ? void 0 : n.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == i ? void 0 : i.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            r.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                47: {
                    render: function(e) {
                        return function() {
                            var t, n, r = [], i = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links;
                            return r.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (n = e.menuVm) || void 0 === n ? void 0 : n.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == i ? void 0 : i.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            r.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                50: {
                    render: function(e) {
                        return function() {
                            var t, n, r = [], i = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links;
                            return r.push(Xi({
                                analyticsClickVersion: 1,
                                dataId: "my-bookings-link",
                                text: null === (n = e.menuVm) || void 0 === n ? void 0 : n.cms.myBookingsText,
                                className: "booking-menu",
                                url: null == i ? void 0 : i.manageBookingsUrl,
                                analytics: e.analytics
                            })),
                            r.filter((function(e) {
                                return !!e
                            }
                            )).map((function(e, t) {
                                return a.createElement(ni, {
                                    key: t
                                }, e)
                            }
                            ))
                        }
                    }
                },
                51: {
                    render: ha
                },
                5101: {
                    render: ha
                },
                5102: {
                    render: ha
                },
                5103: {
                    render: ha
                }
            }, ba = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, wa = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, a = t.length; i < a; i++)
                        !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }, Ca = new Ke.ClientSideBehavior("MenuLinkMainHeaderBehavior",$e.not.with($e.whiteLabelId.any.apply($e.whiteLabelId, wa([], ba(R), !1))).build(),Ye.FallbackStrategy.Disable), xa = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, Sa = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, a = t.length; i < a; i++)
                        !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }, ka = new Ke.ClientSideBehavior("SignOutBehavior",$e.not.with($e.whiteLabelId.any.apply($e.whiteLabelId, Sa([], xa(R), !1))).build(),Ye.FallbackStrategy.Disable), Ma = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, Na = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, a = t.length; i < a; i++)
                        !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }, Ea = new Ke.ClientSideBehavior("SettingsMenuLinkBehavior",$e.not.with($e.whiteLabelId.any.apply($e.whiteLabelId, Na([], Ma(R), !1))).build(),Ye.FallbackStrategy.Disable), Pa = function() {
                return Pa = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Pa.apply(this, arguments)
            }, Va = "sign-up-button", Ta = function(e) {
                var t = o().useCallback((function() {
                    e.analytics.click(Va, 5),
                    e.onSignUpClick && e.onSignUpClick()
                }
                ), [e]);
                return o().createElement(l.Button, Pa({
                    variant: e.buttonVariant || "outlined",
                    onClick: t,
                    key: "signUp",
                    color: "primary",
                    fullWidth: e.isButtonFullWidth,
                    radius: "S",
                    me: "S"
                }, N(Va), {
                    className: "global-header-signup-button"
                }), o().createElement(le, {
                    as: "span",
                    style: {
                        whiteSpace: "nowrap"
                    },
                    variant: "body2",
                    short: e.isShort
                }, z("signUp")))
            }, Oa = function() {
                return Oa = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Oa.apply(this, arguments)
            }, Ia = {
                margin: 0,
                padding: 0
            }, za = function(e) {
                var t, n, r, i, o = va[e.whiteLabelId], s = o ? o.render(e)() : function(e) {
                    return function() {
                        var t, n, r = [], i = null === (t = e.menuVm) || void 0 === t ? void 0 : t.links;
                        return r.push(Xi({
                            analyticsClickVersion: 1,
                            dataId: "my-bookings-link",
                            text: null === (n = e.menuVm) || void 0 === n ? void 0 : n.cms.myBookingsText,
                            className: "booking-menu",
                            url: null == i ? void 0 : i.manageBookingsUrl,
                            analytics: e.analytics
                        })),
                        r.filter((function(e) {
                            return !!e
                        }
                        )).map((function(e, t) {
                            return a.createElement(ni, {
                                key: t
                            }, e)
                        }
                        ))
                    }
                }(e)(), c = e.getBehaviorManager(), u = !e.isLoggedIn && !!F(e.featureConfigs, Yr.Login), d = !e.isLoggedIn && !!F(e.featureConfigs, Yr.SignUp);
                return a.createElement(a.Fragment, null, a.createElement(L, {
                    shouldi: c.isEnabled(Ca) && !!(null === (n = null === (t = e.userMenuVm) || void 0 === t ? void 0 : t.cms) || void 0 === n ? void 0 : n.myAccountHeader)
                }, a.createElement(Mi, null, null === (i = null === (r = e.userMenuVm) || void 0 === r ? void 0 : r.cms) || void 0 === i ? void 0 : i.myAccountHeader)), a.createElement(ti, {
                    className: "UserOrHostMenuContainer",
                    isEnterpriseWhitelabel: !1,
                    hasUserOrHostMenu: !0
                }, a.createElement(L, {
                    shouldi: s.length > 0
                }, a.createElement("ul", {
                    className: "UserOrHostMenuContainer__UserMenu",
                    style: Ia
                }, s))), a.createElement(L, {
                    shouldi: u || d
                }, a.createElement(l.Box, Oa({}, k({
                    dataComponentId: "user-menu-signin-button-container"
                }), {
                    className: "header-menu__item",
                    clone: !0,
                    display: "block",
                    flexDirection: "column",
                    width: "100%",
                    px: "XL",
                    py: "S",
                    alignItems: "center"
                }), e.menuVm.cms.loginHeader ? a.createElement(Mi, null, e.menuVm.cms.loginHeader) : a.createElement(a.Fragment, null), u ? a.createElement(Ti, Oa({}, k({
                    dataComponentId: "user-menu-signin-button-container"
                })), a.createElement(l.Button, Oa({
                    variant: "outlined",
                    key: "signIn",
                    color: "primary",
                    radius: "S",
                    pt: "S",
                    me: "S",
                    fullWidth: !0,
                    onClick: e.onSignInClick
                }, N("sign-in-button")), a.createElement(l.Box, {
                    as: "span",
                    whiteSpace: "nowrap"
                }, z("signIn")))) : a.createElement(a.Fragment, null), d ? a.createElement(Ti, Oa({}, k({
                    dataComponentId: "user-menu-signup-button-container"
                })), a.createElement(Ta, {
                    analytics: e.analytics,
                    onSignUpClick: e.onSignUpClick,
                    isButtonFullWidth: !0,
                    buttonVariant: "solid",
                    isShort: !1
                })) : a.createElement(a.Fragment, null))), a.createElement(l.Box, {
                    className: "header-menu__item",
                    display: "block"
                }, a.createElement(L, {
                    shouldi: c.isEnabled(ka) && e.isLoggedIn
                }, a.createElement(la, {
                    onSignOutClick: e.onSignOutClick,
                    analytics: e.analytics
                }))), e.children)
            }, Aa = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Fa = u().section.withConfig({
                displayName: "CitiHeaderStyledSectionstyled__CitiHeaderStyledSectionStyled",
                componentId: "sc-2wlqiu-0"
            })(ra || (ra = Aa(["\n    display: flex;\n    padding: 0 ", ";\n    background-color: ", ";\n    color: ", ";\n    min-height: 92px;\n    border-bottom-color: ", ";\n    border-bottom-style: solid;\n    border-bottom-width: 4px;\n    align-items: center;\n    flex: 1 1 0;\n\n    a {\n        text-decoration: none;\n    }\n\n    min-width: 768px;\n"], ["\n    display: flex;\n    padding: 0 ", ";\n    background-color: ", ";\n    color: ", ";\n    min-height: 92px;\n    border-bottom-color: ", ";\n    border-bottom-style: solid;\n    border-bottom-width: 4px;\n    align-items: center;\n    flex: 1 1 0;\n\n    a {\n        text-decoration: none;\n    }\n\n    min-width: 768px;\n"])), (function(e) {
                return e.theme.spacing.XXL
            }
            ), (function(e) {
                return e.theme.palette.header.background
            }
            ), (function(e) {
                return e.theme.palette.header.text.color
            }
            ), (function(e) {
                return e.theme.palette.secondary.plainText.text
            }
            )), Ba = function() {
                return Ba = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ba.apply(this, arguments)
            }, Ra = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, Da = function(e) {
                var t, n, r, i, o, s = null === (t = null == e ? void 0 : e.rightHeaderItemsProp) || void 0 === t ? void 0 : t.shoppingCart, c = null === (n = null == e ? void 0 : e.rightHeaderItemsProp) || void 0 === n ? void 0 : n.renderCartIcon, u = Ra(a.useState(!1), 2), d = u[0], p = u[1], g = function() {
                    return p(!1)
                }, h = a.useCallback((function() {
                    var t, n, r, i, a;
                    null !== (r = null === (n = (t = e.callbacks).openCartSummary) || void 0 === n ? void 0 : n.call(t)) && void 0 !== r || null === (a = (i = e.callbacks).onCartIngressSelected) || void 0 === a || a.call(i)
                }
                ), []), v = a.createElement(a.Fragment, null, a.createElement(L, {
                    shouldi: !!s && !(null === (r = e.experiments) || void 0 === r ? void 0 : r.shouldUseCartProp)
                }, a.createElement(l.Box, {
                    mx: "L",
                    alignSelf: "center",
                    "data-component": "shopping-cart"
                }, a.createElement(Pe, {
                    icon: null == s ? void 0 : s.icon,
                    iconStyles: null == s ? void 0 : s.iconStyles,
                    notificationText: null == s ? void 0 : s.cartItemCountText,
                    onClick: h
                }))), a.createElement(L, {
                    shouldi: !!c && !!(null === (i = e.experiments) || void 0 === i ? void 0 : i.shouldUseCartProp)
                }, a.createElement(l.Box, {
                    mx: "L",
                    alignSelf: "center",
                    "data-component": "cart-icon"
                }, null == c ? void 0 : c(h))));
                return a.createElement(Fa, Ba({}, k({
                    dataComponentId: "header-container-section"
                })), a.createElement(m, null), a.createElement(l.Box, Ba({
                    key: "logo-and-links-container",
                    display: "inline-block",
                    flex: "none",
                    px: "L",
                    py: "NONE"
                }, k({
                    dataComponentId: "header-left-section"
                })), a.createElement("nav", {
                    key: "header-logo-and-links-nav",
                    className: "Header__LogoAndLinks"
                }, a.createElement(er, {
                    languageId: e.languageId,
                    analytics: e.analytics,
                    getBehaviorManager: e.getBehaviorManager,
                    culture: e.culture,
                    isRtl: e.isRtl,
                    whitelabelId: e.whiteLabelId,
                    logoAndLinks: e.params.logoAndLinksMenu
                }), a.createElement(hr, {
                    getBehaviorManager: e.getBehaviorManager,
                    logoAndLinks: e.params.logoAndLinksMenu,
                    isRtl: e.isRtl,
                    currency: null === (o = e.selectedCurrency) || void 0 === o ? void 0 : o.code,
                    analytics: e.analytics
                }))), a.createElement(f, Ba({
                    key: "right-container",
                    display: "inline-flex",
                    justifyContent: "flex-end",
                    position: "relative"
                }, k({
                    dataComponentId: "header-right-section"
                })), a.createElement(y, null, a.createElement(ye, Ba({}, e, {
                    isDropDown: !1,
                    isEnterpriseWhitelabel: !0,
                    openLanguagePopUp: function() {
                        return p(!0)
                    }
                }))), v, a.createElement(l.Box, {
                    alignContent: "flex-end",
                    alignSelf: "center",
                    mx: "L",
                    my: "NONE"
                }, a.createElement(fa, {
                    userMenuDropDown: a.createElement(za, {
                        logger: e.logger,
                        menuVm: e.params.menuViewModel,
                        userNotifications: e.notificationItems,
                        whiteLabelId: e.whiteLabelId,
                        onSignInClick: e.onSignInClick,
                        onSignUpClick: e.onSignUpClick,
                        onSignOutClick: e.onSignOutClick,
                        featureConfigs: e.featureConfigs,
                        analytics: e.analytics,
                        getBehaviorManager: e.getBehaviorManager,
                        isLoggedIn: e.isLoggedIn,
                        userMenuVm: e.userMenuVm,
                        isRtl: e.isRtl,
                        isCashbackRewardsEnabled: !!e.isCashbackRewardsEnabled,
                        isPointsMaxEnabled: !!e.isPointsmaxEnabled,
                        isShowCashBackBalance: !!e.isShowCashBackBalance,
                        onPointsMaxPopUpOpen: e.onPointsMaxPopUpOpen,
                        selectedPointsMax: e.selectedPointsMax
                    })
                }, a.createElement(wr, Ba({}, N("user-menu")), a.createElement(ga, {
                    userNotifications: e.notificationItems,
                    isEnterprise: !0,
                    userMenuVm: e.userMenuVm,
                    shouldShowGiftCardBalance: !!e.shouldShowGiftCardBalance,
                    isRtl: e.isRtl,
                    shouldShowNotificationCounter: !!e.shouldShowNotificationCounter,
                    user: e.user,
                    getBehaviorManager: e.getBehaviorManager,
                    analytics: e.analytics
                }))))), a.createElement(pt, {
                    width: "685px",
                    open: d,
                    onClose: g,
                    dataComponent: "language-container-modal",
                    dataSection: "mob-gallery-back-dismiss"
                }, a.createElement(nt, {
                    onSelected: e.languageSelected,
                    languageId: e.languageId,
                    onClose: g,
                    logger: e.logger,
                    experiments: e.experiments,
                    getBehaviorManager: e.getBehaviorManager
                })))
            };
            Da.displayName = "CitiHeader";
            var La, _a = ((ia = {})[h.CitiUS] = Da,
            ia[h.CitiUSUat1] = Da,
            ia[h.CitiUSUat2] = Da,
            ia[h.CitiUSUat3] = Da,
            ia);
            !function(e) {
                e.Escape = "Escape",
                e.Enter = "Enter"
            }(La || (La = {}));
            var ja, qa, Ha = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Ua = function() {
                return Ua = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ua.apply(this, arguments)
            }, Wa = u()(l.Span).withConfig({
                displayName: "CurrencyGroup__CurrencySymbol",
                componentId: "sc-eg6mjj-0"
            })(ja || (ja = Ha(["\n    margin-right: ", ";\n    width: 13.5%;\n    display: inline-block;\n"], ["\n    margin-right: ", ";\n    width: 13.5%;\n    display: inline-block;\n"])), (function(e) {
                return e.theme.spacing.L
            }
            )), Ga = a.memo((function(e) {
                var t = e.currency;
                if (!t)
                    return null;
                var n = e.selectedCurrency && t.iD === e.selectedCurrency.id;
                return a.createElement(l.Box, {
                    clone: !0,
                    border: e.hideBorder ? void 0 : {
                        direction: "bottom",
                        color: 20,
                        width: "S",
                        style: "solid"
                    }
                }, a.createElement(l.GridV2.Item, Ua({
                    key: t.iD,
                    sm: 4
                }, k({
                    dataComponentId: "currency-popup-menu-item",
                    dataValue: t.code
                })), a.createElement(s.Box, Ua({
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    as: "button",
                    onClick: function() {
                        return e.onSelected(t)
                    },
                    onKeyDown: function(n) {
                        n.key === La.Enter && e.onSelected(t)
                    },
                    cursor: "pointer",
                    p: "s",
                    interactive: "primary.interactive",
                    backgroundColor: n ? "tertiary.interactive" : void 0,
                    "aria-current": n
                }, k({
                    dataComponentId: "currency-popup-menu-item-box"
                })), a.createElement(s.Box, {
                    me: "m",
                    alignItems: "center",
                    display: "flex",
                    width: "13.5%"
                }, a.createElement(Wa, {
                    color: "primary",
                    textSize: "S"
                }, t.display)), a.createElement(le, {
                    as: "span",
                    variant: "caption2",
                    short: !0
                }, t.text))))
            }
            )), Xa = a.memo((function(e) {
                var t = e.currencyList;
                if (!t || 0 === t.length)
                    return null;
                var n = t.length <= 3;
                return a.createElement(a.Fragment, null, a.createElement(l.Box, Ua({
                    px: "XL",
                    py: "M",
                    background: 20
                }, k({
                    dataComponentId: e.dataComponent
                })), a.createElement(le, {
                    variant: "caption1",
                    color: 500,
                    short: !1
                }, e.text)), a.createElement(l.Box, {
                    clone: !0,
                    px: "L",
                    py: "S",
                    maxHeight: "45vh",
                    overflowY: "auto"
                }, a.createElement(l.GridV2, null, t.map((function(t) {
                    return a.createElement(Ga, {
                        hideBorder: n,
                        key: t.code,
                        currency: t,
                        onSelected: e.onSelected,
                        selectedCurrency: e.selectedCurrency
                    })
                }
                )))))
            }
            )), Ka = function() {
                return Ka = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ka.apply(this, arguments)
            }, Ya = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, a) {
                    function o(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, l)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }, $a = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function l(l) {
                    return function(s) {
                        return function(l) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0,
                            l[0] && (o = 0)),
                            o; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, l[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (l = [2 & l[0], i.value]),
                                    l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        r = l[1],
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1],
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2],
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    l = t.call(e, o)
                                } catch (e) {
                                    l = [6, e],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            }, Za = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator
                  , n = t && e[t]
                  , r = 0;
                if (n)
                    return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && r >= e.length && (e = void 0),
                            {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, Ja = function(e) {
                if ("Code"in e) {
                    var t = e;
                    return {
                        code: t.Code,
                        display: t.Display,
                        iD: t.ID,
                        isSuggested: t.IsSuggested,
                        isTopCurrency: t.IsTopCurrency,
                        noDecimal: t.NoDecimal,
                        text: t.Text
                    }
                }
                return e
            }, Qa = function(e) {
                if (e) {
                    if ("AllCurrencyList"in e) {
                        var t = e
                          , n = t.AllCurrencyList && t.AllCurrencyList.length > 0 ? t.AllCurrencyList.filter((function(e) {
                            return e
                        }
                        )).map((function(e) {
                            return Ja(e)
                        }
                        )) : []
                          , r = t.SuggestedList && t.SuggestedList.length > 0 ? t.SuggestedList.filter((function(e) {
                            return e
                        }
                        )).map((function(e) {
                            return Ja(e)
                        }
                        )) : []
                          , i = t.TopCurrencyList && t.TopCurrencyList.length > 0 ? t.TopCurrencyList.filter((function(e) {
                            return e
                        }
                        )).map((function(e) {
                            return Ja(e)
                        }
                        )) : [];
                        return function(e, t, n) {
                            var r, i, a = e.reduce((function(e, t) {
                                return e[t.code] = t.code,
                                e
                            }
                            ), {});
                            if (n && n.length > 0)
                                try {
                                    for (var o = Za(n), l = o.next(); !l.done; l = o.next()) {
                                        var s = l.value;
                                        a[s.code] || e.push(Ka({}, s))
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (i = o.return) && i.call(o)
                                    } finally {
                                        if (r)
                                            throw r.error
                                    }
                                }
                            return {
                                allCurrencyList: e,
                                suggestedList: t,
                                topCurrencyList: n
                            }
                        }(n, r, i)
                    }
                    return e
                }
            }, eo = function(e, t) {
                return Ya(void 0, void 0, Promise, (function() {
                    var n, r, i;
                    return $a(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]),
                            n = {
                                "AG-Language-Id": e.toString()
                            },
                            [4, Fe(Le, n)];
                        case 1:
                            return r = a.sent().body,
                            [2, Qa(r)];
                        case 2:
                            return i = a.sent(),
                            t.error("Error while fetching currencies", i),
                            [3, 3];
                        case 3:
                            return [2, void 0]
                        }
                    }
                    ))
                }
                ))
            }, to = function() {
                return to = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                to.apply(this, arguments)
            }, no = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, ro = "currency-popup", io = function(e) {
                var t = no(a.useState(), 2)
                  , n = t[0]
                  , r = t[1];
                if (a.useEffect((function() {
                    eo(e.languageId, e.logger).then((function(e) {
                        e && r(e)
                    }
                    )).catch((function(t) {
                        e.logger.error("Error while fetching currency", t)
                    }
                    )),
                    e.analytics.custom(Rt.Reveal, {
                        action_element_name: ro
                    })
                }
                ), []),
                !n)
                    return a.createElement(Ae, {
                        dataComponent: "currency-popup-loading"
                    });
                var i = n.suggestedList
                  , o = void 0 === i ? [] : i
                  , s = n.topCurrencyList
                  , c = void 0 === s ? [] : s
                  , u = n.allCurrencyList
                  , d = void 0 === u ? [] : u;
                return a.createElement(l.Card, to({
                    px: "NONE",
                    py: "NONE",
                    radius: "S",
                    className: "CurrencyPopup__CurrencyContainer"
                }, k({
                    dataComponentId: ro
                })), e.children, a.createElement(l.Box, to({
                    px: "XL",
                    py: "M",
                    background: 20
                }, k({
                    dataComponentId: "currency-popup-section-suggested"
                })), a.createElement(le, {
                    variant: "caption1",
                    color: 500,
                    short: !1
                }, e.suggestedCurrenciesText)), a.createElement(l.Box, {
                    clone: !0,
                    px: "L",
                    py: "S"
                }, a.createElement(l.GridV2, null, o.map((function(t) {
                    return a.createElement(Ga, {
                        hideBorder: !0,
                        key: t.code,
                        currency: t,
                        onSelected: e.onSelected,
                        selectedCurrency: e.selectedCurrency
                    })
                }
                )))), a.createElement(Xa, {
                    currencyList: c,
                    dataComponent: "currency-popup-section-top",
                    selectedCurrency: e.selectedCurrency,
                    text: e.topCurrenciesText,
                    onSelected: e.onSelected,
                    analytics: e.analytics
                }), a.createElement(Xa, {
                    currencyList: d,
                    dataComponent: "currency-popup-section-all",
                    selectedCurrency: e.selectedCurrency,
                    text: e.allCurrenciesText,
                    onSelected: e.onSelected,
                    analytics: e.analytics
                }))
            };
            !function(e) {
                e[e.None = 0] = "None",
                e[e.BasePricePerNight = 1] = "BasePricePerNight",
                e[e.TotalPricePerNight = 2] = "TotalPricePerNight",
                e[e.TotalPricePerPax = 3] = "TotalPricePerPax"
            }(qa || (qa = {}));
            var ao = function() {
                return ao = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                ao.apply(this, arguments)
            }
              , oo = "apply-giftcard-choice"
              , lo = function(e) {
                var t, n;
                if (!(null === (t = e.wysiwyp) || void 0 === t ? void 0 : t.showWysiwyp))
                    return null;
                var r = function() {
                    e.closePopup(),
                    e.updatePriceView && e.updatePriceView(qa.TotalPricePerNight)
                }
                  , i = function() {
                    e.analytics.click(oo, 5, {
                        action_element_value: e.isApplyGiftcard ? "true" : "false"
                    }),
                    e.closePopup(),
                    e.updateApplyGiftcard && e.updateApplyGiftcard(!e.isApplyGiftcard)
                };
                return a.createElement(a.Fragment, null, a.createElement(l.Box, ao({
                    px: "XL",
                    py: "M",
                    background: 20
                }, k({
                    dataComponentId: "price-display"
                })), a.createElement(le, {
                    variant: "caption1",
                    color: 500,
                    short: !1
                }, e.priceViewText)), a.createElement(l.Box, {
                    clone: !0,
                    px: "L",
                    py: "S"
                }, a.createElement(l.GridV2, null, e.wysiwyp.showBasePrice && function(e) {
                    var t;
                    return a.createElement(l.GridV2.Item, {
                        sm: 4
                    }, a.createElement(s.Box, ao({
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        as: "button",
                        onClick: function() {
                            e.closePopup(),
                            e.updatePriceView && e.updatePriceView(qa.BasePricePerNight)
                        },
                        onKeyDown: function(t) {
                            t.key === La.Enter && (e.closePopup(),
                            e.updatePriceView && e.updatePriceView(qa.BasePricePerNight))
                        },
                        cursor: "pointer",
                        p: "s",
                        interactive: "primary.interactive"
                    }, qa.BasePricePerNight === (null === (t = e.wysiwyp) || void 0 === t ? void 0 : t.priceView) && {
                        backgroundColor: "tertiary.interactive",
                        "aria-selected": !0
                    }, k({
                        dataSelenium: "price-view-option-exclusive"
                    })), a.createElement(le, {
                        as: "span",
                        variant: "caption2",
                        short: !0
                    }, e.perNightBasePriceText)))
                }(e), a.createElement(l.GridV2.Item, {
                    sm: 4
                }, a.createElement(s.Box, ao({
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    as: "button",
                    onClick: r,
                    onKeyDown: function(e) {
                        e.key === La.Enter && r()
                    },
                    cursor: "pointer",
                    p: "s",
                    interactive: "primary.interactive"
                }, qa.TotalPricePerNight === (null === (n = e.wysiwyp) || void 0 === n ? void 0 : n.priceView) && {
                    backgroundColor: "tertiary.interactive",
                    "aria-selected": !0
                }, k({
                    dataSelenium: "price-view-option-inclusive"
                })), a.createElement(le, {
                    as: "span",
                    variant: "caption2",
                    short: !0
                }, e.perNightWithTaxesAndFeesText))), a.createElement(l.GridV2.Item, {
                    sm: 4
                }, a.createElement(s.Box, ao({
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    as: "button",
                    onClick: i,
                    onKeyDown: function(e) {
                        e.key === La.Enter && i()
                    },
                    cursor: "pointer",
                    p: "s",
                    interactive: "primary.interactive"
                }, e.isApplyGiftcard && {
                    backgroundColor: "tertiary.interactive",
                    "aria-selected": !0
                }, k({
                    dataSelenium: "price-view-option-apply-giftcard",
                    dataElementName: oo
                })), a.createElement(le, {
                    as: "span",
                    variant: "caption2",
                    short: !0
                }, e.applyGiftcardMenuText))))))
            };
            function so(e) {
                var t = function(e) {
                    var t;
                    return null === (t = Hi.Re[e.toLowerCase()]) || void 0 === t ? void 0 : t.display
                }(e.code);
                return t === e.code ? e.code : "".concat(t, " | ").concat(e.code)
            }
            var co = function(e) {
                return {
                    id: e.iD,
                    code: e.code,
                    name: e.text,
                    isSuggested: e.isSuggested,
                    symbol: e.display,
                    displayCode: e.code,
                    exchangeRate: -1
                }
            }
              , uo = function() {
                return uo = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                uo.apply(this, arguments)
            }
              , mo = a.memo((function(e) {
                if (!e.language)
                    return null;
                var t = e.getBehaviorManager().isEnabled(Ze)
                  , n = Xe(e.language.flag, t);
                return a.createElement(l.GridV2.Item, uo({
                    key: e.language.languageId,
                    sm: 4
                }, k({
                    dataElementName: "language-popup-menu-item",
                    dataComponentId: "language-popup-menu-item",
                    dataValue: e.language.cultureCode
                })), a.createElement(s.Box, uo({
                    as: "button",
                    width: "100%",
                    onClick: function() {
                        return e.onSelected && e.language && e.onSelected(e.language)
                    },
                    onKeyDown: function(t) {
                        t.key === La.Enter && e.onSelected && e.language && e.onSelected(e.language)
                    },
                    cursor: "pointer",
                    p: "s",
                    display: "flex",
                    alignItems: "center",
                    interactive: "primary.interactive"
                }, e.language.isSelected && {
                    backgroundColor: "tertiary.interactive",
                    "aria-selected": !0
                }, k({
                    dataElementName: "language-popup-menu-item-box",
                    dataComponentId: "language-popup-menu-item-box"
                })), a.createElement(s.Box, {
                    me: "m",
                    display: "flex",
                    alignItems: "center"
                }, a.createElement(l.Flag, {
                    "aria-hidden": "true",
                    flagSize: "M",
                    country: n
                })), a.createElement(le, {
                    lang: n,
                    as: "span",
                    variant: "caption2"
                }, e.language.translation)))
            }
            ));
            mo.displayName = "LanguageItem";
            var po = function() {
                return po = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                po.apply(this, arguments)
            }
              , fo = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , yo = function(e) {
                var t = fo(a.useState(void 0), 2)
                  , n = t[0]
                  , r = t[1];
                if (a.useEffect((function() {
                    Ue(e.languageId, e.logger).then((function(e) {
                        e && e.languages && r(e)
                    }
                    )).catch((function(t) {
                        e.logger.error("Error while fetching language", t)
                    }
                    ))
                }
                ), []),
                !n)
                    return a.createElement(Ae, {
                        dataComponent: "language-popup-loading"
                    });
                var i = function(t) {
                    return t.sort((function(e, t) {
                        return e.isSelected ? -1 : 1
                    }
                    )).map((function(t) {
                        return n = t,
                        r = e.onSelected,
                        i = e.getBehaviorManager,
                        a.createElement(mo, {
                            key: n.cultureCode,
                            language: n,
                            onSelected: r,
                            getBehaviorManager: i
                        });
                        var n, r, i
                    }
                    ))
                };
                return a.createElement(l.Card, po({
                    className: "LanguagePopup__LanguageContainer",
                    px: "NONE",
                    py: "NONE",
                    radius: "S"
                }, k({
                    dataComponentId: "language-popup"
                })), a.createElement(l.Box, {
                    px: "XL",
                    py: "M",
                    background: 50
                }, a.createElement(le, po({
                    variant: "body2",
                    short: !1
                }, k({
                    dataComponentId: "language-popup-section-suggested"
                })), n.suggestedLanguageHeader)), a.createElement(l.Box, {
                    clone: !0,
                    px: "L",
                    py: "S"
                }, a.createElement(l.GridV2, null, i(n.languages.filter((function(e) {
                    return e.isSelected
                }
                ))))), a.createElement(l.Box, po({
                    px: "XL",
                    py: "M",
                    background: 50
                }, k({
                    dataComponentId: "language-popup-section-all"
                })), a.createElement(le, {
                    variant: "body2",
                    short: !1
                }, n.allLanguagesHeader)), a.createElement(l.Box, {
                    clone: !0,
                    px: "L",
                    py: "S",
                    maxHeight: "45vh",
                    overflowY: "auto"
                }, a.createElement(l.GridV2, null, i(n.languages))))
            }
              , go = function(e) {
                return {
                    name: e.translation,
                    languageId: e.languageId,
                    cultureCode: e.cultureCode,
                    isSuggested: e.isSelected,
                    flag: e.flag,
                    isCurrencyBehind: !1
                }
            }
              , ho = function() {
                return document.getElementById("requestVerificationToken").value
            }
              , vo = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, a) {
                    function o(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, l)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , bo = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function l(l) {
                    return function(s) {
                        return function(l) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0,
                            l[0] && (o = 0)),
                            o; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, l[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (l = [2 & l[0], i.value]),
                                    l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        r = l[1],
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1],
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2],
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    l = t.call(e, o)
                                } catch (e) {
                                    l = [6, e],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            }
              , wo = function(e, t, n, r) {
                return vo(void 0, void 0, Promise, (function() {
                    var i, a, o, l, s;
                    return bo(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return c.trys.push([0, 2, , 3]),
                            a = {
                                "AG-Language-Locale": n.cultureCode,
                                "AG-Language-Id": null === (l = n.languageId) || void 0 === l ? void 0 : l.toString(),
                                "CR-Currency-Code": t.code,
                                "CR-Currency-Id": null === (s = t.id) || void 0 === s ? void 0 : s.toString()
                            },
                            [4, Fe(Re, a)];
                        case 1:
                            return i = c.sent().body,
                            [3, 3];
                        case 2:
                            return o = c.sent(),
                            r.error("Error while fetching user menu".concat(e), o),
                            i = void 0,
                            [3, 3];
                        case 3:
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
              , Co = n(4555)
              , xo = n.n(Co)
              , So = n(1247)
              , ko = n.n(So)
              , Mo = a.memo((function(e) {
                var t = e.children.length > 0;
                return a.createElement(l.Box, {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    ms: e.isShowHelpCenterEntryPoint ? "NONE" : "M"
                }, t ? e.children.map((function(e, t) {
                    return a.createElement(l.Box, {
                        key: t,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        mx: "M"
                    }, e)
                }
                )) : e.children)
            }
            ))
              , No = function() {
                return No = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                No.apply(this, arguments)
            }
              , Eo = {
                color: "secondary",
                variant: "plainText"
            }
              , Po = {
                width: "NONE"
            }
              , Vo = o().memo((function(e) {
                if (!e.isVisible)
                    return null;
                var t = null;
                return e.isShowSubTitle && (t = o().createElement(l.Box, No({
                    display: "flex",
                    flex: "1",
                    justifyContent: "flex-end",
                    p: "NONE",
                    border: Po,
                    onClick: e.onClickSubTitle
                }, k({
                    dataAction: e.dataAction
                })), o().createElement(le, {
                    ps: "L",
                    pe: "L",
                    pt: "M",
                    pb: "M",
                    variant: "caption1",
                    color: 800
                }, e.subTitle))),
                o().createElement(l.Box, {
                    as: "div",
                    display: "flex",
                    textColor: Eo
                }, o().createElement(le, {
                    role: "heading",
                    "aria-level": 1,
                    ps: "L",
                    pe: "L",
                    pt: "M",
                    pb: "M",
                    variant: "caption1",
                    color: 500
                }, e.title), t)
            }
            ));
            Vo.displayName = "MenuHeader",
            Vo.defaultProps = {
                isVisible: !0
            };
            var To, Oo = n(314), Io = n.n(Oo), zo = n(8969), Ao = n.n(zo), Fo = n(945), Bo = n.n(Fo), Ro = n(387), Do = n.n(Ro), Lo = n(3929), _o = n.n(Lo), jo = n(8446), qo = n.n(jo), Ho = n(7667), Uo = n.n(Ho), Wo = n(9375), Go = n.n(Wo), Xo = n(9825), Ko = n.n(Xo), Yo = n(7505), $o = n.n(Yo), Zo = n(6415), Jo = n.n(Zo), Qo = n(7814), el = n.n(Qo), tl = n(9691), nl = n.n(tl), rl = n(1299), il = n.n(rl), al = n(5495), ol = n.n(al), ll = n(9844), sl = n.n(ll), cl = n(4489), ul = n.n(cl), dl = n(1974), ml = n.n(dl), pl = n(7354), fl = n.n(pl), yl = n(2238), gl = n.n(yl), hl = n(4849), vl = n.n(hl), bl = n(4506), wl = n.n(bl), Cl = n(6347), xl = n.n(Cl), Sl = n(9839), kl = n.n(Sl), Ml = n(5255), Nl = n.n(Ml), El = n(3994), Pl = n.n(El), Vl = n(6520), Tl = n.n(Vl), Ol = n(8512), Il = n.n(Ol), zl = n(5613), Al = n.n(zl), Fl = n(2676), Bl = n.n(Fl), Rl = n(5089), Dl = n.n(Rl), Ll = n(6358), _l = n.n(Ll), jl = n(5110), ql = n.n(jl), Hl = n(5856), Ul = n.n(Hl), Wl = n(4957), Gl = n.n(Wl), Xl = n(2347), Kl = n.n(Xl), Yl = n(7519), $l = n.n(Yl), Zl = o().memo((function(e) {
                return o().createElement(l.Box, {
                    as: "span",
                    "data-component": e.dataComponent,
                    "data-element-name": e.dataComponent
                }, o().createElement(e.icon, {
                    "data-element-name": "menu-icon-svg",
                    size: "L"
                }))
            }
            ));
            Zl.displayName = "MenuIcon",
            function(e) {
                e.HotelInternal = "hotelInternal",
                e.Hotel = "hotel",
                e.FlightsInternal = "flightsInternal",
                e.Flights = "flights",
                e.Activities = "activities",
                e.Favorites = "favorites",
                e.MyProfile = "myProfile",
                e.Inbox = "inbox",
                e.Reviews = "reviews",
                e.MyBookingsWithSubMenus = "myBookingsWithSubMenus",
                e.MyBookings = "myBookings",
                e.HotelSubMenu = "hotelSubMenu",
                e.FlightsSubMenu = "flightsSubMenu",
                e.ActivitiesSubMenu = "activitiesSubMenu",
                e.CarSubMenu = "carSubMenu",
                e.Language = "language",
                e.Currency = "currency",
                e.Deals = "deals",
                e.SiteMaintenance = "siteMaintenance",
                e.HelpCenter = "helpCenter",
                e.SavedCards = "savedCards",
                e.AgodaCash = "agodaCash",
                e.CashbackRewards = "cashbackRewards",
                e.AgodaVip = "agodaVip",
                e.DownloadApp = "downloadApp",
                e.Faq = "faq",
                e.JapanicanFaq = "japanicanFaq",
                e.AboutUs = "aboutUs",
                e.PrivacyPolicy = "privacyPolicy",
                e.RurubuPrivacyPolicy = "rurubuPrivacyPolicy",
                e.CcpaPolicy = "ccpaPolicy",
                e.CookiePolicy = "cookiePolicy",
                e.TermsOfUse = "termsOfUse",
                e.ManageCookieSetting = "manageCookieSetting",
                e.RurubuTermsOfService = "rurubuTermsOfService",
                e.ChinaLicense = "chinaLicense",
                e.Cars = "cars",
                e.HotelsMmb = "hotelsMmb",
                e.FlightsMmb = "flightsMmb",
                e.CarsMmb = "carsMmb",
                e.ActivitiesMmb = "activitiesMmb",
                e.CitiUsOldBookingsMenu = "citiUsOldBookingMenu",
                e.CitiPrivacy = "citiPrivacy",
                e.CaPrivacyHub = "caPrivacyHub",
                e.CitiTnc = "citiTnc",
                e.ThankYouTnc = "thankYouTnc",
                e.RocketTnc = "rocketTnc",
                e.ContactAndFaq = "contactAndFaq",
                e.NoticeAtCollection = "noticeAtCollection",
                e.Security = "security",
                e.UseDifferentCard = "useDifferentCard",
                e.Partner = "partner",
                e.PartnerLoyalty = "partnerLoyalty",
                e.PointsMax = "pointsMax",
                e.RocketTravelTermsOfUse = "rocketTravelTermsOfUse",
                e.RocketTravelPrivacyPolicy = "rocketTravelPrivacyPolicy",
                e.ContactRocketTravel = "contactRocketTravel",
                e.TMobilePrivacyPolicy = "tMobilePrivacyPolicy",
                e.TMobilePrivacyCenter = "tMobilePrivacyCenter",
                e.SignOut = "signout",
                e.Coupons = "coupons",
                e.TravelConditionsLetter = "travelConditionsLetter",
                e.TravelAgencyContract = "travelAgencyContract",
                e.RurubuFaq = "rurubuFaq",
                e.RurubuContactUs = "rurubuContactUs",
                e.DomesticTour = "domesticTour",
                e.RecommendedFeature = "recommendedFeature",
                e.RurubuMyBookings = "rurubuMyBookings",
                e.RemainingPoints = "remainingPoints",
                e.CustomerSupport = "customerSupport",
                e.JapanicanTermsOfUse = "japanicanTermsOfUse",
                e.JapanicanPrivacyPolicy = "japanicanPrivacyPolicy",
                e.JapanicanMyBookings = "japanicanMyBookings",
                e.JapanicanSunrise = "japanicanSunrise",
                e.LocationBreadcrumb = "locationBreadcrumb",
                e.ThankyouPrivacy = "thankyouPrivacy",
                e.JapanicanSpecialFeatures = "japanicanSpecialFeatures",
                e.Transfers = "transfers"
            }(To || (To = {}));
            var Jl = {
                hotelInternal: {
                    titleCmsId: 101783,
                    titleFallbackCmsId: 76339,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.HotelInternal),
                        dataComponent: "menu-icon-".concat(To.HotelInternal),
                        icon: Uo()
                    }),
                    actionName: "bookRoomInternal",
                    elementName: "mob-book-room-internal",
                    eventVersion: 1,
                    route: "{0}/hotels",
                    menuKey: To.HotelInternal
                },
                hotel: {
                    titleCmsId: 101783,
                    titleFallbackCmsId: 76339,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Hotel),
                        dataComponent: "menu-icon-".concat(To.Hotel),
                        icon: Uo()
                    }),
                    actionName: "bookRoom",
                    elementName: "mob-book-room",
                    eventVersion: 1,
                    route: "{0}/",
                    menuKey: To.Hotel
                },
                flightsInternal: {
                    titleCmsId: 101869,
                    titleFallbackCmsId: 76337,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.FlightsInternal),
                        dataComponent: "menu-icon-".concat(To.FlightsInternal),
                        icon: Ko()
                    }),
                    actionName: "bookInternalFlight",
                    elementName: "mob-book-internal-flight",
                    eventVersion: 1,
                    route: "{0}/flights",
                    menuKey: To.FlightsInternal
                },
                flights: {
                    titleCmsId: 101869,
                    titleFallbackCmsId: 76337,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Flights),
                        dataComponent: "menu-icon-".concat(To.Flights),
                        icon: Ko()
                    }),
                    actionName: "bookFlight",
                    elementName: "mob-book-flight",
                    eventVersion: 1,
                    route: "{0}/",
                    menuKey: To.Flights
                },
                activities: {
                    titleCmsId: 142724,
                    titleFallbackCmsId: 142724,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Activities),
                        dataComponent: "menu-icon-".concat(To.Activities),
                        icon: Nl()
                    }),
                    actionName: "bookActivities",
                    elementName: "mob-book-activities",
                    eventVersion: 1,
                    route: "{0}/activities",
                    menuKey: To.Activities
                },
                favorites: {
                    titleCmsId: 70036,
                    titleFallbackCmsId: 70036,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Favorites),
                        dataComponent: "menu-icon-".concat(To.Favorites),
                        icon: nl()
                    }),
                    actionName: "favorites",
                    elementName: "mob-favourites-and-history",
                    eventVersion: 1,
                    route: "{0}/favorite.html",
                    menuKey: To.Favorites
                },
                reviews: {
                    titleCmsId: 52087,
                    titleFallbackCmsId: 52087,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Reviews),
                        dataComponent: "menu-icon-".concat(To.Reviews),
                        icon: Jo()
                    }),
                    actionName: "myReviews",
                    elementName: "mob-my-reviews",
                    eventVersion: 1,
                    route: "https://my.agoda.com/{0}/reviewhotels.html",
                    menuKey: To.Reviews
                },
                myProfile: {
                    titleCmsId: 76344,
                    titleFallbackCmsId: 76344,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.MyProfile),
                        dataComponent: "menu-icon-".concat(To.MyProfile),
                        icon: $o()
                    }),
                    actionName: "myProfile",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/account/profile.html",
                    menuKey: To.MyProfile
                },
                myBookingsWithSubMenus: {
                    titleCmsId: 102046,
                    titleFallbackCmsId: 71114,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.MyBookingsWithSubMenus),
                        dataComponent: "menu-icon-".concat(To.MyBookingsWithSubMenus),
                        icon: vl()
                    }),
                    actionName: "myBookingsMenu",
                    elementName: "",
                    eventVersion: 1,
                    route: "",
                    menuKey: To.MyBookingsWithSubMenus
                },
                myBookings: {
                    titleCmsId: 102046,
                    titleFallbackCmsId: 71114,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.MyBookings),
                        dataComponent: "menu-icon-".concat(To.MyBookings),
                        icon: vl()
                    }),
                    actionName: "myBookings",
                    elementName: "mob-my-bookings",
                    eventVersion: 1,
                    route: "{0}/account/bookings.html?products=hotels",
                    menuKey: To.MyBookings
                },
                hotelSubMenu: {
                    titleCmsId: 95349,
                    titleFallbackCmsId: 95349,
                    icon: void 0,
                    actionName: "myBookings",
                    elementName: "mob-my-bookings",
                    eventVersion: 1,
                    route: "{0}/account/bookings.html?products=hotels",
                    menuKey: To.HotelSubMenu
                },
                flightsSubMenu: {
                    titleCmsId: 95350,
                    titleFallbackCmsId: 95350,
                    icon: void 0,
                    actionName: "myFlightBookings",
                    elementName: "mob-my-flight-bookings",
                    eventVersion: 1,
                    route: "{0}/flights/account/bookings",
                    menuKey: To.FlightsSubMenu
                },
                activitiesSubMenu: {
                    titleCmsId: 127972,
                    titleFallbackCmsId: 127972,
                    icon: void 0,
                    actionName: "myActivityBookings",
                    elementName: "mob-my-activity-bookings",
                    eventVersion: 1,
                    route: "{0}/account/bookings.html?products=activities",
                    menuKey: To.ActivitiesSubMenu
                },
                carSubMenu: {
                    titleCmsId: 158356,
                    titleFallbackCmsId: 151411,
                    icon: void 0,
                    actionName: "myCarBookings",
                    elementName: "mob-my-car-bookings",
                    eventVersion: 1,
                    route: "{0}/account/bookings/cars",
                    menuKey: To.CarSubMenu
                },
                inbox: {
                    titleCmsId: 84376,
                    titleFallbackCmsId: 84376,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Inbox),
                        dataComponent: "menu-icon-".concat(To.Inbox),
                        icon: el()
                    }),
                    actionName: "inbox",
                    elementName: "mob-inbox",
                    eventVersion: 1,
                    route: "{0}/account/inbox.html",
                    menuKey: To.Inbox
                },
                language: {
                    titleCmsId: 76368,
                    titleFallbackCmsId: 76368,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Language),
                        dataComponent: "menu-icon-".concat(To.Language),
                        icon: Io()
                    }),
                    actionName: "language",
                    elementName: "mob-language",
                    eventVersion: 1,
                    route: "",
                    menuKey: To.Language
                },
                currency: {
                    titleCmsId: 102103,
                    titleFallbackCmsId: 76367,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Currency),
                        dataComponent: "menu-icon-".concat(To.Currency),
                        icon: Bo()
                    }),
                    actionName: "priceDisplay",
                    elementName: "mob-price-display",
                    eventVersion: 1,
                    route: "",
                    menuKey: To.Currency
                },
                coupons: {
                    titleCmsId: 75382,
                    titleFallbackCmsId: 75382,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Deals),
                        dataComponent: "menu-icon-".concat(To.Deals),
                        icon: ul()
                    }),
                    actionName: "deals",
                    elementName: "mob-deals",
                    eventVersion: 1,
                    route: "{0}/deals",
                    menuKey: To.Deals
                },
                siteMaintenance: {
                    titleCmsId: 102519,
                    titleFallbackCmsId: 102519,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.SiteMaintenance),
                        dataComponent: "menu-icon-".concat(To.SiteMaintenance),
                        icon: xl()
                    }),
                    actionName: "siteMaintenance",
                    elementName: "mob-siteMaintenance",
                    eventVersion: 1,
                    route: "{0}/content/maintenance",
                    menuKey: To.SiteMaintenance
                },
                helpCenter: {
                    titleCmsId: 101862,
                    titleFallbackCmsId: 71118,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.HelpCenter),
                        dataComponent: "menu-icon-".concat(To.HelpCenter),
                        icon: Ao()
                    }),
                    actionName: "customerService",
                    elementName: "mob-customer-service",
                    eventVersion: 1,
                    route: "{0}/info/contact.html",
                    menuKey: To.HelpCenter
                },
                customerSupport: {
                    titleCmsId: 102527,
                    titleFallbackCmsId: 102527,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.CustomerSupport),
                        dataComponent: "menu-icon-".concat(To.CustomerSupport),
                        icon: Ao()
                    }),
                    actionName: "customerService",
                    elementName: "mob-customer-service",
                    eventVersion: 1,
                    route: "{0}/info/contact.html",
                    menuKey: To.CustomerSupport
                },
                savedCards: {
                    titleCmsId: 71115,
                    titleFallbackCmsId: 71115,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.SavedCards),
                        dataComponent: "menu-icon-".concat(To.SavedCards),
                        icon: Do()
                    }),
                    actionName: "savedCards",
                    elementName: "mob-my-saved-cards",
                    eventVersion: 1,
                    route: "{0}/account/ccof.html",
                    menuKey: To.SavedCards
                },
                agodaCash: {
                    titleCmsId: 57151,
                    titleFallbackCmsId: 57151,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.AgodaCash),
                        dataComponent: "menu-icon-".concat(To.AgodaCash),
                        icon: _o()
                    }),
                    actionName: "giftCards",
                    elementName: "mob-gift-cards",
                    eventVersion: 1,
                    route: "{0}/account/giftcards.html",
                    menuKey: To.AgodaCash
                },
                cashbackRewards: {
                    titleCmsId: 126481,
                    titleFallbackCmsId: 126481,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.CashbackRewards),
                        dataComponent: "menu-icon-".concat(To.CashbackRewards),
                        icon: qo()
                    }),
                    actionName: "cashback",
                    elementName: "mob-cashback-rewards",
                    eventVersion: 1,
                    route: "{0}/account/cashback",
                    menuKey: To.CashbackRewards
                },
                agodaVip: {
                    titleCmsId: 97789,
                    titleFallbackCmsId: 97789,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.AgodaVip),
                        dataComponent: "menu-icon-".concat(To.AgodaVip),
                        icon: Go()
                    }),
                    actionName: "vip",
                    elementName: "mob-agoda-vip",
                    eventVersion: 1,
                    route: "{0}/account/vip.html",
                    menuKey: To.AgodaVip
                },
                downloadApp: {
                    titleCmsId: 76350,
                    titleFallbackCmsId: 76350,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.DownloadApp),
                        dataComponent: "menu-icon-".concat(To.DownloadApp),
                        icon: il()
                    }),
                    actionName: "downloadApp",
                    eventVersion: 1,
                    elementName: "",
                    route: "http://agoda.onelink.me/1640755593?pid=redirect&c=AppDownloadLinkHeader&af_dp=agoda%3A%2F%2Fhome&adults=2&children=0&rooms=1&checkIn=2017-08-12&checkOut=2017-08-13&site_id=-211&tag=&af_siteid=-211&af_sub1=EXP-ID-0&af_sub2=EXP-RUN-ID-0&af_sub3=3afaf35e-ac67-47f9-87c2-bb52c7f4dc55&af_force_dp=true&af_click_lookback=1d",
                    menuKey: To.DownloadApp
                },
                faq: {
                    titleCmsId: 53688,
                    titleFallbackCmsId: 53688,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Faq),
                        dataComponent: "menu-icon-".concat(To.Faq),
                        icon: kl()
                    }),
                    actionName: "faq",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/info/agoda-faq.html",
                    menuKey: To.Faq
                },
                japanicanFaq: {
                    titleCmsId: 64918,
                    titleFallbackCmsId: 64918,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.JapanicanFaq),
                        dataComponent: "menu-icon-".concat(To.JapanicanFaq),
                        icon: Dl()
                    }),
                    actionName: "faq",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/content/faq",
                    menuKey: To.JapanicanFaq
                },
                aboutUs: {
                    titleCmsId: 153410,
                    titleFallbackCmsId: 153410,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.AboutUs),
                        dataComponent: "menu-icon-".concat(To.AboutUs),
                        icon: Bl()
                    }),
                    actionName: "agodaNewAboutUs",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/about-agoda",
                    menuKey: To.AboutUs
                },
                privacyPolicy: {
                    titleCmsId: 101982,
                    titleFallbackCmsId: 82443,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.PrivacyPolicy),
                        dataComponent: "menu-icon-".concat(To.PrivacyPolicy),
                        icon: xl()
                    }),
                    actionName: "privacy",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/info/privacy.html",
                    menuKey: To.PrivacyPolicy
                },
                japanicanPrivacyPolicy: {
                    titleCmsId: 102518,
                    titleFallbackCmsId: 102518,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.JapanicanPrivacyPolicy),
                        dataComponent: "menu-icon-".concat(To.JapanicanPrivacyPolicy),
                        icon: xl()
                    }),
                    actionName: "privacy",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/content/privacy-policy/",
                    menuKey: To.JapanicanPrivacyPolicy
                },
                rurubuPrivacyPolicy: {
                    titleCmsId: 102518,
                    titleFallbackCmsId: 102518,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.RurubuPrivacyPolicy),
                        dataComponent: "menu-icon-".concat(To.RurubuPrivacyPolicy),
                        icon: xl()
                    }),
                    actionName: "privacy",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/content/privacy-policy/",
                    menuKey: To.RurubuPrivacyPolicy
                },
                rocketTravelPrivacyPolicy: {
                    titleCmsId: 82443,
                    titleFallbackCmsId: 82443,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.PrivacyPolicy),
                        dataComponent: "menu-icon-".concat(To.PrivacyPolicy),
                        icon: ol()
                    }),
                    actionName: "privacy",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/info/privacy.html",
                    menuKey: To.PrivacyPolicy
                },
                tMobilePrivacyPolicy: {
                    titleCmsId: 133111,
                    titleFallbackCmsId: 133111,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.TMobilePrivacyPolicy),
                        dataComponent: "menu-icon-".concat(To.TMobilePrivacyPolicy),
                        icon: ol()
                    }),
                    actionName: "tMobilePrivacy",
                    elementName: "",
                    eventVersion: 1,
                    route: "https://www.t-mobile.com/privacy-center/our-practices/privacy-policy",
                    menuKey: To.TMobilePrivacyPolicy
                },
                tMobilePrivacyCenter: {
                    titleCmsId: 133112,
                    titleFallbackCmsId: 133112,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.TMobilePrivacyCenter),
                        dataComponent: "menu-icon-".concat(To.TMobilePrivacyCenter),
                        icon: sl()
                    }),
                    actionName: "tMobilePrivacyCenter",
                    elementName: "",
                    eventVersion: 1,
                    route: "https://www.t-mobile.com/privacy-center",
                    menuKey: To.TMobilePrivacyCenter
                },
                contactRocketTravel: {
                    titleCmsId: 133115,
                    titleFallbackCmsId: 133115,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.ContactRocketTravel),
                        dataComponent: "menu-icon-".concat(To.ContactRocketTravel),
                        icon: Tl()
                    }),
                    actionName: "rocketTravel",
                    elementName: "rocketTravel",
                    eventVersion: 1,
                    route: "{0}/info/contact.html",
                    menuKey: To.ContactRocketTravel
                },
                ccpaPolicy: {
                    titleCmsId: 103479,
                    titleFallbackCmsId: 103479,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.CcpaPolicy),
                        dataComponent: "menu-icon-".concat(To.CcpaPolicy),
                        icon: ol()
                    }),
                    actionName: "ccpaPolicy",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/ccpa.html",
                    menuKey: To.CcpaPolicy
                },
                cookiePolicy: {
                    titleCmsId: 102121,
                    titleFallbackCmsId: 82444,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.CookiePolicy),
                        dataComponent: "menu-icon-".concat(To.CookiePolicy),
                        icon: wl()
                    }),
                    actionName: "cookiesPolicy",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/info/privacy.html#cookies",
                    menuKey: To.CookiePolicy
                },
                termsOfUse: {
                    titleCmsId: 83483,
                    titleFallbackCmsId: 83483,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.TermsOfUse),
                        dataComponent: "menu-icon-".concat(To.TermsOfUse),
                        icon: gl()
                    }),
                    actionName: "termsOfUse",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/info/termsofuse.html",
                    menuKey: To.TermsOfUse
                },
                manageCookieSetting: {
                    titleCmsId: 178609,
                    titleFallbackCmsId: 178609,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.ManageCookieSetting),
                        dataComponent: "menu-icon-".concat(To.ManageCookieSetting),
                        icon: wl()
                    }),
                    actionName: "manageCookieSetting",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/privacy-settings",
                    menuKey: To.ManageCookieSetting
                },
                japanicanTermsOfUse: {
                    titleCmsId: 102517,
                    titleFallbackCmsId: 83483,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.JapanicanTermsOfUse),
                        dataComponent: "menu-icon-".concat(To.JapanicanTermsOfUse),
                        icon: gl()
                    }),
                    actionName: "termsOfUse",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/content/terms-of-use",
                    menuKey: To.JapanicanTermsOfUse
                },
                rurubuTermsOfService: {
                    titleCmsId: 102517,
                    titleFallbackCmsId: 102517,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.RurubuTermsOfService),
                        dataComponent: "menu-icon-".concat(To.RurubuTermsOfService),
                        icon: gl()
                    }),
                    actionName: "termsOfUse",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/content/terms-of-use/",
                    menuKey: To.RurubuTermsOfService
                },
                rocketTravelTermsOfUse: {
                    titleCmsId: 83483,
                    titleFallbackCmsId: 83483,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.TermsOfUse),
                        dataComponent: "menu-icon-".concat(To.TermsOfUse),
                        icon: gl()
                    }),
                    actionName: "termsOfUse",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/info/termsofuse.html",
                    menuKey: To.TermsOfUse
                },
                chinaLicense: {
                    titleCmsId: 86782,
                    titleFallbackCmsId: 86782,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.ChinaLicense),
                        dataComponent: "menu-icon-".concat(To.ChinaLicense),
                        icon: kl()
                    }),
                    actionName: "chinaLicense",
                    elementName: "",
                    eventVersion: 1,
                    route: "{0}/info/china-license.html",
                    menuKey: To.ChinaLicense
                },
                cars: {
                    titleCmsId: 151411,
                    titleFallbackCmsId: 151411,
                    actionName: "bookCar",
                    elementName: "mob-book-cars",
                    eventVersion: 1,
                    route: "{0}/cars",
                    menuKey: To.Cars
                },
                hotelsMmb: {
                    titleCmsId: 95349,
                    titleFallbackCmsId: 95349,
                    actionName: "mmbHotel",
                    elementName: "mmb-hotels",
                    eventVersion: 1,
                    route: "{0}/account/bookings.html?products=hotels",
                    menuKey: To.HotelsMmb
                },
                flightsMmb: {
                    titleCmsId: 92609,
                    titleFallbackCmsId: 92609,
                    actionName: "mmbFlights",
                    elementName: "mmb-flights",
                    eventVersion: 1,
                    route: "{0}/flights/account/bookings",
                    menuKey: To.FlightsMmb
                },
                carsMmb: {
                    titleCmsId: 151411,
                    titleFallbackCmsId: 151411,
                    actionName: "mmbCars",
                    elementName: "mmb-cars",
                    eventVersion: 1,
                    route: "{0}/account/bookings/cars",
                    menuKey: To.CarsMmb
                },
                activitiesMmb: {
                    titleCmsId: 152018,
                    titleFallbackCmsId: 152018,
                    actionName: "mmbActivities",
                    elementName: "mmb-activities",
                    eventVersion: 1,
                    route: "{0}/account/bookings.html?products=activities",
                    menuKey: To.ActivitiesMmb
                },
                citiUsOldBookingMenu: {
                    titleCmsId: 188022,
                    titleFallbackCmsId: 188022,
                    icon: o().createElement(Kl(), {
                        size: "S",
                        style: {
                            marginLeft: "5px"
                        }
                    }),
                    actionName: "citiUsOldBookingsMenu",
                    elementName: "citi-old-bookings-menu",
                    eventVersion: 1,
                    route: "https://travel.thankyou.com/SH/Handlers/ReceptionDesk.ashx?clientharbor=e2c3a536e6814b3e80b68e7d5a65c14d&page=landingpage&landingpage=mytrips",
                    menuKey: To.CitiUsOldBookingsMenu
                },
                citiPrivacy: {
                    titleCmsId: 180376,
                    titleFallbackCmsId: 180376,
                    actionName: "citiPrivacy",
                    elementName: "citi-privacy",
                    eventVersion: 1,
                    route: "https://online.citi.com/US/JRS/portal/template.do?ID=Privacy",
                    menuKey: To.CitiPrivacy
                },
                caPrivacyHub: {
                    titleCmsId: 153262,
                    titleFallbackCmsId: 153262,
                    actionName: "caPrivacyHub",
                    elementName: "ca-privacy-hub",
                    eventVersion: 1,
                    route: "https://online.citi.com/US/ag/dataprivacyhub",
                    menuKey: To.CaPrivacyHub
                },
                citiTnc: {
                    titleCmsId: 153264,
                    titleFallbackCmsId: 153264,
                    actionName: "citiTerms",
                    elementName: "citi-terms",
                    eventVersion: 1,
                    route: "https://online.citi.com/US/ag/termsdisclaimer/termsdisclaimerhome",
                    menuKey: To.CitiTnc
                },
                thankYouTnc: {
                    titleCmsId: 153259,
                    titleFallbackCmsId: 153259,
                    actionName: "thankYouTnc",
                    elementName: "thank-you-tnc",
                    eventVersion: 1,
                    route: "https://www.thankyou.com/cms/thankyou/tc.page?pageName=tc&src=TYUSENG",
                    menuKey: To.ThankYouTnc
                },
                rocketTnc: {
                    titleCmsId: 180378,
                    titleFallbackCmsId: 180378,
                    actionName: "rocketTnc",
                    elementName: "rocket-terms",
                    eventVersion: 1,
                    route: "{0}/info/termsofuse.html",
                    menuKey: To.RocketTnc
                },
                contactAndFaq: {
                    titleCmsId: 189110,
                    titleFallbackCmsId: 189110,
                    actionName: "contactFaq",
                    elementName: "contact-faq",
                    eventVersion: 1,
                    route: "{0}/info/contact.html",
                    menuKey: To.ContactAndFaq
                },
                noticeAtCollection: {
                    titleCmsId: 153261,
                    titleFallbackCmsId: 153261,
                    actionName: "noticeAtCollection",
                    elementName: "notice-at-collection",
                    eventVersion: 1,
                    route: "https://online.citi.com/JRS/portal/template.do?ID=Privacy#notice-at-collection",
                    menuKey: To.NoticeAtCollection
                },
                security: {
                    titleCmsId: 153263,
                    titleFallbackCmsId: 153263,
                    actionName: "security",
                    elementName: "security",
                    eventVersion: 1,
                    route: "{https://online.citi.com/US/ag/security-center",
                    menuKey: To.Security
                },
                useDifferentCard: {
                    titleCmsId: 153474,
                    titleFallbackCmsId: 153474,
                    actionName: "useDifferentCard",
                    elementName: "use-different-card",
                    eventVersion: 1,
                    route: "{0}/member/accounts",
                    menuKey: To.UseDifferentCard
                },
                partner: {
                    titleCmsId: 153475,
                    titleFallbackCmsId: 153475,
                    actionName: "partner",
                    elementName: "partner",
                    eventVersion: 1,
                    route: "{0}/",
                    menuKey: To.Partner
                },
                deals: {
                    titleCmsId: 156115,
                    titleFallbackCmsId: 156115,
                    actionName: "deals",
                    elementName: "deals",
                    eventVersion: 1,
                    route: "{0}/deals",
                    menuKey: To.Deals,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Deals),
                        dataComponent: "menu-icon-".concat(To.Deals),
                        icon: ml()
                    })
                },
                signout: {
                    titleCmsId: 83113,
                    titleFallbackCmsId: 83113,
                    actionName: "signout",
                    elementName: "signout",
                    eventVersion: 1,
                    route: "#",
                    menuKey: To.SignOut,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.SignOut),
                        dataComponent: "menu-icon-".concat(To.SignOut),
                        icon: fl()
                    })
                },
                pointsMax: {
                    titleCmsId: 83130,
                    titleFallbackCmsId: 83130,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.PointsMax),
                        dataComponent: "menu-icon-".concat(To.PointsMax),
                        icon: Pl()
                    }),
                    actionName: "pointMax",
                    elementName: "mob-points-max",
                    eventVersion: 1,
                    route: "",
                    menuKey: To.PointsMax
                },
                partnerLoyalty: {
                    titleCmsId: 158173,
                    titleFallbackCmsId: 158173,
                    actionName: "partnerLoyalty",
                    elementName: "partner-loyalty",
                    eventVersion: 1,
                    route: "{0}/",
                    menuKey: To.PartnerLoyalty
                },
                travelConditionsLetter: {
                    titleCmsId: 102516,
                    titleFallbackCmsId: 102516,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.TravelConditionsLetter),
                        dataComponent: "menu-icon-".concat(To.TravelConditionsLetter),
                        icon: Ul()
                    }),
                    actionName: "travelRequirements",
                    elementName: "mob-travelRequirements",
                    eventVersion: 1,
                    route: "{0}/content/jyoken",
                    menuKey: To.TravelConditionsLetter
                },
                travelAgencyContract: {
                    titleCmsId: 102515,
                    titleFallbackCmsId: 102515,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.TravelAgencyContract),
                        dataComponent: "menu-icon-".concat(To.TravelAgencyContract),
                        icon: Gl()
                    }),
                    actionName: "travelAgency",
                    elementName: "mob-travelAgency",
                    eventVersion: 1,
                    route: "{0}/content/yakkan",
                    menuKey: To.TravelAgencyContract
                },
                rurubuFaq: {
                    titleCmsId: 64918,
                    titleFallbackCmsId: 64918,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.RurubuFaq),
                        dataComponent: "menu-icon-".concat(To.RurubuFaq),
                        icon: Dl()
                    }),
                    actionName: "faq",
                    elementName: "mob-faq",
                    eventVersion: 1,
                    route: "{0}/content/faq",
                    menuKey: To.RurubuFaq
                },
                rurubuContactUs: {
                    titleCmsId: 102527,
                    titleFallbackCmsId: 102527,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.RurubuContactUs),
                        dataComponent: "menu-icon-".concat(To.RurubuContactUs),
                        icon: el()
                    }),
                    actionName: "customerService",
                    elementName: "mob-customerService",
                    eventVersion: 1,
                    route: "{0}/info/contact.html",
                    menuKey: To.RurubuContactUs
                },
                domesticTour: {
                    titleCmsId: 104386,
                    titleFallbackCmsId: 104386,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.DomesticTour),
                        dataComponent: "menu-icon-".concat(To.DomesticTour),
                        icon: Il()
                    }),
                    actionName: "travelTour",
                    elementName: "mob-travelTour",
                    eventVersion: 1,
                    route: "https://www.jtb.co.jp/kokunai_tour/",
                    menuKey: To.DomesticTour
                },
                recommendedFeature: {
                    titleCmsId: 108855,
                    titleFallbackCmsId: 108855,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.RecommendedFeature),
                        dataComponent: "menu-icon-".concat(To.RecommendedFeature),
                        icon: _l()
                    }),
                    actionName: "allFeatures",
                    elementName: "mob-allFeatures",
                    eventVersion: 1,
                    route: "https://www.rurubu.travel/theme/all/",
                    menuKey: To.RecommendedFeature
                },
                japanicanMyBookings: {
                    titleCmsId: 102046,
                    titleFallbackCmsId: 71114,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.JapanicanMyBookings),
                        dataComponent: "menu-icon-".concat(To.JapanicanMyBookings),
                        icon: vl()
                    }),
                    actionName: "myBookings",
                    elementName: "mob-my-bookings",
                    eventVersion: 1,
                    route: "{0}/signin?targeturl=/account/bookings.html?products=hotels",
                    menuKey: To.JapanicanMyBookings
                },
                rurubuMyBookings: {
                    titleCmsId: 102046,
                    titleFallbackCmsId: 71114,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.MyBookings),
                        dataComponent: "menu-icon-".concat(To.MyBookings),
                        icon: vl()
                    }),
                    actionName: "myBookings",
                    elementName: "mob-my-bookings",
                    eventVersion: 1,
                    route: "https://rsv.rurubu.travel/Reg/Auth/Login",
                    menuKey: To.MyBookings
                },
                japanicanSunrise: {
                    titleCmsId: 258550,
                    titleFallbackCmsId: 258550,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.JapanicanSunrise),
                        dataComponent: "menu-icon-".concat(To.JapanicanSunrise),
                        icon: Nl()
                    }),
                    actionName: "sunrise",
                    elementName: "mob-sunrise",
                    eventVersion: 1,
                    route: "https://p00086314.partner.viator.com/operator/2142",
                    menuKey: To.JapanicanSunrise
                },
                remainingPoints: {
                    titleCmsId: 107154,
                    titleFallbackCmsId: 107154,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.RemainingPoints),
                        dataComponent: "menu-icon-".concat(To.RemainingPoints),
                        icon: Al()
                    }),
                    actionName: "remainingPoints",
                    elementName: "",
                    eventVersion: 1,
                    route: "https://member.jtb.co.jp/myjtb/member.aspx?pn=129&siteid=myphistory",
                    menuKey: To.RemainingPoints
                },
                locationBreadcrumb: {
                    titleCmsId: 89357,
                    titleFallbackCmsId: 89357,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.LocationBreadcrumb),
                        dataComponent: "menu-icon-".concat(To.LocationBreadcrumb),
                        icon: ql()
                    }),
                    actionName: "breadcrumbs",
                    elementName: "",
                    eventVersion: 1,
                    route: "",
                    menuKey: To.LocationBreadcrumb
                },
                thankyouPrivacy: {
                    titleCmsId: 227972,
                    titleFallbackCmsId: 227972,
                    actionName: "thankyouPrivacy",
                    elementName: "thankyou-privacy",
                    eventVersion: 1,
                    route: "{0}/",
                    menuKey: To.ThankyouPrivacy
                },
                japanicanSpecialFeatures: {
                    titleCmsId: 275892,
                    titleFallbackCmsId: 275892,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.JapanicanSpecialFeatures),
                        dataComponent: "menu-icon-".concat(To.JapanicanSpecialFeatures),
                        icon: _l()
                    }),
                    actionName: "specialFeatures",
                    elementName: "mob-special-features",
                    eventVersion: 1,
                    route: "{0}/special",
                    menuKey: To.JapanicanSpecialFeatures
                },
                transfers: {
                    titleCmsId: 265369,
                    titleFallbackCmsId: 265369,
                    icon: o().createElement(Zl, {
                        key: "menu-icon-".concat(To.Transfers),
                        dataComponent: "menu-icon-".concat(To.Transfers),
                        icon: $l()
                    }),
                    actionName: "menuTransfers",
                    elementName: "menu-transfers-links",
                    eventVersion: 1,
                    route: "{0}/transfers",
                    menuKey: To.Transfers,
                    shouldTrackOnSeen: !0
                }
            }
              , Ql = n(6197)
              , es = function(e) {
                return a.createElement("svg", e, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM7.05 7.05a.5.5 0 0 1 .638-.058l.07.058L12 11.293l4.243-4.243a.5.5 0 0 1 .707.707L12.707 12l4.243 4.243a.5.5 0 0 1 .058.637l-.058.07a.5.5 0 0 1-.638.058l-.07-.058L12 12.707 7.757 16.95a.5.5 0 0 1-.707-.707L11.293 12 7.05 7.757a.5.5 0 0 1-.058-.637l.058-.07z"
                }))
            };
            es.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            };
            var ts = a.memo((function(e) {
                return a.createElement(Ql.SvgIcon, e, a.createElement(es, {
                    width: "1em",
                    height: "1em"
                }))
            }
            ));
            ts.displayName = "SymbolCircleCloseLineIcon";
            var ns = function(e) {
                return a.createElement("svg", e, a.createElement("path", {
                    d: "M15.47 1.47a.75.75 0 0 1 1.133.976l-.073.084L7.061 12l9.47 9.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-10-10a.75.75 0 0 1-.073-.976l.073-.084 10-10z"
                }))
            };
            ns.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            };
            var rs = a.memo((function(e) {
                return a.createElement(Ql.SvgIcon, e, a.createElement(ns, {
                    width: "1em",
                    height: "1em"
                }))
            }
            ));
            rs.displayName = "SymbolArrowThinBackLineIcon";
            var is = function(e) {
                return a.createElement("svg", e, a.createElement("path", {
                    d: "M7.53 1.47a.75.75 0 0 0-1.133.976l.073.084L15.939 12l-9.47 9.47a.75.75 0 0 0-.072.976l.073.084a.75.75 0 0 0 .976.073l.084-.073 10-10a.75.75 0 0 0 .073-.976l-.073-.084-10-10z"
                }))
            };
            is.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            };
            var as = a.memo((function(e) {
                return a.createElement(Ql.SvgIcon, e, a.createElement(is, {
                    width: "1em",
                    height: "1em"
                }))
            }
            ));
            as.displayName = "SymbolArrowThinForwardLineIcon";
            var os = function(e) {
                return a.createElement("svg", e, a.createElement("path", {
                    d: "M11.47 6.47a.75.75 0 0 1 .976-.073l.084.073 10 10a.75.75 0 0 1-.976 1.133l-.084-.073L12 8.061l-9.47 9.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084 10-10z"
                }))
            };
            os.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            };
            var ls = a.memo((function(e) {
                return a.createElement(Ql.SvgIcon, e, a.createElement(os, {
                    width: "1em",
                    height: "1em"
                }))
            }
            ));
            ls.displayName = "SymbolArrowThinCollapseLineIcon";
            var ss = function(e) {
                return a.createElement("svg", e, a.createElement("path", {
                    d: "M1.47 7.47a.75.75 0 0 1 .976-.073l.084.073L12 16.939l9.47-9.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084-10 10a.75.75 0 0 1-.976.073l-.084-.073-10-10a.75.75 0 0 1 0-1.06z"
                }))
            };
            ss.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            };
            var cs = a.memo((function(e) {
                return a.createElement(Ql.SvgIcon, e, a.createElement(ss, {
                    width: "1em",
                    height: "1em"
                }))
            }
            ));
            cs.displayName = "SymbolArrowThinDropdownLineIcon";
            var us, ds, ms, ps, fs, ys, gs, hs, vs, bs = ["fill", "gutter"], ws = {
                center: "center",
                top: "bottom",
                bottom: "top",
                left: "right",
                right: "left"
            }, Cs = function(e) {
                return "top" === e || "bottom" === e
            }, xs = function(e, t) {
                return e ? t.spacingNumber[e] ? "".concat(t.spacingNumber[e], "px") : "".concat(e, "%") : "0px"
            }, Ss = u()(l.Card).withConfig({
                displayName: "Sheetstyled__SheetStyled",
                componentId: "sc-1pz7m6n-0"
            })(["display:flex;flex-direction:column;outline:0;transition:transform .35s ease;transition-delay:50ms;@media print{position:absolute !important;overflow:visible !important;}&:focus{outline:none;}", " &.SheetContainer__vertical{", ";}&.SheetContainer__vertical:not(.SheetContainer__open){", "}&.SheetContainer__horizontal:not(.SheetContainer__open){", "}&.SheetContainer__ltr.SheetContainer__horizontal{", ";}&.SheetContainer__rtl{&.SheetContainer__horizontal{", ";&.SheetContainer__horizontal:not(.SheetContainer__open){", "}}}&.SheetContainer__horizontal.SheetContainer__open,&.SheetContainer__vertical.SheetContainer__open{&.SheetContainer__content{transform:translate3d(0,0,0);}&.SheetContainer__full-screen{", "}}"], (function(e) {
                return (0,
                c.css)(us || (us = J(["\n        background: ", ";\n        color: ", ";\n    "])), e.theme.palette.sheet[e.variant].body.background, e.theme.palette.sheet[e.variant].body.text)
            }
            ), (function(e) {
                var t = e.dock
                  , n = e.gclose;
                return (0,
                c.css)(ds || (ds = J(["\n            ", ": 0;\n            left: 0;\n            right: 0;\n            border-", "-left-radius: 0;\n            border-", "-right-radius: 0;\n            transform: translateY(", "100%) translateY(", "", ");\n        "])), t, t, t, "top" === t && "-", "bottom" === t && "-", n)
            }
            ), (function(e) {
                var t = e.dock
                  , n = e.gclose;
                return (0,
                c.css)(ms || (ms = J(["\n            transform: translateY(", "100%) translateY(", "", ");\n        "])), "top" === t && "-", "bottom" === t && "-", n)
            }
            ), (function(e) {
                var t = e.dock
                  , n = e.gclose;
                return (0,
                c.css)(ps || (ps = J(["\n            transform: translateX(", "100%) translateX(", "", ");\n        "])), "left" === t && "-", "right" === t && "-", n)
            }
            ), (function(e) {
                return (0,
                c.css)(fs || (fs = J(["\n            ", ":0;\n            top:0;\n            bottom:0;\n            border-top-", "-radius: 0;\n            border-bottom-", "-radius: 0;\n        "])), e.dock, e.dock, e.dock)
            }
            ), (function(e) {
                return (0,
                c.css)(ys || (ys = J(["\n                ", ": 0;\n                top: 0;\n                bottom: 0;\n                border-top-", "-radius: 0;\n                border-bottom-", "-radius: 0;\n            "])), ws[e.dock], ws[e.dock], ws[e.dock])
            }
            ), (function(e) {
                var t = e.dock
                  , n = e.gclose;
                return (0,
                c.css)(gs || (gs = J(["\n                    transform: translateX(", "100%) translateX(", "", ");\n                "])), "right" === t && "-", "left" === t && "-", n)
            }
            ), (function(e) {
                return "transform:translate3d(0,0,0);width:calc(100% - ".concat(e.gopen, ");")
            }
            ));
            Ss.defaultProps = {
                theme: re.coreDefaultTheme,
                background: 0,
                border: {
                    width: "NONE"
                },
                display: "inline-block",
                p: "NONE",
                radius: "S",
                position: "fixed",
                shadow: "NONE",
                zIndex: 1200
            };
            var ks = u()(l.Box).withConfig({
                displayName: "Sheetstyled__SheetContentStyled",
                componentId: "sc-1pz7m6n-1"
            })(["display:flex;flex-grow:1;flex-direction:column;border-radius:0;.SheetContainer__ltr.SheetContainer__horizontal &{", ";}.SheetContainer__rtl.SheetContainer__horizontal &{", ";}"], (function(e) {
                return "border-bottom-".concat(ws[e.dock], "-radius:").concat(e.theme.spacing[e.radius], ";")
            }
            ), (function(e) {
                return "border-bottom-".concat(e.dock, "-radius:").concat(e.theme.spacing[e.radius], ";")
            }
            ));
            ks.defaultProps = {
                theme: re.coreDefaultTheme,
                border: {
                    width: "NONE"
                },
                shadow: "NONE"
            };
            var Ms, Ns = u().div.withConfig({
                displayName: "Sheetstyled__SheetHeaderAdornmentStyled",
                componentId: "sc-1pz7m6n-2"
            })(["position:fixed;background:", ";", " ", " .SheetContainer__ltr &{", ";}.SheetContainer__horizontal &{", ";}.SheetContainer__vertical &{", ";}.SheetContainer__rtl.SheetContainer__horizontal &{", ";}.SheetContainer__rtl.SheetContainer__vertical &{", ";}"], (function(e) {
                return e.theme.palette.sheet[e.variant].body.background
            }
            ), (function(e) {
                return (0,
                l.shadow)("NONE" === e.shadow ? "S" : e.shadow)
            }
            ), (0,
            l.radius)("ROUNDED"), (function(e) {
                return "".concat(ws[e.dock], ":0;")
            }
            ), (function(e) {
                return (0,
                c.css)(hs || (hs = J(["\n            top: calc(50% - ", " / 2);\n            width: ", ";\n            height: ", ";\n            margin: 0 -", ";\n        "])), e.theme.spacing[e.width], e.theme.spacing[e.width], e.theme.spacing[e.height], e.theme.spacing.L)
            }
            ), (function(e) {
                return (0,
                c.css)(vs || (vs = J(["\n            right: calc(50% - ", " / 2);\n            width: ", ";\n            height:", ";\n            margin-", ": -", ";\n        "])), e.theme.spacing[e.width], e.theme.spacing[e.width], e.theme.spacing[e.height], ws[e.dock], e.theme.spacing.L)
            }
            ), (function(e) {
                return "".concat(e.dock, ":0;")
            }
            ), (function(e) {
                return "".concat(ws[e.dock], ":0;")
            }
            )), Es = u().div.attrs({
                tabIndex: -1
            }).withConfig({
                displayName: "Sheetstyled__TransparentBackdrop",
                componentId: "sc-1pz7m6n-3"
            })(["position:fixed;top:0;right:0;bottom:0;left:0;opacity:1;z-index:", ";&:focus{outline:none;}background-color:", ";"], (function(e) {
                return e.zIndex
            }
            ), (function(e) {
                return e.theme.palette.dim.modal
            }
            ));
            Es.defaultProps = {
                theme: re.coreDefaultTheme
            },
            Ns.defaultProps = {
                theme: re.coreDefaultTheme,
                shadow: "L",
                width: "XXXL",
                height: "XS"
            };
            var Ps, Vs, Ts, Os, Is, zs, As, Fs, Bs = u()(l.Button).withConfig({
                displayName: "SheetCloseButtonOutsidestyled__SheetCloseButtonOutsideStyled",
                componentId: "sc-sba56t-0"
            })(["display:inline-block;border:0 none;margin:0;position:absolute;padding:0;", " & svg{margin-bottom:-4px;*{fill:", "}}", ";.SheetContainer__horizontal &{", ";", ";", " ", ";}.SheetContainer__vertical &{", ";", ";", ";", ";}.SheetContainer__rtl.SheetContainer__horizontal &{", ";}.SheetContainer__rtl.SheetContainer__vertical &{", ";}"], (function(e) {
                return (0,
                c.css)(Ms || (Ms = J(["\n        background: ", ";\n        color: ", ";\n    "])), e.theme.palette.sheet[e.sheetVariant].outsideCloseButton.background, e.theme.palette.sheet[e.sheetVariant].outsideCloseButton.text)
            }
            ), (function(e) {
                return e.theme.palette.sheet[e.sheetVariant].outsideCloseButton.text
            }
            ), (function(e) {
                return "half-out" === e.position && "z-index:10;"
            }
            ), (function(e) {
                return "".concat(ws[e.dock], ":0;").concat(e.align, ":0;")
            }
            ), (function(e) {
                return "margin:".concat(e.bm / 2, "px -").concat(1.5 * e.bm, "px;")
            }
            ), (function(e) {
                return "half-out" === e.position && "margin:".concat(e.bm / 2, "px -").concat(e.bm, "px;")
            }
            ), (function(e) {
                return "center" === e.align && "top:calc(50% - ".concat(e.bm, "px);")
            }
            ), (function(e) {
                return "".concat(ws[e.dock], ":0;").concat(e.align, ":0;")
            }
            ), (function(e) {
                return "margin:-".concat(1.5 * e.bm, "px ").concat(e.bm / 2, "px; ")
            }
            ), (function(e) {
                return "half-out" === e.position && "margin:-".concat(e.bm, "px ").concat(e.bm / 2, "px;")
            }
            ), (function(e) {
                return "center" === e.align && "left:calc(50% - ".concat(e.bm, "px);")
            }
            ), (function(e) {
                return "".concat(e.dock, ":0;").concat(e.align, ":0;")
            }
            ), (function(e) {
                return "".concat(ws[e.dock], ":0;").concat(e.align, ":0;")
            }
            )), Rs = ["align", "dock", "onClose", "open", "openIcon", "closeIcon", "iconSize", "position", "visible"], Ds = function(e) {
                var t = e.align
                  , n = e.dock
                  , r = e.onClose
                  , i = e.open
                  , o = e.openIcon
                  , l = e.closeIcon
                  , s = e.iconSize
                  , c = e.position
                  , u = e.visible
                  , d = Z(e, Rs)
                  , m = !i && ("when-close" === u || "always" === u)
                  , p = i && ("when-open" === u || "always" === u);
                if (!m && !p)
                    return null;
                var f = "half-out" === c ? d.theme.spacingNumber[s] / 2 : d.theme.spacingNumber[s];
                return a.createElement(Bs, $({}, d, {
                    align: t,
                    dock: n,
                    bm: f,
                    onClick: r,
                    position: c,
                    variant: "solid",
                    "data-component": i ? "sheet-close-button" : "sheet-open-button",
                    "data-element-name": i ? "sheet-close-button" : "sheet-open-button",
                    isFocusIndicatorOutside: !0
                }), m && (l || a.createElement(ts, {
                    size: s
                })), p && (o || a.createElement(ts, {
                    size: s
                })))
            };
            Ds.defaultProps = {
                iconSize: "XXL",
                align: "top",
                position: "outside",
                visible: "when-open"
            };
            var Ls = u()(l.Button).withConfig({
                displayName: "SheetHeaderstyled__SheetCloseButtonInsideStyled",
                componentId: "sc-x16anr-0"
            })(["& svg{*{fill:", "}}", " .SheetContainer__ltr.SheetContainer__horizontal &{", "}.SheetContainer__rtl.SheetContainer__horizontal &{", "}"], (function(e) {
                return "none" === e.bg ? e.theme.palette.sheet[e.sheetVariant].body.text : e.theme.palette.sheet[e.sheetVariant].header.text
            }
            ), (function(e) {
                return e.buttonSize && (0,
                c.css)(Ps || (Ps = J(["\n        margin-top: -", ";\n        margin-bottom: -", ";\n    "])), e.theme.spacing[e.theme.button[e.buttonSize].pX], e.theme.spacing[e.theme.button[e.buttonSize].pX])
            }
            ), (function(e) {
                return (0,
                c.css)(Vs || (Vs = J(["\n            margin-", ": ", ";\n            margin-", ": ", ";\n        "])), e.dock, e.theme.spacing.M, ws[e.dock], e.theme.spacing.XS)
            }
            ), (function(e) {
                return (0,
                c.css)(Ts || (Ts = J(["\n            margin-", ": ", ";\n            margin-", ": ", ";\n        "])), e.dock, e.theme.spacing.XS, ws[e.dock], e.theme.spacing.M)
            }
            ));
            Ls.defaultProps = {
                theme: re.coreDefaultTheme,
                p: "M",
                radius: "NONE",
                shadow: "NONE"
            };
            var _s = u()(l.Card).withConfig({
                displayName: "SheetHeaderstyled__SheetHeaderStyled",
                componentId: "sc-x16anr-1"
            })(["flex-wrap:wrap;&:focus{outline:none;}", " ", " .SheetContainer__vertical &{", ";}.SheetContainer__ltr.SheetContainer__horizontal &{", ";}.SheetContainer__rtl.SheetContainer__horizontal &{", ";}"], (function(e) {
                return "none" === e.bg && (0,
                c.css)(Os || (Os = J(["\n        background: ", ";\n        color: ", ";\n    "])), e.theme.palette.sheet[e.variant].body.background, e.theme.palette.sheet[e.variant].body.text)
            }
            ), (function(e) {
                return "background" === e.bg && (0,
                c.css)(Is || (Is = J(["\n        background: ", ";\n        color: ", ";\n    "])), e.theme.palette.sheet[e.variant].header.background, e.theme.palette.sheet[e.variant].header.text)
            }
            ), (function(e) {
                return (0,
                c.css)(zs || (zs = J(["\n            border-", "-left-radius: 0;\n            border-", "-right-radius: 0;\n        "])), e.dock, e.dock)
            }
            ), (function(e) {
                return (0,
                c.css)(As || (As = J(["\n            border-top-", "-radius: 0;\n            border-bottom-", "-radius: 0;\n            border-bottom-", "-radius: 0;\n        "])), e.dock, e.dock, ws[e.dock])
            }
            ), (function(e) {
                return (0,
                c.css)(Fs || (Fs = J(["\n            border-top-", "-radius: 0;\n            border-bottom-", "-radius: 0;\n            border-bottom-", "-radius: 0;\n        "])), ws[e.dock], ws[e.dock], e.dock)
            }
            ));
            _s.defaultProps = {
                theme: re.coreDefaultTheme,
                alignItems: "center",
                background: 0,
                border: {
                    width: "S",
                    direction: "bottom"
                },
                display: "flex",
                justifyContent: "space-between",
                p: "M",
                radius: "NONE",
                shadow: "NONE"
            };
            var js = ["closeButton", "header", "onClose", "open"]
              , qs = {
                top: {
                    openIcon: a.createElement(cs, {
                        key: "DefaultTopOpenIcon",
                        size: "XL"
                    }),
                    closeIcon: a.createElement(ls, {
                        key: "DefaultTopCloseIcon",
                        size: "XL"
                    })
                },
                bottom: {
                    openIcon: a.createElement(ls, {
                        key: "DefaultBottomOpenIcon",
                        size: "XL"
                    }),
                    closeIcon: a.createElement(cs, {
                        key: "DefaultBottomCloseIcon",
                        size: "XL"
                    })
                },
                left: {
                    openIcon: a.createElement(as, {
                        key: "DefaultLeftOpenIcon",
                        size: "XL"
                    }),
                    closeIcon: a.createElement(rs, {
                        key: "DefaultLeftCloseIcon",
                        size: "XL"
                    })
                },
                right: {
                    openIcon: a.createElement(rs, {
                        key: "DefaultRightOpenIcon",
                        size: "XL"
                    }),
                    closeIcon: a.createElement(as, {
                        key: "DefaultRightCloseIcon",
                        size: "XL"
                    })
                }
            }
              , Hs = {
                left: {
                    ps: "M",
                    pe: "S"
                },
                right: {
                    ps: "S",
                    pe: "M"
                },
                top: {
                    ps: "L",
                    pe: "L"
                },
                bottom: {
                    ps: "L",
                    pe: "L"
                }
            }
              , Us = function(e) {
                var t = e.content
                  , n = e.position
                  , r = e.textAlign
                  , i = e.vertical
                  , o = e.buttonBeforeContent;
                return t ? a.createElement(a.Fragment, null, "inside" === n && a.createElement("div", {
                    key: "emptyDiv"
                }), a.createElement(l.Box, {
                    display: "flex",
                    alignItems: r,
                    me: i && o ? "NONE" : "M",
                    ms: i && o ? "M" : "NONE",
                    width: "100%",
                    flexDirection: "column"
                }, t)) : null
            }
              , Ws = function(e) {
                var t = e.closeButton
                  , n = e.header
                  , r = void 0 === n ? {} : n
                  , i = e.onClose
                  , o = e.open
                  , s = Z(e, js)
                  , c = (0,
                ne.isRtl)()
                  , u = t.visible || "when-open"
                  , d = Cs(s.dock)
                  , m = function(e, t, n) {
                    if (t && (!e || !e.align))
                        return "center";
                    var r = e && e.align || "left";
                    switch (n ? ws[r] : r) {
                    case "left":
                    default:
                        return "flex-start";
                    case "center":
                        return "center";
                    case "right":
                        return "flex-end"
                    }
                }(r, d, c)
                  , p = o && ("when-open" === u || "always" === u)
                  , f = !o && ("when-close" === u || "always" === u)
                  , y = !d && c ? ws[s.dock] : s.dock
                  , g = p && (t.openIcon || qs[y].openIcon)
                  , h = f && (t.closeIcon || qs[y].closeIcon)
                  , v = "right" === s.dock || d && "inside" === t.position && (c ? "right" === t.align : "left" === t.align)
                  , b = K(K({}, Hs[c ? s.dock : ws[s.dock]]), {}, {
                    pt: r.pt || "M",
                    pb: r.pb || "NONE"
                })
                  , w = r.noBackground || "sheet" === s.variant ? "none" : "background"
                  , C = r.title && a.createElement(l.Box, {
                    key: "SheetHeader",
                    display: "flex",
                    alignItems: m,
                    flex: [1, 1, "0%"],
                    flexDirection: "column",
                    role: "heading",
                    "aria-level": 1
                }, r.title)
                  , x = (p || f) && "inside" === t.position && a.createElement(Ls, $({
                    key: "SheetCloseButtonInside",
                    "aria-label": r.ariaLabel,
                    isIconOnly: !0,
                    variant: "no-style",
                    dock: s.dock,
                    startIcon: o ? g : h,
                    iconSize: g.props.size || "XL",
                    sheetVariant: s.variant,
                    onClick: i,
                    bg: w,
                    "data-component": o ? "sheet-open-button" : "sheet-close-button",
                    "data-element-name": o ? "sheet-open-button" : "sheet-close-button"
                }, t.extraAttrs))
                  , S = {
                    textAlign: m,
                    vertical: d,
                    buttonBeforeContent: v,
                    content: r.content,
                    position: t.position
                };
                return a.createElement(_s, $({
                    dock: s.dock,
                    radius: s.radius,
                    variant: s.variant,
                    border: {
                        width: !r.noBackground && d ? "S" : "NONE",
                        direction: s.dock
                    },
                    shadow: "NONE",
                    bg: w
                }, b), "top" === s.dock && a.createElement(Us, S), v && [x, C], !v && [C, x], "top" !== s.dock && a.createElement(Us, S))
            }
              , Gs = ["autoClose", "className", "children", "closeButton", "open", "onClose", "showBackdrop", "zIndex", "isLockFocus", "autoFocus"]
              , Xs = function(e, t, n, r, i, a) {
                var o, l = ["kite-js-Typography", "SheetContainer", e];
                return l.push(r ? "SheetContainer__rtl" : "SheetContainer__ltr"),
                Cs(i) && l.push("SheetContainer__vertical"),
                ("left" === (o = i) || "right" === o) && l.push("SheetContainer__horizontal"),
                t && l.push("SheetContainer__open"),
                n && l.push("SheetContainer__with-backdrop"),
                a && l.push("SheetContainer__".concat(a)),
                l.join(" ")
            }
              , Ks = function(e) {
                var t = e.autoClose
                  , n = e.className
                  , r = e.children
                  , i = e.closeButton
                  , o = e.open
                  , s = e.onClose
                  , c = e.showBackdrop
                  , u = e.zIndex
                  , d = e.isLockFocus
                  , m = e.autoFocus
                  , p = Z(e, Gs)
                  , f = (0,
                ne.isRtl)()
                  , y = a.createRef()
                  , g = a.useCallback((function(e) {
                    t && y.current && !y.current.contains(e.target) && s(e)
                }
                ), [t, s, y]);
                a.useEffect((function() {
                    return t && !c && document.addEventListener("click", g),
                    t ? function() {
                        document.removeEventListener("click", g)
                    }
                    : void 0
                }
                ), [g, c]);
                var h, v = "top" !== p.dock, b = "sheet" === (h = p).variant ? {
                    shadow: "L",
                    radius: "L",
                    px: h.px || "M",
                    py: h.py || "M"
                } : {
                    shadow: "sheet-square" === h.variant ? "L" : "NONE",
                    radius: "NONE",
                    px: "NONE",
                    py: "NONE"
                }, w = function(e, t) {
                    var n = e.fill
                      , r = e.gutter
                      , i = Z(e, bs)
                      , a = "sheet" === i.variant
                      , o = Cs(i.dock);
                    if (!r || !r.open && !r.close)
                        return !o && a && "full-screen" === n ? {
                            gopen: "".concat(2 * i.theme.spacingNumber[t.radius], "px"),
                            gclose: "0px"
                        } : {
                            gopen: "full-screen" === n ? "0px" : "100%",
                            gclose: "0px"
                        };
                    var l = xs(r.open, i.theme)
                      , s = xs(r.close, i.theme);
                    return {
                        gopen: !o && a && "0px" === l ? "".concat(2 * i.theme.spacingNumber[t.radius], "px") : l,
                        gclose: s
                    }
                }(p, b), C = (p.header || "inside" === i.position) && !p.header.isHidden && a.createElement(Ws, $({}, p, {
                    closeButton: i,
                    onClose: s,
                    open: o,
                    radius: b.radius
                })), x = s && o ? function(e) {
                    e.target === e.currentTarget && s(e)
                }
                : void 0, S = a.createElement(Es, {
                    zIndex: u,
                    onMouseDown: x
                });
                return a.createElement(ne.Portal, {
                    enabled: !0
                }, o && c && S, a.createElement(l.FocusTrap, {
                    open: o,
                    isLockFocus: d,
                    autoFocus: m
                }, a.createElement(Ss, $({
                    className: Xs(n, o, c, f, p.dock, p.fill)
                }, p, b, w, {
                    zIndex: u,
                    innerRef: y,
                    open: o
                }), o && p.adornment && p.adornment.visible && a.createElement(Ns, $({
                    dock: p.dock,
                    variant: p.variant
                }, p.adornment)), ("outside" === i.position || "half-out" === i.position) && a.createElement(Ds, $({
                    key: "SheetCloseButtonOutside"
                }, i, {
                    open: o,
                    dock: p.dock,
                    onClose: s,
                    theme: p.theme,
                    sheetVariant: p.variant
                }, i.extraAttrs)), v && C, a.createElement(ks, {
                    radius: b.radius,
                    theme: p.theme,
                    dock: p.dock,
                    clone: !0
                }, r), !v && C)))
            };
            Ks.displayName = "Sheet",
            Ks.defaultProps = {
                theme: re.coreDefaultTheme,
                autoClose: !1,
                closeButton: {
                    position: "outside",
                    visible: "when-open",
                    iconSize: "XXL"
                },
                dock: "left",
                fill: "content",
                header: {
                    title: "",
                    pt: "M",
                    pb: "NONE"
                },
                zIndex: 1200,
                open: !1,
                showBackdrop: !1,
                variant: "drawer"
            };
            var Ys, $s = (0,
            c.withTheme)(Ks), Zs = function(e, t, n) {
                if (void 0 === n && (n = "en-us"),
                !e || 0 === e.length)
                    return e;
                var r = window.location.hostname.toLowerCase().indexOf("agoda.cn") > -1
                  , i = "";
                return void 0 !== t && (t !== n || r && "zh-cn" !== t) && (i = "/".concat(t)),
                Ur.StringFormatter.format(e, i)
            };
            !function(e) {
                e[e.Unknown = -1] = "Unknown",
                e[e.Home = 200001] = "Home",
                e[e.MainMenu = 200003] = "MainMenu",
                e[e.Language = 200004] = "Language",
                e[e.PriceDisplay = 200005] = "PriceDisplay",
                e[e.Calendar = 200006] = "Calendar",
                e[e.Occupancy = 200007] = "Occupancy",
                e[e.SearchFilter = 200010] = "SearchFilter",
                e[e.TextSearch = 200011] = "TextSearch",
                e[e.Search = 200012] = "Search",
                e[e.SearchMap = 200013] = "SearchMap",
                e[e.EditSearch = 200014] = "EditSearch",
                e[e.SearchNoResults = 200016] = "SearchNoResults",
                e[e.Review = 200018] = "Review",
                e[e.PropertyMap = 200021] = "PropertyMap",
                e[e.PhotoGallery = 200023] = "PhotoGallery",
                e[e.RoomPage = 200025] = "RoomPage",
                e[e.RoomOfferPage = 200200] = "RoomOfferPage",
                e[e.AskProperty = 200029] = "AskProperty",
                e[e.BookingFormStep1 = 200031] = "BookingFormStep1",
                e[e.ForgotPassword = 200035] = "ForgotPassword",
                e[e.BookingFormStep2 = 200036] = "BookingFormStep2",
                e[e.PaymentMethodPage = 200038] = "PaymentMethodPage",
                e[e.PaymentRedirect = 200036] = "PaymentRedirect",
                e[e.ThankYouPage = 200044] = "ThankYouPage",
                e[e.Cart = 660031] = "Cart",
                e[e.PrivacyPolicy = 200074] = "PrivacyPolicy",
                e[e.TermsOfUse = 200075] = "TermsOfUse",
                e[e.Property = 200093] = "Property",
                e[e.Captcha = 200109] = "Captcha",
                e[e.SignUp = 200125] = "SignUp",
                e[e.SignIn = 200129] = "SignIn",
                e[e.SignInOptions = 200127] = "SignInOptions",
                e[e.WhatsNearby = 200161] = "WhatsNearby",
                e[e.Popup = 200162] = "Popup",
                e[e.SearchErrorResult = 200191] = "SearchErrorResult",
                e[e.AgodaApp = 200230] = "AgodaApp",
                e[e.ChinaLicense = 200200] = "ChinaLicense",
                e[e.ChinaReferralPage = 200231] = "ChinaReferralPage",
                e[e.FlightHomePage = 500001] = "FlightHomePage",
                e[e.FlightSearch = 500002] = "FlightSearch",
                e[e.FlightsDetails = 500003] = "FlightsDetails",
                e[e.FlightsBookingFormStep1 = 500004] = "FlightsBookingFormStep1",
                e[e.FlightsBookingFormStep2 = 500005] = "FlightsBookingFormStep2",
                e[e.FlightsThankYouPage = 500006] = "FlightsThankYouPage",
                e[e.FlightsProcessingPage = 500007] = "FlightsProcessingPage",
                e[e.FlightsMMB = 500008] = "FlightsMMB",
                e[e.FlightsMMBDetails = 500009] = "FlightsMMBDetails",
                e[e.FlightCalendar = 500012] = "FlightCalendar",
                e[e.FlightTextSearch = 500011] = "FlightTextSearch",
                e[e.FlightOccupancy = 500013] = "FlightOccupancy",
                e[e.FlightSearchFilter = 500021] = "FlightSearchFilter",
                e[e.FlightSearchSort = 500022] = "FlightSearchSort",
                e[e.FlightUnsupportedOrigin = 500024] = "FlightUnsupportedOrigin",
                e[e.FlightSeatSelection = 500026] = "FlightSeatSelection",
                e[e.FlightBaggageSelection = 500027] = "FlightBaggageSelection",
                e[e.FlightCombinedPolicy = 500033] = "FlightCombinedPolicy",
                e[e.FlightsSelfTransfer = 500034] = "FlightsSelfTransfer",
                e[e.FlightsAgodaGuarantee = 500035] = "FlightsAgodaGuarantee",
                e[e.ErrorPage = 200225] = "ErrorPage",
                e[e.PackagesHome = 660001] = "PackagesHome",
                e[e.PackagesSearchPage = 660002] = "PackagesSearchPage",
                e[e.PackagesPropertyPage = 660003] = "PackagesPropertyPage",
                e[e.PackagesBookingFormDetails = 660004] = "PackagesBookingFormDetails",
                e[e.PackagesBookingFormPayment = 660005] = "PackagesBookingFormPayment",
                e[e.PackagesBookingFormThankYou = 660006] = "PackagesBookingFormThankYou",
                e[e.PackagesOccupancyOverlay = 660007] = "PackagesOccupancyOverlay",
                e[e.PackagesFlightsSearch = 660009] = "PackagesFlightsSearch",
                e[e.PackagesFlightDetails = 660010] = "PackagesFlightDetails",
                e[e.MultiHotelSearchPage = 660020] = "MultiHotelSearchPage",
                e[e.MultiHotelPropertyPage = 660021] = "MultiHotelPropertyPage",
                e[e.MultiHotelBookingFormDetails = 660022] = "MultiHotelBookingFormDetails",
                e[e.MultiHotelBookingFormPayment = 660023] = "MultiHotelBookingFormPayment",
                e[e.MultiHotelBookingFormThankYou = 660024] = "MultiHotelBookingFormThankYou",
                e[e.ActivitiesHomePage = 9e3] = "ActivitiesHomePage",
                e[e.ActivitiesSearchPage = 9101] = "ActivitiesSearchPage",
                e[e.ActivitiesDetailPage = 9002] = "ActivitiesDetailPage",
                e[e.ActivitiesSelectorPage = 9003] = "ActivitiesSelectorPage",
                e[e.ActivitiesBookingFormDetails = 9004] = "ActivitiesBookingFormDetails",
                e[e.ActivitiesBookingFormPayment = 9005] = "ActivitiesBookingFormPayment",
                e[e.ActivitiesBookingFormThankYou = 9006] = "ActivitiesBookingFormThankYou",
                e[e.ActivitiesPageNotFound = 9007] = "ActivitiesPageNotFound",
                e[e.ActivitiesHomePageApp = 91e4] = "ActivitiesHomePageApp",
                e[e.ActivitiesSearchPageApp = 910001] = "ActivitiesSearchPageApp",
                e[e.ActivitiesDetailPageApp = 910002] = "ActivitiesDetailPageApp",
                e[e.ActivitiesSelectorPageApp = 910003] = "ActivitiesSelectorPageApp",
                e[e.ActivitiesBookingFormDetailsApp = 910004] = "ActivitiesBookingFormDetailsApp",
                e[e.ActivitiesBookingFormPaymentApp = 910005] = "ActivitiesBookingFormPaymentApp",
                e[e.ActivitiesBookingFormThankYouApp = 910006] = "ActivitiesBookingFormThankYouApp",
                e[e.ActivitiesPageNotFoundApp = 910007] = "ActivitiesPageNotFoundApp",
                e[e.CarsHomePage = 14100] = "CarsHomePage",
                e[e.CarsSearchPage = 14101] = "CarsSearchPage",
                e[e.CarsDetailsPage = 14102] = "CarsDetailsPage",
                e[e.CarTextSearch = 14109] = "CarTextSearch",
                e[e.CarCalendar = 14110] = "CarCalendar",
                e[e.Country = 4] = "Country",
                e[e.City = 5] = "City",
                e[e.Area = 6] = "Area",
                e[e.State = 8] = "State",
                e[e.Landmark = 12] = "Landmark",
                e[e.Ccpa = 1015] = "Ccpa",
                e[e.CountryWithCommonTheme = 2200] = "CountryWithCommonTheme",
                e[e.CityWithCommonTheme = 2300] = "CityWithCommonTheme",
                e[e.StateWithCommonTheme = 2400] = "StateWithCommonTheme",
                e[e.AreaWithCommonTheme = 2500] = "AreaWithCommonTheme",
                e[e.LandmarkWithCommonTheme = 2600] = "LandmarkWithCommonTheme",
                e[e.CountryWithSpecialTheme = 42e4] = "CountryWithSpecialTheme",
                e[e.CityWithSpecialTheme = 43e4] = "CityWithSpecialTheme",
                e[e.StateWithSpecialTheme = 44e4] = "StateWithSpecialTheme",
                e[e.AreaWithSpecialTheme = 45e4] = "AreaWithSpecialTheme",
                e[e.BrandCampaignLandingPage = 9e4] = "BrandCampaignLandingPage",
                e[e.AccommodationPage = 203e3] = "AccommodationPage",
                e[e.LongStayPage = 204e3] = "LongStayPage",
                e[e.TravelAdvisorPage = 200280] = "TravelAdvisorPage",
                e[e.PromoInbox = 88] = "PromoInbox"
            }(Ys || (Ys = {}));
            var Js = function() {
                return Js = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Js.apply(this, arguments)
            };
            function Qs(e, t, n) {
                return {
                    defaultLanguage: e.defaultLanguage,
                    culture: e.culture,
                    cms: t,
                    formatUrl: n,
                    logger: e.logger,
                    analytics: e.analytics
                }
            }
            var ec = o().memo((function(e) {
                var t = e.navInfo
                  , n = e.title ? e.title : e.cms(t.titleCmsId, t.titleFallbackCmsId)
                  , r = e.isHyperlink;
                o().useEffect((function() {
                    e.isVisible && e.shouldTrackOnSeen && t.elementName && e.analytics.custom(Rt.Seen, {
                        action_element_name: t.elementName,
                        page_type_id: Ys.MainMenu
                    })
                }
                ), [e.isVisible, e.shouldTrackOnSeen, t.elementName]);
                var i = o().useCallback((function(n) {
                    t.elementName && e.analytics.custom(Rt.Click, {
                        action_element_name: t.elementName,
                        page_type_id: Ys.MainMenu
                    }),
                    e.onClick && e.onClick(n, t.menuKey)
                }
                ), []);
                if (!1 === e.isVisible)
                    return null;
                var a = Zs(e.route || t.route, e.culture, e.defaultLanguage)
                  , s = e.formatUrl(a, t.menuKey)
                  , c = r ? {
                    variant: "body1",
                    color: "primary",
                    textDecoration: "underline"
                } : {
                    variant: "heading4",
                    color: 800
                };
                return o().createElement(l.Link, {
                    key: t.menuKey,
                    href: s,
                    onClick: i,
                    activeTextDecoration: "none",
                    "data-element-name": t.elementName,
                    "data-action": t.actionName,
                    "aria-label": e.ariaLabel || n
                }, o().createElement(l.Box, {
                    p: "M",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }, o().createElement(l.Box, {
                    as: "span",
                    display: "flex",
                    key: "menu-left-section"
                }, !r && t.icon || null, o().createElement(l.Box, {
                    ms: r || !t.icon ? "XS" : "M",
                    me: "M",
                    as: "span"
                }, o().createElement(le, Js({
                    as: "div"
                }, c), n, r && t.icon || null))), o().createElement(l.Box, {
                    "data-element-name": "menu-right"
                }, e.renderSideContent && o().createElement(l.Box, {
                    as: "span",
                    display: "flex",
                    key: "menu-right-section"
                }, e.renderSideContent()))))
            }
            ));
            ec.displayName = "MenuNavigation";
            var tc, nc = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, rc = function() {
                return rc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                rc.apply(this, arguments)
            }, ic = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, ac = u()($s).withConfig({
                displayName: "MenuWithOverlay__Overlay",
                componentId: "sc-i638yr-0"
            })(tc || (tc = nc(['\n    z-index: 1205;\n\n    // Temp: Required fix in Kite\n    // Center Alignment of currency and language title\n    &.SheetContainer[open][data-element-name="mob-currency-search-overlay"],\n    &.SheetContainer[open][data-element-name="mob-language-overlay"],\n    &.SheetContainer[open][data-element-name="mob-price-display-overlay"] {\n        & > [variant] {\n            & > button:first-of-type {\n                position: absolute;\n            }\n        }\n    }\n'], ['\n    z-index: 1205;\n\n    // Temp: Required fix in Kite\n    // Center Alignment of currency and language title\n    &.SheetContainer[open][data-element-name="mob-currency-search-overlay"],\n    &.SheetContainer[open][data-element-name="mob-language-overlay"],\n    &.SheetContainer[open][data-element-name="mob-price-display-overlay"] {\n        & > [variant] {\n            & > button:first-of-type {\n                position: absolute;\n            }\n        }\n    }\n']))), oc = function(e) {
                var t, n = ic((0,
                a.useState)(!1), 2), r = n[0], i = n[1], l = o().useCallback((function(t) {
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    i(!0),
                    e.pageTypeId && e.analytics.custom(Rt.Visit, {
                        action_element_name: zr,
                        page_type_id: e.pageTypeId
                    })
                }
                ), []), c = o().useCallback((function() {
                    i(!1),
                    e.pageTypeId && e.analytics.custom(Rt.Leave, {
                        action_element_name: zr,
                        page_type_id: e.pageTypeId
                    }),
                    e.onCloseOverlay && e.onCloseOverlay()
                }
                ), []), u = rc({
                    title: (t = e.cms(e.navInfo.titleCmsId) || e.cms(e.navInfo.titleFallbackCmsId),
                    o().createElement(le, {
                        short: !1,
                        variant: "heading3"
                    }, t))
                }, e.headerProps), d = o().createElement(ac, {
                    open: r,
                    dock: "right",
                    fill: "full-screen",
                    variant: "drawer",
                    closeButton: {
                        position: "inside",
                        extraAttrs: {
                            "data-action": "close"
                        }
                    },
                    onClose: c,
                    header: u,
                    "data-component": "".concat(e.navInfo.elementName, "-overlay"),
                    "data-element-name": "".concat(e.navInfo.elementName, "-overlay")
                }, o().createElement(s.Box, {
                    overflow: "auto"
                }, e.overlayContent(c)));
                return o().createElement(o().Fragment, null, o().createElement(ec, rc({}, e, {
                    onClick: l
                })), d)
            };
            oc.displayName = "MenuWithOverlay";
            var lc, sc = function(e, t) {
                return e === Te.US ? Te.EN : t && e == Te.ES ? Te.MX : e
            }, cc = n(2371), uc = n.n(cc), dc = function() {
                return dc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                dc.apply(this, arguments)
            }, mc = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, pc = {
                width: "S",
                direction: "bottom"
            }, fc = o().memo((function(e) {
                var t = o().useRef()
                  , n = mc(o().useState(!1), 2)
                  , r = n[0]
                  , i = n[1]
                  , a = r ? {
                    border: {
                        width: "M"
                    },
                    borderColor: "primary"
                } : {};
                return o().createElement(l.Box, dc({
                    mb: "NONE",
                    mt: "NONE",
                    pe: "M",
                    pt: "L",
                    pb: "L",
                    ps: "M",
                    tabIndex: 0,
                    onKeyDown: function(t) {
                        "Enter" === t.key && e.onClick && e.onClick()
                    },
                    onClick: e.onClick,
                    border: e.border,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    "data-selected": !!e.isSelected,
                    innerRef: t,
                    onFocus: function() {
                        return i(!0)
                    },
                    onBlur: function() {
                        return i(!1)
                    }
                }, a, e.extraAttrs), o().createElement(l.Box, {
                    display: "flex"
                }, e.renderLeftContent && e.renderLeftContent()), o().createElement(l.Box, {
                    display: "flex"
                }, e.renderRightContent && e.renderRightContent(), !0 === e.selectable && o().createElement(l.Box, {
                    display: "flex",
                    ms: "XL"
                }, e.isSelected ? o().createElement(uc(), {
                    size: "M",
                    color: "primary"
                }) : o().createElement(l.Box, {
                    minWidth: "20px"
                }))))
            }
            ));
            !function(e) {
                e.AccomAllyHeaderMobile = "ACCOMALLY-HEADER-MOBILE"
            }(lc || (lc = {}));
            var yc, gc = new Ke.ClientSideBehavior("LanguageOverlayContentAdaBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).or.experiment.contains(lc.AccomAllyHeaderMobile).build(),Ye.FallbackStrategy.Disable), hc = function() {
                return hc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                hc.apply(this, arguments)
            }, vc = o().memo((function(e) {
                var t = "".concat(e.flag, "-language-name")
                  , n = e.getBehaviorManager().isEnabled(gc)
                  , r = o().useCallback((function() {
                    e.analytics.custom(Rt.Click, {
                        action_element_name: "mob-language",
                        page_type_id: Ys.Language
                    }),
                    e.onClick()
                }
                ), [])
                  , i = o().useCallback((function() {
                    return o().createElement(l.Box, {
                        as: "span",
                        display: "flex",
                        "data-element-name": "language-item-container"
                    }, o().createElement(l.Box, {
                        me: "M",
                        as: "span",
                        "data-element-name": "language-item-flag"
                    }, o().createElement(l.Flag, {
                        flagSize: "M",
                        country: e.flag
                    })), o().createElement(le, {
                        as: n ? "span" : void 0,
                        id: t,
                        variant: "heading4",
                        "data-element-name": "language-item-translation"
                    }, e.translation))
                }
                ), [e.flag, e.translation]);
                return o().createElement(fc, {
                    renderLeftContent: i,
                    onClick: r,
                    border: pc,
                    isSelected: e.isSelected,
                    selectable: !0,
                    extraAttrs: hc({
                        "data-objectid": "".concat(e.languageId),
                        "data-element-name": "mob-language"
                    }, n ? {
                        role: "radio",
                        "aria-checked": "".concat(e.isSelected),
                        "aria-labelledby": t
                    } : {
                        role: "button"
                    })
                })
            }
            ));
            !function(e) {
                e[e.Closed = 0] = "Closed",
                e[e.Open = 1] = "Open"
            }(yc || (yc = {}));
            var bc, wc = function(e) {
                return e === yc.Open
            }, Cc = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, xc = u()(l.List).withConfig({
                displayName: "List__StyledList",
                componentId: "sc-1nbhggx-0"
            })(bc || (bc = Cc(["\n    > li {\n        display: list-item;\n        height: 100%;\n        > * {\n            margin-bottom: 0;\n            margin-top: 0;\n        }\n        &:last-child {\n            > * {\n                margin-bottom: 0;\n            }\n        }\n        &:first-child {\n            > * {\n                margin-top: 0;\n            }\n        }\n    }\n"], ["\n    > li {\n        display: list-item;\n        height: 100%;\n        > * {\n            margin-bottom: 0;\n            margin-top: 0;\n        }\n        &:last-child {\n            > * {\n                margin-bottom: 0;\n            }\n        }\n        &:first-child {\n            > * {\n                margin-top: 0;\n            }\n        }\n    }\n"]))), Sc = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, kc = o().memo((function(e) {
                var t = e.getBehaviorManager().isEnabled(Ze)
                  , n = Sc(o().useState(void 0), 2)
                  , r = n[0]
                  , i = n[1]
                  , a = e.getBehaviorManager().isEnabled(gc);
                o().useEffect((function() {
                    wc(e.menuState) && !r && Ue(e.languageId, e.logger).then((function(e) {
                        i(e)
                    }
                    ))
                }
                ), [e.menuState]);
                var s = function(t) {
                    return function() {
                        return e.onSelected(go(t))
                    }
                }
                  , c = !e.hideSuggestedLanguage && (null == r ? void 0 : r.languages.filter((function(e) {
                    return e.isSelected
                }
                )).map((function(n) {
                    return o().createElement(vc, {
                        key: "suggested-item-".concat(n.cultureCode),
                        onClick: s(n),
                        translation: n.translation,
                        flag: sc(n.countryCode, t),
                        isSelected: n.isSelected,
                        languageId: n.realLanguageId,
                        analytics: e.analytics,
                        getBehaviorManager: e.getBehaviorManager
                    })
                }
                )))
                  , u = o().useMemo((function() {
                    return null == r ? void 0 : r.languages.filter((function(t) {
                        return !!e.hideSuggestedLanguage || !1 === t.isSelected
                    }
                    )).sort((function(e, t) {
                        return e.realLanguageId > t.realLanguageId ? 1 : -1
                    }
                    )).map((function(n) {
                        return o().createElement(vc, {
                            key: "all-item-".concat(n.cultureCode),
                            onClick: s(n),
                            translation: n.translation,
                            flag: sc(n.countryCode, t),
                            isSelected: n.isSelected,
                            languageId: n.realLanguageId,
                            analytics: e.analytics,
                            getBehaviorManager: e.getBehaviorManager
                        })
                    }
                    ))
                }
                ), [r]);
                return o().createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column",
                    overflowX: "hidden",
                    overflowY: "auto",
                    "data-component": "LanguageOverlayComponent",
                    "data-element-name": "language-overlay-content",
                    role: a ? "radiogroup" : void 0,
                    "aria-label": e.ariaLabel
                }, o().createElement(L, {
                    shouldi: !e.hideSuggestedLanguage
                }, o().createElement(l.Box, {
                    ps: "M",
                    pe: "M",
                    pt: "S",
                    pb: "S",
                    background: 50,
                    "data-element-name": "suggested-language-header"
                }, o().createElement(le, {
                    variant: "body2"
                }, null == r ? void 0 : r.suggestedLanguageHeader)), o().createElement("div", {
                    "data-element-name": "suggested-language-items-container"
                }, a ? c : o().createElement(xc, {
                    variant: "vertical",
                    listStyle: "none"
                }, c))), o().createElement(l.Box, {
                    ps: "M",
                    pe: "M",
                    pt: "S",
                    pb: "S",
                    background: 50,
                    "data-element-name": "all-languages-header"
                }, o().createElement(le, {
                    variant: "body2"
                }, null == r ? void 0 : r.allLanguagesHeader)), o().createElement("div", {
                    "data-element-name": "all-languages-items-container"
                }, a ? u : o().createElement(xc, {
                    variant: "vertical",
                    listStyle: "none"
                }, u)))
            }
            ));
            kc.displayName = "LanguageOverlayContent";
            var Mc = new Ke.ClientSideBehavior("AccomAllyHeaderMobileBehavior",(0,
            $e.With)($e.experiment.contains(lc.AccomAllyHeaderMobile)).build(),Ye.FallbackStrategy.Disable)
              , Nc = function() {
                return Nc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Nc.apply(this, arguments)
            }
              , Ec = o().createElement(Zl, {
                icon: Io()
            })
              , Pc = Nc(Nc({}, Jl.language), {
                icon: Ec
            })
              , Vc = o().memo((function(e) {
                var t = e.getBehaviorManager().isEnabled(Mc)
                  , n = e.getBehaviorManager().isEnabled(Ze)
                  , r = o().useCallback((function() {
                    return o().createElement(l.Flag, {
                        flagSize: "M",
                        country: sc(e.selectedLanguageFlag.toString(), n)
                    })
                }
                ), [])
                  , i = o().useCallback((function(t) {
                    return e.onLanguageSelected(t)
                }
                ), [])
                  , a = e.navInfo || Pc
                  , s = "".concat(e.cms(a.titleCmsId, a.titleFallbackCmsId), " ").concat(e.selectedLanguageName);
                return o().createElement(oc, Nc({
                    key: To.Language,
                    navInfo: a,
                    pageTypeId: Ys.Language,
                    cms: e.cms,
                    defaultLanguage: e.defaultLanguage,
                    culture: e.culture,
                    formatUrl: e.formatUrl,
                    renderSideContent: e.renderSideContent || r,
                    overlayContent: function() {
                        var t = e.cms(Jl.language.titleCmsId) || void 0;
                        return o().createElement(kc, {
                            languageId: e.languageId,
                            onSelected: i,
                            hideSuggestedLanguage: e.hideSuggestedLanguage,
                            menuState: e.menuState,
                            logger: e.logger,
                            analytics: e.analytics,
                            ariaLabel: t,
                            getBehaviorManager: e.getBehaviorManager
                        })
                    },
                    headerProps: {
                        align: "center",
                        noBackground: !0
                    },
                    logger: e.logger,
                    analytics: e.analytics
                }, t && {
                    ariaLabel: s
                }))
            }
            ));
            Vc.displayName = "LanguageMenuV2";
            var Tc = function() {
                return Tc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Tc.apply(this, arguments)
            }
              , Oc = function(e, t) {
                return Tc(Tc({}, t), {
                    culture: e.culture,
                    hideSuggestedLanguage: e.hideCurrencyChange,
                    menuState: e.menuState,
                    onLanguageSelected: e.callbacks.onLanguageSelected,
                    selectedLanguageName: e.selectedLanguage.name,
                    selectedLanguageFlag: e.selectedLanguage.flag,
                    languageId: e.languageId,
                    experiments: e.experiments,
                    getBehaviorManager: e.getBehaviorManager
                })
            }
              , Ic = function() {
                return Ic = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ic.apply(this, arguments)
            }
              , zc = function(e, t, n) {
                return Ic(Ic({}, n), {
                    menuVisibility: t,
                    culture: e.culture,
                    menuState: e.menuState,
                    languageId: e.languageId,
                    formatUrl: n.formatUrl,
                    defaultLanguage: n.defaultLanguage,
                    hideCurrencyChange: e.hideCurrencyChange,
                    selectedCurrency: e.selectedCurrency,
                    selectedPriceViewId: e.selectedPriceViewId,
                    onPriceViewSelected: e.callbacks.onPriceViewSelected,
                    onCurrencySelected: e.callbacks.onCurrencySelected,
                    showOnlyTotalPerNightPriceView: !!e.featureConfigs && !e.featureConfigs[Yr.RegulationShowExclusivePriceSetting],
                    isAccomAllyHeaderMobile: e.getBehaviorManager().isEnabled(Mc),
                    getBehaviorManager: e.getBehaviorManager
                })
            }
              , Ac = function() {
                return Ac = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ac.apply(this, arguments)
            }
              , Fc = function(e, t, n, r) {
                var i = Qs(e, n, r);
                return [o().createElement(Vo, {
                    key: "setting",
                    title: n(49354)
                }), o().createElement(Vc, Ac({
                    key: "language-menu"
                }, Oc(e, i))), o().createElement(xu, Ac({
                    key: "currency-menu"
                }, zc(e, t, i)))]
            };
            function Bc(e) {
                return Bc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                Bc(e)
            }
            var Rc, Dc = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator
                  , n = t && e[t]
                  , r = 0;
                if (n)
                    return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function() {
                            return e && r >= e.length && (e = void 0),
                            {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, Lc = function() {
                function e(e) {
                    var t, n;
                    if (this.params = {},
                    e)
                        try {
                            var r = "object" === Bc(e) ? e : function(e) {
                                return (0 === e.indexOf("?") ? e.substr(1) : e).split("&").reduce((function(e, t) {
                                    var n = t.substr(0, t.indexOf("="))
                                      , r = t.substr(n.length + 1);
                                    try {
                                        r = decodeURIComponent(r)
                                    } catch (e) {
                                        r = unescape(r)
                                    }
                                    return e[n] = r,
                                    e
                                }
                                ), {})
                            }(e);
                            try {
                                for (var i = Dc(Object.keys(r)), a = i.next(); !a.done; a = i.next()) {
                                    var o = a.value;
                                    o[0] && o[0].length > 0 && this.set(o, r[o])
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    a && !a.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (t)
                                        throw t.error
                                }
                            }
                        } catch (e) {}
                }
                return e.prototype.have = function(e) {
                    return null !== this.get(e)
                }
                ,
                e.prototype.haveAllKeys = function(e) {
                    if (Object.keys(this.params).length < e.length)
                        return !1;
                    for (var t = 0; t < e.length; t += 1)
                        if (!this.have(e[t]))
                            return !1;
                    return !0
                }
                ,
                e.prototype.get = function(e) {
                    var t = this.params[e.toLowerCase()];
                    return t ? t.value : null
                }
                ,
                e.prototype.set = function(e, t) {
                    return this.params[e.toLowerCase()] = {
                        value: t,
                        presentKey: e
                    },
                    this
                }
                ,
                e.prototype.setIfEmpty = function(e, t) {
                    this.get(e) || this.set(e, t)
                }
                ,
                e.prototype.delete = function(e) {
                    delete this.params[e.toLowerCase()]
                }
                ,
                e.prototype.toObject = function() {
                    var e = this;
                    return Object.keys(this.params).reduce((function(t, n) {
                        return t[n] = e.params[n].value,
                        t
                    }
                    ), {})
                }
                ,
                e.prototype.toString = function() {
                    var e = this;
                    return Object.keys(this.params).filter((function(t) {
                        return e.params[t].value
                    }
                    )).map((function(t) {
                        return "".concat(e.params[t].presentKey, "=").concat(encodeURIComponent(e.params[t].value).replace(/%2C/g, ",").replace(/%3D/g, "="))
                    }
                    )).join("&")
                }
                ,
                e.prototype.count = function() {
                    return Object.keys(this.params || {}).length
                }
                ,
                e.parseObject = function(t) {
                    var n = new e;
                    return Object.keys(t).map((function(e) {
                        return n.set(e, t[e].toString())
                    }
                    )),
                    n
                }
                ,
                e.prototype.isEqual = function(e) {
                    return this.toString() === e.toString()
                }
                ,
                e
            }(), _c = function(e, t) {
                var n = new Lc
                  , r = 2 === e.split("-").length ? e.split("-") : ["", ""];
                return "" !== r[0] && n.set("lc", r[0]),
                "" !== r[1] && n.set("cc", r[1]),
                "" !== t && n.set("mc", t),
                n.set("url", "/flights"),
                n.set("p", "header"),
                "https://flights.agoda.com/in?" + unescape(n.toString())
            };
            !function(e) {
                e.Agoda = "Agoda",
                e.Partner = "Partner"
            }(Rc || (Rc = {}));
            var jc = o().memo((function(e) {
                var t = e.pointsMax.filter((function(t) {
                    return t.id === e.selectedPointsMaxId && t.shouldDisplay
                }
                ))
                  , n = t.length > 0 ? o().createElement(Hc, {
                    key: "active-points-max-".concat(t[0].id),
                    onClick: e.setPointsMax,
                    cdnUrl: e.cdnUrl,
                    pointsMaxProgram: t[0],
                    isSelected: !0
                }) : o().createElement(qc, {
                    nonSelectedText: e.nonSelectedText
                });
                return o().createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column",
                    overflowX: "hidden",
                    overflowY: "auto",
                    "data-element-name": "pointsmax-overlay-content",
                    "data-component": "PointsMaxOverlayComponent"
                }, o().createElement(l.Box, {
                    ps: "M",
                    pe: "M",
                    pt: "S",
                    pb: "S",
                    background: 50
                }, o().createElement(le, {
                    variant: "body2"
                }, e.activeProgramText)), o().createElement("div", null, n), o().createElement(l.Box, {
                    ps: "M",
                    pe: "M",
                    pt: "S",
                    pb: "S",
                    background: 50
                }, o().createElement(le, {
                    variant: "body2"
                }, e.allProgramText)), o().createElement("div", null, e.pointsMax.filter((function(e) {
                    return e.shouldDisplay
                }
                )).map((function(t) {
                    return o().createElement(Hc, {
                        onClick: e.setPointsMax,
                        key: t.id,
                        pmx: t.id,
                        cdnUrl: e.cdnUrl,
                        pointsMaxProgram: t,
                        isSelected: e.selectedPointsMaxId === t.id && t.shouldDisplay
                    })
                }
                ))))
            }
            ))
              , qc = o().memo((function(e) {
                var t = o().useCallback((function() {
                    return o().createElement(l.Box, {
                        as: "span",
                        display: "flex",
                        flexDirection: "row"
                    }, o().createElement(l.Box, {
                        me: "M",
                        as: "span"
                    }, o().createElement(Pl(), {
                        size: "L"
                    })), o().createElement(le, {
                        variant: "heading4"
                    }, e.nonSelectedText))
                }
                ), [e.nonSelectedText]);
                return o().createElement(fc, {
                    renderLeftContent: t,
                    isSelected: !1,
                    selectable: !0
                })
            }
            ))
              , Hc = o().memo((function(e) {
                var t = o().useCallback((function() {
                    e.isSelected ? e.onClick(0, Rc.Agoda) : e.onClick(e.pointsMaxProgram.id, Rc.Agoda)
                }
                ), [])
                  , n = o().useCallback((function() {
                    return o().createElement(l.Box, {
                        display: "flex",
                        flexDirection: "row"
                    }, o().createElement(l.Box, {
                        me: "M",
                        as: "span"
                    }, o().createElement(_, {
                        size: 25,
                        cdnUrl: e.cdnUrl,
                        cdnPath: e.pointsMaxProgram.iconUrl
                    })), o().createElement(le, {
                        variant: "heading4"
                    }, e.pointsMaxProgram.name))
                }
                ), []);
                return o().createElement(fc, {
                    key: e.pointsMaxProgram.id,
                    border: pc,
                    onClick: t,
                    renderLeftContent: n,
                    selectable: !0,
                    isSelected: e.isSelected,
                    extraAttrs: {
                        "data-objectid": "".concat(e.pointsMaxProgram.id),
                        "data-element-name": "pointsMaxProgram"
                    }
                })
            }
            ))
              , Uc = function() {
                return Uc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Uc.apply(this, arguments)
            }
              , Wc = Uc({}, Jl.pointsMax)
              , Gc = o().memo((function(e) {
                var t = e.pointsMaxPrograms.filter((function(t) {
                    return t.id === e.pointsMaxId
                }
                ))
                  , n = o().useCallback((function() {
                    return t.length > 0 && e.pointsMaxPrograms.length > 0 ? o().createElement(_, {
                        size: 28,
                        cdnPath: t[0].iconUrl,
                        cdnUrl: e.pointsMaxCdnUrl
                    }) : void 0
                }
                ), [e.pointsMaxId, e.pointsMaxCdnUrl])
                  , r = o().useCallback((function(t, n) {
                    return e.setPointsMax && e.setPointsMax(t, n)
                }
                ), []);
                return 0 !== e.pointsMaxPrograms.length && e.setPointsMax && e.cms && wc(e.menuState) ? o().createElement(oc, {
                    cms: e.cms,
                    defaultLanguage: e.defaultLanguage,
                    culture: e.culture,
                    formatUrl: e.formatUrl,
                    key: To.PointsMax,
                    navInfo: Wc,
                    overlayContent: function() {
                        return o().createElement(jc, {
                            selectedPointsMaxId: e.pointsMaxId,
                            pointsMax: e.pointsMaxPrograms,
                            activeProgramText: e.cms(84404),
                            allProgramText: e.cms(84406),
                            nonSelectedText: e.cms(84405),
                            cdnUrl: e.pointsMaxCdnUrl,
                            setPointsMax: r
                        })
                    },
                    renderSideContent: n,
                    headerProps: {
                        align: "center",
                        noBackground: !0
                    },
                    logger: e.logger,
                    analytics: e.analytics
                }) : null
            }
            ));
            Gc.displayName = "PointsMaxMenu";
            var Xc = o().memo((function(e) {
                var t = e.text;
                return o().createElement(St, {
                    color: "alert",
                    variant: "solid"
                }, o().createElement(le, {
                    variant: "caption3"
                }, t))
            }
            ));
            Xc.displayName = "AlertBadge";
            var Kc, Yc = function() {
                return Yc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Yc.apply(this, arguments)
            }, $c = function(e, t) {
                var n, r, i;
                return Yc(Yc({}, t), {
                    pointsMaxPrograms: (null === (n = e.pointsMax) || void 0 === n ? void 0 : n.pointsMax) || [],
                    pointsMaxCdnUrl: (null === (r = e.pointsMax) || void 0 === r ? void 0 : r.cdnUrl) || "",
                    pointsMaxId: (null === (i = e.pointsMax) || void 0 === i ? void 0 : i.pointsMaxId) || 0,
                    setPointsMax: e.callbacks.setPointsMax,
                    menuState: e.menuState
                })
            }, Zc = function() {
                return Zc = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Zc.apply(this, arguments)
            }, Jc = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, Qc = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, a = t.length; i < a; i++)
                        !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }, eu = function(e, t, n, r) {
                var i, a, s, c = Qs(e, n, r), u = _c(e.culture, e.currency), d = t.isUserLoggedIn, m = !!e.isNewBookingMenu && t.isShowMyBookings, p = !e.isNewBookingMenu && t.isShowMyBookings, f = t.showAccommodation, y = t.showActivities && null !== (i = e.experiments.shouldUseNewMpMmmbSubMenu) && void 0 !== i && i, g = o().useCallback((function() {
                    return o().createElement(Xc, {
                        text: n(98517)
                    })
                }
                ), []);
                return e.experiments.shouldShowNewAgodaMenu ? Qc(Qc([o().createElement(Vo, {
                    key: "menu-header-explore",
                    title: n(156499)
                }), o().createElement(ec, Zc({
                    key: Jl.hotel.menuKey,
                    navInfo: Jl.hotel
                }, c, {
                    isVisible: f
                })), o().createElement(ec, Zc({
                    key: Jl.flightsInternal.menuKey,
                    navInfo: Jl.flightsInternal
                }, c, {
                    isVisible: t.isFlightPageEnabled,
                    renderSideContent: g
                })), o().createElement(ec, Zc({
                    key: Jl.flights.menuKey,
                    navInfo: Jl.flights
                }, c, {
                    isVisible: t.isFlightPageNotEnabled,
                    renderSideContent: g,
                    route: u
                })), o().createElement(ec, Zc({
                    key: Jl.activities.menuKey,
                    navInfo: Jl.activities
                }, c, {
                    isVisible: t.showActivities,
                    renderSideContent: g
                })), o().createElement(ec, Zc({
                    key: Jl.transfers.menuKey,
                    navInfo: Jl.transfers
                }, c, {
                    isVisible: t.showTransfers,
                    shouldTrackOnSeen: Jl.transfers.shouldTrackOnSeen,
                    renderSideContent: g
                })), o().createElement(l.Divider, {
                    key: "menu-header-explore-divider",
                    space: "NONE",
                    m: "NONE"
                }), o().createElement(Vo, {
                    key: "menu-header-promos",
                    title: n(156500)
                }), o().createElement(ec, Zc({
                    key: Jl.deals.menuKey,
                    navInfo: Jl.deals
                }, c, {
                    renderSideContent: g
                })), o().createElement(ec, Zc({
                    key: Jl.agodaCash.menuKey,
                    navInfo: Jl.agodaCash
                }, c, {
                    isVisible: t.hasAgodaCash
                })), o().createElement(ec, Zc({
                    key: Jl.cashbackRewards.menuKey,
                    navInfo: Jl.cashbackRewards
                }, c, {
                    isVisible: t.showCashbackRewards
                })), o().createElement(ec, Zc({
                    key: Jl.agodaVip.menuKey,
                    navInfo: Jl.agodaVip
                }, c, {
                    isVisible: t.showAgodaVip
                })), o().createElement(Gc, Zc({
                    key: "points-max-menu"
                }, $c(e, c))), o().createElement(l.Divider, {
                    key: "menu-header-promo-divider",
                    space: "NONE",
                    m: "NONE"
                }), o().createElement(Vo, {
                    key: "menu-header-my-account",
                    title: n(156501)
                }), o().createElement(Cm, Zc({
                    key: "menu-header-my-bookings-menu-old"
                }, c, {
                    isNewMenu: !1,
                    isVisible: p
                })), o().createElement(Cm, Zc({
                    key: "menu-header-my-bookings-menu"
                }, c, {
                    isNewMenu: !0,
                    isVisible: m
                })), o().createElement(Sm, Zc({
                    key: Jl.hotelSubMenu.menuKey,
                    navInfo: Jl.hotelSubMenu
                }, c, {
                    isVisible: m && f
                })), o().createElement(Sm, Zc({
                    key: Jl.flightsSubMenu.menuKey,
                    navInfo: Jl.flightsSubMenu
                }, c, {
                    isVisible: m
                })), o().createElement(Sm, Zc({
                    key: Jl.activitiesSubMenu.menuKey,
                    navInfo: Jl.activitiesSubMenu
                }, c, {
                    isVisible: m && y
                })), o().createElement(ec, Zc({
                    key: Jl.favorites.menuKey,
                    navInfo: Jl.favorites
                }, c, {
                    isVisible: t.showFavorites
                })), o().createElement(ec, Zc({
                    key: Jl.myProfile.menuKey,
                    navInfo: Jl.myProfile
                }, c, {
                    route: e.profilePageUrl || Jl.myProfile.route,
                    isVisible: !t.isHideProfileMenu
                })), o().createElement(ec, Zc({
                    key: Jl.inbox.menuKey,
                    navInfo: Jl.inbox
                }, c, {
                    isVisible: d
                })), o().createElement(ec, Zc({
                    key: Jl.reviews.menuKey,
                    navInfo: Jl.reviews
                }, c, {
                    isVisible: d
                })), o().createElement(ec, Zc({
                    key: Jl.savedCards.menuKey,
                    navInfo: Jl.savedCards
                }, c, {
                    isVisible: d
                }))], Jc((null === (a = e.customRenderers) || void 0 === a ? void 0 : a.renderBreadcrumbs) ? [e.customRenderers.renderBreadcrumbs()] : []), !1), [o().createElement(l.Divider, {
                    key: "menu-header-settings-divider",
                    space: "NONE",
                    m: "NONE"
                }), o().createElement(Vo, {
                    key: "menu-header-settings",
                    title: n(49354)
                }), o().createElement(Vc, Zc({
                    key: "language-menu"
                }, Oc(e, c))), o().createElement(xu, Zc({
                    key: "currency-menu"
                }, zc(e, t, c))), o().createElement(ec, Zc({
                    key: Jl.downloadApp.menuKey,
                    navInfo: Jl.downloadApp
                }, c, {
                    isVisible: t.isDownloadAppVisible
                })), o().createElement(ec, Zc({
                    key: Jl.aboutUs.menuKey,
                    navInfo: Jl.aboutUs
                }, c, {
                    isVisible: !!t.showAboutUs
                })), o().createElement(ec, Zc({
                    key: Jl.helpCenter.menuKey,
                    navInfo: Jl.helpCenter
                }, c)), o().createElement(ec, Zc({
                    key: Jl.faq.menuKey,
                    navInfo: Jl.faq
                }, c)), o().createElement(ec, Zc({
                    key: Jl.privacyPolicy.menuKey,
                    navInfo: Jl.privacyPolicy
                }, c)), o().createElement(ec, Zc({
                    key: Jl.ccpaPolicy.menuKey,
                    navInfo: Jl.ccpaPolicy
                }, c, {
                    isVisible: t.isCcpaPolicyVisible
                })), o().createElement(ec, Zc({
                    key: Jl.cookiePolicy.menuKey,
                    navInfo: Jl.cookiePolicy
                }, c)), o().createElement(ec, Zc({
                    key: Jl.termsOfUse.menuKey,
                    navInfo: Jl.termsOfUse
                }, c)), o().createElement(ec, Zc({
                    key: Jl.manageCookieSetting.menuKey,
                    navInfo: Jl.manageCookieSetting
                }, c)), o().createElement(ec, Zc({
                    key: Jl.chinaLicense.menuKey,
                    navInfo: Jl.chinaLicense
                }, c, {
                    isVisible: t.isChineseEnabled
                })), o().createElement(L, {
                    key: "signout-menu",
                    shouldi: d
                }, o().createElement(l.Divider, {
                    key: "menu-header-signout-divider",
                    space: "NONE",
                    m: "NONE"
                })), o().createElement(ec, Zc({
                    key: Jl.signout.menuKey,
                    navInfo: Jl.signout
                }, c, {
                    onClick: e.callbacks.signOut,
                    isVisible: d
                }))], !1) : Qc(Qc([o().createElement(Vo, {
                    key: "menu-header-settings",
                    title: n(49354)
                }), o().createElement(Vc, Zc({
                    key: "language-menu"
                }, Oc(e, c))), o().createElement(xu, Zc({
                    key: "currency-menu"
                }, zc(e, t, c))), o().createElement(l.Divider, {
                    key: "menu-header-accounts-divider",
                    space: "NONE",
                    m: "NONE"
                }), o().createElement(Vo, {
                    key: "menu-header-my-account",
                    title: n(83114),
                    subTitle: n(83113),
                    onClickSubTitle: e.callbacks.signOut,
                    isShowSubTitle: d,
                    dataAction: "signout"
                }), o().createElement(ec, Zc({
                    key: Jl.hotel.menuKey,
                    navInfo: Jl.hotel
                }, c, {
                    isVisible: f
                })), o().createElement(ec, Zc({
                    key: Jl.flightsInternal.menuKey,
                    navInfo: Jl.flightsInternal
                }, c, {
                    isVisible: t.isFlightPageEnabled,
                    renderSideContent: g
                })), o().createElement(ec, Zc({
                    key: Jl.flights.menuKey,
                    navInfo: Jl.flights
                }, c, {
                    isVisible: t.isFlightPageNotEnabled,
                    renderSideContent: g,
                    route: u
                })), o().createElement(ec, Zc({
                    key: Jl.activities.menuKey,
                    navInfo: Jl.activities
                }, c, {
                    isVisible: t.showActivities,
                    renderSideContent: g
                })), o().createElement(ec, Zc({
                    key: Jl.transfers.menuKey,
                    navInfo: Jl.transfers
                }, c, {
                    isVisible: t.showTransfers,
                    shouldTrackOnSeen: Jl.transfers.shouldTrackOnSeen,
                    renderSideContent: g
                })), o().createElement(ec, Zc({
                    key: Jl.favorites.menuKey,
                    navInfo: Jl.favorites
                }, c, {
                    isVisible: t.showFavorites
                })), o().createElement(ec, Zc({
                    key: Jl.myProfile.menuKey,
                    navInfo: Jl.myProfile
                }, c, {
                    route: e.profilePageUrl || Jl.myProfile.route,
                    isVisible: !t.isHideProfileMenu
                })), o().createElement(Cm, Zc({
                    key: "menu-header-my-bookings-menu-old"
                }, c, {
                    isNewMenu: !1,
                    isVisible: p
                })), o().createElement(Cm, Zc({
                    key: "menu-header-my-bookings-menu"
                }, c, {
                    isNewMenu: !0,
                    isVisible: m
                })), o().createElement(Sm, Zc({
                    key: Jl.hotelSubMenu.menuKey,
                    navInfo: Jl.hotelSubMenu
                }, c, {
                    isVisible: m && f
                })), o().createElement(Sm, Zc({
                    key: Jl.flightsSubMenu.menuKey,
                    navInfo: Jl.flightsSubMenu
                }, c, {
                    isVisible: m
                })), o().createElement(ec, Zc({
                    key: Jl.inbox.menuKey,
                    navInfo: Jl.inbox
                }, c, {
                    isVisible: d
                })), o().createElement(ec, Zc({
                    key: Jl.reviews.menuKey,
                    navInfo: Jl.reviews
                }, c, {
                    isVisible: d
                })), o().createElement(ec, Zc({
                    key: Jl.savedCards.menuKey,
                    navInfo: Jl.savedCards
                }, c, {
                    isVisible: d
                })), o().createElement(ec, Zc({
                    key: Jl.agodaCash.menuKey,
                    navInfo: Jl.agodaCash
                }, c, {
                    isVisible: t.hasAgodaCash
                })), o().createElement(ec, Zc({
                    key: Jl.cashbackRewards.menuKey,
                    navInfo: Jl.cashbackRewards
                }, c, {
                    isVisible: t.showCashbackRewards
                })), o().createElement(ec, Zc({
                    key: Jl.agodaVip.menuKey,
                    navInfo: Jl.agodaVip
                }, c, {
                    isVisible: t.showAgodaVip
                })), o().createElement(Gc, Zc({
                    key: "points-max-menu"
                }, $c(e, c)))], Jc((null === (s = e.customRenderers) || void 0 === s ? void 0 : s.renderBreadcrumbs) ? [e.customRenderers.renderBreadcrumbs()] : []), !1), [o().createElement(l.Divider, {
                    key: "menu-header-information-divider",
                    space: "NONE",
                    m: "NONE"
                }), o().createElement(Vo, {
                    key: "menu-header-information",
                    title: n(76338)
                }), o().createElement(ec, Zc({
                    key: Jl.downloadApp.menuKey,
                    navInfo: Jl.downloadApp
                }, c, {
                    isVisible: t.isDownloadAppVisible
                })), o().createElement(ec, Zc({
                    key: Jl.aboutUs.menuKey,
                    navInfo: Jl.aboutUs
                }, c, {
                    isVisible: t.showAboutUs
                })), o().createElement(ec, Zc({
                    key: Jl.helpCenter.menuKey,
                    navInfo: Jl.helpCenter
                }, c)), o().createElement(ec, Zc({
                    key: Jl.faq.menuKey,
                    navInfo: Jl.faq
                }, c)), o().createElement(ec, Zc({
                    key: Jl.privacyPolicy.menuKey,
                    navInfo: Jl.privacyPolicy
                }, c)), o().createElement(ec, Zc({
                    key: Jl.ccpaPolicy.menuKey,
                    navInfo: Jl.ccpaPolicy
                }, c, {
                    isVisible: t.isCcpaPolicyVisible
                })), o().createElement(ec, Zc({
                    key: Jl.cookiePolicy.menuKey,
                    navInfo: Jl.cookiePolicy
                }, c)), o().createElement(ec, Zc({
                    key: Jl.termsOfUse.menuKey,
                    navInfo: Jl.termsOfUse
                }, c)), o().createElement(ec, Zc({
                    key: Jl.manageCookieSetting.menuKey,
                    navInfo: Jl.manageCookieSetting
                }, c)), o().createElement(ec, Zc({
                    key: Jl.chinaLicense.menuKey,
                    navInfo: Jl.chinaLicense
                }, c, {
                    isVisible: t.isChineseEnabled
                }))], !1)
            }, tu = n(1143), nu = n.n(tu);
            !function(e) {
                e[e.Suggested = 1] = "Suggested",
                e[e.NotSuggested = 2] = "NotSuggested"
            }(Kc || (Kc = {}));
            var ru, iu = function() {
                return iu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                iu.apply(this, arguments)
            }, au = o().memo((function(e) {
                var t = e.selectedCurrency.id === e.currency.iD
                  , n = e.currency.iD
                  , r = e.getBehaviorManager().isEnabled(Mc)
                  , i = o().useCallback((function() {
                    e.analytics.custom(Rt.Click, {
                        page_type_id: Ys.PriceDisplay,
                        action_element_name: Dr,
                        suggestion_type: e.currency.isSuggested ? Kc.Suggested : Kc.NotSuggested,
                        action_element_value: e.currency.code
                    }),
                    e.onClick()
                }
                ), [])
                  , a = o().useCallback((function() {
                    return o().createElement(l.Box, {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }, o().createElement(l.Box, {
                        display: "flex"
                    }, o().createElement(le, {
                        variant: "heading4",
                        "data-element-name": "currency-text",
                        id: r ? n.toString() : ""
                    }, e.currency.text)))
                }
                ), [])
                  , s = o().useCallback((function() {
                    return o().createElement(l.Box, {
                        display: "flex"
                    }, o().createElement(le, {
                        variant: "heading4",
                        "data-element-name": "currency-code"
                    }, so(co(e.currency))))
                }
                ), []);
                return o().createElement(fc, {
                    renderLeftContent: a,
                    renderRightContent: s,
                    onClick: i,
                    border: pc,
                    selectable: !0,
                    isSelected: t,
                    extraAttrs: iu({
                        "data-objectid": "".concat(e.currency.iD),
                        "data-element-name": "mob-currency"
                    }, r && {
                        role: "radio",
                        "aria-checked": "".concat(t),
                        "aria-labelledby": "".concat(n)
                    })
                })
            }
            )), ou = function() {
                return ou = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                ou.apply(this, arguments)
            }, lu = o().memo((function(e) {
                var t = o().useMemo((function() {
                    return e.priceViews.map((function(t) {
                        return o().createElement(su, ou({
                            key: t.id,
                            onClick: (n = t.id,
                            function() {
                                e.onPriceViewSelected(n),
                                e.closeOverlay && e.closeOverlay()
                            }
                            )
                        }, t, {
                            selectedId: e.selectedPriceViewId,
                            analytics: e.analytics,
                            getBehaviorManager: e.getBehaviorManager
                        }));
                        var n
                    }
                    ))
                }
                ), [e.selectedPriceViewId, e.priceViews])
                  , n = o().useMemo((function() {
                    return e.currencies.map((function(t) {
                        return o().createElement(au, {
                            key: t.code,
                            code: t.code,
                            onClick: (n = co(t),
                            function() {
                                e.onCurrencySelected(n),
                                e.closeOverlay && e.closeOverlay()
                            }
                            ),
                            selectedCurrency: e.selectedCurrency,
                            currency: t,
                            analytics: e.analytics,
                            getBehaviorManager: e.getBehaviorManager
                        });
                        var n
                    }
                    ))
                }
                ), [e.currencies, e.selectedCurrency]);
                return o().createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column",
                    overflowX: "hidden",
                    overflowY: "auto",
                    "data-element-name": "currency-overlay-content"
                }, o().createElement(l.Box, {
                    as: "div",
                    "data-section": "PriceView"
                }, e.getBehaviorManager().isEnabled(Mc) ? o().createElement(s.Box, {
                    ps: "m",
                    pe: "m",
                    pt: "s",
                    pb: "s",
                    backgroundColor: "neutral.2",
                    textAlign: "start"
                }, o().createElement(s.Typography, {
                    variant: "body-2"
                }, e.priceViewHeaderText)) : o().createElement(l.Box, {
                    ps: "M",
                    pe: "M",
                    pt: "S",
                    pb: "S",
                    background: 50,
                    "data-element-name": "price-view-header-text"
                }, o().createElement(le, {
                    variant: "body2"
                }, e.priceViewHeaderText)), o().createElement("div", {
                    "data-element-name": "price-view-items-container"
                }, o().createElement(xc, {
                    variant: "vertical",
                    listStyle: "none"
                }, t))), e.getBehaviorManager().isEnabled(Mc) ? o().createElement(s.Box, {
                    ps: "m",
                    pe: "m",
                    pt: "s",
                    pb: "s",
                    backgroundColor: "neutral.2",
                    "data-element-name": "all-currencies-header-text",
                    "data-section": "CurrencySearch",
                    onClick: e.onClickSearchCurrency,
                    as: "button",
                    "aria-label": e.chooseCurrencyText
                }, o().createElement(s.Box, {
                    pb: "m",
                    textAlign: "start"
                }, o().createElement(s.Typography, {
                    variant: "body-2"
                }, e.chooseCurrencyText)), o().createElement(s.Box, {
                    as: "button",
                    width: "100%",
                    backgroundColor: "neutral.2"
                }, o().createElement(s.Box, {
                    backgroundColor: "neutral.1",
                    p: "s",
                    borderRadius: "xs",
                    display: "flex",
                    alignItems: "center"
                }, o().createElement(s.Icon, {
                    id: "SearchSymbolFill",
                    size: "m"
                }), o().createElement(s.Box, {
                    mx: "s"
                }, o().createElement(s.Typography, {
                    variant: "body-2"
                }, e.searchPlaceHolderText))))) : o().createElement(l.Box, {
                    ps: "M",
                    pe: "M",
                    pt: "S",
                    pb: "S",
                    background: 50,
                    "data-element-name": "all-currencies-header-text",
                    "data-section": "CurrencySearch"
                }, o().createElement(l.Box, {
                    pb: "M"
                }, o().createElement(le, {
                    variant: "body2"
                }, e.chooseCurrencyText)), o().createElement(l.Box, {
                    background: 50,
                    onClick: e.onClickSearchCurrency
                }, o().createElement(l.Box, {
                    background: 0,
                    p: "S",
                    radius: "XS",
                    display: "flex",
                    alignItems: "center"
                }, o().createElement(nu(), {
                    size: "M"
                }), o().createElement(l.Box, {
                    mx: "S"
                }, o().createElement(le, {
                    variant: "body2"
                }, e.searchPlaceHolderText))))), o().createElement(l.Box, {
                    "data-section": "AllCurrency",
                    "data-element-name": "all-currencies-container"
                }, o().createElement(xc, {
                    variant: "vertical",
                    listStyle: "none"
                }, n)))
            }
            )), su = o().memo((function(e) {
                var t = "".concat(e.id, "-currency-type")
                  , n = e.getBehaviorManager().isEnabled(Mc)
                  , r = e.id === e.selectedId
                  , i = o().useCallback((function() {
                    e.analytics.custom(Rt.Click, {
                        action_element_name: Rr,
                        page_type_id: Ys.PriceDisplay
                    }),
                    e.onClick()
                }
                ), [])
                  , a = o().useCallback((function() {
                    return o().createElement(l.Box, {
                        display: "flex",
                        flexDirection: "column"
                    }, o().createElement(l.Box, {
                        display: "flex",
                        flexDirection: "row",
                        "data-element-name": "price-view-item-name-container"
                    }, o().createElement(l.Box, {
                        me: "M",
                        "data-element-name": "price-view-item-icon"
                    }, e.icon), o().createElement(le, {
                        variant: "heading4",
                        id: n ? t : "",
                        "data-element-name": "price-view-item-name"
                    }, e.name)), o().createElement(le, {
                        variant: "body2",
                        "data-element-name": "price-view-item-description"
                    }, e.description))
                }
                ), []);
                return o().createElement(fc, {
                    renderLeftContent: a,
                    selectable: !0,
                    isSelected: r,
                    onClick: i,
                    border: pc,
                    extraAttrs: ou({
                        "data-objectid": "".concat(e.id),
                        "data-element-name": "mob-price-type"
                    }, n && {
                        role: "radio",
                        "aria-checked": "".concat(r),
                        "aria-labelledby": t
                    })
                })
            }
            )), cu = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, uu = u().input.withConfig({
                displayName: "BorderlessInputstyled__BorderlessInput",
                componentId: "sc-1sw24dn-0"
            })(ru || (ru = cu(["\n    border: 1px solid transparent;\n    &[data-empty='false'],\n    &:valid,\n\n    &:focus {\n        outline: 0;\n    }\n\n    &[data-empty='false'] + label,\n    &:valid + label,\n    &:focus + label {\n        transform: translate3d(0, -8px, 0);\n        font-size: 11px;\n\n        &.modern {\n            transform: translate3d(0, -12px, 0);\n        }\n    }\n    width: 100%;\n"], ["\n    border: 1px solid transparent;\n    &[data-empty='false'],\n    &:valid,\n\n    &:focus {\n        outline: 0;\n    }\n\n    &[data-empty='false'] + label,\n    &:valid + label,\n    &:focus + label {\n        transform: translate3d(0, -8px, 0);\n        font-size: 11px;\n\n        &.modern {\n            transform: translate3d(0, -12px, 0);\n        }\n    }\n    width: 100%;\n"]))), du = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, mu = o().memo((function(e) {
                var t = du(o().useState(""), 2)
                  , n = t[0]
                  , r = t[1]
                  , i = o().useCallback((function(e) {
                    var t = e.target.value;
                    r(t.toLowerCase())
                }
                ), [n])
                  , a = o().useMemo((function() {
                    return e.currencies.filter((function(e) {
                        if (n.length > 0) {
                            var t = co(e);
                            return t.name.toLowerCase().includes(n) || t.code.toLowerCase().includes(n) || t.symbol.toLowerCase().includes(n)
                        }
                        return !0
                    }
                    )).map((function(t) {
                        return o().createElement(au, {
                            key: t.code,
                            code: t.code,
                            onClick: function() {
                                return n = co(t),
                                e.onCurrencySelected(n),
                                void e.closeOverlay();
                                var n
                            },
                            selectedCurrency: e.selectedCurrency,
                            currency: t,
                            analytics: e.analytics,
                            getBehaviorManager: e.getBehaviorManager
                        })
                    }
                    ))
                }
                ), [e.currencies, e.selectedCurrency, n]);
                return o().createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column",
                    overflowX: "hidden",
                    overflowY: "auto",
                    "data-element-name": "currency-overlay-content"
                }, o().createElement(l.Box, {
                    px: "M",
                    py: "S",
                    background: 50,
                    "data-element-name": "all-currencies-header-text"
                }, e.isAccomAllyHeaderMobile ? o().createElement(s.Input, {
                    value: n,
                    label: e.searchPlaceHolderText,
                    clearLabel: e.clearText,
                    onChange: function(e) {
                        r(e.currentTarget.value.toLowerCase())
                    },
                    leadingAsset: {
                        id: "SearchSymbolFill"
                    }
                }) : o().createElement(l.Box, {
                    display: "flex",
                    background: 0,
                    p: "S",
                    radius: "XS",
                    alignItems: "center"
                }, o().createElement(nu(), {
                    size: "M"
                }), o().createElement(l.Box, {
                    display: "flex",
                    width: "100%",
                    mx: "S"
                }, o().createElement(uu, {
                    onChange: i,
                    placeholder: e.searchPlaceHolderText
                })))), o().createElement("div", {
                    "data-element-name": "all-currencies-container"
                }, o().createElement(xc, {
                    variant: "vertical",
                    listStyle: "none"
                }, a)))
            }
            )), pu = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, fu = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, a = t.length; i < a; i++)
                        !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }, yu = n(5513), gu = n.n(yu), hu = function(e, t, n) {
                if (t)
                    return [];
                var r = {
                    id: qa.TotalPricePerNight,
                    icon: o().createElement(gu(), {
                        size: "M"
                    }),
                    name: e(76364),
                    description: e(76365)
                }
                  , i = {
                    id: qa.BasePricePerNight,
                    icon: o().createElement(gu(), {
                        size: "M"
                    }),
                    name: e(83128),
                    description: e(83129)
                };
                return n ? [r] : [r, i]
            }, vu = function() {
                return vu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                vu.apply(this, arguments)
            }, bu = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, wu = o().createElement(Zl, {
                icon: Bo()
            }), Cu = vu(vu({}, Jl.currency), {
                icon: wu
            }), xu = o().memo((function(e) {
                var t = bu(o().useState([]), 2)
                  , n = t[0]
                  , r = t[1]
                  , i = bu(o().useState(!1), 2)
                  , l = i[0]
                  , s = i[1]
                  , c = o().useCallback((function() {
                    return o().createElement(le, {
                        variant: "heading4",
                        color: 800
                    }, so(e.selectedCurrency))
                }
                ), [e.selectedCurrency])
                  , u = o().useCallback((function(t) {
                    return e.onCurrencySelected(t)
                }
                ), [])
                  , d = o().useCallback((function(t) {
                    return e.onPriceViewSelected && e.onPriceViewSelected(t)
                }
                ), []);
                o().useEffect((function() {
                    wc(e.menuState) && 0 === n.length && eo(e.languageId, e.logger).then((function(e) {
                        if (e) {
                            var t = function() {
                                for (var e = [], t = 0; t < arguments.length; t++)
                                    e[t] = arguments[t];
                                return e.reduce((function(e, t) {
                                    return fu(fu([], pu(e), !1), pu(t), !1)
                                }
                                ), []).sort((function(e, t) {
                                    return e.text.toLocaleLowerCase() < t.text.toLocaleLowerCase() ? -1 : 1
                                }
                                )).reduce((function(e, t) {
                                    return 0 == e.filter((function(e) {
                                        return e.iD == t.iD
                                    }
                                    )).length ? fu(fu([], pu(e), !1), [t], !1) : e
                                }
                                ), [])
                            }(e.allCurrencyList, e.suggestedList, e.topCurrencyList);
                            r(t)
                        }
                    }
                    ))
                }
                ), [e.menuState]);
                var m = o().useCallback((function() {
                    return s(!1)
                }
                ), [])
                  , p = o().useCallback((function() {
                    e.analytics.custom(Rt.Click, {
                        page_type_id: Ys.PriceDisplay,
                        action_element_name: Fr
                    }),
                    s(!0)
                }
                ), [])
                  , f = (0,
                a.useCallback)((function() {
                    e.analytics.custom(Rt.Click, {
                        action_element_name: Br,
                        page_type_id: Ys.PriceDisplay
                    })
                }
                ), []);
                if (!0 === e.hideCurrencyChange)
                    return null;
                var y = {
                    align: "center",
                    title: o().createElement(le, {
                        short: !1,
                        variant: "heading3"
                    }, e.cms(146064))
                };
                return o().createElement(o().Fragment, null, o().createElement(oc, vu({}, e, {
                    key: To.Currency,
                    pageTypeId: Ys.PriceDisplay,
                    navInfo: Cu,
                    renderSideContent: c,
                    overlayContent: function(t) {
                        return o().createElement(lu, {
                            chooseCurrencyText: e.cms(146063),
                            priceViewHeaderText: e.cms(76363),
                            searchPlaceHolderText: e.cms(146062),
                            languageId: e.languageId,
                            selectedCurrency: e.selectedCurrency,
                            selectedPriceViewId: e.selectedPriceViewId,
                            priceViews: hu(e.cms, e.menuVisibility.hidePriceView || !1, e.showOnlyTotalPerNightPriceView),
                            currencies: n,
                            onCurrencySelected: u,
                            onPriceViewSelected: d,
                            closeOverlay: t,
                            onClickSearchCurrency: p,
                            analytics: e.analytics,
                            getBehaviorManager: e.getBehaviorManager
                        })
                    },
                    headerProps: {
                        align: "center",
                        noBackground: !0
                    },
                    onCloseOverlay: f
                })), o().createElement(ac, {
                    "data-element-name": "mob-currency-search",
                    open: l,
                    dock: "right",
                    fill: "full-screen",
                    variant: "drawer",
                    closeButton: {
                        position: "inside"
                    },
                    onClose: m,
                    header: y
                }, o().createElement(mu, {
                    currencies: n,
                    selectedCurrency: e.selectedCurrency,
                    searchPlaceHolderText: e.cms(146062),
                    onCurrencySelected: u,
                    closeOverlay: m,
                    analytics: e.analytics,
                    isAccomAllyHeaderMobile: e.isAccomAllyHeaderMobile,
                    clearText: e.cms(264787),
                    getBehaviorManager: e.getBehaviorManager
                })))
            }
            ));
            xu.displayName = "CurrencyMenu";
            var Su = new Ke.ClientSideBehavior("AddSunriseLinkBehavior",$e.whiteLabelId.equal(h.Japanican).build(),Ye.FallbackStrategy.Disable)
              , ku = new Ke.ClientSideBehavior("AddSpecialFeaturesLinkBehavior",$e.whiteLabelId.equal(h.Japanican).and.experiment.contains("JTBFP-496").build(),Ye.FallbackStrategy.Disable)
              , Mu = function() {
                return Mu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Mu.apply(this, arguments)
            }
              , Nu = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , Eu = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, a = t.length; i < a; i++)
                        !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
              , Pu = function() {
                return Pu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Pu.apply(this, arguments)
            }
              , Vu = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , Tu = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, a = t.length; i < a; i++)
                        !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                        r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
              , Ou = function() {
                return Ou = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ou.apply(this, arguments)
            }
              , Iu = function() {
                return Iu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Iu.apply(this, arguments)
            }
              , zu = function(e) {
                if (!B(Yr.SsoPartnerLinks))
                    return null;
                var t = A(Yr.SsoPartnerLinks)
                  , n = null != (null == t ? void 0 : t.links) && e.linkId in t.links ? t.links[e.linkId] : e.defaultLink;
                return n ? o().createElement(ec, Iu({}, e, {
                    route: n
                })) : null
            };
            zu.displayName = "MenuNavigationWithPartnerLink";
            var Au, Fu, Bu = function() {
                return Bu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Bu.apply(this, arguments)
            }, Ru = function(e) {
                return Bu(Bu({}, e), {
                    icon: void 0
                })
            }, Du = function(e, t, n, r) {
                var i, a = Qs(e, n, r), s = t.isUserLoggedIn, c = t.showAccommodation;
                return [o().createElement(l.Divider, {
                    key: "menu-header-accounts-divider-1",
                    role: "separator",
                    space: "NONE",
                    m: "NONE",
                    style: {
                        padding: "8px 16px"
                    }
                }), o().createElement(Vo, {
                    key: "menu-header-travel-options",
                    title: n(151410)
                }), o().createElement(l.Box, {
                    key: "travel-options-list",
                    role: "list"
                }, o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    ariaLabel: n(252029),
                    key: Jl.hotel.menuKey,
                    navInfo: Ru(Jl.hotel)
                }, a, {
                    isVisible: c
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    ariaLabel: n(252030),
                    key: Jl.flightsInternal.menuKey,
                    navInfo: Ru(Jl.flightsInternal)
                }, a, {
                    isVisible: t.isFlightPageEnabled
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    ariaLabel: n(252031),
                    key: Jl.cars.menuKey,
                    navInfo: Ru(Jl.cars)
                }, a, {
                    isVisible: t.showCars
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    ariaLabel: n(252032),
                    key: Jl.activities.menuKey,
                    navInfo: Bu(Bu({}, Ru(Jl.activities)), {
                        route: "/activity"
                    })
                }, a, {
                    isVisible: t.showActivities
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "VISIT_CITI",
                    key: Jl.partner.menuKey,
                    navInfo: Ru(Jl.partner)
                }, a))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "VISIT_THANKYOU",
                    key: Jl.partnerLoyalty.menuKey,
                    navInfo: Ru(Jl.partnerLoyalty)
                }, a)))), o().createElement(l.Divider, {
                    key: "menu-header-settings-divider",
                    role: "separator",
                    space: "NONE",
                    m: "NONE",
                    style: {
                        padding: "8px 16px"
                    }
                }), o().createElement(Vo, {
                    key: "menu-header-settings",
                    title: n(49354)
                }), o().createElement(l.Box, {
                    key: "settings-list",
                    role: "list"
                }, o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(Vc, Bu({
                    key: "language-menu"
                }, Oc(e, a), {
                    navInfo: Ru(Jl.language),
                    renderSideContent: (i = e.selectedLanguage.name,
                    function() {
                        return o().createElement(le, {
                            variant: "heading4",
                            as: "span",
                            color: 800,
                            pr: "XS"
                        }, i)
                    }
                    )
                })))), o().createElement(l.Divider, {
                    key: "menu-header-accounts-divider-2",
                    role: "separator",
                    space: "NONE",
                    m: "NONE",
                    style: {
                        padding: "8px 16px"
                    }
                }), o().createElement(Vo, {
                    key: "menu-header-my-account",
                    title: n(83114),
                    subTitle: n(83113),
                    onClickSubTitle: function() {
                        return e.callbacks.signOutSSO && e.callbacks.signOutSSO(!0)
                    },
                    isShowSubTitle: s,
                    dataAction: "signout"
                }), o().createElement(l.Box, {
                    key: "my-bookings-menu-text",
                    as: "span",
                    display: "flex",
                    p: "M",
                    pl: "L"
                }, o().createElement(le, {
                    role: "heading",
                    "aria-level": 1,
                    variant: "heading4",
                    color: 800
                }, n(151415))), o().createElement(l.Box, {
                    key: "booking-made-on-after-text",
                    as: "span",
                    display: "flex",
                    p: "M",
                    pl: "L",
                    pb: "L"
                }, o().createElement(le, {
                    role: "heading",
                    "aria-level": 1,
                    variant: "body2",
                    color: 800
                }, n(188118))), o().createElement(l.Box, {
                    key: "sub-menu-1",
                    as: "div",
                    role: "list",
                    "aria-label": "secondary navigation",
                    ml: "L",
                    border: {
                        width: "S",
                        direction: "left"
                    },
                    display: "flex",
                    flexDirection: "column",
                    style: {
                        gap: "16px"
                    }
                }, o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(Sm, Bu({
                    ariaLabel: n(227243),
                    key: Jl.hotelsMmb.menuKey,
                    navInfo: Jl.hotelsMmb
                }, a, {
                    isVisible: !0,
                    isMmbProductLink: !0
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(Sm, Bu({
                    ariaLabel: n(227244),
                    key: Jl.flightsMmb.menuKey,
                    navInfo: Jl.flightsMmb
                }, a, {
                    isVisible: !0,
                    isMmbProductLink: !0
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(Sm, Bu({
                    ariaLabel: n(227245),
                    key: Jl.carsMmb.menuKey,
                    navInfo: Jl.carsMmb
                }, a, {
                    isVisible: !0,
                    isMmbProductLink: !0
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(Sm, Bu({
                    ariaLabel: n(227246),
                    key: Jl.activitiesMmb.menuKey,
                    navInfo: Jl.activitiesMmb
                }, a, {
                    isVisible: !0,
                    isMmbProductLink: !0
                })))), o().createElement(l.Box, {
                    key: "booking-made-before-text",
                    as: "span",
                    display: "flex",
                    p: "XL",
                    pl: "L",
                    pb: "NONE"
                }, o().createElement(le, {
                    role: "heading",
                    "aria-level": 1,
                    variant: "body2",
                    color: 800
                }, n(151527))), o().createElement(l.Box, {
                    key: "old-bookings-list",
                    role: "list"
                }, o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "VISIT_OLD_CITI_BOOKINGS",
                    key: Jl.citiUsOldBookingMenu.menuKey,
                    navInfo: Ru(Jl.citiUsOldBookingMenu)
                }, a, {
                    isHyperlink: !0
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    key: Jl.useDifferentCard.menuKey,
                    navInfo: Ru(Jl.useDifferentCard)
                }, a)))), o().createElement(l.Divider, {
                    key: "menu-header-information-divider",
                    role: "separator",
                    space: "NONE",
                    m: "NONE",
                    style: {
                        padding: "8px 16px"
                    }
                }), o().createElement(Vo, {
                    key: "menu-header-information",
                    title: n(76338)
                }), o().createElement(l.Box, {
                    key: "information-list",
                    role: "list"
                }, o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "PRIVACY_CITI",
                    key: Jl.citiPrivacy.menuKey,
                    navInfo: Ru(Jl.citiPrivacy)
                }, a, {
                    defaultLink: n(180379)
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "PRIVACY_TY",
                    key: Jl.thankyouPrivacy.menuKey,
                    navInfo: Ru(Jl.thankyouPrivacy)
                }, a))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    key: Jl.caPrivacyHub.menuKey,
                    navInfo: Ru(Jl.caPrivacyHub)
                }, a, {
                    route: n(180381)
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "TNC_CITI",
                    key: Jl.citiTnc.menuKey,
                    navInfo: Ru(Jl.citiTnc)
                }, a, {
                    defaultLink: n(180383)
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "TNC_TY",
                    key: Jl.thankYouTnc.menuKey,
                    navInfo: Ru(Jl.thankYouTnc)
                }, a, {
                    defaultLink: n(180382)
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    key: Jl.rocketTnc.menuKey,
                    navInfo: Ru(Jl.rocketTnc)
                }, a))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(ec, Bu({
                    key: Jl.contactAndFaq.menuKey,
                    navInfo: Ru(Jl.contactAndFaq)
                }, a))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "NOTICE",
                    key: Jl.noticeAtCollection.menuKey,
                    navInfo: Ru(Jl.noticeAtCollection)
                }, a, {
                    defaultLink: n(180385)
                }))), o().createElement(l.Box, {
                    role: "listitem"
                }, o().createElement(zu, Bu({
                    featureConfigs: e.featureConfigs,
                    linkId: "SECURITY",
                    key: Jl.security.menuKey,
                    navInfo: Ru(Jl.security)
                }, a, {
                    defaultLink: n(180386)
                }))))]
            }, Lu = function() {
                return Lu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Lu.apply(this, arguments)
            }, _u = function() {
                return _u = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                _u.apply(this, arguments)
            }, ju = function() {
                return ju = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                ju.apply(this, arguments)
            }, qu = function() {
                return qu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                qu.apply(this, arguments)
            }, Hu = ((Au = {})[h.Agoda] = {
                menu: eu
            },
            Au[h.Japanican] = {
                menu: function(e, t, n, r) {
                    var i, a = Qs(e, n, r);
                    return Eu(Eu([o().createElement(Vo, {
                        key: "menu-header-settings",
                        title: n(49354)
                    }), o().createElement(Vc, Mu({
                        key: "language-menu"
                    }, Oc(e, a))), o().createElement(xu, Mu({
                        key: "currency-menu"
                    }, zc(e, t, a))), o().createElement(l.Divider, {
                        key: "menu-header-accounts-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-my-account",
                        title: n(83114),
                        subTitle: n(83113),
                        onClickSubTitle: e.callbacks.signOut,
                        isShowSubTitle: t.isUserLoggedIn,
                        dataAction: "signout"
                    }), o().createElement(ec, Mu({
                        key: Jl.hotel.menuKey,
                        navInfo: Jl.hotel
                    }, a, {
                        isVisible: t.showAccommodation
                    })), o().createElement(ec, Mu({
                        key: Jl.coupons.menuKey,
                        navInfo: Jl.coupons
                    }, a)), o().createElement(ec, Mu({
                        key: Jl.myProfile.menuKey,
                        navInfo: Jl.myProfile
                    }, a, {
                        route: e.profilePageUrl || Jl.myProfile.route,
                        isVisible: !t.isHideProfileMenu
                    })), o().createElement(ec, Mu({
                        key: Jl.japanicanMyBookings.menuKey,
                        navInfo: Jl.japanicanMyBookings
                    }, a)), e.getBehaviorManager().isEnabled(Su) ? o().createElement(ec, Mu({
                        key: Jl.japanicanSunrise.menuKey,
                        navInfo: Jl.japanicanSunrise
                    }, a)) : null, e.getBehaviorManager().isEnabled(ku) ? o().createElement(ec, Mu({
                        key: Jl.japanicanSpecialFeatures.menuKey,
                        navInfo: Jl.japanicanSpecialFeatures
                    }, a)) : null], Nu((null === (i = e.customRenderers) || void 0 === i ? void 0 : i.renderBreadcrumbs) ? [e.customRenderers.renderBreadcrumbs()] : []), !1), [o().createElement(l.Divider, {
                        key: "menu-header-information-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-information",
                        title: n(76338)
                    }), o().createElement(ec, Mu({
                        key: Jl.customerSupport.menuKey,
                        navInfo: Jl.customerSupport
                    }, a)), o().createElement(ec, Mu({
                        key: Jl.japanicanFaq.menuKey,
                        navInfo: Jl.japanicanFaq
                    }, a)), o().createElement(ec, Mu({
                        key: Jl.siteMaintenance.menuKey,
                        navInfo: Jl.siteMaintenance
                    }, a)), o().createElement(ec, Mu({
                        key: Jl.japanicanTermsOfUse.menuKey,
                        navInfo: Jl.japanicanTermsOfUse
                    }, a)), o().createElement(ec, Mu({
                        key: Jl.japanicanPrivacyPolicy.menuKey,
                        navInfo: Jl.japanicanPrivacyPolicy
                    }, a)), o().createElement(ec, Mu({
                        key: Jl.ccpaPolicy.menuKey,
                        navInfo: Jl.ccpaPolicy
                    }, a, {
                        isVisible: t.isCcpaPolicyVisible
                    }))], !1)
                }
            },
            Au[h.Rurubu] = {
                menu: function(e, t, n, r) {
                    var i, a = Qs(e, n, r), s = t.isUserLoggedIn, c = t.showAccommodation;
                    return Tu(Tu([o().createElement(Vo, {
                        key: "menu-header-my-account",
                        title: n(83114),
                        subTitle: n(83113),
                        onClickSubTitle: e.callbacks.signOut,
                        isShowSubTitle: s,
                        dataAction: "signout"
                    }), o().createElement(ec, Pu({
                        key: Jl.hotel.menuKey,
                        navInfo: Jl.hotel
                    }, a, {
                        isVisible: c
                    })), o().createElement(ec, Pu({
                        key: Jl.coupons.menuKey,
                        navInfo: Jl.coupons
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.recommendedFeature.menuKey,
                        navInfo: Jl.recommendedFeature
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.domesticTour.menuKey,
                        navInfo: Jl.domesticTour
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.myProfile.menuKey,
                        navInfo: Jl.myProfile
                    }, a, {
                        route: e.profilePageUrl || Jl.myProfile.route,
                        isVisible: !t.isHideProfileMenu
                    })), o().createElement(ec, Pu({
                        key: Jl.rurubuMyBookings.menuKey,
                        navInfo: Jl.rurubuMyBookings
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.remainingPoints.menuKey,
                        navInfo: Jl.remainingPoints
                    }, a, {
                        isVisible: s
                    }))], Vu((null === (i = e.customRenderers) || void 0 === i ? void 0 : i.renderBreadcrumbs) ? [e.customRenderers.renderBreadcrumbs()] : []), !1), [o().createElement(l.Divider, {
                        key: "menu-header-information-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-information",
                        title: n(76338)
                    }), o().createElement(ec, Pu({
                        key: Jl.rurubuContactUs.menuKey,
                        navInfo: Jl.rurubuContactUs
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.rurubuFaq.menuKey,
                        navInfo: Jl.rurubuFaq
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.travelAgencyContract.menuKey,
                        navInfo: Jl.travelAgencyContract
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.travelConditionsLetter.menuKey,
                        navInfo: Jl.travelConditionsLetter
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.rurubuTermsOfService.menuKey,
                        navInfo: Jl.rurubuTermsOfService
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.rurubuPrivacyPolicy.menuKey,
                        navInfo: Jl.rurubuPrivacyPolicy
                    }, a)), o().createElement(ec, Pu({
                        key: Jl.siteMaintenance.menuKey,
                        navInfo: Jl.siteMaintenance
                    }, a))], !1)
                }
            },
            Au[h.TMobile] = {
                menu: function(e, t, n, r) {
                    var i = Qs(e, n, r)
                      , a = t.isUserLoggedIn;
                    return [o().createElement(Vo, {
                        key: "menu-header-settings",
                        title: n(49354)
                    }), o().createElement(Vc, Ou({
                        key: "language-menu"
                    }, Oc(e, i))), o().createElement(xu, Ou({
                        key: "currency-menu"
                    }, zc(e, t, i))), o().createElement(l.Divider, {
                        key: "menu-header-accounts-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-my-account",
                        title: n(83114),
                        subTitle: n(83113),
                        onClickSubTitle: e.callbacks.signOut,
                        isShowSubTitle: a,
                        dataAction: "signout"
                    }), o().createElement(ec, Ou({
                        key: Jl.flightsInternal.menuKey,
                        navInfo: Jl.flightsInternal
                    }, i, {
                        isVisible: t.isFlightPageEnabled
                    })), o().createElement(l.Divider, {
                        key: "menu-header-about-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-about",
                        title: n(133107)
                    }), o().createElement(ec, Ou({
                        key: Jl.rocketTravelTermsOfUse.menuKey,
                        navInfo: Jl.rocketTravelTermsOfUse
                    }, i)), o().createElement(ec, Ou({
                        key: Jl.rocketTravelPrivacyPolicy.menuKey,
                        navInfo: Jl.rocketTravelPrivacyPolicy
                    }, i)), o().createElement(ec, Ou({
                        key: Jl.tMobilePrivacyPolicy.menuKey,
                        navInfo: Jl.tMobilePrivacyPolicy
                    }, i)), o().createElement(ec, Ou({
                        key: Jl.tMobilePrivacyCenter.menuKey,
                        navInfo: Jl.tMobilePrivacyCenter
                    }, i)), o().createElement(l.Divider, {
                        key: "menu-header-information-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-resources",
                        title: n(133108)
                    }), o().createElement(ec, Ou({
                        key: Jl.contactRocketTravel.menuKey,
                        navInfo: Jl.contactRocketTravel
                    }, i))]
                }
            },
            Au[h.CitiUS] = {
                menu: Du
            },
            Au[h.CitiUSUat1] = {
                menu: Du
            },
            Au[h.CitiUSUat2] = {
                menu: Du
            },
            Au[h.CitiUSUat3] = {
                menu: Du
            },
            Au[h.LotteDFS] = {
                menu: function(e, t, n, r) {
                    var i, a = Qs(e, n, r), s = t.isUserLoggedIn, c = !!e.isNewBookingMenu && t.isShowMyBookings, u = !e.isNewBookingMenu && t.isShowMyBookings, d = t.showAccommodation, m = c && null !== (i = e.experiments.shouldUseNewMpMmmbSubMenu) && void 0 !== i && i;
                    return [o().createElement(Vo, {
                        key: "menu-header-settings",
                        title: n(49354)
                    }), o().createElement(Vc, Lu({
                        key: "language-menu"
                    }, Oc(e, a))), o().createElement(xu, Lu({
                        key: "currency-menu"
                    }, zc(e, t, a))), o().createElement(l.Divider, {
                        key: "menu-header-accounts-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-my-account",
                        title: n(83114),
                        subTitle: n(83113),
                        onClickSubTitle: e.callbacks.signOut,
                        isShowSubTitle: s,
                        dataAction: "signout"
                    }), o().createElement(ec, Lu({
                        key: Jl.hotel.menuKey,
                        navInfo: Jl.hotel
                    }, a, {
                        isVisible: d
                    })), o().createElement(Cm, Lu({
                        key: "menu-header-my-bookings-menu-old"
                    }, a, {
                        isNewMenu: !1,
                        isVisible: u
                    })), o().createElement(Cm, Lu({
                        key: "menu-header-my-bookings-menu"
                    }, a, {
                        isNewMenu: !0,
                        isVisible: c
                    })), o().createElement(Sm, Lu({
                        key: Jl.flightsSubMenu.menuKey,
                        navInfo: Jl.flightsSubMenu
                    }, a, {
                        isVisible: m
                    })), o().createElement(l.Divider, {
                        key: "menu-header-information-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-information",
                        title: n(76338)
                    }), o().createElement(ec, Lu({
                        key: Jl.helpCenter.menuKey,
                        navInfo: Jl.helpCenter
                    }, a)), o().createElement(ec, Lu({
                        key: Jl.privacyPolicy.menuKey,
                        navInfo: Jl.privacyPolicy
                    }, a)), o().createElement(ec, Lu({
                        key: Jl.ccpaPolicy.menuKey,
                        navInfo: Jl.ccpaPolicy
                    }, a, {
                        isVisible: t.isCcpaPolicyVisible
                    })), o().createElement(ec, Lu({
                        key: Jl.cookiePolicy.menuKey,
                        navInfo: Jl.cookiePolicy
                    }, a)), o().createElement(ec, Lu({
                        key: Jl.termsOfUse.menuKey,
                        navInfo: Jl.termsOfUse
                    }, a))]
                }
            },
            Au[h.ClubTravel] = {
                menu: function(e, t, n, r) {
                    var i = Qs(e, n, r)
                      , a = _c(e.culture, e.currency)
                      , s = t.isUserLoggedIn
                      , c = !!e.isNewBookingMenu && t.isShowMyBookings
                      , u = !e.isNewBookingMenu && t.isShowMyBookings
                      , d = t.showAccommodation
                      , m = o().useCallback((function() {
                        return o().createElement(Xc, {
                            text: n(98517)
                        })
                    }
                    ), []);
                    return [o().createElement(Vo, {
                        key: "menu-header-settings",
                        title: n(49354)
                    }), o().createElement(Vc, _u({
                        key: "language-menu"
                    }, Oc(e, i))), o().createElement(xu, _u({
                        key: "currency-menu"
                    }, zc(e, t, i))), o().createElement(l.Divider, {
                        key: "menu-header-accounts-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-my-account",
                        title: n(83114),
                        subTitle: n(83113),
                        onClickSubTitle: function() {
                            return e.callbacks.signOutSSO && e.callbacks.signOutSSO(!0)
                        },
                        isShowSubTitle: s,
                        dataAction: "signout"
                    }), o().createElement(ec, _u({
                        key: Jl.hotel.menuKey,
                        navInfo: Jl.hotel
                    }, i, {
                        isVisible: d
                    })), o().createElement(ec, _u({
                        key: Jl.flightsInternal.menuKey,
                        navInfo: Jl.flightsInternal
                    }, i, {
                        isVisible: t.isFlightPageEnabled,
                        renderSideContent: m
                    })), o().createElement(ec, _u({
                        key: Jl.flights.menuKey,
                        navInfo: Jl.flights
                    }, i, {
                        isVisible: t.isFlightPageNotEnabled,
                        renderSideContent: m,
                        route: a
                    })), o().createElement(Cm, _u({
                        key: "menu-header-my-bookings-menu-old"
                    }, i, {
                        isNewMenu: !1,
                        isVisible: u
                    })), o().createElement(Cm, _u({
                        key: "menu-header-my-bookings-menu"
                    }, i, {
                        isNewMenu: !0,
                        isVisible: c
                    })), o().createElement(Sm, _u({
                        key: Jl.hotelSubMenu.menuKey,
                        navInfo: Jl.hotelSubMenu
                    }, i, {
                        isVisible: c && d
                    })), o().createElement(Sm, _u({
                        key: Jl.flightsSubMenu.menuKey,
                        navInfo: Jl.flightsSubMenu
                    }, i, {
                        isVisible: c
                    })), o().createElement(l.Divider, {
                        key: "menu-header-information-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-information",
                        title: n(76338)
                    }), o().createElement(ec, _u({
                        key: Jl.helpCenter.menuKey,
                        navInfo: Jl.helpCenter
                    }, i)), o().createElement(ec, _u({
                        key: Jl.privacyPolicy.menuKey,
                        navInfo: Jl.privacyPolicy
                    }, i)), o().createElement(ec, _u({
                        key: Jl.cookiePolicy.menuKey,
                        navInfo: Jl.cookiePolicy
                    }, i)), o().createElement(ec, _u({
                        key: Jl.termsOfUse.menuKey,
                        navInfo: Jl.termsOfUse
                    }, i))]
                }
            },
            Au[h.ANA] = {
                menu: function(e, t, n, r) {
                    var i, a = Qs(e, n, r), s = t.isUserLoggedIn, c = !!e.isNewBookingMenu && t.isShowMyBookings, u = !e.isNewBookingMenu && t.isShowMyBookings, d = t.showAccommodation, m = c && null !== (i = e.experiments.shouldUseNewMpMmmbSubMenu) && void 0 !== i && i;
                    return [o().createElement(Vo, {
                        key: "menu-header-settings",
                        title: n(49354)
                    }), o().createElement(Vc, qu({
                        key: "language-menu"
                    }, Oc(e, a))), o().createElement(xu, qu({
                        key: "currency-menu"
                    }, zc(e, t, a))), o().createElement(l.Divider, {
                        key: "menu-header-accounts-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-my-account",
                        title: n(83114),
                        subTitle: n(83113),
                        onClickSubTitle: e.callbacks.signOut,
                        isShowSubTitle: s,
                        dataAction: "signout"
                    }), o().createElement(ec, qu({
                        key: Jl.hotel.menuKey,
                        navInfo: Jl.hotel
                    }, a, {
                        isVisible: d
                    })), o().createElement(Cm, qu({
                        key: "menu-header-my-bookings-menu-old"
                    }, a, {
                        isNewMenu: !1,
                        isVisible: u
                    })), o().createElement(Cm, qu({
                        key: "menu-header-my-bookings-menu"
                    }, a, {
                        isNewMenu: !0,
                        isVisible: c
                    })), o().createElement(l.Box, {
                        key: "sub-menu-1",
                        as: "div",
                        role: "group",
                        "aria-label": "secondary navigation",
                        ml: "L",
                        border: {
                            width: "S",
                            direction: "left"
                        },
                        display: "flex",
                        flexDirection: "column",
                        style: {
                            gap: "16px"
                        }
                    }, o().createElement(Sm, qu({
                        ariaLabel: n(227243),
                        key: Jl.hotelSubMenu.menuKey,
                        navInfo: Jl.hotelSubMenu
                    }, a, {
                        isVisible: c,
                        isMmbProductLink: !0
                    })), o().createElement(Sm, qu({
                        ariaLabel: n(227244),
                        key: Jl.flightsSubMenu.menuKey,
                        navInfo: Jl.flightsSubMenu
                    }, a, {
                        isVisible: m,
                        isMmbProductLink: !0
                    })), o().createElement(Sm, qu({
                        ariaLabel: n(227245),
                        key: Jl.carSubMenu.menuKey,
                        navInfo: Jl.carSubMenu
                    }, a, {
                        isVisible: c,
                        isMmbProductLink: !0
                    }))), o().createElement(l.Divider, {
                        key: "menu-header-information-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-information",
                        title: n(76338)
                    }), o().createElement(ec, qu({
                        key: Jl.helpCenter.menuKey,
                        navInfo: Jl.helpCenter
                    }, a)), o().createElement(ec, qu({
                        key: Jl.privacyPolicy.menuKey,
                        navInfo: Jl.privacyPolicy
                    }, a)), o().createElement(ec, qu({
                        key: Jl.ccpaPolicy.menuKey,
                        navInfo: Jl.ccpaPolicy
                    }, a, {
                        isVisible: t.isCcpaPolicyVisible
                    })), o().createElement(ec, qu({
                        key: Jl.cookiePolicy.menuKey,
                        navInfo: Jl.cookiePolicy
                    }, a)), o().createElement(ec, qu({
                        key: Jl.termsOfUse.menuKey,
                        navInfo: Jl.termsOfUse
                    }, a))]
                }
            },
            Au[h.TestStrategicPartners] = {
                menu: function(e, t, n, r) {
                    var i = Qs(e, n, r)
                      , a = _c(e.culture, e.currency)
                      , s = t.isUserLoggedIn
                      , c = !!e.isNewBookingMenu && t.isShowMyBookings
                      , u = !e.isNewBookingMenu && t.isShowMyBookings
                      , d = t.showAccommodation
                      , m = o().useCallback((function() {
                        return o().createElement(Xc, {
                            text: n(98517)
                        })
                    }
                    ), []);
                    return [o().createElement(Vo, {
                        key: "menu-header-settings",
                        title: n(49354)
                    }), o().createElement(Vc, ju({
                        key: "language-menu"
                    }, Oc(e, i))), o().createElement(xu, ju({
                        key: "currency-menu"
                    }, zc(e, t, i))), o().createElement(l.Divider, {
                        key: "menu-header-accounts-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-my-account",
                        title: n(83114),
                        subTitle: n(83113),
                        onClickSubTitle: e.callbacks.signOut,
                        isShowSubTitle: s,
                        dataAction: "signout"
                    }), o().createElement(ec, ju({
                        key: Jl.hotel.menuKey,
                        navInfo: Jl.hotel
                    }, i, {
                        isVisible: d
                    })), o().createElement(ec, ju({
                        key: Jl.flightsInternal.menuKey,
                        navInfo: Jl.flightsInternal
                    }, i, {
                        isVisible: t.isFlightPageEnabled,
                        renderSideContent: m
                    })), o().createElement(ec, ju({
                        key: Jl.flights.menuKey,
                        navInfo: Jl.flights
                    }, i, {
                        isVisible: t.isFlightPageNotEnabled,
                        renderSideContent: m,
                        route: a
                    })), o().createElement(ec, ju({
                        key: Jl.favorites.menuKey,
                        navInfo: Jl.favorites
                    }, i, {
                        isVisible: t.showFavorites
                    })), o().createElement(ec, ju({
                        key: Jl.myProfile.menuKey,
                        navInfo: Jl.myProfile
                    }, i, {
                        route: e.profilePageUrl || Jl.myProfile.route,
                        isVisible: !t.isHideProfileMenu
                    })), o().createElement(Cm, ju({
                        key: "menu-header-my-bookings-menu-old"
                    }, i, {
                        isNewMenu: !1,
                        isVisible: u
                    })), o().createElement(Cm, ju({
                        key: "menu-header-my-bookings-menu"
                    }, i, {
                        isNewMenu: !0,
                        isVisible: c
                    })), o().createElement(l.Divider, {
                        key: "menu-header-information-divider",
                        space: "NONE",
                        m: "NONE"
                    }), o().createElement(Vo, {
                        key: "menu-header-information",
                        title: n(76338)
                    }), o().createElement(ec, ju({
                        key: Jl.helpCenter.menuKey,
                        navInfo: Jl.helpCenter
                    }, i)), o().createElement(ec, ju({
                        key: Jl.privacyPolicy.menuKey,
                        navInfo: Jl.privacyPolicy
                    }, i)), o().createElement(ec, ju({
                        key: Jl.ccpaPolicy.menuKey,
                        navInfo: Jl.ccpaPolicy
                    }, i, {
                        isVisible: t.isCcpaPolicyVisible
                    })), o().createElement(ec, ju({
                        key: Jl.cookiePolicy.menuKey,
                        navInfo: Jl.cookiePolicy
                    }, i)), o().createElement(ec, ju({
                        key: Jl.termsOfUse.menuKey,
                        navInfo: Jl.termsOfUse
                    }, i))]
                }
            },
            Au);
            !function(e) {
                e[e.NONE = 0] = "NONE",
                e[e.DIRECT = -1] = "DIRECT",
                e[e.LINE_TRAVEL = 1807871] = "LINE_TRAVEL",
                e[e.GRAB = 1823838] = "GRAB",
                e[e.VOUCHER = 1884396] = "VOUCHER",
                e[e.FLIGHTS_TAT_HOME = 1886452] = "FLIGHTS_TAT_HOME",
                e[e.FLIGHTS_TAT_TYP = 1886453] = "FLIGHTS_TAT_TYP",
                e[e.ASQ_THAILAND = 1888621] = "ASQ_THAILAND",
                e[e.BOOKINGFORM_M3 = 1896356] = "BOOKINGFORM_M3"
            }(Fu || (Fu = {}));
            var Uu = function(e) {
                return {
                    key: e,
                    "data-component": e,
                    "data-element-name": e
                }
            }
              , Wu = function(e) {
                return !!A(e)
            }
              , Gu = function(e) {
                var t = function(e) {
                    if (e.isHideFlightsMenu || !e.isAgodaFlightsEnabled)
                        return !1;
                    var t = A(Yr.NavigationProductMenu) || {};
                    return !!t.flights && (t.flights.isenabled || t.flights.isEnabled)
                }(e);
                return {
                    hasAgodaCash: e.user && !!e.user.agodaCashInfo || !1,
                    showAgodaVip: Wu(Yr.AgodaVip),
                    isChineseEnabled: "zh-cn" === e.culture.toLowerCase() && "cn" === e.origin.toLowerCase(),
                    isDownloadAppVisible: e.cid !== Fu.LINE_TRAVEL && e.cid !== Fu.GRAB,
                    isHideProfileMenu: !e.user || e.cid === Fu.GRAB,
                    isCcpaPolicyVisible: !!e.isShowCcpaMenuLink,
                    isFlightPageEnabled: t,
                    isFlightPageNotEnabled: !t,
                    isUserLoggedIn: !!e.user,
                    showCashbackRewards: e.experiments.shouldShowCashback || !1,
                    showFavorites: Wu(Yr.Favorites),
                    showAccommodation: Wu(Yr.Accommodation),
                    isShowMyBookings: Wu(Yr.UserManageBooking),
                    showActivities: Wu(Yr.Activities),
                    showTransfers: Wu(Yr.Transfers),
                    showCars: Wu(Yr.Cars),
                    hidePriceView: !!e.experiments.doesNotSupportPriceView,
                    showAboutUs: !!e.experiments.shouldShowAboutUs
                }
            }
              , Xu = function(e, t, n) {
                var r = Hu[e.whiteLabelId]
                  , i = Gu(e);
                return r ? r.menu(e, i, t, n) : Fc(e, i, t, n)
            }
              , Ku = function(e) {
                return (null == e ? void 0 : e.isVisible) ? o().createElement(l.Box, {
                    py: "M",
                    px: "L"
                }, null == e ? void 0 : e.text) : null
            }
              , Yu = function() {
                return Yu = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Yu.apply(this, arguments)
            }
              , $u = o().memo(o().forwardRef((function(e, t) {
                return o().createElement(l.Box, Yu({
                    clone: !0
                }, Uu("header-logo-and-links-container"), {
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center"
                }), o().createElement("nav", {
                    ref: t,
                    className: "Header__LogoAndLinks"
                }, o().createElement(l.Box, {
                    height: e.height,
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    "data-component": "Logos"
                }, e.renderPartnerLogo(), e.renderPrimaryLogo())))
            }
            )));
            $u.displayName = "LogoAndLinks";
            var Zu, Ju = $u, Qu = n(3483), ed = n.n(Qu), td = n(170), nd = n.n(td), rd = function() {
                return rd = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                rd.apply(this, arguments)
            }, id = o().memo((function(e) {
                if (!e.visible)
                    return o().createElement(l.Box, rd({}, Uu("header-back-button-container-spacing"), {
                        width: "48px"
                    }));
                var t = e.isRtl ? o().createElement(nd(), {
                    size: "XL",
                    color: e.headerIconColor,
                    variant: e.headerIconVariant
                }) : o().createElement(ed(), {
                    size: "XL",
                    color: e.headerIconColor,
                    variant: e.headerIconVariant
                })
                  , n = o().createElement(l.Box, rd({}, Uu("header-back-button-container"), {
                    key: "",
                    height: "48px",
                    width: "48px",
                    p: "S",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    onClick: e.hardNavigate ? void 0 : e.onClick
                }), o().createElement(l.Button, rd({
                    variant: "no-style"
                }, Uu("mob-back-button"), {
                    "data-action": e.hardNavigate ? "" : "back"
                }), t));
                return e.hardNavigate ? o().createElement(l.Link, {
                    href: e.url,
                    "data-action": "back",
                    onClick: e.onClick
                }, n) : n
            }
            )), ad = o().memo((function(e) {
                return o().createElement(l.Box, {
                    pl: "S",
                    "data-component": "PartnerLogo"
                }, o().createElement("img", {
                    src: e.original,
                    "data-2x": e.original2x || e.original,
                    alt: ""
                }))
            }
            ));
            ad.displayName = "PartnerLogo";
            var od = ((Zu = {})[h.All] = {
                default: "agoda-color-default",
                light: "agoda-color-light",
                white: "agoda-white",
                black: "agoda-black"
            },
            Zu[h.Agoda] = {
                default: "agoda-color-default",
                light: "agoda-color-light",
                white: "agoda-white",
                black: "agoda-black"
            },
            Zu[h.ClubPremier] = {
                default: "clubpremier-color-default"
            },
            Zu[h.Jtb] = {
                default: "japanican-color-default"
            },
            Zu[h.Japanican] = {
                default: "japanican-color-default",
                "zh-cn": "japanican-zh-cn",
                "zh-hk": "japanican-zh-hk",
                "ko-kr": "japanican-ko-kr",
                "zh-tw": "japanican-zh-tw"
            },
            Zu[h.Rurubu] = {
                default: "rurubu-color-default"
            },
            Zu[h.Priceline] = {
                default: "priceline-color-default-2"
            },
            Zu[h.TMobile] = {
                default: "tmobile-white-default-with-priceline"
            },
            Zu[h.ClubTravel] = {
                default: "clubtravel-color-default"
            },
            Zu[h.LotteDFS] = {
                default: "lottedfs-white"
            },
            Zu[h.ANA] = {
                default: "ana-ana-color-default"
            },
            Zu[h.CitiUS] = {
                default: "citius-color-default-6"
            },
            Zu[h.CitiUSUat1] = {
                default: "citius-color-default-6"
            },
            Zu[h.CitiUSUat2] = {
                default: "citius-color-default-6"
            },
            Zu[h.CitiUSUat3] = {
                default: "citius-color-default-6"
            },
            Zu[h.CitiMexico] = {
                default: "japanican-color-default"
            },
            Zu[h.KrisFlyer] = {
                default: "krisflyer-krisflyer-color-default"
            },
            Zu[h.TestStrategicPartners] = {
                default: "japanican-color-default"
            },
            Zu)
              , ld = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
              , sd = function() {
                return sd = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                sd.apply(this, arguments)
            }
              , cd = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , ud = u()(l.Box).withConfig({
                displayName: "PrimaryLogo__PrimaryLogoWrapper",
                componentId: "sc-1g5nk50-0"
            })(pd || (pd = ld(["\n    line-height: normal;\n    vertical-align: middle;\n"], ["\n    line-height: normal;\n    vertical-align: middle;\n"])))
              , dd = o().memo((function(e) {
                var t, n = function(e) {
                    switch (e) {
                    case h.Agoda:
                        return {
                            width: "62px",
                            height: "28px"
                        };
                    case h.Japanican:
                        return {
                            width: "210px",
                            height: "43px"
                        };
                    case h.TestStrategicPartners:
                        return {
                            width: "150px",
                            height: "17px"
                        };
                    case h.Rurubu:
                        return {
                            width: "132px",
                            height: "25px"
                        };
                    case h.TMobile:
                        return {
                            width: "90px",
                            height: "25px"
                        };
                    case h.ClubPremier:
                        return {
                            width: "160px",
                            height: "20px"
                        };
                    case h.ClubTravel:
                        return {
                            width: "192px",
                            height: "40px"
                        };
                    case h.LotteDFS:
                        return {
                            width: "36px",
                            height: "32px"
                        };
                    case h.ANA:
                        return {
                            width: "170px",
                            height: "47px"
                        };
                    case h.CitiUS:
                    case h.CitiUSUat1:
                    case h.CitiUSUat2:
                    case h.CitiUSUat3:
                        return {
                            width: "137px",
                            height: "37px"
                        };
                    case h.KrisFlyer:
                        return {
                            width: "128px",
                            height: "40px"
                        };
                    default:
                        throw new Error("No dimension mapping for ".concat(h[e]))
                    }
                }(e.whitelabelId), r = e.showJapanicanLogoForEachLanguages ? e.culture : null !== (t = null == e ? void 0 : e.logoVariant) && void 0 !== t ? t : "default", i = function(e, t) {
                    if (!od[e])
                        throw new Error("No Logo mapping for ".concat(h[e]));
                    var n = od[e];
                    return n && !n[t] ? n.default : n[t]
                }(e.whitelabelId, r);
                return o().createElement(l.Box, {
                    key: "primary-logo-component",
                    width: n.width,
                    height: n.height,
                    display: "flex",
                    alignItems: "center",
                    "data-element-name": "primary-logo"
                }, o().createElement(Ln.Logo, {
                    name: i,
                    alt: "PrimaryLogo",
                    baseCdnUrl: e.baseCdnUrl
                }))
            }
            ));
            dd.displayName = "PrimaryLogoComponent";
            var md = o().memo((function(e) {
                var t, n = cd(o().useState(!1), 2), r = n[0], i = n[1], a = function(e, t, n, r) {
                    void 0 === n && (n = !0);
                    var i = 7 === t || 8 === t || 20 === t ? e : e.split("-")[0]
                      , a = n ? "white" : "grey";
                    return vn(function(e, t) {
                        return "".concat((t || "https://cdn6.agoda.net").replace(/\/+$/, ""), "/").concat(e.replace(/^\/+/, ""))
                    }("/images/MVC/default/logo-{1}-{0}-2019.svg", r), {
                        0: i,
                        1: a
                    })
                }(e.culture, e.languageId, void 0, e.baseCdnUrl);
                return o().createElement(l.Box, {
                    key: "secondary-logo-component",
                    width: "45px",
                    me: "XS",
                    ms: "S",
                    display: r ? "inline-block" : "none",
                    "data-element-name": "secondary-logo-component"
                }, o().createElement("img", {
                    src: a,
                    onLoad: function() {
                        return i(!0)
                    },
                    alt: null !== (t = e.secondaryLogoName) && void 0 !== t ? t : "SecondaryLogo"
                }))
            }
            ));
            md.displayName = "SecondaryLogoComponent";
            var pd, fd = o().memo((function(e) {
                var t, n = o().createElement(dd, {
                    key: "PrimaryLogoComponent",
                    whitelabelId: e.whitelabelId,
                    logoVariant: e.logoVariant,
                    showJapanicanLogoForEachLanguages: e.showJapanicanLogoForEachLanguages,
                    culture: e.culture,
                    baseCdnUrl: e.baseCdnUrl
                }), r = 1 !== e.whitelabelId ? [n] : [n, o().createElement(md, {
                    key: "SecondaryLogoComponent",
                    culture: e.culture,
                    languageId: e.languageId,
                    secondaryLogoName: e.secondaryLogoName,
                    baseCdnUrl: e.baseCdnUrl
                })], i = [o().createElement(l.Box, {
                    key: "logo-link-items-container",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row"
                }, r)];
                return o().createElement(ud, {
                    className: "Header__LogoAndLinks__PrimaryLogo",
                    display: "flex",
                    height: e.height,
                    justifyContent: "center",
                    flexDirection: "row",
                    position: "relative",
                    alignItems: "center",
                    "data-element-name": "primary-logo-wrapper"
                }, o().createElement(yn, sd({
                    className: "Header__LogoAndLinks__PrimaryLogo__LogoLink",
                    link: e.homeUrl,
                    linkItems: i
                }, P({
                    dataElementName: "primary-logo",
                    dataEventVersion: 1
                }), {
                    dataEventVersion: 1,
                    ariaLabel: "".concat(null !== (t = e.primaryLogoName) && void 0 !== t ? t : h[e.whitelabelId], " logo Home link"),
                    isRtl: e.isRtl,
                    analytics: e.analytics
                })))
            }
            ));
            fd.displayName = "PrimaryLogo";
            var yd = function(e, t) {
                return e({
                    id: t,
                    message: ""
                })
            }
              , gd = function(e, t) {
                return t ? Object.keys(t).reduce((function(e, n) {
                    return e.replace(new RegExp("\\{".concat(n, "\\}"),"g"), (function() {
                        return t[n]
                    }
                    ))
                }
                ), e) : e
            }
              , hd = n(5857)
              , vd = n.n(hd)
              , bd = new Ke.ClientSideBehavior("CitiMemberDetailsBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable)
              , wd = new Ke.ClientSideBehavior("AdaFixBehavior",$e.whiteLabelId.any(h.CitiUS, h.CitiUSUat1, h.CitiUSUat2, h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable)
              , Cd = function() {
                return Cd = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Cd.apply(this, arguments)
            }
              , xd = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , Sd = o().memo((function(e) {
                var t = e.getBehaviorManager().isEnabled(wd);
                return o().createElement(kd, Cd({}, e, {
                    isAdaFix: t
                }))
            }
            ));
            Sd.displayName = "LoginMenuButton";
            var kd = o().memo((function(e) {
                var t = "".concat(Zs("{0}/signin", e.culture), "?targeturl=").concat(e.loginReturnUrl)
                  , n = o().useRef(null);
                o().useEffect((function() {
                    var t;
                    e.isAdaFix && n.current && (null === (t = e.innerRef) || void 0 === t || t.call(e, n.current))
                }
                ), [n.current]);
                var r = o().createElement(l.Button, {
                    variant: "solid",
                    color: "primary",
                    disabled: !1,
                    fullWidth: !0,
                    buttonSize: "M",
                    isLoading: !1,
                    "data-element-name": "common-mobile-header-login-button",
                    ref: n
                }, o().createElement(le, {
                    variant: "heading3"
                }, e.loginButtonText));
                return e.renderSignInLink ? e.renderSignInLink(r) : o().createElement("a", {
                    href: t,
                    "data-action": e.actionName
                }, r)
            }
            ));
            kd.displayName = "LoginMenuButtonContent";
            var Md = o().memo((function(e) {
                var t = e.getBehaviorManager().isEnabled(bd)
                  , n = o().useCallback((function() {
                    e.dataElementName && e.analytics.click(e.dataElementName, M(e)),
                    e.onClick && e.onClick()
                }
                ), [])
                  , r = xd(o().useState(), 2)
                  , i = r[0]
                  , a = r[1];
                if (o().useEffect((function() {
                    var t = !!F(e.featureConfigs, Yr.UsePartnerLoyaltyMemberBalance);
                    e.selectedCurrency && e.selectedLanguage && e.culture && e.user && t && wo(e.culture, e.selectedCurrency, e.selectedLanguage, e.logger).then((function(e) {
                        return e && a(e)
                    }
                    )).catch((function() {}
                    ))
                }
                ), [e.selectedCurrency, e.selectedLanguage, e.culture, e.user, e.featureConfigs]),
                e.renderMenuHeader)
                    return e.renderMenuHeader();
                if (t && (null == i ? void 0 : i.partnerLoyaltyMenuViewModel))
                    return o().createElement(Om, {
                        profile: i.partnerLoyaltyMenuViewModel,
                        user: e.user,
                        "data-component": Md.displayName,
                        analytics: e.analytics
                    });
                if (e.user)
                    return o().createElement(l.Box, {
                        "data-component": Md.displayName,
                        width: "100%"
                    }, o().createElement(le, {
                        as: "div",
                        variant: "heading2",
                        color: 800,
                        short: !0,
                        "data-section": "signed-in-user",
                        mt: "M"
                    }, e.welcomeMessage), (null == i ? void 0 : i.partnerLoyaltyMenuViewModel) && o().createElement(Em, Cd({}, null == i ? void 0 : i.partnerLoyaltyMenuViewModel, {
                        analytics: e.analytics,
                        "data-section": "partner-loyaltyProfile"
                    })));
                var c, u, d = e.getBehaviorManager().isEnabled(Mc) ? o().createElement(s.Icon, {
                    id: "VipstarBrandFill",
                    size: "xl",
                    color: "primary.vip-gold"
                }) : o().createElement(vd(), {
                    size: "L",
                    color: "vipGoldV2",
                    variant: "background",
                    key: "vip-icon"
                });
                return o().createElement(l.Box, {
                    "data-component": Md.displayName,
                    width: "100%"
                }, e.shouldShowVipUiSignInMessage ? o().createElement(l.Box, {
                    my: "L"
                }, o().createElement(l.Paragraph, {
                    color: 800,
                    strong: !0,
                    textSize: "XL"
                }, (c = e.saveMoreWithAgodaVip,
                (u = [d]) && Object.keys(u).length && c ? c.split(/[\{\}]/).map((function(e) {
                    return e in u ? u[e] : e
                }
                )) : c)), o().createElement(l.Paragraph, {
                    textSize: "M",
                    mt: "S",
                    color: 500
                }, e.signInAndCollectBookingsTowardsVipStatus)) : o().createElement(le, {
                    as: "div",
                    variant: "body2",
                    short: !1,
                    color: 800,
                    mt: "S"
                }, e.loginMessage), o().createElement(l.Box, {
                    mt: "M",
                    "data-element-name": e.dataElementName,
                    onClick: n
                }, o().createElement(Sd, Cd({}, e))))
            }
            ));
            Md.displayName = "LoginMenu";
            var Nd, Ed = new Ke.ClientSideBehavior("RurubuNameBehavior",$e.whiteLabelId.any(h.Rurubu).build(),Ye.FallbackStrategy.Disable), Pd = new Ke.ClientSideBehavior("CloseButtonMobileMenuBehavior",$e.whiteLabelId.equal(h.CitiUS).or.whiteLabelId.equal(h.CitiUSUat1).or.whiteLabelId.equal(h.CitiUSUat2).or.whiteLabelId.equal(h.CitiUSUat3).build(),Ye.FallbackStrategy.Disable), Vd = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Td = function() {
                return Td = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Td.apply(this, arguments)
            }, Od = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, Id = {
                open: "XXXXL"
            }, zd = u()($s).withConfig({
                displayName: "HeaderMobileContent__SheetStyled",
                componentId: "sc-v4k0m7-0"
            })(Nd || (Nd = Vd(["\n    visibility: ", ';\n    transition: transform .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;\n    z-index: 0;\n\n    div[data-element-name="common-mobile-header-container-roots"] {\n        transition: transform .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;\n    }\n'], ["\n    visibility: ", ';\n    transition: transform .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;\n    z-index: 0;\n\n    div[data-element-name="common-mobile-header-container-roots"] {\n        transition: transform .3s, -webkit-transform .3s, -moz-transform .3s, -o-transform .3s;\n    }\n'])), (function(e) {
                return e.open ? "visible" : "hidden"
            }
            )), Ad = o().memo((function(e) {
                var t, n, r, i = o().useRef(null), a = Od(o().useState(null), 2), s = a[0], c = a[1], u = "mobile-menu", d = e.getBehaviorManager().isEnabled(Ed), m = e.getBehaviorManager().isEnabled(Pd), p = e.getBehaviorManager().isEnabled(wd), f = e.getBehaviorManager().isEnabled(Mc), y = gd(yd(e.cms, 78632), d ? {
                    lastName: null === (t = e.user) || void 0 === t ? void 0 : t.lastName,
                    userName: null === (n = e.user) || void 0 === n ? void 0 : n.firstName
                } : {
                    userName: null === (r = e.user) || void 0 === r ? void 0 : r.firstName
                }), g = e.callbacks.setMenuState, h = o().useCallback((function() {
                    wc(e.menuState) && e.analytics.custom(Rt.Visit, {
                        action_element_name: zr,
                        page_type_id: Ys.MainMenu
                    }),
                    g && g(wc(e.menuState) ? yc.Closed : yc.Open)
                }
                ), []), v = function() {
                    var t, n;
                    g && g(yc.Closed),
                    null === (n = null === (t = e.menuButtonRef) || void 0 === t ? void 0 : t.current) || void 0 === n || n.focus()
                }, b = m ? v : h, w = function(e) {
                    return e ? {
                        position: "outside",
                        visible: "when-open"
                    } : {
                        position: "inside",
                        visible: "never"
                    }
                }(m), C = function(e) {
                    c(e)
                };
                o().useEffect((function() {
                    var t;
                    if (p) {
                        var n = wc(e.menuState)
                          , r = function(e) {
                            var t;
                            return i.current = e && !i.current && null !== (t = document.getElementById(u)) && void 0 !== t ? t : null,
                            i.current
                        }(n);
                        !function(e, t) {
                            var n = null == e ? void 0 : e.parentNode
                              , r = document.body.querySelectorAll(":scope > *:not(script):not(style)");
                            null == r || r.forEach((function(e) {
                                e !== n && e.setAttribute("aria-hidden", t.toString())
                            }
                            ))
                        }(r, n),
                        n && (null != s ? s.focus() : (null == r || r.focus(),
                        null === (t = null == r ? void 0 : r.querySelector("a")) || void 0 === t || t.focus()))
                    }
                }
                ), [e.menuState, s]),
                o().useEffect((function() {
                    var e = p || f
                      , t = function(t) {
                        e && t.key === La.Escape && v()
                    };
                    return e && document.addEventListener("keydown", t, !1),
                    function() {
                        e && document.removeEventListener("keydown", t)
                    }
                }
                ), []);
                var x = o().useMemo((function() {
                    return {
                        align: "left",
                        pb: "NONE",
                        pt: "NONE",
                        noBackground: !0,
                        content: !!e.featureConfigs.Login && wc(e.menuState) && o().createElement(Md, Td({
                            key: "login",
                            user: e.user,
                            culture: e.culture,
                            loginReturnUrl: e.loginReturnUrl,
                            renderMenuHeader: e.renderMenuHeader,
                            renderSignInLink: e.renderSignInLink,
                            loginMessage: yd(e.cms, 118417),
                            loginButtonText: yd(e.cms, 79193),
                            partnerMilesText: yd(e.cms, 149939),
                            CitiUnit: yd(e.cms, 143109),
                            welcomeMessage: y,
                            actionName: "signIn",
                            signInAndCollectBookingsTowardsVipStatus: yd(e.cms, 145559),
                            saveMoreWithAgodaVip: yd(e.cms, 145558),
                            shouldShowVipUiSignInMessage: e.experiments.shouldShowVipUiSignInMessage,
                            selectedCurrency: e.selectedCurrency,
                            selectedLanguage: e.selectedLanguage,
                            dataElementName: "mob-login"
                        }, k({
                            dataComponentId: "mob-login",
                            dataElementName: "mob-login",
                            dataEventVersion: 1
                        }), {
                            logger: e.logger,
                            analytics: e.analytics,
                            innerRef: C,
                            experiments: e.experiments,
                            getBehaviorManager: e.getBehaviorManager,
                            featureConfigs: e.featureConfigs
                        }))
                    }
                }
                ), [e]);
                return o().createElement(zd, Td({
                    dock: "right",
                    fill: e.headerWidth ? "content" : "full-screen",
                    open: wc(e.menuState),
                    variant: "drawer",
                    header: x,
                    onClose: b,
                    gutter: Id,
                    closeButton: w
                }, Uu("common-mobile-header-container-root"), {
                    "data-component": "MenuComponent",
                    id: u,
                    tabIndex: -1
                }), o().createElement(L, {
                    shouldi: wc(e.menuState)
                }, !!e.user && o().createElement(l.Divider, {
                    space: "NONE",
                    m: "NONE"
                }), o().createElement(l.Box, Td({}, Uu("common-mobile-header-container"), {
                    as: "nav",
                    "data-section": "MenuList",
                    overflowY: "auto",
                    flex: 1,
                    "aria-label": "main menu",
                    minWidth: e.headerWidth ? "".concat(e.headerWidth / 2, "px") : void 0
                }), e.children), o().createElement(Ku, Td({}, null == e ? void 0 : e.menuFooterProps))))
            }
            ));
            Ad.displayName = "HeaderMobileContent";
            var Fd = function() {
                return Fd = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Fd.apply(this, arguments)
            }
              , Bd = "primary-logo"
              , Rd = function(e) {
                var t, n, r, i, a, s = void 0 !== e.headerIconColor ? e.headerIconColor : "secondary", c = e.headerIconVariant || "bordered", u = o().useCallback((function() {
                    return o().createElement(L, {
                        shouldi: !!e.bltLogo
                    }, o().createElement(ad, Fd({}, e.bltLogo.url, {
                        dataId: "partner-logo",
                        key: "partner-logo"
                    })))
                }
                ), [null === (t = e.bltLogo) || void 0 === t ? void 0 : t.url]), d = o().useCallback((function() {
                    return o().createElement(L, {
                        shouldi: e.whiteLabelId > 0
                    }, o().createElement(fd, {
                        dataId: Bd,
                        key: Bd,
                        culture: e.culture,
                        languageId: e.languageId,
                        homeUrl: "/",
                        whitelabelId: e.whiteLabelId,
                        logoVariant: e.logoVariant || "light",
                        height: "48px",
                        isRtl: e.isRtl,
                        analytics: e.analytics,
                        showJapanicanLogoForEachLanguages: e.showJapanicanLogoForEachLanguages,
                        secondaryLogoName: yd(e.cms, 238338),
                        baseCdnUrl: e.baseCdnUrl
                    }))
                }
                ), [e.culture, e.languageId, e.whiteLabelId, e.logoVariant]), m = o().useCallback((function(t) {
                    e.backButtonProps && e.backButtonProps.onClick && e.backButtonProps.onClick(t)
                }
                ), []);
                return o().createElement(l.Box, {
                    width: "100vw",
                    display: "flex",
                    background: e.background,
                    backgroundColor: e.backgroundColor,
                    justifyContent: e.justifyContent || "space-between",
                    py: e.py || "S",
                    px: e.px || "XS",
                    border: e.border,
                    "data-component": e.dataComponent,
                    position: "relative",
                    maxWidth: e.headerWidth ? "".concat(e.headerWidth, "px") : void 0
                }, o().createElement(id, {
                    headerIconColor: s,
                    headerIconVariant: c,
                    url: null === (n = e.backButtonProps) || void 0 === n ? void 0 : n.url,
                    hardNavigate: null === (r = e.backButtonProps) || void 0 === r ? void 0 : r.hardNavigate,
                    onClick: m,
                    visible: null === (i = e.backButtonProps) || void 0 === i ? void 0 : i.visible,
                    isRtl: e.isRtl
                }), (null === (a = e.customRenderers) || void 0 === a ? void 0 : a.renderCustomHeaderTitle) ? e.customRenderers.renderCustomHeaderTitle() : o().createElement(Ju, {
                    height: "48px",
                    renderPartnerLogo: u,
                    renderPrimaryLogo: d
                }), e.renderRightHeaderItems && e.renderRightHeaderItems(e), o().createElement(Ad, Fd({}, e)))
            };
            Rd.displayName = "DefaultHeader";
            var Dd, Ld, _d, jd, qd = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, a) {
                    function o(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, l)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }, Hd = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function l(l) {
                    return function(s) {
                        return function(l) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0,
                            l[0] && (o = 0)),
                            o; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, l[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (l = [2 & l[0], i.value]),
                                    l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        r = l[1],
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1],
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2],
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    l = t.call(e, o)
                                } catch (e) {
                                    l = [6, e],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            }, Ud = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Wd = function() {
                return Wd = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Wd.apply(this, arguments)
            }, Gd = function(e, t, n, r) {
                return new (n || (n = Promise))((function(i, a) {
                    function o(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function l(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, l)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
                ))
            }, Xd = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function l(l) {
                    return function(s) {
                        return function(l) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0,
                            l[0] && (o = 0)),
                            o; )
                                try {
                                    if (n = 1,
                                    r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r),
                                    0) : r.next) && !(i = i.call(r, l[1])).done)
                                        return i;
                                    switch (r = 0,
                                    i && (l = [2 & l[0], i.value]),
                                    l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: l[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        r = l[1],
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            o.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && o.label < i[1]) {
                                            o.label = i[1],
                                            i = l;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2],
                                            o.ops.push(l);
                                            break
                                        }
                                        i[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    l = t.call(e, o)
                                } catch (e) {
                                    l = [6, e],
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                            if (5 & l[0])
                                throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            }, Kd = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, Yd = u()(l.Box).withConfig({
                displayName: "CitiHeader__CitiHeaderBox",
                componentId: "sc-mhr5bv-0"
            })(Ld || (Ld = Ud(["\n    border-bottom-color: ", ";\n"], ["\n    border-bottom-color: ", ";\n"])), (function(e) {
                return e.theme.palette.primary.darkSolid.background
            }
            )), $d = u()(l.Button).withConfig({
                displayName: "CitiHeader__CitiHeaderBackButton",
                componentId: "sc-mhr5bv-1"
            })(_d || (_d = Ud(["\n    display: flex;\n    width: 44px;\n    height: 44px;\n    padding: 0;\n    right: 7px;\n    align-items: center;\n    justify-content: start;\n"], ["\n    display: flex;\n    width: 44px;\n    height: 44px;\n    padding: 0;\n    right: 7px;\n    align-items: center;\n    justify-content: start;\n"]))), Zd = "primary-logo", Jd = function(e) {
                var t, n = o().useRef(null), r = Wd(Wd({}, e), {
                    menuButtonRef: n
                }), i = "Mobile Safari" === e.browserDetails, a = Kd(o().useState(!1), 2), s = a[0], c = a[1];
                o().useEffect((function() {
                    Gd(void 0, void 0, void 0, (function() {
                        var e;
                        return Xd(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return [4, qd(void 0, void 0, Promise, (function() {
                                    var e;
                                    return Hd(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]),
                                            null == Dd && (Dd = Fe("/api/cronos/partnermember/partnerdata")),
                                            [4, Dd];
                                        case 1:
                                            return e = t.sent().body,
                                            [3, 3];
                                        case 2:
                                            return t.sent(),
                                            e = void 0,
                                            [3, 3];
                                        case 3:
                                            return [2, e]
                                        }
                                    }
                                    ))
                                }
                                ))];
                            case 1:
                                return (e = t.sent()) ? ("MOB" === e.channelId && c(!0),
                                [2]) : [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ), []);
                var u = o().useCallback((function() {
                    return o().createElement(L, {
                        shouldi: !!e.bltLogo
                    }, o().createElement(ad, Wd({}, e.bltLogo.url, {
                        dataId: "partner-logo",
                        key: "partner-logo"
                    })))
                }
                ), [null === (t = e.bltLogo) || void 0 === t ? void 0 : t.url])
                  , d = o().useCallback((function() {
                    return o().createElement(L, {
                        shouldi: e.whiteLabelId > 0
                    }, o().createElement(fd, {
                        dataId: Zd,
                        key: Zd,
                        culture: e.culture,
                        isRtl: e.isRtl,
                        languageId: e.languageId,
                        homeUrl: "/",
                        whitelabelId: e.whiteLabelId,
                        logoVariant: e.logoVariant || "light",
                        height: "auto",
                        analytics: e.analytics,
                        primaryLogoName: yd(e.cms, 230135),
                        baseCdnUrl: e.baseCdnUrl
                    }))
                }
                ), [e.culture, e.languageId, e.whiteLabelId, e.logoVariant]);
                return o().createElement(Yd, {
                    width: "100vw",
                    display: "flex",
                    backgroundColor: {
                        color: "primary",
                        variant: "bordered"
                    },
                    justifyContent: e.justifyContent,
                    py: "XL",
                    px: "L",
                    border: {
                        width: "L",
                        direction: "bottom"
                    },
                    "data-component": e.dataComponent
                }, s && !e.isHomePage && i && o().createElement($d, {
                    onClick: function() {
                        return window.history.back()
                    },
                    variant: "transparent",
                    "aria-label": "Back"
                }, o().createElement(ed(), {
                    size: "XXL",
                    colorVariant: {
                        color: "primary",
                        variant: "darkSolid"
                    },
                    variant: "background"
                })), o().createElement(Ju, {
                    height: "auto",
                    renderPartnerLogo: u,
                    renderPrimaryLogo: d
                }), o().createElement(l.Box, {
                    key: "right-container",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    position: "relative",
                    flexGrow: 1
                }, e.renderRightHeaderItems && e.renderRightHeaderItems(r)), o().createElement(Ad, Wd({}, r)))
            };
            Jd.displayName = "CitiHeader";
            var Qd = ((jd = {})[h.CitiUS] = Jd,
            jd[h.CitiUSUat1] = Jd,
            jd[h.CitiUSUat2] = Jd,
            jd[h.CitiUSUat3] = Jd,
            jd)
              , em = n(5566)
              , tm = n(7326)
              , nm = n(8871)
              , rm = n(8532)
              , im = n(8194)
              , am = n(7151)
              , om = n(2144)
              , lm = n(5920)
              , sm = n(4351)
              , cm = n(8435)
              , um = n(8273)
              , dm = function(e) {
                switch (e) {
                case h.Agoda:
                    return tm.theme;
                case h.Japanican:
                    return om.theme;
                case h.Rurubu:
                    return um.theme;
                case h.ANA:
                    return nm.theme;
                case h.CitiUS:
                case h.CitiUSUat1:
                case h.CitiUSUat2:
                case h.CitiUSUat3:
                    return rm.theme;
                case h.ClubTravel:
                    return am.theme;
                case h.ClubPremier:
                    return im.theme;
                case h.LotteDFS:
                    return lm.theme;
                case h.TMobile:
                    return cm.theme;
                case h.Priceline:
                    return sm.theme;
                default:
                    return em.defaultTheme
                }
            }
              , mm = function() {
                return mm = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                mm.apply(this, arguments)
            }
              , pm = function(e) {
                return function(t) {
                    var n = t.whiteLabelId
                      , r = {
                        direction: (0,
                        l.isRtl)() ? s.Direction.RTL : s.Direction.LTR,
                        theme: dm(n),
                        experiment: {
                            carouselScrollSnapStop: !1,
                            isTouchDeviceFix: !1,
                            carouselLayoutFix: !1,
                            gridSizeFallback: !1,
                            textLinkUnderline: !1,
                            isAccessibilityColorUpdate: !1,
                            chipOverflowLayout: !1,
                            cssArchitecture: !1,
                            isCitiAccessibilityColorUpdate: !1
                        }
                    };
                    return a.createElement(s.DesignSystemContextProvider, {
                        value: r
                    }, a.createElement(e, mm({}, t)))
                }
            }
              , fm = function() {
                return fm = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                fm.apply(this, arguments)
            }
              , ym = function(e) {
                S({
                    fetch: e.fetch,
                    featureConfigs: e.featureConfigs
                });
                var t = Qd[e.whiteLabelId];
                return t ? o().createElement(t, fm({}, e)) : o().createElement(Rd, fm({}, e))
            };
            ym.displayName = "HeaderMobileComponent";
            var gm, hm = pm(ym);
            !function(e) {
                e[e.World = 1] = "World",
                e[e.Continent = 2] = "Continent",
                e[e.Country = 3] = "Country",
                e[e.State = 4] = "State",
                e[e.City = 5] = "City",
                e[e.CityAccommodation = 6] = "CityAccommodation"
            }(gm || (gm = {}));
            var vm = o().memo((function(e) {
                return e.isVisible && e.breadcrumbs && 0 != e.breadcrumbs.length ? o().createElement(o().Fragment, null, o().createElement(l.Divider, {
                    key: "menu-header-breadcrumbs-divider",
                    space: "NONE",
                    m: "NONE"
                }), o().createElement(Vo, {
                    key: "menu-header-breadcrumbs",
                    title: e.title,
                    isVisible: !!e.title
                }), e.breadcrumbs.map((function(t, n) {
                    return o().createElement(ec, {
                        title: t.title,
                        route: t.url,
                        key: Jl.locationBreadcrumb.menuKey + n,
                        navInfo: Jl.locationBreadcrumb,
                        cms: e.cms,
                        defaultLanguage: e.defaultLanguage,
                        culture: e.culture,
                        formatUrl: e.formatUrl,
                        logger: e.logger,
                        analytics: e.analytics
                    })
                }
                ))) : null
            }
            ))
              , bm = n(7536)
              , wm = n.n(bm)
              , Cm = o().memo((function(e) {
                var t = Jl.myBookingsWithSubMenus
                  , n = Jl.myBookings
                  , r = e.isNewMenu ? t : n
                  , i = o().useCallback((function(t) {
                    e.isNewMenu && (t.preventDefault(),
                    t.stopPropagation()),
                    e.analytics.custom(Rt.Click, {
                        action_element_name: r.elementName,
                        page_type_id: Ys.MainMenu
                    })
                }
                ), [e.isNewMenu]);
                if (!e.isVisible)
                    return null;
                var a = e.isNewMenu ? "" : Zs(n.route, e.culture, e.defaultLanguage)
                  , s = e.cms(r.titleCmsId, r.titleFallbackCmsId);
                return o().createElement(l.Link, {
                    href: a,
                    onClick: i,
                    activeTextDecoration: "none",
                    "data-element-name": r.elementName,
                    "data-action": r.actionName
                }, o().createElement(l.Box, {
                    key: "my-bookings-row-container",
                    p: "M",
                    display: "flex"
                }, r.icon, o().createElement(le, {
                    as: "span",
                    variant: "heading4",
                    color: 800,
                    ms: "M",
                    me: "M"
                }, s), e.isNewMenu && o().createElement(Zl, {
                    key: "my-bookings-arrow-dropdown",
                    icon: wm()
                })))
            }
            ));
            Cm.displayName = "MyBookingsMenu";
            var xm = function() {
                return xm = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                xm.apply(this, arguments)
            }
              , Sm = o().memo((function(e) {
                var t = o().useCallback((function(t) {
                    r.elementName && e.analytics.click(r.elementName, r.eventVersion),
                    e.onClick && e.onClick(t, r.menuKey)
                }
                ), []);
                if (!e.isVisible)
                    return null;
                var n = e.isMmbProductLink ? {
                    variant: "body2",
                    short: !1,
                    ms: "S",
                    me: "M"
                } : {
                    variant: "heading4",
                    ms: "XXL",
                    me: "M",
                    p: "M"
                }
                  , r = e.navInfo
                  , i = e.cms(r.titleCmsId, r.titleFallbackCmsId)
                  , a = Zs(r.route, e.culture, e.defaultLanguage);
                return o().createElement(l.Link, {
                    key: r.menuKey,
                    href: a,
                    onClick: t,
                    activeTextDecoration: "none",
                    "data-element-name": r.elementName,
                    "data-action": r.actionName,
                    "aria-label": e.ariaLabel || i
                }, o().createElement(le, xm({
                    as: "div",
                    color: 800
                }, n), i))
            }
            ));
            Sm.displayName = "MenuSubItem";
            var km, Mm = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Nm = u().section.withConfig({
                displayName: "PartnerLoyaltyProfile__FlexSection",
                componentId: "sc-18x8ktk-0"
            })(km || (km = Mm(["\n    display: flex;\n    clear: both;\n    justify-content: space-between;\n    align-items: center;\n"], ["\n    display: flex;\n    clear: both;\n    justify-content: space-between;\n    align-items: center;\n"]))), Em = o().memo((function(e) {
                return o().useEffect((function() {
                    e.partnerLoyaltyBalance && e.analytics.custom(Rt.Seen, {
                        action_element_name: Lr,
                        action_element_value: "".concat(e.partnerLoyaltyBalance),
                        event_version: 1
                    })
                }
                ), [e.partnerLoyaltyBalance, e.analytics]),
                o().createElement(l.Box, null, e.partnerLoyaltyCardName && o().createElement(le, {
                    variant: "caption2",
                    color: 500,
                    short: !1,
                    "data-section": "partner-program-name"
                }, e.partnerLoyaltyCardName), o().createElement(Nm, null, e.partnerLoyaltyMemberId && o().createElement(le, {
                    variant: "body1",
                    color: 500,
                    short: !1
                }, e.partnerLoyaltyMemberId), e.partnerLoyaltyBalance && o().createElement(le, {
                    variant: "body1",
                    color: "primary",
                    short: !0
                }, e.partnerLoyaltyBalance)))
            }
            ));
            Em.displayName = "PartnerLoyaltyProfile";
            var Pm, Vm = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Tm = u().img.withConfig({
                displayName: "CitiProfile__StyledImg",
                componentId: "sc-pxxwiu-0"
            })(Pm || (Pm = Vm(["\n    object-fit: contain;\n"], ["\n    object-fit: contain;\n"]))), Om = o().memo((function(e) {
                var t = e.profile
                  , n = e.user
                  , r = (null == t ? void 0 : t.partnerLoyaltyCardLastFourDigits) ? "(...".concat(t.partnerLoyaltyCardLastFourDigits, ")") : "";
                return o().useEffect((function() {
                    t.partnerLoyaltyBalance && e.analytics.custom(Rt.Seen, {
                        action_element_name: Lr,
                        action_element_value: "".concat(t.partnerLoyaltyBalance),
                        event_version: 1
                    })
                }
                ), [t.partnerLoyaltyBalance, e.analytics]),
                o().createElement(l.Box, {
                    display: "flex",
                    "data-section": "Citi-Profile"
                }, (null == t ? void 0 : t.partnerLoyaltyCardImageUrl) && o().createElement(Tm, {
                    width: "44",
                    height: "auto",
                    src: t.partnerLoyaltyCardImageUrl,
                    role: "none"
                }), o().createElement(l.Box, {
                    ml: "M"
                }, o().createElement(le, {
                    as: "div",
                    variant: "heading3",
                    "data-section": "signed-in-user",
                    mb: "XS"
                }, "".concat(null == n ? void 0 : n.firstName, " ").concat(null == n ? void 0 : n.lastName, " ").concat(r)), (null == t ? void 0 : t.partnerLoyaltyBalance) && o().createElement(le, {
                    as: "div",
                    variant: "heading4"
                }, t.partnerLoyaltyBalance)))
            }
            ));
            Om.displayName = "CitiProfile";
            var Im = n(7596)
              , zm = n.n(Im)
              , Am = function() {
                return Am = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Am.apply(this, arguments)
            }
              , Fm = o().memo((function(e) {
                var t = function() {
                    return o().createElement(l.Span, {
                        "data-component": "hamburger-highlight",
                        style: {
                            height: "6px",
                            width: "6px",
                            backgroundColor: "red",
                            borderRadius: "50%",
                            position: "absolute",
                            right: "12px",
                            top: "21px"
                        }
                    })
                }
                  , n = (0,
                a.useRef)(e.isOpen);
                (0,
                a.useEffect)((function() {
                    !0 === e.isOpen && !1 === n.current ? (e.analytics.custom(Rt.Click, {
                        action_element_name: Ar
                    }),
                    e.analytics.custom(Rt.Visit, {
                        action_element_name: zr,
                        page_type_id: Ys.MainMenu
                    })) : !1 === e.isOpen && !0 === n.current && e.analytics.custom(Rt.Leave, {
                        action_element_name: zr,
                        page_type_id: Ys.MainMenu
                    }),
                    n.current = e.isOpen
                }
                ), [e.isOpen]);
                var r = (0,
                a.useCallback)((function() {
                    e.toggleSideMenu()
                }
                ), [e.isOpen]);
                return e.isAccomAllyHeaderA11yFixEnabled ? o().createElement(s.Box, Am({}, Uu("header-menu-icon-container"), {
                    "data-action": "openMenu",
                    height: "48px",
                    py: "none",
                    px: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    mx: "s",
                    onClick: r,
                    as: "button",
                    tabIndex: 0
                }), e.isShowHamburgerRedDot && t(), o().createElement(s.Icon, {
                    id: "MenuSymbolLine",
                    color: e.menuToggleIconColor,
                    size: "xl2"
                })) : o().createElement(l.Box, Am({}, Uu("header-menu-icon-container"), {
                    "data-action": "openMenu",
                    height: "48px",
                    py: "NONE",
                    px: "NONE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    mx: "S"
                }), e.isShowHamburgerRedDot && t(), o().createElement(zm(), {
                    onClick: r,
                    size: "XL",
                    color: e.headerIconColor,
                    variant: e.headerIconVariant
                }))
            }
            ));
            Fm.displayName = "HeaderMobileHamburgerButton";
            var Bm, Rm = function() {
                var e = a.createElement(l.Box, {
                    width: "75px",
                    height: "32px",
                    display: "inline-block",
                    verticalAlign: "middle",
                    "data-element-name": "site-logo",
                    className: "agoda-logo-as-payee",
                    ps: "XL",
                    border: {
                        direction: "left",
                        color: 0,
                        width: "S"
                    }
                }, a.createElement(Ln.Logo, {
                    name: "agoda-color-light"
                }));
                return a.createElement(l.Box, {
                    display: "flex",
                    alignSelf: "center",
                    alignItems: "center"
                }, a.createElement("a", {
                    className: "LogoAndLinksMenu__Link",
                    "data-element-name": "agoda-logo-as-payee",
                    "data-selenuium": "agoda-logo-as-payee",
                    href: "/"
                }, e))
            };
            !function(e) {
                e[e.Master = 1] = "Master",
                e[e.Slave = 2] = "Slave"
            }(Bm || (Bm = {}));
            var Dm = function(e) {
                return a.createElement("svg", e, a.createElement("path", {
                    d: "M12 12.707l-9.547 9.546a.5.5 0 1 1-.707-.707L11.292 12 1.746 2.454a.5.5 0 1 1 .707-.707l9.546 9.546 9.547-9.546a.5.5 0 0 1 .707.707L12.707 12l9.546 9.546a.5.5 0 1 1-.707.707l-9.547-9.546z"
                }))
            };
            Dm.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            };
            var Lm = a.memo((function(e) {
                return a.createElement(Ql.SvgIcon, e, a.createElement(Dm, {
                    width: "1em",
                    height: "1em"
                }))
            }
            ));
            Lm.displayName = "ControlLineCloseIcon";
            var _m = function(e) {
                return a.createElement("svg", e, a.createElement("defs", null, a.createElement("path", {
                    id: "making-new-booking-bold_24px-a",
                    d: "M10.03 21.11a1 1 0 1 1 0 2H4.017a2 2 0 0 1-2-1.999L2 3.05a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6.002a1 1 0 0 1-2 0V3.05H4l.018 18.06h6.011zm6.765 2.48a6.795 6.795 0 1 1 0-13.59 6.795 6.795 0 0 1 0 13.59zm0-2a4.795 4.795 0 1 0 0-9.59 4.795 4.795 0 0 0 0 9.59zm.073-.453a.868.868 0 1 1 0-1.737.868.868 0 0 1 0 1.737zm-.877-5.587a1 1 0 1 1-1.982-.268c.158-1.164.816-1.994 1.89-2.327 1.69-.525 3.51.278 3.705 2.091.116 1.073-.425 1.95-1.455 2.5a.642.642 0 0 0-.34.566 1 1 0 1 1-2 0c0-.975.538-1.87 1.398-2.33.35-.187.43-.317.409-.52-.041-.38-.51-.588-1.125-.397-.305.095-.444.269-.5.685zm1.557-11.1a1 1 0 1 1 0 2H6.496a1 1 0 1 1 0-2h11.052zm-4.016 3a1 1 0 0 1 0 2H6.496a1 1 0 1 1 0-2h7.036zm-4.018 3a1 1 0 0 1 0 2H6.496a1 1 0 1 1 0-2h3.018z"
                })), a.createElement("use", {
                    xlinkHref: "#making-new-booking-bold_24px-a"
                }))
            };
            _m.defaultProps = {
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            };
            var jm = a.memo((function(e) {
                return a.createElement(Ql.SvgIcon, e, a.createElement(_m, {
                    width: "1em",
                    height: "1em"
                }))
            }
            ));
            jm.displayName = "WebElementMakingNewBookingBoldIcon";
            var qm, Hm, Um, Wm, Gm, Xm, Km = n(2478), Ym = n.n(Km), $m = function(e) {
                var t = e.input
                  , n = e.inline
                  , r = void 0 !== n && n
                  , i = e.skipHtml
                  , o = void 0 === i || i
                  , l = e.className
                  , s = void 0 === l ? "" : l
                  , c = {
                    disableParsingRawHTML: o,
                    forceWrapper: !0,
                    wrapper: r ? a.createElement("span", null).type : a.createElement("div", null).type
                };
                return a.createElement(Ym(), {
                    className: s,
                    options: c
                }, function(e) {
                    try {
                        return e.split("\n").map((function(e) {
                            return e.trim()
                        }
                        )).join("\n")
                    } catch (t) {
                        return e
                    }
                }(t))
            }, Zm = function() {
                return Zm = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Zm.apply(this, arguments)
            }, Jm = a.memo((function(e) {
                var t = e.onClose
                  , n = e.onNavigateToMyBookings
                  , r = a.createElement(l.GridV2, {
                    direction: "column"
                }, a.createElement(l.GridV2.Item, null, a.createElement("strong", null, e.myBookingsPopUpIntentHeader), a.createElement(l.Paragraph, null, a.createElement($m, {
                    input: e.myBookingsPopUpWarningContent,
                    skipHtml: !1
                }))));
                return a.createElement(mt, Zm({}, e), a.createElement(l.Box, {
                    display: "flex",
                    justifyContent: "center"
                }, a.createElement(l.Box, {
                    maxWidth: "640px"
                }, a.createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column"
                }, a.createElement(l.Box, {
                    mb: "XS",
                    display: "flex",
                    justifyContent: "flex-end"
                }, a.createElement("div", {
                    id: "closeModal",
                    onClick: t
                }, a.createElement(Lm, {
                    size: "M",
                    color: 0
                }))), a.createElement(l.Card, {
                    radius: "M"
                }, a.createElement(l.Box, {
                    p: "XXL"
                }, a.createElement(l.GridV2, {
                    direction: "column"
                }, a.createElement(l.GridV2.Item, null, a.createElement(l.Alert, {
                    icon: a.createElement(jm, {
                        size: "M",
                        color: "alert"
                    }),
                    color: "warning",
                    message: r,
                    style: {
                        alignItems: "flex-start"
                    }
                }), a.createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column",
                    my: "S"
                }, a.createElement(l.Heading, {
                    variant: "h4"
                }, e.myBookingsPopUpHeader), a.createElement(l.Paragraph, {
                    mb: "XL"
                }, e.myBookingsPopUpText)), a.createElement(l.Button, {
                    variant: "solid",
                    fullWidth: !0,
                    onClick: t,
                    id: "close"
                }, e.myBoookigsPopUpCloseButtonLabel), a.createElement(l.Divider, null, e.myBookingsPopUpButtonDividerText), a.createElement(l.Button, {
                    variant: "outlined",
                    fullWidth: !0,
                    id: "sign-in-btn",
                    "data-popup": "new-header-signup",
                    "data-element-name": "signin-action",
                    "data-selenium": "signin-action",
                    onClick: function() {
                        n(!1)
                    }
                }, e.signInText)))))))))
            }
            )), Qm = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, ep = function() {
                return ep = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                ep.apply(this, arguments)
            }, tp = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }, np = u()(le).withConfig({
                displayName: "MyBookingsButton__MyBookingTypography",
                componentId: "sc-lvb8kx-0"
            })(qm || (qm = Qm(["\n    font-weight: 700;\n    text-transform: uppercase;\n"], ["\n    font-weight: 700;\n    text-transform: uppercase;\n"]))), rp = function(e) {
                var t = A(Yr.MyBookingsButton)
                  , n = t && t.buttonBehavior ? t.buttonBehavior : "link"
                  , r = tp(o().useState(!1), 2)
                  , i = r[0]
                  , a = r[1]
                  , s = function(t) {
                    var n;
                    t ? Di(e.manageBookingsUrl) : (n = e.manageBookingsUrl || "",
                    window.location.assign(n))
                };
                return o().createElement(o().Fragment, null, o().createElement(l.Box, {
                    alignContent: "flex-end",
                    alignSelf: "center",
                    mx: "S",
                    my: "NONE"
                }, o().createElement(l.Button, {
                    id: "my-bookings-btn",
                    "data-popup": "new-header",
                    "data-element-name": "my-bookings-button",
                    "data-selenium": "my-bookings",
                    variant: "no-style",
                    className: Bm.Slave === e.visibility ? "outline-primary" : "transparent",
                    onClick: function() {
                        "popup" !== n || e.isLoggedIn ? s("linknew" === n) : a(!0)
                    }
                }, o().createElement(np, {
                    variant: "body1Strong",
                    short: !0,
                    textDecoration: "str",
                    color: "primary"
                }, e.text))), o().createElement(Jm, ep({
                    open: i,
                    onClose: function() {
                        a(!1)
                    },
                    onNavigateToMyBookings: s,
                    dataSelenium: "MyBookingsPopUpModal-content"
                }, e.myBookingsModalCms)))
            }, ip = n(9896), ap = n.n(ip), op = function() {
                return op = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                op.apply(this, arguments)
            }, lp = "header-help-center-button", sp = function(e) {
                return a.createElement(l.Box, {
                    display: "flex",
                    alignSelf: "center",
                    alignItems: "center",
                    mx: "L"
                }, a.createElement(l.Button, op({
                    onClick: function() {
                        e.analytics.click(lp, 1),
                        Di(e.href)
                    },
                    startIcon: a.createElement(ap(), null),
                    variant: "no-style"
                }, N(lp)), a.createElement(le, {
                    variant: "body3",
                    short: !0
                }, e.buttonText)))
            }, cp = n(1142), up = n.n(cp), dp = a.memo((function(e) {
                return a.createElement(l.Box, {
                    display: "flex",
                    flexDirection: "row",
                    "data-element-name": e.dataElementName
                }, a.createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }, a.createElement(up(), {
                    size: "XXL",
                    color: "success"
                })), a.createElement(l.Box, {
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center"
                }, e.row1Text && a.createElement(le, {
                    variant: "body1",
                    color: e.row1TextColor ? e.row1TextColor : 800
                }, e.row1Text), e.row2Text && a.createElement(le, {
                    variant: "body1",
                    color: e.row1TextColor ? e.row1TextColor : 800
                }, e.row2Text)))
            }
            )), mp = function() {
                return mp = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                mp.apply(this, arguments)
            }, pp = a.memo((function(e) {
                return a.createElement(l.Box, {
                    onClick: function() {
                        e.dataElementName && e.analytics.click(e.dataElementName, M(e))
                    },
                    onMouseOver: function() {
                        e.dataElementName && e.analytics.custom(Rt.Hover, {
                            action_element_name: e.dataElementName,
                            event_version: M(e)
                        })
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "data-element-name": e.dataElementName
                }, a.createElement(l.Popover, mp({
                    modifiers: {
                        arrow: {
                            enabled: !0
                        }
                    },
                    placement: "bottom",
                    interactionType: e.interactionType,
                    intentColor: void 0
                }, e), a.createElement("div", null, e.children && e.children)))
            }
            )), fp = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, yp = u().div.withConfig({
                displayName: "ChinaMarketingQrCodestyled__ChinaMarketingQrCodePopupContainer",
                componentId: "sc-19834qq-0"
            })(Hm || (Hm = fp(["\n    height: 198px;\n    width: 145px;\n    line-height: 10px;\n    padding: 10px;\n    text-align: center;\n"], ["\n    height: 198px;\n    width: 145px;\n    line-height: 10px;\n    padding: 10px;\n    text-align: center;\n"]))), gp = u().div.withConfig({
                displayName: "ChinaMarketingQrCodestyled__PopupTitleContainer",
                componentId: "sc-19834qq-1"
            })(Um || (Um = fp(["\n    padding: 10px 0;\n    line-height: 18px;\n    font-weight: bold;\n    font-size: 12px;\n"], ["\n    padding: 10px 0;\n    line-height: 18px;\n    font-weight: bold;\n    font-size: 12px;\n"]))), hp = u().div.withConfig({
                displayName: "ChinaMarketingQrCodestyled__WeChatQrCode",
                componentId: "sc-19834qq-2"
            })(Wm || (Wm = fp(["\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-image: url('//cdn6.agoda.net/images/CW-271/default/qrcode-wechat-v1.png');\n"], ["\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-image: url('//cdn6.agoda.net/images/CW-271/default/qrcode-wechat-v1.png');\n"]))), vp = u().div.withConfig({
                displayName: "ChinaMarketingQrCodestyled__AppDownloadQrCode",
                componentId: "sc-19834qq-3"
            })(Gm || (Gm = fp(["\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-image: url('//cdn6.agoda.net/images/CW-1685/default/BVersionHeader.png');\n"], ["\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-image: url('//cdn6.agoda.net/images/CW-1685/default/BVersionHeader.png');\n"]))), bp = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, wp = u().div.withConfig({
                displayName: "ActionBarstyled__ActionBarStyled",
                componentId: "sc-1ozl0pn-0"
            })(Xm || (Xm = bp(['\n  display: inline-block;\n  height: 60px;\n  overflow: hidden;\n\n  &:before {\n    float: right;\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 100%;\n  }\n'], ['\n  display: inline-block;\n  height: 60px;\n  overflow: hidden;\n\n  &:before {\n    float: right;\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 100%;\n  }\n'])));
            wp.displayName = "ActionBarStyled";
            var Cp, xp = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Sp = u().div.withConfig({
                displayName: "ActionItemParentstyled__ActionItemParentStyled",
                componentId: "sc-1lr3ueg-0"
            })(Cp || (Cp = xp(["\n  display: inline-block;\n  float: right;\n"], ["\n  display: inline-block;\n  float: right;\n"])));
            Sp.displayName = "ActionItemParentStyled";
            var kp, Mp = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }, Np = u().div.withConfig({
                displayName: "ActionItemstyled__ActionItemStyled",
                componentId: "sc-18hov6g-0"
            })(kp || (kp = Mp(["\n  display: inline-block;\n  float: right;\n  height: 60px;\n  padding-top: ", ";\n"], ["\n  display: inline-block;\n  float: right;\n  height: 60px;\n  padding-top: ", ";\n"])), (function(e) {
                var t = e.paddingTop;
                return "".concat(t, "px")
            }
            ));
            Np.displayName = "ActionItemStyled";
            var Ep = function() {
                return Ep = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Ep.apply(this, arguments)
            }
              , Pp = function(e) {
                var t, n, r, i, a, s, c, u, d, m, p = e.menuVm.cms, f = null === (n = null == e ? void 0 : e.rightHeaderItemsProp) || void 0 === n ? void 0 : n.shoppingCart, y = null === (r = null == e ? void 0 : e.rightHeaderItemsProp) || void 0 === r ? void 0 : r.renderCartIcon, g = null !== (i = null == f ? void 0 : f.cartItemCountText) && void 0 !== i ? i : 0;
                o().useEffect((function() {
                    g && e.analytics.custom(Rt.Seen, {
                        action_element_name: "cart-item-count",
                        action_element_value: "".concat(g)
                    })
                }
                ), [g]);
                var v = e.isShowHelpCenterEntryPoint && !!p.helpCenterText && !!e.menuVm.links && o().createElement(sp, {
                    buttonText: p.helpCenterText,
                    href: e.menuVm.links.contactLink,
                    analytics: e.analytics
                })
                  , b = ((t = {})[h.KrisFlyer] = {
                    variant: "solid",
                    shadow: "NONE"
                },
                t)[e.whiteLabelId]
                  , w = e.isChinaMarketingEnable && o().createElement(yp, null, o().createElement(gp, null, e.menuVm.downloadWechatApp ? e.menuVm.downloadWechatApp.popupCaption : ""), o().createElement(vp, null))
                  , C = e.isChinaMarketingEnable && o().createElement(yp, null, o().createElement(gp, null, e.menuVm.followWechat ? e.menuVm.followWechat.popupCaption : ""), o().createElement(hp, null))
                  , x = !e.isLoggedIn && !!F(e.featureConfigs, Yr.Login) && o().createElement(l.Button, Ep({
                    variant: "flat",
                    key: "signIn",
                    color: "primary",
                    radius: "S",
                    me: "S"
                }, b, N("sign-in-button"), {
                    onClick: e.onSignInClick
                }), o().createElement(l.Box, {
                    as: "span",
                    whiteSpace: "nowrap"
                }, z("signIn")))
                  , S = e.isCartIngressEnable && o().createElement(o().Fragment, null, o().createElement(L, {
                    shouldi: !!f && !(null === (a = e.experiments) || void 0 === a ? void 0 : a.shouldUseCartProp)
                }, o().createElement(l.Box, {
                    mx: "L",
                    alignSelf: "center",
                    "data-component": "shopping-cart"
                }, o().createElement(Pe, {
                    icon: null == f ? void 0 : f.icon,
                    iconStyles: null == f ? void 0 : f.iconStyles,
                    notificationText: null == f ? void 0 : f.cartItemCountText,
                    onClick: e.onCartIconClick
                }))), o().createElement(L, {
                    shouldi: !!y && !!(null === (s = e.experiments) || void 0 === s ? void 0 : s.shouldUseCartProp)
                }, o().createElement(l.Box, {
                    mx: "L",
                    alignSelf: "center",
                    "data-component": "cart-icon"
                }, null == y ? void 0 : y(e.onCartIconClick))))
                  , k = !e.isLoggedIn && !!F(e.featureConfigs, Yr.SignUp) && o().createElement(Ta, {
                    onSignUpClick: e.onSignUpClick,
                    analytics: e.analytics,
                    isShort: !0
                });
                return o().createElement(o().Fragment, null, o().createElement(wp, null, o().createElement(L, {
                    shouldi: !!x || !!k
                }, o().createElement(Sp, null, k && o().createElement(Np, {
                    paddingTop: 8
                }, k), x && o().createElement(Np, {
                    paddingTop: 8
                }, x))), (e.shouldShowCurrency || !e.hideLanguage) && o().createElement(Sp, null, e.shouldShowCurrency && o().createElement(Np, {
                    paddingTop: 6
                }, o().createElement(Ui, {
                    analytics: e.analytics,
                    logger: e.logger,
                    isDropDown: !1,
                    onCurrencyChange: e.onChangeCurrency,
                    selectedCurrency: e.selectedCurrency,
                    openCurrencyPopUp: e.openCurrencyPopUp
                })), !e.hideLanguage && o().createElement(Np, {
                    paddingTop: 2
                }, o().createElement(ye, {
                    analytics: e.analytics,
                    logger: e.logger,
                    cdnUrl: e.cdnUrl,
                    selectedLanguage: e.selectedLanguage,
                    isDropDown: !1,
                    isEnterpriseWhitelabel: !1,
                    openLanguagePopUp: e.openLanguagePopUp
                }))), e.isChinaMarketingEnable && o().createElement(Sp, null, o().createElement(Np, {
                    paddingTop: 14
                }, o().createElement(Mo, {
                    key: "ceg",
                    isShowHelpCenterEntryPoint: e.isShowHelpCenterEntryPoint
                }, [o().createElement(dp, {
                    key: "ceg",
                    row1Text: (null === (c = e.menuVm) || void 0 === c ? void 0 : c.cegInfo) ? null === (u = e.menuVm) || void 0 === u ? void 0 : u.cegInfo.row1Text : "",
                    row1TextColor: "success",
                    row2Text: (null === (d = e.menuVm) || void 0 === d ? void 0 : d.cegInfo) ? null === (m = e.menuVm) || void 0 === m ? void 0 : m.cegInfo.row2Text : "",
                    dataElementName: "cw-24hour-customer-service-header-menuitem"
                }), o().createElement(pp, {
                    key: "qr-dl",
                    popoverContent: w,
                    interactionType: "hover",
                    dataElementName: "cw-app-download-header-menuitem",
                    dataEventVersion: 1,
                    analytics: e.analytics
                }, o().createElement(l.Box, {
                    mt: "XS"
                }, o().createElement(xo(), {
                    size: "L"
                }))), o().createElement(pp, {
                    key: "qr-fl",
                    popoverContent: C,
                    interactionType: "hover",
                    dataElementName: "cw-wechat-subscription-header-menuitem",
                    dataEventVersion: 1,
                    analytics: e.analytics
                }, o().createElement(l.Box, {
                    mt: "XS"
                }, o().createElement(ko(), {
                    size: "L"
                })))]))), v, o().createElement(Np, {
                    paddingTop: 6
                }, o().createElement(ji, {
                    experiments: e.experiments,
                    buttonText: p.listYourPlaceText || "",
                    href: e.menuVm.links.listYourPlaceLink,
                    analytics: e.analytics
                }))), o().createElement(l.Box, {
                    alignContent: "flex-end",
                    alignSelf: "center",
                    mx: "S",
                    my: "NONE"
                }, S, (null == e ? void 0 : e.shouldShowAgodaAsPayee) && o().createElement(Rm, null), e.isShowMyBooking && o().createElement(rp, {
                    text: null == p ? void 0 : p.myBookingsText,
                    manageBookingsUrl: e.menuVm.links.manageBookingsUrl,
                    isLoggedIn: e.isLoggedIn,
                    myBookingsModalCms: p
                })))
            }
              , Vp = n(5038)
              , Tp = n.n(Vp)
              , Op = n(2101)
              , Ip = n.n(Op)
              , zp = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , Ap = function(e) {
                var t, n, r, i, o, c, u, d, m, p, f, y = zp(a.useState(null === (t = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === t ? void 0 : t.allActivePrograms), 2), g = y[0], h = y[1], v = zp(a.useState(!1), 2), b = v[0], w = v[1], C = zp(a.useState(void 0), 2), x = C[0], S = C[1], k = zp(a.useState(!1), 2), M = k[0], N = k[1], E = zp(a.useState(null === (n = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === n ? void 0 : n.selectedProgram), 2), P = E[0], V = E[1], T = zp(a.useState(!1), 2), O = T[0], I = T[1], z = function(t) {
                    if (L(t),
                    t && t.currentTarget.getAttribute("data-program-id")) {
                        var n = Number(t.currentTarget.getAttribute("data-program-id"));
                        e.analytics.click("points-max-popup-program", 9, {
                            points_max_program_id: n
                        });
                        var r = g && g.find((function(e) {
                            return e.programId === n
                        }
                        ));
                        r && (r && function(t) {
                            V(t),
                            e.setSelectedPointsMaxProgram && t && e.setSelectedPointsMaxProgram(t)
                        }(r),
                        w(!0))
                    }
                }, A = function(e) {
                    return !!(e && (null == P ? void 0 : P.regex) && e.match(null == P ? void 0 : P.regex))
                }, F = function() {
                    var t;
                    w(!1),
                    S(void 0),
                    N(!1),
                    I(!1),
                    h(null === (t = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === t ? void 0 : t.allActivePrograms),
                    e.closePopUp()
                }, B = function(t) {
                    var n;
                    L(t),
                    (null === (n = e.pointsMaxMenuViewModel) || void 0 === n ? void 0 : n.selectedProgram) && e.updateSelectedProgram && e.updateSelectedProgram(0),
                    F()
                }, R = function(e) {
                    L(e)
                }, D = function(e) {
                    L(e)
                }, L = function(e) {
                    e && e.preventDefault(),
                    e && e.stopPropagation()
                }, _ = function(e) {
                    return !(!O || !P || e.programId !== P.programId)
                }, j = null === (r = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === r ? void 0 : r.cms, q = function(e) {
                    e.key !== La.Escape && e.key !== La.Enter || F()
                }, H = function(e, t) {
                    var n;
                    return a.createElement(s.Box, {
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        pb: "s",
                        pt: "s"
                    }, a.createElement(s.Box, {
                        as: "button",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "32px",
                        height: "32px",
                        onClick: e,
                        onKeyDown: t,
                        "data-element-name": "points-max-popup-close-button"
                    }, a.createElement(s.Icon, {
                        label: null !== (n = null == j ? void 0 : j.close) && void 0 !== n ? n : "Close",
                        id: "CloseSymbolFill",
                        size: "xl3",
                        color: "neutral.4"
                    })))
                }, U = function(e) {
                    "Enter" === e.key && z(e)
                }, W = function(e) {
                    z(e)
                };
                return b ? a.createElement(a.Fragment, null, a.createElement(pt, {
                    open: e.showPopup,
                    onClose: F,
                    dataComponent: "pointsmax-modal",
                    dataSection: "pointsmax-modal",
                    "data-element-name": "points-max-popup"
                }, H(F, q), a.createElement(l.Card, {
                    radius: "S",
                    className: "PointsMaxPopup__PointsMaxContainer",
                    height: "500px"
                }, a.createElement(l.Box, {
                    p: "XXXL"
                }, a.createElement(l.Heading, {
                    variant: "h3",
                    strong: !0,
                    my: "S"
                }, null == j ? void 0 : j.linkYourAccount), a.createElement(a.Fragment, null, a.createElement(s.Input, {
                    type: "text",
                    label: null !== (i = null == j ? void 0 : j.rewardProgram) && void 0 !== i ? i : "",
                    value: null == P ? void 0 : P.translatedProgramName,
                    clearLabel: null !== (o = null == j ? void 0 : j.clear) && void 0 !== o ? o : "Clear",
                    leadingAsset: {
                        src: null !== (c = null == P ? void 0 : P.imageUrl) && void 0 !== c ? c : ""
                    },
                    trailingAsset: {
                        label: null !== (u = null == j ? void 0 : j.change) && void 0 !== u ? u : "",
                        onClick: function(e) {
                            L(e),
                            w(!1),
                            I(!0);
                            var t = null == g ? void 0 : g.filter((function(e) {
                                return e.programId !== (null == P ? void 0 : P.programId)
                            }
                            ));
                            t && P && t.splice(0, 0, P),
                            h(t)
                        }
                    },
                    readOnly: !0
                }), a.createElement(s.Input, {
                    "aria-describedby": M ? null !== (d = null == j ? void 0 : j.invalidMemberId) && void 0 !== d ? d : "Invalid Member Id" : void 0,
                    type: "text",
                    label: null !== (m = null == j ? void 0 : j.membershipNumber) && void 0 !== m ? m : "",
                    clearLabel: null !== (p = null == j ? void 0 : j.clear) && void 0 !== p ? p : "Clear",
                    helperText: M ? null !== (f = null == j ? void 0 : j.invalidMemberId) && void 0 !== f ? f : "Invalid Member Id" : function(t) {
                        var n, r = null === (n = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === n ? void 0 : n.cms.formatSample;
                        return (null == t ? void 0 : t.memberIdPattern) && r ? Ur.StringFormatter.format(r, t.memberIdPattern) : ""
                    }(P),
                    value: x,
                    onChange: function(e) {
                        S(e.currentTarget.value),
                        N(A(e.currentTarget.value))
                    },
                    intent: M ? "error" : "default"
                }))), a.createElement(l.Box, {
                    display: "flex",
                    justifyContent: "flex-end",
                    pt: "XXXXL"
                }, a.createElement(l.Box, {
                    clone: !0,
                    me: "S"
                }, a.createElement(l.Button, {
                    variant: "flat",
                    onClick: function(t) {
                        var n, r;
                        L(t),
                        P && (null == P ? void 0 : P.programId) !== (null === (r = null === (n = e.pointsMaxMenuViewModel) || void 0 === n ? void 0 : n.selectedProgram) || void 0 === r ? void 0 : r.programId) && e.updateSelectedProgram && e.updateSelectedProgram(null == P ? void 0 : P.programId),
                        F()
                    },
                    "data-selenium": "points-max-popup-enter-later"
                }, null == j ? void 0 : j.cancel)), a.createElement(l.Button, {
                    variant: "solid",
                    "data-element-name": "points-max-popup-save-button",
                    onClick: function(t) {
                        var n, r;
                        L(t),
                        x && A(x) ? (P && (null === (r = null === (n = e.pointsMaxMenuViewModel) || void 0 === n ? void 0 : n.allActivePrograms) || void 0 === r ? void 0 : r.find((function(e) {
                            return e.programId === (null == P ? void 0 : P.programId)
                        }
                        ))) ? e.updateMembership && e.updateMembership(null == P ? void 0 : P.programId, x) : P && e.createMembership && e.createMembership(null == P ? void 0 : P.programId, x),
                        F()) : N(!0)
                    },
                    px: "XXL"
                }, null == j ? void 0 : j.save))))) : a.createElement(a.Fragment, null, a.createElement(pt, {
                    open: e.showPopup,
                    onClose: F,
                    dataComponent: "pointsmax-modal",
                    dataSection: "pointsmax-modal",
                    "data-element-name": "points-max-popup"
                }, H(F, q), a.createElement(l.Card, {
                    radius: "S",
                    className: "PointsMaxPopup__PointsMaxContainer",
                    height: "500px"
                }, a.createElement(l.Box, {
                    p: "XXL"
                }, a.createElement(l.Heading, {
                    variant: "h3",
                    strong: !0
                }, null == j ? void 0 : j.title), a.createElement(l.Paragraph, {
                    mb: "S"
                }, null == j ? void 0 : j.subTitle), a.createElement(l.Box, {
                    clone: !0,
                    px: "L",
                    py: "S"
                }, a.createElement(l.Input, {
                    className: "PointsmaxMenu__SearchBox",
                    type: "text",
                    placeholder: null == j ? void 0 : j.searchPlaceHolder,
                    icon: a.createElement(Tp(), {
                        color: 300
                    }),
                    onChange: function(t) {
                        var n, r, i;
                        L(t),
                        t.currentTarget.value ? h((null === (n = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === n ? void 0 : n.allActivePrograms) && (null === (r = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === r ? void 0 : r.allActivePrograms.filter((function(e) {
                            return e.programName.toLocaleLowerCase().indexOf(t.currentTarget.value.toLocaleLowerCase()) > -1 || e.translatedProgramName.toLocaleLowerCase().indexOf(t.currentTarget.value.toLocaleLowerCase()) > -1
                        }
                        )))) : h(null === (i = null == e ? void 0 : e.pointsMaxMenuViewModel) || void 0 === i ? void 0 : i.allActivePrograms)
                    },
                    autoFocus: !0
                }), a.createElement(l.Box, {
                    mt: "L",
                    px: "NONE"
                }, O && function() {
                    var t;
                    return (null === (t = e.pointsMaxMenuViewModel) || void 0 === t ? void 0 : t.selectedProgram) ? a.createElement(l.Box, {
                        display: "flex",
                        flexDirection: "row-reverse"
                    }, a.createElement("a", {
                        id: "pointsmax-off-panel",
                        "data-element-name": "points-max-popup-turn-off-button",
                        onClick: B
                    }, a.createElement(l.Span, {
                        textSize: "S",
                        color: "secondary"
                    }, e.pointsMaxMenuViewModel.cms.turnOff))) : null
                }(), a.createElement(l.Box, {
                    display: "flex",
                    flexWrap: "wrap",
                    overflowY: "scroll",
                    maxHeight: "256px",
                    p: "NONE"
                }, g && g.map((function(e) {
                    return a.createElement(s.Card, {
                        role: "button",
                        tabIndex: 0,
                        status: "default",
                        type: "interactive",
                        key: e.programId,
                        px: "m",
                        py: "s",
                        width: "31.6%",
                        height: "100px",
                        display: "flex",
                        me: "s",
                        my: "xs",
                        alignItems: "center",
                        borderRadius: "m",
                        "data-program-id": e.programId,
                        "data-element-name": "points-max-popup-program",
                        onClick: W,
                        onKeyDown: U,
                        onMouseEnter: R,
                        onMouseLeave: D,
                        "aria-current": _(e),
                        backgroundColor: _(e) ? "primary.interactive" : void 0
                    }, function(e) {
                        return a.createElement(a.Fragment, null, a.createElement(l.Box, {
                            p: "NONE",
                            m: "NONE",
                            minWidth: "32px",
                            position: "relative"
                        }, a.createElement("img", {
                            width: "32px",
                            height: "32px",
                            src: e.imageUrl,
                            alt: ""
                        }), _(e) && a.createElement(Ip(), {
                            size: "M",
                            color: "primary"
                        })), a.createElement(l.Box, {
                            p: "S",
                            me: "S",
                            display: "inline-block",
                            width: "calc(100% - 42px)"
                        }, a.createElement(le, {
                            variant: "body4",
                            short: !1
                        }, e.translatedProgramName), _(e) && a.createElement(l.Span, {
                            textSize: "S",
                            color: "primary"
                        }, null == j ? void 0 : j.edit)))
                    }(e))
                }
                )))))))))
            }
              , Fp = function() {
                return Fp = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Fp.apply(this, arguments)
            }
              , Bp = {
                arrow: {
                    enabled: !0
                },
                positionFixed: {
                    enabled: !0
                }
            }
              , Rp = function(e) {
                return o().createElement(l.Card, Fp({
                    px: "NONE",
                    py: "NONE",
                    width: "21em"
                }, e, k({
                    dataComponentId: "hamburger-menu-dropdown-container"
                })))
            }
              , Dp = function(e) {
                return o().createElement(l.Popover, {
                    popoverContent: e.children,
                    placement: "bottom-end",
                    modifiers: Bp,
                    wrapper: Rp
                }, o().createElement(l.Box, {
                    as: "span"
                }, o().createElement(l.Button, Fp({
                    variant: "transparent"
                }, k({
                    dataComponentId: "header-hamburger-menu"
                })), o().createElement(zm(), {
                    size: "XL"
                }))))
            };
            Dp.displayName = "HamburgerMenu";
            var Lp = function() {
                return Lp = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                Lp.apply(this, arguments)
            }
              , _p = function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, a = n.call(e), o = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
                        o.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return o
            }
              , jp = function(e) {
                var t, n = _p(o().useState(e.selectedCurrency), 2), r = n[0], i = n[1], a = function(e) {
                    return i(e)
                }, c = _p(o().useState(!1), 2), u = c[0], d = c[1], y = _p(o().useState(null === (t = null == e ? void 0 : e.pointsMaxViewModel) || void 0 === t ? void 0 : t.selectedProgram), 2), g = y[0], h = y[1], v = _p(o().useState(!1), 2), b = v[0], C = v[1], x = _p(o().useState(!1), 2), M = x[0], E = x[1], P = _p(o().useState(), 2), V = P[0], T = P[1], O = _p(o().useState(), 2), z = O[0], A = O[1], B = _p(o().useState(void 0), 2), R = B[0], D = B[1], _ = function() {
                    d(!0),
                    e.analytics.custom(Rt.Reveal, {
                        action_element_name: "points-max-popup",
                        event_version: 3
                    })
                }, j = function() {
                    return d(!1)
                }, q = function() {
                    return C(!0)
                }, H = function() {
                    return C(!1)
                }, U = function() {
                    return E(!0)
                }, W = function() {
                    return E(!1)
                }, G = function(e) {
                    e.key !== La.Escape && e.key !== La.Enter || H()
                }, X = function(e) {
                    e.key !== La.Escape && e.key !== La.Enter || W()
                };
                S({
                    dataId: e.dataId || w.dataId,
                    dataValue: e.dataValue || w.dataValue,
                    dataSection: e.dataSection || w.dataSection,
                    fetch: e.fetch,
                    callbacks: e.callbacks,
                    baseApiUrl: e.baseApiUrl,
                    featureConfigs: e.featureConfigs,
                    cms: e.cms,
                    languageId: e.languageId,
                    selectedLanguage: e.selectedLanguage,
                    icons: e.icons || {},
                    shouldShowCurrency: e.shouldShowCurrency,
                    hideLanguage: !!e.hideLanguage
                });
                var K = e.params
                  , Y = o().useCallback((function() {
                    var t;
                    e.analytics.click("sign-in-button", 4);
                    var n = {
                        ottoken: null !== (t = null == V ? void 0 : V.oneTimeToken) && void 0 !== t ? t : "",
                        returnurl: "".concat(Bi()).concat(Ri())
                    };
                    e.callbacks.redirect && e.callbacks.redirect(n)
                }
                ), [V])
                  , $ = o().useCallback((function() {
                    var t, n = {
                        option: "signup",
                        ottoken: null !== (t = null == V ? void 0 : V.oneTimeToken) && void 0 !== t ? t : "",
                        returnurl: "".concat(Bi()).concat(Ri())
                    };
                    e.callbacks.redirect && e.callbacks.redirect(n)
                }
                ), [V])
                  , Z = o().useCallback((function() {
                    e.analytics.click(Qi, 5),
                    e.callbacks.signOut && e.callbacks.signOut()
                }
                ), [e.callbacks.signOut])
                  , J = function(t) {
                    e.analytics.click("currency-item", 5, {
                        action_element_value: r.code
                    }),
                    C(!1);
                    var n = co(t)
                      , i = e.callbacks.onCurrencySelected(n);
                    void 0 !== i && !0 !== i || a(n)
                }
                  , Q = function(t) {
                    W(),
                    e.analytics.click("language-trigger", 5),
                    I().onLanguageSelected(go(t))
                }
                  , ee = o().useCallback((function() {
                    var t, n;
                    e.analytics.click("cart-icon", 1),
                    null === (n = (t = e.callbacks).onRedirectToCartPage) || void 0 === n || n.call(t)
                }
                ), []);
                o().useEffect((function() {
                    var t;
                    e.isCartIngressEnable && e.analytics.custom(Rt.Seen, {
                        action_element_name: "cart-icon"
                    }),
                    (t = e.logger,
                    vo(void 0, void 0, Promise, (function() {
                        var e, n;
                        return bo(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]),
                                [4, Fe(De)];
                            case 1:
                                return e = r.sent().body,
                                [3, 3];
                            case 2:
                                return n = r.sent(),
                                t.error("Error while fetching login params", n),
                                e = Promise.resolve(void 0),
                                [3, 3];
                            case 3:
                                return [2, e]
                            }
                        }
                        ))
                    }
                    ))).then((function(e) {
                        return e && T(e)
                    }
                    )).catch((function(t) {
                        e.logger.error("Error while login params", t)
                    }
                    ))
                }
                ), []),
                o().useEffect((function() {
                    var t;
                    e.isLoggedIn ? "*" !== e.culture && (wo(e.culture, e.selectedCurrency, e.selectedLanguage, e.logger).then((function(e) {
                        return e && A(e)
                    }
                    )).catch((function() {}
                    )),
                    (t = e.logger,
                    vo(void 0, void 0, Promise, (function() {
                        var e, n, r, i;
                        return bo(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]),
                                n = ho(),
                                r = {
                                    Accept: "application/json"
                                },
                                [4, Be(je(), {
                                    Token: n
                                }, r)];
                            case 1:
                                return e = a.sent().body,
                                [3, 3];
                            case 2:
                                return i = a.sent(),
                                t.error("Error while fetching notification count", i),
                                e = void 0,
                                [3, 3];
                            case 3:
                                return [2, e]
                            }
                        }
                        ))
                    }
                    ))).then((function(e) {
                        return e && D(e)
                    }
                    )).catch((function() {}
                    ))) : (A(void 0),
                    D(void 0))
                }
                ), [e.isLoggedIn, r, e.culture]);
                var te = function(e, t, n) {
                    return o().createElement(s.Box, {
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        pb: "s",
                        pt: "s"
                    }, o().createElement(s.Box, {
                        as: "button",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "32px",
                        height: "32px",
                        onClick: e,
                        onKeyDown: t
                    }, o().createElement(s.Icon, {
                        label: null != n ? n : "Close",
                        id: "CloseSymbolFill",
                        size: "xl3",
                        color: "neutral.4"
                    })))
                }
                  , ne = function() {
                    return o().createElement(za, {
                        logger: e.logger,
                        menuVm: e.params.menuViewModel,
                        userNotifications: R,
                        whiteLabelId: e.whiteLabelId,
                        onSignInClick: Y,
                        onSignUpClick: $,
                        onSignOutClick: Z,
                        featureConfigs: e.featureConfigs,
                        analytics: e.analytics,
                        getBehaviorManager: e.getBehaviorManager,
                        isLoggedIn: e.isLoggedIn,
                        userMenuVm: z,
                        isRtl: e.isRtl,
                        isCashbackRewardsEnabled: !!e.isCashbackRewardsEnabled,
                        isPointsMaxEnabled: !!e.isPointsmaxEnabled,
                        isShowCashBackBalance: !!e.isShowCashBackBalance,
                        onPointsMaxPopUpOpen: _,
                        selectedPointsMax: g
                    }, o().createElement(Yi, {
                        experiments: e.experiments,
                        cdnUrl: e.cdnUrl,
                        wysiwyp: e.wysiwyp,
                        analytics: e.analytics,
                        logger: e.logger,
                        menuViewModel: K.menuViewModel,
                        shouldShowCurrency: e.shouldShowCurrency,
                        onCurrencyChange: e.callbacks.onCurrencySelected,
                        selectedCurrency: e.selectedCurrency,
                        openCurrencyPopUp: q,
                        openLanguagePopUp: U,
                        getBehaviorManager: e.getBehaviorManager
                    }))
                };
                return function() {
                    var t, n, i = _a[e.whiteLabelId];
                    return i ? o().createElement(i, Lp({}, e, {
                        logingParams: V,
                        userMenuVm: z,
                        notificationItems: R,
                        onChangeCurrency: a,
                        selectedCurrency: r,
                        languageSelected: Q,
                        languageId: e.languageId,
                        openCurrencyPopUp: q,
                        onSignUpClick: $,
                        onSignInClick: Y,
                        onSignOutClick: Z,
                        selectedPointsMax: g,
                        onPointsMaxPopUpOpen: _
                    })) : o().createElement(p, Lp({}, k({
                        dataComponentId: "header-container-section"
                    })), o().createElement(m, null), o().createElement(l.Box, Lp({
                        key: "logo-and-links-container",
                        display: "inline-block",
                        flex: "none",
                        px: "L",
                        py: "NONE"
                    }, k({
                        dataComponentId: "header-left-section"
                    })), o().createElement("nav", {
                        key: "header-logo-and-links-nav",
                        className: "Header__LogoAndLinks"
                    }, o().createElement(er, {
                        languageId: e.languageId,
                        analytics: e.analytics,
                        getBehaviorManager: e.getBehaviorManager,
                        culture: e.culture,
                        isRtl: e.isRtl,
                        whitelabelId: e.whiteLabelId,
                        logoAndLinks: e.params.logoAndLinksMenu
                    }), o().createElement(hr, {
                        getBehaviorManager: e.getBehaviorManager,
                        logoAndLinks: e.params.logoAndLinksMenu,
                        isRtl: e.isRtl,
                        currency: null == r ? void 0 : r.code,
                        analytics: e.analytics
                    }))), o().createElement(f, Lp({
                        key: "right-container",
                        display: "inline-flex",
                        justifyContent: "flex-end",
                        position: "relative"
                    }, k({
                        dataComponentId: "header-right-section"
                    })), o().createElement(Pp, {
                        selectedCurrency: r,
                        analytics: e.analytics,
                        experiments: e.experiments,
                        cdnUrl: e.cdnUrl,
                        selectedLanguage: e.selectedLanguage,
                        isChinaMarketingEnable: !!e.isChinaMarketingEnable,
                        logger: e.logger,
                        isShowMyBooking: !!e.isShowMyBooking,
                        hideLanguage: !!e.hideLanguage,
                        isCartIngressEnable: !!e.isCartIngressEnable,
                        shouldShowCurrency: e.shouldShowCurrency,
                        isLoggedIn: e.isLoggedIn,
                        featureConfigs: e.featureConfigs,
                        shouldShowAgodaAsPayee: !!e.shouldShowAgodaAsPayee,
                        isShowHelpCenterEntryPoint: !!e.isShowHelpCenterEntryPoint,
                        menuVm: e.params.menuViewModel,
                        onCartIconClick: ee,
                        onChangeCurrency: a,
                        openCurrencyPopUp: q,
                        openLanguagePopUp: U,
                        redirect: e.callbacks.redirect,
                        rightHeaderItemsProp: e.rightHeaderItemsProp,
                        onSignInClick: Y,
                        onSignUpClick: $,
                        whiteLabelId: e.whiteLabelId
                    }), o().createElement(L, {
                        shouldi: !!F(e.featureConfigs, Yr.Login)
                    }, o().createElement(l.Box, {
                        alignContent: "flex-end",
                        alignSelf: "center",
                        mx: "S",
                        my: "NONE"
                    }, !e.isLoggedIn && e.getBehaviorManager().isEnabled(Ea) && o().createElement(Dp, null, ne()), o().createElement(L, {
                        shouldi: e.isLoggedIn
                    }, o().createElement(l.Popover, {
                        popoverContent: ne(),
                        placement: "bottom-end",
                        modifiers: da,
                        wrapper: ua
                    }, o().createElement(s.Box, {
                        as: "button"
                    }, o().createElement(wr, Lp({}, N("user-menu")), o().createElement(ga, {
                        userNotifications: R,
                        isEnterprise: !1,
                        userMenuVm: z,
                        shouldShowGiftCardBalance: !!e.shouldShowGiftCardBalance,
                        isRtl: e.isRtl,
                        shouldShowNotificationCounter: !!e.shouldShowNotificationCounter,
                        user: e.user,
                        getBehaviorManager: e.getBehaviorManager,
                        analytics: e.analytics,
                        experiments: e.experiments
                    })))))))), o().createElement(o().Fragment, null, o().createElement(pt, {
                        width: "685px",
                        open: b,
                        onClose: H,
                        dataComponent: "currency-container-modal",
                        dataSection: "currency-modal"
                    }, o().createElement(o().Fragment, null, te(H, G, null == K ? void 0 : K.menuViewModel.cms.modalCloseIconLabel), o().createElement(io, {
                        analytics: e.analytics,
                        logger: e.logger,
                        allCurrenciesText: null == K ? void 0 : K.menuViewModel.currencyMenuViewModel.cms.allCurrenciesText,
                        suggestedCurrenciesText: null == K ? void 0 : K.menuViewModel.currencyMenuViewModel.cms.suggestedCurrenciesText,
                        topCurrenciesText: null == K ? void 0 : K.menuViewModel.currencyMenuViewModel.cms.topCurrenciesText,
                        onSelected: J,
                        languageId: e.languageId,
                        selectedCurrency: r
                    }, o().createElement(lo, {
                        applyGiftcardMenuText: null === (t = null == K ? void 0 : K.menuViewModel) || void 0 === t ? void 0 : t.applyGiftcardMenuText,
                        isApplyGiftcard: null == K ? void 0 : K.menuViewModel.isApplyGiftcard,
                        analytics: e.analytics,
                        wysiwyp: e.wysiwyp,
                        closePopup: H,
                        updatePriceView: I().updatePriceView,
                        updateApplyGiftcard: I().updateApplyGiftcard,
                        priceViewText: null == K ? void 0 : K.menuViewModel.currencyMenuViewModel.cms.priceViewText,
                        perNightBasePriceText: null == K ? void 0 : K.menuViewModel.currencyMenuViewModel.cms.perNightBasePriceText,
                        perNightWithTaxesAndFeesText: null == K ? void 0 : K.menuViewModel.currencyMenuViewModel.cms.perNightWithTaxesAndFeesText
                    })))), o().createElement(pt, {
                        width: "685px",
                        open: M,
                        onClose: W,
                        dataComponent: "language-container-modal",
                        dataSection: "mob-gallery-back-dismiss"
                    }, o().createElement(o().Fragment, null, te(W, X, null == K ? void 0 : K.menuViewModel.cms.modalCloseIconLabel), o().createElement(yo, {
                        onSelected: Q,
                        languageId: e.languageId,
                        logger: e.logger,
                        getBehaviorManager: e.getBehaviorManager
                    }))), e.isLoggedIn && (null === (n = null == e ? void 0 : e.pointsMaxViewModel) || void 0 === n ? void 0 : n.allActivePrograms) && e.isPointsmaxEnabled && o().createElement(Ap, {
                        experiments: e.experiments,
                        showPopup: u,
                        closePopUp: j,
                        pointsMaxMenuViewModel: e.pointsMaxViewModel,
                        updateSelectedProgram: e.callbacks.updateSelectedProgram,
                        createMembership: e.callbacks.createMembership,
                        updateMembership: e.callbacks.updateMembership,
                        setSelectedPointsMaxProgram: h,
                        analytics: e.analytics
                    })))
                }()
            };
            jp.displayName = "HeaderComponent";
            var qp, Hp, Up, Wp = pm(jp);
            !function(e) {
                e[e.Unknown = 0] = "Unknown",
                e[e.Web_Desktop = 1] = "Web_Desktop",
                e[e.Web_Tablet = 2] = "Web_Tablet",
                e[e.Web_Phone = 4] = "Web_Phone",
                e[e.App_Iphone = 5] = "App_Iphone",
                e[e.App_Ipad = 6] = "App_Ipad",
                e[e.App_Android_Phone = 7] = "App_Android_Phone",
                e[e.App_Android_Tablet = 8] = "App_Android_Tablet"
            }(qp || (qp = {})),
            function(e) {
                e[e.None = 0] = "None",
                e[e.Gold = 1] = "Gold",
                e[e.Silver = 2] = "Silver",
                e[e.Platinum = 3] = "Platinum",
                e[e.Bronze = 4] = "Bronze"
            }(Hp || (Hp = {})),
            function(e) {
                e.AE = "ae",
                e.BG = "bg",
                e.BR = "br",
                e.CT = "ca-es",
                e.CN = "cn",
                e.CMN = "cmn",
                e.CZ = "cz",
                e.DE = "de",
                e.DK = "dk",
                e.EE = "ee",
                e.ES = "es",
                e.FI = "fi",
                e.FR = "fr",
                e.GR = "gr",
                e.HK = "hk",
                e.HR = "hr",
                e.HU = "hu",
                e.ID = "id",
                e.IL = "il",
                e.IN = "in",
                e.IT = "it",
                e.JP = "jp",
                e.KH = "kh",
                e.KR = "kr",
                e.LA = "la",
                e.LK = "lk",
                e.LT = "lt",
                e.LV = "lv",
                e.MC = "mc",
                e.MM = "mm",
                e.MY = "my",
                e.NL = "nl",
                e.NO = "no",
                e.NP = "np",
                e.PH = "ph",
                e.PT = "pt",
                e.RO = "ro",
                e.RU = "ru",
                e.SE = "se",
                e.SI = "si",
                e.TH = "th",
                e.TR = "tr",
                e.TW = "tw",
                e.TZ = "tz",
                e.UA = "ua",
                e.US = "us",
                e.VN = "vn",
                e.YUE = "yue",
                e.ZHO = "zho",
                e.EG = "eg"
            }(Up || (Up = {}))
        }(),
        E
    }())
}