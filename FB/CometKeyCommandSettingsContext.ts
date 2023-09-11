// __d("CometKeyCommandSettingsContext", ["CometCustomKeyCommands", "gkx", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     a = d("react");
//     var h = c("CometCustomKeyCommands").areSingleKeysDisabled === null && !c("gkx")("1707273") ? !1 : c("CometCustomKeyCommands").areSingleKeysDisabled;
//     b = a.createContext({
//         addCustomCommand: function (a) {},
//         checkForKeyCommandConflict: function (a) {
//             return []
//         },
//         disableCustomCommand: function (a) {},
//         getAreSingleKeysDisabled: function () {
//             return h
//         },
//         getCustomCommandsMap: function () {
//             return new Map()
//         },
//         getCustomKeyCombination: function (a) {},
//         getModifiedKeyboardShortcutsPreference: function (a) {
//             return 4
//         },
//         isViewerShowing: !1,
//         resetAllCustomCommands: function (a) {},
//         resetCustomCommand: function (a) {},
//         setAreSingleKeysDisabled: function (a) {},
//         setModifiedKeyboardShortcutsPreference: function (a) {},
//         setViewerInfo: function (a) {},
//         viewerType: "see_all"
//     });
//     g["default"] = b
// }), 98);

import React, { createContext } from 'react';
import { CometCustomKeyCommands } from 'CometCustomKeyCommands';
import { gkx } from 'gkx';

const areSingleKeysDisabled = CometCustomKeyCommands.areSingleKeysDisabled === null && !gkx('1707273') ? false : CometCustomKeyCommands.areSingleKeysDisabled;
const CometKeyCommandSettingsContext = createContext({
  addCustomCommand: function (a) {},
  checkForKeyCommandConflict: function (a) {
    return [];
  },
  disableCustomCommand: function (a) {},
  getAreSingleKeysDisabled: function () {
    return areSingleKeysDisabled;
  },
  getCustomCommandsMap: function () {
    return new Map();
  },
  getCustomKeyCombination: function (a) {},
  getModifiedKeyboardShortcutsPreference: function (a) {
    return 4;
  },
  isViewerShowing: false,
  resetAllCustomCommands: function (a) {},
  resetCustomCommand: function (a) {},
  setAreSingleKeysDisabled: function (a) {},
  setModifiedKeyboardShortcutsPreference: function (a) {},
  setViewerInfo: function (a) {},
  viewerType: 'see_all',
});

export default CometKeyCommandSettingsContext;
