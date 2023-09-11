// __d("useCometFeedInlineComposerWOYMText", ["fbt", "gkx"], (function(a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i = c("gkx")("1224637");
//     function a(a) {
//         if (i)
//             return h._("__JHASH__Hf3Fx3GNVZv__JHASH__");
//         else
//             return a != null ? h._("__JHASH__FVtpWFx1aSi__JHASH__", [h._param("short name", a)]) : h._("__JHASH___BeMvWn-nAb__JHASH__")
//     }
//     g["default"] = a
// }
// ), 98);

import { gkx } from 'gkx';
import { _param, _ } from 'fbt';

const isFeatureEnabled = gkx('1224637');  // false

const useCometFeedInlineComposerWOYMText = (shortName) => {
  if (isFeatureEnabled) {
    return __('__JHASH__Hf3Fx3GNVZv__JHASH__');
  } else {
    return shortName != null
      ? __('__JHASH__FVtpWFx1aSi__JHASH__', [_param('short name', shortName)])
      : __('__JHASH___BeMvWn-nAb__JHASH__');
  }
};

export default useCometFeedInlineComposerWOYMText;