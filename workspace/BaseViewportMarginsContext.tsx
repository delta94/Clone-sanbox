__d("BaseViewportMarginsContext", ["react"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h;
  a = h || d("react");
  b = a.createContext({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  });
  g["default"] = b
}), 98);

import { createContext } from 'react';

interface BaseViewportMargins {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

const BaseViewportMarginsContext = createContext<BaseViewportMargins>({
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
});

export default BaseViewportMarginsContext;
