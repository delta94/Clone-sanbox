__d("requireDeferredForDisplay", ["RDFDRequireDeferredReference"], (function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    return new(c("RDFDRequireDeferredReference"))(a)
  }
  g["default"] = a
}), 98);

import RDFDRequireDeferredReference from "RDFDRequireDeferredReference";

function requireDeferredForDisplay(moduleName: string): RDFDRequireDeferredReference {
  return new RDFDRequireDeferredReference(moduleName);
}

export default requireDeferredForDisplay;