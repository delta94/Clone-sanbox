"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [139], {
        41139: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => SiteUsersPanel
            });
            var a = l(20011),
                r = l(32735),
                n = l(74514),
                o = l(14574),
                u = l(26349),
                s = l(49162),
                m = l(30398),
                i = l(96299),
                c = l(2509),
                d = l(52274),
                p = l(21168),
                h = l(3382),
                E = l(65204),
                f = l(97777),
                g = l(152),
                T = l(71037),
                w = l(92342),
                C = l(5646);
            let formatNumberWithCommas = e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var b = l(53572);
            let v = (0, u.r9)(g.gq)({
                    alignItems: "center",
                    gap: u.TV.space[1]
                }),
                x = (0, u.r9)("div")({
                    display: "grid",
                    alignItems: "center",
                    gridGap: u.TV.space[2],
                    gridAutoFlow: "column",
                    justifyContent: "space-between"
                }),
                W = (0, u.r9)("p")({
                    marginTop: 0
                }),
                UserToolTip = e => {
                    let {
                        content: t
                    } = e;
                    return r.createElement("div", null, null !== t && r.createElement(W, null, t), "User account limits are determined by your site plan.", " ", r.createElement(w.rUS, {
                        colorVariant: "inherit",
                        shouldShowUnderline: !0,
                        target: "_blank",
                        isExternal: !0,
                        href: "https://webflow.com/pricing",
                        onClick: e => {
                            e.stopPropagation()
                        }
                    }, "Learn more"))
                },
                UsersCountText = e => {
                    let {
                        loaded: t,
                        userCount: l,
                        siteUserLimit: a,
                        isEnterprise: n
                    } = e;
                    return t || f.kb.PREVIEW ? 0 === l ? "No users" : n ? `${formatNumberWithCommas(l)} ${(0,E._6)(a,"user")}` : `${formatNumberWithCommas(l)} of ${formatNumberWithCommas(a)} ${(0,E._6)(a,"user")}` : r.createElement(h.Z, {
                        small: !0
                    })
                },
                AccessGroupCountText = e => {
                    let {
                        loaded: t,
                        accessGroups: l
                    } = e;
                    return t || f.kb.PREVIEW ? 0 === l.length ? "No groups" : `${l.length} of ${C.Nt} ${(0,E._6)(C.Nt,"group")}` : r.createElement(h.Z, {
                        small: !0
                    })
                },
                getTooltipWidth = e => {
                    let {
                        siteHasReachedUserLimit: t
                    } = e;
                    if (t) return 345
                },
                getTooltipContent = e => {
                    let {
                        siteIsApproachingUserLimit: t,
                        siteHasReachedUserLimit: l
                    } = e;
                    return t ? "You have almost reached the maximum number of users for this website." : l ? "You have reached 100% of the maximum users for this website. New users trying to sign up will see an error message." : null
                };

            function SiteUsersPanel(e) {
                let {
                    childPanels: t,
                    ...l
                } = e, u = (0, o.oW)(), h = (0, o.Yx)(d.nqw), f = (0, o.Yx)(d.DMw), {
                    stepsLeft: C
                } = (0, p.H)(), W = (0, o.Yx)(d.VFr), {
                    siteUserLimit: U,
                    siteHasReachedUserLimit: $,
                    siteIsApproachingUserLimit: k,
                    isEnterprise: N
                } = (0, T.d)();
                return r.useEffect(() => {
                    u((0, d.g9e)()), !1 === f.loaded && u((0, d.kcI)())
                }, [u, f]), r.createElement(c.default.Body, null, r.createElement(s.fY, (0, a.Z)({}, l, {
                    childPanels: null == t || 0 === t.length ? n.ow : t.reduce((e, t) => {
                        if (t.name === m.pc) {
                            if (W) return e;
                            e.push({
                                ...t,
                                metadata: {
                                    ...t.metadata,
                                    title: () => r.createElement(g.tu, null, "Setup guide", C > 0 ? r.createElement(w.xvT, {
                                        colorVariant: "warning"
                                    }, `${C} ${(0,E._6)(C,"step")} left`) : r.createElement(w.xvT, {
                                        colorVariant: "success"
                                    }, "Setup Complete!"))
                                }
                            })
                        } else if (t.name === m.nw) {
                            let l = {
                                    loaded: h.loaded,
                                    userCount: h.value,
                                    siteUserLimit: U,
                                    isEnterprise: N
                                },
                                a = getTooltipContent({
                                    siteIsApproachingUserLimit: k,
                                    siteHasReachedUserLimit: $
                                }),
                                n = getTooltipWidth({
                                    siteHasReachedUserLimit: $
                                });
                            e.push({
                                ...t,
                                metadata: {
                                    ...t.metadata,
                                    title: () => r.createElement(g.tu, null, "User accounts", r.createElement(v, null, r.createElement(w.xvT, null, r.createElement(UsersCountText, l)), h.value ? r.createElement(b.FZ, {
                                        tooltipWidth: n,
                                        label: r.createElement(UserToolTip, {
                                            content: a
                                        })
                                    }) : null))
                                }
                            })
                        } else if (t.name === m.WQ) {
                            let l = {
                                loaded: f.loaded,
                                accessGroups: f.value
                            };
                            e.push({
                                ...t,
                                metadata: {
                                    ...t.metadata,
                                    title: () => r.createElement(g.tu, null, t.metadata.title, r.createElement(v, null, r.createElement(w.xvT, null, r.createElement(AccessGroupCountText, l))))
                                }
                            })
                        } else if (t.name === m.JK || t.name === m.aT) {
                            var l;
                            let n = t.Icon,
                                o = null !== (l = t.metadata.title) && void 0 !== l ? l : "";
                            e.push({
                                ...t,
                                Icon: n ? e => r.createElement(n, e) : n,
                                metadata: {
                                    ...t.metadata,
                                    title: e => r.createElement(x, null, r.createElement(i.CK, null, r.createElement(s.wv, (0, a.Z)({}, e, {
                                        title: o
                                    }))))
                                }
                            })
                        } else e.push(t);
                        return e
                    }, [])
                })))
            }
        }
    }
]);
//# sourceMappingURL=webflow-designer.2c394ab9ea98439c8f30.chunk-ep.js.map