// __d("CometToastBridge.react", ["BaseToastAnimationInternal.react", "XPlatReactToasterView.react", "react", "useToasterStateManager"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useEffect,
//         j = b.useState;

//     function a(a) {
//         a = a.maxVisible;
//         a = a === void 0 ? 1 : a;
//         var b = c("useToasterStateManager")(),
//             d = j(function () {
//                 return b.getEmptyState()
//             }),
//             e = d[0],
//             f = d[1];
//         i(function () {
//             var a = b.registerView(f);
//             return function () {
//                 a.remove()
//             }
//         }, [b]);
//         return h.jsx("div", {
//             className: "x1n2onr6",
//             children: h.jsx("ul", {
//                 children: h.jsx(c("XPlatReactToasterView.react"), {
//                     maxVisible: a,
//                     onExpireToast: function (a) {
//                         b.expire(a)
//                     },
//                     toasterState: e,
//                     children: function (a, b, d, e) {
//                         return h.jsx(c("BaseToastAnimationInternal.react"), {
//                             expired: d,
//                             id: b,
//                             position: e,
//                             children: a
//                         }, b)
//                     }
//                 })
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { useEffect, useState } from 'react';
import { useToasterStateManager } from 'useToasterStateManager';
import XPlatReactToasterView from 'XPlatReactToasterView.react';
import BaseToastAnimationInternal from 'BaseToastAnimationInternal.react';

const CometToastBridge = ({ maxVisible = 1 }) => {
  const toasterStateManager = useToasterStateManager();
  const [toasterState, setToasterState] = useState(toasterStateManager.getEmptyState());

  useEffect(() => {
    const view = toasterStateManager.registerView(setToasterState);
    return () => {
      view.remove();
    };
  }, [toasterStateManager]);

  return (
    <div className="x1n2onr6">
      <ul>
        <XPlatReactToasterView
          maxVisible={maxVisible}
          onExpireToast={toasterId => toasterStateManager.expire(toasterId)}
          toasterState={toasterState}
        >
          {(toast, id, expired, position) => (
            <BaseToastAnimationInternal expired={expired} id={id} position={position}>
              {toast}
            </BaseToastAnimationInternal>
          )}
        </XPlatReactToasterView>
      </ul>
    </div>
  );
};

export default CometToastBridge;