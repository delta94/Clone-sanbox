__d("useMWInboxURIState", ["CometRouteParams", "CometRouteURL", "ConstUriUtils", "CurrentEnvironment", "FBLogger", "I64", "LSMessagingThreadTypeUtil", "MAWGating", "MWCMIsAnyCMThread", "MessengerURIConstants", "ReQL", "ReQLSuspense", "gkx", "nullthrows", "useCurrentRoute", "useGroupThreadViewParams", "useReStore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = "Compose";
    var i = "PayFriendPicker"
      , j = "PayThread"
      , k = "SecureThread"
      , l = "Thread";
    e = {
        Compose: e
    };
    i = {
        PayFriendPicker: i,
        PayThread: j
    };
    j = {
        SecureThread: k,
        Thread: l
    };
    var m = babelHelpers["extends"]({}, e, i, j);
    k = "Null";
    l = "Payment";
    e = "People";
    i = "Search";
    j = "SearchMessages";
    var n = "SeeAllGroups"
      , o = "SeeAllPages"
      , p = "SeeAllPeople"
      , q = "SeeAllUnread"
      , r = "TeamworkSeeAllAnnouncementGroups"
      , s = "Recent"
      , t = "UnsupportedThread";
    k = {
        Null: k,
        Payment: l,
        People: e,
        Search: i,
        SearchMessages: j,
        SeeAllGroups: n,
        SeeAllPages: o,
        SeeAllPeople: p,
        SeeAllUnread: q,
        TeamworkSeeAllAnnouncementGroups: r
    };
    l = {
        Recent: s
    };
    e = {
        UnsupportedThread: t
    };
    var u = babelHelpers["extends"]({}, k, l, e)
      , v = "/?$";
    function w(a) {
        a = a.match(new RegExp(c("MessengerURIConstants").THREAD_PREFIX + "([^/]+)/?$"));
        if (a != null)
            return decodeURIComponent(a[1])
    }
    var x = c("CurrentEnvironment").instagramdotcom ? c("MessengerURIConstants").INSTAGRAM_DIRECT_PATH : c("CurrentEnvironment").facebookdotcom ? c("MessengerURIConstants").FACEBOOK_PREFIX : "";
    function y(a) {
        a = new URL(a.url,window.location.origin);
        var b = a.pathname;
        a = a.searchParams;
        var e = new RegExp("^" + (x + "(/|$)"));
        if (c("CurrentEnvironment").facebookdotcom && !e.test(b))
            throw c("FBLogger")("messenger_web_product").mustfixThrow("MWInboxURIState.NonMessengerState wrong CurrentEnvironment pattern for %s", x);
        b = b.replace(e, "/");
        e = a == null ? void 0 : a.get("fbid");
        a = a == null ? void 0 : a.get("id");
        if (b.match(new RegExp("^" + c("MessengerURIConstants").PEOPLE_PATH)) != null)
            return {
                type: u.People
            };
        if (b.match(new RegExp("^" + c("MessengerURIConstants").PAYMENT_PATH)) != null)
            return {
                type: u.Payment
            };
        if (b.match(new RegExp("^" + c("MessengerURIConstants").SEARCH_PATH)) != null)
            return {
                type: u.Search
            };
        if (b.match(new RegExp("^" + c("MessengerURIConstants").TEAMWORK_GROUP_VIEW)) != null)
            return {
                type: u.SeeAllGroups
            };
        if (b.match(new RegExp("^" + c("MessengerURIConstants").TEAMWORK_CHAT_VIEW)) != null)
            return {
                type: u.SeeAllPeople
            };
        if (b.match(new RegExp("^" + c("MessengerURIConstants").TEAMWORK_UNREAD_VIEW)) != null)
            return {
                type: u.SeeAllUnread
            };
        if (b.match(new RegExp("^" + c("MessengerURIConstants").TEAMWORK_ANNOUNCEMENT_GROUP_VIEW)) != null)
            return {
                type: u.TeamworkSeeAllAnnouncementGroups
            };
        if (b === "/read/")
            return {
                type: u.Recent,
                uriStateDetails: e != null ? {
                    fbid: (h || (h = d("I64"))).of_string(e),
                    type: m.Thread
                } : void 0
            };
        if (b.match(new RegExp("^" + (c("MessengerURIConstants").COMPOSE_SUBPATH + v))) != null)
            return {
                type: u.Recent,
                uriStateDetails: {
                    initialTogglePosition: "E2EEToggleOff",
                    type: m.Compose
                }
            };
        if (b.match(new RegExp("^" + (c("MessengerURIConstants").PAYMENT_PATH + c("MessengerURIConstants").PAYMENT_PAY_PATH))) != null)
            return {
                type: u.Recent,
                uriStateDetails: {
                    fbid: void 0,
                    type: a != null ? m.PayThread : m.PayFriendPicker
                }
            };
        e = A(w(b));
        return {
            type: u.Recent,
            uriStateDetails: e != null ? {
                fbid: e,
                type: m.Thread
            } : void 0
        }
    }
    var z = c("gkx")("1968579") || c("gkx")("6975");
    function a(a) {
        return new URL(a,window.location.origin).pathname.split("/")
    }
    function A(a) {
        try {
            return a != null ? (h || (h = d("I64"))).of_string_opt(a) : void 0
        } catch (a) {
            return void 0
        }
    }
    function b(a) {
        var b, e = c("useReStore")(), g = c("useCurrentRoute")(), i = d("CometRouteURL").useRouteURLPath(), j = c("useGroupThreadViewParams")();
        a = A(a);
        var k = d("CometRouteParams").useRouteParams();
        b = a != null ? (b = d("ReQLSuspense").first(d("ReQL").fromTableAscending(e.table("threads")).getKeyRange(a), f.id + ":319")) == null ? void 0 : b.threadType : null;
        var l = b != null ? c("MWCMIsAnyCMThread")(b) : !1
          , n = b != null ? d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannelWithNoAccessibility(b) : !1;
        if (j != null)
            return {
                type: u.Recent,
                uriStateDetails: {
                    fbid: (h || (h = d("I64"))).of_string(j.threadKey),
                    type: m.Thread
                }
            };
        if (g == null)
            return {
                type: u.Null
            };
        if (!i.startsWith(x) && !i.startsWith(c("MessengerURIConstants").GROUPS_PATH))
            throw c("FBLogger")("messenger_web_product").mustfixThrow("MWInboxURIState.NonMessengerState wrong groups path %s", i);
        j = k.initial_e2ee_toggle_position === "1" || k.initial_e2ee_toggle_position === 1 || k.initial_e2ee_toggle_position === !0 ? "E2EEToggleOn" : "E2EEToggleOff";
        i = g.url.substring(x.length);
        i = c("nullthrows")((k = d("ConstUriUtils").getUri(i)) == null ? void 0 : k.getPath().split("/"));
        if (a != null) {
            if (i.length === 4 && i[0] === "" && i[1] === "e2ee" && i[2] === "t" && d("MAWGating").isArmadillo())
                return {
                    type: u.Recent,
                    uriStateDetails: {
                        fbid: a,
                        type: m.SecureThread
                    }
                };
            if (b != null && d("LSMessagingThreadTypeUtil").isSecure(b))
                return y(g);
            if (l && !z)
                return {
                    type: u.Null
                };
            return n ? {
                fbid: a,
                type: u.UnsupportedThread
            } : {
                type: u.Recent,
                uriStateDetails: {
                    fbid: a,
                    type: m.Thread
                }
            }
        }
        if (i == null)
            return y(g);
        switch (i.length) {
        case 2:
            return i[1] === "new" ? {
                type: u.Recent,
                uriStateDetails: {
                    initialTogglePosition: j,
                    type: m.Compose
                }
            } : y(g);
        case 3:
            if (i[1] !== "t")
                return y(g);
            if (i[2] === "")
                return y(g);
            k = A(i[2]);
            b = k != null ? d("ReQLSuspense").first(d("ReQL").fromTableAscending(e.table("threads")).getKeyRange(k), f.id + ":433") : null;
            return k != null && b != null && d("LSMessagingThreadTypeUtil").isSecure(b == null ? void 0 : b.threadType) ? {
                type: u.Recent,
                uriStateDetails: {
                    fbid: k,
                    type: m.Thread
                }
            } : {
                type: u.Null
            };
        case 0:
        case 1:
        default:
            return y(g)
        }
    }
    g.MWInboxURIStateDetailsType = m;
    g.MWInboxURIStateTag = u;
    g.getRouteTokens = a;
    g.useMWInboxURIState = b
}
), 98);