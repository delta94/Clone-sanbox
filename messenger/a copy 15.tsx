__d("MWInboxMaster.react", ["I64", "MWChatInteraction.bs", "MWInboxDetailNullState.react", "MWInboxNewMessage.react", "MWInboxProvider.react", "MWInboxUnsupportedThreadNullState.react", "MWV2OpenThreadViewContainer.react", "MWV2SecureThreadViewContainer", "useFetchPendingGroupInvitations", "useHandlePublicChatShortlink", "cr:905", "react", "recoverableViolation", "useMWInboxURIState", "useTopMostRouteCometEntityKey"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = h || (h = d("react")), k = h.useContext;
    e = (e = c("useFetchPendingGroupInvitations")) != null ? e : {
        useFetchPendingGroupInvitations: function() {
            return null
        }
    };
    var l = e.useFetchPendingGroupInvitations
      , m = (e = b("cr:905")) != null ? e : function() {}
    ;
    function a(a) {
        var e, f = a.inThreadQPBannerContainer, g = a.isConversationSearchVisible;
        a = a.setIsConversationSearchVisible;
        m();
        var h = k(d("MWInboxProvider.react").MWInboxProviderContext)
          , n = l();
        b("cr:5434") == null ? void 0 : c("useHandlePublicChatShortlink")(n);
        n = c("useTopMostRouteCometEntityKey")();
        e = (e = n == null ? void 0 : n.entity_id) != null ? e : void 0;
        n = (n = n == null ? void 0 : n.entity_type) != null ? n : void 0;
        if (h != null)
            switch (h.type) {
            case d("useMWInboxURIState").MWInboxURIStateTag.Null:
                return j.jsx(c("MWInboxDetailNullState.react"), {
                    entityId: e,
                    entityType: n
                });
            case d("useMWInboxURIState").MWInboxURIStateTag.Recent:
                var o = h.uriStateDetails;
                if (o != null)
                    switch (o.type) {
                    case d("useMWInboxURIState").MWInboxURIStateDetailsType.Compose:
                        var p = o.initialTogglePosition;
                        return j.jsx(c("MWInboxNewMessage.react"), {
                            startingSecureTogglePositionOn: p
                        });
                    case d("useMWInboxURIState").MWInboxURIStateDetailsType.Thread:
                        p = o.fbid;
                        d("MWChatInteraction.bs").get("inbox_init") == null && d("MWChatInteraction.bs").set("inbox_init", (i || (i = d("I64"))).to_string(p));
                        return j.jsx(c("MWV2OpenThreadViewContainer.react"), {
                            inThreadQPBannerContainer: f != null ? f : null,
                            isConversationSearchVisible: g,
                            setIsConversationSearchVisible: a,
                            threadKey: p
                        }, p != null ? (i || (i = d("I64"))).to_string(p) : "");
                    case d("useMWInboxURIState").MWInboxURIStateDetailsType.SecureThread:
                        f = o.fbid;
                        if (b("cr:1000") == null)
                            return j.jsx(c("MWInboxDetailNullState.react"), {});
                        else
                            return j.jsx(c("MWV2SecureThreadViewContainer"), {
                                isConversationSearchVisible: g,
                                setIsConversationSearchVisible: a,
                                threadKey: f
                            }, f != null ? (i || (i = d("I64"))).to_string(f) : "");
                    case d("useMWInboxURIState").MWInboxURIStateDetailsType.PayThread:
                    case d("useMWInboxURIState").MWInboxURIStateDetailsType.PayFriendPicker:
                        c("recoverableViolation")("Unimplemented master view", "messenger_comet");
                        return j.jsx(c("MWInboxDetailNullState.react"), {})
                    }
                return j.jsx(c("MWInboxDetailNullState.react"), {
                    entityId: e,
                    entityType: n
                });
            case d("useMWInboxURIState").MWInboxURIStateTag.UnsupportedThread:
                return j.jsx(c("MWInboxUnsupportedThreadNullState.react"), {
                    threadKey: h.fbid
                })
            }
        c("recoverableViolation")("Unimplemented master view", "messenger_comet");
        return j.jsx(c("MWInboxDetailNullState.react"), {})
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);