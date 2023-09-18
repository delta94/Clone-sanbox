__d("CometIcon.react", ["BaseImage_DEPRECATED.react", "CometPressable.react", "CometSVGIcon.react", "CometTintedIcon.react", "FlightSerializableIcon", "IconSource", "ImageIconSource", "SVGIcon", "TintableIconSource", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = {
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
            "::after_position": "x1j6awrg",
            "::after_start": "x1v53gu8",
            "::after_top": "x1tfg27r",
            "::after_zIndex": "xitxdhh",
            $$css: !0
        },
        image: {
            verticalAlign: "x1b0d499",
            $$css: !0
        },
        imageContain: {
            objectFit: "xz74otr",
            $$css: !0
        },
        imageCover: {
            objectFit: "xl1xv1r",
            $$css: !0
        },
        pressed: {
            transform: "x1n5d1j9",
            $$css: !0
        }
    };
    function a(a, b) {
        var e = a.alt;
        e = e === void 0 ? "" : e;
        var f = a.color;
        f = f === void 0 ? "primary" : f;
        var g = a.disabled;
        g = g === void 0 ? !1 : g;
        var k = a.disableOverlay_DEPRECATED;
        k = k === void 0 ? !1 : k;
        a.draggable;
        var l = a.focusable
          , m = a.hideHoverOverlay;
        m = m === void 0 ? !1 : m;
        var n = a.icon
          , o = a.linkProps
          , p = a.onHoverIn
          , q = a.onHoverOut
          , r = a.onPress
          , s = a.onPressIn
          , t = a.onPressOut
          , u = a.size;
        u = u === void 0 ? 8 : u;
        var v = a.testid
          , w = a.testOnly_pressed;
        w = w === void 0 ? !1 : w;
        var x = a.xstyle
          , y = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "color", "disabled", "disableOverlay_DEPRECATED", "draggable", "focusable", "hideHoverOverlay", "icon", "linkProps", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "size", "testid", "testOnly_pressed", "xstyle"]);
        n = d("FlightSerializableIcon").parseFlightIcon(n);
        v = r == null ? v : void 0;
        f = a.disabled === !0 ? "disabled" : f;
        var z = r != null || o != null;
        e = !z && y["aria-label"] || e;
        var A = z ? void 0 : b;
        x = n instanceof c("TintableIconSource") ? h.jsx(c("CometTintedIcon.react"), {
            alt: e,
            color: j(f),
            draggable: a.draggable,
            icon: n,
            ref: A,
            testid: void 0,
            xstyle: x
        }) : n instanceof c("ImageIconSource") ? h.jsx(c("BaseImage_DEPRECATED.react"), {
            alt: e,
            className: c("stylex")(i.image, n.resizeStrategy === "contain" && i.imageContain, n.resizeStrategy === "cover" && i.imageCover, x),
            draggable: a.draggable,
            ref: A,
            src: n.src,
            style: {
                height: n.height,
                width: n.width
            },
            testid: void 0
        }) : n instanceof c("IconSource") ? h.jsx(c("BaseImage_DEPRECATED.react"), {
            alt: e,
            className: c("stylex")(i.image, x),
            draggable: a.draggable,
            height: n.size,
            ref: A,
            src: n.src,
            width: n.size
        }) : n instanceof d("SVGIcon").LegacySVGIcon ? h.createElement(n.component, {
            alt: e,
            color: f,
            "data-testid": v,
            size: u
        }) : n instanceof d("SVGIcon").SVGIcon ? h.jsx(c("CometSVGIcon.react"), {
            alt: e,
            color: f,
            component: n.component,
            "data-testid": void 0,
            size: u
        }) : h.jsx(c("CometSVGIcon.react"), {
            alt: e,
            color: f,
            component: n,
            "data-testid": void 0,
            size: u
        });
        return z ? h.jsx(c("CometPressable.react"), babelHelpers["extends"]({}, y, {
            disabled: g,
            focusable: l,
            hideHoverOverlay: m,
            linkProps: o,
            onHoverIn: p,
            onHoverOut: q,
            onPress: r,
            onPressIn: s,
            onPressOut: t,
            overlayDisabled: k,
            overlayOffset: 8,
            overlayRadius: "50%",
            ref: b,
            testOnly_pressed: w,
            testid: void 0,
            xstyle: function(a) {
                a = a.pressed;
                return [i.button, a && i.pressed]
            },
            children: x
        })) : x
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
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
        default:
            return "black"
        }
    }
    b = h.forwardRef(a);
    g["default"] = b
}
), 98);


