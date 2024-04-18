__d("withSearchCometGlobalTypeaheadFocusKeyboardShortcut", ["cometGetKeyCommandConfig", "react", "useBaseTypeaheadLayoutContextualStrategyStateContext", "useCometTypeaheadInputRefs", "useGlobalKeyCommands"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useCallback,
        k = b.useMemo;

    function a(a) {
        return function (b) {
            var e = b.inputRef;
            b = babelHelpers.objectWithoutPropertiesLoose(b, ["inputRef"]);
            e = c("useCometTypeaheadInputRefs")(e);
            var f = e.composedRef,
                g = e.inputRef;
            e = c("useBaseTypeaheadLayoutContextualStrategyStateContext")();
            var h = e.dispatchIsOpened,
                l = j(function () {
                    g.current != null && (g.current.focus(), h(!0))
                }, [g, h]);
            e = k(function () {
                return [d("cometGetKeyCommandConfig").getCometKeyCommandConfig("global", "search", l)]
            }, [l]);
            c("useGlobalKeyCommands")(e);
            return i.jsx(a, babelHelpers["extends"]({}, b, {
                inputRef: f
            }))
        }
    }
    g["default"] = a
}), 98);



import React, { useCallback, useMemo } from 'react';
import { getKeyCommandConfig, CometKeyCommand } from 'cometGetKeyCommandConfig';
import {
  useBaseTypeaheadLayoutContextualStrategyStateContext,
  useCometTypeaheadInputRefs,
} from 'relevant_path_to_hooks'; // Replace with actual hook paths
import { useGlobalKeyCommands } from 'useGlobalKeyCommands'; // Replace with actual hook path

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

const withSearchCometGlobalTypeaheadFocusKeyboardShortcut = (Component: React.FC<Props>) => {
  return (props: Props) => {
    const { inputRef, ...rest } = props;

    const typeaheadInputRefs = useCometTypeaheadInputRefs(inputRef);
    const { composedRef, typeaheadInputRef } = typeaheadInputRefs;

    const { dispatchIsOpened } = useBaseTypeaheadLayoutContextualStrategyStateContext();

    const handleFocus = useCallback(() => {
      if (typeaheadInputRef.current) {
        typeaheadInputRef.current.focus();
        dispatchIsOpened(true);
      }
    }, [dispatchIsOpened, typeaheadInputRef]);

    const keyCommand = useMemo(() => {
      return [
        getKeyCommandConfig(
          "global",
          "search",
          handleFocus
        ) as CometKeyCommand,
      ];
    }, [handleFocus]);

    useGlobalKeyCommands(keyCommand);

    return <Component {...rest} inputRef={composedRef} />;
  };
};

export default withSearchCometGlobalTypeaheadFocusKeyboardShortcut;
