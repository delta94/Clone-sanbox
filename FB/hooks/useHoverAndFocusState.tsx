__d("useHoverAndFocusState", ["useFocusState", "useGeminiHoverState"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = c("useGeminiHoverState")(),
            b = a[0];
        a = a[1];
        var d = c("useFocusState")(),
            e = d[0],
            f = d[1];
        d = d[2];
        return {
            hovered: b,
            focused: e,
            onHoverIn: a.onMouseEnter,
            onHoverOut: a.onMouseLeave,
            onFocusIn: f,
            onFocusOut: d
        }
    }
    g["default"] = a
}), 98);

import { useFocusState, UseFocusStateReturn } from 'useFocusState';
import { useGeminiHoverState, UseGeminiHoverStateReturn } from 'useGeminiHoverState';

function useHoverAndFocusState(): {
  hovered: boolean;
  focused: boolean;
  onHoverIn: () => void; 
  onHoverOut: () => void;
  onFocusIn: () => void;
  onFocusOut: () => void;
} {

  const [hovered, onHoverIn, onHoverOut] = useGeminiHoverState();
  const [focused, onFocusIn, onFocusOut] = useFocusState();

  return {
    hovered,
    focused,
    onHoverIn,
    onHoverOut,
    onFocusIn,
    onFocusOut
  };
}

export default useHoverAndFocusState;
