__d("BaseContextualLayerAnchorRoot.react", ["BaseContextualLayerAnchorRootContext", "BaseDOMContainer.react", "ExecutionEnvironment", "react", "useStable", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = j || d("react");
    function a(a) {
        a = a.children;
        var b = c("useStable")(function() {
            return (h || (h = c("ExecutionEnvironment"))).canUseDOM ? document.createElement("div") : null
        })
          , d = (i || (i = c("useUnsafeRef_DEPRECATED")))(b);
        return k.jsxs(k.Fragment, {
            children: [k.jsx(c("BaseContextualLayerAnchorRootContext").Provider, {
                value: d,
                children: a
            }), k.jsx(c("BaseDOMContainer.react"), {
                node: b
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { Fragment, ReactNode } from 'react';
import BaseContextualLayerAnchorRootContext from './pathToBaseContextualLayerAnchorRootContext';  // Correct import path
import BaseDOMContainer from './pathToBaseDOMContainer';  // Correct import path
import ExecutionEnvironment from './pathToExecutionEnvironment';  // Correct import path
import useStable from './pathToUseStable';  // Correct import path
import useUnsafeRef_DEPRECATED from './pathToUseUnsafeRef_DEPRECATED';  // Correct import path

type AnchorRootProps = {
    children: ReactNode;
}

const BaseContextualLayerAnchorRoot: React.FC<AnchorRootProps> = ({ children }) => {
    const domRef = useStable(() => ExecutionEnvironment.canUseDOM ? document.createElement('div') : null);
    const stableRef = useUnsafeRef_DEPRECATED(domRef);

    return (
        <Fragment>
            <BaseContextualLayerAnchorRootContext.Provider value={stableRef}>
                {children}
            </BaseContextualLayerAnchorRootContext.Provider>
            <BaseDOMContainer node={domRef} />
        </Fragment>
    );
}

export default BaseContextualLayerAnchorRoot;
