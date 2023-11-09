__d("CometRouterFocusRegion.react", ["CometRouterFocusManager.react", "CometRouterStateContext", "HiddenSubtreePassiveContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useContext
      , k = b.useEffect
      , l = b.useRef
      , m = i.unstable_Scope
      , n = i.createContext(-1);
    function a(a) {
        var b = a.autoFocusQuery;
        a = a.children;
        var e = l(null)
          , f = l(null)
          , g = j(c("HiddenSubtreePassiveContext"))
          , h = d("CometRouterFocusManager.react").useCometFocusProvider()
          , o = j(n)
          , p = j(c("CometRouterStateContext"))
          , q = p == null ? void 0 : p.routeKey;
        k(function() {
            if (q != null && h) {
                if (q !== f.current)
                    if (g.getCurrentState().hiddenOrBackgrounded) {
                        var a = g.subscribeToChanges(function(c) {
                            c.hiddenOrBackgrounded || (h.requestFocus(q, e, o, b),
                            a && (a.remove(),
                            a = null))
                        });
                        return function() {
                            a && (a.remove(),
                            a = null)
                        }
                    } else
                        h.requestFocus(q, e, o, b);
                f.current = q
            }
        }, [b, h, g, q, o]);
        return i.jsx(m, {
            ref: e,
            children: i.jsx(n.Provider, {
                value: o + 1,
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = a;
    g["default"] = e
}
), 98);