"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [985], {
        68985: (e, t, a) => {
            a.r(t), a.d(t, {
                After: () => After,
                Before: () => Before,
                COMMERCE_SECTION_PLACEHOLDER: () => eg,
                DYNAMIC_SECTION_PLACEHOLDER: () => ep,
                HEADER_ITEMS: () => eP,
                STATIC_SECTION_KEY: () => ed,
                USER_SYSTEMS_SECTION_PLACEHOLDER: () => eu,
                default: () => ef,
                getPageType: () => getPageType
            });
            var r, n = a(20011),
                o = a(47169),
                s = a(32735),
                i = a(88601),
                l = a(88423),
                c = a.n(l),
                d = a(15362),
                p = a.n(d),
                g = a(92342),
                u = a(44838),
                m = a(31502),
                h = a(2509),
                E = a(10923),
                P = a(77167),
                S = a(13066),
                C = a(66050),
                y = a(30398),
                w = a(26349),
                f = a(78332),
                b = a(3594),
                D = a(83520),
                M = a(90259),
                v = a(71973),
                I = a(2579),
                A = a(1692),
                T = a(90282),
                _ = a(56727),
                L = a(17664);

            function PageLimitBar(e) {
                let {
                    maxPages: t,
                    pagesUsed: a
                } = e, r = t - a;
                return s.createElement(A.Z, {
                    basis: 5,
                    style: {
                        height: 5,
                        position: "relative"
                    }
                }, s.createElement("div", {
                    style: {
                        borderRadius: 8,
                        flexGrow: 1,
                        backgroundColor: w.designerTheme.colors.backgroundDeep
                    }
                }), s.createElement("div", {
                    style: {
                        backgroundColor: t - a <= 0 ? w.designerTheme.colors.danger : t - a <= 2 ? w.designerTheme.colors.warning : w.designerTheme.colors.success,
                        borderBottomLeftRadius: 8,
                        borderTopLeftRadius: 8,
                        borderBottomRightRadius: r > 0 ? 0 : 8,
                        borderTopRightRadius: r > 0 ? 0 : 8,
                        top: 0,
                        left: 0,
                        right: `${Math.max(0,100-a/t*100)}%`,
                        bottom: 0,
                        position: "absolute"
                    }
                }))
            }

            function PageLimitText(e) {
                let {
                    maxPages: t,
                    pagesUsed: a
                } = e;
                return s.createElement(A.Z, {
                    justify: "space-between"
                }, s.createElement(A.Z, {
                    style: {
                        color: t - a <= 0 ? w.designerTheme.colors.danger : w.designerTheme.colors.warning
                    }
                }, `${t-a}/${t} pages left`, s.createElement(T.Z, {
                    style: {
                        color: w.designerTheme.colors.foregroundDim,
                        marginLeft: 5
                    },
                    href: "https://university.webflow.com/courses/cms-and-dynamic-content-course"
                }, "Consider the CMS")))
            }
            let R = (0, u.nC)(e => {
                let {
                    SiteDataStore: t,
                    PageStore: a,
                    DesignerStore: r,
                    UserCapabilitiesStore: n
                } = e;
                return {
                    siteData: t,
                    pageState: a,
                    designerState: r,
                    userCapabilitiesState: n
                }
            })(class extends s.Component {
                render() {
                    if (!this.props.userCapabilitiesState.__DEPRECATED__canManagePageSettings) return null;
                    let {
                        siteData: {
                            maxPages: e,
                            shortName: t
                        },
                        pageState: a
                    } = this.props, r = (0, L.Il)(a).filter(e => !(0, _.Vy)(e)).count();
                    return e - r > 5 ? null : s.createElement(m.Z.Row, {
                        clickable: !1,
                        draggable: !1,
                        align: "stretch",
                        justify: "space-around",
                        style: {
                            padding: 8,
                            paddingTop: 4,
                            minHeight: 50
                        },
                        column: !0,
                        basis: 50
                    }, s.createElement(PageLimitText, {
                        maxPages: e,
                        pagesUsed: r,
                        shortName: t
                    }), s.createElement(PageLimitBar, {
                        maxPages: e,
                        pagesUsed: r
                    }))
                }
            });
            var k = a(46953),
                x = a(23350),
                B = a(13672),
                Z = a(74514),
                V = a(99801),
                F = a(49512),
                U = a(15251),
                $ = a(90472),
                N = a(40173);
            let tooltip = (e, t) => e => {
                    let a = t.get(e.userId);
                    return `Unable to access this branch while ${(0,N.v2)(a)} is designing in it`
                },
                O = {
                    height: 16,
                    width: 16,
                    marginRight: 13,
                    alignSelf: "center",
                    marginLeft: -5
                },
                z = (0, u.nC)(e => {
                    let {
                        RealtimeStore: t,
                        UserStore: a
                    } = e;
                    return {
                        realtime: t,
                        users: a.siteUsers.merge(a.users)
                    }
                })(e => {
                    let {
                        pageId: t,
                        users: a,
                        realtime: r = {}
                    } = e, {
                        uuid: n
                    } = r, o = r.presences.find(e => !!((null == e ? void 0 : e.pageId) && e.pageId === t && e.sessionId !== n)), i = a.get((null == o ? void 0 : o.userId) || "");
                    return s.createElement($.T, {
                        user: i,
                        tooltip: tooltip(r.presences, a),
                        style: O,
                        presence: o
                    })
                });
            var G = a(97777),
                q = a(14574),
                K = a(98512);
            let J = (0, w.r9)(m.Z.Row)({}, {
                variants: {
                    isSelected: {
                        true: {}
                    },
                    colorVariant: {
                        draft: {
                            color: "$orangeText !important"
                        },
                        dynamic: {
                            color: "$purpleText !important"
                        }
                    }
                },
                compoundVariants: [{
                    conditions: {
                        colorVariant: "draft",
                        isSelected: !0
                    },
                    css: {
                        backgroundColor: "$orangeTransparent !important",
                        "&:hover": {
                            backgroundColor: "$orangeTransparent !important"
                        }
                    }
                }, {
                    conditions: {
                        colorVariant: "dynamic",
                        isSelected: !0
                    },
                    css: {
                        backgroundColor: "$purpleTransparent !important",
                        "&:hover": {
                            backgroundColor: "$purpleTransparent !important"
                        }
                    }
                }]
            });

            function NestedIndent(e) {
                let {
                    item: t
                } = e, a = t.treeDepth - 1;
                return 0 === a ? null : s.createElement("div", {
                    style: {
                        flexBasis: 18 * a,
                        flexShrink: 0,
                        flexGrow: 0
                    }
                })
            }
            let PageListRow = class PageListRow extends s.PureComponent {
                constructor() {
                    super(...arguments), (0, o.Z)(this, "onMouseMove", e => {
                        let {
                            onMouseMove: t
                        } = this.props.captureDragEvents(this.props.item.id);
                        t(e)
                    }), (0, o.Z)(this, "onMouseUp", e => {
                        let {
                            onMouseUp: t
                        } = this.props.captureDragEvents(this.props.item.id);
                        t(e)
                    }), (0, o.Z)(this, "onDragStart", e => {
                        let {
                            onDragStart: t
                        } = this.props.captureDragEvents(this.props.item.id);
                        t(e)
                    }), (0, o.Z)(this, "toggleFolder", () => {
                        let {
                            item: e,
                            actions: {
                                expandFolder: t,
                                collapseFolder: a
                            }
                        } = this.props;
                        e.isExpanded ? a(e.id) : t(e.id)
                    }), (0, o.Z)(this, "switchPage", () => {
                        let {
                            currentPageId: e,
                            item: t
                        } = this.props;
                        rowIsSelected(e, t) || this.props.actions.switchPage(this.props.item.id)
                    }), (0, o.Z)(this, "mintNestedPage", e => {
                        e.stopPropagation(), this.props.actions.mintPage(this.props.item.id, {
                            analytics: {
                                location: "page-panel"
                            }
                        })
                    }), (0, o.Z)(this, "createBranch", e => {
                        e.stopPropagation(), this.props.actions.createBranch(this.props.item.id, {
                            analytics: {
                                location: "page-panel"
                            }
                        })
                    }), (0, o.Z)(this, "mergeBranch", e => {
                        e.stopPropagation(), this.props.actions.mergeBranch(this.props.item.id)
                    }), (0, o.Z)(this, "openSettings", e => {
                        e.stopPropagation(), this.props.actions.openSettings(this.props.item.id)
                    }), (0, o.Z)(this, "closeSettings", e => {
                        e.stopPropagation(), this.props.actions.closeSettings()
                    })
                }
                render() {
                    let {
                        item: e,
                        isPreviewMode: t,
                        isAnnotationsMode: a,
                        __DEPRECATED__canManagePageSettings: r,
                        isPageBranchingSupported: o,
                        canBranchPage: i,
                        isSettingsIconVisible: l,
                        isUsersDisabled: c,
                        actions: d,
                        ...p
                    } = this.props, g = G.kb.SNAPSHOT, u = {
                        openSettings: this.openSettings,
                        closeSettings: this.closeSettings
                    };
                    return (0, _.qR)(e) ? s.createElement(FolderRow, (0, n.Z)({}, this.props, {
                        onMouseMove: this.onMouseMove,
                        onMouseUp: this.onMouseUp,
                        onDragStart: this.onDragStart,
                        onClick: this.toggleFolder,
                        actions: {
                            ...u,
                            mintNestedPage: this.mintNestedPage
                        },
                        isUsersDisabled: c
                    })) : (0, _.sG)(e) ? s.createElement(StaticPageRow, (0, n.Z)({}, p, {
                        onMouseMove: this.onMouseMove,
                        onMouseUp: this.onMouseUp,
                        onDragStart: this.onDragStart,
                        onClick: (0, x.XA)(e) ? stopPropagation : this.switchPage,
                        actions: {
                            ...u,
                            createBranch: this.createBranch,
                            mergeBranch: this.mergeBranch
                        },
                        beta: (0, _.pl)(),
                        __DEPRECATED__canManagePageSettings: r,
                        isPageBranchingSupported: o,
                        canBranchPage: i,
                        isSettingsIconVisible: l,
                        isAnnotationsMode: a,
                        isPreviewMode: t,
                        item: e,
                        isSnapshotPreviewMode: g,
                        isUsersDisabled: c
                    })) : (0, _.pu)(e) ? s.createElement(DynamicPageRow, (0, n.Z)({}, this.props, {
                        onMouseMove: this.onMouseMove,
                        onMouseUp: this.onMouseUp,
                        onDragStart: this.onDragStart,
                        isPageBranchingSupported: o,
                        canBranchPage: i,
                        isSettingsIconVisible: l,
                        onClick: (0, x.XA)(e) ? stopPropagation : this.switchPage,
                        actions: {
                            ...u,
                            createBranch: this.createBranch,
                            mergeBranch: this.mergeBranch
                        },
                        isUsersDisabled: c
                    })) : s.createElement(SectionHeaderRow, {
                        item: e,
                        isQuerying: this.props.isQuerying,
                        isPreviewMode: t,
                        isAnnotationsMode: a,
                        __DEPRECATED__canManagePageSettings: r,
                        onRequestCommercePanelOpen: () => d.panelOpened(y._M),
                        onRequestDynamoPanelOpen: () => d.panelOpened(y.gZ),
                        onRequestUsersPanelOpen: () => d.panelOpened(c ? y.P_ : y.xJ)
                    })
                }
            };
            let Y = (0, u.nC)(e => {
                    let {
                        RealtimeStore: t
                    } = e;
                    return {
                        realtime: t
                    }
                })(e => {
                    let {
                        item: t
                    } = e;
                    return (0, x.XA)(t) ? s.createElement(m.Z.Cell, {
                        style: {
                            marginLeft: 0
                        },
                        grow: !0,
                        shy: !0
                    }, s.createElement(W, {
                        style: {
                            marginLeft: 0
                        }
                    }, s.createElement(g.mBM, {
                        size: 14
                    }))) : null
                }),
                DisabledOverlay = () => s.createElement(M.ZP, {
                    content: "Only one user can access a branch at a time",
                    alternate: !0
                }, s.createElement("div", {
                    "data-automation-id": "disabled-overlay",
                    style: {
                        cursor: "not-allowed",
                        opacity: "0.7",
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }
                })),
                StaticPageRow = e => {
                    let {
                        item: t,
                        canDrag: a,
                        dragTargetId: r,
                        dropLocation: o,
                        isSiteProtected: i,
                        canEditLocalizedCanvasItem: l,
                        __DEPRECATED__canManagePageSettings: c,
                        isPageBranchingSupported: d,
                        canBranchPage: p,
                        isSettingsIconVisible: g,
                        isAnnotationsMode: u,
                        isSiteEditMode: h,
                        isPreviewMode: E,
                        isViewer: P,
                        isSnapshotPreviewMode: S,
                        isUsersDisabled: C,
                        ...y
                    } = e;
                    return s.createElement(J, (0, n.Z)({
                        "data-automation-id": "page-tree-static-page-row",
                        style: {
                            ...dragStyle(t),
                            position: "relative"
                        },
                        clickable: !rowIsSelected(y.currentPageId, t),
                        draggable: isDraggable(t, a, r) && !u && !h,
                        isSelected: rowIsSelected(y.currentPageId, t),
                        colorVariant: (0, _.cz)(t) || (0, _.wj)(t) ? "draft" : void 0
                    }, y), (0, _.C$)(t) || (0, _.cz)(t) || !isDropTarget(o, t.id) ? null : s.createElement(DropIndicator, {
                        item: t,
                        dropLocation: o,
                        isParentPage: (0, _.au)(t)
                    }), s.createElement(NestedIndent, {
                        item: t
                    }), s.createElement(m.Z.Cell, null, (0, _.cz)(t) ? s.createElement(Q, null) : s.createElement(V._g, {
                        allowPasswordProtection: y.allowPasswordProtection,
                        passwordProtected: t.get("passwordProtected"),
                        protectedAncestor: t.get("protectedAncestor"),
                        isSiteProtected: i,
                        hasGroupAccess: (0, _.Y6)(t, C),
                        isDraft: (0, _.wj)(t)
                    })), s.createElement(m.Z.Cell, {
                        basis: 0,
                        grow: !0,
                        ellipsis: !0
                    }, s.createElement(D.Z, {
                        "data-automation-id": rowIsSelected(y.currentPageId, t) ? "selected-page-name" : null,
                        baseline: !0
                    }, (0, _.cz)(t) ? "Branch" : (0, _.wj)(t) ? "[Draft] " + t.name : t.name), y.beta && s.createElement(W, null, s.createElement(f.Z, null))), s.createElement(Y, {
                        item: t
                    }), s.createElement(PageListRowActions, {
                        item: t,
                        actions: y.actions,
                        isDragging: !(0, Z.kK)(o),
                        remainingPages: y.remainingPages,
                        isSelected: rowIsSelected(y.currentPageId, t),
                        canEditLocalizedCanvasItem: l,
                        __DEPRECATED__canManagePageSettings: c,
                        isPageBranchingSupported: d,
                        canBranchPage: p,
                        isSettingsIconVisible: g,
                        isAnnotationsMode: u,
                        isPreviewMode: E,
                        isViewer: P,
                        isSnapshotPreviewMode: S
                    }), (0, x.XA)(t) && s.createElement(s.Fragment, null, s.createElement(DisabledOverlay, null), s.createElement(z, {
                        pageId: t.id
                    })))
                },
                FolderRow = e => {
                    let {
                        item: t,
                        isSiteProtected: a,
                        canEditLocalizedCanvasItem: r,
                        __DEPRECATED__canManagePageSettings: o,
                        isAnnotationsMode: i,
                        isSiteEditMode: l,
                        isViewer: c,
                        isPreviewMode: d,
                        canDrag: p,
                        isSettingsIconVisible: g,
                        dragTargetId: u,
                        dropLocation: h,
                        isUsersDisabled: E,
                        ...P
                    } = e;
                    return s.createElement(J, (0, n.Z)({
                        "data-automation-id": "page-tree-folder-row",
                        style: folderRowStyle(t, h),
                        clickable: !0,
                        draggable: isDraggable(t, p, u) && !i && !l,
                        isSelected: t.isSelected
                    }, P), s.createElement(NestedIndent, {
                        item: t
                    }), s.createElement(m.Z.Cell, null, t.isExpanded ? s.createElement(V.Lb, {
                        allowPasswordProtection: P.allowPasswordProtection,
                        passwordProtected: t.get("passwordProtected"),
                        protectedAncestor: t.get("protectedAncestor"),
                        isSiteProtected: a,
                        hasGroupAccess: (0, _.Y6)(t, E)
                    }) : s.createElement(V.yN, {
                        allowPasswordProtection: P.allowPasswordProtection,
                        passwordProtected: t.get("passwordProtected"),
                        protectedAncestor: t.get("protectedAncestor"),
                        isSiteProtected: a,
                        hasGroupAccess: (0, _.Y6)(t, E)
                    })), s.createElement(m.Z.Cell, {
                        basis: 0,
                        grow: !0,
                        ellipsis: !0
                    }, s.createElement(D.Z, {
                        baseline: !0
                    }, t.name)), s.createElement(HiddenPageCount, {
                        folder: t
                    }), s.createElement(PageListRowActions, {
                        item: t,
                        actions: P.actions,
                        isDragging: !(0, Z.kK)(h),
                        remainingPages: P.remainingPages,
                        canEditLocalizedCanvasItem: r,
                        __DEPRECATED__canManagePageSettings: o,
                        isPageBranchingSupported: !1,
                        canBranchPage: !1,
                        isSettingsIconVisible: g,
                        isAnnotationsMode: i,
                        isPreviewMode: d,
                        isViewer: c
                    }))
                },
                dragStyle = e => ({
                    opacity: e.isValidDropLocation ? 1 : .5,
                    paddingRight: 0
                }),
                folderRowStyle = (e, t) => ({
                    ...dragStyle(e),
                    backgroundColor: isDropTarget(t, e.id) && e.isValidDropLocation ? w.designerTheme.colors.accentBackground : null
                }),
                isDraggable = (e, t, a) => t && !(0, _.C$)(e) && !(0, _.cz)(e) && !(0, B.pT)(e) && !(0, _.Vy)(e) && !a && ((0, Z.kK)(e.selectedItemId) || e.isSelected),
                DynamicPageRow = e => {
                    let {
                        item: t,
                        canEditLocalizedCanvasItem: a,
                        __DEPRECATED__canManagePageSettings: r,
                        isPageBranchingSupported: o,
                        canBranchPage: i,
                        isSettingsIconVisible: l,
                        isSiteProtected: c,
                        dropLocation: d,
                        isUsersDisabled: p,
                        ...g
                    } = e;
                    return s.createElement(J, (0, n.Z)({
                        key: t.id,
                        "data-automation-id": "page-tree-dynamic-row",
                        clickable: !rowIsSelected(g.currentPageId, t),
                        isSelected: rowIsSelected(g.currentPageId, t),
                        style: {
                            paddingRight: 0,
                            position: "relative"
                        },
                        colorVariant: (0, _.cz)(t) || (0, _.wj)(t) ? "draft" : "dynamic"
                    }, g), (0, _.cz)(t) ? s.createElement(A.Z, {
                        key: 1,
                        basis: 18,
                        shrink: 0,
                        grow: 0,
                        style: {
                            paddingLeft: 5,
                            position: "relative",
                            opacity: .4
                        }
                    }, "") : null, s.createElement(m.Z.Cell, null, (0, _.cz)(t) ? s.createElement(Q, null) : s.createElement(V._g, {
                        allowPasswordProtection: g.allowPasswordProtection,
                        passwordProtected: t.get("passwordProtected"),
                        protectedAncestor: t.get("protectedAncestor"),
                        isSiteProtected: c,
                        hasGroupAccess: (0, _.Y6)(t, p),
                        isDynamicPage: !0
                    })), s.createElement(m.Z.Cell, {
                        basis: 0,
                        grow: !0,
                        ellipsis: !0
                    }, s.createElement(D.Z, {
                        baseline: !0
                    }, (0, _.cz)(t) ? "Branch" : t.name)), s.createElement(Y, {
                        item: t
                    }), s.createElement(PageListRowActions, {
                        item: t,
                        actions: g.actions,
                        isDragging: !(0, Z.kK)(d),
                        remainingPages: g.remainingPages,
                        isSelected: rowIsSelected(g.currentPageId, t),
                        canEditLocalizedCanvasItem: a,
                        __DEPRECATED__canManagePageSettings: r,
                        isPageBranchingSupported: o,
                        canBranchPage: i,
                        isSettingsIconVisible: l,
                        isAnnotationsMode: g.isAnnotationsMode,
                        isPreviewMode: g.isPreviewMode,
                        isViewer: g.isViewer
                    }), (0, x.XA)(t) && s.createElement(s.Fragment, null, s.createElement(DisabledOverlay, null), s.createElement(z, {
                        pageId: t.id
                    })))
                },
                H = (0, w.r9)(e => {
                    let {
                        expanded: t,
                        ...a
                    } = e;
                    return t ? s.createElement(g.CJ0, a) : s.createElement(g.Fbu, a)
                })({
                    color: "$textDefault"
                }),
                j = (0, w.r9)(m.Z.Section)({
                    display: "grid",
                    gridColumnGap: "$1  !important",
                    gridTemplateColumns: " auto min-content",
                    borderTop: "$border1 !important",
                    marginTop: "$2",
                    height: "$10 !important",
                    ".bem-List > div:first-child  &": {
                        border: "none !important",
                        marginTop: 0
                    }
                }, {
                    variants: {
                        isCollapsed: {
                            true: {
                                marginBottom: "$-2"
                            }
                        }
                    }
                }),
                SectionBody = e => {
                    let {
                        expanded: t,
                        children: a
                    } = e;
                    return s.createElement(j, {
                        isCollapsed: !t,
                        "data-automation-id": "page-tree-list-section-body"
                    }, a, s.createElement(g.LZC, null), s.createElement(H, {
                        expanded: t
                    }))
                },
                SectionHeaderRow = e => {
                    let {
                        item: t,
                        onRequestCommercePanelOpen: a,
                        onRequestDynamoPanelOpen: r,
                        onRequestUsersPanelOpen: n,
                        isPreviewMode: o,
                        isAnnotationsMode: i,
                        __DEPRECATED__canManagePageSettings: l,
                        isQuerying: c
                    } = e, {
                        onSectionHeaderClick: d,
                        ...p
                    } = (0, k.qn)();
                    if (t === ed) return s.createElement(R, null);
                    if (t === eu) return s.createElement(UserSystemsCollectionTemplatePlaceholder, {
                        isPreviewMode: o,
                        onRequestUsersPanelOpen: n
                    });
                    if (t === ep) return s.createElement(CollectionTemplatePlaceholder, {
                        onRequestDynamoPanelOpen: r,
                        isPreviewMode: o,
                        __DEPRECATED__canManagePageSettings: l
                    });
                    if (t === eg) return s.createElement(CommerceCollectionTemplatePlaceholder, {
                        onRequestCommercePanelOpen: a,
                        isPreviewMode: o,
                        isAnnotationsMode: i
                    });
                    let g = k.JD[t],
                        u = p[g] || c;
                    return s.createElement(b.Z, {
                        onClick: c ? void 0 : d(g),
                        flex: !0,
                        column: !0
                    }, s.createElement(SectionBody, {
                        expanded: u
                    }, t))
                },
                DynamicCollectionPlaceholder = e => {
                    let {
                        title: t,
                        children: a,
                        icon: r
                    } = e;
                    return s.createElement(g.G7x, {
                        margin: "$0 $3 $2 $3"
                    }, s.createElement(g.ubH, {
                        "data-automation-id": (0, F.S)(t),
                        title: t,
                        icon: r
                    }, a ? s.createElement(g.BqV, null, a) : s.createElement(g.BqV, null)))
                },
                CollectionTemplatePlaceholder = e => {
                    let {
                        onRequestDynamoPanelOpen: t,
                        isPreviewMode: a,
                        __DEPRECATED__canManagePageSettings: r
                    } = e, n = (0, q.Yx)((0, K.Jo)("canCreateCMSCollection"));
                    return s.createElement(DynamicCollectionPlaceholder, {
                        title: "No CMS Collection pages",
                        icon: g.nhp
                    }, n ? s.createElement(s.Fragment, null, s.createElement(I.Z, {
                        onClick: t,
                        disabled: a || !r
                    }, "Create a CMS Collection"), " ", "and a CMS Collection page will be generated automatically.") : null)
                },
                CommerceCollectionTemplatePlaceholder = e => {
                    let {
                        onRequestCommercePanelOpen: t,
                        isPreviewMode: a,
                        isAnnotationsMode: r
                    } = e, n = (0, q.Yx)((0, K.Jo)("canSetupEcomm"));
                    return s.createElement(DynamicCollectionPlaceholder, {
                        title: "No Ecommerce pages",
                        icon: g.jh7
                    }, n ? s.createElement(s.Fragment, null, s.createElement(I.Z, {
                        onClick: t,
                        disabled: a || r
                    }, "Enable Ecommerce"), " ", "for this project and the Ecommerce template pages will be generated automatically.") : null)
                },
                UserSystemsCollectionTemplatePlaceholder = e => {
                    let {
                        isPreviewMode: t,
                        onRequestUsersPanelOpen: a
                    } = e, r = (0, q.Yx)((0, K.Jo)("canAccessUserSystems"));
                    return s.createElement(DynamicCollectionPlaceholder, {
                        title: "No User pages",
                        icon: g.SqA
                    }, r ? s.createElement(s.Fragment, null, s.createElement(I.Z, {
                        disabled: t,
                        onClick: a
                    }, "Enable Users"), " ", "for this project and the Users template pages will be generated automatically.") : null)
                },
                PageListRowActions = e => {
                    let {
                        item: t,
                        actions: a,
                        isDragging: r,
                        remainingPages: n,
                        isSelected: o,
                        canEditLocalizedCanvasItem: i,
                        __DEPRECATED__canManagePageSettings: l,
                        isPageBranchingSupported: c,
                        canBranchPage: d,
                        isSettingsIconVisible: p,
                        isAnnotationsMode: g,
                        isPreviewMode: u,
                        isViewer: m,
                        isSnapshotPreviewMode: h
                    } = e, E = (0, q.Yx)((0, K.Jo)("canAccessEditModeSafetyMiniRelease")), P = (0, q.Yx)((0, K.Jo)("hasPermissionToMergeBranch")), S = (0, q.Yx)((0, K.Jo)("canMergeBranch"));
                    return s.createElement(b.Z, {
                        flex: !0,
                        push: "right",
                        style: {
                            paddingRight: 9,
                            paddingLeft: 5
                        }
                    }, (0, _.C$)(t) ? s.createElement(HomePageIndicator, null) : null, i && l && !g && !m && canCreateNestedPage(t, n) ? s.createElement(AddNestedPageAction, {
                        onClick: a.mintNestedPage
                    }) : null, !t.isSelected && !r && c && !u && !g && !(0, B.pT)(t) && s.createElement(CreateBranchAction, {
                        onClick: a.createBranch,
                        itemType: t.type,
                        isSelected: o,
                        canBranchPage: d
                    }), !t.isSelected && !r && (0, _.cz)(t) && !g && !h && !u && s.createElement(MergeBranchAction, {
                        onClick: a.mergeBranch,
                        isSelected: !!o,
                        canMergeBranch: S && !(0, x.XA)(t),
                        hasPermissionToMergeBranch: P,
                        editModeSafetyMiniReleaseEnabled: E
                    }), t.isSelected ? s.createElement(SelectedItemIndicator, {
                        onClick: a.closeSettings
                    }) : !r && p && s.createElement(OpenSettingsAction, {
                        __DEPRECATED__canManagePageSettings: l,
                        itemType: t.type,
                        onClick: a.openSettings,
                        isSelected: o
                    }))
                },
                stopPropagation = e => {
                    e.stopPropagation()
                },
                HomePageIndicator = () => s.createElement(M.ZP, {
                    alternate: !0,
                    content: "This is the current homepage"
                }, s.createElement(g.G7x, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 4
                }, s.createElement(g.tvw, null))),
                AddNestedPageAction = e => {
                    let {
                        onClick: t
                    } = e;
                    return s.createElement(M.ZP, {
                        alternate: !0,
                        content: "Add new page inside this folder"
                    }, s.createElement(m.Z.Action, {
                        shy: !0,
                        hasIcon: !0,
                        style: X,
                        "data-automation-id": "add-nested-page-button"
                    }, s.createElement(g.hU, {
                        label: "Add Nested Page",
                        Icon: g.dtP,
                        onClick: t,
                        variant: "ghost"
                    })))
                },
                SelectedItemIndicator = e => {
                    let {
                        onClick: t
                    } = e;
                    return s.createElement(m.Z.Action, {
                        hasIcon: !0,
                        style: X
                    }, s.createElement(v.Z, {
                        dim: !0,
                        onClick: t
                    }, s.createElement(g.Fbu, {
                        size: 20
                    })))
                },
                OpenSettingsAction = e => {
                    let {
                        itemType: t,
                        onClick: a,
                        __DEPRECATED__canManagePageSettings: r
                    } = e;
                    return s.createElement(M.ZP, {
                        alternate: !0,
                        content: `${r?"Edit":"View"} ${t.toLowerCase()} settings`
                    }, s.createElement(m.Z.Action, {
                        shy: !0,
                        hasIcon: !0,
                        style: X,
                        "data-automation-id": "page-settings-button"
                    }, s.createElement(g.hU, {
                        Icon: g.ewm,
                        label: "Settings",
                        onClick: a,
                        variant: "ghost"
                    })))
                },
                CreateBranchAction = e => {
                    let {
                        itemType: t,
                        isSelected: a,
                        canBranchPage: r,
                        onClick: n
                    } = e;
                    return s.createElement(M.ZP, {
                        alternate: !0,
                        content: createBranchTooltip(r, t)
                    }, s.createElement(m.Z.Action, {
                        hasIcon: !0,
                        style: X,
                        shy: !0,
                        "data-automation-id": a ? "page-branching-button" : null
                    }, s.createElement(g.hU, {
                        label: "Create Branch",
                        Icon: g.j98,
                        isDisabled: !r,
                        onClick: r ? n : stopPropagation,
                        variant: "ghost"
                    })))
                },
                MergeBranchAction = e => {
                    let {
                        isSelected: t,
                        canMergeBranch: a,
                        hasPermissionToMergeBranch: r,
                        editModeSafetyMiniReleaseEnabled: n,
                        onClick: o
                    } = e;
                    return s.createElement(M.ZP, {
                        alternate: !0,
                        content: mergeBranchTooltip({
                            canMergeBranch: a,
                            hasPermissionToMergeBranch: r,
                            editModeSafetyMiniReleaseEnabled: n
                        })
                    }, s.createElement(m.Z.Action, {
                        style: X,
                        hasIcon: !0,
                        shy: !0,
                        hasWidth: !0,
                        "data-automation-id": t ? "page-branching-button" : null
                    }, s.createElement(g.hU, {
                        label: "Merge Branch",
                        Icon: g.lS8,
                        variant: "ghost",
                        "data-automation-id": "merge-branch-button",
                        isDisabled: !a,
                        onClick: a ? o : stopPropagation
                    })))
                },
                X = {
                    alignSelf: "center",
                    marginLeft: 0
                },
                Q = (0, w.zo)(g.rJm)({
                    marginLeft: "6px",
                    marginRight: "-2px",
                    color: U.fs
                }),
                DropIndicator = e => {
                    let {
                        item: t,
                        dropLocation: a,
                        isParentPage: r
                    } = e;
                    return (0, Z.kK)(a) || !t.isValidDropLocation || (null == a ? void 0 : a.node) !== t.id ? null : s.createElement(b.Z, {
                        flex: !0,
                        style: {
                            position: "absolute",
                            border: `1px solid ${w.designerTheme.colors.accentBackground}`,
                            top: a instanceof Before ? -2 : null,
                            right: 0,
                            left: 0,
                            bottom: a instanceof After ? r ? -(w.designerTheme.TreeModal.rowHeight + 1) : -1 : null,
                            zIndex: 2
                        }
                    })
                },
                HiddenPageCount = e => {
                    let {
                        folder: t
                    } = e;
                    return t.isExpanded ? null : s.createElement(m.Z.Cell, {
                        key: t.id,
                        ellipsis: !0,
                        shrink: 0,
                        style: {
                            paddingRight: 8
                        }
                    }, s.createElement(D.Z, {
                        secondary: !0,
                        italic: !0
                    }, PageTreeList_inflectedPageCount(t.childCount)))
                };

            function isDropTarget(e, t) {
                return !!e && e.node === t
            }
            let rowIsSelected = (e, t) => t.isSelected || e === t.id,
                PageTreeList_inflectedPageCount = e => 0 === e ? null : 1 === e ? "1 hidden page" : `${e} hidden pages`,
                canCreateNestedPage = (e, t) => (0, _.qR)(e) && !(0, B.pT)(e) && t > 0,
                createBranchTooltip = (e, t) => e ? `Create ${t.toLowerCase()} branch` : "To create a new branch for this page, merge the existing branch, or delete it",
                mergeBranchTooltip = e => {
                    let {
                        canMergeBranch: t,
                        hasPermissionToMergeBranch: a,
                        editModeSafetyMiniReleaseEnabled: r
                    } = e;
                    return r ? t ? "Merge this branch with your site" : a ? "To merge this branch, you need full design control" : "Your role doesn’t have permission to merge branches" : t ? "Merge this branch with your site" : "To merge this branch, you need full design control"
                },
                W = (0, w.r9)("div")({
                    display: "inline-block",
                    marginLeft: "$2",
                    position: "relative",
                    top: 2
                });
            var ee = a(42901),
                et = a(61238),
                ea = a(29787),
                er = a(29532),
                en = a(80444),
                eo = a(95700),
                es = a(78451),
                ei = a(65472),
                el = a(46741),
                ec = a(52274);
            let ed = "___STATIC_PAGES___",
                ep = "CollectionPagesEmpty",
                eg = "CommercePagesEmpty",
                eu = "UserPagesEmpty",
                em = (0, et.weakMemo)(e => L.VE(e)),
                eh = (0, et.weakMemo)(e => (0, et.weakMemo)(t => (0, et.weakMemo)(a => a.set("expandedFolders", t.filter(_.qR).keySeq().toSet().subtract(e))))),
                eE = (0, w.zo)(P.im)({
                    borderBottom: "none"
                }),
                getPageType = (e, t) => t && (0, _.oG)(e, t) || e === eg || (0, en.fd)(e) ? "ecommerce" : (0, _.pu)(e) || e === ep ? "cms" : (0, _.mw)(e) || e === eu ? "userSystems" : (0, _.Vy)(e) ? "utility" : "static",
                eP = {
                    static: {
                        match: k.yU,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    },
                    utility: {
                        match: k.KK,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    },
                    cms: {
                        match: k.MO,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    },
                    ecommerce: {
                        match: k.AJ,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    },
                    userSystems: {
                        match: k.xU,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    },
                    emptyCms: {
                        match: ep,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    },
                    emptyEcommerce: {
                        match: eg,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    },
                    emptyUserSystems: {
                        match: eu,
                        actions: {
                            select: p(),
                            preselect: p()
                        }
                    }
                },
                getSearchableText = e => e.name,
                findNextIndex = (e, t) => e.findIndex(e => {
                    let {
                        match: a
                    } = e;
                    return (a && a.id) === (t && t.id)
                }),
                useOnKeyDownPreselectedFolder = (e, t) => {
                    let [a, r] = s.useState(null);
                    return s.useEffect(() => {
                        r(e)
                    }, [e]), e => {
                        "Enter" === e.key && a && "Folder" === a.type && (t(a), r(a.update("isExpanded", e => !e)))
                    }
                },
                eS = s.memo(e => {
                    let {
                        collapsed: t,
                        dragTargetId: a,
                        dropLocation: r,
                        renderRow: n,
                        inputValue: o,
                        onInputChange: i,
                        onClear: l,
                        rowActions: c,
                        currentPageId: d,
                        pageState: p,
                        pageManagerState: g,
                        collectionState: u
                    } = e, m = em(p), h = (0, k.qn)(), S = (0, q.Yx)(ec.VFr);
                    g = s.useMemo(() => "" === o ? g : eh(t)(m)(g), [o, g, t, m]);
                    let C = "" !== o,
                        {
                            searchPages: y,
                            source: w,
                            countMap: f
                        } = s.useMemo(() => buildDataSource(p, g, u, a).reduce((e, t) => {
                            if ("string" == typeof t) return e;
                            let a = getPageType(t, null == u ? void 0 : u.collections),
                                r = "userSystems" === a ? "user" : a,
                                n = "user" === r && S;
                            return n || (null != e.countMap[r] && e.countMap[r]++, (!C && h[r] || C) && (e.searchPages.push(t), e.source.set(t.id, t))), e
                        }, {
                            searchPages: [],
                            source: new Map,
                            countMap: {
                                static: 0,
                                cms: 0,
                                ecommerce: 0,
                                user: 0,
                                utility: 0
                            }
                        }), [p, g, u, a, h, C, S]),
                        b = s.useCallback((e, t, a) => {
                            let r = e.reduce((e, a) => {
                                    let r = t[a];
                                    if (null == r) return e;
                                    if ("string" == typeof r) return e.add(r);
                                    let n = r.id;
                                    for (let t of (e.add(n), L.lR(n, m))) w.has(t.id) && e.add(t.id);
                                    for (let t of L.KF(n, m)) w.has(t.id) && e.add(t.id);
                                    return e
                                }, new Set),
                                n = [];
                            for (let [e, t] of w) r.has(e) && n.push({
                                match: t,
                                actions: a(t)
                            });
                            return n
                        }, [w, m]),
                        D = s.useCallback(e => {
                            (0, _.qR)(e) && (e.isExpanded ? c.collapseFolder(e.id) : c.expandFolder(e.id)), ((0, _.sG)(e) || (0, _.pu)(e)) && !e.isSelected && d !== e.id && c.switchPage(e.id)
                        }, [c, d]),
                        [M, v, I] = (0, ea.Z)({
                            items: y,
                            reduceItems: b,
                            getSearchableText,
                            findNextIndex,
                            query: o,
                            onQueryChange: i,
                            onSelectChange: D
                        }),
                        {
                            onKeyDown: A
                        } = I,
                        {
                            preselected: T
                        } = v,
                        R = useOnKeyDownPreselectedFolder(T, D),
                        x = s.useCallback(function() {
                            return n(C)(...arguments)
                        }, [n, C]);
                    return s.createElement(s.Fragment, null, s.createElement(P.C_, {
                        key: "hidden-autofocus-item"
                    }), s.createElement(eE, {
                        key: "page-search-input"
                    }, o && s.createElement(P.Tw, {
                        onClick: l
                    }), s.createElement(P.W1, {
                        focus: v.focus
                    }), s.createElement(E.Z, null, s.createElement(P.II, {
                        onFocus: I.onFocus,
                        onBlur: I.onBlur,
                        focus: v.focus,
                        value: o,
                        onChange: I.onChange,
                        onKeyDown: e => {
                            "Escape" === e.key && l(e), R(e), A(e)
                        },
                        placeholder: "Search pages"
                    }))), s.createElement(PageList_PageList, {
                        key: "page-list-input",
                        "data-automation-id": "left-sidebar-pages-list"
                    }, s.createElement(eC, {
                        sortedPageResults: M,
                        collectionState: u,
                        renderRow: x,
                        preselected: T,
                        isQuerying: C,
                        countMap: f,
                        dragTargetId: a,
                        dropLocation: r
                    })))
                }),
                eC = s.memo(function(e) {
                    let {
                        sortedPageResults: t,
                        collectionState: a,
                        renderRow: r,
                        preselected: n,
                        isQuerying: o,
                        countMap: i,
                        dragTargetId: l,
                        dropLocation: c
                    } = e, d = (0, k.qn)(), {
                        static: p,
                        utility: g,
                        cms: u,
                        ecommerce: m,
                        userSystems: h
                    } = s.useMemo(() => t.reduce((e, t) => {
                        let r = getPageType(t.match, null == a ? void 0 : a.collections);
                        return e[r].push(t), e
                    }, {
                        static: [],
                        utility: [],
                        cms: [],
                        ecommerce: [],
                        userSystems: []
                    }), [a, t]), E = s.useMemo(() => {
                        let e = o && p.length > 0 || !o && i.static > 0,
                            t = o && g.length > 0 || !o && i.utility > 0,
                            a = o && u.length > 0 || !o && i.cms > 0,
                            n = o && m.length > 0 || !o && i.ecommerce > 0,
                            s = o && h.length > 0 || !o && i.user > 0,
                            l = [];
                        return (e || !o) && l.push({
                            header: r(eP.static),
                            values: p,
                            sortValue: 1
                        }), (a || !o) && l.push({
                            header: r(eP.cms),
                            values: u,
                            sortValue: a ? 1 : 0
                        }), a || o || !d.cms || l.push({
                            header: r(eP.emptyCms),
                            values: Z.ow,
                            sortValue: 0
                        }), (n || !o) && l.push({
                            header: r(eP.ecommerce),
                            values: m,
                            sortValue: n ? 1 : 0
                        }), n || o || !d.ecommerce || l.push({
                            header: r(eP.emptyEcommerce),
                            values: Z.ow,
                            sortValue: 0
                        }), (s || !o) && l.push({
                            header: r(eP.userSystems),
                            values: h,
                            sortValue: s ? 1 : 0
                        }), s || o || !d.user || l.push({
                            header: r(eP.emptyUserSystems),
                            values: Z.ow,
                            sortValue: 0
                        }), (t || !o) && l.push({
                            header: r(eP.utility),
                            values: g,
                            sortValue: 1
                        }), l.sort((e, t) => t.sortValue - e.sortValue)
                    }, [o, r, u, m, p, h, g, i.static, i.utility, i.cms, i.ecommerce, i.user, d.cms, d.ecommerce, d.user]);
                    return o && 0 === t.length ? s.createElement(P.X6, null, "No matching pages or folders") : E.reduce((e, t) => {
                        let {
                            header: a,
                            values: o
                        } = t, s = o.map(e => r(e, n, l, c));
                        return e.push(a, ...s), e
                    }, [])
                }),
                ey = (0, w.r9)("div")({
                    [g.JO$.__experimentalTokens.color]: w.TV.colors.textSecondary,
                    [`.bem-List_Row:not(${J}):hover`]: {
                        backgroundColor: "$uiBackgroundHover !important"
                    }
                }, {
                    variants: {
                        highlight: {
                            true: {
                                [g.JO$.__experimentalTokens.color]: "currentColor",
                                color: "$textActive"
                            }
                        }
                    }
                }),
                MaybeRenderTutorialPopover = e => {
                    let {
                        children: t,
                        item: a
                    } = e;
                    return "Style Guide" === a.name ? s.createElement(C.jt, {
                        id: C.oW.PAGES_PANEL_STYLES_PAGE,
                        viewport: null
                    }, t) : s.createElement(s.Fragment, null, t)
                },
                ew = (0, u.nC)(e => {
                    let {
                        PageStore: t,
                        PageManagerUIStore: a,
                        SiteDataStore: r,
                        DesignerStore: n,
                        CollectionStore: o,
                        BetaFeatureStore: s,
                        UserCapabilitiesStore: i,
                        HandoverStore: l,
                        PanelsStore: c,
                        LocalizationStore: d
                    } = e;
                    return {
                        pageState: t,
                        pageManagerState: a,
                        siteData: r,
                        designer: n,
                        collectionState: o,
                        betaFeatureState: s,
                        handoverState: l,
                        userCapabilitiesState: i,
                        panelsState: c,
                        localizationState: d
                    }
                })((r = function(e) {
                    let t = null,
                        a = null;
                    return {
                        captureDragEvents: r => {
                            let cancelDrag = () => {
                                (0, Z.kK)(a) || (removeGlobalListener("mouseup", cancelDrag), e({
                                    dragStatus: "cancel",
                                    dragTargetId: a = null,
                                    dropLocation: t = null
                                }))
                            };
                            return {
                                onDragStart: n => {
                                    n.preventDefault(), addGlobalListener("mouseup", cancelDrag), e({
                                        dragStatus: "start",
                                        dropLocation: t = getDropLocation(n, r),
                                        dragTargetId: a = r
                                    })
                                },
                                onMouseMove: n => {
                                    if (!t) return;
                                    n.stopPropagation();
                                    let o = getDropLocation(n, r);
                                    (o.constructor !== t.constructor || t.id !== o.id) && e({
                                        dragStatus: "drag",
                                        dropLocation: t = o,
                                        dragTargetId: a
                                    })
                                },
                                onMouseUp: r => {
                                    t && (r.stopPropagation(), removeGlobalListener("mouseup", cancelDrag), e({
                                        dragStatus: "drop",
                                        dragTargetId: a = null,
                                        dropLocation: t = null
                                    }))
                                }
                            }
                        }
                    }
                }, function(e) {
                    return class extends s.Component {
                        constructor() {
                            super(...arguments), (0, o.Z)(this, "_handleEvent", e => this.setState(e, () => {
                                ["cancel", "drop"].includes(this.state.dragStatus) && this.setState({
                                    dragStatus: null
                                })
                            })), (0, o.Z)(this, "process", r(this._handleEvent))
                        }
                        render() {
                            return s.createElement(e, (0, n.Z)({}, this.props, this.process, this.state))
                        }
                    }
                })(class extends s.PureComponent {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "state", {
                            inputValue: "",
                            collapsed: (0, i.Set)()
                        }), (0, o.Z)(this, "onChange", e => {
                            let {
                                collapsed: t
                            } = this.state;
                            this.setState({
                                inputValue: e,
                                collapsed: t.size > 0 ? (0, i.Set)() : t
                            })
                        }), (0, o.Z)(this, "onClear", e => {
                            e.stopPropagation(), e.preventDefault();
                            let {
                                collapsed: t
                            } = this.state;
                            this.setState({
                                inputValue: "",
                                collapsed: t.size > 0 ? (0, i.Set)() : t
                            })
                        }), (0, o.Z)(this, "onExpandFolder", e => {
                            "" === this.state.inputValue && this.props.flux.__DEPRECATED__getCreators("PageManagerActionCreators").expandFolder(e)
                        }), (0, o.Z)(this, "onCollapseFolder", e => {
                            "" === this.state.inputValue && this.props.flux.__DEPRECATED__getCreators("PageManagerActionCreators").collapseFolder(e)
                        }), (0, o.Z)(this, "rowActions", {
                            ...c()(this.props.flux.__DEPRECATED__getCreators("PageManagerActionCreators"), ["openSettings", "closeSettings", "mintPage", "switchPage", "createBranch", "mergeBranch"]),
                            expandFolder: this.onExpandFolder,
                            collapseFolder: this.onCollapseFolder,
                            panelOpened: e => this.props.flux.dispatch((0, S.JN)(e))
                        }), (0, o.Z)(this, "renderRow", e => (t, a, r, n) => {
                            let o = (0, er.oi)(this.props.localizationState),
                                {
                                    match: i,
                                    actions: l
                                } = t;
                            if (!o && i.branchId) return;
                            let {
                                captureDragEvents: c,
                                siteData: d,
                                pageState: p,
                                betaFeatureState: g
                            } = this.props, {
                                currentPageId: u
                            } = this.props.designer, m = (0, eo.nt)(this.props.designer), h = (0, eo.E6)(this.props.designer), E = (0, eo.dr)(this.props.designer), {
                                isViewer: P
                            } = this.props.handoverState, S = (0, K.Jo)("canEditLocalizedCanvasItem")(this.props.flux.state), C = (0, K.Jo)("canReadPageSettings")(this.props.flux.state), {
                                __DEPRECATED__canManagePageSettings: y
                            } = this.props.userCapabilitiesState, w = g.isEnterpriseSite || g.isEnterprisePartner, f = w && (0, _.l0)(i) && !(0, _.cz)(i) && o, b = i.canBranch, D = this.getAutomationId(i), M = "" === this.state.inputValue, v = (0, ec.VFr)(this.props.flux.state);
                            return s.createElement(ey, {
                                key: i.id || i,
                                "data-automation-id": "page-list-row-wrapper",
                                highlight: i !== eg && i !== ep && i !== eu && i.id === (a && a.id)
                            }, s.createElement(MaybeRenderTutorialPopover, {
                                item: i
                            }, s.createElement(PageListRow, {
                                onClick: l.select,
                                onMouseOver: l.preselect,
                                item: i,
                                "data-automation-id": D,
                                isSiteProtected: d.protected,
                                actions: this.rowActions,
                                remainingPages: (0, _.R5)(d, p),
                                canDrag: M,
                                dragTargetId: r,
                                dropLocation: n,
                                currentPageId: u,
                                allowPasswordProtection: d.allowPasswordProtection,
                                captureDragEvents: c,
                                canEditLocalizedCanvasItem: S,
                                __DEPRECATED__canManagePageSettings: y && !m,
                                isPageBranchingSupported: f,
                                canBranchPage: b,
                                isSettingsIconVisible: C,
                                isQuerying: e,
                                isPreviewMode: E,
                                isAnnotationsMode: m,
                                isSiteEditMode: h,
                                isViewer: P,
                                isUsersDisabled: v
                            })))
                        })
                    }
                    UNSAFE_componentWillReceiveProps(e) {
                        if ("drag" === this.props.dragStatus && "drop" === e.dragStatus) {
                            let t = applyNodeDrop(this.props.dragTargetId, this.props.dropLocation, e.pageState, e.pageManagerState, e.collectionState),
                                {
                                    pageManagerState: a
                                } = this.props;
                            ee.VL(t.id, a) ? this.props.flux.__DEPRECATED__getCreators("PageManagerActionCreators").updateSelection([], {
                                parentId: t.parentId,
                                siblingIndex: t.siblingIndex,
                                slug: t.slug
                            }) : this.props.flux.__DEPRECATED__getCreators("PageManagerActionCreators").moveItem(t)
                        }
                    }
                    getAutomationId(e) {
                        return e.name ? (0, _.cz)(e) ? (0, F.S)(e.name) + "-branch-page" : (0, F.S)(e.name) + "-page" : ""
                    }
                    shouldComponentUpdate(e) {
                        var t, a;
                        let r = (0, S.Vm)(this.props.panelsState, y.dc),
                            n = (0, S.Vm)(e.panelsState, y.dc);
                        return (null === (t = this.props.pageManagerState.get("selectedItem")) || void 0 === t ? void 0 : t.id) !== (null === (a = e.pageManagerState.get("selectedItem")) || void 0 === a ? void 0 : a.id) || !r || !n
                    }
                    render() {
                        return s.createElement(eS, {
                            pageState: this.props.pageState,
                            pageManagerState: this.props.pageManagerState,
                            collectionState: this.props.collectionState,
                            inputValue: this.state.inputValue,
                            onInputChange: this.onChange,
                            onClear: this.onClear,
                            collapsed: this.state.collapsed,
                            dragTargetId: this.props.dragTargetId,
                            dropLocation: this.props.dropLocation,
                            renderRow: this.renderRow,
                            rowActions: this.rowActions,
                            currentPageId: this.props.designer.currentPageId
                        })
                    }
                })),
                ef = ew,
                getPagesForCollections = function(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return e.flatMap(e => {
                        let r = t.filter(t => t.dynCollection === e._id),
                            n = r.find(e => !e.branchId),
                            o = r.find(e => e.branchId),
                            s = {};
                        return (n && (s[n.id] = n), o && (s[o.id] = o), a) ? (0, i.Map)(s).reverse() : (0, i.Map)(s)
                    }).filterNot(Z.kK)
                },
                buildDataSource = (e, t, a, r) => {
                    let n = ee.K(e, t),
                        o = ee.Du(t).id,
                        s = L.KF(r, L.Mz(n)).map(e => e.id),
                        l = L.VE(n),
                        {
                            staticPages: c,
                            staticUtilityPages: d
                        } = ee.mR(e, t),
                        p = c.filter(e => !(0, B.pT)(e)).map(e => e.set("isValidDropLocation", !s.includes(e.id)).set("selectedItemId", o).set("protectedAncestor", L.XB({
                            pages: l,
                            page: l.get(e.get("id"))
                        }))),
                        g = d.filter(e => !(("search" === e.slug || "checkout" === e.slug || "order-confirmation" === e.slug || "paypal-checkout" === e.slug) && (0, B.pT)(e))).map(e => e.set("isValidDropLocation", !s.includes(e.id)).set("selectedItemId", o)),
                        isCommerceUtilityPage = e => "checkout" === e.slug || "branch_checkout" === e.slug || "order-confirmation" === e.slug || "branch_order-confirmation" === e.slug || "paypal-checkout" === e.slug || "branch_paypal-checkout" === e.slug,
                        u = g.filterNot(e => isCommerceUtilityPage(e)),
                        m = g.filter(e => isCommerceUtilityPage(e)).sort(es.AY),
                        h = ee.q2(e, t),
                        E = (0, es.be)(a.collections).sortBy(el.A7),
                        P = getPagesForCollections(E, h).map(e => e.set("isValidDropLocation", !1)),
                        S = (0, el.zf)(getPagesForCollections((0, es.t5)(a.collections), h, !0).map(e => e.set("isValidDropLocation", !1))),
                        C = i.List.of(k.MO).concat(P.isEmpty() ? [ep] : P),
                        y = i.List.of(ed).concat(k.yU).concat(p).concat(C);
                    return y.concat(k.AJ).concat(S.isEmpty() ? [eg] : S).concat(m).concat(u.size ? u.unshift(k.KK) : u)
                };
            let PageList_PageList = class PageList_PageList extends s.Component {
                render() {
                    let {
                        children: e,
                        ...t
                    } = this.props;
                    return s.createElement(h.default.Body, (0, n.Z)({
                        flex: !0,
                        grow: 1
                    }, t), s.createElement(m.Z, {
                        style: {
                            width: "100%"
                        }
                    }, e))
                }
            };
            let Before = class Before {
                constructor(e) {
                    this.node = e
                }
            };
            let After = class After {
                constructor(e) {
                    this.node = e
                }
            };
            let isValidDrop = (e, t, a) => {
                    let r = a.find(e => e.id === t);
                    return !(0, _.C$)(r) && !(0, _.cz)(r) && t !== e && r.isValidDropLocation
                },
                didDragDownwards = (e, t, a) => {
                    let r = a.findIndex(e => e.id === t),
                        n = a.findIndex(t => t.id === e);
                    return n < r
                },
                inSameFolder = (e, t) => e.parentId === t.parentId,
                applyNodeDrop = (e, t, a, r, n) => {
                    let o = t.node,
                        s = buildDataSource(a, r, n, e),
                        i = L.Mz(a),
                        l = i.get(e),
                        c = i.get(o);
                    if (!isValidDrop(e, o, s)) return l;
                    if ((0, _.qR)(c)) {
                        let e = L.AF(c, i);
                        return l.merge({
                            parentId: c.id,
                            siblingIndex: e,
                            slug: L.vj(l.slug, c.id, i.delete(l.id))
                        })
                    }
                    if (inSameFolder(l, c) && didDragDownwards(e, o, s)) {
                        let e = L.Z5(c, i, t instanceof After);
                        return l.merge({
                            parentId: c.parentId,
                            siblingIndex: e
                        })
                    } {
                        let e = L.Z5(c, i, !(t instanceof Before));
                        return l.merge({
                            parentId: c.parentId,
                            siblingIndex: e,
                            slug: L.vj(l.slug, c.parentId, i.delete(l.id))
                        })
                    }
                },
                isAboveCenter = (e, t, a) => t + e / 2 > a,
                getDropLocation = (e, t) => {
                    let {
                        currentTarget: a,
                        clientY: r
                    } = e, {
                        top: n,
                        height: o
                    } = a.getBoundingClientRect();
                    return isAboveCenter(o, n, r) ? new Before(t) : new After(t)
                },
                addGlobalListener = (e, t) => {
                    window.document.addEventListener(e, t), (0, ei.uP)().addEventListener(e, t)
                },
                removeGlobalListener = (e, t) => {
                    window.document.removeEventListener(e, t), (0, ei.uP)().removeEventListener(e, t)
                }
        }
    }
]);
//# sourceMappingURL=webflow-designer.581ff7f8983bb208e84d.chunk-ep.js.map