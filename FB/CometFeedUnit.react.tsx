__d("CometFeedUnit.react", ["ActorHovercardContext", "CometErrorProjectContext", "CometFeedBrandSafetyContext", "CometFeedUnitCard.react", "CometFeedUnitContainerSection.react", "CometFeedUnitErrorBoundary.react", "CometFeedUnitLoadingContext", "CometFeedUnitLoggingContext", "CometFeedUnitOnUnsupportedLoggerContext", "CometFeedUnitPostRenderingLoggersContext", "CometFeedUnitQueryVariablesContext", "CometFeedUnitSetDebugInfoContext", "CometFeedUnitSetStatusContext", "CometFeedUnit_feedUnit.graphql", "CometFeedUnit_newsFeedEdge.graphql", "CometFeedUnit_trackableFeedUnit.graphql", "CometHovercardGroupContext", "CometOffscreenScrollCompensator.react", "CometProfiler.react", "CometRelay", "FBLogger", "FocusRegion.react", "HiddenSubtreePassiveContext", "InteractionTracing", "RecoverableViolationWithComponentStack.react", "cr:12345", "cr:1326", "cr:1829844", "cr:3094", "deferredLoadComponent", "focusScopeQueries", "gkx", "joinClasses", "react", "requireDeferred", "unrecoverableViolation", "useActorHovercardContext", "useMergeRefs", "usePostRenderingLogger", "useStoryViewabilityLogger", "useVisibilityObserver"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = d("react");
    e = d("react");
    var l = e.useCallback,
        m = e.useContext,
        n = e.useEffect,
        o = e.useLayoutEffect,
        p = e.useMemo,
        q = e.useRef,
        r = e.useState,
        s = (e = b("cr:3094")) != null ? e : k.Fragment,
        t = c("deferredLoadComponent")(c("requireDeferred")("CometFeedUnitLoadingIndicatorMask.react").__setRef("CometFeedUnit.react")),
        u = window.atob && window.atob("c3BvbnNvcmVkX2Fk"),
        v = h !== void 0 ? h : h = b("CometFeedUnit_feedUnit.graphql"),
        w = i !== void 0 ? i : i = b("CometFeedUnit_trackableFeedUnit.graphql"),
        x = j !== void 0 ? j : j = b("CometFeedUnit_newsFeedEdge.graphql"),
        y = {
            event_name: "ad_validate_image",
            event_sub_type: "feed_unit_full_impression",
            is_cta_shown: null
        },
        z = [5, 8],
        A = c("gkx")("4319") ? [d("focusScopeQueries").focusableScopeQuery, d("focusScopeQueries").headerAndSpinnerFocusScopeQuery] : null;

    function B(a) {
        var b = a.children,
            d = a.debuggingInfoLoggers,
            e = a.loggingRef,
            f = a.visibilityObserverRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "debuggingInfoLoggers", "loggingRef", "visibilityObserverRef"]);
        f = c("useMergeRefs")(f, e);
        return k.jsxs("div", babelHelpers["extends"]({}, a, {
            ref: f,
            children: [d, b]
        }))
    }
    B.displayName = B.name + " [from " + f.id + "]";

    function a(a) {
        var e, f, g = a.category,
            h = a.minGapType,
            i = a.onError,
            j = a.position,
            C = a.variables;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["category", "minGapType", "onError", "position", "variables"]);
        var D = d("CometRelay").useFragment(v, a.feedUnit);
        if (D == null) throw c("unrecoverableViolation")("Relay fragment feedUnit cannot be null/undefined in CometFeedUnit", "comet_feed");
        var E = d("CometRelay").useFragment(w, D),
            F = E.client_view_config,
            G = E.trackingdata;
        E = E.viewability_config;
        var H = d("CometRelay").useFragment(x, a.newsFeedEdge);
        G = (G = G) != null ? G : {};
        G = G.id;
        var I = C.renderLocation,
            J = r(!1),
            K = J[0],
            L = J[1];
        J = p(function () {
            return {
                onFinishLoading: function () {
                    return L(!1)
                },
                onStartLoading: function () {
                    return L(!0)
                }
            }
        }, []);
        var M = (e = D.feedback) == null ? void 0 : e.associated_group;
        e = M == null ? void 0 : M.context_actor_hovercard;
        var N = c("useActorHovercardContext")();
        e = (D == null ? void 0 : D.is_story_civic) === !0 ? "CIVIC_POST" : (e = e) != null ? e : N;
        N = p(function () {
            var a;
            return {
                groupID: (a = M == null ? void 0 : M.id) != null ? a : void 0
            }
        }, [M == null ? void 0 : M.id]);
        var O = m(d("CometFeedUnitSetStatusContext").CometFeedUnitSetStatusContext),
            P = m(c("CometFeedBrandSafetyContext"));
        if (P) {
            P = P();
            P = P.feedUnitRegistry;
            var Q = H == null ? void 0 : H.deduplication_key;
            if (Q != null) {
                P[Q] = {
                    brsContentLabel: H == null ? void 0 : H.brs_content_label,
                    brsFilterSetting: D == null ? void 0 : (P = D.sponsored_data) == null ? void 0 : P.brs_filter_setting,
                    tracking: G,
                    unitType: D.__typename
                }
            } else a.newsFeedEdge != null && c("FBLogger")("comet_feed_unit").mustfix("NewsFeedEdge deduplicationKey %s is nullish, even though newsFeedEdge prop was provided. FeedUnit id: %s", Q, D.id)
        }
        var R = q(!1),
            S = m(d("CometFeedUnitOnUnsupportedLoggerContext").CometFeedUnitOnUnsupportedLoggerContext);
        o(function () {
            j === 0 && R.current === !1 && c("InteractionTracing").getPendingInteractions().forEach(function (a) {
                a.addMarkerPoint("FirstFeedUnitMount", "AppTiming")
            }), R.current = !0
        }, [j]);
        n(function () {
            return O("rendered")
        }, [O]);
        H = l(function () {
            c("InteractionTracing").getPendingInteractions().forEach(function (a) {
                a.addAnnotationInt("unsupportedFeedUnit", 1)
            }), S(), O("error")
        }, [S, O]);
        var T = m(c("CometFeedUnitSetDebugInfoContext")),
            U = D.debug_info,
            V = D.id,
            W = q(!1),
            X = m(c("HiddenSubtreePassiveContext")),
            Y = l(function () {
                if (!X.getCurrentState().hiddenOrBackgrounded_FIXME) {
                    var a;
                    T(j, {
                        debugInfo: (a = U) != null ? a : null,
                        storyId: (a = V) != null ? a : null,
                        visible: W.current
                    })
                }
            }, [U, X, V, j, T]);
        P = l(function () {
            W.current = !1, Y()
        }, [Y]);
        Q = l(function () {
            W.current = !0, Y()
        }, [Y]);
        P = c("useVisibilityObserver")({
            onHidden: P,
            onVisible: Q
        });
        Q = {
            can_delay_log_impression: F == null ? void 0 : F.can_delay_log_impression,
            use_banzai_signal_imp: F == null ? void 0 : F.use_banzai_signal_imp,
            use_banzai_vital_imp: F == null ? void 0 : F.use_banzai_vital_imp
        };
        F = (F = D.sponsored_data) == null ? void 0 : F.client_token;
        Q = c("useStoryViewabilityLogger")({
            clientToken: F,
            clientViewConfig: Q,
            encryptedTracking: G,
            position: j,
            viewabilityConfig: (F = E) != null ? F : z
        });
        G = Q.debuggingInfoLoggers;
        E = Q.ref;
        n(function () {
            return Y()
        }, [Y]);
        F = a["data-testid"];
        a = c("gkx")("1151060") && (D == null ? void 0 : (Q = D.sponsored_data) == null ? void 0 : Q.ad_id) != null;
        F = p(function () {
            var a;
            return {
                position: j,
                renderLocation: (a = I) != null ? a : null
            }
        }, [j, I]);
        var Z = (Q = D.sponsored_data) == null ? void 0 : Q.post_rendering_loggers;
        Q = p(function () {
            var a;
            return {
                ad_id: (a = D.sponsored_data) == null ? void 0 : a.ad_id,
                client_token: (a = D.sponsored_data) == null ? void 0 : a.client_token,
                post_rendering_logger_from_context: Z
            }
        }, [(Q = D.sponsored_data) == null ? void 0 : Q.ad_id, (Q = D.sponsored_data) == null ? void 0 : Q.client_token, Z]);
        f = l(function () {
            var a;
            return {
                ad_client_token: (a = D.sponsored_data) == null ? void 0 : a.client_token,
                ad_id: (a = D.sponsored_data) == null ? void 0 : a.ad_id,
                event_name: y.event_name,
                event_sub_type: y.event_sub_type
            }
        }, [(f = D.sponsored_data) == null ? void 0 : f.ad_id, (f = D.sponsored_data) == null ? void 0 : f.client_token]);
        c("usePostRenderingLogger")(f, Z);
        f = j == null ? k.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "position is null or undefined for min gap type = " + ((f = h) != null ? f : "UNKNOWN"),
            projectName: "comet_feed"
        }) : null;
        var $ = D.sponsored_data ? "comet-feed-sponsored-story" : null;
        $ = k.jsxs(k.Fragment, {
            children: [f, k.jsx(c("CometErrorProjectContext").Provider, {
                value: "comet_feed",
                children: k.jsx(c("CometFeedUnitLoggingContext").Provider, {
                    value: F,
                    children: k.jsx(c("CometFeedUnitQueryVariablesContext").Provider, {
                        value: C,
                        children: k.jsx(c("CometFeedUnitLoadingContext").Provider, {
                            value: J,
                            children: k.jsx(c("CometFeedUnitPostRenderingLoggersContext").Provider, {
                                value: Q,
                                children: k.jsx(s, {
                                    children: k.jsx(c("CometOffscreenScrollCompensator.react"), {
                                        children: k.jsx(c("CometProfiler.react"), {
                                            id: "CometFeedUnit_" + j,
                                            children: k.jsx(d("FocusRegion.react").FocusRegion, {
                                                id: "CometFeedUnit_" + j,
                                                recoverFocusQuery: A,
                                                children: k.jsx("div", {
                                                    className: c("joinClasses")("x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z", a ? u : ""),
                                                    "data-testid": void 0,
                                                    children: k.jsx(c("CometFeedUnitCard.react"), {
                                                        feedUnit: D,
                                                        position: j,
                                                        children: k.jsxs(B, {
                                                            "data-testid": void 0,
                                                            debuggingInfoLoggers: G,
                                                            loggingRef: E,
                                                            visibilityObserverRef: P,
                                                            children: [b("cr:1326") ? k.jsx(b("cr:1326"), {
                                                                children: k.jsx(c("CometFeedUnitContainerSection.react"), {
                                                                    feedUnit: D,
                                                                    onUnsupported: H,
                                                                    position: j,
                                                                    variables: C
                                                                })
                                                            }) : k.jsx(c("CometFeedUnitContainerSection.react"), {
                                                                feedUnit: D,
                                                                onUnsupported: H,
                                                                position: j,
                                                                variables: C
                                                            }), K ? k.jsx(t, {}) : null]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })]
        });
        if (b("cr:1829844") != null && b("cr:12345") != null) {
            $ = k.jsx(b("cr:1829844"), {
                metadata: {
                    type: b("cr:12345").FEED_OBJECT_ID,
                    value: (f = V) != null ? f : ""
                },
                name: "feed_unit",
                children: $
            })
        }
        return k.jsx(c("CometFeedUnitErrorBoundary.react"), {
            category: g,
            feedUnit: D,
            minGapType: h,
            onError: i,
            position: j,
            renderLocation: I,
            unitTypename: D.__typename,
            children: k.jsx(c("ActorHovercardContext").Provider, {
                value: e,
                children: M != null ? k.jsx(c("CometHovercardGroupContext").Provider, {
                    value: N,
                    children: $
                }) : $
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.memo(a);
    g["default"] = e
}), 98);