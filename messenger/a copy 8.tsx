__d("MWV2OpenThreadViewContainer.react", ["Int64Hooks", "LSFactory", "LSIntEnum", "LSVerifyThreadRowExists", "MWInboxDetailNullState.react", "MWInboxThreadViewContexts.react", "MWV2InboxDetailContainer.react", "ReQL", "ReQLSuspense", "promiseDone", "react", "useIsThreadCSAMBlocked", "useMaybeShowCSAMBlockOnce", "useReStore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")), j = h.useCallback;
    function a(a) {
        var b = a.inThreadQPBannerContainer
          , e = a.isConversationSearchVisible
          , g = a.setIsConversationSearchVisible
          , h = a.threadKey
          , k = c("useReStore")()
          , l = j(function(a) {
            return k.runInTransaction(function(b) {
                return c("LSVerifyThreadRowExists")(a, void 0, d("LSIntEnum").ofNumber(1), c("LSFactory")(b))
            }, "readwrite")
        }, [k]);
        d("Int64Hooks").useEffectInt64(function() {
            c("promiseDone")(l(h))
        }, [h, l]);
        a = d("ReQLSuspense").useFirst(function() {
            return d("ReQL").fromTableAscending(k.table("threads")).getKeyRange(h)
        }, [k, h], f.id + ":61");
        var m = c("useIsThreadCSAMBlocked")(h);
        c("useMaybeShowCSAMBlockOnce")(h, m);
        return m ? i.jsx(c("MWInboxDetailNullState.react"), {}) : a != null ? i.jsx(c("MWInboxThreadViewContexts.react"), {
            thread: a,
            children: i.jsx(c("MWV2InboxDetailContainer.react"), {
                inThreadQPBannerContainer: b,
                isConversationSearchVisible: e,
                setIsConversationSearchVisible: g,
                thread: a
            })
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);