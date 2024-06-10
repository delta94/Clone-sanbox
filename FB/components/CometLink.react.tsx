__d(
  "CometLink.react",
  [
    "BaseLink.react",
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometTextContext",
    "CometTextTypography",
    "isCometRouterUrl",
    "react",
    "react-strict-dom",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useContext,
      k = {
        disabled: {
          color: "x1dntmbh",
          textDecorationLine: "x1ubmc1d xkrqix3",
          $$css: !0,
        },
        root: {
          color: "x1heor9g",
          textDecorationLine: "x1sur9pj xkrqix3",
          $$css: !0,
        },
      },
      l = {
        blueLink: { color: "x1fey0fg", $$css: !0 },
        disabled: { color: "x1dntmbh", $$css: !0 },
        highlight: { color: "x1qq9wsj", $$css: !0 },
        negative: { color: "x1a1m0xk", $$css: !0 },
        positive: { color: "x6u5lvz", $$css: !0 },
        primary: { color: "xzsf02u", $$css: !0 },
        secondary: { color: "xi81zsa", $$css: !0 },
        tertiary: { color: "x12scifz", $$css: !0 },
        white: { color: "x14ctfv", $$css: !0 },
      },
      m = {
        bold: { fontWeight: "x1xlr1w8", $$css: !0 },
        medium: { fontWeight: "xk50ysn", $$css: !0 },
        normal: { fontWeight: "xo1l8bm", $$css: !0 },
        semibold: { fontWeight: "x1s688f", $$css: !0 },
      },
      n = {
        block: { display: "x1lliihq", $$css: !0 },
        "inline-block": { display: "x1rg5ohu", $$css: !0 },
      };
    b = i.forwardRef(a);
    function a(a, b) {
      a = babelHelpers["extends"]({}, a);
      var e = a.color,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.display;
      g = g === void 0 ? "inline" : g;
      var h = a.fbclid,
        q = a.href,
        r = a.lynxMode,
        s = a.role,
        t = a.target,
        u = a.weight,
        v = a.xstyle,
        w = babelHelpers.objectWithoutPropertiesLoose(a, [
          "color",
          "disabled",
          "display",
          "fbclid",
          "href",
          "lynxMode",
          "role",
          "target",
          "weight",
          "xstyle",
        ]),
        x = j(c("CometTextContext")),
        y = j(c("CometDangerouslySuppressInteractiveElementsContext")),
        z =
          t === "_blank" ||
          (t == null && q != null && q !== "#" && !c("isCometRouterUrl")(q));
      e = (e = e) != null ? e : x != null ? o(x.type, z) : "inherit";
      u = (u = u) != null ? u : x != null ? p(x.type, z) : "inherit";
      x = s == null && (q == null || q === "#") ? "button" : s;
      return y
        ? i.jsx(d("react-strict-dom").html.span, {
            ref: b,
            style: [
              e !== "inherit" && l[e],
              u !== "inherit" && m[u],
              f && k.disabled,
              g !== "inline" && n[g],
            ],
            children: a.children,
          })
        : i.jsx(
            c("BaseLink.react"),
            babelHelpers["extends"]({}, w, {
              disabled: f,
              display: "inline",
              fbclid: h,
              href: q,
              lynxMode: r,
              ref: b,
              role: x,
              target: z ? "_blank" : t,
              xstyle: [
                k.root,
                e !== "inherit" && l[e],
                u !== "inherit" && m[u],
                f && k.disabled,
                g !== "inline" && n[g],
                v,
              ],
            })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    function o(a, b) {
      switch (a) {
        case "headline3":
        case "headline4":
        case "body1":
        case "body2":
        case "body3":
        case "body4":
          return b ? "blueLink" : "primary";
        case "meta1":
        case "meta2":
        case "meta3":
        case "meta4":
          return b ? "blueLink" : "inherit";
        default:
          return "inherit";
      }
    }
    function p(a, b) {
      if (!b) {
        b = q(a);
        return c("CometTextTypography")[b].fontWeight;
      }
      return "inherit";
    }
    function q(a) {
      switch (a) {
        case "headline3":
          return "headlineEmphasized3";
        case "headline4":
          return "headlineEmphasized4";
        case "body1":
          return "bodyLink1";
        case "body2":
          return "bodyLink2";
        case "body3":
          return "bodyLink3";
        case "body4":
          return "bodyLink4";
        default:
          return a;
      }
    }
    g["default"] = e;
  },
  98
);

import React, {
  forwardRef,
  useContext,
  ReactNode,
  CSSProperties,
  JSXElementConstructor,
} from "react";
import BaseLink from "BaseLink.react";
import CometDangerouslySuppressInteractiveElementsContext from "CometDangerouslySuppressInteractiveElementsContext";
import CometTextContext from "CometTextContext";
import CometTextTypography from "CometTextTypography";
import isCometRouterUrl from "isCometRouterUrl";
import { Html } from "react-strict-dom";

interface CometLinkProps {
  children?: ReactNode;
  color?: string;
  disabled?: boolean;
  display?: string;
  fbclid?: string;
  href?: string;
  lynxMode?: string;
  role?: string;
  target?: string;
  weight?: string;
  xstyle?: CSSProperties;
}

const styles = {
  disabled: {
    color: "x1dntmbh",
    textDecorationLine: "x1ubmc1d xkrqix3",
    $$css: true,
  },
  root: {
    color: "x1heor9g",
    textDecorationLine: "x1sur9pj xkrqix3",
    $$css: true,
  },
};

const colors = {
  blueLink: { color: "x1fey0fg", $$css: true },
  disabled: { color: "x1dntmbh", $$css: true },
  highlight: { color: "x1qq9wsj", $$css: true },
  negative: { color: "x1a1m0xk", $$css: true },
  positive: { color: "x6u5lvz", $$css: true },
  primary: { color: "xzsf02u", $$css: true },
  secondary: { color: "xi81zsa", $$css: true },
  tertiary: { color: "x12scifz", $$css: true },
  white: { color: "x14ctfv", $$css: true },
};

const weights = {
  bold: { fontWeight: "x1xlr1w8", $$css: true },
  medium: { fontWeight: "xk50ysn", $$css: true },
  normal: { fontWeight: "xo1l8bm", $$css: true },
  semibold: { fontWeight: "x1s688f", $$css: true },
};

const displays = {
  block: { display: "x1lliihq", $$css: true },
  "inline-block": { display: "x1rg5ohu", $$css: true },
};

const CometLink = forwardRef<HTMLAnchorElement, CometLinkProps>(
  (props, ref) => {
    const {
      color,
      disabled = false,
      display = "inline",
      fbclid,
      href,
      lynxMode,
      role,
      target,
      weight,
      xstyle,
      ...rest
    } = props;

    const textContext = useContext(CometTextContext);
    const suppressInteractiveElementsContext = useContext(
      CometDangerouslySuppressInteractiveElementsContext
    );

    const isExternal =
      target === "_blank" ||
      (target == null &&
        href != null &&
        href !== "#" &&
        !isCometRouterUrl(href));

    const resolvedColor =
      color ??
      (textContext != null
        ? getColor(textContext.type, isExternal)
        : "inherit");

    const resolvedWeight =
      weight ??
      (textContext != null
        ? getWeight(textContext.type, isExternal)
        : "inherit");

    const resolvedRole =
      role == null && (href == null || href === "#") ? "button" : role;

    return suppressInteractiveElementsContext ? (
      <Html.span
        ref={ref as React.Ref<HTMLSpanElement>}
        style={[
          resolvedColor !== "inherit" && colors[resolvedColor],
          resolvedWeight !== "inherit" && weights[resolvedWeight],
          disabled && styles.disabled,
          display !== "inline" && displays[display],
        ]}
        {...rest}
      >
        {props.children}
      </Html.span>
    ) : (
      <BaseLink
        {...rest}
        disabled={disabled}
        display="inline"
        fbclid={fbclid}
        href={href}
        lynxMode={lynxMode}
        ref={ref}
        role={resolvedRole}
        target={isExternal ? "_blank" : target}
        xstyle={[
          styles.root,
          resolvedColor !== "inherit" && colors[resolvedColor],
          resolvedWeight !== "inherit" && weights[resolvedWeight],
          disabled && styles.disabled,
          display !== "inline" && displays[display],
          xstyle,
        ]}
      />
    );
  }
);

CometLink.displayName = "CometLink";

function getColor(type: string, isExternal: boolean): string {
  switch (type) {
    case "headline3":
    case "headline4":
    case "body1":
    case "body2":
    case "body3":
    case "body4":
      return isExternal ? "blueLink" : "primary";
    case "meta1":
    case "meta2":
    case "meta3":
    case "meta4":
      return isExternal ? "blueLink" : "inherit";
    default:
      return "inherit";
  }
}

function getWeight(type: string, isExternal: boolean): string {
  if (!isExternal) {
    const typographyType = getTypographyType(type);
    return CometTextTypography[typographyType].fontWeight;
  }
  return "inherit";
}

function getTypographyType(type: string): string {
  switch (type) {
    case "headline3":
      return "headlineEmphasized3";
    case "headline4":
      return "headlineEmphasized4";
    case "body1":
      return "bodyLink1";
    case "body2":
      return "bodyLink2";
    case "body3":
      return "bodyLink3";
    case "body4":
      return "bodyLink4";
    default:
      return type;
  }
}

export default CometLink;
