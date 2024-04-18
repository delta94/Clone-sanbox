__d("CometVisibilityUserActivityMonitor", ["Visibility"], (function (a, b, c, d, e, f, g) {
  "use strict";
  a = {
    isUserActive: function () {
      return c("Visibility").isHidden() === !1
    },
    subscribe: function (a) {
      var b, d = (b = c("Visibility")).addListener(b.HIDDEN, function () {
          return a && a(!1)
        }),
        e = b.addListener(b.VISIBLE, function () {
          return a && a(!0)
        });
      return function () {
        d && d.remove(), e && e.remove()
      }
    }
  };
  g["default"] = a
}), 98);

import Visibility from 'Visibility'; // Import Visibility module from your correct path

interface CometVisibilityUserActivityMonitor {
  isUserActive: () => boolean;
  subscribe: (callback: (isActive: boolean) => void) => () => void;
}

const CometVisibilityUserActivityMonitor: CometVisibilityUserActivityMonitor = {
  isUserActive: () => {
    return !Visibility.isHidden();
  },
  subscribe: (callback) => {
    const hiddenListener = Visibility.addListener(Visibility.HIDDEN, () => {
      callback && callback(false);
    });

    const visibleListener = Visibility.addListener(Visibility.VISIBLE, () => {
      callback && callback(true);
    });

    return () => {
      hiddenListener && hiddenListener.remove();
      visibleListener && visibleListener.remove();
    };
  },
};

export default CometVisibilityUserActivityMonitor;


