__d("CometSSRSuspendOnServer.react", ["ExecutionEnvironment", "react", "suspendOrThrowIfUsedInSSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
        a = a.children;
        if (c("ExecutionEnvironment").canUseDOM)
            return a;
        c("suspendOrThrowIfUsedInSSR")("CometSSRSuspendOnServer: This component is marked to be client rendered")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { ReactNode } from 'react';
import { canUseDOM } from 'ExecutionEnvironment';

interface CometSSRSuspendOnServerProps {
  children: ReactNode;
}

const CometSSRSuspendOnServer: React.FC<CometSSRSuspendOnServerProps> = ({
  children,
}) => {
  if (canUseDOM) {
    return children;
  } else {
    throw new Error("CometSSRSuspendOnServer: This component is marked to be client rendered");
  }
};

export default CometSSRSuspendOnServer;
