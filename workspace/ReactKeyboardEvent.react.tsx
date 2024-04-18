__d("ReactKeyboardEvent.react", ["ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
  "use strict";
  var h, i = (h || d("react")).useEffect, j = {
      passive: !0
  };
  function a(a, b) {
      var d = b.disabled
        , e = d === void 0 ? !1 : d
        , f = b.onKeyDown
        , g = b.onKeyUp
        , h = c("ReactUseEvent.react")("keydown")
        , k = c("ReactUseEvent.react")("keyup", j);
      i(function() {
          var b = a.current;
          b !== null && (h.setListener(b, !e && f || null),
          k.setListener(b, !e && g || null))
      }, [e, f, h, k, a, g])
  }
  g.useKeyboard = a
}
), 98);


import React, { useEffect, useRef } from 'react';
import { UseEvent } from 'ReactUseEvent.react'; // Replace with correct path

interface KeyboardEventProps {
  disabled?: boolean;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}

export function useKeyboard(
  ref: React.MutableRefObject<HTMLElement | null>,
  { disabled = false, onKeyDown, onKeyUp }: KeyboardEventProps
): void {
  const keyDownEvent = UseEvent('keydown');
  const keyUpEvent = UseEvent('keyup', { passive: true });

  useEffect(() => {
    const element = ref.current;

    if (element !== null) {
      keyDownEvent.setListener(element, !disabled && onKeyDown ? onKeyDown : null);
      keyUpEvent.setListener(element, !disabled && onKeyUp ? onKeyUp : null);
    }
  }, [disabled, onKeyDown, onKeyUp, keyDownEvent, keyUpEvent, ref]);
}
