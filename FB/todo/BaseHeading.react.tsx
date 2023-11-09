// __d("BaseHeading.react", ["BaseHeadingContext", "BaseTextContext", "react", "stylex"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j = i || (i = d("react"));
//     b = i;
//     var k = b.useContext
//       , l = b.useMemo
//       , m = {
//         root: {
//             color: "x1heor9g",
//             fontSize: "x1qlqyl8",
//             fontWeight: "x1pd3egz",
//             outline: "x1a2a7pz",
//             $$css: !0
//         }
//     };
//     function a(a, b) {
//         var e = a.children
//           , f = a.isPrimaryHeading
//           , g = f === void 0 ? !1 : f;
//         f = a.testid;
//         f = a.xstyle;
//         a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "isPrimaryHeading", "testid", "xstyle"]);
//         var i = k(c("BaseHeadingContext"))
//           , n = l(function() {
//             return g ? "h1" : "h" + Math.max(Math.min(i, 6), 2)
//         }, [g, i])
//           , o = d("BaseTextContext").useBaseTextContext();
//         o = (o == null ? void 0 : o.nested) === !0;
//         return j.jsx(n, babelHelpers["extends"]({}, a, {
//             className: (h || (h = c("stylex")))(m.root, f),
//             "data-testid": void 0,
//             dir: o ? void 0 : "auto",
//             ref: b,
//             children: e
//         }))
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = j.forwardRef(a);
//     g["default"] = e
// }
// ), 98);

import React, { forwardRef, useContext } from "react";
import { BaseHeadingContext } from "./BaseHeadingContext"; // Update the path accordingly
import { BaseTextContext } from "./BaseTextContext"; // Update the path accordingly
import { stylex } from "stylex"; // Update the path accordingly

type BaseHeadingProps = {
  children?: React.ReactNode;
  isPrimaryHeading?: boolean;
  testid?: string;
  xstyle?: any; // Adjust the type as needed
};

const styles = {
  root: {
    color: "x1heor9g",
    fontSize: "x1qlqyl8",
    fontWeight: "x1pd3egz",
    outline: "x1a2a7pz",
  },
};

const BaseHeading: React.ForwardRefRenderFunction<HTMLHeadingElement, BaseHeadingProps> = (
  { children, isPrimaryHeading = false, testid, xstyle, ...rest },
  ref
) => {
  const headingLevel = useContext(BaseHeadingContext);
  const tagName = React.useMemo(() => (isPrimaryHeading ? "h1" : `h${Math.max(Math.min(headingLevel, 6), 2)}`), [
    isPrimaryHeading,
    headingLevel,
  ]);

  const nested = BaseTextContext.useBaseTextContext()?.nested === true;

  return React.createElement(tagName, {
    ...rest,
    className: stylex(styles.root, xstyle),
    "data-testid": testid,
    dir: nested ? undefined : "auto",
    ref: ref,
    children: children,
  });
};

BaseHeading.displayName = "BaseHeading";

export default forwardRef(BaseHeading);
