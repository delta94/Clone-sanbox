__d("CometTrackingNodeAbstractViewHierarchyWrapperContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = d("react").createContext;
    b = a(void 0);
    c = b;
    g["default"] = c
}
), 98);


import { createContext, ReactNode } from 'react';

type AbstractViewHierarchyWrapperContextType = ((nodes: any[], children: ReactNode) => ReactNode) | undefined;

const CometTrackingNodeAbstractViewHierarchyWrapperContext = createContext<AbstractViewHierarchyWrapperContextType>(undefined);

export default CometTrackingNodeAbstractViewHierarchyWrapperContext;
