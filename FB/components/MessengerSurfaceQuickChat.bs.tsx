__d(
  "MessengerSurfaceQuickChat.bs",
  ["MessengerSurfaceContext.bs", "MessengerSurfaceType", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      a = i.useContext(d("MessengerSurfaceContext.bs").context);
      return a === d("MessengerSurfaceType").workQuickchat;
    }
    g.useIsQuickChatSurface = a;
  },
  98
);

import { useContext } from "react";
import { MessengerSurfaceContext } from "MessengerSurfaceContext.bs";
import { MessengerSurfaceType } from "MessengerSurfaceType";

export function useIsQuickChatSurface(): boolean {
  const context = useContext(MessengerSurfaceContext.context);
  return context === MessengerSurfaceType.workQuickchat;
}
