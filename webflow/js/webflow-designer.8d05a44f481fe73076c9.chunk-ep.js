(self.webpackChunk = self.webpackChunk || []).push([
    [403], {
        77403: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SymbolItem: () => e1,
                default: () => eX
            });
            var l = n(47169),
                a = n(32735),
                o = n(13581),
                r = n.n(o),
                i = n(21190),
                s = n.n(i),
                m = n(13066),
                c = n(44838),
                d = n(40920),
                u = n(2509),
                g = n(29787),
                p = n(22962),
                b = n(81875),
                h = n(89631),
                y = n(85018),
                E = n(26349),
                C = n(18858),
                S = n(55019),
                v = n(24791),
                f = n(97396),
                k = n(11429),
                I = n(152),
                w = n(60377);
            let P = (0, E.nU)(w.QX);
            var x = n(90259),
                Z = n(24890),
                M = n(12463),
                D = n(1598),
                N = n(10923),
                T = n(92342),
                L = n(14574),
                A = n(83520),
                _ = n(60216),
                B = n.n(_),
                z = n(12788);
            let stopEvent = e => {
                    e.stopPropagation()
                },
                preventClickHandlersFromFiring = e => {
                    if (e) {
                        let t = (0, z.findDOMNode)(e);
                        t && t.addEventListener("click", stopEvent)
                    }
                };
            let Submittable = class Submittable extends a.Component {
                constructor() {
                    super(...arguments), (0, l.Z)(this, "handleSubmit", e => {
                        e.preventDefault(), this.props.onSubmit && this.props.onSubmit()
                    })
                }
                render() {
                    return a.createElement("form", {
                        onSubmit: this.handleSubmit
                    }, this.props.children, a.createElement("input", {
                        ref: preventClickHandlersFromFiring,
                        type: "submit",
                        style: {
                            display: "none"
                        }
                    }))
                }
            };
            (0, l.Z)(Submittable, "propTypes", {
                onSubmit: B().func
            });
            var $ = n(23479),
                V = n(47184),
                O = n(68772);
            let R = (0, M.P1)(e => e.AssetStore.assets, e => e.reduce((e, t) => (null !== t.type || null == t.siteId || t.markedAsDeleted || e.push({
                    fileName: t.origFileName,
                    id: t._id,
                    url: t.cdnUrl
                }), e), []).sort((e, t) => e.fileName.toLowerCase().localeCompare(t.fileName.toLowerCase()))),
                U = (0, M.P1)(e => e.AssetStore.assets, e => {
                    let t = (0, O.gR)(e)("Basic", "placeholder.svg");
                    return t ? t.url : ""
                }),
                SymbolPaneForm = e => {
                    let {
                        name: t,
                        category: n,
                        previewImage: l,
                        symbolNameInvalidMessage: o,
                        symbolCategoryInvalidMessage: r,
                        onChangeName: i,
                        onChangeCategory: s,
                        onChangePreviewImage: m,
                        onSubmit: c
                    } = e, d = (0, C.$G)(), u = (0, L.Yx)(R), g = (0, L.Yx)(U), [b, h] = a.useState(!1), y = a.useMemo(() => {
                        if (null != l) return u.find(e => e.id === l.id)
                    }, [u, l]), E = (0, p.T)("thirdPartyLibrariesAuthoring"), S = a.useCallback(e => {
                        i(e.target.value)
                    }, [i]), v = a.useCallback(e => {
                        h(!0), s(e.target.value)
                    }, [s]), f = a.useCallback(e => {
                        m(e ? {
                            id: e.id,
                            url: e.url
                        } : null)
                    }, [m]);
                    return a.createElement(Submittable, {
                        onSubmit: c
                    }, a.createElement(T.gCW, null, E && a.createElement(A.Z, {
                        small: !0
                    }, "Name"), a.createElement(N.Z, null, a.createElement(D.Z, {
                        placeholder: d("designer.components.manager.edit-component.input-placeholder"),
                        "data-automation-id": "edit-symbol-name-input",
                        defaultValue: t,
                        onChange: S,
                        invalid: !!o,
                        autoFocus: !0
                    })), E && a.createElement(a.Fragment, null, a.createElement(A.Z, {
                        small: !0
                    }, "Category"), a.createElement(N.Z, null, a.createElement(D.Z, {
                        placeholder: "Category",
                        "data-automation-id": "edit-symbol-category-input",
                        defaultValue: n,
                        onChange: v,
                        invalid: !!(b && r)
                    })), a.createElement(A.Z, {
                        small: !0
                    }, "Preview image"), a.createElement(W, null, a.createElement(F, {
                        asset: y,
                        placeholderUrl: g
                    }), a.createElement(AssetSelector, {
                        assets: u,
                        onChange: f,
                        value: y
                    })))))
                },
                W = (0, E.r9)("div")({
                    padding: T.TVs.space[2],
                    gap: T.TVs.space[2],
                    borderWidth: T.TVs.controls.borderWidth,
                    borderStyle: "solid",
                    borderColor: T.TVs.colors.border3,
                    borderRadius: T.TVs.controls.borderRadius,
                    backgroundColor: T.TVs.colors.background4
                }),
                F = (0, E.nU)(e => {
                    let {
                        theme: t,
                        asset: n,
                        placeholderUrl: l
                    } = e;
                    return {
                        maxWidth: "100%",
                        height: "125px",
                        backgroundImage: `url(${n?n.url:l})`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: n ? "contain" : "cover",
                        marginBottom: t.gutters.x8
                    }
                }),
                AssetSelector = e => {
                    let {
                        assets: t,
                        value: n,
                        onChange: l
                    } = e, o = a.useCallback(e => {
                        let n = t.find(t => t.id === e);
                        n && l(n)
                    }, [t, l]);
                    return a.createElement("div", null, a.createElement(V.Ph, {
                        id: "asset-select",
                        menuOffset: {
                            top: -20,
                            left: 0
                        },
                        placeholder: "Select Image...",
                        value: (null == n ? void 0 : n.id) || "",
                        handleChange: o
                    }, t.map(e => a.createElement(V.Wx, {
                        value: e.id,
                        key: e.id
                    }, a.createElement($.Z, null, e.fileName)))))
                },
                EditSymbolPane_noop = () => {},
                G = (0, E.r9)("div")({
                    display: "flex",
                    flexDirection: "column"
                }),
                H = (0, E.r9)("div")({
                    display: "flex"
                }),
                components_EditSymbolPane = e => {
                    let {
                        name: t,
                        category: n,
                        previewImage: l,
                        symbolNameInvalidMessage: o,
                        symbolCategoryInvalidMessage: r,
                        cannotDeleteMessage: i,
                        cannotSaveMessage: s,
                        onChangeName: m,
                        onChangeCategory: c,
                        onChangePreviewImage: d,
                        onSave: u,
                        onDelete: g,
                        onCancel: p
                    } = e, b = (0, C.$G)(), h = i ? x.ZP : Z.Z, y = s ? x.ZP : Z.Z;
                    return a.createElement(S.Z, null, a.createElement(v.Z, null, a.createElement(P, null, a.createElement(k.Z, null, b("designer.components.manager.edit-component.title")))), a.createElement(I.iz, {
                        compact: !0
                    }), a.createElement(v.Z, {
                        "data-automation-id": "edit-symbol-form-container"
                    }, a.createElement(G, null, a.createElement(SymbolPaneForm, {
                        onSubmit: s ? EditSymbolPane_noop : u,
                        name: t,
                        category: n,
                        previewImage: l,
                        symbolNameInvalidMessage: o,
                        symbolCategoryInvalidMessage: r,
                        onChangeName: m,
                        onChangeCategory: c,
                        onChangePreviewImage: d
                    }), a.createElement(I.LZ, null), a.createElement(H, null, a.createElement(h, {
                        placement: "top",
                        error: !0,
                        content: i
                    }, a.createElement(f.ZP, {
                        sizing: "small",
                        danger: !0,
                        disabled: !!i,
                        onClick: g,
                        "data-automation-id": "edit-symbol-remove"
                    }, a.createElement(T.pJl, {
                        size: 12,
                        style: {
                            marginRight: 4
                        }
                    }), "Delete")), a.createElement(I.Z0, null), a.createElement(f.ZP, {
                        sizing: "small",
                        onClick: p,
                        "data-automation-id": "edit-symbol-cancel"
                    }, "Cancel"), a.createElement(y, {
                        placement: "top",
                        error: !0,
                        content: s
                    }, a.createElement(f.ZP, {
                        sizing: "small",
                        primary: !0,
                        disabled: !!s,
                        style: {
                            marginLeft: 4
                        },
                        onClick: u,
                        "data-automation-id": "edit-symbol-save"
                    }, "Save"))))))
                };
            var X = n(69175),
                Y = n(35711),
                q = n(15517),
                J = n(65204),
                Q = n(96299),
                j = n(71057),
                K = n(68779),
                ee = n(61238);
            let CreateSymbolPane_noop = () => {},
                et = (0, E.r9)("div")({
                    display: "flex",
                    flexDirection: "column"
                }),
                en = (0, E.r9)("div")({
                    display: "flex"
                }),
                components_CreateSymbolPane = e => {
                    let {
                        name: t,
                        cannotCreateMessage: n,
                        onChangeName: l,
                        onCreate: o,
                        onCancel: r
                    } = e, i = (0, C.$G)(), [s, m] = a.useState(!1), c = a.useCallback(e => {
                        l(e.target.value), m(!0)
                    }, [l]), d = n ? x.ZP : Z.Z, u = !!n || !t || 0 === t.trim().length;
                    return a.createElement(S.Z, null, a.createElement(v.Z, null, a.createElement(P, null, a.createElement(k.Z, null, i("designer.components.manager.create-component.title")))), a.createElement(I.iz, {
                        compact: !0
                    }), a.createElement(v.Z, null, a.createElement(et, null, a.createElement(Submittable, {
                        onSubmit: u ? CreateSymbolPane_noop : o
                    }, a.createElement(N.Z, null, a.createElement(D.Z, {
                        "data-automation-id": "create-symbol-name-input",
                        placeholder: i("designer.components.manager.create-component.input-placeholder"),
                        defaultValue: t,
                        onChange: c,
                        invalid: !!(s && n),
                        autoFocus: !0
                    }))), a.createElement(I.LZ, null), a.createElement(en, null, a.createElement(I.Z0, null), a.createElement(f.ZP, {
                        sizing: "small",
                        onClick: r,
                        "data-automation-id": "create-symbol-cancel"
                    }, i("designer.components.manager.create-component.cancel-action")), a.createElement(d, {
                        placement: "top",
                        error: !0,
                        content: n
                    }, a.createElement(f.ZP, {
                        sizing: "small",
                        primary: !0,
                        disabled: u,
                        style: {
                            marginLeft: 4
                        },
                        onClick: o,
                        "data-automation-id": "create-symbol-save"
                    }, i("designer.components.manager.create-component.create-action")))))))
                };
            var el = n(25137);
            let NoComponentsEmptyState = e => {
                    let {
                        titleMessage: t,
                        bodyMessage1: n,
                        bodyMessage2: l
                    } = e;
                    return a.createElement(T.G7x, {
                        margin: "$3"
                    }, a.createElement(T.ubH, {
                        "data-automation-id": "no-symbols-defined",
                        icon: T.deI,
                        title: t
                    }, a.createElement(T.BqV, null, a.createElement(T.gCW, null, a.createElement(T.xvT, null, n), a.createElement(T.izJ, null), a.createElement(T.xvT, {
                        dangerouslySetInnerHTML: l
                    })))))
                },
                components_NoSymbolsDefinedMessage = e => {
                    let {
                        isOSX: t
                    } = e, n = (0, C.$G)(), l = n("designer.components.manager.empty-state.no-components-title"), o = n("designer.components.manager.empty-state.components-description"), r = {
                        __html: n("designer.components.manager.empty-state.components-shortcut", {
                            shortcutText: `${t?"Command + Shift + A":"Ctrl + Shift + A"}`
                        })
                    };
                    return a.createElement(NoComponentsEmptyState, {
                        titleMessage: l,
                        bodyMessage1: o,
                        bodyMessage2: r
                    })
                };
            var ea = n(77167),
                eo = n(38945),
                er = n(97777),
                ei = n(63297),
                es = n.n(ei),
                em = n(38567),
                ec = n(95806),
                ed = n(71211),
                eu = n(94777),
                eg = n(98512),
                ep = n(75229);
            let eb = (0, M.P1)(e => e.AbstractNodeStore, e => e.DesignerStore, (e, t) => {
                    let n = (0, em.BB)(e)(t.componentInstanceCounts),
                        l = (0, em.uP)(e).toArray().filter(e => !(0, eu.at)(e)).map(e => ({
                            id: e.get("id"),
                            name: e.getIn(["data", "sym", "name"]),
                            instanceCount: n[e.get("id")]
                        }));
                    return es()(l)
                }),
                getSymbolName = e => e.getIn(["data", "sym", "name"]),
                symbolHasName = e => t => getSymbolName(t) === e,
                isNameTaken = e => {
                    let {
                        symbols: t,
                        name: n
                    } = e;
                    return t.some(symbolHasName(n))
                },
                getSymbolNameInvalidMessage = (e, t, n) => {
                    let l;
                    let a = (0, em.uP)(n),
                        o = t ? a.filter(e => e.get("id") !== t) : a;
                    if (0 === e.trim().length) l = "Please enter a name";
                    else if (isNameTaken({
                            symbols: o,
                            name: e.trim()
                        })) {
                        let {
                            t: e
                        } = C.designerTranslation;
                        l = e("designer.components.manager.edit-component.prevent-component-save")
                    } else l = null;
                    return l
                },
                getSymbolCategoryInvalidMessage = e => 0 === e.trim().length ? "Please enter a category" : null,
                getSymbolPreviewImageInvalidMessage = e => null == e ? "Please provide a preview image" : null,
                getCannotDeleteMessage = (e, t, n) => {
                    if (null == e) return null;
                    let l = (0, ep.AE)(t.get("root"), e),
                        a = (0, em.BB)(t)(n.componentInstanceCounts);
                    if (a[l.id] > 0) {
                        let {
                            t: e
                        } = C.designerTranslation;
                        return e("designer.components.manager.edit-component.prevent-component-deletion")
                    }
                    return null
                },
                eh = (0, M.P1)(e => e.SiteDataStore, e => e.SymbolUiStore, e => e.AbstractNodeStore, e => e.StyleBlockStore, e => e.UiNodeStore, e => e.DesignerStore, e => e.BetaFeatureStore.thirdPartyLibrariesAuthoring, e => (0, eg.Jo)("canCreateSymbols")(e), e => (0, eg.Jo)("canModifyComponentsOnCanvas")(e), eb, ec.vZ, ec.uW, ed.qN, (e, t, n, l, a, o, r, i, s, m, c, d, u) => {
                    let {
                        scrollTop: g,
                        symbolBeingEditedId: p,
                        symbolBeingCreatedReferenceNodeId: b,
                        symbolName: h,
                        symbolCategory: y,
                        symbolPreviewImage: E
                    } = t, {
                        selectedNodeNativeId: C
                    } = a, S = getSymbolNameInvalidMessage(h || "", p, n), v = r && p ? getSymbolCategoryInvalidMessage(y || "") : null, f = r && p ? getSymbolPreviewImageInvalidMessage(E) : null, k = S || v || f, I = getCannotDeleteMessage(p, n, o);
                    return {
                        abstractNodeState: n,
                        uiNodeState: a,
                        designerState: o,
                        selectedNodeNativeId: C,
                        styleBlockState: l,
                        scrollTop: g,
                        cannotCreateMessage: k,
                        cannotSaveMessage: k,
                        cannotDeleteMessage: I,
                        symbolBeingEditedId: p,
                        symbolBeingCreatedReferenceNodeId: b,
                        symbolName: h,
                        symbolCategory: y,
                        symbolPreviewImage: E,
                        symbolNameInvalidMessage: S,
                        symbolCategoryInvalidMessage: v,
                        symbolPreviewImageInvalidMessage: f,
                        symbols: m,
                        validateSymbolCreation: c,
                        canCreateSymbol: d,
                        hasPermissionsToCreateSymbols: i,
                        hasPermissionsToModifySymbols: s,
                        plugins: u
                    }
                });
            var ey = n(70962),
                eE = n(19662),
                eC = n(74514),
                eS = n(63301),
                ev = n(7640),
                ef = n(57381),
                ek = n(53187),
                eI = n(35155),
                ew = n(98866),
                eP = n(1199),
                ex = n(47730),
                eZ = n(42983),
                eM = n(17015);
            let eD = (0, M.P1)(e => e.DesignerStore.localLibrary.manifest.exports, e => e.DesignerStore.components, ed.qN, eM.Aq),
                selectPublishingState = e => {
                    let {
                        DesignerStore: t
                    } = e;
                    return t.localLibrary.publishingState
                };
            var eN = n(52229),
                eT = n(78332);
            let eL = (0, E.r9)("div")({
                display: "flex",
                alignItems: "center",
                gap: T.TVs.space[2]
            });

            function DialogTitle() {
                return a.createElement(eL, null, "Submit for review ", a.createElement(eT.Z, null))
            }
            let eA = (0, E.zo)(T.szr)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        marginTop: "2px",
                        color: t.colors.accentPrimary,
                        height: 14,
                        width: 14
                    }
                }),
                e_ = (0, E.r9)("div")({
                    display: "flex",
                    gap: T.TVs.space[2]
                });

            function ComponentsWillBeUnlinkedNote() {
                return a.createElement(T.jCS, {
                    colorVariant: "primary",
                    hasIcon: !1
                }, a.createElement(e_, null, a.createElement(eA, null), a.createElement("span", null, "Components in your final Marketplace library will be unlinked and converted into elements.")))
            }

            function NameLibraryDialog(e) {
                let {
                    onSubmit: t,
                    onCancel: n
                } = e, l = (0, L.I0)(), o = (0, L.Yx)(e => e.DesignerStore.localLibrary);
                return a.createElement(eN.ms, {
                    title: a.createElement(DialogTitle, null),
                    content: a.createElement(ComponentsWillBeUnlinkedNote, null),
                    prompts: [{
                        label: "Library name",
                        defaultValue: o.manifest.displayName,
                        validate: e => e.length > 0
                    }],
                    submit: {
                        label: "Continue",
                        intent: "primary"
                    },
                    onSubmit: e => {
                        let [n] = e;
                        l({
                            type: ef.WaQ,
                            payload: n
                        }), t()
                    },
                    onCancel: n
                })
            }
            var eB = n(52198);

            function LibraryLayoutsPreview(e) {
                let {
                    layouts: t,
                    description: n
                } = e;
                return a.createElement(ez, null, n, a.createElement(e$, null, a.createElement(T.gCW, {
                    spacing: 4
                }, t.map((e, t) => a.createElement(LayoutPreview, {
                    layout: e,
                    key: t
                })))))
            }
            let ez = (0, E.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        gap: t.gutters.x16
                    }
                }),
                e$ = (0, E.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        gap: t.gutters.x16,
                        maxHeight: "300px",
                        overflowY: "scroll"
                    }
                });

            function LayoutPreview(e) {
                let {
                    layout: t
                } = e, n = t.layoutMetadata.displayName, l = t.layoutMetadata.category[0], o = t.layoutMetadata.previewImage.url, r = t.errors ? t.errors : [], i = l ? a.createElement(A.Z, {
                    small: !0,
                    secondary: !0
                }, l) : a.createElement(eV, {
                    small: !0
                }, "Missing category");
                return a.createElement(T.Ugi, {
                    spacing: 2,
                    isFullWidth: !0,
                    align: "start"
                }, a.createElement(eU, {
                    previewUrl: o
                }, o ? null : a.createElement(MissingPreview, null)), a.createElement(T.gCW, {
                    spacing: 0
                }, a.createElement(A.Z, {
                    small: !0
                }, n), i, r.length ? r.map(e => a.createElement(eO, {
                    small: !0,
                    key: e
                }, e)) : null))
            }
            let MissingPreview = () => a.createElement(eR, null, a.createElement(eB.Z, null), a.createElement(A.Z, {
                    small: !0
                }, "Missing Preview")),
                eV = (0, E.zo)(A.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        color: t.colors.dangerAccent
                    }
                }),
                eO = (0, E.zo)(A.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        color: t.colors.dangerAccent
                    }
                }),
                eR = (0, E.r9)("div")({
                    color: T.TVs.colors.redText,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: T.TVs.space[2],
                    height: "100%"
                }),
                eU = (0, E.nU)(e => {
                    let {
                        theme: t,
                        previewUrl: n
                    } = e;
                    return {
                        flexShrink: 0,
                        backgroundImage: `url(${n})`,
                        backgroundPosition: "center center",
                        backgroundColor: t.colors.backgroundDeepAlt,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundOrigin: "content-box",
                        width: "145px",
                        height: "78px",
                        padding: t.gutters.x4
                    }
                }),
                eW = (0, E.zo)(f.ZP)({
                    marginRight: "auto"
                });

            function PreviewLayoutsDialog(e) {
                let {
                    layouts: t,
                    isPublishing: n,
                    onSubmit: l,
                    onCancel: o,
                    onBack: r
                } = e, i = a.createElement(A.Z, {
                    small: !0
                }, "Your Marketplace library contains ", a.createElement("b", null, t.length), " ", (0, J._6)(t.length, "layout"), ". Please review the details below to make sure everything looks good.");
                return a.createElement(eN.Vq, {
                    title: a.createElement(DialogTitle, null),
                    onClose: o,
                    allowCancel: !n,
                    content: a.createElement(LibraryLayoutsPreview, {
                        layouts: t,
                        description: i
                    }),
                    buttons: a.createElement(a.Fragment, null, a.createElement(eW, {
                        sizing: "large",
                        onClick: r,
                        disabled: n
                    }, "Back"), a.createElement(eN.Lw, {
                        onClick: o,
                        disabled: n
                    }, "Cancel"), a.createElement(eN.Mm, {
                        primary: !0,
                        onClick: l,
                        disabled: n
                    }, n ? "Publishing..." : "Submit"))
                })
            }

            function PreviewInvalidLayoutsDialog(e) {
                let {
                    layouts: t,
                    onClose: n
                } = e, l = a.createElement(A.Z, {
                    small: !0
                }, "It looks like some layouts in your library are missing required information. Add the required information in the layouts below before submitting for review.");
                return a.createElement(eN.Vq, {
                    title: a.createElement(DialogTitle, null),
                    onClose: n,
                    content: a.createElement(LibraryLayoutsPreview, {
                        layouts: t,
                        description: l
                    }),
                    buttons: a.createElement(eN.Mm, {
                        primary: !0,
                        onClick: n
                    }, "Got it")
                })
            }

            function PublishingSuccessDialog(e) {
                let {
                    onSubmit: t
                } = e;
                return a.createElement(eN.aR, {
                    title: a.createElement(DialogTitle, null),
                    content: "Congratulations, you have successfully submitted your library for review! You will be notified via email as soon as we review the library.",
                    submit: {
                        label: "Got it",
                        intent: "primary"
                    },
                    onSubmit: t
                })
            }

            function PublishingFailureDialog(e) {
                let {
                    onSubmit: t,
                    errorMessage: n
                } = e;
                return a.createElement(eN.aR, {
                    title: a.createElement(DialogTitle, null),
                    content: n || "Something went wrong, please try again later.",
                    submit: {
                        label: "Got it",
                        intent: "primary"
                    },
                    onSubmit: t
                })
            }

            function PublishLibraryDialogRouter(e) {
                let {
                    onCancel: t,
                    onSecondary: n,
                    onSubmit: l
                } = e, o = (0, L.I0)(), r = (0, L.Yx)(eD), i = (0, L.Yx)(selectPublishingState), [s, m] = a.useState(getInitialRoute(r)), c = a.useCallback(() => {
                    o({
                        type: ef.$VJ
                    }), l()
                }, [o, l]);
                if ("succeeded" === i.status) return a.createElement(PublishingSuccessDialog, {
                    onSubmit: c
                });
                if ("failed" === i.status) return a.createElement(PublishingFailureDialog, {
                    errorMessage: i.errorMessage,
                    onSubmit: c
                });
                if ("previewInvalidLayouts" === s) return a.createElement(PreviewInvalidLayoutsDialog, {
                    layouts: r.invalid,
                    onClose: t
                });
                if ("nameLibrary" === s) return a.createElement(NameLibraryDialog, {
                    onCancel: t,
                    onSecondary: n,
                    onSubmit: () => {
                        m("previewLayouts")
                    }
                });
                if ("previewLayouts" === s) {
                    let e = "requested" === i.status;
                    return a.createElement(PreviewLayoutsDialog, {
                        layouts: r.valid,
                        isPublishing: e,
                        onCancel: t,
                        onSubmit: () => {
                            o({
                                type: ef.rlp
                            })
                        },
                        onBack: () => {
                            m("nameLibrary")
                        }
                    })
                }
                return null
            }
            let getInitialRoute = e => e.invalid.length ? "previewInvalidLayouts" : "nameLibrary";
            var eF = n(2605);
            let eG = (0, E.r9)($.Z)({
                    color: "$textActive"
                }),
                eH = (0, c.nC)(eh)(class extends a.Component {
                    constructor() {
                        super(...arguments), (0, l.Z)(this, "handleScroll", e => {
                            let {
                                scrollTop: t
                            } = e;
                            this.props.flux.dispatch((0, ex.AR)(t))
                        }), (0, l.Z)(this, "hideLeftPanel", () => {
                            this.props.flux.dispatch((0, m.sX)("left"))
                        }), (0, l.Z)(this, "hideAllMiniSettings", () => {
                            this.props.flux.__DEPRECATED__getCreators("UiActionCreators").__DEPRECATED__hideAllMiniSettings()
                        }), (0, l.Z)(this, "closeLeftSidebar", () => {
                            this.props.flux.dispatch((0, m.sX)("left"))
                        }), (0, l.Z)(this, "handleClickSymbolItem", e => {
                            let {
                                id: t
                            } = e;
                            this.hideAllMiniSettings(), this.closeLeftSidebar(), (0, ey.s)({
                                flux: this.props.flux,
                                dropImmediately: !0,
                                item: {
                                    type: "symbol",
                                    id: t
                                },
                                analyticData: {
                                    source: "symbol-panel",
                                    action: "click"
                                },
                                plugins: this.props.plugins
                            })
                        }), (0, l.Z)(this, "handleDragStartSymbolItem", e => {
                            this.hideAllMiniSettings(), this.closeLeftSidebar(), (0, ey.s)({
                                flux: this.props.flux,
                                dropImmediately: !1,
                                item: {
                                    type: "symbol",
                                    id: e
                                },
                                analyticData: {
                                    source: "symbol-panel",
                                    action: "drag"
                                },
                                plugins: this.props.plugins
                            })
                        }), (0, l.Z)(this, "handleClickSymbolItemEditIcon", e => {
                            this.props.flux.dispatch((0, ex.XX)(e))
                        }), (0, l.Z)(this, "handleCancelCreateSymbol", () => {
                            this.props.flux.dispatch((0, ex.P0)())
                        }), (0, l.Z)(this, "handleCancelEditSymbol", () => {
                            this.props.flux.dispatch((0, ex.ki)())
                        }), (0, l.Z)(this, "handleChangeSymbolName", e => {
                            this.props.flux.dispatch((0, ex.ZH)(e))
                        }), (0, l.Z)(this, "handleChangeSymbolCategory", e => {
                            this.props.flux.dispatch((0, ex.Lw)(e))
                        }), (0, l.Z)(this, "handleChangeSymbolPreviewImage", e => {
                            this.props.flux.dispatch((0, ex.jf)(e))
                        }), (0, l.Z)(this, "handleCreateSymbol", () => {
                            let {
                                cannotCreateMessage: e,
                                abstractNodeState: t,
                                designerState: n
                            } = this.props;
                            if (e) return;
                            let {
                                symbolBeingCreatedReferenceNodeId: l,
                                symbolName: a,
                                validateSymbolCreation: o
                            } = this.props;
                            if (!a || 0 === a.trim().length) return;
                            let r = (0, eE.Yr)(t, l).map(o).chain(eC.CO).map(e => {
                                let l = (0, em.Dh)({
                                        abstractNodeState: t,
                                        designerState: n
                                    })(e)((0, ev.pW)()).setIn(["data", "sym", "name"], a.trim()).setIn(["data", "sym", "root"], !0),
                                    o = (0, eZ.T5)(l.id);
                                return {
                                    referenceNode: e,
                                    symbolNode: l,
                                    symbolInstance: o
                                }
                            });
                            eS.wY(void 0)(e => this.props.flux.dispatch((0, eP.R3)(e)))(r)
                        }), (0, l.Z)(this, "handleClickNewSymbolCreator", () => {
                            this.props.selectedNodeNativeId && this.props.flux.dispatch((0, ex.zy)({
                                selectedNodeNativeId: (0, y.Q0)(this.props.selectedNodeNativeId),
                                location: "symbol-panel"
                            }))
                        }), (0, l.Z)(this, "handleDeleteSymbol", () => {
                            let {
                                symbolBeingEditedId: e,
                                styleBlockState: t,
                                abstractNodeState: n,
                                flux: l
                            } = this.props;
                            this.props.flux.__DEPRECATED__getCreators("__DEPRECATED__ConfirmActionCreators").confirmDeleteSymbol().then(() => {
                                l.dispatch((0, eP.KB)({
                                    id: e,
                                    styleBlockState: t,
                                    abstractNodeState: n
                                }))
                            }).catch(e => {
                                e !== ef.qBO && console.warn(e)
                            })
                        }), (0, l.Z)(this, "handleSaveSymbol", () => {
                            let {
                                symbolBeingEditedId: e,
                                symbolName: t,
                                symbolCategory: n,
                                symbolPreviewImage: l,
                                flux: a
                            } = this.props;
                            null != t && null != e && a.dispatch((0, eP.x_)({
                                id: e,
                                newName: t,
                                newCategory: n,
                                newPreviewImage: l
                            }))
                        }), (0, l.Z)(this, "handleOpenDevLink", () => {
                            this.props.flux.dispatch((0, eF.Oi)())
                        })
                    }
                    render() {
                        let e = {
                            hidePanel: this.hideLeftPanel,
                            onClickSymbolItem: this.handleClickSymbolItem,
                            onDragStartSymbolItem: this.handleDragStartSymbolItem,
                            onClickSymbolItemEditIcon: this.handleClickSymbolItemEditIcon,
                            onCancelCreateSymbol: this.handleCancelCreateSymbol,
                            onCancelEditSymbol: this.handleCancelEditSymbol,
                            onChangeSymbolName: this.handleChangeSymbolName,
                            onChangeSymbolCategory: this.handleChangeSymbolCategory,
                            onChangeSymbolPreviewImage: this.handleChangeSymbolPreviewImage,
                            onCreateSymbol: this.handleCreateSymbol,
                            onClickNewSymbolCreator: this.handleClickNewSymbolCreator,
                            onDeleteSymbol: this.handleDeleteSymbol,
                            onSaveSymbol: this.handleSaveSymbol,
                            onScroll: this.handleScroll,
                            onOpenDevLink: this.handleOpenDevLink,
                            abstractNodeState: this.props.abstractNodeState,
                            canCreateSymbol: this.props.canCreateSymbol,
                            cannotCreateMessage: this.props.cannotCreateMessage,
                            cannotDeleteMessage: this.props.cannotDeleteMessage,
                            cannotSaveMessage: this.props.cannotSaveMessage,
                            hasPermissionsToCreateSymbols: this.props.hasPermissionsToCreateSymbols,
                            hasPermissionsToModifySymbols: this.props.hasPermissionsToModifySymbols,
                            scrollTop: this.props.scrollTop,
                            selectedNodeNativeId: this.props.selectedNodeNativeId,
                            symbolBeingCreatedReferenceNodeId: this.props.symbolBeingCreatedReferenceNodeId,
                            symbolBeingEditedId: this.props.symbolBeingEditedId,
                            symbolCategory: this.props.symbolCategory,
                            symbolCategoryInvalidMessage: this.props.symbolCategoryInvalidMessage,
                            symbolPreviewImageInvalidMessage: this.props.symbolPreviewImageInvalidMessage,
                            symbolName: this.props.symbolName,
                            symbolNameInvalidMessage: this.props.symbolNameInvalidMessage,
                            symbolPreviewImage: this.props.symbolPreviewImage,
                            symbols: this.props.symbols
                        };
                        return a.createElement(SymbolsManager_SymbolsManager, e)
                    }
                }),
                eX = eH,
                eY = {
                    borderTop: 0,
                    borderBottom: 0
                },
                eq = {
                    borderTop: 0
                },
                getSearchableText = e => e.name,
                eJ = (0, E.nU)(e => {
                    let {
                        theme: t,
                        viewportWidth: n
                    } = e;
                    return {
                        width: n - 2 * t.gutters.wide,
                        color: t.colors.foreground
                    }
                }),
                getSymbolItemHeight = e => 5 * e.gutters.wide,
                eQ = (0, E.nU)(e => {
                    let {
                        theme: t,
                        hover: n,
                        dragging: l
                    } = e;
                    return {
                        ...(0, Y.b)(t),
                        [T.JO$.__experimentalTokens.color]: n ? E.TV.colors.textActive : E.TV.colors.textSecondary,
                        display: "flex",
                        alignItems: "center",
                        cursor: l ? "-webkit-grabbing" : "-webkit-grab",
                        height: getSymbolItemHeight(t),
                        padding: t.gutters.wide,
                        boxSizing: "border-box",
                        backgroundColor: n && !l ? t.list.itemBackgroundHover : t.colors.background
                    }
                }),
                ej = (0, E.r9)("div")({
                    [T.JO$.__experimentalTokens.color]: E.TV.colors.textSecondary,
                    "&:hover": {
                        [T.JO$.__experimentalTokens.color]: E.TV.colors.textActive
                    }
                }),
                eK = (0, E.r9)("div")({
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    overflow: "hidden",
                    ...w.QX,
                    cursor: "inherit"
                }),
                getAutomationId = e => `symbol-panel-${(0,J.lV)(e)||""}`,
                e0 = (0, E.r9)("div")({
                    color: "transparent",
                    ...w.QX,
                    cursor: "inherit"
                }),
                e1 = a.memo(e => {
                    let {
                        name: t,
                        instanceCount: n,
                        hover: l,
                        dragging: o,
                        onMouseDown: r,
                        onMouseUp: i,
                        onMouseMove: s,
                        onMouseEnter: m,
                        onMouseLeave: c,
                        onClick: d,
                        onEditIconClick: u,
                        hasPermissionsToModifySymbols: g
                    } = e;
                    return a.createElement(eQ, {
                        hover: l,
                        dragging: o,
                        onContextMenu: e => {
                            e.preventDefault(), u(e)
                        },
                        onMouseDown: r,
                        onMouseUp: i,
                        onMouseMove: s,
                        onMouseEnter: m,
                        onMouseLeave: c,
                        "data-automation-id": getAutomationId(t),
                        onClick: d
                    }, a.createElement(T.G7x, {
                        flexShrink: 0
                    }, a.createElement(T.SLC, null)), a.createElement(I.LZ, {
                        wide: !0
                    }), a.createElement(eK, null, a.createElement(eG, {
                        "data-automation-id": (getAutomationId(t) || "unnamed-symbol") + "-name"
                    }, t || a.createElement(e0, null, "unnamed")), a.createElement($.Z, null, a.createElement(Q.xv, {
                        "data-automation-id": (getAutomationId(t) || "unnamed-symbol") + "-count"
                    }, n, " ", 1 === n ? "instance" : "instances"))), l && !o && a.createElement(I.LZ, {
                        wide: !0
                    }), l && !o && g && a.createElement(ej, null, a.createElement(f.ZP, {
                        sizing: "small",
                        structure: "ghost",
                        icon: !0,
                        onClick: u,
                        "data-automation-id": getAutomationId(`${t}-edit`)
                    }, a.createElement(T.dY8, null))))
                }),
                e2 = (0, ee.memoize)(function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) n[l - 1] = arguments[l];
                    return e.bind(null, ...n)
                }),
                e9 = (0, K.F)(e1),
                e7 = (0, E.r9)("div")({
                    height: "100%"
                }),
                e5 = (0, E.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        borderBottom: `${t.control.borderWidth}px solid ${t.colors.border}`,
                        borderLeft: 0,
                        borderRight: 0
                    }
                }, {
                    noBottomBorder: {
                        borderBottom: 0
                    }
                }),
                e3 = a.memo(e => {
                    let {
                        children: t,
                        viewportDimensions: n,
                        noBottomBorder: l
                    } = e;
                    return a.createElement(ek.l_, {
                        box: n
                    }, a.createElement(e7, null, a.createElement(e5, {
                        noBottomBorder: l
                    }, t)))
                }),
                e8 = a.memo(e => {
                    let {
                        hover: t,
                        onMouseEnter: n,
                        onMouseLeave: l,
                        isSymbolCreationAllowed: o,
                        onClick: i,
                        isOSX: s
                    } = e, m = (0, E.EW)(), c = (0, C.$G)(), d = o ? Z.Z : x.ZP, u = c("designer.components.manager.disabled-tooltip", {
                        command: s ? "⌘⇧A" : "Ctrl Shift A"
                    });
                    return a.createElement(d, {
                        alternate: m,
                        content: u,
                        placement: "bottom"
                    }, a.createElement(el.Z, {
                        disabled: !o,
                        onClick: o ? i : r(),
                        hover: t,
                        onMouseEnter: n,
                        onMouseLeave: l,
                        iconContent: a.createElement(T.dtP, null),
                        isDefaultIcon: !0,
                        iconSize: "16px",
                        mainContent: c("designer.components.manager.create-new-component"),
                        "data-automation-id": "symbols-tab-create"
                    }))
                }),
                e4 = a.memo(e => {
                    let {
                        hover: t,
                        onMouseEnter: n,
                        onMouseLeave: l,
                        isSymbolCreationAllowed: o,
                        onClick: i,
                        isOSX: s
                    } = e, m = (0, C.$G)(), c = o ? Z.Z : x.ZP, d = m("designer.components.manager.disabled-tooltip", {
                        command: s ? "⌘⇧A" : "Ctrl Shift A"
                    });
                    return a.createElement(c, {
                        content: d,
                        placement: "bottom"
                    }, a.createElement(te, {
                        disabled: !o,
                        onClick: o ? i : r(),
                        hover: t,
                        onMouseEnter: n,
                        onMouseLeave: l,
                        "data-automation-id": "symbols-tab-create",
                        sizing: "large"
                    }, a.createElement(T.Ugi, null, a.createElement(T.dtP, null), a.createElement("span", null, m("designer.components.manager.create-new-component")))))
                }),
                e6 = (0, E.zo)(f.ZP)({
                    flexShrink: 0
                });

            function PublishButton(e) {
                let t = function() {
                    let e = a.useCallback(async () => {
                        await (0, eN.vC)(PublishLibraryDialogRouter)
                    }, []);
                    return e
                }();
                return a.createElement(e6, {
                    varianPublishButtonView: "outline",
                    "data-automation-id": "publish-library",
                    sizing: "large",
                    icon: !0,
                    compact: !0,
                    onClick: t
                }, a.createElement(T.rG2, null))
            }
            let te = (0, E.zo)(f.ZP)(() => ({
                    width: "100%"
                })),
                tt = (0, E.r9)("div")({
                    padding: "$2",
                    paddingTop: 0,
                    backgroundColor: "$background1"
                }),
                tn = (0, E.r9)("div")({
                    width: "100%",
                    borderBottom: "$border1"
                }),
                tl = (0, E.zo)(q.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        width: t.gutters.x20,
                        height: t.gutters.x20
                    }
                }),
                DevLinkAction = e => {
                    let {
                        tooltip: t,
                        onClick: n
                    } = e;
                    return a.createElement(X.Z, {
                        content: t
                    }, a.createElement(f.ZP, {
                        sizing: "small",
                        structure: "ghost",
                        icon: !0,
                        style: {
                            marginRight: 4
                        },
                        onClick: n,
                        "data-automation-id": "export-devlink",
                        "aria-label": t
                    }, a.createElement(tl, null)))
                },
                ta = a.memo(e => {
                    let {
                        symbols: t,
                        isOSX: n,
                        symbolBeingEditedId: l,
                        symbolIsBeingCreated: o,
                        cannotDeleteMessage: i,
                        cannotSaveMessage: s,
                        onCancelEditSymbol: m,
                        onDeleteSymbol: c,
                        onSaveSymbol: d,
                        symbolNameInput: u = "",
                        symbolCategoryInput: y = "",
                        symbolPreviewImageInput: E = null,
                        symbolNameInvalidMessage: S,
                        symbolCategoryInvalidMessage: v,
                        symbolPreviewImageInvalidMessage: f,
                        onChangeSymbolName: k,
                        onChangeSymbolCategory: I,
                        onChangeSymbolPreviewImage: w,
                        hasPermissionsToCreateSymbols: P,
                        hasPermissionsToModifySymbols: x,
                        isSymbolCreationAllowed: Z,
                        onClickNewSymbolCreator: M,
                        cannotCreateMessage: D,
                        onCancelCreateSymbol: L,
                        onCreateSymbol: A,
                        onClickSymbolItem: _,
                        onClickSymbolItemEditIcon: B,
                        onDragStartSymbolItem: z,
                        viewportWidth: $,
                        viewportHeight: V,
                        viewportTop: O,
                        viewportLeft: R
                    } = e, U = (0, p.T)("thirdPartyLibrariesAuthoring"), W = (0, C.$G)(), [F, {
                        focus: G,
                        preselected: H,
                        query: X
                    }, {
                        onKeyDown: Y,
                        onChange: q,
                        onFocus: J,
                        onBlur: Q,
                        clear: K
                    }] = (0, g.Z)({
                        items: t,
                        getSearchableText,
                        onSelectChange: _
                    }), ee = F.map(e => {
                        let {
                            match: t,
                            actions: n
                        } = e, {
                            id: o,
                            name: r,
                            instanceCount: g
                        } = t, p = l === o;
                        return x ? a.createElement(b.Z, {
                            key: o,
                            open: p,
                            onMaskClick: m,
                            content: a.createElement(eJ, {
                                viewportWidth: $
                            }, a.createElement(h.Z, {
                                onEscape: m
                            }, a.createElement(components_EditSymbolPane, {
                                cannotDeleteMessage: i,
                                cannotSaveMessage: s,
                                name: u,
                                category: y,
                                previewImage: E,
                                symbolNameInvalidMessage: S,
                                symbolCategoryInvalidMessage: v,
                                symbolPreviewImageInvalidMessage: f,
                                onCancel: m,
                                onChangeName: k,
                                onChangeCategory: I,
                                onChangePreviewImage: w,
                                onDelete: c,
                                onSave: d
                            })))
                        }, a.createElement("div", {
                            key: o,
                            onMouseOver: n.preselect
                        }, a.createElement(e9, {
                            hover: H === t,
                            threshold: j.O$,
                            name: p ? u.trim() : r,
                            instanceCount: g,
                            onClick: n.select,
                            onEditIconClick: e2(B, o),
                            onDragStart: e2(z, o),
                            hasPermissionsToModifySymbols: x
                        }))) : a.createElement("div", {
                            key: o,
                            onMouseOver: n.preselect
                        }, a.createElement(e9, {
                            hover: H === t,
                            threshold: j.O$,
                            name: p ? u.trim() : r,
                            instanceCount: g,
                            onClick: n.select,
                            onEditIconClick: e2(B, o),
                            onDragStart: e2(z, o),
                            hasPermissionsToModifySymbols: x
                        }))
                    });
                    P && o && (ee = [a.createElement(b.Z, {
                        key: "item-being-added",
                        open: !0,
                        onMaskClick: L,
                        content: a.createElement(eJ, {
                            viewportWidth: $
                        }, a.createElement(h.Z, {
                            onEscape: L
                        }, a.createElement(components_CreateSymbolPane, {
                            cannotCreateMessage: D,
                            name: u,
                            onCancel: L,
                            onChangeName: k,
                            onCreate: A
                        })))
                    }, a.createElement(N.Z, null, a.createElement(e9, {
                        name: u,
                        instanceCount: 1,
                        onDragStart: r()
                    }))), ...ee]);
                    let et = {
                        width: $,
                        height: V,
                        top: O,
                        left: R
                    };
                    return 0 === t.length && 0 === ee.length ? a.createElement(e3, {
                        viewportDimensions: et,
                        noBottomBorder: !0
                    }, P && a.createElement(N.Z, null, U ? a.createElement(tt, null, a.createElement(e4, {
                        isSymbolCreationAllowed: Z,
                        onClick: M,
                        isOSX: n
                    })) : a.createElement(e8, {
                        isSymbolCreationAllowed: Z,
                        onClick: M,
                        isOSX: n
                    })), U && a.createElement(tn, null), a.createElement(components_NoSymbolsDefinedMessage, {
                        isOSX: n
                    })) : a.createElement(e3, {
                        viewportDimensions: et,
                        noBottomBorder: 0 === ee.length
                    }, a.createElement(ea.C_, null), a.createElement(ea.im, {
                        style: U ? eY : eq
                    }, X && a.createElement(N.Z, null, a.createElement(ea.Tw, {
                        onClick: K
                    })), a.createElement(ea.W1, {
                        focus: G
                    }), a.createElement(N.Z, null, a.createElement(ea.II, {
                        onFocus: J,
                        onBlur: Q,
                        focus: G,
                        value: X,
                        onChange: q,
                        onKeyDown: Y,
                        placeholder: W("designer.components.manager.search-components")
                    }))), !o && "" === X.trim() && P && (U ? a.createElement(tt, null, a.createElement(T.Ugi, {
                        justify: "space-between"
                    }, a.createElement(N.Z, null, a.createElement(e4, {
                        isSymbolCreationAllowed: Z,
                        onClick: M,
                        isOSX: n
                    })), a.createElement(PublishButton, null))) : a.createElement(N.Z, null, a.createElement(e8, {
                        isSymbolCreationAllowed: Z,
                        onClick: M,
                        isOSX: n
                    }))), U && a.createElement(tn, null), ee.length > 0 ? a.createElement(eo.Z, {
                        columnCount: 1,
                        items: ee
                    }) : a.createElement(ea.X6, null, "No matching components"))
                }),
                to = (0, E.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        width: "100%",
                        flexGrow: 1,
                        maxHeight: "100%",
                        overflow: "hidden",
                        backgroundColor: t.colors.background,
                        boxSizing: "border-box"
                    }
                }),
                SymbolsManager_SymbolsManager = e => {
                    let {
                        symbols: t,
                        symbolBeingEditedId: n,
                        symbolBeingCreatedReferenceNodeId: l,
                        abstractNodeState: o,
                        selectedNodeNativeId: r,
                        cannotCreateMessage: i,
                        cannotDeleteMessage: m,
                        cannotSaveMessage: c,
                        symbolName: g,
                        symbolCategory: b,
                        symbolPreviewImage: h,
                        symbolNameInvalidMessage: S,
                        symbolCategoryInvalidMessage: v,
                        symbolPreviewImageInvalidMessage: f,
                        scrollTop: k,
                        canCreateSymbol: I,
                        hasPermissionsToCreateSymbols: w,
                        hasPermissionsToModifySymbols: P,
                        onScroll: x,
                        hidePanel: Z,
                        onClickSymbolItem: M,
                        onDragStartSymbolItem: D,
                        onClickSymbolItemEditIcon: N,
                        onCancelCreateSymbol: T,
                        onCancelEditSymbol: L,
                        onChangeSymbolName: A,
                        onChangeSymbolCategory: _,
                        onChangeSymbolPreviewImage: B,
                        onCreateSymbol: z,
                        onClickNewSymbolCreator: $,
                        onDeleteSymbol: V,
                        onSaveSymbol: O,
                        onOpenDevLink: R
                    } = e, U = (0, E.Fg)(), W = (0, p.T)("dl"), F = (0, C.$G)(), G = r ? (0, ep.AE)(o.get("root"), (0, y.Q0)(r)) : null, H = getSymbolItemHeight(U) + 1, X = U.control.height + 2 * U.gutters.x8 + U.control.borderWidth, Y = H * (t.length + 1) + X || 32 * U.gutters.wide;
                    return a.createElement(d.Z, null, a.createElement(u.default, {
                        size: 250
                    }, a.createElement(u.default.Head, null, a.createElement(u.default.Title, null, F("designer.components.manager.components-title")), a.createElement("div", {
                        style: {
                            alignItems: "center",
                            display: "flex",
                            marginLeft: "auto"
                        }
                    }, W ? a.createElement(DevLinkAction, {
                        onClick: R,
                        tooltip: F("designer.components.actions.export-devlink-tooltip")
                    }) : null, a.createElement(u.default.Close, {
                        onClick: Z,
                        push: "right"
                    }))), a.createElement(ek.PL, null, e => {
                        let o;
                        if (!e) return a.createElement(to, null);
                        let r = e.height;
                        if (n) {
                            let e = H * (t.findIndex(e => e.id === n) + 1);
                            o = s()(k, e + H - r, e)
                        } else o = s()(k, 0, Y - r);
                        return a.createElement(ek.l_, {
                            box: e
                        }, a.createElement(to, null, a.createElement(eI.ZP, {
                            width: e.width,
                            height: r,
                            scrollHeight: Y,
                            scrollTop: o,
                            onScroll: x
                        }, a.createElement("div", {
                            style: {
                                transform: (0, ew.Iu)(0, -o),
                                height: Y
                            }
                        }, a.createElement(ta, {
                            isOSX: er.vl,
                            symbols: t,
                            hasPermissionsToCreateSymbols: w,
                            hasPermissionsToModifySymbols: P,
                            symbolBeingEditedId: n,
                            symbolIsBeingCreated: !!l,
                            onClickSymbolItem: M,
                            onDragStartSymbolItem: D,
                            onClickSymbolItemEditIcon: N,
                            isSymbolCreationAllowed: !!(G && I(G)),
                            symbolNameInvalidMessage: S,
                            symbolCategoryInvalidMessage: v,
                            symbolPreviewImageInvalidMessage: f,
                            cannotCreateMessage: i,
                            cannotDeleteMessage: m,
                            cannotSaveMessage: c,
                            onCancelCreateSymbol: T,
                            onCancelEditSymbol: L,
                            onChangeSymbolName: A,
                            onChangeSymbolCategory: _,
                            onChangeSymbolPreviewImage: B,
                            onCreateSymbol: z,
                            onClickNewSymbolCreator: $,
                            onDeleteSymbol: V,
                            onSaveSymbol: O,
                            symbolNameInput: g || "",
                            symbolCategoryInput: b || "",
                            symbolPreviewImageInput: h,
                            viewportWidth: e.width,
                            viewportHeight: e.height,
                            viewportTop: e.top,
                            viewportLeft: e.left
                        })))))
                    })))
                }
        },
        63297: e => {
            var t = Array.prototype.reverse;
            e.exports = function(e) {
                return null == e ? e : t.call(e)
            }
        }
    }
]);
//# sourceMappingURL=webflow-designer.8d05a44f481fe73076c9.chunk-ep.js.map