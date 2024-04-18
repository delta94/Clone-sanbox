__d("HiddenSubtreePassiveContext", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        getCurrentState: function () {
            return {
                backgrounded: !1,
                hidden: !1,
                hiddenOrBackgrounded: !1,
                hiddenOrBackgrounded_FIXME: !1
            }
        },
        subscribeToChanges: function (a) {
            return {
                remove: function () {}
            }
        }
    });
    g["default"] = b
}), 98);


import { createContext, ReactNode } from 'react';

interface HiddenSubtreePassiveContextValue {
  getCurrentState: () => {
    backgrounded: boolean;
    hidden: boolean;
    hiddenOrBackgrounded: boolean;
    hiddenOrBackgrounded_FIXME: boolean;
  };
  subscribeToChanges: (callback: (state: any) => void) => { remove: () => void };
}

const HiddenSubtreePassiveContext = createContext<HiddenSubtreePassiveContextValue>({
  getCurrentState: () => ({
    backgrounded: false,
    hidden: false,
    hiddenOrBackgrounded: false,
    hiddenOrBackgrounded_FIXME: false,
  }),
  subscribeToChanges: (callback: (state: any) => void) => ({ remove: () => {} }),
});

export default HiddenSubtreePassiveContext;
