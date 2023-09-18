__d("CometPressableOverlay.react", ["BaseFocusRing.react", "CometCompositeItemFocusIndicator.react", "CometVisualCompletionAttributes", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState,
        j = {
            circle: {
                borderTopStartRadius: "x14yjl9h",
                borderTopEndRadius: "xudhj91",
                borderBottomEndRadius: "x18nykt9",
                borderBottomStartRadius: "xww2gxu",
                $$css: !0
            },
            defaultHoveredStyle: {
                backgroundColor: "x1wpzbip",
                $$css: !0
            },
            defaultPressedStyle: {
                backgroundColor: "x1iutvsz",
                $$css: !0
            },
            overlay: {
                borderTopStartRadius: "x1o1ewxj",
                borderTopEndRadius: "x3x9cwd",
                borderBottomEndRadius: "x1e5q0jg",
                borderBottomStartRadius: "x13rtm0m",
                bottom: "x1ey2m1c",
                end: "xds687c",
                opacity: "xg01cxk",
                pointerEvents: "x47corl",
                position: "x10l6tqk",
                start: "x17qophe",
                top: "x13vifvy",
                transitionDuration: "x1ebt8du",
                transitionProperty: "x19991ni",
                transitionTimingFunction: "x1dhq9h",
                $$css: !0
            },
            overlayVisible: {
                opacity: "x1hc1fzr",
                transitionDuration: "x1mq3mr6",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.focusVisible;
        b = b === void 0 ? !1 : b;
        var d = a.focusRingPosition;
        d = d === void 0 ? "default" : d;
        var e = a.hovered;
        e = e === void 0 ? !1 : e;
        var f = a.hoveredStyle;
        f = f === void 0 ? j.defaultHoveredStyle : f;
        var g = a.offset,
            k = a.pressed;
        k = k === void 0 ? !1 : k;
        var l = a.pressedStyle;
        l = l === void 0 ? j.defaultPressedStyle : l;
        var m = a.radius,
            n = a.focusVisibleStyle;
        n = n === void 0 ? f : n;
        var o = a.showGridSignifiers;
        o = o === void 0 ? !1 : o;
        a = a.showFocusRing;
        a = a === void 0 ? !1 : a;
        var p = i(),
            q = p[0];
        p = p[1];
        k ? q !== "pressed" && p("pressed") : b ? q !== "focused" && p("focused") : e && (q !== "hovered" && p("hovered"));
        var r, s, t, u;
        g != null && (typeof g === "number" ? (r = -g, s = -g, t = -g, u = -g) : (r = -g.bottom, s = -g.left, t = -g.right, u = -g.top));
        return h.jsx("div", babelHelpers["extends"]({
            className: c("stylex")(j.overlay, (k || b || e || o) && j.overlayVisible, q === "pressed" && l, q === "focused" && n, q === "hovered" && f, q === "focused" && a ? d === "default" ? c("BaseFocusRing.react").focusRingXStyle : c("BaseFocusRing.react").focusRingInsetXStyle : void 0, m === "50%" && j.circle)
        }, c("CometVisualCompletionAttributes").IGNORE, {
            style: q != null ? {
                borderRadius: typeof m === "number" ? m : void 0,
                bottom: r,
                left: s,
                right: t,
                top: u
            } : void 0,
            children: o ? h.jsx(c("CometCompositeItemFocusIndicator.react"), {}) : null
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { useState } from 'react';
import { CometVisualCompletionAttributes } from 'CometVisualCompletionAttributes';
import { focusRingXStyle, focusRingInsetXStyle } from 'BaseFocusRing.react';
import CometCompositeItemFocusIndicator from 'CometCompositeItemFocusIndicator.react';
import stylex from 'stylex';

type FocusRingPosition = 'default';

interface CometPressableOverlayProps {
  focusVisible?: boolean;
  focusRingPosition?: FocusRingPosition;
  hovered?: boolean;
  hoveredStyle?: Record<string, string>;
  offset?: number | { top?: number; right?: number; bottom?: number; left?: number };
  pressed?: boolean;
  pressedStyle?: Record<string, string>;
  radius?: number | '50%';
  focusVisibleStyle?: Record<string, string>;
  showGridSignifiers?: boolean;
  showFocusRing?: boolean;
}

const styles = {
  circle: {
    borderTopStartRadius: 'x14yjl9h',
    borderTopEndRadius: 'xudhj91',
    borderBottomEndRadius: 'x18nykt9',
    borderBottomStartRadius: 'xww2gxu',
    $$css: true,
  },
  defaultHoveredStyle: {
    backgroundColor: 'x1wpzbip',
    $$css: true,
  },
  defaultPressedStyle: {
    backgroundColor: 'x1iutvsz',
    $$css: true,
  },
  overlay: {
    borderTopStartRadius: 'x1o1ewxj',
    borderTopEndRadius: 'x3x9cwd',
    borderBottomEndRadius: 'x1e5q0jg',
    borderBottomStartRadius: 'x13rtm0m',
    bottom: 'x1ey2m1c',
    end: 'xds687c',
    opacity: 'xg01cxk',
    pointerEvents: 'x47corl',
    position: 'x10l6tqk',
    start: 'x17qophe',
    top: 'x13vifvy',
    transitionDuration: 'x1ebt8du',
    transitionProperty: 'x19991ni',
    transitionTimingFunction: 'x1dhq9h',
    $$css: true,
  },
  overlayVisible: {
    opacity: 'x1hc1fzr',
    transitionDuration: 'x1mq3mr6',
    $$css: true,
  },
};

const CometPressableOverlay: React.FC<CometPressableOverlayProps> = ({
  focusVisible = false,
  focusRingPosition = 'default',
  hovered = false,
  hoveredStyle = styles.defaultHoveredStyle,
  offset,
  pressed = false,
  pressedStyle = styles.defaultPressedStyle,
  radius,
  focusVisibleStyle = hoveredStyle,
  showGridSignifiers = false,
  showFocusRing = false,
}) => {
  const [state, setState] = useState<string | null>(null);

  if (pressed) {
    state !== 'pressed' && setState('pressed');
  } else if (focusVisible) {
    state !== 'focused' && setState('focused');
  } else if (hovered) {
    state !== 'hovered' && setState('hovered');
  }

  let {
    bottom: bottomOffset,
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
  } = offset ?? {};

  if (offset != null && typeof offset === 'number') {
    bottomOffset = -offset;
    leftOffset = -offset;
    rightOffset = -offset;
    topOffset = -offset;
  }

  return (
    <div
      className={stylex(
        styles.overlay,
        (pressed || focusVisible || hovered || showGridSignifiers) && styles.overlayVisible,
        state === 'pressed' && pressedStyle,
        state === 'focused' && focusVisibleStyle,
        state === 'hovered' && hoveredStyle,
        state === 'focused' && showFocusRing ? (focusRingPosition === 'default' ? focusRingXStyle : focusRingInsetXStyle) : undefined,
        radius === '50%' && styles.circle
      )}
      {...CometVisualCompletionAttributes.IGNORE}
      style={
        state != null
          ? {
              borderRadius: typeof radius === 'number' ? radius : undefined,
              bottom: bottomOffset,
              left: leftOffset,
              right: rightOffset,
              top: topOffset,
            }
          : undefined
      }
    >
      {showGridSignifiers ? <CometCompositeItemFocusIndicator /> : null}
    </div>
  );
};

CometPressableOverlay.displayName = 'CometPressableOverlay';

export default CometPressableOverlay;
