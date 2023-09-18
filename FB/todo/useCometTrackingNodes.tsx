__d("useCometTrackingNodes", ["CometTrackingNodesContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
        return h(c("CometTrackingNodesContext"))
    }
    g["default"] = a
}
), 98);

import { useContext } from 'react';
import { CometTrackingNodesContext } from 'CometTrackingNodesContext';

function useCometTrackingNodes() {
  return useContext(CometTrackingNodesContext);
}

export default useCometTrackingNodes;
