__d("PressableText.react", ["BaseFocusRing.react", "Pressability", "PressableGroupContext", "RecoverableViolationWithComponentStack.react", "UserAgent", "cr:7332", "gkx", "joinClasses", "justknobx", "passiveEventListenerUtil", "react", "stylex", "useCometErrorProject", "useMergeRefs"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
        j = e.useContext,
        k = e.useEffect,
        l = e.useRef,
        m = e.useState,
        n = c("UserAgent").isBrowser("Safari") || c("UserAgent").isBrowser("Mobile Safari"),
        o = ["menuitem", "tab", "none"],
        p = {
            article: "article",
            banner: "header",
            complementary: "aside",
            contentinfo: "footer",
            figure: "figure",
            form: "form",
            heading: "h1",
            label: "label",
            link: "a",
            list: "ul",
            listitem: "li",
            main: "main",
            navigation: "nav",
            none: "div",
            region: "section"
        };

    function q(a, b) {
        var c = "div";
        if ((b == null ? void 0 : b.url) != null && (b == null ? void 0 : b.url) !== "#" || o.includes(a) && (b == null ? void 0 : b.url) != null) c = "a";
        else if (a != null) {
            b = p[a];
            b != null && (c = b)
        }
        return c
    }
    var r = function (a) {
        var b = a.target,
            c = b.tagName;
        c = b.isContentEditable || c === "A" && b.href != null || c === "BUTTON" || c === "INPUT" || c === "SELECT" || c === "TEXTAREA";
        if (b.tabIndex === 0 && !c) {
            c = a.key;
            if (c === "Enter") return !0;
            a = b.getAttribute("role");
            if ((c === " " || c === "Spacebar") && (a === "button" || a === "combobox" || a === "menuitem" || a === "menuitemradio" || a === "option")) return !0
        }
        return !1
    };

    function s(a) {
        return typeof document !== "undefined" && typeof document.contains === "function" ? document.contains(a) : !1
    }

    function t(a) {
        a = a;
        while (a != null) {
            if (a.tagName === "A" && a.href != null) return !0;
            a = a.parentNode
        }
        return !1
    }

    function u(a, b) {
        var d = a.altKey,
            e = a.ctrlKey,
            f = a.currentTarget,
            g = a.metaKey,
            h = a.shiftKey;
        a = a.target;
        var i = a;
        c("justknobx")._("450") && (i = s(a) ? a : f);
        a = t(i);
        f = d || e || g || h;
        return b !== !1 && a && !f
    }
    var v = (e = b("cr:7332")) != null ? e : function (a, b, c) {
        k(function () {
            var e, f = a.current,
                g = (e = window) == null ? void 0 : (e = e.document) == null ? void 0 : e.body;
            if (g == null || f == null || !s(f) || f.addEventListener == null) return;
            b && b.register(f, c);
            var h = function (a) {
                    b && (a.preventDefault(), b.onTouchStart());
                    if (!n) return;
                    if (g == null) return;
                    g.style.WebkitUserSelect = "none";
                    var c = d("passiveEventListenerUtil").makeEventOptions({
                        passive: !0
                    });
                    a = function a() {
                        g.style.WebkitUserSelect = null, document.removeEventListener("touchend", a, c)
                    };
                    document.addEventListener("touchend", a, c)
                },
                i = d("passiveEventListenerUtil").makeEventOptions({
                    passive: !b
                });
            f.addEventListener("touchstart", h, i);
            return function () {
                b && b.unRegister(f), f.removeEventListener("touchstart", h, i)
            }
        }, [b, c, a])
    };

    function a(a) {
        var b = l(null),
            e = m(!1),
            f = e[0];
        e = e[1];
        var g = m(!1),
            k = g[0];
        g = g[1];
        var n = m(!1),
            o = n[0];
        n = n[1];
        var p = m(!1),
            s = p[0];
        p = p[1];
        var t = j(c("PressableGroupContext")),
            y = a.accessibilityLabel,
            z = a.accessibilityRelationship,
            A = a.accessibilityRole,
            B = a.accessibilityState,
            C = a.children,
            D = a.className_DEPRECATED,
            E = a.direction,
            F = a.disabled,
            G = a.focusable,
            H = a.forwardedRef,
            I = a.link,
            J = a.nativeID,
            K = a.onBlur,
            L = a.onContextMenu,
            M = a.onFocus,
            N = a.onFocusChange,
            O = a.onFocusVisibleChange,
            P = a.onHoverChange,
            aa = a.onHoverEnd,
            ba = a.onHoverMove,
            ca = a.onHoverStart,
            Q = a.onPress,
            da = a.onPressChange,
            ea = a.onPressEnd,
            fa = a.onPressMove,
            ga = a.onPressStart,
            ha = a.preventContextMenu,
            R = a.preventDefault,
            ia = a.selectable,
            S = a.style,
            T = a.suppressFocusRing,
            U = a.testID;
        U = a.testOnly_state;
        var V = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["accessibilityLabel", "accessibilityRelationship", "accessibilityRole", "accessibilityState", "children", "className_DEPRECATED", "direction", "disabled", "focusable", "forwardedRef", "link", "nativeID", "onBlur", "onContextMenu", "onFocus", "onFocusChange", "onFocusVisibleChange", "onHoverChange", "onHoverEnd", "onHoverMove", "onHoverStart", "onPress", "onPressChange", "onPressEnd", "onPressMove", "onPressStart", "preventContextMenu", "preventDefault", "selectable", "style", "suppressFocusRing", "testID", "testOnly_state", "xstyle"]);
        var W = q(A, I);
        F = F === !0 || (B == null ? void 0 : B.disabled) === !0;
        var X = B == null ? void 0 : B.hidden,
            Y = W === "a" && F !== !0;
        f = {
            disabled: F === !0 || (U == null ? void 0 : U.disabled) === !0 || !1,
            focused: f || (U == null ? void 0 : U.focused) === !0,
            focusVisible: k && T !== !0 || (U == null ? void 0 : U.focusVisible) === !0,
            hovered: o || (U == null ? void 0 : U.hovered) === !0,
            pressed: s || (U == null ? void 0 : U.pressed) === !0
        };
        k = typeof C === "function" ? C(f) : C;
        T = typeof D === "function" ? D(f) : D;
        o = typeof S === "function" ? S(f) : S;
        s = typeof V === "function" ? V(f) : V;
        d("Pressability").usePressability(b, {
            disabled: F,
            onBlur: K,
            onContextMenu: L,
            onFocus: M,
            onFocusChange: w(e, N),
            onFocusVisibleChange: w(g, O),
            onHoverChange: w(n, P),
            onHoverEnd: aa,
            onHoverMove: ba,
            onHoverStart: ca,
            onPressChange: w(p, da),
            onPressEnd: ea,
            onPressMove: fa,
            onPressStart: ga,
            preventContextMenu: ha,
            preventDefault: R == null ? !0 : R
        });
        U = i(function (a) {
            Q && Q(a), (Q || I != null) && a.stopPropagation(), u(a, R) && a.nativeEvent.preventDefault()
        }, [I, Q, R]);
        C = i(function (a) {
            if (r(a)) {
                var b = a.key;
                (b === " " || b === "Spacebar") && a.preventDefault();
                Q && (Q(a), a.stopPropagation())
            }
        }, [Q]);
        var ja, Z;
        switch (E) {
            case "none":
                break;
            default:
                E != null && (Z = E);
                break
        }
        D = c("useMergeRefs")(b, H);
        v(b, t, U);
        var $;
        S = W === "a" || A === "button";
        S ? X === !0 || G === !1 || !c("gkx")("5403") && F === !0 ? $ = -1 : $ = 0 : c("gkx")("5403") ? X !== !0 && G !== !1 && A !== "none" && ($ = 0) : F !== !0 && X !== !0 && G !== !1 && A !== "none" && ($ = 0);
        V = I == null ? void 0 : I.download;
        K = (V === !0 || typeof V === "string") && Y;
        L = A === "none" ? "presentation" : A;
        M = h.jsx(W, babelHelpers["extends"]({}, a, {
            "aria-activedescendant": z == null ? void 0 : z.activedescendant,
            "aria-busy": B == null ? void 0 : B.busy,
            "aria-checked": B == null ? void 0 : B.checked,
            "aria-controls": z == null ? void 0 : z.controls,
            "aria-current": z == null ? void 0 : z.current,
            "aria-describedby": z == null ? void 0 : z.describedby,
            "aria-details": z == null ? void 0 : z.details,
            "aria-disabled": F === !0 && L !== "presentation" ? F : void 0,
            "aria-expanded": B == null ? void 0 : B.expanded,
            "aria-haspopup": z == null ? void 0 : z.haspopup,
            "aria-hidden": X,
            "aria-invalid": B == null ? void 0 : B.invalid,
            "aria-label": y,
            "aria-labelledby": z == null ? void 0 : z.labelledby,
            "aria-owns": z == null ? void 0 : z.owns,
            "aria-pressed": B == null ? void 0 : B.pressed,
            "aria-readonly": B == null ? void 0 : B.readonly,
            "aria-required": B == null ? void 0 : B.required,
            "aria-selected": B == null ? void 0 : B.selected,
            attributionsrc: Y ? I == null ? void 0 : I.attributionsrc : void 0,
            children: k,
            className: c("joinClasses")(c("stylex")(x.root, ia === !1 && x.notSelectable, f.disabled && x.disabled, !f.focusVisible && x.focusNotVisible, f.focusVisible && S && c("BaseFocusRing.react").linkFocusRingXStyle, s, t && x.rootInGroup), T),
            "data-testid": void 0,
            dir: Z,
            download: K ? V : void 0,
            href: Y ? I == null ? void 0 : I.url : void 0,
            id: J,
            onClick: F ? void 0 : U,
            onKeyDown: F ? void 0 : C,
            ref: D,
            rel: Y ? I == null ? void 0 : I.rel : void 0,
            role: L,
            style: o,
            tabIndex: $,
            target: Y ? I == null ? void 0 : I.target : void 0
        }));
        return M
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function w(a, b) {
        return i(function (c) {
            a(c), b && b(c)
        }, [b, a])
    }
    b = {
        disabled: {
            cursor: "x1h6gzvc",
            $$css: !0
        },
        focusNotVisible: {
            outline: "x1a2a7pz",
            $$css: !0
        },
        notSelectable: {
            userSelect: "x87ps6o",
            $$css: !0
        },
        root: {
            WebkitTapHighlightColor: "x1i10hfl",
            backgroundColor: "xjbqb8w",
            borderTop: "x6umtig",
            borderEnd: "x1b1mbwd",
            borderBottom: "xaqea5y",
            borderStart: "xav7gou",
            boxSizing: "x9f619",
            cursor: "x1ypdohk",
            display: "xt0psk2",
            listStyle: "xe8uvvx",
            marginTop: "xdj266r",
            marginEnd: "x11i5rnm",
            marginBottom: "xat24cr",
            marginStart: "x1mh8g0r",
            paddingTop: "xexx8yu",
            paddingEnd: "x4uap5",
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            textAlign: "x16tdsg8",
            textDecoration: "x1hl2dhg",
            touchAction: "xggy1nq",
            $$css: !0
        },
        rootInGroup: {
            touchAction: "x5ve5x3",
            $$css: !0
        }
    };
    e = {
        root: {
            WebkitTapHighlightColor: "x1i10hfl",
            backgroundColor: "xjbqb8w",
            borderTopWidth: "x972fbf",
            borderEndWidth: "xcfux6l",
            borderBottomWidth: "x1qhh985",
            borderStartWidth: "xm0m39n",
            boxSizing: "x9f619",
            cursor: "x1ypdohk",
            display: "xt0psk2",
            listStyle: "xe8uvvx",
            marginTop: "xdj266r",
            marginEnd: "x11i5rnm",
            marginBottom: "xat24cr",
            marginStart: "x1mh8g0r",
            paddingTop: "xexx8yu",
            paddingEnd: "x4uap5",
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            textAlign: "x16tdsg8",
            textDecoration: "x1hl2dhg",
            touchAction: "xggy1nq",
            $$css: !0
        }
    };
    var x = c("gkx")("4855") ? babelHelpers["extends"]({}, b, e) : b;
    g["default"] = a
}), 98);


