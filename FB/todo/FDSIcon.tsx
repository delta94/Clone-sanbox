__d(
  "FDSIcon.react",
  [
    "fbt",
    "BaseImage_DEPRECATED.react",
    "BaseIsDecorativeContext",
    "CometPressable.react",
    "CometSVGIcon.react",
    "FDSTintedIcon.react",
    "FlightSerializableIcon",
    "IconSource",
    "ImageIconSource",
    "SVGIcon",
    "TintableIconSource",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = j || (j = d("react")),
      l = j.useMemo,
      m = {
        button: {
          appearance: "xjyslct",
          backgroundColor: "xjbqb8w",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          display: "x3nfvp2",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          verticalAlign: "x3ajldb",
          "::after_borderTopStartRadius": "x194ut8o",
          "::after_borderTopEndRadius": "x1vzenxt",
          "::after_borderBottomEndRadius": "xd7ygy7",
          "::after_borderBottomStartRadius": "xt298gk",
          "::after_bottom": "x1xhcax0",
          "::after_content": "x1s928wv",
          "::after_end": "x10pfhc2",
          "::after_left": null,
          "::after_right": null,
          "::after_position": "x1j6awrg",
          "::after_start": "x1v53gu8",
          "::after_top": "x1tfg27r",
          "::after_zIndex": "xitxdhh",
          $$css: !0,
        },
        image: { verticalAlign: "x1b0d499", $$css: !0 },
        imageContain: { objectFit: "xz74otr", $$css: !0 },
        imageCover: { objectFit: "xl1xv1r", $$css: !0 },
        pressed: { transform: "x1n5d1j9", $$css: !0 },
      };
    b = k.forwardRef(a);
    function a(a, b) {
      a = babelHelpers["extends"]({}, a);
      var e = a.alt,
        f = e === void 0 ? "" : e;
      e = a.color;
      e = e === void 0 ? "primary" : e;
      var g = a.disabled;
      g = g === void 0 ? !1 : g;
      var j = a.disableOverlay_DEPRECATED;
      j = j === void 0 ? !1 : j;
      a.draggable;
      var o = a.focusable,
        p = a.hideHoverOverlay;
      p = p === void 0 ? !1 : p;
      var q = a.icon,
        r = a.id,
        s = a.isDecorative,
        t = s === void 0 ? !1 : s;
      s = a.linkProps;
      var u = a.onHoverIn,
        v = a.onHoverOut,
        w = a.onPress,
        x = a.onPressIn,
        y = a.onPressOut,
        z = a.size;
      z = z === void 0 ? 8 : z;
      var A = a.testid,
        B = a.testOnly_pressed;
      B = B === void 0 ? !1 : B;
      var C = a.xstyle,
        D = babelHelpers.objectWithoutPropertiesLoose(a, [
          "alt",
          "color",
          "disabled",
          "disableOverlay_DEPRECATED",
          "draggable",
          "focusable",
          "hideHoverOverlay",
          "icon",
          "id",
          "isDecorative",
          "linkProps",
          "onHoverIn",
          "onHoverOut",
          "onPress",
          "onPressIn",
          "onPressOut",
          "size",
          "testid",
          "testOnly_pressed",
          "xstyle",
        ]);
      q = d("FlightSerializableIcon").parseFlightIcon(q);
      A = w == null ? A : void 0;
      e = a.disabled === !0 ? "disabled" : e;
      var E = w != null || s != null,
        F = D["aria-label"],
        G = l(
          function () {
            if (!E && (typeof F === "string" || h.isFbtInstance(F))) return F;
            return t ? "" : f;
          },
          [F, t, E, f]
        ),
        H = E ? void 0 : b;
      C =
        q instanceof c("TintableIconSource")
          ? k.jsx(c("FDSTintedIcon.react"), {
              alt: G,
              color: n(e),
              draggable: a.draggable,
              icon: q,
              id: r,
              ref: H,
              testid: void 0,
              xstyle: C,
            })
          : q instanceof c("ImageIconSource")
          ? k.jsx(c("BaseImage_DEPRECATED.react"), {
              alt: G,
              className: (i || (i = c("stylex")))(
                m.image,
                q.resizeStrategy === "contain" && m.imageContain,
                q.resizeStrategy === "cover" && m.imageCover,
                C
              ),
              draggable: a.draggable,
              id: r,
              ref: H,
              src: q.src,
              style: { height: q.height, width: q.width },
              testid: void 0,
            })
          : q instanceof c("IconSource")
          ? k.jsx(c("BaseImage_DEPRECATED.react"), {
              alt: G,
              className: (i || (i = c("stylex")))(m.image, C),
              draggable: a.draggable,
              height: q.size,
              id: r,
              ref: H,
              src: q.src,
              width: q.size,
            })
          : q instanceof d("SVGIcon").LegacySVGIcon
          ? k.createElement(q.component, {
              alt: G,
              color: e,
              "data-testid": A,
              id: r,
              size: z,
            })
          : q instanceof d("SVGIcon").SVGIcon
          ? k.jsx(c("CometSVGIcon.react"), {
              alt: G,
              color: e,
              component: q.component,
              "data-testid": void 0,
              id: r,
              size: z,
            })
          : q instanceof d("SVGIcon").EmojiIcon
          ? k.createElement(q.component, { emoji: q.codepoints, size: z })
          : k.jsx(c("CometSVGIcon.react"), {
              alt: G,
              color: e,
              component: q,
              "data-testid": void 0,
              id: r,
              size: z,
            });
      a = t
        ? k.jsx(c("BaseIsDecorativeContext").Provider, {
            value: !0,
            children: C,
          })
        : C;
      return E
        ? k.jsx(
            c("CometPressable.react"),
            babelHelpers["extends"]({}, D, {
              disabled: g,
              focusable: o,
              hideHoverOverlay: p,
              linkProps: s,
              onHoverIn: u,
              onHoverOut: v,
              onPress: w,
              onPressIn: x,
              onPressOut: y,
              overlayDisabled: j,
              overlayOffset: 8,
              overlayRadius: "50%",
              ref: b,
              testOnly_pressed: B,
              testid: void 0,
              xstyle: function (a) {
                a = a.pressed;
                return [m.button, a && m.pressed];
              },
              children: a,
            })
          )
        : a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a) {
      switch (a) {
        case "positive":
          return "positive";
        case "negative":
          return "negative";
        case "disabled":
          return "disabled";
        case "highlight":
          return "accent";
        case "secondary":
          return "secondary";
        case "tertiary":
          return "placeholder";
        case "white":
          return "white";
        case "primary":
          return "primary";
        case "warning":
          return "warning";
        case "blueLink":
          return "blueLink";
        case "primaryAccent":
          return "primaryAccent";
        default:
          return "black";
      }
    }
    e = b;
    g["default"] = e;
  },
  98
);

