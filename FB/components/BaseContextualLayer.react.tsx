// __d("BaseContextualLayer.react", ["BaseContextualLayerAnchorRoot.react", "BaseContextualLayerAnchorRootContext", "BaseContextualLayerAvailableHeightContext", "BaseContextualLayerContextSizeContext", "BaseContextualLayerDefaultContainer.react", "BaseContextualLayerLayerAdjustmentContext", "BaseContextualLayerOrientationContext", "BaseLinkNestedPressableContext", "BasePortal.react", "BaseScrollableAreaContext", "BaseViewportMarginsContext", "CometTextContext", "FocusRegion.react", "HiddenSubtreeContext", "LayoutAnimationBoundaryContext", "LayoutAnimationEvents", "Locale", "calculateBaseContextualLayerPosition", "focusScopeQueries", "getComputedStyle", "isElementFixedOrSticky", "mergeRefs", "react", "useLayoutAnimationEvents", "useResizeObserver"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j = i || (i = d("react"));
//     b = i;
//     var k = b.useCallback,
//         l = b.useContext,
//         m = b.useEffect,
//         n = b.useImperativeHandle,
//         o = b.useLayoutEffect,
//         p = b.useMemo,
//         q = b.useReducer,
//         r = b.useRef,
//         s = b.useState;

//     function t(a) {
//         a = a.getBoundingClientRect();
//         return {
//             bottom: a.bottom,
//             left: a.left,
//             right: a.right,
//             top: a.top
//         }
//     }

//     function u(a) {
//         return (a = (a = a[a.length - 1]) == null ? void 0 : (a = a.getDOMNode()) == null ? void 0 : a.scrollTop) != null ? a : window.pageYOffset
//     }

//     function v(a) {
//         var b = (h || (h = c("getComputedStyle")))(a);
//         return b != null && b.getPropertyValue("position") !== "static" ? a : a instanceof HTMLElement && a.offsetParent || a.ownerDocument.documentElement
//     }
//     var w = 8;

//     function aa(a, b) {
//         return a.bottom < b.top || b.bottom < a.top || a.right < b.left || b.right < b.left ? null : {
//             bottom: Math.min(a.bottom, b.bottom),
//             left: Math.max(a.left, b.left),
//             right: Math.min(a.right, b.right),
//             top: Math.max(a.top, b.top)
//         }
//     }
//     var x = d("Locale").isRTL(),
//         ba = {
//             root: {
//                 left: "xu96u03",
//                 start: null,
//                 end: null,
//                 marginRight: "xm80bdy",
//                 marginStart: null,
//                 marginEnd: null,
//                 position: "x10l6tqk",
//                 top: "x13vifvy",
//                 $$css: !0
//             }
//         };

//     function ca(a) {
//         return {
//             adjustment: null,
//             availableHeight: null,
//             contextSize: null,
//             isPositionIndeterminate: !1,
//             position: a
//         }
//     }

//     function da(a, b) {
//         var c;
//         switch (b.type) {
//             case "determine_direction":
//                 if (a.position !== b.position || a.availableHeight !== b.availableHeight) return babelHelpers["extends"]({}, a, {
//                     availableHeight: b.availableHeight,
//                     position: b.position
//                 });
//                 break;
//             case "reposition":
//                 if (a.adjustment !== b.adjustment || ((c = a.contextSize) == null ? void 0 : c.height) !== ((c = b.contextSize) == null ? void 0 : c.height) || ((c = a.contextSize) == null ? void 0 : c.width) !== ((c = b.contextSize) == null ? void 0 : c.width)) return babelHelpers["extends"]({}, a, {
//                     adjustment: b.adjustment,
//                     contextSize: b.contextSize,
//                     isPositionIndeterminate: !1
//                 });
//                 break;
//             case "position_indeterminate":
//                 return babelHelpers["extends"]({}, a, {
//                     isPositionIndeterminate: !0
//                 });
//             case "position_changed":
//                 if (a.position !== b.position) return babelHelpers["extends"]({}, a, {
//                     position: b.position
//                 });
//                 break
//         }
//         return a
//     }

