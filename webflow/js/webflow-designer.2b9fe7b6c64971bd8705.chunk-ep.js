"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [886], {
        65886: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => lc
            });
            var n = l(20011),
                a = l(32735),
                r = l(13066),
                o = l(52229),
                i = l(12463),
                s = l(13581),
                d = l.n(s),
                c = l(44838),
                m = l(26349),
                u = l(92342),
                g = l(12250),
                p = l(67724),
                E = l(3594),
                h = l(77167),
                f = l(19662),
                b = l(31300),
                v = l(9086),
                y = l.n(v),
                C = l(81875),
                S = l(66131);
            let IndeterminateSpinner = class IndeterminateSpinner extends a.Component {
                render() {
                    let {
                        borderWidth: e,
                        borderColor: t
                    } = this.props;
                    return a.createElement(E.Z, {
                        _name: "IndeterminateSpinner",
                        style: {
                            borderWidth: e,
                            borderColor: t
                        }
                    })
                }
            };
            var A = l(46794);

            function LoadingDots(e) {
                return a.createElement(E.Z, (0, n.Z)({
                    flex: !0,
                    align: "center",
                    justify: "center",
                    _name: "LoadingDots"
                }, e), a.createElement(A.Z, {
                    set: "main",
                    icon: "w-common-loading-dots"
                }))
            }
            var F = l(89631),
                k = l(68772),
                I = l(65204),
                x = l(50336),
                w = l(90259);
            let T = {
                button: u.zxk,
                icon: u.hU
            };

            function CopyButtonWithTooltip(e) {
                let {
                    buttonType: t = "icon",
                    children: l,
                    errorContent: r = "Something went wrong.",
                    hoverContent: o = "",
                    onComplete: i = d(),
                    onError: s = d(),
                    successContent: c = "Copied!",
                    value: m,
                    ...u
                } = e, {
                    handleClick: g,
                    handleMouseEnter: p,
                    handleMouseLeave: E,
                    tooltipProps: h
                } = (0, x.Ir)({
                    errorContent: r,
                    hoverContent: o,
                    onComplete: i,
                    onError: s,
                    successContent: c,
                    value: m
                }), f = T[t];
                return a.createElement(w.Ao, h, a.createElement(f, (0, n.Z)({
                    variant: "ghost"
                }, u, {
                    onClick: g,
                    onMouseEnter: p,
                    onMouseLeave: E
                }), l))
            }
            var _ = l(14574),
                P = l(29532),
                M = l(52420),
                D = l(83443),
                L = l(98149);
            let Z = (0, m.r9)(u.gCW)({
                    padding: "$3"
                }),
                N = (0, m.r9)(u.Ugi)({
                    width: "auto"
                }),
                U = (0, m.r9)(u.Ugi)({
                    padding: "$2",
                    borderBottom: "$border1"
                }),
                z = (0, m.r9)(u.G7x)({
                    margin: "$2 0"
                }),
                V = (0, m.r9)(u.zxk)({
                    marginTop: "$1",
                    width: 70
                }),
                B = (0, m.r9)(u.gCW)({
                    marginTop: "$2",
                    gap: "$1"
                }),
                H = (0, m.r9)(u.Ugi)({
                    marginTop: "$2",
                    width: 200
                }),
                $ = {
                    altType: "decorative",
                    altValue: ""
                },
                getInitialState = e => "" === e ? $ : {
                    altType: "descriptive",
                    altValue: e || ""
                },
                R = {
                    decorative: $,
                    descriptive: {
                        altType: "descriptive",
                        altValue: ""
                    }
                },
                reducer = (e, t) => {
                    switch (t.type) {
                        case "CHANGE_ALT_TYPE":
                            return R[t.payload];
                        case "UPDATE_DESCRIPTION":
                            return {
                                altType: "descriptive", altValue: t.payload
                            };
                        default:
                            return e
                    }
                },
                getNextAltValue = e => {
                    let {
                        altType: t,
                        altValue: l
                    } = e;
                    return "descriptive" === t && "" === l ? null : l
                };

            function DeleteConfirmation(e) {
                let {
                    deleteImage: t,
                    toggleConfirmationDialog: l
                } = e;
                return a.createElement(B, {
                    spacing: 3
                }, a.createElement(u.xvT, {
                    weight: "bold"
                }, "You sure?"), a.createElement(u.xvT, {
                    font: "bodyLarge",
                    size: "medium"
                }, "This can’t be undone, though if the asset is on one of your site’s pages, it’ll return to the Asset Manager next time you publish and refresh the Designer."), a.createElement(H, null, a.createElement(u.zxk, {
                    prefix: a.createElement(u.pJl, {
                        size: 12
                    }),
                    onClick: t,
                    colorVariant: "danger",
                    size: "medium",
                    "data-automation-id": "confirm-deletion"
                }, "Confirm Delete"), a.createElement(u.zxk, {
                    size: "medium",
                    onClick: l
                }, "Cancel")))
            }
            let AssetDetailsPopover = e => {
                let {
                    asset: t,
                    assetAltChanged: l,
                    deleteAsset: n,
                    deleteConfirmationVisible: r,
                    onClose: o,
                    toggleConfirmationDialog: i,
                    currentLocale: s
                } = e, d = P.WS.getLocalizedField(t, null == s ? void 0 : s._id, "alt"), c = t.alt !== d, [m, g] = a.useReducer(reducer, getInitialState(d)), p = (0, _.I0)(), E = (0, _.Yx)(e => (0, P.VE)(e.LocalizationStore)), h = (0, I.ei)(t.origFileName, 27), f = (0, k.I0)(t), b = f && t.fileSize > 819200, onAltChange = e => {
                    g({
                        type: "UPDATE_DESCRIPTION",
                        payload: e
                    })
                }, v = a.useCallback(e => {
                    let n = null != e ? e : getNextAltValue(m);
                    l(t, n, null == s ? void 0 : s._id)
                }, [t, l, m, s]), deleteImage = () => {
                    n(t), i()
                }, y = c ? () => {
                    onAltChange(t.alt), v(t.alt)
                } : void 0, onTranslate = async () => {
                    p((0, P.Vr)(m.altValue, t._id))
                };
                return a.useEffect(() => {
                    d && d !== m.altValue && (onAltChange(d), v(d))
                }, [d]), a.createElement(F.Z, {
                    onEscape: o
                }, a.createElement(a.Fragment, null, a.createElement(u.G7x, {
                    id: "asset-popover",
                    className: "wf-control imagedetails-panel visible",
                    "data-automation-id": "asset-details-popover"
                }, a.createElement(U, {
                    align: "center",
                    justify: "space-between"
                }, a.createElement(u.xvT, {
                    font: "title",
                    colorVariant: "heading",
                    "data-automation-id": "asset-details-popover-title"
                }, "Asset details"), a.createElement(u.PZ7, {
                    onClick: o
                })), a.createElement(Z, null, a.createElement(u.Ugi, {
                    spacing: .5,
                    align: "center",
                    justify: "space-between"
                }, a.createElement(w.ZP, {
                    alternate: !0,
                    content: t.origFileName,
                    delay: 400
                }, a.createElement(u.xvT, {
                    size: "medium",
                    font: "body",
                    truncateToLines: 1
                }, h)), a.createElement(N, {
                    spacing: 0,
                    align: "center"
                }, a.createElement(u.hU, {
                    as: "a",
                    href: t.cdnUrl,
                    label: "Open in a new tab",
                    target: "_blank",
                    variant: "ghost",
                    Icon: u.BgW
                }), a.createElement(CopyButtonWithTooltip, {
                    Icon: u.xPt,
                    hoverContent: "Copy asset link to clipboard",
                    value: t.cdnUrl
                }))), a.createElement(u.gCW, {
                    spacing: 1
                }, a.createElement(u.Ugi, {
                    spacing: 2,
                    justify: "start"
                }, f ? a.createElement(N, {
                    spacing: 1
                }, a.createElement(u.y2I, {
                    size: 12
                }), a.createElement(u.xvT, {
                    size: "medium",
                    font: "body"
                }, `${t.width||0}px x ${t.height||0}px`)) : null, a.createElement(N, {
                    spacing: 1
                }, a.createElement(u.H25, {
                    size: 12
                }), " ", a.createElement(u.xvT, {
                    size: "medium",
                    font: "body"
                }, (0, I.or)(t.fileSize)))), b && a.createElement(N, {
                    spacing: 1
                }, a.createElement(u.T67, {
                    size: 12,
                    colorVariant: "warning"
                }), a.createElement(u.xvT, {
                    size: "medium",
                    font: "body",
                    colorVariant: "warning"
                }, "Very Large"))), a.createElement(L.UO, {
                    distractorKey: L.z7.panel_asset_alt,
                    expandMargin: !0
                }, a.createElement(u.G7x, {
                    "data-automation-id": "panel_asset_alt"
                }, a.createElement(M.Qy, {
                    label: "Alt Text",
                    fieldName: "alt",
                    onFieldReset: y,
                    onTranslateClick: m.altValue && (null == s ? void 0 : s.tag) !== (null == E ? void 0 : E.tag) ? onTranslate : void 0,
                    translationLoading: t.translationLoading
                }), a.createElement(z, null, a.createElement(D.h, {
                    value: m.altType,
                    onChange: e => {
                        g({
                            type: "CHANGE_ALT_TYPE",
                            payload: e
                        }), v(R[e].altValue)
                    },
                    options: [{
                        value: "descriptive",
                        label: "Descriptive"
                    }, {
                        value: "decorative",
                        label: "Decorative"
                    }]
                })), "descriptive" === m.altType && null !== m.altValue && a.createElement(u.G7x, {
                    marginBottom: "$2"
                }, a.createElement(u.gxH, {
                    placeholder: "A cute hedgehog curled into a ball.",
                    value: m.altValue,
                    onChange: e => {
                        onAltChange(e.currentTarget.value)
                    },
                    onBlur: () => {
                        v()
                    },
                    "data-automation-id": "panel_asset_alt_text_input",
                    isDisabled: t.translationLoading
                })), "descriptive" === m.altType && "" === m.altValue && a.createElement(u.jCS, {
                    size: "medium",
                    colorVariant: "warning",
                    hasIcon: !1
                }, "Write a description of this image. Alt text is used by screen readers and/or if an image doesn't load."), "decorative" === m.altType && a.createElement(u.xvT, {
                    font: "body",
                    size: "medium"
                }, "Decorative images don't convey meaning and don't require alt text."))), a.createElement(() => a.createElement(a.Fragment, null, r ? a.createElement(DeleteConfirmation, {
                    deleteImage: deleteImage,
                    toggleConfirmationDialog: i
                }) : a.createElement(V, {
                    prefix: a.createElement(u.pJl, {
                        size: 12
                    }),
                    onClick: i,
                    "data-automation-id": "delete-asset",
                    size: "medium"
                }, "Delete")), null))), a.createElement(u.G7x, {
                    className: "footer"
                })))
            };

            function AssetDetailsPopoverContainer(e) {
                let {
                    asset: t,
                    deleteConfirmationVisible: l,
                    flux: n,
                    onClose: r,
                    toggleConfirmationDialog: o
                } = e, {
                    unregisterAsset: i,
                    assetAltChanged: s
                } = n.__DEPRECATED__getCreators("AssetActionCreators"), d = (0, _.Yx)(e => (0, P.Od)(e.LocalizationStore));
                return a.createElement(AssetDetailsPopover, {
                    key: null == d ? void 0 : d._id,
                    asset: t,
                    assetAltChanged: s,
                    deleteAsset: i,
                    deleteConfirmationVisible: l,
                    onClose: r,
                    toggleConfirmationDialog: o,
                    currentLocale: d
                })
            }
            var W = l(13252),
                G = l(78299),
                O = l(62668),
                j = l(79929);
            let Y = (0, i.P1)(e => e.AssetStore.assets, e => e.filter(k.CI));
            (0, i.P1)(Y, e => {
                let t = [];
                return e.forEach(e => t.push(e._id)), t
            });
            let useFetchFigmaAssetForUpdate = () => {
                    let e = (0, _.Yx)(j.$),
                        t = (0, _.Yx)(Y),
                        [l, n] = (0, a.useState)("idle");
                    return [(0, a.useCallback)(async function(l) {
                        let a = t.get(l);
                        if (null == a) return null;
                        n("loading");
                        try {
                            let t = await (0, O.S)(a, e);
                            return n(t.url ? "success" : "error"), t
                        } catch (e) {
                            return n("error"), null
                        }
                    }, [t, e]), l]
                },
                useUpdateFigmaAssets = () => {
                    let e = (0, _.Yx)(j.$),
                        t = (0, _.I0)(),
                        l = (0, _.Yx)(Y);
                    return (0, a.useCallback)(async function(n) {
                        for (let a of n) {
                            let {
                                figmaFileName: n,
                                figmaFileKey: r,
                                figmaNodeId: o,
                                figmaScale: i,
                                format: s,
                                url: d,
                                assetId: c
                            } = a, m = n.replace(/\.(.+)$/, ""), u = l.reduce((e, t) => {
                                let {
                                    origFileName: l
                                } = t, n = l.replace(/\.(.+)$/, "");
                                return n.startsWith(m) && e.push(n), e
                            }, []), g = (0, I.nP)(u, m, "_"), p = await (0, W.bQ)(d, {
                                siteId: e,
                                figmaFileName: g + "." + s,
                                origFigmaFileName: n,
                                fileId: c,
                                figmaFileKey: r,
                                figmaNodeId: o,
                                figmaScale: i
                            });
                            t((0, G.s8)({
                                jsonFile: p
                            }))
                        }
                    }, [l, e, t])
                };
            var q = l(97396),
                J = l(3382),
                K = l(60091);
            let selectSiteId = e => e.SiteDataStore.siteId,
                Q = (0, m.zo)(q.ZP)(e => {
                    let {
                        theme: {
                            gutters: t
                        }
                    } = e;
                    return {
                        width: 15 * t.x4
                    }
                }),
                X = (0, m.r9)(u.Ugi)({
                    paddingBottom: "$2"
                }),
                ee = (0, m.r9)(u.izJ)({
                    marginBottom: 7
                }),
                et = (0, m.nU)(e => {
                    let {
                        theme: {
                            gutters: t
                        }
                    } = e;
                    return {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 3 * t.x4,
                        height: 16 * t.x4
                    }
                }),
                el = (0, m.nU)(e => {
                    let {
                        theme: {
                            colors: t,
                            control: l,
                            gutters: n
                        },
                        warn: a
                    } = e;
                    return {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderStyle: "solid",
                        width: 16 * n.x4,
                        height: 16 * n.x4,
                        color: a ? t.warning : void 0,
                        borderColor: t.borderDeep,
                        borderRadius: l.borderRadius,
                        borderWidth: l.borderWidth,
                        background: t.backgroundDeep
                    }
                }),
                en = (0, m.r9)("img")({
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }),
                Image = e => {
                    let {
                        loadingState: t,
                        fileName: l,
                        url: n
                    } = e;
                    return "loading" === t ? a.createElement(el, null, a.createElement(J.Z, null)) : "error" === t ? a.createElement(w.ZP, {
                        alternate: !0,
                        content: a.createElement(a.Fragment, null, a.createElement("div", null, "Figma asset ", a.createElement("strong", null, l), " was not found."), a.createElement("div", null, "Check Figma to see if the Figma asset has export settings, or if it was deleted."))
                    }, a.createElement(el, {
                        warn: !0
                    }, a.createElement(K.Z, null))) : a.createElement(el, null, a.createElement(en, {
                        src: n
                    }))
                },
                FigmaUpdatePopover = e => {
                    let {
                        asset: t,
                        onClose: l
                    } = e, n = (0, _.Yx)(selectSiteId), r = (0, _.I0)(), [i, s] = a.useState(null), [d, c] = a.useState(!1), [m, g] = useFetchFigmaAssetForUpdate(), p = useUpdateFigmaAssets();
                    a.useEffect(() => {
                        m(t._id).then(e => {
                            s(e)
                        })
                    }, []);
                    let {
                        url: E,
                        figmaFileName: h
                    } = i || {};
                    return a.createElement(F.Z, {
                        onEscape: l
                    }, a.createElement("div", {
                        id: "asset-popover",
                        className: "panel wf-control imagedetails-panel visible",
                        "data-automation-id": "asset-details-popover"
                    }, a.createElement("div", {
                        className: "inner"
                    }, a.createElement("div", {
                        className: "kit-panel"
                    }, a.createElement(X, {
                        justify: "space-between",
                        align: "center"
                    }, a.createElement("div", {
                        className: "header-title"
                    }, a.createElement(u.xvT, null, "Update Figma Asset")), a.createElement(u.PZ7, {
                        onClick: l
                    })), a.createElement(ee, null), a.createElement(et, null, a.createElement(Image, {
                        fileName: h,
                        loadingState: g,
                        url: E
                    })), a.createElement("div", {
                        className: "confirmation-message"
                    }, "This asset will be updated to the latest version on Figma. To access the previous version, you will need to restore it in Figma. You can also unlink the asset from Figma."), a.createElement("div", {
                        style: {
                            marginTop: 12,
                            display: "grid",
                            gridColumnGap: 8,
                            gridTemplateColumns: "auto auto",
                            alignItems: "center",
                            justifyContent: "start"
                        }
                    }, a.createElement(Q, {
                        disabled: d || null == i || "error" === g,
                        onClick: async () => {
                            c(!0), i && (await p([i]), c(!1), l())
                        },
                        primary: !0
                    }, d ? a.createElement(J.Z, {
                        small: !0
                    }) : "Update"), a.createElement(Q, {
                        disabled: d,
                        onClick: async () => {
                            let e = await (0, o.iG)({
                                title: "Unlink Figma asset",
                                content: "Are you sure you want to unlink this Figma asset? The asset will remain in Webflow, and you will have to import it again as a new asset."
                            });
                            if ("confirm" === e.type) {
                                l();
                                let e = await (0, O.rm)(t._id, n);
                                r((0, G.Dy)({
                                    jsonFile: e
                                }))
                            }
                        }
                    }, "Unlink"))))))
                };
            var ea = l(49601),
                er = l(2913),
                eo = l(44127),
                ei = l(13098),
                es = l(70962),
                ed = l(30398),
                ec = l(71854),
                em = l(22962),
                eu = l(4396),
                eg = l(27496),
                ep = l(57381);
            let eE = a.createContext({
                allItems: new Set,
                selectAllItems: d(),
                selectedItems: new Set,
                selectItem: d(),
                unselectAllItems: d(),
                unselectItem: d()
            });

            function AssetSelectionProvider(e) {
                let {
                    children: t,
                    foundAssets: l
                } = e, n = (0, _.I0)(), r = a.useMemo(() => new Set(l.map(e => {
                    let {
                        match: t
                    } = e;
                    return t.get("_id")
                })), [l]), [{
                    selectedItems: o
                }, {
                    deselect: i,
                    deselectAll: s,
                    select: d,
                    selectAll: c
                }] = (0, eg.Z)(r);
                return a.createElement(eE.Provider, {
                    value: {
                        allItems: r,
                        selectAllItems: () => {
                            n({
                                type: ep.pVn,
                                payload: {
                                    quantity: r.size
                                }
                            }), c()
                        },
                        selectedItems: o,
                        selectItem: d,
                        unselectAllItems: s,
                        unselectItem: i
                    }
                }, t)
            }
            let useAssetSelectionContext = () => a.useContext(eE);
            var eh = l(66050),
                ef = l(43007),
                eb = l(98512),
                ev = l(89924),
                ey = l(89862);
            let eC = {
                    grid: {
                        docIconSize: "large",
                        fileNameMaxLength: 10,
                        itemBodyAlign: "center",
                        previewHeight: 84,
                        showProcessingSpinnerOnLeft: !1,
                        spinnerSize: "default"
                    },
                    list: {
                        docIconSize: "medium",
                        fileNameMaxLength: 25,
                        itemBodyAlign: void 0,
                        previewHeight: void 0,
                        showProcessingSpinnerOnLeft: !1,
                        spinnerSize: "default"
                    },
                    smallList: {
                        docIconSize: "small",
                        fileNameMaxLength: 25,
                        itemBodyAlign: void 0,
                        previewHeight: void 0,
                        showProcessingSpinnerOnLeft: !0,
                        spinnerSize: "small"
                    }
                },
                eS = "idle",
                eA = {
                    HOVER: void 0,
                    LEAVE: void 0,
                    PRESELECT: void 0,
                    VIEW_CHANGE: void 0
                },
                eF = {
                    idle: {
                        ...eA,
                        HOVER: "hoveredNormal"
                    },
                    hoveredNormal: {
                        ...eA,
                        LEAVE: "idle",
                        PRESELECT: "hoveredPreselected"
                    },
                    hoveredPreselected: {
                        ...eA,
                        LEAVE: "hoveredNormal"
                    }
                };

            function assetItemReducer(e, t) {
                if ("VIEW_CHANGE" === t) return eS;
                let l = eF[e][t];
                return l || e
            }
            let NUXTutorialPopover = e => {
                    let {
                        children: t,
                        fileName: l
                    } = e, [n, r] = a.useState(!1);
                    return (a.useEffect(() => {
                        l.endsWith("hero.png") && r(!0)
                    }, [l]), n) ? a.createElement(eh.jt, {
                        viewport: null,
                        id: eh.oW.ASSET_TAB_ASSET_SINGLE
                    }, t) : t
                },
                ek = (0, m.zo)(E.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        background: t.assetsTab.imageBackground
                    }
                }),
                eI = a.memo(function(e) {
                    let {
                        allowDocumentUploads: t,
                        asset: l,
                        assetSelectState: o,
                        assetState: i,
                        flux: s,
                        hotSelecting: d,
                        hotSelectMode: c,
                        hotSelectSpec: m,
                        initialAssetId: g,
                        isDeleteConfirmationOpen: p,
                        isOpen: h,
                        itemHeight: v,
                        mode: A,
                        plugins: F,
                        toggleAssetOpen: x,
                        toggleDeleteConfirmationOpen: T,
                        view: _
                    } = e, {
                        _id: P,
                        processing: M,
                        uploadProgress: D
                    } = l, L = null != D, [Z, N] = a.useState(!1), U = (0, em.T)("figma"), {
                        selectedItems: z,
                        selectItem: V,
                        unselectItem: B
                    } = useAssetSelectionContext(), H = !!z.size, $ = z.has(P), [R, W] = a.useReducer(assetItemReducer, eS), G = "hoveredNormal" === R || "hoveredPreselected" === R, O = a.useCallback(e => {
                        e.stopPropagation()
                    }, []), j = a.useCallback(e => {
                        O(e), V(P)
                    }, [P, O, V]), Y = a.useCallback(e => {
                        O(e), B(P)
                    }, [P, O, B]);
                    a.useEffect(() => {
                        W("VIEW_CHANGE")
                    }, [W, _]);
                    let q = a.useCallback(() => {
                            d && s.dispatch((0, ef.F_)(l))
                        }, [l, s, d]),
                        J = a.useCallback(() => {
                            d && s.dispatch((0, ef.Vu)(l))
                        }, [l, s, d]),
                        K = a.useCallback(() => {
                            o && o.onChange && g && o.onChange({
                                _id: g
                            })
                        }, [o, g]),
                        Q = a.useCallback(() => {
                            if (!L && o && o.onChange) {
                                let {
                                    enabled: e
                                } = s.getStoreState("ResponsiveImageStore");
                                o.onChange(l, e);
                                return
                            }
                        }, [l, o, s, L]);
                    a.useEffect(() => {
                        "hoveredNormal" === R && (q(), Q())
                    }, [q, R, Q]), a.useEffect(() => {
                        "idle" === R && (J(), K())
                    }, [J, K, R]);
                    let X = a.useCallback(e => {
                            e && e.stopPropagation()
                        }, []),
                        closePopover = e => {
                            X(e), h ? toggleAssetDetails() : Z && N(!1)
                        },
                        toggleAssetDetails = e => {
                            X(e), x(P)
                        },
                        ee = y()(e, ["asset", "flux", "itemHeight", "hotSelecting", "mode"]),
                        et = (0, b.mu)(l),
                        el = "grid" === A,
                        {
                            docIconSize: en,
                            fileNameMaxLength: eg,
                            itemBodyAlign: ep,
                            previewHeight: eE,
                            showProcessingSpinnerOnLeft: eh,
                            spinnerSize: eA
                        } = eC[A],
                        eF = (0, k.IC)(l.cdnUrl, en),
                        eI = !H,
                        ex = {
                            _name: "AssetGrid_Item",
                            onClick: e => {
                                if (!(L || e.target.classList.contains("asset-settings"))) {
                                    if (H) {
                                        $ ? Y(e) : j(e);
                                        return
                                    }
                                    if (null != o && (o.onCommit(), s.dispatch((0, r.sX)("left"))), d) eo.xx({
                                        asset: l,
                                        hotSelectMode: c,
                                        hotSelectSpec: m
                                    });
                                    else {
                                        let {
                                            selectedNodeNativeId: e
                                        } = s.getStoreState("UiNodeStore"), t = s.getStoreState("AbstractNodeStore"), n = (0, f.KW)(t, e);
                                        n && (0, er.ZRf)(n) && (0, k.I0)(l) && (s.dispatch((0, ei.wJ)({
                                            nativeId: e,
                                            newId: P,
                                            assetState: i,
                                            responsiveImageState: s.getStoreState("ResponsiveImageStore")
                                        })), (0, eb.Jo)("canAccessEditModeSafetyMiniRelease")(s.state) && s.dispatch((0, r.Gs)(ed.Hx)))
                                    }
                                }
                            },
                            onMouseEnter: () => {
                                W("HOVER")
                            },
                            onMouseLeave: () => {
                                W("LEAVE")
                            },
                            onDragStart: e => {
                                if (e.preventDefault(), L || d || H) return;
                                if (!(0, eb.Jo)("canEditLocalizedCanvasItem")(s.state)) {
                                    s.dispatch((0, ev.BX)((0, ey.Z)({
                                        message: "You can only add elements on the primary locale.",
                                        timestamp: Date.now(),
                                        delay: 3e3,
                                        type: "error"
                                    })));
                                    return
                                }
                                let {
                                    __DEPRECATED__hideAllMiniSettings: n
                                } = s.__DEPRECATED__getCreators("UiActionCreators"), a = (0, k.eG)(l) && !(0, k.MK)(l);
                                a && !t ? s.__DEPRECATED__getCreators("__DEPRECATED__ConfirmActionCreators").confirmAllowDocumentUploads() : (0, es.s)({
                                    flux: s,
                                    dropImmediately: !1,
                                    item: {
                                        type: "asset",
                                        asset: l
                                    },
                                    analyticData: {
                                        source: "asset-manager",
                                        action: "drag"
                                    },
                                    plugins: F
                                }), n(), s.dispatch((0, r.Gs)(ed.Hx))
                            },
                            draggable: eI,
                            _ref: "item",
                            states: [L],
                            modifiers: {
                                draggable: eI,
                                [A]: !0,
                                selected: $
                            },
                            ...ee
                        },
                        ew = (0, I.ei)(l.origFileName, eg),
                        eP = (0, I.or)(l.fileSize),
                        eM = l.width || 0,
                        eD = l.height || 0,
                        eL = eM || eD,
                        eZ = eL ? `${eM} x ${eD} • ${eP}` : eP,
                        eN = "grid" === A,
                        renderCheck = () => a.createElement(Check, {
                            dispatch: W,
                            isSelected: $,
                            mode: A,
                            onSelect: j,
                            onUnselect: Y,
                            state: R
                        });
                    return a.createElement(NUXTutorialPopover, {
                        fileName: ew
                    }, a.createElement(C.Z, {
                        open: h || Z,
                        onMaskClick: closePopover,
                        content: Z ? a.createElement(FigmaUpdatePopover, {
                            onClose: closePopover,
                            asset: l
                        }) : a.createElement(AssetDetailsPopoverContainer, {
                            deleteConfirmationVisible: p,
                            toggleConfirmationDialog: T,
                            onClose: closePopover,
                            asset: l,
                            flux: s
                        })
                    }, a.createElement(E.Z, (0, n.Z)({}, ex, {
                        "aria-label": l.origFileName,
                        title: l.origFileName
                    }), a.createElement(E.Z, {
                        _name: "AssetGrid_ItemBody",
                        column: el,
                        align: ep
                    }, a.createElement(ek, {
                        _name: "AssetGrid_ItemPreview",
                        grow: "0",
                        style: {
                            maxWidth: v,
                            height: eE
                        }
                    }, et && !eF ? a.createElement(E.Z, {
                        key: P,
                        _name: "AssetGrid_ItemImage",
                        tag: "img",
                        src: et
                    }) : null, "LOTTIE" === l.type ? a.createElement(E.Z, {
                        _name: "AssetGrid_ItemImage",
                        flex: !0,
                        align: "center"
                    }, a.createElement(ea.qf, {
                        path: l.cdnUrl,
                        hover: G,
                        isUploading: L
                    })) : eF ? a.createElement(E.Z, {
                        _name: "AssetGrid_ItemImage",
                        flex: !0,
                        align: "center"
                    }, a.createElement(eF, {
                        _name: "AssetGrid_ItemImage"
                    })) : null, L ? a.createElement(E.Z, {
                        _name: "AssetGrid_ItemSpinner",
                        "data-automation-id": "asset-grid-item-spinner"
                    }, a.createElement(S.ZP, {
                        size: eA,
                        percent: 100 * (D || 0)
                    })) : null), a.createElement(E.Z, {
                        _name: "AssetGrid_ItemText"
                    }, a.createElement(w.ZP, {
                        alternate: !0,
                        content: l.origFileName,
                        delay: 400
                    }, a.createElement(E.Z, {
                        _name: "AssetGrid_ItemName"
                    }, ew)), !el && eZ ? a.createElement(E.Z, {
                        _name: "AssetGrid_ItemDimensions"
                    }, eZ) : null)), et ? null : a.createElement(LoadingDots, null), _ === eu.nk.FULL && !d && eN && renderCheck(), !d && !L && a.createElement(eT, {
                        mode: A
                    }, G ? a.createElement(a.Fragment, null, "grid" === A && a.createElement("div", null), a.createElement(e_, null, U && (0, k.CI)(l) && a.createElement(AssetPopoverButton, {
                        open: e => {
                            X(e), N(!0)
                        },
                        tooltip: "Sync Figma asset",
                        Icon: ec.Z
                    }), a.createElement(AssetPopoverButton, {
                        "data-automation-id": "asset-details-button",
                        open: toggleAssetDetails,
                        tooltip: "Open asset settings",
                        Icon: a.createElement(u.ewm, {
                            size: 12
                        })
                    }))) : null, _ === eu.nk.FULL && !eN && renderCheck()), M ? a.createElement(w.ZP, {
                        alternate: !0,
                        content: "Creating responsive variants"
                    }, a.createElement(E.Z, {
                        _name: "AssetGrid_ItemProcessing",
                        modifiers: {
                            posLeft: eh
                        }
                    }, a.createElement(IndeterminateSpinner, null))) : null)))
                }),
                ex = {
                    top: "50%",
                    right: 8,
                    transform: "translateY(-50%)"
                },
                ew = {
                    grid: {
                        justifyContent: "flex-end",
                        padding: 6,
                        right: 0,
                        top: 0,
                        width: "100%"
                    },
                    list: ex,
                    smallList: {
                        ...ex,
                        bottom: 0
                    }
                },
                eT = (0, m.nU)(e => {
                    let {
                        mode: t
                    } = e;
                    return {
                        display: "flex",
                        position: "absolute",
                        ...ew[t]
                    }
                }),
                e_ = (0, m.r9)("div")({
                    isolation: "isolate"
                }),
                eP = (0, m.r9)(u.hU)({
                    opacity: .7,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    "&&& svg": {
                        color: "$white"
                    },
                    "&&&:hover": {
                        opacity: 1,
                        background: "rgba(0, 0, 0, .7)"
                    }
                });

            function AssetPopoverButton(e) {
                let {
                    "data-automation-id": t,
                    open: l,
                    tooltip: n,
                    Icon: r
                } = e;
                return a.createElement(w.ZP, {
                    content: n,
                    alternate: !0
                }, a.createElement(eP, {
                    Icon: r,
                    "data-automation-id": t,
                    onClick: l,
                    variant: "ghost",
                    label: n
                }))
            }
            let eM = (0, m.r9)("button")({
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                    position: "relative",
                    zIndex: 1
                }),
                eD = {
                    height: 16,
                    width: 16
                };

            function CheckButton(e) {
                let {
                    ariaLabel: t,
                    children: l,
                    isSelected: n,
                    mode: r,
                    onClick: o,
                    onMouseEnter: i,
                    onMouseLeave: s
                } = e;
                return a.createElement(eM, {
                    "aria-label": t,
                    isSelected: n,
                    mode: r,
                    onClick: o,
                    onMouseEnter: i,
                    onMouseLeave: s
                }, l)
            }
            let eL = (0, m.r9)("div")({
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    marginLeft: 6
                }, {
                    variants: {
                        mode: {
                            grid: {
                                position: "absolute",
                                padding: "4px 8px 8px 24px",
                                right: 1,
                                bottom: 1,
                                marginLeft: "unset",
                                width: "100%"
                            }
                        }
                    }
                }),
                eZ = (0, m.r9)("div")({
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${m.TV.colors.background2} 75%, ${m.TV.colors.background2} 100%)`,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, {
                    variants: {
                        isSelected: {
                            true: {
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #363636 75%, #363636 100%)"
                            }
                        }
                    }
                });

            function CheckBackground(e) {
                let {
                    isSelected: t,
                    mode: l,
                    state: n
                } = e;
                return ("idle" !== n || t) && "grid" === l ? a.createElement(eZ, {
                    isSelected: t
                }) : null
            }

            function Check(e) {
                let {
                    dispatch: t,
                    isSelected: l,
                    mode: r,
                    onSelect: o,
                    onUnselect: i,
                    state: s
                } = e, d = {
                    isSelected: l,
                    mode: r,
                    onMouseEnter: () => t("PRESELECT"),
                    onMouseLeave: () => t("LEAVE")
                }, c = {
                    ariaLabel: "Select asset",
                    onClick: o
                };
                return a.createElement(eL, {
                    mode: r
                }, a.createElement(CheckBackground, {
                    isSelected: l,
                    mode: r,
                    state: s
                }), (() => {
                    switch (!0) {
                        case l:
                            return a.createElement(CheckButton, (0, n.Z)({}, d, {
                                ariaLabel: "Unselect asset",
                                onClick: i
                            }), a.createElement(u.rE2, {
                                colorVariant: "success",
                                style: eD
                            }));
                        case "hoveredPreselected" === s:
                            return a.createElement(CheckButton, (0, n.Z)({}, d, c), a.createElement(u.rE2, {
                                style: eD
                            }));
                        case "hoveredNormal" === s:
                            return a.createElement(CheckButton, (0, n.Z)({}, d, c), a.createElement(u.rE2, {
                                style: {
                                    ...eD,
                                    opacity: .6
                                }
                            }));
                        default:
                            return null
                    }
                })())
            }
            let eN = (0, c.nC)(e => {
                    let {
                        AssetStore: t,
                        AssetManagerUIStore: l,
                        UiStore: n,
                        SiteDataStore: a,
                        DesignerStore: r,
                        AbstractNodeStore: o,
                        UiNodeStore: i
                    } = e;
                    return {
                        assetSelectState: r.assetSelectState,
                        assetState: t,
                        assetUiState: l,
                        allowDocumentUploads: a.allowDocumentUploads,
                        openAssetId: n.asset,
                        isDeleteConfirmationOpen: n.assetDeleteConfirmation,
                        selectedNode: i.selectedNodeNativeId ? (0, f.KW)(o, i.selectedNodeNativeId) : null
                    }
                })(e => {
                    let {
                        allowDocumentUploads: t,
                        assetSelectState: l,
                        assetState: n,
                        assetUiState: r,
                        flux: o,
                        isDeleteConfirmationOpen: i,
                        openAssetId: s,
                        selectedNode: d,
                        bigListColumns: c,
                        foundAssets: m,
                        gridColumns: u,
                        smallListColumns: g
                    } = e, {
                        filter: p,
                        mode: E,
                        hotSelecting: h,
                        hotSelectMode: f,
                        hotSelectSpec: b,
                        view: v
                    } = r, y = a.useRef(!1), C = a.useRef(!0);
                    a.useLayoutEffect(() => {
                        C.current && (C.current = !1)
                    }), a.useEffect(() => () => {
                        y.current = !0
                    }, []), a.useEffect(() => () => {
                        y.current && l && l.onCancel && l.onCancel()
                    }, [l]);
                    let S = {
                        allowDocumentUploads: t,
                        assets: n.assets,
                        assetSelectState: l,
                        assetState: n,
                        bigListColumns: c,
                        filter: p,
                        flux: o,
                        foundAssets: m,
                        gridColumns: u,
                        hotSelecting: h,
                        hotSelectMode: f,
                        hotSelectSpec: b,
                        isDeleteConfirmationOpen: i,
                        justOpened: C.current,
                        mode: E,
                        openAssetId: s,
                        selectedNode: d,
                        smallListColumns: g,
                        toggleAssetOpen: e => {
                            o.__DEPRECATED__getCreators("UiActionCreators").toggleUiStates([{
                                key: "asset",
                                value: e
                            }, {
                                key: "assetDeleteConfirmation",
                                value: !1
                            }])
                        },
                        toggleDeleteConfirmationOpen: () => {
                            o.__DEPRECATED__getCreators("UiActionCreators").toggleUiState("assetDeleteConfirmation")
                        },
                        view: v
                    };
                    return a.createElement(AssetGrid, S)
                }),
                eU = {
                    grid: 118,
                    list: 47,
                    smallList: 27
                },
                AssetGrid = e => {
                    let {
                        allowDocumentUploads: t,
                        assets: l,
                        assetSelectState: r,
                        assetState: o,
                        bigListColumns: i = 1,
                        filter: s,
                        flux: d,
                        foundAssets: c,
                        gridColumns: m = 3,
                        hotSelecting: u,
                        hotSelectMode: f,
                        hotSelectSpec: v,
                        isDeleteConfirmationOpen: y,
                        justOpened: C,
                        mode: S,
                        openAssetId: A,
                        selectedNode: F,
                        smallListColumns: k = 1,
                        toggleAssetOpen: I,
                        toggleDeleteConfirmationOpen: x,
                        view: w
                    } = e, T = (0, g._m2)(), _ = a.useRef(null);
                    ! function(e, t, l, n) {
                        let r = a.useCallback(() => {
                            if (n && t.current) {
                                let {
                                    scrollToIndex: l
                                } = t.current, a = e.findIndex(e => e && e.match && e.match._id === n); - 1 !== a && l(a)
                            }
                        }, [e, t, n]);
                        a.useEffect(() => {
                            l && r()
                        }, [r, l])
                    }(c, _, C, A);
                    let P = eU[S],
                        M = a.useMemo(() => (0, b.Ym)(l), [l]);
                    if (0 === M.size) return a.createElement(AssetGrid_Empty, {
                        promptUpgrade: "documents" === s && !t,
                        view: w
                    });
                    if (0 === c.length) return a.createElement(h.X6, null, "No matching assets");
                    let D = F ? F.getIn(["data", "img", "id"], null) : null,
                        L = {
                            allowDocumentUploads: t,
                            assetSelectState: r,
                            assetState: o,
                            flux: d,
                            hotSelecting: u,
                            hotSelectMode: f,
                            hotSelectSpec: v,
                            initialAssetId: D,
                            isDeleteConfirmationOpen: y,
                            itemHeight: P,
                            mode: S,
                            plugins: T,
                            toggleAssetOpen: I,
                            toggleDeleteConfirmationOpen: x,
                            view: w
                        };
                    return a.createElement(E.Z, {
                        _name: "AssetGrid",
                        grow: 1,
                        states: {
                            isHotSelecting: u
                        }
                    }, a.createElement(p.Z, {
                        ref: _,
                        alwaysShowScrollbar: !0,
                        rowHeight: P,
                        count: c.length,
                        columns: {
                            grid: m,
                            list: i,
                            smallList: k
                        } [S],
                        scrollDisabled: !!A,
                        getter: (e, t) => {
                            let l = c[e];
                            if (!l || !l.match) return null;
                            {
                                let e = l.match,
                                    r = e._id,
                                    o = r === A;
                                return a.createElement(eI, (0, n.Z)({}, L, {
                                    asset: e,
                                    dirtyBit: t,
                                    isOpen: o,
                                    key: r
                                }))
                            }
                        }
                    }))
                },
                ez = (0, m.r9)("div")({}, {
                    variants: {
                        view: {
                            SIDE: {
                                padding: "$3"
                            },
                            FULL: {
                                margin: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignitems: "center"
                            }
                        }
                    }
                }),
                AssetGrid_EmptyBody = e => {
                    let {
                        headingText: t,
                        message: l,
                        view: n
                    } = e;
                    return a.createElement(ez, {
                        view: n
                    }, a.createElement(u.ubH, {
                        title: t,
                        icon: u.bX7,
                        "data-automation-id": "empty-asset-grid",
                        style: {
                            background: "transparent"
                        }
                    }, a.createElement(u.BqV, null, l)))
                },
                AssetGrid_Empty = e => {
                    let {
                        promptUpgrade: t,
                        view: l = "side"
                    } = e;
                    return a.createElement(AssetGrid_EmptyBody, {
                        headingText: t ? "Add hosting or upgrade" : "Drop files here",
                        message: t ? "Add hosting to this site or upgrade to a paid account plan to add documents." : "Drag and drop files anywhere on the screen, or click the upload button above.",
                        view: l
                    })
                },
                eV = (0, m.zo)("footer")(e => {
                    let {
                        theme: t
                    } = e, {
                        colors: l,
                        control: n,
                        gutters: a
                    } = t;
                    return {
                        alignItems: "center",
                        backgroundColor: l.backgroundVivid,
                        borderBlockEnd: "none",
                        borderBlockStart: `${n.borderWidth}px solid ${l.borderDeep}`,
                        display: "flex",
                        justifyContent: "space-between",
                        marginBlockStart: "auto",
                        padding: `${a.wide-a.narrow}px ${a.narrow}px`,
                        position: "relative"
                    }
                }),
                AssetsTabFooter = e => {
                    let {
                        children: t
                    } = e;
                    return a.createElement(m.Ni.Provider, {
                        value: m.$c
                    }, a.createElement(eV, null, t))
                },
                eB = {
                    grid: "Grid",
                    list: "List",
                    smallList: "List - Small"
                },
                eH = (0, m.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        alignItems: "center",
                        marginRight: -1 * t.gutters.base
                    }
                }),
                e$ = (0, m.r9)("div")({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }),
                eR = (0, m.zo)(q.ZP)(e => {
                    let {
                        theme: t,
                        isSelected: l
                    } = e;
                    return {
                        height: "auto",
                        borderRadius: 0,
                        paddingLeft: t.gutters.base,
                        paddingRight: t.gutters.base,
                        paddingTop: t.gutters.base,
                        paddingBottom: t.gutters.base,
                        margin: 0,
                        color: l ? t.colors.foreground : t.colors.foregroundDim
                    }
                }),
                selector = e => e.AssetManagerUIStore.mode;

            function AssetsTabModeButtons() {
                let e = (0, _.Yx)(selector),
                    t = (0, _.I0)();
                return a.createElement(m.Ni.Provider, {
                    value: m.designerTheme
                }, a.createElement(eH, null, eu.EH.map(l => {
                    let n = eu.Iv[l];
                    return a.createElement(w.ZP, {
                        key: l,
                        content: eB[l],
                        alternate: !0
                    }, a.createElement(e$, null, a.createElement(eR, {
                        "aria-label": `View as ${l}`,
                        blend: !0,
                        isSelected: e === l,
                        onClick: () => {
                            t((0, ef.gh)({
                                mode: l
                            }))
                        }
                    }, a.createElement(n, {
                        size: 12
                    }))))
                })))
            }
            var eW = l(47169),
                eG = l(40841),
                eO = l.n(eG),
                ej = l(87219);
            let StyleLabel = class StyleLabel extends a.Component {
                render() {
                    let e = this.props.icon;
                    return a.createElement("div", {
                        className: "label kit-label " + this.props.className,
                        title: this.props.title || this.props.text,
                        onClick: this.props.onClick
                    }, a.createElement("div", {
                        className: eO()({
                            link: !0,
                            local: this.props.local,
                            upstream: this.props.upstream,
                            downstream: this.props.downstream,
                            pop: this.props.open
                        })
                    }, e ? a.createElement(e, null) : a.createElement("i", null), this.props.text ? a.createElement("span", null, this.props.text, a.createElement("span", {
                        className: "colon"
                    }, ":")) : null))
                }
            };
            (0, eW.Z)(StyleLabel, "defaultProps", {
                open: !1,
                className: ""
            });
            var eY = l(47589),
                eq = l(87753),
                eJ = l(30010);
            let eK = {
                    AssetDownloadError: "Error loading image URL",
                    AssetNotFoundError: "We couldn't find that image. Double-check the URL and try again.",
                    AssetPermissionError: "We couldn't import that image due to its permissions.",
                    default: "Invalid image URL"
                },
                eQ = (0, m.r9)(u.izJ)({
                    marginBottom: 7
                }),
                eX = (0, m.r9)(u.Ugi)({
                    paddingBottom: "$2"
                }),
                e0 = (0, c.nC)(null, e => ({
                    closeLinkUpload: () => {
                        e((0, ef.rH)())
                    }
                }))(class extends a.Component {
                    constructor() {
                        var e;
                        super(...arguments), e = this, (0, eW.Z)(this, "state", {
                            disableSubmit: !0,
                            submitting: !1,
                            errorMsg: null,
                            link: ""
                        }), (0, eW.Z)(this, "storeLinkInputField", e => {
                            this.linkInputField = e
                        }), (0, eW.Z)(this, "handleChange", e => {
                            this.setState({
                                disableSubmit: !e.target.value,
                                link: e.target.value,
                                errorMsg: null
                            })
                        }), (0, eW.Z)(this, "onInputKeydown", e => {
                            "Enter" === e.key && this.state.link && this.submitLink()
                        }), (0, eW.Z)(this, "showError", function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                l = eK[t.type || "default"];
                            e.setState({
                                submitting: !1,
                                errorMsg: l
                            })
                        }), (0, eW.Z)(this, "submitLink", () => {
                            let e = this.state.link;
                            if (!(0, b.k_)(e)) return this.showError();
                            (0, eJ.xf)(e) || (e = "//" + e), this.setState({
                                submitting: !0
                            }), (0, eY.Ly)(e).then(e => {
                                (0, eq.h$)({
                                    blob: e
                                }), this.props.closeLinkUpload(), this.setState({
                                    submitting: !1
                                })
                            }).catch(this.showError)
                        })
                    }
                    componentDidMount() {
                        if (this.linkInputField) {
                            let e = this.linkInputField.querySelector("input");
                            e && e.focus()
                        }
                    }
                    render() {
                        let {
                            closeLinkUpload: e
                        } = this.props, {
                            disableSubmit: t,
                            submitting: l,
                            errorMsg: n
                        } = this.state, r = eO()({
                            "kit-button has-text close-panel link-submit-button": !0,
                            disabled: t || l
                        });
                        return a.createElement(ej.Z, {
                            feature: "linkUpload"
                        }, a.createElement("div", {
                            className: "AssetsTab_LinkUploadModalWrap"
                        }, a.createElement("div", {
                            className: "panel-mask wf-control visible",
                            onClick: e
                        }), a.createElement(F.Z, {
                            onEscape: e
                        }, a.createElement("div", {
                            className: "AssetsTab_LinkUploadModal panel wf-control visible"
                        }, a.createElement("div", {
                            className: "tick"
                        }), a.createElement(eX, {
                            justify: "space-between"
                        }, a.createElement(u.xvT, null, "Link Image"), a.createElement(u.PZ7, {
                            onClick: e
                        })), a.createElement(eQ, null), a.createElement("div", {
                            className: "kit-field link-input-field",
                            ref: this.storeLinkInputField
                        }, a.createElement(StyleLabel, {
                            text: "URL"
                        }), a.createElement(LinkInput, {
                            onChange: this.handleChange,
                            onKeyDown: this.onInputKeydown,
                            showProgress: l,
                            showError: !!n,
                            placeholder: "e.g. http://google.com"
                        })), a.createElement("div", {
                            className: "upload-error"
                        }, n), a.createElement("div", {
                            className: "buttons"
                        }, a.createElement("button", {
                            className: r,
                            onClick: this.submitLink
                        }, "Link Image"))))))
                    }
                }),
                LinkInput = e => {
                    let {
                        showError: t,
                        showProgress: l,
                        onChange: n,
                        onKeyDown: r,
                        disabled: o,
                        placeholder: i
                    } = e, s = eO()({
                        "kit-text-input kit-input-control link-input": !0,
                        hasError: t,
                        inprogress: l
                    });
                    return a.createElement("div", {
                        className: s
                    }, a.createElement("div", {
                        className: "indicator animate-blink"
                    }), a.createElement("input", {
                        className: "input",
                        type: "text",
                        tabIndex: 1,
                        onChange: n,
                        onKeyDown: r,
                        disabled: o,
                        placeholder: i
                    }))
                };
            var e1 = l(33930),
                e2 = l(18034),
                e4 = l(34521),
                e9 = l(64879),
                e7 = l(2509),
                e3 = l(85854),
                e5 = l(74514),
                e6 = l(45027);
            let e8 = a.memo(() => {
                    let e = (0, _.I0)();
                    return a.createElement(e4.sN, {
                        onClick: () => e((0, e6.rP)()),
                        text: "Import From Figma",
                        context: e5.FD
                    })
                }),
                te = {},
                getSharedPaneHeaderProps = e => ({
                    handleAddFolder: e.handleAddFolder,
                    handleUpload: e.handleUpload,
                    handleXClick: e.handleXClick,
                    hotSelectMode: e.hotSelectMode,
                    linkUploadHidden: e.linkUploadHidden,
                    openLinkUpload: e.openLinkUpload,
                    view: e.view
                }),
                getCanUploadDocuments = e => !e || "linkAttachment" === e || "animationSettings" === e,
                getAcceptedFileTypes = e => getCanUploadDocuments(e) ? (0, b.fG)() : (0, b.lf)(),
                tt = (0, m.nU)(e => {
                    let {
                        theme: t,
                        style: l
                    } = e, {
                        assetsTab: n
                    } = t;
                    return {
                        alignItems: "center",
                        backgroundColor: n.actionBackgroundColor,
                        borderTop: n.actionBorderTop,
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 8px",
                        ...l
                    }
                }),
                tl = (0, m.r9)(tt)({
                    borderTop: "none !important",
                    padding: "0 8px 6px !important"
                }),
                tn = (0, m.nU)(e => {
                    let {
                        view: t
                    } = e;
                    return {
                        display: "flex",
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: t === eu.nk.FULL ? "flex-start" : "flex-end",
                        alignItems: "center"
                    }
                }),
                ta = (0, m.nU)(e => {
                    let {
                        view: t,
                        style: l
                    } = e;
                    return {
                        flexGrow: t === eu.nk.FULL ? 1 : null,
                        ...l
                    }
                }),
                tr = (0, m.nU)(e => {
                    let {
                        view: t,
                        isD2: l
                    } = e;
                    return {
                        display: "flex",
                        position: "relative",
                        width: t === eu.nk.FULL ? "100%" : "auto",
                        height: l ? 24 : 32
                    }
                }),
                to = (0, m.r9)("div")({
                    background: "$border3",
                    bottom: 0,
                    left: -1,
                    position: "absolute",
                    top: 0,
                    width: 1
                }),
                DropdownIcon = () => a.createElement(A.Z, null, a.createElement(u.G7x, {
                    margin: "0 -6px",
                    position: "relative",
                    top: -1
                }, a.createElement(u.CJ0, {
                    size: 16
                })));

            function SharedPaneHeader(e) {
                let {
                    actionsSlot: t = null,
                    handleAddFolder: l,
                    handleUpload: n,
                    handleXClick: r,
                    headingSlot: o = null,
                    hotSelectMode: i,
                    linkUploadHidden: s,
                    openLinkUpload: d,
                    useLargeButtons: c = !1,
                    view: g
                } = e, p = (0, em.T)("figma"), E = (0, em.T)("linkUpload"), h = getAcceptedFileTypes(i), f = g === eu.nk.FULL, b = (0, m.EW)();
                return a.createElement(m.Ni.Provider, {
                    value: m.$c
                }, a.createElement(e7.default.Head, null, a.createElement(e7.default.Title, null, "Assets"), a.createElement("div", {
                    style: {
                        alignItems: "center",
                        display: "flex",
                        marginLeft: "auto"
                    }
                }, o, r ? a.createElement(e7.default.Close, {
                    onClick: r
                }) : null)), a.createElement(tl, null, t, a.createElement(tn, {
                    view: g
                }, a.createElement(ta, {
                    view: g
                }, a.createElement(e2.X, {
                    "aria-label": "Add folder",
                    onClick: l,
                    full: f,
                    structure: !f && b ? "ghost" : null
                }, a.createElement("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, a.createElement(u.zWQ, null), c && a.createElement("span", {
                    style: {
                        marginLeft: 7
                    }
                }, "New Folder")))), a.createElement(ta, {
                    view: g,
                    style: {
                        marginLeft: 4
                    }
                }, a.createElement(eh.jt, {
                    viewport: null,
                    id: eh.oW.ASSET_TAB_UPLOAD_ASSET_BUTTON
                }, a.createElement(tr, {
                    view: g,
                    isD2: b
                }, a.createElement(e9.Z, {
                    accept: h,
                    onChange: n,
                    multiple: !0,
                    style: {
                        marginRight: -1,
                        width: f ? "100%" : "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    className: "upload-button bem-Button",
                    modifiers: {
                        isSplit: p || E
                    }
                }, a.createElement(u.rG2, null), c && a.createElement("span", {
                    style: {
                        marginLeft: 7
                    }
                }, "Upload")), p || E ? a.createElement(e4.ZP, {
                    right: !0
                }, a.createElement(e1.Z, {
                    style: {
                        ...e4.u1,
                        marginLeft: 0
                    }
                }, a.createElement(DropdownIcon, null)), a.createElement(to, null), a.createElement(e4.ZP.Body, {
                    style: {
                        minWidth: 200
                    }
                }, a.createElement(e3.Menu, null, a.createElement(e3.Menu.Section, null, p && a.createElement(e8, null), E && (0, e4.sN)({
                    onClick: d,
                    text: "Import From Link",
                    context: te
                }))))) : null))))), s ? null : a.createElement(e0, null))
            }
            var ti = l(83520),
                ts = l(71973);
            let td = (0, m.zo)(e3.Menu.Item)(e => {
                    let {
                        style: t
                    } = e;
                    return {
                        paddingLeft: 12,
                        paddingRight: 12,
                        ...t
                    }
                }),
                tc = (0, m.r9)("div")({
                    display: "inline-block",
                    width: 10,
                    marginRight: 4
                });

            function SharedMenuItem(e) {
                let {
                    checked: t,
                    children: l,
                    disabled: n = !1,
                    onClick: r,
                    style: o = null
                } = e;
                return a.createElement(td, {
                    className: eO()("dropdown-menu-item", {
                        checked: t,
                        disabled: n
                    }),
                    onClick: r,
                    style: o
                }, a.createElement(tc, null, t && a.createElement(u.Mf1, {
                    size: 10
                })), l)
            }
            let tm = [{
                    sort: "createdOn",
                    order: "desc",
                    label: "Newest First"
                }, {
                    sort: "createdOn",
                    order: "asc",
                    label: "Oldest First"
                }, {
                    sort: "origFileName",
                    order: "asc",
                    label: "Alphabetical (A-Z)"
                }, {
                    sort: "origFileName",
                    order: "desc",
                    label: "Alphabetical (Z-A)"
                }],
                matchSort = e => {
                    let {
                        sort: t,
                        order: l
                    } = e;
                    return tm.find(e => e.sort === t && e.order === l)
                },
                tu = (0, i.P1)(e => e.AssetManagerUIStore.order, e => e.AssetManagerUIStore.sort, (e, t) => ({
                    order: e,
                    sort: t
                }));

            function AssetsTabSortMenu(e) {
                let {
                    sort: t,
                    order: l
                } = (0, _.Yx)(tu), r = (0, _.I0)(), o = matchSort({
                    sort: t,
                    order: l
                });
                return o ? a.createElement(e4.ZP, (0, n.Z)({
                    className: "AssetsMenu"
                }, e), a.createElement(e4.ZP.Body, {
                    style: {
                        top: "initial",
                        bottom: "100%"
                    }
                }, a.createElement(e3.Menu, null, tm.map(e => {
                    let {
                        label: t,
                        sort: l,
                        order: n
                    } = e, i = o.label === t;
                    return a.createElement(SharedMenuItem, {
                        checked: i,
                        key: t,
                        onClick: () => {
                            r((0, ef.sI)({
                                sort: l,
                                order: n
                            }))
                        }
                    }, a.createElement(ti.Z, null, t))
                }))), a.createElement(ts.Z, null, a.createElement(u.Ugi, {
                    spacing: 1
                }, a.createElement(ti.Z, null, o.label), a.createElement(E.Z, null, a.createElement(u.CJ0, null))))) : null
            }
            var tg = l(10923),
                tp = l(31502);
            let tE = (0, m.zo)("button")(e => {
                let {
                    theme: t,
                    style: l
                } = e;
                return {
                    [u.JO$.__experimentalTokens.color]: m.TV.colors.textSecondary,
                    alignItems: "center",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: 0,
                    borderBottom: "none",
                    display: "flex",
                    width: "100%",
                    overflow: "hidden",
                    height: t.assetsTab.buttonHeight,
                    paddingInlineStart: 3 * t.gutters.base,
                    paddingInlineEnd: 3 * t.gutters.base,
                    position: "relative",
                    boxShadow: "none",
                    ...l
                }
            }, {
                selected: e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [u.JO$.__experimentalTokens.color]: m.TV.colors.textActive,
                        backgroundColor: t.list.itemBackgroundHover
                    }
                },
                hover: e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [u.JO$.__experimentalTokens.color]: m.TV.colors.textActive,
                        backgroundColor: t.list.itemBackgroundHover
                    }
                },
                focus: e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [u.JO$.__experimentalTokens.color]: m.TV.colors.textActive,
                        backgroundColor: t.list.itemBackgroundHover,
                        outline: "none"
                    }
                },
                active: e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [u.JO$.__experimentalTokens.color]: m.TV.colors.textActive,
                        backgroundColor: t.list.itemBackgroundHover,
                        outline: "none"
                    }
                }
            });

            function AssetsTabSidebarButton(e) {
                let {
                    selected: t = !1,
                    onClick: l,
                    children: r,
                    style: o,
                    ...i
                } = e;
                return a.createElement(tg.Z, null, a.createElement(tE, (0, n.Z)({}, i, {
                    onClick: l,
                    selected: t,
                    type: "button",
                    style: o
                }), r))
            }
            var th = l(87718),
                tf = l(97777),
                tb = l(14493);
            let getModalTitle = (e, t) => `${e} ${t} ${(0,I._6)(t,"asset")}`,
                useOpenDeleteAssetsModal = () => {
                    let e = (0, _.I0)(),
                        {
                            selectedItems: t,
                            unselectItem: l
                        } = useAssetSelectionContext(),
                        r = t.size;
                    return async () => {
                        let i = await (0, o.vC)(e => a.createElement(DeleteAssetsModal, (0, n.Z)({}, e, {
                            quantity: r
                        })));
                        if ("confirm" === i.type) {
                            let n = Array.from(t);
                            e((0, tb.hP)(n)), l(n)
                        }
                    }
                };

            function DeleteAssetsModal(e) {
                let {
                    quantity: t,
                    ...l
                } = e, r = `Assets won't be deleted if they are used in your site. They will
return to the Assets Panel the next time you publish and refresh the
Designer.`;
                return a.createElement(o.QH, (0, n.Z)({
                    title: getModalTitle("Delete", t),
                    content: a.createElement(a.Fragment, null, a.createElement("p", {
                        style: {
                            fontSize: 12,
                            marginTop: 0
                        }
                    }, "You're about to delete ", t, " ", (0, I._6)(t, "asset"), ". This cannot be undone."), a.createElement(u.jCS, {
                        colorVariant: "warning",
                        hasIcon: !1
                    }, r)),
                    submit: {
                        label: "Delete",
                        intent: "danger"
                    }
                }, l))
            }
            let useOpenCompressAssetsModal = () => {
                let e = (0, _.I0)(),
                    {
                        selectedItems: t,
                        unselectItem: l
                    } = useAssetSelectionContext(),
                    r = t.size;
                return async () => {
                    let i = await (0, o.vC)(e => a.createElement(CompressAssetsModal, (0, n.Z)({}, e, {
                        quantity: r
                    })));
                    if ("confirm" === i.type) {
                        let n = Array.from(t);
                        e((0, tb.CY)(n)), l(n)
                    }
                }
            };

            function CompressAssetsModal(e) {
                let {
                    quantity: t,
                    ...l
                } = e;
                return a.createElement(o.QH, (0, n.Z)({
                    title: getModalTitle("Compress", t),
                    content: a.createElement(a.Fragment, null, a.createElement("p", {
                        style: {
                            fontSize: 12,
                            marginTop: 0
                        }
                    }, "This will compress and convert the selected assets to WebP. We’ll create a site backup and let you know when they’re done so you can republish. You can still work in the Designer while you wait.")),
                    submit: {
                        label: "Compress",
                        intent: "primary"
                    }
                }, l))
            }
            var tv = l(34678),
                ty = l(47184),
                tC = l(1598),
                tS = l(44371);
            let tA = (0, m.zo)("label")(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        ...t.typography.label,
                        fontSize: 12
                    }
                }),
                tF = (0, m.nU)(e => {
                    let {
                        theme: t,
                        marginBottomFactor: l = 3
                    } = e;
                    return {
                        marginBottom: t.gutters.base * l,
                        fontSize: 12
                    }
                }),
                tk = (0, m.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: t.gutters.base
                    }
                }),
                tI = "___NONE___",
                tx = {
                    label: "None",
                    value: tI,
                    depth: 0
                };

            function getFolderValue(e) {
                return e === tI ? null : e
            }
            let tw = {
                errorEmpty: "Folder name cannot be empty",
                errorTooLong: "Folder name must be fewer than 256 characters",
                errorSameName: "Folder name already exists",
                valid: null
            };

            function SharedFolderModal(e) {
                let {
                    "data-automation-id": t,
                    folders: l,
                    handleSubmit: n,
                    initialFolderName: r,
                    initialParentFolder: i,
                    onCancel: s,
                    onSubmit: d,
                    title: c,
                    confirmLabel: m
                } = e, {
                    options: u,
                    parentFolder: g,
                    setParentFolder: p
                } = useParentFolder(i, l), {
                    folderName: E,
                    folderNameStatus: h,
                    handleFolderNameChange: f,
                    invalidFolderName: b
                } = useFolderName(r, g, l), v = a.useCallback(() => {
                    b || void 0 === g || (n({
                        folderName: E,
                        parentFolder: g
                    }), d())
                }, [E, g, b, n, d]);
                return a.createElement(o.Vq, {
                    title: c,
                    content: a.createElement("div", {
                        "data-automation-id": t
                    }, a.createElement(FolderSelect, {
                        "data-automation-id": "ParentFolderSelect",
                        handleChange: p,
                        label: "Parent Folder",
                        optionDataAutomationIdPrefix: "ParentFolderOption",
                        options: u,
                        value: g
                    }), a.createElement(FolderNameInput, {
                        "data-automation-id": "FolderNameInput",
                        folderName: E,
                        folderNameStatus: h,
                        onSubmit: v,
                        handleFolderNameChange: f,
                        invalidFolderName: b,
                        label: "Folder Name"
                    })),
                    buttons: a.createElement(a.Fragment, null, a.createElement(o.Lw, {
                        onClick: s,
                        "data-automation-id": "Cancel"
                    }, "Cancel"), a.createElement(o.Mm, {
                        primary: !0,
                        disabled: b,
                        onClick: v,
                        "data-automation-id": "Submit"
                    }, m)),
                    onClose: s
                })
            }

            function validateFolderName(e, t, l) {
                if (0 === e.length) return "errorEmpty";
                if (e.length > 256) return "errorTooLong";
                let n = l.some(l => l.parent === getFolderValue(t) && l.name === e);
                return n ? "errorSameName" : "valid"
            }

            function useFolderName(e, t, l) {
                let [n, r] = a.useState(e), [o, i] = a.useState(validateFolderName(n, t, l)), s = a.useCallback(e => {
                    let n = validateFolderName(e, t, l);
                    o !== n && i(n)
                }, [l, t, o]);
                a.useEffect(() => {
                    s(n)
                }, [n, s]);
                let d = a.useCallback(e => {
                    let t = e.currentTarget.value;
                    r(t), s(t)
                }, [o, s]);
                return {
                    folderName: n,
                    folderNameStatus: o,
                    handleFolderNameChange: d,
                    invalidFolderName: "valid" !== o
                }
            }

            function useParentFolder() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tI,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    [l, n] = a.useState(e);
                return {
                    options: [tx, ... function(e) {
                        let t = (0, eu.Ho)(e),
                            l = (0, eu.vy)(t),
                            n = (0, eu.YY)(l);
                        return n.map(e => ({
                            label: e.name,
                            value: e._id,
                            depth: e.depth
                        }))
                    }(t)],
                    parentFolder: l,
                    setParentFolder: n
                }
            }

            function FolderSelect(e) {
                let {
                    "data-automation-id": t,
                    handleChange: l,
                    label: n,
                    marginBottomFactor: r = 3,
                    optionDataAutomationIdPrefix: o,
                    options: i,
                    value: s
                } = e;
                return a.createElement(tF, {
                    "data-automation-id": t,
                    marginBottomFactor: r
                }, a.createElement(tk, null, a.createElement(tA, {
                    htmlFor: "folder"
                }, n)), a.createElement(ty.Ph, {
                    handleChange: l,
                    id: "folder",
                    value: s
                }, i.map(e => a.createElement(ty.Wx, {
                    key: e.value,
                    "data-automation-id": `${o}-${e.label}`,
                    disabled: e.disabled,
                    value: e.value,
                    style: {
                        paddingLeft: 8 * e.depth
                    }
                }, a.createElement("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, e.value !== tI && a.createElement(u.YgN, {
                    size: 14,
                    style: {
                        marginRight: 8
                    }
                }), (0, I.ei)(e.label, 40))))))
            }

            function FolderNameInput(e) {
                let {
                    "data-automation-id": t,
                    folderName: l,
                    folderNameStatus: n,
                    handleFolderNameChange: r,
                    invalidFolderName: o,
                    label: i,
                    marginBottomFactor: s = 3,
                    onSubmit: d
                } = e;
                return a.createElement(tF, {
                    "data-automation-id": t,
                    marginBottomFactor: s
                }, a.createElement(tk, null, a.createElement(tA, {
                    htmlFor: "folderName"
                }, i), o ? a.createElement(tS.Z, {
                    error: !0
                }, tw[n]) : null), a.createElement(tg.Z, null, a.createElement(tC.Z, {
                    id: "folderName",
                    invalid: o,
                    onChange: r,
                    onKeyDown: (0, tv.gT)(d),
                    value: l
                })))
            }
            var tT = l(9757);
            let t_ = (0, m.zo)(e => a.createElement(tg.Z, null, a.createElement(tT.Z, e)))({
                    display: "inline-block",
                    fontSize: 12,
                    textDecoration: "underline"
                }),
                allFoldersSelector = e => e.AssetManagerUIStore.assetManagerFolders,
                allFoldersAndFilterSelector = e => {
                    let {
                        assetManagerFolders: t,
                        filter: l
                    } = e.AssetManagerUIStore;
                    return {
                        assetManagerFolders: t,
                        filter: l
                    }
                };

            function MoveAssetsModalParent(e) {
                let {
                    quantity: t,
                    ...l
                } = e, {
                    modalType: r,
                    openAddAndMoveModal: o,
                    openMoveModal: i
                } = function() {
                    let [e, t] = a.useState("move");
                    return {
                        modalType: e,
                        openAddAndMoveModal: () => t("addAndMove"),
                        openMoveModal: () => t("move")
                    }
                }();
                switch (r) {
                    case "move":
                        return a.createElement(MoveAssetsModal, (0, n.Z)({}, l, {
                            onNewFolderClick: o,
                            quantity: t
                        }));
                    case "addAndMove":
                        return a.createElement(AddFolderAndMoveAssetsModal, (0, n.Z)({}, l, {
                            onExistingFolderClick: i,
                            quantity: t
                        }));
                    default:
                        return null
                }
            }

            function MoveAssetsModal(e) {
                let {
                    onNewFolderClick: t,
                    onSubmit: l,
                    quantity: r,
                    ...i
                } = e, {
                    assetManagerFolders: s,
                    filter: d
                } = (0, _.Yx)(allFoldersAndFilterSelector), {
                    parentFolder: c,
                    options: m,
                    setParentFolder: u
                } = useParentFolder(void 0, s), g = a.useMemo(() => m.map(e => "object" == typeof d && e.value === d.meta._id ? {
                    ...e,
                    disabled: !0
                } : e), [d, m]), p = a.useCallback(() => {
                    l({
                        parentFolder: c,
                        modalType: "move"
                    })
                }, [l, c]);
                return a.createElement(o.QH, (0, n.Z)({
                    title: getModalTitle("Move", r),
                    content: a.createElement(a.Fragment, null, a.createElement(FolderSelect, {
                        "data-automation-id": "DestinationFolderSelect",
                        handleChange: u,
                        label: "Destination Folder",
                        marginBottomFactor: 2,
                        optionDataAutomationIdPrefix: "DestinationFolderOption",
                        options: g,
                        value: c
                    }), a.createElement("div", null, a.createElement(t_, {
                        "data-automation-id": "CreateNewFolder",
                        onClick: t
                    }, "Create New Folder"))),
                    submit: {
                        label: "Move",
                        intent: "primary"
                    },
                    onSubmit: p
                }, i))
            }

            function AddFolderAndMoveAssetsModal(e) {
                let {
                    onExistingFolderClick: t,
                    onSubmit: l,
                    quantity: r,
                    ...i
                } = e, s = (0, _.Yx)(allFoldersSelector), {
                    parentFolder: d,
                    options: c,
                    setParentFolder: m
                } = useParentFolder(tI, s), {
                    folderName: u,
                    folderNameStatus: g,
                    handleFolderNameChange: p,
                    invalidFolderName: E
                } = useFolderName("Untitled", d, s), h = a.useCallback(() => {
                    E || void 0 === d || l({
                        parentFolder: d,
                        folderName: u,
                        modalType: "addAndMove"
                    })
                }, [E, l, d, u]);
                return a.createElement(o.QH, (0, n.Z)({
                    title: `Add folder and ${getModalTitle("move",r)}`,
                    content: a.createElement("div", {
                        "data-automation-id": "Add Folder and Move Assets Modal"
                    }, a.createElement(FolderSelect, {
                        "data-automation-id": "DestinationParentFolderSelect",
                        handleChange: m,
                        label: "Destination Parent Folder",
                        optionDataAutomationIdPrefix: "DestinationParentFolderOption",
                        options: c,
                        value: d
                    }), a.createElement(FolderNameInput, {
                        "data-automation-id": "DestinationFolderNameInput",
                        folderName: u,
                        folderNameStatus: g,
                        handleFolderNameChange: p,
                        invalidFolderName: E,
                        label: "Destination Folder Name",
                        marginBottomFactor: 2,
                        onSubmit: h
                    }), a.createElement("div", null, a.createElement(t_, {
                        "data-automation-id": "UseExistingFolder",
                        onClick: t
                    }, "Move to Existing Folder"))),
                    submit: {
                        label: "Add and Move",
                        intent: "primary"
                    },
                    onSubmit: h
                }, i))
            }
            var tP = l(35575);
            let tM = (0, m.r9)("div")({
                    alignItems: "center",
                    display: "flex",
                    marginLeft: "auto"
                }),
                tD = (0, m.r9)("div")({
                    alignItems: "center",
                    display: "flex"
                }),
                tL = (0, m.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        backgroundColor: t.colors.border,
                        marginLeft: 2 * t.gutters.base,
                        marginRight: 2 * t.gutters.base,
                        width: 1,
                        height: 30
                    }
                }),
                hotSelectingSelector = e => e.AssetManagerUIStore.hotSelecting,
                allAssetsSelector = e => e.AssetStore.assets;

            function AssetsTabBulkOperations() {
                let {
                    allItems: e,
                    selectAllItems: t,
                    selectedItems: l,
                    unselectAllItems: r
                } = useAssetSelectionContext(), i = (0, _.Yx)(hotSelectingSelector), s = function() {
                    let e = (0, _.I0)(),
                        {
                            selectedItems: t,
                            unselectItem: l
                        } = useAssetSelectionContext(),
                        r = t.size;
                    return async () => {
                        let i = await (0, o.vC)(e => a.createElement(MoveAssetsModalParent, (0, n.Z)({}, e, {
                            quantity: r
                        })));
                        if ("confirm" === i.type && i.value) {
                            let {
                                modalType: n,
                                parentFolder: a,
                                folderName: r
                            } = i.value, o = getFolderValue(a), s = Array.from(t);
                            "move" === n && e((0, ef.YH)(s, o)), "addAndMove" === n && e((0, ef._I)({
                                name: r,
                                parent: o,
                                members: s
                            })), l(s)
                        }
                    }
                }(), d = useOpenDeleteAssetsModal(), c = useOpenCompressAssetsModal(), m = (0, _.Yx)(allAssetsSelector), g = tf.dr, p = a.useMemo(() => !!g || Array.from(l).some(e => {
                    let t = m.get(e);
                    return !t || !tP.qn.test(t.fileName)
                }), [m, l, g]);
                return 0 === e.size || i ? null : a.createElement(a.Fragment, null, a.createElement(tM, null, e.size !== l.size ? a.createElement(e1.Z, {
                    "aria-label": "Select all assets",
                    onClick: t
                }, a.createElement(tD, null, a.createElement(u.op, {
                    style: {
                        marginRight: 4
                    }
                }), "Select all")) : null, l.size ? a.createElement(a.Fragment, null, a.createElement(e1.Z, {
                    "aria-label": "Move selected assets",
                    onClick: s
                }, a.createElement(tD, null, a.createElement(u.TPt, {
                    style: {
                        marginRight: 4
                    }
                }), "Move")), a.createElement(w.ZP, {
                    alternate: !0,
                    content: p && !g ? "You can only compress .jpg, .jpeg, .png, or .webp assets." : null
                }, a.createElement(e1.Z, {
                    "aria-label": "compress selected assets",
                    onClick: c,
                    disabled: p
                }, a.createElement(tD, null, a.createElement(u.pgN, {
                    style: {
                        marginRight: 4
                    }
                }), "Compress"))), a.createElement(e1.Z, {
                    "aria-label": "Delete selected assets",
                    onClick: d
                }, a.createElement(tD, null, a.createElement(u.pJl, {
                    style: {
                        marginRight: 4
                    }
                }), "Delete")), a.createElement(tL, null), a.createElement(e1.Z, {
                    "aria-label": "Unselect all assets",
                    onClick: r
                }, "Deselect all")) : null))
            }
            var tZ = l(35155),
                tN = l(75747),
                tU = l(9087),
                tz = l(30087),
                tV = l(23479);
            let tB = (0, m.r9)("div")({
                    borderTop: "$border1",
                    marginTop: "$2"
                }),
                tH = (0, m.nU)({
                    display: "flex",
                    position: "relative"
                }),
                t$ = (0, m.nU)(e => {
                    let {
                        theme: t,
                        depth: l = 0
                    } = e;
                    return {
                        marginRight: 3 * t.gutters.base,
                        marginLeft: 3 * t.gutters.base * l,
                        color: t.colors.foreground
                    }
                }),
                FolderIcon = e => {
                    let {
                        open: t
                    } = e, l = t ? u.ry : u.YgN;
                    return a.createElement(l, {
                        scale: 1.2
                    })
                },
                tR = (0, m.nU)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        paddingRight: 3 * t.gutters.base,
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        transform: "translateY(-50%)"
                    }
                });

            function FolderList(e) {
                let {
                    currentFilter: t,
                    folders: l,
                    handleDeleteFolder: n,
                    handleUpdateFolder: r
                } = e;
                return l.length ? a.createElement(tB, {
                    "data-automation-id": "FolderList"
                }, a.createElement(tp.Z.Section, {
                    style: {
                        justifyContent: "space-between"
                    }
                }, a.createElement("span", null, "Folders"), a.createElement(CollapseExpandAllButton, null)), a.createElement(FolderTree, {
                    currentFilter: t,
                    folders: l,
                    handleDeleteFolder: n,
                    handleUpdateFolder: r
                })) : null
            }
            let tW = (0, i.P1)(e => e.AssetManagerUIStore.assetManagerFolders, e => ({
                    anyExpanded: e.some(e => e.showChildren),
                    noChildren: e.every(e => !e.parent)
                })),
                tG = {
                    height: 20,
                    width: 20
                };

            function CollapseExpandAllButton() {
                let {
                    anyExpanded: e,
                    noChildren: t
                } = (0, _.Yx)(tW), l = (0, _.I0)();
                if (t) return a.createElement(tN.Z, {
                    disabled: !0,
                    icon: a.createElement(u.uhd, null),
                    onClick: () => {},
                    style: tG
                });
                let n = e ? a.createElement(u.W5x, null) : a.createElement(u.uhd, null),
                    r = e ? ef.i6 : ef.yB;
                return a.createElement(w.ZP, {
                    content: e ? "Collapse all" : "Expand all",
                    placement: "top",
                    alternate: !0
                }, a.createElement("div", null, a.createElement(tN.Z, {
                    icon: n,
                    onClick: () => {
                        l(r())
                    },
                    style: tG
                })))
            }

            function FolderTree(e) {
                let {
                    currentFilter: t,
                    depth: l = 0,
                    folders: n,
                    handleDeleteFolder: r,
                    handleUpdateFolder: o
                } = e;
                return n && n.length ? n.map(e => a.createElement(FolderItem, {
                    key: e._id,
                    currentFilter: t,
                    depth: l,
                    folder: e,
                    handleDeleteFolder: r,
                    handleUpdateFolder: o
                })) : null
            }

            function FolderItem(e) {
                let {
                    currentFilter: t,
                    depth: l,
                    folder: n,
                    handleDeleteFolder: r,
                    handleUpdateFolder: o
                } = e, [{
                    hover: i
                }, s] = (0, tU.Z)(), d = (0, _.I0)(), {
                    unselectAllItems: c
                } = useAssetSelectionContext(), {
                    _id: m,
                    children: g,
                    members: p,
                    name: E,
                    showChildren: h = !1
                } = n, f = !!(g && g.length), b = "object" == typeof t && t.meta && t.meta._id === m;
                ! function(e, t, l) {
                    let n = (0, _.I0)();
                    a.useEffect(() => {
                        !t && l && n((0, ef.vw)(e))
                    }, [n, e, t, l])
                }(n._id, f, h);
                let unhover = () => {
                        s.onMouseLeave()
                    },
                    v = {
                        DELETE: () => {
                            r(function getFolderIds(e) {
                                let {
                                    _id: t,
                                    children: l
                                } = e;
                                return l && l.length ? l.reduce((e, t) => [...e, ...getFolderIds(t)], [t]) : [t]
                            }(n))
                        },
                        EDIT: () => {
                            o(n)
                        }
                    };
                return a.createElement(a.Fragment, null, a.createElement("div", s, a.createElement(tH, {
                    "data-automation-id": "FolderItem",
                    hover: i,
                    selected: b
                }, a.createElement(AssetsTabSidebarButton, {
                    "aria-label": E,
                    style: {
                        paddingInlineEnd: 40,
                        position: "relative"
                    },
                    onClick: () => {
                        c(), d((0, ef.AD)({
                            filter: {
                                type: "folder",
                                meta: {
                                    _id: m,
                                    members: p,
                                    name: E
                                }
                            }
                        }))
                    }
                }, a.createElement(t$, {
                    depth: l
                }, a.createElement(FolderIcon, {
                    open: h
                })), a.createElement(tV.Z, null, E), a.createElement(tR, null, a.createElement(FolderSettings, {
                    itemHover: i,
                    handleChange: e => {
                        v[e](), unhover()
                    },
                    hasChildren: f,
                    onClose: unhover
                }), f && a.createElement(tN.Z, {
                    "data-automation-id": "Toggle sub folders",
                    icon: h ? a.createElement(u.XMi, {
                        size: 10
                    }) : a.createElement(u.iBq, {
                        size: 10
                    }),
                    onClick: () => {
                        d((0, ef.Zg)(m))
                    },
                    style: {
                        height: 20,
                        width: 20,
                        paddingLeft: 0,
                        paddingRight: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }))))), f && h && a.createElement(FolderTree, {
                    currentFilter: t,
                    depth: l + 1,
                    folders: g,
                    handleDeleteFolder: r,
                    handleUpdateFolder: o
                }))
            }
            let tO = (0, m.nU)(e => {
                let {
                    hover: t,
                    itemHover: l
                } = e;
                return {
                    height: 20,
                    width: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: t ? 1 : l ? .6 : 0
                }
            });

            function FolderSettings(e) {
                let {
                    handleChange: t,
                    itemHover: l,
                    onClose: n
                } = e;
                return a.createElement(tz.mR, {
                    button: a.createElement(tg.Z, null, a.createElement(tO, {
                        onClick: e => {
                            e.stopPropagation()
                        },
                        "data-automation-id": "Toggle settings",
                        itemHover: l,
                        role: "button"
                    }, a.createElement(u.ewm, null))),
                    "data-automation-id": "Folder settings dropdown",
                    handleChange: t,
                    onClose: n,
                    width: 150
                }, a.createElement(tz.Wx, {
                    label: "Edit Folder",
                    value: "EDIT"
                }), a.createElement(tz.Wx, {
                    label: "Delete Folder",
                    value: "DELETE"
                }))
            }
            var tj = l(96299),
                tY = l(77185);
            let tq = {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                },
                tJ = {
                    marginInlineEnd: "auto"
                },
                tK = (0, m.zo)(tZ.in)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        borderTop: `${t.control.borderWidth}px solid ${t.colors.borderDeep}`
                    }
                });

            function AssetsTabFullView(e) {
                let {
                    allAssetsCount: t,
                    assetManagerFolders: l,
                    filter: o,
                    foundAssets: i,
                    handleCloseFullView: s,
                    handleDeleteFolder: d,
                    handleUpdateFolder: c,
                    query: m,
                    search: u,
                    showAssetDropZone: g,
                    view: p,
                    assetCompressionInProgress: E
                } = e, h = (0, _.I0)();
                return a.createElement(AssetSelectionProvider, {
                    foundAssets: i
                }, a.createElement(e7.default, {
                    "data-automation-id": "AssetsTabFullView",
                    size: r.In
                }, a.createElement(SharedPaneHeader, (0, n.Z)({}, getSharedPaneHeaderProps(e), {
                    useLargeButtons: !0,
                    view: p
                })), a.createElement(tK, null, a.createElement(FullViewFilterList, {
                    currentFilter: o,
                    dispatch: h
                }), a.createElement(FolderList, {
                    currentFilter: o,
                    folders: (0, eu.Ho)(l),
                    handleDeleteFolder: d,
                    handleUpdateFolder: c
                }))), a.createElement(e7.default, {
                    size: eu.JV
                }, a.createElement(e7.default.Head, null, a.createElement(e7.default.Head_BackButton, {
                    "aria-label": "Close Full View",
                    "data-automation-id": "Close Full View",
                    onClick: s
                }), a.createElement(e7.default.Title, null, "string" == typeof o ? eu.dl[o].label : o.meta && o.meta.name ? o.meta.name : null), E && a.createElement(tY.D, {
                    alignItems: "center",
                    "data-automation-id": "assets-compressing-loading-indicator"
                }, a.createElement(J.Z, {
                    small: !0
                }), a.createElement(tj.CK, {
                    style: {
                        marginLeft: 4
                    }
                }, "Compressing...")), a.createElement(AssetsTabBulkOperations, null)), a.createElement("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        position: "relative"
                    }
                }, g ? a.createElement(th.Z, {
                    fullHeight: !0
                }) : a.createElement(a.Fragment, null, a.createElement(FullViewSearch, {
                    query: m,
                    search: u
                }), a.createElement(eN, {
                    bigListColumns: 2,
                    foundAssets: i,
                    gridColumns: 6,
                    smallListColumns: 2
                }))), a.createElement(AssetsTabFooter, null, a.createElement(AssetsTabSortMenu, {
                    style: tJ
                }), a.createElement(FileCountDisplay, {
                    allAssetsCount: t,
                    foundAssets: i,
                    query: m
                }), a.createElement(AssetsTabModeButtons, null))))
            }
            let tQ = (0, m.r9)("div")({
                marginRight: "$3",
                color: "$textDefault"
            });

            function FullViewFilterList(e) {
                let {
                    currentFilter: t,
                    dispatch: l
                } = e, n = (0, em.T)("figma"), {
                    unselectAllItems: r
                } = useAssetSelectionContext(), o = (0, m.EW)(), i = o ? 16 : 20;
                return a.createElement(a.Fragment, null, a.createElement(tp.Z.Section, {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, "Files"), Object.keys(eu.dl).map(e => {
                    if (!n && "figma" === e) return null;
                    let {
                        label: o,
                        icon: s
                    } = eu.dl[e];
                    return a.createElement(AssetsTabSidebarButton, {
                        key: o,
                        "aria-label": o,
                        onClick: () => {
                            l((0, ef.AD)({
                                filter: e
                            })), r()
                        },
                        selected: t === e
                    }, a.createElement(tQ, null, a.createElement(s, {
                        size: i
                    })), o)
                }))
            }
            let tX = (0, m.zo)(h.im)({
                borderLeft: "none",
                borderRight: "none"
            });

            function FullViewSearch(e) {
                let {
                    query: t,
                    search: l
                } = e, {
                    clearQuery: n,
                    focus: r,
                    onBlur: o,
                    onChange: i,
                    onFocus: s,
                    onKeyDown: c
                } = l, {
                    selectedItems: u
                } = useAssetSelectionContext(), g = !!u.size, p = g ? {
                    pointerEvents: "none"
                } : {}, E = g ? d() : n;
                return a.createElement(m.Ni.Provider, {
                    value: m.designerTheme
                }, a.createElement(h.C_, null), a.createElement(tX, null, t && a.createElement(tg.Z, null, a.createElement(h.Tw, {
                    onClick: E,
                    style: p
                })), a.createElement(h.W1, {
                    focus: r
                }), a.createElement(tg.Z, null, a.createElement(h.II, {
                    disabled: g,
                    focus: r,
                    onBlur: o,
                    onChange: i,
                    onFocus: s,
                    onKeyDown: c,
                    placeholder: "Search assets",
                    style: p,
                    value: t
                }))))
            }
            let fileInflection = e => 1 === e ? "file" : "files",
                standardPhrase = e => `${e} ${fileInflection(e)}`;

            function FileCountDisplay(e) {
                let {
                    allAssetsCount: t,
                    foundAssets: l,
                    query: n
                } = e, {
                    selectedItems: r
                } = useAssetSelectionContext();
                return a.createElement("span", {
                    style: tq
                }, r.size ? `Selected ${standardPhrase(r.size)}` : n.length ? `Showing ${l.length} of ${standardPhrase(t)}` : standardPhrase(l.length))
            }
            var t0 = l(53187),
                t1 = l(81413),
                t2 = l(54310),
                t4 = l(40920),
                t9 = l(69175);
            let {
                Head: t7
            } = e7.default, t3 = (0, m.r9)("div")({}), t5 = (0, m.nU)(e => {
                let {
                    theme: t
                } = e;
                return {
                    borderTop: `${t.control.borderWidth}px solid ${t.colors.borderDeep}`,
                    flexBasis: 0,
                    flexGrow: 1
                }
            }), t6 = {
                assetPanelHeaderHeight: 45,
                assetPanelActionsHeight: 45,
                assetPanelSearchHeight: 41,
                assetPanelFooterHeight: 30,
                leftSidebarWidth: t2.LO,
                panelLeftEdgeWidth: r.$L,
                topBarHeight: t2.ag,
                panelTotalWidth: r.In
            }, t8 = {
                assetPanelHeaderHeight: 40,
                assetPanelActionsHeight: 30,
                assetPanelSearchHeight: 41,
                assetPanelFooterHeight: 25,
                leftSidebarWidth: t2.LO,
                panelLeftEdgeWidth: 0,
                topBarHeight: t2.ag,
                panelTotalWidth: r.In - 2
            }, getAssetGridBoxDimensions = (e, t) => {
                let l = e.height;
                return {
                    top: t2.ag + t.assetPanelHeaderHeight + t.assetPanelActionsHeight + t.assetPanelSearchHeight,
                    left: t.leftSidebarWidth + t.panelLeftEdgeWidth,
                    width: t.panelTotalWidth,
                    height: l - (t.topBarHeight + t.assetPanelHeaderHeight + t.assetPanelActionsHeight + t.assetPanelSearchHeight + t.assetPanelFooterHeight)
                }
            };

            function AssetsTabSideView(e) {
                let {
                    assetManagerFolders: t,
                    filter: l,
                    foundAssets: o,
                    handleOpenFullView: i,
                    hotSelecting: s,
                    hotSelectMode: d,
                    mode: c,
                    query: u,
                    responsiveImagesEnabled: g,
                    search: p,
                    showAssetDropZone: h,
                    viewportState: f,
                    view: b
                } = e, v = (0, m.EW)(), y = a.useMemo(() => {
                    let e = v ? t8 : t6;
                    return getAssetGridBoxDimensions(f, e)
                }, [f, v]);
                return a.createElement(m.Ni.Provider, {
                    value: m.$c
                }, a.createElement(t4.Z, {
                    "data-automation-id": "AssetsTabSideView"
                }, a.createElement(e7.default, {
                    size: r.In,
                    style: {
                        borderBottom: "none"
                    }
                }, a.createElement(t3, null, a.createElement(SharedPaneHeader, (0, n.Z)({}, getSharedPaneHeaderProps(e), {
                    actionsSlot: a.createElement(SideViewFilterDropdown, {
                        assetManagerFolders: t,
                        filter: l,
                        hotSelectMode: d
                    }),
                    headingSlot: a.createElement(ExpandToFullView, {
                        handleOpenFullView: i
                    }),
                    view: b
                }))), a.createElement(t5, null, a.createElement(E.Z, {
                    _name: "AssetsTab",
                    id: "assets-tab"
                }, a.createElement(e7.default, {
                    tab: !0,
                    size: "100%",
                    style: {
                        position: "relative"
                    }
                }, g || s ? null : a.createElement(t7, {
                    style: {
                        padding: 0
                    }
                }, a.createElement(E.Z, {
                    grow: 1,
                    _name: "AssetsTab_EnableResponsiveImagesText"
                }, a.createElement(ti.Z, {
                    grow: 1
                }, "Create responsive variants"), a.createElement(ts.Z, {
                    onClick: t1.M_
                }, "Enable Now"))), h ? a.createElement(th.Z, {
                    fullHeight: !0
                }) : a.createElement(a.Fragment, null, a.createElement(SideViewSearch, {
                    query: u,
                    search: p
                }), a.createElement(t0.l_, {
                    box: y
                }, a.createElement(eN, {
                    foundAssets: o
                }))), s ? a.createElement(E.Z, {
                    _name: "AssetsTab_HotSelectHighlight"
                }) : null))), a.createElement(AssetsTabFooter, null, a.createElement(AssetsTabSortMenu, null), a.createElement(SideViewModeDropdown, {
                    mode: c
                })))))
            }
            let le = [{
                    text: "All Assets",
                    type: "all"
                }, {
                    text: "Images",
                    type: "images"
                }, {
                    text: "Documents",
                    type: "documents"
                }, {
                    text: "Lottie",
                    type: "lottie"
                }],
                lt = {
                    text: "Figma",
                    type: "figma"
                },
                ll = (0, m.nU)(e => {
                    let {
                        theme: t
                    } = e, {
                        colors: l,
                        fontFamilies: n,
                        fontWeights: a,
                        gutters: r
                    } = t;
                    return {
                        backgroundColor: l.backgroundDeepAlt,
                        fontFamily: n.heading,
                        fontWeight: a.heading,
                        padding: `${r.x4}px ${4*r.x4}px`
                    }
                });

            function SideViewFilterDropdown(e) {
                let {
                    assetManagerFolders: t,
                    filter: l,
                    hotSelectMode: n
                } = e, r = (0, em.T)("figma"), o = [...le, ...r ? [lt] : []];
                return a.createElement(e4.ZP, {
                    className: "AssetsMenu"
                }, a.createElement(ts.Z, {
                    style: {
                        display: "flex"
                    }
                }, a.createElement(ti.Z, null, "string" == typeof l ? eu.dl[l].label : l.meta && l.meta.name ? (0, I.$G)(l.meta.name, 10) : null), a.createElement(E.Z, null, a.createElement(u.CJ0, null))), a.createElement(e4.ZP.Body, null, a.createElement(e3.Menu, null, a.createElement(MenuItems, {
                    filter: l,
                    hotSelectMode: n,
                    items: o
                }), a.createElement(MenuFolderItems, {
                    assetManagerFolders: t,
                    filter: l,
                    hotSelectMode: n
                }))))
            }

            function MenuItems(e) {
                let {
                    filter: t,
                    hotSelectMode: l,
                    items: n
                } = e;
                return a.createElement(e3.Menu.Section, null, n.map(e => a.createElement(SideViewFilterDropdownItem, {
                    filter: t,
                    hotSelectMode: l,
                    item: e,
                    key: e.meta ? e.meta._id : e.type
                })))
            }

            function MenuFolderItems(e) {
                let {
                    assetManagerFolders: t,
                    filter: l,
                    hotSelectMode: n
                } = e;
                if (!t.length) return null;
                let r = (0, eu.i5)(t);
                return a.createElement(a.Fragment, null, a.createElement(ll, null, "Folders"), a.createElement(MenuItems, {
                    filter: l,
                    hotSelectMode: n,
                    items: r
                }))
            }

            function SideViewFilterDropdownItem(e) {
                let {
                    filter: t,
                    hotSelectMode: l,
                    item: n
                } = e, r = (0, _.I0)(), {
                    depth: o,
                    meta: i,
                    text: s,
                    type: c
                } = n, m = "object" == typeof t && n.meta ? t.meta._id === n.meta._id : t === n.type, g = l && "linkAttachment" !== l;
                return a.createElement(SharedMenuItem, {
                    checked: m,
                    disabled: !!g,
                    onClick: g ? d() : () => {
                        "folder" !== c && r((0, ef.AD)({
                            filter: c
                        })), i && "folder" === c && r((0, ef.AD)({
                            filter: {
                                type: c,
                                meta: i
                            }
                        }))
                    },
                    style: {
                        minWidth: 105,
                        maxWidth: 220,
                        overflow: "hidden"
                    }
                }, a.createElement(ti.Z, {
                    style: {
                        display: "flex"
                    }
                }, "folder" === c && void 0 !== o && a.createElement("span", {
                    style: {
                        display: "inline-block",
                        marginLeft: (o - 1) * 4,
                        marginRight: 4
                    }
                }, a.createElement(u.YgN, {
                    size: 14
                })), (() => {
                    if ("folder" !== c) return s;
                    let e = o || 0;
                    return (0, I.$G)(s, 28 - 2 * e)
                })()))
            }
            let ln = (0, m.zo)(h.im)({
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none"
            });

            function SideViewSearch(e) {
                let {
                    query: t,
                    search: l
                } = e, {
                    clearQuery: n,
                    focus: r,
                    onBlur: o,
                    onChange: i,
                    onFocus: s,
                    onKeyDown: d
                } = l;
                return a.createElement(m.Ni.Provider, {
                    value: m.designerTheme
                }, a.createElement(h.C_, null), a.createElement(ln, null, t && a.createElement(tg.Z, null, a.createElement(h.Tw, {
                    onClick: n
                })), a.createElement(h.W1, {
                    focus: r
                }), a.createElement(tg.Z, null, a.createElement(h.II, {
                    focus: r,
                    onBlur: o,
                    onChange: i,
                    onFocus: s,
                    onKeyDown: d,
                    placeholder: "Search assets",
                    value: t
                }))))
            }
            let la = [{
                text: "Grid",
                type: "grid"
            }, {
                text: "List",
                type: "list"
            }, {
                text: "List - Small",
                type: "smallList"
            }];

            function SideViewModeDropdown(e) {
                let {
                    mode: t
                } = e, l = eu.Iv[t];
                return a.createElement(e4.ZP, {
                    className: "AssetsMenu",
                    right: !0
                }, a.createElement(e4.ZP.Body, {
                    style: {
                        top: "initial",
                        bottom: "100%"
                    }
                }, a.createElement(e3.Menu, null, la.map(e => {
                    let {
                        text: l,
                        type: n
                    } = e;
                    return a.createElement(ModeItem, {
                        key: n,
                        mode: t,
                        text: l,
                        type: n
                    })
                }))), a.createElement(ts.Z, {
                    style: {
                        display: "block"
                    }
                }, a.createElement(l, null)))
            }

            function ModeItem(e) {
                let {
                    mode: t,
                    text: l,
                    type: n
                } = e, r = (0, _.I0)(), o = eu.Iv[n];
                return a.createElement(SharedMenuItem, {
                    checked: n === t,
                    onClick: () => {
                        r((0, ef.gh)({
                            mode: n
                        }))
                    }
                }, a.createElement(u.Ugi, null, a.createElement(o, null), a.createElement(ti.Z, {
                    style: {
                        display: "inline-block"
                    }
                }, l)))
            }

            function ExpandToFullView(e) {
                let {
                    handleOpenFullView: t
                } = e;
                return a.createElement(t9.Z, {
                    content: "Expand Assets Panel"
                }, a.createElement(q.ZP, {
                    sizing: "small",
                    structure: "ghost",
                    icon: !0,
                    style: {
                        marginRight: 4
                    },
                    onClick: t,
                    "aria-label": "Expand to Full View",
                    "data-automation-id": "Expand to Full View"
                }, a.createElement(u.cN4, null)))
            }
            var lr = l(84173);
            let lo = (0, i.P1)(e => e.AssetManagerUIStore.view, e => e.AssetManagerUIStore.assetCompressionInProgress, (e, t) => ({
                view: e,
                assetCompressionInProgress: t
            }));

            function AssetsTabViewController(e) {
                let t = (0, _.I0)(),
                    {
                        view: l,
                        assetCompressionInProgress: r
                    } = (0, _.Yx)(lo),
                    o = a.useCallback(() => t((0, lr.Q$)()), [t]),
                    i = a.useCallback(() => t((0, lr.rR)()), [t]);
                switch (l) {
                    case eu.nk.FULL:
                        return a.createElement(AssetsTabFullView, (0, n.Z)({}, e, {
                            handleCloseFullView: i,
                            assetCompressionInProgress: r
                        }));
                    case eu.nk.SIDE:
                    default:
                        return a.createElement(AssetsTabSideView, (0, n.Z)({}, e, {
                            handleOpenFullView: o
                        }))
                }
            }
            var li = l(56478),
                ls = l(29787);
            let ld = (0, i.P1)(e => e.AssetManagerUIStore.assetManagerFolders, e => e.AssetManagerUIStore.filter, (e, t) => ({
                assetManagerFolders: e,
                filter: t
            }));

            function AddFolderModal(e) {
                let t = (0, _.I0)(),
                    {
                        assetManagerFolders: l,
                        filter: r
                    } = (0, _.Yx)(ld);
                return a.createElement(SharedFolderModal, (0, n.Z)({}, e, {
                    "data-automation-id": "AddFolderModal",
                    folders: l,
                    handleSubmit: e => {
                        let {
                            folderName: l,
                            parentFolder: n
                        } = e, a = {
                            name: l,
                            parent: getFolderValue(n)
                        };
                        t((0, ef.DB)(a))
                    },
                    initialFolderName: "Untitled",
                    initialParentFolder: "object" == typeof r && "folder" === r.type ? r.meta._id : tI,
                    title: "Create new folder",
                    confirmLabel: "Create"
                }))
            }

            function DeleteFolderModal(e) {
                let {
                    quantity: t,
                    ...l
                } = e;
                return a.createElement(o.QH, (0, n.Z)({
                    title: "Delete folder and assets",
                    content: a.createElement(a.Fragment, null, "You're about to delete ", t, " ", (0, I._6)(t, "asset"), ". Are you sure?"),
                    submit: {
                        label: "Delete",
                        intent: "danger"
                    }
                }, l))
            }
            let editFolderModalSelector = e => e.AssetManagerUIStore.assetManagerFolders,
                getInitialParent = e => e || tI;

            function EditFolderModal(e) {
                let {
                    folder: t,
                    ...l
                } = e, {
                    _id: r,
                    name: o,
                    parent: i
                } = t, s = (0, _.I0)(), d = (0, _.Yx)(editFolderModalSelector), c = function(e, t) {
                    let l = function getInvalidParentFolderIds(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set,
                            {
                                children: l,
                                _id: n
                            } = e;
                        if (t.add(n), !l || !l.length) return t;
                        for (let e of l) getInvalidParentFolderIds(e, t);
                        return t
                    }(t);
                    return e.filter(e => !l.has(e._id))
                }(d, t);
                return a.createElement(SharedFolderModal, (0, n.Z)({}, l, {
                    "data-automation-id": "EditFolderModal",
                    folders: c,
                    handleSubmit: e => {
                        let {
                            folderName: t,
                            parentFolder: l
                        } = e, n = {};
                        t !== o && (n.name = t), l !== i && (n.parent = getFolderValue(l)), Object.keys(n).length && s((0, ef.k0)({
                            id: r,
                            update: n
                        }))
                    },
                    initialFolderName: o,
                    initialParentFolder: getInitialParent(i),
                    title: "Edit folder",
                    confirmLabel: "Save"
                }))
            }
            let getSearchableText = e => e.origFileName,
                lc = (0, c.nC)(e => {
                    let {
                        AssetStore: {
                            assets: t
                        },
                        AssetManagerUIStore: {
                            assetManagerFolders: l,
                            dropzones: n,
                            filter: a,
                            hotSelecting: r,
                            hotSelectMode: o,
                            hotSelectSpec: i,
                            linkUploadHidden: s,
                            mode: d,
                            order: c,
                            query: m,
                            sort: u,
                            view: g,
                            assetCompressionInProgress: p
                        },
                        SiteDataStore: {
                            allowDocumentUploads: E
                        },
                        ResponsiveImageStore: {
                            enabled: h
                        },
                        UiStore: {
                            asset: f
                        },
                        ViewportStore: b
                    } = e;
                    return {
                        assetManagerFolders: l,
                        allowDocumentUploads: E,
                        assets: t,
                        dropzones: n,
                        filter: a,
                        hotSelecting: r,
                        hotSelectMode: o,
                        hotSelectSpec: i,
                        linkUploadHidden: s,
                        mode: d,
                        openAssetId: f,
                        order: c,
                        query: m,
                        responsiveImagesEnabled: h,
                        sort: u,
                        view: g,
                        viewportState: b,
                        assetCompressionInProgress: p
                    }
                }, e => ({
                    addFolderWorkflowInitiated: () => {
                        e((0, ef.qf)())
                    },
                    bulkDeleteAssetManagerFolders: t => {
                        e((0, ef.fh)({
                            folderIds: t
                        }))
                    },
                    bulkUnregisterAssets: t => {
                        e((0, tb.hP)(t))
                    },
                    cancelHotSelect: () => {
                        e((0, ef.xs)())
                    },
                    clearQuery: () => {
                        e((0, ef.aj)(""))
                    },
                    closeLinkUpload: () => {
                        e((0, ef.rH)())
                    },
                    onQueryChange: t => {
                        e((0, ef.aj)(t))
                    },
                    openLinkUpload: () => {
                        e((0, ef.h0)())
                    },
                    hidePanel: () => {
                        e((0, r.sX)("left"))
                    }
                }))(function(e) {
                    let {
                        addFolderWorkflowInitiated: t,
                        allowDocumentUploads: l,
                        assetManagerFolders: r,
                        assets: i,
                        bulkDeleteAssetManagerFolders: s,
                        bulkUnregisterAssets: d,
                        cancelHotSelect: c,
                        clearQuery: m,
                        closeLinkUpload: u,
                        dropzones: g,
                        filter: p,
                        flux: E,
                        hidePanel: h,
                        hotSelecting: f,
                        hotSelectMode: v,
                        hotSelectSpec: y,
                        linkUploadHidden: C,
                        mode: S,
                        onQueryChange: A,
                        openAssetId: F,
                        openLinkUpload: k,
                        order: I,
                        query: x,
                        responsiveImagesEnabled: w,
                        sort: T,
                        view: _,
                        viewportState: P,
                        assetCompressionInProgress: M
                    } = e, D = a.useCallback(() => {
                        t(), (0, o.vC)(AddFolderModal)
                    }, [t]), L = a.useCallback(e => {
                        let t = new Set(e),
                            l = r.filter(e => t.has(e._id)),
                            n = l.reduce((e, t) => [...e, ...t.members], []);
                        return n
                    }, [r]), Z = a.useCallback(async (e, t) => {
                        let l = await (0, o.vC)(t => a.createElement(DeleteFolderModal, (0, n.Z)({}, t, {
                            quantity: e.length
                        })));
                        "confirm" === l.type && (d(e), s(t))
                    }, [s, d]), N = a.useCallback(e => {
                        let t = L(e);
                        if (!t.length) {
                            s(e);
                            return
                        }
                        Z(t, e)
                    }, [s, L, Z]), U = a.useCallback(e => {
                        (0, o.vC)(t => a.createElement(EditFolderModal, (0, n.Z)({}, t, {
                            folder: e
                        })))
                    }, []), z = a.useCallback(() => {
                        f ? c() : h()
                    }, [c, h, f]), V = a.useCallback(e => {
                        let {
                            confirmAllowDocumentUploads: t
                        } = E.__DEPRECATED__getCreators("__DEPRECATED__ConfirmActionCreators"), {
                            freePlanFiles: n,
                            paidPlanFiles: a
                        } = (0, li._)(e);
                        l ? (0, eq.vv)({
                            blobs: e
                        }) : a.length > 0 ? t() : n.length > 0 && (0, eq.vv)({
                            blobs: e
                        })
                    }, [l, E]), B = a.useMemo(() => {
                        let e = (0, b.zz)(i.toList(), p),
                            t = (0, b.Rw)(e, T, I).toList(),
                            l = (0, b.Ym)(t).toArray();
                        return l
                    }, [i, p, I, T]), [H, {
                        focus: $
                    }, {
                        onKeyDown: R,
                        onBlur: W,
                        onChange: G,
                        onFocus: O
                    }] = (0, ls.Z)({
                        query: x,
                        onQueryChange: A,
                        items: B,
                        getSearchableText
                    }), j = a.useCallback(e => {
                        "Escape" === e.key && m(), R(e)
                    }, [m, R]);
                    a.useEffect(() => () => {
                        C || u()
                    }, [u, C]);
                    let Y = {
                        allAssetsCount: B.length,
                        assetManagerFolders: r,
                        closeLinkUpload: u,
                        filter: p,
                        flux: E,
                        foundAssets: H,
                        handleAddFolder: D,
                        handleDeleteFolder: N,
                        handleUpdateFolder: U,
                        handleUpload: V,
                        handleXClick: z,
                        hotSelecting: f,
                        hotSelectMode: v,
                        hotSelectSpec: y,
                        linkUploadHidden: C,
                        mode: S,
                        openAssetId: F,
                        openLinkUpload: k,
                        order: I,
                        query: x,
                        responsiveImagesEnabled: w,
                        search: {
                            clearQuery: m,
                            focus: $,
                            onBlur: W,
                            onChange: G,
                            onFocus: O,
                            onKeyDown: j
                        },
                        showAssetDropZone: g.leftSidebar,
                        sort: T,
                        view: _,
                        viewportState: P,
                        assetCompressionInProgress: M
                    };
                    return a.createElement(AssetsTabViewController, Y)
                })
        }
    }
]);
//# sourceMappingURL=webflow-designer.2b9fe7b6c64971bd8705.chunk-ep.js.map