// __d("BaseDOMContainer.react", ["react", "useMergeRefs"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useLayoutEffect,
//         j = b.useRef;

//     function a(a, b) {
//         var d = a.node,
//             e = j(null);
//         i(function () {
//             var a = e.current;
//             if (d != null && a != null) {
//                 a.appendChild(d);
//                 return function () {
//                     a.removeChild(d)
//                 }
//             }
//         }, [d]);
//         a = c("useMergeRefs")(b, e);
//         return h.jsx("div", {
//             ref: a
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = h.memo(h.forwardRef(a));
//     g["default"] = e
// }), 98);

import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import useMergeRefs from 'useMergeRefs';

function BaseDOMContainer(props, ref) {
  const { node } = props;
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (node != null && container != null) {
      container.appendChild(node);
      return () => {
        container.removeChild(node);
      };
    }
  }, [node]);

  const mergedRef = useMergeRefs(ref, containerRef);

  return (
    <div ref={mergedRef} />
  );
}

BaseDOMContainer.displayName = `${BaseDOMContainer.name} [from ${f.id}]`;

const MemoizedBaseDOMContainer = React.memo(forwardRef(BaseDOMContainer));

export default MemoizedBaseDOMContainer;
