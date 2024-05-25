__d("useLiveVideoCometInstreamRewardAlertDisplay", ["createVideoStateHook"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("createVideoStateHook").createVideoStateHook(null);
    b = a.setterHook;
    c = a.valueHook;
    e = b;
    f = c;
    g.useInstreamRewardAlertDisplayStateSetter = e;
    g.useInstreamRewardAlertDisplayStateValue = f
}), 98);

import { createVideoStateHook } from '../createVideoStateHook';

const { setterHook: useInstreamRewardAlertDisplayStateSetter, valueHook: useInstreamRewardAlertDisplayStateValue } = createVideoStateHook(null);

export {
  useInstreamRewardAlertDisplayStateSetter,
  useInstreamRewardAlertDisplayStateValue
};
