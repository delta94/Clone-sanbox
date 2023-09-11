// __d("CometRefineRef", [], (function(a, b, c, d, e, f) {
//   "use strict";
//   function a(a) {
//       return function(b) {
//           if (a == null)
//               return;
//           typeof a === "function" ? a(b) : typeof a === "object" && (a.current = b)
//       }
//   }
//   f["default"] = a
// }
// ), 66);

const CometRefineRef = (refCallback) => {
  return (element) => {
    if (refCallback == null) {
      return;
    }
    if (typeof refCallback === "function") {
      refCallback(element);
    } else if (typeof refCallback === "object") {
      refCallback.current = element;
    }
  };
};

export default CometRefineRef;