// __d("HeroFallbackTracker.react", ["HeroInteractionContext", "HeroInteractionIDContext", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     b = d("react");
//     var h = b.useContext,
//         i = b.useLayoutEffect;

//     function a(a) {
//         var b = a.uuid,
//             e = h(d("HeroInteractionContext").Context),
//             f = h(c("HeroInteractionIDContext"));
//         i(function () {
//             if (f != null) {
//                 e.registerPlaceholder(f, b, e.pageletStack);
//                 return function () {
//                     e.removePlaceholder(f, b)
//                 }
//             }
//         }, [e, f, b]);
//         return null
//     }
//     a.displayName = "HeroFallbackTracker";
//     g["default"] = a
// }), 98);


import React, { useContext, useLayoutEffect } from 'react';
import { HeroInteractionContext, HeroInteractionIDContext } from 'HeroInteractionContext';

const HeroFallbackTracker = ({ uuid }) => {
  const interactionContext = useContext(HeroInteractionContext.Context);
  const interactionID = useContext(HeroInteractionIDContext);

  useLayoutEffect(() => {
    if (interactionID != null) {
      interactionContext.registerPlaceholder(interactionID, uuid, interactionContext.pageletStack);
      return () => {
        interactionContext.removePlaceholder(interactionID, uuid);
      };
    }
  }, [interactionContext, interactionID, uuid]);

  return null;
};

HeroFallbackTracker.displayName = 'HeroFallbackTracker';

export default HeroFallbackTracker;