__d("MWChatStateV2IsOpen", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a === void 0 && (a = void 0);
        return b.openWatermark > Math.max.apply(Math, [b.closeWatermark, b.minimizeWatermark, b.clientForcedMinimizeWatermark].concat(typeof a === "number" ? a : []))
    }
    f.isOpen = a
}), 66);

type WatermarkState = {
    openWatermark: number;
    closeWatermark: number;
    minimizeWatermark: number;
    clientForcedMinimizeWatermark: number;
  };
  
  function isOpen(currentState: number, watermarkState: WatermarkState): boolean {
  
    const watermarkValues = [
      watermarkState.closeWatermark,
      watermarkState.minimizeWatermark,
      watermarkState.clientForcedMinimizeWatermark,
    ];
  
    if (typeof currentState === "number") {
      watermarkValues.push(currentState);
    }
  
    return watermarkState.openWatermark > Math.max(...watermarkValues);
  }
  
  export { isOpen };