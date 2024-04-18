// __d("BaseTooltipContainer.react", ["react", "stylex"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j = i || d("react"),
//         k = {
//             container: {
//                 backgroundColor: "xj5tmjb",
//                 borderTopStartRadius: "x1r9drvm",
//                 borderTopEndRadius: "x16aqbuh",
//                 borderBottomEndRadius: "x9rzwcf",
//                 borderBottomStartRadius: "xjkqk3g",
//                 boxShadow: "xms15q0",
//                 display: "x1lliihq",
//                 filter: "xo8ld3r",
//                 marginBottom: "xjpr12u",
//                 marginTop: "xr9ek0c",
//                 maxWidth: "x86nfjv",
//                 opacity: "xg01cxk",
//                 paddingStart: "x1ye3gou",
//                 paddingLeft: null,
//                 paddingRight: null,
//                 paddingEnd: "xn6708d",
//                 paddingTop: "xz9dl7a",
//                 paddingBottom: "xsag5q8",
//                 position: "x1n2onr6",
//                 transitionDuration: "x1ebt8du",
//                 transitionProperty: "x19991ni",
//                 transitionTimingFunction: "x1dhq9h",
//                 $$css: !0
//             },
//             containerVisible: {
//                 opacity: "x1hc1fzr",
//                 transitionDuration: "xhb22t3",
//                 transitionTimingFunction: "xls3em1",
//                 $$css: !0
//             }
//         };
//     b = j.forwardRef(a);

//     function a(a, b) {
//         var d = a.children,
//             e = a.id,
//             f = a.role;
//         f = f === void 0 ? "tooltip" : f;
//         var g = a.shouldFadeIn;
//         g = g === void 0 ? !1 : g;
//         a = a.xstyle;
//         return j.jsx("div", {
//             className: (h || (h = c("stylex")))(k.container, a, g && k.containerVisible),
//             "data-testid": void 0,
//             id: e,
//             ref: b,
//             role: f,
//             children: d
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = b;
//     g["default"] = e
// }), 98);



import React, { forwardRef, CSSProperties } from 'react';
import stylex from 'stylex';

interface BaseTooltipContainerProps {
  children: React.ReactNode;
  id?: string;
  role?: string;
  shouldFadeIn?: boolean;
  xstyle?: CSSProperties;
}

const styles = {
  container: {
    backgroundColor: "xj5tmjb",
    borderTopStartRadius: "x1r9drvm",
    borderTopEndRadius: "x16aqbuh",
    borderBottomEndRadius: "x9rzwcf",
    borderBottomStartRadius: "xjkqk3g",
    boxShadow: "xms15q0",
    display: "x1lliihq",
    filter: "xo8ld3r",
    marginBottom: "xjpr12u",
    marginTop: "xr9ek0c",
    maxWidth: "x86nfjv",
    opacity: "xg01cxk",
    paddingStart: "x1ye3gou",
    paddingLeft: null,
    paddingRight: null,
    paddingEnd: "xn6708d",
    paddingTop: "xz9dl7a",
    paddingBottom: "xsag5q8",
    position: "x1n2onr6",
    transitionDuration: "x1ebt8du",
    transitionProperty: "x19991ni",
    transitionTimingFunction: "x1dhq9h",
    $$css: true
  },
  containerVisible: {
    opacity: "x1hc1fzr",
    transitionDuration: "xhb22t3",
    transitionTimingFunction: "xls3em1",
    $$css: true
  }
};

const BaseTooltipContainer: React.FC<BaseTooltipContainerProps> = forwardRef((props, ref) => {
  const { children, id, role = "tooltip", shouldFadeIn = false, xstyle } = props;

  return (
    <div
      className={stylex(styles.container, xstyle, shouldFadeIn && styles.containerVisible)}
      data-testid={undefined}
      id={id}
      ref={ref as any}
      role={role}
    >
      {children}
    </div>
  );
});

BaseTooltipContainer.displayName = `${BaseTooltipContainer.name} [from someModule]`;

export default BaseTooltipContainer;
