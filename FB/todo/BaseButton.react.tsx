__d("BaseButton.react", ["BaseButtonPopoverContext", "Pressable.react", "PressableText.react", "react", "useFeedPressEventHandler"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext;

    function a(a, b) {
        var d = a.allowClickEventPropagation,
            e = a["aria-activedescendant"],
            f = a["aria-checked"],
            g = a["aria-controls"],
            j = a["aria-current"],
            k = a["aria-describedby"],
            l = a["aria-expanded"],
            m = a["aria-haspopup"],
            n = a["aria-hidden"],
            o = a["aria-invalid"],
            p = a["aria-label"],
            q = a["aria-labelledby"],
            r = a["aria-pressed"],
            s = a["aria-selected"],
            t = a.children,
            u = a.className_DEPRECATED,
            v = a.disabled;
        v = v === void 0 ? !1 : v;
        var w = a.display;
        w = w === void 0 ? "inline" : w;
        var x = a.focusable,
            y = a.id,
            z = a.label,
            A = a.onBlur,
            B = a.onClick,
            C = a.onContextMenu,
            D = a.onFocus,
            E = a.onFocusChange,
            F = a.onFocusVisibleChange,
            G = a.onHoverChange,
            H = a.onHoverEnd,
            I = a.onHoverStart,
            J = a.onPressChange,
            K = a.onPressEnd,
            L = a.onPressStart,
            M = a.preventContextMenu,
            N = a.role,
            O = a.style,
            P = a.suppressFocusRing,
            Q = a.suppressHydrationWarning,
            R = a.testid,
            S = a.testOnly_pressed;
        S = S === void 0 ? !1 : S;
        a = a.xstyle;
        N = N === "presentation" ? "none" : N;
        p = N !== "none" ? (p = p) != null ? p : z : void 0;
        z = b;
        b = B;
        var T = L,
            U = C;
        b = c("useFeedPressEventHandler")(B);
        T = c("useFeedPressEventHandler")(L);
        U = c("useFeedPressEventHandler")(C);
        B = i(c("BaseButtonPopoverContext"));
        L = {
            accessibilityLabel: p,
            accessibilityRelationship: {
                activedescendant: e,
                controls: g,
                current: j,
                describedby: k,
                haspopup: B != null && m == null ? B.haspopup : m,
                labelledby: q
            },
            accessibilityState: {
                checked: f,
                disabled: v,
                expanded: B != null && l == null ? B.expanded : l,
                hidden: n,
                invalid: o,
                pressed: r,
                selected: s
            },
            className_DEPRECATED: u,
            disabled: v,
            forwardedRef: z,
            nativeID: y,
            onBlur: A,
            onContextMenu: U,
            onFocus: D,
            onFocusChange: E,
            onFocusVisibleChange: F,
            onHoverChange: G,
            onHoverEnd: H,
            onHoverStart: I,
            onPress: b,
            onPressChange: J,
            onPressEnd: K,
            onPressStart: T,
            preventContextMenu: M,
            style: O,
            suppressHydrationWarning: Q,
            testID: R,
            testOnly_state: {
                disabled: !1,
                focused: !1,
                focusVisible: !1,
                hovered: !1,
                pressed: S
            },
            xstyle: a
        };
        if (w === "block") {
            C = N === "menuitem" || N === "none" || N === "gridcell" || N === "switch" || N === "combobox" || N === "checkbox" || N === "tab" || N === "radio" || N === "option" ? N : "button";
            return h.jsx(c("Pressable.react"), babelHelpers["extends"]({}, L, {
                accessibilityRole: C,
                allowClickEventPropagation: d,
                suppressFocusRing: P,
                tabbable: x,
                children: t
            }))
        } else {
            p = N === "combobox" || N === "menuitem" || N === "menuitemcheckbox" || N === "menuitemradio" || N === "option" || N === "none" || N === "tab" ? N : "button";
            return h.jsx(c("PressableText.react"), babelHelpers["extends"]({
                focusable: x
            }, L, {
                accessibilityRole: p,
                direction: "none",
                suppressFocusRing: P,
                children: t
            }))
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);



import React, { useContext, forwardRef, ReactNode } from 'react';
import { BaseButtonPopoverContext } from './BaseButtonPopoverContext'; // Replace with the correct import path
import { useFeedPressEventHandler } from './useFeedPressEventHandler'; // Replace with the correct import path
import { Pressable } from './Pressable'; // Replace with the correct import path
import { PressableText } from './PressableText'; // Replace with the correct import path

type BaseButtonProps = {
  allowClickEventPropagation?: boolean;
  "aria-activedescendant"?: string;
  "aria-checked"?: boolean;
  "aria-controls"?: string;
  "aria-current"?: string;
  "aria-describedby"?: string;
  "aria-expanded"?: boolean;
  "aria-haspopup"?: string;
  "aria-hidden"?: boolean;
  "aria-invalid"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-pressed"?: string;
  "aria-selected"?: boolean;
  children?: ReactNode;
  className_DEPRECATED?: string;
  disabled?: boolean;
  display?: string;
  focusable?: boolean;
  id?: string;
  label?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onContextMenu?: () => void;
  onFocus?: () => void;
  onFocusChange?: () => void;
  onFocusVisibleChange?: () => void;
  onHoverChange?: () => void;
  onHoverEnd?: () => void;
  onHoverStart?: () => void;
  onPressChange?: () => void;
  onPressEnd?: () => void;
  onPressStart?: () => void;
  preventContextMenu?: boolean;
  role?: string;
  style?: React.CSSProperties;
  suppressFocusRing?: boolean;
  suppressHydrationWarning?: boolean;
  testid?: string;
  testOnly_pressed?: boolean;
  xstyle?: any; // Replace with the correct type
};

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const {
    allowClickEventPropagation,
    activedescendant,
    ariaChecked,
    ariaControls,
    ariaCurrent,
    ariaDescribedby,
    ariaExpanded,
    ariaHaspopup,
    ariaHidden,
    ariaInvalid,
    ariaLabel,
    ariaLabelledby,
    ariaPressed,
    ariaSelected,
    children,
    className_DEPRECATED,
    disabled = false,
    display = "inline",
    focusable,
    id,
    label,
    onBlur,
    onClick,
    onContextMenu,
    onFocus,
    onFocusChange,
    onFocusVisibleChange,
    onHoverChange,
    onHoverEnd,
    onHoverStart,
    onPressChange,
    onPressEnd,
    onPressStart,
    preventContextMenu,
    role,
    style,
    suppressFocusRing,
    suppressHydrationWarning,
    testid,
    testOnly_pressed = false,
    xstyle,
  } = props;

  const buttonPopoverContext = useContext(BaseButtonPopoverContext);

  const pressEventHandler = useFeedPressEventHandler(onClick);
  const pressStartEventHandler = useFeedPressEventHandler(onPressStart);
  const contextMenuEventHandler = useFeedPressEventHandler(onContextMenu);

  const accessibilityLabel = role !== "none" ? (ariaLabel ?? label) : undefined;

  const btnProps = {
    accessibilityLabel,
    accessibilityRelationship: {
        activedescendant,
        controls: ariaControls,
        current: ariaCurrent,
        describedby: ariaDescribedby,
        haspopup: buttonPopoverContext != null && ariaHaspopup == null ? buttonPopoverContext.haspopup : ariaHaspopup,
        labelledby: ariaLabelledby
    },
    accessibilityState: {
        checked: ariaChecked,
        disabled,
        expanded: buttonPopoverContext != null && ariaExpanded == null ? buttonPopoverContext.expanded : ariaExpanded,
        hidden: ariaHidden,
        invalid: ariaInvalid,
        pressed: ariaPressed,
        selected: ariaSelected
    },
    className_DEPRECATED,
    disabled,
    forwardedRef: ref,
    nativeID: id,
    onBlur,
    onContextMenu: contextMenuEventHandler,
    onFocus,
    onFocusChange,
    onFocusVisibleChange,
    onHoverChange,
    onHoverEnd,
    onHoverStart,
    onPress: pressEventHandler,
    onPressChange,
    onPressEnd,
    onPressStart: pressStartEventHandler,
    preventContextMenu,
    style,
    suppressHydrationWarning,
    testID: testid,
    testOnly_state: {
        disabled: !1,
        focused: !1,
        focusVisible: !1,
        hovered: !1,
        pressed: testOnly_pressed
    },
    xstyle
};

  if (display === "block") {
    const accessibilityRole =
      role === "menuitem" || role === "none" || role === "gridcell" || role === "switch" || role === "combobox" || role === "checkbox" || role === "tab" || role === "radio" || role === "option" ? role : "button";

    return (
      <Pressable
      {...btnProps}
        accessibilityRole={accessibilityRole}
        allowClickEventPropagation={allowClickEventPropagation}
        suppressFocusRing={suppressFocusRing}
        tabbable={focusable}
      >
        {children}
      </Pressable>
    );
  } else {
    const accessibilityRole =
      role === "combobox" || role === "menuitem" || role === "menuitemcheckbox" || role === "menuitemradio" || role === "option" || role === "none" || role === "tab" ? role : "button";

    return (
      <PressableText
        {...btnProps}
        focusable={focusable}
        accessibilityRole={accessibilityRole}
        direction="none"
        suppressFocusRing={suppressFocusRing}
      >
        {children}
      </PressableText>
    );
  }
});

BaseButton.displayName = "BaseButton";

export { BaseButton };
