// __d("CometLoadingAnimation.react", ["cssVar", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
//   "use strict";
//   var i = d("react"),
//     j = 38,
//     k = 62,
//     l = 42,
//     m = 2,
//     n = 3,
//     o = 4,
//     p = j / 2,
//     q = k / 2,
//     r = l / 2,
//     s = p - 2,
//     t = q - 2,
//     u = r - 2,
//     v = {
//       animationCircleWrapper: {
//         animationDuration: "xeaay5l",
//         animationIterationCount: "xa4qsjk",
//         animationName: "xnjvcao",
//         animationTimingFunction: "x1esw782",
//         transformOrigin: "x1bndym7",
//         $$css: !0
//       },
//       animationPaused: {
//         animationPlayState: "xorstpt",  
//         $$css: !0
//       },
//       animationRoot: {
//         position: "x10l6tqk",
//         $$css: !0
//       },
//       animationRootSize36: {
//         start: "x1150agl",
//         top: "x1e0gzzx",
//         $$css: !0
//       },
//       animationRootSize40: {
//         start: "x1150agl",
//         top: "x1e0gzzx",
//         $$css: !0
//       },
//       animationRootSize60: {
//         start: "x1150agl",
//         top: "x1e0gzzx",
//         $$css: !0
//       },
//       animationUploadingCircle: {
//         animationDirection: "xeo85xg",
//         animationDuration: "x7s8090",
//         animationIterationCount: "xa4qsjk",
//         animationTimingFunction: "x1esw782",
//         transformOrigin: "x1bndym7",
//         $$css: !0
//       },
//       animationUploadingCircleSize36: {
//         animationDirection: "xeo85xg",
//         animationDuration: "xeaay5l",
//         animationIterationCount: "xa4qsjk",
//         animationName: "xq0anyh",
//         animationTimingFunction: "x1esw782",
//         strokeWidth: "xvlca1e",
//         $$css: !0
//       },
//       animationUploadingCircleSize40: {
//         animationDirection: "xeo85xg",
//         animationDuration: "xeaay5l",
//         animationIterationCount: "xa4qsjk",
//         animationName: "x62hu5v",
//         animationTimingFunction: "x1esw782",
//         strokeWidth: "xqjr0vm",
//         $$css: !0
//       },
//       animationUploadingCircleSize60: {
//         animationDirection: "xeo85xg",
//         animationDuration: "xeaay5l",
//         animationIterationCount: "xa4qsjk",
//         animationName: "xm4p48w",
//         animationTimingFunction: "x1esw782",
//         strokeWidth: "x17ld789",
//         $$css: !0
//       }
//     };

//   function a(a) {
//     var b = a.animationPaused;
//     b = b === void 0 ? !1 : b;
//     a = a.size;
//     var d, e, f;
//     switch (a) {
//       case 36:
//         d = j;
//         e = p;
//         f = s;
//         break;
//       case 40:
//         d = l;
//         e = r;
//         f = u;
//         break;
//       case 60:
//       default:
//         d = k;
//         e = q;
//         f = t;
//         break
//     }
//     return i.jsx("svg", {
//       className: c("stylex")(v.animationRoot, a === 36 && v.animationRootSize36, a === 60 && v.animationRootSize60, a === 40 && v.animationRootSize40),
//       height: d,
//       width: d,
//       children: i.jsx("g", {
//         className: c("stylex")(v.animationCircleWrapper, b && v.animationPaused),
//         children: i.jsx("circle", {
//           className: c("stylex")(v.animationUploadingCircle, a === 36 && v.animationUploadingCircleSize36, a === 40 && v.animationUploadingCircleSize40, a === 60 && v.animationUploadingCircleSize60, b && v.animationPaused),
//           cx: e,
//           cy: e,
//           fill: "none",
//           r: f,
//           stroke: "#1877F2",
//           strokeWidth: a === 36 ? m : a === 40 ? n : o
//         })
//       })
//     })
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   g["default"] = a
// }), 98);



