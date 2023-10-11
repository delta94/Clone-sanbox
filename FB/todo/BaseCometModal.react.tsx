__d("BaseCometModal.react", ["BaseContextualLayerAnchorRoot.react", "BaseDocumentScrollView.react", "BaseHeadingContext", "BasePortal.react", "BaseThemeProvider.react", "CometHeroInteractionContextPassthrough.react", "CometHeroInteractionWithDiv.react", "CometLayerKeyCommandWrapper.react", "FocusRegion.react", "HiddenSubtreeContext", "cr:1024", "cr:1829844", "focusScopeQueries", "getGeoAndCometModalCompatible", "react", "stylex", "useCometVisualChangeTracker", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react")), k = i.useContext, l = {
        content: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            minHeight: "xg6iff7",
            position: "x1n2onr6",
            $$css: !0
        },
        contentDvh: {
            "@supports (min-height: 100dvh)_minHeight": "xippug5",
            $$css: !0
        },
        contentDvhWhenNarrow: {
            "@media (max-width: 679px)_minHeight": "xwnxf6m",
            $$css: !0
        },
        hidden: {
            visibility: "xlshs6z",
            $$css: !0
        },
        mask: {
            bottom: "x1ey2m1c",
            end: "xds687c",
            position: "xixxii4",
            start: "x17qophe",
            top: "x13vifvy",
            $$css: !0
        },
        maskOverlay: {
            backgroundColor: "x1h0vfkc",
            $$css: !0
        },
        root: {
            position: "x1n2onr6",
            $$css: !0
        },
        rootStatic: {
            position: "x1uhb9sk",
            $$css: !0
        }
    }, m = {
        "above-everything": {
            zIndex: "x1vjfegm",
            $$css: !0
        },
        "above-nav": {
            zIndex: "xzkaem6",
            $$css: !0
        },
        normal: {
            zIndex: "x1ja2u2z",
            $$css: !0
        }
    };
    function a(a) {
        var e = a.blockKeyCommands;
        e = e === void 0 ? !1 : e;
        var f = a.children
          , g = a.contextKey
          , i = a.hidden;
        i = i === void 0 ? !1 : i;
        var n = a.interactionDesc
          , o = a.interactionUUID
          , p = a.isOverlayTransparent;
        p = p === void 0 ? !1 : p;
        var q = a.noPortal;
        q = q === void 0 ? !1 : q;
        var r = a.shouldUseDvhMinHeight;
        r = r === void 0 ? !1 : r;
        a = a.stackingBehavior;
        a = a === void 0 ? "auto" : a;
        var s = k(c("HiddenSubtreeContext"));
        s = s.hidden;
        var t = c("useStable")(function() {
            return o !== void 0
        })
          , u = c("useCometVisualChangeTracker")();
        p = j.jsxs(j.Fragment, {
            children: [j.jsx("div", {
                className: (h || (h = c("stylex")))(l.mask, !p && l.maskOverlay)
            }), j.jsx(c("BaseContextualLayerAnchorRoot.react"), {
                children: j.jsx(d("FocusRegion.react").FocusRegion, {
                    autoFocusQuery: d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                    autoRestoreFocus: !0,
                    containFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
                    recoverFocusQuery: d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                    children: e ? f : j.jsx(c("CometLayerKeyCommandWrapper.react"), {
                        debugName: "modal layer",
                        children: f
                    })
                })
            })]
        });
        b("cr:1829844") != null && (p = j.jsx(b("cr:1829844"), {
            name: "modal",
            children: p
        }));
        e = s ? "normal" : a;
        var v = [e === "auto" ? l.rootStatic : l.root, i && l.hidden, e !== "auto" && (b("cr:1024") != null && c("getGeoAndCometModalCompatible")() ? b("cr:1024")[e] : m[e])]
          , w = j.jsx(c("BaseDocumentScrollView.react"), {
            contextKey: g,
            hiddenWhenDetached: i,
            children: j.jsx(c("BaseHeadingContext").Provider, {
                value: 1,
                children: t ? j.jsx(c("CometHeroInteractionContextPassthrough.react"), {
                    clear: !0,
                    children: j.jsx(c("CometHeroInteractionWithDiv.react"), {
                        interactionDesc: n,
                        interactionUUID: o,
                        ref: u,
                        xstyle: [l.content, r && l.contentDvh, l.contentDvhWhenNarrow],
                        children: p
                    })
                }) : j.jsx("div", {
                    className: (h || (h = c("stylex")))(l.content, r && l.contentDvh),
                    ref: u,
                    children: p
                })
            })
        });
        return q ? j.jsx(c("BaseThemeProvider.react"), {
            children: function(a, b) {
                return j.jsx("div", {
                    className: (h || (h = c("stylex")))(a, v),
                    style: b,
                    children: w
                })
            }
        }) : j.jsx(c("BasePortal.react"), {
            hidden: s,
            xstyle: v,
            children: w
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);








import React, { Fragment, useContext, useRef } from 'react';
import {
    BaseContextualLayerAnchorRoot,
    BaseDocumentScrollView,
    BaseHeadingContext,
    BasePortal,
    BaseThemeProvider,
    CometHeroInteractionContextPassthrough,
    CometHeroInteractionWithDiv,
    CometLayerKeyCommandWrapper,
    FocusRegion,
    stylex,
    useCometVisualChangeTracker,
    useStable,
    focusScopeQueries
} from './pathToImports';  // You will need to provide the correct import paths

// Styles
const styles = {
    content: {
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        minHeight: "xg6iff7",
        position: "x1n2onr6",
        $$css: !0
    },
    contentDvh: {
        "@supports (min-height: 100dvh)_minHeight": "xippug5",
        $$css: !0
    },
    contentDvhWhenNarrow: {
        "@media (max-width: 679px)_minHeight": "xwnxf6m",
        $$css: !0
    },
    hidden: {
        visibility: "xlshs6z",
        $$css: !0
    },
    mask: {
        bottom: "x1ey2m1c",
        end: "xds687c",
        position: "xixxii4",
        start: "x17qophe",
        top: "x13vifvy",
        $$css: !0
    },
    maskOverlay: {
        backgroundColor: "x1h0vfkc",
        $$css: !0
    },
    root: {
        position: "x1n2onr6",
        $$css: !0
    },
    rootStatic: {
        position: "x1uhb9sk",
        $$css: !0
    }
}

const zIndexes = {
    "above-everything": {
        zIndex: "x1vjfegm",
        $$css: !0
    },
    "above-nav": {
        zIndex: "xzkaem6",
        $$css: !0
    },
    normal: {
        zIndex: "x1ja2u2z",
        $$css: !0
    }
}

type ModalProps = {
    blockKeyCommands?: boolean,
    children: React.ReactNode,
    contextKey?: string,
    hidden?: boolean,
    interactionDesc?: string,
    interactionUUID?: string,
    isOverlayTransparent?: boolean,
    noPortal?: boolean,
    shouldUseDvhMinHeight?: boolean,
    stackingBehavior?: 'auto' | 'above-everything' | 'above-nav'
}

const BaseCometModal: React.FC<ModalProps> = ({
    blockKeyCommands = false,
    children,
    contextKey,
    hidden = false,
    interactionDesc,
    interactionUUID,
    isOverlayTransparent = false,
    noPortal = false,
    shouldUseDvhMinHeight = false,
    stackingBehavior = 'auto'
}) => {

    const hiddenContext = useContext(BaseHeadingContext);
    const isHidden = hiddenContext.hidden;

    const isInteractionUUIDDefined = useStable(() => interactionUUID !== undefined);
    const visualChangeTrackerRef = useCometVisualChangeTracker();

    let content = (
        <Fragment>
            <div className={stylex(styles.mask, !isOverlayTransparent && styles.maskOverlay)} />
            <BaseContextualLayerAnchorRoot>
                <FocusRegion autoFocusQuery={focusScopeQueries.headerFirstTabbableSecondScopeQuery} containFocusQuery={focusScopeQueries.tabbableScopeQuery}>
                    {blockKeyCommands ? children : (
                        <CometLayerKeyCommandWrapper debugName="modal layer">
                            {children}
                        </CometLayerKeyCommandWrapper>
                    )}
                </FocusRegion>
            </BaseContextualLayerAnchorRoot>
        </Fragment>
    );

    const effectiveStackingBehavior = isHidden ? 'normal' : stackingBehavior;
    const rootStyles = [
        effectiveStackingBehavior === 'auto' ? styles.rootStatic : styles.root,
        hidden && styles.hidden,
    ];

    const wrappedContent = (
        <BaseDocumentScrollView contextKey={contextKey} hiddenWhenDetached={hidden}>
            <BaseHeadingContext.Provider value={1}>
                {isInteractionUUIDDefined ? (
                    <CometHeroInteractionContextPassthrough clear={true}>
                        <CometHeroInteractionWithDiv interactionDesc={interactionDesc} interactionUUID={interactionUUID} ref={visualChangeTrackerRef}>
                            {content}
                        </CometHeroInteractionWithDiv>
                    </CometHeroInteractionContextPassthrough>
                ) : (
                    <div className={stylex(styles.content, shouldUseDvhMinHeight && styles.contentDvh)} ref={visualChangeTrackerRef}>
                        {content}
                    </div>
                )}
            </BaseHeadingContext.Provider>
        </BaseDocumentScrollView>
    );

    return noPortal ? (
        <BaseThemeProvider>
            {(themeStyles, themeProperties) => (
                <div className={stylex(themeStyles, ...rootStyles)} style={themeProperties}>
                    {wrappedContent}
                </div>
            )}
        </BaseThemeProvider>
    ) : (
        <BasePortal hidden={isHidden} xstyle={rootStyles}>
            {wrappedContent}
        </BasePortal>
    );
}

export default BaseCometModal;
