__d("CometPressable.react", ["BaseButton.react", "BaseFocusRing.react", "BaseLink.react", "CometContainerPressableContext", "CometDangerouslySuppressInteractiveElementsContext", "CometPressableOverlay.react", "gkx", "react", "stylex", "useMergeRefs"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useEffect,
        l = b.useRef,
        m = b.useState,
        n = c("gkx")("1721477") || c("gkx")("1459"),
        o = {
            defaultCursor: {
                cursor: "xt0e3qv",
                $$css: !0
            },
            expanding: {
                display: "x78zum5",
                $$css: !0
            },
            hideOutline: {
                outline: "x1a2a7pz",
                $$css: !0
            },
            linkBase: {
                display: "x1rg5ohu",
                $$css: !0
            },
            root: {
                borderTopStartRadius: "x1o1ewxj",
                borderTopEndRadius: "x3x9cwd",
                borderBottomEndRadius: "x1e5q0jg",
                borderBottomStartRadius: "x13rtm0m",
                display: "x3nfvp2",
                flexDirection: "x1q0g3np",
                userSelect: "x87ps6o",
                ":hover_textDecoration": "x1lku1pv",
                $$css: !0
            },
            root_DEPRECATED: {
                borderTopStartRadius: "x1o1ewxj",
                borderTopEndRadius: "x3x9cwd",
                borderBottomEndRadius: "x1e5q0jg",
                borderBottomStartRadius: "x13rtm0m",
                position: "x1n2onr6",
                userSelect: "x87ps6o",
                ":hover_textDecoration": "x1lku1pv",
                $$css: !0
            },
            zIndex: {
                zIndex: "x1vjfegm",
                $$css: !0
            }
        };

    function a(a, b) {
        var d = a.allowClickEventPropagation,
            e = a.children,
            f = a.className_DEPRECATED,
            g = a.cursorDisabled;
        g = g === void 0 ? !1 : g;
        var p = a.xstyle,
            q = a.disabled;
        q = q === void 0 ? !1 : q;
        var r = a.display,
            s = a.expanding;
        s = s === void 0 ? r === "block" : s;
        var t = a.hideFocusOverlay;
        t = t === void 0 ? !1 : t;
        var u = a.hideHoverOverlay;
        u = u === void 0 ? !1 : u;
        var v = a.isContainerTarget,
            w = v === void 0 ? !1 : v,
            x = a.linkProps,
            y = a.onFocusChange;
        v = a.onFocusIn;
        var z = a.onFocusOut,
            A = a.onFocusVisibleChange,
            B = a.onHoverChange,
            C = a.onHoverIn,
            D = a.onHoverOut,
            E = a.onPress,
            F = a.onPressChange,
            G = a.onPressIn,
            H = a.onPressOut,
            I = a.preventContextMenu,
            J = a.overlayDisabled;
        J = J === void 0 ? !1 : J;
        var K = a.overlayOffset,
            L = a.overlayFocusRingPosition,
            M = a.overlayFocusVisibleStyle,
            N = a.overlayHoveredStyle,
            O = a.overlayPressedStyle,
            P = a.overlayRadius,
            Q = a.suppressFocusRing;
        Q = Q === void 0 ? !1 : Q;
        var R = a.testOnly_pressed,
            S = R === void 0 ? !1 : R;
        R = a.testid;
        R = babelHelpers.objectWithoutPropertiesLoose(a, ["allowClickEventPropagation", "children", "className_DEPRECATED", "cursorDisabled", "xstyle", "disabled", "display", "expanding", "hideFocusOverlay", "hideHoverOverlay", "isContainerTarget", "linkProps", "onFocusChange", "onFocusIn", "onFocusOut", "onFocusVisibleChange", "onHoverChange", "onHoverIn", "onHoverOut", "onPress", "onPressChange", "onPressIn", "onPressOut", "preventContextMenu", "overlayDisabled", "overlayOffset", "overlayFocusRingPosition", "overlayFocusVisibleStyle", "overlayHoveredStyle", "overlayPressedStyle", "overlayRadius", "suppressFocusRing", "testOnly_pressed", "testid"]);
        a = m(S);
        var T = a[0],
            U = a[1];
        a = m(!1);
        var V = a[0],
            aa = a[1];
        a = m(!1);
        var W = a[0],
            ba = a[1];
        a = m(!1);
        var X = a[0],
            ca = a[1];
        a = i(function (a) {
            U(a || S), F && F(a)
        }, [F, S]);
        var da = i(function (a) {
                aa(a), y && y(a)
            }, [y]),
            ea = i(function (a) {
                ba(a), A && A(a)
            }, [A]),
            fa = i(function (a) {
                ca(a), B && B(a)
            }, [B]);
        M = J ? null : h.jsx(c("CometPressableOverlay.react"), {
            focusRingPosition: L,
            focusVisible: !t && W,
            focusVisibleStyle: M,
            hovered: !u && X,
            hoveredStyle: N,
            offset: K,
            pressed: T,
            pressedStyle: O,
            radius: P,
            showFocusRing: !0
        });
        u = typeof e === "function" ? e({
            disabled: q,
            focused: V,
            focusVisible: W,
            hovered: X,
            overlay: M,
            pressed: T
        }) : h.jsxs(h.Fragment, {
            children: [e, M]
        });
        N = typeof p === "function" ? p({
            disabled: q,
            focused: V,
            focusVisible: W,
            hovered: X,
            pressed: T
        }) : p;
        var Y = j(c("CometContainerPressableContext"));
        K = j(c("CometDangerouslySuppressInteractiveElementsContext"));
        O = W && (t || J) && !Q;
        P = [r === "inline" ? o.root_DEPRECATED : o.root, g === !0 && o.defaultCursor, s && o.expanding, x != null && o.linkBase, !W && o.hideOutline, N, O && (L === "inset" ? c("BaseFocusRing.react").focusRingInsetXStyle : c("BaseFocusRing.react").focusRingXStyle), Y != null && o.zIndex];
        e = {
            onBlur: z,
            onClick: E,
            onFocus: v,
            onFocusChange: da,
            onFocusVisibleChange: ea,
            onHoverChange: fa,
            onHoverEnd: D,
            onHoverStart: C,
            onPressChange: a,
            onPressEnd: H,
            onPressStart: G
        };
        var ga = l(null),
            Z = l(null),
            $ = R.onContextMenu;
        k(function () {
            w && Y && Y.onMount({
                onContextMenu: function (a) {
                    I === !0 && a.preventDefault(), $ != null && $(a)
                },
                onPress: function (a) {
                    a = Z.current;
                    a && a.click()
                },
                target: x == null ? void 0 : x.target,
                url: x == null ? void 0 : x.url
            }, ga)
        }, [Y, w, R, $, I, x == null ? void 0 : x.url, x == null ? void 0 : x.target]);
        M = c("useMergeRefs")(b, Z);
        if (K) {
            V = r === "inline" ? "span" : "div";
            return h.jsx(V, babelHelpers["extends"]({
                className_DEPRECATED: f,
                display: r === "inline" ? r : "block",
                preventContextMenu: I
            }, R, {
                className: c("stylex")(P),
                "data-testid": void 0,
                ref: M,
                children: u
            }))
        }
        if (x != null) {
            X = x.url;
            T = babelHelpers.objectWithoutPropertiesLoose(x, ["url"]);
            p = babelHelpers["extends"]({}, T, {
                href: X
            });
            return h.jsx(c("BaseLink.react"), babelHelpers["extends"]({}, e, R, p, {
                className_DEPRECATED: f,
                disabled: q,
                display: r === "inline" ? r : "block",
                preventContextMenu: I,
                ref: M,
                suppressFocusRing: !O || n,
                testid: void 0,
                xstyle: P,
                children: u
            }))
        }
        return h.jsx(c("BaseButton.react"), babelHelpers["extends"]({}, e, R, {
            allowClickEventPropagation: d,
            className_DEPRECATED: f,
            disabled: q,
            display: r === "inline" ? r : "block",
            preventContextMenu: I,
            ref: M,
            suppressFocusRing: !O || n,
            testid: void 0,
            xstyle: P,
            children: u
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);





import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { gkx } from 'gkx';
import { CometContainerPressableContext, CometDangerouslySuppressInteractiveElementsContext } from 'CometContainerPressableContext'; // Replace with actual imports
import CometPressableOverlay from 'CometPressableOverlay'; // Replace with actual import
import BaseButton from 'BaseButton'; // Replace with actual import
import BaseLink from 'BaseLink'; // Replace with actual import
import stylex from 'stylex'; // Replace with actual import
import BaseFocusRing from 'BaseFocusRing'; // Replace with actual import
import useMergeRefs from 'useMergeRefs'; // Replace with actual import

const styles = {
  defaultCursor: { cursor: 'xt0e3qv' },
  expanding: { display: 'x78zum5' },
  hideOutline: { outline: 'x1a2a7pz' },
  linkBase: { display: 'x1rg5ohu' },
  root: {
    borderTopStartRadius: 'x1o1ewxj',
    borderTopEndRadius: 'x3x9cwd',
    borderBottomEndRadius: 'x1e5q0jg',
    borderBottomStartRadius: 'x13rtm0m',
    display: 'x3nfvp2',
    flexDirection: 'x1q0g3np',
    userSelect: 'x87ps6o',
    ':hover_textDecoration': 'x1lku1pv',
  },
  root_DEPRECATED: {
    borderTopStartRadius: 'x1o1ewxj',
    borderTopEndRadius: 'x3x9cwd',
    borderBottomEndRadius: 'x1e5q0jg',
    borderBottomStartRadius: 'x13rtm0m',
    position: 'x1n2onr6',
    userSelect: 'x87ps6o',
    ':hover_textDecoration': 'x1lku1pv',
  },
  zIndex: { zIndex: 'x1vjfegm' },
};

function CometPressable({
  allowClickEventPropagation,
  children,
  className_DEPRECATED,
  cursorDisabled = false,
  xstyle,
  disabled = false,
  display,
  expanding = display === 'block',
  hideFocusOverlay = false,
  hideHoverOverlay = false,
  isContainerTarget = false,
  linkProps,
  onFocusChange,
  onFocusIn,
  onFocusOut,
  onFocusVisibleChange,
  onHoverChange,
  onHoverIn,
  onHoverOut,
  onPress,
  onPressChange,
  onPressIn,
  onPressOut,
  preventContextMenu,
  overlayDisabled = false,
  overlayOffset,
  overlayFocusRingPosition,
  overlayFocusVisibleStyle,
  overlayHoveredStyle,
  overlayPressedStyle,
  overlayRadius,
  suppressFocusRing = false,
  testOnly_pressed = false,
  testid,
  ...restProps
}, ref) {
  const [isPressed, setIsPressed] = useState(testOnly_pressed);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const handlePressChange = useCallback(
    (pressed) => {
      setIsPressed(pressed || testOnly_pressed);
      onPressChange && onPressChange(pressed);
    },
    [onPressChange, testOnly_pressed]
  );

  const handleFocusChange = useCallback(
    (focused) => {
      setIsFocused(focused);
      onFocusChange && onFocusChange(focused);
    },
    [onFocusChange]
  );

  const handleFocusVisibleChange = useCallback(
    (focusVisible) => {
      setIsFocusVisible(focusVisible);
      onFocusVisibleChange && onFocusVisibleChange(focusVisible);
    },
    [onFocusVisibleChange]
  );

  const handleHoverChange = useCallback(
    (hovered) => {
      setIsHovered(hovered);
      onHoverChange && onHoverChange(hovered);
    },
    [onHoverChange]
  );

  const overlay = overlayDisabled
    ? null
    : (
      <CometPressableOverlay
        focusRingPosition={overlayFocusRingPosition}
        focusVisible={!hideFocusOverlay && isFocusVisible}
        focusVisibleStyle={overlayFocusVisibleStyle}
        hovered={!hideHoverOverlay && isHovered}
        hoveredStyle={overlayHoveredStyle}
        offset={overlayOffset}
        pressed={isPressed}
        pressedStyle={overlayPressedStyle}
        radius={overlayRadius}
        showFocusRing={true}
      />
    );

  const content = typeof children === 'function'
    ? children({
      disabled,
      focused: isFocused,
      focusVisible: isFocusVisible,
      hovered: isHovered,
      overlay,
      pressed: isPressed,
    })
    : (
      <>
        {children}
        {overlay}
      </>
    );

  const mergedStyles = typeof xstyle === "function"? xstyle({
      disabled,
      focused: isFocused,
      focusVisible: isFocusVisible,
      hovered: isHovered,
      pressed: isPressed,
    }) : xstyle;

  const targetRef = useRef(null);
  const elementRef = useRef(null);

  const mergedRef = useMergeRefs(ref, elementRef)

  const context = useContext(CometContainerPressableContext);
  const suppressContext = useContext(CometDangerouslySuppressInteractiveElementsContext);
 
  const focusVisible = isFocusVisible && (hideFocusOverlay || overlayDisabled) && !suppressFocusRing;

  const classNames = [
      display === "inline" ? styles.root_DEPRECATED : styles.root,
      cursorDisabled === true && styles.defaultCursor,
      expanding && styles.expanding,
      linkProps != null && styles.linkBase,
      !isContainerTarget && styles.hideOutline,
      mergedStyles,
      focusVisible && (overlayFocusRingPosition === "inset" ? BaseFocusRing.focusRingInsetXStyle : BaseFocusRing.focusRingXStyle),
      context != null && styles.zIndex
  ];

  const eventHandlers = {
      onBlur:onFocusOut,
      onClick: onPress,
      onFocus: onFocusIn,
      onFocusChange: handleFocusChange,
      onFocusVisibleChange: handleFocusVisibleChange,
      onHoverChange: handleHoverChange,
      onHoverEnd: onHoverOut,
      onHoverStart: onHoverIn,
      onPressChange: handlePressChange,
      onPressEnd: onPressOut,
      onPressStart: onPressIn
  };


  useEffect(() => {
    if (isContainerTarget && context) {
      context.onMount({
        onContextMenu: (e) => {
          if (preventContextMenu) {
            e.preventDefault();
          }

          if (restProps.onContextMenu) {
            restProps.onContextMenu(e);
          }
        },
        onPress: () => {
          const element = elementRef.current;
          element && element.click();
        },
        target: linkProps?.target,
        url: linkProps?.url,
      }, targetRef);
    }
  }, [isContainerTarget, linkProps, preventContextMenu, restProps]);

  if (suppressContext) {
    const Element = display === "inline" ? "span" : "div";
    return (
      <Element
        className_DEPRECATED={className_DEPRECATED}
        display={display === "inline" ? display : "block"}
        preventContextMenu={preventContextMenu}
        {...restProps}
        ref={mergedRef}
        className={stylex(classNames)}
      >
        {content}
      </Element>
    );
  }

  if (linkProps != null) {
    const { url, ...otherLinkProps } = linkProps;
    return (
      <BaseLink
        {...restProps}
        {...eventHandlers}
        {...otherLinkProps}
        className_DEPRECATED={className_DEPRECATED}
        disabled={disabled}
        display={display === "inline" ? display : "block"}
        preventContextMenu={preventContextMenu}
        ref={mergedRef}
        xstyle={classNames}
        suppressFocusRing={!focusVisible || gkx("1721477") || gkx("1459")}
      >
        {content}
      </BaseLink>
    );
  }

  return (
    <BaseButton
      allowClickEventPropagation={allowClickEventPropagation}
      className_DEPRECATED={className_DEPRECATED}
      disabled={disabled}
      display={display === "inline" ? display : "block"}
      preventContextMenu={preventContextMenu}
      ref={mergedRef}
      suppressFocusRing={!focusVisible || gkx("1721477") || gkx("1459")}
      xstyle={classNames}
      {...restProps}
      {...eventHandlers}
    >
      {content}
    </BaseButton>
  );

}

export default CometPressable;
