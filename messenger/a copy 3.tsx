__d("useFetchPendingGroupInvitations", ["LSFactory", "LSOptimisticFetchPendingGroupInvite", "promiseDone", "react", "useMigrateURLParamsToRouteParams", "useReStore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useEffect;
    function a() {
        var a = c("useReStore")()
          , b = c("useMigrateURLParamsToRouteParams")();
        b = b.link_hash;
        var d = b != null ? String(b) : null;
        i(function() {
            d != null && c("promiseDone")(a.runInTransaction(function(a) {
                return c("LSOptimisticFetchPendingGroupInvite")(d, void 0, void 0, c("LSFactory")(a))
            }, "readwrite"))
        }, [a, d]);
        return d
    }
    g.useFetchPendingGroupInvitations = a
}
), 98);