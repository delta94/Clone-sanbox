__d("focusKeyboardEventPropagation", [], (function(a, b, c, d, e, f) {
  "use strict";
  function a(a) {
      return a._stopFocusKeyboardPropagation === !0
  }
  function b(a) {
      a._stopFocusKeyboardPropagation = !0
  }
  f.hasFocusKeyboardEventPropagationStopped = a;
  f.stopFocusKeyboardEventPropagation = b
}
), 66);



export function hasFocusKeyboardEventPropagationStopped(event: Event): boolean {
  return (event as any)._stopFocusKeyboardPropagation === true;
}

export function stopFocusKeyboardEventPropagation(event: Event): void {
  (event as any)._stopFocusKeyboardPropagation = true;
}
