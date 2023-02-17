import React, { useState } from 'react';
import stylex from 'stylex';
import BaseFocusRing from 'BaseFocusRing.react'; // done
import CometCompositeItemFocusIndicator from 'CometCompositeItemFocusIndicator.react';
import { IGNORE } from 'CometVisualCompletionAttributes'; // done


const s = {
    circle: {
        borderTopStartRadius: "x14yjl9h",
        borderTopEndRadius: "xudhj91",
        borderBottomEndRadius: "x18nykt9",
        borderBottomStartRadius: "xww2gxu",
        $$css: !0
    },
    defaultHoveredStyle: {
        backgroundColor: "x1wpzbip",
        $$css: !0
    },
    defaultPressedStyle: {
        backgroundColor: "x1iutvsz",
        $$css: !0
    },
    overlay: {
        borderTopStartRadius: "x1o1ewxj",
        borderTopEndRadius: "x3x9cwd",
        borderBottomEndRadius: "x1e5q0jg",
        borderBottomStartRadius: "x13rtm0m",
        bottom: "x1ey2m1c",
        end: "xds687c",
        opacity: "xg01cxk",
        pointerEvents: "x47corl",
        position: "x10l6tqk",
        start: "x17qophe",
        top: "x13vifvy",
        transitionDuration: "x1ebt8du",
        transitionProperty: "x19991ni",
        transitionTimingFunction: "x1dhq9h",
        $$css: !0
    },
    overlayVisible: {
        opacity: "x1hc1fzr",
        transitionDuration: "x1mq3mr6",
        $$css: !0
    }
};

const CometPressableOverlay = (props) => {
  const [state, setState] = useState();

  const {
    focusVisible = false,
    focusRingPosition = 'default',
    hovered = false,
    hoveredStyle = s.defaultHoveredStyle,
    offset,
    pressed = false,
    pressedStyle = s.defaultPressedStyle,
    radius,
    focusVisibleStyle = hoveredStyle,
    showGridSignifiers = false,
    showFocusRing = false
  } = props;

  if (pressed) {
    state !== 'pressed' && setState('pressed');
  } else if (focusVisible) {
    state !== 'focused' && setState('focused');
  } else if (hovered) {
    state !== 'hovered' && setState('hovered');
  }

  let bottom, left, right, top;
  if (offset != null) {
    if (typeof offset === 'number') {
      bottom = -offset;
      left = -offset;
      right = -offset;
      top = -offset;
    } else {
      bottom = -offset.bottom;
      left = -offset.left;
      right = -offset.right;
      top = -offset.top;
    }
  }

  return (
    <div
      className={stylex(
        s.overlay,
        (pressed || focusVisible || hovered || showGridSignifiers) && s.overlayVisible,
        state === 'pressed' && pressedStyle,
        state === 'focused' && focusVisibleStyle,
        state === 'hovered' && hoveredStyle,
        state === 'focused' && showFocusRing
          ? focusRingPosition === 'default'
            ? BaseFocusRing.focusRingXStyle
            : BaseFocusRing.focusRingInsetXStyle
          : void 0,
        radius === '50%' && s.circle
      )}
      {...IGNORE}
      style={
        state != null
          ? {
              borderRadius: typeof radius === 'number' ? radius : void 0,
              bottom,
              left,
              right,
              top
            }
          : void 0
      }
    >
      {showGridSignifiers ? <CometCompositeItemFocusIndicator /> : null}
    </div>
  );
};

export default CometPressableOverlay;