import React, { forwardRef, ReactNode } from 'react';

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
        "::after_position": "x1j6awrg",
        "::after_start": "x1v53gu8",
        "::after_top": "x1tfg27r",
        "::after_zIndex": "xitxdhh",
        $$css: !0
    },
    image: {
        verticalAlign: "x1b0d499",
        $$css: !0
    },
    imageContain: {
        objectFit: "xz74otr",
        $$css: !0
    },
    imageCover: {
        objectFit: "xl1xv1r",
        $$css: !0
    },
    pressed: {
        transform: "x1n5d1j9",
        $$css: !0
    }
};

interface CometIconProps {
  alt?: string;
  color?: string;
  disabled?: boolean;
  disableOverlay_DEPRECATED?: boolean;
  draggable?: boolean;
  focusable?: boolean;
  hideHoverOverlay?: boolean;
  icon: any;
  linkProps?: object;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  size?: number;
  testid?: string;
  testOnly_pressed?: boolean;
  xstyle?: object;
}

function CometIcon(
  {
    alt = '',
    color = 'primary',
    disabled = false,
    disableOverlay_DEPRECATED = false,
    draggable,
    focusable,
    hideHoverOverlay = false,
    icon,
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
  }: CometIconProps,
  ref: React.ForwardedRef<any>
) {
  const _icon = parseFlightIcon(icon);
  const _testid = onPress == null ? testid : undefined;
  color = disabled === true ? 'disabled' : color;

  const isClickable = onPress !== null || linkProps !== null;
  const _alt = !isClickable && rest['aria-label'] || alt;

  const refCallback = ref as React.RefObject<any>;

  const iconComponent = icon instanceof TintableIconSource ? (
    <CometTintedIcon
      alt={_alt}
      color={getColor(color)}
      draggable={draggable}
      icon={_icon}
      ref={refCallback}
      testid={undefined}
      xstyle={xstyle}
    />
  ) : icon instanceof ImageIconSource ? (
    <BaseImage_DEPRECATED
      alt={alt}
      className={stylex(styles.image, icon.resizeStrategy === "contain" && styles.imageContain, icon.resizeStrategy === "cover" && styles.imageCover, xstyle)}
      draggable={draggable}
      ref={refCallback}
      src={icon.src}
      style={{ height: icon.height, width: icon.width }}
      testid={undefined}
    />
  ) : icon instanceof IconSource ? (
    <BaseImage_DEPRECATED
      alt={alt}
      className={stylex(styles.image, xstyle)}
      draggable={draggable}
      height={icon.size}
      ref={refCallback}
      src={icon.src}
      width={icon.size}
    />
  ) : icon instanceof SVGIcon.LegacySVGIcon ? (
    React.createElement(icon.component, {
      alt: alt,
      color: color,
      size: size,
      "data-testid": _testid,
    })
  ) : icon instanceof SVGIcon.SVGIcon ? (
    <CometSVGIcon
      alt={alt}
      color={color}
      component={icon.component}
      size={size}
    />
  ) : (
    <CometSVGIcon
      alt={alt}
      color={color}
      component={icon}
      size={size}
    />
  );

  return isClickable ? (
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
      overlayDisabled={disableOverlay_DEPRECATED}
      overlayOffset={8}
      overlayRadius="50%"
      ref={refCallback}
      testOnly_pressed={testOnly_pressed}
      testid={undefined}
      xstyle={(pressed) => [styles.button, pressed && styles.pressed]}
    >
      {iconComponent}
    </CometPressable>
  ) : (
    iconComponent
  );
}

function getColor(color: string): string {
    switch (color) {
      case 'positive':
        return 'positive';
      case 'negative':
        return 'negative';
      case 'disabled':
        return 'disabled';
      case 'highlight':
        return 'accent';
      case 'secondary':
        return 'secondary';
      case 'tertiary':
        return 'placeholder';
      case 'white':
        return 'white';
      case 'primary':
        return 'primary';
      case 'warning':
        return 'warning';
      case 'blueLink':
        return 'blueLink';
      default:
        return 'black';
    }
  }

export default forwardRef(CometIcon);