import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { isBrowser } from 'UserAgent'; // Assuming this module exists
import { usePressability } from 'Pressability'; // Assuming this module exists
import { makeEventOptions, passiveEventListenerUtil } from 'passiveEventListenerUtil'; // Assuming these modules exist
import { useMergeRefs } from 'useMergeRefs'; // Assuming this module exists
import joinClasses from 'joinClasses'; // Assuming this module exists
import BaseFocusRing from 'BaseFocusRing.react'; // Assuming this module exists

interface PressableTextProps {
    url?: string;
  }

const isSafari = isBrowser('Safari') || isBrowser('Mobile Safari');
const allowedRoles = ['menuitem', 'tab', 'none'];

const roleMapping: Record<string, string> = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  figure: 'figure',
  form: 'form',
  heading: 'h1',
  label: 'label',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  none: 'div',
  region: 'section',
};

function getTagName(role: string | undefined, props: PressableTextProps | null): string {
    let tagName = 'div';
  
    if (props?.url != null && props.url !== '#') {
      tagName = 'a';
    } else if (role != null) {
      const mappedRole = roleMapping[role];
      if (mappedRole != null) {
        tagName = mappedRole;
      }
    }
  
    return tagName;
}

const _handleKeyDown = (event) => {
    const { target, key } = event;
    const isContentEditable = target.isContentEditable || (target.tagName === 'A' && target.href != null) || target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA';
    if (target.tabIndex === 0 && !isContentEditable) {
      if (key === 'Enter') {
        return true;
      }
      const role = target.getAttribute('role');
      if ((key === ' ' || key === 'Spacebar') && (role === 'button' || role === 'combobox' || role === 'menuitem' || role === 'menuitemradio' || role === 'option')) {
        return true;
      }
    }
    return false;
};

