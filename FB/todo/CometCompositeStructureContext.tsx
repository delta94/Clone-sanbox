__d("CometCompositeStructureContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        horizontal: !1,
        vertical: !1
    });
    g["default"] = b
}
), 98);


import { createContext } from 'react';

interface CometCompositeStructureContextValue {
  horizontal: boolean;
  vertical: boolean;
}

const CometCompositeStructureContext = createContext<CometCompositeStructureContextValue>({
  horizontal: false,
  vertical: false,
});

export default CometCompositeStructureContext;