import React, { forwardRef, useMemo } from "react";
import {
  FlightSerializableIcon,
  IconSource,
  ImageIconSource,
  TintableIconSource,
  SVGIcon,
  EmojiIcon,
} from "IconSource";
import { FDSTintedIcon } from "FDSTintedIcon";
import { BaseImage_DEPRECATED } from "BaseImage_DEPRECATED";
import { CometPressable } from "CometPressable";
import { CometSVGIcon } from "CometSVGIcon";
import { BaseIsDecorativeContext } from "BaseIsDecorativeContext";
import { stylex } from "stylex";

type Props = {
  alt?: string;
  color?: string;
  disabled?: boolean;
  disableOverlay_DEPRECATED?: boolean;
  focusable?: boolean;
  hideHoverOverlay?: boolean;
  icon: IconSource;
  id?: string;
  isDecorative?: boolean;
  linkProps?: any;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  size?: number;
  testid?: string;
  testOnly_pressed?: boolean;
  xstyle?: any;
};

const styles = {
  button: {
    appearance: "xjyslct",
    backgroundColor: "xjbqb8w",
    borderTopStyle: "x13fuv20",
    borderEndStyle: "xu3j5b3",
    borderBottomStyle: "x1q0q8m5",
    borderStartStyle: "x26u7qi",
    borderTopWidth: "x972fbf",
    borderEndWidth: "xcfux6l",
    borderBottomWidth: "x1qhh985",
    borderStartWidth: "xm0m39n",
    display: "x3nfvp2",
    marginTop: "xdj266r",
    marginEnd: "x11i5rnm",
    marginBottom: "xat24cr",
    marginStart: "x1mh8g0r",
    paddingTop: "xexx8yu",
    paddingEnd: "x4uap5",
    paddingBottom: "x18d9i69",
    paddingStart: "xkhd6sd",
    position: "x1n2onr6",
    verticalAlign: "x3ajldb",
    "::after_borderTopStartRadius": "x194ut8o",
    "::after_borderTopEndRadius": "x1vzenxt",
    "::after_borderBottomEndRadius": "xd7ygy7",
    "::after_borderBottomStartRadius": "xt298gk",
    "::after_bottom": "x1xhcax0",
    "::after_content": "x1s928wv",
    "::after_end": "x10pfhc2",
    "::after_left": null,
    "::after_right": null,
    "::after_position": "x1j6awrg",
    "::after_start": "x1v53gu8",
    "::after_top": "x1tfg27r",
    "::after_zIndex": "xitxdhh",
    $$css: !0,
  },
  image: { verticalAlign: "x1b0d499", $$css: !0 },
  imageContain: { objectFit: "xz74otr", $$css: !0 },
  imageCover: { objectFit: "xl1xv1r", $$css: !0 },
  pressed: { transform: "x1n5d1j9", $$css: !0 },
};

