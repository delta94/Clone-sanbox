__d("CometTrackingNodeProvider.react", ["CometTrackingNodeAbstractViewHierarchyWrapperContext", "CometTrackingNodesContext", "encodeTrackingNode", "react", "useCometTrackingNodes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext
      , j = b.useMemo;
    function a(a) {
        var b = a.children
          , d = a.index
          , e = a.trackingNode
          , f = c("useCometTrackingNodes")();
        a = j(function() {
            if (e == null)
                return f;
            var a = c("encodeTrackingNode")(e, d);
            return [a].concat(f)
        }, [f, e, d]);
        var g = b
          , k = i(c("CometTrackingNodeAbstractViewHierarchyWrapperContext"));
        k != null && (g = k(a, b));
        return h.jsx(c("CometTrackingNodesContext").Provider, {
            value: a,
            children: g
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { useContext, useMemo } from 'react';
import { CometTrackingNodeAbstractViewHierarchyWrapperContext } from 'CometTrackingNodeAbstractViewHierarchyWrapperContext';
import { CometTrackingNodesContext } from 'CometTrackingNodesContext';
import { encodeTrackingNode } from 'encodeTrackingNode';
import { useCometTrackingNodes } from 'useCometTrackingNodes';

interface CometTrackingNodeProviderProps {
  children: React.ReactNode;
  index: number;
  trackingNode: any; // Replace 'any' with the actual type of trackingNode if available
}

const CometTrackingNodeProvider: React.FC<CometTrackingNodeProviderProps> = ({
  children,
  index,
  trackingNode,
}) => {
  const trackingNodes = useCometTrackingNodes();

  const value = useMemo(() => {
    if (trackingNode == null) {
      return trackingNodes;
    }
    const encodedTrackingNode = encodeTrackingNode(trackingNode, index);
    return [encodedTrackingNode, ...trackingNodes];
  }, [trackingNodes, trackingNode, index]);

  let content = children;

  const abstractViewHierarchyWrapperContext = useContext(CometTrackingNodeAbstractViewHierarchyWrapperContext);
  if (abstractViewHierarchyWrapperContext != null) {
    content = abstractViewHierarchyWrapperContext(value, children);
  }

  return (
    <CometTrackingNodesContext.Provider value={value}>
      {content}
    </CometTrackingNodesContext.Provider>
  );
};

export default CometTrackingNodeProvider;