function isNodeInDocument(node) {
    return typeof document !== 'undefined' && typeof document.contains === 'function' ? document.contains(node) : false;
}
  
function isNodeInsideLink(node) {
    let currentNode = node;
    while (currentNode != null) {
      if (currentNode.tagName === 'A' && currentNode.href != null) {
        return true;
      }
      currentNode = currentNode.parentNode;
    }
    return false;
}

function shouldHandleClick(event, preventDefault) {
    const { altKey, ctrlKey, metaKey, shiftKey, target, currentTarget } = event;
    const targetNode = window['justknobx']['_']('450') ? (isNodeInDocument(target) ? target : currentTarget) : target;
    const isLink = isNodeInsideLink(targetNode);
    const isModifierKey = altKey || ctrlKey || metaKey || shiftKey;
    return preventDefault !== false && isLink && !isModifierKey;
}

const setupTouchStartListener = (elementRef, context, callback) => {
    useEffect(() => {
      const element = elementRef.current;
      const body = window?.document?.body;
      if (body == null || element == null || !isNodeInDocument(element) || element.addEventListener == null) {
        return;
      }
      if (context) {
        context.register(element, callback);
      }
      const onTouchStart = () => {
        if (!isBrowser) {
          return;
        }
        if (body == null) {
          return;
        }
        body.style.WebkitUserSelect = 'none';
        const eventOptions = {
          passive: true,
        };
        const onTouchEnd = () => {
          body.style.WebkitUserSelect = null;
          document.removeEventListener('touchend', onTouchEnd, eventOptions);
        };
        document.addEventListener('touchend', onTouchEnd, eventOptions);
      };
      const eventOptions = {
        passive: !context,
      };
      element.addEventListener('touchstart', onTouchStart, eventOptions);
      return () => {
        if (context) {
            context.unRegister(element);
        }
        element.removeEventListener('touchstart', onTouchStart, eventOptions);
      };
    }, [context, callback, elementRef]);
};