import React from 'react';
import { cssVar, stylex } from 'your-module-imports'; // Replace 'your-module-imports' with the actual module imports


const styles = {
  animationCircleWrapper: {
    animationDuration: "xeaay5l",
    animationIterationCount: "xa4qsjk",
    animationName: "xnjvcao",
    animationTimingFunction: "x1esw782",
    transformOrigin: "x1bndym7",
    $$css: !0
  },
  animationPaused: {
    animationPlayState: "xorstpt",
    $$css: !0
  },
  animationRoot: {
    position: "x10l6tqk",
    $$css: !0
  },
  animationRootSize36: {
    start: "x1150agl",
    top: "x1e0gzzx",
    $$css: !0
  },
  animationRootSize40: {
    start: "x1150agl",
    top: "x1e0gzzx",
    $$css: !0
  },
  animationRootSize60: {
    start: "x1150agl",
    top: "x1e0gzzx",
    $$css: !0
  },
  animationUploadingCircle: {
    animationDirection: "xeo85xg",
    animationDuration: "x7s8090",
    animationIterationCount: "xa4qsjk",
    animationTimingFunction: "x1esw782",
    transformOrigin: "x1bndym7",
    $$css: !0
  },
  animationUploadingCircleSize36: {
    animationDirection: "xeo85xg",
    animationDuration: "xeaay5l",
    animationIterationCount: "xa4qsjk",
    animationName: "xq0anyh",
    animationTimingFunction: "x1esw782",
    strokeWidth: "xvlca1e",
    $$css: !0
  },
  animationUploadingCircleSize40: {
    animationDirection: "xeo85xg",
    animationDuration: "xeaay5l",
    animationIterationCount: "xa4qsjk",
    animationName: "x62hu5v",
    animationTimingFunction: "x1esw782",
    strokeWidth: "xqjr0vm",
    $$css: !0
  },
  animationUploadingCircleSize60: {
    animationDirection: "xeo85xg",
    animationDuration: "xeaay5l",
    animationIterationCount: "xa4qsjk",
    animationName: "xm4p48w",
    animationTimingFunction: "x1esw782",
    strokeWidth: "x17ld789",
    $$css: !0
  }
};

const CometLoadingAnimation = ({ animationPaused = false, size }) => {
  let height, width, cx, cy, r, strokeWidth;

  switch (size) {
    case 36:
      height = 38;
      width = 38;
      cx = 38 / 2;
      cy = 38 / 2;
      r = 36 / 2 - 2;
      strokeWidth = 2;
      break;
    case 40:
      height = 42;
      width = 42;
      cx = 42 / 2;
      cy = 42 / 2;
      r = 42 / 2 - 2;
      strokeWidth = 3;
      break;
    case 60:
    default:
      height = 62;
      width = 62;
      cx = 62 / 2;
      cy = 62 / 2;
      r = 62 / 2 - 2;
      strokeWidth = 4;
      break;
  }

  return (
    <svg
      className={stylex(
        styles.animationRoot,
        size === 36 && styles.animationRootSize36,
        size === 60 && styles.animationRootSize60,
        size === 40 && styles.animationRootSize40
      )}
      height={height}
      width={width}
    >
      <g
        className={stylex(styles.animationCircleWrapper, animationPaused && styles.animationPaused)}
      >
        <circle
          className={stylex(
            styles.animationUploadingCircle,
            size === 36 && styles.animationUploadingCircleSize36,
            size === 40 && styles.animationUploadingCircleSize40,
            size === 60 && styles.animationUploadingCircleSize60,
            animationPaused && animationPaused
          )}
          cx={cx}
          cy={cy}
          fill="none"
          r={r}
          stroke="#1877F2"
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
};

CometLoadingAnimation.displayName = `${CometLoadingAnimation.name} [from ${f.id}]`;

export default CometLoadingAnimation;
