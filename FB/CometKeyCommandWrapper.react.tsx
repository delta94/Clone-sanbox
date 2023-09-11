// __d("CometKeyCommandWrapper.react", ["CometKeyCommandWidget", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");

//     function a(a) {
//         var b = a.children;
//         a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
//         return h.jsx(c("CometKeyCommandWidget").Wrapper, babelHelpers["extends"]({}, a, {
//             children: b
//         }))
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React from 'react';
import { Wrapper as CometKeyCommandWidgetWrapper } from 'CometKeyCommandWidget';

const CometKeyCommandWrapper = ({ children, ...props }) => {
  return (
    <CometKeyCommandWidgetWrapper {...props}>
      {children}
    </CometKeyCommandWidgetWrapper>
  );
};

CometKeyCommandWrapper.displayName = `${CometKeyCommandWrapper.name} [from ${f.id}]`;

export default CometKeyCommandWrapper;