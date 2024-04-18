__d("MWChatStateV2IsMinimized", ["MWChatStateV2IsClosed", "MWChatStateV2IsOpen"], (function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a, b) {
    if (a != null)
      if (d("MWChatStateV2IsOpen").isOpen(a, b)) return !1;
      else return !d("MWChatStateV2IsClosed").isClosed(b);
    else return Math.max(b.minimizeWatermark, b.clientForcedMinimizeWatermark) > Math.max(b.openWatermark, b.closeWatermark)
  }
  g.isMinimized = a
}), 98);

import { isOpen } from "MWChatStateV2IsOpen";
import { isClosed } from "MWChatStateV2IsClosed";

export function MWChatStateV2IsMinimized(chatState: any, watermark: { minimizeWatermark: number, clientForcedMinimizeWatermark: number, openWatermark: number, closeWatermark: number }): boolean {
  if (chatState != null) {
    if (isOpen(chatState, watermark)) {
      return false;
    } else {
      return !isClosed(watermark);
    }
  } else {
    return Math.max(watermark.minimizeWatermark, watermark.clientForcedMinimizeWatermark) > Math.max(watermark.openWatermark, watermark.closeWatermark);
  }
}
