__d(
  "MessengerSurfaceContext.bs",
  ["MessengerSurfaceType", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(d("MessengerSurfaceType").messenger);
    g.context = b;
    g.defaultValue = d("MessengerSurfaceType").messenger;
  },
  98
);

import { createContext } from "react";
import { MessengerSurfaceType } from "MessengerSurfaceType";

export const context = createContext(MessengerSurfaceType.messenger);
export const defaultValue = MessengerSurfaceType.messenger;
