// __d("BaseContextualLayerDefaultContainer.react", ["LegacyHidden", "react", "stylex", "testID"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j = i || d("react");

//     function a(a, b) {
//         return j.jsx(c("LegacyHidden"), {
//             htmlAttributes: babelHelpers["extends"]({}, c("testID")(a.testid), {
//                 className: (h || (h = c("stylex")))(a.xstyle),
//                 onClick: a.stopClickPropagation === !0 ? function (a) {
//                     return a.stopPropagation()
//                 } : void 0
//             }),
//             mode: a.hidden ? "hidden" : "visible",
//             ref: b,
//             children: a.children
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     b = j.forwardRef(a);
//     g["default"] = b
// }), 98);


import React, { forwardRef, HTMLAttributes } from 'react';
import LegacyHidden from './LegacyHidden'; // Assuming LegacyHidden is a component
import stylex from './stylex'; // Assuming stylex is a utility function
import testID from './testID'; // Assuming testID is a utility function

interface BaseContextualLayerDefaultContainerProps extends HTMLAttributes<HTMLDivElement> {
  hidden?: boolean;
  stopClickPropagation?: boolean;
  testid?: string;
  xstyle?: any; // Replace 'any' with the actual type expected for 'xstyle'
}

const BaseContextualLayerDefaultContainer = forwardRef<HTMLDivElement, BaseContextualLayerDefaultContainerProps>(
  ({ hidden, stopClickPropagation, testid, xstyle, ...props }, ref) => (
    <LegacyHidden
      htmlAttributes={{
        ...testID(testid),
        className: stylex(xstyle),
        onClick: stopClickPropagation ? (event) => event.stopPropagation() : undefined,
        ...props
      }}
      mode={hidden ? 'hidden' : 'visible'}
      ref={ref}
    />
  )
);

BaseContextualLayerDefaultContainer.displayName = 'BaseContextualLayerDefaultContainer';

export default BaseContextualLayerDefaultContainer;
