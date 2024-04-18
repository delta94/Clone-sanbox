// __d("getDefaultViewForNode", [], (function (a, b, c, d, e, f) {
//     "use strict";

//     function a(a) {
//         a = a === document ? document : a.ownerDocument;
//         return a.defaultView
//     }
//     f["default"] = a
// }), 66);

const getDefaultViewForNode = (node: Document | HTMLElement): Window | null => {
    const ownerDocument = node === document ? document : (node as HTMLElement).ownerDocument;
    return ownerDocument?.defaultView || null;
};
  
export default getDefaultViewForNode;
  