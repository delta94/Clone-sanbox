__d("WorkGalahadAppTabItem.react", ["fbt", "CurrentUser", "FluxHooks", "RelayHooks", "TrackingNodes", "WorkCometEventNUX.react", "WorkGalahadNavActions", "WorkGalahadNavStore", "WorkGalahadNavUIState", "WorkGalahadSearchOverlayEventEmitter", "WorkGalahadTabTypedLogger", "WorkGalahadUIAppNavButton.react", "WorkGalahadUIAppTabSelectorIcon.react", "WorkGalahadUIAppsListItem.react", "WorkMeetingFalcoEvent", "gkx", "isClickWithModifierKey", "qpl", "react", "requireDeferred", "useChannelGeminiEntryPoint", "useWorkGalahadInteractionTracing", "useWorkUserStatus"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
        k = b.useMemo;
    c("requireDeferred")("CometLogImpressionFBNuxMutation").__setRef("WorkGalahadAppTabItem.react");
    var l = c("requireDeferred")("WorkNavigationFalcoEvent").__setRef("WorkGalahadAppTabItem.react");
    e = c("gkx")("3826");
    var m = new Set(["knowledge_library", "events", "shifts"]);
    e && m.add("home");

    function n() {
        return c("WorkGalahadNavStore").getSelectedAppTabID()
    }

    function a(a, b) {
        var e = a.badgeCount,
            f = a.isFirst,
            g = a.onHoverIn,
            h = a.onPress,
            q = a.tab;
        a = a.testid;
        a = d("RelayHooks").useRelayEnvironment();
        var r = q.defaultEntityKey,
            s = q.href,
            t = q.title,
            u = q.trackingNodeType,
            v = q.tabIconName,
            w = q.id,
            x = q.badgeRenderer,
            y = q.nuxConfig,
            z = c("useWorkUserStatus")(c("CurrentUser").getID());
        z = z.userStatus;
        var A = c("WorkGalahadNavUIState").useNavUIState();
        A = A.isAutoHideEnabled;
        var B = d("FluxHooks").useFluxStore(c("WorkGalahadNavStore"), n),
            C = B === w;
        B = o(t, e);
        q = c("useChannelGeminiEntryPoint")(q.channelEntryPoint, q.id);
        var D = q[0],
            E = q[1],
            F = q[2],
            G = q[3],
            H = q[4];
        q = j(function (a) {
            g == null ? void 0 : g(), E(a)
        }, [g, E]);
        var I = c("useWorkGalahadInteractionTracing")(c("qpl")._(53018625, "5586"), "fast", "INTERACTION", "work_galahad.channel." + w),
            J = c("gkx")("1717554") || m.has(w);
        a = j(function (a) {
            h(), I(function (b) {
                new(c("WorkGalahadTabTypedLogger"))().setSelectedTab(w).setEvent("CLICK").setBadgeCount(e).log();
                w === "meeting" && c("WorkMeetingFalcoEvent").log(function () {
                    return {
                        event: "MEETING_TAB_CLICKED",
                        surface: "MEETING_TAB"
                    }
                });
                if (c("isClickWithModifierKey")(a)) return;
                c("WorkGalahadSearchOverlayEventEmitter").emit("hide");
                b.addMetadata("has_preloaded", H ? 1 : 0);
                D();
                d("WorkGalahadNavActions").selectAppTabID(w);
                d("WorkGalahadNavActions").allowChannelAutoFocus();
                var f = J || C;
                s != null && s !== "" && s !== "#" && f && p(b, w, r, s);
                d("WorkGalahadNavActions").dismissAllStackedChannels();
                l.onReady(function (a) {
                    a = a.log;
                    a(function () {
                        return {
                            event: C ? "app_tab_double_click" : "app_tab_click",
                            app_tab: w
                        }
                    })
                })
            })
        }, [e, r, H, s, w, C, a, D, I, J, h]);
        var K = k(function () {
                return i.jsx(c("WorkGalahadUIAppTabSelectorIcon.react"), {
                    selected: C,
                    icon: v
                })
            }, [C, v]),
            L = J ? !1 : !C,
            M = {
                href: s != null ? s : void 0,
                elementId: w,
                label: t,
                ariaLabel: B,
                selected: C,
                useGreyBadging: A || z === "doNotDisturb",
                linkDataFT: u != null ? c("TrackingNodes").getTrackingInfo(u) : void 0,
                "data-testid": "app_tab_selector_" + w,
                onPress: a,
                preventLocalNavigation: L,
                addOn: K,
                BadgeRenderer: x,
                onHoverIn: q,
                onHoverOut: F,
                onPressIn: G
            };
        t = y ? i.jsx(d("WorkCometEventNUX.react").WorkCometEventNUX, babelHelpers["extends"]({}, y, {
            children: function (a) {
                return i.jsx(c("WorkGalahadUIAppNavButton.react"), babelHelpers["extends"]({}, M, {
                    ref: a
                }))
            }
        })) : i.jsx(c("WorkGalahadUIAppNavButton.react"), babelHelpers["extends"]({}, M));
        return i.jsx(c("WorkGalahadUIAppsListItem.react"), {
            ref: b,
            testid: void 0,
            withTopSpacing: !f,
            children: t
        }, w)
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function o(a, b) {
        return b > 0 ? h._({
            "*": "{title}, {number} new items",
            "_1": "{title}, 1 new item"
        }, [h._plural(b, "number"), h._param("title", a)]) : a
    }

    function p(a, b, c, e) {
        a.addMetadata("full_page_transition", 1), d("WorkGalahadNavActions").markPendingTransition({
            appTabID: b,
            entityKey: c,
            uri: e
        })
    }
    b = i.forwardRef(a);
    e = i.memo(b);
    g["default"] = e
}), 98);