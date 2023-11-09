__d("CometRouterFocusManager.react", ["CometRouterStateContext", "FocusAppWrapper.react", "FocusManager", "focusScopeQueries", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useCallback
      , k = e.useContext
      , l = e.useEffect
      , m = e.useMemo
      , n = e.useRef
      , o = i.createContext({
        requestFocus: function(a, b, c) {}
    });
    function a() {
        return k(o)
    }
    function b(a) {
        a = a.children;
        var b = n(null)
          , e = n([])
          , f = k(c("CometRouterStateContext"))
          , g = f == null ? void 0 : f.routeKey
          , h = f == null ? void 0 : f.focusReturnRef
          , p = n((f = g) != null ? f : null)
          , q = n((f = g) != null ? f : null)
          , r = j(function(a) {
            if (p.current === a)
                return;
            if (b.current)
                if (b.current.focusKey === a)
                    return;
                else
                    window.cancelAnimationFrame(b.current.callback),
                    b.current = null;
            b.current = {
                callback: window.requestAnimationFrame(function() {
                    if (p.current === a)
                        return;
                    b.current = null;
                    var c = e.current;
                    e.current = [];
                    c.sort(function(a, b) {
                        return a.focusLevel - b.focusLevel
                    });
                    var f = document.activeElement;
                    for (var g = 0; g < c.length; g++) {
                        var h = c[g]
                          , i = h.ref.current;
                        if (!i)
                            continue;
                        if (f && i.containsNode(f)) {
                            if (d("FocusManager").wasElementAutoFocused(f)) {
                                p.current = a;
                                break
                            }
                            continue
                        }
                        d("FocusManager").focusFirst(h.autoFocusQuery || d("focusScopeQueries").headerFirstTabbableSecondScopeQuery, i, {
                            preventScroll: !0
                        });
                        p.current = a;
                        return
                    }
                }),
                focusKey: a
            }
        }, []);
        l(function() {
            if (g == null)
                return;
            q.current = g;
            if (p.current === g)
                return;
            else
                p.current = null;
            if (h && h.current) {
                var a = h.current;
                p.current = g;
                var b = window.requestAnimationFrame(function() {
                    a.focus({
                        preventScroll: !0
                    })
                });
                return function() {
                    window.cancelAnimationFrame(b)
                }
            }
            r(g)
        }, [g, h, r]);
        f = m(function() {
            return {
                requestFocus: function(a, b, c, d) {
                    if (p.current === a)
                        return;
                    e.current.push({
                        autoFocusQuery: d,
                        focusLevel: c,
                        ref: b
                    });
                    if (q.current !== a)
                        return;
                    r(a)
                }
            }
        }, [r]);
        return i.jsx(c("FocusAppWrapper.react"), {
            children: i.jsx(o.Provider, {
                value: f,
                children: a
            })
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    e = b;
    f = a;
    g.CometRouterFocusManager = e;
    g.useCometFocusProvider = f
}
), 98);