const FDSIcon: React.FC<Props> = forwardRef((props, ref) => {
  const {
    alt = "",
    color = "primary",
    disabled = false,
    disableOverlay_DEPRECATED = false,
    focusable,
    hideHoverOverlay = false,
    icon,
    id,
    isDecorative = false,
    linkProps,
    onHoverIn,
    onHoverOut,
    onPress,
    onPressIn,
    onPressOut,
    size = 8,
    testid,
    testOnly_pressed = false,
    xstyle,
    ...rest
  } = props;

  const parsedIcon = FlightSerializableIcon.parseFlightIcon(icon);

  const ariaLabel = useMemo(() => {
    if (!onPress && !linkProps) {
      return typeof alt === "string" ? alt : "";
    }
    return isDecorative ? "" : alt;
  }, [alt, isDecorative, onPress, linkProps]);

  const overlayDisabled = !onPress && !linkProps;

  const IconComponent = useMemo(() => {
    if (parsedIcon instanceof TintableIconSource) {
      return (
        <FDSTintedIcon
          alt={ariaLabel}
          color={getColor(color)}
          draggable={rest.draggable}
          icon={parsedIcon}
          id={id}
          ref={ref}
          testid={undefined}
          xstyle={xstyle}
        />
      );
    } else if (parsedIcon instanceof ImageIconSource) {
      return (
        <BaseImage_DEPRECATED
          alt={ariaLabel}
          className={stylex(
            styles.image,
            parsedIcon.resizeStrategy === "contain" && styles.imageContain,
            parsedIcon.resizeStrategy === "cover" && styles.imageCover,
            xstyle
          )}
          draggable={rest.draggable}
          id={id}
          ref={ref}
          src={parsedIcon.src}
          style={{ height: parsedIcon.height, width: parsedIcon.width }}
          testid={undefined}
        />
      );
    } else if (parsedIcon instanceof IconSource) {
      return (
        <BaseImage_DEPRECATED
          alt={ariaLabel}
          className={stylex(styles.image, xstyle)}
          draggable={rest.draggable}
          height={parsedIcon.size}
          id={id}
          ref={ref}
          src={parsedIcon.src}
          width={parsedIcon.size}
        />
      );
    } else if (parsedIcon instanceof SVGIcon.LegacySVGIcon) {
      return (
        <parsedIcon.component
          alt={ariaLabel}
          color={color}
          id={id}
          size={size}
        />
      );
    } else if (parsedIcon instanceof SVGIcon.SVGIcon) {
      return (
        <CometSVGIcon
          alt={ariaLabel}
          color={color}
          component={parsedIcon.component}
          id={id}
          size={size}
        />
      );
    } else if (parsedIcon instanceof SVGIcon.EmojiIcon) {
      return <parsedIcon.component emoji={parsedIcon.codepoints} size={size} />;
    } else {
      return (
        <CometSVGIcon
          alt={ariaLabel}
          color={color}
          component={parsedIcon}
          id={id}
          size={size}
        />
      );
    }
  }, [parsedIcon, ariaLabel, color, id, size, rest.draggable, ref, xstyle]);

  const iconToRender = isDecorative ? (
    <BaseIsDecorativeContext.Provider value={true}>
      {IconComponent}
    </BaseIsDecorativeContext.Provider>
  ) : (
    IconComponent
  );

  return (
    <CometPressable
      {...rest}
      disabled={disabled}
      focusable={focusable}
      hideHoverOverlay={hideHoverOverlay}
      linkProps={linkProps}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      overlayDisabled={overlayDisabled}
      overlayOffset={8}
      overlayRadius="50%"
      ref={ref}
      testOnly_pressed={testOnly_pressed}
      testid={undefined}
      xstyle={(styles.button, styles.pressed)}
    >
      {iconToRender}
    </CometPressable>
  );
});

function getColor(color: string): string {
  switch (color) {
    case "positive":
      return "positive";
    case "negative":
      return "negative";
    case "disabled":
      return "disabled";
    case "highlight":
      return "accent";
    case "secondary":
      return "secondary";
    case "tertiary":
      return "placeholder";
    case "white":
      return "white";
    case "primary":
      return "primary";
    case "warning":
      return "warning";
    case "blueLink":
      return "blueLink";
    case "primaryAccent":
      return "primaryAccent";
    default:
      return "black";
  }
}

export default FDSIcon;
