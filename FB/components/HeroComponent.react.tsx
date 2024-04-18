// __d("HeroComponent.react", ["HeroInteractionContext", "HeroInteractionIDContext", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     b = h || (h = d("react"));
//     e = h;
//     var i = e.useContext,
//         j = e.useLayoutEffect;

//     function a(a) {
//         var b = a.description,
//             e = i(d("HeroInteractionContext").Context),
//             f = i(c("HeroInteractionIDContext"));
//         j(function () {
//             f != null && e.logHeroRender(f, b, e.pageletStack)
//         }, [b, e, f]);
//         return null
//     }
//     a.displayName = "HeroComponent";
//     f = b.memo(a);
//     g["default"] = f
// }), 98);


import React, { useContext, useLayoutEffect, FC, memo } from 'react';
import { HeroInteractionContext } from './HeroInteractionContext';
import { HeroInteractionIDContext } from './HeroInteractionIDContext';

interface HeroComponentProps {
  description: string;
}

const HeroComponent: FC<HeroComponentProps> = memo(({ description }) => {
  const interactionContext = useContext(HeroInteractionContext);
  const interactionId = useContext(HeroInteractionIDContext);

  useLayoutEffect(() => {
    if (interactionId != null) {
      interactionContext.logHeroRender(interactionId, description, interactionContext.pageletStack);
    }
  }, [description, interactionContext, interactionId]);

  return null;
});

HeroComponent.displayName = 'HeroComponent';

export default HeroComponent;
