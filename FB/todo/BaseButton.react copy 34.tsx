__d("Scheduler-profiling.classic", ["SchedulerFeatureFlags"], (function(b, c, d, e, f, g) {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var h = c("SchedulerFeatureFlags").enableProfiling;
    function i(b, c) {
        var d = b.length;
        b.push(c);
        a: for (; 0 < d; ) {
            var e = d - 1 >>> 1
              , f = b[e];
            if (0 < l(f, c))
                b[e] = c,
                b[d] = f,
                d = e;
            else
                break a
        }
    }
    function j(b) {
        return 0 === b.length ? null : b[0]
    }
    function k(b) {
        if (0 === b.length)
            return null;
        var c = b[0]
          , d = b.pop();
        if (d !== c) {
            b[0] = d;
            a: for (var e = 0, f = b.length, g = f >>> 1; e < g; ) {
                var h = 2 * (e + 1) - 1
                  , i = b[h]
                  , j = h + 1
                  , k = b[j];
                if (0 > l(i, d))
                    j < f && 0 > l(k, i) ? (b[e] = k,
                    b[j] = d,
                    e = j) : (b[e] = i,
                    b[h] = d,
                    e = h);
                else if (j < f && 0 > l(k, d))
                    b[e] = k,
                    b[j] = d,
                    e = j;
                else
                    break a
            }
        }
        return c
    }
    function l(b, c) {
        var d = b.sortIndex - c.sortIndex;
        return 0 !== d ? d : b.id - c.id
    }
    var m = 0
      , n = 0
      , o = 0
      , p = null
      , q = null
      , r = 0;
    function s(b) {
        if (null !== q) {
            var c = r;
            r += b.length;
            if (r + 1 > o) {
                o *= 2;
                if (524288 < o) {
                    t();
                    return
                }
                var d = new Int32Array(4 * o);
                d.set(q);
                p = d.buffer;
                q = d
            }
            q.set(b, c)
        }
    }
    function b() {
        o = 131072,
        p = new ArrayBuffer(4 * o),
        q = new Int32Array(p),
        r = 0
    }
    function t() {
        var b = p;
        o = 0;
        q = p = null;
        r = 0;
        return b
    }
    g.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var u = performance;
        g.unstable_now = function() {
            return u.now()
        }
    } else {
        var v = Date
          , w = v.now();
        g.unstable_now = function() {
            return v.now() - w
        }
    }
    var x = []
      , y = []
      , z = 1
      , A = !1
      , B = null
      , C = 3
      , D = !1
      , E = !1
      , F = !1
      , G = "function" === typeof setTimeout ? setTimeout : null
      , H = "function" === typeof clearTimeout ? clearTimeout : null
      , I = "undefined" !== typeof setImmediate ? setImmediate : null
      , J = "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null
      , K = {
        includeContinuous: !0
    };
    function L(b) {
        for (var c = j(y); null !== c; ) {
            if (null === c.callback)
                k(y);
            else if (c.startTime <= b)
                k(y),
                c.sortIndex = c.expirationTime,
                i(x, c),
                h && (h && null !== q && s([1, 1e3 * b, c.id, c.priorityLevel]),
                c.isQueued = !0);
            else
                break;
            c = j(y)
        }
    }
    function M(b) {
        F = !1;
        L(b);
        if (!E)
            if (null !== j(x))
                E = !0,
                X();
            else {
                var c = j(y);
                null !== c && Y(M, c.startTime - b)
            }
    }
    function N(b) {
        L(b);
        for (B = j(x); !(null === B || A || B.expirationTime > b && T()); ) {
            var c = B.callback;
            if ("function" === typeof c) {
                B.callback = null;
                C = B.priorityLevel;
                var d = B.expirationTime <= b;
                if (h) {
                    var e = B;
                    h && (m++,
                    null !== q && s([5, 1e3 * b, e.id, m]))
                }
                c = c(d);
                b = g.unstable_now();
                if ("function" === typeof c)
                    return B.callback = c,
                    h && h && null !== q && s([6, 1e3 * b, B.id, m]),
                    L(b),
                    !0;
                h && (h && null !== q && s([2, 1e3 * b, B.id]),
                B.isQueued = !1);
                B === j(x) && k(x);
                L(b)
            } else
                k(x);
            B = j(x)
        }
        if (null !== B)
            return !0;
        c = j(y);
        null !== c && Y(M, c.startTime - b);
        return !1
    }
    var O = !1
      , P = -1
      , Q = 5
      , R = -1
      , S = !1;
    function T() {
        var b = g.unstable_now() - R;
        if (b < Q)
            return !1;
        if (S)
            return !0;
        if (10 > b) {
            if (null !== J)
                return J()
        } else if (10 > b && null !== J)
            return J(K);
        return !0
    }
    function U() {
        if (O) {
            var b = g.unstable_now();
            R = b;
            var c = !0;
            try {
                a: {
                    h && h && null !== q && s([8, 1e3 * b, n]);
                    E = !1;
                    F && (F = !1,
                    H(P),
                    P = -1);
                    D = !0;
                    var d = C;
                    try {
                        if (h)
                            try {
                                c = N(b);
                                break a
                            } catch (b) {
                                if (null !== B) {
                                    var e = g.unstable_now();
                                    h && null !== q && s([3, 1e3 * e, B.id]);
                                    B.isQueued = !1
                                }
                                throw b
                            }
                        else {
                            c = N(b);
                            break a
                        }
                    } finally {
                        if (B = null,
                        C = d,
                        D = !1,
                        h) {
                            e = g.unstable_now();
                            h && (n++,
                            null !== q && s([7, 1e3 * e, n]))
                        }
                    }
                    c = void 0
                }
            } finally {
                c ? V() : O = !1
            }
        }
        S = !1
    }
    var V;
    if ("function" === typeof I)
        V = function() {
            I(U)
        }
        ;
    else if ("undefined" !== typeof MessageChannel) {
        d = new MessageChannel();
        var W = d.port2;
        d.port1.onmessage = U;
        V = function() {
            W.postMessage(null)
        }
    } else
        V = function() {
            G(U, 0)
        }
        ;
    function X() {
        O || (O = !0,
        V())
    }
    function Y(b, c) {
        P = G(function() {
            b(g.unstable_now())
        }, c)
    }
    e = h ? {
        startLoggingProfilingEvents: b,
        stopLoggingProfilingEvents: t
    } : null;
    g.unstable_IdlePriority = 5;
    g.unstable_ImmediatePriority = 1;
    g.unstable_LowPriority = 4;
    g.unstable_NormalPriority = 3;
    g.unstable_Profiling = e;
    g.unstable_UserBlockingPriority = 2;
    g.unstable_cancelCallback = function(b) {
        if (h && b.isQueued) {
            var c = g.unstable_now();
            h && null !== q && s([4, 1e3 * c, b.id]);
            b.isQueued = !1
        }
        b.callback = null
    }
    ;
    g.unstable_continueExecution = function() {
        A = !1,
        E || D || (E = !0,
        X())
    }
    ;
    g.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? !1 : Q = 0 < b ? Math.floor(1e3 / b) : 5
    }
    ;
    g.unstable_getCurrentPriorityLevel = function() {
        return C
    }
    ;
    g.unstable_getFirstCallbackNode = function() {
        return j(x)
    }
    ;
    g.unstable_next = function(b) {
        switch (C) {
        case 1:
        case 2:
        case 3:
            var c = 3;
            break;
        default:
            c = C
        }
        var d = C;
        C = c;
        try {
            return b()
        } finally {
            C = d
        }
    }
    ;
    g.unstable_pauseExecution = function() {
        A = !0
    }
    ;
    g.unstable_requestPaint = function() {
        void 0 !== navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && (S = !0)
    }
    ;
    g.unstable_runWithPriority = function(b, c) {
        switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            b = 3
        }
        var d = C;
        C = b;
        try {
            return c()
        } finally {
            C = d
        }
    }
    ;
    g.unstable_scheduleCallback = function(b, c, d) {
        var e = g.unstable_now();
        "object" === typeof d && null !== d ? (d = d.delay,
        d = "number" === typeof d && 0 < d ? e + d : e) : d = e;
        switch (b) {
        case 1:
            var f = -1;
            break;
        case 2:
            f = 250;
            break;
        case 5:
            f = 1073741823;
            break;
        case 4:
            f = 1e4;
            break;
        default:
            f = 5e3
        }
        f = d + f;
        b = {
            id: z++,
            callback: c,
            priorityLevel: b,
            startTime: d,
            expirationTime: f,
            sortIndex: -1
        };
        h && (b.isQueued = !1);
        d > e ? (b.sortIndex = d,
        i(y, b),
        null === j(x) && b === j(y) && (F ? (H(P),
        P = -1) : F = !0,
        Y(M, d - e))) : (b.sortIndex = f,
        i(x, b),
        h && (h && null !== q && s([1, 1e3 * e, b.id, b.priorityLevel]),
        b.isQueued = !0),
        E || D || (E = !0,
        X()));
        return b
    }
    ;
    g.unstable_shouldYield = T;
    g.unstable_wrapCallback = function(b) {
        var c = C;
        return function() {
            var d = C;
            C = c;
            try {
                return b.apply(this, arguments)
            } finally {
                C = d
            }
        }
    }
    ;
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
}
), null);