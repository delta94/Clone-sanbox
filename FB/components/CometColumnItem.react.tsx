__d(
  "CometColumnItem.react",
  [
    "BaseView.react",
    "CometColumnContext",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react")),
      k = i.useContext,
      l = {
        divider: {
          borderTopColor: "x8cjs6t",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          ":first-child_display": "xh99ass",
          $$css: !0,
        },
        dividerMargin: {
          ":first-child:empty + *_marginTop": "xb939ph",
          $$css: !0,
        },
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        marginFirstChild: { ":first-child_marginTop": "x14l7nz5", $$css: !0 },
        marginLastChild: { ":last-child_marginBottom": "xzboxd6", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
      },
      m = {
        center: { alignItems: "x6s0dn4", $$css: !0 },
        end: { alignItems: "xuk3077", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
      },
      n = {
        4: {
          paddingStart: "x1e558r4",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "x150jy0e",
          $$css: !0,
        },
        8: {
          paddingStart: "xurb0ha",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "x1sxyh0",
          $$css: !0,
        },
        12: {
          paddingStart: "x1ye3gou",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "xn6708d",
          $$css: !0,
        },
        16: {
          paddingStart: "x1swvt13",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "x1pi30zi",
          $$css: !0,
        },
        20: {
          paddingStart: "x5ib6vp",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "xc73u3c",
          $$css: !0,
        },
      },
      o = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
        20: { paddingTop: "x1cnzs8", $$css: !0 },
        40: { paddingTop: "x13zrc24", $$css: !0 },
      },
      p = {
        4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: !0 },
        12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: !0 },
        16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: !0 },
        20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: !0 },
        40: { paddingTop: "x13zrc24", paddingBottom: "x1t1ogtf", $$css: !0 },
      },
      q = {
        4: { marginTop: "xr9ek0c", marginBottom: "xjpr12u", $$css: !0 },
        8: { marginTop: "x1gslohp", marginBottom: "x12nagc", $$css: !0 },
        12: { marginTop: "x1k70j0n", marginBottom: "xzueoph", $$css: !0 },
        16: { marginTop: "x1xmf6yo", marginBottom: "x1e56ztr", $$css: !0 },
        20: { marginTop: "x1anpbxc", marginBottom: "xyorhqc", $$css: !0 },
        24: { marginTop: "x14vqqas", marginBottom: "xod5an3", $$css: !0 },
        32: { marginTop: "xw7yly9", marginBottom: "x1yztbdb", $$css: !0 },
        40: { marginTop: "x1sy10c2", marginBottom: "xieb3on", $$css: !0 },
      },
      r = {
        bottom: { justifyContent: "x13a6bvl", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        "space-between": { justifyContent: "x1qughib", $$css: !0 },
      },
      s = {
        4: {
          marginStart: "xsgj6o6",
          marginLeft: null,
          marginRight: null,
          marginEnd: "xw3qccf",
          $$css: !0,
        },
        8: {
          marginStart: "x1i64zmx",
          marginLeft: null,
          marginRight: null,
          marginEnd: "x1emribx",
          $$css: !0,
        },
        12: {
          marginStart: "x16n37ib",
          marginLeft: null,
          marginRight: null,
          marginEnd: "xq8finb",
          $$css: !0,
        },
        16: {
          marginStart: "x1d52u69",
          marginLeft: null,
          marginRight: null,
          marginEnd: "xktsk01",
          $$css: !0,
        },
        20: {
          marginStart: "xmn8rco",
          marginLeft: null,
          marginRight: null,
          marginEnd: "x1h5jrl4",
          $$css: !0,
        },
      },
      t = j.forwardRef(a);
    function a(a, b) {
      var d, e, f, g;
      a = babelHelpers["extends"]({}, a);
      d = (d = k(c("CometColumnContext"))) != null ? d : {};
      var i = a.align;
      e = i === void 0 ? ((e = d.align) != null ? e : "stretch") : i;
      i = a.children;
      var u = a.expanding;
      u = u === void 0 ? !1 : u;
      var v = a.fallback,
        w = a.paddingHorizontal;
      f = w === void 0 ? ((f = d.paddingHorizontal) != null ? f : 0) : w;
      w = a.paddingTop;
      var x = a.paddingVertical;
      x = x === void 0 ? 0 : x;
      var y = a.placeholder,
        z = a.verticalAlign;
      z = z === void 0 ? "top" : z;
      var A = babelHelpers.objectWithoutPropertiesLoose(a, [
          "align",
          "children",
          "expanding",
          "fallback",
          "paddingHorizontal",
          "paddingTop",
          "paddingVertical",
          "placeholder",
          "verticalAlign",
        ]),
        B = (h || (h = c("stylex"))).compose(a.xstyle);
      g = j.jsxs(j.Fragment, {
        children: [
          d.hasDividers === !0 &&
            j.jsx(c("BaseView.react"), {
              role: "separator",
              xstyle: [
                l.divider,
                s[(g = d.paddingHorizontal) != null ? g : 0],
                d.spacing != null && l.dividerMargin,
              ],
            }),
          j.jsx(
            c("BaseView.react"),
            babelHelpers["extends"]({}, A, {
              ref: b,
              xstyle: [
                l.root,
                u && l.expanding,
                e !== "stretch" && m[e],
                z !== "top" && r[z],
                n[f],
                p[x],
                w != null && o[w],
                d.spacing != null && [
                  q[d.spacing],
                  B.marginBottom == null && l.marginLastChild,
                  B.marginTop == null && l.marginFirstChild,
                ],
                a.xstyle,
              ],
              children: j.jsx(c("CometColumnContext").Provider, {
                value: null,
                children: i,
              }),
            })
          ),
        ],
      });
      if (v !== void 0) {
        a.fallback;
        var C = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
        v === null
          ? (g = j.jsx(c("CometErrorBoundary.react"), { children: g }))
          : (g = j.jsx(c("CometErrorBoundary.react"), {
              fallback: function (a, c) {
                return j.jsx(
                  t,
                  babelHelpers["extends"]({}, C, {
                    ref: b,
                    children: typeof v === "function" ? v(a, c) : v,
                  })
                );
              },
              children: g,
            }));
      }
      if (y !== void 0) {
        a.placeholder;
        A = babelHelpers.objectWithoutPropertiesLoose(a, ["placeholder"]);
        g = j.jsx(c("CometPlaceholder.react"), {
          fallback:
            y != null
              ? j.jsx(
                  t,
                  babelHelpers["extends"]({}, A, { ref: b, children: y })
                )
              : null,
          children: g,
        });
      }
      return g;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = t;
    g["default"] = b;
  },
  98
);

