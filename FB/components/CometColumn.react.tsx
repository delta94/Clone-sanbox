__d(
  "CometColumn.react",
  ["BaseView.react", "CometColumnContext", "CometColumnItem.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useContext,
      k = b.useMemo,
      l = {
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        inner: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        root: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
      },
      m = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
        20: { paddingTop: "x1cnzs8", $$css: !0 },
      },
      n = {
        4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: !0 },
        12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: !0 },
        16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: !0 },
        20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: !0 },
      },
      o = {
        bottom: { justifyContent: "x13a6bvl", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        "space-between": { justifyContent: "x1qughib", $$css: !0 },
      };
    e = i.forwardRef(a);
    function a(a, b) {
      var d = a.align,
        e = d === void 0 ? null : d;
      d = a.children;
      var f = a.expanding;
      f = f === void 0 ? !1 : f;
      var g = a.hasDividers,
        h = g === void 0 ? !1 : g;
      g = a.paddingHorizontal;
      var p = g === void 0 ? null : g;
      g = a.paddingTop;
      var q = a.paddingVertical;
      q = q === void 0 ? 0 : q;
      var r = a.spacing,
        s = r === void 0 ? null : r;
      r = a.verticalAlign;
      r = r === void 0 ? "top" : r;
      var t = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "align",
        "children",
        "expanding",
        "hasDividers",
        "paddingHorizontal",
        "paddingTop",
        "paddingVertical",
        "spacing",
        "verticalAlign",
        "xstyle",
      ]);
      var u = j(c("CometColumnContext")),
        v = k(
          function () {
            return {
              align: e,
              hasDividers: h,
              paddingHorizontal: p,
              spacing: s,
            };
          },
          [e, h, p, s]
        );
      a = i.jsx(
        c("BaseView.react"),
        babelHelpers["extends"]({}, a, {
          ref: b,
          xstyle: [l.root, f === !0 && l.expanding, n[q], g != null && m[g], t],
          children: i.jsx(c("BaseView.react"), {
            xstyle: [l.inner, r !== "top" && o[r]],
            children: i.jsx(c("CometColumnContext").Provider, {
              value: v,
              children: d,
            }),
          }),
        })
      );
      if (u != null) {
        return i.jsx(c("CometColumnItem.react"), {
          expanding: (b = f) != null ? b : void 0,
          children: a,
        });
      }
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = e;
    g["default"] = d;
  },
  98
);

import React, { forwardRef, useContext, useMemo } from "react";
import BaseView from "BaseView.react";
import { CometColumnContext } from "CometColumnContext";
import CometColumnItem from "CometColumnItem.react";

const styles = {
  expanding: {
    flexBasis: "x1l7klhg",
    flexGrow: "x1iyjqo2",
    flexShrink: "xs83m0k",
    minHeight: "x2lwn1j",
    $$css: true,
  },
  inner: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    flexGrow: "x1iyjqo2",
    minHeight: "x2lwn1j",
    $$css: true,
  },
  root: {
    boxSizing: "x9f619",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    flexShrink: "x2lah0s",
    maxWidth: "x193iq5w",
    $$css: true,
  },
};

const paddingTopStyles = {
  0: { paddingTop: "xexx8yu", $$css: true },
  4: { paddingTop: "x1iorvi4", $$css: true },
  8: { paddingTop: "x1y1aw1k", $$css: true },
  12: { paddingTop: "xz9dl7a", $$css: true },
  16: { paddingTop: "xyamay9", $$css: true },
  20: { paddingTop: "x1cnzs8", $$css: true },
};

const paddingVerticalStyles = {
  4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: true },
  8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: true },
  12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: true },
  16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: true },
  20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: true },
};

const verticalAlignStyles = {
  bottom: { justifyContent: "x13a6bvl", $$css: true },
  center: { justifyContent: "xl56j7k", $$css: true },
  "space-between": { justifyContent: "x1qughib", $$css: true },
};

interface CometColumnProps {
  align?: string | null;
  children: React.ReactNode;
  expanding?: boolean;
  hasDividers?: boolean;
  paddingHorizontal?: number | null;
  paddingTop?: number;
  paddingVertical?: number;
  spacing?: number | null;
  verticalAlign?: "top" | "bottom" | "center" | "space-between";
  xstyle?: any;
  [key: string]: any;
}

const CometColumn = forwardRef<HTMLDivElement, CometColumnProps>(
  (
    {
      align = null,
      children,
      expanding = false,
      hasDividers = false,
      paddingHorizontal = null,
      paddingTop,
      paddingVertical = 0,
      spacing = null,
      verticalAlign = "top",
      xstyle,
      ...rest
    },
    ref
  ) => {
    const context = useContext(CometColumnContext);
    const value = useMemo(
      () => ({
        align,
        hasDividers,
        paddingHorizontal,
        spacing,
      }),
      [align, hasDividers, paddingHorizontal, spacing]
    );

    const columnContent = (
      <BaseView
        {...rest}
        ref={ref}
        xstyle={[
          styles.root,
          expanding && styles.expanding,
          paddingVerticalStyles[paddingVertical],
          paddingTop != null && paddingTopStyles[paddingTop],
          xstyle,
        ]}
      >
        <BaseView
          xstyle={[
            styles.inner,
            verticalAlign !== "top" && verticalAlignStyles[verticalAlign],
          ]}
        >
          <CometColumnContext.Provider value={value}>
            {children}
          </CometColumnContext.Provider>
        </BaseView>
      </BaseView>
    );

    if (context != null) {
      return (
        <CometColumnItem expanding={expanding}>{columnContent}</CometColumnItem>
      );
    }

    return columnContent;
  }
);

CometColumn.displayName = "CometColumn [from CometColumn.react]";

export default CometColumn;
