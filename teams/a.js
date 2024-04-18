(this.webpackChunk_msteams_react_web_client = this.webpackChunk_msteams_react_web_client || []).push([[802054], {
    502992: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Vo: ()=>r,
            Qq: ()=>s,
            bH: ()=>l,
            Yx: ()=>d
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(461223);
        const r = a.createContext(void 0)
          , s = ({children: e, targetDocument: t})=>{
            const n = a.useRef()
              , s = a.useRef()
              , l = a.useCallback(((e,t)=>{
                const i = t ? s.current : n.current;
                i && i.announce(e)
            }
            ), [s, n])
              , d = a.useMemo((()=>({
                announce: l
            })), [l]);
            return (0,
            i.t)(a.Fragment, {
                children: [(0,
                i.t)(o.v, {
                    assertive: !1,
                    ref: n,
                    targetDocument: t
                }), (0,
                i.t)(o.v, {
                    assertive: !0,
                    ref: s,
                    targetDocument: t
                }), (0,
                i.t)(r.Provider, Object.assign({
                    value: d
                }, {
                    children: e
                }))]
            })
        }
          , l = r.Consumer
          , d = ()=>a.useContext(r)
    }
    ,
    461223: (e,t,n)=>{
        "use strict";
        n.d(t, {
            v: ()=>l
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(713112)
          , r = n(427662);
        const s = {
            clip: "rect(0px, 0px, 0px, 0px)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: "0px",
            width: "1px",
            position: "absolute"
        }
          , l = a.forwardRef((({assertive: e, targetDocument: t},n)=>{
            const [l,d] = a.useState("")
              , c = a.useRef()
              , u = (0,
            r.SE)()
              , g = u ? u.host : window
              , m = /Mac|iPod|iPhone|iPad/.test(g.navigator.platform)
              , p = a.useCallback((e=>{
                d(e),
                null !== c.current && g.clearTimeout(c.current),
                c.current = g.setTimeout((()=>{
                    d(""),
                    null !== c.current && g.clearTimeout(c.current),
                    c.current = null
                }
                ), 2e3)
            }
            ), [c, g, d]);
            a.useImperativeHandle(n, (()=>({
                announce: p
            }))),
            a.useEffect((()=>()=>{
                null !== c.current && g.clearTimeout(c.current)
            }
            ), [c, g]);
            const v = t ? t.body : g.document.body;
            let h = null;
            if (m) {
                const e = t ? t.activeElement : g.document.activeElement;
                h = null == e ? void 0 : e.closest("*[aria-modal='true']")
            }
            const y = h || v;
            return o.createPortal((0,
            i.t)("div", Object.assign({
                "aria-live": e ? "assertive" : "polite",
                "aria-atomic": "true",
                style: s
            }, {
                children: l
            })), y)
        }
        ));
        l.displayName = "AriaLiveRegion"
    }
    ,
    737299: (e,t,n)=>{
        "use strict";
        n.d(t, {
            V: ()=>s
        });
        var i = n(481339)
          , a = n(427662);
        const o = "axessibleEnabled"
          , r = "true"
          , s = ()=>{
            const {host: e} = (0,
            a.SE)()
              , [t,n] = i.useState(e.localStorage.getItem(o) === r);
            return {
                isAxessibleEnabled: t,
                setAxessibleEnabled: i.useCallback((t=>{
                    n(t),
                    t ? e.localStorage.setItem(o, r) : e.localStorage.removeItem(o)
                }
                ), [e.localStorage])
            }
        }
    }
    ,
    314734: (e,t,n)=>{
        "use strict";
        n.d(t, {
            G: ()=>s
        });
        var i = n(481339)
          , a = n(14232);
        const o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "backdropEffectQuery"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "backdropEffectState"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "enabled"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BackdropEffectState"
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
          , r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "backdropEffectSubscription"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "backdropEffectState"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "enabled"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BackdropEffectState"
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
          , s = e=>{
            const {data: t, subscribeToMore: n} = (0,
            a.a)(o, {
                skip: !!e,
                fetchPolicy: "cache-first"
            });
            return i.useEffect((()=>n({
                document: r,
                updateQuery: (e,t)=>{
                    const {subscriptionData: {data: n}} = t;
                    return (null == n ? void 0 : n.backdropEffectState) ? n : e
                }
            })), [n]),
            t
        }
    }
    ,
    229207: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Hh: ()=>o,
            YG: ()=>r,
            o5: ()=>s
        });
        var i = n(481339);
        const a = i.createContext({})
          , o = ()=>i.useContext(a)
          , r = a.Provider
          , s = a.Consumer
    }
    ,
    365529: (e,t,n)=>{
        "use strict";
        n.d(t, {
            lS: ()=>A,
            OM: ()=>h
        });
        var i = n(142513)
          , a = n(250033)
          , o = (n(481339),
        n(836382))
          , r = n(559339)
          , s = n(841934)
          , l = n(814423)
          , d = n(50805)
          , c = n(263662)
          , u = n(402339)
          , g = n.n(u)
          , m = n(534033)
          , p = n.n(m);
        const v = (0,
        n(2877).s)({
            cdnImage: {
                a9b677: "fly5x3f",
                Bqenvij: "f1l02sjl"
            },
            size128: {
                B2u0y6b: "frguhl6",
                Bxyxcbc: "fbu4o4f"
            },
            size176: {
                B2u0y6b: "f1scw9s2",
                Bxyxcbc: "f1utrfgr"
            },
            size192: {
                B2u0y6b: "f1350n0n",
                Bxyxcbc: "f7sc4q2"
            },
            size224: {
                B2u0y6b: "fultz1r",
                Bxyxcbc: "f1s22e6d"
            },
            size256: {
                B2u0y6b: "f2rbwfs",
                Bxyxcbc: "feialds"
            },
            size384: {
                B2u0y6b: "foeyey",
                Bxyxcbc: "f1izlouh"
            },
            size512: {
                B2u0y6b: "f13o6zra",
                Bxyxcbc: "f13inffv"
            },
            size1024: {
                B2u0y6b: "f1m5ah3v",
                Bxyxcbc: "frtcpqd"
            },
            size2048: {
                B2u0y6b: "fp2r07f",
                Bxyxcbc: "f1ysve1h"
            }
        }, {
            d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".frguhl6{max-width:128px;}", ".fbu4o4f{max-height:128px;}", ".f1scw9s2{max-width:176px;}", ".f1utrfgr{max-height:176px;}", ".f1350n0n{max-width:192px;}", ".f7sc4q2{max-height:192px;}", ".fultz1r{max-width:224px;}", ".f1s22e6d{max-height:224px;}", ".f2rbwfs{max-width:256px;}", ".feialds{max-height:256px;}", ".foeyey{max-width:384px;}", ".f1izlouh{max-height:384px;}", ".f13o6zra{max-width:512px;}", ".f13inffv{max-height:512px;}", ".f1m5ah3v{max-width:1024px;}", ".frtcpqd{max-height:1024px;}", ".fp2r07f{max-width:2048px;}", ".f1ysve1h{max-height:2048px;}"]
        });
        var h, y;
        !function(e) {
            e.Activity = "activity",
            e.AiDesign = "ai-design",
            e.AllSet = "all-set",
            e.Allow = "allow",
            e.AntiMalwareThreat = "anti-malware-threat",
            e.Block = "block",
            e.BrandKit = "brand-kit",
            e.Calendar = "calendar",
            e.CalendarGoogle = "calendar-google",
            e.CallHistory = "call-history",
            e.Celebrate = "celebrate",
            e.Chat = "chat",
            e.ChatThread = "chat-threat",
            e.CloudProgress = "cloud-progress",
            e.Collaborate = "collaborate",
            e.ColorWheel = "color-wheel",
            e.Compose = "compose",
            e.Conversation = "conversation",
            e.Create = "create",
            e.Design = "design",
            e.DesignFromScatch = "design-from-scratch",
            e.DeviceLocation = "device-location",
            e.Download = "download",
            e.DragAndDrop = "drag-and-drop",
            e.EmailAtmention = "email-atmention",
            e.Error = "error",
            e.Favorite = "favorite",
            e.Files = "files",
            e.FolderFavorite = "folder-favorite",
            e.Ideas = "ideas",
            e.IdentityProtectionSetup = "identity-protection-setup",
            e.IdentityProtectionThreat = "identity-protection-threat",
            e.Insider = "insider",
            e.Invite = "invite",
            e.Link = "link",
            e.Location = "location",
            e.Meet = "meet",
            e.Offline = "offline",
            e.Online = "online",
            e.Password = "password",
            e.People = "people",
            e.Photos = "photos",
            e.Presentation = "presentation",
            e.Recent = "recent",
            e.Refresh = "refresh",
            e.RemoveApps = "remove-apps",
            e.RemoveBackground = "remove-background",
            e.SavedBookmark = "saved-bookmark",
            e.Schedule = "schedule",
            e.Search = "search",
            e.SearchError = "search-error",
            e.SearchKeywords = "search-keywords",
            e.Security = "security",
            e.SecurityCelebrate = "security-celebrate",
            e.SecuritySeople = "security-people",
            e.SecuritySrotected = "security-protected",
            e.SecuritySettings = "security-settings",
            e.SecuritySetup = "security-setup",
            e.Share = "share",
            e.ShareLink = "share-link",
            e.SigninSignup = "signin-signup",
            e.SocialMedia = "social-media",
            e.Tasks = "tasks",
            e.TeamsApp = "teamsapp",
            e.Threat = "threat",
            e.TogetherFamily = "together-family",
            e.Trust = "trust",
            e.Upload = "upload",
            e.VideoCall = "video-call",
            e.VideoProjects = "video-projects",
            e.Visuals = "visuals",
            e.WarningCritical = "warning-critical",
            e.YourSpace = "your-space"
        }(h || (h = {})),
        function(e) {
            e.light = "l",
            e.dark = "d",
            e.contrast = "d"
        }(y || (y = {}));
        const A = e=>{
            const {staticsPath: t} = (0,
            l.NC)(d.J.Platform)
              , n = (0,
            o.z)()
              , u = v()
              , {size: m="256", alt: A} = e
              , f = (0,
            i.__rest)(e, ["size", "alt"]);
            let b;
            switch (m) {
            case "128":
            case "176":
                b = u.size128;
                break;
            case "192":
                b = u.size192;
                break;
            case "224":
                b = u.size224;
                break;
            case "256":
                b = u.size256;
                break;
            case "384":
                b = u.size384;
                break;
            case "512":
                b = u.size512;
                break;
            case "1024":
                b = u.size1024;
                break;
            case "2048":
                b = u.size2048
            }
            if ("offline"in e && e.offline || "name"in e && e.name === h.Offline)
                return (0,
                a.t)(r.E, Object.assign({
                    "data-tid": "cdn-image__offline"
                }, f, {
                    src: n === c.f8.Light ? p() : g(),
                    alt: A,
                    "aria-hidden": !A,
                    height: m,
                    width: m
                }));
            if ("src"in e && e.src)
                return (0,
                a.t)(r.E, Object.assign({
                    "data-tid": "cdn-image__custom-path",
                    src: e.src,
                    alt: A,
                    "aria-hidden": !A,
                    className: (0,
                    s.z)(u.cdnImage, b)
                }, f));
            const C = `${t}${function({name: e, themeType: t, size: n}) {
                return `/evergreen-assets/illustrations/webp/${n}/${e}-${y[t]}-standard-${n}x${n}.webp`
            }({
                name: "name"in e && e.name,
                themeType: n,
                size: m
            })}`;
            return (0,
            a.t)(r.E, Object.assign({
                "data-tid": "cdn-image",
                src: C,
                alt: A,
                "aria-hidden": !A,
                className: (0,
                s.z)(u.cdnImage, b)
            }, f))
        }
    }
    ,
    688689: (e,t,n)=>{
        "use strict";
        n.d(t, {
            h: ()=>r
        });
        var i = n(481339)
          , a = n(14232);
        const o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ComponentsCoreAuthTenantDataQuery"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "accountId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "tenantData"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "accountId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "accountId"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tenantName"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "String"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tenantId"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "String"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "redeemUrl"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isTenantHidden"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tenantRelationship"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "TenantData"
                            }
                        }
                    }]
                }
            }]
        }
          , r = (e,t,n,r)=>{
            const {data: s, error: l, refetch: d} = (0,
            a.a)(o, {
                skip: r,
                variables: {
                    accountId: t
                },
                context: {
                    correlation: e
                }
            });
            l && (null == n || n(l));
            const c = (null == s ? void 0 : s.tenantData) || void 0
              , u = (null == c ? void 0 : c.tenantName) || ""
              , g = (null == c ? void 0 : c.tenantId) || ""
              , m = (null == c ? void 0 : c.redeemUrl) || ""
              , p = (null == c ? void 0 : c.isTenantHidden) || !1
              , v = (null == c ? void 0 : c.tenantRelationship) || "Default"
              , h = i.useCallback((()=>d()), [d]);
            return i.useMemo((()=>u && g ? {
                tenantName: u,
                tenantId: g,
                redeemUrl: m,
                isTenantHidden: p,
                refetchTenantData: h,
                tenantRelationship: v
            } : void 0), [g, u, m, p, h, v])
        }
    }
    ,
    684784: (e,t,n)=>{
        "use strict";
        n.d(t, {
            a: ()=>c
        });
        var i = n(142513)
          , a = n(481339)
          , o = n(928665)
          , r = n(328942)
          , s = n(738646);
        const l = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "removeAuthenticatedUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "reason"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userContextId"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "removeAuthenticatedUser"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "reason"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "reason"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "userContextId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userContextId"
                                }
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }],
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }]
                }
            }]
        };
        var d = n(403084);
        function c(e) {
            const t = function({authenticationService: e, client: t, rebootService: n}) {
                return (0,
                a.useCallback)((a=>(0,
                i.__awaiter)(this, void 0, void 0, (function*() {
                    var i;
                    if (!t && !e)
                        return;
                    const c = {
                        id: (0,
                        o.pW)(),
                        source: "use-logout",
                        scenarioName: s.RG.AuthWebLogout
                    }
                      , [u,g] = (0,
                    d.OU)({
                        options: {
                            correlation: c
                        },
                        scenarioName: c.scenarioName,
                        source: c.source,
                        subContext: "use-logout::useHandleLogout"
                    });
                    if (u.appendScenarioEventData({
                        operationType: "auth error page"
                    }),
                    t)
                        yield t.mutate({
                            mutation: l,
                            variables: {
                                reason: "auth error page",
                                userContextId: a
                            },
                            context: {
                                correlation: c
                            }
                        }),
                        g();
                    else {
                        try {
                            yield null === (i = null == e ? void 0 : e.logout) || void 0 === i ? void 0 : i.call(e, {
                                correlation: c,
                                reason: "auth error page"
                            }),
                            g()
                        } catch (e) {
                            g({
                                error: e
                            })
                        }
                        yield null == n ? void 0 : n.rebootApp(r.Z.ErrorPageSignOut, r.d.Auth)
                    }
                }
                ))), [e, t, n])
            }(e)
              , {client: n, authenticationService: c, rebootService: u} = e;
            return n || c && u ? t : null
        }
    }
    ,
    435521: (e,t,n)=>{
        "use strict";
        n.d(t, {
            a: ()=>s
        });
        var i = n(142513)
          , a = n(328942)
          , o = n(481339);
        const r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ComponentsCoreAuthRebootAppMutation"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "reason"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "rebootApp"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "reason"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "reason"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            }
                        }],
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }]
                }
            }]
        };
        function s(e, t) {
            const {client: n, rebootService: s} = e;
            void 0 === t && (t = a.Z.ErrorPageReboot);
            const l = (0,
            o.useCallback)((()=>(0,
            i.__awaiter)(this, void 0, void 0, (function*() {
                return n ? n.mutate({
                    mutation: r,
                    variables: {
                        reason: t
                    }
                }) : null == s ? void 0 : s.rebootApp(t, a.d.Core)
            }
            ))), [n, s, t]);
            return n || s ? l : null
        }
    }
    ,
    745887: (e,t,n)=>{
        "use strict";
        var i;
        n.d(t, {
            s: ()=>c,
            n: ()=>u
        });
        var a = n(250033)
          , o = n(481339);
        const {memo: r, useContext: s, useMemo: l} = i || (i = n.t(o, 2))
          , d = o.createContext({
            entityOptions: void 0
        })
          , c = r((({children: e, entity: t, getEntityOptions: n})=>{
            let i;
            t && n && (i = n(t.type, t.action));
            const o = l((()=>({
                entityOptions: i
            })), [i]);
            return (0,
            a.t)(d.Provider, Object.assign({
                value: o
            }, {
                children: e
            }))
        }
        ));
        c.displayName = "EntityOptionsContextProvider";
        const u = ()=>{
            const {entityOptions: e} = s(d);
            return e || null
        }
    }
    ,
    999274: (e,t,n)=>{
        "use strict";
        n.d(t, {
            AO: ()=>r,
            Gh: ()=>s,
            lE: ()=>l
        });
        var i = n(250033)
          , a = n(481339);
        const o = a.createContext({
            viewSchemaClient: null,
            defaultClient: null
        })
          , r = a.memo((({viewSchemaClient: e, defaultClient: t, children: n})=>(0,
        i.t)(o.Provider, Object.assign({
            value: {
                viewSchemaClient: e,
                defaultClient: t
            }
        }, {
            children: n
        }))));
        r.displayName = "ViewSchemaApolloClientContextProvider";
        const s = ()=>{
            const {viewSchemaClient: e} = a.useContext(o);
            return e
        }
          , l = ()=>{
            const {defaultClient: e} = a.useContext(o);
            return e
        }
    }
    ,
    75450: (e,t,n)=>{
        "use strict";
        n.d(t, {
            V: ()=>S
        });
        var i = n(142513)
          , a = n(250033)
          , o = n(481339)
          , r = n(813841)
          , s = n(508526)
          , l = n(103328);
        const d = o.memo((e=>{
            const {content: t, contentProps: n, open: d, errorMessage: c, variables: u} = e
              , g = (0,
            i.__rest)(e, ["content", "contentProps", "open", "errorMessage", "variables"])
              , [m,p] = o.useState(!1)
              , v = o.useCallback((()=>{
                p(!0)
            }
            ), [p])
              , h = (0,
            l.Cq)()
              , y = h.translate("framework", "dialog_error_message_generic")
              , A = h.translate("framework", "dialog_error_cancel")
              , f = o.useMemo((()=>m || !t ? null : Object.assign({
                content: (0,
                a.t)(s.M, Object.assign({
                    onError: v
                }, {
                    children: t
                }))
            }, n)), [t, n, m, v])
              , b = o.useMemo((()=>Object.assign(Object.assign({}, !m && g), {
                header: m ? c || y : g.header,
                cancelButton: m && !g.cancelButton ? A : g.cancelButton,
                onCancel: g.onCancel,
                variables: Object.assign(Object.assign({}, !m && u), {
                    isCoreDialog: !0
                })
            })), [A, y, m, c, g, u]);
            return (0,
            a.t)(r.V, Object.assign({
                content: f,
                open: d,
                className: "vdi-occlusion"
            }, b))
        }
        ));
        d.displayName = "CoreDialogRenderer";
        var c = n(554694)
          , u = n(642799)
          , g = n(427662)
          , m = n(814423)
          , p = n(50805)
          , v = n(738646)
          , h = n(319133)
          , y = n(87891);
        const A = (e,t,n,a)=>(0,
        i.__awaiter)(void 0, void 0, void 0, (function*() {
            if (e) {
                n.current = !0;
                try {
                    yield e.mutate({
                        mutation: y.n,
                        variables: {
                            containerState: t
                        }
                    })
                } catch (e) {
                    a(`${t} mutation failed.`)
                }
                n.current = !1
            } else
                a("Apollo client does not exist. Unable to issue a mutation.")
        }
        ))
          , f = (e,t,n,a,o,r,s,l=!1,d=!1)=>(0,
        i.__awaiter)(void 0, void 0, void 0, (function*() {
            yield A(e, "Open", r, n),
            l || d ? a.requestAnimationFrame((()=>{
                o("CriticalInitRender"),
                t(!0),
                s()
            }
            )) : (o("CriticalInitRender"),
            t(!0),
            s())
        }
        ))
          , b = (e,t,n,a,o,r,s)=>(0,
        i.__awaiter)(void 0, void 0, void 0, (function*() {
            C(t, s),
            yield A(e, s, r, o),
            a("UnmountStarted"),
            n(!1)
        }
        ))
          , C = (e,t)=>{
            if (!e.findScenario(v.RG.ExtensionClose)) {
                e.newScenario(v.RG.ExtensionClose).appendEventData({
                    reason: t
                })
            }
        }
          , S = o.memo((e=>{
            var {onOpen: t, open: n=!0, confirmed: r, cancelled: s} = e
              , l = (0,
            i.__rest)(e, ["onOpen", "open", "confirmed", "cancelled"]);
            const v = function(e) {
                const {confirmed: t, cancelled: n, open: a=!0, onOpen: r} = e
                  , {error: s} = (0,
                c.w)("Dialog Container")
                  , l = o.useContext((0,
                h.K)()).client
                  , d = o.useRef(!1)
                  , v = o.useRef(!1)
                  , y = o.useRef(!1)
                  , [C,S] = o.useState(!1)
                  , {onRenderEvent: I} = (0,
                u.sV)()
                  , {host: k, scenarioFactory: N} = (0,
                g.SE)()
                  , E = o.useCallback((e=>{
                    y.current && S(e)
                }
                ), [S, y])
                  , {enableHybridExperienceRendererLayout: T} = (0,
                m.NC)(p.J.Host)
                  , {enableRAFInCoreDialog: w} = (0,
                m.NC)(p.J.Core)
                  , M = o.useCallback((()=>(0,
                i.__awaiter)(this, void 0, void 0, (function*() {
                    yield A(l, "Confirmed", d, s),
                    b(l, N, E, I, s, d, "Closed")
                }
                ))), [l, N, E, I, s])
                  , D = o.useCallback((()=>(0,
                i.__awaiter)(this, void 0, void 0, (function*() {
                    yield A(l, "Cancelled", d, s),
                    b(l, N, E, I, s, d, "Closed")
                }
                ))), [l, N, E, I, s])
                  , L = o.useCallback((()=>b(l, N, E, I, s, d, "Closed")), [l, N, E, I, s])
                  , O = o.useCallback((()=>f(l, E, s, k, I, v, r, !!T, !!w)), [l, E, s, k, I, r, T, w])
                  , B = o.useCallback((()=>y.current && !d.current && !v.current), [y, d, v])
                  , j = o.useCallback((()=>(0,
                i.__awaiter)(this, void 0, void 0, (function*() {
                    B() && (t ? M() : n ? D() : a !== C && (a ? O() : L()))
                }
                ))), [B, L, O, M, D, C, a, t, n]);
                return o.useLayoutEffect((()=>(y.current = !0,
                j(),
                ()=>{
                    y.current = !1
                }
                )), [j, y]),
                y.current && j(),
                C
            }({
                onOpen: o.useCallback((()=>{
                    null == t || t({})
                }
                ), [t]),
                open: n,
                confirmed: r,
                cancelled: s
            });
            return (0,
            a.t)(d, Object.assign({
                open: v
            }, l))
        }
        ));
        S.displayName = "Dialog"
    }
    ,
    87891: (e,t,n)=>{
        "use strict";
        n.d(t, {
            n: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "updateExtendedEntityContainerState"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "containerState"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ExtendedContainerState"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "updateExtendedEntityContainerState"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "containerState"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "containerState"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ExtendedContainerState"
                                    }
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }]
                }
            }]
        }
    }
    ,
    371525: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            CoreReactRenderer: ()=>zd.Z,
            ExperienceProp: ()=>nc.ExperienceProp,
            ExperienceProps: ()=>nc.ExperienceProps,
            GetExperienceProps: ()=>nc.GetExperienceProps,
            IActivationOptions: ()=>zd.IActivationOptions,
            IErrorBoundaryProps: ()=>nc.IErrorBoundaryProps,
            IGetLayoutResponsiveTemplates: ()=>Jt.IGetLayoutResponsiveTemplates,
            IInitLayoutTemplates: ()=>Jt.IInitLayoutTemplates,
            ILayoutTemplates: ()=>Jt.ILayoutTemplates,
            IRegisterLayoutTemplate: ()=>Jt.IRegisterLayoutTemplate,
            IRegisterLayoutTemplatePerLayoutMode: ()=>Jt.IRegisterLayoutTemplatePerLayoutMode,
            IResponsiveTemplate: ()=>Jt.IResponsiveTemplate,
            IRootProviderProps: ()=>i.IRootProviderProps,
            ISlotDimensions: ()=>Jt.ISlotDimensions,
            ISlotsTemplates: ()=>Jt.ISlotsTemplates,
            LayoutKey: ()=>Jt.FU,
            LayoutResponsiveTemplates: ()=>Jt.ZG,
            ResponsiveTemplatesGetter: ()=>Jt.ResponsiveTemplatesGetter,
            RootRenderer: ()=>_d,
            SlotsDimensionsOverrides: ()=>Jt.SlotsDimensionsOverrides,
            getExperiencePropsCallback: ()=>nc.c,
            getLayoutResponsiveTemplatesDeprecated: ()=>tc,
            partials: ()=>Hd.L,
            removeTemporaryElements: ()=>a.rx,
            renderWindows: ()=>Qd.o
        });
        var i = {};
        n.r(i),
        n.d(i, {
            M: ()=>Bt
        });
        var a = n(952445)
          , o = n(250033)
          , r = n(481339)
          , s = n.t(r, 2)
          , l = n(363592)
          , d = n(979176)
          , c = n(568094)
          , u = n(502992)
          , g = n(427662)
          , m = n(814423)
          , p = n(50805);
        const v = ({loginRequiredNode: e, children: t})=>{
            const {authenticationUser: n} = (0,
            g.SE)()
              , {enableLoginFlow: i, enableIntegratedAuthApp: a} = (0,
            m.NC)(p.J.Auth)
              , s = !i || n && n.isAuthenticated || a ? t : e;
            return (0,
            o.t)(r.Fragment, {
                children: s
            })
        }
        ;
        var h = n(999274)
          , y = n(982301)
          , A = n(693389)
          , f = n(554694)
          , b = n(736972)
          , C = n(905581)
          , S = n(132756)
          , I = n(641639)
          , k = n(383392)
          , N = n(263662)
          , E = n(14232);
        const T = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "themePreferencesQuery"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clientPreferences"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "category"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "theme"
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ClientPreferencesCategory"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ThemePreferences"
                                    }
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ID"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "userTheme"
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "UserTheme"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "followOsTheme"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Boolean"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isCallingWindowDarkTheme"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Boolean"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }]
                                }
                            }]
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ClientPreferenceCategoryTypes"
                                }
                            }
                        }
                    }]
                }
            }]
        }
          , w = e=>{
            const t = (0,
            f.w)("localThemePreferences")
              , {data: n, error: i} = (0,
            E.a)(T, {
                skip: !!e
            })
              , a = null == n ? void 0 : n.clientPreferences
              , o = r.useMemo((()=>a), [a]);
            if (i)
                t.error(i.message);
            else if (a)
                return o
        }
        ;
        var M = n(460414);
        const D = ()=>{
            const {host: e} = (0,
            g.SE)()
              , [,t] = (0,
            r.useReducer)((e=>e + 1), 0)
              , n = (0,
            r.useMemo)((()=>[]), []);
            (0,
            r.useEffect)((()=>()=>{
                n.length > 0 && n.forEach((e=>{
                    const [t,n] = e;
                    t.removeEventListener("change", n)
                }
                ))
            }
            ), [n]),
            0 === n.length && n.push(((e,t)=>{
                const n = e.matchMedia(N.s0.ColorContrastOverride)
                  , i = e=>e.matches && t(0);
                return n.addEventListener("change", i),
                [n, i]
            }
            )(e, t), ((e,t)=>{
                const n = e.matchMedia(N.s0.Dark)
                  , i = ()=>{
                    e.matchMedia(N.s0.ColorContrastOverride).matches || t(0)
                }
                ;
                return n.addEventListener("change", i),
                [n, i]
            }
            )(e, t))
        }
          , L = ()=>{
            const e = (0,
            f.w)("useThemeResolution")
              , {theme: t, prioritizeThemeSetByHost: n, themeDefault: i, themeFromQueryString: a} = (0,
            m.NC)(p.J.Host)
              , {routingServices: o} = (0,
            g.SE)()
              , s = (0,
            M.p)()
              , l = n && t ? (0,
            k.OA)(t) : void 0
              , d = a && (e=>{
                try {
                    const {t} = e.state.getSearchState();
                    switch (t) {
                    case N.Qs.Light:
                        return N.f8.Light;
                    case N.Qs.Dark:
                        return N.f8.Dark;
                    case N.Qs.Contrast:
                        return N.f8.Contrast;
                    default:
                        return
                    }
                } catch (e) {
                    return
                }
            }
            )(o)
              , c = (()=>{
                const e = (0,
                f.w)("useBrowserOrOsTheme")
                  , {host: t} = (0,
                g.SE)()
                  , {enableBrowserOrOsThemeResolution: n} = (0,
                m.NC)(p.J.Core, ["enableBrowserOrOsThemeResolution"]);
                let i;
                return n && (i = (0,
                I.Z)(t, e)),
                i
            }
            )()
              , {themeTypeFromPreference: u, isCallingWindowDarkTheme: v} = (()=>{
                var e;
                const t = (0,
                f.w)("useResolvedPreferenceTheme")
                  , {host: n} = (0,
                g.SE)()
                  , {enableThemePreferenceResolution: i} = (0,
                m.NC)(p.J.Core, ["enableThemePreferenceResolution"])
                  , a = w(!i);
                if (!a)
                    return {
                        themeTypeFromPreference: void 0,
                        isCallingWindowDarkTheme: !1
                    };
                let o;
                return o = a.followOsTheme ? (0,
                I.Z)(n, t) : null !== (e = a.userTheme) && void 0 !== e ? e : void 0,
                {
                    themeTypeFromPreference: o,
                    isCallingWindowDarkTheme: !!a.isCallingWindowDarkTheme
                }
            }
            )()
              , h = s ? N.f8.Contrast : l || d || c || u;
            D();
            const y = h || (0,
            k.OA)(t || i);
            if (e.log(`\n    prioritizedThemeTypeFromHost: ${l},\n    themeTypeFromQsp: ${d},\n    themeTypeFromBrowserOrOs: ${c},\n    themeTypeFromPreference: ${u},\n    themeFromHost: ${t},\n    themeFromConfigFile: ${i},\n    isForcedColorsActive: ${s}`),
            !y)
                throw (0,
                C.Tr)(S.w5.Theme, S.jK.Undefined, "Couldn't resolve themeType in useThemeResolution");
            e.log(`useThemeResolution returned { themeType: ${y} }`);
            return (0,
            r.useMemo)((()=>({
                themeType: y,
                themeOptions: {
                    isCallingWindowDarkTheme: v
                }
            })), [y, v])
        }
        ;
        var O = n(766228);
        const B = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ComponentsCoreThemeProviderHostThemeMutation"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "theme"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "HostTheme"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "setHostTheme"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "theme"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "theme"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "HostTheme"
                                    }
                                }
                            }
                        }],
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }]
                }
            }]
        }
          , j = {
            contrast: "Contrast",
            dark: "Dark",
            light: "Light"
        };
        var P = n(90911)
          , R = n(132773)
          , x = n(382433)
          , F = n(172587)
          , _ = n(94788)
          , W = n(656690)
          , z = n(27220)
          , Q = n(178892);
        let H;
        try {
            H = n(963398)
        } catch (e) {}
        class U extends r.Component {
            constructor(e) {
                var t;
                super(e),
                this._isCustomOutlineEnabled = !1,
                this._isBackInMain = !1,
                this._isEmbed = !1,
                this._onRootFocus = ()=>{
                    if (this._win) {
                        const e = this._win.document.createEvent("HTMLEvents");
                        e.initEvent("focus-zone-state-reset", !0, !0),
                        this._win.dispatchEvent(e)
                    }
                }
                ,
                this._dispatchArrowKeyOnBody = e=>{
                    var t, n;
                    const i = null === (n = null === (t = this._win) || void 0 === t ? void 0 : t.document) || void 0 === n ? void 0 : n.activeElement;
                    if (i && "BODY" === i.tagName)
                        switch (e.key) {
                        case "ArrowDown":
                        case "ArrowUp":
                        case "PageDown":
                        case "PageUp":
                        case "Home":
                        case "End":
                            this._api.dispatchFocusLostEvent(Q.Wt.ArrowKeyOnBody)
                        }
                }
                ,
                this._onBIMFocusManagementEvent = e=>{
                    this._onBIMFocusManagementMessage && this._onBIMFocusManagementMessage({
                        data: e.payload,
                        send: this._bimFocusManagementSend
                    })
                }
                ,
                this._bimFocusManagementSend = e=>{
                    var t, n;
                    (null === (n = null === (t = this.props.windowProvider) || void 0 === t ? void 0 : t.opener) || void 0 === n ? void 0 : n.postMessage) && this.props.windowProvider.opener.postMessage(W.rY.FocusManagementEvent, e)
                }
                ,
                this._embedSendToMain = e=>{
                    U._onEmbedMainFocusManagementMessage && U._onEmbedMainFocusManagementMessage({
                        data: e,
                        send: e=>{
                            var t, n;
                            const i = null === (n = null === (t = this._win) || void 0 === t ? void 0 : t.document) || void 0 === n ? void 0 : n.body;
                            i && i.offsetWidth && i.offsetHeight && this._onEmbedFocusManagementMessage && this._onEmbedFocusManagementMessage({
                                data: e,
                                send: this._embedSendToMain
                            })
                        }
                    })
                }
                ,
                this._bimFocusReset = ()=>{
                    var e, t;
                    this._isBackInMain && (null === (t = null === (e = this.props.windowProvider) || void 0 === e ? void 0 : e.opener) || void 0 === t || t.postMessage(W.rY.FocusResetEvent))
                }
                ,
                this._isEmbed = !!(null === (t = e.uiVariables) || void 0 === t ? void 0 : t.isEmbed),
                this._isBackInMain = !this._isEmbed && e.windowProvider.viewportContext === x.R.iFrame,
                this._api = new _._4
            }
            render() {
                return this._setupTabster(),
                (0,
                o.t)(z.f.Consumer, {
                    children: e=>{
                        var t;
                        const n = e.siteVariables.focusOuterBorderColor;
                        return n !== this._outlineColor && (this._outlineColor = n,
                        this._isCustomOutlineEnabled && this._tabster && (null === (t = this._outline) || void 0 === t || t.setup({
                            outlineColor: n
                        }))),
                        (0,
                        o.t)(_.I3.Provider, Object.assign({
                            value: this._api
                        }, {
                            children: this.props.children
                        }))
                    }
                })
            }
            componentDidMount() {
                var e, t, n;
                const {enableFocusMessageContent: i} = this.props.coreSettings.get(p.J.Messaging);
                i && (null === (n = null === (t = null === (e = this.props.windowProvider) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.body) || void 0 === n || n.setAttribute("role", "application"))
            }
            componentWillUnmount() {
                if (this._getWindowTimer && (this.props.windowProvider.clearTimeout(this._getWindowTimer),
                delete this._getWindowTimer),
                this._tabster) {
                    if (this._isEmbed && this._embedProviderId && (delete U._embedProviders[this._embedProviderId],
                    U._mainEmbedProviderId === this._embedProviderId)) {
                        delete U._mainEmbedProviderId,
                        delete U._onEmbedMainFocusManagementMessage;
                        for (const e of Object.keys(U._embedProviders)) {
                            U._embedProviders[e]._setupEmbedCrossOrigin();
                            break
                        }
                    }
                    this._isBackInMain && this.props.windowProvider.opener.removeEventListener(W.rY.FocusManagementEvent, this._onBIMFocusManagementEvent),
                    this._tabster.root.eventTarget.removeEventListener("focus", this._onRootFocus),
                    this._tabster.root.eventTarget.removeEventListener("blur", this._onRootFocus),
                    _._4.dispose(this._api),
                    (0,
                    F.GL)(this._tabster),
                    delete this._tabster,
                    delete this._deloser,
                    delete this._modalizer,
                    delete this._outline,
                    delete this._crossOrigin,
                    delete this._win,
                    delete this._onBIMFocusManagementMessage,
                    delete this._onEmbedFocusManagementMessage
                }
            }
            _setupTabster() {
                var e, t;
                if (!this._tabster) {
                    const {enableFocusManagement: n, enableFocusDelosers: i, enableExperimentalAccessibility: a, enableFocusManagementRoot: o, enableUncontrolledTabster: r} = this.props.coreSettings.get(p.J.Core);
                    if (!this._isEmbed && !n || this._isEmbed && !a)
                        return;
                    const s = this.props.windowProvider;
                    if (!s.document.defaultView)
                        return;
                    if (((null === (e = s.navigator) || void 0 === e ? void 0 : e.appVersion) || "").indexOf("Electron/8") >= 0)
                        return;
                    this._win = s.document.defaultView;
                    const l = (0,
                    F.ox)(this._win, Object.assign({
                        checkUncontrolledTrappingFocus: e=>"true" === e.getAttribute("data-popup-trapfocus")
                    }, r ? {
                        controlTab: !1,
                        rootDummyInputs: !0
                    } : void 0));
                    if (this._makeNoOpIfNeeded(l),
                    this._tabster = l,
                    this._deloser = (0,
                    F.BI)(l),
                    this._modalizer = (0,
                    F.V0)(l, void 0, ((e,t)=>{
                        var n, i;
                        if ("BODY" === (null === (n = e.parentElement) || void 0 === n ? void 0 : n.tagName) && e.hasAttribute("aria-live"))
                            return !0;
                        const a = null === (i = e._virtual) || void 0 === i ? void 0 : i.parent;
                        return !(!a || !(null == t ? void 0 : t.some((e=>e.contains(a)))))
                    }
                    )),
                    this._outline = (0,
                    F.SG)(l),
                    this._crossOrigin = (0,
                    F.pM)(l),
                    _._4.init(this._api, this._tabster, this._win, this._bimFocusReset),
                    l.root.eventTarget.addEventListener("focus", this._onRootFocus),
                    l.root.eventTarget.addEventListener("blur", this._onRootFocus),
                    this._win.addEventListener("keydown", this._dispatchArrowKeyOnBody),
                    a) {
                        this._isCustomOutlineEnabled = !0;
                        try {
                            H && (H.default = ()=>({}))
                        } catch (e) {}
                        this._outlineColor && (null === (t = this._outline) || void 0 === t || t.setup({
                            outlineColor: this._outlineColor
                        }))
                    }
                    this._addTabsterToBody(!!o, !!a, !!i),
                    this._isBackInMain ? this._setUpBIMCrossOrigin() : this._isEmbed && (this._embedProviderId = "" + ++U._lastEmbedProviderId,
                    U._embedProviders[this._embedProviderId] = this,
                    this._setupEmbedCrossOrigin())
                }
            }
            _addTabsterToBody(e, t, n) {
                const i = {};
                (e || t || n) && (i.root = {}),
                (t || n) && (i.deloser = {}),
                this._win && Object.keys(i).length > 0 && this._win.document.body.setAttribute(F.Yk.TabsterAttributeName, (0,
                F.yS)(i, !0))
            }
            _makeNoOpIfNeeded(e) {
                const {buildType: t} = this.props.coreSettings.get(p.J.Platform);
                if ("local" === t && "undefined" != typeof URL && this._win) {
                    "noop" === new URL(this._win.location.href).searchParams.get("tabster") && (0,
                    F.mZ)(e, !0)
                }
            }
            _setUpBIMCrossOrigin() {
                var e;
                this._tabster && (this._onBIMFocusManagementMessage = null === (e = this._crossOrigin) || void 0 === e ? void 0 : e.setup((e=>{
                    this.props.windowProvider.opener.postMessage(W.rY.FocusManagementEvent, e)
                }
                )),
                this.props.windowProvider.opener.addEventListener(W.rY.FocusManagementEvent, this._onBIMFocusManagementEvent))
            }
            _setupEmbedCrossOrigin() {
                var e, t;
                this._tabster && (U._mainEmbedProviderId || (U._mainEmbedProviderId = this._embedProviderId),
                U._mainEmbedProviderId === this._embedProviderId ? U._onEmbedMainFocusManagementMessage = null === (e = this._crossOrigin) || void 0 === e ? void 0 : e.setup(null) : this._onEmbedFocusManagementMessage = null === (t = this._crossOrigin) || void 0 === t ? void 0 : t.setup(this._embedSendToMain))
            }
        }
        U._embedProviders = {},
        U._lastEmbedProviderId = 0;
        var V = n(148617)
          , G = n(90746)
          , Y = n(103328)
          , J = n(138730)
          , K = n(481393);
        const q = r.memo((({children: e, i18NextWrapper: t, host: n})=>{
            const {loading: i, localizationSettings: {currentLocale: a}} = (0,
            K.v)()
              , {i18nCacheOptions: r} = (0,
            m.NC)(p.J.Localization);
            return i ? null : (0,
            o.t)(Y.bd, Object.assign({
                i18NextWrapper: t,
                host: n,
                locale: a,
                i18nCacheOptions: r
            }, {
                children: e
            }))
        }
        ));
        q.displayName = "LocalizationRootProvider";
        var Z = n(5091)
          , X = n(541821)
          , $ = n(195067)
          , ee = n(142513)
          , te = n(866876)
          , ne = n(446652)
          , ie = n(419925)
          , ae = n(955105)
          , oe = n(916987)
          , re = n(589418)
          , se = n(659334)
          , le = n(600999);
        const de = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ComponentsShortcutServiceProviderUserPreferenceNewChatQuery"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "userPreferences"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "userPersonalSettings"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "messagingSettings"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "alwaysPopOutNewChat"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "Boolean"
                                                    }
                                                },
                                                arguments: []
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "MessagingSettings"
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "UserSettings"
                                        }
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "UserPreferences"
                                }
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
          , ce = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "ComponentsShortcutServiceProviderUserPreferenceNewChatSettingSubscription"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "category"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UserPreferencesCategory"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "userPreferencesChangedEventForCategory"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "category"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "category"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "UserPreferencesCategory"
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "userPersonalSettings"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "messagingSettings"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "alwaysPopOutNewChat"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "Boolean"
                                                    }
                                                },
                                                arguments: []
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "MessagingSettings"
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "UserSettings"
                                        }
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UserPreferences"
                            }
                        }
                    }]
                }
            }]
        };
        var ue = n(516909)
          , ge = n(426571);
        const me = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ComponentsShortcutServiceProviderCreateNewChatMutation"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createNewChat"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "conversation"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ID"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "consumptionHorizon"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NonNullType",
                                                    type: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "ID"
                                                        }
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "timeStamp"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "String"
                                                    }
                                                },
                                                arguments: []
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ConsumptionHorizon"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "memberIds"
                                        },
                                        __type: {
                                            kind: "ListType",
                                            type: {
                                                kind: "NonNullType",
                                                type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "membersLimited"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NonNullType",
                                                    type: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "ID"
                                                        }
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "email"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "String"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "givenName"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "String"
                                                    }
                                                },
                                                arguments: []
                                            }]
                                        },
                                        __type: {
                                            kind: "ListType",
                                            type: {
                                                kind: "NonNullType",
                                                type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "User"
                                                    }
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "memberDisplayNamesLimited"
                                        },
                                        __type: {
                                            kind: "ListType",
                                            type: {
                                                kind: "NonNullType",
                                                type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "String"
                                                    }
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatDisabledContext"
                                        },
                                        directives: [{
                                            kind: "Directive",
                                            name: {
                                                kind: "Name",
                                                value: "client"
                                            }
                                        }],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isUIDisabled"
                                                },
                                                __type: {
                                                    kind: "NonNullType",
                                                    type: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "Boolean"
                                                        }
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "disabledReason"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ChatDisabledContextReason"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "extendedData"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "String"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "lastUpdatedTime"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "String"
                                                    }
                                                },
                                                arguments: []
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ChatDisabledContext"
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Conversation"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasIBPolicyRejectedUsers"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CreateChatResult"
                                }
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
          , {useCallback: pe, useMemo: ve} = s
          , he = ({isMac: e, getActiveElement: t},{clientType: n},i)=>{
            const {shortcutsForPopout: a} = (0,
            m.NC)(p.J.Shortcuts)
              , {enableNewChatPopOut: o} = (0,
            m.NC)(p.J.Chat)
              , s = "primary" === i.viewportContext
              , {entityCommanding: l} = (0,
            g.SE)()
              , [d] = (0,
            O.D)(me)
              , c = (()=>{
                var e, t, n, i;
                const {enableNewChatPopOut: a, enableDefaultSettingsNewChatPopOut: o} = (0,
                m.NC)(p.J.Chat)
                  , {data: r} = (0,
                E.a)(de, {
                    fetchPolicy: "cache-and-network",
                    skip: !a
                });
                return (0,
                ge.m)(ce, {
                    variables: {
                        category: ue.nV$.userPersonalSettings
                    },
                    skip: !a
                }),
                !(!a || !(null !== (i = null === (n = null === (t = null === (e = null == r ? void 0 : r.userPreferences) || void 0 === e ? void 0 : e.userPersonalSettings) || void 0 === t ? void 0 : t.messagingSettings) || void 0 === n ? void 0 : n.alwaysPopOutNewChat) && void 0 !== i ? i : o))
            }
            )()
              , u = (0,
            _.IE)()
              , v = n === ne.Bh.Maglev
              , h = pe((()=>{
                const e = t();
                if (e) {
                    const {x: t, y: n, width: i, height: a} = e.getBoundingClientRect();
                    e.dispatchEvent(new MouseEvent("contextmenu",{
                        bubbles: !0,
                        clientX: t + i / 2,
                        clientY: n + a / 2
                    }))
                }
            }
            ), [t])
              , y = pe((e=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                yield d(),
                yield l.chat.chatById(oe.FX, {
                    entityCommand: {
                        stateTransition: e ? ie.su.new : ie.su.forceFlush,
                        visibilityState: ie.fe.show,
                        correlation: {
                            id: (0,
                            se.v4)(),
                            source: ae.D.KeyboardShortcut,
                            startTimestamp: Date.now()
                        }
                    },
                    entityOptions: {
                        shouldCheckChatPolicy: !0
                    }
                }),
                u.requestFocus(re.D.PeoplePickerInput)
            }
            ))), [l, d, u])
              , A = pe((()=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                y(!0)
            }
            ))), [y])
              , f = pe((()=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                y(!!a)
            }
            ))), [y, a])
              , b = r.useCallback((()=>!1), []);
            (0,
            le.l)("RefreshPage", b);
            const C = ve((()=>{
                const t = [];
                return v && !0 !== s && t.push({
                    commandIdentifier: "CloseWindow",
                    callback: i.close
                }),
                e && t.push({
                    commandIdentifier: "ContextMenu",
                    callback: h
                }),
                t.push({
                    commandIdentifier: "NewChat",
                    callback: c ? A : f
                }),
                o && t.push({
                    commandIdentifier: "PopoutNewChat",
                    callback: A
                }),
                t
            }
            ), [h, o, A, f, i, e, s, v, c]);
            (0,
            te.XU)(C),
            (e=>{
                const {entityCommanding: t, host: n} = (0,
                g.SE)()
                  , {document: i} = n
                  , a = r.useCallback((()=>{
                    e ? t.shell.zoomInWindow() : n.zoomIn()
                }
                ), [t, n, e])
                  , o = r.useCallback((()=>{
                    e ? t.shell.zoomOutWindow() : n.zoomOut()
                }
                ), [t, n, e])
                  , s = r.useCallback((e=>{
                    e.ctrlKey && (e.preventDefault(),
                    e.deltaY > 0 ? o() : e.deltaY < 0 && a())
                }
                ), [a, o]);
                r.useEffect((()=>(i.addEventListener("wheel", s, {
                    passive: !1
                }),
                ()=>{
                    i.removeEventListener("wheel", s)
                }
                )), [i, s])
            }
            )(v),
            (()=>{
                const e = (0,
                $.de)()
                  , t = (0,
                _.IE)()
                  , n = r.useCallback((()=>{
                    t.getObservedElement(re.D.CallingMicButton) ? t.requestFocus(re.D.CallingMicButton) : null == e || e.executeCommand("GoToPowerBar")
                }
                ), [t, e]);
                (0,
                te.Dt)("NavigateBack", n)
            }
            )(),
            (e=>{
                const {entityCommanding: t, host: n} = (0,
                g.SE)()
                  , {enableBrb: i, enableBrbAndFeedbackModalDialogForWeb: a} = (0,
                m.NC)(p.J.Brb)
                  , {shortcutsForIframe: o} = (0,
                m.NC)(p.J.Shortcuts)
                  , s = (0,
                _.IE)()
                  , l = "primary" === n.viewportContext
                  , d = e === ne.Bh.Maglev
                  , c = r.useCallback((e=>{
                    s.requestFocus(e)
                }
                ), [s])
                  , {getHelpLink: u} = (0,
                m.NC)(p.J.Core, ["getHelpLink"])
                  , {enableHelpPersonalApp: v, enableHelpAppPopOut: h, helpPersonalAppId: y} = (0,
                m.NC)(p.J.Help, ["enableHelpPersonalApp", "enableHelpAppPopOut", "helpPersonalAppId"])
                  , A = null != u ? u : ""
                  , f = y
                  , b = h
                  , C = "help"
                  , S = r.useCallback((()=>{
                    t.platform.launchPersonalPlatformApp(f, b, C, ae.D.MoreOptionsMenu)
                }
                ), [t, C, f, b])
                  , I = r.useCallback((()=>n.open(A, "_blank")), [A, n])
                  , k = r.useCallback((()=>{
                    c("SettingsList"),
                    t.settings.launch({
                        stateTransition: ie.su.flush,
                        visibilityState: ie.fe.show,
                        correlation: {
                            source: ae.D.MoreOptionsMenu
                        }
                    })
                }
                ), [t.settings, c])
                  , N = r.useCallback((()=>{
                    a ? t.brbFeedback.brbFeedbackDialog({
                        visibilityState: ie.fe.show,
                        stateTransition: ie.su.new,
                        correlation: {
                            source: ae.D.MoreOptionsMenu
                        }
                    }) : t.brbFeedback.brbFeedbackDialogInMainWindow({
                        visibilityState: ie.fe.show,
                        stateTransition: ie.su.new,
                        correlation: {
                            source: ae.D.MoreOptionsMenu
                        }
                    })
                }
                ), [t, a])
                  , E = r.useCallback((()=>{
                    d ? t.shell.zoomInWindow() : n.zoomIn()
                }
                ), [t, n, d])
                  , T = r.useCallback((()=>{
                    d ? t.shell.zoomOutWindow() : n.zoomOut()
                }
                ), [t, n, d])
                  , w = r.useCallback((()=>{
                    d ? t.shell.zoomResetWindow() : n.zoomReset()
                }
                ), [t, n, d])
                  , M = r.useMemo((()=>{
                    const e = [];
                    return d && (v && f ? e.push({
                        commandIdentifier: "OpenHelp",
                        callback: S
                    }) : e.push({
                        commandIdentifier: "OpenHelp",
                        callback: I
                    })),
                    (d || o) && e.push({
                        commandIdentifier: "ZoomIn",
                        callback: E
                    }, {
                        commandIdentifier: "ZoomOut",
                        callback: T
                    }, {
                        commandIdentifier: "ZoomReset",
                        callback: w
                    }),
                    i && e.push({
                        commandIdentifier: "OpenBRBDialog",
                        callback: N
                    }),
                    d && l && e.push({
                        commandIdentifier: "OpenSettingsMenu",
                        callback: k
                    }),
                    e
                }
                ), [i, v, f, l, d, N, S, I, k, o, E, T, w]);
                (0,
                te.XU)(M)
            }
            )(n)
        }
        ;
        var ye = n(443914);
        const Ae = ()=>n.e(926340).then(n.bind(n, 949759))
          , fe = e=>(0,
        o.t)(ye.o, {
            factory: Ae,
            props: e,
            fallback: !1
        });
        var be = n(177194)
          , Ce = n(237628)
          , Se = n(320225);
        const Ie = r.createContext(null)
          , ke = (Ie.Consumer,
        e=>{
            const {children: t, history: n, services: i} = e;
            return (0,
            o.t)(Ie.Provider, Object.assign({
                value: (0,
                Ce.Q)(i, Se.isEqual)
            }, {
                children: (0,
                o.t)(be.F0, Object.assign({
                    history: n
                }, {
                    children: t
                }))
            }))
        }
        );
        var Ne = n(459703);
        const Ee = r.memo((({children: e})=>{
            const t = "true" === localStorage.getItem("fluentUITelemetry")
              , {isDiagnosticsPanelEnabled: n} = (0,
            m.NC)(p.J.Diagnostics);
            return n && t ? (0,
            o.t)(Ne.A, {
                children: e
            }) : e
        }
        ));
        Ee.displayName = "TelemetryPopoverWrapper";
        var Te = n(696940)
          , we = n(196517)
          , Me = n(738646)
          , De = n(206273)
          , Le = n(621786)
          , Oe = n(618451)
          , Be = n(384306)
          , je = n(970180);
        const Pe = e=>{
            const {children: t} = e
              , {entityCommanding: n} = (0,
            g.SE)();
            return (0,
            o.t)(Oe.G, Object.assign({
                commanding: n.nova
            }, {
                children: (0,
                o.t)(Be.g, Object.assign({
                    graphql: je
                }, {
                    children: t
                }))
            }))
        }
        ;
        Pe.displayName = "NovaContextProvider";
        var Re = n(466818)
          , xe = n(530899)
          , Fe = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UseNovaMeControlAvatarSrcQuery",
                    loc: void 0
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: void 0,
                        name: {
                            kind: "Name",
                            value: "me",
                            loc: void 0
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: void 0,
                                name: {
                                    kind: "Name",
                                    value: "id",
                                    loc: void 0
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: void 0,
                                loc: void 0,
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ID"
                                        }
                                    }
                                }
                            }, {
                                kind: "Field",
                                alias: void 0,
                                name: {
                                    kind: "Name",
                                    value: "avatarUrl",
                                    loc: void 0
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: void 0,
                                loc: void 0,
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            }],
                            loc: void 0
                        },
                        loc: void 0,
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "User"
                            }
                        }
                    }],
                    loc: void 0
                },
                loc: void 0
            }].concat([])
        }
          , _e = n(238446)
          , We = n(321781)
          , ze = n(354571)
          , Qe = n(802498)
          , He = n(526898);
        const Ue = (e,t,n)=>(0,
        o.t)(r.Fragment, {
            children: n && (0,
            o.t)(He.z, {
                content: e.translate("framework", "retry_button_label"),
                onClick: t,
                primary: !0
            })
        })
          , Ve = e=>(0,
        o.t)(r.Fragment, {
            children: [(0,
            o.t)("div", {
                "data-testid": "windows-close-button",
                id: "windows-close-button",
                onClick: e
            }), (0,
            o.t)("style", {
                children: '#windows-close-button:after {\n          display: inline-block;\n          content: "\\00d7";\n          color: white;\n          font-size: 2.5rem;\n        }\n\n        #windows-close-button{\n          position: absolute;\n          right: 1rem;\n        }'
            })]
        })
          , Ge = ({handleRetry: e, hideTopBar: t, i18n: n, isOsPlatformWindows: i, isRecoverableState: a, onWindowClose: s})=>{
            const {themeType: l} = (0,
            z.L)();
            return (0,
            o.t)(r.Fragment, {
                children: [!t && (0,
                o.t)("div", Object.assign({
                    "data-tid": "error-boundary-top-bar",
                    "data-testid": "error-boundary-top-bar",
                    style: {
                        height: "4rem",
                        backgroundColor: "#464775"
                    }
                }, {
                    children: i && Ve(s)
                })), l && (0,
                o.t)(Qe._, {
                    primaryMessage: n.translate("framework", "default_error_message"),
                    button: Ue(n, e, a)
                }), !l && (0,
                o.t)("div", Object.assign({
                    "data-tid": "error-boundary-naive-error",
                    "data-testid": "error-boundary-naive-error"
                }, {
                    children: [n.translate("framework", "default_error_message"), " "]
                }))]
            })
        }
        ;
        Ge.displayName = "FoundErrorRenderer";
        const {useCallback: Ye, useRef: Je} = s
          , Ke = ({error: e, handleRetry: t, hideTopBar: n, host: i, i18n: a, isOsPlatformWindows: r, loggerFactory: s, isRecoverableState: l, correlationId: d})=>{
            var c, u, g;
            const {commandChangeReportingService: m, hostCommunicationService: p, windowId: v} = (0,
            A.i)()
              , h = Je(!1)
              , y = Ye((()=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                var e;
                h.current = !0;
                const t = yield p.loadModule("core");
                null === (e = null == t ? void 0 : t.reportFirstPaint) || void 0 === e || e.call(t, v)
            }
            ))), [p, v]);
            h.current || (y(),
            null === (c = i.preCoreUiAdapter) || void 0 === c || c.hideLoadingScreen());
            const f = s.newLogger("DefaultErrorBoundary", "components-core-layout")
              , b = JSON.stringify(e, (0,
            C.cm)(), "  ");
            return null === (g = null === (u = e.reason) || void 0 === u ? void 0 : u.reportCommand) || void 0 === g || g ? (f.errorToTelemetry && f.errorToTelemetry(`DefaultErrorBoundary: ${b}`, "webclient_framework_foundation_components_default_error_boundary", void 0, !0),
            d && m.report({
                correlationId: d,
                type: _e.B.Failure,
                context: {
                    target: "found-error-container",
                    errorInfo: We.y.ErrorBoundaryError,
                    errorMessage: b
                }
            })) : f.errorToTelemetry && f.errorToTelemetry(`DefaultErrorBoundary: ${b}`, "webclient_framework_foundation_components_default_error_boundary", void 0, !0),
            (0,
            o.t)(Ge, {
                handleRetry: t,
                hideTopBar: n,
                i18n: a,
                isOsPlatformWindows: r,
                isRecoverableState: l,
                onWindowClose: function() {
                    i.close()
                }
            })
        }
        ;
        Ke.displayName = "FoundErrorContainer";
        var qe, Ze = n(974509), Xe = n(540929), $e = n(5575);
        !function(e) {
            e.DataNotFound = "Server cannot find the data you are looking for.",
            e.UnknownError = "An unknown error has occurred."
        }(qe || (qe = {}));
        const et = e=>{
            e || (e = {
                code: S.jK.Unknown,
                message: qe.UnknownError
            });
            let t = e;
            const n = e;
            if (n.graphQLErrors || n.networkError || n.extraInfo) {
                const e = (0,
                Xe.E6)(n);
                if (e) {
                    const n = (0,
                    C.O$)(e, "status", 0);
                    let i = "";
                    switch (n) {
                    case Ze.qb.NOT_FOUND:
                        e.message = qe.DataNotFound,
                        i = "DataNotFound";
                        break;
                    case 0:
                        i = e.code;
                        break;
                    default:
                        i = `${n}-${e.code}`
                    }
                    t = e,
                    t.parsedErrorCode = i
                }
            }
            return t
        }
          , tt = e=>{
            e.exitFullscreen()
        }
          , nt = e=>{
            let t = !1;
            try {
                t = "AuthError" === (null == e ? void 0 : e.type) || "CoreError" === (null == e ? void 0 : e.type)
            } catch (e) {}
            return t
        }
        ;
        var it = n(457695)
          , at = n(2877);
        const ot = (0,
        at.s)({
            defaultErrorBoundary: {
                a9b677: "fly5x3f",
                Bqenvij: "f1l02sjl"
            }
        }, {
            d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}"]
        })
          , {memo: rt} = s
          , st = {
            error: void 0,
            info: void 0
        };
        class lt extends r.PureComponent {
            constructor() {
                super(...arguments),
                this.logger = this.props.loggerFactory.newLogger("DefaultErrorBoundary", "components-core-layout"),
                this.state = st,
                this.handleRetry = ()=>{
                    this.setState(st)
                }
                ,
                this.shouldRethrowToGlobalErrorBoundary = e=>!this.props.isTopErrorBoundary && nt(e)
            }
            componentDidCatch(e, t) {
                const {identifier: n} = this.props;
                n && this.logger.error(`The error boundary at ${n} caught an error`),
                tt(this.props.host);
                const i = et(e);
                if (this.props.correlationId && this.props.commandChangeReportingService.report({
                    correlationId: this.props.correlationId,
                    type: _e.B.Failure,
                    context: {
                        target: "default-error-boundary",
                        errorInfo: i.parsedErrorCode || i.code || We.y.ErrorBoundaryError,
                        errorMessage: i.message,
                        showOops: !0
                    }
                }),
                this.shouldRethrowToGlobalErrorBoundary(e))
                    throw e;
                this.props.errorState.error = Object.assign(Object.assign({}, i), {
                    stack: t.componentStack,
                    name: i.name,
                    message: i.message,
                    context: "default-error-boundary"
                }),
                this.setState({
                    error: i
                })
            }
            render() {
                var e, t;
                const n = this._getError();
                if (n) {
                    const {clientState: i, correlationIdRef: a, hideTopBar: r=!0, host: s, i18n: l, isOsPlatformWindows: d, loggerFactory: c, styles: u} = this.props
                      , g = i !== ze.pk.Unrecoverable && (null === (t = null === (e = n.reason) || void 0 === e ? void 0 : e.isRecoverable) || void 0 === t || t);
                    return (0,
                    o.t)(it.W, Object.assign({
                        "data-tid": "default-error-boundary",
                        className: u.defaultErrorBoundary
                    }, {
                        children: (0,
                        o.t)(Ke, {
                            correlationId: null == a ? void 0 : a.current,
                            error: n,
                            handleRetry: this.handleRetry,
                            hideTopBar: r,
                            host: s,
                            i18n: l,
                            isOsPlatformWindows: d,
                            isRecoverableState: g,
                            loggerFactory: c
                        })
                    }))
                }
                return this.props.children
            }
            _getError() {
                return this.state.error || (this.props.clientState === ze.pk.Unrecoverable ? this.props.errorState.error : "")
            }
        }
        const dt = rt((e=>{
            const t = (0,
            Y.Cq)()
              , {clientState: n} = (0,
            g.TE)()
              , i = ot();
            return (0,
            o.t)(lt, Object.assign({}, e, {
                clientState: n,
                i18n: t,
                styles: i
            }))
        }
        ));
        dt.displayName = "DefaultErrorBoundary";
        const ct = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "authenticateUser"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "authenticateUser"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ID"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isAuthenticated"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Boolean"
                                        }
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "AuthenticationUser"
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
          , ut = ({onSignIn: e})=>(r.useEffect((()=>{
            e().catch((e=>{
                throw e
            }
            ))
        }
        ), [e]),
        null);
        ut.displayName = "AutoLogin";
        var gt = n(466094);
        const mt = ({children: e})=>{
            const {authenticationUser: t} = (0,
            g.SE)()
              , {disableExperience: n} = (0,
            m.NC)(p.J.Core, ["disableExperience"])
              , {crossCloudMeetingEnabled: i} = (0,
            m.NC)(p.J.HostCapabilities, ["crossCloudMeetingEnabled"])
              , a = n && (null == t ? void 0 : t.isAuthenticated) && (null == t ? void 0 : t.role) !== gt.w4.Anonymous
              , s = n && !1 === i && (null == t ? void 0 : t.role) === gt.w4.Anonymous;
            if (a || s)
                throw new $e.G($e.$.EXPERIENCE_DISABLED);
            return (0,
            o.t)(r.Fragment, {
                children: e
            })
        }
        ;
        var pt = n(528714)
          , vt = n(928665)
          , ht = n(382626)
          , yt = n(688689);
        const At = (e,t)=>[t, e].filter(Boolean).join(" | ")
          , {useCallback: ft, useEffect: bt, useRef: Ct} = s;
        var St = n(486070);
        const {useCallback: It, useEffect: kt, useRef: Nt} = s
          , {memo: Et, useCallback: Tt, useEffect: wt, useMemo: Mt, useRef: Dt, useState: Lt} = s
          , Ot = Et((({client: e, logger: t, platformServiceConfig: n})=>{
            const i = Tt((()=>((e,t)=>(e.log("User is attempting login."),
            t.mutate({
                mutation: ct
            })))(t, e)), [e, t]);
            return n.isInIframe ? (0,
            o.t)(fe, {
                onSignIn: i
            }) : (0,
            o.t)(ut, {
                onSignIn: i
            })
        }
        ));
        Ot.displayName = "LoginRequiredNode";
        const Bt = Et((({altScenarioService: e, appsRegistryService: t, children: n, commandChangeReportingService: i, commandHistoryService: a, commandReportingService: r, commandResultService: s, context: l, experienceChangeReportingService: d, getExperienceProps: c, scheduler: u, windowId: m})=>{
            const {config: v, uiVariables: A, errorBoundary: f} = c(["config", "uiVariables", "errorBoundary"])
              , {authenticationService: b, authenticationUser: C, client: S, viewSchemaClient: I, clientPreferences: k, coreSettings: N, coreShortcutService: E, discover: T, entityCommanding: w, errorState: M, history: D, hostCommunicationService: L, i18NextWrapper: O, leakDetectorService: B, loggerFactory: j, mediaAuthService: P, networkState: R, platformService: {config: x}, rebootService: F, routingServices: _, scenarioFactory: W, shortcutExecutionService: z, windowProvider: Q} = l
              , H = j.newLogger("RootProvider", "components-core-layout");
            !function(e, t) {
                var n;
                null === (n = null == e ? void 0 : e.altScenario) || void 0 === n || n.startStep(Me.ck.RenderRootProvider),
                t.stopScenarioIfActive(Me.RG.AppStart),
                t.startStep(Me.RG.WindowLaunchTime, Me.ck.RenderProviders)
            }(e, W);
            const U = x.osPlatform === ne.NR.Windows
              , G = (0,
            o.t)(Ot, {
                client: S,
                platformServiceConfig: x,
                logger: H
            })
              , Y = {
                authenticationUser: C,
                children: n,
                client: S,
                commandChangeReportingService: i,
                commandHistoryService: a,
                commandReportingService: r,
                coreSettings: N,
                coreShortcutService: E,
                entityCommanding: w,
                ErrorBoundary: null != f ? f : dt,
                errorState: M,
                experienceConfig: v,
                history: D,
                host: Q,
                loggerFactory: j,
                loginRequiredNode: G,
                networkState: R,
                platformServiceConfig: x,
                routingServices: _,
                scenarioFactory: W,
                shortcutExecutionService: z,
                uiVariables: A,
                windowId: m
            }
              , J = {
                coreServices: {
                    authenticationService: b,
                    client: S,
                    coreSettings: N,
                    clientPreferences: k,
                    hostCommunicationService: L,
                    i18NextWrapper: O,
                    loggerFactory: j,
                    rebootService: F,
                    scenarioFactory: W,
                    windowProvider: Q
                },
                windowId: m
            };
            return V.t.enableGlobalErrorHandlingV2 = N.get(p.J.Core).enableGlobalErrorHandlingV2 || !1,
            (0,
            o.t)(De.e, Object.assign({
                client: S
            }, {
                children: (0,
                o.t)(h.AO, Object.assign({
                    viewSchemaClient: I,
                    defaultClient: S
                }, {
                    children: (0,
                    o.t)(y.SM, Object.assign({
                        defaultContext: l
                    }, {
                        children: (0,
                        o.t)(g.fS, {
                            children: (0,
                            o.t)(q, Object.assign({
                                i18NextWrapper: O,
                                host: Q
                            }, {
                                children: (0,
                                o.t)(Pe, {
                                    children: (0,
                                    o.t)(jt, {
                                        altScenarioService: e,
                                        appsRegistryService: t,
                                        clientPreferences: k,
                                        commandChangeReportingService: i,
                                        commandHistoryService: a,
                                        commandReportingService: r,
                                        commandResultService: s,
                                        discover: T,
                                        errorState: M,
                                        experienceChangeReportingService: d,
                                        getExperienceProps: c,
                                        globalErrorBoundaryProps: J,
                                        host: Q,
                                        hostCommunicationService: L,
                                        isOsPlatformWindows: U,
                                        leakDetectorService: B,
                                        loggerFactory: j,
                                        mediaAuthService: P,
                                        networkState: R,
                                        rootProviderInnerProps: Y,
                                        scheduler: u,
                                        windowId: m
                                    })
                                })
                            }))
                        })
                    }))
                }))
            }))
        }
        ));
        Bt.displayName = "RootProvider";
        const jt = Et((({altScenarioService: e, appsRegistryService: t, clientPreferences: n, commandChangeReportingService: i, commandHistoryService: a, commandReportingService: r, commandResultService: s, discover: c, errorState: u, experienceChangeReportingService: g, getExperienceProps: v, globalErrorBoundaryProps: h, host: y, hostCommunicationService: A, isOsPlatformWindows: b, leakDetectorService: C, loggerFactory: S, mediaAuthService: I, networkState: k, rootProviderInnerProps: N, scheduler: E, windowId: T})=>{
            (e=>{
                const t = (0,
                f.w)("useMediaAuthService")
                  , n = Ct(void 0)
                  , i = Ct(void 0)
                  , a = Ct(void 0)
                  , o = ft((()=>({
                    baseImageUrl: a.current
                })), [])
                  , r = Ct(!1)
                  , s = ft((()=>({
                    isImageAuthCookieValid: r.current
                })), [])
                  , c = (0,
                l.JQ)();
                bt((()=>(e && e.initAsyncMediaAuthService(),
                !n.current && e && (n.current = e.baseImageUrlObservable.subscribe((e=>{
                    t.log(`baseImageUrlObservable fired with ${e}, but baseImageUrlRef not updated with current value ${a.current} `),
                    e && a.current !== e && (t.log(`Updating baseImageUrl ${e}`),
                    a.current = e,
                    c.generateEvent({
                        event: d.U3.updateBaseImageUrl(o)
                    }))
                }
                ))),
                !i.current && e && (i.current = e.isImageAuthCookieValidObservable.subscribe((e=>{
                    r.current !== e && (r.current = e,
                    c.generateEvent({
                        event: d.U3.updateIsImageAuthCookieValid(s)
                    }))
                }
                ))),
                ()=>{
                    a.current = void 0,
                    r.current = !1,
                    n.current && (n.current.unsubscribe(),
                    n.current = void 0),
                    i.current && (i.current.unsubscribe(),
                    i.current = void 0)
                }
                )), [o, c, s, e, t])
            }
            )(I),
            (e=>{
                const t = Nt(void 0)
                  , n = It((()=>({
                    amsV2Domain: t.current
                })), [])
                  , i = (0,
                l.JQ)();
                kt((()=>{
                    e.regionGtm(St.Pn.amsV2).then((e=>{
                        e && t.current !== e && (t.current = e,
                        i.generateEvent({
                            event: d.U3.updateAmsV2Domain(n)
                        }))
                    }
                    ))
                }
                ), [n, e, i])
            }
            )(c);
            const {enableNovaMeControlAvatarSrc: w, enableNovaMeControlAvatarSrcContext: M} = (0,
            m.NC)(p.J.Core, ["enableNovaMeControlAvatarSrc", "enableNovaMeControlAvatarSrcContext"])
              , D = !(w && M);
            return D ? (0,
            o.t)(xt, {
                altScenarioService: e,
                appsRegistryService: t,
                clientPreferences: n,
                commandChangeReportingService: i,
                commandHistoryService: a,
                commandReportingService: r,
                commandResultService: s,
                errorState: u,
                experienceChangeReportingService: g,
                getExperienceProps: v,
                globalErrorBoundaryProps: h,
                host: y,
                hostCommunicationService: A,
                isOsPlatformWindows: b,
                leakDetectorService: C,
                loggerFactory: S,
                networkState: k,
                rootProviderInnerProps: N,
                scheduler: E,
                windowId: T
            }) : (0,
            o.t)(Rt, {
                altScenarioService: e,
                appsRegistryService: t,
                clientPreferences: n,
                commandChangeReportingService: i,
                commandHistoryService: a,
                commandReportingService: r,
                commandResultService: s,
                errorState: u,
                experienceChangeReportingService: g,
                getExperienceProps: v,
                globalErrorBoundaryProps: h,
                host: y,
                hostCommunicationService: A,
                isOsPlatformWindows: b,
                leakDetectorService: C,
                loggerFactory: S,
                networkState: k,
                rootProviderInnerProps: N,
                scheduler: E,
                skip: D,
                windowId: T
            })
        }
        ));
        jt.displayName = "RootProviderWithMeControlAvatarSrc";
        const Pt = e=>{
            const t = function(e) {
                var t = (0,
                Re.pp)(Fe, {
                    skip: !!e
                })
                  , n = t.data
                  , i = t.error
                  , a = ((null == n ? void 0 : n.me) || {}).avatarUrl
                  , o = (0,
                xe.f)(a);
                return n || i ? o || i ? void 0 : a || void 0 : null
            }(e)
              , n = (0,
            l.JQ)();
            Mt((()=>{
                if (t) {
                    const e = ()=>({
                        meControlAvatarSrc: t
                    });
                    n.generateEvent({
                        event: d.U3.updateMeControlAvatarSrc(e)
                    })
                }
            }
            ), [n, t])
        }
          , Rt = Et((({altScenarioService: e, appsRegistryService: t, clientPreferences: n, commandChangeReportingService: i, commandHistoryService: a, commandReportingService: r, commandResultService: s, errorState: l, experienceChangeReportingService: d, getExperienceProps: c, globalErrorBoundaryProps: u, host: g, hostCommunicationService: m, isOsPlatformWindows: p, leakDetectorService: v, loggerFactory: h, networkState: y, rootProviderInnerProps: f, scheduler: b, skip: C, windowId: S})=>(Pt(C),
        (0,
        o.t)(A.E, Object.assign({
            altScenarioService: e,
            appsRegistryService: t,
            clientPreferences: n,
            commandChangeReportingService: i,
            commandHistoryService: a,
            commandResultService: s,
            commandReportingService: r,
            experienceChangeReportingService: d,
            getExperienceProps: c,
            hostCommunicationService: m,
            networkState: y,
            scheduler: b,
            windowId: S
        }, {
            children: (0,
            o.t)(dt, Object.assign({
                errorState: l,
                hideTopBar: !1,
                host: g,
                isOsPlatformWindows: p,
                loggerFactory: h,
                commandChangeReportingService: i,
                networkState: y,
                isTopErrorBoundary: !0,
                identifier: "core-rendering-context-provider"
            }, {
                children: (0,
                o.t)(V.t, Object.assign({}, u, {
                    children: (0,
                    o.t)(X.t$, Object.assign({
                        service: v
                    }, {
                        children: (0,
                        o.t)(Ft, Object.assign({}, f))
                    }))
                }))
            }))
        })))));
        Rt.displayName = "RootProviderWithUseNovaMeControlAvatarSrc";
        const xt = Et((({altScenarioService: e, appsRegistryService: t, clientPreferences: n, commandChangeReportingService: i, commandHistoryService: a, commandReportingService: r, commandResultService: s, errorState: l, experienceChangeReportingService: d, getExperienceProps: c, globalErrorBoundaryProps: u, host: g, hostCommunicationService: m, isOsPlatformWindows: p, leakDetectorService: v, loggerFactory: h, networkState: y, rootProviderInnerProps: f, scheduler: b, windowId: C})=>(0,
        o.t)(A.E, Object.assign({
            altScenarioService: e,
            appsRegistryService: t,
            clientPreferences: n,
            commandChangeReportingService: i,
            commandHistoryService: a,
            commandResultService: s,
            commandReportingService: r,
            experienceChangeReportingService: d,
            getExperienceProps: c,
            hostCommunicationService: m,
            networkState: y,
            scheduler: b,
            windowId: C
        }, {
            children: (0,
            o.t)(dt, Object.assign({
                errorState: l,
                hideTopBar: !1,
                host: g,
                isOsPlatformWindows: p,
                loggerFactory: h,
                commandChangeReportingService: i,
                isTopErrorBoundary: !0,
                networkState: y
            }, {
                children: (0,
                o.t)(V.t, Object.assign({}, u, {
                    children: (0,
                    o.t)(X.t$, Object.assign({
                        service: v
                    }, {
                        children: (0,
                        o.t)(Ft, Object.assign({}, f))
                    }))
                }))
            }))
        }))));
        xt.displayName = "RootProviderWithoutUseNovaMeControlAvatarSrc";
        const Ft = Et((({authenticationUser: e, children: t, coreSettings: n, coreShortcutService: i, ErrorBoundary: a, errorState: s, experienceConfig: l, shortcutExecutionService: d, history: c, host: u, loggerFactory: v, loginRequiredNode: h, networkState: y, platformServiceConfig: A, routingServices: C, scenarioFactory: S, uiVariables: I, windowId: k})=>{
            const N = (0,
            f.w)("RootProviderInner")
              , {userBiService: E} = (0,
            g.SE)()
              , {recordPanelAction: T, createDatabag: D} = E
              , P = (0,
            Y.Cq)().isRtl
              , R = (0,
            b.n)()
              , {themeType: x, themeOptions: F} = L()
              , _ = (0,
            M.p)();
            N.log(`isForcedColorsActive: ${_}`),
            ((e,t)=>{
                const [n] = (0,
                O.D)(B)
                  , {enableThemePreferenceResolution: i} = (0,
                m.NC)(p.J.Core, ["enableThemePreferenceResolution"])
                  , a = w(!i);
                (0,
                r.useEffect)((()=>{
                    e ? n({
                        variables: {
                            theme: "Contrast"
                        }
                    }) : (null == a ? void 0 : a.followOsTheme) ? n({
                        variables: {
                            theme: "OSTheme"
                        }
                    }) : t && n({
                        variables: {
                            theme: j[t]
                        }
                    })
                }
                ), [e, n, t, a])
            }
            )(_, x),
            N.log(`Setting initial themeType to ${x}`);
            const [W,z] = Lt(x)
              , Q = Tt((e=>{
                N.log(`Inside setCoreThemeType, setting themeType to ${e}`),
                z((t=>e !== t ? e : t))
            }
            ), [N]);
            zt({
                setThemeType: z,
                themeTypeFromSettings: x
            });
            const H = n.get(p.J.Shortcuts).enableShortcutPropagation
              , U = Mt((()=>(0,
            Le.N)(v.newLogger, n, {
                coreShortcutService: i,
                shortcutExecutionService: d,
                enableShortcutPropagation: !!H,
                windowProvider: u,
                windowId: k
            }, T, D)), [n, i, d, H, u, v.newLogger, k, T, D])
              , V = e ? (0,
            pt.b4)(e) : void 0
              , G = Mt((()=>({
                children: t,
                coreSettings: n,
                ErrorBoundary: a,
                errorState: s,
                host: u,
                loggerFactory: v,
                loginRequiredNode: h,
                networkState: y,
                platformServiceConfig: A,
                scenarioFactory: S,
                shortcutServiceConfiguration: U,
                title: l.title
            })), [t, n, a, s, u, v, h, y, A, S, U, l.title]);
            return (0,
            o.t)(_t, {
                coreSettings: n,
                disableAnimations: R,
                history: c,
                host: u,
                platformServiceConfig: A,
                rootProviderInnerContentProps: G,
                routingServices: C,
                rtl: P,
                setCoreThemeType: Q,
                shortcutServiceConfiguration: U,
                themeType: W,
                themeOptions: F,
                uiVariables: I,
                userContextId: V
            })
        }
        ));
        Ft.displayName = "RootProviderInner";
        const _t = Et((({coreSettings: e, disableAnimations: t, history: n, host: i, platformServiceConfig: a, rootProviderInnerContentProps: r, routingServices: s, rtl: l, setCoreThemeType: d, shortcutServiceConfiguration: c, themeType: g, themeOptions: m, uiVariables: p, userContextId: v})=>(0,
        o.t)(Ee, {
            children: (0,
            o.t)(P._r, Object.assign({
                setCoreThemeType: d,
                themeType: g,
                themeOptions: m
            }, {
                children: (0,
                o.t)(Te._, Object.assign({
                    coreSettings: e,
                    host: i,
                    targetDocument: i.document
                }, {
                    children: (0,
                    o.t)(we.$, Object.assign({
                        coreSettings: e,
                        disableAnimations: t,
                        osPlatform: a.osPlatform,
                        rtl: l,
                        host: i,
                        targetDocument: i.document,
                        themeType: g,
                        uiVariables: p
                    }, {
                        children: (0,
                        o.t)(J.f, Object.assign({
                            namespace: "framework",
                            loaderRenderer: null
                        }, {
                            children: (0,
                            o.t)(u.Qq, Object.assign({
                                targetDocument: i.document
                            }, {
                                children: (0,
                                o.t)(U, Object.assign({
                                    coreSettings: e,
                                    uiVariables: p,
                                    windowProvider: i
                                }, {
                                    children: (0,
                                    o.t)($.j4, Object.assign({
                                        config: c
                                    }, {
                                        children: (0,
                                        o.t)(Z.x0, Object.assign({
                                            targetDocument: i.document
                                        }, {
                                            children: (0,
                                            o.t)(ke, Object.assign({
                                                services: s,
                                                history: n
                                            }, {
                                                children: (0,
                                                o.t)(Wt, Object.assign({}, r), v)
                                            }))
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        })));
        _t.displayName = "RootProviderInnerStabilized";
        const Wt = Et((({children: e, coreSettings: t, ErrorBoundary: n, errorState: i, host: a, loggerFactory: s, loginRequiredNode: l, networkState: d, platformServiceConfig: u, scenarioFactory: h, shortcutServiceConfiguration: y, title: f})=>{
            const {commandChangeReportingService: b} = (0,
            A.i)();
            he(y, u, a);
            const C = (()=>{
                var e;
                const {enableMTMATitlePrefix: t} = (0,
                m.NC)(p.J.Core, ["enableMTMATitlePrefix"])
                  , {authenticationUser: n} = (0,
                g.SE)()
                  , i = null === (e = (0,
                ht.q)()) || void 0 === e ? void 0 : e.experienceAccountMode
                  , a = (null == n ? void 0 : n.id) || ""
                  , o = r.useRef({
                    id: (0,
                    vt.pW)(),
                    source: ae.D.Core
                })
                  , s = (0,
                yt.h)(o.current, a)
                  , l = null == s ? void 0 : s.tenantName
                  , d = null == n ? void 0 : n.loginUserName;
                if (t)
                    return i === ue.bzN.MULTIPLEACCOUNTS && (d || l) ? At(d, l) : void 0
            }
            )();
            return (0,
            o.t)(n, Object.assign({
                commandChangeReportingService: b,
                coreSettings: t,
                errorState: i,
                host: a,
                identifier: "root-provider",
                loggerFactory: s,
                networkState: d,
                scenarioFactory: h
            }, {
                children: (0,
                o.t)(mt, {
                    children: (0,
                    o.t)(v, Object.assign({
                        loginRequiredNode: l
                    }, {
                        children: (0,
                        o.t)(G.eK, {
                            children: (0,
                            o.t)(c.iz, Object.assign({
                                defaultAppTitle: f && `${f} | Microsoft Teams`,
                                loggerFactory: s,
                                document: a.document,
                                mtmaPrefix: C
                            }, {
                                children: (0,
                                o.t)(R.$$, {
                                    children: e
                                })
                            }))
                        })
                    }))
                })
            }))
        }
        ));
        Wt.displayName = "RootProviderInnerContent";
        const zt = ({setThemeType: e, themeTypeFromSettings: t})=>{
            const n = Dt(!1);
            wt((()=>{
                n.current ? e(t) : n.current = !0
            }
            ), [e, t])
        }
        ;
        const Qt = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "activeWindow"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "windowId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "activeWindow"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "windowId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "windowId"
                                }
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "activeEntities"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subNavEntity"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Entity"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "headerEntity"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Entity"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "startEntity"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Entity"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "mainEntity"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Entity"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "endEntity"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Entity"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "monitorEntity"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Entity"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "inAppNotificationsEntity"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "ID"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Entity"
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ActiveEntities"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ID"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isNotificationsWindow"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Boolean"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "userContextId"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isMainWindow"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Boolean"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "correlation"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "String"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "Correlation"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "layoutConfig"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isFullscreen"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Boolean"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "layoutMode"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "LayoutModes"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "slots"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "header"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subNav"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "contextualNotifications"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "end"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "nav"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "main"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "start"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleBar"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "toasts"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "notifications"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "inAppNotifications"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "monitor"
                                                },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHidden"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Boolean"
                                                            }
                                                        },
                                                        arguments: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        __type: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "String"
                                                            }
                                                        },
                                                        arguments: []
                                                    }]
                                                },
                                                __type: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SlotLayoutConfig"
                                                    }
                                                },
                                                arguments: []
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "SlotsLayoutConfig"
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "LayoutConfig"
                                        }
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Window"
                                }
                            }
                        }
                    }]
                }
            }, ...{
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ComponentsCoreLayoutActiveWindowFragment_entity"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Entity"
                        }
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EntityType"
                                    }
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "action"
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EntityAction"
                                    }
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "linkedEntity"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    __type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    },
                                    arguments: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "ComponentsCoreLayoutActiveWindowFragment_linkedEntity"
                                    }
                                }]
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "LinkedEntity"
                                }
                            },
                            arguments: []
                        }]
                    }
                }, ...{
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "ComponentsCoreLayoutActiveWindowFragment_linkedEntity"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "LinkedEntity"
                            }
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ID"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EntityType"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "action"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EntityAction"
                                    }
                                },
                                arguments: []
                            }]
                        }
                    }]
                }.definitions]
            }.definitions]
        };
        var Ht, Ut = n(480144), Vt = n(717985), Gt = n(243334), Yt = n(127097);
        !function(e) {
            e[e.IS_GREATER_THAN_0 = 1] = "IS_GREATER_THAN_0",
            e[e.IS_AT_LEAST_240 = 240] = "IS_AT_LEAST_240",
            e[e.IS_AT_LEAST_290 = 290] = "IS_AT_LEAST_290",
            e[e.IS_AT_LEAST_320 = 320] = "IS_AT_LEAST_320",
            e[e.IS_AT_LEAST_360 = 360] = "IS_AT_LEAST_360",
            e[e.IS_AT_LEAST_375 = 375] = "IS_AT_LEAST_375",
            e[e.IS_AT_LEAST_414 = 414] = "IS_AT_LEAST_414",
            e[e.IS_AT_LEAST_480 = 480] = "IS_AT_LEAST_480",
            e[e.IS_AT_LEAST_640 = 640] = "IS_AT_LEAST_640",
            e[e.IS_AT_LEAST_720 = 720] = "IS_AT_LEAST_720",
            e[e.IS_AT_LEAST_768 = 768] = "IS_AT_LEAST_768",
            e[e.IS_AT_LEAST_834 = 834] = "IS_AT_LEAST_834",
            e[e.IS_AT_LEAST_947 = 947] = "IS_AT_LEAST_947",
            e[e.IS_AT_LEAST_1000 = 1e3] = "IS_AT_LEAST_1000",
            e[e.IS_AT_LEAST_1024 = 1024] = "IS_AT_LEAST_1024",
            e[e.IS_AT_LEAST_1280 = 1280] = "IS_AT_LEAST_1280",
            e[e.IS_AT_LEAST_1350 = 1350] = "IS_AT_LEAST_1350",
            e[e.IS_AT_LEAST_1440 = 1440] = "IS_AT_LEAST_1440",
            e[e.IS_AT_LEAST_1500 = 1500] = "IS_AT_LEAST_1500",
            e[e.IS_AT_LEAST_1680 = 1680] = "IS_AT_LEAST_1680",
            e[e.IS_AT_LEAST_1920 = 1920] = "IS_AT_LEAST_1920",
            e[e.IS_AT_LEAST_2048 = 2048] = "IS_AT_LEAST_2048",
            e[e.IS_AT_LEAST_2560 = 2560] = "IS_AT_LEAST_2560",
            e[e.IS_AT_LEAST_3840 = 3840] = "IS_AT_LEAST_3840"
        }(Ht || (Ht = {}));
        var Jt = n(356088)
          , Kt = n(174441);
        class qt {
            constructor(e) {
                this.supportedViewEntitiesKeys = ["endEntity", "headerEntity", "mainEntity", "startEntity", "subNavEntity"],
                this.getDoesChildViewEntityMatcher$ = e=>this.doesChildViewEntityMatchers$[e],
                this.setViewEntities = e=>{
                    this._emitEntityChangeEvents(e),
                    this.viewEntitiesList = {
                        entity: e.subNavEntity,
                        viewEntityKey: "subNavEntity",
                        next: {
                            entity: e.headerEntity,
                            viewEntityKey: "headerEntity",
                            next: {
                                entity: e.startEntity,
                                viewEntityKey: "startEntity",
                                next: {
                                    entity: e.mainEntity,
                                    viewEntityKey: "mainEntity",
                                    next: {
                                        entity: e.endEntity,
                                        viewEntityKey: "endEntity"
                                    }
                                }
                            }
                        }
                    }
                }
                ,
                this.getDoesChildEntityMatchers = ()=>({
                    endEntity: this._childrenEntityMatcher("endEntity"),
                    headerEntity: this._childrenEntityMatcher("headerEntity"),
                    mainEntity: this._childrenEntityMatcher("mainEntity"),
                    startEntity: this._childrenEntityMatcher("startEntity"),
                    subNavEntity: this._childrenEntityMatcher("subNavEntity")
                }),
                this.UNSAFE_doesMainViewEntityMatch = e=>{
                    var t, n, i, a;
                    const o = null === (a = null === (i = null === (n = null === (t = this.viewEntitiesList) || void 0 === t ? void 0 : t.next) || void 0 === n ? void 0 : n.next) || void 0 === i ? void 0 : i.next) || void 0 === a ? void 0 : a.entity;
                    return o && this._doFieldsMatch(e, o) || !1
                }
                ,
                this._emitEntityChangeEvents = e=>{
                    this.supportedViewEntitiesKeys.forEach((t=>{
                        const n = e[t]
                          , i = this._getTargetChild(t, this.viewEntitiesList);
                        (null == n ? void 0 : n.action) === (null == i ? void 0 : i.action) && (null == n ? void 0 : n.id) === (null == i ? void 0 : i.id) && (null == n ? void 0 : n.type) === (null == i ? void 0 : i.type) || this._emitNewDoesEntityMatch(t, n)
                    }
                    ))
                }
                ,
                this._emitNewDoesEntityMatch = (e,t)=>{
                    var n;
                    null === (n = this.doesChildViewEntityMatchersSubject[e]) || void 0 === n || n.next((({fieldsToMatch: e, includesIdComparison: n})=>this._doFieldsMatch(e, t, n)))
                }
                ,
                this._getChildren = e=>{
                    let t = this.viewEntitiesList;
                    for (; null == t ? void 0 : t.next; ) {
                        if ((null == t ? void 0 : t.viewEntityKey) === e)
                            return null == t ? void 0 : t.next;
                        t = null == t ? void 0 : t.next
                    }
                }
                ,
                this._childrenEntityMatcher = e=>({childTargetViewEntityKey: t, fieldsToMatch: n, includesIdComparison: i=!1})=>this._doesEntityMatch(e, t, n, i),
                this._getDoesChildViewEntityMatch$ = e=>t=>{
                    var n;
                    if (void 0 !== this._getTargetChild(t, this._getChildren(e)))
                        return null === (n = this.doesChildViewEntityMatchersSubject[t]) || void 0 === n ? void 0 : n.asObservable()
                }
                ,
                this._doFieldsMatch = (e,t,n=!1)=>{
                    var i;
                    if (!t)
                        return !1;
                    let a;
                    for (a in e)
                        if (t[a] !== e[a]) {
                            if ("id" === a && e.id) {
                                if ((0,
                                Se.isFunction)(e.id) && e.id(t.id || ""))
                                    continue;
                                if (n && "string" == typeof e.id && (null === (i = t.id) || void 0 === i ? void 0 : i.includes(e.id)))
                                    continue
                            }
                            return !1
                        }
                    return !0
                }
                ,
                this._getTargetChild = (e,t)=>{
                    for (; t; ) {
                        if (e === t.viewEntityKey)
                            return t.entity;
                        t = t.next
                    }
                }
                ,
                this._doesEntityMatch = (e,t,n,i=!1)=>{
                    const a = this._getChildren(e)
                      , o = this._getTargetChild(t, a);
                    return void 0 === o && this.logger.errorToTelemetry && this.logger.errorToTelemetry(`Someone is trying to access a parent entity, current entity: ${e} is requesting ${t},         fieldsToMatch: action: ${n.action} & type: ${n.type}`, "webclient_framework_foundation_components_entities_hierarchy", void 0, !0),
                    o && this._doFieldsMatch(n, o, i) || !1
                }
                ,
                this.logger = e,
                this.doesChildViewEntityMatchersSubject = {
                    endEntity: new Kt.xQ,
                    headerEntity: new Kt.xQ,
                    mainEntity: new Kt.xQ,
                    startEntity: new Kt.xQ,
                    subNavEntity: new Kt.xQ
                },
                this.doesChildViewEntityMatchers$ = {
                    endEntity: this._getDoesChildViewEntityMatch$("endEntity"),
                    headerEntity: this._getDoesChildViewEntityMatch$("headerEntity"),
                    mainEntity: this._getDoesChildViewEntityMatch$("mainEntity"),
                    startEntity: this._getDoesChildViewEntityMatch$("startEntity"),
                    subNavEntity: this._getDoesChildViewEntityMatch$("subNavEntity")
                }
            }
        }
        var Zt = n(956255)
          , Xt = n(281710)
          , $t = n(213772);
        const en = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "updateEntityState"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "entity"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "EntityInput"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "entityState"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "EntityStateInput"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "updateEntityState"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "entity"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "entity"
                                }
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "EntityInput"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "entityState"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "entityState"
                                }
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "EntityStateInput"
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }]
                }
            }]
        }
          , tn = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "updateEntity"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "entity"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "EntityInput"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "entityOptions"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "viewEntityName"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "SupportedViewEntities"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "windowId"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "updateEntity"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "entity"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "entity"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EntityInput"
                                    }
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "entityOptions"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "entityOptions"
                                }
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "viewEntityName"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "viewEntityName"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SupportedViewEntities"
                                    }
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "windowId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "windowId"
                                }
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }]
                }
            }]
        }
          , {useCallback: nn} = s
          , {useCallback: an, useMemo: on, useRef: rn} = s
          , sn = ()=>null
          , ln = ()=>(0,
        ee.__awaiter)(void 0, void 0, void 0, (function*() {
            return (0,
            o.t)(sn, {})
        }
        ))
          , dn = e=>{
            const {appsRegistryService: t} = (0,
            A.i)()
              , {disableSlotsExcept: n} = (0,
            m.NC)(p.J.Core, ["disableSlotsExcept"])
              , {appId: i, appRenderMode: a, entity: o, slotName: r, viewEntityName: s} = e || {}
              , l = i && t.getAppByID(i);
            let d, c;
            r && n && !n.includes(r) ? (d = ln,
            c = void 0) : ({render: d, getAppPhases: c} = l || {});
            const {getAppViewEntitiesProps: u, manifest: g} = l || {}
              , {entityCacheBuster: v, entityWithoutOptions: h, getEntityOptions: y, updateEntity: f, updateEntityState: b} = cn({
                entity: o,
                slotName: r,
                viewEntityName: s
            })
              , C = on((()=>Object.assign(Object.assign({}, h), (null == o ? void 0 : o.options) && {
                options: null == o ? void 0 : o.options
            })), [h, null == o ? void 0 : o.options]);
            return on((()=>d && r ? {
                [r]: {
                    appRenderMode: a,
                    entity: C,
                    entityCacheBuster: v,
                    entityWithoutOptions: h,
                    getAppPhases: c,
                    getAppViewEntitiesProps: u,
                    getEntityOptions: y,
                    manifest: g,
                    render: d,
                    slotName: r,
                    updateEntity: f,
                    updateEntityState: b,
                    viewEntityName: s
                }
            } : {}), [a, v, h, c, u, y, g, d, r, C, f, b, s])
        }
          , cn = ({entity: e, slotName: t, viewEntityName: n})=>{
            var i;
            const {enableUnstableGetEntityOptionsForSearchQuery: a} = (0,
            m.NC)(p.J.Core, ["enableUnstableGetEntityOptionsForSearchQuery"])
              , o = (0,
            f.w)("useSlotConfigCallbacksAndCustomProperties")
              , {action: r, id: s, linkedEntity: l, options: d, type: c} = e || {}
              , u = rn(e)
              , g = rn(performance.now());
            if ((null === (i = u.current) || void 0 === i ? void 0 : i.options) !== d && d) {
                let e;
                try {
                    e = "string" == typeof d ? JSON.parse(d) : {}
                } catch (t) {
                    e = {}
                }
                const t = c === Zt.py.extensions && (void 0 !== e.conversationPaneTrigger || void 0 !== e.reloadTabTrigger)
                  , n = !(t || c !== Zt.py.chats || !e.focusOnLoad && !e.messageId)
                  , i = !n && c === Zt.py.channels && un(e)
                  , o = !i && a && c === Zt.py.search && !!e.searchQuery
                  , r = !o && c === Zt.py.callsmain && !!e.defaultFilter;
                (t || n || i || o || r) && (g.current = performance.now())
            }
            u.current !== e && (u.current = e);
            const v = (e=>{
                const t = (0,
                f.w)("useUpdateEntityState")
                  , n = (0,
                $t.x)();
                return an((i=>{
                    e.current && n.mutate({
                        mutation: en,
                        variables: {
                            entity: e.current,
                            entityState: i
                        }
                    }).catch((n=>{
                        t.log(`updateEntityState-mutation: UpdateEntityState mutation for entity ${e.current} failed with ${n}`)
                    }
                    ))
                }
                ), [n, e, t])
            }
            )(u)
              , h = an(((e,t)=>(0,
            Xt.U3)(u.current, e, t, o)), [o])
              , {action: y, id: b, type: C} = l || {}
              , S = on((()=>r && c ? Object.assign(Object.assign({
                action: r,
                id: s
            }, b && C && {
                linkedEntity: {
                    action: y,
                    id: b,
                    type: C
                }
            }), {
                type: c
            }) : void 0), [r, s, y, b, C, c])
              , I = (({slotName: e, viewEntityName: t})=>{
                const {windowId: n} = (0,
                A.i)()
                  , i = (0,
                $t.x)()
                  , a = (0,
                f.w)(`Slots- ${e}`);
                return nn(((e,o)=>{
                    const r = JSON.stringify(o);
                    a.log(`updateEntity-mutation: updating viewEntity ${t} in window ${n}`),
                    t && i.mutate({
                        mutation: tn,
                        variables: {
                            entity: e,
                            entityOptions: r,
                            windowId: n,
                            viewEntityName: t
                        },
                        fetchPolicy: "no-cache"
                    }).catch((t=>{
                        a.warn(`updateEntity-mutation: Update mutation for entity ${e} failed with ${t}`)
                    }
                    ))
                }
                ), [i, a, t, n])
            }
            )({
                slotName: t,
                viewEntityName: n
            })
              , k = g.current;
            return on((()=>({
                entityCacheBuster: k,
                entityWithoutOptions: S,
                getEntityOptions: h,
                updateEntity: I,
                updateEntityState: v
            })), [k, S, h, I, v])
        }
          , un = e=>!!e.focusOnLoad && !!e.deepLinkId || !!e.parentTeamId
          , {useCallback: gn, useEffect: mn, useLayoutEffect: pn, useMemo: vn, useRef: hn, useState: yn} = s
          , An = ({headerSlotApp: e, headerHeight: t, layoutMode: n, coreSettings: i})=>{
            var a, o, r;
            const s = "com.microsoft.teams.calling" === (null == e ? void 0 : e.manifest.id)
              , {slotHeightOverrides: l} = (null === (r = null === (o = null === (a = null == e ? void 0 : e.getAppViewEntitiesProps) || void 0 === a ? void 0 : a.call(e, {
                coreSettings: i
            })) || void 0 === o ? void 0 : o.headerEntity) || void 0 === r ? void 0 : r[Yt.e.HorizontalBar]) || {};
            return s && "auto" !== t ? "auto" : l || (s || n === ie.lO.focus || "6.1rem" === t ? void 0 : "6.1rem")
        }
          , fn = ({activeEntities: e, correlationId: t, isNotificationsWindow: n, layoutConfig: {isFullscreen: i, layoutMode: a, slots: o}, slotsConfigData: r})=>{
            var s, l, d, c, v, h, y, b;
            const {coreSettings: C, scenarioFactory: S, userBiService: I} = (0,
            g.SE)()
              , {enableHybridExperienceRendererLayout: k, enableHyERLayoutEmptySlotTransparency: N} = (0,
            m.NC)(p.J.Host)
              , {enableThickFlyoutBorder: E, isHeaderDisabled: T} = (0,
            m.NC)(p.J.Core, ["enableThickFlyoutBorder", "isHeaderDisabled"])
              , w = k && a === ie.lO.standard
              , M = !!r.titleBarSlotConfig
              , D = (0,
            Y.Cq)()
              , L = (0,
            u.Yx)()
              , O = hn(i);
            i !== O.current && (O.current = i,
            L.announce(D.stringTranslate("framework", "toggle_fullscreen_aria_live"), !0));
            const B = bn(r)
              , j = (e=>{
                const t = gn(((e,t)=>Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every(((e,n)=>e === t[n]))), [])
                  , n = [Gt.WL.TITLE_BAR, Gt.WL.NOTIFICATIONS, Gt.WL.NAV, Gt.WL.SUBNAV, Gt.WL.HEADER, Gt.WL.START, Gt.WL.CONTEXTUAL_NOTIFICATIONS, Gt.WL.MAIN, Gt.WL.END, Gt.WL.MODAL, Gt.WL.TOASTS, Gt.WL.MONITOR, Gt.WL.IN_APP_NOTIFICATIONS, Gt.WL.CONFIGURATIONS].reduce(((t,n)=>e.hasOwnProperty(n) ? [...t, n] : t), [])
                  , i = hn(n);
                return t(n, i.current) ? i.current : (i.current = n,
                n)
            }
            )(B)
              , R = (({slotsConfig: e, slotsConfigKeys: t})=>t.filter((t=>"function" != typeof e[t])).some((t=>!!e[t])))({
                slotsConfig: B,
                slotsConfigKeys: j
            })
              , {renderHeaderAtBottom: x=!1} = (null === (c = null === (d = null === (l = null === (s = B[Gt.WL.HEADER]) || void 0 === s ? void 0 : s.getAppViewEntitiesProps) || void 0 === l ? void 0 : l.call(s, {
                entity: e.mainEntity,
                coreSettings: C
            })) || void 0 === d ? void 0 : d.headerEntity) || void 0 === c ? void 0 : c[Yt.e.HorizontalBar]) || {}
              , F = Sn(x)
              , {configurations: _} = B
              , z = (0,
            ee.__rest)(B, ["configurations"])
              , Q = j.filter((e=>e !== Gt.WL.CONFIGURATIONS && e !== Gt.WL.MONITOR && e !== Gt.WL.IN_APP_NOTIFICATIONS && (!n || e !== Gt.WL.MODAL)))
              , H = (({layoutKey: e, layoutMode: t, slotsConfig: n, slotsConfigKeys: i, slotsLayoutConfig: a})=>{
                var o, r, s, l, d, c, u, m, v;
                const h = (0,
                f.w)("Core Rendering Layer, useResponsiveTemplatesForSlots")
                  , {coreSettings: y, host: b} = (0,
                g.SE)()
                  , {getExperienceProps: C} = (0,
                A.i)()
                  , [S,I] = yn()
                  , {enableMercuryDesign: k} = y.get(p.J.MercuryDesign)
                  , N = gn((e=>{
                    var t, n, i;
                    h.log(`Notification banner update, name:${null === (t = e.payload) || void 0 === t ? void 0 : t.bannerName}, height:${null === (n = e.payload) || void 0 === n ? void 0 : n.bannerHeight}`),
                    I && I(null === (i = e.payload) || void 0 === i ? void 0 : i.bannerHeight)
                }
                ), [h]);
                mn((()=>(b.opener.addEventListener(W.rY.NotificationBannerUpdate, N),
                ()=>b.opener.removeEventListener(W.rY.NotificationBannerUpdate, N))), [b.opener, N]);
                const E = n[Gt.WL.HEADER]
                  , T = An({
                    headerSlotApp: E,
                    headerHeight: void 0,
                    layoutMode: t,
                    coreSettings: y
                })
                  , w = hn(T);
                w.current = (null === (o = null == a ? void 0 : a.header) || void 0 === o ? void 0 : o.isHidden) ? "0" : An({
                    headerSlotApp: E,
                    headerHeight: w.current,
                    layoutMode: t,
                    coreSettings: y
                });
                const M = w.current
                  , {slotWidthOverrides: D} = (null === (d = null === (l = null === (s = null === (r = n[Gt.WL.END]) || void 0 === r ? void 0 : r.getAppViewEntitiesProps) || void 0 === s ? void 0 : s.call(r, {
                    coreSettings: y
                })) || void 0 === l ? void 0 : l.endEntity) || void 0 === d ? void 0 : d[Yt.e.Rail]) || {}
                  , {slotWidthOverrides: L} = (null === (v = null === (m = null === (u = null === (c = n[Gt.WL.START]) || void 0 === c ? void 0 : c.getAppViewEntitiesProps) || void 0 === u ? void 0 : u.call(c, {
                    coreSettings: y
                })) || void 0 === m ? void 0 : m.startEntity) || void 0 === v ? void 0 : v[Yt.e.Rail]) || {}
                  , O = vn((()=>{
                    var e, t;
                    return (null === (e = null == a ? void 0 : a.subNav) || void 0 === e ? void 0 : e.isHidden) ? Ln("0") : k ? Ln({
                        [Ht.IS_GREATER_THAN_0]: "0",
                        [Ht.IS_AT_LEAST_947]: "40.8rem",
                        [Ht.IS_AT_LEAST_1350]: "40.8rem",
                        [Ht.IS_AT_LEAST_1500]: "40.8rem"
                    }) : (null === (t = null == a ? void 0 : a.subNav) || void 0 === t ? void 0 : t.width) ? Ln(a.subNav.width) : void 0
                }
                ), [a, k])
                  , B = vn((()=>{
                    var e;
                    return (null === (e = null == a ? void 0 : a.nav) || void 0 === e ? void 0 : e.isHidden) ? Ln("0") : void 0
                }
                ), [a])
                  , j = vn((()=>{
                    var e;
                    return (null === (e = null == a ? void 0 : a.titleBar) || void 0 === e ? void 0 : e.isHidden) ? "0" : void 0
                }
                ), [a])
                  , P = vn((()=>{
                    var e;
                    return (null === (e = null == a ? void 0 : a.notifications) || void 0 === e ? void 0 : e.isHidden) ? "0" : S
                }
                ), [a, S])
                  , R = vn((()=>{
                    var e;
                    return (null === (e = null == a ? void 0 : a.end) || void 0 === e ? void 0 : e.width) ? Ln(a.end.width) : D
                }
                ), [D, a])
                  , x = vn((()=>{
                    var e;
                    return (null === (e = null == a ? void 0 : a.start) || void 0 === e ? void 0 : e.width) ? Ln(a.start.width) : L
                }
                ), [L, a])
                  , F = vn((()=>({
                    [Gt.WL.END]: {
                        width: R
                    },
                    [Gt.WL.START]: {
                        width: x
                    },
                    [Gt.WL.HEADER]: {
                        height: M
                    },
                    [Gt.WL.NAV]: {
                        width: B
                    },
                    [Gt.WL.NOTIFICATIONS]: {
                        height: P
                    },
                    [Gt.WL.SUBNAV]: {
                        width: O
                    },
                    [Gt.WL.TITLE_BAR]: {
                        height: j
                    }
                })), [R, x, M, B, P, O, j]);
                return h.log(`slotsDimensionsOverrides, ${JSON.stringify(F)}`),
                vn((()=>{
                    const {getLayoutResponsiveTemplates: n} = C(["getLayoutResponsiveTemplates"])
                      , a = n({
                        layoutKey: e,
                        layoutMode: t
                    });
                    return (({layoutKey: e, layoutMode: t, layoutResponsiveTemplates: n, slots: i, slotsDimensionsOverrides: a})=>n.getTemplate({
                        layoutKey: e,
                        layoutMode: t,
                        slots: i,
                        slotsDimensionsOverrides: a
                    }))({
                        layoutKey: e,
                        layoutMode: t,
                        layoutResponsiveTemplates: a,
                        slots: i,
                        slotsDimensionsOverrides: F
                    })
                }
                ), [C, e, t, i, F])
            }
            )({
                layoutMode: a,
                layoutKey: F,
                slotsConfig: z,
                slotsConfigKeys: Q,
                slotsLayoutConfig: o
            });
            Tn({
                correlationId: t,
                enableHybridExperienceRendererLayout: k,
                isSlotsConfigValid: R,
                layoutMode: a,
                responsiveTemplates: H,
                slotsConfigKeys: Q
            });
            const U = !(!w || !N)
              , {themeOptions: V} = (0,
            P.LV)()
              , {isThemePinnedToDarkOrHighContrast: G=!1, disableBorderInHighContrast: J=!1} = (null === (b = null === (y = null === (h = null === (v = B[Gt.WL.MAIN]) || void 0 === v ? void 0 : v.getAppViewEntitiesProps) || void 0 === h ? void 0 : h.call(v, {
                areEmptySlotsTransparent: U,
                coreSettings: C,
                themeOptions: V
            })) || void 0 === y ? void 0 : y.mainEntity) || void 0 === b ? void 0 : b[Yt.e.Main]) || {}
              , {areBordersEnabled: K} = In({
                isThemePinnedToDarkOrHighContrast: G
            })
              , q = (0,
            f.w)("Entities Hierarchy helpers")
              , Z = vn((()=>new qt(q)), [q]);
            Z.setViewEntities(e);
            const X = (e=>vn((()=>({
                childrenEntityMatchers: e.getDoesChildEntityMatchers(),
                getDoesChildViewEntityMatcher$: e.getDoesChildViewEntityMatcher$,
                UNSAFE_doesMainViewEntityMatch: e.UNSAFE_doesMainViewEntityMatch
            })), [e]))(Z)
              , $ = En({
                areBordersEnabled: K,
                enableTitleBar: M,
                isThickRoundedBorders: null != E && E,
                isWindowFullscreen: i,
                disableBorderInHighContrast: J
            })
              , {getExperienceProps: te} = (0,
            A.i)()
              , {uiVariables: ne} = te(["uiVariables"]);
            Mn(S, B, e),
            Dn(I, B, e);
            const ae = vn((()=>Object.assign(Object.assign({}, ne), {
                isMainTitleBar: !!w,
                isPopoutTitleBar: !T && M
            })), [M, T, w, ne]);
            return vn((()=>({
                areEmptySlotsTransparent: U,
                correlationId: t,
                enableTitleBar: M,
                entitiesHierarchyHelpers: X,
                layoutRendererDivStyles: $,
                lightboxProviderVariables: ae,
                responsiveTemplates: H || [],
                slotsConfig: B,
                slotsConfigKeys: j
            })), [U, t, M, X, $, ae, H, B, j])
        }
          , bn = e=>{
            const {contextualNotificationsSlotConfig: t, endSlotConfig: n, headerSlotConfig: i, mainSlotConfig: a, navSlotConfig: o, inAppNotificationsSlotConfig: r, notificationsSlotConfig: s, startSlotConfig: l, subNavSlotConfig: d, titleBarSlotConfig: c, toastsSlotConfig: u, monitorSlotConfig: g, configurationsSlotConfig: m} = e
              , p = dn({
                appId: null == t ? void 0 : t.appId,
                appRenderMode: null == t ? void 0 : t.appRenderMode,
                entity: null == t ? void 0 : t.entity,
                slotName: null == t ? void 0 : t.slotName,
                viewEntityName: null == t ? void 0 : t.viewEntityName
            })
              , v = dn({
                appId: null == n ? void 0 : n.appId,
                appRenderMode: null == n ? void 0 : n.appRenderMode,
                entity: null == n ? void 0 : n.entity,
                slotName: null == n ? void 0 : n.slotName,
                viewEntityName: null == n ? void 0 : n.viewEntityName
            })
              , h = dn({
                appId: null == i ? void 0 : i.appId,
                appRenderMode: null == i ? void 0 : i.appRenderMode,
                entity: null == i ? void 0 : i.entity,
                slotName: null == i ? void 0 : i.slotName,
                viewEntityName: null == i ? void 0 : i.viewEntityName
            })
              , y = dn({
                appId: null == a ? void 0 : a.appId,
                appRenderMode: null == a ? void 0 : a.appRenderMode,
                entity: null == a ? void 0 : a.entity,
                slotName: null == a ? void 0 : a.slotName,
                viewEntityName: null == a ? void 0 : a.viewEntityName
            })
              , A = dn({
                appId: null == o ? void 0 : o.appId,
                appRenderMode: null == o ? void 0 : o.appRenderMode,
                entity: null == o ? void 0 : o.entity,
                slotName: null == o ? void 0 : o.slotName,
                viewEntityName: null == o ? void 0 : o.viewEntityName
            })
              , f = dn({
                appId: null == r ? void 0 : r.appId,
                appRenderMode: null == r ? void 0 : r.appRenderMode,
                entity: null == r ? void 0 : r.entity,
                slotName: null == r ? void 0 : r.slotName,
                viewEntityName: null == r ? void 0 : r.viewEntityName
            })
              , b = dn({
                appId: null == s ? void 0 : s.appId,
                appRenderMode: null == s ? void 0 : s.appRenderMode,
                entity: null == s ? void 0 : s.entity,
                slotName: null == s ? void 0 : s.slotName,
                viewEntityName: null == s ? void 0 : s.viewEntityName
            })
              , C = dn({
                appId: null == l ? void 0 : l.appId,
                appRenderMode: null == l ? void 0 : l.appRenderMode,
                entity: null == l ? void 0 : l.entity,
                slotName: null == l ? void 0 : l.slotName,
                viewEntityName: null == l ? void 0 : l.viewEntityName
            })
              , S = dn({
                appId: null == d ? void 0 : d.appId,
                appRenderMode: null == d ? void 0 : d.appRenderMode,
                entity: null == d ? void 0 : d.entity,
                slotName: null == d ? void 0 : d.slotName,
                viewEntityName: null == d ? void 0 : d.viewEntityName
            })
              , I = dn({
                appId: null == c ? void 0 : c.appId,
                appRenderMode: null == c ? void 0 : c.appRenderMode,
                entity: null == c ? void 0 : c.entity,
                slotName: null == c ? void 0 : c.slotName,
                viewEntityName: null == c ? void 0 : c.viewEntityName
            })
              , k = dn({
                appId: null == u ? void 0 : u.appId,
                appRenderMode: null == u ? void 0 : u.appRenderMode,
                entity: null == u ? void 0 : u.entity,
                slotName: null == u ? void 0 : u.slotName,
                viewEntityName: null == u ? void 0 : u.viewEntityName
            })
              , N = Cn()
              , E = dn({
                appId: null == g ? void 0 : g.appId,
                appRenderMode: null == g ? void 0 : g.appRenderMode,
                entity: null == g ? void 0 : g.entity,
                slotName: null == g ? void 0 : g.slotName,
                viewEntityName: null == g ? void 0 : g.viewEntityName
            })
              , T = dn({
                appId: null == m ? void 0 : m.appId,
                appRenderMode: null == m ? void 0 : m.appRenderMode,
                entity: null == m ? void 0 : m.entity,
                slotName: null == m ? void 0 : m.slotName,
                viewEntityName: null == m ? void 0 : m.viewEntityName
            });
            return vn((()=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, p), v), h), y), N), A), b), f), E), C), S), I), k), T)), [p, v, h, y, N, A, b, f, E, C, S, I, k, T])
        }
          , Cn = ()=>{
            const e = Yt.e.Modal
              , {appsRegistryService: t} = (0,
            A.i)()
              , n = gn((n=>n && t.getApp({
                entityType: n.type,
                renderMode: e
            })), [e, t]);
            return vn((()=>({
                [Gt.WL.MODAL]: n
            })), [n])
        }
          , Sn = e=>{
            const {enableHybridExperienceRendererLayout: t} = (0,
            m.NC)(p.J.Host);
            return e ? Jt.FU.HEADER_AT_BOTTOM : t ? Jt.FU.HYER : void 0
        }
          , In = ({isThemePinnedToDarkOrHighContrast: e})=>{
            const t = (0,
            f.w)("Core Rendering Layer, useSlotsConfig – useThemeOverrides")
              , [n,i] = yn(!0)
              , a = gn((e=>{
                e !== n && i(e)
            }
            ), [n, i])
              , {setCoreThemeType: o} = (0,
            P.LV)()
              , {themeType: r} = (0,
            z.L)()
              , s = hn(e)
              , l = hn(r)
              , d = hn(!1)
              , c = s.current && !e
              , u = kn({
                isThemePinnedToDarkOrHighContrast: e,
                setAreBordersEnabledCallback: a,
                themeType: r
            });
            return e && !s.current && (l.current = r),
            s.current = e,
            c && (d.current = !0),
            t.log(`themeType: ${r}, isThemePinnedToDarkOrHighContrast: ${e}, overriddenThemeType: ${u}`),
            pn((()=>{
                t.log(`Setting theme to ${u}`),
                o(d.current ? l.current : u),
                d.current = !1
            }
            ), [e, t, u, o, r]),
            {
                areBordersEnabled: n
            }
        }
          , kn = ({isThemePinnedToDarkOrHighContrast: e, setAreBordersEnabledCallback: t, themeType: n})=>{
            let i = n;
            return e && n !== N.f8.Contrast && (t(!1),
            i = N.f8.Dark),
            i
        }
          , Nn = e=>({
            borderRight: e,
            borderLeft: e,
            borderBottom: e,
            borderTop: e
        })
          , En = ({areBordersEnabled: e, enableTitleBar: t, isThickRoundedBorders: n, isWindowFullscreen: i, disableBorderInHighContrast: a})=>{
            const o = (0,
            f.w)("Core Rendering Layer, LayoutRendererVariables")
              , {enableLargeBorderRadiusContrast: r, isBorderDisabled: s, isHeaderDisabled: l} = (0,
            m.NC)(p.J.Core, ["enableLargeBorderRadiusContrast", "isBorderDisabled", "isHeaderDisabled"])
              , {enableSlotBorderRadius: d} = (0,
            m.NC)(p.J.Platform)
              , {themeType: c} = (0,
            P.LV)()
              , {host: u} = (0,
            g.SE)()
              , v = (0,
            I.Z)(u, o)
              , {getExperienceProps: h} = (0,
            A.i)()
              , {uiVariables: y} = h(["uiVariables"]);
            let b = !(i || (null == y ? void 0 : y.isShareToTeams) || (null == y ? void 0 : y.isMeetingOptions) && c === N.f8.Contrast || s && c !== N.f8.Contrast || (null == y ? void 0 : y.isExtensibilityApps));
            b && d && !e && c !== N.f8.Contrast && (b = !1);
            const C = !l && !!d && b
              , S = !!v && !!c && !!r && c === N.f8.Contrast && v !== N.f8.Contrast
              , k = !t
              , {isEmbed: E, isMeetingOptions: T} = y || {};
            return vn((()=>{
                const e = "#E1DFDD"
                  , t = "#000";
                return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                }, b && E && {
                    border: `solid 0.1rem ${e}`,
                    overflow: "hidden"
                }), b && T && Object.assign(Object.assign({}, Nn(`solid 0.1rem ${e}`)), {
                    overflow: "hidden"
                })), k && !E && {
                    borderTop: "none"
                }), C && {
                    borderRadius: "0.6rem"
                }), c === N.f8.Dark && Object.assign(Object.assign(Object.assign({}, b && E && {
                    border: `solid 0.1rem ${t}`
                }), b && T && Nn(`solid 0.1rem ${t}`)), k && {
                    borderTop: "none"
                })), c === N.f8.Contrast && Object.assign(Object.assign(Object.assign(Object.assign({}, b && !a && {
                    border: "solid 0.1rem #fff",
                    overflow: "hidden"
                }), S && {
                    borderRadius: ".8rem"
                }), n && {
                    borderLeft: "0.2rem",
                    borderRight: "0.2rem",
                    borderBottom: "0.2rem",
                    borderRadius: "1rem"
                }), k && {
                    borderTop: "none"
                }))
            }
            ), [b, C, E, S, T, n, k, c, a])
        }
          , Tn = ({correlationId: e, enableHybridExperienceRendererLayout: t, isSlotsConfigValid: n, layoutMode: i, responsiveTemplates: a=[], slotsConfigKeys: o})=>{
            const r = (0,
            f.w)("Core Rendering Layer, useShouldRootLayoutThrowError")
              , {commandChangeReportingService: s} = (0,
            A.i)();
            a && r.log(`ResponsiveTemplates FOUND correlationId: ${e}, HyER: ${t}, layoutMode: ${i}, slotsConfigKeys: ${o}`);
            if (!(n && a.length > 0)) {
                let l = "";
                return n ? a.length > 0 || (l = `ResponsiveTemplates NOT FOUND correlationId: ${e}, HyER: ${t}, layoutMode: ${i}, slotsConfigKeys: ${o}`) : l = "Invalid slot config",
                r.errorToTelemetry && r.errorToTelemetry(l, "webclient_framework_foundation_components_use_slots_config", void 0, !0),
                wn(l, e, s)
            }
            return null
        }
          , wn = (e,t,n)=>{
            throw n.report({
                type: _e.B.Failure,
                correlationId: t,
                context: {
                    target: "use-slots-config",
                    errorInfo: We.y.ResponsiveTemplateNotFound,
                    errorMessage: e,
                    eventData: {
                        scenarioPhase: "Core"
                    }
                }
            }),
            (0,
            C.Tr)(S.w5.ErrorInRootLayout, S.jK.ComponentLoadError, "", void 0, e)
        }
          , Mn = (e,t,{mainEntity: n, endEntity: i})=>{
            var a, o;
            const r = e;
            r.setContext({
                mainEntityAction: n.action,
                mainEntityType: n.type
            }),
            i && r.setContext({
                endEntityAction: i.action,
                endEntityType: i.type
            }),
            t[Gt.WL.MAIN] && r.setContext({
                contentSlotApp: null === (a = t[Gt.WL.MAIN]) || void 0 === a ? void 0 : a.manifest.name
            }),
            t[Gt.WL.END] && r.setContext({
                endSlotApp: null === (o = t[Gt.WL.END]) || void 0 === o ? void 0 : o.manifest.name
            })
        }
          , Dn = (e,t,{mainEntity: n, subNavEntity: i})=>{
            var a;
            n && e.setBISlotContext({
                mainEntityAction: n.action,
                mainEntityType: n.type
            }),
            i && e.setBISlotContext({
                subNavEntityType: i.type
            }),
            t[Gt.WL.MAIN] && e.setBISlotContext({
                mainSlotApp: null === (a = t[Gt.WL.MAIN]) || void 0 === a ? void 0 : a.manifest.name
            })
        }
          , Ln = e=>{
            var t, n, i, a;
            return new Map([[Ht.IS_GREATER_THAN_0, null !== (t = e[Ht.IS_GREATER_THAN_0]) && void 0 !== t ? t : e], [Ht.IS_AT_LEAST_947, null !== (n = e[Ht.IS_AT_LEAST_947]) && void 0 !== n ? n : e], [Ht.IS_AT_LEAST_1350, null !== (i = e[Ht.IS_AT_LEAST_1350]) && void 0 !== i ? i : e], [Ht.IS_AT_LEAST_1500, null !== (a = e[Ht.IS_AT_LEAST_1500]) && void 0 !== a ? a : e]])
        }
          , {useEffect: On, useRef: Bn, useState: jn} = s
          , Pn = ({fractionalFramesDelayed: e=0, host: t, innerDimensionsRef: n, intervalIdRef: i, logger: a, setHasDimensions: o, startTime: r=performance.now()})=>{
            const s = {
                fractionalFrameDelayDenominator: 4,
                fractionalFramesDelayed: e,
                host: t,
                innerDimensionsRef: n,
                logger: a,
                startTime: r
            }
              , l = t.setInterval((()=>{
                e++;
                const n = (({fractionalFrameDelayDenominator: e, fractionalFramesDelayed: t, host: n, innerDimensionsRef: i, logger: a, startTime: o})=>{
                    const {self: {innerHeight: r, innerWidth: s}} = n;
                    i.current = {
                        innerHeight: r,
                        innerWidth: s
                    };
                    const l = r > 0 || s > 0;
                    if (l) {
                        const n = 100
                          , i = performance.now()
                          , r = Math.round((i - o) * n) / n;
                        a.log(`Host dimensions available. Fractional frames delayed, ${Math.round(t / e * n) / n}. Real-time delayed, ${r} ms.`)
                    }
                    return l
                }
                )(Object.assign(Object.assign({}, s), {
                    fractionalFramesDelayed: e
                }));
                n && (t.clearInterval(l),
                i.current = void 0,
                o(!0))
            }
            ), 4.166666666666667);
            return l
        }
        ;
        var Rn = n(738574)
          , xn = n(737299);
        const Fn = r.lazy((()=>Promise.all([n.e(428895), n.e(121124), n.e(791809), n.e(351921), n.e(188547), n.e(522580)]).then(n.bind(n, 375804))));
        class _n extends r.PureComponent {
            constructor(e) {
                super(e),
                this.state = {
                    hasError: !1
                }
            }
            static getDerivedStateFromError() {
                return {
                    hasError: !0
                }
            }
            componentDidCatch(e) {
                console.error(e.message)
            }
            render() {
                return this.state.hasError ? null : this.props.children
            }
        }
        function Wn() {
            const {isAxessibleEnabled: e} = (0,
            xn.V)();
            return e ? (0,
            o.t)(_n, {
                children: (0,
                o.t)(r.Suspense, Object.assign({
                    fallback: (0,
                    o.t)(Rn.$, {})
                }, {
                    children: (0,
                    o.t)(Fn, {})
                }))
            }) : null
        }
        var zn = n(314734)
          , Qn = n(229207);
        const {memo: Hn, useMemo: Un, useState: Vn} = s
          , Gn = ()=>{}
          , Yn = Hn((({children: e, isEnabled: t})=>{
            const [n,i] = Vn()
              , a = Un((()=>t ? {
                pptContext: n,
                setPptContext: i
            } : {
                pptContext: void 0,
                setPptContext: Gn
            }), [t, n, i]);
            return (0,
            o.t)(Qn.YG, Object.assign({
                value: a
            }, {
                children: e
            }))
        }
        ));
        Yn.displayName = "PptSharingProvider";
        var Jn = n(111587)
          , Kn = n(104059)
          , qn = n(128474);
        const {memo: Zn, useCallback: Xn, useState: $n} = s
          , ei = ()=>Promise.all([n.e(913721), n.e(899306), n.e(400010), n.e(983773), n.e(222665), n.e(9396), n.e(218129)]).then(n.bind(n, 993265))
          , ti = Zn((({commandChangeReportingService: e, commandHistoryService: t, windowId: n})=>{
            const [i,a] = $n(!1)
              , r = Xn((()=>{
                a((e=>!e))
            }
            ), [a])
              , s = Xn((()=>{
                a(!1)
            }
            ), [a]);
            (0,
            te.bx)("ShowDiagnosticWindow", r);
            let {clientVersion: l} = (0,
            m.NC)(p.J.Platform);
            const {diagnosticsPanelEnabledApps: d} = (0,
            m.NC)(p.J.Diagnostics) || void 0;
            l = l || void 0;
            const c = {
                clientVersion: l,
                closeDialog: s,
                commandChangeReportingService: e,
                commandHistoryService: t,
                open: i,
                windowId: n,
                diagnosticsPanelEnabledApps: d
            };
            return i ? (0,
            o.t)(ye.o, {
                factory: ei,
                props: c
            }) : null
        }
        ));
        ti.displayName = "DiagnosticsPanelContainer";
        var ni = n(469225)
          , ii = n(837830)
          , ai = n(281423);
        const oi = ({action: e, id: t, type: n})=>({
            action: e,
            id: t || null,
            type: n
        })
          , ri = e=>{
            if (e) {
                const {subNavEntity: t, headerEntity: n, startEntity: i, mainEntity: a, endEntity: o, monitorEntity: r, inAppNotificationsEntity: s} = e;
                return [t, n, i, a, o, r, s].reduce(si, [])
            }
            return []
        }
          , si = (e,t)=>((null == t ? void 0 : t.type) && e.push(t.type),
        e)
          , li = ({appsRegistryService: e, windowId: t, currentApp: n, currentEntityTypes: i, entityType: a, appsWithNavRvUpdated: o})=>{
            const {navigationalReactiveValues: r, nonNavigationalReactiveValues: s} = e.getAppViewStateForWindow(t, n.manifest.id) || {};
            let l = null;
            return i.includes(a) && r && (l = Object.keys(r).reduce(((e,t)=>{
                const i = r[t];
                return Object.assign(Object.assign({}, e), {
                    [t]: {
                        read: i.read,
                        update: e=>{
                            e !== i.read() && (i.update(e),
                            o.push(n.manifest.id))
                        }
                    }
                })
            }
            ), {})),
            Object.assign(Object.assign({}, l || r), s)
        }
          , di = e=>{
            const {context: t, uniqueTypes: n, currentEntities: i, windowId: a} = e
              , {appsRegistryService: o, client: r, coreSettings: s, layoutPhaseStateMachine: l, loggerFactory: d, scenarioFactory: c} = t
              , u = ri(i)
              , g = d.newLogger("executeOnViewUpdateCommandResolved", "services-utilities-core");
            g.log(`Calling onViewUpdateCommandResolved for ${n}`);
            const m = []
              , p = [];
            for (const e of n) {
                const t = o.getApp({
                    entityType: e
                })
                  , n = t;
                if (t && n && n.onViewUpdateCommandResolved) {
                    const r = li({
                        appsRegistryService: o,
                        windowId: a,
                        currentApp: t,
                        currentEntityTypes: u,
                        entityType: e,
                        appsWithNavRvUpdated: m
                    });
                    let g = {};
                    const {mainEntity: v, endEntity: h} = i;
                    g = {
                        mainEntity: v && oi(v),
                        endEntity: h && oi(h)
                    };
                    const y = `on-view-update-command-resolved-${t.manifest.id}`;
                    l.addSignalsToPhase(Gt.nh.CRITICAL, [y]);
                    const A = n.onViewUpdateCommandResolved({
                        appViewState: r,
                        availableEntities: g,
                        requestContext: {
                            coreSettings: s,
                            loggerFactory: d,
                            scenarioFactory: c
                        }
                    });
                    u.includes(e) && p.push(A),
                    A.then((()=>{
                        l.fireSignals({
                            signals: [y]
                        })
                    }
                    ))
                }
            }
            Promise.all(p).then((()=>{
                m.length > 0 && r.mutate({
                    mutation: ai.E,
                    variables: {
                        windowId: a,
                        appIds: m
                    }
                }).catch((e=>{
                    g.warn(`mutation failed ${e}`)
                }
                ))
            }
            ))
        }
        ;
        var ci = n(392634)
          , ui = n(841934);
        const gi = (0,
        at.s)({
            root: {
                B7ck84d: "f1ewtqcl",
                mc9l5x: "f13qh94s",
                Bqenvij: "f1l02sjl",
                Bxyxcbc: "f1immsc2",
                B2u0y6b: "f6dzj5z",
                qhf8xq: "f10pi13n",
                a9b677: "fly5x3f"
            }
        }, {
            d: [".f1ewtqcl{box-sizing:border-box;}", ".f13qh94s{display:grid;}", ".f1l02sjl{height:100%;}", ".f1immsc2{max-height:100%;}", ".f6dzj5z{max-width:100%;}", ".f10pi13n{position:relative;}", ".fly5x3f{width:100%;}"]
        })
          , {useMemo: mi} = s
          , pi = {
            transitionDelay: "0ms, 146ms",
            transitionDuration: "146ms, 0ms",
            transitionTimingFunction: "cubic-bezier(0.3, 0, 0.6, 1)"
        }
          , vi = r.forwardRef(((e,t)=>{
            const {template: n} = e
              , i = (0,
            ci.n)("div", e)
              , a = gi()
              , r = mi((()=>Object.assign(Object.assign(Object.assign({}, e.style), pi), {
                gridTemplate: n,
                transitionProperty: "height, width"
            })), [e.style, n]);
            return (0,
            o.t)("div", Object.assign({}, i, {
                className: (0,
                ui.z)("fui-AppLayout", a.root, e.className),
                ref: t,
                style: r
            }))
        }
        ));
        vi.displayName = "AppLayout";
        var hi = n(332507);
        const yi = ()=>{
            const e = (0,
            Jn.WD)(Gt.nh.COMPLETE)
              , {host: t, scenarioFactory: i} = (0,
            g.SE)()
              , a = (0,
            r.useRef)()
              , o = (0,
            r.useRef)();
            return (0,
            r.useEffect)((()=>{
                e && (0,
                ee.__awaiter)(void 0, void 0, void 0, (function*() {
                    const e = ()=>n.e(739823).then(n.t.bind(n, 155080, 23));
                    try {
                        const {freeBootstrapperMemory: n} = yield(0,
                        hi.mT)(e, "lpc-teams-bootstrapper", i);
                        a.current = n,
                        o.current = t.__lpcWindowProxy
                    } catch (e) {}
                }
                ))
            }
            ), [t, e, i]),
            (0,
            r.useEffect)((()=>()=>a.current && o.current && a.current(o.current)), []),
            null
        }
        ;
        var Ai = n(858872)
          , fi = n(642799)
          , bi = n(75450)
          , Ci = n(427815)
          , Si = n(916553)
          , Ii = n(195845)
          , ki = n(713112)
          , Ni = n.t(ki, 2)
          , Ei = n(793989);
        const {unstable_batchedUpdates: Ti} = Ni
          , wi = new Map;
        wi.set(Gt.nh.CRITICAL, Me.ck.Critical),
        wi.set(Gt.nh.POST_CRITICAL, Me.ck.PostCritical),
        wi.set(Gt.nh.COMPLETE, Me.ck.Complete);
        class Mi {
            constructor({correlationId: e, enableBatchedUpdatesForPhaseStateMachine: t=!1, enablePhasedRenderScenario: n=!1, host: i, logger: a, phases: o, phaseTransitionsBehindLayoutAndPaint: r=!1, scenarioFactory: s, scheduler: l}) {
                this._disableLogs = !1,
                this._enableBatchedUpdatesForPhaseStateMachine = !1,
                this._machineInstanceID = 0,
                this._onFireSignalCallbacks = new Set,
                this._scheduledBy = "phase-state-machine",
                this._scheduledJobs = new Set,
                this._transitioning = !1,
                this.onPhaseWillComplete = ({phase: e, onWillComplete: t})=>{
                    const n = this.currentPhase;
                    if (n > e || n === Gt.nh.COMPLETE)
                        t({
                            onPhaseWillCompleteReason: Gt.Ug.PHASE_PREVIOUSLY_COMPLETED
                        }),
                        this._logPhaseState(`Attempted to register an onWillComplete callback for phase ${e}, which is already complete. Immediately fired the onWillComplete callback.`);
                    else {
                        const n = this._phases.get(e);
                        if (n)
                            n.onWillComplete.push(t);
                        else
                            for (let n = e - 1; n >= Gt.nh.CRITICAL; n--) {
                                const e = this._phases.get(n);
                                if (e) {
                                    null == e || e.onWillComplete.push(t);
                                    break
                                }
                                n === Gt.nh.CRITICAL && (t({
                                    onPhaseWillCompleteReason: Gt.Ug.TARGET_AND_PREVIOUS_PHASES_DO_NOT_EXIST
                                }),
                                this._logPhaseState("The target and previous phases do not exist. Fire the onWillComplete callback immediately."))
                            }
                    }
                }
                ,
                this._convertPhasesToState = e=>{
                    const t = []
                      , n = new Map
                      , i = [];
                    for (const e in Gt.nh)
                        if (!isNaN(Number(Gt.nh[e]))) {
                            const t = +Gt.nh[e];
                            i[t] = t
                        }
                    return i.forEach((i=>{
                        if (e.has(i)) {
                            const a = e.get(i);
                            if (a) {
                                const {signals: e, timeout: o} = a;
                                e.length > 0 && t.push({
                                    phase: i
                                });
                                const r = e.reduce(((e,t)=>(e[t] = !1,
                                e)), {});
                                0 !== Object.keys(r).length && r.constructor === Object && n.set(i, {
                                    onWillComplete: [],
                                    signals: r,
                                    timeout: o
                                })
                            }
                        }
                    }
                    )),
                    t.push({
                        phase: Gt.nh.COMPLETE
                    }),
                    n.set(Gt.nh.COMPLETE, {
                        signals: {},
                        onWillComplete: []
                    }),
                    {
                        phases: n,
                        sequence: t
                    }
                }
                ,
                this._fireSignal = ({signal: e})=>{
                    this._isPhaseStateMachineComplete() || (this._phases.forEach((({signals: t},n)=>{
                        t && t.hasOwnProperty(e) && (t[e] || (this._logPhaseState(`Toggle signal: ${e}`),
                        this._onFireSignalCallbacks.forEach((t=>{
                            t(e)
                        }
                        ))),
                        t[e] = !0)
                    }
                    )),
                    this._validateCurrentAppPhase())
                }
                ,
                this._fireSignals = ({signals: e})=>e.forEach((e=>this._fireSignal({
                    signal: e
                }))),
                this._getCurrentPhase = ()=>this._phases.get(this.currentPhase),
                this._isPhaseStateMachineComplete = ()=>this._sequence[this._sequence.length - 1].phase === this.currentPhase,
                this._schedulePhase = ()=>{
                    var e, t;
                    this._phaseScheduled && (null === (e = this._host) || void 0 === e || e.clearTimeout(this._phaseScheduled),
                    this._phaseScheduled = void 0);
                    const {timeout: n} = this._getCurrentPhase();
                    if (!n)
                        return;
                    this._phaseScheduled = null === (t = this._host) || void 0 === t ? void 0 : t.setTimeout((()=>{
                        const e = this._getIncompleteSignals()
                          , t = `Incomplete signals: ${e.join(", ")}`;
                        this._logPhaseState(`Phase timeout job ${this._phaseScheduled} timed out after ${n} ms, forcing next phase. ${t}`, !0),
                        this._transitionToNextState({
                            onPhaseWillCompleteReason: Gt.Ug.PHASE_TIMEOUT_FIRED,
                            incompleteSignals: e
                        })
                    }
                    ), n)
                }
                ,
                this._transitionToNextScenarioStep = ({nextPhase: e, previousPhase: t})=>{
                    var n;
                    const i = wi.get(null != t ? t : e - 1)
                      , a = wi.get(e)
                      , o = void 0 !== i ? `Ending Phase: ${i}, ` : "";
                    this._logPhaseState(`${o}Starting Phase: ${a}`),
                    a && (null === (n = this._scenario) || void 0 === n || n.startStep(a))
                }
                ,
                this._validateCurrentAppPhase = ()=>{
                    if (this._transitioning)
                        return;
                    0 === this._getIncompleteSignals().length && this._transitionToNextState({
                        onPhaseWillCompleteReason: Gt.Ug.ALL_PHASE_SIGNALS_RECEIVED
                    })
                }
                ,
                this._getIncompleteSignals = e=>{
                    const t = e || this._getCurrentPhase();
                    return Object.keys(t.signals).filter((e=>!t.signals[e]))
                }
                ,
                this._processOnWillCompleteDuringPhaseTransition = ()=>{
                    const e = this._getCurrentPhase();
                    e.onWillComplete.length > 0 && (e.onWillComplete.forEach((e=>e({
                        onPhaseWillCompleteReason: Gt.Ug.PHASE_PREVIOUSLY_COMPLETED
                    }))),
                    e.onWillComplete = [])
                }
                ,
                this._executeBatchedUpdate = e=>{
                    this._enableBatchedUpdatesForPhaseStateMachine ? Ti(e) : e()
                }
                ,
                this._correlationId = e,
                this._enableBatchedUpdatesForPhaseStateMachine = t,
                this._host = i,
                this._logger = a,
                this._machineInstanceID = this.nextMachineInstanceID,
                this._phaseTransitionsBehindLayoutAndPaint = r,
                this._scheduler = l,
                this._scenarioFactory = s;
                const {phases: d, sequence: c} = this._convertPhasesToState(o);
                c.length <= 1 && (this._disableLogs = !0),
                this._sequence = c,
                this._phases = d,
                this._currentPhaseSequenceIndex = 0,
                this._currentPhase = new Ii.X(this._sequence[this._currentPhaseSequenceIndex].phase),
                this._currentPhase$ = this._currentPhase.asObservable(),
                this._scenario = n ? s.newScenario(Me.RG.PhasedRender) : void 0,
                this._transitionToNextScenarioStep({
                    nextPhase: this.currentPhase
                }),
                this._schedulePhase()
            }
            dispose() {
                var e, t;
                this._logIncompleteSignalsBeforeDispose(),
                this._scheduledJobs.size > 0 && this._logPhaseState(`Disposing of jobs: [${Array.from(this._scheduledJobs).join(",")}]`),
                this._scheduledJobs.forEach((e=>this._scheduler.cancel(e))),
                this._scheduledJobs = new Set,
                this._phaseScheduled && (null === (e = this._host) || void 0 === e || e.clearTimeout(this._phaseScheduled),
                this._phaseScheduled = void 0),
                this._onFireSignalCallbacks.clear(),
                this._phases.forEach((e=>{
                    e.onWillComplete = []
                }
                )),
                null === (t = this._scenario) || void 0 === t || t.cancel(),
                this._host = void 0
            }
            UNSAFE_LAYOUT_FABRIC_getIncompleteSignals() {
                const e = Array.from(this._phases.entries())
                  , t = {};
                for (const n of e) {
                    const [e,i] = n
                      , a = this._getIncompleteSignals(i);
                    if (a.length) {
                        const n = a.join(",");
                        t[e] = n
                    }
                }
                return t
            }
            get currentPhase() {
                return this._currentPhase.getValue()
            }
            get currentPhaseObservable() {
                return this._currentPhase$
            }
            fireSignals({fireAfterLayoutAndPaint: e=!1, signals: t}) {
                const n = ()=>this._fireSignals({
                    signals: t
                });
                e ? this.scheduleForNextPaint({
                    jobId: "fire-signals",
                    job: n
                }) : n()
            }
            registerOnFireSignal(e) {
                this._onFireSignalCallbacks.add(e)
            }
            unRegisterOnFireSignal(e) {
                this._onFireSignalCallbacks.delete(e)
            }
            _transitionToNextState({onPhaseWillCompleteReason: e, incompleteSignals: t}) {
                this._processOnWillCompleteBeforePhaseTransition({
                    onPhaseWillCompleteReason: e,
                    incompleteSignals: t
                }),
                this._transitioning = !0;
                const n = ()=>{
                    this._processOnWillCompleteDuringPhaseTransition();
                    const n = this._sequence[++this._currentPhaseSequenceIndex];
                    n && (this._currentPhase.next(n.phase),
                    this._transitionToNextScenarioStep({
                        nextPhase: this.currentPhase
                    }),
                    this._schedulePhase()),
                    this._transitioning = !1,
                    n ? this._validateCurrentAppPhase() : this._completeCurrentPhase({
                        onPhaseWillCompleteReason: e,
                        incompleteSignals: t
                    })
                }
                ;
                this._phaseTransitionsBehindLayoutAndPaint ? this.scheduleForNextPaint({
                    jobId: "transition-next-state",
                    job: n
                }) : this._executeBatchedUpdate((()=>{
                    n()
                }
                ))
            }
            _forceTransitionToCompleteState({onPhaseWillCompleteReason: e, onCompleteStateReached: t}) {
                if (this._isPhaseStateMachineComplete())
                    return this._logPhaseState("Skipping transition, already in COMPLETE phase"),
                    void (t && t());
                const n = this._getIncompleteSignals();
                this._processOnWillCompleteBeforePhaseTransition({
                    onPhaseWillCompleteReason: e,
                    incompleteSignals: n
                }),
                this._transitioning = !0;
                const i = ()=>{
                    this._processOnWillCompleteDuringPhaseTransition(),
                    this._currentPhaseSequenceIndex = this._sequence.findIndex((e=>e.phase === Gt.nh.COMPLETE));
                    const i = this.currentPhase;
                    this._currentPhase.next(Gt.nh.COMPLETE),
                    this._transitionToNextScenarioStep({
                        previousPhase: i,
                        nextPhase: this.currentPhase
                    }),
                    this._schedulePhase(),
                    this._transitioning = !1,
                    this._completeCurrentPhase({
                        onPhaseWillCompleteReason: e,
                        incompleteSignals: n
                    }),
                    t && t()
                }
                ;
                this._executeBatchedUpdate((()=>{
                    i()
                }
                ))
            }
            _logPhaseState(e, t=!1) {
                if (this._disableLogs)
                    return;
                const n = `PhaseStateMachine instance id: ${this._machineInstanceID}, currentPhase: ${Gt.nh[this.currentPhase]}${e ? [", ", e].join("") : ""}`;
                t ? this._logger.warn(n) : this._logger.log(n)
            }
            get nextMachineInstanceID() {
                return Mi._machineInstanceCount === Number.MAX_SAFE_INTEGER && (Mi._machineInstanceCount = 0),
                ++Mi._machineInstanceCount
            }
            scheduleForNextPaint({job: e, jobId: t}) {
                this.scheduleMacroForNextPaint({
                    correlationId: this._correlationId,
                    scheduler: this._scheduler,
                    jobId: t,
                    scheduledById: this._scheduledBy,
                    job: e,
                    handles: this._scheduledJobs
                })
            }
            scheduleMacroForNextPaint({correlationId: e, scheduler: t, jobId: n, scheduledById: i, job: a, handles: o}) {
                const r = t.schedule((()=>{
                    const s = t.schedule((()=>{
                        this._executeBatchedUpdate((()=>{
                            a()
                        }
                        )),
                        o.delete(s)
                    }
                    ), {
                        priority: Ei.vW.Macro,
                        id: n,
                        scheduledById: i
                    }, e);
                    o.delete(r),
                    o.add(s)
                }
                ), {
                    priority: Ei.vW.RenderBlocking,
                    id: "await-next-frame",
                    scheduledById: i
                }, e);
                o.add(r)
            }
            _logIncompleteSignalsBeforeDispose() {
                Array.from(this._phases.entries()).forEach((([e,t])=>{
                    const n = this._getIncompleteSignals(t);
                    if (n.length) {
                        const t = Gt.nh[e]
                          , i = n.join(",");
                        this._logPhaseState(`Disposing with incomplete signals in phase ${t}. Signals ${i} were not received`)
                    }
                }
                ))
            }
            _completeCurrentPhase({onPhaseWillCompleteReason: e, incompleteSignals: t}) {
                if (this._currentPhase.complete(),
                this._scenario) {
                    const e = this._scenarioFactory.findScenario(Me.RG.PostALT);
                    null == e || e.mark(Me.ck.AppPhaseComplete)
                }
                this._scenario && (e === Gt.Ug.PHASE_STATE_MACHINE_DISPOSED ? this._scenario.cancel() : this._scenario.stop(void 0, "success")),
                this._logPhaseState(`Phase ended: ${wi.get(Gt.nh.COMPLETE)}`);
                this._getCurrentPhase().onWillComplete.forEach((n=>n({
                    onPhaseWillCompleteReason: e,
                    incompleteSignals: t
                })))
            }
            _processOnWillCompleteBeforePhaseTransition({onPhaseWillCompleteReason: e, incompleteSignals: t}) {
                var n;
                const i = this._getCurrentPhase();
                if (i.onWillComplete.forEach((n=>n({
                    onPhaseWillCompleteReason: e,
                    incompleteSignals: t
                }))),
                !this._isPhaseStateMachineComplete()) {
                    const t = i.onWillComplete.length;
                    this._logPhaseState(`onPhaseWillCompleteReason: ${e}, Fired ${t} onWillComplete callback${1 !== t ? "s" : ""}.`);
                    const a = wi.get(this.currentPhase);
                    a && (null === (n = this._scenario) || void 0 === n || n.mark(a, {
                        reason: e
                    }))
                }
                i.onWillComplete = []
            }
        }
        function Di(e, t) {
            return `${e}/${Gt.nh[t]}`
        }
        Mi._machineInstanceCount = 0;
        const {useEffect: Li, useMemo: Oi} = s
          , Bi = ({appRenderMode: e, correlationIdRef: t, entity: n, getAppPhases: i, slotName: a})=>{
            const o = `Core Rendering Layer, Phased Rendering Framework – ${a} Slot, ${e} App Render Mode`
              , r = Oi((()=>({
                appRenderMode: e,
                correlationIdRef: t,
                entity: n,
                getAppPhases: i,
                loggerLabel: o,
                slotName: a
            })), [e, t, n, i, o, a]);
            return ji(r)
        }
          , ji = ({appRenderMode: e, correlationIdRef: t, entity: n, getAppPhases: i, loggerLabel: a, slotName: o})=>{
            const {scheduler: r} = (0,
            A.i)()
              , {coreSettings: s, host: l, scenarioFactory: d} = (0,
            g.SE)()
              , c = (0,
            f.w)(o && e ? a : "")
              , {action: u, id: m, type: v} = n || {}
              , h = Oi((()=>{
                o && e && c.log(`Initializing a new PhaseStateMachine instance for ${o} slot with entity action: ${u}, id: ${m}, and type: ${v}`);
                const n = e && (null == i ? void 0 : i({
                    action: u,
                    appRenderMode: e,
                    coreSettings: s,
                    type: v,
                    logger: c
                })) || (new Si.H).appPhases
                  , {enableBatchedUpdatesForPhaseStateMachine: a} = s.get(p.J.Core);
                return new Mi(Object.assign({
                    correlationId: t.current,
                    enableBatchedUpdatesForPhaseStateMachine: !!a,
                    host: l,
                    logger: c,
                    scenarioFactory: d,
                    scheduler: r
                }, n))
            }
            ), [u, e, s, t, i, l, m, c, d, r, o, v]);
            return Li((()=>()=>h.dispose()), [h]),
            h
        }
        ;
        var Pi = n(624587);
        const Ri = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "updateExtendedEntityContainerState"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "containerState"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ExtendedContainerState"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "updateExtendedEntityContainerState"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "containerState"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "containerState"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ExtendedContainerState"
                                    }
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }]
                }
            }]
        };
        var xi = n(125386);
        const {memo: Fi, useEffect: _i} = s
          , Wi = Fi((e=>{
            const {client: t} = e
              , {host: n, loggerFactory: i, scenarioFactory: a} = (0,
            g.SE)();
            return _i((()=>{
                const e = i.newLogger("External Dialog Container", "components-core-layout")
                  , o = n=>{
                    var i;
                    const o = null === (i = null == n ? void 0 : n.payload) || void 0 === i ? void 0 : i.containerState;
                    if (o) {
                        if ((o === ie.oq.Closed || o === ie.oq.Confirmed) && !a.findScenario(Me.RG.ExtensionClose)) {
                            a.newScenario(Me.RG.ExtensionClose).appendEventData({
                                reason: o
                            })
                        }
                        return t.mutate({
                            mutation: Ri,
                            variables: n.payload
                        })
                    }
                    e.errorToTelemetry && e.errorToTelemetry("Invalid payload recieved from host ExtendedEntityContainerState event. no container state found", "webclient_framework_foundation_components_external_dialog_container", void 0, !0)
                }
                ;
                return n.opener.addEventListener(xi.W.ExtendedEntityContainerState, o),
                ()=>n.opener.removeEventListener(xi.W.ExtendedEntityContainerState, o)
            }
            ), [n, t, i, a]),
            null
        }
        ));
        Wi.displayName = "ExternalDialogContainerInner";
        const zi = (0,
        Pi.C)(Wi)
          , {memo: Qi, useCallback: Hi} = s
          , Ui = Qi((({correlationIdRef: e, enableTitleBar: t, entityExtension: n, isExternal: i, loadSlotElement: a, modalLoader: r, variables: s, viewEntityName: l})=>{
            const {clientState: d} = (0,
            g.TE)()
              , c = n && r ? r(n) : void 0
              , u = null == c ? void 0 : c.manifest.id
              , m = Bi({
                appRenderMode: Yt.S.Modal,
                correlationIdRef: e,
                getAppPhases: null == c ? void 0 : c.getAppPhases,
                slotName: Gt.WL.MODAL
            })
              , {getEntityOptions: p, entityWithoutOptions: v, updateEntity: h, updateEntityState: y} = cn({
                entity: n || void 0,
                slotName: Gt.WL.MODAL,
                viewEntityName: l
            });
            if (n && v && p && h && y) {
                const {render: e} = c || {};
                if (i)
                    return (0,
                    o.t)(zi, {});
                if (e || n.type === Zt.py.galleryImages && n.id) {
                    const i = {
                        appId: u,
                        appRenderMode: Yt.S.Modal,
                        clientState: d,
                        entity: n,
                        entityCacheBuster: 0,
                        entityWithoutOptions: v,
                        getEntityOptions: p,
                        phaseStateMachine: m,
                        shouldErrorOnEntityCommandTimeout: !1,
                        enableSlotTransition: !1,
                        slotName: Gt.WL.MODAL,
                        updateEntity: h,
                        updateEntityState: y,
                        variables: s,
                        viewEntityName: l
                    };
                    if (e)
                        return a(Object.assign(Object.assign({}, i), {
                            render: e
                        }));
                    if (n.type === Zt.py.galleryImages && n.id) {
                        const e = ()=>Promise.resolve((0,
                        o.t)(Vi, {
                            enableTitleBar: t
                        }));
                        return a(Object.assign(Object.assign({}, i), {
                            render: e
                        }))
                    }
                }
            }
            return null
        }
        ));
        Ui.displayName = "ModalSlotRenderer";
        const Vi = Qi((({enableTitleBar: e})=>{
            const t = (0,
            Y.Cq)()
              , [n,i] = r.useState(!0)
              , a = r.useCallback((()=>{
                i(!1)
            }
            ), [i])
              , s = t.stringTranslate("framework", "dialog_error_message_lightbox")
              , l = (0,
            f.w)("GalleryExtensionComponent")
              , d = (0,
            $t.x)()
              , {entity: {id: c}, getEntityOptions: u} = (0,
            fi.sV)()
              , {gallerySrc: g, isCopyBlocked: m, hasStaticLightboxTitle: p, hideDownload: v} = u(Zt.py.galleryImages, Zt.uk.view)
              , h = Hi((e=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                var t;
                const n = yield(0,
                Ai.H)(d, e, ue.R0O.Url, !0).catch((()=>l.error(`AmsDownloader fullsize Blob Download encountered an exception: (imageSrc: ${e})`)));
                return (null === (t = null == n ? void 0 : n.result) || void 0 === t ? void 0 : t.blob) ? (l.log(`amsDownloader fullsize Blob Download Success: (imageSrc: ${e})`),
                n.result.blob) : void l.error(`AmsDownloader fullsize Blob Download failed: (imageSrc: ${e})`)
            }
            ))), [d, l]);
            return c && g ? (0,
            o.t)(bi.V, {
                errorMessage: s,
                open: n,
                onCancel: a,
                header: t.stringTranslate("framework", "dialog_lightbox_title"),
                content: (0,
                o.t)(Ci.g, {
                    galleryId: c,
                    gallerySrc: g,
                    isCopyBlocked: !!m,
                    onClose: a,
                    i18n: t,
                    isOpen: n,
                    loadFullSize: h,
                    hasStaticTitle: p,
                    hideDownload: v
                }),
                variables: {
                    enableTitleBar: e,
                    isLightboxDialog: !0
                }
            }) : (l.error(`Invalid gallery (ID [${c}], Src [${g}]) provided for gallery image`),
            null)
        }
        ));
        Vi.displayName = "GalleryExtensionComponent";
        const Gi = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "activeWindow"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "windowId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "activeWindow"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "windowId"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "windowId"
                                }
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ID"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "userContextId"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "activeEntities"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "entityExtension"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "entityFields"
                                                }
                                            }]
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Entity"
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ActiveEntities"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "extendedEntityContainerState"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "containerState"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ExtendedContainerState"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isExternal"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Boolean"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ExtendedEntityContainerState"
                                        }
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Window"
                                }
                            }
                        }
                    }]
                }
            }, ...{
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "entityFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Entity"
                        }
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EntityType"
                                    }
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "action"
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EntityAction"
                                    }
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            arguments: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "linkedEntity"
                            },
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "linkedEntityFields"
                                    }
                                }]
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "LinkedEntity"
                                }
                            },
                            arguments: []
                        }]
                    }
                }, ...{
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "linkedEntityFields"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "LinkedEntity"
                            }
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ID"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "EntityType"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "action"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EntityAction"
                                    }
                                },
                                arguments: []
                            }]
                        }
                    }]
                }.definitions]
            }.definitions]
        };
        var Yi = n(811084);
        const {memo: Ji, useCallback: Ki, useEffect: qi, useRef: Zi} = s
          , Xi = ()=>{}
          , $i = {
            requestAnimationFrame: -1,
            setTimeout: -1
        }
          , ea = ({correlationId: e})=>{
            const {altScenarioService: t, commandChangeReportingService: n} = (0,
            A.i)();
            return Ki((()=>{
                var i;
                n.report({
                    correlationId: e,
                    type: _e.B.RenderStarted,
                    context: {
                        target: "slot-transition"
                    }
                }),
                null === (i = null == t ? void 0 : t.altScenario) || void 0 === i || i.startStep(Me.ck.RenderCriticalContent)
            }
            ), [t, n, e])
        }
          , ta = (e,t,n,i,a)=>{
            const o = Zi(Xi)
              , r = Ki(((r,s)=>{
                if (((e,t,n,i)=>t ? n ? i === Zt.py.blank && (e.log("endListener: Bypassing transition due to blank command"),
                !0) : (e.log("endListener: Bypassing transition because this is the first transition"),
                !0) : (e.log("endListener: Bypassing transition because this isn't a hybrid slot"),
                !0))(i, t, a, n))
                    return void s();
                const l = ()=>{
                    i.log('endListener: Moving to "entered" state due to HybridRouteNavigation event'),
                    s(),
                    e.opener.removeEventListener(W.rY.HybridRouteNavigation, l),
                    o.current = Xi
                }
                ;
                i.log("endListener: Waiting for HybridRouteNavigation event to end transition"),
                e.opener.addEventListener(W.rY.HybridRouteNavigation, l),
                o.current = l
            }
            ), [e, t, n, i, a]);
            return qi((()=>o.current)),
            r
        }
          , na = Ji((({children: e, entity: t, correlationId: n})=>{
            const {action: i, type: a} = t
              , {host: r} = (0,
            g.SE)()
              , s = (0,
            f.w)("SlotTransition (main slot)")
              , {enableWaitForRouteOnSlotTransition: l} = (0,
            m.NC)(p.J.Core)
              , d = Zi(null)
              , c = Zi(!1)
              , u = Ki((()=>{
                s.log(`Entered, ${t.type}/${t.action}`),
                d.current = {
                    entity: t,
                    correlationId: n
                },
                c.current = !1
            }
            ), [s, t, n])
              , v = ea({
                correlationId: n
            })
              , h = ((e,t,n,i,a,{type: o},r)=>{
                const s = Zi($i)
                  , l = Ki((()=>{
                    r.current = !0;
                    const l = (null == a ? void 0 : a.entity.type) === Zt.py.blank;
                    if (!i || l || o === Zt.py.blank)
                        e.log("Sending RenderStarted event immediately."),
                        t();
                    else {
                        e.log("onEntering: Queuing RenderStarted event behind RAF+setTimeout(0)");
                        const i = n.requestAnimationFrame((()=>{
                            s.current.requestAnimationFrame = i;
                            const a = n.setTimeout((()=>{
                                s.current.setTimeout = a,
                                e.log("onEntering: Timeout fired (painted), sending RenderStarted event"),
                                t(),
                                n.clearTimeout(a),
                                n.cancelAnimationFrame(i),
                                s.current = $i
                            }
                            ), 0)
                        }
                        ))
                    }
                }
                ), [i, n, r, e, a, t, o]);
                return qi((()=>()=>{
                    const {requestAnimationFrame: e, setTimeout: t} = s.current;
                    -1 !== t && n.clearTimeout(t),
                    -1 !== e && n.cancelAnimationFrame(e),
                    s.current = $i
                }
                ), [n]),
                l
            }
            )(s, v, r, null !== d.current, d.current, t, c)
              , y = ta(r, !!l, t.type, s, null !== d.current);
            return ((e,t,n,i,{type: a, action: o},r)=>{
                qi((()=>{
                    n && n.correlationId !== i && n.entity.type === a && n.entity.action === o ? (e.log(`Correlation Id change but no transition is needed, sending RenderStarted, correlationId ${i}`),
                    t()) : r && (e.log(`Sending new RenderStarted event due to new update in transition, ${i}`),
                    t())
                }
                ), [o, i, r, e, n, t, a])
            }
            )(s, v, d.current, n, t, c.current),
            (0,
            o.t)(Yi.Z, Object.assign({
                appear: !0,
                in: !0,
                onEntering: h,
                addEndListener: y,
                onEntered: u,
                classNames: "slot-transition"
            }, {
                children: (0,
                o.t)("div", Object.assign({
                    className: "slot-transition",
                    style: {
                        height: "100%",
                        width: "100%"
                    }
                }, {
                    children: e
                }))
            }), `slot-transition-csstransition-${a}-${i}`)
        }
        ))
          , {useEffect: ia, useRef: aa, useState: oa, memo: ra} = s
          , sa = ra((({correlationIdRef: e, enableTitleBar: t, loadSlotElement: n, modalLoader: i, variables: a, viewEntityName: r, modalStateObserver: s})=>null !== s ? (0,
        o.t)(da, {
            enableTitleBar: t,
            loadSlotElement: n,
            modalLoader: i,
            variables: a,
            viewEntityName: r,
            modalStateObserver: s
        }) : (0,
        o.t)(la, {
            correlationIdRef: e,
            enableTitleBar: t,
            loadSlotElement: n,
            modalLoader: i,
            variables: a,
            viewEntityName: r
        })));
        sa.displayName = "ModalSlotContainer";
        const la = ra((e=>{
            const {windowId: t} = (0,
            A.i)()
              , {loading: n, error: i, data: a} = (0,
            E.a)(Gi, {
                variables: {
                    windowId: t
                }
            });
            if (n)
                return null;
            if (i || !a)
                return (0,
                o.t)("div", Object.assign({
                    "data-tid": "modal-slot-error"
                }, {
                    children: `${i}`
                }));
            const {activeEntities: {entityExtension: r}, extendedEntityContainerState: {isExternal: s}} = (null == a ? void 0 : a.activeWindow) || {
                activeEntities: {},
                extendedEntityContainerState: {}
            };
            return (0,
            o.t)(ca, Object.assign({}, e, {
                entityExtension: r || void 0,
                isExternal: s
            }))
        }
        ));
        la.displayName = "ModalSlotContainerWithApollo";
        const da = ra((e=>{
            var t;
            const [n,i] = oa()
              , a = ea({
                correlationId: (null == n ? void 0 : n.correlationId) || ""
            })
              , r = aa(!1)
              , s = aa((null == n ? void 0 : n.correlationId) || "");
            let l = null;
            r.current || (r.current = !0,
            l = (null === (t = e.modalStateObserver) || void 0 === t ? void 0 : t.subscribe((e=>{
                s.current = e.correlationId,
                i(e)
            }
            ))) || null);
            const d = aa(l);
            return ia((()=>()=>{
                var e;
                return null === (e = d.current) || void 0 === e ? void 0 : e.unsubscribe()
            }
            ), [d]),
            n ? (a(),
            (0,
            o.t)(ca, Object.assign({}, e, n, {
                correlationIdRef: s
            }))) : null
        }
        ));
        da.displayName = "ModalSlotContainerWithoutApollo";
        const ca = ra((({entityExtension: e, isExternal: t, correlationIdRef: n, enableTitleBar: i, loadSlotElement: a, modalLoader: r, variables: s, viewEntityName: l})=>e ? (0,
        o.t)(Ui, {
            correlationIdRef: n,
            entityExtension: e,
            enableTitleBar: i,
            isExternal: t,
            loadSlotElement: a,
            modalLoader: r,
            variables: s,
            viewEntityName: l
        }) : null));
        ca.displayName = "ModalSlotContainerInner";
        var ua = n(745887);
        const {memo: ga, useCallback: ma, useEffect: pa, useMemo: va, useRef: ha, useState: ya} = s
          , Aa = ga((({appRenderMode: e, entity: t, onRenderEvent: n, render: i})=>{
            const {coreSettings: a, host: o, loggerFactory: r, scenarioFactory: s} = (0,
            g.SE)()
              , l = (0,
            f.w)(`LazyComponentRenderer ${e}/${t.type}/${t.action}`)
              , d = va((()=>({
                appRenderMode: e,
                coreSettings: a,
                entity: t,
                host: o,
                loggerFactory: r,
                onRenderEvent: n,
                scenarioFactory: s
            })), [e, a, t, o, r, n, s])
              , [c,u] = ya(null)
              , [m,p] = ya(void 0)
              , v = ha(!0)
              , h = ha(void 0)
              , y = ha(i)
              , A = ma((()=>{
                const e = h.current;
                e && e(),
                h.current = void 0
            }
            ), [h])
              , b = ma((({render: e, renderProps: t})=>{
                if (!e) {
                    v.current = !1;
                    const e = "Cannot lazy load a component without the render function.";
                    return l.error(e),
                    void p((0,
                    C.Tr)(S.w5.LazyComponentRenderer, S.jK.ComponentLoadError, "", void 0, e))
                }
                A();
                const n = new Promise(((e,t)=>{
                    h.current = t
                }
                ))
                  , i = e(t).catch((e=>{
                    const t = (null == e ? void 0 : e.context) || S.w5.LazyComponentRenderer
                      , n = (null == e ? void 0 : e.code) || S.jK.ComponentLoadError;
                    v.current = !1,
                    p((0,
                    C.Tr)(t, n, "", void 0, null == e ? void 0 : e.toString()))
                }
                ));
                Promise.race([i, n]).then((e=>{
                    if (h.current = void 0,
                    e)
                        v.current = !1,
                        p(void 0),
                        u(e);
                    else {
                        v.current = !1;
                        const e = "Either loading was cancelled due to unmount (or) rendering the component did not yield a ReactElement.";
                        p((0,
                        C.Tr)(S.w5.LazyComponentRenderer, S.jK.ComponentLoadError, "", void 0, e)),
                        l.error(e)
                    }
                }
                )).catch((()=>{}
                ))
            }
            ), [A, l])
              , I = ha(!1);
            return I.current && y.current === i || e !== Yt.S.Main || s.startStep(Me.RG.WindowLaunchTime, Me.ck.RenderApp),
            I.current || (I.current = !0,
            b({
                render: y.current,
                renderProps: d
            })),
            y.current !== i && I.current && (v.current = !0,
            y.current = i,
            b({
                render: i,
                renderProps: d
            })),
            pa((()=>A), [A]),
            m ? (e=>{
                throw e
            }
            )(m) : v.current ? null : c
        }
        ));
        Aa.displayName = "LazyComponentRenderer";
        var fa = n(883014);
        class ba extends r.PureComponent {
            constructor() {
                super(...arguments),
                this.logger = this.props.loggerFactory.newLogger(ba.displayName, "components-core-layout"),
                this.state = {
                    error: void 0
                }
            }
            componentDidCatch(e) {
                var t, n;
                const {slotName: i, appId: a} = this.props;
                switch (i) {
                case Gt.WL.NOTIFICATIONS:
                case Gt.WL.CONTEXTUAL_NOTIFICATIONS:
                case Gt.WL.TOASTS:
                case Gt.WL.CONFIGURATIONS:
                    null === (n = (t = this.logger).errorToTelemetry) || void 0 === n || n.call(t, `The App rendering in ${i} slot threw an error that was caught by the slot error boundary. This error will be ignored so user is not blocked.`, "webclient_framework_foundation_slot_error_boundary_caught_and_ignored_error");
                    break;
                default:
                    e.originSlotName = i,
                    e.originAppId = a,
                    this.setState({
                        error: e
                    })
                }
            }
            render() {
                const {error: e} = this.state;
                if (e)
                    throw e;
                return this.props.children
            }
        }
        ba.displayName = "SlotErrorBoundary";
        const {memo: Ca, useCallback: Sa, useEffect: Ia, useMemo: ka, useRef: Na, useState: Ea} = s
          , Ta = Ca((({appId: e, appRenderMode: t, commandReportingCallbacks: n, correlationId: i, enableSlotTransition: a, entitiesHierarchyHelpers: r, entity: s, entityCacheBuster: l, entityWithoutOptions: d, getEntityOptions: c, phaseStateMachine: u, render: m, shouldErrorOnEntityCommandTimeout: p, slotName: v, updateEntity: h, updateEntityState: y, viewEntitiesRef: A, viewEntityName: f})=>{
            (0,
            X.Qj)("Slot");
            const b = La({
                appId: e,
                appRenderMode: t,
                commandReportingCallbacks: n,
                entitiesHierarchyHelpers: r,
                entity: s,
                entityCacheBuster: l,
                entityWithoutOptions: d,
                getEntityOptions: c,
                phaseStateMachine: u,
                render: m,
                updateEntity: h,
                updateEntityState: y,
                viewEntitiesRef: A,
                viewEntityName: f
            })
              , C = ka((()=>({
                correlationId: i,
                enableSlotTransition: a,
                slotInnerProps: b,
                slotName: v
            })), [i, a, b, v])
              , {loggerFactory: S} = (0,
            g.SE)();
            return (0,
            o.t)(ba, Object.assign({
                loggerFactory: S,
                slotName: v,
                appId: e
            }, {
                children: p ? (0,
                o.t)(wa, Object.assign({
                    correlationId: i
                }, {
                    children: (0,
                    o.t)(Ma, Object.assign({}, C))
                })) : (0,
                o.t)(Ma, Object.assign({}, C))
            }))
        }
        ));
        Ta.displayName = "Slot";
        const wa = Ca((({correlationId: e, children: t})=>{
            const {commandReportingService: n} = (0,
            A.i)()
              , [i,a] = Ea(void 0)
              , s = Sa((e=>{
                a((0,
                C.Tr)(S.w5.Commanding, S.jK.TimedOut, "Slot", {
                    isRecoverable: !1,
                    reportCommand: !1
                }, `__doNotAssignThisToFramework__ Entity command timed out, reason ${e}`))
            }
            ), [a])
              , l = Na(!1);
            if (Ia((()=>(l.current || (null == n || n.registerForCommandTimeOut(e, s),
            l.current = !0),
            function() {
                null == n || n.unRegisterForCommandTimeOut(e)
            }
            )), [n, e, s]),
            i)
                throw i;
            return (0,
            o.t)(r.Fragment, {
                children: t
            })
        }
        ));
        wa.displayName = "SlotErrorState";
        const Ma = Ca((({correlationId: e, enableSlotTransition: t, slotInnerProps: n, slotName: i})=>{
            const {entity: a} = n;
            return (0,
            fa.BL)(i),
            t ? (0,
            o.t)(na, Object.assign({
                correlationId: e,
                entity: a
            }, {
                children: (0,
                o.t)(Da, Object.assign({}, n))
            })) : (0,
            o.t)(Da, Object.assign({}, n))
        }
        ));
        Ma.displayName = "SlotTransitionAndInner";
        const Da = Ca((({appId: e, appRenderMode: t, commandReportingCallbacks: n, commandReportingCallbacks: {onRenderEvent: i}, doesChildViewEntityMatch: a, entity: r, entityCacheBuster: s, entityWithoutOptions: l, getDoesChildViewEntityMatch$: d, getEntityOptions: c, phaseStateMachine: u, render: m, UNSAFE_doesMainViewEntityMatch: p, updateEntity: v, updateEntityState: h, viewEntitiesRef: y, viewEntityName: A})=>((0,
        X.Qj)("SlotInner"),
        (0,
        o.t)(g.fS, Object.assign({
            viewEntitiesRef: y,
            viewEntity: r,
            viewEntityName: A
        }, {
            children: (0,
            o.t)(ua.s, Object.assign({
                entity: r,
                getEntityOptions: c
            }, {
                children: (0,
                o.t)(fi.Ih, Object.assign({
                    appId: e,
                    appRenderMode: t,
                    commandReportingCallbacks: n,
                    doesChildViewEntityMatch: a,
                    entity: l,
                    entityCacheBuster: s,
                    getDoesChildViewEntityMatch$: d,
                    getEntityOptions: c,
                    phaseStateMachine: u,
                    UNSAFE_doesMainViewEntityMatch: p,
                    updateEntity: v,
                    updateEntityState: h
                }, {
                    children: (0,
                    o.t)(Aa, {
                        appRenderMode: t,
                        entity: l,
                        onRenderEvent: i,
                        render: m
                    })
                }))
            }))
        })))));
        Da.displayName = "SlotInner";
        const La = ({appId: e, appRenderMode: t, commandReportingCallbacks: n, entitiesHierarchyHelpers: i, entity: a, entityCacheBuster: o, entityWithoutOptions: r, getEntityOptions: s, phaseStateMachine: l, render: d, updateEntity: c, updateEntityState: u, viewEntitiesRef: g, viewEntityName: m})=>{
            const {childrenEntityMatchers: p, getDoesChildViewEntityMatcher$: v, UNSAFE_doesMainViewEntityMatch: h} = i
              , y = t === Yt.e.TitleBar ? "startEntity" : m
              , A = p[y];
            return ka((()=>({
                appId: e,
                appRenderMode: t,
                commandReportingCallbacks: n,
                doesChildViewEntityMatch: A,
                entity: a,
                entityCacheBuster: o,
                entityWithoutOptions: r,
                getDoesChildViewEntityMatch$: v(y),
                getEntityOptions: s,
                phaseStateMachine: l,
                render: d,
                UNSAFE_doesMainViewEntityMatch: h,
                updateEntity: c,
                updateEntityState: u,
                viewEntitiesRef: g,
                viewEntityName: m,
                selectedViewEntityName: y
            })), [e, t, n, A, a, o, r, v, s, l, d, h, c, u, g, m, y])
        }
        ;
        var Oa;
        !function(e) {
            e.LAYOUT = "app-layout"
        }(Oa || (Oa = {}));
        const Ba = (e,t)=>{
            var n, i;
            return {
                variables: {
                    layoutHasMonitorSlot: !!e[Gt.WL.MONITOR],
                    isMonitorSlotHidden: !!(null === (i = null === (n = null == t ? void 0 : t.slots) || void 0 === n ? void 0 : n.monitor) || void 0 === i ? void 0 : i.isHidden),
                    isFloatable: !0
                }
            }
        }
          , ja = e=>({
            variables: {
                layoutHasNotificationsSlot: !!e[Gt.WL.IN_APP_NOTIFICATIONS],
                isFloatable: !1
            }
        })
          , Pa = ({endSlotInfoPaneAsResponsiveMenuCallbacks: e, layoutConfig: t, slots: n, slotsResponsiveWidths: i})=>{
            var a, o, s, l;
            const d = !!(null === (o = null === (a = null == t ? void 0 : t.slots) || void 0 === a ? void 0 : a.subNav) || void 0 === o ? void 0 : o.isHidden)
              , c = null === (s = i[Gt.WL.SUBNAV]) || void 0 === s ? void 0 : s.firstSlotWidthGreaterThan0
              , u = null === (l = i[Gt.WL.SUBNAV]) || void 0 === l ? void 0 : l.slotWidthAtCurrentMinWidthBreakpoint
              , g = u && 0 === parseInt(u, 10)
              , v = (0,
            f.w)("Core Rendering Layer, useAppLayoutAreaProps");
            return v.log(`isSubNavIntentionallyHidden(${d}),firstSubNavWidthGreaterThan0(${c}),subNavWidthAtCurrentMinWidthBreakpoint(${u}`),
            (({endSlotInfoPaneAsResponsiveMenuCallbacks: e, layoutConfig: t, slots: n, slotsResponsiveWidths: i, logger: a, isSubNavIntentionallyHidden: o, firstSubNavWidthGreaterThan0: s, isSubNavSlideOutMenu: l})=>{
                var d, c;
                const [u,g] = (0,
                r.useState)(!1)
                  , v = (0,
                r.useCallback)((()=>{
                    o || u || (null == a || a.log(`enableSubNavResponsiveMenu:\n        isSubNavIntentionallyHidden(${o}), subNavAsResponsiveMenu(${u})`),
                    g(!0))
                }
                ), [o, a, u])
                  , h = (0,
                r.useCallback)((()=>{
                    !o && u && (null == a || a.log(`disableSubNavResponsiveMenu:\n        isSubNavIntentionallyHidden(${o}), subNavAsResponsiveMenu(${u})`),
                    g(!1))
                }
                ), [o, a, u])
                  , {enableInfoPaneAsResponsiveMenu: y=!1, enableDraggableSlots: A} = (0,
                m.NC)(p.J.Core, ["enableDraggableSlots", "enableInfoPaneAsResponsiveMenu"])
                  , f = !!(n[Gt.WL.NAV] && n[Gt.WL.SUBNAV] && l && u);
                a.log(`isSubNavDisplayedAsResponsiveMenu(${f})`);
                const b = (0,
                r.useMemo)((()=>!o && {
                    isStartSlotInLayoutTemplate: !!n[Gt.WL.START],
                    isSubNavDisplayedAsResponsiveMenu: f,
                    isSubNavSlideOutMenu: !!l
                } || {
                    isDraggable: !!A
                }), [A, f, l, o, n])
                  , {infoPanePreferenceSubscribeCallback: C, infoPanePreferenceUnsubscribeCallback: S, isInfoPaneResponsiveMenuCallback: I, updateInfoPanePreferenceCallback: k} = e
                  , [N,E] = (0,
                r.useState)(I());
                (0,
                r.useEffect)((()=>(C(E),
                S)), [C, S]);
                const T = null === (d = i[Gt.WL.END]) || void 0 === d ? void 0 : d.firstSlotWidthGreaterThan0
                  , w = null === (c = i[Gt.WL.END]) || void 0 === c ? void 0 : c.slotWidthAtCurrentMinWidthBreakpoint
                  , M = !!(y && n[Gt.WL.END] && w && 0 === parseInt(w, 10))
                  , D = M && N
                  , L = (0,
                r.useMemo)((()=>({
                    isEndAsResponsiveMenuEnabled: D,
                    isEndSlideOutMenu: M,
                    isDraggable: !!A
                })), [A, D, M])
                  , O = (0,
                r.useCallback)(((e,t="hidden")=>{
                    var n, i;
                    return M && !(null === (i = null === (n = null == e ? void 0 : e.target) || void 0 === n ? void 0 : n.dataset) || void 0 === i ? void 0 : i.infoPaneActionSource) && k(t)
                }
                ), [M, k])
                  , B = (0,
                r.useMemo)((()=>({
                    onFocus: e=>{
                        O(e, "open"),
                        l && h()
                    }
                    ,
                    onMouseEnter: ()=>l && h(),
                    width: T,
                    variables: L
                })), [T, L, O, l, h])
                  , j = (0,
                r.useMemo)((()=>({
                    onFocus: e=>{
                        O(e),
                        l && h()
                    }
                    ,
                    onMouseEnter: ()=>l && h()
                })), [O, l, h])
                  , P = (0,
                r.useMemo)((()=>l && {
                    onFocus: e=>{
                        v(),
                        O(e)
                    }
                    ,
                    onMouseEnter: v,
                    onMouseOver: v
                }), [v, O, l])
                  , R = (0,
                r.useMemo)((()=>Object.assign(Object.assign({}, u && {
                    width: f ? s : void 0
                }), {
                    variables: b
                })), [s, b, u, f])
                  , x = (0,
                r.useMemo)((()=>l && Object.assign({
                    onMouseLeave: h,
                    onFocus: e=>{
                        v(),
                        O(e)
                    }
                }, R)), [h, v, O, l, R])
                  , F = (0,
                r.useMemo)((()=>l && Object.assign({
                    onMouseLeave: h
                }, R)), [h, l, R])
                  , _ = (0,
                r.useMemo)((()=>{
                    var e, i, a;
                    const o = (null === (i = null === (e = null == t ? void 0 : t.slots) || void 0 === e ? void 0 : e.header) || void 0 === i ? void 0 : i.height) || (null === (a = n[Gt.WL.HEADER]) || void 0 === a ? void 0 : a.variables.isHeaderSlotExpandedOnMount) && Gt.Vi[Gt.WL.HEADER].height.expanded || void 0;
                    return o ? Object.assign(Object.assign({}, j), {
                        height: o
                    }) : j
                }
                ), [j, t, n])
                  , W = !!n[Gt.WL.TOASTS]
                  , z = W && (!n[Gt.WL.SUBNAV] || !!l)
                  , Q = (0,
                r.useMemo)((()=>Object.assign(Object.assign({}, j), {
                    variables: {
                        areToastsPositionedOverMain: z,
                        layoutHasToasts: W
                    }
                })), [z, j, W])
                  , H = Ba(n, t)
                  , U = ja(n);
                return (0,
                r.useMemo)((()=>({
                    [Gt.WL.CONFIGURATIONS]: {},
                    [Gt.WL.CONTEXTUAL_NOTIFICATIONS]: Object.assign({}, j),
                    [Gt.WL.END]: Object.assign({}, B),
                    [Gt.WL.HEADER]: Object.assign({}, _),
                    [Gt.WL.MAIN]: Object.assign({}, j),
                    [Gt.WL.MODAL]: Object.assign({}, j),
                    [Gt.WL.MONITOR]: Object.assign({}, H),
                    [Gt.WL.NAV]: Object.assign({}, P),
                    [Gt.WL.NOTIFICATIONS]: Object.assign({}, j),
                    [Gt.WL.IN_APP_NOTIFICATIONS]: Object.assign({}, U),
                    [Gt.WL.START]: Object.assign({}, j),
                    [Gt.WL.SUBNAV]: Object.assign({}, x),
                    [Gt.WL.TITLE_BAR]: Object.assign({}, j),
                    [Gt.WL.TOASTS]: Object.assign({}, Q),
                    [Oa.LAYOUT]: Object.assign({}, F)
                })), [j, B, _, F, H, P, U, x, Q])
            }
            )({
                endSlotInfoPaneAsResponsiveMenuCallbacks: e,
                layoutConfig: t,
                slots: n,
                slotsResponsiveWidths: i,
                logger: v,
                isSubNavIntentionallyHidden: d,
                firstSubNavWidthGreaterThan0: c,
                isSubNavSlideOutMenu: g
            })
        }
        ;
        var Ra = n(682265);
        var xa = n(89062);
        const Fa = ({disableSubNavResponsiveMenu: e, enableSubNavResponsiveMenu: t, isSubNavSlideOutMenu: n, keepSubNavEnabled: i, setKeepSubNavEnabled: a, logger: o})=>{
            const s = (0,
            r.useRef)(t);
            s.current !== t && (s.current = t);
            const l = (0,
            r.useRef)(n);
            l.current !== n && (l.current = n);
            const d = (0,
            r.useRef)(i);
            d.current !== i && (d.current = i);
            const c = (0,
            r.useRef)(e);
            c.current !== e && (c.current = e);
            return (0,
            r.useCallback)((e=>{
                const {subNavHoverChangedArgs: {showSubNav: t, keepSubNavOpen: n}} = e;
                n && void 0 === t ? l.current && !d.current && a(!0) : (o.log(`subNavEventHandler received payload: ${JSON.stringify(e)}`),
                t ? s.current() : c.current(!0))
            }
            ), [o, a])
        }
          , _a = ({disableSubNavResponsiveMenu: e, isEndSlideOutMenu: t, isSubNavIntentionallyHidden: n, isSubNavSlideOutMenu: i, keepSubNavEnabled: a, updateInfoPanePreferenceCallback: o, enableSubNavResponsiveMenu: s, isEndAsResponsiveMenuEnabled: l, firstEndWidthGreaterThan0: d, firstSubNavWidthGreaterThan0: c, subNavAsResponsiveMenu: u, slots: g, layoutConfig: m})=>{
            const p = (0,
            r.useCallback)(((e,n="hidden")=>{
                var i, a;
                return t && !(null === (a = null === (i = null == e ? void 0 : e.target) || void 0 === i ? void 0 : i.dataset) || void 0 === a ? void 0 : a.infoPaneActionSource) && o(n)
            }
            ), [t, o])
              , v = (({disableSubNavResponsiveMenu: e, isSubNavSlideOutMenu: t, keepSubNavEnabled: n, setInfoPanePreference: i})=>(0,
            r.useMemo)((()=>({
                onFocus: n=>{
                    i(n, "hidden"),
                    t && e(!0)
                }
                ,
                onMouseEnter: ()=>{
                    t && !n && e()
                }
                ,
                onClick: ()=>{
                    t && e(!0)
                }
            })), [i, t, e, n]))({
                disableSubNavResponsiveMenu: e,
                isEndSlideOutMenu: t,
                isSubNavSlideOutMenu: i,
                keepSubNavEnabled: a,
                setInfoPanePreference: p
            })
              , h = (0,
            r.useMemo)((()=>({
                isEndAsResponsiveMenuEnabled: l,
                isEndSlideOutMenu: t
            })), [l, t])
              , y = (0,
            r.useMemo)((()=>{
                const t = Object.assign(Object.assign({}, v), {
                    onFocus: t=>{
                        p(t, "open"),
                        i && !a && e()
                    }
                });
                return Object.assign(Object.assign({}, t), {
                    width: d,
                    variables: h
                })
            }
            ), [v, e, h, d, i, a, p])
              , A = (0,
            r.useMemo)((()=>i && {
                onFocus: e=>{
                    s(),
                    p(e, "hidden")
                }
                ,
                onMouseEnter: s,
                onMouseOver: s
            }), [s, i, p])
              , f = !!(g[Gt.WL.NAV] && g[Gt.WL.SUBNAV] && i && u)
              , b = (0,
            r.useMemo)((()=>!n && {
                isStartSlotInLayoutTemplate: !!g[Gt.WL.START],
                isSubNavDisplayedAsResponsiveMenu: f,
                isSubNavSlideOutMenu: !!i
            } || {}), [f, i, n, g])
              , C = (0,
            r.useMemo)((()=>Object.assign(Object.assign({}, u && {
                width: f ? c : void 0
            }), {
                variables: b
            })), [c, b, u, f])
              , S = (0,
            r.useMemo)((()=>i && Object.assign({
                onFocus: e=>{
                    s(),
                    p(e, "hidden")
                }
            }, C)), [s, i, p, C])
              , I = (0,
            r.useMemo)((()=>i && Object.assign({}, C)), [i, C])
              , k = (0,
            r.useMemo)((()=>{
                var e, t, n;
                const i = (null === (t = null === (e = null == m ? void 0 : m.slots) || void 0 === e ? void 0 : e.header) || void 0 === t ? void 0 : t.height) || void 0 || (null === (n = g[Gt.WL.HEADER]) || void 0 === n ? void 0 : n.variables.isHeaderSlotExpandedOnMount) && Gt.Vi[Gt.WL.HEADER].height.expanded || void 0;
                return i ? Object.assign(Object.assign({}, v), {
                    height: i
                }) : v
            }
            ), [v, m, g])
              , N = (0,
            r.useMemo)((()=>({
                onFocus: t=>{
                    p(t, "hidden"),
                    i && e()
                }
                ,
                onMouseEnter: ()=>{
                    i && e()
                }
            })), [p, i, e]);
            return {
                defaultAreaProps: v,
                endAreaProps: y,
                headerAreaProps: k,
                layoutProps: I,
                navAreaProps: A,
                subNavAreaProps: S,
                titleBarAreaProps: N
            }
        }
          , {useCallback: Wa, useMemo: za} = s
          , Qa = "use-command-reporting-callbacks"
          , Ha = ({commandChangeReportingService: e, correlationId: t, logger: n, renderEventData: i})=>{
            var a;
            const {data: o, renderStage: r} = i;
            switch (r) {
            case "ChunkLoadStarted":
                e.report({
                    correlationId: t,
                    type: _e.B.ChunkLoadStarted,
                    context: {
                        target: Qa,
                        chunkName: null == o ? void 0 : o.chunkName
                    }
                });
                break;
            case "ChunkLoadSucceeded":
                e.report({
                    correlationId: t,
                    type: _e.B.ChunkLoadSucceeded,
                    context: {
                        target: Qa,
                        chunkName: null == o ? void 0 : o.chunkName
                    }
                });
                break;
            case "UnmountStarted":
                e.report({
                    correlationId: t,
                    type: _e.B.UnmountStarted,
                    context: {
                        target: Qa
                    }
                });
                break;
            case "CriticalInitRender":
                e.report({
                    correlationId: t,
                    type: (null == o ? void 0 : o.isBlanked) ? _e.B.Blanked : _e.B.Rendered,
                    context: {
                        target: Qa
                    }
                });
                break;
            case "RenderingFailure":
                e.report({
                    correlationId: t,
                    type: _e.B.Failure,
                    context: {
                        target: Qa,
                        errorInfo: (null == o ? void 0 : o.errorInfo) || We.y.RenderingError,
                        errorMessage: null == o ? void 0 : o.errorMessage
                    }
                }),
                null === (a = n.errorToTelemetry) || void 0 === a || a.call(n, `RenderingFailure: ${null == o ? void 0 : o.errorInfo}, ${null == o ? void 0 : o.errorMessage}`, "webclient_framework_foundation_components_use_command_reporting_callbacks", {
                    errorCode: (null == o ? void 0 : o.errorInfo) || We.y.RenderingError,
                    errorMessage: null == o ? void 0 : o.errorMessage
                });
                break;
            case "RenderingCanceled":
                e.report({
                    correlationId: t,
                    type: _e.B.Abandoned,
                    context: {
                        target: Qa
                    }
                });
                break;
            case "RenderingIncomplete":
                e.report({
                    correlationId: t,
                    type: _e.B.Incomplete,
                    context: {
                        target: Qa
                    }
                });
                break;
            default:
                n.warn(`Unrecognized render stage encountered: ${r}`)
            }
        }
        ;
        var Ua = n(619608);
        const Va = "infoPane"
          , Ga = "hidden"
          , Ya = ({entity: e, prevEntity: t})=>{
            const {action: n, id: i, type: a} = e || {}
              , {action: o, id: r, type: s} = t || {};
            return o !== n || s !== a || r !== i
        }
          , {useRef: Ja} = s
          , Ka = ({activeEntities: e, correlationId: t, prevActiveEntitiesRef: n})=>{
            const i = Ja(t)
              , {viewEntitiesChanged: a, hasMainEntityChanged: o, skipForcedLPSMTransition: r} = (({activeEntities: e, prevActiveEntitiesRef: t})=>{
                let n = !1;
                if (null === t.current)
                    return {
                        skipForcedLPSMTransition: n,
                        viewEntitiesChanged: !0,
                        hasMainEntityChanged: !0
                    };
                const {subNavEntity: i, startEntity: a, headerEntity: o, mainEntity: r, endEntity: s, monitorEntity: l, inAppNotificationsEntity: d} = e
                  , {subNavEntity: c, startEntity: u, headerEntity: g, mainEntity: m, endEntity: p, monitorEntity: v, inAppNotificationsEntity: h} = t.current
                  , y = Ya({
                    entity: i,
                    prevEntity: c
                })
                  , A = Ya({
                    entity: o,
                    prevEntity: g
                })
                  , f = Ya({
                    entity: a,
                    prevEntity: u
                })
                  , b = Ya({
                    entity: r,
                    prevEntity: m
                })
                  , C = Ya({
                    entity: s,
                    prevEntity: p
                })
                  , S = Ya({
                    entity: l,
                    prevEntity: v
                })
                  , I = Ya({
                    entity: d,
                    prevEntity: h
                })
                  , k = y || A || f || b || C || S || I;
                return y || (null == c ? void 0 : c.type) !== Zt.py.activity || (n = !0),
                {
                    hasMainEntityChanged: b,
                    viewEntitiesChanged: k,
                    skipForcedLPSMTransition: n
                }
            }
            )({
                activeEntities: e,
                prevActiveEntitiesRef: n
            })
              , s = qa({
                correlationId: t,
                prevCorrelationIdRef: i,
                viewEntitiesChanged: a
            });
            return i.current = s,
            {
                hasMainEntityChanged: o,
                layoutRenderCorrelationIdRef: i,
                skipForcedLPSMTransition: r,
                viewEntitiesChanged: a
            }
        }
          , qa = ({correlationId: e, prevCorrelationIdRef: t, viewEntitiesChanged: n})=>e !== t.current && n ? e : t.current;
        var Za = n(455572)
          , Xa = n(218551);
        class $a extends Mi {
            constructor({correlationId: e, enableBatchedUpdatesForPhaseStateMachine: t=!1, enableForcedTransitionOnLPSMDispose: n=!1, enablePhasedRenderScenario: i=!0, host: a, logger: o, phases: r, phaseTransitionsBehindLayoutAndPaint: s=!0, scenarioFactory: l, scheduler: d}) {
                super({
                    correlationId: e,
                    enableBatchedUpdatesForPhaseStateMachine: t,
                    enablePhasedRenderScenario: i,
                    host: a,
                    logger: o,
                    phases: r,
                    phaseTransitionsBehindLayoutAndPaint: s,
                    scenarioFactory: l,
                    scheduler: d
                }),
                this._layoutTimings = new Map,
                this._enableForcedTransitionOnDispose = n
            }
            dispose(e) {
                const {skipForceTransition: t} = e || {};
                if (this._logPhaseState("Dispose requested"),
                this._layoutTimings = new Map,
                !this._enableForcedTransitionOnDispose || t)
                    return this._logPhaseState((t ? "Skipping" : "Disabled") + " forced transition"),
                    void super.dispose();
                this._forceTransitionToCompleteState({
                    onPhaseWillCompleteReason: Gt.Ug.PHASE_STATE_MACHINE_DISPOSED,
                    onCompleteStateReached: ()=>{
                        super.dispose(),
                        this._logPhaseState("Disposed")
                    }
                })
            }
            fireSignals({fireAfterLayoutAndPaint: e, incompleteSignals: t, signals: n, slotOnPhaseWillCompleteReason: i}) {
                const a = n[0]
                  , [o,r] = function(e) {
                    const [t,n] = e.split("/");
                    return [t, Gt.nh[n]]
                }(a)
                  , s = this._layoutTimings.get(r)
                  , l = {
                    appPhase: r,
                    incompleteSignals: t,
                    onPhaseWillCompleteReason: i,
                    phaseEndTimestamp: Date.now(),
                    slotName: o
                };
                s ? s.push(l) : this._layoutTimings.set(r, [l]),
                super.fireSignals({
                    signals: n,
                    fireAfterLayoutAndPaint: e
                })
            }
            get layoutTimings() {
                return this._layoutTimings
            }
            addSignalsToPhase(e, t) {
                t.forEach((t=>{
                    const n = this._phases.get(e);
                    e >= this.currentPhase && n && void 0 === n.signals[t] && (n.signals[t] = !1)
                }
                ))
            }
            _transitionToNextState(e) {
                const t = this._layoutTimings.get(this.currentPhase)
                  , n = (null == t ? void 0 : t.filter((({onPhaseWillCompleteReason: e})=>e === Gt.Ug.PHASE_TIMEOUT_FIRED))) || [];
                if (n.length > 0) {
                    const e = [].concat(...n.map((({incompleteSignals: e})=>e || [])));
                    this._logPhaseState(`Ended the ${Gt.nh[this.currentPhase]} LayoutPhaseStateMachine due to timeout of slots: ${n.map((({slotName: e})=>e)).join(", ")} and incomplete signals: ${e.join(", ")}`, !0)
                }
                super._transitionToNextState(e)
            }
        }
        class eo {
            constructor() {
                this._data = {}
            }
            get data() {
                return this._data
            }
            reset() {
                this._data = {}
            }
            onRender(e, t, n, i) {
                var a;
                const o = null !== (a = this._data[e]) && void 0 !== a ? a : {
                    mounts: 0,
                    updates: 0,
                    actualDuration: 0,
                    baseDuration: 0
                };
                "mount" === t ? o.mounts++ : o.updates++,
                o.actualDuration += n,
                o.baseDuration += i,
                this._data[e] = o
            }
        }
        const to = r.createContext(null);
        to.displayName = "ReactProfilerContext";
        const no = ()=>r.useContext(to)
          , io = ({children: e})=>{
            const t = r.useRef(new eo);
            return (0,
            o.t)(to.Provider, Object.assign({
                value: t.current
            }, {
                children: e
            }))
        }
          , ao = 12e4
          , {useMemo: oo, useEffect: ro, useRef: so} = s
          , lo = e=>oo((()=>{
            const t = new Si.H
              , n = e.filter((e=>e !== Gt.WL.MODAL));
            return t.registerAppPhase({
                phase: Gt.nh.CRITICAL,
                signals: n.map((e=>Di(e, Gt.nh.CRITICAL))),
                timeout: ao
            }),
            t.registerAppPhase({
                phase: Gt.nh.POST_CRITICAL,
                signals: n.map((e=>Di(e, Gt.nh.POST_CRITICAL))),
                timeout: ao
            }),
            t.appPhases
        }
        ), [e])
          , {createContext: co, memo: uo, useContext: go, useRef: mo} = s
          , po = co(void 0);
        po.displayName = "LineLoaderContext";
        const vo = uo((({children: e})=>{
            const t = mo({
                isVisibleSubject: new Ii.X(!1),
                isLoadingScreenHiddenSubject: new Ii.X(!1)
            }).current;
            return (0,
            o.t)(po.Provider, Object.assign({
                value: t
            }, {
                children: e
            }))
        }
        ));
        function ho() {
            const e = go(po);
            if (!e)
                throw new $e.G($e.$.LAYOUT_ERROR,new Error("useLineLoaderContext must be used within a LineLoaderContextProvider"));
            return e
        }
        vo.displayName = "LineLoaderContextProvider";
        const {useCallback: yo, useEffect: Ao, useRef: fo} = s;
        var bo;
        !function(e) {
            e.VISIBLE = "visible",
            e.HIDDEN = "hidden"
        }(bo || (bo = {}));
        const {useCallback: Co, useEffect: So, useRef: Io} = s;
        var ko = n(985937);
        const {useCallback: No, useEffect: Eo, useMemo: To, useRef: wo} = s
          , Mo = (e,t,n,i)=>{
            const {enableHideSplashScreenForColdBoot: a=!1, hideSplashScreenForColdBootTimeout: o} = (0,
            m.NC)(p.J.Core, ["enableHideSplashScreenForColdBoot", "hideSplashScreenForColdBootTimeout"])
              , {host: r} = (0,
            g.SE)();
            Eo((()=>(a && !t.current && (n(),
            i.current = r.setTimeout((()=>{
                e()
            }
            ), o || 5e4)),
            t.current && n(),
            n)), [n, a, e, o, r, t, i])
        }
        ;
        class Do {
            constructor() {
                this.map = new Map
            }
            get(e) {
                return this.map.get(e)
            }
            set(e, t) {
                this.map.set(e, t)
            }
            delete(e) {
                return this.map.delete(e)
            }
            getIncompleteSignals(e) {
                const t = Array.from(this.map.entries())
                  , n = {}
                  , i = t.reduce(((t,[,i])=>{
                    let a = i.phaseStateMachine.UNSAFE_LAYOUT_FABRIC_getIncompleteSignals()[e];
                    return n[i.slotName] = a,
                    a && (a = a.split(",").map((e=>`${i.slotName}/${e.trim()}`)).join(","),
                    t += `${t.length ? "," : ""}${a}`),
                    t
                }
                ), "");
                return {
                    signals: n,
                    signalsAsStr: i
                }
            }
        }
        const {createContext: Lo, memo: Oo, useContext: Bo, useRef: jo} = s
          , Po = Lo(void 0);
        Po.displayName = "LayoutFabricContext";
        const Ro = Oo((({children: e})=>{
            const t = (0,
            f.w)("Core Rendering Layer, Phased Rendering Framework - Layout Fabric")
              , n = jo({
                logger: t,
                registry: new Do
            }).current;
            return (0,
            o.t)(Po.Provider, Object.assign({
                value: n
            }, {
                children: e
            }))
        }
        ));
        function xo() {
            const e = Bo(Po);
            if (!e)
                throw new $e.G($e.$.LAYOUT_ERROR,new Error("useLayoutFabricContext must be used within a LayoutFabricContextProvider"));
            return e
        }
        Ro.displayName = "LayoutFabricContextProvider";
        const {useCallback: Fo, useEffect: _o} = s
          , Wo = ({slotPhaseStateMachine: e, slotName: t})=>{
            const {logger: n, registry: i} = xo()
              , a = Fo((({appPhase: e, slotName: t})=>({incompleteSignals: a, onPhaseWillCompleteReason: o})=>{
                if (t) {
                    const r = i.get(t);
                    if (r) {
                        const s = {
                            incompleteSignals: a,
                            onPhaseWillCompleteReason: o,
                            mostRecentPhase: e,
                            layoutSignal: Di(t, e)
                        };
                        n.log(`updating entry for slot ${t},`, `layout signal: ${s.layoutSignal}, reason: ${s.onPhaseWillCompleteReason}, incomplete signals: ${a || "none"}`),
                        i.set(t, Object.assign(Object.assign({}, r), s))
                    }
                }
            }
            ), [i, n]);
            _o((()=>(t && i.set(t, {
                slotName: t,
                phaseStateMachine: e
            }),
            e.onPhaseWillComplete({
                phase: Gt.nh.CRITICAL,
                onWillComplete: a({
                    slotName: t,
                    appPhase: Gt.nh.CRITICAL
                })
            }),
            e.onPhaseWillComplete({
                phase: Gt.nh.POST_CRITICAL,
                onWillComplete: a({
                    slotName: t,
                    appPhase: Gt.nh.POST_CRITICAL
                })
            }),
            ()=>{
                t && i.delete(t)
            }
            )), [i, a, t, e])
        }
          , {useCallback: zo, useEffect: Qo} = s;
        function Ho({layoutPhaseStateMachine: e, scenarioFactory: t}) {
            const {registry: n, logger: i} = xo()
              , a = zo((e=>({incompleteSignals: a, onPhaseWillCompleteReason: o})=>{
                const r = null == a ? void 0 : a.join(",")
                  , s = o === Gt.Ug.PHASE_STATE_MACHINE_DISPOSED
                  , l = o === Gt.Ug.PHASE_TIMEOUT_FIRED;
                if (s || l) {
                    const {signalsAsStr: a} = n.getIncompleteSignals(e);
                    let d;
                    r && a ? d = `${r},${a}` : r ? d = r : a && (d = a);
                    const c = t.findScenario(Me.RG.PhasedRender);
                    c && (s ? c.appendEventData({
                        reason: o,
                        incompleteSignalsWhenDisposed: d
                    }) : c.appendEventData({
                        reason: o,
                        incompleteSignals: d
                    })),
                    i.log(`LayoutPhaseStateMachine ${l ? "timed out" : "disposed"} with incomplete signals: ${d}`)
                }
            }
            ), [n, i, t]);
            Qo((()=>{
                e.onPhaseWillComplete({
                    phase: Gt.nh.CRITICAL,
                    onWillComplete: a(Gt.nh.CRITICAL)
                }),
                e.onPhaseWillComplete({
                    phase: Gt.nh.POST_CRITICAL,
                    onWillComplete: a(Gt.nh.POST_CRITICAL)
                })
            }
            ), [e, a])
        }
        function Uo(e) {
            let t = {}
              , n = e=>{}
            ;
            if ("slotName"in e && "slotPhaseStateMachine"in e) {
                const {slotName: i, slotPhaseStateMachine: a} = e;
                t = {
                    slotName: i,
                    slotPhaseStateMachine: a
                },
                n = Wo
            } else if ("layoutPhaseStateMachine"in e && "scenarioFactory"in e) {
                const {layoutPhaseStateMachine: i, scenarioFactory: a} = e;
                t = {
                    layoutPhaseStateMachine: i,
                    scenarioFactory: a
                },
                n = Ho
            }
            return n(t)
        }
        const {useCallback: Vo, useEffect: Go, useMemo: Yo, useRef: Jo} = s
          , Ko = "use-layout-phase-state-machine-with-event"
          , qo = ({correlationId: e, layoutRenderCorrelationIdRef: t, onLayoutPhaseStateMachineError: n, setDataTid: i, skipForcedLPSMTransition: a, slotsConfig: o, slotsConfigKeys: r, activeEntities: s})=>{
            const {altScenarioService: l, commandChangeReportingService: d, commandResultService: c, experienceChangeReportingService: u, hostCommunicationService: v, scheduler: h, windowId: y} = (0,
            A.i)()
              , {coreSettings: b, host: C, scenarioFactory: S} = (0,
            g.SE)()
              , I = no()
              , k = (({correlationId: e, skipForcedLPSMTransition: t, slotsConfigKeys: n})=>{
                const {scheduler: i} = (0,
                A.i)()
                  , {coreSettings: a, host: o, scenarioFactory: r} = (0,
                g.SE)()
                  , s = (0,
                f.w)("Core Rendering Layer, Phased Rendering Framework - LayoutPhaseStateMachine")
                  , {phases: l} = lo(n)
                  , {enableBatchedUpdatesForPhaseStateMachine: d, enableForcedTransitionOnLPSMDispose: c} = a.get(p.J.Core)
                  , u = so(null)
                  , m = no()
                  , v = oo((()=>{
                    s.log(`Initializing a new LayoutPhaseStateMachine due to changes in correlationId and activeEntities from previous render cycle, correlationId: ${e}.`);
                    const t = new $a({
                        correlationId: e,
                        enableBatchedUpdatesForPhaseStateMachine: Boolean(d),
                        enableForcedTransitionOnLPSMDispose: Boolean(c),
                        host: o,
                        logger: s,
                        phases: l,
                        scenarioFactory: r,
                        scheduler: i
                    });
                    return null == m || m.reset(),
                    t
                }
                ), [e, d, c, o, s, l, r, i, m]);
                if (u.current !== v) {
                    const e = u.current;
                    u.current = v,
                    Promise.resolve().then((()=>{
                        null == e || e.dispose({
                            skipForceTransition: t
                        })
                    }
                    ))
                }
                return ro((()=>()=>{
                    var e;
                    return null === (e = u.current) || void 0 === e ? void 0 : e.dispose()
                }
                ), []),
                v
            }
            )({
                correlationId: t.current,
                skipForcedLPSMTransition: a,
                slotsConfig: o,
                slotsConfigKeys: r
            });
            Uo({
                layoutPhaseStateMachine: k,
                scenarioFactory: S
            });
            const N = function({layoutPhaseStateMachine: e, scenarioFactory: t}) {
                const {enableLineLoader: n, lineLoaderVisibleDelayMs: i} = (0,
                m.NC)(p.J.Core)
                  , {isVisibleSubject: a} = ho()
                  , {host: o} = (0,
                g.SE)()
                  , r = (0,
                f.w)("Core Rendering Layer, LineLoader")
                  , s = t.findScenario(Me.RG.PhasedRender)
                  , l = fo({
                    timerId: null,
                    visibleStartTime: null
                }).current
                  , d = yo((()=>{
                    l.timerId && (o.clearTimeout(l.timerId),
                    l.timerId = null)
                }
                ), [o, l])
                  , c = yo((()=>{
                    n && (o.matchMedia("(prefers-reduced-motion: reduce)").matches || (e.currentPhase === Gt.nh.CRITICAL ? l.timerId || (l.timerId = o.setTimeout((()=>{
                        l.visibleStartTime = Date.now(),
                        a.next(!0),
                        l.timerId = null,
                        null == s || s.mark(Me.ck.LineLoaderVisible),
                        null == s || s.appendEventData({
                            lineLoaderVisible: !0
                        }),
                        r.log(`change to ${bo.VISIBLE} completed`)
                    }
                    ), null != i ? i : 2e3),
                    null == s || s.mark(Me.ck.LineLoaderQueued),
                    r.log(`change to ${bo.VISIBLE} queued`)) : r.log(`change to ${bo.VISIBLE} cancelled, not in critical phase`)))
                }
                ), [n, o, a, e.currentPhase, i, l, r, s])
                  , u = yo((()=>{
                    if (n && !o.matchMedia("(prefers-reduced-motion: reduce)").matches && (d(),
                    a.next(!1),
                    r.log(`change to ${bo.HIDDEN} completed`),
                    l.visibleStartTime)) {
                        const e = Date.now() - l.visibleStartTime;
                        l.visibleStartTime = null,
                        null == s || s.mark(Me.ck.LineLoaderHidden),
                        null == s || s.appendEventData({
                            lineLoaderVisibleDurationMs: e
                        })
                    }
                }
                ), [d, n, a, l, r, s, o]);
                return Ao((()=>(c(),
                u)), [e, u, c]),
                {
                    onCriticalRenderComplete: u
                }
            }({
                layoutPhaseStateMachine: k,
                scenarioFactory: S
            })
              , {layoutTimings: E} = k
              , T = lr(r, o)
              , w = Vo((()=>d.report({
                correlationId: e,
                type: _e.B.ScenarioEventDataAppended,
                context: {
                    target: Ko,
                    eventData: {
                        incompleteSlots: Zo(E, o)
                    }
                }
            })), [d, e, E, o])
              , M = Jo(!1)
              , D = Vo((()=>{
                M.current || (ur(b, e, v, h, y),
                M.current = !0)
            }
            ), [b, e, v, M, h, y])
              , L = Jo(null)
              , O = (()=>{
                const {host: e} = (0,
                g.SE)()
                  , {bootType: t} = (0,
                m.NC)(p.J.Platform)
                  , {enableColdBootCarousel: n} = (0,
                m.NC)(p.J.Core)
                  , {isLoadingScreenHiddenSubject: i} = ho()
                  , a = (0,
                Y.Cq)()
                  , o = (0,
                ko.IY)(t)
                  , r = wo(!1)
                  , s = wo(void 0)
                  , l = wo(!1)
                  , d = No((()=>{
                    s.current && e.clearTimeout(s.current),
                    s.current = void 0
                }
                ), [s, e])
                  , c = To((()=>n ? [a.stringTranslate("framework", "cold_boot_carousel_1"), a.stringTranslate("framework", "cold_boot_carousel_2"), a.stringTranslate("framework", "cold_boot_carousel_3"), a.stringTranslate("framework", "cold_boot_carousel_4")] : []), [n, a])
                  , u = No((()=>{
                    var t;
                    r.current || (null === (t = e.preCoreUiAdapter) || void 0 === t || t.hideLoadingScreen(),
                    r.current = !0,
                    i.next(!0),
                    d())
                }
                ), [r, i, e.preCoreUiAdapter, d]);
                return Mo(u, r, d, s),
                Eo((()=>{
                    var t;
                    o ? u() : n && !l.current && (null === (t = e.preCoreUiAdapter) || void 0 === t || t.startCarousel(c),
                    l.current = !0)
                }
                ), [c, n, u, e.preCoreUiAdapter, o]),
                u
            }
            )();
            L.current = Vo((({onPhaseWillCompleteReason: t})=>{
                var i, a;
                const o = s.mainEntity ? {
                    mainEntityAction: s.mainEntity.action,
                    mainEntityType: s.mainEntity.type
                } : void 0;
                d.report({
                    correlationId: e,
                    type: _e.B.ScenarioEventDataAppended,
                    context: {
                        target: Ko,
                        eventData: Object.assign({}, o)
                    }
                });
                const r = Xo(E, T, Gt.nh.CRITICAL)
                  , c = cr(E, Gt.nh.CRITICAL)
                  , u = {
                    altScenarioService: l,
                    commandChangeReportingService: d,
                    correlationId: e,
                    entitiesInfo: o,
                    host: C,
                    layoutTimings: E,
                    scenarioFactory: S
                }
                  , g = "visible" === (null === (i = C.document) || void 0 === i ? void 0 : i.visibilityState);
                null === (a = l.altScenario) || void 0 === a || a.appendEventData({
                    "Window.ViewportContext": C.viewportContext,
                    isPageVisible: g,
                    "Window.Focus": g ? Za.cb.foreground : Za.cb.background,
                    "Window.Status": g ? Za.Lv.maximized : Za.Lv.minimized
                }),
                r.length > 0 ? ($o(Object.assign(Object.assign({}, u), {
                    timedOutSlots: r,
                    incompleteSignals: c
                })),
                b.get(p.J.Core).enableLayoutPhaseStateMachineTimeout && r.some((e=>e.entityType === Zt.py.flyout)) && n(new $e.G($e.$.LAYOUT_PHASE_STATE_MACHINE_TIMEOUT))) : t !== Gt.Ug.PHASE_TIMEOUT_FIRED && t !== Gt.Ug.PHASE_STATE_MACHINE_DISPOSED && (D(),
                ir(Object.assign(Object.assign({}, u), {
                    coreSettings: b,
                    renderData: null == I ? void 0 : I.data
                }))),
                N.onCriticalRenderComplete(),
                O()
            }
            ), [s, l, d, b, e, O, C, E, N, n, S, T, I, D]);
            const {mainEntity: B} = s
              , j = dr(B)
              , P = Jo(null)
              , R = Jo(!1);
            return P.current = Vo((()=>{
                const {mainEntityAction: e, mainEntityType: n} = j.current || {};
                u.report({
                    type: Xa.FV.LayoutRenderComplete,
                    context: {
                        mainEntityAction: e,
                        mainEntityType: n,
                        target: "layout-with-slots"
                    },
                    correlationId: t.current
                }),
                R.current || (R.current = !0,
                i && i("all-phased-rendering-complete"))
            }
            ), [u, t, j, i]),
            Go((()=>(L.current && k.onPhaseWillComplete({
                phase: Gt.nh.CRITICAL,
                onWillComplete: L.current
            }),
            P.current && k.onPhaseWillComplete({
                phase: Gt.nh.COMPLETE,
                onWillComplete: P.current
            }),
            null == c || c.registerForCommandTimeOut(e, w),
            ()=>{
                null == c || c.unRegisterForCommandTimeOut(e),
                u.report({
                    type: Xa.FV.LayoutRenderCancelled,
                    context: {
                        target: "layout-with-slots"
                    },
                    correlationId: e
                })
            }
            )), [c, e, k, w, u]),
            (e=>{
                const {host: t, scenarioFactory: n} = (0,
                g.SE)()
                  , i = Io(0)
                  , a = Co((()=>{
                    const e = n.findScenario(Me.RG.PostALT);
                    i.current = null == t ? void 0 : t.requestIdleCallback((()=>{
                        null == e || e.stop(void 0, "success", {
                            scenarioPriority: "P2",
                            data: [{
                                key: "App",
                                value: "Post_ALT"
                            }]
                        })
                    }
                    ))
                }
                ), [t, n]);
                So((()=>(e.onPhaseWillComplete({
                    phase: Gt.nh.COMPLETE,
                    onWillComplete: a
                }),
                e.onPhaseWillComplete({
                    phase: Gt.nh.POST_CRITICAL,
                    onWillComplete: ()=>{
                        const e = n.findScenario(Me.RG.PostALT);
                        null == e || e.mark(Me.ck.AppPhasePostCritical)
                    }
                }),
                ()=>{
                    const e = n.findScenario(Me.RG.PostALT);
                    null == e || e.cancel(void 0, {
                        scenarioPriority: "P2",
                        data: []
                    }),
                    i && (null == t || t.cancelIdleCallback(i.current))
                }
                )), [t, e, n, a])
            }
            )(k),
            {
                layoutPhaseStateMachine: k,
                reportFirstPaintCallback: D
            }
        }
          , Zo = (e,t)=>{
            var n;
            const i = null === (n = e.get(Gt.nh.CRITICAL)) || void 0 === n ? void 0 : n.map((e=>e.slotName)).join()
              , a = Object.keys(t).filter((e=>!(null == i ? void 0 : i.includes(e)) && e !== Gt.WL.MODAL)).map((e=>{
                var n, i, a, o;
                return {
                    slotName: e,
                    entityType: null === (i = null === (n = t[e]) || void 0 === n ? void 0 : n.entity) || void 0 === i ? void 0 : i.type,
                    entityAction: null === (o = null === (a = t[e]) || void 0 === a ? void 0 : a.entity) || void 0 === o ? void 0 : o.action
                }
            }
            ));
            return JSON.stringify(a)
        }
          , Xo = (e,t,n)=>{
            var i;
            return (null === (i = e.get(n)) || void 0 === i ? void 0 : i.reduce(((e,n)=>{
                if (n.onPhaseWillCompleteReason === Gt.Ug.PHASE_TIMEOUT_FIRED) {
                    const i = n.slotName
                      , a = t.get(i);
                    e.push({
                        slotName: i,
                        entityAction: null == a ? void 0 : a.action,
                        entityType: null == a ? void 0 : a.type
                    })
                }
                return e
            }
            ), [])) || []
        }
          , $o = ({commandChangeReportingService: e, correlationId: t, entitiesInfo: n, host: i, incompleteSignals: a, layoutTimings: o, scenarioFactory: r, timedOutSlots: s})=>{
            const l = JSON.stringify(s)
              , d = JSON.stringify(a)
              , c = "visible" === i.document.visibilityState
              , u = Object.assign({
                errorCode: _e.B.SlotPhasedRenderingTimedOut,
                incompleteSignals: d,
                isPageVisible: c,
                reason: _e.B.SlotPhasedRenderingTimedOut,
                timedOutSlots: l
            }, n);
            er({
                scenarioData: u,
                scenarioFactory: r
            }),
            e.report({
                correlationId: t,
                type: c ? _e.B.SlotPhasedRenderingTimedOut : _e.B.Abandoned,
                context: {
                    target: Ko,
                    layoutTimings: o,
                    eventData: Object.assign({
                        incompleteSignals: d,
                        isPageVisible: c,
                        timedOutSlots: l
                    }, n)
                }
            })
        }
          , er = ({scenarioFactory: e, scenarioData: t})=>{
            tr({
                scenarioData: t,
                scenarioFactory: e
            }),
            nr({
                scenarioData: t,
                scenarioFactory: e
            })
        }
          , tr = ({scenarioData: e, scenarioFactory: t})=>{
            const n = t.findScenario(Me.RG.ApplicationLaunchTime);
            null == n || n.fail(e)
        }
          , nr = ({scenarioData: e, scenarioFactory: t})=>{
            const n = t.findScenario(Me.RG.ExperienceReady)
              , i = t.findScenario(Me.RG.WindowLaunchTime);
            null == n || n.fail(e),
            null == i || i.fail(e)
        }
          , ir = ({altScenarioService: e, commandChangeReportingService: t, coreSettings: n, correlationId: i, host: a, layoutTimings: o, scenarioFactory: r, entitiesInfo: s, renderData: l})=>{
            ar({
                altScenarioService: e,
                coreSettings: n,
                host: a,
                scenarioFactory: r,
                scenarioData: Object.assign(Object.assign({}, s), {
                    renderData: l
                })
            }),
            t.report({
                correlationId: i,
                type: _e.B.LayoutRendered,
                context: {
                    target: Ko,
                    layoutTimings: o,
                    eventData: Object.assign(Object.assign({}, s), {
                        renderData: l
                    })
                }
            })
        }
          , ar = ({coreSettings: e, host: t, scenarioFactory: n, scenarioData: i})=>{
            or({
                scenarioData: i,
                scenarioFactory: n
            }),
            rr({
                coreSettings: e,
                host: t,
                scenarioFactory: n
            })
        }
          , or = ({scenarioData: e, scenarioFactory: t})=>{
            const n = t.findScenario(Me.RG.ApplicationLaunchTime);
            if (n) {
                n.stop(e);
                const i = t.newScenario(Me.RG.PostALT);
                t.hoistScenarioToCore && t.hoistScenarioToCore(i)
            }
        }
          , rr = ({coreSettings: e, host: t, scenarioFactory: n})=>{
            const i = n.findScenario(Me.RG.ExperienceReady)
              , a = n.findScenario(Me.RG.WindowLaunchTime);
            a && (e.get(p.J.Core).enableFetchWltInfoFromHost ? (a.pause({
                reason: S.jK.WaitToFetchMore
            }),
            null == i || i.pause({
                reason: S.jK.WaitToFetchMore
            }),
            t.opener.requestMessage(W.rY.GetWindowLaunchSubSteps, {
                windowId: a.eventData["Panel.WindowID"],
                action: "er:rendererWltMarkers"
            }).then((e=>{
                a.resume(),
                null == i || i.resume();
                const t = Object.assign(Object.assign({}, e && e.data), {
                    elapsed: n.timestamp() - a.getTotalPauseDuration()
                });
                if (sr(a, t),
                i) {
                    const e = i.eventData.delta || n.timestamp()
                      , t = Object.assign(Object.assign({}, i.eventData), {
                        delta: e - i.getTotalPauseDuration()
                    });
                    sr(i, t)
                }
            }
            )).catch((()=>{
                sr(a),
                i && sr(i)
            }
            ))) : (a.stop(),
            null == i || i.stop()))
        }
          , sr = (e,t)=>{
            e.resume(),
            e.stop(t)
        }
          , lr = (e,t)=>Yo((()=>e.reduce(((e,n)=>{
            if (n && n !== Gt.WL.MODAL) {
                const i = t[n];
                i && i.entity && e.set(n, i.entity)
            }
            return e
        }
        ), new Map)), [t, e])
          , dr = e=>{
            const {action: t, type: n} = e || {}
              , i = Yo((()=>({
                mainEntityAction: t,
                mainEntityType: n
            })), [t, n])
              , a = Jo(i);
            return a.current !== i && (a.current = i),
            a
        }
          , cr = (e,t)=>{
            var n;
            return (null === (n = e.get(t)) || void 0 === n ? void 0 : n.reduce(((e,t)=>e.concat(t.incompleteSignals || [])), [])) || []
        }
          , ur = (e,t,n,i,a)=>{
            e.get(p.J.Core).enableReportFirstPaint && i.schedule((()=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                var e;
                const t = yield n.loadModule("core");
                null === (e = null == t ? void 0 : t.reportFirstPaint) || void 0 === e || e.call(t, a)
            }
            ))), {
                priority: Ei.vW.RenderBlocking,
                id: "app-phase-fire-first-paint",
                scheduledById: "core-layout"
            }, t)
        }
          , {useCallback: gr, useLayoutEffect: mr} = s
          , {useCallback: pr, useMemo: vr, useEffect: hr, useRef: yr, useState: Ar} = s
          , fr = ({commandReportingCallbacks: e, correlationIdRef: t, enableSlotRevealOnViewTransition: n, hasBackdropEffect: i, layoutPhaseStateMachine: a, loadSlotElement: o, shouldErrorOnEntityCommandTimeout: r=!1, enableSlotTransition: s=!1, slotApp: l, variables: {areEmptySlotsTransparent: d, isSlotBackgroundTransparent: c}})=>{
            const {appRenderMode: u, entity: g, entityCacheBuster: v=0, entityWithoutOptions: h, getAppPhases: y, getAppViewEntitiesProps: A, getEntityOptions: f, manifest: b, render: C, slotName: S, updateEntity: I, updateEntityState: k, viewEntityName: N="mainEntity"} = l || {}
              , E = null == b ? void 0 : b.id
              , T = pr(((e,t)=>u && g && h && f && I && k && o({
                appId: E,
                appRenderMode: u,
                enableSlotTransition: s,
                entity: g,
                entityCacheBuster: v,
                entityWithoutOptions: h,
                getEntityOptions: f,
                phaseStateMachine: t,
                render: e,
                shouldErrorOnEntityCommandTimeout: r,
                slotName: S,
                updateEntity: I,
                updateEntityState: k,
                viewEntityName: N
            }) || null), [E, u, s, g, v, h, f, o, r, S, I, k, N])
              , w = Bi({
                appRenderMode: u,
                correlationIdRef: t,
                entity: g,
                getAppPhases: y,
                slotName: S
            })
              , M = Cr({
                appRenderMode: u,
                areEmptySlotsTransparent: d,
                entity: g,
                getAppViewEntitiesProps: A,
                hasBackdropEffect: i,
                viewEntityName: N
            })
              , {enableRevealLayoutSlots: D=!1, enableRevealLayoutSlotsOnViewTransition: L=!1} = (0,
            m.NC)(p.J.Core, ["enableRevealLayoutSlots", "enableRevealLayoutSlotsOnViewTransition"])
              , [O,B] = Ar(!D);
            let j = O;
            const P = yr(w);
            P.current !== w && D && L && n && (P.current = w,
            j = !1,
            B(!1)),
            br({
                revealSlot: O,
                setRevealSlot: B
            }),
            Ir({
                commandReportingCallbacks: e,
                slotPhaseStateMachine: w
            }),
            (({enableRevealLayoutSlots: e, layoutPhaseStateMachine: t, setRevealSlot: n, slotName: i, slotPhaseStateMachine: a})=>{
                const o = gr((({appPhase: i, slotName: a})=>({incompleteSignals: o, onPhaseWillCompleteReason: r})=>{
                    a && (t.fireSignals({
                        incompleteSignals: o,
                        signals: [Di(a, i)],
                        slotOnPhaseWillCompleteReason: r
                    }),
                    i === Gt.nh.CRITICAL && e && n(!0))
                }
                ), [e, t, n]);
                mr((()=>{
                    a.onPhaseWillComplete({
                        phase: Gt.nh.CRITICAL,
                        onWillComplete: o({
                            slotName: i,
                            appPhase: Gt.nh.CRITICAL
                        })
                    }),
                    a.onPhaseWillComplete({
                        phase: Gt.nh.POST_CRITICAL,
                        onWillComplete: o({
                            slotName: i,
                            appPhase: Gt.nh.POST_CRITICAL
                        })
                    })
                }
                ), [o, i, a])
            }
            )({
                enableRevealLayoutSlots: D,
                layoutPhaseStateMachine: a,
                setRevealSlot: B,
                slotName: S,
                slotPhaseStateMachine: w
            }),
            Uo({
                slotName: S,
                slotPhaseStateMachine: w
            });
            return {
                slot: Sr({
                    loadSlotCallback: T,
                    phaseStateMachine: w,
                    render: C
                }),
                variables: Object.assign(Object.assign({}, M), {
                    areEmptySlotsTransparent: d,
                    isSlotBackgroundTransparent: c || M.isBackgroundTransparent,
                    revealSlot: j
                })
            }
        }
          , br = ({revealSlot: e, setRevealSlot: t})=>{
            const {enableRevealLayoutSlots: n=!1, revealLayoutSlotsTimeout: i} = (0,
            m.NC)(p.J.Core, ["enableRevealLayoutSlots", "revealLayoutSlotsTimeout"])
              , {host: a} = (0,
            g.SE)()
              , o = yr(void 0)
              , r = pr((()=>{
                a.clearTimeout(o.current),
                o.current = void 0
            }
            ), [a]);
            hr((()=>(!e && n && (o.current = a.setTimeout((()=>{
                e || t(!0)
            }
            ), i || 25e3)),
            e && n && r(),
            ()=>{
                n && r()
            }
            )), [r, n, a, i, e, t])
        }
          , Cr = ({appRenderMode: e, areEmptySlotsTransparent: t, entity: n, getAppViewEntitiesProps: i, hasBackdropEffect: a, viewEntityName: o})=>{
            const {coreSettings: r} = (0,
            g.SE)();
            return vr((()=>{
                var s;
                const l = null === (s = null == i ? void 0 : i({
                    areEmptySlotsTransparent: t,
                    coreSettings: r,
                    entity: n,
                    hasBackdropEffect: a
                })) || void 0 === s ? void 0 : s[o]
                  , d = null == l ? void 0 : l[e];
                return Object.assign({
                    areSlotShadowsDisabled: !0,
                    isBackgroundTransparent: !1,
                    isColorSchemeDefaultBackground3: !1,
                    isColorSchemeDefaultBackground6: !1,
                    isHideInfoPaneDisabled: !1
                }, d)
            }
            ), [e, t, r, n, i, a, o])
        }
          , Sr = ({loadSlotCallback: e, phaseStateMachine: t, render: n})=>vr((()=>n && e(n, t)), [e, t, n])
          , Ir = ({commandReportingCallbacks: {markCommandScenarioStep: e}, slotPhaseStateMachine: t})=>{
            const n = yr(!1)
              , i = pr((t=>{
                e(t)
            }
            ), [e])
              , a = yr(t);
            a.current !== t && (a.current.unRegisterOnFireSignal(i),
            a.current = t,
            t.registerOnFireSignal(i)),
            n.current || (t.registerOnFireSignal(i),
            n.current = !0)
        }
          , {useLayoutEffect: kr} = s;
        var Nr = n(725259);
        const {useRef: Er} = s
          , {createContext: Tr, memo: wr, useContext: Mr, useMemo: Dr} = s
          , Lr = Tr({});
        Lr.displayName = "LayoutPhaseStateMachineContext";
        const Or = wr((({children: e, layoutPhaseStateMachine: t})=>{
            const n = Dr((()=>({
                layoutPhaseStateMachine: t
            })), [t]);
            return (0,
            o.t)(Lr.Provider, Object.assign({
                value: n
            }, {
                children: e
            }))
        }
        ));
        Or.displayName = "LayoutPhaseStateMachineContextProvider";
        const Br = ()=>Mr(Lr);
        var jr = n(52704);
        const {memo: Pr, useRef: Rr} = s
          , xr = Pr((({appPhase: e, event: t})=>{
            const n = Rr(!1)
              , i = (0,
            Jn.WD)(e)
              , a = (0,
            l.JQ)();
            return i && !n.current && (n.current = !0,
            a.generateEvent({
                event: t
            })),
            null
        }
        ));
        xr.displayName = "UNSAFE_DeferredEventEmitter";
        const {memo: Fr, useRef: _r} = s
          , Wr = Fr((({layoutPhaseStateMachineInstanceCount: e})=>(0,
        o.t)(r.Fragment, {
            children: [(0,
            o.t)(xr, {
                appPhase: Gt.nh.POST_CRITICAL,
                event: d.U3.postCriticalAppPhaseReached()
            }, `${e}-${Gt.nh.POST_CRITICAL}`), (0,
            o.t)(xr, {
                appPhase: Gt.nh.COMPLETE,
                event: d.U3.completeAppPhaseReached()
            }, `${e}-${Gt.nh.COMPLETE}`)]
        })));
        Wr.displayName = "AppPhaseOnEveryPhaseCycleManagement";
        const zr = ()=>{
            const {layoutPhaseStateMachine: e} = Br();
            return Hr(e)
        }
          , Qr = ()=>{
            const {layoutPhaseStateMachine: e} = Br();
            return Ur(e)
        }
          , Hr = e=>{
            const t = (0,
            jr.xS)();
            return Vr(e, t || !1)
        }
          , Ur = e=>{
            const t = (0,
            jr.UG)();
            return Vr(e, t || !1)
        }
          , Vr = (e,t)=>{
            const n = _r(e)
              , i = _r(!1);
            return n.current !== e && (n.current = e,
            i.current = !0),
            !1 === t && (i.current = !1),
            !i.current && t
        }
          , {useMemo: Gr, useRef: Yr} = s;
        var Jr = n(103096)
          , Kr = n(607642);
        const {useMemo: qr} = s
          , Zr = ({error: e})=>{
            const t = (0,
            $t.x)()
              , {coreSettings: n, host: i} = (0,
            g.SE)()
              , a = qr((()=>({
                client: t,
                coreSettings: n
            })), [t, n]);
            return (0,
            o.t)(Jr.FQ, Object.assign({
                coreServices: a
            }, {
                children: (0,
                o.t)(Kr.m, {
                    coreSettings: n,
                    error: e,
                    windowProvider: i,
                    skipFluentThemeProvider: !0
                })
            }))
        }
          , Xr = "layout-error-boundary"
          , $r = (0,
        at.s)({
            errorPage: {
                a9b677: "fly5x3f",
                Bqenvij: "f1l02sjl",
                De3pzq: "f16xq7d1"
            }
        }, {
            d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}"]
        })
          , {useCallback: es, useRef: ts, memo: ns, useMemo: is} = s
          , as = ns((({children: e, correlationId: t, error: n, isOnline: i})=>n ? (0,
        o.t)(r.Fragment, {
            children: [(0,
            o.t)(rs, {
                correlationId: t,
                error: n,
                isOnline: i
            }), e]
        }) : (0,
        o.t)(r.Fragment, {
            children: e
        })));
        as.displayName = "AppLayoutAreasSlotsWithErrorPage";
        function os(e) {
            if (!e)
                return null;
            const t = e.prevError;
            return t ? os(t) : e
        }
        const rs = ns((e=>{
            var t, n;
            const {correlationId: i, error: a, isOnline: r} = e
              , {host: s, loggerFactory: l} = (0,
            g.SE)()
              , d = ts(!1)
              , c = $r()
              , {commandChangeReportingService: u, hostCommunicationService: m, windowId: p} = (0,
            A.i)()
              , v = es((()=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                var e;
                d.current = !0;
                const t = yield m.loadModule("core");
                null === (e = null == t ? void 0 : t.reportFirstPaint) || void 0 === e || e.call(t, p)
            }
            ))), [m, p])
              , h = null == a ? void 0 : a.originSlotName
              , y = is((()=>h ? {
                gridColumn: `${h}-start / -1`,
                gridRow: `${h}-start / -1`
            } : {}), [h]);
            d.current || (v(),
            null === (t = s.preCoreUiAdapter) || void 0 === t || t.hideLoadingScreen());
            const f = l.newLogger("LayoutErrorRenderer", "components-core-layout");
            return (({commandChangeReportingService: e, correlationId: t, errorMessage: n, isOnline: i, logger: a, errorSlotName: o})=>{
                i ? (a.errorToTelemetry && a.errorToTelemetry(`LayoutErrorRendererInner: Caught an error ${o && `in slot name ${o}`} ${n}`, "webclient_framework_foundation_apps_error", void 0, !0),
                t && e.report({
                    correlationId: t,
                    type: _e.B.Failure,
                    context: {
                        target: Xr,
                        errorInfo: We.y.RenderingError,
                        errorMessage: n
                    }
                })) : t && e.report({
                    correlationId: t,
                    type: _e.B.Abandoned,
                    context: {
                        target: Xr,
                        eventData: {
                            errorInfo: We.y.NetworkOffline,
                            errors: n
                        }
                    }
                })
            }
            )({
                commandChangeReportingService: u,
                correlationId: i,
                errorMessage: a.message || (null === (n = os(a)) || void 0 === n ? void 0 : n.message) || "Unknown error",
                isOnline: r,
                logger: f,
                errorSlotName: h
            }),
            (0,
            o.t)("div", Object.assign({
                "data-tid": "layout-error-container",
                style: y
            }, {
                children: (0,
                o.t)(it.W, Object.assign({
                    className: c.errorPage
                }, {
                    children: (0,
                    o.t)(Zr, {
                        error: a
                    })
                }))
            }))
        }
        ));
        rs.displayName = "LayoutErrorContainer";
        const ss = (0,
        n(12143).L)({
            displayName: "AppLayoutArea",
            render(e) {
                var {config: t} = e
                  , n = (0,
                ee.__rest)(e, ["config"]);
                const {classes: i} = t
                  , {area: a, content: r, disableResponsiveContainerMeasured: s, InnerComponent: l, onClick: d, onFocus: c, onMouseEnter: u, onMouseLeave: g, onMouseOver: m, variables: p} = n
                  , {areEmptySlotsTransparent: v} = p || {};
                return (0,
                o.t)("div", Object.assign({
                    className: i.root,
                    "data-tid": `app-layout-area--${a}`,
                    onFocus: c,
                    onMouseEnter: u,
                    onMouseLeave: g,
                    onMouseOver: m,
                    onClick: d
                }, {
                    children: (0,
                    o.t)(l, {
                        area: a,
                        areEmptySlotsTransparent: !!v,
                        content: r,
                        disableResponsiveContainerMeasured: !!s
                    })
                }))
            }
        });
        var ls = n(836382);
        const ds = (0,
        at.s)({
            root: {
                B7ck84d: "f1ewtqcl",
                Bxyxcbc: "f1immsc2",
                B2u0y6b: "f6dzj5z",
                qhf8xq: "f10pi13n",
                B3o57yi: "f1lvyeyc",
                Bmy1vo4: "fg8on96",
                Bkqvd7p: "f12yfnp8",
                Bjjgkbb: "f1ydhi6o",
                Bwpg2vl: "f15ot9ch",
                B5rj40k: "fotbto3",
                i1dmww: "f9j7yib",
                Jbbxp9: "fgapnxa",
                Btcnkxi: "fp7fyc7",
                gkimuv: "fscomfg",
                Bwanp2e: "fj4hbl5",
                B6tlu9v: "fnd27dd",
                Byv0v5i: "f1bz1uzf",
                ghbjq8: "f1c1ydxl",
                u4kzjn: "f1t1u2ct",
                Bytszpz: "f1nfo08k",
                Bcy6rni: "fzkari6",
                ol8xse: "fn47ynk",
                Bs8rldt: "f1hilwmy",
                n3ixyh: "fkhqc4a",
                Bm63lzy: "f317pbp",
                Bk1n23x: "fn3h6uf",
                B150pwh: "f1w5tgp0",
                rrma09: "f18qlix4",
                b63s3i: "f1nhcv8x",
                f3l58m: "f1i6jfn5",
                B2otysp: "fm0kgxf",
                c6wgd: "f145b19v"
            },
            hasUnrevealedSlot: {
                ghbjq8: "f1x1io0m",
                Bs8rldt: "f1ibwaz9",
                Bm63lzy: "f1nqahwa",
                Bk1n23x: "f449nxm",
                B150pwh: "f1w5tgp0",
                rrma09: "f1ffi3py",
                b63s3i: "f1kft3fn"
            },
            hasRevealedSlotFast: {
                Bm63lzy: "f317pbp",
                Bk1n23x: "fn3h6uf"
            },
            hasRevealedSlotNormal: {
                Bm63lzy: "fuddh73",
                Bk1n23x: "f1iwxnic"
            },
            hasRevealedSlotSlow: {
                Bm63lzy: "f1otz31v",
                Bk1n23x: "f15asmrl"
            },
            hasRevealedSlotNone: {
                Bm63lzy: "f98wyho",
                Bk1n23x: "f1hmac3m"
            },
            rootAbsolutePosition: {
                i1dmww: "fd0247y"
            },
            rootRefresh: {
                Bjjgkbb: "f1e7d4dr"
            },
            headerOverlap: {
                Bj3rh1h: "f19g0ac"
            },
            mainOverlappedByHeader: {
                nk6f5a: "fzhq750",
                Ijaq50: "f5vppwq"
            },
            isModalSlot: {
                mc9l5x: "fjseox"
            },
            isEndSlideOutMenu: {
                Bw0ie65: "f6e81ga",
                Br312pm: "f1k8mcff",
                Bdqf98w: "f1a7i8kp",
                Bj3rh1h: "f19g0ac",
                I2l0j4: ["fbp15uu", "fqxarhh"],
                b9odjw: "f1k3w0dc",
                Bw0vnax: "ff9pjhm",
                wnts14: "fenpu2u",
                Bryngbj: "f24bdoh",
                t71scq: "fhdw8k2",
                Blr5jpy: ["f95fbv6", "fksr1qw"]
            },
            isEndAsResponsiveMenuDisabled: {
                abs64n: "fk73vx1",
                Bz10aip: ["f1lrlc1m", "fdupe0o"]
            },
            isSubNavSlideOutMenu: {
                abs64n: "fk73vx1",
                Bz10aip: ["fdupe0o", "f1lrlc1m"]
            },
            alignRightBorderToSlot: {
                Bwybowo: ["fkzqvwt", "f1dljhce"]
            },
            alignRightBorderToSlotWithShadow: {
                Bwybowo: ["fxsko08", "f1hvj9nc"]
            },
            isSubNavDisplayedAsResponsiveMenu: {
                Bw0ie65: "f6e81ga",
                Br312pm: "f1k8mcff",
                Bj3rh1h: "fruyk1d",
                I2l0j4: ["fqxarhh", "fbp15uu"],
                b9odjw: "f1k3w0dc",
                Bw0vnax: "ff9pjhm",
                wnts14: "fenpu2u",
                Bryngbj: "f24bdoh",
                t71scq: "fhdw8k2"
            },
            isStartSlotInLayoutTemplate: {
                Br312pm: "f11rur5c"
            },
            layoutHasContextualBanner: {
                nk6f5a: "fy2cdzf",
                Ijaq50: "f1fq42vu",
                Frg6f3: ["f12lm4oi", "fzaimmi"],
                t21cq0: ["fzaimmi", "f12lm4oi"],
                B6of3ja: "f2zxqi",
                Bqenvij: "fbhnoac",
                Bkecrkj: "f1aehjj5",
                Bj3rh1h: "f19g0ac",
                B5rj40k: "f1tcogh",
                df2hfo: "fbexwq1",
                Bunoz8w: "fhfp3qr",
                Bjjgkbb: "fu8uai"
            },
            layoutHasToasts: {
                qb2dma: "f1locze1",
                Bw0ie65: "f1xbg3a5",
                Br312pm: "f1ferlbs",
                Ijaq50: "f1fq42vu",
                jrapky: "febqm8h",
                Frg6f3: ["fb5scp", "f17vyym1"],
                Bxyxcbc: "feialds",
                Bmxbyg5: "f1sil6mw",
                Bkecrkj: "f1aehjj5",
                a9b677: "f1nfxovz",
                Bj3rh1h: "f1xzzxzq",
                Bjjgkbb: "fu8uai"
            },
            isMonitorSlotHidden: {
                Bcdw1i0: "fd7fpy0"
            },
            layoutHasMonitorSlot: {
                qb2dma: "f1locze1",
                qhf8xq: "f1euv43f",
                Bj3rh1h: "f19g0ac",
                Bjjgkbb: "fu8uai"
            },
            layoutHasNotificationsSlot: {
                qhf8xq: "f19dog8a",
                B5kzvoi: "f1yab3r1",
                j35jbq: ["f1e31b4d", "f1vgc2s3"],
                a9b677: "fzf11s",
                Bj3rh1h: "fwzwc6",
                Bjjgkbb: "fu8uai"
            },
            areToastsPositionedOverMain: {
                Br312pm: "fmpy2un"
            },
            isSlotBackgroundTransparent: {
                Bjjgkbb: "fu8uai"
            },
            isSlotBackgroundSemiTransparent: {
                Bjjgkbb: "f1b67lzz"
            },
            isSlotBackground5: {
                Bjjgkbb: "f1i2lldz"
            },
            isSlotBackground2: {
                Bjjgkbb: "f1bz1z4x"
            },
            isSlotBackground4: {
                Bjjgkbb: "fg277wn"
            },
            isSlotBackground7: {
                Bjjgkbb: "f101xyx"
            },
            hasSlotShadows: {
                I2l0j4: ["f8wh5i2", "f9y4y76"],
                b9odjw: "f1k3w0dc",
                Bw0vnax: "ff9pjhm",
                Bxttx2y: "f1nc9g5w",
                wnts14: "fenpu2u",
                Bryngbj: "f24bdoh",
                Bwybowo: ["fkzqvwt", "f1dljhce"],
                t71scq: "f1ayyb4l"
            },
            hasSlotShadowsDark: {
                Bxttx2y: "f1uzr8lw"
            },
            hasSlotShadowsContrast: {
                I2l0j4: "f1rftzi8",
                Bhw5e9: "f1nz9k85",
                J5jmgp: ["f1q6zwnb", "f1875fox"],
                ivldt9: ["faz6h7y", "f1l251e6"],
                Bobdr91: ["f1w25fya", "f1aw164g"],
                t71scq: "ffpzml8",
                Bxttx2y: "f1ykdznj"
            },
            subNavSlotBorderOnHover: {
                a9b677: "f1kiy1dk",
                B39123g: ["f150nix6", "f6ogs8q"],
                Bqenvij: "f1l02sjl",
                j35jbq: ["f1e31b4d", "f1vgc2s3"],
                Bj3rh1h: "fx8oaxl",
                qhf8xq: "f10pi13n",
                Bes5x83: "f7tn8ke",
                eoavqd: "f1ss85ro",
                Jwef8y: "flr1dha"
            },
            endSlotBorderOnHover: {
                a9b677: "f1kiy1dk",
                B39123g: ["f6ogs8q", "f150nix6"],
                Bqenvij: "f1l02sjl",
                oyh7mz: ["f1vgc2s3", "f1e31b4d"],
                qhf8xq: "f10pi13n",
                Bes5x83: "f7tn8ke",
                eoavqd: "f1ss85ro",
                Jwef8y: "flr1dha"
            },
            floatableSlot: {
                qhf8xq: "f1euv43f",
                Bj3rh1h: "f1xzzxzq"
            }
        }, {
            d: [".f1ewtqcl{box-sizing:border-box;}", ".f1immsc2{max-height:100%;}", ".f6dzj5z{max-width:100%;}", ".f10pi13n{position:relative;}", ".f1lvyeyc{transition-duration:236ms;}", ".fg8on96{transition-property:height;}", ".f12yfnp8{transition-timing-function:cubic-bezier(0,0,.2,1);}", ".f1ydhi6o>div{background-color:var(--colorNeutralBackground3);}", ".f15ot9ch>div{display:flex;}", ".fotbto3>div{height:100%;}", ".f9j7yib>div{position:relative;}", ".fgapnxa>div{width:100%;}", ".fp7fyc7>div>div:not(.slot-transition){min-height:100%;}", ".fscomfg>div>div:not(.slot-transition){min-width:100%;}", ".fj4hbl5>div>.slot-transition{display:flex;}", ".fnd27dd>div>.slot-transition>div{min-height:100%;}", ".f1bz1uzf>div>.slot-transition>div{min-width:100%;}", ".f1c1ydxl>div>div{opacity:1;}", ".f1t1u2ct>div::before{-webkit-backface-visibility:hidden;backface-visibility:hidden;}", ".f1nfo08k>div::before{background-color:inherit;}", ".fzkari6>div::before{content:'';}", ".fn47ynk>div::before{height:100%;}", ".f1hilwmy>div::before{opacity:0;}", ".fkhqc4a>div::before{position:absolute;}", ".f317pbp>div::before{transition-delay:0ms,112ms;}", ".fn3h6uf>div::before{transition-duration:112ms,0ms;}", ".f1w5tgp0>div::before{transition-property:opacity,visibility;}", ".f18qlix4>div::before{transition-timing-function:cubic-bezier(0.3, 0, 0.6, 1);}", ".f1nhcv8x>div::before{visibility:hidden;}", ".f1i6jfn5>div::before{width:100%;}", ".fm0kgxf>div::before{z-index:3;}", ".f145b19v>div::after{z-index:1;}", ".f1x1io0m>div>div{opacity:0;}", ".f1ibwaz9>div::before{opacity:1;}", ".f1nqahwa>div::before{transition-delay:0ms;}", ".f449nxm>div::before{transition-duration:0ms;}", ".f1ffi3py>div::before{transition-timing-function:step-start;}", ".f1kft3fn>div::before{visibility:visible;}", ".fuddh73>div::before{transition-delay:0ms,146ms;}", ".f1iwxnic>div::before{transition-duration:146ms,0ms;}", ".f1otz31v>div::before{transition-delay:0ms,172ms;}", ".f15asmrl>div::before{transition-duration:172ms,0ms;}", ".f98wyho>div::before{transition-delay:0ms,0ms;}", ".f1hmac3m>div::before{transition-duration:0ms,0ms;}", ".fd0247y>div{position:absolute;}", ".f1e7d4dr>div{background-color:var(--colorNeutralBackground1);}", ".f19g0ac{z-index:1;}", ".fzhq750{grid-row-end:main-end!important;}", ".f5vppwq{grid-row-start:header-start!important;}", ".fjseox{display:none;}", ".f6e81ga{grid-column-end:main-end!important;}", ".f1k8mcff{grid-column-start:main-start!important;}", ".f1a7i8kp{justify-self:end;}", ".fbp15uu>div::after{background-image:linear-gradient(to left, var(--colorNeutralShadowKey), 20%, transparent);}", ".fqxarhh>div::after{background-image:linear-gradient(to right, var(--colorNeutralShadowKey), 20%, transparent);}", ".f1k3w0dc>div::after{content:'';}", ".ff9pjhm>div::after{height:100%;}", ".fenpu2u>div::after{pointer-events:none;}", ".f24bdoh>div::after{position:absolute;}", ".fhdw8k2>div::after{width:.8rem;}", ".f95fbv6>div::after{left:-0.8rem;}", ".fksr1qw>div::after{right:-0.8rem;}", ".fk73vx1{opacity:0;}", ".f1lrlc1m{transform:translate(261rem, 0);}", ".fdupe0o{transform:translate(-261rem, 0);}", ".fkzqvwt>div::after{right:0;}", ".f1dljhce>div::after{left:0;}", ".fxsko08>div::after{right:-.8rem;}", ".f1hvj9nc>div::after{left:-.8rem;}", ".fruyk1d{z-index:100;}", ".f11rur5c{grid-column-start:start-start;}", ".fy2cdzf{grid-row-end:auto!important;}", ".f1fq42vu{grid-row-start:main!important;}", ".f12lm4oi{margin-left:20px;}", ".fzaimmi{margin-right:20px;}", ".f2zxqi{margin-top:8px;}", ".fbhnoac{height:40px;}", ".f1aehjj5{pointer-events:none;}", ".f1tcogh>div{height:auto;}", ".fbexwq1>div{max-height:60px;}", ".fhfp3qr>div{overflow-y:hidden;}", ".fu8uai>div{background-color:transparent;}", ".f1locze1{align-self:end;}", ".f1xbg3a5{grid-column-end:auto!important;}", ".f1ferlbs{grid-column-start:sub-nav!important;}", ".febqm8h{margin-bottom:8px;}", ".fb5scp{margin-left:16px;}", ".f17vyym1{margin-right:16px;}", ".feialds{max-height:256px;}", ".f1sil6mw{overflow-y:hidden;}", ".f1nfxovz{width:320px;}", ".f1xzzxzq{z-index:1001;}", ".fd7fpy0{visibility:hidden;}", ".f1euv43f{position:absolute;}", ".f19dog8a{position:fixed;}", ".f1yab3r1{bottom:0;}", ".f1e31b4d{right:0;}", ".f1vgc2s3{left:0;}", ".fzf11s{width:36rem;}", ".fwzwc6{z-index:1002;}", ".fmpy2un{grid-column-start:main!important;}", ".f1b67lzz>div{background-color:var(--colorNeutralBackgroundAlpha);}", ".f1i2lldz>div{background-color:var(--colorNeutralBackground5);}", ".f1bz1z4x>div{background-color:var(--colorNeutralBackground2);}", ".fg277wn>div{background-color:var(--colorNeutralBackground4);}", ".f101xyx>div{background-color:var(--colorDefaultBackground7);}", ".f8wh5i2>div::after{background-image:linear-gradient(to right, transparent, #000);}", ".f9y4y76>div::after{background-image:linear-gradient(to left, transparent, #000);}", ".f1nc9g5w>div::after{opacity:0.08;}", ".f1ayyb4l>div::after{width:8px;}", ".f1uzr8lw>div::after{opacity:0.25;}", ".f1rftzi8>div::after{background-image:initial;}", ".f1nz9k85>div::after{background-color:transparent;}", ".f1q6zwnb>div::after{border-right-width:1px;}", ".f1875fox>div::after{border-left-width:1px;}", ".faz6h7y>div::after{border-right-style:solid;}", ".f1l251e6>div::after{border-left-style:solid;}", ".f1w25fya>div::after{border-right-color:var(--colorTransparentStroke);}", ".f1aw164g>div::after{border-left-color:var(--colorTransparentStroke);}", ".ffpzml8>div::after{width:1px;}", ".f1ykdznj>div::after{opacity:1;}", ".f1kiy1dk{width:5px!important;}", ".f150nix6{float:right;}", ".f6ogs8q{float:left;}", ".f1l02sjl{height:100%;}", ".fx8oaxl{z-index:99;}"],
            h: [".f7tn8ke:hover{width:7px;}", ".f1ss85ro:hover{cursor:ew-resize;}", ".flr1dha:hover{background-color:var(--colorNeutralForeground1Hover);}"]
        })
          , {useRef: cs, useCallback: us, useState: gs} = s
          , ms = 10
          , ps = e=>{
            const {area: t} = e
              , {host: {document: n, innerWidth: i}} = (0,
            g.SE)()
              , a = (0,
            l.JQ)()
              , r = cs({
                x: 0,
                y: 0
            })
              , s = cs({
                slotName: void 0,
                width: void 0
            })
              , c = cs(null)
              , u = ds()
              , [m,p] = gs({
                left: "0"
            })
              , [v,h] = gs({
                right: "0"
            })
              , y = us((e=>{
                r.current = {
                    x: e.clientX,
                    y: e.clientY
                }
            }
            ), [])
              , A = us((e=>{
                const n = e.clientX;
                c.current && hs({
                    clientX: n,
                    dragStartPositionRef: r,
                    setEndInlineStyles: p,
                    setSubNavInlineStyles: h,
                    slotName: t
                })
            }
            ), [t])
              , f = us((e=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                const o = e.clientX
                  , r = (o - 68) / ms
                  , l = Math.abs((o - i) / ms);
                c.current && vs({
                    endSlotWidth: l,
                    eventing: a,
                    reactEvent: e,
                    setEndInlineStyles: p,
                    setSubNavInlineStyles: h,
                    slotName: t,
                    slotNameAndWidthRef: s,
                    subNavWidth: r
                }),
                n.removeEventListener("mousemove", A),
                n.removeEventListener("mouseup", f)
            }
            ))), [t, n, a, i, A])
              , b = us((e=>{
                e.preventDefault(),
                e.stopPropagation(),
                n.addEventListener("mousemove", A),
                n.addEventListener("mouseup", f),
                y(e)
            }
            ), [n, A, f, y])
              , C = us((e=>{
                r.current = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY
                }
            }
            ), [])
              , S = us((e=>{
                const n = e.touches[0].clientX;
                c.current && hs({
                    clientX: n,
                    dragStartPositionRef: r,
                    setEndInlineStyles: p,
                    setSubNavInlineStyles: h,
                    slotName: t
                })
            }
            ), [t])
              , I = us((e=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                const o = e.changedTouches[0].clientX
                  , r = (o - 68) / ms
                  , l = Math.abs((o - i) / ms);
                c.current && vs({
                    endSlotWidth: l,
                    eventing: a,
                    reactEvent: e,
                    setEndInlineStyles: p,
                    setSubNavInlineStyles: h,
                    slotName: t,
                    slotNameAndWidthRef: s,
                    subNavWidth: r
                }),
                n.removeEventListener("touchmove", S),
                n.removeEventListener("touchend", I)
            }
            ))), [t, n, a, i, S])
              , k = us((e=>{
                e.preventDefault(),
                e.stopPropagation(),
                n.addEventListener("touchmove", S),
                n.addEventListener("touchend", I),
                C(e)
            }
            ), [n, S, C, I])
              , N = us((e=>(0,
            ee.__awaiter)(void 0, void 0, void 0, (function*() {
                var n, o;
                if (c.current) {
                    const r = Math.abs(((null === (n = c.current.getBoundingClientRect()) || void 0 === n ? void 0 : n.left) - 68) / ms)
                      , l = Math.abs(((null === (o = c.current.getBoundingClientRect()) || void 0 === o ? void 0 : o.left) - i) / ms);
                    t === Gt.WL.END ? "ArrowLeft" === e.key ? s.current = {
                        slotName: Gt.WL.END,
                        width: `${l + 10}rem`
                    } : "ArrowRight" === e.key && (s.current = {
                        slotName: Gt.WL.END,
                        width: l - 10 + "rem"
                    }) : "ArrowRight" === e.key ? s.current = {
                        slotName: Gt.WL.SUBNAV,
                        width: `${r + 10}rem`
                    } : "ArrowLeft" === e.key && (s.current = {
                        slotName: Gt.WL.SUBNAV,
                        width: r - 10 + "rem"
                    }),
                    (r || l) && a.bubble({
                        event: d.U3.resizeSlot((()=>s.current)),
                        reactEvent: e
                    })
                }
            }
            ))), [t, a, i])
              , E = us((e=>{
                e.preventDefault(),
                N(e)
            }
            ), [N]);
            return (0,
            o.t)("div", {
                "data-tid": "slot-resizer",
                ref: c,
                className: t === Gt.WL.SUBNAV ? u.subNavSlotBorderOnHover : u.endSlotBorderOnHover,
                style: t === Gt.WL.SUBNAV ? v : m,
                onMouseDown: b,
                onTouchStart: k,
                onKeyDown: E
            })
        }
        ;
        ps.displayName = "AppLayoutAreaSlotResizer";
        const vs = ({endSlotWidth: e, eventing: t, reactEvent: n, setEndInlineStyles: i, setSubNavInlineStyles: a, slotName: o, slotNameAndWidthRef: r, subNavWidth: s})=>{
            switch (o) {
            case Gt.WL.END:
                r.current = {
                    slotName: Gt.WL.END,
                    width: `${e}rem`
                },
                i({
                    left: "0"
                });
                break;
            case Gt.WL.SUBNAV:
                r.current = {
                    slotName: Gt.WL.SUBNAV,
                    width: `${s}rem`
                },
                a({
                    right: "0"
                })
            }
            t.bubble({
                event: d.U3.resizeSlot((()=>r.current)),
                reactEvent: n
            })
        }
          , hs = ({clientX: e, dragStartPositionRef: t, setEndInlineStyles: n, setSubNavInlineStyles: i, slotName: a})=>{
            switch (a) {
            case Gt.WL.END:
                n({
                    left: e - t.current.x + "px"
                });
                break;
            case Gt.WL.SUBNAV:
                i({
                    right: t.current.x - e + "px"
                })
            }
        }
          , {memo: ys, useCallback: As, useEffect: fs, useRef: bs} = s
          , Cs = 100
          , Ss = ys((({bounds: e, cancelJob: t, children: n, className: i, headerHeight: a, scheduleJob: r, style: s})=>{
            const l = bs(null)
              , d = bs(null)
              , c = bs({
                x: 0,
                y: 0
            })
              , u = bs({
                x: 0,
                y: 0
            })
              , g = bs({
                x: 0,
                y: 0
            })
              , m = bs({
                x: 0,
                y: 0,
                height: 0,
                width: 0
            })
              , p = As((t=>{
                d.current || (c.current = {
                    x: t.clientX - g.current.x,
                    y: t.clientY - g.current.y
                },
                m.current.x + c.current.x > e.right - m.current.width ? u.current.x = e.right - m.current.width - m.current.x : m.current.x + c.current.x < e.left ? u.current.x = e.left - m.current.x : u.current.x = c.current.x,
                m.current.y + c.current.y > e.bottom - m.current.height ? u.current.y = e.bottom - m.current.height - m.current.y : m.current.y + c.current.y < e.top ? u.current.y = e.top - m.current.y : u.current.y = c.current.y,
                d.current = r((()=>{
                    l.current && (l.current.style.transform = `translate3d(${u.current.x}px, ${u.current.y}px, 0px)`),
                    d.current = null
                }
                )))
            }
            ), [e.bottom, e.left, e.right, e.top, r])
              , v = As((n=>{
                if (d.current && (t(d.current),
                d.current = null),
                l.current) {
                    l.current.removeEventListener("pointermove", p),
                    l.current.removeEventListener("pointerup", v),
                    l.current.removeEventListener("pointercancel", v);
                    const t = `${m.current.x + u.current.x}px`
                      , n = `${m.current.y + u.current.y}px`
                      , i = Cs * parseFloat(t) / e.right
                      , a = Cs * parseFloat(n) / e.bottom
                      , o = `max(${i}%, ${e.left}px)`
                      , r = Cs * e.right / e.right
                      , s = Cs * e.bottom / e.bottom;
                    l.current.style.left = `min(${o}, ${r}% - ${m.current.width}px)`;
                    const d = `max(${a}%, ${e.top}px)`;
                    l.current.style.top = `min(${d}, ${s}% - ${m.current.height}px)`,
                    l.current.style.transform = "translate3d(0px,0px,0px)"
                }
                c.current = {
                    x: 0,
                    y: 0
                },
                u.current = {
                    x: 0,
                    y: 0
                }
            }
            ), [e, t, p])
              , h = As((e=>{
                var t, n, i, a, o;
                e.preventDefault(),
                e.stopPropagation(),
                m.current = (null === (t = l.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) || {},
                g.current = {
                    x: e.clientX,
                    y: e.clientY
                },
                l.current && (l.current.removeEventListener("pointermove", p),
                l.current.removeEventListener("pointerup", v),
                l.current.removeEventListener("pointercancel", v),
                null === (n = l.current) || void 0 === n || n.setPointerCapture(e.pointerId),
                null === (i = l.current) || void 0 === i || i.addEventListener("pointermove", p),
                null === (a = l.current) || void 0 === a || a.addEventListener("pointerup", v),
                null === (o = l.current) || void 0 === o || o.addEventListener("pointercancel", v))
            }
            ), [v, p]);
            fs((()=>{
                var e;
                null === (e = l.current) || void 0 === e || e.addEventListener("pointerdown", h, !1);
                const t = l.current;
                return ()=>{
                    null == t || t.removeEventListener("pointerdown", h, !1),
                    null == t || t.removeEventListener("pointermove", p),
                    null == t || t.removeEventListener("pointerup", v),
                    null == t || t.removeEventListener("pointercancel", v)
                }
            }
            ), [h, p, v]);
            const y = As((e=>e.stopPropagation()), []);
            return (0,
            o.t)("div", Object.assign({
                className: i,
                "data-tid": "draggable-wrapper",
                ref: l,
                style: Object.assign(Object.assign({}, s), {
                    contain: "layout",
                    overflow: "hidden",
                    willChange: "left, top, transform"
                })
            }, {
                children: [(0,
                o.t)("div", {
                    "data-tid": "draggable-header",
                    style: {
                        cursor: "move",
                        height: a,
                        position: "absolute",
                        width: "100%",
                        zIndex: 1
                    }
                }), (0,
                o.t)("div", Object.assign({
                    "data-tid": "draggable-content",
                    onPointerDownCapture: y
                }, {
                    children: n
                }))]
            }))
        }
        ));
        Ss.displayName = "Draggable";
        var Is = n(56981);
        const {memo: ks, useCallback: Ns} = s
          , Es = ks((({children: e, draggableHeaderHeight: t, bounds: n, areaRectangle: i, className: a})=>{
            let r, s;
            const {host: l} = (0,
            g.SE)()
              , d = (0,
            f.w)("FloatableAppLayoutArea")
              , {scheduler: c} = (0,
            A.i)()
              , u = Ns((e=>c.schedule(e, {
                priority: Ei.vW.RenderBlocking,
                id: "await-next-frame",
                scheduledById: "core-layout"
            }, (0,
            se.v4)())), [c])
              , m = Ns((e=>c.cancel(e)), [c])
              , {height: p, width: v, position: h} = i || {
                height: "auto",
                width: "auto"
            }
              , y = {
                bottom: (null == n ? void 0 : n.bottom) || l.innerHeight,
                left: (null == n ? void 0 : n.left) || 0,
                right: (null == n ? void 0 : n.right) || l.innerWidth,
                top: (null == n ? void 0 : n.top) || 0
            };
            switch (y && void 0 === y.bottom && void 0 === y.left && void 0 === y.top && void 0 === y.right || d.warn(`Proper bounds are not provided, bottom: ${y.bottom}, left: ${y.right}, top: ${y.top}, right: ${y.right}`),
            h) {
            case Is.Y.BottomLeft:
                r = "auto" === v ? "" : `${y.left}px`,
                s = "auto" === p ? "" : `calc(100% - ${p})`;
                break;
            case Is.Y.BottomRight:
                r = `calc(100% - ${v})`,
                s = "auto" === p ? "" : `calc(100% - ${p})`;
                break;
            case Is.Y.TopLeft:
                r = "auto" === v ? "" : `${y.left}px`,
                s = `${y.top}px`;
                break;
            case Is.Y.TopRight:
                r = "auto" === v ? "" : `calc(100% - ${v})`,
                s = `${y.top}px`;
                break;
            default:
                r = "0px",
                s = "0px"
            }
            const b = ds()
              , C = (0,
            ui.z)(a, b.floatableSlot);
            return (0,
            o.t)(Ss, Object.assign({
                bounds: y,
                cancelJob: m,
                className: C,
                headerHeight: t,
                scheduleJob: u,
                style: {
                    height: p,
                    left: r,
                    top: s,
                    width: v
                }
            }, {
                children: e
            }))
        }
        ));
        Es.displayName = "FloatableAppLayoutArea";
        const {forwardRef: Ts, memo: ws, useMemo: Ms} = s
          , Ds = ws(Ts(((e,t)=>{
            const {area: n, bounds: i, content: a, disableResponsiveContainerMeasured: r, height: s, InnerComponent: l, onAreaMeasurementsAvailable: d, style: c, variables: u, width: g} = e
              , {areEmptySlotsTransparent: v, areaRectangle: h, draggableAreaHeight: y, isColorSchemeDefaultBackground3: A, isColorSchemeDefaultBackground2: f, isColorSchemeDefaultBackground4: b, isColorSchemeDefaultBackground6: C, isSlotBackgroundSemiTransparent: S, isFloatable: I} = null != u ? u : {}
              , k = (0,
            ci.n)("div", Object.assign({
                "data-tid": `app-layout-area--${n}`
            }, e))
              , {enableDraggableSlots: E, enableVisualRefreshBackground: T} = (0,
            m.NC)(p.J.Core, ["enableDraggableSlots", "enableVisualRefreshBackground"])
              , w = !!T
              , M = ds()
              , D = (0,
            ls.z)()
              , L = (0,
            ui.z)("fui-AppLayoutArea", e.className, M.root, !!E && M.rootAbsolutePosition, n === Gt.WL.MODAL && M.isModalSlot, w && D === N.f8.Light && M.rootRefresh, _s({
                area: n,
                styles: M
            }), Ls({
                styles: M,
                variables: u
            }), Ws({
                styles: M,
                variables: u
            }), zs({
                styles: M,
                variables: u
            }), Os({
                area: n,
                styles: M,
                variables: u
            }), js({
                styles: M,
                variables: u,
                themeType: D
            }), Ps({
                styles: M,
                themeType: D,
                variables: u
            }), Rs({
                area: n,
                styles: M,
                variables: u
            }), xs({
                area: n,
                styles: M,
                variables: u
            }), Fs({
                area: n,
                styles: M,
                variables: u
            }), A && M.isSlotBackground4, f && M.isSlotBackground7, C && M.isSlotBackground5, b && M.isSlotBackground2, S && M.isSlotBackgroundSemiTransparent, Bs({
                styles: M,
                variables: u
            }))
              , O = Ms((()=>Object.assign({}, !I && Object.assign({
                gridArea: n,
                height: s,
                width: g
            }, c))), [n, I, c, s, g])
              , B = Ms((()=>I ? ({children: e, className: t})=>(0,
            o.t)(Es, Object.assign({
                areaRectangle: h,
                bounds: i,
                className: t,
                draggableHeaderHeight: y
            }, {
                children: e
            })) : "div"), [h, i, y, I]);
            return (0,
            o.t)(B, Object.assign({}, k, {
                className: L,
                ref: t,
                style: O
            }, {
                children: [(0,
                o.t)(l, {
                    area: n,
                    areEmptySlotsTransparent: !!v,
                    content: a,
                    disableResponsiveContainerMeasured: !!r,
                    onAreaMeasurementsAvailable: d
                }), (null == u ? void 0 : u.isDraggable) && n && (0,
                o.t)(ps, {
                    area: n
                })]
            }))
        }
        )));
        Ds.displayName = "AppLayoutArea";
        const Ls = ({styles: e, variables: t})=>{
            if (!t)
                return;
            const {isEndAsResponsiveMenuEnabled: n, isEndSlideOutMenu: i} = t;
            return (0,
            ui.z)(i && e.isEndSlideOutMenu, i && !n && e.isEndAsResponsiveMenuDisabled)
        }
          , Os = ({area: e, styles: t, variables: n})=>{
            if (!n)
                return;
            const {doesHeaderOverlapMain: i} = n;
            return (0,
            ui.z)(i && e === Gt.WL.HEADER && t.headerOverlap, i && e === Gt.WL.MAIN && t.mainOverlappedByHeader)
        }
          , Bs = ({styles: e, variables: t})=>{
            if (!t)
                return;
            const {isSubNavDisplayedAsResponsiveMenu: n, isSlotBackgroundTransparent: i} = t;
            return (0,
            ui.z)(i && !n && e.isSlotBackgroundTransparent)
        }
          , js = ({styles: e, variables: t, themeType: n})=>{
            if (!t)
                return;
            const {isStartSlotInLayoutTemplate: i, isSubNavDisplayedAsResponsiveMenu: a, isSubNavSlideOutMenu: o} = t;
            return (0,
            ui.z)(o && !a && e.isSubNavSlideOutMenu, a && e.isSubNavDisplayedAsResponsiveMenu, a && n === N.f8.Contrast && e.alignRightBorderToSlot, a && !(n === N.f8.Contrast) && e.alignRightBorderToSlotWithShadow, a && i && e.isStartSlotInLayoutTemplate)
        }
          , Ps = ({styles: e, themeType: t, variables: n})=>{
            if (!n)
                return;
            const {areSlotShadowsDisabled: i, isSubNavDisplayedAsResponsiveMenu: a} = n;
            return (0,
            ui.z)(!i && !a && e.hasSlotShadows, !i && t === N.f8.Dark && e.hasSlotShadowsDark, !i && t === N.f8.Contrast && e.hasSlotShadowsContrast)
        }
          , Rs = ({area: e, styles: t, variables: n})=>{
            if (!n)
                return;
            const {areToastsPositionedOverMain: i, layoutHasToasts: a} = n;
            return (0,
            ui.z)(a && e === Gt.WL.TOASTS && t.layoutHasToasts, a && e === Gt.WL.TOASTS && i && t.areToastsPositionedOverMain)
        }
          , xs = ({area: e, styles: t, variables: n})=>{
            if (!n)
                return;
            const {layoutHasMonitorSlot: i, isMonitorSlotHidden: a} = n;
            return (0,
            ui.z)(i && e === Gt.WL.MONITOR && t.layoutHasMonitorSlot, a && e === Gt.WL.MONITOR && t.isMonitorSlotHidden)
        }
          , Fs = ({area: e, styles: t, variables: n})=>{
            if (!n)
                return;
            const {layoutHasNotificationsSlot: i} = n;
            return (0,
            ui.z)(i && e === Gt.WL.IN_APP_NOTIFICATIONS && t.layoutHasNotificationsSlot)
        }
          , _s = ({area: e, styles: t})=>(0,
        ui.z)(e === Gt.WL.CONTEXTUAL_NOTIFICATIONS && t.layoutHasContextualBanner)
          , Ws = ({styles: e, variables: t})=>{
            if (!t)
                return;
            const {revealLayoutSlotsAnimationTiming: n, revealSlot: i} = t;
            let a;
            switch (n) {
            case "fast":
            default:
                a = e.hasRevealedSlotFast;
                break;
            case "normal":
                a = e.hasRevealedSlotNormal;
                break;
            case "slow":
                a = e.hasRevealedSlotSlow;
                break;
            case "none":
                a = e.hasRevealedSlotNone
            }
            return (0,
            ui.z)(i && a)
        }
          , zs = ({styles: e, variables: t})=>{
            if (!t)
                return;
            const {revealSlot: n} = t;
            return (0,
            ui.z)(!n && e.hasUnrevealedSlot)
        }
        ;
        var Qs, Hs = n(359934);
        !function(e) {
            e.HEADER_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW = "HEADER_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW",
            e.MAIN_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW = "MAIN_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW"
        }(Qs || (Qs = {}));
        const {useCallback: Us, useEffect: Vs, useLayoutEffect: Gs, useMemo: Ys, useRef: Js, useState: Ks} = s
          , qs = ({id: e, children: t})=>{
            const n = no()
              , i = (e,t,i,a)=>{
                null == n || n.onRender(e, t, i, a)
            }
            ;
            return n ? (0,
            o.t)(r.Profiler, Object.assign({
                id: e,
                onRender: i
            }, {
                children: t
            })) : (0,
            o.t)(r.Fragment, {
                children: t
            })
        }
          , {memo: Zs, useEffect: Xs, useRef: $s, useState: el} = s
          , tl = Zs((({area: e, areEmptySlotsTransparent: t, content: n, disableResponsiveContainerMeasured: i, onAreaMeasurementsAvailable: a})=>{
            const {isResponsiveContainerMeasured: r, responsiveProviderProps: s, setResponsiveContainerRefCallback: l} = (({area: e, initialHeight: t=0, initialWidth: n=0}={})=>{
                const i = (0,
                f.w)("useMeasuredResponsiveContainer")
                  , {host: a} = (0,
                g.SE)()
                  , o = Js(t > 0 && n > 0)
                  , [r,s] = Ks(Js(null))
                  , l = Us((e=>s({
                    current: e
                })), [s])
                  , [d,c] = Ks({
                    height: t > 0 ? t : void 0,
                    width: n > 0 ? n : void 0
                })
                  , {enableUnmeasuredSlotDetection: u, enableUnmeasuredSlotDetectionOnThisWindow: v} = (0,
                m.NC)(p.J.Core, ["enableUnmeasuredSlotDetection", "enableUnmeasuredSlotDetectionOnThisWindow"]);
                Gs((()=>{
                    if (!o.current && r.current) {
                        const {offsetHeight: t, offsetWidth: n} = r.current;
                        n > 0 || u && v ? (o.current = !0,
                        c({
                            height: t,
                            width: n
                        })) : e !== Gt.WL.MAIN && e !== Gt.WL.HEADER || i.log(`${e} slot: offsetWidth: ${n}`)
                    } else
                        e !== Gt.WL.MAIN && e !== Gt.WL.HEADER || i.log(`${e} slot: isInitialized.current: ${o.current} , containerRef.current is : ${null === r.current ? "null" : "not null"} `)
                }
                ), [e, r, u, v, i, o]),
                Vs((()=>()=>{
                    r.current = null
                }
                ), [r]);
                const {height: h, width: y} = d
                  , A = Ys((()=>{
                    if (void 0 === y || void 0 === h)
                        return {
                            containerRef: r
                        };
                    const e = Object.assign({
                        height: h,
                        width: y
                    }, (0,
                    Ut.RB)({
                        height: h,
                        width: y,
                        host: a
                    }));
                    return {
                        containerRef: r,
                        initialSize: e
                    }
                }
                ), [h, a, r, y])
                  , {enableHybridExperienceRendererLayout: b} = (0,
                m.NC)(p.J.Host);
                return Ys((()=>({
                    isResponsiveContainerMeasured: b ? o.current : o.current || !!r.current,
                    responsiveProviderProps: A,
                    setResponsiveContainerRefCallback: l
                })), [r, b, A, l])
            }
            )({
                area: e
            })
              , [d,c] = el(!1)
              , {enableLayoutSlotBoundaryCallback: u, enableUnmeasuredSlotDetection: v, enableUnmeasuredSlotDetectionOnThisWindow: h, enableUnmeasuredSlotDetectionTimeout: y} = (0,
            m.NC)(p.J.Core, ["enableLayoutSlotBoundaryCallback", "enableUnmeasuredSlotDetection", "enableUnmeasuredSlotDetectionOnThisWindow", "enableUnmeasuredSlotDetectionTimeout"])
              , A = y || 2500
              , {host: b, scenarioFactory: C} = (0,
            g.SE)()
              , S = $s(void 0);
            Xs((()=>{
                u && r && (null == a || a(e, s.initialSize))
            }
            ), [e, u, r, a, s.initialSize]),
            Xs((()=>(v && h && (e === Gt.WL.MAIN || e === Gt.WL.HEADER) && (S.current = b.setTimeout((()=>{
                if (b.clearTimeout(S.current),
                !I.current) {
                    const t = e === Gt.WL.HEADER ? {
                        errorCode: Qs.HEADER_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW,
                        message: "BIM main window encountered blank header slot"
                    } : {
                        errorCode: Qs.MAIN_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW,
                        message: "BIM main window encountered blank main slot"
                    };
                    C.newScenario(Me.RG.FatalError).appendEventData(t),
                    c(!0)
                }
            }
            ), A)),
            ()=>{
                S.current && (b.clearTimeout(S.current),
                S.current = void 0)
            }
            )), [e, v, h, b, r, a, s.initialSize, C, A]);
            const I = $s(r || i || d || e === Gt.WL.CONFIGURATIONS);
            (r && !I.current || d) && (I.current = !0);
            const {containerRef: k} = s;
            return (0,
            o.t)("div", Object.assign({
                "data-tid": "slot-measurer",
                ref: l
            }, {
                children: I.current && (0,
                o.t)(Hs.cX, Object.assign({
                    UNSAFE_overflowAndFlipBoundaryRef: t ? k : null
                }, {
                    children: [v && h && (0,
                    o.t)(nl, {
                        scenarioFactory: C
                    }), (0,
                    o.t)(qs, Object.assign({
                        id: e
                    }, {
                        children: (0,
                        o.t)(Vt.Et, Object.assign({}, s, {
                            children: n
                        }))
                    }))]
                }))
            }))
        }
        ));
        tl.displayName = "AppLayoutAreaInner";
        const nl = Zs((({scenarioFactory: e})=>(Xs((()=>{
            var t, n;
            const i = e.findScenario(Me.RG.FatalError);
            i && (null === (t = i.eventData) || void 0 === t ? void 0 : t.errorCode) === Qs.MAIN_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW && i.fail({
                message: "BIM main window recovered from blank main slot"
            }),
            i && (null === (n = i.eventData) || void 0 === n ? void 0 : n.errorCode) === Qs.HEADER_SLOT_DID_NOT_RENDER_APP_ON_MAIN_WINDOW && i.fail({
                message: "BIM main window recovered from blank header slot"
            })
        }
        ), [e]),
        null)));
        nl.displayName = "LogRecoveryFromUnmeasuredSlot";
        const {memo: il, useCallback: al, useMemo: ol, useState: rl} = s
          , sl = il((({isLayoutSlotInError: e, bounds: t, layoutAreaProps: n, layoutSlot: i, onAreaMeasurementsAvailable: a, slotName: o})=>{
            const {enableConvergedAppLayoutArea: s, enableVisualRefreshBackground: l, revealLayoutSlotsAnimationTiming: d} = (0,
            m.NC)(p.J.Core, ["enableConvergedAppLayoutArea", "enableVisualRefreshBackground", "revealLayoutSlotsAnimationTiming"])
              , c = !!l
              , u = ol((()=>Object.assign(Object.assign({
                isRefreshBackground: c,
                revealLayoutSlotsAnimationTiming: d
            }, null == i ? void 0 : i.variables), null == n ? void 0 : n.variables)), [n, c, i, d])
              , g = s ? Ds : ss;
            if (!i || e)
                return null;
            const {isSubNavSlideOutMenu: v} = u
              , h = !!v || o === Gt.WL.MODAL;
            return (0,
            r.createElement)(g, Object.assign({}, n, {
                area: o,
                bounds: t,
                content: i.slot,
                disableResponsiveContainerMeasured: h,
                InnerComponent: tl,
                key: o,
                onAreaMeasurementsAvailable: a,
                variables: u
            }))
        }
        ));
        sl.displayName = "MeasuredAppLayoutArea";
        const ll = il((({appLayoutAreaProps: e, renderingSlotConfigKeys: t, slots: n, slotsConfigKeys: i})=>{
            const a = al(((e,t)=>!t.includes(e)), [])
              , [s,l] = rl(null)
              , [d,c] = rl(null)
              , u = i.includes(Gt.WL.TITLE_BAR)
              , g = i.includes(Gt.WL.NAV)
              , m = i.includes(Gt.WL.MODAL)
              , p = i.includes(Gt.WL.MONITOR)
              , v = i.includes(Gt.WL.NOTIFICATIONS)
              , h = al(((e,t)=>{
                e === Gt.WL.TITLE_BAR ? null == l || l({
                    height: null == t ? void 0 : t.height
                }) : e === Gt.WL.NAV && (null == c || c({
                    width: null == t ? void 0 : t.width
                }))
            }
            ), [])
              , y = null == d ? void 0 : d.width
              , A = null == s ? void 0 : s.height
              , f = ol((()=>({
                left: y,
                top: A
            })), [y, A]);
            return (0,
            o.t)(r.Fragment, {
                children: [u && (0,
                o.t)(sl, {
                    layoutAreaProps: e[Gt.WL.TITLE_BAR],
                    layoutSlot: n[Gt.WL.TITLE_BAR],
                    onAreaMeasurementsAvailable: h,
                    slotName: Gt.WL.TITLE_BAR
                }, Gt.WL.TITLE_BAR), v && (0,
                o.t)(sl, {
                    layoutAreaProps: e[Gt.WL.NOTIFICATIONS],
                    layoutSlot: n[Gt.WL.NOTIFICATIONS],
                    slotName: Gt.WL.NOTIFICATIONS
                }, Gt.WL.NOTIFICATIONS), g && (0,
                o.t)(sl, {
                    layoutAreaProps: e[Gt.WL.NAV],
                    layoutSlot: n[Gt.WL.NAV],
                    onAreaMeasurementsAvailable: h,
                    slotName: Gt.WL.NAV
                }, Gt.WL.NAV), m && (0,
                o.t)(sl, {
                    layoutAreaProps: e[Gt.WL.MODAL],
                    layoutSlot: n[Gt.WL.MODAL],
                    slotName: Gt.WL.MODAL
                }, Gt.WL.MODAL), (0,
                o.t)(r.Fragment, {
                    children: [i.map((i=>i !== Gt.WL.TITLE_BAR && i !== Gt.WL.NOTIFICATIONS && i !== Gt.WL.IN_APP_NOTIFICATIONS && i !== Gt.WL.NAV && i !== Gt.WL.MODAL && i !== Gt.WL.MONITOR && (0,
                    o.t)(sl, {
                        layoutAreaProps: e[i],
                        layoutSlot: n[i],
                        slotName: i,
                        isLayoutSlotInError: a(i, t)
                    }, i))), p && (0,
                    o.t)(sl, {
                        bounds: f,
                        layoutAreaProps: e[Gt.WL.MONITOR],
                        layoutSlot: n[Gt.WL.MONITOR],
                        slotName: Gt.WL.MONITOR
                    }, Gt.WL.MONITOR), v && (0,
                    o.t)(sl, {
                        layoutAreaProps: e[Gt.WL.IN_APP_NOTIFICATIONS],
                        layoutSlot: n[Gt.WL.IN_APP_NOTIFICATIONS],
                        slotName: Gt.WL.IN_APP_NOTIFICATIONS
                    }, Gt.WL.IN_APP_NOTIFICATIONS)]
                })]
            })
        }
        ));
        ll.displayName = "AppLayoutAreas";
        class dl extends r.PureComponent {
            componentDidCatch(e, t) {
                this.props.componentDidCatchCallback({
                    error: e,
                    info: t
                })
            }
            render() {
                return this.props.children
            }
        }
        dl.displayName = "LayoutErrorBoundary";
        var cl = n(157930);
        const {useCallback: ul} = s
          , {memo: gl, useCallback: ml, useEffect: pl, useRef: vl, useState: hl} = s
          , yl = {
            coreError: void 0,
            errorCount: 0
        }
          , Al = gl((({appLayoutAreaProps: e, areSlotsInErrorStateRef: t, correlationIdRef: n, hasLayoutViewChanged: i, showActionsOnError: a, slots: r, slotsConfigKeys: s})=>{
            var l;
            const {host: d, loggerFactory: c} = (0,
            g.SE)()
              , {commandChangeReportingService: u, networkState: m, getExperienceProps: v} = (0,
            A.i)()
              , h = c.newLogger("LayoutErrorBoundary", "components-core-layout")
              , [y,f] = hl(yl)
              , b = vl(!1)
              , C = vl(void 0)
              , S = ml((e=>{
                C.current || (C.current = null == m ? void 0 : m.observeIsOnline().subscribe((t=>{
                    t && (w(),
                    h.log("Network is back online. Attempting to reset the error state to auto-refresh the view..."),
                    e && f(yl))
                }
                )))
            }
            ), [h, m, f]);
            y.coreError && i && !b.current && f(yl),
            b.current = !1;
            const I = s.includes(Gt.WL.MODAL);
            let k = s;
            if (y.coreError) {
                m.isOnline() || S(y.coreError);
                const e = s.findIndex((e=>{
                    var t;
                    return e === (null === (t = y.coreError) || void 0 === t ? void 0 : t.originSlotName)
                }
                ));
                e > -1 && (k = s.slice(0, e))
            }
            I && (null === (l = y.coreError) || void 0 === l ? void 0 : l.originSlotName) !== Gt.WL.MODAL && k.push(Gt.WL.MODAL);
            const N = ml(((e,t)=>s.indexOf(e) < s.indexOf(t)), [s])
              , E = (()=>{
                const {entityCommanding: e, coreSettings: t} = (0,
                g.SE)();
                return ul((n=>{
                    const {fatalErrorAutoBrbRegex: i} = t.get(p.J.Core, ["fatalErrorAutoBrbRegex"]);
                    (null == i ? void 0 : i.some((e=>e && null !== n.match(e)))) && e.brbFeedback.autoBrbFlowDialog({
                        visibilityState: ie.fe.show,
                        stateTransition: ie.su.new,
                        correlation: {
                            source: ae.D.AutoBrb
                        }
                    }, {
                        feedbackSelectedCategory: cl.H.Other,
                        feedbackText: "fatal error",
                        includeHeapSnapshot: !1
                    })
                }
                ), [t, e])
            }
            )()
              , T = ml((e=>{
                h.error("The layout error boundary caught an error"),
                tt(d),
                t.current = !0,
                b.current = !0;
                const {error: i, info: o} = e
                  , r = et(i);
                if (((e,t,n)=>{
                    (null == n ? void 0 : n.current) && e.report({
                        correlationId: n.current,
                        type: _e.B.Failure,
                        context: {
                            target: "app-layout-areas-with-error-boundary",
                            errorInfo: t.parsedErrorCode || t.code || We.y.ErrorBoundaryError,
                            errorMessage: t.message,
                            showOops: !0
                        }
                    })
                }
                )(u, r, n),
                fl(v))
                    throw i;
                if (nt(i))
                    throw i;
                E(r.message),
                e.error = Object.assign(Object.assign({}, r), {
                    stack: o.componentStack,
                    name: r.name,
                    message: r.message,
                    context: "app-layout-areas-with-error-boundary"
                });
                const s = ((e,t,n)=>{
                    const i = (null == n ? void 0 : n.isOnline()) ? t ? $e.$.LAYOUT_ERROR_USER_BLOCKED : $e.$.LAYOUT_ERROR : t ? $e.$.NETWORK_OFFLINE_USER_BLOCKED : $e.$.NETWORK_OFFLINE;
                    return new $e.G(i,e,void 0,e.originSlotName)
                }
                )(i, a, m)
                  , l = y.coreError
                  , c = {
                    coreError: s,
                    errorCount: y.errorCount + 1
                };
                l && N(l.originSlotName, s.originSlotName) && (c.coreError = l),
                f(c)
            }
            ), [t, u, n, v, d, N, h, m, a, y, E])
              , w = ()=>{
                C.current && (C.current.unsubscribe(),
                C.current = void 0)
            }
            ;
            return pl((()=>w), []),
            (0,
            o.t)(dl, Object.assign({
                componentDidCatchCallback: T
            }, {
                children: (0,
                o.t)(as, Object.assign({
                    correlationId: null == n ? void 0 : n.current,
                    error: y.coreError,
                    isOnline: m.isOnline()
                }, {
                    children: (0,
                    o.t)(ll, {
                        appLayoutAreaProps: e,
                        renderingSlotConfigKeys: k,
                        slots: r,
                        slotsConfigKeys: s
                    })
                }))
            }))
        }
        ));
        Al.displayName = "AppLayoutAreasWithErrorBoundary";
        const fl = e=>{
            const {errorBoundary: t} = e(["errorBoundary"]);
            return !!t
        }
        ;
        var bl = n(388496);
        const Cl = (0,
        at.s)({
            container: {
                qhf8xq: "f1euv43f",
                Bhzewxz: "f15twtuk",
                oyh7mz: ["f1vgc2s3", "f1e31b4d"],
                a9b677: "fly5x3f",
                Bkecrkj: "f1aehjj5",
                Bj3rh1h: "f1buevke"
            },
            bar: {
                De3pzq: "f1c21dwh"
            },
            wideBar: {
                De3pzq: "f1c21dwh",
                Bcmaq0h: ["f355fz6", "fckw1xo"],
                B2u0y6b: "ftl7tix",
                Bv12yb3: ["fey9jij", "f1tg6crw"]
            }
        }, {
            d: [".f1euv43f{position:absolute;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".fly5x3f{width:100%;}", ".f1aehjj5{pointer-events:none;}", ".f1buevke{z-index:1000;}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f355fz6{background-image:linear-gradient(\n      to right,\n      var(--colorTransparentBackground) 0%,\n      var(--colorCompoundBrandBackground) 50%,\n      var(--colorTransparentBackground) 100%\n    );}", ".fckw1xo{background-image:linear-gradient(\n      to left,\n      var(--colorTransparentBackground) 0%,\n      var(--colorCompoundBrandBackground) 50%,\n      var(--colorTransparentBackground) 100%\n    );}", ".ftl7tix{max-width:66%;}", ".fey9jij{animation-name:f1tp0p7t;}", ".f1tg6crw{animation-name:f1hxv9j3;}"],
            k: ["@keyframes f1tp0p7t{0%{left:-66%;}100%{left:100%;}}", "@keyframes f1hxv9j3{0%{right:-66%;}100%{right:100%;}}"]
        })
          , {memo: Sl, useCallback: Il, useEffect: kl, useRef: Nl, useState: El} = s
          , Tl = Sl((()=>{
            const {enableLineLoader: e} = (0,
            m.NC)(p.J.Core);
            return e ? (0,
            o.t)(wl, {}) : null
        }
        ));
        function wl() {
            const e = Dl()
              , [t,n] = El(!1)
              , i = Nl({
                hasVisibilityChangeRequest: !1,
                isVisible: e
            }).current;
            kl((()=>{
                i.isVisible !== e && (t && !e && i.isVisible && (i.hasVisibilityChangeRequest = !0),
                i.isVisible = e)
            }
            ), [t, e, i]);
            const a = Il((()=>{
                i.hasVisibilityChangeRequest && (i.hasVisibilityChangeRequest = !1,
                n(!1))
            }
            ), [n, i]);
            return kl((()=>{
                e && !i.hasVisibilityChangeRequest && n(!0)
            }
            ), [e, i]),
            t ? (0,
            o.t)(Ml, {
                onAnimationIteration: a
            }) : null
        }
        function Ml({onAnimationIteration: e}) {
            const t = Cl();
            return (0,
            o.t)("div", Object.assign({
                style: {
                    gridArea: Gt.u5.LINE_LOADER,
                    position: "relative"
                }
            }, {
                children: (0,
                o.t)("div", Object.assign({
                    className: t.container
                }, {
                    children: (0,
                    o.t)(bl.k, {
                        bar: {
                            className: t.wideBar,
                            onAnimationIteration: e
                        },
                        className: t.bar,
                        shape: "square"
                    })
                }))
            }))
        }
        Tl.displayName = "LineLoader";
        const Dl = ()=>{
            const {isVisibleSubject: e, isLoadingScreenHiddenSubject: t} = ho()
              , n = Nl((0,
            Ua.aj)([e, t])).current
              , i = Il((([e,t])=>e && t), [])
              , [a,o] = El(i([e.getValue(), t.getValue()]));
            return kl((()=>{
                let e = !1;
                const t = n.subscribe((t=>{
                    Promise.resolve().then((()=>{
                        e || o(i(t))
                    }
                    ))
                }
                ));
                return ()=>{
                    e = !0,
                    t.unsubscribe()
                }
            }
            ), [n, i]),
            a
        }
          , {memo: Ll, useCallback: Ol, useEffect: Bl, useLayoutEffect: jl, useMemo: Pl, useRef: Rl, useState: xl} = s
          , Fl = {
            current: null
        }
          , _l = Ll((e=>(0,
        o.t)(vo, {
            children: (0,
            o.t)(io, {
                children: (0,
                o.t)(Ro, {
                    children: (0,
                    o.t)(Wl, Object.assign({}, e))
                })
            })
        })));
        _l.displayName = "LayoutWithSlots";
        const Wl = Ll((({activeEntities: e, areEmptySlotsTransparent: t, correlationId: n, enableTitleBar: i, entitiesHierarchyHelpers: a, layoutConfig: r, lightboxProviderVariables: s, responsiveTemplates: c, setDataTid: u, slotsConfig: m, slotsConfigKeys: p, windowLayoutService: v})=>{
            var h;
            const y = (0,
            f.w)("Core Rendering Layer, LayoutWithSlots")
              , {windowId: b, appsRegistryService: C} = (0,
            A.i)()
              , {coreSettings: S, loggerFactory: I, scenarioFactory: k} = (0,
            g.SE)()
              , N = (0,
            $t.x)()
              , E = nd({
                value: n
            })
              , T = Rl(null)
              , {hasMainEntityChanged: w, layoutRenderCorrelationIdRef: M, skipForcedLPSMTransition: D, viewEntitiesChanged: L} = Ka({
                activeEntities: e,
                correlationId: E.current,
                prevActiveEntitiesRef: T
            })
              , O = ea({
                correlationId: n
            })
              , {action: B, type: j} = (null === (h = m[Gt.WL.MAIN]) || void 0 === h ? void 0 : h.entity) || {}
              , P = zl({
                hasMainEntityChanged: w,
                mainEntityAction: B,
                mainEntityType: j,
                sendRenderStarted: O,
                viewEntitiesChanged: L
            })
              , R = (({correlationIdRef: e, logger: t})=>{
                const {commandChangeReportingService: n} = (0,
                A.i)()
                  , i = Wa((t=>{
                    n.report({
                        correlationId: e.current,
                        type: _e.B.ScenarioEventDataAppended,
                        context: {
                            target: Qa,
                            eventData: t
                        }
                    })
                }
                ), [n, e])
                  , a = Wa(((t,i,a,o)=>{
                    n.report({
                        correlationId: e.current,
                        type: _e.B.ScenarioMarked,
                        context: {
                            target: Qa,
                            step: t,
                            eventData: i,
                            status: a,
                            monitoringData: o
                        }
                    })
                }
                ), [n, e])
                  , o = Wa(((i,a)=>{
                    Ha({
                        commandChangeReportingService: n,
                        correlationId: e.current,
                        logger: t,
                        renderEventData: {
                            data: a,
                            renderStage: i
                        }
                    })
                }
                ), [n, e, t]);
                return za((()=>({
                    appendCommandScenarioEventData: i,
                    markCommandScenarioStep: a,
                    onRenderEvent: o
                })), [i, a, o])
            }
            )({
                correlationIdRef: E,
                logger: y
            })
              , [x,F] = xl(void 0)
              , _ = Rl(!1)
              , W = j === Zt.py.flyout
              , z = Ol((e=>{
                !_.current && F && F(e)
            }
            ), [F]);
            if (x)
                throw x;
            const {layoutPhaseStateMachine: Q, reportFirstPaintCallback: H} = qo({
                correlationId: n,
                layoutRenderCorrelationIdRef: M,
                onLayoutPhaseStateMachineError: z,
                setDataTid: u,
                skipForcedLPSMTransition: D,
                slotsConfig: m,
                slotsConfigKeys: p,
                activeEntities: e
            });
            (({correlationIdRef: e, viewEntitiesChanged: t})=>{
                const {commandChangeReportingService: n} = (0,
                A.i)()
                  , i = e.current
                  , a = t;
                kr((()=>{
                    n.report({
                        correlationId: i,
                        type: _e.B.CommandMetaDataAdded,
                        context: {
                            target: "use-start-render-update",
                            contentExistsAndHasChanged: a
                        }
                    })
                }
                ), [n, a, i])
            }
            )({
                correlationIdRef: E,
                viewEntitiesChanged: L
            });
            const U = Rl(Q)
              , V = Rl(0)
              , G = (0,
            l.JQ)();
            U.current !== Q && (U.current = Q,
            V.current++,
            G.generateEvent({
                event: d.U3.criticalAppPhaseReached()
            }));
            const Y = Rl(H);
            Y.current !== H && (Y.current = H),
            L && (e=>{
                const {context: t, sourceEntities: n, targetEntities: i, targetWindowId: a} = e
                  , o = ri(n).concat(ri(i))
                  , r = new Set(o);
                di({
                    context: t,
                    currentEntities: i,
                    uniqueTypes: r,
                    windowId: a
                })
            }
            )({
                context: {
                    appsRegistryService: C,
                    client: N,
                    coreSettings: S,
                    layoutPhaseStateMachine: Q,
                    loggerFactory: I,
                    scenarioFactory: k
                },
                sourceEntities: T.current,
                targetEntities: e,
                targetWindowId: b
            }),
            T.current = e,
            Fl.current = e;
            const J = Jl({
                commandReportingCallbacks: R,
                correlationIdRef: E,
                entitiesHierarchyHelpers: a,
                viewEntitiesRef: Fl
            })
              , K = Pl((()=>({
                areSlotsInErrorStateRef: _,
                correlationIdRef: E,
                showActionsOnError: W,
                hasLayoutViewChanged: L
            })), [_, E, W, L]);
            return (0,
            o.t)(Or, Object.assign({
                layoutPhaseStateMachine: Q
            }, {
                children: (0,
                o.t)(Kn.jH, Object.assign({
                    layoutPhaseStateMachineRef: U,
                    useAppPhasePostCriticalOnEveryPhaseCycle: zr,
                    useAppPhaseCompleteOnEveryPhaseCycle: Qr,
                    reportFirstPaintCallbackRef: Y
                }, {
                    children: [(0,
                    o.t)(Wr, {
                        layoutPhaseStateMachineInstanceCount: V.current
                    }), (0,
                    o.t)(Ql, {
                        areEmptySlotsTransparent: t,
                        commandReportingCallbacks: R,
                        correlationIdRef: M,
                        enableSlotTransition: P,
                        enableTitleBar: i,
                        errorBoundaryProps: K,
                        layoutConfig: r,
                        layoutPhaseStateMachine: Q,
                        lightboxProviderVariables: s,
                        loadSlotElement: J,
                        responsiveTemplates: c,
                        slotsConfig: m,
                        slotsConfigKeys: p,
                        windowLayoutService: v
                    })]
                }))
            }))
        }
        ));
        Wl.displayName = "LayoutWithSlotsInternal";
        const zl = ({mainEntityAction: e, mainEntityType: t, hasMainEntityChanged: n, viewEntitiesChanged: i, sendRenderStarted: a})=>{
            const {enableSlotTransition: o} = (0,
            m.NC)(p.J.Core, ["enableSlotTransition"])
              , {enableHybridExperienceRendererLayout: r} = (0,
            m.NC)(p.J.Host)
              , s = !(!(t === Zt.py.chats && e === Zt.uk.create || t === Zt.py.contactssync && e === Zt.uk.view) && !1 !== r && !o);
            return (s && !i || s && !n || !s) && a(),
            s
        }
          , Ql = Ll((({areEmptySlotsTransparent: e, commandReportingCallbacks: t, correlationIdRef: i, enableSlotTransition: a, enableTitleBar: s, errorBoundaryProps: l, layoutConfig: d, layoutPhaseStateMachine: c, lightboxProviderVariables: u, loadSlotElement: v, responsiveTemplates: h, slotsConfig: y, slotsConfigKeys: f, windowLayoutService: b})=>{
            var C, S, I, k;
            const {enableTransparentLeftRail: N} = (0,
            m.NC)(p.J.Core, ["enableTransparentLeftRail"])
              , {isMinWidthViewportBreakpointAtLeast947: E} = (0,
            Vt.Dt)()
              , T = !N || !E
              , w = !!(null === (S = null === (C = (0,
            zn.G)(T)) || void 0 === C ? void 0 : C.backdropEffectState) || void 0 === S ? void 0 : S.enabled)
              , M = Pl((()=>({
                commandReportingCallbacks: t,
                correlationIdRef: i,
                enableSlotRevealOnViewTransition: !1,
                layoutPhaseStateMachine: c,
                loadSlotElement: v,
                variables: {
                    areEmptySlotsTransparent: e
                }
            })), [e, t, i, c, v])
              , D = fr(Object.assign(Object.assign({}, M), {
                slotApp: y[Gt.WL.CONTEXTUAL_NOTIFICATIONS]
            }))
              , L = fr(Object.assign(Object.assign({}, M), {
                enableSlotRevealOnViewTransition: !0,
                slotApp: y[Gt.WL.END]
            }))
              , O = fr(Object.assign(Object.assign({}, M), {
                enableSlotRevealOnViewTransition: !0,
                slotApp: y[Gt.WL.HEADER]
            }))
              , {manifest: B} = y[Gt.WL.MAIN] || {}
              , j = null == B ? void 0 : B.shouldErrorOnEntityCommandTimeout
              , P = fr(Object.assign(Object.assign({}, M), {
                enableSlotRevealOnViewTransition: !0,
                shouldErrorOnEntityCommandTimeout: j,
                enableSlotTransition: a,
                slotApp: y[Gt.WL.MAIN]
            }))
              , R = Pl((()=>({
                isSlotBackgroundTransparent: !0
            })), [])
              , x = Pl((()=>(0,
            o.t)(sa, Object.assign({}, M, {
                enableTitleBar: s,
                modalLoader: y[Gt.WL.MODAL],
                variables: R,
                viewEntityName: "mainEntity",
                modalStateObserver: b.modalManager.observeModalState()
            }))), [M, s, R, y, b])
              , F = fr(Object.assign(Object.assign({}, M), {
                enableSlotRevealOnViewTransition: !0,
                slotApp: y[Gt.WL.NAV]
            }))
              , _ = fr(Object.assign(Object.assign({}, M), {
                slotApp: y[Gt.WL.IN_APP_NOTIFICATIONS]
            }))
              , W = fr(Object.assign(Object.assign({}, M), {
                slotApp: y[Gt.WL.NOTIFICATIONS]
            }))
              , z = fr(Object.assign(Object.assign({}, M), {
                enableSlotRevealOnViewTransition: !0,
                slotApp: y[Gt.WL.START]
            }))
              , Q = fr(Object.assign(Object.assign({}, M), {
                enableSlotRevealOnViewTransition: !0,
                hasBackdropEffect: w,
                slotApp: y[Gt.WL.SUBNAV]
            }))
              , H = fr(Object.assign(Object.assign({}, M), {
                slotApp: y[Gt.WL.TITLE_BAR]
            }))
              , U = fr(Object.assign(Object.assign({}, M), {
                variables: {
                    isSlotBackgroundTransparent: !0
                },
                slotApp: y[Gt.WL.TOASTS]
            }))
              , V = fr(Object.assign(Object.assign({}, M), {
                slotApp: y[Gt.WL.MONITOR]
            }))
              , G = (({configurations: e, contextualNotifications: t, enableTitleBar: n, end: i, header: a, layoutPhaseStateMachine: o, main: r, modal: s, monitor: l, nav: d, notifications: c, inAppNotifications: u, start: g, subNav: m, titleBar: p, toasts: v})=>{
                const h = Gr((()=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t.slot && {
                    [Gt.WL.CONTEXTUAL_NOTIFICATIONS]: t
                }), i.slot && {
                    [Gt.WL.END]: i
                }), a.slot && {
                    [Gt.WL.HEADER]: a
                }), r.slot && {
                    [Gt.WL.MAIN]: r
                }), {
                    [Gt.WL.MODAL]: {
                        slot: s
                    }
                }), d.slot && {
                    [Gt.WL.NAV]: d
                }), l.slot && {
                    [Gt.WL.MONITOR]: l
                }), c.slot && {
                    [Gt.WL.NOTIFICATIONS]: c
                }), u.slot && {
                    [Gt.WL.IN_APP_NOTIFICATIONS]: u
                }), g.slot && {
                    [Gt.WL.START]: g
                }), m.slot && {
                    [Gt.WL.SUBNAV]: m
                }), n && p.slot && {
                    [Gt.WL.TITLE_BAR]: p
                }), v.slot && {
                    [Gt.WL.TOASTS]: v
                }), e.slot && {
                    [Gt.WL.CONFIGURATIONS]: e
                })), [e, t, n, i, a, r, s, l, d, c, u, g, m, p, v])
                  , y = {
                    [Gt.WL.NAV]: d.slot && d.variables.revealSlot,
                    [Gt.WL.SUBNAV]: m.slot && m.variables.revealSlot,
                    [Gt.WL.HEADER]: a.slot && a.variables.revealSlot,
                    [Gt.WL.START]: g.slot && g.variables.revealSlot,
                    [Gt.WL.MAIN]: r.slot && r.variables.revealSlot,
                    [Gt.WL.END]: i.slot && i.variables.revealSlot
                }
                  , A = Yr(y)
                  , f = Yr(o);
                f.current !== o && (A.current = y,
                f.current = o);
                const b = Yr(!1)
                  , C = [{
                    slotName: Gt.WL.NAV,
                    config: d,
                    reveal: b.current
                }, {
                    slotName: Gt.WL.SUBNAV,
                    config: m,
                    reveal: b.current
                }, {
                    slotName: Gt.WL.HEADER,
                    config: a,
                    reveal: !1
                }, {
                    slotName: Gt.WL.START,
                    config: g,
                    reveal: !1
                }, {
                    slotName: Gt.WL.MAIN,
                    config: r,
                    reveal: !1
                }, {
                    slotName: Gt.WL.END,
                    config: i,
                    reveal: !1
                }];
                return C.forEach((({config: e, slotName: t},n)=>{
                    const i = !(n > 0) || C[n - 1].reveal;
                    C[n].reveal = e.slot ? i && e.variables.revealSlot : i;
                    const a = h[t];
                    a && (a.variables.revealSlot = C[n].reveal || A.current[t],
                    t !== Gt.WL.SUBNAV || b.current || (b.current = a.variables.revealSlot))
                }
                )),
                (m.slot && !A.current[Gt.WL.SUBNAV] ? [[Gt.WL.NAV], [Gt.WL.SUBNAV], [Gt.WL.HEADER, Gt.WL.START, Gt.WL.MAIN], [Gt.WL.END]] : [[Gt.WL.NAV], [Gt.WL.SUBNAV], [Gt.WL.HEADER], [Gt.WL.START, Gt.WL.MAIN], [Gt.WL.END]]).forEach((e=>{
                    let t = !0;
                    e.every((e=>{
                        const n = h[e];
                        return !(n && !n.variables.revealSlot && !A.current[e] && (t = !1,
                        1))
                    }
                    )),
                    e.forEach((e=>{
                        if (!t) {
                            const n = h[e];
                            if (n && (n.variables.revealSlot = t || A.current[e],
                            e === Gt.WL.NAV || e === Gt.WL.SUBNAV)) {
                                const e = n.variables.revealSlot;
                                n.variables.revealSlot = e || b.current
                            }
                        }
                    }
                    ))
                }
                )),
                h
            }
            )({
                configurations: fr(Object.assign(Object.assign({}, M), {
                    slotApp: y[Gt.WL.CONFIGURATIONS]
                })),
                contextualNotifications: D,
                enableTitleBar: s,
                end: L,
                header: O,
                layoutPhaseStateMachine: c,
                main: P,
                modal: x,
                monitor: V,
                nav: F,
                notifications: W,
                inAppNotifications: _,
                start: z,
                subNav: Q,
                titleBar: H,
                toasts: U
            })
              , {enableLonglivedSubscriptionForChannelsApp: Y, enableLonglivedSubscriptionForChannelsAppViewportSetting: J, longlivedSubscriptionForChannelsAppComponentRef: K} = (e=>{
                var t, i, a, r;
                const {scenarioFactory: s} = (0,
                g.SE)()
                  , {enableLonglivedSubscriptionForChannelsApp: l, enableLonglivedSubscriptionForChannelsAppViewportSetting: d} = (0,
                m.NC)(p.J.Core, ["enableLonglivedSubscriptionForChannelsApp", "enableLonglivedSubscriptionForChannelsAppViewportSetting"])
                  , c = Er(void 0);
                if (l && d) {
                    const l = null === (i = null === (t = e[Gt.WL.SUBNAV]) || void 0 === t ? void 0 : t.entity) || void 0 === i ? void 0 : i.type;
                    if ((l === Zt.py.channels || l === Zt.py.communities) && !c.current) {
                        const t = (null === (r = null === (a = e[Gt.WL.SUBNAV]) || void 0 === a ? void 0 : a.entity) || void 0 === r ? void 0 : r.id) || void 0
                          , i = ()=>Promise.all([n.e(221368), n.e(670941)]).then(n.bind(n, 129285))
                          , l = (0,
                        hi.mT)(i, "long-lived-subscription-for-channels-app", s);
                        c.current = (0,
                        o.t)(Nr.o, {
                            factory: l,
                            props: {
                                selectedChannelIdHint: t
                            },
                            fallback: !1
                        })
                    }
                }
                return {
                    enableLonglivedSubscriptionForChannelsApp: l,
                    enableLonglivedSubscriptionForChannelsAppViewportSetting: d,
                    longlivedSubscriptionForChannelsAppComponentRef: c
                }
            }
            )(y)
              , q = ((e,t={})=>{
                var n;
                const {enableInfoPaneAsResponsiveMenu: i=!1} = (0,
                m.NC)(p.J.Core, ["enableInfoPaneAsResponsiveMenu"])
                  , {clientPreferences: a, appsRegistryService: o} = (0,
                A.i)();
                if (e) {
                    const t = o.getApp({
                        entityType: e
                    });
                    e = (null === (n = null == t ? void 0 : t.manifest.infoPaneStateMapping) || void 0 === n ? void 0 : n[e]) || e
                }
                const s = (0,
                r.useRef)(new Ii.X(e));
                (0,
                r.useEffect)((()=>{
                    s.current.next(e)
                }
                ), [e]);
                const l = (0,
                r.useRef)({});
                l.current.infoPaneVisibilityStateInHybrid = t.infoPaneVisibilityStateInHybrid,
                l.current.isHideInfoPaneDisabled = t.isHideInfoPaneDisabled;
                const d = (0,
                r.useCallback)((()=>{
                    if (!i)
                        return !1;
                    const e = s.current.getValue();
                    if (!e)
                        return !1;
                    const {infoPaneVisibilityStateInHybrid: t} = l.current;
                    if (t)
                        return t !== Ga;
                    const n = a.getPreferences(Va);
                    return !!n[e] && n[e] !== Ga
                }
                ), [a, i])
                  , c = (0,
                r.useRef)()
                  , u = (0,
                r.useCallback)((e=>{
                    i && !c.current && (c.current = (0,
                    Ua.aj)([a.getPreferenceObservable(Va), s.current]).subscribe((()=>{
                        if (!s.current.getValue())
                            return;
                        const t = d();
                        e(t)
                    }
                    )))
                }
                ), [a, i, d])
                  , g = (0,
                r.useCallback)((()=>{
                    var e;
                    null === (e = c.current) || void 0 === e || e.unsubscribe(),
                    c.current = void 0
                }
                ), [])
                  , v = (0,
                r.useCallback)((e=>{
                    if (!i)
                        return;
                    const t = s.current.getValue();
                    if (!t || e === a.getPreferences(Va)[t])
                        return;
                    const {isHideInfoPaneDisabled: n} = l.current;
                    n && e === Ga || a.updatePreferences({
                        infoPane: {
                            [t]: e
                        }
                    })
                }
                ), [a, i]);
                return (0,
                r.useEffect)((()=>function() {
                    s.current.complete(),
                    g()
                }
                ), [g]),
                (0,
                r.useMemo)((()=>({
                    infoPanePreferenceSubscribeCallback: u,
                    infoPanePreferenceUnsubscribeCallback: g,
                    isInfoPaneResponsiveMenuCallback: d,
                    updateInfoPanePreferenceCallback: v
                })), [g, u, d, v])
            }
            )(null === (k = null === (I = y[Gt.WL.END]) || void 0 === I ? void 0 : I.entity) || void 0 === k ? void 0 : k.type, L.variables);
            return (0,
            o.t)(r.Fragment, {
                children: [(0,
                o.t)(Vl, {
                    endSlotInfoPaneAsResponsiveMenuCallbacks: q,
                    errorBoundaryProps: l,
                    layoutConfig: d,
                    lightboxProviderVariables: u,
                    responsiveTemplates: h,
                    slots: G,
                    slotsConfigKeys: f
                }), Y && J && K.current]
            })
        }
        ));
        Ql.displayName = "LayoutWithConfiguredSlots";
        const Hl = Ll((({endSlotInfoPaneAsResponsiveMenuCallbacks: e, errorBoundaryProps: t, layoutConfig: n, lightboxProviderVariables: i, matchedSlotsConfigKeys: a, matchedTemplate: r, slots: s, slotsResponsiveWidths: l})=>{
            const d = Pa({
                endSlotInfoPaneAsResponsiveMenuCallbacks: e,
                layoutConfig: n,
                slots: s,
                slotsResponsiveWidths: l
            });
            return (0,
            o.t)(Gl, {
                appLayoutAreaProps: d,
                errorBoundaryProps: t,
                lightboxProviderVariables: i,
                matchedSlotsConfigKeys: a,
                matchedTemplate: r,
                slots: s
            })
        }
        ))
          , Ul = Ll((({endSlotInfoPaneAsResponsiveMenuCallbacks: e, errorBoundaryProps: t, layoutConfig: n, lightboxProviderVariables: i, matchedSlotsConfigKeys: a, matchedTemplate: s, slots: l, slotsResponsiveWidths: d, UNSAFE_dialogPaddingLeftOffset: c})=>{
            const u = (({endSlotInfoPaneAsResponsiveMenuCallbacks: e, layoutConfig: t, slots: n, slotsResponsiveWidths: i})=>{
                var a, o, s, l, d, c;
                const {hostCommunicationService: u} = (0,
                A.i)()
                  , g = (0,
                f.w)("Core Rendering Layer, useAppLayoutAreaProps")
                  , {enableInfoPaneAsResponsiveMenu: v=!1} = (0,
                m.NC)(p.J.Core)
                  , h = (0,
                r.useRef)(!1)
                  , y = null === (o = null === (a = null == t ? void 0 : t.slots) || void 0 === a ? void 0 : a.subNav) || void 0 === o ? void 0 : o.isHidden
                  , [b,C] = (0,
                r.useState)(!1)
                  , [S,I] = (0,
                r.useState)(!1)
                  , k = (0,
                r.useCallback)((()=>{
                    y || S || I(!0)
                }
                ), [y, S])
                  , N = (0,
                r.useCallback)(((e=!1)=>{
                    y || !S || !e && b || (g.log("disableSubNavResponsiveMenu: hiding subNav"),
                    I(!1),
                    C(!1))
                }
                ), [b, y, g, S])
                  , E = null === (s = i[Gt.WL.SUBNAV]) || void 0 === s ? void 0 : s.firstSlotWidthGreaterThan0
                  , T = null === (l = i[Gt.WL.SUBNAV]) || void 0 === l ? void 0 : l.slotWidthAtCurrentMinWidthBreakpoint
                  , w = T && 0 === parseInt(T, 10)
                  , M = Fa({
                    disableSubNavResponsiveMenu: N,
                    enableSubNavResponsiveMenu: k,
                    isSubNavSlideOutMenu: w,
                    keepSubNavEnabled: b,
                    logger: g,
                    setKeepSubNavEnabled: C
                })
                  , {infoPanePreferenceSubscribeCallback: D, infoPanePreferenceUnsubscribeCallback: L, isInfoPaneResponsiveMenuCallback: O, updateInfoPanePreferenceCallback: B} = e
                  , [j,P] = (0,
                r.useState)(O());
                (0,
                r.useEffect)((()=>(D(P),
                L)), [D, L]),
                (0,
                r.useEffect)((()=>{
                    let e;
                    return h.current || (u.loadModule("core").then((t=>{
                        var n;
                        e = null === (n = null == t ? void 0 : t.registerForOnSubNavHoverChanged) || void 0 === n ? void 0 : n.call(t, M)
                    }
                    )).catch((e=>{
                        var t;
                        null === (t = g.errorToTelemetry) || void 0 === t || t.call(g, `Loading core host comms module failed with: ${(0,
                        xa.u4)(e)}`, "webclient_framework_host_comms", void 0, !0)
                    }
                    )),
                    h.current = !0),
                    ()=>{
                        e && e(),
                        h.current = !1
                    }
                }
                ), [u, g, M]);
                const R = null === (d = i[Gt.WL.END]) || void 0 === d ? void 0 : d.firstSlotWidthGreaterThan0
                  , x = null === (c = i[Gt.WL.END]) || void 0 === c ? void 0 : c.slotWidthAtCurrentMinWidthBreakpoint
                  , F = !!(v && n[Gt.WL.END] && x && 0 === parseInt(x, 10))
                  , _ = F && j
                  , {defaultAreaProps: W, endAreaProps: z, headerAreaProps: Q, layoutProps: H, navAreaProps: U, subNavAreaProps: V, titleBarAreaProps: G} = _a({
                    disableSubNavResponsiveMenu: N,
                    isEndSlideOutMenu: F,
                    isSubNavIntentionallyHidden: !!y,
                    isSubNavSlideOutMenu: w,
                    keepSubNavEnabled: b,
                    updateInfoPanePreferenceCallback: B,
                    enableSubNavResponsiveMenu: k,
                    isEndAsResponsiveMenuEnabled: _,
                    firstEndWidthGreaterThan0: R,
                    firstSubNavWidthGreaterThan0: E,
                    subNavAsResponsiveMenu: S,
                    slots: n,
                    layoutConfig: t
                })
                  , Y = !!n[Gt.WL.TOASTS]
                  , J = Y && (!n[Gt.WL.SUBNAV] || !!w)
                  , K = (0,
                r.useMemo)((()=>({
                    variables: {
                        areToastsPositionedOverMain: J,
                        layoutHasToasts: Y
                    }
                })), [J, Y]);
                return (0,
                r.useMemo)((()=>({
                    [Gt.WL.CONFIGURATIONS]: {},
                    [Gt.WL.CONTEXTUAL_NOTIFICATIONS]: Object.assign({}, W),
                    [Gt.WL.END]: Object.assign({}, z),
                    [Gt.WL.HEADER]: Object.assign({}, Q),
                    [Gt.WL.MAIN]: Object.assign({}, W),
                    [Gt.WL.MONITOR]: {},
                    [Gt.WL.MODAL]: {},
                    [Gt.WL.NAV]: Object.assign({}, U),
                    [Gt.WL.NOTIFICATIONS]: {},
                    [Gt.WL.IN_APP_NOTIFICATIONS]: {},
                    [Gt.WL.START]: Object.assign({}, W),
                    [Gt.WL.SUBNAV]: Object.assign({}, V),
                    [Gt.WL.TITLE_BAR]: Object.assign({}, G),
                    [Gt.WL.TOASTS]: Object.assign({}, K),
                    [Oa.LAYOUT]: Object.assign({}, H)
                })), [W, z, Q, H, U, V, G, K])
            }
            )({
                endSlotInfoPaneAsResponsiveMenuCallbacks: e,
                layoutConfig: n,
                slots: l,
                slotsResponsiveWidths: d
            });
            return (0,
            o.t)(qn.Bz, Object.assign({
                UNSAFE_dialogPaddingLeftOffset: c
            }, {
                children: (0,
                o.t)(Gl, {
                    appLayoutAreaProps: u,
                    errorBoundaryProps: t,
                    lightboxProviderVariables: i,
                    matchedSlotsConfigKeys: a,
                    matchedTemplate: s,
                    slots: l
                })
            }))
        }
        ))
          , Vl = Ll((({endSlotInfoPaneAsResponsiveMenuCallbacks: e, errorBoundaryProps: t, layoutConfig: n, lightboxProviderVariables: i, responsiveTemplates: a, slots: r, slotsConfigKeys: s})=>{
            const {enableBIMSubNavHover: l=!1, enableBIMSlots: d=!1} = (0,
            m.NC)(p.J.Core, ["enableBIMSubNavHover", "enableBIMSlots"])
              , {minWidthBreakpoint: c} = (0,
            Vt.bC)()
              , {matchedTemplate: u, matchedTemplatesAtLargerMinWidthBreakpoints: g} = Kl({
                minWidthBreakpoint: c,
                responsiveTemplates: a
            })
              , v = Zl({
                matchedTemplate: u,
                matchedTemplatesAtLargerMinWidthBreakpoints: g,
                slotNames: [Gt.WL.SUBNAV, Gt.WL.END]
            })
              , h = Xl(u)
              , y = ql({
                matchedTemplate: u,
                slotsConfigKeys: s
            });
            return d && l ? (0,
            o.t)(Ul, {
                endSlotInfoPaneAsResponsiveMenuCallbacks: e,
                errorBoundaryProps: t,
                layoutConfig: n,
                lightboxProviderVariables: i,
                matchedSlotsConfigKeys: y,
                matchedTemplate: u,
                slots: r,
                slotsResponsiveWidths: v,
                UNSAFE_dialogPaddingLeftOffset: h
            }) : (0,
            o.t)(Hl, {
                endSlotInfoPaneAsResponsiveMenuCallbacks: e,
                errorBoundaryProps: t,
                layoutConfig: n,
                lightboxProviderVariables: i,
                matchedSlotsConfigKeys: y,
                matchedTemplate: u,
                slots: r,
                slotsResponsiveWidths: v,
                UNSAFE_dialogPaddingLeftOffset: h
            })
        }
        ));
        Vl.displayName = "LayoutWithResponsive";
        const Gl = Ll((({appLayoutAreaProps: e, errorBoundaryProps: t, lightboxProviderVariables: n, matchedSlotsConfigKeys: i, matchedTemplate: a, slots: s})=>{
            var l, d;
            const c = (0,
            f.w)("Core Rendering Layer, Lightbox")
              , u = (0,
            Y.Cq)()
              , {host: v} = (0,
            g.SE)()
              , {commandChangeReportingService: h, commandHistoryService: y, windowId: b} = (0,
            A.i)()
              , {enableApolloDevtools: C, enableApolloDevtoolsStyles: S, isDiagnosticsPanelEnabled: I} = (0,
            m.NC)(p.J.Diagnostics)
              , {enableEntityMoreInfo: k, enablePptSharingProviderRemountFix: N} = (0,
            m.NC)(p.J.Core, ["enableEntityMoreInfo", "enablePptSharingProviderRemountFix"]);
            (({enableApolloDevtools: e, host: t, enableApolloDevtoolsStyles: n})=>{
                (0,
                r.useEffect)((()=>{
                    var i;
                    if (e)
                        try {
                            n === ne.Bh.Maglev ? t.chunkLoader.loadChunk(["apollo-devtools-maglev-css"]) : n === ne.Bh.Desktop && t.chunkLoader.loadChunk(["apollo-devtools-multi-window-css"]),
                            t.chunkLoader.loadChunk(["apollo-devtools-publisher"])
                        } catch (e) {
                            let t = e;
                            throw e instanceof Ra.Y && (t = `${e.code}::${null === (i = e.prevError) || void 0 === i ? void 0 : i.message}`),
                            new Error(t)
                        }
                }
                ), [e, t, n])
            }
            )({
                enableApolloDevtools: Boolean(C),
                enableApolloDevtoolsStyles: S,
                host: v
            }),
            Yl();
            const {areSlotsInErrorStateRef: E, correlationIdRef: T, hasLayoutViewChanged: w, showActionsOnError: M} = t
              , D = (0,
            o.t)(vi, Object.assign({
                "data-tid": "experience-layout",
                template: a
            }, e["app-layout"], {
                children: [(0,
                o.t)(Al, {
                    appLayoutAreaProps: e,
                    areSlotsInErrorStateRef: E,
                    correlationIdRef: T,
                    hasLayoutViewChanged: w,
                    showActionsOnError: M,
                    slots: s,
                    slotsConfigKeys: i
                }), (0,
                o.t)(Tl, {})]
            }))
              , L = null === (d = null === (l = s[Gt.WL.MAIN]) || void 0 === l ? void 0 : l.variables) || void 0 === d ? void 0 : d.UNSAFE_enablePptProvider
              , O = N || L ? (0,
            o.t)(Yn, Object.assign({
                isEnabled: L
            }, {
                children: D
            })) : D;
            return (0,
            o.t)(fa.D2, {
                children: (0,
                o.t)(ii.E, Object.assign({
                    host: v,
                    i18n: u,
                    logger: c,
                    variables: n
                }, {
                    children: (0,
                    o.t)(ni.ZG, {
                        children: [O, I && (0,
                        o.t)(ti, {
                            commandChangeReportingService: h,
                            commandHistoryService: y,
                            windowId: b
                        }), !k && (0,
                        o.t)(yi, {}), (0,
                        o.t)(Wn, {})]
                    })
                }))
            })
        }
        ));
        Gl.displayName = "BaseAppLayout";
        const Yl = ()=>{
            const {getExperienceProps: e} = (0,
            A.i)()
              , {host: t} = (0,
            g.SE)()
              , {shouldSetBodyTransparent: n=!1} = (0,
            m.NC)(p.J.Core, ["shouldSetBodyTransparent"])
              , i = (0,
            Jn.WD)(Gt.nh.COMPLETE)
              , a = Rl(!1);
            Bl((()=>{
                if (!a.current && i) {
                    const {uiVariables: i} = e(["uiVariables"]);
                    if (!(null == i ? void 0 : i.isShareToTeams) || n) {
                        t.document.body.style.backgroundColor = "transparent"
                    }
                    a.current = !0
                }
            }
            ), [i, e, t, n])
        }
          , Jl = ({commandReportingCallbacks: e, correlationIdRef: t, entitiesHierarchyHelpers: n, viewEntitiesRef: i})=>Ol((({appId: a, appRenderMode: r, enableSlotTransition: s, entity: l, entityCacheBuster: d, entityWithoutOptions: c, getEntityOptions: u, phaseStateMachine: g, render: m, shouldErrorOnEntityCommandTimeout: p, slotName: v, updateEntity: h, updateEntityState: y, viewEntityName: A})=>(0,
        o.t)(Ta, {
            appId: a,
            appRenderMode: r,
            commandReportingCallbacks: e,
            correlationId: t.current,
            enableSlotTransition: s,
            entitiesHierarchyHelpers: n,
            entity: l,
            entityCacheBuster: d,
            entityWithoutOptions: c,
            getEntityOptions: u,
            phaseStateMachine: g,
            render: m,
            shouldErrorOnEntityCommandTimeout: p,
            slotName: v,
            updateEntity: h,
            updateEntityState: y,
            viewEntitiesRef: i,
            viewEntityName: A
        })), [e, t, n, i])
          , Kl = ({minWidthBreakpoint: e, responsiveTemplates: t})=>{
            const {host: n} = (0,
            g.SE)()
              , [i,a] = xl(e)
              , o = td(n)
              , r = Rl(o)
              , s = Ol((e=>{
                a((t=>t !== e ? e : t))
            }
            ), [a])
              , l = (0,
            f.w)("Core Rendering Layer, LayoutWithSlots");
            return jl((()=>{
                function e() {
                    const e = ed(n);
                    if (e !== r.current) {
                        const {minWidthBreakpoint: t} = (0,
                        Ut.RB)({
                            height: n.self.innerHeight,
                            width: n.self.innerWidth,
                            host: n
                        });
                        l.log(`useMatchedTemplate: zoom.current, ${r.current}, new currentZoom: ${e}, updating minWidthBreakpoint to ${t} via getResponsiveBreakpoints with host.self.innerHeight ${n.self.innerHeight} and host.self.innerWidth ${n.self.innerWidth}`),
                        s(t),
                        r.current = e
                    }
                }
                return n.addEventListener("resize", e),
                e(),
                ()=>n.removeEventListener("resize", e)
            }
            ), [n, l, s]),
            jl((()=>{
                s(e)
            }
            ), [e, s]),
            Pl((()=>{
                let e = 0
                  , n = "";
                for (const {minWidthBreakpoint: a, template: o} of t) {
                    if (!(i >= a))
                        break;
                    n = o,
                    e++
                }
                return {
                    matchedTemplate: n,
                    matchedTemplatesAtLargerMinWidthBreakpoints: t.slice(e)
                }
            }
            ), [i, t])
        }
          , ql = ({matchedTemplate: e, slotsConfigKeys: t})=>Pl((()=>t.filter((t=>e.includes(t) || t === Gt.WL.MODAL || t === Gt.WL.CONFIGURATIONS || t === Gt.WL.MONITOR || t === Gt.WL.IN_APP_NOTIFICATIONS))), [e, t])
          , Zl = ({matchedTemplate: e, matchedTemplatesAtLargerMinWidthBreakpoints: t, slotNames: n})=>Pl((()=>{
            const i = $l({
                slotNames: n,
                template: e
            })
              , a = {};
            n.forEach((e=>{
                const t = i[e];
                a[e] = {
                    slotWidthAtCurrentMinWidthBreakpoint: t,
                    firstSlotWidthGreaterThan0: t
                }
            }
            ));
            let o = n;
            for (const {template: e} of t) {
                if (o = o.filter((e=>{
                    var t;
                    const n = null === (t = a[e]) || void 0 === t ? void 0 : t.firstSlotWidthGreaterThan0;
                    return !n || parseInt(n, 10) <= 0
                }
                )),
                !o.length)
                    break;
                const t = $l({
                    slotNames: o,
                    template: e
                });
                o.forEach((e=>{
                    const n = t[e];
                    n && parseInt(n, 10) > 0 && Object.assign(a[e] || {}, {
                        firstSlotWidthGreaterThan0: n
                    })
                }
                ))
            }
            return a
        }
        ), [e, t, n])
          , Xl = e=>Pl((()=>{
            const t = $l({
                template: e,
                slotNames: [Gt.WL.NAV, Gt.WL.SUBNAV]
            })
              , n = t[Gt.WL.NAV]
              , i = t[Gt.WL.SUBNAV];
            return n && i ? `calc(${n} + ${i})` : n || i || 0
        }
        ), [e])
          , $l = ({slotNames: e, template: t})=>{
            const [n,i] = t.split("/")
              , a = n.split("\n")
              , o = i.match(/\S+\(.*?\)|\S+/g) || []
              , r = {};
            for (const t of a) {
                if (!(e = e.filter((e=>!r[e]))).length)
                    break;
                const n = t.trim().split('" ')[0].substring(1).trim().split(/[ ]+/);
                for (const t of e) {
                    const e = n.findIndex((e=>e === t));
                    e > -1 && (r[t] = o[e])
                }
            }
            return r
        }
          , ed = e=>{
            const {self: {innerWidth: t, outerWidth: n}} = e;
            return Math.round(n / t * 100) / 100
        }
          , td = e=>{
            const t = Rl(!1)
              , n = t.current || 0 === t.current ? t.current : ed(e);
            return jl((()=>{
                t.current || 0 === t.current || (t.current = n)
            }
            ), [n]),
            n
        }
          , nd = ({value: e})=>{
            const t = Rl(e);
            return t.current !== e && (t.current = e),
            t
        }
        ;
        var id = n(50711);
        const {memo: ad, useCallback: od, useMemo: rd, useRef: sd, useState: ld} = s
          , dd = ad((({activeEntities: e, correlationId: t, isNotificationsWindow: n, layoutConfig: i, slotsConfigData: a, windowLayoutService: r})=>{
            cd(),
            (e=>{
                (0,
                ee.__awaiter)(void 0, void 0, void 0, (function*() {
                    var t, n, i, a;
                    const {isMainWindowAppTitleEnabled: o} = (0,
                    m.NC)(p.J.Core, ["isMainWindowAppTitleEnabled"])
                      , r = (0,
                    Y.Cq)()
                      , {updateAppName: s} = (0,
                    id.Pm)()
                      , {appsRegistryService: l} = (0,
                    A.i)()
                      , d = o && ((null === (t = e.subNavEntity) || void 0 === t ? void 0 : t.type) || (null === (n = e.mainEntity) || void 0 === n ? void 0 : n.type));
                    if (!d)
                        return;
                    const c = l.getApp({
                        entityType: d
                    })
                      , u = yield null === (a = null == c ? void 0 : (i = c.manifest).getLocalizedName) || void 0 === a ? void 0 : a.call(i, r);
                    u && s(u)
                }
                ))
            }
            )(e);
            const {areEmptySlotsTransparent: s, correlationId: l, enableTitleBar: d, entitiesHierarchyHelpers: c, layoutRendererDivStyles: u, lightboxProviderVariables: v, responsiveTemplates: h, slotsConfig: y, slotsConfigKeys: b} = fn({
                activeEntities: e,
                correlationId: t,
                isNotificationsWindow: n,
                layoutConfig: i,
                slotsConfigData: a
            })
              , {hasDimensions: C, innerHeight: S, innerWidth: I} = (e=>{
                const t = (0,
                f.w)("Core Rendering Layer, LayoutRenderer > useCurrentDimensionsOnce")
                  , {host: n} = (0,
                g.SE)()
                  , {enableHybridExperienceRendererLayout: i} = (0,
                m.NC)(p.J.Host)
                  , a = Bn(!1)
                  , o = Bn(void 0)
                  , r = Bn({
                    innerHeight: 0,
                    innerWidth: 0
                });
                if (!a.current) {
                    const {self: {innerHeight: e, innerWidth: t}} = n;
                    r.current = {
                        innerHeight: e,
                        innerWidth: t
                    }
                }
                const {innerHeight: s, innerWidth: l} = r.current
                  , [d,c] = jn(s > 0 || l > 0 || !i || e);
                return void 0 !== o.current || d || a.current || (o.current = Pn({
                    host: n,
                    innerDimensionsRef: r,
                    intervalIdRef: o,
                    logger: t,
                    setHasDimensions: c
                })),
                On((()=>(a.current || (a.current = !0),
                ()=>n.clearInterval(o.current))), [n]),
                {
                    hasDimensions: d,
                    innerHeight: s,
                    innerWidth: l
                }
            }
            )(n)
              , k = sd(null)
              , N = od((e=>{
                k.current = e
            }
            ), [k])
              , {host: E} = (0,
            g.SE)()
              , T = rd((()=>(0,
            Ut.RB)({
                height: S,
                width: I,
                host: E
            })), [E, S, I])
              , [w,M] = ld(void 0);
            return (0,
            o.t)("div", Object.assign({
                "data-tid": w,
                ref: N,
                style: u
            }, {
                children: C ? (0,
                o.t)(Vt.Et, Object.assign({
                    containerRef: k,
                    initialSize: T
                }, {
                    children: (0,
                    o.t)(_l, {
                        activeEntities: e,
                        areEmptySlotsTransparent: s,
                        correlationId: l,
                        enableTitleBar: d,
                        entitiesHierarchyHelpers: c,
                        layoutConfig: i,
                        lightboxProviderVariables: v,
                        responsiveTemplates: h,
                        setDataTid: M,
                        slotsConfig: y,
                        slotsConfigKeys: b,
                        windowLayoutService: r
                    })
                })) : null
            }))
        }
        ));
        dd.displayName = "RootLayoutRenderer";
        const cd = ()=>{
            var e, t;
            const {altScenarioService: n} = (0,
            A.i)()
              , {scenarioFactory: i} = (0,
            g.SE)()
              , a = sd(!1);
            a.current || (i.startStep(Me.RG.WindowLaunchTime, Me.ck.RenderBaseApp),
            null === (e = i.findScenario(Me.RG.ExperienceReady)) || void 0 === e || e.startStep(Me.ck.RenderBaseApp),
            null === (t = null == n ? void 0 : n.altScenario) || void 0 === t || t.startStep(Me.ck.RenderBaseApp),
            a.current = !0)
        }
        ;
        var ud = n(820140);
        const gd = e=>{
            const {context: t, enableHybridExperienceRendererLayout: n, endEntity: i, headerEntity: a, isAppSwitcherPage: o, isExploratoryLicenseAcquirementPage: r, isMainEntityAuth: s, isMainEntityTflFre: l, isNewChat: d, isStandardLayoutMode: c, isTitleBarEntitySearchOrTflfre: u, isToastsApp: g, isUserAnonymous: m, logger: p, titleBarConfig: v, mainEntity: h, monitorEntity: y, inAppNotificationsEntity: A, startEntity: f, subNavEntity: b} = e
              , {disableNotificationsBanners: C, forceDisableTitleBar: S} = function(e, {appsRegistryService: t, coreSettings: n}) {
                var i, a, o, r;
                const s = null === (i = t.getApp({
                    entityType: pd(e, Gt.WL.MAIN),
                    renderMode: Yt.e.Main
                })) || void 0 === i ? void 0 : i.getAppViewEntitiesProps;
                return null !== (r = null === (o = null === (a = null == s ? void 0 : s({
                    coreSettings: n,
                    entity: e
                })) || void 0 === a ? void 0 : a.mainEntity) || void 0 === o ? void 0 : o[Yt.e.Main]) && void 0 !== r ? r : {
                    disableNotificationsBanners: !1,
                    forceDisableTitleBar: !1
                }
            }(h, t)
              , I = md(S, v, t, m);
            return {
                subNavSlotConfig: vd(!g && !!n && c, b, Gt.WL.SUBNAV, "subNavEntity", Yt.e.Rail, t, p),
                headerSlotConfig: vd(!g && !d, a, Gt.WL.HEADER, "headerEntity", Yt.e.HorizontalBar, t, p),
                startSlotConfig: vd(!g && !!n, f, Gt.WL.START, "startEntity", Yt.e.Rail, t, p),
                mainSlotConfig: vd(!0, h, Gt.WL.MAIN, "mainEntity", Yt.e.Main, t, p),
                endSlotConfig: vd(!g, i, Gt.WL.END, "endEntity", Yt.e.Rail, t, p),
                navSlotConfig: hd(!g && !!n && c && !s && !m && !l && !o && !r, Gt.WL.NAV, "mainEntity", Yt.e.VerticalBar, t, p),
                notificationsSlotConfig: hd(!C, Gt.WL.NOTIFICATIONS, "mainEntity", Yt.e.ThinHorizontalBar, t, p),
                inAppNotificationsSlotConfig: vd(!g, A, Gt.WL.IN_APP_NOTIFICATIONS, "inAppNotificationsEntity", Yt.e.PartialOverlay, t, p),
                titleBarSlotConfig: u ? vd(I, h, Gt.WL.TITLE_BAR, "mainEntity", Yt.e.TitleBar, t, p) : hd(I, Gt.WL.TITLE_BAR, "mainEntity", Yt.e.TitleBar, t, p),
                toastsSlotConfig: hd(!g, Gt.WL.TOASTS, "mainEntity", Yt.e.PartialOverlay, t, p),
                configurationsSlotConfig: hd(!g, Gt.WL.CONFIGURATIONS, "mainEntity", Yt.e.Configurations, t, p),
                monitorSlotConfig: vd(!g, y, Gt.WL.MONITOR, "monitorEntity", Yt.e.Monitor, t, p),
                contextualNotificationsSlotConfig: hd(!g, Gt.WL.CONTEXTUAL_NOTIFICATIONS, "mainEntity", Yt.e.OverlayThinHorizontalBar, t, p)
            }
        }
          , md = (e,t,n,i)=>{
            const {layoutMode: a, isFullscreen: o} = t
              , {coreSettings: r} = n;
            let {enableTitleBar: s} = r.get(p.J.Core);
            const {enableHybridExperienceRendererLayout: l} = r.get(p.J.Host);
            s = s && !e,
            s = s && !(t.isMainWindow && !t.isInCypressIframe);
            const d = l && a === ie.lO.standard
              , c = a === ie.lO.minimode;
            s = !!(d || c || s);
            return !(i && t.isWeb || !s || o)
        }
        ;
        function pd(e, t) {
            const n = ((null == e ? void 0 : e.type) === Zt.py.search || (null == e ? void 0 : e.type) === Zt.py.tflfre) && t === Gt.WL.TITLE_BAR;
            return (null == e ? void 0 : e.type) === Zt.py.framework || n || null == e ? void 0 : e.type
        }
        const vd = (e,t,n,i,a,{appsRegistryService: o},r)=>{
            const s = o.getApp({
                entityType: pd(t, n),
                renderMode: a
            })
              , l = null == s ? void 0 : s.manifest.id;
            return !l && t && t.type && t.type !== Zt.py.framework ? r.error(`No app found for entityType:${t.type} and appRenderMode:${a} in slot ${n}`) : e && t && l && r.log(`SlotConfig:\n  entityType:${t.type}\n  entityAction:${t.action}\n  slotName:${n}\n  viewEntityName:${i}\n  appRenderMode:${a}\n  appId:${l}`),
            e && t && l ? {
                entity: t,
                slotName: n,
                viewEntityName: i,
                appRenderMode: a,
                appId: l
            } : null
        }
          , hd = (e,t,n,i,a,o)=>vd(e, {
            action: Zt.uk.view,
            id: null,
            linkedEntity: null,
            options: null,
            type: Zt.py.framework
        }, t, n, i, a, o)
          , {memo: yd, useMemo: Ad, useRef: fd, useState: bd, useEffect: Cd} = s
          , Sd = yd((e=>e.activeWindowsService.enableDecoupleCommandingFromApollo ? (0,
        o.t)(Id, Object.assign({}, e)) : (0,
        o.t)(kd, Object.assign({}, e))))
          , Id = yd((({activeWindowsService: e, localStorage: t})=>{
            const {windowId: n} = (0,
            A.i)()
              , [i,a] = bd(e.getActiveWindow(n))
              , r = fd(!1);
            let s = null;
            r.current || (r.current = !0,
            s = e.getActiveWindowObservable(n).subscribe((e=>a(e))));
            const l = fd(s);
            Cd((()=>()=>{
                var e;
                return null === (e = l.current) || void 0 === e ? void 0 : e.unsubscribe()
            }
            ), [l]);
            const d = Ad((()=>i && {
                activeWindow: i
            }), [i])
              , c = Ad((()=>e.getWindowLayoutService(n)), [e, n]);
            return (0,
            o.t)(Nd, {
                windowLayoutService: c,
                localStorage: t,
                error: void 0,
                loading: !1,
                data: d
            })
        }
        ));
        Id.displayName = "RootLayoutContainerDecoupled";
        const kd = yd((e=>{
            const {windowId: t} = (0,
            A.i)()
              , n = Ad((()=>e.activeWindowsService.getWindowLayoutService(t)), [e.activeWindowsService, t])
              , {data: i, error: a, loading: r} = (0,
            E.a)(Qt, {
                variables: {
                    windowId: t
                }
            });
            return (0,
            o.t)(Nd, Object.assign({}, e, {
                windowLayoutService: n,
                data: i,
                error: a,
                loading: r
            }))
        }
        ));
        kd.displayName = "RootLayoutContainerWithApollo";
        const Nd = yd((({localStorage: e, loading: t, error: n, data: i, windowLayoutService: a})=>{
            var r, s;
            const {shouldClearLocalStorageOnMainWindowError: l} = (0,
            m.NC)(p.J.Core, ["shouldClearLocalStorageOnMainWindowError"])
              , {authenticationUser: d, coreSettings: c, loggerFactory: u, platformService: v} = (0,
            g.SE)()
              , {appsRegistryService: h} = (0,
            A.i)()
              , y = fd();
            if (t)
                return null;
            if (n || !i) {
                if (l) {
                    const t = d ? (0,
                    pt.b4)(d) : void 0;
                    (0,
                    ud.nC)(t).map((t=>e.remove(t, "Experience")));
                    u.newLogger("RootLayoutContainer", "components-core-layout").log("Cleared active entities keys with storage scope experience from local storage")
                }
                throw n || (0,
                C.Tr)("RootLayoutContainer", S.jK.ResourceNotFound, "", void 0, "No activeWindow data available")
            }
            if (!y.current || !(null === (r = i.activeWindow) || void 0 === r ? void 0 : r.userContextId) || (null === (s = null == i ? void 0 : i.activeWindow) || void 0 === s ? void 0 : s.userContextId) === (null == d ? void 0 : d.id)) {
                const e = (null == d ? void 0 : d.role) === gt.w4.Anonymous
                  , t = ((e,t,n)=>{
                    const i = t.loggerFactory.newLogger("getSlotsConfig", "components-core-layout")
                      , {coreSettings: a} = t
                      , {enableHybridExperienceRendererLayout: o} = a.get(p.J.Host)
                      , {activeEntities: {subNavEntity: r, headerEntity: s, startEntity: l, mainEntity: d, endEntity: c, monitorEntity: u, inAppNotificationsEntity: g}, layoutConfig: {isFullscreen: m, layoutMode: v}} = e
                      , h = n.isUserAnonymous
                      , y = Object.assign(Object.assign({}, n), {
                        isFullscreen: m,
                        layoutMode: v
                    })
                      , A = d.type === Zt.py.identity
                      , f = d.type === Zt.py.tflfre
                      , b = d.type === Zt.py.pearnotdefaultapp
                      , C = d.type === Zt.py.toasts
                      , S = d.type === Zt.py.exploratorylicense
                      , I = d.type === Zt.py.search || d.type === Zt.py.tflfre
                      , k = "newchat" === d.id
                      , N = v === ie.lO.standard;
                    return gd({
                        context: t,
                        enableHybridExperienceRendererLayout: o,
                        endEntity: c,
                        headerEntity: s,
                        isAppSwitcherPage: b,
                        isExploratoryLicenseAcquirementPage: S,
                        isMainEntityAuth: A,
                        isMainEntityTflFre: f,
                        isNewChat: k,
                        isStandardLayoutMode: N,
                        isTitleBarEntitySearchOrTflfre: I,
                        isToastsApp: C,
                        isUserAnonymous: h,
                        logger: i,
                        mainEntity: d,
                        monitorEntity: u,
                        titleBarConfig: y,
                        inAppNotificationsEntity: g,
                        startEntity: l,
                        subNavEntity: r
                    })
                }
                )(i.activeWindow, {
                    appsRegistryService: h,
                    coreSettings: c,
                    loggerFactory: u
                }, {
                    isInCypressIframe: (null == v ? void 0 : v.config.isInCypressFrame) || !1,
                    isMainWindow: i.activeWindow.isMainWindow,
                    isUserAnonymous: e,
                    isWeb: (null == v ? void 0 : v.config.clientType) === ne.Bh.Web
                });
                y.current = {
                    activeWindow: i.activeWindow,
                    slotsConfig: t
                }
            }
            const {activeWindow: {activeEntities: f, correlation: {id: b}, isNotificationsWindow: I, layoutConfig: k}, slotsConfig: N} = y.current;
            return (0,
            o.t)(dd, {
                activeEntities: f,
                correlationId: b,
                isNotificationsWindow: I,
                layoutConfig: k,
                slotsConfigData: N,
                windowLayoutService: a
            })
        }
        ));
        Sd.displayName = "RootLayoutContainer";
        const {memo: Ed} = s
          , Td = ()=>Promise.all([n.e(568724), n.e(127919), n.e(582271)]).then(n.bind(n, 570266))
          , wd = Ed((({reactDiagnosticsService: e})=>e ? (0,
        o.t)(Nr.o, {
            factory: Td,
            props: {
                reactDiagnosticsService: e
            }
        }) : null));
        wd.displayName = "ReactDiagnosticsLazyLoader";
        var Md = n(645308)
          , Dd = n(656706);
        const Ld = (0,
        at.s)({
            outstandingRequestContainer: {
                Byoj8tv: "fdghr9"
            },
            outstandingRequestEntry: {
                jrapky: "f19f4twv",
                B6of3ja: "f1hu3pq6",
                B23mt2n: "f1suveun",
                r5ydy0: "f1vm208c"
            },
            outstandingRequestCount: {
                uwmqm3: ["fe8sypw", "f1hbs5po"]
            },
            toolbarPopupH3: {
                Be2twd7: "fy9rknc",
                Bhrd7zp: "flh3ekv"
            },
            multiWindowContainer: {
                De3pzq: "fxugw4r",
                B4j52fo: "f5ogflp",
                Bekrc4i: ["f1hqa2wf", "finvdd3"],
                Bn0qgzm: "f1f09k3d",
                ibv6hh: ["finvdd3", "f1hqa2wf"],
                icvyot: "fzkkow9",
                vrafjx: ["fcdblym", "fjik90z"],
                oivjwe: "fg706s2",
                wvpqe5: ["f1deefiw", "f1n71otn"],
                g2u3we: "fj3muxo",
                h3c5rm: ["f1akhkt", "f1lxtadh"],
                B9xav0g: "f1aperda",
                zhjwy3: ["f1lxtadh", "f1akhkt"],
                Bqenvij: "feu40oc",
                j35jbq: ["f1e31b4d", "f1vgc2s3"],
                B68tc82: "f1oy3dpc",
                Bmxbyg5: "f5zp4f",
                qhf8xq: "f19dog8a",
                Bhzewxz: "f1jy8w12"
            },
            multiWindowDashboard: {
                sj55zd: "f19n0e5",
                mc9l5x: "ftgm304",
                Be2twd7: "f1hqn85h",
                z8tnut: "f18l3412",
                z189sj: ["f1hbs5po", "fe8sypw"],
                Byoj8tv: "f4wojya",
                uwmqm3: ["fe8sypw", "f1hbs5po"]
            }
        }, {
            d: [".fdghr9{padding-bottom:5px;}", ".f19f4twv{margin-bottom:0;}", ".f1hu3pq6{margin-top:0;}", ".f1suveun{webkit-margin-after:0;}", ".f1vm208c{webkit-margin-before:0;}", ".fe8sypw{padding-left:6.25px;}", ".f1hbs5po{padding-right:6.25px;}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".flh3ekv{font-weight:var(--fontWeightBold);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f5ogflp{border-top-width:1px;}", ".f1hqa2wf{border-right-width:1px;}", ".finvdd3{border-left-width:1px;}", ".f1f09k3d{border-bottom-width:1px;}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".f1deefiw{border-left-style:none;}", ".f1n71otn{border-right-style:none;}", ".fj3muxo{border-top-color:var(--colorNeutralStroke1);}", ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}", ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}", ".f1aperda{border-bottom-color:var(--colorNeutralStroke1);}", ".feu40oc{height:455px;}", ".f1e31b4d{right:0;}", ".f1vgc2s3{left:0;}", ".f1oy3dpc{overflow-x:auto;}", ".f5zp4f{overflow-y:auto;}", ".f19dog8a{position:fixed;}", ".f1jy8w12{top:93px;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".ftgm304{display:block;}", ".f1hqn85h{font-size:7.5px;}", ".f18l3412{padding-top:6.25px;}", ".f4wojya{padding-bottom:6.25px;}"]
        })
          , Od = ()=>n.e(762058).then(n.bind(n, 611330))
          , Bd = ({enablePerfDashboardOnInitialRender: e})=>{
            const [t,n] = r.useState(e)
              , i = Ld()
              , a = r.useCallback((()=>{
                n((e=>!e))
            }
            ), [n]);
            return (0,
            te.bx)("ShowPerformanceDashboard", a),
            t ? (0,
            o.t)(ye.o, {
                factory: Od,
                props: {
                    styles: i
                }
            }) : null
        }
          , {memo: jd, useEffect: Pd, useMemo: Rd, useRef: xd, useState: Fd} = s
          , _d = jd((({context$: e, coreServices: t, getExperienceProps: n, reactDiagnosticsService: i, rootElement: a, windowId: r, window: s})=>{
            const {altScenarioService: l, context: d} = Wd({
                context$: e,
                coreServices: t,
                rootElement: a,
                windowId: r,
                window: s
            });
            if (void 0 === d)
                return null;
            const {activeWindowsService: c, authenticationUser: u, appsRegistryService: g, commandChangeReportingService: m, commandHistoryService: v, commandReportingService: h, commandResultService: y, experienceChangeReportingService: A, localStorage: f, scheduler: b} = d
              , {isDiagnosticsPanelEnabled: C, enableReactDiagnostics: S, enableLogsFilesDownload: I} = t.coreSettings.get(p.J.Diagnostics)
              , {enableCentralDataLayer: k} = t.coreSettings.get(p.J.Host)
              , {enableMTMARemountOnRootProvider: N} = t.coreSettings.get(p.J.Core)
              , E = u && N ? (0,
            pt.b4)(u) : "";
            return (0,
            o.t)(Bt, Object.assign({
                altScenarioService: l,
                appsRegistryService: g,
                commandChangeReportingService: m,
                commandHistoryService: v,
                commandReportingService: h,
                commandResultService: y,
                context: d,
                experienceChangeReportingService: A,
                getExperienceProps: n,
                rootElement: a,
                scheduler: b,
                windowId: r
            }, {
                children: [(0,
                o.t)(Sd, {
                    activeWindowsService: c,
                    localStorage: f
                }), I && (0,
                o.t)(Md.$, {}), (0,
                o.t)(wd, {
                    reactDiagnosticsService: i
                }), C && !1, k && (0,
                o.t)(Bd, {
                    enablePerfDashboardOnInitialRender: !!S
                })]
            }), E)
        }
        ));
        _d.displayName = "RootRenderer";
        const Wd = ({context$: e, coreServices: t, rootElement: n, windowId: i, window: a})=>{
            var o;
            const {altScenarioService: r, loggerFactory: s} = t;
            null === (o = null == r ? void 0 : r.altScenario) || void 0 === o || o.startStep(Me.ck.RenderRoot);
            const [l,d] = Fd()
              , c = xd(!1);
            let u = null;
            c.current || (u = e.subscribe((e=>{
                d(e)
            }
            ), (e=>{
                (0,
                Dd.k)(e, n, a, i, t)
            }
            )),
            c.current = !0);
            const g = xd(u);
            return Pd((()=>()=>{
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.unsubscribe()
            }
            ), [g]),
            Pd((()=>()=>{
                if (l) {
                    const {_cleanupFns: e=[]} = l;
                    e.forEach((e=>{
                        var t;
                        try {
                            e(l)
                        } catch (e) {
                            const n = s.newLogger("RootRenderer", "components-core-layout");
                            null === (t = n.errorToTelemetry) || void 0 === t || t.call(n, "Failed to cleanup context", "webclient_framework_foundation_components_core_react_renderer", {
                                errors: `${e.message}`
                            }, !0)
                        }
                    }
                    ))
                }
            }
            ), [l, s]),
            Rd((()=>({
                altScenarioService: r,
                context: l
            })), [r, l])
        }
        ;
        var zd = n(347601)
          , Qd = n(437210)
          , Hd = n(848085)
          , Ud = n(832666);
        const Vd = Gt.WL.MAIN
          , Gd = Gt.WL.MODAL
          , Yd = "minmax(0, 1fr)"
          , Jd = "minmax(0, 1fr)"
          , Kd = [{
            slots: [Vd, Gd],
            responsiveTemplates: [{
                minWidthBreakpoint: Ud.Rd.IS_GREATER_THAN_0,
                template: `\n          "${Vd}"     ${Yd} /\n          ${Jd}\n        `
            }]
        }, {
            layoutKey: Jt.FU.HYER,
            slots: [Vd, Gd],
            responsiveTemplates: [{
                minWidthBreakpoint: Ud.Rd.IS_GREATER_THAN_0,
                template: `\n          "${Vd}"     ${Yd} /\n          ${Jd}\n        `
            }]
        }]
          , qd = Gt.WL.MAIN
          , Zd = Gt.WL.MODAL
          , Xd = "minmax(0, 1fr)"
          , $d = "minmax(0, 1fr)"
          , ec = [{
            slots: [qd, Zd],
            responsiveTemplates: [{
                minWidthBreakpoint: Ud.Rd.IS_GREATER_THAN_0,
                template: `\n          "${qd}"     ${Xd} /\n          ${$d}\n        `
            }]
        }, {
            layoutKey: Jt.FU.HYER,
            slots: [qd, Zd],
            responsiveTemplates: [{
                minWidthBreakpoint: Ud.Rd.IS_GREATER_THAN_0,
                template: `\n          "${qd}"     ${Xd} /\n          ${$d}\n        `
            }]
        }];
        function tc({layoutKey: e, layoutMode: t}) {
            const n = {
                [ie.lO.focus]: ec,
                [ie.lO.minimal]: [],
                [ie.lO.standard]: Kd,
                [ie.lO.minimode]: []
            };
            return new Jt.ZG({
                layoutKey: e,
                layoutMode: t,
                layoutTemplatesPerLayoutMode: n
            })
        }
        var nc = n(208569)
    }
    ,
    883014: (e,t,n)=>{
        "use strict";
        var i;
        n.d(t, {
            m9: ()=>m,
            D2: ()=>p,
            BL: ()=>v
        });
        var a = n(250033)
          , o = n(481339)
          , r = n(50805)
          , s = n(814423);
        const {useCallback: l, useContext: d, useEffect: c, createContext: u, useState: g} = i || (i = n.t(o, 2))
          , m = u({
            setErrorSlot: ()=>{}
            ,
            setCoreError: ()=>{}
            ,
            errorSlot: null,
            clearErrors: ()=>{}
        })
          , p = ({children: e})=>{
            const {isDiagnosticsPanelEnabled: t} = (0,
            s.NC)(r.J.Diagnostics)
              , [n,i] = g(null)
              , [d,c] = g(!1)
              , u = l((()=>{
                c(!0)
            }
            ), [])
              , p = l((()=>{
                i(null),
                c(!1)
            }
            ), []);
            if (d)
                throw p(),
                new Error("Simulated core error");
            return t ? (0,
            a.t)(m.Provider, Object.assign({
                value: {
                    setCoreError: u,
                    setErrorSlot: i,
                    errorSlot: n,
                    clearErrors: p
                }
            }, {
                children: e
            })) : (0,
            a.t)(o.Fragment, {
                children: e
            })
        }
          , v = e=>{
            const {isDiagnosticsPanelEnabled: t} = (0,
            s.NC)(r.J.Diagnostics)
              , {errorSlot: n, clearErrors: i} = d(m);
            c((()=>{
                if (t && n === e)
                    throw i(),
                    new Error(`Simulated error in ${e}`)
            }
            ), [i, t, n, e])
        }
    }
    ,
    736972: (e,t,n)=>{
        "use strict";
        n.d(t, {
            n: ()=>d
        });
        var i = n(554694)
          , a = n(95104)
          , o = n(814423)
          , r = n(50805)
          , s = n(14232);
        const l = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "animationPreferences"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clientPreferences"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "category"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "animation"
                            },
                            __type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ClientPreferencesCategory"
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "AnimationPreferences"
                                    }
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "ID"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableAnimations"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Boolean"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }]
                                }
                            }]
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ClientPreferenceCategoryTypes"
                                }
                            }
                        }
                    }]
                }
            }]
        }
          , d = ()=>{
            const e = (0,
            i.w)("useDisableAnimations")
              , {performanceMode: t} = (0,
            o.NC)(r.J.Host)
              , {enableTurnOffAnimationToggle: n} = (0,
            o.NC)(r.J.Core, ["enableTurnOffAnimationToggle"])
              , s = !!t && t === a.e.Low
              , l = c(!n)
              , d = s || l;
            return e.log(`\n    disableAnimationsFromHostSettings: ${s},\n    disableAnimationsFromPreferences: ${l},\n    disableAnimations: ${d}`),
            d
        }
          , c = e=>{
            var t;
            const {data: n} = (0,
            s.a)(l, {
                skip: !!e
            });
            return !!(null === (t = null == n ? void 0 : n.clientPreferences) || void 0 === t ? void 0 : t.disableAnimations)
        }
    }
    ,
    460414: (e,t,n)=>{
        "use strict";
        n.d(t, {
            p: ()=>l
        });
        var i = n(427662)
          , a = n(814423)
          , o = n(50805)
          , r = n(641639)
          , s = n(263662);
        const l = ()=>{
            const {enableForcedColorsTheme: e} = (0,
            a.NC)(o.J.Core, ["enableForcedColorsTheme"])
              , {host: t} = (0,
            i.SE)();
            return !!e && (0,
            r.Z)(t) === s.f8.Contrast
        }
    }
    ,
    132773: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $$: ()=>g,
            Mg: ()=>m,
            xV: ()=>p
        });
        var i = n(250033)
          , a = n(320225)
          , o = n(481339)
          , r = n(103328)
          , s = n(237628)
          , l = n(266589);
        const d = {
            HeaderInfoBanner: {
                dismissible: !0,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            },
            NonTeamsOnlyFederatedUsersBanner: {
                dismissible: !0,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            },
            UnknownExternalUserBanner: {
                dismissible: !0,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            },
            ExternalChatBanner: {
                dismissible: !0,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            },
            ChattingWithMtoUserBanner: {
                dismissible: !0,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            },
            HeaderPinPostErrorBanner: {
                isDecaying: !0,
                decayTime: 5e3,
                priority: 100,
                variables: {
                    headerInfoBanner: !0
                }
            },
            HeaderMembersTabErrorBanner: {
                isDecaying: !0,
                decayTime: 5e3,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            },
            IBPolicyRejectedBanner: {
                dismissible: !0,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            },
            FederationForbidden: {
                dismissible: !0,
                priority: 100,
                variables: {
                    headerInfoBanner: !0
                }
            },
            MtoUserBanner: {
                dismissible: !0,
                priority: 200,
                variables: {
                    headerInfoBanner: !0
                }
            }
        };
        var c = n(427662);
        const u = o.createContext({
            queueBanner: a.noop,
            dequeueBanner: a.noop,
            BannerSlot: null,
            isDebugEnabled: !1
        })
          , g = o.memo((e=>{
            const {children: t} = e
              , n = o.useContext(r.OO)
              , {BannerSlot: a, dequeueBanner: g, queueBanner: m} = (0,
            l.W)(n, d)
              , p = (()=>{
                const [e,t] = o.useState(!1)
                  , {host: n} = (0,
                c.SE)();
                return o.useEffect((()=>{
                    const e = ({keyCode: e, ctrlKey: n, metaKey: i, altKey: a, shiftKey: o})=>{
                        50 === e && (n || i) && a && o && t((e=>!e))
                    }
                    ;
                    return n.addEventListener("keydown", e),
                    ()=>{
                        n.removeEventListener("keydown", e)
                    }
                }
                ), [n]),
                e
            }
            )();
            return (0,
            i.t)(u.Provider, {
                value: (0,
                s.Q)({
                    BannerSlot: a,
                    dequeueBanner: g,
                    isDebugEnabled: p,
                    queueBanner: m
                }),
                children: t
            })
        }
        ));
        g.displayName = "EntityContextProvider";
        const m = ()=>o.useContext(u)
          , p = e=>t=>(0,
        i.t)(u.Consumer, {
            children: n=>(0,
            i.t)(e, Object.assign({}, Object.assign(Object.assign({}, t), n)))
        })
    }
    ,
    802498: (e,t,n)=>{
        "use strict";
        n.d(t, {
            _: ()=>u
        });
        var i = n(250033)
          , a = (n(481339),
        n(607056))
          , o = n(334472)
          , r = n(220576)
          , s = n(597126)
          , l = n(615716)
          , d = n(955610)
          , c = n.n(d);
        const u = e=>{
            const {customHeader: t, customIllustrationSvg: n, primaryMessage: l, primaryHeaderVariables: d, errorPageVariables: u, illustrationVariables: m} = e
              , {secondaryMessage: p, secondaryMessageVariables: v, tertiaryMessage: h, limitTextWidth: y, button: A} = e;
            return (0,
            i.t)(a.k, Object.assign({
                column: !0,
                fill: !0
            }, {
                children: [t && (0,
                i.t)(a.k.Item, Object.assign({
                    shrink: 0
                }, {
                    children: (0,
                    i.t)(g, {
                        customHeader: t
                    })
                })), (0,
                i.t)(a.k, Object.assign({
                    column: !0,
                    fill: !0,
                    hAlign: "center",
                    vAlign: "center",
                    variables: Object.assign({
                        isErrorPageContent: !0
                    }, u)
                }, {
                    children: [(0,
                    i.t)(o.E, {
                        src: n || c(),
                        fluid: !0,
                        variables: Object.assign({
                            isErrorPageIllustration: !0
                        }, m),
                        "data-tid": "error-image"
                    }), l && (0,
                    i.t)(r.h, {
                        as: "h2",
                        variables: Object.assign({
                            isErrorPagePrimaryMessage: !0,
                            isToolbarPopupH2: !0
                        }, d),
                        content: l
                    }), p && (0,
                    i.t)(s.x, {
                        content: p,
                        variables: Object.assign({
                            isCentered: !0,
                            limitTextWidth: !!y
                        }, v)
                    }), h && (0,
                    i.t)(s.x, {
                        content: h,
                        variables: {
                            isErrorPageTertiaryMessage: !0,
                            limitTextWidth: !!y
                        }
                    }), A && (0,
                    i.t)(a.k.Item, Object.assign({
                        shrink: 0
                    }, {
                        children: A
                    }))]
                }))]
            }))
        }
          , g = ({customHeader: e})=>e || (0,
        i.t)(a.k, Object.assign({
            as: "header",
            gap: "gap.small",
            vAlign: "center",
            variables: {
                isErrorPageHeader: !0
            }
        }, {
            children: (0,
            i.t)(l.e, {
                height: 50,
                width: 50
            })
        }))
    }
    ,
    382626: (e,t,n)=>{
        "use strict";
        n.d(t, {
            q: ()=>c
        });
        var i = n(481339)
          , a = n(50805)
          , o = n(427662)
          , r = n(814423)
          , s = n(14232)
          , l = n(286881)
          , d = n(112589);
        const c = ()=>{
            const {enableMTMA: e=!1} = (0,
            r.NC)(a.J.Core, ["enableMTMA"])
              , {authenticationUser: t} = (0,
            o.SE)()
              , {data: n, subscribeToMore: c} = (0,
            s.a)(l.B, {
                fetchPolicy: "cache-first",
                skip: !e || !t
            });
            return i.useEffect((()=>{
                if (!e || !t)
                    return;
                const n = c({
                    document: d.z,
                    updateQuery: (e,t)=>{
                        const {subscriptionData: {data: n}} = t;
                        return (null == n ? void 0 : n.experienceAccountMode) ? n : e
                    }
                });
                return ()=>n()
            }
            ), [e, c, t]),
            n
        }
    }
    ,
    286881: (e,t,n)=>{
        "use strict";
        n.d(t, {
            B: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ComponentsExperienceAccountModeHookQuery"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "experienceAccountMode"
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ExperienceAccountMode"
                                }
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
    }
    ,
    112589: (e,t,n)=>{
        "use strict";
        n.d(t, {
            z: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "ComponentsExperienceAccountModeHookSubscription"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "experienceAccountMode"
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ExperienceAccountMode"
                                }
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
    }
    ,
    623836: (e,t,n)=>{
        "use strict";
        var i, a, o, r, s, l, d;
        n.d(t, {
            Ff: ()=>i,
            oW: ()=>a,
            mp: ()=>o,
            bc: ()=>r,
            _z: ()=>s,
            D1: ()=>l,
            Hx: ()=>d
        }),
        function(e) {
            e.appBlack = "#252423",
            e.appBlackAlpha10 = "#e8e7e6",
            e.appWhite = "#fff",
            e.appWhiteAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appBrand02 = "#33344a",
            e.appBrand04 = "#464775",
            e.appBrand06 = "#6264a7",
            e.appBrand08 = "#8b8cc7",
            e.appBrand12 = "#bdbde6",
            e.appBrand14 = "#e2e2f6",
            e.appBrand16 = "#f4f4fc",
            e.appBrand00 = "#6264a7",
            e.appGray02 = "#484644",
            e.appGray03 = "#605e5c",
            e.appGray04 = "#979593",
            e.appGray06 = "#c8c6c4",
            e.appGray08 = "#e1dfdd",
            e.appGray09 = "#edebe9",
            e.appGray10 = "#f3f2f1",
            e.appGray12 = "rgba(37, 36, 35, 0.05)",
            e.appGray14 = "#faf9f8",
            e.appMagenta = "#b24782",
            e.appOrchid = "#943670",
            e.appRed = "#c4314b",
            e.appRed08 = "#f3d6d8",
            e.appRed10 = "#fcf4f6",
            e.appYellow = "#f8d22a",
            e.overlayBackground = "rgba(37, 36, 35, 0.75)"
        }(i || (i = {})),
        function(e) {
            e.appBlack = "#fff",
            e.appBlackAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appWhite = "#201f1f",
            e.appWhiteAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appBrand02 = "#e2e3f6",
            e.appBrand04 = "#bdbde6",
            e.appBrand06 = "#a6a7dc",
            e.appBrand08 = "#8b8cc7",
            e.appBrand12 = "#6264a7",
            e.appBrand14 = "#464775",
            e.appBrand16 = "#33344a",
            e.appGray02 = "#c8c6c4",
            e.appGray03 = "#b3b0ad",
            e.appGray04 = "#8a8886",
            e.appGray06 = "#605e5c",
            e.appGray08 = "#484644",
            e.appGray09 = "#3b3a3a",
            e.appGray10 = "#2d2c2c",
            e.appGray12 = "rgba(255, 255, 255, 0.05)",
            e.appGray14 = "#292828",
            e.appMagenta = "#cf6098",
            e.appOrchid = "#ae3d84",
            e.appRed = "#d74553",
            e.appRed08 = "#4f222b",
            e.appRed10 = "#1e060c",
            e.appYellow = "#f8d229",
            e.overlayBackground = "rgba(37,36,35,.75)"
        }(a || (a = {})),
        function(e) {
            e.appBlack = "#fff",
            e.appBlackAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appWhite = "#000",
            e.appWhiteAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appBrand02 = "#000",
            e.appBrand04 = "#ffff00",
            e.appBrand06 = "#00ebff",
            e.appBrand08 = "#ffff00",
            e.appBrand12 = "#ffff00",
            e.appBrand14 = "#000",
            e.appBrand16 = "#000",
            e.appGray02 = "#fff",
            e.appGray03 = "#000",
            e.appGray04 = "#fff",
            e.appGray06 = "#000",
            e.appGray08 = "#fff",
            e.appGray09 = "#000",
            e.appGray10 = "#000",
            e.appGray12 = "#fff",
            e.appGray14 = "#000",
            e.appGreenContrast = "#30f42c",
            e.overlayBackground = "rgba(0,0,0,.75)",
            e.appRed = "#fff",
            e.appRed08 = "#fff",
            e.appRed10 = "#fff"
        }(o || (o = {})),
        function(e) {
            e.appBlack = "#242424",
            e.appBlackAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appWhite = "#fff",
            e.appWhiteAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appBrand02 = "#2F2F4A",
            e.appBrand04 = "#383966",
            e.appBrand05 = "#444791",
            e.appBrand06 = "#5B5FC7",
            e.appBrand08 = "#9092c1",
            e.appBrand12 = "#a5a7cf",
            e.appBrand14 = "#bbbcdd",
            e.appBrand16 = "#E8EBFA",
            e.appGray02 = "#424242",
            e.appGray03 = "#616161",
            e.appGray04 = "#8a8a8a",
            e.appGray06 = "#bdbdbd",
            e.appGray08 = "#d1d1d1",
            e.appGray09 = "#ebebeb",
            e.appGray10 = "#f0f0f0",
            e.appGray12 = "#f5f5f5",
            e.appGray14 = "#fafafa",
            e.appMagenta = "#cf6098",
            e.appOrchid = "#ae3d84",
            e.appRed = "#d74553",
            e.appRed08 = "#4f222b",
            e.appRed10 = "#1e060c",
            e.appYellow = "#f8d229",
            e.overlayBackground = "rgba(37,36,35,.75)"
        }(r || (r = {})),
        function(e) {
            e.appBlack = "#fff",
            e.appBlackAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appWhite = "#292929",
            e.appWhiteAlpha10 = "rgba(255, 255, 255, 0.1)",
            e.appBrand02 = "#C5CBFA",
            e.appBrand04 = "#ACB3FA",
            e.appBrand05 = "#444791",
            e.appBrand06 = "#9399F5",
            e.appBrand08 = "#7A80EB",
            e.appBrand12 = "#5B5FC7",
            e.appBrand14 = "#444791",
            e.appBrand16 = "#2F2F4A",
            e.appGray02 = "#d6d6d6",
            e.appGray03 = "#adadad",
            e.appGray04 = "#8a8a8a",
            e.appGray06 = "#666",
            e.appGray08 = "#5c5c5c",
            e.appGray09 = "#3d3d3d",
            e.appGray10 = "#141414",
            e.appGray12 = "#1f1f1f",
            e.appGray14 = "#242424",
            e.appMagenta = "#cf6098",
            e.appOrchid = "#ae3d84",
            e.appRed = "#f9526b",
            e.appRed08 = "#4f222b",
            e.appRed10 = "#1e060c",
            e.appYellow = "#f8d229",
            e.overlayBackground = "rgba(37,36,35,.75)"
        }(s || (s = {})),
        function(e) {
            e.appOrange01 = "#833122",
            e.appOrange02 = "#a33d2a",
            e.appOrange03 = "#bd432c",
            e.appOrange04 = "#cc4a31",
            e.appOrange = "#e97548",
            e.appOrange14 = "#efdbd3",
            e.appOrange16 = "#f9ecea",
            e.appGreen = "#92c353",
            e.appGreen04 = "#237b4b",
            e.grey2 = "#050505",
            e.grey6 = "#0f0f0f",
            e.grey10 = "#1a1a1a",
            e.grey18 = "#2e2e2e",
            e.grey20 = "#333333",
            e.grey22 = "#383838",
            e.grey88 = "#e0e0e0"
        }(l || (l = {})),
        function(e) {
            e.boxShadowColor = "rgba(0,0,0,.1)",
            e.boxShadowColorDark = "rgba(0,0,0,.25)",
            e.boxShadowColorDarkV2 = "rgba(0,0,0,.3)",
            e.boxShadowColorDarker = "rgba(0,0,0,.5)"
        }(d || (d = {}))
    }
    ,
    178892: (e,t,n)=>{
        "use strict";
        var i;
        function a(e) {
            const t = e.EventTarget;
            return "function" == typeof t ? new t : e.document.createElement("div")
        }
        function o(e, t, n) {
            const i = new CustomEvent(t,{
                bubbles: !1,
                cancelable: !0,
                detail: {
                    name: t,
                    relatedTarget: n
                }
            });
            e.dispatchEvent(i)
        }
        n.d(t, {
            Wt: ()=>i,
            QA: ()=>a,
            pz: ()=>o
        }),
        function(e) {
            e.ArrowKeyOnBody = "arrow-key-on-body"
        }(i || (i = {}))
    }
    ,
    94788: (e,t,n)=>{
        "use strict";
        n.d(t, {
            I3: ()=>r,
            IE: ()=>s,
            _4: ()=>l,
            uT: ()=>d,
            ql: ()=>c
        });
        var i = n(481339)
          , a = n(172587)
          , o = n(178892);
        const r = i.createContext({})
          , s = ()=>i.useContext(r);
        class l {
            constructor() {
                this._lastUnsubscribeIndex = 0,
                this._unsubscribes = {},
                this.focusFirstInContainerById = e=>{
                    var t, n, i;
                    const a = null === (t = this._win) || void 0 === t ? void 0 : t.document.getElementById(e);
                    a && (null === (i = null === (n = this._tabster) || void 0 === n ? void 0 : n.focusable.findFirst({
                        container: a
                    })) || void 0 === i || i.focus())
                }
            }
            static init(e, t, n, i) {
                e._tabster = t,
                e._observed = (0,
                a.yw)(t),
                e._crossOrigin = (0,
                a.pM)(t),
                e._win = n,
                e._experienceContainerFocusReset = i,
                e._focusLostEventTarget = (0,
                o.QA)(n)
            }
            static dispose(e) {
                e.dispose()
            }
            setObservedName(e, t, n) {
                const i = null === t ? void 0 : {
                    names: [t],
                    details: n
                };
                this._tabster && (0,
                a.dx)(e, {
                    observed: i
                }, !0)
            }
            requestFocus(e, t=l._defaultFocusTimeout) {
                var n, i;
                return this._tabster ? (null === (n = this._crossOrigin) || void 0 === n ? void 0 : n.isSetUp()) ? this._crossOrigin.observedElement.requestFocus(e, t) : (null === (i = this._observed) || void 0 === i ? void 0 : i.requestFocus(e, t).result) || Promise.resolve(!1) : Promise.resolve(!1)
            }
            getObservedElement(e) {
                var t;
                return null === (t = this._observed) || void 0 === t ? void 0 : t.getElement(e)
            }
            onObservedElementMounted(e, t, n, i) {
                var a, o, r, s;
                if (!this._tabster)
                    return ()=>{}
                    ;
                const l = null === (a = this._crossOrigin) || void 0 === a ? void 0 : a.isSetUp()
                  , d = ++this._lastUnsubscribeIndex;
                let c;
                const u = ()=>{
                    var e, t, n;
                    c && (null === (e = this._win) || void 0 === e || e.clearTimeout(c),
                    c = void 0),
                    delete this._unsubscribes[d],
                    l ? null === (t = this._crossOrigin) || void 0 === t || t.observedElement.unsubscribe(g) : null === (n = this._observed) || void 0 === n || n.unsubscribe(g)
                }
                ;
                this._unsubscribes[d] = u;
                const g = (i,a)=>{
                    if (!a.names || n && !a.names.includes(n))
                        return;
                    t && u();
                    const o = i instanceof HTMLElement ? ()=>{
                        var e;
                        return Promise.resolve(!!(null === (e = this._tabster) || void 0 === e ? void 0 : e.focusedElement.focus(i)))
                    }
                    : ()=>i.focus();
                    e({
                        names: a.names,
                        details: a.details
                    }, o)
                }
                ;
                return l ? null === (o = this._crossOrigin) || void 0 === o || o.observedElement.subscribe(g) : null === (r = this._observed) || void 0 === r || r.subscribe(g),
                i && (c = null === (s = this._win) || void 0 === s ? void 0 : s.setTimeout((()=>{
                    c = void 0,
                    u()
                }
                ), i)),
                u
            }
            dispatchFocusLostEvent(e, t) {
                this._focusLostEventTarget && (0,
                o.pz)(this._focusLostEventTarget, e, t)
            }
            addFocusLostEventListener(e, t, n) {
                var i;
                null === (i = this._focusLostEventTarget) || void 0 === i || i.addEventListener(e, t, n)
            }
            removeFocusLostEventListener(e, t, n) {
                var i;
                null === (i = this._focusLostEventTarget) || void 0 === i || i.removeEventListener(e, t, n)
            }
            isNavigatingWithKeyboard() {
                var e, t;
                return null !== (t = null === (e = this._tabster) || void 0 === e ? void 0 : e.keyboardNavigation.isNavigatingWithKeyboard()) && void 0 !== t && t
            }
            setNavigatingWithKeyboard(e) {
                var t;
                null === (t = this._tabster) || void 0 === t || t.keyboardNavigation.setNavigatingWithKeyboard(e)
            }
            resetExperienceContainerFocus() {
                var e;
                null === (e = this._experienceContainerFocusReset) || void 0 === e || e.call(this)
            }
            dispose() {
                for (const e of Object.keys(this._unsubscribes))
                    this._unsubscribes[e]();
                delete this._tabster,
                delete this._observed,
                delete this._crossOrigin,
                delete this._win,
                delete this._experienceContainerFocusReset,
                delete this._focusLostEventTarget
            }
        }
        function d(e, t) {
            const n = i.useContext(r)
              , [a,o] = i.useState(null)
              , [s] = i.useState((()=>({
                node: null,
                ref: {
                    get current() {
                        return s.node
                    },
                    set current(e) {
                        s.node = e,
                        o(e)
                    }
                }
            })));
            return i.useEffect((()=>{
                if (a)
                    return n.setObservedName(a, e, t),
                    ()=>{
                        n.setObservedName(a, null)
                    }
            }
            ), [a, e, n, t]),
            s.ref
        }
        function c(e, t) {
            const n = i.useContext(r);
            i.useEffect((()=>{
                const i = ()=>{
                    n.requestFocus(e)
                }
                ;
                return n.addFocusLostEventListener(t, i),
                ()=>{
                    n.removeFocusLostEventListener(t, i)
                }
            }
            ), [t, e, n])
        }
        l._defaultFocusTimeout = 5e3
    }
    ,
    46286: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            GlobalErrorBoundary: ()=>i.t,
            renderErrorScreen: ()=>a.k,
            ErrorPage: ()=>o.m,
            ErrorActionContextProvider: ()=>r.FQ
        });
        var i = n(148617)
          , a = n(656706)
          , o = n(607642)
          , r = n(103096)
    }
    ,
    607642: (e,t,n)=>{
        "use strict";
        n.d(t, {
            m: ()=>j
        });
        var i = n(250033)
          , a = n(50805)
          , o = n(696940)
          , r = n(196517)
          , s = n(752426)
          , l = (n(481339),
        n(793377))
          , d = n(383392)
          , c = n(641639);
        var u = n(103328)
          , g = n(220576)
          , m = n(762757)
          , p = n(530014)
          , v = n(159072)
          , h = n.n(v)
          , y = n(365529);
        function A(e) {
            return "object" == typeof e && null != e.key
        }
        function f(e, t, n) {
            var a;
            const o = "errors"
              , r = A(t) && null !== (a = t.namespace) && void 0 !== a ? a : o
              , s = A(t) ? t.key : t
              , l = e.stringTranslate(r, s, A(t) ? t.params : void 0) !== s
              , d = e.getTransForNs(l ? r : "errors");
            return (0,
            i.t)(d, {
                i18nKey: l ? s : n
            })
        }
        var b = n(103096)
          , C = n(142513)
          , S = n(526898);
        const I = {
            styles: {
                width: "28rem"
            }
        }
          , k = e=>{
            var {variant: t} = e
              , n = (0,
            C.__rest)(e, ["variant"]);
            let a = !1
              , o = !1
              , r = !1;
            return "primary" === t ? a = !0 : "secondary" === t ? o = !0 : (a = !0,
            r = !0),
            (0,
            i.t)(S.z, Object.assign({}, n, I, {
                primary: a,
                secondary: o,
                text: r
            }))
        }
          , N = {
            SIGN_OUT: {
                namespace: "auth",
                key: "sign_out_req"
            },
            SWITCH_TO_CLASSIC: {
                namespace: "framework",
                key: "app_switcher_warning_dialog_switch"
            },
            RESTART: {
                namespace: "errors",
                key: "restart_button_label"
            }
        }
          , E = ({name: e, variant: t, error: n})=>{
            const a = (0,
            u.Cq)()
              , {getActionHandler: o} = (0,
            b.A$)()
              , r = o(e, n);
            if (!r)
                return null;
            const s = N[e]
              , l = a.stringTranslate(s.namespace, s.key);
            return (0,
            i.t)(k, {
                variant: t,
                content: l,
                onClick: r,
                "data-tid": `error-page-action-${e}`
            })
        }
          , T = ()=>{
            const e = (0,
            u.Cq)()
              , {getDownloadLogsHandler: t} = (0,
            b.A$)()
              , n = t();
            return n ? (0,
            i.t)(k, {
                variant: "tertiary",
                content: e.stringTranslate("errors", "download_logs_button"),
                onClick: n,
                "data-tid": "error-page-download-logs"
            }) : null
        }
        ;
        var w = n(457695)
          , M = n(701853)
          , D = n(559339)
          , L = n(576787);
        const O = (0,
        n(2877).s)({
            containerStyle: {
                Bqenvij: "f1l02sjl",
                jrapky: "f10jk5vf",
                Frg6f3: ["fcgxt0o", "f1ujusj6"],
                t21cq0: ["f1ujusj6", "fcgxt0o"],
                B6of3ja: "fgr6219",
                a9b677: "f13q4jme"
            },
            mainContentContainerStyle: {
                Bqenvij: "f1l02sjl",
                fsow6f: "f17mccla"
            },
            debugDetailsStyle: {
                qhf8xq: "f1euv43f",
                B5kzvoi: "f3nd7ub",
                j35jbq: ["ftqkhlc", "f164susc"],
                fsow6f: ["fes3tcz", "f1o700av"],
                B2u0y6b: "f1s01aqp",
                Bj3rh1h: "f1bsuimh"
            },
            errorPageImage: {
                Bqenvij: "fki3f9p"
            },
            errorCodeTextStyle: {
                qk3uaq: "fftbqpi",
                Bqc2kz9: "fi1h9r9",
                mc9l5x: "f1rvi9lw",
                Biipf1f: "f9ijwd5"
            }
        }, {
            d: [".f1l02sjl{height:100%;}", ".f10jk5vf{margin-bottom:auto;}", ".fcgxt0o{margin-left:auto;}", ".f1ujusj6{margin-right:auto;}", ".fgr6219{margin-top:auto;}", ".f13q4jme{width:90%;}", ".f17mccla{text-align:center;}", ".f1euv43f{position:absolute;}", ".f3nd7ub{bottom:5rem;}", ".ftqkhlc{right:5rem;}", ".f164susc{left:5rem;}", ".fes3tcz{text-align:right;}", ".f1o700av{text-align:left;}", ".f1s01aqp{max-width:50%;}", ".f1bsuimh{z-index:-1;}", ".fki3f9p{height:30rem;}", ".fftbqpi{-webkit-line-clamp:1;}", ".fi1h9r9{-webkit-box-orient:vertical;}", ".f1rvi9lw{display:-webkit-box;}", ".f9ijwd5{word-break:break-word;}"]
        })
          , B = ({error: e, staticsPath: t, showDebugDetails: n, sessionId: a, enable3DIllustrations: o})=>{
            const {title: r, description: s, actions: l=[], icon: d} = e.getBoundaryProps()
              , c = (0,
            u.Cq)()
              , v = t && d && m.X[d] && `${t}${m.X[d]}`
              , A = d && m.X[d] && c.stringTranslate("errors", "error_page_icon_alt")
              , b = f(c, r, "default_unknown_title")
              , C = f(c, s, "default_unknown_description")
              , S = p.G.isFunction(e.toTelemetryEntry) ? e.toTelemetryEntry() : `${e.code}::${e.message}`
              , I = O();
            return (0,
            i.t)(w.W, Object.assign({
                className: I.containerStyle
            }, {
                children: [(0,
                i.t)(M.k, Object.assign({
                    column: !0,
                    vAlign: "center",
                    gap: "gap.small",
                    hAlign: "center",
                    className: I.mainContentContainerStyle
                }, {
                    children: [v ? (0,
                    i.t)(D.E, {
                        alt: A,
                        fit: "contain",
                        src: v,
                        className: I.errorPageImage,
                        "data-tid": "error-image"
                    }) : o ? (0,
                    i.t)(y.lS, {
                        name: y.OM.Offline,
                        "data-tid": "error-image"
                    }) : (0,
                    i.t)(D.E, {
                        src: h(),
                        "data-tid": "error-image",
                        alt: A
                    }), (0,
                    i.t)(g.h, {
                        content: b,
                        "data-tid": "error-page-title"
                    }), (0,
                    i.t)(L.q, Object.assign({
                        "data-tid": "error-page-description"
                    }, {
                        children: C
                    })), l.map(((t,n)=>{
                        const a = 0 === n ? "primary" : 1 === n ? "secondary" : "tertiary";
                        return (0,
                        i.t)(E, {
                            name: t,
                            variant: a,
                            error: e
                        }, t)
                    }
                    )), (0,
                    i.t)(T, {})]
                })), n && (0,
                i.t)(w.W, Object.assign({
                    className: I.debugDetailsStyle
                }, {
                    children: [(0,
                    i.t)(L.q, Object.assign({
                        className: I.errorCodeTextStyle,
                        truncate: !0,
                        wrap: !1,
                        disabled: !0,
                        size: "small"
                    }, {
                        children: S
                    })), (0,
                    i.t)(M.k, Object.assign({
                        hAlign: "end"
                    }, {
                        children: [(0,
                        i.t)(L.q, Object.assign({
                            disabled: !0,
                            size: "small"
                        }, {
                            children: c.stringTranslate("errors", "debug_details_origin_slot_name_label")
                        })), (0,
                        i.t)(L.q, Object.assign({
                            disabled: !0,
                            size: "small"
                        }, {
                            children: e.originSlotName ? e.originSlotName.toUpperCase() : "UNKNOWN"
                        }))]
                    })), (0,
                    i.t)(M.k, Object.assign({
                        hAlign: "end"
                    }, {
                        children: [(0,
                        i.t)(L.q, Object.assign({
                            disabled: !0,
                            size: "small"
                        }, {
                            children: c.stringTranslate("errors", "debug_details_session_id_label")
                        })), (0,
                        i.t)(L.q, Object.assign({
                            disabled: !0,
                            size: "small"
                        }, {
                            children: a
                        }))]
                    })), (0,
                    i.t)(L.q, Object.assign({
                        disabled: !0,
                        size: "small"
                    }, {
                        children: (new Date).toISOString()
                    }))]
                }))]
            }))
        }
          , j = ({error: e, windowProvider: t, coreSettings: n, clientPreferences: u, skip3dIllustrations: g, skipFluentThemeProvider: m})=>{
            var p, v, h, y, A, f, b;
            const C = function(e, t, n) {
                var i, o;
                if (n) {
                    const {environment: o} = null !== (i = null == t ? void 0 : t.get(a.J.Metadata)) && void 0 !== i ? i : {}
                      , r = (0,
                    d.R6)(null != o ? o : l.s.prod);
                    return (0,
                    d.OA)((0,
                    d.u_)(n, e, r))
                }
                const r = (0,
                c.Z)(e);
                if (r)
                    return r;
                const {theme: s, themeDefault: u} = null !== (o = null == t ? void 0 : t.get(a.J.Host)) && void 0 !== o ? o : {};
                return (0,
                d.OA)(s || u)
            }(t, n, u)
              , S = null == n ? void 0 : n.get(a.J.Core)
              , I = null == n ? void 0 : n.get(a.J.Platform);
            return m ? (0,
            i.t)(B, {
                error: e,
                staticsPath: (null == I ? void 0 : I.staticsPath) || void 0,
                showDebugDetails: null !== (p = null == S ? void 0 : S.enableDetailsOnErrorPage) && void 0 !== p && p,
                sessionId: null !== (v = null == I ? void 0 : I.sessionId) && void 0 !== v ? v : void 0,
                enable3DIllustrations: null !== (h = !g && (null == S ? void 0 : S.enable3DIllustrations)) && void 0 !== h && h
            }) : (0,
            i.t)(o._, Object.assign({
                coreSettings: n,
                host: t,
                targetDocument: t.document
            }, {
                children: (0,
                i.t)(r.$, Object.assign({
                    rtl: null !== (y = s.p0.isRtl()) && void 0 !== y && y,
                    host: t,
                    targetDocument: t.document,
                    coreSettings: n,
                    themeType: C
                }, {
                    children: (0,
                    i.t)(B, {
                        error: e,
                        staticsPath: (null == I ? void 0 : I.staticsPath) || void 0,
                        showDebugDetails: null !== (A = null == S ? void 0 : S.enableDetailsOnErrorPage) && void 0 !== A && A,
                        sessionId: null !== (f = null == I ? void 0 : I.sessionId) && void 0 !== f ? f : void 0,
                        enable3DIllustrations: null !== (b = !g && (null == S ? void 0 : S.enable3DIllustrations)) && void 0 !== b && b
                    })
                }))
            }))
        }
    }
    ,
    103096: (e,t,n)=>{
        "use strict";
        n.d(t, {
            FQ: ()=>p,
            A$: ()=>v
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(684784)
          , r = n(435521)
          , s = n(50805)
          , l = n(486070)
          , d = n(388522)
          , c = n(142513)
          , u = n(712557);
        const g = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ComponentsGlobalErrorBoundaryOptOutOfT2WebMutation"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "optOutOfT2Web"
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        };
        const m = a.createContext({
            getActionHandler: e=>null,
            getDownloadLogsHandler: ()=>null
        });
        m.displayName = "ErrorActionContext";
        const p = ({coreServices: e, children: t})=>{
            var n, p, v, h;
            const y = null === (n = e.coreSettings) || void 0 === n ? void 0 : n.get(s.J.Core).clientPreviewOptOutStrategy
              , A = null === (p = e.loggerFactory) || void 0 === p ? void 0 : p.newLogger("ErrorActionContextProvider", "components-global-error-boundary")
              , f = (0,
            o.a)(e)
              , b = (0,
            r.a)(e)
              , C = (e=>{
                const {hostCommunicationService: t} = e
                  , n = a.useCallback((e=>(0,
                c.__awaiter)(void 0, void 0, void 0, (function*() {
                    var n, i, a, o;
                    const r = yield null == t ? void 0 : t.loadModule("appswitcher");
                    if (!r)
                        return;
                    const s = yield null === (n = r.downloadAndInstallPearApp) || void 0 === n ? void 0 : n.call(r, e);
                    (null == s ? void 0 : s.status) === d.cw.DownloadedAndInstalled && (yield null === (i = r.switchDefaultAppTo) || void 0 === i ? void 0 : i.call(r, e),
                    yield null === (a = r.launchPearApp) || void 0 === a ? void 0 : a.call(r, e),
                    yield null === (o = r.quitApp) || void 0 === o ? void 0 : o.call(r))
                }
                ))), [t]);
                return t ? n : null
            }
            )(e)
              , S = null !== (h = null === (v = e.coreSettings) || void 0 === v ? void 0 : v.get(s.J.Core).enableDownloadLogsOnErrorPage) && void 0 !== h && h
              , I = function(e) {
                const t = (0,
                a.useCallback)((()=>(0,
                c.__awaiter)(this, void 0, void 0, (function*() {
                    yield null == e ? void 0 : e.mutate({
                        mutation: u.w
                    })
                }
                ))), [e]);
                return e ? t : null
            }(e.client)
              , k = function(e, t) {
                const n = (0,
                a.useCallback)((()=>(0,
                c.__awaiter)(this, void 0, void 0, (function*() {
                    yield null == t ? void 0 : t.mutate({
                        mutation: g,
                        context: {
                            source: e
                        }
                    })
                }
                ))), [t, e]);
                return t ? n : null
            }("GlobalErrorBoundary", e.client)
              , N = a.useMemo((()=>({
                getActionHandler(e, t) {
                    switch (e) {
                    case "RESTART":
                        return b;
                    case "SWITCH_TO_CLASSIC":
                        switch (null == A || A.log(`clientPreviewOptOutStrategy: ${y}`),
                        y) {
                        case l.a5.Web:
                            return ()=>null == k ? void 0 : k();
                        case l.a5.Desktop:
                        default:
                            return ()=>null == C ? void 0 : C(d.OP.Teams1)
                        }
                    default:
                        return ()=>null == f ? void 0 : f(null == t ? void 0 : t.userContextId)
                    }
                },
                getDownloadLogsHandler: ()=>S ? I : null
            })), [b, A, y, k, C, f, S, I]);
            return (0,
            i.t)(m.Provider, Object.assign({
                value: N
            }, {
                children: t
            }))
        }
          , v = (m.Consumer,
        ()=>a.useContext(m))
    }
    ,
    148617: (e,t,n)=>{
        "use strict";
        n.d(t, {
            t: ()=>c
        });
        var i = n(250033)
          , a = n(50805)
          , o = n(530014)
          , r = n(820061)
          , s = n(481339)
          , l = n(320547)
          , d = n(536411);
        class c extends s.PureComponent {
            static getDerivedStateFromError(e) {
                return e instanceof o.G ? {
                    error: e
                } : c.enableGlobalErrorHandlingV2 ? {
                    error: u(e)
                } : {
                    error: void 0
                }
            }
            constructor(e) {
                super(e),
                this.logger = this.props.coreServices.loggerFactory.newLogger("GlobalError", "components-global-error-boundary"),
                this.state = {}
            }
            componentDidCatch(e) {
                var t, n;
                const i = e instanceof o.G ? e : c.enableGlobalErrorHandlingV2 ? u(e) : void 0;
                if (i) {
                    const {scenarioFactory: e, coreSettings: r} = this.props.coreServices
                      , {enableStackTraceCollection: s} = r.get(a.J.Core);
                    (0,
                    d.e)(i, e),
                    s ? null === (n = (t = this.logger).errorToTelemetry) || void 0 === n || n.call(t, "", "global_error_boundary", {
                        errorMessage: i.message,
                        stack: i.stack
                    }) : this.logger.error(o.G.isFunction(i.toTelemetryEntry) ? i.toTelemetryEntry() : `${i.code}::${i.message}`)
                }
            }
            render() {
                var e, t;
                const {error: n} = this.state
                  , {windowId: a, coreServices: o} = this.props
                  , r = this.props.coreServices.windowProvider;
                if (n) {
                    const s = null !== (t = null === (e = r.loader) || void 0 === e ? void 0 : e.getErrorWindow()) && void 0 !== t ? t : r;
                    return (0,
                    i.t)(l.l, {
                        error: n,
                        windowProvider: s,
                        windowId: a,
                        coreServices: o
                    })
                }
                return this.props.children
            }
        }
        function u(e) {
            return new r.K(e,{
                source: "GlobalErrorBoundary"
            })
        }
    }
    ,
    656706: (e,t,n)=>{
        "use strict";
        n.d(t, {
            k: ()=>c
        });
        var i = n(250033)
          , a = n(530014)
          , o = n(820061)
          , r = (n(481339),
        n(713112))
          , s = n(607642)
          , l = n(320547)
          , d = n(536411);
        function c(e, t, n, c, u) {
            const g = e instanceof a.G ? e : new o.K(e,{
                source: "RenderErrorScreen",
                windowId: c
            });
            u && (0,
            d.e)(g, u.scenarioFactory),
            r.render(u ? (0,
            i.t)(l.l, {
                error: g,
                coreServices: u,
                windowProvider: n,
                windowId: null != c ? c : "renderErrorScreen",
                skip3dIllustrations: !0
            }) : (0,
            i.t)(s.m, {
                error: g,
                windowProvider: n,
                skip3dIllustrations: !0
            }), t)
        }
    }
    ,
    320547: (e,t,n)=>{
        "use strict";
        n.d(t, {
            l: ()=>f
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(607642)
          , r = n(103328)
          , s = n(138730)
          , l = n(645308)
          , d = n(195067)
          , c = n(206273)
          , u = n(621786)
          , g = n(127919)
          , m = n(103096);
        const p = ({coreServices: e, children: t})=>{
            const n = e && (0,
            u.N)(e.loggerFactory.newLogger, e.coreSettings, {
                windowProvider: e.windowProvider
            })
              , o = a.useRef({})
              , r = a.useRef(new g.M(n,o.current));
            return a.useEffect((()=>(r.current.init({
                enablePassUnhandledShortcutsToShellComms: !1,
                isPopout: !1,
                isIframe: !1
            }),
            r.current.destroy)), [r]),
            a.useEffect((()=>()=>{
                o.current = {}
            }
            ), []),
            e.client ? (0,
            i.t)(a.Fragment, {
                children: (0,
                i.t)(d.ib.Provider, Object.assign({
                    value: r.current
                }, {
                    children: (0,
                    i.t)(c.e, Object.assign({
                        client: e.client
                    }, {
                        children: [(0,
                        i.t)(l.$, {}), t]
                    }))
                }))
            }) : (0,
            i.t)(a.Fragment, {
                children: t
            })
        }
          , v = ({coreServices: e, children: t})=>(0,
        i.t)(r.bd, Object.assign({
            i18NextWrapper: e.i18NextWrapper
        }, {
            children: [(0,
            i.t)(r.tL, {
                host: e.windowProvider
            }), (0,
            i.t)(s.f, Object.assign({
                namespaces: ["errors", "auth", "framework"],
                loaderRenderer: null
            }, {
                children: (0,
                i.t)(p, Object.assign({
                    coreServices: e
                }, {
                    children: (0,
                    i.t)(m.FQ, Object.assign({
                        coreServices: e
                    }, {
                        children: t
                    }))
                }))
            }))]
        }));
        var h = n(142513);
        var y = n(50805)
          , A = n(858091);
        const f = ({error: e, coreServices: t, windowProvider: n, windowId: r, skip3dIllustrations: s})=>{
            const {hostCommunicationService: l, coreSettings: d} = t;
            return function({windowId: e, hostCommunicationService: t}) {
                const n = (0,
                a.useRef)(!1)
                  , i = (0,
                a.useCallback)((()=>(0,
                h.__awaiter)(this, void 0, void 0, (function*() {
                    var n;
                    const i = yield t.loadModule("core");
                    null === (n = null == i ? void 0 : i.reportFirstPaint) || void 0 === n || n.call(i, e)
                }
                ))), [t, e]);
                (0,
                a.useEffect)((()=>{
                    n.current || (i(),
                    n.current = !0)
                }
                ), [i])
            }({
                windowId: r,
                hostCommunicationService: l
            }),
            function({coreSettings: e, hostCommunicationService: t, windowProvider: n, windowId: i}) {
                const {enableTitleBarOnErrorPage: o} = e.get(y.J.Core);
                (0,
                a.useEffect)((()=>{
                    var e;
                    null === (e = n.preCoreUiAdapter) || void 0 === e || e.hideLoadingScreen(),
                    o && new A.o(n,i,void 0,t).showTitleBar({
                        showActionButtons: !0
                    })
                }
                ), [o, n, i, t])
            }({
                coreSettings: d,
                hostCommunicationService: l,
                windowProvider: n,
                windowId: r
            }),
            (0,
            i.t)(v, Object.assign({
                coreServices: t
            }, {
                children: (0,
                i.t)(o.m, {
                    error: e,
                    windowProvider: n,
                    coreSettings: t.coreSettings,
                    clientPreferences: t.clientPreferences,
                    skip3dIllustrations: s
                })
            }))
        }
    }
    ,
    536411: (e,t,n)=>{
        "use strict";
        n.d(t, {
            e: ()=>s
        });
        var i = n(659726)
          , a = n(738646)
          , o = n(530014)
          , r = n(905581);
        function s(e, t) {
            var n, s, l;
            const d = o.G.isFunction(e.toTelemetryEntry) ? e.toTelemetryEntry() : `${e.code}::${e.message}`
              , c = {
                errorCode: d,
                errors: (0,
                i.A)((0,
                r.B9)(e)),
                reason: "StandaloneErrorPage",
                showOops: !0
            };
            null === (n = t.findScenario(a.RG.ClientStart)) || void 0 === n || n.fail(c),
            null === (s = t.findScenario(a.RG.ApplicationLaunchTime)) || void 0 === s || s.fail(c),
            null === (l = t.findScenario(a.RG.NavigationCommand)) || void 0 === l || l.fail(c),
            t.newScenario(a.RG.GlobalErrorPage).stop({
                errorCode: d,
                errors: (0,
                i.A)((0,
                r.B9)(e))
            })
        }
    }
    ,
    90746: (e,t,n)=>{
        "use strict";
        n.d(t, {
            WL: ()=>r,
            eK: ()=>s,
            vk: ()=>l,
            Tg: ()=>d,
            gR: ()=>c
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(340690);
        const r = a.createContext({
            htmlSanitizer: {
                stripHtml: ()=>"",
                stripAnchorLinks: ()=>"",
                sanitizeHtml: ()=>"",
                sanitizeHrefUrl: ()=>"",
                makeValidUrl: ()=>"",
                buildHyperlink: ()=>"",
                sanitizeHyperlinkProperties: ()=>({
                    href: "",
                    title: "",
                    textContent: ""
                })
            }
        });
        r.displayName = "HtmlSanitizerContext";
        const s = ({children: e})=>{
            const t = a.useMemo((()=>({
                htmlSanitizer: new o._
            })), []);
            return (0,
            i.t)(r.Provider, Object.assign({
                value: t
            }, {
                children: e
            }))
        }
          , l = ()=>a.useContext(r)
          , d = ({children: e})=>(0,
        i.t)(r.Consumer, {
            children: ({htmlSanitizer: t})=>e(t)
        })
          , c = e=>t=>(0,
        i.t)(d, {
            children: n=>(0,
            i.t)(e, Object.assign({}, Object.assign(Object.assign({}, t), {
                htmlSanitizer: n
            })))
        })
    }
    ,
    5091: (e,t,n)=>{
        "use strict";
        n.d(t, {
            x0: ()=>A,
            xg: ()=>y
        });
        var i = n(250033)
          , a = n(481339)
          , o = (n(395863),
        n(748817))
          , r = n(656690);
        class s {
            constructor(e) {
                this.config = e,
                this.navigateToNextLandmark = ()=>this.navigateToLandmark(!0),
                this.navigateToPreviousLandmark = ()=>this.navigateToLandmark(!1),
                this.registerIframeListener = ()=>{
                    this.config.opener.addEventListener(r.rY.NavigateToLandmark, this.executeLandmarkCommandCallback)
                }
                ,
                this.registerFocusEnterHandler = e=>{
                    this.focusEnterHandler = e
                }
                ,
                this.unregisterFocusEnterHandler = ()=>{
                    this.focusEnterHandler = void 0
                }
                ,
                this.executeLandmarkCommandCallback = e=>{
                    var t;
                    e && this.navigateToFirstOrLastLandmark(null === (t = e.payload) || void 0 === t ? void 0 : t.navigateForward)
                }
                ,
                this.navigateToLandmark = e=>{
                    if (!this.config.landmarkSelector || !this.config.getFirstTabbableElement)
                        return;
                    const t = ((0,
                    o.t)(this.config.targetDocument) || this.config.targetDocument).querySelectorAll(this.config.landmarkSelector)
                      , n = this.config.targetDocument.activeElement.closest(this.config.landmarkSelector);
                    if (!n && t.length > 0) {
                        const n = e ? -1 : t.length;
                        this.focusNextAvailableLandmark(n, t, e)
                    } else
                        for (let i = 0; i < t.length; i++)
                            if (t[i] === n)
                                return void this.focusNextAvailableLandmark(i, t, e)
                }
                ,
                this.navigateToFirstOrLastLandmark = e=>{
                    if (!this.config.landmarkSelector || !this.config.getFirstTabbableElement)
                        return;
                    const t = ((0,
                    o.t)(this.config.targetDocument) || this.config.targetDocument).querySelectorAll(this.config.landmarkSelector);
                    if (t.length > 0) {
                        const n = e ? -1 : t.length;
                        this.focusNextAvailableLandmark(n, t, e)
                    }
                }
                ,
                this.focusNextAvailableLandmark = (e,t,n)=>{
                    var i;
                    let a = 0
                      , o = 0;
                    const l = n ? 1 : -1;
                    for (; o < t.length; ) {
                        let d = e + a + l;
                        if (d < 0 || d === t.length) {
                            if (this.config.isIframe)
                                return void this.config.opener.postMessage(r.rY.NavigateToOpenerLandmark, {
                                    navigateForward: n
                                });
                            a = 0,
                            d = (e = n ? -1 : t.length) + a + l
                        }
                        const c = t[d];
                        if (("WEBVIEW" === c.tagName || "IFRAME" === c.tagName && c.name === s.hostedWebContentIframeName) && this.focusEnterHandler)
                            return c.focus(),
                            void this.focusEnterHandler();
                        let u = this.config.getFirstTabbableElement(c);
                        const g = null !== (i = null == u ? void 0 : u.getAttribute("aria-hidden")) && void 0 !== i && i;
                        if (u && g && (u = this.config.getNextTabbableElement(c, u, (e=>!e.getAttribute("aria-hidden")))),
                        u && (u.focus(),
                        this.config.targetDocument.activeElement === u))
                            return;
                        a += l,
                        o++
                    }
                }
            }
        }
        s.hostedWebContentIframeName = "embedded-page-container";
        var l = n(50805)
          , d = n(427662)
          , c = n(866876)
          , u = n(587739)
          , g = n(814423);
        const m = `*[data-keyboard-landmark=true], *[role=header], *[role=footer], *[role=main], *[role=region], *[role=complementary], *[role=contentinfo], *[role=search], *[role=banner], *[role=navigation], section, main, header, footer, webview, iframe[name=${s.hostedWebContentIframeName}]`
          , p = e=>u.qyb.getFirstTabbable(e, e, !0)
          , v = (e,t,n)=>{
            var i;
            let a = t;
            for (; ; ) {
                if (a = u.qyb.getNextElement(e, a, !1, !1, !0, !0, !0),
                !a)
                    return null;
                if (null === (i = null == n ? void 0 : n(a)) || void 0 === i || i)
                    return a
            }
        }
          , h = a.createContext(void 0)
          , y = ()=>a.useContext(h)
          , A = e=>{
            const {children: t} = e
              , {enableLandmarksNavigation: n} = (0,
            g.NC)(l.J.Shortcuts);
            return n ? (0,
            i.t)(f, Object.assign({}, e)) : (0,
            i.t)(a.Fragment, {
                children: t
            })
        }
          , f = e=>{
            const {host: t} = (0,
            d.SE)()
              , {landmarkSelector: n=m, targetDocument: o=t.document, children: r} = e
              , {shortcutsForIframe: u} = (0,
            g.NC)(l.J.Shortcuts)
              , {opener: y} = t
              , A = a.useMemo((()=>{
                const e = new s({
                    landmarkSelector: n,
                    getFirstTabbableElement: p,
                    getNextTabbableElement: v,
                    targetDocument: o,
                    opener: y,
                    isIframe: u
                });
                return u && e.registerIframeListener(),
                e
            }
            ), [n, o, u, y]);
            return (0,
            c.bx)("NextLandmark", A.navigateToNextLandmark),
            (0,
            c.bx)("PreviousLandmark", A.navigateToPreviousLandmark),
            (0,
            i.t)(h.Provider, Object.assign({
                value: A
            }, {
                children: r
            }))
        }
    }
    ,
    725259: (e,t,n)=>{
        "use strict";
        n.d(t, {
            o: ()=>s
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(701853)
          , r = n(738574);
        const s = ({factory: e, props: t, loaderProps: n={}, fallback: s})=>{
            const l = a.useMemo((()=>a.lazy(e instanceof Promise ? ()=>e : e)), [e])
              , d = !1 === s ? null : s || (0,
            i.t)(o.k, Object.assign({
                fill: !0,
                hAlign: "center",
                vAlign: "center"
            }, {
                children: (0,
                i.t)(r.$, Object.assign({
                    delay: 500
                }, n))
            }));
            return (0,
            i.t)(a.Suspense, Object.assign({
                fallback: d
            }, {
                children: (0,
                i.t)(l, Object.assign({}, t))
            }))
        }
    }
    ,
    541821: (e,t,n)=>{
        "use strict";
        n.d(t, {
            t$: ()=>r,
            Qj: ()=>s,
            RI: ()=>l
        });
        var i = n(250033)
          , a = n(481339);
        const o = a.createContext({
            track: ()=>{}
        })
          , r = a.memo((({children: e, service: t})=>{
            const n = a.useMemo((()=>{
                const e = null == t ? void 0 : t.create();
                return e ? {
                    track: (t,n)=>{
                        e.track(t, n)
                    }
                } : {
                    track: ()=>{}
                }
            }
            ), [t]);
            return (0,
            i.t)(o.Provider, Object.assign({
                value: n
            }, {
                children: e
            }))
        }
        ));
        r.displayName = "LeakDetectorContextProvider";
        o.Consumer;
        const s = (e,t={})=>{
            const n = a.useRef(t)
              , i = a.useContext(o);
            a.useEffect((()=>{
                const t = Object.assign(Object.assign({}, n.current), {
                    componentLeakInfo: {
                        componentLeakInfoComponent: e,
                        componentLeakInfoStart: (new Date).toISOString()
                    }
                });
                return i.track(e, t),
                ()=>{
                    t.componentLeakInfo.componentLeakInfoEnd = (new Date).toISOString()
                }
            }
            ), [i, e])
        }
          , l = e=>t=>{
            const {track: n} = a.useContext(o)
              , r = a.useRef([])
              , s = a.useCallback(((e,t={})=>{
                const i = Object.assign(Object.assign({}, t), {
                    componentLeakInfo: {
                        componentLeakInfoComponent: e,
                        componentLeakInfoStart: (new Date).toISOString()
                    }
                });
                r.current.push(i),
                n(e, i)
            }
            ), [n, r])
              , l = a.useCallback((()=>{
                r.current.forEach((({componentLeakInfo: e})=>e.componentLeakInfoEnd = (new Date).toISOString()))
            }
            ), [r]);
            return (0,
            i.t)(e, Object.assign({}, Object.assign(Object.assign({}, t), {
                track: s,
                unmount: l
            })))
        }
    }
    ,
    481393: (e,t,n)=>{
        "use strict";
        n.d(t, {
            v: ()=>r
        });
        var i = n(481339)
          , a = n(14232)
          , o = n(735194);
        const r = ()=>{
            const {data: e, error: t, loading: n} = (0,
            a.a)(o.y)
              , r = null == e ? void 0 : e.localizationSettings.currentLocale;
            return (0,
            i.useMemo)((()=>({
                error: t,
                loading: n,
                localizationSettings: {
                    currentLocale: r
                }
            })), [r, t, n])
        }
    }
    ,
    712557: (e,t,n)=>{
        "use strict";
        n.d(t, {
            w: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "downloadLogsFiles"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "downloadLogsFiles"
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
    }
    ,
    645308: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $: ()=>l
        });
        var i = n(142513)
          , a = n(481339)
          , o = n(866876)
          , r = n(766228)
          , s = n(712557);
        const l = ()=>{
            const [e] = (0,
            r.D)(s.w)
              , t = a.useCallback((()=>(0,
            i.__awaiter)(void 0, void 0, void 0, (function*() {
                yield e()
            }
            ))), [e]);
            return (0,
            o.bx)("DownloadLogsFiles", t),
            null
        }
        ;
        l.displayName = "LogsFilesContainer"
    }
    ,
    865710: (e,t,n)=>{
        "use strict";
        n.d(t, {
            dK: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "addPlatformCachedApps"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "apps"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PlatformCachedApp"
                                    }
                                }
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "addPlatformCachedApps"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "apps"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "apps"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "PlatformCachedApp"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }]
                }
            }]
        }
    }
    ,
    827060: (e,t,n)=>{
        "use strict";
        n.d(t, {
            CF: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ComponentsPlatformAppCacheProviderAddSharedPlatformCachedAppsMutation"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "appsListInput"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CachedAppListInput"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "addSharedPlatformCachedApps"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "appsListInput"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CachedAppListInput"
                                    }
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }]
                }
            }]
        }
    }
    ,
    898600: (e,t,n)=>{
        "use strict";
        n.d(t, {
            v: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ComponentsPlatformAppCacheProviderCachedAppListQuery"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "cachedAppList"
                        },
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "ID"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "lastUpdatedSourceWindow"
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "NamedType",
                                        name: {
                                            kind: "Name",
                                            value: "String"
                                        }
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "apps"
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "globalAppId"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "String"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isCachedAndHidden"
                                        },
                                        __type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Boolean"
                                                }
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "lastLoaded"
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Float"
                                            }
                                        },
                                        arguments: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "appId"
                                        },
                                        __type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        },
                                        arguments: []
                                    }]
                                },
                                __type: {
                                    kind: "NonNullType",
                                    type: {
                                        kind: "ListType",
                                        type: {
                                            kind: "NonNullType",
                                            type: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "CachedApp"
                                                }
                                            }
                                        }
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CachedAppList"
                                }
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
    }
    ,
    96487: (e,t,n)=>{
        "use strict";
        n.d(t, {
            dU: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ComponentsPlatformAppCacheProviderRemoveSharedPlatformCachedAppsMutation"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "appsListInput"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CachedAppListInput"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "removeSharedPlatformCachedApps"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "appsListInput"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CachedAppListInput"
                                    }
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }]
                }
            }]
        }
    }
    ,
    534236: (e,t,n)=>{
        "use strict";
        n.d(t, {
            s: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ComponentsPlatformAppCacheProviderSystemMemoryQuery"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "systemMemory"
                        },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "totalPhysicalMemoryKB"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                },
                                arguments: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "availablePhysicalMemoryKB"
                                },
                                __type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                },
                                arguments: []
                            }]
                        },
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "OsUtilsSystemMemoryInfo"
                            }
                        },
                        arguments: []
                    }]
                }
            }]
        }
    }
    ,
    223532: (e,t,n)=>{
        "use strict";
        n.d(t, {
            IN: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ComponentsPlatformAppCacheProviderUpdateSharedPlatformCachedAppsMutation"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "appsListInput"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CachedAppListInput"
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "updateSharedPlatformCachedApps"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "appsListInput"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CachedAppListInput"
                                    }
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "client"
                            }
                        }],
                        __type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            }
                        }
                    }]
                }
            }]
        }
    }
    ,
    968359: (e,t,n)=>{
        "use strict";
        n.d(t, {
            J: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "removePlatformCachedApps"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "apps"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "AppIdentity"
                                    }
                                }
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "removePlatformCachedApps"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "apps"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "apps"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "AppIdentity"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }]
                }
            }]
        }
    }
    ,
    613770: (e,t,n)=>{
        "use strict";
        n.d(t, {
            E7: ()=>i
        });
        const i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "updatePlatformCachedApps"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "apps"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PlatformCachedApp"
                                    }
                                }
                            }
                        }
                    }
                }],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "updatePlatformCachedApps"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "apps"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "apps"
                                }
                            },
                            __type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "PlatformCachedApp"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        __type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }]
                }
            }]
        }
    }
    ,
    469225: (e,t,n)=>{
        "use strict";
        n.d(t, {
            ZG: ()=>b,
            wx: ()=>C
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(471063)
          , r = n(14232)
          , s = n(766228)
          , l = n(651039)
          , d = n(865710)
          , c = n(613770)
          , u = n(968359)
          , g = n(827060)
          , m = n(96487)
          , p = n(223532)
          , v = n(898600)
          , h = n(534236)
          , y = n(814423)
          , A = n(50805);
        const f = a.createContext(void 0)
          , b = ({children: e})=>{
            const t = (0,
            o.V)()
              , n = S()
              , s = I()
              , {isHeaderDisabled: l, isPrimaryWindow: d} = (0,
            y.NC)(A.J.Core, ["isHeaderDisabled", "isPrimaryWindow"])
              , {enableXLMeetingCheck: c, enableIframeHostInHubSDK: u, enableDevicePermCheckInAppCaching: g} = (0,
            y.NC)(A.J.Extensibility)
              , {enableAppCachingInChannels: m} = (0,
            y.NC)(A.J.Host)
              , [p,h] = a.useState()
              , {data: b} = (0,
            r.a)(v.v);
            a.useEffect((()=>{
                (null == b ? void 0 : b.cachedAppList) && (null == p || p.adjustLocalCachesSize(null == b ? void 0 : b.cachedAppList))
            }
            ), [null == b ? void 0 : b.cachedAppList, p]),
            a.useEffect((()=>{
                null == p || p.updateFeatureFlags(t, {
                    enableDevicePermCheckInAppCaching: g,
                    isHeaderDisabled: l,
                    enableXLMeetingCheck: c,
                    enableWebviewIdentityInChannels: m,
                    enableIframeHostInHubSDK: u,
                    isPrimaryWindow: d
                })
            }
            ), [p, t, l, c, m, u, d, g]),
            a.useEffect((()=>()=>{
                null == p || p.dispose()
            }
            ), [p]);
            const C = a.useCallback((e=>{
                h(e),
                null == e || e.setMutations(n),
                null == e || e.setQueries(s)
            }
            ), [h, n, s])
              , k = a.useMemo((()=>({
                platformCacheManagementService: p,
                setCacheManagementService: C
            })), [p, C]);
            return (0,
            i.t)(f.Provider, Object.assign({
                value: k
            }, {
                children: e
            }))
        }
          , C = ()=>{
            const e = a.useContext(f);
            if (!e)
                throw new Error("PlatformAppCacheProvider not found");
            return e
        }
          , S = ()=>{
            const e = "no-cache"
              , [t] = (0,
            s.D)(u.J, {
                fetchPolicy: e
            })
              , [n] = (0,
            s.D)(d.dK, {
                fetchPolicy: e
            })
              , [i] = (0,
            s.D)(c.E7, {
                fetchPolicy: e
            })
              , [o] = (0,
            s.D)(g.CF, {
                fetchPolicy: e
            })
              , [r] = (0,
            s.D)(m.dU, {
                fetchPolicy: e
            })
              , [l] = (0,
            s.D)(p.IN, {
                fetchPolicy: e
            });
            return a.useMemo((()=>({
                addSharedCachedAppMutation: o,
                removeSharedCachedAppMutation: r,
                updateSharedCachedAppMutation: l,
                removeCachedAppMutation: t,
                addCachedAppMutation: n,
                updateCachedAppMutation: i
            })), [n, i, t, o, r, l])
        }
          , I = ()=>{
            const [e] = (0,
            l.t)(h.s, {
                fetchPolicy: "no-cache"
            });
            return a.useMemo((()=>({
                systemMemoryInfoQuery: e
            })), [e])
        }
    }
    ,
    471063: (e,t,n)=>{
        "use strict";
        n.d(t, {
            V: ()=>r
        });
        var i = n(481339)
          , a = n(814423)
          , o = n(50805);
        const r = ()=>{
            const {enableAppCachinginMainContentNS: e, enableAppCachingNS: t, enableBeforeUnloadNS: n, enableAppCachingDebuggerNS: r, enableCrossCacheSyncNS: s, enableClearProcessIdLookupTableNS: l, appCachingExcludedAppsNS: d, appCachingExpireMinutesNS: c, appCachingExpireMinutesMainContentNS: u, appCachingIncludedAppsNS: g, appCachingIncludedAppsMainContentNS: m, appCachingMaxSizeNS: p, appCachingMonitorIntervalMinutesNS: v, appCachingMonitorMaxMegabytesNS: h, appCachingTotalMemoryMinMegabytesNS: y, appCachingFreeMemoryMinMegabytesNS: A, appCachingFreeMemoryMinMegabytesMainContentNS: f, appCachingMonitorStabilizationMinutesNS: b, appCachingUnloadTimeoutMillisecondsNS: C, appCachingMaxCpuPercentNS: S, appCachingNumberOfRequestsNS: I, appCachingNumberOfViolationsNS: k, appCachingRequestAllowedWhenCachedNS: N, enableAppCachingInIframeNS: E, enableVerboseAppCachingLogsNS: T, keepAppInCacheExcludedAppsNS: w, keepAppInCacheIncludedAppsNS: M, enableAppCachingMemoryMonitoringNS: D, enableKeepAppInCacheNS: L} = (0,
            a.NC)(o.J.Extensibility);
            return i.useMemo((()=>({
                enableAppCachinginMainContent: e,
                enableAppCaching: t,
                enableKeepAppInCache: L,
                enableBeforeUnload: n,
                enableAppCachingDebugger: r,
                enableCrossCacheSync: s,
                enableClearProcessIdLookupTable: l,
                appCachingExcludedApps: d,
                appCachingIncludedApps: g,
                appCachingIncludedAppsMainContent: m,
                appCachingExpireMinutes: c,
                appCachingExpireMinutesMainContent: u,
                appCachingMaxSize: p,
                appCachingMonitorIntervalMinutes: v,
                appCachingMonitorMaxMegabytes: h,
                appCachingTotalMemoryMinMegabytes: y,
                appCachingFreeMemoryMinMegabytes: A,
                appCachingFreeMemoryMinMegabytesMainContent: f,
                appCachingMonitorStabilizationMinutes: b,
                appCachingUnloadTimeoutMilliseconds: C,
                appCachingMaxCpuPercent: S,
                appCachingNumberOfRequests: I,
                appCachingNumberOfViolations: k,
                appCachingRequestAllowedWhenCached: N,
                keepAppInCacheExcludedApps: w,
                keepAppInCacheIncludedApps: M,
                enableAppCachingInIframe: E,
                enableVerboseAppCachingLogs: T,
                enableAppCachingMemoryMonitoring: D
            })), [e, t, n, r, s, l, d, g, m, c, u, p, v, h, y, A, f, b, C, S, I, k, N, w, M, E, T, D, L])
        }
    }
    ,
    195067: (e,t,n)=>{
        "use strict";
        n.d(t, {
            ib: ()=>c,
            j4: ()=>u,
            V6: ()=>m,
            de: ()=>p
        });
        var i = n(250033)
          , a = n(481339)
          , o = n(127919)
          , r = n(814423)
          , s = n(427662)
          , l = n(50805)
          , d = n(94788);
        const c = a.createContext(void 0);
        function u(e) {
            const {config: t} = e
              , {host: n} = (0,
            s.SE)()
              , u = "primary" === n.viewportContext
              , {enablePassUnhandledShortcutsToShellComms: g, shortcutsForPopout: m, shortcutsForIframe: p} = (0,
            r.NC)(l.J.Shortcuts)
              , v = (0,
            d.IE)()
              , h = a.useCallback((()=>v.setNavigatingWithKeyboard(!0)), [v])
              , y = a.useRef({})
              , A = (0,
            a.useRef)(new o.M(t,y.current));
            return (0,
            a.useEffect)((()=>(A.current.init({
                enablePassUnhandledShortcutsToShellComms: g,
                isIframe: p,
                isMainWindow: u,
                isPopout: m
            }, h),
            A.current.destroy)), [A, u, g, m, p, h]),
            (0,
            a.useEffect)((()=>()=>{
                y.current = {}
            }
            ), []),
            (0,
            i.t)(c.Provider, Object.assign({
                value: A.current
            }, {
                children: e.children
            }))
        }
        const g = c.Consumer
          , m = e=>t=>(0,
        i.t)(g, {
            children: n=>(0,
            i.t)(e, Object.assign({}, t, {
                shortcutService: n
            }))
        })
          , p = ()=>a.useContext(c)
    }
    ,
    600999: (e,t,n)=>{
        "use strict";
        n.d(t, {
            l: ()=>r
        });
        var i = n(481339)
          , a = n(427662)
          , o = n(195067);
        const r = (e,t)=>{
            const n = i.useContext(o.ib)
              , {host: r} = (0,
            a.SE)()
              , s = i.useCallback((i=>null == n ? void 0 : n.matchesCommand(i, e, t)), [t, e, n]);
            i.useEffect((()=>(n && r.document.addEventListener("keydown", s),
            ()=>r.document.removeEventListener("keydown", s))), [r, s, n])
        }
    }
    ,
    866876: (e,t,n)=>{
        "use strict";
        n.d(t, {
            bx: ()=>o,
            Dt: ()=>r,
            XU: ()=>s
        });
        var i = n(481339)
          , a = n(195067);
        const o = (e,t,n,o)=>{
            const r = i.useContext(a.ib);
            return i.useEffect((()=>{
                let i, a = ()=>{}
                ;
                if (e && r && !o) {
                    const o = ()=>{
                        r.assignCommandHandler(e, t)
                    }
                    ;
                    o(),
                    n && (i = n(o)),
                    a = ()=>{
                        r.unassignCommandHandler(e, t),
                        i && i()
                    }
                }
                return a
            }
            ), [t, e, n, o, r]),
            r
        }
          , r = (e,t)=>{
            const n = i.useContext(a.ib);
            return i.useEffect((()=>{
                let i = ()=>{}
                ;
                return e && n && (n.assignCommandHandlerWithDesktopClient(e, t),
                i = ()=>{
                    n.unassignCommandHandlerWithDesktopClient(e)
                }
                ),
                i
            }
            ), [t, e, n]),
            n
        }
          , s = e=>{
            const t = i.useContext(a.ib);
            i.useEffect((()=>{
                if (t)
                    for (const {commandIdentifier: n, callback: i} of e)
                        t.assignCommandHandler(n, i);
                return ()=>{
                    if (t)
                        for (const {commandIdentifier: n, callback: i} of e)
                            t.unassignCommandHandler(n, i)
                }
            }
            ), [e, t])
        }
    }
    ,
    910023: (e,t,n)=>{
        "use strict";
        n.d(t, {
            N: ()=>i
        });
        const i = {
            backgroundCanvas: "var(--backgroundCanvas)",
            colorAvatar: "var(--colorAvatar)",
            colorPaletteRedForeground1HCBlack: "var(--colorPaletteRedForeground1HCBlack)",
            colorAvatarBackground: "var(--colorAvatarBackground)",
            colorDefaultBackground7: "var(--colorDefaultBackground7)",
            colorNeutralBackgroundAlpha: "var(--colorNeutralBackgroundAlpha)",
            colorNeutralBackgroundAlpha2: "var(--colorNeutralBackgroundAlpha2)",
            colorNeutralStrokeSubtle: "var(--colorNeutralStrokeSubtle)"
        }
    }
    ,
    615716: (e,t,n)=>{
        "use strict";
        n.d(t, {
            e: ()=>a
        });
        var i = n(250033);
        n(481339);
        const a = ({width: e, height: t, role: n})=>(0,
        i.t)("svg", Object.assign({
            role: n || "presentation",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1024 1024",
            height: t,
            width: e
        }, {
            children: [(0,
            i.t)("defs", {
                children: [(0,
                i.t)("linearGradient", Object.assign({
                    id: "plate-fill",
                    x1: "-.2",
                    y1: "-.2",
                    x2: ".8",
                    y2: ".8"
                }, {
                    children: [(0,
                    i.t)("stop", {
                        offset: "0",
                        stopColor: "#5a62c4"
                    }), (0,
                    i.t)("stop", {
                        offset: "1",
                        stopColor: "#3940ab"
                    })]
                })), (0,
                i.t)("filter", Object.assign({
                    id: "person-shadow",
                    x: "-50%",
                    y: "-50%",
                    width: "300%",
                    height: "300%"
                }, {
                    children: [(0,
                    i.t)("feGaussianBlur", {
                        in: "SourceAlpha",
                        stdDeviation: "25"
                    }), (0,
                    i.t)("feOffset", {
                        dy: "25"
                    }), (0,
                    i.t)("feComponentTransfer", {
                        children: (0,
                        i.t)("feFuncA", {
                            type: "linear",
                            slope: ".25"
                        })
                    }), (0,
                    i.t)("feMerge", {
                        children: [(0,
                        i.t)("feMergeNode", {}), (0,
                        i.t)("feMergeNode", {
                            in: "SourceGraphic"
                        })]
                    })]
                })), (0,
                i.t)("filter", Object.assign({
                    id: "back-plate-shadow",
                    x: "-50%",
                    y: "-50%",
                    width: "300%",
                    height: "300%"
                }, {
                    children: [(0,
                    i.t)("feGaussianBlur", {
                        in: "SourceAlpha",
                        stdDeviation: "24"
                    }), (0,
                    i.t)("feOffset", {
                        dx: "2",
                        dy: "24"
                    }), (0,
                    i.t)("feComponentTransfer", {
                        children: (0,
                        i.t)("feFuncA", {
                            type: "linear",
                            slope: ".6"
                        })
                    }), (0,
                    i.t)("feMerge", {
                        children: [(0,
                        i.t)("feMergeNode", {}), (0,
                        i.t)("feMergeNode", {
                            in: "SourceGraphic"
                        })]
                    })]
                })), (0,
                i.t)("filter", Object.assign({
                    id: "tee-shadow",
                    x: "-50%",
                    y: "-50%",
                    width: "250%",
                    height: "250%"
                }, {
                    children: [(0,
                    i.t)("feGaussianBlur", {
                        in: "SourceAlpha",
                        stdDeviation: "12"
                    }), (0,
                    i.t)("feOffset", {
                        dx: "10",
                        dy: "20"
                    }), (0,
                    i.t)("feComponentTransfer", {
                        children: (0,
                        i.t)("feFuncA", {
                            type: "linear",
                            slope: ".2"
                        })
                    }), (0,
                    i.t)("feMerge", {
                        children: [(0,
                        i.t)("feMergeNode", {}), (0,
                        i.t)("feMergeNode", {
                            in: "SourceGraphic"
                        })]
                    })]
                })), (0,
                i.t)("clipPath", Object.assign({
                    id: "back-plate-clip"
                }, {
                    children: (0,
                    i.t)("path", {
                        d: "M684 432H512v-49.143A112 112 0 1 0 416 272a111.556 111.556 0 0 0 10.785 48H160a32.094 32.094 0 0 0-32 32v320a32.094 32.094 0 0 0 32 32h178.67c15.236 90.8 94.2 160 189.33 160 106.039 0 192-85.961 192-192V468a36 36 0 0 0-36-36z",
                        fill: "#fff"
                    })
                }))]
            }), (0,
            i.t)("g", Object.assign({
                id: "small_person",
                filter: "url(#person-shadow)"
            }, {
                children: [(0,
                i.t)("path", {
                    id: "Body",
                    style: {
                        fill: "#5059c9"
                    },
                    d: "M692 432h168a36 36 0 0 1 36 36v164a120 120 0 0 1-120 120 120 120 0 0 1-120-120V468a36 36 0 0 1 36-36z"
                }), (0,
                i.t)("circle", {
                    id: "Head",
                    style: {
                        fill: "#5059c9"
                    },
                    cx: "776",
                    cy: "304",
                    r: "80"
                })]
            })), (0,
            i.t)("g", Object.assign({
                id: "Large_Person",
                filter: "url(#person-shadow)"
            }, {
                children: [(0,
                i.t)("path", {
                    id: "Body-2",
                    "data-name": "Body",
                    style: {
                        fill: "#7b83eb"
                    },
                    d: "M372 432h312a36 36 0 0 1 36 36v204a192 192 0 0 1-192 192 192 192 0 0 1-192-192V468a36 36 0 0 1 36-36z"
                }), (0,
                i.t)("circle", {
                    id: "Head-2",
                    "data-name": "Head",
                    style: {
                        fill: "#7b83eb"
                    },
                    cx: "528",
                    cy: "272",
                    r: "112"
                })]
            })), (0,
            i.t)("rect", {
                id: "Back_Plate",
                x: "128",
                y: "320",
                width: "384",
                height: "384",
                rx: "32",
                ry: "32",
                filter: "url(#back-plate-shadow)",
                clipPath: "url(#back-plate-clip)",
                fill: "url(#plate-fill)"
            }), (0,
            i.t)("path", {
                id: "Letter_T",
                d: "M399.365 445.855h-60.293v164.2h-38.418v-164.2h-60.02V414h158.73z",
                filter: "url(#tee-shadow)",
                fill: "#fff"
            })]
        }));
        a.displayName = "TeamsLogo"
    }
    ,
    696940: (e,t,n)=>{
        "use strict";
        n.d(t, {
            _: ()=>u
        });
        var i = n(250033)
          , a = n(704363)
          , o = n(50805)
          , r = n(481339)
          , s = n(730763);
        const l = "forced-colors"
          , d = e=>{
            if ("@" !== e[0])
                return !0;
            if ("media" !== e.substring(1, 6))
                return !0;
            let t = 0
              , n = 0;
            for (; "{" !== e[t] && n < 13; )
                e[t] === l[n] ? n++ : n = 0,
                t++;
            return 13 !== n
        }
          , c = ()=>({
            id: "noop-renderer",
            compareMediaQueries: ()=>0,
            stylesheets: {},
            insertionCache: {},
            insertCSSRules() {}
        })
          , u = e=>{
            const {children: t, coreSettings: n, targetDocument: l, host: u} = e
              , g = !!(null == n ? void 0 : n.get(o.J.Core).enableCSSExtractionForV9)
              , m = !!(null == n ? void 0 : n.get(o.J.Core).stripForcedColorMediaQueries)
              , p = g
              , [v,h] = r.useState(p)
              , [y,A] = r.useState(!p)
              , f = (e=>{
                const {cspNonce: t, useCSSExtractionForV9: n, stripForcedColorsMediaQueries: i, targetDocument: a} = e
                  , o = n ? c : s.u;
                return (0,
                r.useMemo)((()=>o(a, Object.assign(Object.assign({}, t && {
                    styleElementAttributes: {
                        nonce: t
                    }
                }), {
                    unstable_filterCSSRule: i ? d : void 0
                }))), [t, a, o, i])
            }
            )({
                cspNonce: u.__webpack_nonce__,
                useCSSExtractionForV9: v,
                targetDocument: l,
                stripForcedColorsMediaQueries: m
            });
            return r.useLayoutEffect((()=>{
                p && u.chunkLoader.loadChunk(["griffel"], !0).then((()=>A(!0))).catch((()=>{
                    h(!1),
                    A(!0)
                }
                ))
            }
            ), [p, u]),
            (0,
            i.t)(a.m, Object.assign({
                renderer: f,
                targetDocument: l
            }, {
                children: y ? t : null
            }))
        }
    }
    ,
    813841: (e,t,n)=>{
        "use strict";
        var i;
        n.d(t, {
            V: ()=>g
        });
        var a = n(142513)
          , o = n(250033)
          , r = n(481339)
          , s = n(814423)
          , l = n(50805)
          , d = n(515486)
          , c = n(128474);
        const {useMemo: u} = i || (i = n.t(r, 2))
          , g = e=>{
            const {variables: t} = e
              , n = (0,
            a.__rest)(e, ["variables"])
              , {isTouchOnlySmallDisplay: i} = (0,
            s.NC)(l.J.Calling)
              , {UNSAFE_dialogPaddingLeftOffset: r} = (0,
            c.kO)()
              , {isCoreDialog: g=!1} = t || {}
              , m = u((()=>Object.assign(Object.assign(Object.assign({}, t), !g && {
                UNSAFE_dialogPaddingLeftOffset: r
            }), {
                isTouchOnlySmallDisplay: i
            })), [g, r, t, i]);
            return (0,
            o.t)(d.Vq, Object.assign({}, n, {
                variables: m
            }))
        }
        ;
        g.displayName = "DialogWrapper"
    }
    ,
    196517: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $: ()=>E
        });
        var i = n(250033)
          , a = n(320225)
          , o = n(481339)
          , r = n.t(o, 2)
          , s = n(247026)
          , l = n(841934)
          , d = n(62356)
          , c = n(16436)
          , u = n(922019)
          , g = n(90911)
          , m = n(50805)
          , p = n(836382)
          , v = n(263662)
          , h = n(220446)
          , y = n(361249)
          , A = n(589762)
          , f = n(2877)
          , b = n(559897);
        const C = (0,
        f.s)({
            root: {
                De3pzq: "f3rmtva",
                sj55zd: "f19n0e5",
                fsow6f: ["f1o700av", "fes3tcz"],
                Bg96gwp: "f8497fr"
            }
        }, {
            d: [".f3rmtva{background-color:transparent;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", ".f8497fr{line-height:1.4286;}"]
        })
          , S = (0,
        b.U)("r1ugpin8", "r18jznq", [".r1ugpin8 ::-webkit-scrollbar{height:1.6rem;width:1.6rem;}", ".r1ugpin8 ::-webkit-scrollbar:disabled{display:none;}", ".r1ugpin8 ::-webkit-scrollbar-thumb{border-bottom-right-radius:0.9rem;border-bottom-left-radius:0.9rem;border-top-right-radius:0.9rem;border-top-left-radius:0.9rem;border-top-width:0.4rem;border-right-width:0.4rem;border-bottom-width:0.4rem;border-left-width:0.4rem;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;background-clip:content-box;background-color:var(--colorScrollbarOverlay);}", ".r1ugpin8 ::-webkit-scrollbar-thumb:hover{background-color:var(--colorScrollbarOverlay);border-top-width:0.2rem;border-right-width:0.2rem;border-bottom-width:0.2rem;border-left-width:0.2rem;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", ".r1ugpin8 ::-webkit-scrollbar-track{background-color:transparent;}", ".r1ugpin8 ::-webkit-scrollbar-corner{background-color:transparent;}", ".r18jznq ::-webkit-scrollbar{height:1.6rem;width:1.6rem;}", ".r18jznq ::-webkit-scrollbar:disabled{display:none;}", ".r18jznq ::-webkit-scrollbar-thumb{border-bottom-left-radius:0.9rem;border-bottom-right-radius:0.9rem;border-top-left-radius:0.9rem;border-top-right-radius:0.9rem;border-top-width:0.4rem;border-left-width:0.4rem;border-bottom-width:0.4rem;border-right-width:0.4rem;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;background-clip:content-box;background-color:var(--colorScrollbarOverlay);}", ".r18jznq ::-webkit-scrollbar-thumb:hover{background-color:var(--colorScrollbarOverlay);border-top-width:0.2rem;border-left-width:0.2rem;border-bottom-width:0.2rem;border-right-width:0.2rem;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", ".r18jznq ::-webkit-scrollbar-track{background-color:transparent;}", ".r18jznq ::-webkit-scrollbar-corner{background-color:transparent;}"])
          , {memo: I, useMemo: k, useCallback: N} = r
          , E = I((({children: e, disableAnimations: t, osPlatform: n, rtl: o, targetDocument: r, themeType: l=v.f8.Light, uiVariables: d, coreSettings: u})=>{
            const y = null == u ? void 0 : u.get(m.J.Core).enableFocusIndicatorCustomStyles
              , A = null == u ? void 0 : u.get(m.J.Core).enableForcedColorsTheme
              , f = !!(null == u ? void 0 : u.get(m.J.Core).disableCustomScrollbarStyles)
              , b = !!(null == u ? void 0 : u.get(m.J.Host).disableThemeConfigResolution)
              , C = null == u ? void 0 : u.get(m.J.Host).themeDefault
              , S = null == u ? void 0 : u.get(m.J.Host).themeLight
              , I = null == u ? void 0 : u.get(m.J.Host).themeDark
              , E = null == u ? void 0 : u.get(m.J.Host).themeContrast;
            let w;
            if (b) {
                const e = null == u ? void 0 : u.get(m.J.Host).theme;
                if (w = e,
                l === v.f8.Dark)
                    switch (e) {
                    case v.Q2.Default:
                    case v.Q2.Dark:
                        w = v.Q2.Dark;
                        break;
                    case v.Q2.DefaultV2:
                    case v.Q2.DarkV2:
                        w = v.Q2.DarkV2;
                        break;
                    case v.Q2.DefaultTfl:
                    case v.Q2.DarkTfl:
                        w = v.Q2.DarkTfl;
                        break;
                    default:
                        w = v.Q2.DarkV2
                    }
            } else
                switch (l) {
                case v.f8.Light:
                    w = S;
                    break;
                case v.f8.Dark:
                    w = I;
                    break;
                case v.f8.Contrast:
                    w = E;
                    break;
                default:
                    w = C
                }
            const M = k((()=>Object.assign(Object.assign({}, d), {
                disableCustomScrollbarStyles: f
            })), [d, f])
              , {setCoreThemeType: D} = (0,
            g.LV)()
              , L = D || a.noop
              , O = N((e=>L(e)), [L])
              , B = o ? "rtl" : "ltr";
            return (0,
            i.t)(h.J, Object.assign({
                disableAnimations: !!t,
                disableElementRendering: !0,
                osPlatform: n,
                targetDocument: r,
                theme: w,
                themeType: l,
                setUIProviderThemeType: O,
                rtl: o,
                uiVariables: M,
                coreSettings: u,
                enableFocusIndicatorCustomStyles: !!y,
                enableForcedColorsTheme: !!A
            }, {
                children: (0,
                i.t)(p.P.Provider, Object.assign({
                    value: l
                }, {
                    children: (0,
                    i.t)(s.n, Object.assign({
                        dir: B
                    }, {
                        children: (0,
                        i.t)(T, Object.assign({
                            disableCustomScrollbarStyles: f,
                            targetDocument: r,
                            theme: w,
                            uiVariables: d,
                            dir: B
                        }, {
                            children: (0,
                            i.t)(c.R, {
                                children: e
                            })
                        }))
                    }))
                }))
            }))
        }
        ));
        E.displayName = "FluentThemeProvider";
        const T = ({children: e, dir: t, disableCustomScrollbarStyles: n, targetDocument: a, theme: r, uiVariables: s})=>{
            const c = C()
              , g = S()
              , m = (0,
            A.H)(s, !0)
              , p = (0,
            y.j)(r)
              , v = (0,
            l.z)(c.root, !n && g)
              , h = o.useMemo((()=>({
                className: v
            })), [v]);
            return (0,
            i.t)(d.r, Object.assign({
                className: v,
                targetDocument: a,
                theme: p,
                style: m,
                dir: t,
                overrides_unstable: y.c
            }, {
                children: (0,
                i.t)(u.w.Provider, Object.assign({
                    value: h
                }, {
                    children: e
                }))
            }))
        }
    }
    ,
    266589: (e,t,n)=>{
        "use strict";
        n.d(t, {
            W: ()=>v
        });
        var i = n(142513)
          , a = n(250033)
          , o = n(481339)
          , r = n(387488)
          , s = n(283181)
          , l = n(663945)
          , d = n(427662)
          , c = n(656867);
        const u = "banner-content-id"
          , g = "banner-close-button-id";
        class m extends r.Z3 {
            constructor(e) {
                super(e || ((e,t)=>t.priority - e.priority))
            }
            remove(e) {
                const t = [];
                let n = !1;
                return this.forEach((i=>{
                    i.key === e.key ? n = !0 : t.push(i)
                }
                )),
                n && (this.clear(),
                t.forEach((e=>this.enqueue(e)))),
                n
            }
            enqueue(e) {
                let t;
                return this.forEach((n=>{
                    n.key === e.key && (t = n)
                }
                )),
                void 0 !== t && this.remove(t),
                super.enqueue(e)
            }
        }
        const p = (e,t)=>{
            const n = e.peek();
            if (void 0 === n)
                return void t(n);
            const {decayTime: a, isDecaying: o, priority: r} = n;
            t((0,
            i.__rest)(n, ["decayTime", "isDecaying", "priority"]))
        }
          , v = (e,t,n,i)=>{
            const r = new m(i)
              , s = o.useRef(r)
              , [v,y] = o.useState()
              , A = o.useRef();
            A.current = y;
            const {host: f} = (0,
            d.SE)();
            o.useEffect((()=>()=>{
                s.current.clear(),
                A.current && p(s.current, A.current)
            }
            ), [n]),
            o.useEffect((()=>()=>{
                A.current = void 0
            }
            ), []);
            const b = o.useCallback((e=>{
                s.current.remove(e) && A.current && p(s.current, A.current)
            }
            ), [])
              , C = o.useCallback((()=>{
                s.current.dequeue(),
                A.current && p(s.current, A.current)
            }
            ), [])
              , S = o.useCallback(((n,i)=>{
                let o = Object.assign(Object.assign({
                    key: n
                }, t[n]), i);
                const {attached: r} = o;
                r || (o = Object.assign(Object.assign({}, o), {
                    attached: "top"
                })),
                ((e,t,n)=>{
                    if (!t.dismissible)
                        return;
                    const i = t.onVisibleChange;
                    t.onVisibleChange = e=>{
                        n(),
                        i && i(e)
                    }
                    ,
                    t.dismissAction = {
                        content: (0,
                        a.t)(c.T, {
                            variables: {
                                isBannerCloseIcon: !0
                            }
                        }),
                        id: g,
                        title: e.stringTranslate("messaging", "banner_close_button"),
                        "aria-label": e.stringTranslate("compose", "icons_close"),
                        "aria-labelledby": `${g} ${u}`,
                        "data-track-action-gesture": l.uS.click,
                        "data-track-action-outcome": l.$K.dismissBanner,
                        "data-track-action-scenario": l.Tk.dismissNotificationBanner,
                        "data-track-action-scenario-type": l.Yu.composeMsg,
                        "data-track-module-name": l.rA.notificationBanner,
                        "data-track-panel-region": l.Ai.banner,
                        "data-track-panel-type": l.wh.ComposeBanner
                    }
                }
                )(e, o, C),
                s.current.enqueue(o),
                A.current && p(s.current, A.current);
                const d = ()=>b(o);
                return o.isDecaying && f.setTimeout(d, o.decayTime ? o.decayTime : 5e3),
                d
            }
            ), [f, e, t, b, C])
              , I = o.useCallback((e=>{
                const n = Object.assign({
                    key: e
                }, t[e]);
                b(n)
            }
            ), [t, b]);
            return {
                BannerSlot: v ? (0,
                a.t)(h, Object.assign({}, v)) : null,
                dequeueBanner: I,
                hasBanner: !!v,
                queueBanner: S
            }
        }
          , h = o.memo((e=>{
            var {content: t, actions: n} = e
              , o = (0,
            i.__rest)(e, ["content", "actions"]);
            return (0,
            a.t)(s.bZ, Object.assign({}, o, {
                actions: n || void 0,
                content: {
                    content: t,
                    id: u
                }
            }))
        }
        ));
        h.displayName = "Banner"
    }
    ,
    220446: (e,t,n)=>{
        "use strict";
        n.d(t, {
            J: ()=>H
        });
        var i = n(250033)
          , a = n(320225)
          , o = n(481339)
          , r = n.t(o, 2)
          , s = n(549503)
          , l = n(51362)
          , d = n(214539)
          , c = n(870618)
          , u = n(348261)
          , g = n(727401)
          , m = n(237628)
          , p = n(263662)
          , v = n(750490)
          , h = n(177713)
          , y = n(656107)
          , A = n(682727)
          , f = n(576205)
          , b = n(191393)
          , C = n(648890)
          , S = n(993713)
          , I = n(471079)
          , k = n(975364)
          , N = n(256799)
          , E = n(679026)
          , T = n(84931)
          , w = n(50805)
          , M = n(427662);
        const D = o.memo((({children: e, coreSettings: t})=>{
            var n;
            const a = (0,
            M.SE)()
              , o = null == t ? void 0 : t.get(w.J.Core).useEmotionCssRenderer
              , r = null === (n = null == a ? void 0 : a.host) || void 0 === n ? void 0 : n.__webpack_nonce__
              , s = o ? (0,
            N.Y)({
                nonce: r
            }) : (0,
            E.T)({
                nonce: r
            });
            return (0,
            i.t)(T.E.Provider, Object.assign({
                value: s
            }, {
                children: e
            }))
        }
        ));
        D.displayName = "RendererContainer";
        var L = n(27220)
          , O = n(589762);
        const {memo: B, useCallback: j, useMemo: P} = r
          , R = ()=>{
            const e = s.$;
            return e.fontFaces = [],
            (0,
            l.It)(e, v.H)
        }
          , x = ()=>{
            const e = d.$;
            return e.fontFaces = [],
            (0,
            l.It)((0,
            l.It)(e, v.H), h.Y)
        }
          , F = e=>{
            const t = c.$
              , n = u.y;
            return t.fontFaces = [],
            e ? (0,
            l.It)((0,
            l.It)(n, v.H), y.R) : (0,
            l.It)((0,
            l.It)(t, v.H), A.a)
        }
          , _ = ()=>(0,
        l.It)(R(), f.e)
          , W = ()=>(0,
        l.It)(x(), b.v)
          , z = (e,t,n,i,a)=>{
            let o;
            switch (e) {
            case p.Q2.Default:
                o = R();
                break;
            case p.Q2.Dark:
                o = x();
                break;
            case p.Q2.HighContrast:
                o = F(a);
                break;
            case p.Q2.DefaultV2:
                o = _();
                break;
            case p.Q2.DarkV2:
                o = W();
                break;
            case p.Q2.DefaultTfl:
                o = (0,
                l.It)(_(), C.m);
                break;
            case p.Q2.DarkTfl:
                o = (0,
                l.It)(W(), S.z);
                break;
            default:
                o = R()
            }
            o = i ? ((e,t={})=>Object.assign(Object.assign({}, e), {
                siteVariables: Object.assign(Object.assign({}, e.siteVariables), t)
            }))(o, (0,
            I.R)(e)) : o;
            const r = t ? (0,
            l.It)(t, o) : o;
            return n ? (0,
            l.It)(r, n) : r
        }
          , Q = {
            enableStylesCaching: !0,
            enableVariablesCaching: !0,
            enableSanitizeCssPlugin: !1,
            enableBooleanVariablesCaching: !0
        }
          , H = B((({children: e, coreSettings: t, disableAnimations: n, disableElementRendering: r, enableFocusIndicatorCustomStyles: s, enableForcedColorsTheme: l, osPlatform: d, rtl: c, targetDocument: u, theme: v=p.Q2.Default, themeType: h, setUIProviderThemeType: y, uiVariables: A, baseThemeStyles: f, themeOverrides: b})=>{
            const C = V(u, l);
            C && (v = p.Q2.HighContrast),
            G(!!C, l, u);
            const S = P((()=>z(v, f, b, s, C)), [v, f, b, s, C])
              , I = U(v)
              , k = S ? S.siteVariables : {}
              , N = (0,
            O.H)(A)
              , E = P((()=>Object.assign(Object.assign({}, A), {
                isMac: d === p.NR.Mac,
                isUIProvider: !0
            })), [A, d])
              , T = (0,
            m.Q)({
                rtl: c,
                setUIProviderThemeType: y || a.noop,
                siteVariables: k,
                theme: v,
                themeType: h || p.f8.Light,
                vars: I,
                disableAnimations: !!n
            }, a.isEqual);
            return (0,
            i.t)(L.f.Provider, Object.assign({
                value: T
            }, {
                children: (0,
                i.t)(D, Object.assign({
                    coreSettings: t
                }, {
                    children: (0,
                    i.t)(g.z, Object.assign({
                        as: r ? o.Fragment : "div",
                        disableAnimations: !!n,
                        performance: Q,
                        rtl: c,
                        style: N,
                        target: u,
                        theme: S,
                        variables: E
                    }, {
                        children: e
                    }))
                }))
            }))
        }
        ));
        H.displayName = "UIProvider";
        const U = e=>j(((t,n)=>(0,
        k.Sx)({
            ns: {
                name: t,
                variables: n,
                theme: e
            }
        })), [e])
          , V = (e,t)=>!!(null == e ? void 0 : e.defaultView) && (e.defaultView.matchMedia(p.s0.ColorContrastOverride).matches && t)
          , G = (e,t,n)=>{
            o.useEffect((()=>{
                t && n && (n.body.style.forcedColorAdjust = e ? "auto" : "none")
            }
            ), [e, n, t])
        }
    }
    ,
    361249: (e,t,n)=>{
        "use strict";
        n.d(t, {
            c: ()=>p,
            j: ()=>v
        });
        var i = n(481339)
          , a = n(519722)
          , o = n(638340)
          , r = n(525357)
          , s = n(263662);
        const l = "#1aebff"
          , d = "#000000"
          , c = "#ffffff"
          , u = Object.assign(Object.assign({}, a.Y), {
            backgroundCanvas: "#fff",
            colorAvatar: "#5b5fc7",
            colorAvatarBackground: "#c5cbfa",
            colorBrandBackground2: "#E8EBFA",
            colorDefaultBackground7: "#F5F5F5",
            colorNeutralBackgroundAlpha: "rgba(255,255,255,0.50)",
            colorNeutralBackgroundAlpha2: "rgba(255,255,255,0.80)",
            colorNeutralStrokeSubtle: "#e0e0e0",
            colorPaletteGreenForegroundInverted: "#359b35",
            colorPaletteRedForeground1HCBlack: "#bc2f32",
            colorPaletteRedBackground3Hover: "#BC2E2E",
            colorPaletteRedBackground3Pressed: "#9F282B",
            colorPaletteRedForegroundInverted: "#dc5e62",
            colorPaletteYellowForegroundInverted: "#fef7b2"
        })
          , g = Object.assign(Object.assign({}, o.$), {
            backgroundCanvas: "#1f1f1f",
            colorAvatar: "#9299f7",
            colorAvatarBackground: "#444791",
            colorBrandBackground2: "#2F2F4A",
            colorBrandForegroundInverted: "#5b5fc7",
            colorBrandForegroundInvertedHover: "#4f52b2",
            colorBrandForegroundInvertedPressed: "#444791",
            colorDefaultBackground7: "#1A1A1A",
            colorNeutralBackgroundAlpha: "rgba(26,26,26,0.50)",
            colorNeutralBackgroundAlpha2: "rgba(31, 31, 31, 0.70)",
            colorNeutralStrokeSubtle: "#0a0a0a",
            colorPaletteGreenForegroundInverted: "#107c10",
            colorPaletteRedBackground3Hover: "#BC2E2E",
            colorPaletteRedBackground3Pressed: "#9F282B",
            colorPaletteRedForeground1HCBlack: "#e37d80",
            colorPaletteRedForegroundInverted: "#d13438",
            colorPaletteYellowForegroundInverted: "#817400"
        })
          , m = Object.assign(Object.assign({}, r.$), {
            backgroundCanvas: "#000",
            colorAvatar: d,
            colorAvatarBackground: l,
            colorBrandBackground2: "#000000",
            colorBrandForegroundInvertedHover: d,
            colorBrandForegroundInvertedPressed: d,
            colorDefaultBackground7: d,
            colorNeutralBackgroundAlpha: d,
            colorNeutralBackgroundAlpha2: d,
            colorNeutralStrokeSubtle: c,
            colorPaletteGreenForegroundInverted: c,
            colorPaletteRedForeground1HCBlack: "#000",
            colorPaletteRedBackground3Hover: l,
            colorPaletteRedBackground3Pressed: l,
            colorPaletteRedForegroundInverted: c,
            colorPaletteYellowForegroundInverted: c
        })
          , p = {
            inputDefaultAppearance: "filled-darker"
        }
          , v = e=>i.useMemo((()=>Object.assign(Object.assign({}, (e=>{
            switch (e) {
            case s.Q2.Dark:
            case s.Q2.DarkV2:
            case s.Q2.DarkTfl:
                return Object.assign(Object.assign({}, g), {
                    colorScrollbarOverlay: "rgba(255,255,255,0.4)"
                });
            case s.Q2.HighContrast:
                return m;
            case s.Q2.Default:
            case s.Q2.DefaultV2:
            case s.Q2.DefaultTfl:
            default:
                return u
            }
        }
        )(e)), {
            fontFamilyBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
            fontFamilyMonospace: "'Cascadia Mono', Consolas, ui-monospace, Menlo, Monaco, monospace"
        })), [e])
    }
    ,
    589762: (e,t,n)=>{
        "use strict";
        var i;
        n.d(t, {
            H: ()=>r
        });
        var a = n(481339);
        const {useMemo: o} = i || (i = n.t(a, 2))
          , r = (e,t)=>{
            const {isBroadcastApp: n, isCallsApp: i, isMetaOSStore: a} = e || {};
            return o((()=>{
                if (!n || t)
                    return Object.assign(Object.assign(Object.assign(Object.assign({}, !i && !n && !a && {
                        height: "inherit"
                    }), !n && {
                        width: "inherit"
                    }), a && {
                        height: "100%"
                    }), t && {
                        background: 0
                    })
            }
            ), [n, i, a, t])
        }
    }
    ,
    971480: (e,t,n)=>{
        "use strict";
        n.d(t, {
            D: ()=>j
        });
        var i = n(544139)
          , a = n(550545);
        const o = {
            vlRunway: ()=>({
                width: "100%"
            }),
            vlViewport: ()=>({
                backfaceVisibility: "hidden",
                height: "100%",
                overflowAnchor: "none",
                overflowX: "hidden !important",
                overflowY: "hidden",
                overscrollBehavior: "none",
                transform: "translate3d(0, 0, 0)",
                willChange: "scroll-position"
            })
        }
          , r = {
            controlMessage: (e=!1,{colorScheme: t},n)=>{
                const {default: i} = t;
                return Object.assign(Object.assign(Object.assign({
                    marginRight: "0",
                    maxWidth: "100%",
                    borderColor: i.borderTransparent,
                    borderStyle: "solid",
                    borderWidth: ".1rem"
                }, !e && {
                    backgroundColor: "transparent",
                    paddingTop: ".2rem",
                    paddingRight: ".4rem",
                    paddingBottom: 0,
                    paddingLeft: "0"
                }), e && {
                    width: "auto",
                    maxWidth: "68.6rem",
                    paddingTop: ".8rem",
                    paddingRight: ".8rem",
                    paddingBottom: ".4rem",
                    paddingLeft: "1.6rem"
                }), "compact" === n && {
                    paddingTop: 0,
                    paddingRight: ".4rem",
                    paddingBottom: 0,
                    paddingLeft: ".4rem",
                    borderColor: "transparent",
                    "&:hover": {
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                    }
                })
            }
            ,
            controlMessageItem: (e=!1)=>Object.assign({
                [`& > .${i.Cq.message} > .${a.Ny}`]: {
                    gridTemplateRows: "minmax(0, max-content)",
                    paddingLeft: "0"
                },
                "& small": {
                    fontSize: "1.2rem"
                }
            }, e && {
                display: "flex",
                "& .control-message-header": {
                    lineHeight: "2.6rem"
                }
            }),
            controlMessageItemGutter: (e,t,n)=>Object.assign(Object.assign({
                display: "flex"
            }, "comfy" === t && {
                left: "0.8rem",
                marginTop: n ? e ? "1.4rem" : "1rem" : "0rem"
            }), "compact" === t && Object.assign({
                left: "1rem",
                marginTop: n ? e ? ".6rem" : ".3rem" : "-0.1rem"
            }, e && {
                left: "3rem"
            })),
            itemIndex: (e,{colorScheme: t})=>{
                const {brand: n} = t;
                return !1 !== e && e >= 0 && {
                    ":before": {
                        borderTop: `dotted 0.1rem ${n.foreground}`,
                        color: n.foreground,
                        content: `"${e}"`,
                        display: "block",
                        paddingBottom: "0.3rem",
                        paddingLeft: "0.3rem",
                        paddingRight: "0.3rem",
                        paddingTop: "0.3rem",
                        position: "absolute",
                        right: "3.2rem",
                        textAlign: "right",
                        top: "0",
                        width: "100%",
                        zIndex: 1
                    }
                }
            }
            ,
            isFailed: ({colors: e})=>{
                const {red: t} = e;
                return {
                    backgroundColor: t.background1
                }
            }
            ,
            chatPaneDebug: ({colorScheme: e, fontSizes: {small: t}})=>{
                const {brand: n, default: i} = e;
                return {
                    border: "1px solid",
                    background: i.background,
                    color: n.foreground,
                    fontSize: t,
                    height: "auto",
                    padding: ".5rem",
                    position: "absolute",
                    right: "10rem",
                    top: "0",
                    width: "auto",
                    "& p": {
                        paddingLeft: ".5rem"
                    }
                }
            }
            ,
            chatPaneRunway: ({density: e, isMinWidthBreakpointAtLeast360: t, isMinWidthBreakpointAtLeast720: n, isFlyoutChat: i})=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, o.vlRunway()), {
                display: "flex",
                width: "100%"
            }), "comfy" === e && Object.assign({
                paddingLeft: t ? "3.2rem" : "3rem",
                margin: "auto",
                maxWidth: "106rem"
            }, n && {
                border: "none"
            })), "compact" === e && {
                border: "none",
                paddingLeft: "0.4rem",
                paddingRight: "1.4rem"
            }), i && {
                paddingLeft: "2rem"
            }),
            chatPaneViewport: ({density: e, isMinWidthBreakpointAtLeast360: t, disableVLGpuAcceleration: n})=>Object.assign(Object.assign(Object.assign({}, o.vlViewport()), {
                "& .vl-buffer": Object.assign(Object.assign({
                    backgroundOrigin: "content-box"
                }, "comfy" === e && {
                    paddingLeft: t ? "3.2rem" : "2rem",
                    maxWidth: "106rem"
                }), "compact" === e && {
                    paddingLeft: "0.4rem",
                    paddingRight: "1.4rem"
                })
            }), n && {
                transform: "initial"
            })
        }
          , s = ({borderRadiusMedium: e, colorScheme: {default: t}})=>({
            backgroundColor: t.background,
            border: `solid 0.1rem ${t.border}`,
            borderLeftWidth: "0.4rem",
            borderRadius: e,
            clear: "left",
            margin: "0.7rem 0",
            minHeight: "3.6rem",
            padding: "0.7rem 1.5rem 0.7rem",
            width: "fit-content"
        })
          , l = ({borderRadiusMedium: e, codeFontFamily: t, colorScheme: {default: n}})=>({
            backgroundColor: n.background,
            border: `solid 0.1rem ${n.border}`,
            borderRadius: e,
            display: "inline-block",
            fontFamily: t,
            margin: "0 0.2rem",
            padding: "0.1rem 0.4rem"
        })
          , d = ({colorScheme: {default: e}})=>({
            border: 0,
            borderBottom: `solid 0.1rem ${e.border}`,
            clear: "both",
            height: 0,
            margin: "1rem 0"
        })
          , c = ({borderRadiusMedium: e, codeFontFamily: t, colorScheme: {default: n}})=>({
            backgroundColor: n.background,
            border: `solid 0.1rem ${n.border}`,
            borderRadius: e,
            clear: "left",
            fontFamily: t,
            margin: "1rem 0",
            minHeight: "3rem",
            padding: "0.4rem 1.4rem",
            overflowWrap: "anywhere",
            whiteSpace: "pre-wrap",
            width: "fit-content"
        })
          , u = {
            messageContent: (e,t="comfy")=>{
                const {colorScheme: {brand: n, default: i, red: a, green: o}, fontSizes: {small: r, medium: u, large: g, larger: m}, fontWeightBold: p, fontWeightSemibold: v, fontWeightSemilight: h} = e;
                return Object.assign(Object.assign({
                    textAlign: "start",
                    "& a": {
                        color: n.foreground1,
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline"
                        },
                        "&:focus": {
                            textDecoration: "underline"
                        }
                    }
                }, "compact" === t && {
                    "& p:first-of-type::before": {
                        content: '"​"'
                    }
                }), {
                    "& ol": Object.assign({
                        clear: "left"
                    }, "compact" === t && {
                        paddingLeft: "2.6rem"
                    }),
                    "& ul": Object.assign({
                        clear: "left",
                        listStyleType: "disc"
                    }, "compact" === t && {
                        paddingLeft: "2.6rem"
                    }),
                    "& table": {
                        backgroundColor: i.background,
                        border: `solid .1rem ${i.border}`,
                        borderCollapse: "collapse",
                        color: i.foreground,
                        tableLayout: "auto",
                        width: "100%"
                    },
                    "& mention": {
                        color: n.foreground1
                    },
                    "& th": {
                        border: `solid .1rem ${i.border}`,
                        wordBreak: "normal",
                        padding: "0 .5rem"
                    },
                    "& td": {
                        border: `solid .1rem ${i.border}`,
                        wordBreak: "normal",
                        padding: "0 .5rem"
                    },
                    "& tr": {
                        border: `solid .1rem ${i.border}`
                    },
                    "& blockquote": Object.assign({}, s(e)),
                    "& h1": {
                        fontSize: g,
                        fontWeight: h,
                        margin: "0.3rem 0"
                    },
                    "& h2": {
                        fontSize: u,
                        fontWeight: p,
                        margin: "0.3rem 0"
                    },
                    "& h3": {
                        fontSize: r,
                        fontWeight: p,
                        margin: "0.3rem 0"
                    },
                    "& h4": {
                        fontSize: m,
                        fontWeight: v,
                        margin: "0.1rem 0 0.1rem 0"
                    },
                    "& hr": Object.assign({}, d(e)),
                    "& code": Object.assign({}, l(e)),
                    "& pre": Object.assign({}, c(e)),
                    "& pre > code": {
                        background: "none",
                        border: "none",
                        padding: 0
                    },
                    "& pre[class^='language'] > code": {
                        display: "block",
                        "& span.hljs-string": {
                            color: o.background1
                        },
                        "& span.hljs-comment": {
                            color: i.foreground9
                        },
                        "& span.hljs-keyword": {
                            color: n.foreground1
                        },
                        "& span.hljs-function": {
                            color: a.foreground
                        },
                        "& span.hljs-default": {
                            color: i.foregroundActive
                        }
                    },
                    "& img.emojione": {
                        marginTop: 0,
                        backfaceVisibility: "visible"
                    }
                })
            }
            ,
            blockquoteStyle: s,
            codeStyle: l,
            hrStyle: d,
            preStyle: c
        };
        var g = n(128444)
          , m = n(52113)
          , p = n(469201);
        const v = {
            peoplePickerPopup: {
                maxWidth: "40.2rem",
                width: "100%"
            },
            peoplePickerRadioGroup: ()=>({
                height: "100%",
                marginTop: "0.8rem",
                [`& .${g.jj}`]: {
                    margin: "0"
                },
                [`& .${m.D}`]: {
                    fontSize: "1.2rem !important"
                },
                [`& .${p.i}`]: {
                    fontSize: "1.2rem !important"
                }
            }),
            peoplePickerHeader: ({colorScheme: e})=>{
                const {default: t} = e;
                return {
                    marginBottom: "0.6rem",
                    color: t.foreground1
                }
            }
            ,
            peoplePickerRadioInput: {
                "& input": {
                    width: "2rem",
                    padding: 0,
                    textAlign: "center"
                }
            },
            peoplePickerButtons: {
                marginTop: "1.6rem"
            }
        };
        var h = n(52463)
          , y = n(167341)
          , A = n(283317);
        const f = "9rem"
          , b = "18rem"
          , C = e=>Object.assign(Object.assign({}, !e && {
            height: f
        }), e && {
            height: b
        })
          , S = (e,t)=>({
            [`& img[data-image-type="${y.B.STANDARD}"][data-image-mode="${h.sb}"]`]: Object.assign(Object.assign(Object.assign({}, D(t)), C(e)), {
                backgroundColor: t,
                objectFit: "contain"
            }),
            [`& img[data-image-type="${y.B.STANDARD}"][data-image-mode="${h.ST}"]`]: Object.assign(Object.assign(Object.assign({}, D(t)), C(e)), {
                backgroundColor: t,
                objectFit: "cover"
            }),
            [`& img[data-image-type="${y.B.STANDARD}"] + span`]: Object.assign({}, C(e))
        })
          , I = (e,t)=>({
            [`& img[data-image-type="${y.B.ULTRA_WIDE}"]`]: Object.assign(Object.assign(Object.assign(Object.assign({}, D(t)), !e && {
                width: f,
                height: f,
                objectFit: "contain"
            }), {
                backgroundColor: t
            }), e && {
                maxHeight: b,
                maxWidth: "calc(100%)"
            }),
            [`& img[data-image-type="${y.B.ULTRA_WIDE}"] + span`]: Object.assign(Object.assign({}, !e && {
                width: f,
                height: f
            }), e && {
                maxHeight: b,
                maxWidth: "calc(100%)"
            })
        })
          , k = (e,t)=>({
            [`& img[data-image-type="${y.B.THIN}"][data-image-mode="${h.sb}"]`]: Object.assign(Object.assign(Object.assign(Object.assign({}, D(t)), !e && {
                width: f,
                height: f
            }), e && {
                maxHeight: b,
                maxWidth: "calc(100%)"
            }), {
                backgroundColor: t,
                objectFit: "contain"
            }),
            [`& img[data-image-type="${y.B.THIN}"][data-image-mode="${h.ST}"]`]: Object.assign(Object.assign(Object.assign(Object.assign({}, D(t)), !e && {
                width: f,
                height: f
            }), e && {
                height: b,
                width: b
            }), {
                backgroundColor: t,
                objectFit: "contain"
            }),
            [`& img[data-image-type="${y.B.THIN}"] + span`]: Object.assign(Object.assign(Object.assign({}, !e && {
                width: f,
                height: f
            }), e && {
                maxHeight: b,
                maxWidth: "calc(100%)"
            }), {
                backgroundColor: t
            })
        })
          , N = (e,t)=>({
            [`& img[data-image-type="${y.B.TALL}"]`]: Object.assign(Object.assign(Object.assign(Object.assign({}, D(t)), M(e)), e && {
                width: b,
                maxHeight: b
            }), {
                backgroundColor: t,
                objectFit: "contain"
            }),
            [`& img[data-image-type="${y.B.TALL}"] + span`]: Object.assign(Object.assign({}, M(e)), e && {
                width: b,
                maxHeight: b
            })
        })
          , E = (e,t)=>({
            [`& img[data-image-type="${y.B.SUPER_SMALL}"]`]: Object.assign(Object.assign(Object.assign(Object.assign({}, D(t)), M(e)), {
                objectFit: "none",
                backgroundColor: t
            }), e && {
                height: b,
                width: b
            }),
            [`& img[data-image-type="${y.B.SUPER_SMALL}"] + span`]: Object.assign(Object.assign({}, M(e)), e && {
                height: b,
                width: b
            })
        })
          , T = (e,t)=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, S(e, t)), k(e, t)), N(e, t)), E(e, t)), I(e, t))
          , w = e=>({
            "--width": e,
            width: [e, "var(--width)"],
            "--height": e,
            height: [e, "var(--height)"]
        })
          , M = e=>{
            let t = f;
            return e && (t = b),
            w(t)
        }
          , D = e=>({
            objectFit: "cover",
            border: `0.1rem solid ${e}`,
            borderRadius: A.Z.borderRadiusLarge
        })
          , L = {
            getBasicImageHandlingStylesFeature: D,
            calculateBasicWidthAndHeightForInlineImages: M,
            stylesForInlineImages: (e,t,n,i)=>e && Object.assign(Object.assign(Object.assign(Object.assign({
                display: "inline-flex",
                margin: "0.2rem"
            }, !t && Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, S(n, i)), k(n, i)), E(n, i)), N(n, i)), I(n, i))), !t && T(n, i)), t && Object.assign(Object.assign({}, (e=>({
                "& img[data-image-type]": Object.assign(Object.assign({}, D(e)), {
                    maxWidth: f,
                    maxHeight: f,
                    backgroundColor: e,
                    objectFit: "contain"
                }),
                "& img[data-image-type] + span": Object.assign(Object.assign({}, w(f)), {
                    maxWidth: f,
                    maxHeight: f
                })
            }))(i)), {
                display: "flex"
            })), {
                "& span:has(>img[data-image-type])": {
                    width: "max-content"
                }
            }),
            inlineImageComposeBoxStyles: (e,t,n)=>{
                const {colorScheme: {default: i, red: a}} = e
                  , o = n ? b : f
                  , r = Object.assign({}, D(i.border3));
                return Object.assign(Object.assign({
                    '& img[data-inline-image="true"]': Object.assign(Object.assign({}, r), {
                        display: "inline-flex",
                        verticalAlign: "bottom",
                        margin: "0.2rem",
                        cursor: "pointer",
                        "&:hover": {
                            opacity: .5
                        }
                    })
                }, T(n, t)), {
                    "& inlineimage": {
                        verticalAlign: "bottom"
                    },
                    '& div[data-tid="compose-inline-image-loader"]': Object.assign(Object.assign({}, r), {
                        width: o,
                        height: o,
                        verticalAlign: "bottom",
                        cursor: "pointer"
                    }),
                    '& div[data-tid="compose-inline-image-error"]': Object.assign(Object.assign({}, r), {
                        width: o,
                        height: o,
                        border: `0.1rem solid ${a.foreground}`,
                        color: a.foreground,
                        verticalAlign: "bottom",
                        cursor: "pointer"
                    })
                })
            }
            ,
            singleImageStyles: T
        }
          , O = e=>({
            "::-webkit-scrollbar": {
                width: "1.4rem",
                height: "1.6rem"
            },
            "::-webkit-scrollbar:disabled": {
                display: "none"
            },
            "::-webkit-scrollbar-thumb": {
                borderRadius: "0.9rem",
                border: "solid 0.4rem transparent",
                backgroundClip: "content-box",
                backgroundColor: e.borderPressed,
                minHeight: "3rem"
            },
            "::-webkit-scrollbar-thumb:hover": {
                backgroundColor: e.borderPressed,
                border: "solid 0.1rem transparent"
            },
            "::-webkit-scrollbar-track": {
                background: "transparent"
            },
            willChange: "scroll-position",
            transform: "translate3d(0, 0, 0)",
            "scrollbar-width": "thin"
        })
          , B = {
            dividerFullWidth: e=>e && {
                position: "relative",
                ":before": {
                    position: "absolute",
                    left: "-1.4rem",
                    right: "-1.4rem"
                }
            },
            ellipsis: e=>e && {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            },
            isOnlyReadableByScreenReader: e=>e && {
                clip: "rect(0px, 0px, 0px, 0px)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: "0px",
                width: "1px",
                position: "absolute"
            },
            customScrollbar: (e,t,n,i,a,o)=>e && {
                overflowX: n ? "auto" : "hidden",
                overflowY: n ? "auto" : "hidden",
                ":not(test)": Object.assign(Object.assign({}, !i && Object.assign(Object.assign({}, !a && Object.assign(Object.assign({}, O(t)), o && {
                    transform: "intial"
                })), a && Object.assign(Object.assign(Object.assign(Object.assign({}, !n && {
                    overflowY: ["auto", "overlay"]
                }), O(t)), o && {
                    transform: "intial"
                }), {
                    "::-webkit-scrollbar-thumb": {
                        backgroundColor: "transparent"
                    },
                    "::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "transparent"
                    }
                }))), {
                    ":hover": Object.assign({
                        overflow: n ? "auto" : ["auto", "overlay"]
                    }, !i && a && {
                        overflowY: ["auto", "overlay"],
                        "::-webkit-scrollbar-thumb": {
                            backgroundColor: t.borderPressed
                        },
                        "::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: t.borderPressed
                        }
                    })
                })
            }
        }
          , j = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, B), {
            isChatRosterActionButton: {
                root: ({colorScheme: e})=>{
                    const {default: t} = e;
                    return {
                        paddingLeft: "1rem",
                        display: "flex",
                        justifyContent: "start",
                        borderColor: "transparent !important",
                        borderLeftColor: "transparent",
                        borderRightColor: "transparent",
                        borderRadius: 0,
                        margin: "0 -1.4rem",
                        maxWidth: "calc(100% + 2.8rem)",
                        boxShadow: "none",
                        width: "calc(100% + 2.8rem)",
                        color: t.foreground,
                        "&:focus-visible": {
                            backgroundColor: "transparent",
                            color: t.foreground,
                            "::after": {
                                left: "-.1rem",
                                right: "-.1rem"
                            }
                        },
                        "&:hover": {
                            borderColor: "transparent",
                            "&:focus-visible": {
                                backgroundColor: t.backgroundHover
                            }
                        }
                    }
                }
                ,
                content: {
                    fontSize: "1.4rem"
                }
            },
            isChatRosterActionIcon: {
                root: {
                    margin: "0 1.8rem 0 1.3rem"
                }
            }
        }), r), u), v), o), {
            imageHandlingStyles: L
        })
    }
    ,
    530899: (e,t,n)=>{
        "use strict";
        n.d(t, {
            f: ()=>l
        });
        var i = n(142513)
          , a = n(481339)
          , o = a.useEffect
          , r = a.useRef
          , s = a.useState;
        function l(e) {
            var t = r(!1)
              , n = r(new Image)
              , a = (0,
            i.__read)(s(!1), 2)
              , l = a[0]
              , d = a[1];
            return e && n.current.src !== e && (n.current.src = e),
            n.current.onerror = function() {
                t.current && d(!0)
            }
            ,
            o((function() {
                return t.current || (t.current = !0),
                function() {
                    t.current = !1
                }
            }
            ), []),
            l
        }
    }
    ,
    95104: (e,t,n)=>{
        "use strict";
        var i;
        n.d(t, {
            e: ()=>i
        }),
        function(e) {
            e[e.Normal = 0] = "Normal",
            e[e.Low = 1] = "Low"
        }(i || (i = {}))
    }
    ,
    52463: (e,t,n)=>{
        "use strict";
        n.d(t, {
            ST: ()=>i,
            sb: ()=>a,
            yC: ()=>o,
            f$: ()=>r,
            AK: ()=>s,
            vj: ()=>l
        });
        const i = "grid"
          , a = "single"
          , o = "data-file-size"
          , r = "data-cache-key"
          , s = "data-orig-src"
          , l = "data-edit-mode"
    }
    ,
    621786: (e,t,n)=>{
        "use strict";
        n.d(t, {
            N: ()=>l
        });
        var i = n(765923)
          , a = n(748817)
          , o = n(50805)
          , r = n(663945);
        const s = "en";
        function l(e, t, {coreShortcutService: n, shortcutExecutionService: l, enableShortcutPropagation: d, isBridge: c, windowProvider: u, windowId: g}={}, m, p) {
            const v = u || (0,
            i.J)()
              , h = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
              , {keyboardLayoutLanguage: y} = t.get(o.J.Host)
              , {enableLocalizedKeyboardShortcuts: A, enableLocalizedKeyboardStrategies: f} = t.get(o.J.Localization)
              , {enableNewShortcutForCompose: b, enableNewShortcutForCalling: C} = t.get(o.J.Shortcuts)
              , {applyDesktopKeymappingStrategy: S, applySurfaceHubKeymappingStrategy: I, enableDevShortcuts: k, enableSetArea: N, enableShortcutRegistrationWithDesktopClient: E, enableGlobalShortcuts: T, globalShortcuts: w, useF6Landmark: M} = t.get(o.J.Shortcuts)
              , {enableUnreadThreadNavigationShortcut: D, chatPaneShortcutConfig: L} = t.get(o.J.Messaging)
              , {enableNewChatPopOut: O} = t.get(o.J.Chat)
              , B = w && Array.isArray(w) ? w : [];
            return {
                addEventListener: v.addEventListener.bind(v),
                applyDesktopKeymappingStrategy: !!S,
                applySurfaceHubKeymappingStrategy: !!I,
                coreShortcutService: n,
                shortcutExecutionService: l,
                chatPaneShortcutConfig: L,
                enableDevShortcuts: !!k,
                enableLocalizedKeyboardShortcuts: ()=>!!A,
                enableLocalizedKeyboardStrategies: ()=>!!f,
                enableNewShortcutForCompose: b || !1,
                enableNewShortcutForCalling: C || !1,
                enableSetArea: !!N,
                enableShortcutPropagation: !!d,
                enableShortcutRegistrationWithDesktopClient: !!E,
                enableGlobalShortcuts: !!T,
                globalShortcuts: B,
                enableShortcutToOpenNewChatInPopout: !!O,
                enableUnreadThreadNavigationShortcut: !!D,
                getActiveElement: ()=>v.document.activeElement,
                isBridge: !!c,
                isMac: h,
                isModalDialogOpen: ()=>!!(0,
                a.t)(v.document),
                keyboardLayoutLanguage: y || s,
                newLogger: e,
                postMessage: (e,t)=>function(e, t, n) {
                    e.opener.postMessage(t, n)
                }(v, e, t),
                removeEventListener: v.removeEventListener.bind(v),
                sendEvent: (e,t)=>function(e, t, n, i, a) {
                    if (!t || !n)
                        return;
                    const o = n();
                    o.commandId = a.commandId,
                    o.keyboardLayoutLanguage = i,
                    o.type = `${a.area}/${a.handler}`,
                    o.identifier = a.keys,
                    t({
                        actionGesture: r.uS.kbshort,
                        panelRegion: r.Ai.virtual,
                        panelType: r.wh.Shortcuts,
                        moduleName: e,
                        actionOutcome: r.$K.nav,
                        actionScenario: r.Tk.invokeKeyboardShortcuts,
                        actionScenarioType: r.Yu.invoke,
                        dataBag: o
                    }),
                    o.dispose()
                }(e, m, p, y, t),
                setTimeout: v.setTimeout.bind(v),
                useF6Landmark: !!M,
                windowId: g
            }
        }
    }
    ,
    748817: (e,t,n)=>{
        "use strict";
        n.d(t, {
            t: ()=>i
        });
        const i = e=>e.querySelector("[aria-modal='true']:not([data-popup-trapfocus='true'])")
    }
    ,
    481859: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Ov: ()=>i,
            Gm: ()=>s,
            au: ()=>l,
            vQ: ()=>d,
            Ap: ()=>c,
            __: ()=>u
        });
        var i, a = n(905581), o = n(132756), r = n(320225);
        !function(e) {
            e.Text = "text/plain",
            e.Html = "text/html",
            e.Png = "image/png"
        }(i || (i = {}));
        const s = e=>{
            const t = e.document.getSelection();
            if (t) {
                if (t.toString())
                    return !0;
                if (t.rangeCount > 0) {
                    if (t.getRangeAt(0).cloneContents().childElementCount > 0)
                        return !0
                }
            }
            return !1
        }
          , l = (e,t,n,a)=>{
            const o = e.document
              , s = o.createElement("div");
            (0,
            r.assign)(s.style, {
                color: "transparent",
                outline: "none",
                boxShadow: "none",
                background: "transparent"
            }),
            s.setAttribute("aria-hidden", "true");
            const l = o.createElement(t);
            ((e,t)=>{
                (0,
                r.assign)(e, t),
                t && Object.keys(t).forEach((n=>e.setAttribute(n, t[n])))
            }
            )(l, n),
            a && (0,
            r.assign)(l.style, a),
            s.appendChild(l),
            o.body.appendChild(s);
            const d = o.getSelection();
            if (d) {
                d.removeAllRanges();
                const e = o.createRange();
                e.selectNode(l),
                d.addRange(e)
            }
            const c = e=>{
                e.stopPropagation(),
                e.preventDefault();
                const t = e.clipboardData;
                t && (t.clearData(),
                t.setData(i.Text, l.textContent || l.outerHTML),
                t.setData(i.Html, l.outerHTML)),
                o.removeEventListener("copy", c)
            }
            ;
            o.addEventListener("copy", c);
            o.execCommand("copy") || o.removeEventListener("copy", c),
            o.body.removeChild(s)
        }
          , d = (e,t)=>{
            try {
                e.navigator.clipboard.writeText(t)
            } catch (e) {
                throw g("copyToClipboard")
            }
        }
          , c = ({htmlString: e, host: t})=>{
            u(e, e, t)
        }
          , u = (e,t,n)=>{
            const i = n.document
              , a = n=>{
                const i = n && n.clipboardData;
                i && (i.setData("text/html", e),
                i.setData("text/plain", t),
                n.preventDefault())
            }
            ;
            i.addEventListener("copy", a);
            const o = i.execCommand("copy");
            if (i.removeEventListener("copy", a),
            !o)
                throw g("copyRichAndPlainStringToClipboard")
        }
          , g = e=>(0,
        a.Tr)(e, o.jK.FeatureNotSupported, "", void 0, "The copy command is not supported or enabled")
    }
    ,
    402339: e=>{
        e.exports = "data:image/png;base64,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"
    }
    ,
    534033: e=>{
        e.exports = "data:image/png;base64,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"
    }
    ,
    955610: e=>{
        e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWxsLXBsYWNlaG9sZGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjIgMTIyIj4KICA8cGF0aCBmaWxsPSIjQzhDNkM0IiBkPSJNMTIxLjU3ODYgNjkuMTc3N2wtNy4yNDE4LTMuNTU2OGMuMjkzNi0zLjQyMjYtLjExMjctNi43NTc0LTEuMTAyNy05Ljg1ODVsNi4yNjc1LTUuMDcxMy01LjkyODItOS4zMzc4LTcuMjU3NyAzLjUxNTJjLTIuMTk5LTIuMDQ2NC00Ljc2ODktMy43MTgxLTcuNjI1NC00Ljg5MDFsLjE0MzYtOC4wNDc4LTEwLjk2MzctMS40NjA5LTEuOTY2MyA3Ljc5NWMtMy4zNzIzLjQxNjctNi41NzAzIDEuNTA2LTkuNDM3OSAzLjE0MjVsLTYuMjQ2Ni01LjA2MjQtNy45MDEyIDcuNzQwMSA0LjkyNTUgNi4zNDAzYy0xLjY3NTQgMi43OTU3LTIuODMzNCA1Ljk2MDQtMy4zMzE2IDkuMzgxbC03LjgzMTIgMS44MDQ3IDEuMjM0OSAxMC45OTE1IDguMDI5OC4wMjIxYzEuMjEzNSAzLjEzMTcgMy4wMzc5IDUuOTgzMiA1LjM0MjUgOC4zOTU1bC0zLjQwMTcgNy4yODc2IDkuNDIxNyA1Ljc5NCA0Ljk3MS02LjMyNjdjMS4yODkyLjM4ODUgMi42MjQyLjY4MzQgNC4wMDE4Ljg2NyAxLjY5MTcuMjI1NCAzLjM2Ni4yNzU4IDUuMDA2NS4xNzA1bDMuMzk5MSA3LjI5NjggMTAuNDk0Ni0zLjQ5MzItMS42NTU1LTcuODk1NGMyLjc3OS0xLjgxODIgNS4xOTQ0LTQuMTcyIDcuMDg2MS02Ljk0MDFsNy44NTg0IDEuODE3NSAzLjcwODUtMTAuNDIwM3oiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI4OS4wMzUxIiBjeT0iNjMuNDY5NyIgcj0iMTIuNTE4OSIgZmlsbD0iI0IzQjBBRCI+PC9jaXJjbGU+CiAgPHBhdGggZmlsbD0iI0UxREZERCIgZD0iTTUzLjY2MDggOTcuNTkyM2MuMTc3OC0xLjMzNDQuMjE0Ni0yLjY1NDUuMTMzMS0zLjk0ODlsNi45MDY3LTMuMzg2NC00LjU1MjctMTEuMDQtNy4zMDAxIDIuNDcxMmMtMS43MjA2LTEuOTcxMy0zLjgyMi0zLjYxMS02LjIxNzMtNC43OTgzbC41MjA5LTcuNjc3OS0xMS44Mzc0LTEuNTc3NC0xLjUwNTkgNy41Mzc0Yy0yLjYyODYuNTE2Mi01LjA5MTYgMS41NDg2LTcuMjczMyAzLjAwMmwtNi4zODM3LTQuMjg2Ny03LjI4NDcgOS40NjI4IDUuNzU5MSA1LjA1OTJjLS40MjAxIDEuMjMyMS0uNzMxMyAyLjUyMDgtLjkwOTggMy44NjAycy0uMjE1NiAyLjY2NDYtLjEzMjggMy45NjM3TDYuNzAwMSA5OS42MDhsNC41NTI3IDExLjA0MDEgNy4yODM0LTIuNDY1NWMxLjcyNDkgMS45NzQgMy44MzE3IDMuNjE1MyA2LjIzMzQgNC44MDE4bC0uNTIwMyA3LjY2ODggMTEuODM3MyAxLjU3NzMgMS41MDc4LTcuNTQ2NGMyLjYyMjctLjUxODYgNS4wODAxLTEuNTUwOSA3LjI1NjktMy4wMDI5bDYuMzk4MyA0LjI5NjUgNy4yODQ3LTkuNDYyOC01Ljc3OS01LjA3NjdjLjQxNzUtMS4yMjc5LjcyNzctMi41MTE1LjkwNTUtMy44NDU5eiI+PC9wYXRoPgogIDxjaXJjbGUgY3g9IjMzLjY4ODMiIGN5PSI5NC45MzA5IiByPSIxMC4yMDQyIiBmaWxsPSIjQzhDNkM0Ij48L2NpcmNsZT4KICA8cGF0aCBmaWxsPSIjRTJFMkY2IiBkPSJNNDYuODIyIDE5LjQ2ODhDNDQuNTQzMyA2LjY0MDcgMzIuMjk2OC0xLjkxMTEgMTkuNDY4OC4zNjc2IDYuNjQwOCAyLjY0NjMtMS45MTExIDE0Ljg5MjcuMzY3NiAyNy43MjA4IDIuNjQ2MyA0MC41NDg5IDE0Ljg5MjcgNDkuMTAwNyAyNy43MjA3IDQ2LjgyMmMxLjM1NzEtLjI0MTEgMi42NjI5LS41OTk5IDMuOTE2NS0xLjA1M2w3LjkxMTcgNi43MDQyYy44NzUzLjc0MTcgMi4yMDU4LjAyMzcgMi4wNjY1LTEuMTE1MWwtMS4zNTUyLTExLjA3MThjNS4yNjQ4LTUuMjY2IDcuOTYzLTEyLjkyOTggNi41NjE4LTIwLjgxNzV6Ij48L3BhdGg+CiAgPGNpcmNsZSBjeD0iMjUuNzUzOCIgY3k9IjM1LjI0MzMiIHI9IjIuOTk3IiBmaWxsPSIjRkZGIj48L2NpcmNsZT4KICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQuODA0MSAyOS44OTk4Yy0xLjM1OTYuMjQxNC0yLjY1NzItLjY2NDgtMi44OTg2LTIuMDI0NGwtMi44OTkyLTE2LjMyNTZjLS4yNDE0LTEuMzU5Ni42NjQ4LTIuNjU3MiAyLjAyNDQtMi44OTg2czIuNjU3Mi42NjQ4IDIuODk4NiAyLjAyNDRsMi44OTkyIDE2LjMyNTZjLjI0MTQgMS4zNTk2LS42NjQ4IDIuNjU3MS0yLjAyNDQgMi44OTg2eiI+PC9wYXRoPgo8L3N2Zz4="
    }
    ,
    159072: e=>{
        e.exports = "data:image/svg+xml;base64,ICAgIDxzdmcKICAgICAgd2lkdGg9IjIwMCIKICAgICAgaGVpZ2h0PSIyMDAiCiAgICAgIHZpZXdCb3g9IjAgMCAyMDAgMjAwIgogICAgICBmaWxsPSJub25lIgogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICA+CiAgICAgIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkKSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgIGQ9Ik0xNjEuNzUgODguNjg3NkwxMjAuMjU2IDEzMC41NDRDMTE3LjgzNyAxMzIuOTY0IDExOC45MjUgMTM3LjE5OCAxMjIuMzEzIDEzOC4wNDVMMTc5LjI5MSAxNTMuMTY3QzE4Mi42NzkgMTU0LjAxMyAxODUuNzAzIDE1MC45ODkgMTg0Ljg1NiAxNDcuNjAyTDE2OS4zNzIgOTAuNzQ0MUMxNjguMjgzIDg3LjM1NjkgMTY0LjE3IDg2LjE0NzEgMTYxLjc1IDg4LjY4NzZaIgogICAgICAgICAgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIKICAgICAgICAvPgogICAgICA8L2c+CiAgICAgIDxwYXRoCiAgICAgICAgZD0iTTE2Ny4zMTUgMTE3LjExNkMxNjQuNzc0IDExNi4zOSAxNjMuMzIzIDExMy42MDggMTY0LjA0OSAxMTEuMDY4TDE3NC40NTIgNzYuMzQ4MkMxNzUuMTc4IDczLjgwNzcgMTc3Ljk2MSA3Mi4zNTYgMTgwLjUwMSA3My4wODE5QzE4My4wNDEgNzMuODA3NyAxODQuNDkzIDc2LjU5MDEgMTgzLjc2NyA3OS4xMzA2TDE3My4yNDMgMTEzLjk3MUMxNzIuNTE3IDExNi41MTEgMTY5Ljg1NSAxMTcuOTYzIDE2Ny4zMTUgMTE3LjExNloiCiAgICAgICAgZmlsbD0iI0VFQjY1QyIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNMTYzLjkyOCAxMzMuNjlDMTY2LjkzNCAxMzMuNjkgMTY5LjM3MSAxMzEuMjUzIDE2OS4zNzEgMTI4LjI0NkMxNjkuMzcxIDEyNS4yNCAxNjYuOTM0IDEyMi44MDIgMTYzLjkyOCAxMjIuODAyQzE2MC45MjEgMTIyLjgwMiAxNTguNDg0IDEyNS4yNCAxNTguNDg0IDEyOC4yNDZDMTU4LjQ4NCAxMzEuMjUzIDE2MC45MjEgMTMzLjY5IDE2My45MjggMTMzLjY5WiIKICAgICAgICBmaWxsPSIjRUVCNjVDIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik00MS4wMTgyIDQxLjI2NTZMMTYuMzM5NiA5NC44NTY5QzE0Ljg4NzkgOTguMDAyMyAxNy40MjgzIDEwMS41MTEgMjAuODE1NiAxMDEuMjY5TDc5LjQ4NzggOTUuODI0N0M4Mi45OTYxIDk1LjQ2MTggODQuODEwNyA5MS41OTA3IDgyLjc1NDEgODguNjg3M0w0OC43NjA1IDQwLjUzOTdDNDYuNzA0IDM3LjYzNjQgNDIuNDY5OSAzOC4xMjAzIDQxLjAxODIgNDEuMjY1NloiCiAgICAgICAgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNMzQuODQ4NiA3NC44OTYyQzMyLjMwODEgNzUuNjIyIDI5LjY0NjcgNzQuMTcwMyAyOC45MjA5IDcxLjUwODlMMTkuMDAxIDM2LjU0NzVDMTguMjc1MiAzNC4wMDcxIDE5LjcyNjkgMzEuMzQ1NiAyMi4zODgzIDMwLjYxOThDMjQuOTI4NyAyOS44OTQgMjcuNTkwMiAzMS4zNDU2IDI4LjMxNiAzNC4wMDcxTDM4LjIzNTkgNjguOTY4NUMzOC44NDA3IDcxLjUwODkgMzcuMzg5IDc0LjE3MDMgMzQuODQ4NiA3NC44OTYyWiIKICAgICAgICBmaWxsPSIjMjhDMkQxIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik0zNy45OTQgOTEuNDY5N0M0MS4wMDA1IDkxLjQ2OTcgNDMuNDM3OCA4OS4wMzI0IDQzLjQzNzggODYuMDI1OEM0My40Mzc4IDgzLjAxOTMgNDEuMDAwNSA4MC41ODIgMzcuOTk0IDgwLjU4MkMzNC45ODc1IDgwLjU4MiAzMi41NTAyIDgzLjAxOTMgMzIuNTUwMiA4Ni4wMjU4QzMyLjU1MDIgODkuMDMyNCAzNC45ODc1IDkxLjQ2OTcgMzcuOTk0IDkxLjQ2OTdaIgogICAgICAgIGZpbGw9IiMyOEMyRDEiCiAgICAgIC8+CiAgICAgIDxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2RkKSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgIGQ9Ik04Ny45NTYxIDQ4Ljc2NjJMMTYuNzAyNSAxNTQuMzc2QzEyLjQ2ODUgMTYwLjU0NiAxNi41ODE2IDE2OS4wMTQgMjQuMDgxOSAxNjkuNjE5TDE1MS4yMjUgMTc4LjU3MUMxNTguNzI2IDE3OS4wNTUgMTYzLjkyOCAxNzEuMzEzIDE2MC42NjEgMTY0LjUzOEwxMDQuNzcxIDQ5Ljk3NTlDMTAxLjUwNSA0My4yMDE0IDkyLjE5MDEgNDIuNTk2NSA4Ny45NTYxIDQ4Ljc2NjJaIgogICAgICAgICAgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIKICAgICAgICAvPgogICAgICA8L2c+CiAgICAgIDxwYXRoCiAgICAgICAgZD0iTTkwLjM3NTYgMTM0LjY1N0M4Ny43MTQxIDEzNC40MTUgODUuNjU3NiAxMzIuMTE3IDg1Ljg5OTUgMTI5LjQ1Nkw4OS40MDc4IDc5Ljk3NzNDODkuNjQ5NyA3Ny4zMTU5IDkxLjk0ODIgNzUuMjU5MyA5NC42MDk2IDc1LjUwMTNDOTcuMjcxMSA3NS43NDMyIDk5LjMyNzYgNzguMDQxNyA5OS4wODU3IDgwLjcwMzJMOTUuNTc3NCAxMzAuMTgxQzk1LjMzNTUgMTMyLjg0MyA5My4wMzcgMTM0Ljc3OCA5MC4zNzU2IDEzNC42NTdaIgogICAgICAgIGZpbGw9IndoaXRlIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik04OS42NDk4IDE1MS41OTRDOTIuNjU2MyAxNTEuNTk0IDk1LjA5MzYgMTQ5LjE1NiA5NS4wOTM2IDE0Ni4xNUM5NS4wOTM2IDE0My4xNDMgOTIuNjU2MyAxNDAuNzA2IDg5LjY0OTggMTQwLjcwNkM4Ni42NDMyIDE0MC43MDYgODQuMjA1OSAxNDMuMTQzIDg0LjIwNTkgMTQ2LjE1Qzg0LjIwNTkgMTQ5LjE1NiA4Ni42NDMyIDE1MS41OTQgODkuNjQ5OCAxNTEuNTk0WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNMTA4LjQwMSAzNS44MjE3QzEwNy42NzUgMzcuMDMxNCAxMDcuOTE3IDM4LjQ4MzEgMTA4Ljg4NSAzOS40NTA5QzEwOS4wMDYgMzkuNTcxOSAxMDkuMjQ4IDM5LjgxMzggMTA5LjQ5IDM5LjgxMzhDMTEwLjk0MSA0MC42NjA2IDExMi43NTYgNDAuMTc2NyAxMTMuNDgyIDM4Ljg0NkwxMTcuMjMyIDMyLjU1NTRDMTE3LjU5NSAzMS44Mjk1IDExNy43MTYgMzEuMTAzNyAxMTcuNTk1IDMwLjI1NjlDMTE3LjQ3NCAyOS42NTIgMTE3LjExMSAyOS4wNDcxIDExNi42MjcgMjguNjg0MkMxMTYuNTA2IDI4LjU2MzMgMTE2LjM4NSAyOC41NjMzIDExNi4yNjQgMjguNDQyM0MxMTQuODEyIDI3LjU5NTUgMTEyLjk5OCAyOC4wNzk0IDExMi4yNzIgMjkuNDEwMUwxMDguNDAxIDM1LjgyMTdaIgogICAgICAgIGZpbGw9IiNFMURGREQiCiAgICAgIC8+CiAgICAgIDxwYXRoCiAgICAgICAgZD0iTTExOS44OTMgNDkuMjQ5OEMxMjAuMDE0IDQ5LjQ5MTggMTIwLjI1NiA0OS44NTQ3IDEyMC40OTggNTAuMDk2NkMxMjEuNDY2IDUwLjk0MzQgMTIyLjc5NyA1MS4xODU0IDEyMy44ODUgNTAuNTgwNUwxMzAuMTc2IDQ3LjQzNTJDMTMwLjkwMiA0Ny4wNzIzIDEzMS4zODYgNDYuNDY3NCAxMzEuNjI4IDQ1Ljc0MTZDMTMxLjg3IDQ1LjAxNTcgMTMxLjg3IDQ0LjE2ODkgMTMxLjUwNyA0My40NDMxQzEzMS4yNjUgNDMuMDgwMSAxMzEuMDIzIDQyLjcxNzIgMTMwLjY2IDQyLjQ3NTNDMTMwLjQxOCA0Mi4yMzMzIDEzMC4wNTUgNDIuMTEyNCAxMjkuODEzIDQxLjk5MTRDMTI5LjA4NyA0MS43NDk0IDEyOC4yNCA0MS43NDk0IDEyNy41MTUgNDIuMTEyNEwxMjEuMjI0IDQ1LjI1NzdDMTIwLjQ5OCA0NS42MjA2IDEyMC4wMTQgNDYuMjI1NSAxMTkuNzcyIDQ2Ljk1MTNDMTE5LjUzIDQ3Ljc5ODEgMTE5LjUzIDQ4LjUyNCAxMTkuODkzIDQ5LjI0OThaIgogICAgICAgIGZpbGw9IiNFMURGREQiCiAgICAgIC8+CiAgICAgIDxwYXRoCiAgICAgICAgZD0iTTkzLjY0MTkgMzMuMTYwNEM5My43NjI5IDMzLjc2NTMgOTQuMDA0OCAzNC4zNzAxIDk0LjQ4ODcgMzQuODU0Qzk1LjA5MzYgMzUuNDU4OSA5Ni4wNjE0IDM1LjgyMTggOTYuOTA4MiAzNS43MDA5Qzk4LjQ4MDggMzUuNDU4OSA5OS42OTA2IDM0LjAwNzIgOTkuNDQ4NiAzMi4zMTM2TDk4LjM1OTkgMjQuNTcxM0M5OC4yMzg5IDIzLjg0NTQgOTcuODc2IDIzLjExOTYgOTcuMjcxMSAyMi42MzU3Qzk2LjY2NjIgMjIuMTUxOCA5NS44MTk0IDIxLjkwOTkgOTQuOTcyNiAyMi4wMzA4QzkzLjM5OTkgMjIuMjcyOCA5Mi4xOTAyIDIzLjcyNDUgOTIuNDMyMSAyNS40MTgxTDkzLjY0MTkgMzMuMTYwNFoiCiAgICAgICAgZmlsbD0iI0UxREZERCIKICAgICAgLz4KICAgICAgPGRlZnM+CiAgICAgICAgPGZpbHRlcgogICAgICAgICAgaWQ9ImZpbHRlcjBfZGQiCiAgICAgICAgICB4PSIxMTAuOTUiCiAgICAgICAgICB5PSI4MC41MjgxIgogICAgICAgICAgd2lkdGg9IjgyLjA1IgogICAgICAgICAgaGVpZ2h0PSI4MS45ODIzIgogICAgICAgICAgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgICAgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIgogICAgICAgID4KICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4IiAvPgogICAgICAgICAgPGZlQ29sb3JNYXRyaXgKICAgICAgICAgICAgaW49IlNvdXJjZUFscGhhIgogICAgICAgICAgICB0eXBlPSJtYXRyaXgiCiAgICAgICAgICAgIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiCiAgICAgICAgICAgIHJlc3VsdD0iaGFyZEFscGhhIgogICAgICAgICAgLz4KICAgICAgICAgIDxmZU9mZnNldCBkeT0iMS4yIiAvPgogICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIgLz4KICAgICAgICAgIDxmZUNvbG9yTWF0cml4CiAgICAgICAgICAgIHR5cGU9Im1hdHJpeCIKICAgICAgICAgICAgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiCiAgICAgICAgICAvPgogICAgICAgICAgPGZlQmxlbmQKICAgICAgICAgICAgbW9kZT0ibm9ybWFsIgogICAgICAgICAgICBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIKICAgICAgICAgICAgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciCiAgICAgICAgICAvPgogICAgICAgICAgPGZlQ29sb3JNYXRyaXgKICAgICAgICAgICAgaW49IlNvdXJjZUFscGhhIgogICAgICAgICAgICB0eXBlPSJtYXRyaXgiCiAgICAgICAgICAgIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiCiAgICAgICAgICAgIHJlc3VsdD0iaGFyZEFscGhhIgogICAgICAgICAgLz4KICAgICAgICAgIDxmZU9mZnNldCBkeT0iMC40IiAvPgogICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIgLz4KICAgICAgICAgIDxmZUNvbG9yTWF0cml4CiAgICAgICAgICAgIHR5cGU9Im1hdHJpeCIKICAgICAgICAgICAgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE2IDAiCiAgICAgICAgICAvPgogICAgICAgICAgPGZlQmxlbmQKICAgICAgICAgICAgbW9kZT0ibm9ybWFsIgogICAgICAgICAgICBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIKICAgICAgICAgICAgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3ciCiAgICAgICAgICAvPgogICAgICAgICAgPGZlQmxlbmQKICAgICAgICAgICAgbW9kZT0ibm9ybWFsIgogICAgICAgICAgICBpbj0iU291cmNlR3JhcGhpYyIKICAgICAgICAgICAgaW4yPSJlZmZlY3QyX2Ryb3BTaGFkb3ciCiAgICAgICAgICAgIHJlc3VsdD0ic2hhcGUiCiAgICAgICAgICAvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxmaWx0ZXIKICAgICAgICAgIGlkPSJmaWx0ZXIxX2RkIgogICAgICAgICAgeD0iNyIKICAgICAgICAgIHk9IjM3LjY5MzIiCiAgICAgICAgICB3aWR0aD0iMTYyLjY1NiIKICAgICAgICAgIGhlaWdodD0iMTUwLjA5OSIKICAgICAgICAgIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgICAgIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIKICAgICAgICA+CiAgICAgICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIgLz4KICAgICAgICAgIDxmZUNvbG9yTWF0cml4CiAgICAgICAgICAgIGluPSJTb3VyY2VBbHBoYSIKICAgICAgICAgICAgdHlwZT0ibWF0cml4IgogICAgICAgICAgICB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIgogICAgICAgICAgICByZXN1bHQ9ImhhcmRBbHBoYSIKICAgICAgICAgIC8+CiAgICAgICAgICA8ZmVPZmZzZXQgZHk9IjEuMiIgLz4KICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQiIC8+CiAgICAgICAgICA8ZmVDb2xvck1hdHJpeAogICAgICAgICAgICB0eXBlPSJtYXRyaXgiCiAgICAgICAgICAgIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIgogICAgICAgICAgLz4KICAgICAgICAgIDxmZUJsZW5kCiAgICAgICAgICAgIG1vZGU9Im5vcm1hbCIKICAgICAgICAgICAgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiCiAgICAgICAgICAgIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93IgogICAgICAgICAgLz4KICAgICAgICAgIDxmZUNvbG9yTWF0cml4CiAgICAgICAgICAgIGluPSJTb3VyY2VBbHBoYSIKICAgICAgICAgICAgdHlwZT0ibWF0cml4IgogICAgICAgICAgICB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIgogICAgICAgICAgICByZXN1bHQ9ImhhcmRBbHBoYSIKICAgICAgICAgIC8+CiAgICAgICAgICA8ZmVPZmZzZXQgZHk9IjAuNCIgLz4KICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8ZmVDb2xvck1hdHJpeAogICAgICAgICAgICB0eXBlPSJtYXRyaXgiCiAgICAgICAgICAgIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xMiAwIgogICAgICAgICAgLz4KICAgICAgICAgIDxmZUJsZW5kCiAgICAgICAgICAgIG1vZGU9Im5vcm1hbCIKICAgICAgICAgICAgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciCiAgICAgICAgICAgIHJlc3VsdD0iZWZmZWN0Ml9kcm9wU2hhZG93IgogICAgICAgICAgLz4KICAgICAgICAgIDxmZUJsZW5kCiAgICAgICAgICAgIG1vZGU9Im5vcm1hbCIKICAgICAgICAgICAgaW49IlNvdXJjZUdyYXBoaWMiCiAgICAgICAgICAgIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93IgogICAgICAgICAgICByZXN1bHQ9InNoYXBlIgogICAgICAgICAgLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8bGluZWFyR3JhZGllbnQKICAgICAgICAgIGlkPSJwYWludDBfbGluZWFyIgogICAgICAgICAgeDE9IjE1OS45MzYiCiAgICAgICAgICB5MT0iOTguODQ5NCIKICAgICAgICAgIHgyPSIxNjYuNTg5IgogICAgICAgICAgeTI9IjE3OC4wODciCiAgICAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgICA+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkJFNUJFIiAvPgogICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjlENjk5IiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50CiAgICAgICAgICBpZD0icGFpbnQxX2xpbmVhciIKICAgICAgICAgIHgxPSI3OC43NTQ4IgogICAgICAgICAgeTE9Ijk3LjQyMTIiCiAgICAgICAgICB4Mj0iNDUuMjA3MyIKICAgICAgICAgIHkyPSI3Ny4zNDE4IgogICAgICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICAgPgogICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjAwMDk4NDI1MiIgc3RvcC1jb2xvcj0iIzdCRERFRiIgLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0MzRjJGNCIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgICAgaWQ9InBhaW50Ml9saW5lYXIiCiAgICAgICAgICB4MT0iODIuNTEyMyIKICAgICAgICAgIHkxPSIxMDMuMDgzIgogICAgICAgICAgeDI9Ijg2LjEyNTQiCiAgICAgICAgICB5Mj0iMjEzLjI0OSIKICAgICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgID4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNCREJFRTMiIC8+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4RTkxRTQiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgPC9zdmc+"
    }
}]);
//# sourceMappingURL=https://local.teams.office.com/sourcemaps/hashed-assets/core-essentials-8a96742b0b4f5fc5.js.map
