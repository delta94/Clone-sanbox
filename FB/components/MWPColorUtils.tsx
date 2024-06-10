__d(
  "MWPColorUtils",
  ["I64", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = function (a) {
        return (
          "#" +
          a
            .map(function (a) {
              return a.toString(16).padStart(2, "0");
            })
            .join("")
        );
      };
    function j(a) {
      a = (h || (h = d("I64"))).to_int32(a);
      var b = (a & 16711680) >>> 16,
        c = (a & 65280) >>> 8;
      a = a & 255;
      return [b, c, a];
    }
    function k(a) {
      var b = a[0],
        c = a[1];
      a = a[2];
      return (h || (h = d("I64"))).of_int32((b << 16) + (c << 8) + a);
    }
    function l(a, b, c) {
      return [
        Math.round(a[0] * c + b[0] * (1 - c)),
        Math.round(a[1] * c + b[1] * (1 - c)),
        Math.round(a[2] * c + b[2] * (1 - c)),
      ];
    }
    function a(a, b, c) {
      a = j(a);
      b = j(b);
      return i(l(a, b, c));
    }
    function b(a, b, c) {
      a = j(a);
      b = j(b);
      a = l(a, b, c);
      return k(a);
    }
    function m(a) {
      return i(j(a));
    }
    function e(a, b) {
      var c = j(a),
        d = c[0],
        e = c[1];
      c = c[2];
      return b != null
        ? "rgba(" + d + ", " + e + ", " + c + ", " + b + ")"
        : m(a);
    }
    function f(a, b) {
      a = []
        .concat(a)
        .sort(function (a, b) {
          return (
            ((h || (h = d("I64"))).to_int32(a.gradientIndex) -
              h.to_int32(b.gradientIndex)) |
            0
          );
        })
        .map(function (a) {
          return m(a.color);
        });
      var e = a.length;
      if (e !== 1) {
        if (e !== 0) {
          e = b != null;
          var f = [];
          b != null &&
            f.push(
              a[0] +
                " calc(100vh - " +
                String(b.totalHeight) +
                "px + " +
                String(b.headerHeight) +
                "px)"
            );
          for (var g = e ? 1 : 0, e = (a.length - (e ? 2 : 1)) | 0; g <= e; ++g)
            f.push(a[g]);
          b != null &&
            (f.push(
              a[(a.length - 1) | 0] +
                " calc(100% - " +
                String(b.footerHeight) +
                "px)"
            ),
            f.push(a[(a.length - 1) | 0]));
          g = f.join(", ");
          return "linear-gradient(" + g + ")";
        }
        c("recoverableViolation")(
          "Not enough colors for a gradient",
          "messenger_comet"
        );
        return "";
      }
      c("recoverableViolation")(
        "Not enough colors for a gradient",
        "messenger_comet"
      );
      return "";
    }
    g.i64toRgb = j;
    g.combineColors = a;
    g.combineColorsAsI64 = b;
    g.int64ToHex = m;
    g.int64ToRGBA = e;
    g.gradient = f;
  },
  98
);

import { I64 } from "I64";
import recoverableViolation from "recoverableViolation";

type RGB = [number, number, number];

const intArrayToHex = (arr: number[]): string => {
  return "#" + arr.map((num) => num.toString(16).padStart(2, "0")).join("");
};

const i64toRgb = (color: any): RGB => {
  const int32Color = I64.to_int32(color);
  const r = (int32Color & 16711680) >>> 16;
  const g = (int32Color & 65280) >>> 8;
  const b = int32Color & 255;
  return [r, g, b];
};

const rgbToI64 = (rgb: RGB): any => {
  const [r, g, b] = rgb;
  return I64.of_int32((r << 16) + (g << 8) + b);
};

const blendColors = (color1: RGB, color2: RGB, ratio: number): RGB => {
  return [
    Math.round(color1[0] * ratio + color2[0] * (1 - ratio)),
    Math.round(color1[1] * ratio + color2[1] * (1 - ratio)),
    Math.round(color1[2] * ratio + color2[2] * (1 - ratio)),
  ];
};

const combineColors = (color1: any, color2: any, ratio: number): string => {
  const rgb1 = i64toRgb(color1);
  const rgb2 = i64toRgb(color2);
  return intArrayToHex(blendColors(rgb1, rgb2, ratio));
};

const combineColorsAsI64 = (color1: any, color2: any, ratio: number): any => {
  const rgb1 = i64toRgb(color1);
  const rgb2 = i64toRgb(color2);
  return rgbToI64(blendColors(rgb1, rgb2, ratio));
};

const int64ToHex = (color: any): string => {
  return intArrayToHex(i64toRgb(color));
};

const int64ToRGBA = (color: any, alpha?: number): string => {
  const [r, g, b] = i64toRgb(color);
  return alpha != null ? `rgba(${r}, ${g}, ${b}, ${alpha})` : int64ToHex(color);
};

interface GradientParams {
  totalHeight: number;
  headerHeight: number;
  footerHeight: number;
}

const gradient = (colors: any[], params?: GradientParams): string => {
  const sortedColors = colors
    .slice()
    .sort(
      (a, b) => I64.to_int32(a.gradientIndex) - I64.to_int32(b.gradientIndex)
    )
    .map((color) => int64ToHex(color.color));

  const colorCount = sortedColors.length;
  if (colorCount > 1) {
    const gradientParts: string[] = [];
    if (params) {
      gradientParts.push(
        `${sortedColors[0]} calc(100vh - ${params.totalHeight}px + ${params.headerHeight}px)`
      );
    }

    for (let i = params ? 1 : 0; i <= colorCount - (params ? 2 : 1); i++) {
      gradientParts.push(sortedColors[i]);
    }

    if (params) {
      gradientParts.push(
        `${sortedColors[colorCount - 1]} calc(100% - ${params.footerHeight}px)`
      );
      gradientParts.push(sortedColors[colorCount - 1]);
    }

    return `linear-gradient(${gradientParts.join(", ")})`;
  }

  recoverableViolation("Not enough colors for a gradient", "messenger_comet");

  return "";
};

export {
  i64toRgb,
  combineColors,
  combineColorsAsI64,
  int64ToHex,
  int64ToRGBA,
  gradient,
};
