__d("WebPressability", ["ReactContextMenuEvent.react", "ReactFocusEvent.react", "ReactHoverEvent.react", "ReactPressEvent.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
        var c = b.disabled
          , e = b.onBlur
          , f = b.onContextMenu
          , g = b.onFocus
          , h = b.onFocusChange
          , i = b.onFocusVisibleChange
          , j = b.onHoverChange
          , k = b.onHoverEnd
          , l = b.onHoverMove
          , m = b.onHoverStart
          , n = b.onPressChange
          , o = b.onPressEnd
          , p = b.onPressMove
          , q = b.onPressStart;
        b = b.preventContextMenu;
        d("ReactHoverEvent.react").useHover(a, {
            disabled: c,
            onHoverChange: j,
            onHoverEnd: k,
            onHoverMove: l,
            onHoverStart: m
        });
        d("ReactPressEvent.react").usePress(a, {
            disabled: c,
            onPressChange: n,
            onPressEnd: o,
            onPressMove: p,
            onPressStart: q
        });
        d("ReactFocusEvent.react").useFocus(a, {
            disabled: c,
            onBlur: e,
            onFocus: g,
            onFocusChange: h,
            onFocusVisibleChange: i
        });
        d("ReactContextMenuEvent.react").useContextMenu(a, {
            disabled: c,
            onContextMenu: f,
            preventDefault: b || !1
        })
    }
    g.usePressability = a
}
), 98);


import {
    useContextMenu,
    useFocus,
    useHover,
    usePress,
  } from 'WebPressability';
  
  interface PressabilityOptions {
    disabled?: boolean;
    onBlur?: (event: React.FocusEvent) => void;
    onContextMenu?: (event: React.MouseEvent) => void;
    onFocus?: (event: React.FocusEvent) => void;
    onFocusChange?: (isFocused: boolean) => void;
    onFocusVisibleChange?: (isVisible: boolean) => void;
    onHoverChange?: (isHovered: boolean) => void;
    onHoverEnd?: () => void;
    onHoverMove?: () => void;
    onHoverStart?: () => void;
    onPressChange?: (isPressed: boolean) => void;
    onPressEnd?: () => void;
    onPressMove?: () => void;
    onPressStart?: () => void;
    preventContextMenu?: boolean;
  }
  
  export function usePressability(
    targetElement: HTMLElement | null,
    options: PressabilityOptions
  ) {
    const {
      disabled,
      onBlur,
      onContextMenu,
      onFocus,
      onFocusChange,
      onFocusVisibleChange,
      onHoverChange,
      onHoverEnd,
      onHoverMove,
      onHoverStart,
      onPressChange,
      onPressEnd,
      onPressMove,
      onPressStart,
      preventContextMenu,
    } = options;
  
    useHover(targetElement, {
      disabled,
      onHoverChange,
      onHoverEnd,
      onHoverMove,
      onHoverStart,
    });
  
    usePress(targetElement, {
      disabled,
      onPressChange,
      onPressEnd,
      onPressMove,
      onPressStart,
    });
  
    useFocus(targetElement, {
      disabled,
      onBlur,
      onFocus,
      onFocusChange,
      onFocusVisibleChange,
    });
  
    useContextMenu(targetElement, {
      disabled,
      onContextMenu,
      preventDefault: preventContextMenu || false,
    });
  }
  