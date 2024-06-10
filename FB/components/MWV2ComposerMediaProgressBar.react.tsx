__d(
  "MWV2ComposerMediaProgressBar.react",
  ["MWPColorUtils", "react", "useMWPThreadTheme"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.height;
      a = a.mediaStaging;
      var e = c("useMWPThreadTheme")();
      e = e.threadTheme;
      e = a.hasError
        ? "var(--negative)"
        : d("MWPColorUtils").int64ToHex(e.fallbackColor);
      var f = Math.ceil(a.progress * 100),
        g = (b / 2).toString();
      g = "M 0," + g + " L 100," + g;
      return a.progress === 1
        ? null
        : i.jsxs("svg", {
            "aria-hidden": !0,
            className: "x1ey2m1c x10l6tqk x17qophe xh8yej3",
            preserveAspectRatio: "none",
            style: { height: b.toString() },
            viewBox: "0 0 100 " + b.toString(),
            children: [
              i.jsx("path", {
                d: g,
                stroke: "rgba(0,0,0,.5)",
                strokeLinecap: "round",
                strokeWidth: b.toString(),
              }),
              i.jsx("path", {
                d: g,
                stroke: e,
                strokeLinecap: "round",
                strokeWidth: (f === 0 ? 0 : b).toString(),
                style: {
                  strokeDasharray: "100",
                  strokeDashoffset: ((100 - f) | 0).toString(),
                  transition: "stroke-dashoffset .5s, stroke .5s",
                },
              }),
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import { int64ToHex } from "MWPColorUtils";
import useMWPThreadTheme from "useMWPThreadTheme";

interface MediaStaging {
  hasError: boolean;
  progress: number;
}

interface MWV2ComposerMediaProgressBarProps {
  height: number;
  mediaStaging: MediaStaging;
}

const MWV2ComposerMediaProgressBar: React.FC<
  MWV2ComposerMediaProgressBarProps
> = ({ height, mediaStaging }) => {
  const { threadTheme } = useMWPThreadTheme();
  const color = mediaStaging.hasError
    ? "var(--negative)"
    : int64ToHex(threadTheme.fallbackColor);
  const progress = Math.ceil(mediaStaging.progress * 100);
  const halfHeight = (height / 2).toString();
  const pathData = `M 0,${halfHeight} L 100,${halfHeight}`;

  if (mediaStaging.progress === 1) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      className="x1ey2m1c x10l6tqk x17qophe xh8yej3"
      preserveAspectRatio="none"
      style={{ height: height.toString() }}
      viewBox={`0 0 100 ${height.toString()}`}
    >
      <path
        d={pathData}
        stroke="rgba(0,0,0,.5)"
        strokeLinecap="round"
        strokeWidth={height.toString()}
      />
      <path
        d={pathData}
        stroke={color}
        strokeLinecap="round"
        strokeWidth={progress === 0 ? "0" : height.toString()}
        style={{
          strokeDasharray: "100",
          strokeDashoffset: ((100 - progress) | 0).toString(),
          transition: "stroke-dashoffset .5s, stroke .5s",
        }}
      />
    </svg>
  );
};

MWV2ComposerMediaProgressBar.displayName =
  "MWV2ComposerMediaProgressBar [from " + f.id + "]";

export default MWV2ComposerMediaProgressBar;