//     function a(a, b) {
//         var e = a.align,
//             f = e === void 0 ? "start" : e;
//         e = a.disableAutoAlign;
//         var g = e === void 0 ? !1 : e;
//         e = a.children;
//         var h = a.containFocus;
//         h = h === void 0 ? !1 : h;
//         var i = a.customContainer;
//         i = i === void 0 ? c("BaseContextualLayerDefaultContainer.react") : i;
//         var y = a.disableAutoFlip,
//             z = y === void 0 ? !1 : y;
//         y = a.hidden;
//         y = y === void 0 ? !1 : y;
//         var A = a.imperativeRef,
//             ea = a.onEscapeFocusRegion,
//             B = a.onIndeterminatePosition,
//             fa = a.presencePayload,
//             C = a.position,
//             D = C === void 0 ? "below" : C;
//         C = a.restoreFocus;
//         C = C === void 0 ? !0 : C;
//         var E = a.stopClickPropagation;
//         E = E === void 0 ? !1 : E;
//         var ga = a.xstyle,
//             F = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "disableAutoAlign", "children", "containFocus", "customContainer", "disableAutoFlip", "hidden", "imperativeRef", "onEscapeFocusRegion", "onIndeterminatePosition", "presencePayload", "position", "restoreFocus", "stopClickPropagation", "xstyle"]);
//         a = q(da, D, ca);
//         var G = a[0],
//             ha = G.adjustment,
//             ia = G.availableHeight,
//             ja = G.contextSize,
//             H = G.isPositionIndeterminate,
//             I = G.position,
//             J = a[1],
//             K = l(c("BaseContextualLayerAnchorRootContext")),
//             L = l(c("BaseScrollableAreaContext")),
//             M = l(c("BaseViewportMarginsContext")),
//             N = l(c("LayoutAnimationBoundaryContext"));
//         G = s(!1);
//         a = G[0];
//         var O = G[1];
//         G = l(c("HiddenSubtreeContext"));
//         G = G.hidden;
//         var P = G || y,
//             Q = r(null),
//             R = r(null),
//             S = k(function () {
//                 return F.context_DEPRECATED == null && F.contextRef != null ? F.contextRef.current : F.context_DEPRECATED
//             }, [F.contextRef, F.context_DEPRECATED]),
//             T = k(function () {
//                 var a = document.documentElement;
//                 if (a == null) return;
//                 return {
//                     bottom: a.clientHeight - M.bottom - w,
//                     left: M.left + w,
//                     right: a.clientWidth - M.right - w,
//                     top: M.top + w
//                 }
//             }, [M.bottom, M.left, M.right, M.top]),
//             U = k(function () {
//                 var a = Q.current,
//                     b = S(),
//                     c = T();
//                 if (a == null || b == null || c == null) return;
//                 b = t(b);
//                 a = t(a);
//                 var d = a.bottom - a.top;
//                 a = a.right - a.left;
//                 var e = x ? "start" : "end",
//                     f = x ? "end" : "start",
//                     g = I,
//                     h = null;
//                 z || (I === "above" || I === "below" ? I === "above" && b.top - d < c.top && b.bottom + d < c.bottom ? g = "below" : I === "above" && u(L) + b.top < d ? g = "below" : I === "below" && b.bottom + d > c.bottom && b.top - d > c.top && (g = "above") : (I === "start" || I === "end") && (I === f && b.left - a < c.left && b.right + a < c.right ? g = e : I === e && b.right + a > c.right && b.left - a > c.left && (g = f)));
//                 g === "above" || g === "below" ? h = g === "above" ? b.top - c.top : c.bottom - b.bottom : (g === "start" || g === "end") && (h = Math.max(c.bottom, b.bottom) - Math.min(b.top, c.top));
//                 R.current = {
//                     height: d,
//                     width: a
//                 };
//                 J({
//                     availableHeight: h,
//                     position: g,
//                     type: "determine_direction"
//                 })
//             }, [S, T, z, I]),
//             V = k(function () {
//                 var a = document.documentElement,
//                     b = K.current,
//                     d = T(),
//                     e = S();
//                 if (a == null || b == null || d == null || e == null) return;
//                 var h = v(b);
//                 if (h == null) return;
//                 b = c("isElementFixedOrSticky")(b);
//                 b = !b && e.nodeType === 1 && c("isElementFixedOrSticky")(e);
//                 e = L.map(function (a) {
//                     return a.getDOMNode()
//                 }).filter(Boolean).filter(function (a) {
//                     return h.contains(a)
//                 }).reduce(function (a, b) {
//                     return a != null ? aa(a, t(b)) : null
//                 }, t(e));
//                 if (e == null || e.left === 0 && e.right === 0) {
//                     J({
//                         type: "position_indeterminate"
//                     });
//                     B && B();
//                     return
//                 }
//                 a = b ? {
//                     bottom: a.clientHeight,
//                     left: 0,
//                     right: a.clientWidth,
//                     top: 0
//                 } : t(h);
//                 b = c("calculateBaseContextualLayerPosition")({
//                     align: f,
//                     contextRect: e,
//                     contextualLayerSize: g ? null : R.current,
//                     fixed: b,
//                     offsetRect: a,
//                     position: I,
//                     screenRect: d
//                 });
//                 a = b.adjustment;
//                 d = b.style;
//                 b = Q.current;
//                 if (b != null) {
//                     var i = Object.keys(d);
//                     for (var j = 0; j < i.length; j++) {
//                         var k = i[j],
//                             l = d[k];
//                         l != null ? b.style.setProperty(k, l) : b.style.removeProperty(k)
//                     }
//                 }
//                 J({
//                     adjustment: a,
//                     contextSize: {
//                         height: e.bottom - e.top,
//                         width: e.right - e.left
//                     },
//                     type: "reposition"
//                 })
//             }, [K, T, S, L, g, f, I, B]),
//             W = k(function (a) {
//                 a === d("LayoutAnimationEvents").LayoutAnimationEventType.Start && O(!0), a === d("LayoutAnimationEvents").LayoutAnimationEventType.Stop && (O(!1), V())
//             }, [V, O]);
//         o(function () {
//             N != null && N.getIsAnimating() && W(d("LayoutAnimationEvents").LayoutAnimationEventType.Start)
//         }, [N, W]);
//         c("useLayoutAnimationEvents")(W);
//         n(A, function () {
//             return {
//                 reposition: function (a) {
//                     if (!P) {
//                         a = a || {};
//                         a = a.autoflip;
//                         a = a === void 0 ? !1 : a;
//                         a && U();
//                         V()
//                     }
//                 }
//             }
//         }, [P, V, U]);
//         var X = c("useResizeObserver")(function (a) {
//                 var b = a.height;
//                 a = a.width;
//                 R.current = {
//                     height: b,
//                     width: a
//                 };
//                 V()
//             }),
//             Y = r(D);
//         o(function () {
//             D !== Y.current && (J({
//                 position: D,
//                 type: "position_changed"
//             }), P || (U(), V()), Y.current = D)
//         });
//         var Z = k(function (a) {
//             Q.current = a, a != null && !P && (U(), V())
//         }, [P, V, U]);
//         m(function () {
//             if (P) return;
//             var a = function () {
//                 U(), V()
//             };
//             window.addEventListener("resize", a);
//             return function () {
//                 window.removeEventListener("resize", a)
//             }
//         }, [P, V, U]);
//         m(function () {
//             if (P) return;
//             var a = L.map(function (a) {
//                 return a.getDOMNode()
//             }).filter(Boolean);
//             if (a.length > 0) {
//                 a.forEach(function (a) {
//                     return a.addEventListener("scroll", V, {
//                         passive: !0
//                     })
//                 });
//                 return function () {
//                     a.forEach(function (a) {
//                         return a.removeEventListener("scroll", V, {
//                             passive: !0
//                         })
//                     })
//                 }
//             }
//         }, [P, V, L]);
//         m(function () {
//             if (window.addEventListener == null || P) return;
//             window.addEventListener("scroll", V, {
//                 passive: !0
//             });
//             return function () {
//                 window.removeEventListener("scroll", V, {
//                     passive: !0
//                 })
//             }
//         }, [P, V]);
//         G = p(function () {
//             return c("mergeRefs")(Z, X, b)
//         }, [Z, X, b]);
//         A = p(function () {
//             return {
//                 align: f,
//                 position: I
//             }
//         }, [f, I]);
//         var $ = y || H;
//         return j.jsx(c("BasePortal.react"), {
//             target: K.current,
//             children: j.jsx(i, {
//                 hidden: y || H || a,
//                 presencePayload: fa,
//                 ref: G,
//                 stopClickPropagation: E,
//                 testid: void 0,
//                 xstyle: [ba.root, ga],
//                 children: j.jsx(d("FocusRegion.react").FocusRegion, {
//                     autoFocusQuery: !$ && h ? d("focusScopeQueries").headerFirstTabbableSecondScopeQuery : null,
//                     autoRestoreFocus: !$ && C,
//                     containFocusQuery: !$ && h ? d("focusScopeQueries").tabbableScopeQuery : null,
//                     onEscapeFocusRegion: ea,
//                     recoverFocusQuery: $ ? null : d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
//                     children: j.jsx(c("BaseContextualLayerAnchorRoot.react"), {
//                         children: j.jsx(c("BaseContextualLayerContextSizeContext").Provider, {
//                             value: ja,
//                             children: j.jsx(c("BaseContextualLayerLayerAdjustmentContext").Provider, {
//                                 value: ha,
//                                 children: j.jsx(c("BaseContextualLayerAvailableHeightContext").Provider, {
//                                     value: ia,
//                                     children: j.jsx(c("BaseContextualLayerOrientationContext").Provider, {
//                                         value: A,
//                                         children: j.jsx(c("BaseLinkNestedPressableContext").Provider, {
//                                             value: !1,
//                                             children: j.jsx(c("CometTextContext").Provider, {
//                                                 value: null,
//                                                 children: e
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = j.forwardRef(a);
//     g["default"] = e
// }), 98);



