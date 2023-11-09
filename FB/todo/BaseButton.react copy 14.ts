function T(a, c, e, f, g) {
    var i = new Map()
      , j = (g = g) != null ? g : d("BootloaderEvents").newResourceMapSet();
    g = [];
    var k = []
      , l = [];
    for (var a = W(a), m = Array.isArray(a), n = 0, a = m ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
        var o;
        if (m) {
            if (n >= a.length)
                break;
            o = a[n++]
        } else {
            n = a.next();
            if (n.done)
                break;
            o = n.value
        }
        o = o;
        var p = o[0];
        o = o[1];
        var q = void 0;
        switch (o.type) {
        case "css":
            q = o.nonblocking ? "nonblocking" : "blocking";
            break;
        case "js":
            q = "default";
            break;
        case "async":
            q = o.blocking ? "blocking" : "nonblocking";
            break;
        default:
            o.type,
            h(0, 3721)
        }
        j[q].set(p, o);
        var s = new (c("BootloaderEventsManager"))().rsrcDone(p);
        l.push(s);
        q !== "nonblocking" && (k.push(s),
        q === "blocking" && g.push(s));
        r.has(p) || i.set(p, o)
    }
    var t, u;
    !b("cr:696703") ? t = u = function(a) {
        return a()
    }
    : (u = b("cr:696703").scheduleLoggingPriCallback,
    t = b("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE());
    var v = c.onBlocking
      , w = c.onAll
      , x = c.onLog;
    v && new (c("BootloaderEventsManager"))().registerCallback(function() {
        t(v)
    }, g);
    w && new (c("BootloaderEventsManager"))().registerCallback(function() {
        t(w)
    }, k);
    x && new (c("BootloaderEventsManager"))().registerCallback(function() {
        u(function() {
            return x(j)
        })
    }, l);
    for (q = i,
    s = Array.isArray(q),
    p = 0,
    q = s ? q : q[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
        if (s) {
            if (p >= q.length)
                break;
            o = q[p++]
        } else {
            p = q.next();
            if (p.done)
                break;
            o = p.value
        }
        n = o;
        m = n[0];
        a = n[1];
        ea(m, a, e, f)
    }
}

function ea(a, b, e, f) {
    if (r.has(a))
        return;
    r.set(a, (k || (k = c("performanceAbsoluteNow")))());
    if ((b.type === "js" || b.type === "css") && b.p != null && b.d !== 1 && c("BootloaderConfig").hypStep4) {
        var g = d("CSRIndexUtil").parseCSRIndexes(b.p)
          , i = new Set()
          , l = 0;
        g.forEach(function(b, c) {
            b !== d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX && x.get(b) !== a ? i.add(c) : b > l && (l = b)
        });
        l > c("BootloaderConfig").btCutoffIndex && d("BootloaderEvents").notifyResourceInLongTailBTManifest(R(g, b.src, i, c("BootloaderConfig").btCutoffIndex), f);
        if (i.size === g.length)
            return;
        else
            i.size > 0 && (b.src = S(b.src, i),
            b.type === "js" && b.tsrc != null && b.tsrc.trim() !== "" && (b.tsrc = S(c("nullthrows")(b.tsrc), i)))
    }
    b.type === "js" && b.tsrc != null && b.tsrc.trim() !== "" && c("promiseDone")(d("MakeHasteTranslations").genFetchAndProcessTranslations(a, c("nullthrows")(b.tsrc)));
    da(b, e);
    switch (b.type) {
    case "js":
        O(a, b, function() {
            return $.done(a)
        }, e);
        break;
    case "css":
        f = function() {
            return $.done(a)
        }
        ;
        if ((j || (j = c("ExecutionEnvironment"))).isInWorker) {
            f();
            break
        }
        c("CSSLoader").loadStyleSheet(a, b.src, c("nullthrows")(e), !b.nc, f, Q(a, b, f));
        break;
    case "async":
        c("BootloaderEndpoint").load(b.module, b.blocking, a);
        break;
    default:
        b.type,
        h(0, 3721)
    }
}


function W(a) {
    var b = new Map();
    for (var e = 0; e < a.length; e++) {
        var f = a[e]
          , g = w.get(f);
        if (!g) {
            c("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", f);
            continue
        }
        var i = void 0;
        if (g.type === "csr")
            i = d("CSRIndexUtil").parseCSRIndexes(g.src);
        else if (g.p)
            i = d("CSRIndexUtil").parseCSRIndexes(g.p),
            i.includes(d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX) && b.set(f, g),
            i = i.filter(function(a) {
                return a !== d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX
            });
        else {
            b.set(f, g);
            continue
        }
        for (f = i,
        g = Array.isArray(f),
        i = 0,
        f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var j;
            if (g) {
                if (i >= f.length)
                    break;
                j = f[i++]
            } else {
                i = f.next();
                if (i.done)
                    break;
                j = i.value
            }
            j = j;
            var k = x.get(j);
            if (k == null) {
                var l = JSON.stringify(a.map(function(a) {
                    var b = J(a), c;
                    b.type === "js" || b.type === "css" ? c = b.d ? "" : b.src.split("?")[0] : c = b.src;
                    return JSON.stringify(babelHelpers["extends"]({
                        hash: a,
                        rev: y.get(a)
                    }, b, {
                        src: c,
                        tsrc: null
                    }))
                }));
                throw c("FBLogger")("bootloader", "missing-index-map").mustfixThrow("No hash for rsrcIndex " + j + " (rev: " + c("SiteData").client_revision + ", cohort: " + c("SiteData").pkg_cohort + "). " + l)
            }
            j = J(k);
            j.type !== "csr" || h(0, 20056, k);
            b.set(k, j)
        }
    }
    return b.entries()
}

function da(a) {
    a.factoryLength === -1 && (a.factoryLength = a.factory.length);
    return a.factoryLength
}