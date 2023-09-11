// __d("createKeyCommandWrapper", ["CometKeyCommandContext", "CometKeyCommandSettingsContext", "CometKeyCommandUtilsContext", "CometKeyCommandsTypedLoggerLite", "areKeyCombinationsEqual", "createKeyCommand", "gkx", "isSingleCharKey", "react", "recoverableViolation", "stylex", "useStable"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useCallback,
//         j = b.useContext,
//         k = b.useMemo,
//         l = b.useRef,
//         m = {
//             wrapperFocusable: {
//                 ":focus_outline": "x1uvtmcs",
//                 $$css: !0
//             }
//         };

//     function n(a) {
//         if (a instanceof HTMLInputElement) return a.type !== "hidden" && a.type !== "file" && !a.disabled;
//         return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement ? !a.disabled : a instanceof HTMLElement && a.isContentEditable
//     }

//     function o(a) {
//         return a instanceof HTMLElement && a.getAttribute("role") === "listbox" ? !a.getAttribute("aria-disabled") : !1
//     }

//     function p(a, b, c) {
//         for (var d = a, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
//             var g;
//             if (e) {
//                 if (f >= d.length) break;
//                 g = d[f++]
//             } else {
//                 f = d.next();
//                 if (f.done) break;
//                 g = f.value
//             }
//             g = g;
//             var h = g[0];
//             g = g[1];
//             if (g.groupID === b && g.commandID === c) return a.get(h)
//         }
//     }

//     function q(a, b) {
//         return c("gkx")("3598") && b.triggerFromInputs === !0 && n(a) && ((a = b.command) == null ? void 0 : a.alt) === !0
//     }
//     var r = function (a, b) {
//             c("recoverableViolation")("Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
//         },
//         s = function (a, b) {
//             c("recoverableViolation")("Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
//         };

//     function a(a, b) {
//         return function (d) {
//             var e = j(c("CometKeyCommandContext")),
//                 f = j(c("CometKeyCommandUtilsContext")),
//                 g = j(c("CometKeyCommandSettingsContext")),
//                 t = f && f.setActiveWrapper,
//                 u = l(r),
//                 v = l(s),
//                 w = c("useStable")(function () {
//                     return new Map()
//                 }),
//                 x = i(function (a) {
//                     var b, d = w.get(a);
//                     if (((b = d) == null ? void 0 : b.groupID) != null && ((b = d) == null ? void 0 : b.commandID) != null) {
//                         b = g.getCustomKeyCombination(d.groupID, d.commandID);
//                         if (b == null || c("areKeyCombinationsEqual")(b, (b = d) == null ? void 0 : b.command)) return d;
//                         else d = null
//                     }
//                     b = g.getCustomCommandsMap().get(a);
//                     if (b != null && b.groupID != null && b.commandID != null) {
//                         a = p(w, b.groupID, b.commandID);
//                         a != null && (d = a)
//                     }
//                     return d
//                 }, [g, w]),
//                 y = k(function () {
//                     return {
//                         addCommands: function (a, b) {
//                             a.forEach(function (a) {
//                                 var d = a.command;
//                                 if (d != null) {
//                                     d = c("createKeyCommand")(d);
//                                     var e = w.has(d),
//                                         g = e && b === !0;
//                                     g = g || !e || b === void 0;
//                                     g && (w.set(d, a), f && f.notifyCommandUpdate())
//                                 }
//                             });
//                             return function () {
//                                 a.forEach(function (a) {
//                                     var b = a.command;
//                                     b = c("createKeyCommand")(b);
//                                     var d = w.get(b);
//                                     d === a && w["delete"](b)
//                                 }), f && f.notifyCommandUpdate()
//                             }
//                         },
//                         applyCommand: function (a, b) {
//                             var e, f = x(a);
//                             if (f == null) return !1;
//                             var h = /^[a-z0-9]$/;
//                             if (c("gkx")("3598") && ((e = f.command) == null ? void 0 : e.alt) === !0 && g.getModifiedKeyboardShortcutsPreference() === 1) return !0;
//                             if (!f.triggerFromInputs && n(b.target) || o(b.target) && h.test(a)) return !1;
//                             if (b.type === "keyup" && f.triggerOnKeyUp !== !0 && f.triggerOnKeyUpAndKeyDown !== !0) return !1;
//                             if (b.type === "keydown" && f.triggerOnKeyUp === !0) return !1;
//                             e = f.handler;
//                             if (f.shouldPreventDefault !== !1) {
//                                 if (q(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 3) return !0;
//                                 e && b.preventDefault()
//                             }
//                             if (f.triggerOnRepeats === !1 && b.repeat === !0) return !1;
//                             if (e != null) {
//                                 if (f.command != null && q(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 4) {
//                                     v.current(f.command, f.singleCharDescription);
//                                     return !0
//                                 }
//                                 h = g && g.getAreSingleKeysDisabled();
//                                 b = c("isSingleCharKey")(a);
//                                 if (h === !0 && b) return !0;
//                                 if (h === null && b) {
//                                     u.current(a, f.singleCharDescription);
//                                     return !0
//                                 }
//                                 e();
//                                 h = f.description;
//                                 c("CometKeyCommandsTypedLoggerLite").log({
//                                     key_combo: a,
//                                     key_context: d.debugName,
//                                     key_description: h
//                                 });
//                                 return f.shouldStopPropagation !== !1
//                             }
//                             return !1
//                         },
//                         debugName: d.debugName,
//                         getCommandMap: function () {
//                             return w
//                         },
//                         getParent: function () {
//                             return e
//                         },
//                         removeCommand: function (a) {
//                             w["delete"](a), f && f.notifyCommandUpdate()
//                         },
//                         setShowModifiedKeyCommandWrapperDialogRef: function (a) {
//                             v.current = a;
//                             return function () {
//                                 v.current = s
//                             }
//                         },
//                         setShowSingleCharacterKeyCommandWrapperDialogRef: function (a) {
//                             u.current = a;
//                             return function () {
//                                 u.current = r
//                             }
//                         }
//                     }
//                 }, [g, f, w, e, d.debugName, v, u, x]),
//                 z = i(function () {
//                     if (!t) {
//                         c("recoverableViolation")("setActiveWrapper is undefined in " + (d.debugName != null ? d.debugName : "unknown"), "comet_ax");
//                         return
//                     }
//                     t(y)
//                 }, [t, y, d.debugName]);
//             if (a || d.elementType !== void 0) {
//                 var A;
//                 A = (A = d.elementType) != null ? A : "div";
//                 A = h.jsx(A, {
//                     className: c("stylex")(d.isWrapperFocusable ? m.wrapperFocusable : void 0, d.xstyle),
//                     "data-testid": void 0,
//                     onFocusCapture: a ? z : void 0,
//                     tabIndex: d.isWrapperFocusable ? -1 : void 0,
//                     children: d.children
//                 })
//             } else A = d.children;
//             b && (A = h.jsx(b.Provider, {
//                 value: y,
//                 children: A
//             }));
//             return h.jsx(c("CometKeyCommandContext").Provider, {
//                 value: y,
//                 children: A
//             })
//         }
//     }
//     g["default"] = a
// }), 98);


