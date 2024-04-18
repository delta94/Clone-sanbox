__d("BasePopoverTrigger.react", ["BaseButtonPopoverContext", "BaseContextualLayer.react", "BasePopoverLayerVisibility.react", "BaseScrollableAreaContext", "CometErrorBoundary.react", "CometEventTimings", "CometHeroInteractionContextPassthrough.react", "CometHeroInteractionWithDiv.react", "CometHeroLogging", "CometHideLayerOnEscape.react", "CometMenuContext", "CometPlaceholder.react", "cr:1791018", "cr:1802022", "cr:1802023", "gkx", "react", "useCometPrerenderer", "useMergeRefs", "useOnOutsideClick", "useVisibilityObserver"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useCallback,
        k = e.useContext,
        l = e.useImperativeHandle,
        m = e.useLayoutEffect,
        n = e.useMemo,
        o = e.useRef,
        p = e.useState,
        q = c("gkx")("8058");

    function r(a) {
        var b = a.content;
        a = a.fallback;
        return i.jsx(c("CometPlaceholder.react"), {
            fallback: (a = a) != null ? a : null,
            children: b
        })
    }
    r.displayName = r.name + " [from " + f.id + "]";

    function s(a) {
        var b = a.contextualLayerRef;
        m(function () {
            var a = b.current;
            a && a.reposition({
                autoflip: !0
            })
        }, [b]);
        return null
    }

    function a(a) {
        var e = a.children,
            f = a.doNotCloseOnOutsideClick,
            g = f === void 0 ? !1 : f,
            h = a.fallback;
        f = a.imperativeRef;
        var t = a.interactionTracker,
            u = a.onHighIntentPreload,
            v = a.onLayerDetached,
            w = a.onVisibilityChange,
            x = a.popover,
            y = a.popoverRenderer,
            z = y === void 0 ? r : y,
            A = a.popoverPreloadResource,
            B = a.popoverProps;
        y = a.popoverType;
        var C = y === void 0 ? "dialog" : y;
        y = a.preloadTrigger;
        a.tracePolicy;
        var D = a.visibleOnLoad,
            E = D === void 0 ? !1 : D,
            F = a.triggerOutsideClickOnDrag,
            G = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "doNotCloseOnOutsideClick", "fallback", "imperativeRef", "interactionTracker", "onHighIntentPreload", "onLayerDetached", "onVisibilityChange", "popover", "popoverRenderer", "popoverPreloadResource", "popoverProps", "popoverType", "preloadTrigger", "tracePolicy", "visibleOnLoad", "triggerOutsideClickOnDrag"]),
            H = o(!1);
        D = p(!1);
        var I = D[0],
            J = D[1];
        a = p(null);
        var K = a[0],
            L = a[1],
            M = o(null),
            N = o(null),
            O = j(function (a) {
                J(a), w && w(a)
            }, [w]),
            P = j(function () {
                O(!1), L(null), N.current = null
            }, [O]),
            Q = j(function (a) {
                if (!I)
                    if (t == null) O(!0);
                    else {
                        a = d("CometEventTimings").getCurrentQueueTime(a == null ? void 0 : a.timeStamp);
                        var b = a[0];
                        a = a[1];
                        t(function (a) {
                            N.current = a, O(!0), L(c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(a.getTraceId()))
                        }, b, a)
                    }
            }, [I, t, O]);
        l(f, function () {
            return {
                hide: function () {
                    P()
                },
                show: function () {
                    Q()
                }
            }
        }, [Q, P]);
        D = j(function (a) {
            b("CometInteractionVC") && a != null && K != null && b("CometInteractionVC").addMutationRootForTraceId(K, a)
        }, [K]);
        var R = o(null);
        a = c("useCometPrerenderer")(y, I, A, u);
        f = a[0];
        y = a[1];
        u = a[2];
        var S = a[3];
        a = a[4];
        m(function () {
            E === !0 && H.current === !1 && (H.current = !0, Q())
        }, [Q, E]);
        var T = k(c("BaseScrollableAreaContext")),
            U = c("useVisibilityObserver")({
                onHidden: j(function (a) {
                    a = a.hiddenReason;
                    if (a === "COMPONENT_UNMOUNTED") return;
                    a = T[T.length - 1];
                    a != null && P()
                }, [P, T])
            }),
            V = n(function () {
                switch (C) {
                    case "menu":
                        return {
                            expanded: I, haspopup: "menu"
                        };
                    case "dialog":
                    default:
                        return null
                }
            }, [I, C]),
            W = j(function (a) {
                M.current = a != null ? a : null, U(a)
            }, [U]),
            X = function () {
                var a = N.current,
                    b = a == null ? void 0 : a.getTrace();
                if (a == null || b == null) return;
                b = b.traceStatus;
                if (b != null && b !== "START") return;
                b = !0;
                a.cancelTrace("close_popover", b)
            },
            Y = j(function () {
                g || (q && X(), P())
            }, [g, P]);
        Y = c("useOnOutsideClick")(I ? Y : null, n(function () {
            return {
                isTargetEligible: function (a) {
                    var b = M.current;
                    return b != null ? !b.contains(a) : !0
                },
                triggerOutsideClickOnDrag: F
            }
        }, [F]));
        var Z = j(function (a) {
                I ? P() : Q(a)
            }, [I, P, Q]),
            $ = c("useMergeRefs")(Y, D),
            aa = n(function () {
                return {
                    onClose: P
                }
            }, [P]),
            ba = C === "menu";
        return i.jsxs(i.Fragment, {
            children: [i.jsx(c("BaseButtonPopoverContext").Provider, {
                value: V,
                children: e(W, Z, P, y, u, S, a, I)
            }), i.jsx(c("CometErrorBoundary.react"), {
                children: i.jsx(b("CometPrerenderer"), {
                    prerenderingProps: f,
                    children: function (a) {
                        return i.createElement(c("BaseContextualLayer.react"), babelHelpers["extends"]({}, a, G, {
                            containFocus: !0,
                            contextRef: M,
                            customContainer: b("CometPrerenderer"),
                            imperativeRef: R,
                            key: "popover",
                            onEscapeFocusRegion: ba ? P : void 0,
                            ref: $
                        }), i.jsx(c("CometHideLayerOnEscape.react"), {
                            onHide: P,
                            children: i.jsx(c("CometMenuContext").Provider, {
                                value: aa,
                                children: i.jsx(c("CometHeroInteractionContextPassthrough.react"), {
                                    clear: !0,
                                    children: i.jsx(c("CometHeroInteractionWithDiv.react"), {
                                        interactionDesc: "popover_" + (A != null ? A.getModuleId() : "Unknown"),
                                        interactionUUID: K,
                                        children: i.jsx(c("BasePopoverLayerVisibility.react"), {
                                            onLayerDetached: v,
                                            children: z({
                                                content: i.jsxs(i.Fragment, {
                                                    children: [i.jsx(s, {
                                                        contextualLayerRef: R
                                                    }), i.jsx(x, babelHelpers["extends"]({}, B, {
                                                        onClose: P
                                                    }))]
                                                }),
                                                fallback: i.jsxs(i.Fragment, {
                                                    children: [i.jsx(s, {
                                                        contextualLayerRef: R
                                                    }), h]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }))
                    }
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { 
    useCallback, 
    useContext, 
    useImperativeHandle, 
    useLayoutEffect, 
    useMemo, 
    useRef, 
    useState 
  } from 'react';
  
  import { BaseButtonPopoverContext } from 'BaseButtonPopoverContext';
  import { BaseContextualLayer } from 'BaseContextualLayer.react';
  import { BasePopoverLayerVisibility } from 'BasePopoverLayerVisibility.react';
  import { BaseScrollableAreaContext } from 'BaseScrollableAreaContext';
  import { CometErrorBoundary } from 'CometErrorBoundary.react';
  import { CometEventTimings } from 'CometEventTimings';
  import { CometHeroInteractionContextPassthrough } from 'CometHeroInteractionContextPassthrough.react';
  import { CometHeroInteractionWithDiv } from 'CometHeroInteractionWithDiv.react';
  import { CometHeroLogging } from 'CometHeroLogging';
  import { CometInteractionVC } from 'CometInteractionVC';
  import { CometHideLayerOnEscape } from 'CometHideLayerOnEscape.react';
  import { CometMenuContext } from 'CometMenuContext';
  import { CometPlaceholder } from 'CometPlaceholder.react';
  import { gkx } from 'gkx';
  import { useCometPrerenderer } from 'useCometPrerenderer';
  import { useMergeRefs } from 'useMergeRefs';
  import { useOnOutsideClick } from 'useOnOutsideClick';
  import { useVisibilityObserver } from 'useVisibilityObserver';
  
  import { PopoverProps } from 'PopoverProps';
  
  interface Props {
    children: React.ReactNode;
    doNotCloseOnOutsideClick?: boolean;
    fallback?: React.ReactNode;
    imperativeRef?: (instance: PopoverRef | null) => void;
    interactionTracker?: (callback: (trace: InteractionTracingData) => void, queueTime: number, eventTime: number) => void;
    onHighIntentPreload?: () => void;
    onLayerDetached?: () => void;
    onVisibilityChange?: (visible: boolean) => void;
    popover: React.ReactNode;
    popoverRenderer?: (props: {
      content: React.ReactNode;
      fallback?: React.ReactNode;
    }) => JSX.Element;
    popoverPreloadResource?: Prerenderable; 
    popoverProps?: PopoverProps;
    popoverType?: 'menu' | 'dialog';
    preloadTrigger?: () => void;
    tracePolicy?: TracePolicy;
    visibleOnLoad?: boolean;
    triggerOutsideClickOnDrag?: boolean;
  }
  
  interface PopoverRef {
    hide: () => void;
    show: () => void; 
  }

  const PopoverRenderer = ({ content, fallback }) => (
    <CometPlaceholder fallback={fallback}>
        {content}
    </CometPlaceholder>
  )
  
  const BasePopoverTrigger: React.FC<Props> = ({
    children,
    doNotCloseOnOutsideClick = false,
    fallback,
    imperativeRef,
    interactionTracker,
    onHighIntentPreload,
    onLayerDetached,
    onVisibilityChange,
    popover,
    popoverRenderer = PopoverRenderer,
    popoverPreloadResource,
    popoverProps,
    popoverType = 'dialog',
    preloadTrigger,
    tracePolicy,
    visibleOnLoad = false,
    triggerOutsideClickOnDrag,
    ...layerProps
  }) => {
    const initialRender = useRef(false);
    const [visible, setVisible] = useState(false);
    const [interactionUUID, setInteractionUUID] = useState<string | null>(null);
    const contextRef = useRef<HTMLDivElement>(null);
    const contextualLayerRef = useRef<HTMLDivElement>(null);
    const layerRef = useRef<BaseContextualLayerRef>(null);

    const handleVisibilityChange = useCallback((visible: boolean) => {
        setVisible(visible);
        onVisibilityChange?.(visible);
    }, [onVisibilityChange]);

    const closePopover = useCallback(() => {
        handleVisibilityChange(false);
        setInteractionUUID(null);
        layerRef.current = null; 
    }, [handleVisibilityChange]);


    const openPopover = useCallback((event?: React.MouseEvent) => {
        if (!visible) {
            if (interactionTracker) {
                const queueTime = CometEventTimings.getCurrentQueueTime(event?.timeStamp);
                const [queueTimeMs, eventTimeMs] = queueTime;

                interactionTracker((trace) => {
                    layerRef.current = trace;
                    handleVisibilityChange(true);
                    setInteractionUUID(
                      CometHeroLogging.genHeroInteractionUUIDAndMarkStart(trace.getTraceId())  
                    );
                }, queueTimeMs, eventTimeMs);

            } else {
                handleVisibilityChange(true);
            }
        }
    }, [visible, handleVisibilityChange, interactionTracker]);
  
    useImperativeHandle(imperativeRef, () => ({
        hide: closePopover,
        show: openPopover
    }), [closePopover, openPopover]);

    const addTraceToMutationRoot = useCallback((root: Element) => {
        if (CometInteractionVC && interactionUUID && root) {
          CometInteractionVC.addMutationRootForTraceId(interactionUUID, root); 
        }
    }, [interactionUUID]);


    const [prerenderingProps, prerendering, preloading, onPreload, _preloadTrigger] = 
    useCometPrerenderer(
        preloadTrigger,
        visible,
        popoverPreloadResource,
        onHighIntentPreload
    );

    useLayoutEffect(() => {
        if (visibleOnLoad && initialRender.current === false) {
          initialRender.current = true;
          openPopover();
        }
    }, [visibleOnLoad, openPopover]);
  
    const scrollContainers = useContext(BaseScrollableAreaContext);

    const visibilityObserver = useVisibilityObserver({
        onHidden: useCallback((event) => {
          if (event.hiddenReason === 'COMPONENT_UNMOUNTED') {
            return;
          }
          
          const topScrollContainer = scrollContainers[scrollContainers.length - 1];
          if (topScrollContainer) {
            closePopover(); 
          }
        }, [closePopover, scrollContainers])
    });

    const contextValue = useMemo(() => {
        switch (popoverType) {
          case 'menu':
            return {
              expanded: visible,
              haspopup: 'menu'
            };
          case 'dialog': 
          default:
            return null;
        }
    }, [visible, popoverType]);

    const setObserverElement = useCallback(
        (element: HTMLElement | null) => {
            contextRef.current = element;
          visibilityObserver(element); 
        },
        [visibilityObserver]
    );

    const cancelTrace = () => {
        const trace = layerRef.current;
      
        if (!trace || !trace?.getTrace()) {
          return;
        }
      
        const { traceStatus } = trace;
      
        if (traceStatus && traceStatus !== 'START') {
          return;
        }
        const explicit = true;

        trace.cancelTrace('close_popover', explicit);
    }

    const handleOutsideClick = useCallback(() => {
        if (!doNotCloseOnOutsideClick) {
          cancelTrace();
          
          closePopover();
        }
    }, [doNotCloseOnOutsideClick, closePopover]);

    const outsideClickRef = useOnOutsideClick(
        visible ? handleOutsideClick : null,
        useMemo(() => ({
          isTargetEligible: (target) => {
            const _contextRef = contextRef.current;
            return _contextRef != null
              ? !_contextRef.contains(target)
              : true;
          },
          triggerOutsideClickOnDrag,
    }), [triggerOutsideClickOnDrag]))

    const onPress = useCallback(
        (event) => {
          visible ? closePopover() : openPopover(event);
        },
        [visible, closePopover, openPopover]
    );

    const mergedRef = useMergeRefs(outsideClickRef, addTraceToMutationRoot);

    const menuContextValue = useMemo(() => ({ onClose: closePopover }), [closePopover]);

    const isMenu = popoverType === 'menu';

    return (
        <>
            <BaseButtonPopoverContext.Provider value={contextValue}>
                {children(
                    setObserverElement,
                    onPress,
                    closePopover,
                    prerendering,
                    preloading,
                    onPreload,
                    _preloadTrigger,
                    visible
                )}
            </BaseButtonPopoverContext.Provider>
  
            <CometErrorBoundary>
                <CometPrerenderer prerenderingProps={prerenderingProps}>
                    {(prerenderProps) => (
                        <BaseContextualLayer
                            {...prerenderProps}
                            {...layerProps}
                            containFocus
                            contextRef={contextRef}
                            customContainer={CometPrerenderer}
                            imperativeRef={imperativeRef}
                            key="popover"
                            onEscapeFocusRegion={isMenu ? closePopover : undefined}
                            ref={mergedRef}
                        >
                            <CometHideLayerOnEscape onHide={closePopover}>
                            <CometMenuContext.Provider value={menuContextValue}>
                                <CometHeroInteractionContextPassthrough clear>
                                <CometHeroInteractionWithDiv
                                    interactionDesc={'popover_' + (popoverPreloadResource?.getModuleId() ?? 'Unknown')}
                                    interactionUUID={interactionUUID}
                                >
                                    <BasePopoverLayerVisibility
                                        onLayerDetached={onLayerDetached}
                                    >
                                        {popoverRenderer({
                                            content: (
                                            <>
                                                <RepositionLayer contextualLayerRef={contextualLayerRef} />
                                                {popover({
                                                onClose: closePopover,
                                                ...popoverProps,
                                                })}
                                            </>
                                            ),
                                            fallback: (
                                            <>
                                                <RepositionLayer contextualLayerRef={contextualLayerRef} />
                                                {fallback}
                                            </>
                                            ),
                                        })}
                                    </BasePopoverLayerVisibility>
                                </CometHeroInteractionWithDiv>
                                </CometHeroInteractionContextPassthrough>
                            </CometMenuContext.Provider>
                            </CometHideLayerOnEscape>
                        </BaseContextualLayer>
                    )}
                </CometPrerenderer>
            </CometErrorBoundary>
      </>
    )
      
  };
  
  export default BasePopoverTrigger;
  
function RepositionLayer({ contextualLayerRef }) {
    useLayoutEffect(() => {
      const layer = contextualLayerRef.current;
      if (layer) {
        layer.reposition({ autoflip: true });
      }
    }, [contextualLayerRef]);
  
    return null;  
  }