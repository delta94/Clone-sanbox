__d(
  "CometCircleButton.react",
  [
    "CometPressable.react",
    "ComponentWithDataAttributes.react",
    "FDSIcon.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        pressableOverlayPressed: { backgroundColor: "x1lxk4cn", $$css: !0 },
        pressed: { transform: "x1n5d1j9", $$css: !0 },
        root: {
          alignItems: "x6s0dn4",
          borderTopStartRadius: "xzolkzo",
          borderTopEndRadius: "x12go9s9",
          borderBottomEndRadius: "x1rnf11y",
          borderBottomStartRadius: "xprq8jg",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          $$css: !0,
        },
      },
      k = {
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        28: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
      },
      l = {
        "dark-overlay": {
          backgroundColor: "x18l40ae",
          color: "x14ctfv",
          $$css: !0,
        },
        deemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        "deemphasized-overlay": { backgroundColor: "x1hr4nm9", $$css: !0 },
        normal: { backgroundColor: "x1qhmfi1", $$css: !0 },
        overlay: {
          backgroundColor: "x9bbmet",
          boxShadow: "x10f5nwc",
          color: "xi81zsa",
          $$css: !0,
        },
        "overlay-floating": {
          backgroundColor: "x1l31dnx",
          boxShadow: "x1qeybcx",
          $$css: !0,
        },
        "overlay-raised": {
          backgroundColor: "x9bbmet",
          boxShadow: "x1k54i6l",
          color: "xi81zsa",
          $$css: !0,
        },
        "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: !0 },
      },
      m = {
        "dark-overlay": { backgroundColor: "x18l40ae", $$css: !0 },
        deemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        "deemphasized-overlay": { backgroundColor: "x1f2gare", $$css: !0 },
        normal: { backgroundColor: "xwcfey6", $$css: !0 },
        overlay: {
          backgroundColor: "x1ahlmzr",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxShadow: "xxnfx33",
          color: "x1dntmbh",
          $$css: !0,
        },
        "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: !0 },
      },
      n =
        ((b = {}),
        (b[24] = 12),
        (b[28] = 16),
        (b[32] = 16),
        (b[36] = 20),
        (b[40] = 20),
        (b[48] = 24),
        b),
      o =
        ((e = {}),
        (e[24] = 20),
        (e[28] = 20),
        (e[32] = 24),
        (e[36] = 28),
        (e[40] = 32),
        (e[48] = 32),
        e);
    d = i.forwardRef(a);
    function a(a, b) {
      a = babelHelpers["extends"]({}, a);
      var d = a.color,
        e = a.dataAttributes,
        f = a.disabled,
        g = f === void 0 ? !1 : f;
      f = a.focusable;
      var h = a.icon,
        q = a.iconRatio,
        r = a.label,
        s = a.linkProps,
        t = a.onFocusIn,
        u = a.onFocusOut,
        v = a.onHoverIn,
        w = a.onHoverOut,
        x = a.onPress,
        y = a.onPressIn,
        z = a.onPressOut,
        A = a.overlayHoveredStyle,
        B = a.size,
        C = a.testid;
      C = a.testOnly_pressed;
      var D = a.type,
        E = D === void 0 ? "normal" : D;
      D = babelHelpers.objectWithoutPropertiesLoose(a, [
        "color",
        "dataAttributes",
        "disabled",
        "focusable",
        "icon",
        "iconRatio",
        "label",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressIn",
        "onPressOut",
        "overlayHoveredStyle",
        "size",
        "testid",
        "testOnly_pressed",
        "type",
      ]);
      a =
        e != null
          ? Object.keys(e).reduce(function (a, b) {
              a != null && b != null && (a["data-" + b] = e[b]);
              return a;
            }, {})
          : null;
      r = i.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"]({}, D, {
          "aria-label": r,
          disabled: g,
          display: "inline",
          focusable: f,
          linkProps: s,
          onFocusIn: t,
          onFocusOut: u,
          onHoverIn: v,
          onHoverOut: w,
          onPress: x,
          onPressIn: y,
          onPressOut: z,
          overlayHoveredStyle: A,
          overlayPressedStyle: j.pressableOverlayPressed,
          overlayRadius: "50%",
          ref: b,
          testOnly_pressed: C,
          testid: void 0,
          xstyle: function (a) {
            a = a.pressed;
            return [
              j.root,
              k[B],
              l[E],
              g &&
                m[
                  E === "overlay-raised" || E === "overlay-floating"
                    ? "overlay"
                    : E
                ],
              a && j.pressed,
            ];
          },
          children: i.jsx(c("FDSIcon.react"), {
            color: g ? "disabled" : (D = d) != null ? D : p(E),
            icon: h,
            size: q === "large" ? o[B] : n[B],
          }),
        })
      );
      return a != null
        ? i.jsx(c("ComponentWithDataAttributes.react"), {
            dataAttributes: e,
            children: r,
          })
        : r;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function p(a) {
      switch (a) {
        case "dark-overlay":
          return "white";
        case "deemphasized-overlay":
          return "highlight";
        default:
          return "primary";
      }
    }
    b = d;
    g["default"] = b;
  },
  98
);
import React, { forwardRef } from "react";
import { FDSIcon } from "FDSIcon";
import { CometPressable } from "CometPressable";
import { ComponentWithDataAttributes } from "ComponentWithDataAttributes";

