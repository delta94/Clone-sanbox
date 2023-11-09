__d("MWV2SecureThreadViewContainer.react", ["Int64Hooks", "LSFactory", "LSIntEnum", "LSVerifyThreadRowExists", "MAWMiActLoadExistingThread", "MAWThreadCutover", "MWInboxDetailNullState.react", "MWInboxThreadViewContexts.react", "MWLSThread", "MWV2InboxDetailContainer.react", "promiseDone", "react", "useIsThreadCSAMBlocked", "useMaybeShowCSAMBlockOnce", "useReStore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");
    function j(a, b) {
        return a.runInTransaction(function(a) {
            return c("LSVerifyThreadRowExists")(b, void 0, d("LSIntEnum").ofNumber(1), c("LSFactory")(a))
        }, "readwrite")
    }
    function k(a) {
        var b = c("useReStore")()
          , e = d("MAWThreadCutover").useCutoverOpenThread(a);
        d("Int64Hooks").useEffectInt64(function() {
            c("promiseDone")(c("MAWMiActLoadExistingThread")(b, a)),
            e && c("promiseDone")(j(b, e.threadKey))
        }, [b, a, e])
    }
    function a(a) {
        var b = a.isConversationSearchVisible
          , e = a.setIsConversationSearchVisible;
        a = a.threadKey;
        var f = d("MWLSThread").useThread(a);
        k(a);
        var g = c("useIsThreadCSAMBlocked")(a);
        c("useMaybeShowCSAMBlockOnce")(a, g);
        return g ? i.jsx(c("MWInboxDetailNullState.react"), {}) : f != null ? i.jsx(c("MWInboxThreadViewContexts.react"), {
            thread: f,
            children: i.jsx(c("MWV2InboxDetailContainer.react"), {
                isConversationSearchVisible: b,
                setIsConversationSearchVisible: e,
                thread: f
            })
        }) : i.jsx(c("MWInboxDetailNullState.react"), {})
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);