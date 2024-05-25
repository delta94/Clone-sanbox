__d("useHeroBootloadedComponent", ["CometHeroInteractionContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext
      , i = b.useEffect;
    function a(a) {
        var b = h(c("CometHeroInteractionContext").Context);
        i(function() {
            b.consumeBootload(a.getModuleId())
        }, [b, a])
    }
    g["default"] = a
}
), 98);


import React, { useContext, useEffect } from 'react';
import { CometHeroInteractionContext } from 'CometHeroInteractionContext';

type BootloadedComponent = {
  getModuleId: () => string;
};

export default function useHeroBootloadedComponent(component: BootloadedComponent): void {
  const heroInteractionContext = useContext(CometHeroInteractionContext.Context);

  useEffect(() => {
    heroInteractionContext.consumeBootload(component.getModuleId());
  }, [heroInteractionContext, component]);
}