import React, { useContext, forwardRef } from "react";
import BaseView from "BaseView.react";
import CometColumnContext from "CometColumnContext";
import CometErrorBoundary from "CometErrorBoundary.react";
import CometPlaceholder from "CometPlaceholder.react";
import { stylex } from "stylex";

const styles = {
  divider: {
    borderTopColor: "x8cjs6t",
    borderTopStyle: "x13fuv20",
    borderTopWidth: "x178xt8z",
    ":first-child_display": "xh99ass",
    $$css: true,
  },
  dividerMargin: {
    ":first-child:empty + *_marginTop": "xb939ph",
    $$css: true,
  },
  expanding: {
    flexBasis: "x1l7klhg",
    flexGrow: "x1iyjqo2",
    flexShrink: "xs83m0k",
    minHeight: "x2lwn1j",
    $$css: true,
  },
  marginFirstChild: { ":first-child_marginTop": "x14l7nz5", $$css: true },
  marginLastChild: { ":last-child_marginBottom": "xzboxd6", $$css: true },
  root: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    flexShrink: "x2lah0s",
    maxWidth: "x193iq5w",
    $$css: true,
  },
};

const alignStyles = {
  center: { alignItems: "x6s0dn4", $$css: true },
  end: { alignItems: "xuk3077", $$css: true },
  start: { alignItems: "x1cy8zhl", $$css: true },
};

const paddingHorizontalStyles = {
  4: { paddingStart: "x1e558r4", paddingEnd: "x150jy0e", $$css: true },
  8: { paddingStart: "xurb0ha", paddingEnd: "x1sxyh0", $$css: true },
  12: { paddingStart: "x1ye3gou", paddingEnd: "xn6708d", $$css: true },
  16: { paddingStart: "x1swvt13", paddingEnd: "x1pi30zi", $$css: true },
  20: { paddingStart: "x5ib6vp", paddingEnd: "xc73u3c", $$css: true },
};

const paddingTopStyles = {
  0: { paddingTop: "xexx8yu", $$css: true },
  4: { paddingTop: "x1iorvi4", $$css: true },
  8: { paddingTop: "x1y1aw1k", $$css: true },
  12: { paddingTop: "xz9dl7a", $$css: true },
  16: { paddingTop: "xyamay9", $$css: true },
  20: { paddingTop: "x1cnzs8", $$css: true },
  40: { paddingTop: "x13zrc24", $$css: true },
};

const paddingVerticalStyles = {
  4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: true },
  8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: true },
  12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: true },
  16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: true },
  20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: true },
  40: { paddingTop: "x13zrc24", paddingBottom: "x1t1ogtf", $$css: true },
};

