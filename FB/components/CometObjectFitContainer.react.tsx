__d(
  "CometObjectFitContainer.react",
  [
    "cr:964538", // null
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react"),
      k = {
        inner: {
          height: "x5yr21d",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        innerWithAspectRatio: {
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          end: "xds687c",
          left: null,
          right: null,
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        outer: {
          height: "x5yr21d",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        outerWithAspectRatio: { height: "xt7dq6l", $$css: !0 },
      };
    function l(a) {
      var b = a.children,
        d = a.debugRole;
      d = a.innerInlineStyle;
      var e = a.innerXStyle,
        f = a.outerInlineStyle,
        g = a.outerRef,
        i = a.outerXStyle;
      a = a.testid;
      var l = c("isStringNullOrEmpty")(a) ? void 0 : a + "-outer";
      l = c("isStringNullOrEmpty")(a) ? void 0 : a + "-inner";
      return j.jsx(
        "div",
        babelHelpers["extends"](
          {},
          {},
          {
            className: (h || (h = c("stylex")))(k.outer, i),
            "data-testid": void 0,
            ref: g,
            style: f,
            children: j.jsx(
              "div",
              babelHelpers["extends"](
                {},
                {},
                {
                  className: h(k.inner, e),
                  "data-testid": void 0,
                  style: d,
                  children: b,
                }
              )
            ),
          }
        )
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    function a(a, b) {
      var d = a.children,
        e = a.contentAspectRatio,
        f = a.debugRole,
        g = a.objectFitMode;
      g = g === void 0 ? "CONTAINER_SIZE" : g;
      a = a.testid;
      a = 16 / 9;
      e = e != null && isFinite(e) && e > 0 ? e : a;
      if (g === "CONTAINER_WIDTH_BASED_ASPECT_RATIO") {
        a = isFinite(e) && e > 0 ? 100 / e : 100;
        e = { paddingBottom: a.toFixed(5) + "%" };
        return j.jsx(l, {
          children: d,
          debugRole: f,
          innerXStyle: k.innerWithAspectRatio,
          outerInlineStyle: e,
          outerRef: b,
          outerXStyle: k.outerWithAspectRatio,
          testid: void 0,
        });
      } else if (g === "CONTAINER_SIZE")
        return j.jsx(l, {
          children: d,
          debugRole: f,
          outerRef: b,
          testid: void 0,
        });
      else
        throw c("unrecoverableViolation")(
          "Unsupported objectFitMode " + g,
          "comet_ui"
        );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e;
  },
  98
);

import isStringNullOrEmpty from "isStringNullOrEmpty";
import React, { forwardRef } from "react";
import stylex from "stylex";
import unrecoverableViolation from "unrecoverableViolation";

const styles = {
  inner: {
    height: "x5yr21d",
    position: "x1n2onr6",
    width: "xh8yej3",
    $$css: true,
  },
  innerWithAspectRatio: {
    bottom: "x1ey2m1c",
    boxSizing: "x9f619",
    end: "xds687c",
    left: null,
    right: null,
    position: "x10l6tqk",
    start: "x17qophe",
    top: "x13vifvy",
    $$css: true,
  },
  outer: {
    height: "x5yr21d",
    position: "x1n2onr6",
    width: "xh8yej3",
    $$css: true,
  },
  outerWithAspectRatio: { height: "xt7dq6l", $$css: true },
};

type CometObjectFitContainerProps = {
  children: React.ReactNode;
  contentAspectRatio?: number;
  debugRole?: string;
  objectFitMode?: "CONTAINER_SIZE" | "CONTAINER_WIDTH_BASED_ASPECT_RATIO";
  testid?: string;
};

const InnerContainer: React.FC<{
  children: React.ReactNode;
  debugRole?: string;
  innerInlineStyle?: React.CSSProperties;
  innerXStyle?: any;
  outerInlineStyle?: React.CSSProperties;
  outerRef?: React.Ref<HTMLDivElement>;
  outerXStyle?: any;
  testid?: string;
}> = ({
  children,
  debugRole,
  innerInlineStyle,
  innerXStyle,
  outerInlineStyle,
  outerRef,
  outerXStyle,
  testid,
}) => {
  const outerTestId = isStringNullOrEmpty(testid)
    ? undefined
    : `${testid}-outer`;
  const innerTestId = isStringNullOrEmpty(testid)
    ? undefined
    : `${testid}-inner`;

  return (
    <div
      className={stylex(styles.outer, outerXStyle)}
      data-testid={outerTestId}
      ref={outerRef}
      style={outerInlineStyle}
    >
      <div
        className={stylex(styles.inner, innerXStyle)}
        data-testid={innerTestId}
        style={innerInlineStyle}
      >
        {children}
      </div>
    </div>
  );
};

InnerContainer.displayName = `InnerContainer [from ${__filename}]`;

const CometObjectFitContainer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CometObjectFitContainerProps
> = (
  {
    children,
    contentAspectRatio,
    debugRole,
    objectFitMode = "CONTAINER_SIZE",
    testid,
  },
  ref
) => {
  const defaultAspectRatio = 16 / 9;
  const aspectRatio =
    contentAspectRatio != null &&
    isFinite(contentAspectRatio) &&
    contentAspectRatio > 0
      ? contentAspectRatio
      : defaultAspectRatio;

  if (objectFitMode === "CONTAINER_WIDTH_BASED_ASPECT_RATIO") {
    const paddingBottom =
      isFinite(aspectRatio) && aspectRatio > 0 ? 100 / aspectRatio : 100;
    const outerInlineStyle = { paddingBottom: `${paddingBottom.toFixed(5)}%` };

    return (
      <InnerContainer
        children={children}
        debugRole={debugRole}
        innerXStyle={styles.innerWithAspectRatio}
        outerInlineStyle={outerInlineStyle}
        outerRef={ref}
        outerXStyle={styles.outerWithAspectRatio}
        testid={testid}
      />
    );
  } else if (objectFitMode === "CONTAINER_SIZE") {
    return (
      <InnerContainer
        children={children}
        debugRole={debugRole}
        outerRef={ref}
        testid={testid}
      />
    );
  } else {
    throw unrecoverableViolation(
      `Unsupported objectFitMode ${objectFitMode}`,
      "comet_ui"
    );
  }
};

CometObjectFitContainer.displayName = `CometObjectFitContainer [from ${__filename}]`;

export default forwardRef<HTMLDivElement, CometObjectFitContainerProps>(
  CometObjectFitContainer
);