import React, {
    useCallback,
    useContext,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState
} from 'react';
import BaseContextualLayerAnchorRoot from 'BaseContextualLayerAnchorRoot.react';
import BaseContextualLayerAnchorRootContext from 'BaseContextualLayerAnchorRootContext';
import BaseContextualLayerAvailableHeightContext from 'BaseContextualLayerAvailableHeightContext';
import BaseContextualLayerContextSizeContext from 'BaseContextualLayerContextSizeContext';
import BaseContextualLayerDefaultContainer from 'BaseContextualLayerDefaultContainer.react';
import BaseContextualLayerLayerAdjustmentContext from 'BaseContextualLayerLayerAdjustmentContext';
import BaseContextualLayerOrientationContext from 'BaseContextualLayerOrientationContext';
import BaseLinkNestedPressableContext from 'BaseLinkNestedPressableContext';
import BasePortal from 'BasePortal.react';
import BaseScrollableAreaContext from 'BaseScrollableAreaContext';
import BaseViewportMarginsContext from 'BaseViewportMarginsContext';
import CometTextContext from 'CometTextContext';
import FocusRegion from 'FocusRegion.react';
import HiddenSubtreeContext from 'HiddenSubtreeContext';
import LayoutAnimationBoundaryContext from 'LayoutAnimationBoundaryContext';
import {LayoutAnimationEvents} from 'LayoutAnimationEvents';
import Locale from 'Locale';
import {
    calculateBaseContextualLayerPosition,
    focusScopeQueries,
    getComputedStyle,
    isElementFixedOrSticky,
    mergeRefs
} from 'utils';
import useLayoutAnimationEvents from 'useLayoutAnimationEvents';
import useResizeObserver from 'useResizeObserver';

