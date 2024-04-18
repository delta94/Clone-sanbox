"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [273], {
        4273: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => eN
            });
            var n = l(47169),
                s = l(18420),
                r = l(32735),
                o = l(12788),
                a = l(86349),
                i = l.n(a),
                c = l(61238),
                u = l(97923),
                d = l(84713),
                m = l(51453),
                h = l(53187);
            let p = {
                    top: 0,
                    left: 0,
                    width: 99999,
                    height: 99999
                },
                StaticPopover = e => {
                    let {
                        children: t,
                        anchorBounds: l,
                        style: n
                    } = e;
                    return r.createElement(h.PL, null, e => r.createElement(m.Z, {
                        anchor: l,
                        rect: e,
                        viewport: p,
                        style: n
                    }, t))
                };
            var g = l(3147),
                y = l(27005),
                k = l(80070),
                f = l(63944);

            function _styleBlockPathSignature(e) {
                let t = {};
                return e.forEach(e => {
                    t[(0, y.vC)(e)] = !0
                }), t
            }

            function _styleBlockSignature(e, t) {
                return _styleBlockPathSignature(e.getTreePath(t.get("_id")).map(e => e.get("name")))
            }

            function _styleBlockSignatureContains(e, t) {
                return Object.keys(t).every(t => e[t])
            }

            function _styleBlockSignaturesConflict(e, t) {
                return _styleBlockSignatureContains(e, t) || _styleBlockSignatureContains(t, e)
            }
            var S = l(60377),
                E = l(54310),
                B = l(26349),
                C = l(83520),
                v = l(97396),
                b = l(10923),
                x = l(1598),
                T = l(9757),
                w = l(51915),
                _ = l(72640),
                I = l(90259),
                N = l(44838),
                P = l(14574),
                D = l(98512),
                M = l(79929),
                Z = l(11210),
                $ = l(88936),
                U = l(17664),
                A = l(53097),
                R = l(49608),
                O = l(35155),
                F = l(75229),
                z = l(2913),
                W = l(70375),
                G = l(350),
                H = l(27434),
                L = l(12250),
                V = l(61570),
                j = l(36691),
                J = l(71211),
                K = l(91014),
                Q = l(82817),
                X = l(77167),
                Y = l(29787),
                q = l(58343),
                ee = l(74514),
                et = l(61861),
                el = l.n(et),
                en = l(18858),
                es = l(92342),
                er = l(98818);
            let eo = (0, c.weakMemo)(e => (0, c.weakMemo)(t => (0, c.singleMemo)(l => {
                    let n = {},
                        s = {},
                        updateAffectedMaps = l => {
                            if (!n[l])
                                for (let r of (n[l] = [], s[l] = [], (0, $.$r)({
                                        abstractNodeState: t,
                                        styleBlockState: e,
                                        styleBlockId: l
                                    }))) {
                                    let e = (0, F.$4)(t.root, r);
                                    if (!e) continue;
                                    let o = t.root.getIn(e.slice(0, 2));
                                    (0, z.UE9)(o) ? s[l].push(o.id): n[l].push(r)
                                }
                        },
                        getAffectedNodesOnThisPage = e => (updateAffectedMaps(e), n[e]);
                    return [getAffectedNodesOnThisPage, e => (updateAffectedMaps(e), s[e]), {
                        get(t) {
                            var n, s;
                            let r = e.affectsMap.get(t);
                            return r ? r.set(l, null !== (n = null === (s = getAffectedNodesOnThisPage(t)) || void 0 === s ? void 0 : s.length) && void 0 !== n ? n : 0) : r
                        }
                    }]
                }))),
                ea = {
                    hidden: !0
                },
                ei = {
                    hidden: !1
                };

            function styleBlockDisplay(e) {
                let t = e.get("type"),
                    l = e.get("name"),
                    n = (0, y.Xq)({
                        [t + "Name"]: l
                    });
                return n
            }
            let ec = (0, B.nU)(e => {
                    let {
                        theme: t,
                        depth: l,
                        style: n
                    } = e;
                    return {
                        display: "grid",
                        gridAutoFlow: "column",
                        alignItems: "center",
                        borderTop: `1px solid ${t.control.borderColor}`,
                        minHeight: 31,
                        gridTemplateColumns: `${"number"==typeof l?16*l:0}px 1fr auto`,
                        gap: 4,
                        paddingRight: t.gutters.base,
                        backgroundColor: t.colors.background,
                        ...n
                    }
                }, {
                    first: {
                        borderTop: 0
                    },
                    editing: e => {
                        let {
                            theme: t
                        } = e;
                        return {
                            backgroundColor: t.colors.background
                        }
                    }
                }),
                eu = (0, B.r9)(ec)({
                    [es.JO$.__experimentalTokens.color]: B.TV.colors.textDefault,
                    paddingLeft: "$1",
                    borderTop: "none !important",
                    outline: "none",
                    "[data-list-item-actions]": {
                        visibility: "hidden"
                    },
                    "&:hover": {
                        backgroundColor: "$uiBackgroundHover !important",
                        [es.JO$.__experimentalTokens.color]: B.TV.colors.textActive,
                        "[data-list-item-actions]": {
                            visibility: "visible"
                        }
                    },
                    "&:focus, &:focus-within": {
                        backgroundColor: "$uiBackgroundHover !important",
                        "[data-list-item-actions]": {
                            visibility: "visible"
                        }
                    }
                }),
                ed = (0, B.zo)(x.Z)({
                    lineHeight: "21px",
                    margin: "2px 0",
                    flex: 1
                }),
                renderAffectsListPopoverIcon = e => {
                    let {
                        openPopover: t,
                        Anchor: l
                    } = e;
                    return r.createElement(l, null, r.createElement(es.hU, {
                        label: "Show affected elements",
                        "data-automation-id": "style-affects-list-popover-icon",
                        onClick: t,
                        variant: "ghost",
                        Icon: es.lpH
                    }))
                },
                em = r.memo(e => {
                    let {
                        affectedPageIds: t,
                        currentPageId: l,
                        flux: n,
                        pageState: s,
                        styleBlockId: o,
                        styleBlockState: a,
                        getAffectedNodesOnThisPage: i,
                        getAffectedSymbols: c
                    } = e, u = (0, L._m2)(), d = (0, P.I0)(), m = (0, W.Yx)(J.sO), h = (0, H.jI)(), p = (0, W.Yx)(J.Gz), g = (0, V.U)(), y = (0, j.M)(), k = (0, B.Fg)(), f = (0, en.$G)();
                    if (!h) return null;
                    let S = K.Component.getRender(m),
                        C = r.useCallback(() => {
                            let e = i(o) || [],
                                m = [];
                            t.forEach(e => {
                                let t = (0, U.fx)(e, s);
                                null != t && t.id !== l && m.push(t)
                            }, []);
                            let B = e.reduce((e, t) => {
                                    let l = K.Expressions.getElementById(S, t);
                                    return null != l && e.push(l), e
                                }, []),
                                C = c(o) || [];
                            return r.createElement(O.in, {
                                style: {
                                    width: E.he,
                                    maxHeight: 300
                                }
                            }, r.createElement("div", {
                                style: {
                                    display: "grid",
                                    gap: 2 * k.gutters.base,
                                    padding: 2 * k.gutters.base
                                }
                            }, r.createElement("div", null, "Elements affected on this page"), r.createElement(R.ZP, {
                                items: B,
                                renderNone: () => r.createElement(R.Rm, null),
                                renderItem: e => r.createElement(R.c$, {
                                    key: e.id,
                                    id: e.id,
                                    icon: r.createElement(Z.C, {
                                        element: e,
                                        componentMap: p,
                                        component: h
                                    }),
                                    label: (0, G.ie)(e, S, p, u, a),
                                    onClick: () => {
                                        d(g({
                                            nativeIdInCurrentComponent: e.id
                                        }))
                                    },
                                    onMouseOver: () => {
                                        d(y({
                                            nativeIdInCurrentComponent: e.id
                                        }))
                                    },
                                    onMouseOut: () => {
                                        d(y({
                                            nativeIdInCurrentComponent: null
                                        }))
                                    }
                                })
                            }), r.createElement("div", null, "Elements affected on other pages"), r.createElement(R.ZP, {
                                items: m,
                                renderNone: () => r.createElement(R.Rm, null),
                                renderItem: e => r.createElement(R.c$, {
                                    key: e.id,
                                    id: e.id,
                                    icon: r.createElement(es._jw, {
                                        size: 12
                                    }),
                                    label: e.name,
                                    onClick: e.id === l ? null : () => {
                                        let {
                                            switchPage: t
                                        } = n.__DEPRECATED__getCreators("PageActionCreators");
                                        t({
                                            id: e.id
                                        })
                                    }
                                })
                            }), r.createElement("div", null, f("designer.components.style-manager.affected-components")), r.createElement(R.ZP, {
                                items: C,
                                renderNone: () => r.createElement(R.Rm, null),
                                renderItem: e => {
                                    let t = p.get((0, Q.qualify)(K.Plugins.name("__SitePlugin"), K.Component.name(e)));
                                    return r.createElement(R.c$, {
                                        key: e,
                                        id: e,
                                        icon: r.createElement(es.SLC, {
                                            size: 12
                                        }),
                                        label: t ? K.Component.getDisplayName(t) : ""
                                    })
                                }
                            })))
                        }, [i, o, t, c, k.gutters.base, f, g, d, s, l, S, p, h, u, a, n]);
                    return r.createElement(A.J2, {
                        placement: "bottom",
                        paddedMask: !0,
                        renderPopoverContent: C
                    }, renderAffectsListPopoverIcon)
                }),
                eh = (0, B.zo)("span")(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        color: t.colors.css.propertyText,
                        marginRight: -16
                    }
                }),
                ep = (0, B.zo)("span")(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        color: t.colors.css.valueText,
                        paddingLeft: 16
                    }
                }),
                eg = (0, B.r9)("span")({
                    fontFamily: "monospace, monospace"
                });
            let StyleBlock = class StyleBlock extends r.Component {
                constructor() {
                    super(...arguments), (0, n.Z)(this, "state", {
                        name: "",
                        editing: !1
                    }), (0, n.Z)(this, "onEditClick", () => {
                        let e = !this.state.editing;
                        this.setState({
                            name: e ? this.display() : "",
                            editing: e
                        })
                    }), (0, n.Z)(this, "onNameKeyDown", e => {
                        e.which === k.K5 ? (this.submit(), e.preventDefault(), e.stopPropagation()) : e.which === k._Q && (this.cancelChanges(), e.preventDefault(), e.stopPropagation())
                    }), (0, n.Z)(this, "onNameChange", e => {
                        this.setState({
                            name: e.target.value
                        })
                    }), (0, n.Z)(this, "onOkClick", () => {
                        this.submit()
                    }), (0, n.Z)(this, "onCancelClick", () => {
                        this.cancelChanges()
                    }), (0, n.Z)(this, "onTrashClick", () => {
                        let {
                            styleBlock: e,
                            stores: {
                                styleBlock: t
                            }
                        } = this.props, l = t.getBlockIdClosure(e.get("_id"));
                        this.props.flux.dispatch((0, d.Av)(l))
                    })
                }
                componentDidUpdate(e, t) {
                    if (this.state.editing && !t.editing) {
                        let e = o.findDOMNode(this);
                        e instanceof HTMLElement && (0, s.Z)(e.querySelector("input")).focus().select()
                    }
                }
                isClass() {
                    return "class" === this.props.styleBlock.get("type")
                }
                isTag() {
                    return "tag" === this.props.styleBlock.get("type")
                }
                display() {
                    return styleBlockDisplay(this.props.styleBlock)
                }
                changed() {
                    return (0, y.vC)(this.state.name) !== (0, y.vC)(this.display())
                }
                depth() {
                    let e = this.props.stores.styleBlock,
                        {
                            parentIndex: t
                        } = e;
                    return (0, f.h_)(t, this.props.styleBlock.get("_id"))
                }
                conflictWarnings() {
                    let {
                        stores: {
                            styleBlock: e
                        },
                        styleBlock: t
                    } = this.props, {
                        editing: l,
                        name: n
                    } = this.state, s = this.changed();
                    if (!l || !s) return [];
                    {
                        let l = t.get("_id");
                        return function(e) {
                            let {
                                styleBlockState: t,
                                styleBlockGuid: l,
                                newName: n
                            } = e, s = l && t.getBlock(l), r = s ? t.getTreePath(s.get("_id")).map(e => e.get("name")) : [], o = r.slice(0, -1).concat([n]), a = _styleBlockPathSignature(o), i = s ? t.getTreePath(s.get("_id")).map(e => e.get("_id")) : [], c = (0, y.vC)(n), u = (() => {
                                let e = [];
                                return t.walkStyleBlockTree(t.getGlobalStyleBlocks().toArray(), function(l) {
                                    if (!i.includes(l.get("_id"))) {
                                        let n = _styleBlockSignature(t, l);
                                        "class" === l.get("type") && (0, f.Zo)(l) === c && _styleBlockSignaturesConflict(a, n) && e.push(l)
                                    }
                                }), e
                            })();
                            return u
                        }({
                            styleBlockState: e,
                            styleBlockGuid: l,
                            newName: n
                        })
                    }
                }
                unconflictWarnings() {
                    let {
                        stores: {
                            styleBlock: e
                        },
                        styleBlock: t
                    } = this.props, {
                        editing: l
                    } = this.state;
                    if (!l) return [];
                    {
                        let l = t.get("_id");
                        return function(e) {
                            let {
                                styleBlockState: t,
                                styleBlockGuid: l
                            } = e, n = t.getBlock(l), s = _styleBlockSignature(t, n), r = t.getTreePath(n.get("_id")).map(e => e.get("_id")), o = (0, y.vC)(n.get("name")), a = (() => {
                                let e = [];
                                return t.walkStyleBlockTree(t.getGlobalStyleBlocks().toArray(), l => {
                                    if (!r.includes(l.get("_id"))) {
                                        let n = _styleBlockSignature(t, l);
                                        "class" === l.get("type") && (0, y.vC)(l.get("name")) === o && _styleBlockSignaturesConflict(n, s) && e.push(l)
                                    }
                                }), e
                            })();
                            return a
                        }({
                            styleBlockState: e,
                            styleBlockGuid: l
                        })
                    }
                }
                cancelChanges() {
                    this.setState({
                        name: "",
                        editing: !1
                    })
                }
                canEdit() {
                    return !!this.isClass() && (!!this.props.canModifyStyleBlocks || this.props.canModifyOwnStyleBlocks && this.props.styleBlock.createdBy === this.props.currentUserId)
                }
                isValidClassName() {
                    return (0, y.y8)(this.state.name)
                }
                canRename() {
                    let {
                        stores: {
                            styleBlock: e
                        },
                        styleBlock: t
                    } = this.props;
                    return (0, f.y7)(e, {
                        _id: t.get("_id"),
                        newName: this.state.name
                    })
                }
                canTrash() {
                    let {
                        stores: {
                            styleBlock: e,
                            abstractNode: t,
                            designer: {
                                currentPageId: l
                            },
                            ix: n,
                            ix2State: s
                        },
                        styleBlock: r
                    } = this.props;
                    return e.isRemovableStyleBlock(r, t, l, n, s)
                }
                submit() {
                    this.canRename() && (this.props.onChange(this.props.styleBlock, this.state.name), this.setState({
                        editing: !1
                    }))
                }
                render() {
                    var e, t;
                    let {
                        styleBlockIndex: l
                    } = this.props, {
                        editing: n
                    } = this.state, s = this.canEdit(), o = this.canRename(), a = this.conflictWarnings(), i = this.unconflictWarnings(), c = (() => {
                        let e = [];
                        return !1 === this.isValidClassName() && e.push("invalidClassName"), this.isValidClassName() && !o && e.push("existingClassName"), o && a.length > 0 && e.push("conflictingClassNames"), o && i.length > 0 && e.push("unconflictingClassNames"), e
                    })();
                    if (n) return r.createElement(eu, {
                        first: 0 === l,
                        editing: !0,
                        tabIndex: 0
                    }, r.createElement("div", null), r.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        }
                    }, r.createElement(eT, {
                        id: `input-${this.state.name}`
                    }, "Name:"), r.createElement(ed, {
                        name: `input-${this.state.name}`,
                        value: this.state.name,
                        onKeyDown: this.onNameKeyDown,
                        onChange: this.onNameChange
                    })), r.createElement(e_, null, this.canTrash() ? r.createElement(es.hU, {
                        label: "Delete",
                        Icon: es.pJl,
                        variant: "ghost",
                        onClick: this.onTrashClick
                    }) : null, r.createElement(es.hU, {
                        label: "Confirm",
                        Icon: es.Mf1,
                        variant: "ghost",
                        onClick: this.onOkClick
                    }), r.createElement(es.hU, {
                        label: "Close",
                        Icon: es.O_,
                        variant: "ghost",
                        onClick: this.onCancelClick
                    })), r.createElement(WarningsPopover, {
                        warnings: c,
                        yPosition: 31 * l,
                        conflictWarnings: a,
                        unconflictWarnings: i,
                        stores: this.props.stores
                    }));
                    let u = this.props.stores.designer.currentPageId,
                        [d, m, h] = eo(this.props.stores.styleBlock)(this.props.stores.abstractNode)(u),
                        p = new Set,
                        g = h.get(this.props.styleBlock._id);
                    g && g.forEach((e, t) => {
                        e > 0 && p.add(t)
                    });
                    let y = p.size > 0 || (null !== (e = null === (t = m(this.props.styleBlock._id)) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0) > 0,
                        k = this.props.styleBlock.get("styleLess"),
                        f = k && k.split(";"),
                        S = f ? f.map((e, t) => {
                            let [l, n] = e.split(":");
                            if (!l || !n) return null;
                            let {
                                swatches: s,
                                variables: o
                            } = this.props.flux.getStoreState("CssVariablesStore"), a = (0, er.Z)(n, o);
                            if ((0, q.U1)(a)) {
                                let e = (0, q.Qm)(a),
                                    t = (0, q.wu)(s, e) || ee.FD;
                                a = t.previewColor || t.color || a
                            }
                            return r.createElement("div", {
                                key: `line-${t}`
                            }, "\xa0\xa0", r.createElement(eg, null, r.createElement(eh, null, l.trim(), ":"), " ", r.createElement(ep, {
                                "data-automation-id": `styles-preview-tooltip-${l.trim()}-value`
                            }, a), ";"))
                        }) : r.createElement(eg, null, "No applied styles");
                    return r.createElement(eu, {
                        first: 0 === l,
                        depth: this.depth(),
                        tabIndex: 0
                    }, r.createElement(eC, {
                        combinator: this.props.styleBlock.get("comb"),
                        depth: this.depth()
                    }), r.createElement(es.G7x, {
                        marginLeft: "$1",
                        marginRight: "$1",
                        overflow: "hidden"
                    }, r.createElement(I.ZP, {
                        placement: "top",
                        content: S,
                        "data-automation-id": "styles-preview-tooltip"
                    }, r.createElement(_.Z, {
                        styleTextDataAutomationId: "style-rule-token-all-styles-tooltip-text",
                        color: this.isTag() ? B.designerTheme.styleRuleTokenColors.tag : B.designerTheme.styleRuleTokenColors.class,
                        value: this.display()
                    }))), r.createElement(es.G7x, {
                        display: "grid",
                        gridTemplateColumns: "$6 $6",
                        "data-list-item-actions": !0
                    }, y ? r.createElement(em, {
                        affectedPageIds: p,
                        currentPageId: u,
                        flux: this.props.flux,
                        pageState: this.props.stores.page,
                        styleBlockId: this.props.styleBlock._id,
                        styleBlockState: this.props.stores.styleBlock,
                        getAffectedNodesOnThisPage: d,
                        getAffectedSymbols: m
                    }) : r.createElement("div", null), s ? r.createElement(es.hU, {
                        label: "Edit",
                        variant: "ghost",
                        Icon: es.$fH,
                        onClick: this.onEditClick
                    }) : r.createElement("div", null)))
                }
            };
            (0, n.Z)(StyleBlock, "defaultProps", {
                styleBlock: null,
                onChange: function() {}
            });
            let ey = (0, B.r9)("div")({
                    width: 190
                }),
                ek = (0, B.r9)("div")({
                    overflow: "hidden"
                }),
                ef = (0, B.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        marginRight: t.gutters.base,
                        display: "inline-block",
                        verticalAlign: "text-top"
                    }
                }),
                eS = (0, B.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        margin: `${t.gutters.narrow}px 0`
                    }
                }),
                Warning = e => {
                    let {
                        message: t,
                        children: l
                    } = e;
                    return r.createElement(ey, null, r.createElement(eS, null, r.createElement(ef, null, r.createElement(es.T67, null)), r.createElement("span", null, t)), l ? r.createElement(ek, null, l) : null)
                },
                eE = {
                    justifySelf: "end",
                    marginRight: "1px"
                },
                eB = (0, B.r9)(es.oRM)({
                    color: "$textDefault"
                }),
                eC = (0, B.zo)(e => 0 === e.depth ? r.createElement("div", null) : e.combinator === g.COMBINATORS.DESCENDANT || e.combinator === g.COMBINATORS.COMBO ? r.createElement(eB, {
                    style: eE
                }) : r.createElement("div", null))({
                    opacity: .6,
                    justifySelf: "end",
                    marginTop: -7
                }),
                WarningsPopover = e => {
                    if (0 === e.warnings.length) return null;
                    let {
                        warnings: t,
                        yPosition: l,
                        conflictWarnings: n,
                        unconflictWarnings: s,
                        stores: o
                    } = e;
                    return r.createElement(StaticPopover, {
                        anchorBounds: {
                            width: 230,
                            height: 27,
                            left: 0,
                            top: l
                        },
                        style: {
                            zIndex: 1
                        }
                    }, r.createElement("div", {
                        className: "warnings"
                    }, t.map(e => {
                        switch (e) {
                            case "invalidClassName":
                                return r.createElement(Warning, {
                                    key: e,
                                    message: "This is not a valid class name."
                                });
                            case "existingClassName":
                                return r.createElement(Warning, {
                                    key: e,
                                    message: "You cannot use this name because a class with that name already exists."
                                });
                            case "conflictingClassNames":
                                return r.createElement(Warning, {
                                    key: e,
                                    message: "Using this name could cause conflicts with other selectors that share the same name:"
                                }, n.map(e => r.createElement(StyleBlockInfo, {
                                    styleBlock: e,
                                    styleBlockState: o.styleBlock,
                                    key: e.get("_id")
                                })));
                            case "unconflictingClassNames":
                                return r.createElement(Warning, {
                                    key: e,
                                    message: "This class name is currently used by other selectors. Renaming it may affect these selectors:"
                                }, s.map(e => r.createElement(StyleBlockInfo, {
                                    styleBlock: e,
                                    styleBlockState: o.styleBlock,
                                    key: e.get("_id")
                                })));
                            default:
                                return null
                        }
                    })))
                },
                ev = (0, B.r9)("div")({
                    display: "inline-block",
                    margin: 2
                }),
                eb = (0, c.weakMemo)(e => (0, c.weakMemo)(t => (0, c.weakMemo)(l => (0, c.weakMemo)(n => (0, c.singleMemo)(s => {
                    let r = [];
                    return n.walkStyleBlockTree(n.getGlobalStyleBlocks().toArray(), o => {
                        if (n.isRemovableStyleBlock(o, l, s, t, e)) {
                            let {
                                baseStyleBlockIds: e,
                                styleBlockIds: t
                            } = n, l = t.has(o.get("_id")) && !e.has(o.get("_id"));
                            l && r.push(o)
                        }
                    }), r
                }))))),
                StyleBlockInfo = e => {
                    let {
                        styleBlockState: t,
                        styleBlock: l
                    } = e;
                    return r.createElement("div", null, t.getTreePath(l.get("_id")).map((e, t, l) => {
                        let n = "";
                        return n = "tag" === e.get("type") ? B.designerTheme.styleRuleTokenColors.tag : t !== l.length - 1 ? B.designerTheme.styleRuleTokenColors.inactive : B.designerTheme.styleRuleTokenColors.class, r.createElement(ev, {
                            key: e.get("_id")
                        }, r.createElement(_.Z, {
                            color: n,
                            value: styleBlockDisplay(e)
                        }))
                    }))
                },
                ex = (0, B.nU)(e => {
                    let {
                        index: t,
                        total: l
                    } = e;
                    return {
                        transform: `translateY(${992*t}px)`,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        zIndex: l - t + 1
                    }
                }),
                StyleBlockGroup = e => {
                    let {
                        currentUserId: t,
                        canModifyStyleBlocks: l,
                        canModifyOwnStyleBlocks: n,
                        flux: s,
                        index: o,
                        styleBlocks: a,
                        stores: i,
                        onStyleBlockNameChange: c,
                        total: u
                    } = e;
                    return r.createElement(ex, {
                        index: o,
                        total: u
                    }, a.map((e, a) => r.createElement(StyleBlock, {
                        currentUserId: t,
                        canModifyStyleBlocks: l,
                        canModifyOwnStyleBlocks: n,
                        flux: s,
                        styleBlock: e,
                        styleBlockGroupIndex: o,
                        styleBlockIndex: a,
                        stores: i,
                        onChange: c,
                        key: e.get("_id")
                    })))
                },
                eT = (0, B.r9)("label")({
                    color: "$textDefault",
                    marginLeft: "$1",
                    marginRight: "$1"
                }),
                ew = (0, B.r9)("div")({
                    display: "flex",
                    flexDirection: "row"
                }),
                e_ = (0, B.zo)(ew)({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch"
                }),
                getStyleTreeStyles = e => ({
                    position: "relative",
                    height: 31 * e.length,
                    ...S.QX
                }),
                eI = (0, B.r9)("div")({
                    pointerEvents: "all",
                    height: "100%",
                    backgroundColor: "$background1",
                    isolation: "isolate"
                });
            let AllStylesTab = class AllStylesTab extends r.Component {
                constructor() {
                    super(...arguments), (0, n.Z)(this, "state", {
                        decoratedStyleBlocks: [],
                        styleBlockGroups: [],
                        styleBlockGroupStartIndex: 0
                    }), (0, n.Z)(this, "getUnusedStyles", () => {
                        let {
                            stores: {
                                ix2State: e,
                                ix: t,
                                abstractNode: l,
                                designer: {
                                    currentPageId: n
                                },
                                styleBlock: s
                            }
                        } = this.props;
                        return eb(e)(t)(l)(s)(n)
                    }), (0, n.Z)(this, "onUnusedStylesToggle", () => {
                        let {
                            showUnusedStyles: e
                        } = this.props.stores.allStyles;
                        this.props.flux.dispatch((0, u.A)({
                            hidden: e
                        })), this.props.flux.dispatch((0, u.S)(ea))
                    }), (0, n.Z)(this, "onUnusedStylesHide", () => {
                        this.props.flux.dispatch((0, u.A)(ea)), this.props.flux.dispatch((0, u.S)(ea))
                    }), (0, n.Z)(this, "onUnusedStylesShowAll", () => {
                        this.props.flux.dispatch((0, u.S)(ei))
                    }), (0, n.Z)(this, "onUnusedStylesRemove", () => {
                        let e = this.getUnusedStyles(),
                            t = e.map(e => e.get("_id"));
                        this.props.flux.dispatch((0, d.Av)(t)), this.props.flux.dispatch((0, u.A)(ea))
                    }), (0, n.Z)(this, "onScroll", e => {
                        let {
                            target: t
                        } = e, l = (0, s.Z)(t), n = l.scrollTop(), r = Math.floor(n / 992);
                        r !== this.state.styleBlockGroupStartIndex && this.setState({
                            styleBlockGroupStartIndex: r
                        })
                    }), (0, n.Z)(this, "onStyleBlockNameChange", (e, t) => {
                        let {
                            flux: l
                        } = this.props, n = e.get("_id"), s = e.get("name");
                        s !== t && l.dispatch((0, d.X6)({
                            _id: n,
                            newName: t
                        }))
                    }), (0, n.Z)(this, "getUnusedStylesSummary", () => {
                        let {
                            stores: e
                        } = this.props, {
                            allStyles: t
                        } = e, {
                            showAllUnusedStyles: l
                        } = t, n = this.getUnusedStyles();
                        return l ? n : n.slice(0, 16)
                    })
                }
                shouldComponentUpdate(e, t) {
                    let l = this.props,
                        n = this.state;
                    return l.stores.allStyles !== e.stores.allStyles || l.stores.styleBlock !== e.stores.styleBlock || l.stores.abstractNode !== e.stores.abstractNode || l.stores.ix !== e.stores.ix || n.styleBlockGroupStartIndex !== t.styleBlockGroupStartIndex
                }
                UNSAFE_componentWillMount() {
                    this.refreshDecoratedStyleBlocks(null, this.props)
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.refreshDecoratedStyleBlocks(this.props, e)
                }
                refreshDecoratedStyleBlocks(e, t) {
                    if (!e || e.stores.styleBlock !== t.stores.styleBlock) {
                        let e = this.getDecoratedStyleBlocks(t);
                        this.setState({
                            decoratedStyleBlocks: e
                        })
                    }
                }
                getStyleBlockGroups(e) {
                    let {
                        styleBlockGroupStartIndex: t
                    } = this.state, l = [], n = e.length, s = Math.ceil(n / 32);
                    for (let n = t; n < s && n < t + 2; n++) {
                        let t = e.slice(32 * n, (n + 1) * 32),
                            r = n;
                        l.push({
                            styleBlocks: t,
                            index: r,
                            total: s
                        })
                    }
                    return l
                }
                getDecoratedStyleBlocks(e) {
                    let t = e.stores.styleBlock,
                        l = [];
                    return t.globalOrder.forEach(e => {
                        let n = t.getBlock(e);
                        null == n || n.get("fake") || function recurse(e) {
                            l.push(e);
                            let t = e.get("children");
                            t && t.size > 0 && t.forEach(recurse)
                        }(t.decorateStyleBlockChildren(n))
                    }), l
                }
                render() {
                    let {
                        currentUserId: e,
                        canAccessStylesManagerPanel: t,
                        canModifyStyleBlocks: l,
                        canModifyOwnStyleBlocks: n,
                        flux: s,
                        stores: o
                    } = this.props, {
                        allStyles: a,
                        styleBlock: i
                    } = o, {
                        showUnusedStyles: c
                    } = a, {
                        onScroll: u,
                        onStyleBlockNameChange: d,
                        onUnusedStylesHide: m,
                        onUnusedStylesShowAll: p,
                        onUnusedStylesRemove: g
                    } = this, {
                        decoratedStyleBlocks: y
                    } = this.state;
                    return r.createElement(h.PL, null, a => r.createElement(h.l_, {
                        box: a
                    }, r.createElement(eI, null, !t && r.createElement(w.h4, {
                        style: {
                            minHeight: `${E.Cr}px`
                        }
                    }, r.createElement(w.Gh, {
                        small: !0
                    }, "Style Manager"), l && r.createElement(b.Z, null, r.createElement(w.Ov, {
                        "data-automation-id": "clean-up-styles-button",
                        onClick: this.onUnusedStylesToggle
                    }, i.styleBlocks.size < 100 ? r.createElement(r.Fragment, null, "Clean up ", r.createElement("i", null, "(", this.getUnusedStyles().length, ")")) : r.createElement(r.Fragment, null, "Clean up...")))), r.createElement(SearchStyleBlocks, {
                        canAccessStylesManagerPanel: t,
                        decoratedStyleBlocks: y,
                        swatches: this.props.flux.getStoreState("CssVariablesStore").swatches,
                        styleBlockStore: i
                    }, t => {
                        let {
                            searchInput: a,
                            styleBlocks: i,
                            query: h
                        } = t, y = this.getStyleBlockGroups(i);
                        return r.createElement(r.Fragment, null, c ? null : a, r.createElement("div", {
                            className: "kit-scrollable-native",
                            style: {
                                height: `calc(100% - ${E.ag+X.Hx}px)`
                            }
                        }, r.createElement("div", {
                            className: "kit-scroll-pane kit-scrollbar kit-section-group",
                            onScroll: u
                        }, c ? r.createElement(eZ, {
                            stores: o,
                            onShowAll: p,
                            onRemove: g,
                            onCancel: m,
                            getUnusedStyles: this.getUnusedStyles,
                            getUnusedStylesSummary: this.getUnusedStylesSummary
                        }) : h && !y.length ? r.createElement(X.X6, null, "No matching classes") : r.createElement("div", {
                            style: getStyleTreeStyles(i)
                        }, y.map(t => r.createElement(StyleBlockGroup, {
                            currentUserId: e,
                            canModifyStyleBlocks: l,
                            canModifyOwnStyleBlocks: n,
                            flux: s,
                            styleBlocks: t.styleBlocks,
                            index: t.index,
                            total: t.total,
                            stores: o,
                            onStyleBlockNameChange: d,
                            key: t.index
                        }))))))
                    }))))
                }
            };
            let eN = (0, N.nC)(e => {
                    let t = (0, D.Jo)("canAccessStylesManagerPanel")(e),
                        l = (0, D.Jo)("canModifyStyleBlocks")(e),
                        n = (0, D.Jo)("canModifyOwnStyleBlocks")(e),
                        s = (0, M.c)(e);
                    return {
                        canAccessStylesManagerPanel: t,
                        canModifyStyleBlocks: l,
                        canModifyOwnStyleBlocks: n,
                        currentUserId: s
                    }
                })(AllStylesTab),
                getColorInDifferentFormats = e => {
                    let t = el()(e);
                    return t.isValid() ? [e, t.toName(), t.toHexString(), t.toRgbString()] : [e]
                },
                getValueInDifferentFormats = (e, t) => {
                    if ((0, q.U1)(e)) {
                        let l = (0, q.Qm)(e),
                            n = l && (0, q.wu)(t, l);
                        if (n) {
                            let e = n.previewColor || n.color;
                            return [...getColorInDifferentFormats(e), n.name]
                        }
                    }
                    return getColorInDifferentFormats(e)
                },
                enrichStyleDeclarations = (e, t) => {
                    let l = e.split(";"),
                        n = [];
                    return l.forEach(e => {
                        let [l, s] = e.split(":").map(e => e.trim());
                        if (!l || !s) {
                            n.push(e);
                            return
                        }
                        getValueInDifferentFormats(s, t).forEach(e => {
                            n.push(`${l}: ${e}`)
                        })
                    }), n.join(";")
                },
                SearchStyleBlocks = e => {
                    let {
                        children: t,
                        canAccessStylesManagerPanel: l,
                        decoratedStyleBlocks: n,
                        swatches: s,
                        styleBlockStore: o
                    } = e, [a, {
                        focus: c,
                        query: u
                    }, {
                        onKeyDown: d,
                        onChange: m,
                        onFocus: h,
                        onBlur: p,
                        clear: g,
                        warmUpSearchIndex: y
                    }] = (0, Y.Z)({
                        items: n,
                        getSearchableText: e => styleBlockDisplay(e) + enrichStyleDeclarations(e.styleLess, s),
                        suggest: !1,
                        lazy: !0
                    }), k = r.useCallback(() => {
                        y(), h()
                    }, [h, y]), f = (0, B.Fg)(), S = {
                        borderTop: 0,
                        background: f.colors.background
                    }, E = r.createElement(r.Fragment, null, r.createElement(X.C_, null), r.createElement(X.im, {
                        style: S
                    }, u && r.createElement(b.Z, null, r.createElement(X.Tw, {
                        onClick: g
                    })), r.createElement(X.W1, {
                        focus: c
                    }), r.createElement(b.Z, null, r.createElement(X.II, {
                        onFocus: k,
                        onBlur: p,
                        focus: c,
                        value: u,
                        onChange: m,
                        onKeyDown: d,
                        placeholder: l ? "Search styles" : "Search classes"
                    }))));
                    if (!u) return t({
                        searchInput: E,
                        styleBlocks: n,
                        query: u
                    });
                    let C = i()(...a.map(e => {
                            var t, l;
                            let n = null === (t = e.match) || void 0 === t ? void 0 : t._id,
                                s = {};
                            for (; n;) s = {
                                [n]: s
                            }, n = null === (l = o.getParent(n)) || void 0 === l ? void 0 : l._id;
                            return s
                        })),
                        v = [],
                        convertStyleBlocksTreeToStyleBlocks = e => {
                            Object.entries(e).forEach(e => {
                                let [t, l] = e;
                                v.push(o.getBlock(t)), convertStyleBlocksTreeToStyleBlocks(l)
                            })
                        };
                    return convertStyleBlocksTreeToStyleBlocks(C), t({
                        searchInput: E,
                        styleBlocks: v,
                        query: u
                    })
                },
                eP = (0, B.zo)(C.Z)(e => {
                    let {
                        theme: {
                            gutters: t,
                            fontSizes: l
                        }
                    } = e;
                    return {
                        display: "block",
                        marginTop: t.wide,
                        marginBottom: t.wide,
                        fontSize: l.subheadingSmall,
                        lineHeight: `${l.subheadingSmall}px`
                    }
                }),
                eD = (0, B.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        position: "relative",
                        borderWidth: t.control.borderWidth,
                        boxSizing: "border-box",
                        backgroundColor: t.Well.background,
                        borderStyle: "solid",
                        borderColor: t.Well.background,
                        borderRadius: t.control.borderRadius,
                        padding: t.gutters.normal
                    }
                }),
                eM = (0, B.r9)("div")({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    opacity: "0%",
                    animationName: (0, B.F4)({
                        "0%": {
                            opacity: "0%"
                        },
                        "100%": {
                            opacity: "100%"
                        }
                    }),
                    animationDelay: "250ms",
                    animationDuration: "100ms",
                    animationFillMode: "forwards"
                }),
                eZ = (0, B.zo)(e => {
                    let {
                        style: t,
                        stores: l,
                        onShowAll: n,
                        onRemove: s,
                        onCancel: o,
                        getUnusedStyles: a,
                        getUnusedStylesSummary: i
                    } = e, [c, u] = r.useState(null);
                    if (r.useEffect(() => {
                            u(null);
                            let e = setTimeout(() => {
                                u({
                                    total: a().length,
                                    summaryUnusedStyles: i()
                                })
                            });
                            return () => {
                                clearTimeout(e)
                            }
                        }, [a, i, l]), null == c) return r.createElement(eM, null, r.createElement(es.$jN, null));
                    let {
                        total: d,
                        summaryUnusedStyles: m
                    } = c;
                    return r.createElement("div", {
                        style: t
                    }, 0 === m.length ? r.createElement(r.Fragment, null, r.createElement(eP, null), r.createElement(eD, null, r.createElement("span", {
                        className: "status"
                    }, "No unused styles found")), r.createElement(eP, null), r.createElement(v.ZP, {
                        sizing: "small",
                        style: {
                            alignItems: "center"
                        },
                        onClick: o
                    }, "OK")) : r.createElement(r.Fragment, null, r.createElement(eP, null, "The following styles are not associated with any page elements:"), r.createElement(eD, null, m.map(e => r.createElement(StyleBlockInfo, {
                        styleBlock: e,
                        styleBlockState: l.styleBlock,
                        key: e.get("_id")
                    }))), r.createElement(b.Z, null, r.createElement(T.Z, {
                        onClick: n
                    }, "Show all ", d, "...")), r.createElement(eP, null, "Are you sure you would like to delete them?"), r.createElement(ew, null, r.createElement(v.ZP, {
                        "data-automation-id": "remove-styles-button",
                        sizing: "small",
                        onClick: s
                    }, "Remove"), r.createElement(v.ZP, {
                        sizing: "small",
                        style: {
                            marginLeft: 8
                        },
                        onClick: o
                    }, "Cancel"))))
                })(e => {
                    let {
                        theme: {
                            gutters: t
                        }
                    } = e;
                    return {
                        padding: `0 ${t.wide}px ${t.wide}px ${t.wide}px`
                    }
                })
        }
    }
]);
//# sourceMappingURL=webflow-designer.b46b3b9042e0cb91c09a.chunk-ep.js.map