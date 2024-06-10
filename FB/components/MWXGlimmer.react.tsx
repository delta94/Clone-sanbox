__d(
  "MWXGlimmer.react",
  ["cr:4067", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      return i.jsx(b("cr:4067"), babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import FDSGlimmer from "cr:4067";

interface MWXGlimmerProps {
  [key: string]: any;
}

const MWXGlimmer: React.FC<MWXGlimmerProps> = (props) => {
  return <FDSGlimmer {...props} />;
};

MWXGlimmer.displayName = "MWXGlimmer [from " + f.id + "]";

export default MWXGlimmer;