interface Props {
    align?: 'start' | 'end';
    disableAutoAlign?: boolean;
    children: React.ReactNode;
    containFocus?: boolean;
    customContainer?: React.ComponentType < any >;
    disableAutoFlip?: boolean;
    hidden?: boolean;
    imperativeRef?: React.RefObject < any >;
    onEscapeFocusRegion?: () => void;
    onIndeterminatePosition?: () => void;
    presencePayload?: object;
    position?: 'above' | 'below' | 'start' | 'end';
    restoreFocus?: boolean;
    stopClickPropagation?: boolean;
    context_DEPRECATED?: any;
    contextRef?: React.RefObject<any>;
    xstyle?: object;
}

interface RepositionOptions {
    autoflip?: boolean;
}

export enum LayoutAnimationEventType {
    Start,
    Stop 
}

function getScrollTop(nodes: Array<React.Component>): number | undefined {
    const lastNode = nodes[nodes.length - 1];
    if (!lastNode) {
      return undefined;
    }
  
    const domNode = lastNode.getDOMNode();
    if (!domNode) {
      return undefined;    
    }
  
    return domNode.scrollTop ?? window.pageYOffset;
}


function getOffsetParent(node: Element | HTMLElement): any {
    const style = getComputedStyle(node);
    if (!style) {
      return null;
    }
  
    return style.getPropertyValue('position') !== 'static' 
      ? node
      : node instanceof HTMLElement && node.offsetParent 
        ? node.offsetParent
        : node.ownerDocument.documentElement;
}

