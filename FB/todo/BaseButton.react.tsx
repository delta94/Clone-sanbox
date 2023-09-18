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