const pressableOverlayPressed = {
  backgroundColor: "x1lxk4cn",
  $$css: true,
};

const pressed = {
  transform: "x1n5d1j9",
  $$css: true,
};

const root = {
  alignItems: "x6s0dn4",
  borderTopStartRadius: "xzolkzo",
  borderTopEndRadius: "x12go9s9",
  borderBottomEndRadius: "x1rnf11y",
  borderBottomStartRadius: "xprq8jg",
  borderTopWidth: "x972fbf",
  borderEndWidth: "xcfux6l",
  borderBottomWidth: "x1qhh985",
  borderStartWidth: "xm0m39n",
  boxSizing: "x9f619",
  display: "x78zum5",
  justifyContent: "xl56j7k",
  paddingTop: "xexx8yu",
  paddingEnd: "x4uap5",
  paddingBottom: "x18d9i69",
  paddingStart: "xkhd6sd",
  position: "x1n2onr6",
  $$css: true,
};

const sizes = {
  24: { height: "xxk0z11", width: "xvy4d1p", $$css: true },
  28: { height: "x1fgtraw", width: "xgd8bvy", $$css: true },
  32: { height: "x10w6t97", width: "x1td3qas", $$css: true },
  36: { height: "xc9qbxq", width: "x14qfxbe", $$css: true },
  40: { height: "x1vqgdyp", width: "x100vrsf", $$css: true },
  48: { height: "xsdox4t", width: "x1useyqa", $$css: true },
};

const overlayStyles = {
  "dark-overlay": { backgroundColor: "x18l40ae", $$css: true },
  "deemphasized-overlay": { backgroundColor: "x1f2gare", $$css: true },
  normal: { backgroundColor: "xwcfey6", $$css: true },
  overlay: {
    backgroundColor: "x1ahlmzr",
    borderTopWidth: "x972fbf",
    borderEndWidth: "xcfux6l",
    borderBottomWidth: "x1qhh985",
    borderStartWidth: "xm0m39n",
    boxShadow: "xxnfx33",
    color: "x1dntmbh",
    $$css: true,
  },
  "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: true },
};

const hoverStyles = {
  "dark-overlay": { backgroundColor: "x18l40ae", $$css: true },
  "deemphasized-overlay": { backgroundColor: "x1hr4nm9", $$css: true },
  normal: { backgroundColor: "x1qhmfi1", $$css: true },
  overlay: {
    backgroundColor: "x9bbmet",
    boxShadow: "x10f5nwc",
    color: "xi81zsa",
    $$css: true,
  },
  "overlay-floating": {
    backgroundColor: "x1l31dnx",
    boxShadow: "x1qeybcx",
    $$css: true,
  },
  "overlay-raised": {
    backgroundColor: "x9bbmet",
    boxShadow: "x1k54i6l",
    color: "xi81zsa",
    $$css: true,
  },
  "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: true },
};

const defaultPressableProps = {
  display: "inline",
  overlayRadius: "50%",
  $$css: true,
};

const getIconSize = (size: number): number => {
  return size in sizes ? sizes[size].height : 20;
};

const CometCircleButton = forwardRef((props, ref) => {
  const {
    color,
    dataAttributes,
    disabled = false,
    focusable,
    icon,
    iconRatio,
    label,
    linkProps,
    onFocusIn,
    onFocusOut,
    onHoverIn,
    onHoverOut,
    onPress,
    onPressIn,
    onPressOut,
    overlayHoveredStyle,
    size,
    testid,
    testOnly_pressed,
    type = "normal",
    ...restProps
  } = props;

  const pressableProps = {
    "aria-label": label,
    disabled,
    focusable,
    linkProps,
    onFocusIn,
    onFocusOut,
    onHoverIn,
    onHoverOut,
    onPress,
    onPressIn,
    onPressOut,
    overlayHoveredStyle,
    overlayPressedStyle: pressableOverlayPressed,
    ref,
    testOnly_pressed,
    testid,
    xstyle: ({ pressed }) => [
      root,
      sizes[size],
      type === "normal" && overlayStyles["normal"],
      type === "overlay" && overlayStyles["overlay"],
      type === "dark-overlay" && overlayStyles["dark-overlay"],
      pressed && pressed,
    ],
    ...defaultPressableProps,
    ...restProps,
  };

  return (
    <ComponentWithDataAttributes dataAttributes={dataAttributes}>
      <CometPressable {...pressableProps}>
        <FDSIcon
          color={disabled ? "disabled" : color}
          icon={icon}
          size={
            iconRatio === "large" ? getIconSize(size) : getIconSize(size) / 2
          }
        />
      </CometPressable>
    </ComponentWithDataAttributes>
  );
});

export default CometCircleButton;
