__d("isWorkVisibilityHidden", ["PresencePrivacy"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        return a.user.is_viewer === !0 && c("PresencePrivacy").getVisibility() === c("PresencePrivacy").OFFLINE
    }
    g["default"] = a
}
), 98);

import { PresencePrivacy } from 'some-library'; // Replace 'some-library' with the actual library path

function isWorkVisibilityHidden(user: { is_viewer: boolean }): boolean {
  return user.is_viewer && PresencePrivacy.getVisibility() === PresencePrivacy.OFFLINE;
}

export default isWorkVisibilityHidden;
