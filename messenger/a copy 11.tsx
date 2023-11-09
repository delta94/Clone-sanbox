__d("MWInboxNewMessage.react", ["CometPlaceholder.react", "I64", "LSAddMessengerContact", "LSAuthorityLevel", "LSFactory", "LSIntEnum", "LSMessagingThreadTypeUtil", "LSResult", "MAWGating", "MWChatConnectionStatusCard.react", "MWChatLightSpeedSearchTypeahead.react", "MWChatTokenizerLayoutContextualStrategy.react", "MWComposerGating.react", "MWInboxTokenizerTokenStrategy.react", "MWInteropTokenUtils.bs", "MWOpenAndSecureThreadView.react", "MWPActor.react", "MWPReplyContext.react", "MWPThreadPreview.react", "MWPThreadThemeProvider.react", "MWThreadCreationUtil", "MWThreadListNewMessageState.react", "MWV2IsTabFocusedContext.react", "MWV2NewThreadUtils.bs", "MWV2OnAuthoritativeThreadInsert", "MWXSpinner.react", "ReQL", "cr:1599", "gkx", "promiseDone", "react", "stylex", "useCurrentRoute", "useMWNavigation", "useMWSearchTypeaheadViewItemIsDisabled", "useMWThreadListNewMessage", "useReStore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = i || (i = d("react"));
    e = i;
    var l = e.useCallback
      , m = e.useContext
      , n = e.useEffect
      , o = e.useMemo
      , p = e.useRef
      , q = e.useState
      , r = {
        root: {
            backgroundColor: "xcrg951",
            display: "x78zum5",
            flexBasis: "x1r8uery",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            fontSize: "x6prxxf",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: !0
        },
        searchInput: {
            backgroundColor: "xcrg951",
            boxShadow: "x1md01qi",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            maxHeight: "xmz0i5r",
            minHeight: "x2lwn1j",
            paddingTop: "x1y1aw1k",
            zIndex: "x1vjfegm",
            $$css: !0
        },
        searchInputForContactsList: {
            borderBottomColor: "x80vd3b",
            borderBottomStyle: "x1q0q8m5",
            borderBottomWidth: "xso031l",
            boxShadow: "x1gnnqk1",
            $$css: !0
        },
        secureToggle: {
            marginTop: "x1xmf6yo",
            paddingEnd: "x1sxyh0",
            $$css: !0
        },
        spacer: {
            flexGrow: "x1iyjqo2",
            $$css: !0
        },
        spinner: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            justifyContent: "xl56j7k",
            $$css: !0
        }
    }
      , s = {
        viewXStyle_DO_NOT_USE: {
            borderTopStartRadius: "x1lq5wgf",
            borderTopEndRadius: "xgqcy7u",
            borderBottomEndRadius: "x30kzoy",
            borderBottomStartRadius: "x9jhf4c",
            boxShadow: "x104qc98",
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            $$css: !0
        }
    };
    function t() {
        var a = c("useCurrentRoute")()
          , b = p(a == null ? "" : a.url);
        n(function() {
            b.current = a == null ? "" : a.url
        }, [b, a]);
        return b
    }
    function u(a, b, e, f, g) {
        b = b.clientThreadKey;
        if (b != null && f === g.current)
            return d("MWV2OnAuthoritativeThreadInsert").onAuthoritativeThreadInsert(c("LSResult")(b), a, function(a) {
                return e({
                    clientThreadKey: a.clientThreadKey,
                    threadKey: a.threadKey,
                    threadType: a.threadType
                })
            })
    }
    function v(a, b, e, f) {
        var g = q(!1)
          , h = g[1]
          , i = t()
          , k = d("MWThreadListNewMessageState.react").useDispatch()
          , m = c("useReStore")()
          , n = d("MWPActor.react").useActor();
        return l(function() {
            if (a == null)
                return;
            b(!0);
            h(!0);
            k({
                type: d("MWThreadListNewMessageState.react").MWThreadListNewMessageStateActionType.Reset
            });
            var g = (j || (j = d("I64"))).equal(a.authorityLevel, d("LSIntEnum").ofNumber(c("LSAuthorityLevel").OPTIMISTIC)) && d("LSMessagingThreadTypeUtil").isGroup(a.threadType)
              , l = (j || (j = d("I64"))).equal(a.authorityLevel, d("LSIntEnum").ofNumber(c("LSAuthorityLevel").OPTIMISTIC)) && d("LSMessagingThreadTypeUtil").isSecure(a.threadType);
            g || l ? u(m, a, e, i.current, i) : e({
                clientThreadKey: a.clientThreadKey,
                threadKey: a.threadKey,
                threadType: a.threadType
            });
            c("promiseDone")(m.runInTransaction(function(b) {
                return d("ReQL").firstAsync(d("ReQL").fromTableAscending(m.table("participants")).getKeyRange(a.threadKey).map(function(a) {
                    return a.contactId
                }).filter(function(a) {
                    return !(j || (j = d("I64"))).equal(a, n)
                })).then(function(e) {
                    if (e != null && f && d("LSMessagingThreadTypeUtil").isOneToOne(a.threadType))
                        return c("LSAddMessengerContact")(e, c("LSFactory")(b))
                })
            }, "readwrite"))
        }, [a, b, h, k, m, e, i, n, f])
    }
    function a(a) {
        var e = c("useReStore")();
        a = a.startingSecureTogglePositionOn;
        d("MWV2NewThreadUtils.bs").useSyncRanking();
        var f = o(function() {
            return d("MWChatTokenizerLayoutContextualStrategy.react").createMWChatTokenizerLayoutContextualStrategy(!0, "input")
        }, [])
          , g = c("gkx")("2761") && d("MAWGating").isArmadillo();
        a = q(a === "E2EEToggleOn" || g);
        g = a[0];
        var i = a[1]
          , l = d("MAWGating").isTlcSearchEnabled()
          , p = c("gkx")("8025")
          , t = c("gkx")("3574");
        a = m(d("MWThreadListNewMessageState.react").context);
        a = d("MWV2NewThreadUtils.bs").useTokens(a.entries, g);
        var u = a[0];
        c("useMWThreadListNewMessage")(u);
        var w = q(!1)
          , x = w[0];
        w = w[1];
        var y = c("useMWNavigation")()
          , z = o(function() {
            return function(a) {
                return y.openInbox(a, "inboxNewMessage")
            }
        }, [y])
          , A = d("MWV2NewThreadUtils.bs").useOnAddToken(g, w, z, i)
          , B = q()
          , C = B[0];
        B = B[1];
        var D = d("MWV2NewThreadUtils.bs").useTokensShimmed(u, g)
          , E = o(function() {
            return u.some(d("MWInteropTokenUtils.bs").isInterop)
        }, [u]);
        w = v(C, w, z, g);
        z = c("useMWSearchTypeaheadViewItemIsDisabled")(u, g);
        n(function() {
            if (l)
                if (u.length === 1) {
                    var a = u[0];
                    a = d("MWThreadCreationUtil").getIsSecureBasedOnContactCapabilitiesForOneToOneThread(a, e, t).then(function(a) {
                        i(a)
                    });
                    c("promiseDone")(a)
                } else if (u.length > 1 && p) {
                    a = d("MWThreadCreationUtil").getExistingThreadsWithTheTokens(u, e);
                    var b = !1;
                    a.length > 0 && (b = d("MWThreadCreationUtil").maybeUpdateIsSecureBasedOnUnnamedRecentThread(a, e, i));
                    if (!b) {
                        a = d("MWThreadCreationUtil").checkE2EEligibilityForEachContact(u, e, t);
                        i(a)
                    }
                }
        }, [u, i, l, p, t, e]);
        return k.jsxs("div", {
            className: "xcrg951 x78zum5 x1r8uery xdt5ytf x1iyjqo2 x6prxxf x6ikm8r x10wlt62",
            children: [k.jsxs("div", {
                className: (h || (h = c("stylex")))(r.searchInput, u.length === 0 ? r.searchInputForContactsList : !1),
                children: [k.jsx(c("MWChatLightSpeedSearchTypeahead.react"), {
                    excludedIDs: a[2],
                    getIsViewItemDisabled: z,
                    isDisabled: x,
                    isSecure: g,
                    layoutStategyRenderer: f,
                    onAddToken: A,
                    onChangeTokens: a[1],
                    tokenItemRenderer: c("MWInboxTokenizerTokenStrategy.react"),
                    tokens: u,
                    xstyles: s
                }), k.jsx("div", {
                    className: "x1iyjqo2"
                }), k.jsx("div", {
                    className: "x1xmf6yo x1sxyh0",
                    children: b("cr:1599") == null ? null : k.jsx(b("cr:1599"), {
                        areWeCreatingASecureThread: g,
                        disabled: E,
                        setAreWeCreatingASecureThread: i
                    })
                })]
            }), k.jsx(c("MWChatConnectionStatusCard.react"), {}), k.jsx(c("CometPlaceholder.react"), {
                fallback: k.jsx("div", {
                    className: "x6s0dn4 x78zum5 x1iyjqo2 xl56j7k",
                    children: k.jsx(c("MWXSpinner.react"), {
                        color: "disabled",
                        size: 24
                    })
                }),
                children: k.jsx(d("MWV2IsTabFocusedContext.react").MWV2IsTabFocusedContextProvider, {
                    isFocused: !0,
                    children: k.jsx(d("MWPReplyContext.react").MWPReplyContextProvider, {
                        children: k.jsx(c("MWPThreadPreview.react"), {
                            areWeCreatingASecureThread: g,
                            renderThreadView: function(a) {
                                return k.jsx(c("MWOpenAndSecureThreadView.react"), {
                                    thread: a
                                })
                            },
                            setPreviewThread: B,
                            tokens: D,
                            children: C != null ? k.jsx(c("MWPThreadThemeProvider.react"), {
                                themeFbid: C.themeFbid,
                                children: k.jsx(d("MWComposerGating.react").MWInboxComposerGating, {
                                    afterSendMessage: w,
                                    isPreviewThread: !0,
                                    onSendEmptyMessage: function() {},
                                    thread: C
                                }, (j || (j = d("I64"))).to_string((z = C.clientThreadKey) != null ? z : C.threadKey))
                            }) : null
                        })
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);