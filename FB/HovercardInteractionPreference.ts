// __d("HovercardInteractionPreference", ["$InternalEnum"], (function (a, b, c, d, e, f) {
//     a = b("$InternalEnum")({
//         DISABLED: 1,
//         ENABLED_ON_HOVER: 2,
//         ENABLED_ON_CLICK: 3
//     });
//     c = a;
//     f["default"] = c
// }), 66);

import { InternalEnum } from '$InternalEnum';

const HovercardInteractionPreference = InternalEnum({
  DISABLED: 1,
  ENABLED_ON_HOVER: 2,
  ENABLED_ON_CLICK: 3,
});

export default HovercardInteractionPreference;
