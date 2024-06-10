__d(
  "CometColumnContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);

import React from "react";

const CometColumnContext = React.createContext<{
  align?: string | null;
  hasDividers?: boolean;
  paddingHorizontal?: number | null;
  spacing?: number | null;
} | null>(null);

export default CometColumnContext;
