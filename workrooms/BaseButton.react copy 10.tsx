__d("CometRouterDispatcherContextFactory.react", ["CometRouterDispatcherContext", "gkx", "react", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext
      , j = e.useInsertionEffect
      , k = e.useMemo
      , l = e.useRef;
    function m(a) {
        var b = a.actorID
          , d = a.children
          , e = a.from
          , f = a.parentDispatcher
          , g = a.tracePolicy
          , i = a.url
          , m = k(function() {
            var a = {
                actorID: b,
                from: e,
                tracePolicy: g,
                url: i
            };
            return f.withContext(a)
        }, [b, f, e, g, i])
          , n = l(m);
        j(function() {
            n.current = m
        }, [m]);
        a = c("useStable")(function() {
            return {
                componentHistoryState: {
                    popState: function() {
                        var a;
                        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
                            c[d] = arguments[d];
                        return (a = n.current.componentHistoryState) == null ? void 0 : a.popState.apply(a, c)
                    },
                    pushState: function() {
                        var a;
                        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
                            c[d] = arguments[d];
                        return (a = n.current.componentHistoryState) == null ? void 0 : a.pushState.apply(a, c)
                    }
                },
                go: function() {
                    var a;
                    return (a = n.current).go.apply(a, arguments)
                },
                goBack: function() {
                    return n.current.goBack()
                },
                goTo: function() {
                    var a;
                    return (a = n.current).goTo.apply(a, arguments)
                },
                popPushView: function() {
                    return n.current.popPushView()
                },
                prefetchRouteDefinition: function() {
                    var a;
                    return (a = n.current).prefetchRouteDefinition.apply(a, arguments)
                },
                prefetchRouteQueries: function() {
                    var a;
                    return (a = n.current).prefetchRouteQueries.apply(a, arguments)
                },
                preloadRouteCode: function() {
                    var a;
                    return (a = n.current).preloadRouteCode.apply(a, arguments)
                },
                withContext: function() {
                    var a;
                    return (a = n.current).withContext.apply(a, arguments)
                }
            }
        });
        return m == null ? d : h.jsx(c("CometRouterDispatcherContext").Provider, {
            value: a,
            children: d
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
        var b = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        var d = i(c("CometRouterDispatcherContext"));
        return d == null ? b : h.jsx(m, babelHelpers["extends"]({}, a, {
            parentDispatcher: d,
            children: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
        var b = a.actorID
          , d = a.children
          , e = a.from
          , f = a.tracePolicy
          , g = a.url
          , j = i(c("CometRouterDispatcherContext"));
        j = k(function() {
            var a, c = {
                actorID: b,
                from: e,
                tracePolicy: f,
                url: g
            };
            return (a = j) == null ? void 0 : a.withContext(c)
        }, [b, j, e, f, g]);
        return j == null ? d : h.jsx(c("CometRouterDispatcherContext").Provider, {
            value: j,
            children: d
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    d = c("gkx")("1226") ? a : b;
    e = d;
    g["default"] = e
}
), 98);