const spacingStyles = {
  4: { marginTop: "xr9ek0c", marginBottom: "xjpr12u", $$css: true },
  8: { marginTop: "x1gslohp", marginBottom: "x12nagc", $$css: true },
  12: { marginTop: "x1k70j0n", marginBottom: "xzueoph", $$css: true },
  16: { marginTop: "x1xmf6yo", marginBottom: "x1e56ztr", $$css: true },
  20: { marginTop: "x1anpbxc", marginBottom: "xyorhqc", $$css: true },
  24: { marginTop: "x14vqqas", marginBottom: "xod5an3", $$css: true },
  32: { marginTop: "xw7yly9", marginBottom: "x1yztbdb", $$css: true },
  40: { marginTop: "x1sy10c2", marginBottom: "xieb3on", $$css: true },
};

const justifyContentStyles = {
  bottom: { justifyContent: "x13a6bvl", $$css: true },
  center: { justifyContent: "xl56j7k", $$css: true },
  "space-between": { justifyContent: "x1qughib", $$css: true },
};

const marginHorizontalStyles = {
  4: { marginStart: "xsgj6o6", marginEnd: "xw3qccf", $$css: true },
  8: { marginStart: "x1i64zmx", marginEnd: "x1emribx", $$css: true },
  12: { marginStart: "x16n37ib", marginEnd: "xq8finb", $$css: true },
  16: { marginStart: "x1d52u69", marginEnd: "xktsk01", $$css: true },
  20: { marginStart: "xmn8rco", marginEnd: "x1h5jrl4", $$css: true },
};

interface CometColumnItemProps {
  align?: "start" | "center" | "end" | "stretch";
  children: React.ReactNode;
  expanding?: boolean;
  fallback?:
    | React.ReactNode
    | ((error: Error, info: { componentStack: string }) => React.ReactNode);
  paddingHorizontal?: 0 | 4 | 8 | 12 | 16 | 20;
  paddingTop?: 0 | 4 | 8 | 12 | 16 | 20 | 40;
  paddingVertical?: 4 | 8 | 12 | 16 | 20 | 40;
  placeholder?: React.ReactNode;
  verticalAlign?: "top" | "bottom" | "center" | "space-between";
  xstyle?: any;
  [key: string]: any;
}

const CometColumnItem = forwardRef<HTMLDivElement, CometColumnItemProps>(
  (
    {
      align,
      children,
      expanding = false,
      fallback,
      paddingHorizontal,
      paddingTop,
      paddingVertical = 0,
      placeholder,
      verticalAlign = "top",
      xstyle,
      ...rest
    },
    ref
  ) => {
    const context = useContext(CometColumnContext) ?? {};
    const combinedAlign = align ?? context.align ?? "stretch";
    const combinedPaddingHorizontal =
      paddingHorizontal ?? context.paddingHorizontal ?? 0;

    let content = (
      <>
        {context.hasDividers && (
          <BaseView
            role="separator"
            xstyle={[
              styles.divider,
              marginHorizontalStyles[context.paddingHorizontal ?? 0],
              context.spacing != null && styles.dividerMargin,
            ]}
          />
        )}
        <BaseView
          {...rest}
          ref={ref}
          xstyle={[
            styles.root,
            expanding && styles.expanding,
            combinedAlign !== "stretch" && alignStyles[combinedAlign],
            verticalAlign !== "top" && justifyContentStyles[verticalAlign],
            paddingHorizontalStyles[combinedPaddingHorizontal],
            paddingVerticalStyles[paddingVertical],
            paddingTop != null && paddingTopStyles[paddingTop],
            context.spacing != null && [
              spacingStyles[context.spacing],
              xstyle?.marginBottom == null && styles.marginLastChild,
              xstyle?.marginTop == null && styles.marginFirstChild,
            ],
            xstyle,
          ]}
        >
          <CometColumnContext.Provider value={null}>
            {children}
          </CometColumnContext.Provider>
        </BaseView>
      </>
    );

    if (fallback !== undefined) {
      content =
        fallback === null ? (
          <CometErrorBoundary>{content}</CometErrorBoundary>
        ) : (
          <CometErrorBoundary
            fallback={(error, info) => (
              <CometColumnItem
                {...rest}
                ref={ref}
                children={
                  typeof fallback === "function"
                    ? fallback(error, info)
                    : fallback
                }
              />
            )}
          >
            {content}
          </CometErrorBoundary>
        );
    }

    if (placeholder !== undefined) {
      content = (
        <CometPlaceholder
          fallback={
            placeholder != null ? (
              <CometColumnItem {...rest} ref={ref} children={placeholder} />
            ) : null
          }
        >
          {content}
        </CometPlaceholder>
      );
    }

    return content;
  }
);

CometColumnItem.displayName = "CometColumnItem [from CometColumnItem.react]";

export default CometColumnItem;
