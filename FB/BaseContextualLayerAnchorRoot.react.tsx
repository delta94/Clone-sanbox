// __d("BaseContextualLayerAnchorRoot.react", ["BaseContextualLayerAnchorRootContext", "BaseDOMContainer.react", "ExecutionEnvironment", "react", "useStable", "useUnsafeRef_DEPRECATED"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");

//     function a(a) {
//         a = a.children;
//         var b = c("useStable")(function () {
//                 return c("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null
//             }),
//             d = c("useUnsafeRef_DEPRECATED")(b);
//         return h.jsxs(h.Fragment, {
//             children: [h.jsx(c("BaseContextualLayerAnchorRootContext").Provider, {
//                 value: d,
//                 children: a
//             }), h.jsx(c("BaseDOMContainer.react"), {
//                 node: b
//             })]
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { Fragment } from 'react';
import { BaseContextualLayerAnchorRootContext } from 'BaseContextualLayerAnchorRootContext';
import BaseDOMContainer from 'BaseDOMContainer.react';
import { ExecutionEnvironment } from 'ExecutionEnvironment';
import { useStable, useUnsafeRef_DEPRECATED } from 'react';

function BaseContextualLayerAnchorRoot({ children }) {
  const anchorRoot = useStable(() => {
    return ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
  });

  const anchorRootRef = useUnsafeRef_DEPRECATED(anchorRoot);

  return (
    <Fragment>
      <BaseContextualLayerAnchorRootContext.Provider value={anchorRootRef}>
        {children}
      </BaseContextualLayerAnchorRootContext.Provider>
      <BaseDOMContainer node={anchorRoot} />
    </Fragment>
  );
}

BaseContextualLayerAnchorRoot.displayName = `${BaseContextualLayerAnchorRoot.name} [from ${f.id}]`;

export default BaseContextualLayerAnchorRoot;
