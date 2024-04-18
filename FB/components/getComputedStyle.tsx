// __d("getComputedStyle", ["getDefaultViewForNode"], (function (a, b, c, d, e, f, g) {
//     "use strict";

//     function a(a, b) {
//         var d = c("getDefaultViewForNode")(a);
//         return d == null ? null : d.getComputedStyle(a, b)
//     }
//     g["default"] = a
// }), 98);

import getDefaultViewForNode from './getDefaultViewForNode';

const getComputedStyle = (node: HTMLElement, pseudoElement?: string | null): CSSStyleDeclaration | null => {
  const defaultView = getDefaultViewForNode(node);
  return defaultView ? defaultView.getComputedStyle(node, pseudoElement) : null;
};

export default getComputedStyle;
