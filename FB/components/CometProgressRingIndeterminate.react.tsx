__d(
  "CometProgressRingIndeterminate.react",
  [
    "BaseLoadingStateElement.react",
    "CometImageFromIXValue.react",
    "CometProgressRingUtils",
    "react",
    "stylex",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react"),
      k = {
        foregroundCircle: {
          animationDuration: "x1c74tu6",
          animationFillMode: "x1u6ievf",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xuxiujg",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        foregroundCircle12: { animationName: "x1iqdq0d", $$css: !0 },
        foregroundCircle16: { animationName: "x1koaglw", $$css: !0 },
        foregroundCircle20: { animationName: "x16tkgvi", $$css: !0 },
        foregroundCircle24: { animationName: "xiepp7r", $$css: !0 },
        foregroundCircle32: { animationName: "x1pb3rhs", $$css: !0 },
        foregroundCircle48: { animationName: "x1w90wak", $$css: !0 },
        foregroundCircle60: { animationName: "x1jrcm85", $$css: !0 },
        foregroundCircle72: { animationName: "xnw30k", $$css: !0 },
        root: { display: "x78zum5", $$css: !0 },
      },
      l = 2,
      m = "always-enable-animations";
    function a(a) {
      var b = a["aria-label"],
        e = a["aria-labelledby"],
        f = a.color,
        g = a.isDecorative;
      g = g === void 0 ? !1 : g;
      var i = a.size,
        n = a.testid;
      n = d("CometProgressRingUtils").getRingColor(f);
      n = n.foregroundColor;
      var o = (i - l) * Math.PI,
        p = c("useCurrentDisplayMode")();
      p = p === "dark";
      p = d("CometProgressRingUtils").getRingGifUrl(
        f,
        i.toString(),
        p ? "dark" : "light"
      );
      return j.jsx(c("BaseLoadingStateElement.react"), {
        "aria-label": b,
        "aria-labelledby": e,
        isDecorative: g,
        testid: void 0,
        xstyle: [k.root, a.xstyle],
        children:
          f === "dark"
            ? j.jsx("svg", {
                className: [
                  m,
                  "x1c74tu6 xa4qsjk x1kfoseq x1bndym7 x1u6ievf x1wnkzza",
                ].join(" "),
                height: i,
                viewBox: "0 0 " + i + " " + i,
                width: i,
                children: j.jsx("circle", {
                  className: [
                    m,
                    (h || (h = c("stylex")))([
                      k.foregroundCircle,
                      i === 12 && k.foregroundCircle12,
                      i === 16 && k.foregroundCircle16,
                      i === 20 && k.foregroundCircle20,
                      i === 24 && k.foregroundCircle24,
                      i === 32 && k.foregroundCircle32,
                      i === 48 && k.foregroundCircle48,
                      i === 60 && k.foregroundCircle60,
                      i === 72 && k.foregroundCircle72,
                    ]),
                  ].join(" "),
                  cx: i / 2,
                  cy: i / 2,
                  fill: "none",
                  r: (i - l) / 2,
                  stroke: n,
                  strokeDasharray: o,
                  strokeWidth: l,
                }),
              })
            : j.jsx("div", {
                style: { height: i, width: i },
                children: j.jsx(c("CometImageFromIXValue.react"), {
                  source: p,
                  testid: void 0,
                }),
              }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import {
  BaseLoadingStateElement,
  CometImageFromIXValue,
  CometProgressRingUtils,
  useCurrentDisplayMode,
} from "<path_to_dependencies>";

type ProgressRingProps = {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  color: string;
  isDecorative?: boolean;
  size: number;
  testid?: string;
  xstyle?: any;
};

const ProgressRing: React.FC<ProgressRingProps> = ({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  color,
  isDecorative = false,
  size,
  testid,
  xstyle,
}) => {
  const foregroundColor =
    CometProgressRingUtils.getRingColor(color).foregroundColor;
  const circumference = (size - 2) * Math.PI;
  const currentDisplayMode = useCurrentDisplayMode();
  const isDarkMode = currentDisplayMode === "dark";
  const gifUrl = CometProgressRingUtils.getRingGifUrl(
    color,
    size.toString(),
    isDarkMode ? "dark" : "light"
  );

  return (
    <BaseLoadingStateElement
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      isDecorative={isDecorative}
      testid={testid}
      xstyle={[styles.root, xstyle]}
    >
      {color === "dark" ? (
        <svg
          className={[
            "always-enable-animations",
            "x1c74tu6",
            "xa4qsjk",
            "x1kfoseq",
            "x1bndym7",
            "x1u6ievf",
            "x1wnkzza",
          ].join(" ")}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          width={size}
        >
          <circle
            className={[
              "always-enable-animations",
              styles.foregroundCircle,
              size === 12 && styles.foregroundCircle12,
              size === 16 && styles.foregroundCircle16,
              size === 20 && styles.foregroundCircle20,
              size === 24 && styles.foregroundCircle24,
              size === 32 && styles.foregroundCircle32,
              size === 48 && styles.foregroundCircle48,
              size === 60 && styles.foregroundCircle60,
              size === 72 && styles.foregroundCircle72,
            ].join(" ")}
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={(size - 2) / 2}
            stroke={foregroundColor}
            strokeDasharray={circumference}
            strokeWidth={2}
          />
        </svg>
      ) : (
        <div style={{ height: size, width: size }}>
          <CometImageFromIXValue source={gifUrl} testid={testid} />
        </div>
      )}
    </BaseLoadingStateElement>
  );
};

ProgressRing.displayName = ProgressRing.name + " [from " + __d.id + "]";

export default ProgressRing;

const styles = {
  foregroundCircle: {
    animationDuration: "x1c74tu6",
    animationFillMode: "x1u6ievf",
    animationIterationCount: "xa4qsjk",
    animationTimingFunction: "xuxiujg",
    transformOrigin: "x1bndym7",
    $$css: true,
  },
  foregroundCircle12: { animationName: "x1iqdq0d", $$css: true },
  foregroundCircle16: { animationName: "x1koaglw", $$css: true },
  foregroundCircle20: { animationName: "x16tkgvi", $$css: true },
  foregroundCircle24: { animationName: "xiepp7r", $$css: true },
  foregroundCircle32: { animationName: "x1pb3rhs", $$css: true },
  foregroundCircle48: { animationName: "x1w90wak", $$css: true },
  foregroundCircle60: { animationName: "x1jrcm85", $$css: true },
  foregroundCircle72: { animationName: "xnw30k", $$css: true },
  root: { display: "x78zum5", $$css: true },
};