interface IntersectRectResult {
    bottom: number;
    left: number;
    right: number;
    top: number;
}

function intersectRect(rect1: IntersectRectResult, rect2: IntersectRectResult): IntersectRectResult | null {
    if (
      rect1.bottom < rect2.top || 
      rect2.bottom < rect1.top ||
      rect1.right < rect2.left || 
      rect2.right < rect1.left
    ) {
      return null;
    }
  
    return {
      bottom: Math.min(rect1.bottom, rect2.bottom),
      left: Math.max(rect1.left, rect2.left),
      right: Math.min(rect1.right, rect2.right),
      top: Math.max(rect1.top, rect2.top),
    };
}
  
const DEFAULT_MARGIN = 8;


const isRTL = Locale.isRTL();
const styles = {
    root: {
        left: 'xu96u03',
        start: null,
        end: null,
        marginRight: 'xm80bdy',
        marginStart: null,
        marginEnd: null,
        position: 'x10l6tqk',
        top: 'x13vifvy',
        $$css: true
    }
};
interface State {
    adjustment: object | null;
    availableHeight: number | null;
    contextSize: {
        height: number;
        width: number;
    } | null;
    isPositionIndeterminate: boolean;
    position: 'above' | 'below' | 'start' | 'end';
}

interface PassiveEventListenerOptions extends EventListenerOptions {
    passive?: boolean;
}

function initialState(position : State['position']): State {
    return {
        adjustment: null,
        availableHeight: null,
        contextSize: null,
        isPositionIndeterminate: false,
        position
    };
}

function getBoundingClientRect(node: HTMLElement): IntersectRectResult {
    const rect = node.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right, 
      top: rect.top
    };
}