import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { CometKeyCommandContext } from 'CometKeyCommandContext';
import { CometKeyCommandSettingsContext } from 'CometKeyCommandSettingsContext';
import { CometKeyCommandUtilsContext } from 'CometKeyCommandUtilsContext';
import { CometKeyCommandsTypedLoggerLite } from 'CometKeyCommandsTypedLoggerLite';
import { areKeyCombinationsEqual } from 'areKeyCombinationsEqual';
import createKeyCommand from 'createKeyCommand';
import { gkx } from 'gkx';
import { isSingleCharKey } from 'isSingleCharKey';
import { recoverableViolation } from 'recoverableViolation';
import { stylex } from 'stylex';
import { useStable } from 'useStable';

const r = () => {
  recoverableViolation("Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set", "comet_ax");
};
const s = () => {
  recoverableViolation("Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set", "comet_ax");
};

const createKeyCommandWrapper = (autoRegister = true, ElementType) => {
  const KeyCommandContext = useContext(CometKeyCommandContext);
  const KeyCommandUtilsContext = useContext(CometKeyCommandUtilsContext);
  const KeyCommandSettingsContext = useContext(CometKeyCommandSettingsContext);

  const setActiveWrapper = KeyCommandUtilsContext && KeyCommandUtilsContext.setActiveWrapper;

  const showSingleCharacterKeyCommandWrapperDialogRef = useRef(r);
  const showModifiedKeyCommandWrapperDialogRef = useRef(s);

  const commandMap = useStable(() => new Map());

  const getKeyCommand = useCallback(
    (key) => {
      const existing = commandMap.get(key);

      if (existing?.groupID != null && existing?.commandID != null) {
        const customKeyCombo = KeyCommandSettingsContext.getCustomKeyCombination(
          existing.groupID,
          existing.commandID
        );

        if (
          customKeyCombo == null ||
          areKeyCombinationsEqual(customKeyCombo, existing.command)
        ) {
          return existing;
        } else {
          existing = null;
        }
      }

      const customCommand = KeyCommandSettingsContext.getCustomCommandsMap().get(key);

      if (customCommand != null && customCommand.groupID != null && customCommand.commandID != null) {
        const matched = findMatchingCommand(commandMap, customCommand.groupID, customCommand.commandID);
        if (matched != null) {
          existing = matched;
        }
      }

      return existing;
    },
    [commandMap, KeyCommandSettingsContext]
  );

  const applyCommand = useCallback(
    (key, event) => {
      const command = getKeyCommand(key);
      if (command == null) {
        return false;
      }

      const isSingleCharPref = gkx('3598') && command?.command?.alt === true && KeyCommandSettingsContext.getModifiedKeyboardShortcutsPreference() === 1;
      if (!command.triggerFromInputs && (n(event.target) || o(event.target)) && /^[a-z0-9]$/.test(key)) {
        return false;
      }

      if (event.type === 'keyup' && command.triggerOnKeyUp !== true && command.triggerOnKeyUpAndKeyDown !== true) {
        return false;
      }

      if (event.type === 'keydown' && command.triggerOnKeyUp === true) {
        return false;
      }

      const handler = command.handler;
      if (command.shouldPreventDefault !== false) {
        if (q(event.target, command) && KeyCommandSettingsContext.getModifiedKeyboardShortcutsPreference() === 3) {
          return true;
        }

        if (handler != null) {
          event.preventDefault();
        }
      }

      if (command.triggerOnRepeats === false && event.repeat === true) {
        return false;
      }

      if (handler != null) {
        handler();
        const description = command.description;

        CometKeyCommandsTypedLoggerLite.log({
          key_combo: key,
          key_context: KeyCommandContext.debugName,
          key_description: description,
        });

        return command.shouldStopPropagation !== false;
      }

      return false;
    },
    [commandMap, getKeyCommand, KeyCommandContext, KeyCommandSettingsContext]
  );

  const contextValue = useMemo(
    () => ({
      addCommands: (commands, shouldBind) => {
        commands.forEach((cmd) => {
          const key = createKeyCommand(cmd.command);
          const existing = commandMap.get(key);

          if (existing == null || shouldBind === true) {
            commandMap.set(key, cmd);
            if (KeyCommandUtilsContext) {
              KeyCommandUtilsContext.notifyCommandUpdate();
            }
          }
        });

        return () => {
          commands.forEach((cmd) => {
            const key = createKeyCommand(cmd.command);
            const existing = commandMap.get(key);
            if (existing === cmd) {
              commandMap.delete(key);
            }
          });

          if (KeyCommandUtilsContext) {
            KeyCommandUtilsContext.notifyCommandUpdate();
          }
        };
      },
      applyCommand,
      debugName: KeyCommandContext.debugName,
      getCommandMap: () => commandMap,
      getParent: () => KeyCommandContext,
      removeCommand: (key) => {
        commandMap.delete(key);
        if (KeyCommandUtilsContext) {
          KeyCommandUtilsContext.notifyCommandUpdate();
        }
      },
      setShowModifiedKeyCommandWrapperDialogRef: (ref) => {
        showModifiedKeyCommandWrapperDialogRef.current = ref;
        return () => {
          showModifiedKeyCommandWrapperDialogRef.current = s;
        };
      },
      setShowSingleCharacterKeyCommandWrapperDialogRef: (ref) => {
        showSingleCharacterKeyCommandWrapperDialogRef.current = ref;
        return () => {
          showSingleCharacterKeyCommandWrapperDialogRef.current = r;
        };
      },
    }),
    [applyCommand, commandMap, KeyCommandContext, KeyCommandSettingsContext, KeyCommandUtilsContext]
  );

  const onFocusCapture = useCallback(
    () => {
      if (autoRegister) {
        setActiveWrapper(contextValue);
      }
    },
    [autoRegister, contextValue, setActiveWrapper]
  );

  const tabIndex = d.isWrapperFocusable ? -1 : undefined;

  const WrapperElement = ElementType || 'div';

  const wrapperProps = {
    className: stylex(d.isWrapperFocusable ? m.wrapperFocusable : void 0, d.xstyle),
    'data-testid': undefined,
    onFocusCapture: onFocusCapture,
    tabIndex: tabIndex,
    children: d.children,
  };

  if (ElementType) {
    return h.jsx(ElementType, wrapperProps);
  }

  const WrappedComponent = b.Provider;

  const wrappedProps = {
    value: contextValue,
    children: h.jsx(WrappedComponent, { value: contextValue, children: wrapperProps.children }),
  };

  return h.jsx(CometKeyCommandContext.Provider, wrappedProps);
};

export default createKeyCommandWrapper;
