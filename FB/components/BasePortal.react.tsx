// __d("BasePortal.react", ["BaseDOMContainer.react", "BasePortalTargetContext", "BaseThemeProvider.react", "ExecutionEnvironment", "ReactDOMComet", "react", "stylex", "suspendOrThrowIfUsedInSSR", "useStable"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j, k, l = k || (k = d("react")),
//         m = k.useContext;

//     function a(a) {
//         var b = a.children,
//             e = a.hidden,
//             f = e === void 0 ? !1 : e;
//         e = a.target;
//         var g = a.xstyle;
//         a = m(c("BasePortalTargetContext"));
//         e = e || a;
//         var k = c("useStable")(function () {
//             return (h || (h = c("ExecutionEnvironment"))).canUseDOM ? document.createElement("div") : null
//         });
//         (i || (i = c("suspendOrThrowIfUsedInSSR")))("BasePortal: Portals are not currently supported by the server renderer.");
//         return e != null ? d("ReactDOMComet").createPortal(l.jsx(c("BaseThemeProvider.react"), {
//             children: function (a, d) {
//                 return l.jsxs("div", babelHelpers["extends"]({}, f && {
//                     hidden: !0
//                 }, {
//                     className: (j || (j = c("stylex")))(a, g) || void 0,
//                     style: d,
//                     children: [l.jsx(c("BasePortalTargetContext").Provider, {
//                         value: k,
//                         children: b
//                     }), l.jsx(c("BaseDOMContainer.react"), {
//                         node: k
//                     })]
//                 }))
//             }
//         }), e) : null
//     }
//     g["default"] = a
// }), 98);

import React, { useContext, FunctionComponent, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import BaseDOMContainer from './BaseDOMContainer.react'; // Assuming BaseDOMContainer is a component
import BasePortalTargetContext from './BasePortalTargetContext'; // Assuming BasePortalTargetContext is a context
import BaseThemeProvider from './BaseThemeProvider.react'; // Assuming BaseThemeProvider is a component
import stylex from './stylex'; // Assuming stylex is a utility function
import useStable from './useStable'; // Assuming useStable is a hook
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'; // Assuming ExecutionEnvironment is a utility

interface BasePortalProps {
  children: ReactNode;
  hidden?: boolean;
  target?: Element;
  xstyle?: any; // Replace 'any' with the actual type expected for 'xstyle'
}

const BasePortal: FunctionComponent<BasePortalProps> = ({ children, hidden = false, target, xstyle }) => {
  const targetContext = useContext(BasePortalTargetContext);
  const actualTarget = target || targetContext;
  const stableDiv = useStable(() => (canUseDOM ? document.createElement('div') : null));

  if (!canUseDOM) {
    throw new Error('BasePortal: Portals are not currently supported by the server renderer.');
  }

  return actualTarget
    ? ReactDOM.createPortal(
        <BaseThemeProvider>
          <div className={stylex(xstyle)} hidden={hidden}>
            <BasePortalTargetContext.Provider value={stableDiv}>
              {children}
            </BasePortalTargetContext.Provider>
            <BaseDOMContainer node={stableDiv} />
          </div>
        </BaseThemeProvider>,
        actualTarget
      )
    : null;
};

export default BasePortal;
