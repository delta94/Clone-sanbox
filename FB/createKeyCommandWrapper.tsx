__d("createKeyCommandWrapper", ["CometKeyCommandContext", "CometKeyCommandSettingsContext", "CometKeyCommandUtilsContext", "CometKeyCommandsTypedLoggerLite", "areKeyCombinationsEqual", "createKeyCommand", "gkx", "isSingleCharKey", "react", "recoverableViolation", "stylex", "useStable"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h = d("react");
  b = d("react");
  var i = b.useCallback,
    j = b.useContext,
    k = b.useMemo,
    l = b.useRef,
    m = {
      wrapperFocusable: {
        ":focus_outline": "x1uvtmcs",
        $$css: !0
      }
    };

  function n(a) {
    if (a instanceof HTMLInputElement) return a.type !== "hidden" && a.type !== "file" && !a.disabled;
    return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement ? !a.disabled : a instanceof HTMLElement && a.isContentEditable
  }

  function o(a) {
    return a instanceof HTMLElement && a.getAttribute("role") === "listbox" ? !a.getAttribute("aria-disabled") : !1
  }

  function p(a, b, c) {
    for (var d = a, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var g;
      if (e) {
        if (f >= d.length) break;
        g = d[f++]
      } else {
        f = d.next();
        if (f.done) break;
        g = f.value
      }
      g = g;
      var h = g[0];
      g = g[1];
      if (g.groupID === b && g.commandID === c) return a.get(h)
    }
  }

  function q(a, b) {
    return c("gkx")("3598") && b.triggerFromInputs === !0 && n(a) && ((a = b.command) == null ? void 0 : a.alt) === !0
  }
  var r = function (a, b) {
      c("recoverableViolation")("Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
    },
    s = function (a, b) {
      c("recoverableViolation")("Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
    };

  function a(a, b) {
    return function (d) {
      var e = j(c("CometKeyCommandContext")),
        f = j(c("CometKeyCommandUtilsContext")),
        g = j(c("CometKeyCommandSettingsContext")),
        t = f && f.setActiveWrapper,
        u = l(r),
        v = l(s),
        w = c("useStable")(function () {
          return new Map()
        }),
        x = i(function (a) {
          var b, d = w.get(a);
          if (((b = d) == null ? void 0 : b.groupID) != null && ((b = d) == null ? void 0 : b.commandID) != null) {
            b = g.getCustomKeyCombination(d.groupID, d.commandID);
            if (b == null || c("areKeyCombinationsEqual")(b, (b = d) == null ? void 0 : b.command)) return d;
            else d = null
          }
          b = g.getCustomCommandsMap().get(a);
          if (b != null && b.groupID != null && b.commandID != null) {
            a = p(w, b.groupID, b.commandID);
            a != null && (d = a)
          }
          return d
        }, [g, w]),
        y = k(function () {
          return {
            addCommands: function (a, b) {
              a.forEach(function (a) {
                var d = a.command;
                if (d != null) {
                  d = c("createKeyCommand")(d);
                  var e = w.has(d),
                    g = e && b === !0;
                  g = g || !e || b === void 0;
                  g && (w.set(d, a), f && f.notifyCommandUpdate())
                }
              });
              return function () {
                a.forEach(function (a) {
                  var b = a.command;
                  b = c("createKeyCommand")(b);
                  var d = w.get(b);
                  d === a && w["delete"](b)
                }), f && f.notifyCommandUpdate()
              }
            },
            applyCommand: function (a, b) {
              var e, f = x(a);
              if (f == null) return !1;
              var h = /^[a-z0-9]$/;
              if (c("gkx")("3598") && ((e = f.command) == null ? void 0 : e.alt) === !0 && g.getModifiedKeyboardShortcutsPreference() === 1) return !0;
              if (!f.triggerFromInputs && n(b.target) || o(b.target) && h.test(a)) return !1;
              if (b.type === "keyup" && f.triggerOnKeyUp !== !0 && f.triggerOnKeyUpAndKeyDown !== !0) return !1;
              if (b.type === "keydown" && f.triggerOnKeyUp === !0) return !1;
              e = f.handler;
              if (f.shouldPreventDefault !== !1) {
                if (q(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 3) return !0;
                e && b.preventDefault()
              }
              if (f.triggerOnRepeats === !1 && b.repeat === !0) return !1;
              if (e != null) {
                if (f.command != null && q(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 4) {
                  v.current(f.command, f.singleCharDescription);
                  return !0
                }
                h = g && g.getAreSingleKeysDisabled();
                b = c("isSingleCharKey")(a);
                if (h === !0 && b) return !0;
                if (h === null && b) {
                  u.current(a, f.singleCharDescription);
                  return !0
                }
                e();
                h = f.description;
                c("CometKeyCommandsTypedLoggerLite").log({
                  key_combo: a,
                  key_context: d.debugName,
                  key_description: h
                });
                return f.shouldStopPropagation !== !1
              }
              return !1
            },
            debugName: d.debugName,
            getCommandMap: function () {
              return w
            },
            getParent: function () {
              return e
            },
            removeCommand: function (a) {
              w["delete"](a), f && f.notifyCommandUpdate()
            },
            setShowModifiedKeyCommandWrapperDialogRef: function (a) {
              v.current = a;
              return function () {
                v.current = s
              }
            },
            setShowSingleCharacterKeyCommandWrapperDialogRef: function (a) {
              u.current = a;
              return function () {
                u.current = r
              }
            }
          }
        }, [g, f, w, e, d.debugName, v, u, x]),
        z = i(function () {
          if (!t) {
            c("recoverableViolation")("setActiveWrapper is undefined in " + (d.debugName != null ? d.debugName : "unknown"), "comet_ax");
            return
          }
          t(y)
        }, [t, y, d.debugName]);
      if (a || d.elementType !== void 0) {
        var A;
        A = (A = d.elementType) != null ? A : "div";
        A = h.jsx(A, {
          className: c("stylex")(d.isWrapperFocusable ? m.wrapperFocusable : void 0, d.xstyle),
          "data-testid": void 0,
          onFocusCapture: a ? z : void 0,
          tabIndex: d.isWrapperFocusable ? -1 : void 0,
          children: d.children
        })  
      } else A = d.children;
      b && (A = h.jsx(b.Provider, {
        value: y,
        children: A
      }));
      return h.jsx(c("CometKeyCommandContext").Provider, {
        value: y,
        children: A
      })
    }
  }
  g["default"] = a
}), 98);



import React, { useCallback, useContext, useMemo, useRef } from 'react';
import {
  CometKeyCommandContext,
  CometKeyCommandSettingsContext,
  CometKeyCommandUtilsContext,
  CometKeyCommandsTypedLoggerLite,
} from 'CometKeyCommandContext'; // Replace with actual imports
import { areKeyCombinationsEqual } from 'areKeyCombinationsEqual'; // Replace with actual import
import { createKeyCommand } from 'createKeyCommand'; // Replace with actual import
import { gkx } from 'gkx'; // Replace with actual import
import { isSingleCharKey } from 'isSingleCharKey'; // Replace with actual import
import { recoverableViolation } from 'recoverableViolation'; // Replace with actual import
import { stylex } from 'stylex'; // Replace with actual import
import { useStable } from 'useStable'; // Replace with actual import

const wrapperFocusableStyle = {
  ':focus_outline': 'x1uvtmcs',
};

function isInputElement(element) {
  return element instanceof HTMLInputElement && element.type !== 'hidden' && element.type !== 'file' && !element.disabled;
}

function isListbox(element) {
  return (
    element instanceof HTMLElement &&
    element.getAttribute('role') === 'listbox' &&
    !element.getAttribute('aria-disabled')
  );
}

function getCommandFromMap(map, groupID, commandID) {
  for (const [key, value] of map.entries()) {
    const item = value;
    if (item.groupID === groupID && item.commandID === commandID) {
      return map.get(key);
    }
  }
  return null;
}

function shouldPreventDefault(element, command) {
  return (
    gkx('3598') &&
    command.triggerFromInputs === true &&
    isInputElement(element) &&
    (command.alt === true)
  );
}


const showSingleCharacterKeyCommandWrapperDialog = () => {
  recoverableViolation(
    'Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set',
    'comet_ax'
  );
};

const showModifiedKeyCommandWrapperDialog = () => {
  recoverableViolation(
    'Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set',
    'comet_ax'
  );
};



function createKeyCommandWrapper(autoRegister, context) {
  return function KeyCommandWrapper(props) {
    const activeWrapper = useContext(CometKeyCommandContext);
    const keyCommandUtils = useContext(CometKeyCommandUtilsContext);
    const keyCommandSettings = useContext(CometKeyCommandSettingsContext);

    const setActiveWrapper = keyCommandUtils && keyCommandUtils.setActiveWrapper;
    const showSingleCharacterKeyCommandWrapperDialogRef = useRef(showSingleCharacterKeyCommandWrapperDialog);

    const showModifiedKeyCommandWrapperDialogRef = useRef(showModifiedKeyCommandWrapperDialog);

    const commandsMap = useStable(() => new Map());

    const getKeyCommandByKey = useCallback(
      (key) => {
        const existingCommand = commandsMap.get(key)
        if (existingCommand?.groupID != null && existingCommand?.commandID != null) {
          const customKeyCombination = keyCommandSettings.getCustomKeyCombination(
            existingCommand.groupID,
            existingCommand.commandID
          );

          if (
            customKeyCombination == null ||
            areKeyCombinationsEqual(customKeyCombination, existingCommand.command)
          ) {
            return commandsMap.get(key);
          }
        }

        const customCommand = keyCommandSettings.getCustomCommandsMap().get(key);
        if (customCommand != null && customCommand.groupID != null && customCommand.commandID != null) {
          const existingCommand = getCommandFromMap(commandsMap,customCommand.groupID, customCommand.commandID);
          if (existingCommand != null) {
            return existingCommand;
          }
          return customCommand;
        }
      },
      [keyCommandSettings, commandsMap]
    );


    const commandMap = useMemo(() => {
      return {
        addCommands: (commands, triggerFromInputs) => {
          commands.forEach((item) => {
            const { command } = item;
            if (command != null) {
              const keyCommand = createKeyCommand(command);
              const exists = commandsMap.has(keyCommand);
              const shouldUpdate = exists && triggerFromInputs === true;
              if (!exists || shouldUpdate || triggerFromInputs) {
                commandsMap.set(keyCommand, item);
                keyCommandUtils?.notifyCommandUpdate();
              }
            }
          });

          return () => {
            commands.forEach((item) => {
              const { command } = item;
              const keyCommand = createKeyCommand(command);
              const existingCommand = commandsMap.get(keyCommand);
              if (existingCommand === item) {
                commandsMap.delete(keyCommand);
              }
            });
            keyCommandUtils?.notifyCommandUpdate();
          };
        },
        applyCommand: (key, event) => {
          const command = getKeyCommandByKey(key);
          if (command == null) {
            return false;
          }

          const isSingleCharKeyCommand = isSingleCharKey(key);
          const { target } = event;

          if (
            gkx('3598') &&
            command.command?.alt === true &&
            keyCommandUtils.getModifiedKeyboardShortcutsPreference() === 1
          ) {
            return true;
          }

          if (
            !command.triggerFromInputs &&
            (isInputElement(target) || isListbox(target)) &&
            /^[a-z0-9]$/.test(key)
          ) {
            return false;
          }

          if (
            event.type === 'keyup' &&
            command.triggerOnKeyUp !== true &&
            command.triggerOnKeyUpAndKeyDown !== true
          ) {
            return false;
          }

          if (event.type === 'keydown' && command.triggerOnKeyUp === true) {
            return false;
          }

          const handler = command.handler;

          if (command.shouldPreventDefault !== false) {
            if (shouldPreventDefault(target, command) && keyCommandSettings.getModifiedKeyboardShortcutsPreference() === 3) {
              return true;
            }

            handler && event.preventDefault();
          }

          if (command.triggerOnRepeats !== true && event.repeat === true) {
            return false;
          }

          if (handler != null) {
            if (command.command != null && shouldPreventDefault(target, command) && keyCommandSettings.getModifiedKeyboardShortcutsPreference() === 4) {
              showModifiedKeyCommandWrapperDialog.current(command.command, command.singleCharDescription);
              return true;
            }

            const description = command.description;
            CometKeyCommandsTypedLoggerLite.log({
              key_combo: key,
              key_context: activeWrapper.debugName,
              key_description: description,
            });
            return command.shouldStopPropagation !== false;
          }

          return false;
        },
        debugName: activeWrapper.debugName,
        getCommandMap: () => commandsMap,
        getParent: () => activeWrapper,
        removeCommand: (key) => {
          commandsMap.delete(key);
          keyCommandUtils?.notifyCommandUpdate();
        },
        setShowModifiedKeyCommandWrapperDialogRef: (ref) => {
          showModifiedKeyCommandWrapperDialog.current = ref;
          return () => {
            showModifiedKeyCommandWrapperDialog.current = showModifiedKeyCommandWrapperDialogRef;
          };
        },
        setShowSingleCharacterKeyCommandWrapperDialogRef: (ref) => {
          showSingleCharacterKeyCommandWrapperDialog.current = ref;
          return () => {
            showSingleCharacterKeyCommandWrapperDialog.current = showSingleCharacterKeyCommandWrapperDialogRef;
          };
        },
      };
    }, [
      getKeyCommandByKey, keyCommandSettings, activeWrapper, props.debugName, showSingleCharacterKeyCommandWrapperDialogRef, showModifiedKeyCommandWrapperDialogRef, getKeyCommandByKey
    ]);

 


    const setActiveWrapperCallback = useCallback(() => {
      if (!setActiveWrapper) {
        recoverableViolation(
          `setActiveWrapper is undefined in ${activeWrapper.debugName ?? 'unknown'}`,
          'comet_ax'
        );
        return;
      }
      setActiveWrapper(commandMap);
    }, [setActiveWrapper, commandMap, activeWrapper.debugName]);

    const onFocusCapture = autoRegister ? () => setActiveWrapper(commandMap) : undefined;
    const Component = props.elementType ?? 'div';
   
    let WrapperComponent;


    if ( autoRegister || props.elementType !== undefined) {
      WrapperComponent = (
        <Component 
          className={stylex(props.isWrapperFocusable ? wrapperFocusableStyle.wrapperFocusable : undefined, props.xstyle)}
          data-testid={undefined}
          onFocusCapture={onFocusCapture}
          tabIndex={props.isWrapperFocusable ? -1 : undefined}
        >
          {props.children}
        </Component>
      );
    } else {
      WrapperComponent = props.children;
    }


    if (context) {
      WrapperComponent = <context.Provider value={commandMap}>{WrapperComponent}</context.Provider>
    }
    
    return (
      <CometKeyCommandContext.Provider value={commandMap}>
        {WrapperComponent}
      </CometKeyCommandContext.Provider>
    );
  };
}

export default createKeyCommandWrapper;
