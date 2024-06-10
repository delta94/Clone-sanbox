__d(
  "MessengerBlurpleLogoSvg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.cloneElement,
      k = b.useId,
      l = b.useMemo;
    function a(a) {
      var b = a.height;
      a = a.width;
      a = (a = a) != null ? a : "80";
      b = (b = b) != null ? b : "80";
      var c = k(),
        d = l(
          function () {
            return j(i.jsx("path", {}), {
              clipRule: "evenodd",
              d: "M40 .914C17.995.914.937 17.033.937 38.804c0 11.389 4.668 21.23 12.268 28.026a3.12 3.12 0 011.05 2.227l.212 6.95c.068 2.215 2.358 3.658 4.386 2.763l7.753-3.423a3.115 3.115 0 012.087-.153A42.602 42.602 0 0040 76.695c22.005 0 39.063-16.118 39.063-37.89C79.063 17.033 62.005.915 40 .915z",
              fill: "url(#" + (c + ")"),
              fillRule: "evenodd",
              suppressHydrationWarning: !0,
            });
          },
          [c]
        ),
        e = l(
          function () {
            return j(i.jsx("radialGradient", {}), {
              children: i.jsxs(i.Fragment, {
                children: [
                  i.jsx("stop", { stopColor: "#09F" }),
                  i.jsx("stop", { offset: "0.61", stopColor: "#A033FF" }),
                  i.jsx("stop", { offset: "0.935", stopColor: "#FF5280" }),
                  i.jsx("stop", { offset: "1", stopColor: "#FF7061" }),
                ],
              }),
              cx: "0",
              cy: "0",
              gradientTransform: "rotate(-57.092 80.25 24.628) scale(85.1246)",
              gradientUnits: "userSpaceOnUse",
              id: c,
              r: "1",
              suppressHydrationWarning: !0,
            });
          },
          [c]
        );
      return i.jsxs("svg", {
        fill: "none",
        height: b,
        viewBox: " 0 0 80 80",
        width: a,
        children: [
          d,
          i.jsx("path", {
            clipRule: "evenodd",
            d: "M16.543 49.886L28.018 31.68a5.86 5.86 0 018.472-1.563l9.127 6.844a2.343 2.343 0 002.823-.008L60.765 27.6c1.645-1.248 3.793.72 2.692 2.467L51.982 48.272a5.86 5.86 0 01-8.472 1.563l-9.127-6.845a2.344 2.344 0 00-2.823.01l-12.325 9.354c-1.646 1.248-3.793-.72-2.692-2.467z",
            fill: "#fff",
            fillRule: "evenodd",
          }),
          i.jsx("defs", { children: e }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { Fragment } from "react";
import { useId, useMemo } from "react";

type Props = {
  height?: string;
  width?: string;
};

const MessengerBlurpleLogoSvg: React.FC<Props> = ({
  height = "80",
  width = "80",
}) => {
  const id = useId();
  const gradient = useMemo(
    () => (
      <Fragment>
        <stop stopColor="#09F" />
        <stop offset="0.61" stopColor="#A033FF" />
        <stop offset="0.935" stopColor="#FF5280" />
        <stop offset="1" stopColor="#FF7061" />
      </Fragment>
    ),
    []
  );

  const svg = useMemo(
    () => (
      <svg fill="none" height={height} viewBox="0 0 80 80" width={width}>
        <path
          clipRule="evenodd"
          d="M40 .914C17.995.914.937 17.033.937 38.804c0 11.389 4.668 21.23 12.268 28.026a3.12 3.12 0 011.05 2.227l.212 6.95c.068 2.215 2.358 3.658 4.386 2.763l7.753-3.423a3.115 3.115 0 012.087-.153A42.602 42.602 0 0040 76.695c22.005 0 39.063-16.118 39.063-37.89C79.063 17.033 62.005.915 40 .915z"
          fill={`url(#${id})`}
          fillRule="evenodd"
          suppressHydrationWarning={true}
        />
        <path
          clipRule="evenodd"
          d="M16.543 49.886L28.018 31.68a5.86 5.86 0 018.472-1.563l9.127 6.844a2.343 2.343 0 002.823-.008L60.765 27.6c1.645-1.248 3.793.72 2.692 2.467L51.982 48.272a5.86 5.86 0 01-8.472 1.563l-9.127-6.845a2.344 2.344 0 00-2.823.01l-12.325 9.354c-1.646 1.248-3.793-.72-2.692-2.467z"
          fill="#fff"
          fillRule="evenodd"
        />
        <defs>
          <radialGradient
            children={gradient}
            cx="0"
            cy="0"
            gradientTransform="rotate(-57.092 80.25 24.628) scale(85.1246)"
            gradientUnits="userSpaceOnUse"
            id={id}
            r="1"
            suppressHydrationWarning={true}
          />
        </defs>
      </svg>
    ),
    [id, height, width, gradient]
  );

  return svg;
};

MessengerBlurpleLogoSvg.displayName = `${MessengerBlurpleLogoSvg.name} [from 98]`;

export default MessengerBlurpleLogoSvg;
