// __d("LayoutAnimationEvents", ["$InternalEnum"], (function (a, b, c, d, e, f) {
//     "use strict";
//     a = "layoutAnimation";
//     c = b("$InternalEnum").Mirrored(["Start", "Stop"]);
//     f.LAYOUT_ANIMATION_EVENT = a;
//     f.LayoutAnimationEventType = c
// }), 66);

enum LayoutAnimationEventType {
    Start = "Start",
    Stop = "Stop"
}
  
const LAYOUT_ANIMATION_EVENT = "layoutAnimation";
  
export { LAYOUT_ANIMATION_EVENT, LayoutAnimationEventType };
  