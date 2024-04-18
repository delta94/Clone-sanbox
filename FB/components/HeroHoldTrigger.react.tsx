// __d("HeroHoldTrigger.react", ["HeroInteractionContext", "HeroInteractionIDContext", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     h || (h = d("react"));
//     b = h;
//     var i = b.useContext,
//         j = b.useLayoutEffect;

//     function a(a) {
//         var b = a.description,
//             e = a.hold,
//             f = i(d("HeroInteractionContext").Context),
//             g = i(c("HeroInteractionIDContext"));
//         j(function () {
//             if (e && g != null) {
//                 var a = f.hold(g, f.pageletStack, b);
//                 return function () {
//                     f.unhold(g, a)
//                 }
//             }
//         }, [b, f, g, e]);
//         return null
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     a.displayName = "HeroHoldTrigger";
//     g["default"] = a
// }), 98);

import React, { useContext, useLayoutEffect, FC } from 'react';
import { HeroInteractionContextType } from './HeroInteractionContext'; // Assuming the type is exported from the context file
import { HeroInteractionIDContext } from './HeroInteractionIDContext';

interface HeroHoldTriggerProps {
  description: string;
  hold: boolean;
}

const HeroHoldTrigger: FC<HeroHoldTriggerProps> = ({ description, hold }) => {
  const interactionContext = useContext<HeroInteractionContextType>(HeroInteractionContext);
  const interactionId = useContext<string | null>(HeroInteractionIDContext);

  useLayoutEffect(() => {
    if (hold && interactionId != null) {
      const holdId = interactionContext.hold(interactionId, interactionContext.pageletStack, description);
      return () => {
        interactionContext.unhold(interactionId, holdId);
      };
    }

  }, [description, hold, interactionContext, interactionId]);

  return null;
};

HeroHoldTrigger.displayName = 'HeroHoldTrigger';

export default HeroHoldTrigger;
