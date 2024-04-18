__d("VoyageUserJourneyUILayerContext", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    c = b.createContext;
    var i = b.useContext,
        j = c({
            get: function () {
                return []
            }
        });

    function a() {
        return i(j)
    }
    g.VoyageUILayerContext = j;
    g.useVoyageUILayerContext = a
}), 98);

import { createContext, useContext } from 'react';

interface LayerItem {
  name: string;
  metadata: any;
}

interface VoyageUILayerContextType {
  get: () => LayerItem[];
}

const VoyageUILayerContext = createContext<VoyageUILayerContextType>({
  get: () => [],
});

const useVoyageUILayerContext = () => {
  return useContext(VoyageUILayerContext);
};

export { VoyageUILayerContext, useVoyageUILayerContext };
