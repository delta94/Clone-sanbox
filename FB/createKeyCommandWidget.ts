// __d("createKeyCommandWidget", ["createKeyCommandWrapper", "react", "recoverableViolation"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useContext,
//         j = b.useEffect;

//     function a(a) {
//         a === void 0 && (a = !0);
//         var b = h.createContext();
//         a = c("createKeyCommandWrapper")(a, b);

//         function d(a, d, e) {
//             d === void 0 && (d = !1);
//             var f = i(b);
//             j(function () {
//                 if (!f) {
//                     d || c("recoverableViolation")("Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.", "comet_ax");
//                     return
//                 }
//                 if (a) return f.addCommands(a, e)
//             }, [f, a, d, e])
//         }
//         return {
//             Context: b,
//             Wrapper: a,
//             useKeyCommands: d
//         }
//     }
//     g["default"] = a
// }), 98);

import React, { createContext, useContext, useEffect } from 'react';
import { createKeyCommandWrapper } from 'createKeyCommandWrapper';
import { recoverableViolation } from 'recoverableViolation';

const createKeyCommandWidget = (autoRegister = true) => {
  const KeyCommandContext = createContext();
  const WrappedComponent = createKeyCommandWrapper(autoRegister, KeyCommandContext);

  const useKeyCommands = (commands, shouldBind = false, options) => {
    const context = useContext(KeyCommandContext);

    useEffect(() => {
      if (!context) {
        if (!shouldBind) {
          recoverableViolation(
            "Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.",
            'comet_ax'
          );
        }
        return;
      }

      if (commands) {
        context.addCommands(commands, options);
      }
    }, [context, commands, shouldBind, options]);
  };

  return {
    Context: KeyCommandContext,
    Wrapper: WrappedComponent,
    useKeyCommands,
  };
};

export default createKeyCommandWidget;
