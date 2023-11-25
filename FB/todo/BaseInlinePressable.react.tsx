__d("BaseInlinePressable.react", ["CometPressable.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"),
        j = {
            defaultCursor: {
                cursor: "xt0e3qv",
                $$css: !0
            },
            disabled: {
                textDecoration: "x1hl2dhg",
                $$css: !0
            },
            disabledColor: {
                color: "x1dntmbh",
                $$css: !0
            },
            disabledLink: {
                opacity: "xbyyjgo",
                $$css: !0
            },
            expanding: {
                display: "x3nfvp2",
                $$css: !0
            },
            link: {
                ":hover_textDecoration": "xt0b8zv",
                $$css: !0
            },
            linkColor: {
                color: "x1fey0fg",
                $$css: !0
            },
            root: {
                display: "xt0psk2",
                position: "x1n2onr6",
                userSelect: "x87ps6o",
                $$css: !0
            }
        };

    function a(a, b) {
        var d = a.ariaLabel,
            e = a.children,
            f = a.color;
        f = f === void 0 ? "blue" : f;
        var g = a.cursorDisabled,
            h = a.expanding;
        h = h === void 0 ? !1 : h;
        var k = a.linkProps,
            l = a.onPress,
            m = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["ariaLabel", "children", "color", "cursorDisabled", "expanding", "linkProps", "onPress", "xstyle"]);
        var n = [j.root, g === !0 && j.defaultCursor, h && j.expanding, m],
            o = f !== "inherit" && (k != null || l != null);
        return i.jsx(c("CometPressable.react"), babelHelpers["extends"]({
            "aria-label": d,
            linkProps: k,
            onPress: l,
            overlayDisabled: !0
        }, a, {
            ref: b,
            xstyle: function (a) {
                var b = a.disabled;
                a = a.hovered;
                return [n, o && j.linkColor, a && !b && j.link, b && j.disabled, b && !o && j.disabledColor, b && o && j.disabledLink]
            },
            children: e
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b
}), 98);


import React, { forwardRef } from 'react';
import { CometPressable } from 'CometPressable.react';

interface BaseInlinePressableProps {
  ariaLabel?: string;
  children: React.ReactNode;
  color?: 'blue' | 'inherit';
  cursorDisabled?: boolean;
  expanding?: boolean; 
  linkProps?: Record<string, unknown>;
  onPress?: () => void;
  xstyle?: Record<string, unknown>;
}

const styles = {
  defaultCursor: {
    cursor: 'default',
    $$css: true  
  },
  disabled: {
    textDecoration: 'line-through',
    $$css: true
  },
  disabledColor: {
    color: 'gray',
    $$css: true
  },
  disabledLink: {
    opacity: 0.5,
    $$css: true
  },
  expanding: {
    display: 'flex', 
    $$css: true
  },
  link: {
    ':hover_textDecoration': 'underline',
    $$css: true
  },
  linkColor: {
    color: 'blue',
    $$css: true
  },
  root: {
    display: 'inline',
    position: 'relative',
    userSelect: 'none',
    $$css: true
  }
};

const BaseInlinePressable = forwardRef<HTMLButtonElement, BaseInlinePressableProps>(
  (props, ref) => {
    const {
      ariaLabel,
      children,
      color = 'blue',
      cursorDisabled,
      expanding = false,
      linkProps,
      onPress,
      xstyle,
      ...otherProps
    } = props;

    const style = [
      styles.root,
      cursorDisabled === true && styles.defaultCursor,
      expanding && styles.expanding,
      xstyle
    ];

    const isLink = color !== 'inherit' || linkProps != null || onPress != null;

    return (
      <CometPressable
        aria-label={ariaLabel}
        linkProps={linkProps}
        onPress={onPress}
        overlayDisabled
        ref={ref}
        {...otherProps}
        xstyle={(theme) => {
          const disabled = theme.disabled;
          const hovered = theme.hovered;

          return [
            style,
            isLink && styles.linkColor,
            hovered && !disabled && styles.link, 
            disabled && styles.disabled,
            disabled && !isLink && styles.disabledColor,
            disabled && isLink && styles.disabledLink,
          ];
        }}
      >
        {children}
      </CometPressable>
    );
  }
);

export default BaseInlinePressable;