const composeCallbacks = (callbackA, callbackB) => {
    return useCallback(
      (arg) => {
        callbackA(arg);
        if (callbackB) {
          callbackB(arg);
        }
      },
      [callbackB, callbackA]
    );
  };


const PressableText: React.FC<PressableTextProps>  = (props) => {
  const {
    accessibilityLabel,
    accessibilityRelationship,
    accessibilityRole,
    accessibilityState,
    children,
    className_DEPRECATED,
    direction,
    disabled,
    focusable,
    forwardedRef,
    link,
    nativeID,
    onBlur,
    onContextMenu,
    onFocus,
    onFocusChange,
    onFocusVisibleChange,
    onHoverChange,
    onHoverEnd,
    onHoverMove,
    onHoverStart,
    onPress,
    onPressChange,
    onPressEnd,
    onPressMove,
    onPressStart,
    preventContextMenu,
    preventDefault,
    selectable,
    style,
    suppressFocusRing,
    testID,
    testOnly_state,
    xstyle,
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const pressableRef = useRef(null);

  const groupContext = useContext(PressableGroupContext);

  const tagName = getTagName(accessibilityRole, link);

  const isDisabled = disabled === true || (accessibilityState && accessibilityState.disabled === true);
  const isLink = tagName === "a" && !isDisabled;
  const hidden = accessibilityState?.hidden
  const state = {
    disabled: isDisabled || (testOnly_state?.disabled === true) || false,
    focused: focused || (testOnly_state?.focused === true),
    focusVisible: focusVisible && suppressFocusRing !== true || (testOnly_state?.focusVisible === true),
    hovered: hovered || (testOnly_state?.hovered === true),
    pressed: pressed || (testOnly_state?.pressed === true),
  };

  const content = typeof children === "function" ? children(state) : children;
  const _className = typeof className_DEPRECATED === "function" ? className_DEPRECATED(state) : className_DEPRECATED;
  const inlineStyle = typeof style === "function" ? style(state) : style;
  const xstyleResult = typeof xstyle === "function" ? xstyle(state) : xstyle;

  usePressability(pressableRef, {
    disabled: isDisabled,
    onBlur,
    onContextMenu,
    onFocus,
    onFocusChange: composeCallbacks(setFocused, onFocusChange),
    onFocusVisibleChange: composeCallbacks(setFocusVisible, onFocusVisibleChange),
    onHoverChange: composeCallbacks(setHovered, onHoverChange),
    onHoverEnd,
    onHoverMove,
    onHoverStart,
    onPressChange: composeCallbacks(setPressed, onPressChange),
    onPressEnd,
    onPressMove,
    onPressStart,
    preventContextMenu,
    preventDefault: preventDefault == null ? true : preventDefault,
  });

  const handlePress = useCallback((event) => {
    onPress && onPress(event);
    (onPress || link != null) && event.stopPropagation();
    shouldHandleClick(event, preventDefault) && event.nativeEvent.preventDefault();
    
  }, [link, onPress, preventDefault]);

  const handleKeyDown = useCallback((event) => {
    if (_handleKeyDown(event)) {
      const key = event.key;
      if (key === ' ' || key === 'Spacebar') {
        event.preventDefault();
      }
      onPress && onPress(event);
      event.stopPropagation();
    }
  }, [onPress]);


  let dir;

  switch (direction) {
    case 'none':
      break;
    default:
      dir = direction;
      break;
  }

  const mergedRefs = useMergeRefs(pressableRef, forwardedRef);

  setupTouchStartListener(pressableRef, groupContext, handlePress);

  let tabIndexValue;
  const isLinkOrButton = tagName === 'a' || accessibilityRole === 'button';
  
  if (isLinkOrButton) {
    if (hidden || (!focusable && (c("gkx")("5403") || isDisabled))) {
      tabIndexValue = -1;
    } else {
      tabIndexValue = 0;
    }
  } else {
    if (c("gkx")("5403")) {
      if (!hidden && !focusable && accessibilityRole !== 'none') {
        tabIndexValue = 0;
      }
    } else {
      if (!isDisabled && !hidden && !focusable && accessibilityRole !== 'none') {
        tabIndexValue = 0;
      }
    }
  }

  const downloadAttribute = link?.download;
  const shouldSetDownloadAttribute = (downloadAttribute === true || typeof downloadAttribute === 'string') && isLinkOrButton;

  const role = accessibilityRole === 'none' ? 'presentation' : accessibilityRole;

  const PressableComponent = (
    <tagName
      aria-activedescendant={accessibilityRelationship?.activedescendant}
      aria-busy={accessibilityState?.busy}
      aria-checked={accessibilityState?.checked}
      aria-controls={accessibilityRelationship?.controls}
      aria-current={accessibilityRelationship?.current}
      aria-describedby={accessibilityRelationship?.describedby}
      aria-details={accessibilityRelationship?.details}
      aria-disabled={disabled === true && role !== 'presentation' ? disabled : undefined}
      aria-expanded={accessibilityState?.expanded}
      aria-haspopup={accessibilityRelationship?.haspopup}
      aria-hidden={hidden}
      aria-invalid={accessibilityState?.invalid}
      aria-label={accessibilityLabel}
      aria-labelledby={accessibilityRelationship?.labelledby}
      aria-owns={accessibilityRelationship?.owns}
      aria-pressed={accessibilityState?.pressed}
      aria-readonly={accessibilityState?.readonly}
      aria-required={accessibilityState?.required}
      aria-selected={accessibilityState?.selected}
      attributionsrc={isLinkOrButton && link?.attributionsrc}
      children={children}
      className={joinClasses(
        stylex(
          mergedStyles.root,
          !selectable && mergedStyles.notSelectable,
          state.disabled && mergedStyles.disabled,
          !state.focusVisible && mergedStyles.focusNotVisible,
          state.focusVisible && isLinkOrButton && BaseFocusRing.linkFocusRingXStyle,
          xstyleResult,
          groupContext && mergedStyles.rootInGroup
        ),
        suppressFocusRing
      )}
      data-testid={undefined}
      dir={direction}
      download={shouldSetDownloadAttribute ? downloadAttribute : undefined}
      href={isLink ? (link?.url): undefined}
      id={nativeID}
      onClick={disabled ? undefined : handlePress}
      onKeyDown={disabled ? undefined : handleKeyDown}
      ref={mergedRefs}
      rel={isLink ? (link?.rel) : undefined}
      role={role}
      style={style}
      tabIndex={tabIndexValue}
      target={isLink ? (link?.target) : undefined}
      {...props}
    />
  );
  return PressableComponent;
};

const rootWithDisabledStyles = {
    disabled: {
        cursor: "x1h6gzvc",
        $$css: !0
    },
    focusNotVisible: {
        outline: "x1a2a7pz",
        $$css: !0
    },
    notSelectable: {
        userSelect: "x87ps6o",
        $$css: !0
    },
    root: {
        WebkitTapHighlightColor: "x1i10hfl",
        backgroundColor: "xjbqb8w",
        borderTop: "x6umtig",
        borderEnd: "x1b1mbwd",
        borderBottom: "xaqea5y",
        borderStart: "xav7gou",
        boxSizing: "x9f619",
        cursor: "x1ypdohk",
        display: "xt0psk2",
        listStyle: "xe8uvvx",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        textAlign: "x16tdsg8",
        textDecoration: "x1hl2dhg",
        touchAction: "xggy1nq",
        $$css: !0
    },
    rootInGroup: {
        touchAction: "x5ve5x3",
        $$css: !0
    }
};
const rootStyles = {
    root: {
        WebkitTapHighlightColor: "x1i10hfl",
        backgroundColor: "xjbqb8w",
        borderTopWidth: "x972fbf",
        borderEndWidth: "xcfux6l",
        borderBottomWidth: "x1qhh985",
        borderStartWidth: "xm0m39n",
        boxSizing: "x9f619",
        cursor: "x1ypdohk",
        display: "xt0psk2",
        listStyle: "xe8uvvx",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        textAlign: "x16tdsg8",
        textDecoration: "x1hl2dhg",
        touchAction: "xggy1nq",
        $$css: !0
    }
};

const isGkx4855Enabled = c("gkx")("4855");
const mergedStyles = isGkx4855Enabled ? { ...rootWithDisabledStyles, ...rootStyles } : rootWithDisabledStyles; 

export default PressableText;
