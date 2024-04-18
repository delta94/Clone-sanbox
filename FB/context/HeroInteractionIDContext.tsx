// __d("HeroInteractionIDContext", ["react"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = a.createContext(null);
//     g["default"] = b
// }
// ), 98);

import { createContext } from 'react';

const HeroInteractionIDContext = createContext<string | null>(null);

export default HeroInteractionIDContext;