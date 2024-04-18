// __d("CometMediaViewerFullscreenContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = a.createContext(!1);
//     g["default"] = b
// }), 98);

import { createContext } from 'react';


const CometMediaViewerFullscreenContext = createContext<boolean>(false);

export default CometMediaViewerFullscreenContext;
