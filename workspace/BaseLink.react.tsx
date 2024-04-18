__d("BaseLink.react", ["BaseLinkDefaultTargetContext", "BaseLinkNestedPressableContext", "BaseNestedPressableHack_DO_NOT_USE.react", "CometLinkShimUtils", "CometLinkTrackingUtils", "CometProductAttributionContext", "CometTrackingCodeContext", "CometTrackingNodesContext", "ConstUriUtils", "NavChainContentContext", "Pressable.react", "PressableText.react", "RecoverableViolationWithComponentStack.react", "appendPersistQueryParamsToUrl", "isCometRouterUrl", "isTrustedDestination", "justknobx", "mergeRefs", "react", "useApplyEndpointModifiersToHref", "useAttributionSourceForClick", "useCometErrorProject", "useCometRouterDispatcher", "useCometRouterLinkEventHandlers", "useCometRouterLinkShimEventHandlers", "useCurrentRoute", "useFeedPressEventHandler", "useTransformRelativeUri"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var aa = b.useCallback,
        j = b.useContext,
        k = b.useMemo,
        ba = b.useRef;

    function l(a) {
        a = a.children;
        return i.jsx(c("BaseLinkNestedPressableContext").Provider, {
            value: !0,
            children: a
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function a(a, b) {
        var e = a["aria-activedescendant"],
            f = a["aria-checked"],
            g = a["aria-controls"],
            h = a["aria-current"],
            ca = a["aria-describedby"],
            da = a["aria-expanded"],
            ea = a["aria-haspopup"],
            fa = a["aria-hidden"],
            ga = a["aria-invalid"],
            n = a["aria-label"],
            ha = a["aria-labelledby"],
            ia = a["aria-owns"],
            ja = a["aria-selected"],
            ka = a.attributionsrc,
            o = a.children,
            la = a.className_DEPRECATED,
            p = a.disabled,
            q = a.disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
            r = a.disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
            s = a.display;
        s = s === void 0 ? "inline" : s;
        var t = a.download,
            u = a.fbclid,
            v = a.focusable,
            w = a.href,
            ma = a.id,
            x = a.label,
            y = a.lynxMode,
            na = a.onBlur,
            z = a.onClick,
            A = a.onContextMenu,
            oa = a.onFocus,
            pa = a.onFocusChange,
            qa = a.onFocusVisibleChange,
            ra = a.onHoverChange,
            B = a.onHoverEnd,
            C = a.onHoverStart,
            D = a.onNavigate,
            sa = a.onPressChange,
            ta = a.onPressEnd,
            E = a.onPressStart,
            F = a.passthroughProps,
            G = a.prefetchQueriesOnHover,
            H = a.preloadCodeOnMount,
            ua = a.preserveQueryInShim,
            va = a.preventContextMenu,
            wa = a.preventLocalNavigation,
            xa = a.productAttribution,
            I = a.rel,
            ya = a.replace,
            J = a.role,
            K = a.routeTarget,
            za = a.style,
            Aa = a.suppressFocusRing,
            Ba = a.suppressHydrationWarning,
            L = a.target,
            Ca = a.testid,
            M = a.testOnly_pressed;
        M = M === void 0 ? !1 : M;
        var Da = a.traceParams;
        a = a.xstyle;
        var Ea = c("useCometRouterDispatcher")(),
            N = ba(null),
            O = j(c("BaseLinkDefaultTargetContext")),
            P = j(c("CometTrackingNodesContext")),
            Fa = j(c("NavChainContentContext")),
            Q = j(c("CometTrackingCodeContext")),
            Ga = Q.click_tracking_linkshim_cb,
            Ha = Q.encrypted_click_tracking;
        Q = Q.encrypted_tracking;
        var Ia = j(c("CometProductAttributionContext")),
            R = aa(function (a) {
                return d("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(a, P, Ha)
            }, [Ha, P]),
            Ja = c("useApplyEndpointModifiersToHref")(),
            Ka = t === !0 || typeof t === "string",
            S = k(function () {
                var a = w != null && c("justknobx")._("144") ? c("appendPersistQueryParamsToUrl")(w) : w,
                    b = !1;
                if (a != null) {
                    var e = d("ConstUriUtils").getUri(a);
                    if (e != null) {
                        var f = e.getProtocol(),
                            g = e.getDomain();
                        if (!f.length && !g.length) b = !0;
                        else {
                            g = f.length ? e : e.getQualifiedUri();
                            b = g != null && c("isTrustedDestination")(g)
                        }
                    }
                } else b = !0;
                if (Ka || q === !0) return {
                    clickIDAppended: !1,
                    ghlEncrypted: !1,
                    href: a,
                    isExternalLink: !b,
                    isRouterLink: !1,
                    shimmed: !1,
                    unshimmedHref: null
                };
                if (a != null && c("isCometRouterUrl")(a)) {
                    f = R(Ja(a));
                    return {
                        clickIDAppended: !1,
                        ghlEncrypted: !1,
                        href: f,
                        isExternalLink: !b,
                        isRouterLink: !0,
                        shimmed: !1,
                        unshimmedHref: null
                    }
                }
                e = d("CometLinkShimUtils").getLinkShimInfo(a, Ga, P, u, r, ua);
                g = e.shimmed ? e.href : R(e.href);
                return {
                    clickIDAppended: e.clickIDAppended,
                    ghlEncrypted: (f = e.ghlEncrypted) != null ? f : !1,
                    href: g,
                    isExternalLink: !b,
                    isRouterLink: !1,
                    shimmed: e.shimmed,
                    unshimmedHref: e.shimmed ? e.unshimmedHref : null
                }
            }, [Ga, r, q, u, Ka, w, ua, P, R, Ja]),
            La = S.clickIDAppended,
            T = S.ghlEncrypted,
            U = S.href,
            V = S.isExternalLink,
            W = S.isRouterLink,
            X = S.shimmed;
        S = S.unshimmedHref;
        var Y = !1,
            Z = !1;
        L = L;
        if (O) {
            var $;
            L = ($ = L) != null ? $ : O
        }
        if (X || T || V && r !== !0) {
            Y = !0;
            L = ($ = L) != null ? $ : "_blank";
            Z = !!d("CometLinkShimUtils").use_rel_no_referrer && L === "_blank"
        }
        O = Array.isArray(I) ? I.join(" ") : I;
        Y && (O == null || O.indexOf("nofollow") < 0) && (O = O != null ? O + " nofollow" : "nofollow");
        Z && (O == null || O.indexOf("noreferrer") < 0) && (O = O != null ? O + " noreferrer" : "noreferrer");
        T = c("useAttributionSourceForClick")(null, Q[0]);
        V = j(c("BaseLinkNestedPressableContext"));
        $ = J === "presentation" ? "none" : J;
        I = x != null && $ !== "none" ? x : n;
        var Ma = b;
        Y = z;
        Z = E;
        Q = A;
        Y = c("useFeedPressEventHandler")(z, U);
        Z = c("useFeedPressEventHandler")(E, U);
        Q = c("useFeedPressEventHandler")(A, U);
        J = k(function () {
            return c("mergeRefs")(Ma, N)
        }, [Ma, N]);
        x = c("useCometRouterLinkShimEventHandlers")({
            href: U,
            lynxMode: y,
            onContextMenu: Q,
            onHoverStart: C,
            onPress: Y,
            shimmed: X,
            unshimmedHref: S
        });
        n = x.onContextMenu;
        b = x.onHoverStart;
        z = x.onPress;
        E = x.useOrigHref;
        A = k(function () {
            return {
                linkRef: N,
                onNavigate: D,
                passthroughProps: F,
                productAttributionUpdateProps: {
                    fromLink: xa,
                    linkContext: Ia,
                    navChainContent: Fa,
                    trackingNodes: P
                },
                replace: ya,
                target: K,
                traceParams: Da
            }
        }, [N, xa, Ia, P, D, ya, K, Da, F]);
        y = c("useCometRouterLinkEventHandlers")({
            dispatcherExtras: A,
            href: U,
            isRouterLink: W,
            onHoverEnd: B,
            onHoverStart: b,
            onPress: z,
            onPressStart: Z,
            prefetchQueriesOnHover: G,
            preloadCodeOnMount: H,
            preventLocalNavigation: wa,
            rel: O,
            target: L
        });
        Q = y.onHoverEnd;
        C = y.onHoverStart;
        Y = y.onPress;
        x = y.onPressStart;
        A = E && X ? S : U;
        B = W && L !== "_blank" && Ea != null || A == null || A === "#" || wa === !0;
        z = (b = c("useTransformRelativeUri")(E && X ? S : U)) != null ? b : "#";
        G = {
            accessibilityLabel: I,
            accessibilityRelationship: {
                activedescendant: e,
                controls: g,
                current: h,
                describedby: ca,
                haspopup: ea,
                labelledby: ha,
                owns: ia
            },
            accessibilityState: {
                checked: f,
                disabled: p,
                expanded: da,
                hidden: fa,
                invalid: ga,
                selected: ja
            },
            className_DEPRECATED: la,
            disabled: p,
            forwardedRef: J,
            link: {
                attributionsrc: (Z = ka) != null ? Z : T,
                download: t,
                rel: O,
                target: L,
                url: z
            },
            nativeID: ma,
            onBlur: na,
            onContextMenu: n,
            onFocus: oa,
            onFocusChange: pa,
            onFocusVisibleChange: qa,
            onHoverChange: ra,
            onHoverEnd: Q,
            onHoverStart: C,
            onPress: Y,
            onPressChange: sa,
            onPressEnd: ta,
            onPressStart: x,
            preventContextMenu: va,
            preventDefault: B,
            style: za,
            suppressHydrationWarning: Ba === !0 || La === !0 ? !0 : void 0,
            testID: Ca,
            testOnly_state: {
                disabled: !1,
                focused: !1,
                focusVisible: !1,
                hovered: !1,
                pressed: M
            },
            xstyle: a
        };
        if (s === "block") {
            H = $ === "button" || $ === "menuitem" || $ === "none" || $ === "switch" || $ === "checkbox" || $ === "article" || $ === "radio" || $ === "tab" ? $ : "link";
            y = i.jsx(c("Pressable.react"), babelHelpers["extends"]({}, G, {
                accessibilityRole: H,
                suppressFocusRing: Aa,
                tabbable: v,
                children: i.jsx(l, {
                    children: o
                })
            }))
        } else {
            W = $ === "button" || $ === "menuitem" || $ === "menuitemradio" || $ === "menuitemcheckbox" || $ === "none" || $ === "tab" ? $ : "link";
            y = i.jsx(c("PressableText.react"), babelHelpers["extends"]({}, G, {
                accessibilityRole: W,
                direction: "none",
                focusable: v,
                suppressFocusRing: Aa,
                children: i.jsx(l, {
                    children: o
                })
            }))
        }
        return i.jsxs(i.Fragment, {
            children: [K === "content" && i.jsx(m, {}), V ? i.jsx(c("BaseNestedPressableHack_DO_NOT_USE.react"), {
                children: y
            }) : y]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m() {
        var a = c("useCurrentRoute")(),
            b = c("useCometErrorProject")();
        return a != null && a.isCometRootContainer !== !0 && i.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "A link with target=content was rendered in a non-tab-container",
            projectName: (a = b) != null ? a : "comet_infra"
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e
}), 98);




import React, { useCallback, useContext, useMemo, useRef, forwardRef } from 'react';
import { BaseLinkDefaultTargetContext, BaseLinkNestedPressableContext } from 'BaseLinkDefaultTargetContext';
import BaseNestedPressableHack_DO_NOT_USE from 'BaseNestedPressableHack_DO_NOT_USE.react';
import { CometLinkShimUtils, CometLinkTrackingUtils } from 'CometLinkShimUtils';
import { CometProductAttributionContext } from 'CometProductAttributionContext';
import { CometTrackingCodeContext } from 'CometTrackingCodeContext';
import { CometTrackingNodesContext } from 'CometTrackingNodesContext';
import { ConstUriUtils } from 'ConstUriUtils';
import { NavChainContentContext } from 'NavChainContentContext';
import Pressable from 'Pressable.react';
import PressableText from 'PressableText.react';
import RecoverableViolationWithComponentStack from 'RecoverableViolationWithComponentStack.react';
import { appendPersistQueryParamsToUrl } from 'appendPersistQueryParamsToUrl';
import { isCometRouterUrl } from 'isCometRouterUrl';
import { isTrustedDestination } from 'isTrustedDestination';
import { justknobx } from 'justknobx';
import { mergeRefs } from 'mergeRefs';
import { useApplyEndpointModifiersToHref } from 'useApplyEndpointModifiersToHref';
import { useAttributionSourceForClick } from 'useAttributionSourceForClick';
import { useCometErrorProject } from 'useCometErrorProject';
import { useCometRouterDispatcher } from 'useCometRouterDispatcher';
import { useCometRouterLinkEventHandlers } from 'useCometRouterLinkEventHandlers';
import { useCometRouterLinkShimEventHandlers } from 'useCometRouterLinkShimEventHandlers';
import { useCurrentRoute } from 'useCurrentRoute';
import { useFeedPressEventHandler } from 'useFeedPressEventHandler';
import { useTransformRelativeUri } from 'useTransformRelativeUri';

interface BaseLinkProps {
  'aria-activedescendant'?: string;
  'aria-checked'?: boolean | 'mixed';
  'aria-controls'?: string;
  'aria-current'?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
  'aria-describedby'?: string;
  'aria-expanded'?: boolean | 'false' | 'true';
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  'aria-hidden'?: boolean;
  'aria-invalid'?: boolean | 'grammar' | 'false' | 'spelling' | 'true';
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-owns'?: string;
  'aria-selected'?: boolean | 'false' | 'true';
  attributionsrc?: string;
  children?: React.ReactNode;
  className_DEPRECATED?: string;
  disabled?: boolean;
  disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV?: boolean;
  disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV?: boolean;
  display?: 'inline' | 'block';
  download?: boolean | string;
  fbclid?: string;
  focusable?: boolean;
  href?: string;
  id?: string;
  label?: string;
  lynxMode?: boolean;
  onBlur?: React.FocusEventHandler;
  onClick?: React.MouseEventHandler;
  onContextMenu?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onFocusChange?: (focused: boolean) => void;
  onFocusVisibleChange?: (focusVisible: boolean) => void;
  onHoverChange?: (hovered: boolean) => void;
  onHoverEnd?: React.MouseEventHandler;
  onHoverStart?: React.MouseEventHandler;
  onNavigate?: () => void;
  onPressChange?: (pressed: boolean) => void;
  onPressEnd?: React.MouseEventHandler;
  onPressStart?: React.MouseEventHandler;
  passthroughProps?: {[key: string]: any};
  prefetchQueriesOnHover?: boolean;
  preloadCodeOnMount?: boolean;
  preserveQueryInShim?: boolean;
  preventContextMenu?: boolean;
  preventLocalNavigation?: boolean;
  productAttribution?: {
    fromLink: string;
    linkContext: React.Context<string>;
    navChainContent: React.Context<string>;
    trackingNodes: React.Context<unknown>;
  };
  rel?: string | string[];
  replace?: boolean;
  role?: string;
  routeTarget?: string;
  style?: React.CSSProperties;
  suppressFocusRing?: boolean;
  suppressHydrationWarning?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  testid?: string;
  testOnly_pressed?: boolean;
  traceParams?: {[key: string]: any};
  xstyle?: unknown;
}

const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  (props: BaseLinkProps, ref) => {

    const {
        'aria-activedescendant': ariaActiveDescendant,
        'aria-checked': ariaChecked,
        'aria-controls': ariaControls,
        'aria-current': ariaCurrent,
        'aria-describedby': ariaDescribedBy,
        'aria-expanded': ariaExpanded,
        'aria-haspopup': ariaHasPopup,
        'aria-hidden': ariaHidden,
        'aria-invalid': ariaInvalid,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-owns': ariaOwns,
        'aria-selected': ariaSelected,
        attributionsrc,
        children,
        className_DEPRECATED,
        disabled,
        disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        display = 'inline',
        download,
        fbclid,
        focusable,
        href,
        id,
        label,
        lynxMode,
        onBlur,
        onClick,
        onContextMenu,
        onFocus,
        onFocusChange,
        onFocusVisibleChange,
        onHoverChange,
        onHoverEnd,
        onHoverStart,
        onNavigate,
        onPressChange,
        onPressEnd,
        onPressStart,
        passthroughProps,
        prefetchQueriesOnHover,
        preloadCodeOnMount,
        preserveQueryInShim,
        preventContextMenu,
        preventLocalNavigation,
        productAttribution,
        rel,
        replace,
        role,
        routeTarget,
        style,
        suppressFocusRing,
        suppressHydrationWarning,
        target,
        testid,
        testOnly_pressed = false,
        traceParams,
        xstyle,
        ...rest
    } = props;

    const dispatcher = useCometRouterDispatcher();
    const linkRef = useRef(null);

    const defaultTarget = useContext(BaseLinkDefaultTargetContext);
    const trackingNodes = useContext(CometTrackingNodesContext);
    const navChainContent = useContext(NavChainContentContext);
    const trackingCode = useContext(CometTrackingCodeContext);

    const { click_tracking_linkshim_cb: clickTrackingCb, encrypted_click_tracking: encryptedClickTracking, encrypted_tracking: encryptedTracking } = trackingCode;

    const productAttributionContext = useContext(CometProductAttributionContext);

    const decorateHref = useCallback(
        (href) => CometLinkTrackingUtils.decorateHrefWithTrackingInfo(
          href,
          trackingNodes,
          encryptedClickTracking
        ),
        [encryptedClickTracking, trackingNodes]
    );

    const applyModifiers = useApplyEndpointModifiersToHref();

    const isDownload = download === true || typeof download === 'string';

    const linkInfo = useMemo(() => {
        let hrefWithPersist = href != null && justknobx._("144") 
          ? appendPersistQueryParamsToUrl(href) 
          : href;
  
        let isExternal = false;
        if (hrefWithPersist != null) {
          const uri = ConstUriUtils.getUri(hrefWithPersist);
          if (uri != null) {
            const protocol = uri.getProtocol();
            const domain = uri.getDomain();
            if (!protocol.length && !domain.length) {
              isExternal = true;
            } else {
              const qualifiedUri = protocol.length ? uri : uri.getQualifiedUri();
              isExternal = qualifiedUri != null && isTrustedDestination(qualifiedUri);
            }
          } else {
            isExternal = true; 
          }
        }
  
        if (isDownload || disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV === true) {
          return {
            clickIDAppended: false,
            ghlEncrypted: false,
            href: hrefWithPersist,
            isExternalLink: isExternal,
            isRouterLink: false,
            shimmed: false,
            unshimmedHref: null
          };
        }
  
        if (hrefWithPersist != null && isCometRouterUrl(hrefWithPersist)) {
          const trackedHref = decorateHref(applyModifiers(hrefWithPersist));
          return {
            clickIDAppended: false, 
            ghlEncrypted: false,
            href: trackedHref,
            isExternalLink: isExternal,
            isRouterLink: true,
            shimmed: false,
            unshimmedHref: null
          };
        }
  
        const linkInfo = CometLinkShimUtils.getLinkShimInfo(
          hrefWithPersist, 
          clickTrackingCb,
          trackingNodes,
          fbclid,
          disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
          preserveQueryInShim
        );
  
        const trackedHref = linkInfo.shimmed ? linkInfo.href : decorateHref(linkInfo.href);
  
        return {
          clickIDAppended: linkInfo.clickIDAppended,
          ghlEncrypted: linkInfo.ghlEncrypted ?? false,
          href: trackedHref,
          isExternalLink: isExternal,
          isRouterLink: false,
          shimmed: linkInfo.shimmed,
          unshimmedHref: linkInfo.shimmed ? linkInfo.unshimmedHref : null  
        };
  
    }, [
        clickTrackingCb, 
        disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV, 
        download, 
        fbclid,
        href, 
        preserveQueryInShim,
        trackingNodes,
        decorateHref,
        applyModifiers
    ]);

    const { clickIDAppended, ghlEncrypted, href: _href, isExternalLink, isRouterLink, shimmed, unshimmedHref } = linkInfo

    let openInNewWindow = false;
    let addNoReferrer = false;
    let _target;

    if(defaultTarget) {
        _target = target ?? defaultTarget;
    }
    if (shimmed || ghlEncrypted || (isExternalLink && disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV !== true)) {
      openInNewWindow = true;
      _target = target ?? '_blank';
      addNoReferrer = !!CometLinkShimUtils.use_rel_no_referrer && target === '_blank';
    }

    let _rel = Array.isArray(rel) ? rel.join(' ') : rel;

    if (openInNewWindow && (rel == null || rel.indexOf('nofollow') < 0)) {
        _rel = rel != null ? `${rel} nofollow` : 'nofollow'; 
    }

    if (addNoReferrer && (rel == null || rel.indexOf('noreferrer') < 0)) {
        _rel = rel != null ? `${rel} noreferrer` : 'noreferrer';
    }

    const clickRef = useAttributionSourceForClick(null, trackingCode[0]);
    const nestedContext = useContext(BaseLinkNestedPressableContext);
    const accessibilityRole = role === 'presentation' ? 'none' : role;
    const accessibilityLabel = label != null && accessibilityRole !== 'none' ? label : ariaLabel;


    const onPress = useFeedPressEventHandler(onClick, href);
    const _onPressStart = useFeedPressEventHandler(onPressStart, href);
    const _onContextMenu = useFeedPressEventHandler(onContextMenu, href);

    const forwardedRef = useMemo(() => mergeRefs(ref, linkRef), [ref, linkRef]);


    const shimHandlers = useCometRouterLinkShimEventHandlers({
        href,
        lynxMode,
        onContextMenu: _onContextMenu,
        onHoverStart,
        onPress,
        shimmed,
        unshimmedHref
    });

    const dispatcherExtras = useMemo(() => {
        return {
            linkRef,
            onNavigate,
            passthroughProps,
            productAttributionUpdateProps: {
                fromLink: productAttribution,
                linkContext: productAttributionContext,
                navChainContent,
                trackingNodes
            },
            replace,
            target: routeTarget,
            traceParams
        }
    }, [linkRef, productAttribution, productAttributionContext, trackingNodes, onNavigate, replace, routeTarget, traceParams, passthroughProps]);

    const linkHandlers = useCometRouterLinkEventHandlers({
        dispatcherExtras,
        href,
        isRouterLink,
        onHoverEnd,
        onHoverStart: shimHandlers.onHoverStart,
        onPress: shimHandlers.onPress,
        onPressStart: _onPressStart,
        prefetchQueriesOnHover,
        preloadCodeOnMount,
        preventLocalNavigation,
        rel: _rel,
        target: _target      
    });

    const origHref = shimmed && unshimmedHref ? unshimmedHref : href;
    const preventDefault = isRouterLink && _target !== "blank" && dispatcher !== null || origHref === null ||origHref === "#" || preventLocalNavigation === true;
    const transformedHref = useTransformRelativeUri(shimmed && unshimmedHref ? unshimmedHref : href);

    const pressableProps = {
        accessibilityLabel,
        accessibilityRelationship: {
          activedescendant: ariaActiveDescendant,
          controls: ariaControls,
          current: ariaCurrent,
          describedby: ariaDescribedBy,
          haspopup: ariaHasPopup,
          labelledby: ariaLabelledBy,
          owns: ariaOwns,  
        },
        accessibilityState: {
          checked: ariaChecked,
          disabled: disabled,
          expanded: ariaExpanded,
          hidden: ariaHidden,
          invalid: ariaInvalid,
          selected: ariaSelected,
        },
        className_DEPRECATED,
        disabled,
        forwardedRef,
        link: {
          attributionsrc: clickRef ?? attributionsrc,
          download,
          rel: _rel,
          target: _target,
          url: transformedHref,  
        },
        nativeID: id,
        onBlur,
        onContextMenu: shimHandlers.onContextMenu,
        onFocus,
        onFocusChange,
        onFocusVisibleChange,
        onHoverChange,
        onHoverEnd: linkHandlers.onHoverEnd,
        onHoverStart: shimHandlers.onHoverStart,
        onPress: linkHandlers.onPress,  
        onPressChange,
        onPressEnd,
        onPressStart: shimHandlers.onPressStart,
        preventContextMenu,
        preventDefault,
        style,
        suppressHydrationWarning: suppressHydrationWarning === true || clickIDAppended === true ? true : undefined,
        testID: testid,
        testOnly_state: {
          disabled: false,
          focused: false,
          focusVisible: false,
          hovered: false,
          pressed: testOnly_pressed  
        },
        xstyle
    };


    let content

    if (display === 'block') {
        const roleValue = accessibilityRole === 'button' || accessibilityRole === 'menuitem' 
          || accessibilityRole === 'none' || accessibilityRole === 'switch'
          || accessibilityRole === 'checkbox' || accessibilityRole === 'article'
          || accessibilityRole === 'radio' || accessibilityRole === 'tab'
          ? accessibilityRole
          : 'link';
  
        content = (
          <Pressable {...pressableProps} accessibilityRole={roleValue} suppressFocusRing={suppressFocusRing} tabbable={focusable}>
            <BaseLinkNestedPressableContext.Provider value>
              {children}
            </BaseLinkNestedPressableContext.Provider>
          </Pressable>
        );
    } else {
        const roleValue = accessibilityRole === 'button' || accessibilityRole === 'menuitem'
        || accessibilityRole === 'menuitemradio' || accessibilityRole === 'menuitemcheckbox'
        || accessibilityRole === 'none' || accessibilityRole === 'tab'
        ? accessibilityRole
        : 'link';

      content = (
        <PressableText {...pressableProps} accessibilityRole={roleValue} direction="none" focusable={focusable} suppressFocusRing={suppressFocusRing}>
          <BaseLinkNestedPressableContext.Provider value>
            {children}
          </BaseLinkNestedPressableContext.Provider>
        </PressableText>  
      );
    }

    return (
        <>
            {routeTarget === "content" && (
                renderContentLinkGuard
            )}

            {nestedContext ? (
                <BaseNestedPressableHack_DO_NOT_USE>
                    {content}
                </BaseNestedPressableHack_DO_NOT_USE>
            ) : (
                {content}
            )}
        </>
    )

    
});

function renderContentLinkGuard() {

    const route = useCurrentRoute();
    const project = useCometErrorProject();
  
    if (route && !route.isCometRootContainer) {
      return (
        <RecoverableViolationWithComponentStack
          projectName={project || 'comet_infra'}
          errorMessage="A link with target=content was rendered in a non-tab-container" 
        />
      );
    }
  
}

export default BaseLink;