"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [896], {
        79896: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => eA
            });
            var n = l(32735),
                a = l(12463),
                o = l(13066),
                r = l(44838),
                i = l(20011),
                c = l(2509),
                s = l(92342),
                m = l(14935),
                u = l(24653),
                d = l(13672),
                g = l(46741),
                C = l(73374),
                p = l(66050),
                E = l(29532),
                h = l(93951),
                f = l(14574),
                y = l(98512),
                S = l(95111),
                b = l(3594),
                k = l(90282);
            let TutorialCard = class TutorialCard extends n.PureComponent {
                render() {
                    let {
                        title: e,
                        videoUrl: t,
                        thumbnailUrl: l,
                        onClose: a
                    } = this.props, o = a ? n.createElement(c.default.CardClose, {
                        onClick: a
                    }) : null;
                    return n.createElement(c.default.Card, {
                        "data-automation-id": "tutorial-card"
                    }, o, n.createElement(s.G7x, {
                        margin: "$2 0"
                    }, n.createElement(s.xvT, {
                        colorVariant: "heading",
                        font: "heading",
                        "data-automation-id": "tutorial-card-title"
                    }, e)), n.createElement(S.Z, {
                        videoUrl: t,
                        thumbnailUrl: l,
                        isolate: !0,
                        dynamic: !0
                    }), n.createElement(b.Z, {
                        _name: "Pane_CardFooter"
                    }, "Watch more video tutorials on the", " ", n.createElement(k.Z, {
                        href: "https://university.webflow.com/?utm_source=dm"
                    }, "Webflow University"), "."))
                }
            };
            var v = l(54771),
                I = l.n(v),
                P = l(98477),
                w = l.n(P),
                x = l(86388),
                L = l(1692),
                _ = l(23753),
                D = l(40173),
                M = l(97777);
            let doing = (e, t) => e.getIn([(0, d.zv)(t), "editing"]) ? "editing an item" : "viewing an item",
                tooltip = (e, t) => l => {
                    let n = t.get((null == l ? void 0 : l.userId) || "");
                    return `${(0,D.v2)(n)} is ${doing(e,n)}`
                },
                N = (0, r.nC)(e => {
                    var t;
                    let {
                        RealtimeStore: l,
                        UserStore: n,
                        HandoverStore: a
                    } = e;
                    return {
                        realtime: l,
                        users: n.siteUsers.merge(n.users),
                        leaderSessionId: null === (t = a.leader) || void 0 === t ? void 0 : t.sessionId
                    }
                })(e => {
                    let {
                        collectionId: t,
                        realtime: l = {},
                        users: a,
                        leaderSessionId: o,
                        ...r
                    } = e;
                    if (M.Ec) return null;
                    let {
                        connected: c,
                        uuid: s
                    } = l, m = l.presences.filter(e => !!((null == e ? void 0 : e.collectionId) && e.collectionId === t)).filter(e => !!(null == e ? void 0 : e.itemId)).filter(e => (null == e ? void 0 : e.sessionId) !== s).toList();
                    return n.createElement(_.Z, (0, i.Z)({
                        presencesToShow: m.take(4),
                        presencesToGroup: m.skip(4),
                        users: a,
                        connected: c,
                        tooltip: tooltip(m, a),
                        leaderSessionId: o,
                        uuid: s,
                        displayDropdown: !0
                    }, r))
                });
            var Z = l(75747),
                O = l(26349),
                A = l(96299),
                U = l(75174),
                T = l(60377),
                V = l(13311),
                z = l(49608),
                Y = l(9087);
            let F = {
                    cursor: "grab",
                    opacity: ".5",
                    height: 24,
                    width: 8
                },
                $ = (0, O.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        backgroundColor: t.colors.backgroundDeep,
                        height: t.CMS.listItemHeight,
                        width: "100%",
                        borderBottom: `1px solid ${t.colors.backgroundDark}`
                    }
                }),
                B = (0, O.zo)(U.Z)(e => {
                    let {
                        theme: {
                            gutters: t
                        }
                    } = e;
                    return {
                        marginLeft: t.x8
                    }
                }),
                ChevronIcon = () => n.createElement(s.G7x, {
                    color: "$textDefault"
                }, n.createElement(s.Fbu, null)),
                H = w()(O.YY, (0, x.Ej)("cms", {
                    beginDrag: e => ({
                        id: (0, d.zv)(e.collection)
                    }),
                    endDrag(e, t) {
                        t.didDrop() && e.onCollectionSortEnd({
                            collectionId: (0, d.zv)(e.collection),
                            targetIndex: t.getDropResult().index,
                            previousIndex: e.index
                        })
                    },
                    canDrag: e => !e.isDraggingDisabled
                }, (e, t) => ({
                    isDragging: t.isDragging(),
                    connectDragSource: e.dragSource(),
                    canDrag: t.canDrag()
                })), (0, x.GR)("cms", {
                    drop(e) {
                        let {
                            collection: t,
                            index: l
                        } = e, n = (0, d.zv)(t);
                        return {
                            id: n,
                            index: l
                        }
                    }
                }, (e, t) => {
                    let l = t.getItem();
                    return {
                        idOfItemBeingDragged: l ? (0, d.zv)(l) : void 0,
                        isOver: t.isOver(),
                        canDrop: t.canDrop(),
                        connectDropTarget: e.dropTarget()
                    }
                })),
                G = n.memo(H(e => {
                    let {
                        canDrop: t,
                        collection: l,
                        connectDragSource: a,
                        connectDropTarget: o,
                        idOfItemBeingDragged: r,
                        isCurrentCollection: i,
                        isDragging: c,
                        isOver: m,
                        itemCount: u,
                        isLoadingItemCount: g,
                        onClick: C,
                        showCollectionSettings: p,
                        sortedCollections: E,
                        theme: h,
                        isDraggingDisabled: y,
                        isCollectionSettingsDisabled: S
                    } = e, [b, k] = (0, Y.Z)(), v = (0, O.EW)(), P = (0, f.Yx)(e => e.CollectionStore.scheduledItems);
                    if (c) return n.createElement($, null);
                    let {
                        name: w = ""
                    } = l, x = {
                        marginLeft: h.gutters.normal
                    }, _ = {
                        marginLeft: h.gutters.normal,
                        ...T.JE
                    }, D = "string" == typeof r, M = !!(a && o && !y), U = i || b.hover, H = {
                        [s.JO$.__experimentalTokens.color]: U ? O.TV.colors.textActive : O.TV.colors.textSecondary,
                        alignItems: "center",
                        backgroundColor: U ? h.list.itemBackgroundHover : null,
                        borderBottom: v ? null : `1px solid ${h.colors.borderDeep}`,
                        display: "grid",
                        gridTemplateColumns: "8px auto auto auto 1fr auto",
                        height: h.CMS.listItemHeight,
                        paddingLeft: h.gutters.base,
                        paddingRight: 3 * h.gutters.base,
                        position: "relative",
                        boxShadow: `0 -1px ${h.colors.backgroundDark}`
                    }, G = (0, V.h)(P, l._id);
                    return n.createElement("div", {
                        "data-automation-id": l.name.replace(/[\W]/g, "-"),
                        onMouseEnter: k.onMouseEnter,
                        onMouseLeave: k.onMouseLeave,
                        style: H,
                        onClick: () => C(l),
                        ref: e => {
                            null != e && (t ? o(e) : a(e))
                        }
                    }, b.hover && M ? n.createElement(s.VVU, {
                        style: F
                    }) : n.createElement("div", null), n.createElement(s.YPZ, null), n.createElement(A.CK, {
                        style: _
                    }, I()(w) || "New Collection"), n.createElement(A.CK, {
                        style: _,
                        muted: !0
                    }, g ? "Loading..." : function(e) {
                        switch (e) {
                            case 0:
                                return "No items";
                            case 1:
                                return "1 item";
                            default:
                                return `${e} items`
                        }
                    }(u)), n.createElement(L.Z, null, n.createElement(N, {
                        collectionId: l._id,
                        style: x
                    }), G > 0 ? n.createElement(B, {
                        count: G,
                        warning: !0
                    }) : null), !b.hover || S || D ? i ? n.createElement(ChevronIcon, null) : null : n.createElement("div", null, n.createElement(Z.Z, {
                        onClick: e => {
                            e.stopPropagation(), p(l)
                        },
                        icon: n.createElement(s.ewm, null),
                        allowGlobalEventHandlers: !1,
                        ariaLabel: `Edit ${w}`
                    })), m && D && n.createElement(z.fH, {
                        theme: h,
                        id: (0, d.zv)(l),
                        idOfItemBeingDragged: r,
                        order: E
                    }))
                }));
            var j = l(30398);
            let EmptyStateComponent = e => {
                    let {
                        linkAction: t
                    } = e;
                    return n.createElement(s.G7x, {
                        margin: "$3"
                    }, n.createElement(s.ubH, {
                        size: "medium",
                        title: "No collections yet",
                        "data-automation-id": "create-first-collection-card"
                    }, n.createElement(s.BqV, null, n.createElement(s.ULY, null, n.createElement(s.PHJ, {
                        onClick: t
                    }, "Create new collection")))))
                },
                CMS_CMSCollectionsList = () => {
                    let {
                        collections: e,
                        activeCollection: t,
                        dispatch: l,
                        panelPrefix: a
                    } = (0, h.kp)(), {
                        mutate: r
                    } = (0, u.vU)(), i = (0, f.Yx)((0, y.Jo)("canAccessCMSSettings")), c = (0, f.Yx)((0, y.Jo)("canCreateCMSCollection")), s = (0, f.Yx)(e => e.DataManagerUIStore.isTutorialVisible), S = (0, f.Yx)(e => (0, o.Vm)(e.PanelsStore, (0, o.Oe)(a, j.f8))), b = (0, f.Yx)((0, y.Jo)("canSaveCMSContent")), k = (0, f.Yx)(e => e.CollectionStore.itemCountByCollectionId), v = (0, f.Yx)(e => e.BetaFeatureStore.localization ? e.CollectionStore.localizedItemCountByLocaleId : null), I = (0, f.Yx)(e => (0, E.Od)(e.LocalizationStore)), P = (0, f.Yx)(m.it), w = (0, u.bX)(P), x = "loading" === w.status, {
                        DataManagerUIActionCreators: L,
                        CollectionActionCreators: _
                    } = (0, f.sO)(), D = n.useCallback(() => {
                        _.mintCollection()
                    }, [_]), M = n.useCallback(t => {
                        let l;
                        let {
                            collectionId: n,
                            previousIndex: a,
                            targetIndex: o
                        } = t, i = e.get(n);
                        if (!i) return;
                        let c = e.valueSeq();
                        if (o === e.size - 1) {
                            let t = e.last();
                            if (!t) return;
                            l = (0, C.HU)(Number.MAX_SAFE_INTEGER, (0, g.A7)(t))
                        } else if (0 === o) {
                            let e = c.first();
                            if (!e) return;
                            l = (0, C.HU)((0, g.A7)(e), 0)
                        } else if (o < a) {
                            let e = c.get(o - 1),
                                t = c.get(o);
                            if (!e || !t) return;
                            l = (0, C.HU)((0, g.A7)(t), (0, g.A7)(e))
                        } else if (o > a) {
                            let e = c.get(o),
                                t = c.get(o + 1);
                            if (!e || !t) return;
                            l = (0, C.HU)((0, g.A7)(t), (0, g.A7)(e))
                        }
                        if (null != l) {
                            let e = i.set("sortPos", l);
                            r(e)
                        }
                    }, [e, r]), [N, Z] = n.useMemo(() => [e.toArray(), Array.from(e.keys())], [e]), O = s ? n.createElement(TutorialCard, {
                        title: "Discover the power of the Webflow CMS and Collections",
                        videoUrl: "https://university.webflow.com/courses/cms-and-dynamic-content-course?utm_source=collection-panel",
                        thumbnailUrl: "https://d3e54v103j8qbb.cloudfront.net/img/dm-videothumbnail@2x.221858e235.png",
                        onClose: L.hideTutorial
                    }) : null;
                    return N.length > 0 || !b ? n.createElement(n.Fragment, null, n.createElement(p.jt, {
                        id: p.oW.CMS_COLLECTIONS,
                        viewport: null
                    }, n.createElement(n.Fragment, null, N.map((e, r) => {
                        let c = e._id === (null == t ? void 0 : t._id),
                            s = e._id && k.get(e._id) || 0;
                        return v && I && (s = e._id && v.getIn([I.cmsId, e._id]) || 0), n.createElement(G, {
                            key: e._id,
                            collection: e,
                            itemCount: s,
                            showCollectionSettings: () => {
                                l((0, o.JN)((0, o.Oe)(a, j.Nt), {
                                    activeCollection: e
                                }))
                            },
                            isCurrentCollection: c,
                            sortedCollections: Z,
                            index: r,
                            isDraggingDisabled: !b,
                            isCollectionSettingsDisabled: (0, d.pT)(e) || !i,
                            onClick: () => {
                                c && !S ? l((0, o.At)((0, o.Oe)(a, j.MG))) : l((0, o.JN)((0, o.Oe)(a, j.pT), {
                                    activeCollection: e
                                }))
                            },
                            onCollectionSortEnd: M,
                            isLoadingItemCount: x
                        })
                    }))), O) : n.createElement(n.Fragment, null, c ? n.createElement(EmptyStateComponent, {
                        linkAction: D
                    }) : null, O)
                };
            var q = l(92267),
                R = l(62558),
                J = l(14897),
                K = l(65204),
                W = l(78451),
                X = l(21414),
                Q = l(46536),
                ee = l(49534);
            let et = (0, O.r9)(s.xvT)({
                    marginLeft: "$1"
                }),
                StyledCopy = e => n.createElement(et, (0, i.Z)({
                    truncateToLines: 1
                }, e)),
                el = (0, O.zo)("div")(e => {
                    let {
                        theme: t,
                        state: l
                    } = e, n = "hover" === l, a = "selected" === l;
                    return {
                        [s.JO$.__experimentalTokens.color]: n ? O.TV.colors.textActive : O.TV.colors.textSecondary,
                        alignItems: "center",
                        backgroundColor: a ? t.list.itemBackgroundHover : n ? t.list.itemBackgroundHover : "transparent",
                        display: "grid",
                        gridTemplateColumns: a ? "auto auto auto 1fr auto auto" : "auto auto auto 1fr auto",
                        height: t.list.panelItemHeight,
                        paddingLeft: 3 * t.gutters.base,
                        paddingRight: 3 * t.gutters.base,
                        position: "relative",
                        boxShadow: `0 -1px ${t.colors.backgroundDark}`
                    }
                });

            function CommerceListItem(e) {
                let [t, l] = (0, Y.Z)();
                return n.createElement(el, (0, i.Z)({
                    "data-automation-id": e["data-automation-id"],
                    onClick: e.onClick,
                    state: e.isSelected ? "selected" : t.hover ? "hover" : "default"
                }, l), ("function" == typeof e.itemIcon ? e.itemIcon(t) : e.itemIcon) || n.createElement("div", null), ("function" == typeof e.label ? e.label(t) : e.label) || n.createElement("div", null), ("function" == typeof e.countLabel ? e.countLabel(t) : e.countLabel) || n.createElement("div", null), ("function" == typeof e.rest ? e.rest(t) : e.rest) || n.createElement("div", null))
            }
            let GettingStartedListItem = e => {
                    let {
                        todosRemaining: t
                    } = e, {
                        selectCommerceGettingStarted: l,
                        deselectCommerceGettingStarted: a
                    } = (0, f.sO)().DataManagerUIActionCreators, r = (0, f.Yx)(e => (0, o.Vm)(e.PanelsStore, j.p3)), i = n.useCallback(() => r ? a() : l(), [r, l, a]);
                    return n.createElement(CommerceListItem, {
                        "data-automation-id": "commerce-getting-started-row",
                        onClick: i,
                        isSelected: r,
                        itemIcon: n.createElement(s.rE2, null),
                        label: n.createElement(StyledCopy, null, "Setup guide"),
                        countLabel: t < 1 ? n.createElement(StyledCopy, {
                            colorVariant: "success"
                        }, "Setup complete!") : n.createElement(StyledCopy, {
                            colorVariant: "warning"
                        }, t || "No", " ", (0, K._6)(t, "step"), " left"),
                        rest: r ? n.createElement(s.Fbu, {
                            colorVariant: "default",
                            style: {
                                justifySelf: "end"
                            }
                        }) : null
                    })
                },
                _getSortedCommerceCollections = e => (0, g.zf)((0, W.t5)(e)),
                _getCollectionIcon = e => (0, J.Hy)(e) ? n.createElement(s.Vwp, null) : (0, J.nJ)(e) ? n.createElement(s.Iof, null) : n.createElement(s.YPZ, null),
                _getCollectionAutomationId = e => (0, J.Hy)(e) ? "product" : (0, J.nJ)(e) ? "category" : "collection",
                _getNormalizedCollectionName = e => {
                    let t = "";
                    return e && (t = e.name.trim()), t || (t = "New Collection"), t
                },
                isViewerSelector = e => e.HandoverStore.isViewer;

            function ProductAndCategoryListItems(e) {
                let t = n.useMemo(() => _getSortedCommerceCollections(e.collections).toArray(), [e.collections]),
                    {
                        showCollectionSettings: l,
                        selectCollection: a,
                        deselectCollection: r
                    } = (0, f.sO)().DataManagerUIActionCreators,
                    i = (0, f.Yx)(isViewerSelector),
                    c = (0, f.Yx)(e => (0, o.Vm)(e.PanelsStore, (0, o.Oe)("commerce", j.Nt))),
                    m = e.onCollectionClick,
                    u = n.useCallback((e, t) => {
                        e ? r(t) : a(t), "function" == typeof m && m(e, t)
                    }, [r, a, m]);
                return n.createElement(n.Fragment, null, t.map(t => {
                    let a = (0, d.zv)(t),
                        o = (0, d.U4)(t, e.currentCollection),
                        r = o && c,
                        m = e.itemCounts.get(a) || 0,
                        g = _getNormalizedCollectionName(o ? e.currentCollection : t);
                    return n.createElement(CommerceListItem, {
                        key: a,
                        "data-automation-id": _getCollectionAutomationId(t),
                        onClick: () => u(o, t),
                        isSelected: o,
                        itemIcon: _getCollectionIcon(t),
                        label: n.createElement(StyledCopy, null, g),
                        countLabel: n.createElement(StyledCopy, {
                            colorVariant: "secondary"
                        }, e.isLoadingCounts ? n.createElement(n.Fragment, null, "Loading…") : n.createElement(n.Fragment, null, m || "No", " ", (0, K._6)(m, "item"))),
                        rest: e => n.createElement(n.Fragment, null, n.createElement(N, {
                            collectionId: a
                        }), !r && !i && n.createElement(Z.Z, {
                            onClick: e => {
                                e.stopPropagation(), l(t)
                            },
                            icon: n.createElement(s.ewm, null),
                            allowGlobalEventHandlers: !1,
                            ariaLabel: `Edit ${_getCollectionAutomationId(t)} settings`,
                            style: {
                                justifySelf: "end",
                                opacity: e.hover ? 1 : 0
                            }
                        }), (o && !e.hover || r) && n.createElement(s.Fbu, {
                            colorVariant: "default",
                            style: {
                                justifySelf: "end"
                            }
                        }))
                    })
                }))
            }
            let _selectNumberOfDiscounts = e => e.CommerceStore.discounts.immutableListOfAllDiscounts.size;

            function DiscountListItem() {
                let e = (0, f.Yx)(e => (0, o.Vm)(e.PanelsStore, j.x_)),
                    t = (0, f.Yx)(_selectNumberOfDiscounts),
                    {
                        selectCommerceDiscountListPaneView: l,
                        deselectCommerceDiscountListPaneView: a
                    } = (0, f.sO)().DataManagerUIActionCreators,
                    r = n.useCallback(() => e ? a().catch(() => {}) : l(), [e, l, a]);
                return n.createElement(CommerceListItem, {
                    "data-automation-id": "discounts",
                    onClick: r,
                    isSelected: e,
                    itemIcon: n.createElement(s.YA8, null),
                    label: n.createElement(StyledCopy, null, "Discounts"),
                    countLabel: n.createElement(StyledCopy, {
                        colorVariant: "secondary"
                    }, t || "No", " ", (0, K._6)(t, "item")),
                    rest: n.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end"
                        }
                    }, e && n.createElement(s.Fbu, {
                        colorVariant: "default",
                        style: {
                            marginLeft: 11
                        }
                    }))
                })
            }

            function OrdersListItem() {
                var e, t;
                let l = (0, f.Yx)(e => (0, o.Vm)(e.PanelsStore, j.QA)),
                    {
                        DataManagerUIActionCreators: {
                            selectCommerceOrderManager: a,
                            deselectCommerceOrderManager: r
                        }
                    } = (0, f.sO)(),
                    i = (0, q.Z)(),
                    c = (0, R.CJ)({
                        siteShortName: i
                    }),
                    m = (null === (e = c.data) || void 0 === e ? void 0 : e.totalItems) || 0,
                    u = (null === (t = c.data) || void 0 === t ? void 0 : t.numUnfulfilled) || 0,
                    d = (0, f.I0)();
                (0, n.useEffect)(() => {
                    d((0, ee.O5)({
                        numUnfulfilled: u
                    }))
                }, [u]);
                let g = n.useCallback(e => {
                    l ? r() : a()
                }, [l, r, a]);
                return n.createElement(CommerceListItem, {
                    "data-automation-id": "orders",
                    onClick: g,
                    isSelected: l,
                    itemIcon: n.createElement(s.Mui, null),
                    label: () => n.createElement(StyledCopy, null, "Orders"),
                    countLabel: n.createElement(StyledCopy, {
                        colorVariant: "secondary"
                    }, "success" !== c.status ? n.createElement(n.Fragment, null, "Loading…") : n.createElement(n.Fragment, null, m || "No", " ", (0, K._6)(m, "item"))),
                    rest: n.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end"
                        }
                    }, u > 0 && n.createElement(U.Z, {
                        count: u,
                        warning: !0
                    }), l && n.createElement(s.Fbu, {
                        colorVariant: "default",
                        style: {
                            marginLeft: 11
                        }
                    }))
                })
            }

            function SubscriptionsListItem() {
                var e, t;
                let l = (0, f.I0)(),
                    a = (0, q.Z)(),
                    r = (0, R.VU)({
                        siteShortName: a
                    }),
                    i = (null === (e = r.data) || void 0 === e ? void 0 : e.totalItems) || 0,
                    c = (null === (t = r.data) || void 0 === t ? void 0 : t.numNonCanceled) || 0,
                    m = (0, f.Yx)(e => (0, o.Vm)(e.PanelsStore, j.W0)),
                    u = n.useCallback(() => l(m ? (0, Q.bX)() : (0, Q.Pz)()), [m, l]);
                return n.createElement(CommerceListItem, {
                    "data-automation-id": "subscriptions",
                    onClick: u,
                    isSelected: m,
                    itemIcon: n.createElement(s.GSd, null),
                    label: n.createElement(StyledCopy, null, "Subscriptions"),
                    countLabel: n.createElement(StyledCopy, {
                        colorVariant: "secondary"
                    }, "success" !== r.status ? n.createElement(n.Fragment, null, "Loading…") : n.createElement(n.Fragment, null, i || "No", " ", (0, K._6)(i, "item"))),
                    rest: n.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end"
                        }
                    }, c > 0 && n.createElement(U.Z, {
                        count: c,
                        warning: !0
                    }), m && n.createElement(s.Fbu, {
                        colorVariant: "default",
                        style: {
                            marginLeft: 11
                        }
                    }))
                })
            }
            let en = (0, a.P1)(e => e.CommerceStore, e => (0, W.I)(e)),
                ea = n.memo(function(e) {
                    let t = (0, f.Yx)(en),
                        l = (0, f.Yx)((0, y.Jo)("canViewSetupEcomm"));
                    return n.createElement(n.Fragment, null, e.showSetupGuide && l && n.createElement(GettingStartedListItem, {
                        todosRemaining: t
                    }), n.createElement(ProductAndCategoryListItems, {
                        collections: e.collections,
                        currentCollection: e.currentCollection,
                        itemCounts: e.itemCounts,
                        isLoadingCounts: e.itemsRequest && e.itemsRequest.get("status") !== X.qb.FINISHED,
                        onCollectionClick: e.onCollectionClick
                    }), n.createElement(DiscountListItem, null), !M.kb.READ_ONLY && n.createElement(n.Fragment, null, n.createElement(OrdersListItem, null), n.createElement(SubscriptionsListItem, null)))
                });
            var eo = l(47169),
                er = l(88601),
                ei = l(17114),
                ec = l(56727),
                es = l(36309),
                em = l(74514),
                eu = l(29121),
                ed = l(79714),
                eg = l(97396),
                eC = l(26614),
                ep = l(152),
                eE = l(30967),
                eh = l(3382);
            let ef = (0, O.zo)(eC.Z)(e => {
                    let {
                        theme: {
                            gutters: t
                        }
                    } = e;
                    return {
                        marginBottom: t.x16,
                        marginTop: 0
                    }
                }),
                ey = (0, O.zo)(ep.gq)(e => {
                    let {
                        theme: {
                            gutters: t
                        }
                    } = e;
                    return {
                        marginTop: t.x16
                    }
                }),
                eS = (0, O.zo)(eE.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        fontSize: t.fontSizes.copy
                    }
                }),
                eb = (0, O.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        marginLeft: t.gutters.narrow
                    }
                }),
                parseSlugsByType = e => e.reduce((e, t) => {
                    if (t.slugType) switch (t.slugType) {
                        case "CMS":
                            e.cms.push(t.label);
                            break;
                        case "Page":
                            e.page.push(t.label);
                            break;
                        case "Folder":
                            e.folder.push(t.label)
                    }
                    return e
                }, {
                    page: [],
                    folder: [],
                    cms: []
                });
            let CommerceSetupModal = class CommerceSetupModal extends n.Component {
                constructor() {
                    super(...arguments), (0, eo.Z)(this, "parseIssues", () => this.props.hasIssues.length > 0 ? this.props.hasIssues.reduce((e, t) => (t.slug && e.slugConflicts.push({
                        label: "/" + t.slug,
                        id: t.slug,
                        slugType: t.slugType
                    }), t.name && e.nameConflicts.push({
                        label: t.name,
                        id: t.name
                    }), e), {
                        slugConflicts: [],
                        nameConflicts: []
                    }) : {
                        slugConflicts: [],
                        nameConflicts: []
                    })
                }
                componentDidMount() {
                    let {
                        nameConflicts: e,
                        slugConflicts: t
                    } = this.parseIssues(), l = e.length + t.length, n = e.reduce((e, t) => (e.push(t.label), e), []), a = parseSlugsByType(t);
                    this.props.onCommerceEnabledModalViewed(l, n, a)
                }
                render() {
                    let {
                        cancelCommerceSetup: e,
                        onCommerceSetupCollectionPanelClick: t,
                        onCommerceSetupPagesPanelClick: l,
                        onAddHostingClicked: a,
                        onContactUsClicked: o,
                        doSetup: r,
                        width: i,
                        maxCollections: c,
                        numCollections: m,
                        isReady: u
                    } = this.props, {
                        nameConflicts: d,
                        slugConflicts: g
                    } = this.parseIssues(), C = parseSlugsByType(g), p = C.cms.map(e => ({
                        id: e || "",
                        label: e || ""
                    })), E = C.page.concat(C.folder).map(e => ({
                        id: e || "",
                        label: e || ""
                    })), h = g.length || d.length, f = c > 0 ? `Ecommerce requires three new Collections, which would take you over your current plan’s limit of ${c} collections.
            You’ll need to upgrade to an Ecommerce Plus or Advanced site plan to continue.` : "You’ll need an Ecommerce site plan to continue.";
                    return 0 === c || c <= 20 && m > c - 3 ? n.createElement(ed.Z, {
                        title: c > 0 ? "Collections limit reached" : "Upgrade your site plan",
                        allowCancel: !0,
                        onCancel: e,
                        width: i
                    }, n.createElement(A.CK, {
                        style: {
                            marginBlockEnd: 12
                        }
                    }, f), n.createElement(ey, {
                        justify: "end"
                    }, n.createElement(eg.ZP, {
                        sizing: "large",
                        onClick: e
                    }, "Cancel"), n.createElement(eg.ZP, {
                        sizing: "large",
                        primary: !0,
                        style: {
                            marginLeft: 8
                        },
                        onClick: a
                    }, "Upgrade site plan"))) : c > 20 && m > c - 3 ? n.createElement(ed.Z, {
                        title: "Collections limit reached",
                        allowCancel: !0,
                        onCancel: e,
                        width: i
                    }, n.createElement(A.CK, {
                        style: {
                            marginBlockEnd: 12
                        }
                    }, "Ecommerce requires three new Collections, which would take you over our limit of ", c, " Collections. Contact us for help."), n.createElement(ey, {
                        justify: "end"
                    }, n.createElement(eg.ZP, {
                        sizing: "large",
                        style: {
                            marginLeft: 8
                        },
                        onClick: e
                    }, "Cancel"), n.createElement(eg.ZP, {
                        sizing: "large",
                        primary: !0,
                        onClick: o
                    }, "Contact us"))) : h ? n.createElement(ed.Z, {
                        title: "Updates required",
                        allowCancel: !0,
                        onCancel: e,
                        width: i
                    }, n.createElement(ep.tu, null, n.createElement(ef, null, n.createElement(s.jCS, {
                        size: "large",
                        colorVariant: "warning",
                        hasIcon: !1
                    }, n.createElement(A.xv, null, "You are currently using Collection names and/or page slugs that Ecommerce requires."))), d.length ? n.createElement(ef, null, n.createElement(A.CK, {
                        style: {
                            marginBlockEnd: 8
                        }
                    }, "Please rename the following Collection name", d.length > 1 ? "s in the " : " in the ", n.createElement(s.rUS, {
                        onClick: t
                    }, "Collections panel"), ":"), n.createElement(eS, {
                        data: d
                    })) : null, C.cms.length ? n.createElement(ef, null, n.createElement(A.CK, {
                        style: {
                            marginBlockEnd: 8
                        }
                    }, "Please rename the following Collection URL", C.cms.length > 1 ? "s in the " : " in the ", n.createElement(s.rUS, {
                        onClick: t
                    }, "Collections panel"), ":"), n.createElement(eS, {
                        data: p
                    })) : null, E.length ? n.createElement(ef, null, n.createElement(A.CK, {
                        style: {
                            marginBlockEnd: 8
                        }
                    }, "Please rename the following page/folder slug", E.length > 1 ? "s in the " : " in the ", n.createElement(s.rUS, {
                        onClick: l
                    }, "Pages panel"), ":"), n.createElement(eS, {
                        data: E
                    })) : null, n.createElement(ep.gq, {
                        justify: "end"
                    }, n.createElement(eg.ZP, {
                        sizing: "large",
                        primary: !0,
                        onClick: e
                    }, "Ok")))) : n.createElement(ed.Z, {
                        title: "Let’s turn your website into a store",
                        allowCancel: !0,
                        onCancel: e,
                        width: i,
                        "data-automation-id": "ecommerce-setup-modal"
                    }, n.createElement(ep.tu, null, n.createElement(A.CK, {
                        style: {
                            marginBlockEnd: 12
                        }
                    }, "We’ll automatically create two new Collections to get you started:"), n.createElement(eC.Z, null, n.createElement(eS, {
                        data: [{
                            label: "Products",
                            id: "products"
                        }, {
                            label: "Categories",
                            id: "categories"
                        }]
                    })), n.createElement(ep.LZ, {
                        wide: !0
                    }), n.createElement(s.jCS, {
                        size: "large",
                        style: {
                            marginBlockEnd: 8
                        },
                        colorVariant: "warning",
                        icon: n.createElement(s.szr, null)
                    }, n.createElement(A.xv, null, "Enabling ecommerce will create ecommerce collections, pages, and settings that you won", "'", "t be able to completely remove.")), n.createElement(ey, {
                        justify: "end"
                    }, n.createElement(eg.ZP, {
                        sizing: "large",
                        onClick: e,
                        "data-automation-id": "cancel-commerce-setup-button"
                    }, "Cancel"), n.createElement(eg.ZP, {
                        sizing: "large",
                        onClick: r,
                        primary: !0,
                        style: {
                            marginLeft: 8
                        },
                        "data-automation-id": "do-commerce-setup-button",
                        disabled: !u
                    }, u ? "Let’s do this" : n.createElement(ep.gq, {
                        align: "center"
                    }, n.createElement(eh.Z, {
                        small: !0
                    }), n.createElement(eb, null, "Loading..."))))))
                }
            };
            let ek = (0, r.nC)(e => {
                    let {
                        PageStore: t,
                        CollectionStore: l,
                        SiteDataStore: n,
                        CommerceStore: {
                            settings: {
                                requestStatus: a
                            }
                        }
                    } = e;
                    return {
                        pageState: t,
                        collectionState: l,
                        siteDataState: n,
                        commerceSettingsRequestStatus: a
                    }
                })(e => {
                    let {
                        doSetup: t,
                        hidePanel: l,
                        onCommerceSetupCollectionPanelClick: a,
                        onCommerceSetupPagesPanelClick: o,
                        onCommerceEnabledModalViewed: r,
                        onAddHostingClicked: i,
                        onContactUsClicked: c,
                        pageState: s,
                        collectionState: {
                            collections: m
                        },
                        siteDataState: {
                            maxCollections: u
                        },
                        commerceSettingsRequestStatus: d
                    } = e, g = s.get("dynamicPages", (0, er.Map)()).filterNot(e => (0, ec.oG)(e, m)), C = s.get("staticPages", (0, er.Map)()).filterNot(e => (0, ec.Vy)(e)), p = (0, W.be)(m), E = C.merge(g, p), h = [{
                        dynamicPageSlug: "detail_product",
                        dynamicPageName: "Product",
                        conflictChecker: /^product$/
                    }, {
                        dynamicPageSlug: "detail_products",
                        dynamicPageName: "Products",
                        conflictChecker: /^products$/
                    }, {
                        dynamicPageSlug: "detail_category",
                        dynamicPageName: "Category",
                        conflictChecker: /^category$/
                    }, {
                        dynamicPageSlug: "detail_categories",
                        dynamicPageName: "Categories",
                        conflictChecker: /^categories$/
                    }, {
                        dynamicPageSlug: "detail_sku",
                        dynamicPageName: "SKU",
                        conflictChecker: /^sku$/
                    }, {
                        dynamicPageSlug: "detail_skus",
                        dynamicPageName: "SKUs",
                        conflictChecker: /^skus$/
                    }, {
                        dynamicPageSlug: "detail_checkout",
                        dynamicPageName: "Checkout",
                        conflictChecker: /^checkout$/
                    }, {
                        dynamicPageSlug: "detail_paypal_checkout",
                        dynamicPageName: "Checkout (PayPal)",
                        conflictChecker: /^paypal-checkout$/
                    }, {
                        dynamicPageSlug: "detail_order-confirmation",
                        dynamicPageName: "Order Confirmation",
                        conflictChecker: /^order-confirmation$/
                    }].reduce((e, t) => {
                        let l = E.find(e => e.slug === t.dynamicPageSlug || e.slug && t.conflictChecker.test(e.slug)),
                            n = E.find(e => e.type ? "Page" !== e.type && "Folder" !== e.type && (e.name === t.dynamicPageName || t.conflictChecker.test(e.name)) : e.name === t.dynamicPageName || t.conflictChecker.test(e.name));
                        return l || n ? e.concat({
                            slug: l ? l.slug && l.slug.replace("detail_", "") : null,
                            name: n ? n.name : null,
                            slugType: l && l.type && !l.dynCollection ? l.type : "CMS"
                        }) : e
                    }, em.ow);
                    return n.createElement(eu.Z, {
                        onClickBackdrop: l
                    }, n.createElement(CommerceSetupModal, {
                        cancelCommerceSetup: l,
                        onCommerceSetupCollectionPanelClick: a,
                        onCommerceSetupPagesPanelClick: o,
                        onCommerceEnabledModalViewed: r,
                        onAddHostingClicked: i,
                        onContactUsClicked: c,
                        doSetup: t,
                        hasIssues: h,
                        maxCollections: u,
                        numCollections: m.size,
                        isReady: d === es.gm.SUCCEEDED,
                        width: 480
                    }))
                }),
                ev = (0, r.nC)(e => {
                    let {
                        CommerceStore: t,
                        SiteDataStore: l
                    } = e;
                    return {
                        commerceState: t,
                        siteData: l
                    }
                })(class extends n.Component {
                    constructor() {
                        super(...arguments), (0, eo.Z)(this, "hidePanel", () => {
                            this.props.flux.dispatch((0, o.sX)("left"))
                        }), (0, eo.Z)(this, "handleOnCommerceSetupCollectionPanelClick", () => {
                            this.props.flux.dispatch((0, o.JN)(j.gZ))
                        }), (0, eo.Z)(this, "handleOnCommerceSetupPagesPanelClick", () => {
                            this.props.flux.dispatch((0, o.JN)(j.me))
                        }), (0, eo.Z)(this, "handleOnCommerceEnabledModalViewed", (e, t, l) => {
                            this.props.flux.dispatch((0, ee.cH)({
                                totalConflicts: e,
                                cmsNameConflicts: t,
                                slugsByType: l
                            }))
                        }), (0, eo.Z)(this, "handleOnAddHostingClicked", () => {
                            let {
                                shortName: e
                            } = this.props.siteData;
                            (0, ec.$W)(`/dashboard/sites/${e}/hosting?ref=enable_ecomm&ecomm`)
                        }), (0, eo.Z)(this, "handleOnContactUsClicked", () => {
                            window.location.href = "mailto:support@webflow.com?subject=Collection limit reached"
                        }), (0, eo.Z)(this, "doSetup", () => {
                            let {
                                dispatch: e
                            } = this.props.flux;
                            (0, ei.v9)(this.props.siteData.shortName).then(() => {
                                e((0, ee.DF)(this.props.commerceState)), e((0, ee.to)()), e((0, ee.rw)())
                            })
                        })
                    }
                    render() {
                        let {
                            commerceState: e
                        } = this.props;
                        return e.status.cmsState !== es.mR.READY && e.status.cmsState !== es.mR.OUTDATED ? n.createElement(O.Ni.Provider, {
                            value: O.$c
                        }, n.createElement(ek, {
                            hidePanel: this.hidePanel,
                            onCommerceSetupCollectionPanelClick: this.handleOnCommerceSetupCollectionPanelClick,
                            onCommerceSetupPagesPanelClick: this.handleOnCommerceSetupPagesPanelClick,
                            onCommerceEnabledModalViewed: this.handleOnCommerceEnabledModalViewed,
                            onAddHostingClicked: this.handleOnAddHostingClicked,
                            onContactUsClicked: this.handleOnContactUsClicked,
                            doSetup: this.doSetup
                        })) : null
                    }
                }),
                CMS_CMSDataManager = e => {
                    let {
                        collections: t,
                        dispatch: l,
                        panelPrefix: a
                    } = (0, h.kp)(), r = (0, f.Yx)(e => (0, o.Vm)(e.PanelsStore, j._M)), s = (0, f.Yx)(e => e.CollectionStore.itemCountByCollectionId);
                    return n.createElement(c.default.Body, {
                        "data-automation-id": "cms-data-manager-collection-panel"
                    }, n.createElement("div", {
                        "data-automation-id": "cms-collections-list"
                    }, r ? n.createElement(n.Fragment, null, n.createElement(ev, null), n.createElement(ea, (0, i.Z)({}, e, {
                        collections: t,
                        itemCounts: {
                            get: e => s.get(e) || 0
                        },
                        onCollectionClick: (e, t) => {
                            e ? l((0, o.At)((0, o.Oe)(a, j.MG))) : l((0, o.JN)((0, o.Oe)(a, j.pT), {
                                activeCollection: t
                            }))
                        }
                    }))) : n.createElement(CMS_CMSCollectionsList, null)))
                };
            var eI = l(17664),
                eP = l(57381),
                ew = l(77544),
                ex = l(9660),
                eL = l(75732),
                e_ = l(13581);

            function InteractionProfiler(e) {
                let {
                    id: t,
                    children: l
                } = e;
                return l
            }
            l.n(e_)(), l(89793), l(12788);
            let eD = (0, a.P1)(e => e.CollectionStore.collections, (e, t) => !!t.isCommercePanel, (e, t) => t ? (0, W.cf)(e) : (0, W.be)(e)),
                eM = (0, a.P1)(e => e.RequestStore, e => {
                    let t = e.queue.findLast(e => "GET" === e.getIn(["params", "method"]) && e.getIn(["actions", "success"]) === eP.uY);
                    return t
                }),
                eN = (0, a.P1)(e => {
                    let {
                        PageStore: t
                    } = e;
                    return t
                }, e => (0, eI._u)(e).filter(ec.qR)),
                eZ = (0, a.P1)(e => {
                    let {
                        UserCapabilitiesStore: t
                    } = e;
                    return t.canEditCMSContent
                }, e => {
                    let {
                        DataManagerUIStore: t
                    } = e;
                    return t
                }, e => {
                    let {
                        CurrentCollectionStore: t
                    } = e;
                    return t
                }, e => {
                    let {
                        CollectionStore: t
                    } = e;
                    return t
                }, e => e.CommerceStore, e => {
                    let {
                        SiteDataStore: t,
                        PlansStore: l
                    } = e;
                    return {
                        siteDataState: t,
                        plansState: l
                    }
                }, e => {
                    let {
                        ValidationErrorStore: t
                    } = e;
                    return t
                }, e => {
                    let {
                        RealtimeStore: t
                    } = e;
                    return t.presences
                }, eD, eM, eN, (e, t, l, n, a, o, r, i, c, s, m) => {
                    let {
                        siteDataState: u,
                        plansState: d
                    } = o, {
                        isTutorialVisible: g,
                        mode: C,
                        collectionFieldUsages: p,
                        productSettingsProductTypeId: E
                    } = t, {
                        currentCollection: h,
                        currentField: f
                    } = l, {
                        maxFields: y,
                        shortName: S,
                        preferredUrl: b,
                        database: {
                            _id: k
                        }
                    } = u, {
                        owner: v,
                        hosting: I
                    } = d, {
                        itemIndex: P
                    } = n, w = p && p.pages && p.pages.LOADING || !1, x = ew.rJG.find(e => e.id === E);
                    return {
                        canEditCMSContent: e,
                        isTutorialVisible: g,
                        mode: C,
                        currentCollection: h,
                        currentField: f,
                        itemIndex: P,
                        commerceState: a,
                        maxFields: y,
                        shortName: S,
                        preferredUrl: b,
                        databaseId: k,
                        ownerPlan: v,
                        hostingPlan: I,
                        validationErrorState: r,
                        collaboratorCount: i.size,
                        collections: c,
                        itemsRequest: s,
                        rootFolders: m,
                        isLoadingFieldUsages: w,
                        productSettingsProductType: x
                    }
                }),
                eO = (0, r.nC)(eZ, {
                    __UNSAFE__mapActionsToProps: (e, t, l) => {
                        let {
                            showCollectionSettings: n,
                            hideCollectionSettings: a,
                            selectCollection: r,
                            deselectCollection: i,
                            selectField: c,
                            selectHelpSection: s,
                            deselectHelpSection: m,
                            hideTutorial: u,
                            selectCommerceGettingStarted: d,
                            deselectCommerceGettingStarted: g,
                            selectCommerceDiscountListPaneView: C,
                            deselectCommerceDiscountListPaneView: p,
                            selectCommerceDiscountPaneAddEditView: E,
                            deselectCommerceDiscountPaneAddEditView: h,
                            selectCommerceDiscount: f,
                            deselectField: y
                        } = l.DataManagerUIActionCreators, {
                            mintCollection: S,
                            saveCollection: b,
                            submitCollection: k,
                            modifyCollection: v,
                            deleteCollection: I,
                            applyCollectionPreset: P
                        } = l.CollectionActionCreators, {
                            mintField: w,
                            fieldUsagesRequested: x
                        } = l.CollectionFieldActionCreators, {
                            confirmScheduleFailure: L
                        } = l.__DEPRECATED__ConfirmActionCreators;
                        return {
                            showCollectionSettings: n,
                            hideCollectionSettings: a,
                            selectCollection: r,
                            deselectCollection: i,
                            selectField: c,
                            selectHelpSection: s,
                            deselectHelpSection: m,
                            hideTutorial: u,
                            selectCommerceGettingStarted: d,
                            deselectCommerceGettingStarted: g,
                            selectCommerceDiscountListPaneView: C,
                            deselectCommerceDiscountListPaneView: p,
                            selectCommerceDiscountPaneAddEditView: E,
                            deselectCommerceDiscountPaneAddEditView: h,
                            selectCommerceDiscount: f,
                            deselectField: y,
                            mintCollection: S,
                            saveCollection: () => {
                                L().then(b).catch(e => {
                                    if (e !== eP.qBO) return Promise.reject(e)
                                })
                            },
                            submitCollection: k,
                            modifyCollection: v,
                            deleteCollection: I,
                            applyCollectionPreset: P,
                            mintField: w,
                            fieldUsagesRequested: x,
                            hidePanel: () => e((0, o.sX)("left")),
                            onCollectionSortEnd: t => {
                                e((0, ex.U)(t))
                            },
                            toggleHandoverModal: () => e((0, eL.uU)()),
                            updateProductSettingsProductType: t => e((0, ee.QX)({
                                typeId: t
                            }))
                        }
                    }
                })(e => {
                    let {
                        canEditCMSContent: t,
                        isTutorialVisible: l,
                        mode: a,
                        currentCollection: o,
                        currentField: r,
                        maxFields: i,
                        shortName: c,
                        preferredUrl: s,
                        databaseId: m,
                        validationErrorState: u,
                        collaboratorCount: d,
                        isCommercePanel: g,
                        commerceState: C,
                        ownerPlan: p,
                        hostingPlan: E,
                        collections: h,
                        isLoadingFieldUsages: f,
                        showCollectionSettings: y,
                        hideCollectionSettings: S,
                        selectCollection: b,
                        deselectCollection: k,
                        selectField: v,
                        selectHelpSection: I,
                        deselectHelpSection: P,
                        hideTutorial: w,
                        selectCommerceGettingStarted: x,
                        deselectCommerceGettingStarted: L,
                        selectCommerceDiscountListPaneView: _,
                        deselectCommerceDiscountListPaneView: D,
                        selectCommerceDiscountPaneAddEditView: M,
                        deselectCommerceDiscountPaneAddEditView: N,
                        selectCommerceDiscount: Z,
                        deselectField: O,
                        mintCollection: A,
                        saveCollection: U,
                        submitCollection: T,
                        modifyCollection: V,
                        deleteCollection: z,
                        applyCollectionPreset: Y,
                        hidePanel: F,
                        mintField: $,
                        fieldUsagesRequested: B,
                        itemsRequest: H,
                        rootFolders: G,
                        onCollectionSortEnd: j,
                        toggleHandoverModal: q,
                        updateProductSettingsProductType: R,
                        productSettingsProductType: J
                    } = e, K = C.settings.checkoutEnabled, X = C.gettingStartedStatus, Q = K ? 1 : 0, ee = Object.keys(es.Qw).length - (0, W.NW)(X) - Q, et = (0, W.u5)(C.settings), el = {
                        mode: a,
                        itemsRequest: H,
                        collections: h,
                        currentCollection: o,
                        canEditCMSContent: t,
                        isTutorialVisible: l,
                        applyCollectionPreset: Y,
                        hidePanel: F,
                        hideTutorial: w,
                        mintCollection: A,
                        modifyCollection: V,
                        saveCollection: U,
                        submitCollection: T,
                        selectCollection: b,
                        deselectCollection: k,
                        selectCommerceGettingStarted: x,
                        deselectCommerceGettingStarted: L,
                        selectCommerceDiscountListPaneView: _,
                        deselectCommerceDiscountListPaneView: D,
                        selectCommerceDiscountPaneAddEditView: M,
                        deselectCommerceDiscountPaneAddEditView: N,
                        selectCommerceDiscount: Z,
                        selectHelpSection: I,
                        deselectHelpSection: P,
                        deleteCollection: z,
                        showCollectionSettings: y,
                        hideCollectionSettings: S,
                        selectField: v,
                        mintField: $,
                        fieldUsagesRequested: B,
                        deselectField: O,
                        currentField: r,
                        rootFolders: G,
                        maxFields: i,
                        preferredUrl: s,
                        siteShortName: c,
                        validationErrorState: u,
                        collaboratorCount: d,
                        isCommercePanel: g,
                        databaseId: m,
                        defaultCurrency: C.settings.defaultCurrency,
                        ownerPlan: p,
                        hostingPlan: E,
                        gettingStartedStatus: X,
                        checkoutEnabled: K,
                        commerceGettingStartedTodosRemaining: ee,
                        showSetupGuide: C.settings.showSetupGuide,
                        onCollectionSortEnd: j,
                        isLoadingFieldUsages: f,
                        toggleHandoverModal: q,
                        isEcommerceReady: et,
                        updateProductSettingsProductType: R,
                        productSettingsProductType: J
                    };
                    return n.createElement(InteractionProfiler, {
                        id: "CMSDataManager"
                    }, n.createElement(CMS_CMSDataManager, el))
                }),
                eA = eO
        }
    }
]);
//# sourceMappingURL=webflow-designer.85aae53873e0ec0587ab.chunk-ep.js.map