function reducer(state : State, action : any): State {
    switch (action.type) {
        case 'determine_direction':
            {
                if (state.position !== action.position || state.availableHeight !== action.availableHeight) {
                    return {
                        ... state,
                        availableHeight: action.availableHeight,
                        position: action.position
                    };
                }
                break;
            }
        case 'reposition':
            {
                if (state.adjustment !== action.adjustment || state.contextSize ?. height !== action.contextSize ?. height || state.contextSize ?. width !== action.contextSize ?. width) {
                    return {
                        ... state,
                        adjustment: action.adjustment,
                        contextSize: action.contextSize,
                        isPositionIndeterminate: false
                    };
                }
                break;
            }
        case 'position_indeterminate':
            {
                return {
                    ... state,
                    isPositionIndeterminate: true
                };
            }
        case 'position_changed':
            {
                if (state.position !== action.position) {
                    return {
                        ... state,
                        position: action.position
                    };
                }
                break;
            }
    }
    return state;
}
function BaseContextualLayer(props : Props, ref : React.Ref < any >) {
    const {
        align = 'start',
        disableAutoAlign = false,
        children,
        containFocus = false,
        customContainer: CustomContainer = BaseContextualLayerDefaultContainer,
        disableAutoFlip = false,
        hidden: hiddenFromProps = false,
        imperativeRef,
        onEscapeFocusRegion,
        onIndeterminatePosition,
        presencePayload,
        position = 'below',
        restoreFocus = true,
        stopClickPropagation = false,
        xstyle,
        ...restProps
    } = props;
    const [state, dispatch] = useReducer(reducer, position, initialState);
    const {
        adjustment,
        availableHeight,
        contextSize,
        isPositionIndeterminate,
        position: currentPosition
    } = state;
    const anchorRootRef = useContext(BaseContextualLayerAnchorRootContext);
    const scrollableAreas = useContext(BaseScrollableAreaContext);
    const viewportMargins = useContext(BaseViewportMarginsContext);
    const layoutAnimating = useContext(LayoutAnimationBoundaryContext);
    const [animating, setAnimating] = useState(false);
    const { hidden: hiddenFromContext } = useContext(HiddenSubtreeContext);
    const hidden = hiddenFromContext || hiddenFromProps
    const layerRef = useRef(null);
    const sizeRef = useRef(null);
    const getContext = useCallback(() => {
        return restProps.context_DEPRECATED ?? restProps.contextRef ?. current;
    }, [restProps.contextRef, restProps.context_DEPRECATED]);
    const getViewportRect = useCallback(() => {
        const docElement = document.documentElement;
        if (! docElement) {
            return;
        }
        return {
            bottom: docElement.clientHeight - viewportMargins.bottom - DEFAULT_MARGIN,
            left: viewportMargins.left + DEFAULT_MARGIN,
            right: docElement.clientWidth - viewportMargins.right - DEFAULT_MARGIN,
            top: viewportMargins.top + DEFAULT_MARGIN
        };
    }, [viewportMargins.bottom, viewportMargins.left, viewportMargins.right, viewportMargins.top]);
    const determineDirection = useCallback(() => {
        const layerNode = layerRef.current;
        const contextNode = getContext();
        const viewportRect = getViewportRect();
        if (! layerNode || ! contextNode || ! viewportRect) {
            return;
        }
        const contextRect = getBoundingClientRect(contextNode);
        const layerRect = getBoundingClientRect(layerNode);
        const layerHeight = layerRect.bottom - layerRect.top;
        const layerWidth = layerRect.right - layerRect.left;
        let newPosition = position;
        if (!disableAutoFlip) {
            if ((position === 'above' || position === 'below') && ((position === 'above' && contextRect.top - layerHeight < viewportRect.top && contextRect.bottom + layerHeight < viewportRect.bottom) || (position === 'above' && getScrollTop(scrollableAreas) || 0 + contextRect.top < layerHeight))) {
                newPosition = 'below';
            } else if ((position === 'above' && contextRect.bottom + layerHeight > viewportRect.bottom && contextRect.top - layerHeight > viewportRect.top)) {
                newPosition = 'above';
            } else if ((position === 'start' || position === 'end') && ((position === (
                isRTL
                    ? 'end'
                    : 'start'
            ) && contextRect.left - layerWidth < viewportRect.left && contextRect.right + layerWidth < viewportRect.right) || (position === (
                isRTL
                    ? 'end'
                    : 'start'
            ) && contextRect.right + layerWidth > viewportRect.right && contextRect.left - layerWidth > viewportRect.left))) {
                newPosition = isRTL
                    ? 'start'
                    : 'end';
            }
        }
        let availableHeight: number | null = null;
        if (newPosition === 'above' || newPosition === 'below') {
            availableHeight = newPosition === 'above'
                ? contextRect.top - viewportRect.top
                : viewportRect.bottom - contextRect.bottom;
        } else {
            availableHeight = Math.max(viewportRect.bottom, contextRect.bottom) - Math.min(contextRect.top, viewportRect.top);
        } 
        
        sizeRef.current = {
            height: layerHeight,
            width: layerWidth
        };
        dispatch({availableHeight, position: newPosition, type: 'determine_direction'});
    }, [
        position,
        disableAutoFlip,
        getContext,
        getViewportRect
    ]);
    const reposition = useCallback(() => {
        const docElement = document.documentElement;
        const anchorRootNode = anchorRootRef.current;
        const viewportRect = getViewportRect();
        const contextNode = getContext();
        if (! docElement || ! anchorRootNode || ! viewportRect || ! contextNode) {
            return;
        }
        const anchorRootContainer = getOffsetParent(anchorRootNode);
        if(anchorRootContainer) return;
        const isFixed = isElementFixedOrSticky(anchorRootNode);
        const isContextFixed = ! isFixed && contextNode.nodeType === 1 && isElementFixedOrSticky(contextNode);
        const scrollableRects = scrollableAreas
            .map(area => area.getDOMNode())
            .filter(Boolean)
            .filter(node => anchorRootContainer?.contains(node))
            .reduce((acc, node) => {
                return acc
                    ? intersectRect(acc, getBoundingClientRect(node))
                    : null;
            }, getBoundingClientRect(contextNode));
        if (! scrollableRects || scrollableRects.left === 0 && scrollableRects.right === 0) {
            dispatch({type: 'position_indeterminate'});
            onIndeterminatePosition?.();
            return;
        }
        const viewportRectFixed = isFixed
            ? {
                bottom: docElement.clientHeight,
                left: 0,
                right: docElement.clientWidth,
                top: 0
            }
            : getBoundingClientRect(anchorRootContainer);
        const {adjustment, style} = calculateBaseContextualLayerPosition({
            align,
            contextRect: contextNode,
            contextualLayerSize: disableAutoAlign
                ? null
                : sizeRef.current,
            fixed: isContextFixed,
            offsetRect: viewportRectFixed,
            position,
            screenRect: viewportRect
        });
        const layerNode = layerRef.current;
        if (layerNode) {
            Object.keys(style).forEach(key => {
                const value = style[key];
                if (value != null) {
                    layerNode.style.setProperty(key, value);
                } else {
                    layerNode.style.removeProperty(key);
                }
            });
        }
        dispatch({
            adjustment,
            contextSize: {
                height: scrollableRects.bottom - scrollableRects.top,
                width: scrollableRects.right - scrollableRects.left
            },
            type: 'reposition'
        });
    }, [
        anchorRootRef,
        getContext,
        getViewportRect,
        scrollableAreas,
        disableAutoAlign,
        align,
        currentPosition,
        onIndeterminatePosition,
        dispatch
    ]);
    const handleAnimationEvent = useCallback((event : LayoutAnimationEventType) => {
        if (event === LayoutAnimationEvents.LayoutAnimationEventType.Start) {
            setAnimating(true);
        } else if (event === LayoutAnimationEvents.LayoutAnimationEventType.Stop) {
            setAnimating(false);
            reposition();
        }
    }, [reposition]);

    useLayoutEffect(() => {
        if (layoutAnimating ?. getIsAnimating()) {
            handleAnimationEvent(LayoutAnimationEvents.LayoutAnimationEventType.Start);
        }
    }, [layoutAnimating, handleAnimationEvent]);

    useLayoutAnimationEvents(handleAnimationEvent);

    useImperativeHandle(imperativeRef, () => ({
        reposition: (options: RepositionOptions = {}) => {
            if (!hidden) {
                const {
                    autoflip = false
                } = options;
                if (autoflip) {
                    determineDirection();
                }
                reposition();
            }
        }
    }), [hidden, reposition, determineDirection])
    const handleResize = useResizeObserver(size => {
        const {height, width} = size;
        sizeRef.current = {
            height,
            width
        };
        reposition();
    });

    const previousPosition = useRef(position);

    useLayoutEffect(() => {
        if (position !== previousPosition.current) {
            dispatch({position, type: 'position_changed'});
            if (!hidden) {
                determineDirection();
                reposition();
            }
            previousPosition.current = position;
        }
    }, [
        hidden,
        determineDirection,
        reposition
    ]);

    const setLayerRef = useCallback(node => {
        layerRef.current = node;
        if (node != null && !hidden) {
            determineDirection();
            reposition();
        }
    }, [hidden, determineDirection, reposition]);

    useEffect(() => {
        if (hidden) return;
      
        const handleResize = () => {
          determineDirection();
          reposition();
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize); 
        }
    }, [hidden, determineDirection, reposition])


    useEffect(() => {
        if (hidden) return;
      
        const nodes = scrollableAreas.map(area => area.getDOMNode()).filter(Boolean);
        
        if (nodes.length > 0) {
          nodes.forEach(node => {
            node.addEventListener('scroll', reposition, { passive: true });
          });
          
          return () => {
            nodes.forEach(node => {
              node.removeEventListener('scroll', reposition, { passive: true });
            });
          };
        }
    }, [hidden, reposition, scrollableAreas])

    useEffect(() => {
        if (!window.addEventListener || hidden) return;
      
        window.addEventListener('scroll', reposition, { passive: true });
        
        return () => {
          window.removeEventListener('scroll', reposition, { passive: true } as PassiveEventListenerOptions);
        }
    }, [hidden, reposition]);

    const mergedRef = useMemo(() => {
        return mergeRefs(setLayerRef, handleResize, ref); 
    }, [setLayerRef, handleResize, ref])

    const orientation = useMemo(() => ({align, position: currentPosition}), [align, currentPosition]);
    const contentHidden = hidden || isPositionIndeterminate;
    return (
        <BasePortal 
            target={
                anchorRootRef.current
            }
        >
            <CustomContainer 
                hidden={
                    hidden || isPositionIndeterminate || animating
                }
                presencePayload={presencePayload}
                ref={mergedRef}
                stopClickPropagation={stopClickPropagation}
                testid={undefined}
                xstyle={
                    [styles.root, xstyle]
                }
            >
                <FocusRegion 
                    autoFocusQuery={
                        ! contentHidden && containFocus
                            ? focusScopeQueries.headerFirstTabbableSecondScopeQuery
                            : null
                    }
                    autoRestoreFocus={
                        ! contentHidden && restoreFocus
                    }
                    containFocusQuery={
                        ! contentHidden && containFocus
                            ? focusScopeQueries.tabbableScopeQuery
                            : null
                    }
                    onEscapeFocusRegion={onEscapeFocusRegion}
                    recoverFocusQuery={
                        contentHidden
                            ? null
                            : focusScopeQueries.headerFirstTabbableSecondScopeQuery
                    }
                >
                    <BaseContextualLayerAnchorRoot>
                        <BaseContextualLayerContextSizeContext.Provider value={contextSize}>
                            <BaseContextualLayerLayerAdjustmentContext.Provider value={adjustment}>
                                <BaseContextualLayerAvailableHeightContext.Provider value={availableHeight}>
                                    <BaseContextualLayerOrientationContext.Provider value={orientation}>
                                        <BaseLinkNestedPressableContext.Provider value={false}>
                                            <CometTextContext.Provider value={null}> {children} </CometTextContext.Provider>
                                        </BaseLinkNestedPressableContext.Provider>
                                    </BaseContextualLayerOrientationContext.Provider>
                                </BaseContextualLayerAvailableHeightContext.Provider>
                            </BaseContextualLayerLayerAdjustmentContext.Provider>
                        </BaseContextualLayerContextSizeContext.Provider>
                    </BaseContextualLayerAnchorRoot>
                </FocusRegion>
            </CustomContainer>
        </BasePortal>
    );
}

BaseContextualLayer.displayName = "BaseContextualLayer";
export default React.forwardRef(BaseContextualLayer);   