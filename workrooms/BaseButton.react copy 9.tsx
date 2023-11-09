__d("BaseActorProvider", ["CometRelay", "CometRouterDispatcherContextFactory.react", "CometTransientDialogProvider.react", "RelayEnvironmentFactoryProvider", "react", "recoverableViolation", "unrecoverableViolation", "usePrevious"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useMemo
      , j = e.useState;
    function a(a) {
        return function() {
            throw c("unrecoverableViolation")("You are " + a + " the Actor from a React component that is not a descendent of ActorProvider.", "groups_comet")
        }
    }
    var k = h.createContext({
        get: a("reading"),
        set: a("setting")
    });
    function b(a) {
        var b = a.actorEnvironmentKey_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING
          , e = a.children
          , f = a.initialActorID
          , g = a.readonly
          , l = g === void 0 ? !1 : g;
        g = a.relayEnvironmentFactory;
        a = a.scope;
        a = a === void 0 ? null : a;
        var m = j(f)
          , n = m[0]
          , o = m[1];
        m = c("usePrevious")(a);
        var p = c("usePrevious")(f);
        g = d("RelayEnvironmentFactoryProvider").useRelayEnvironmentFactoryWithFallback(g);
        b = g.getForActorID(n, b);
        p = p != null && p !== f;
        m = m != null && m !== a;
        (p || m) && n !== f && o(f);
        a = i(function() {
            return {
                get: function() {
                    return n
                },
                set: function(a) {
                    if (l) {
                        c("recoverableViolation")("You tried to update the Actor ID, but the <ActorProvider /> closest to your useActor() call has a read-only Actor ID. To fix this, wrap the React tree that you want to set an Actor ID for with your own <ActorProvider />.", "groups_comet");
                        return
                    }
                    o(a)
                }
            }
        }, [n, l]);
        return h.jsx(k.Provider, {
            value: a,
            children: h.jsx(d("CometRelay").RelayEnvironmentProvider, {
                environment: b,
                getEnvironmentForActor: g.getForActor,
                children: h.jsx(c("CometRouterDispatcherContextFactory.react"), {
                    actorID: n,
                    children: h.jsx(c("CometTransientDialogProvider.react"), {
                        children: e
                    })
                })
            })
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.ActorContext = k;
    g.BaseActorProvider = b
}
), 98);