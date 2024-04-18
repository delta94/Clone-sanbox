__d("MWChatStateV2IsClosed", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.closeWatermark > Math.max(a.openWatermark, a.minimizeWatermark, a.clientForcedMinimizeWatermark)
    }
    f.isClosed = a
}), 66);

interface ChatState {
    closeWatermark: number;
    openWatermark: number;
    minimizeWatermark: number;
    clientForcedMinimizeWatermark: number;
}

export function isClosed(state: ChatState): boolean {
    return state.closeWatermark > Math.max(state.openWatermark, state.minimizeWatermark, state.clientForcedMinimizeWatermark);
}
