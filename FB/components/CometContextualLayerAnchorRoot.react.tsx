__d(
  "CometContextualLayerAnchorRoot.react",
  ["BaseContextualLayerAnchorRoot.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");

    function a(a) {
      return i.jsx(
        c("BaseContextualLayerAnchorRoot.react"),
        babelHelpers["extends"]({}, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import BaseContextualLayerAnchorRoot from "BaseContextualLayerAnchorRoot.react";

interface CometContextualLayerAnchorRootProps {
  [key: string]: any;
}

const CometContextualLayerAnchorRoot: React.FC<
  CometContextualLayerAnchorRootProps
> = (props) => {
  return <BaseContextualLayerAnchorRoot {...props} />;
};

CometContextualLayerAnchorRoot.displayName =
  "CometContextualLayerAnchorRoot [from CometContextualLayerAnchorRoot.react]";

export default CometContextualLayerAnchorRoot;
