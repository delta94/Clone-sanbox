import React, { useContext, useMemo, memo, forwardRef, BaseSyntheticEvent, AriaRole } from "react";
import stylex from 'stylex';
import { CometContainerPressableContext } from "CometContainerPressableContext" //done

const styles = stylex.create({
  root: {
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    touchAction: "manipulation",
    ":disabled": {
      cursor: "not-allowed"
    }
  },

  zIndex: {
    zIndex: 1
  }
});

const isRTL = false;

interface BaseInputReactProps {

  "aria-autocomplete"?: "none" | "both" | "inline" | "list"
  "aria-controls"?: string
  "aria-describedby"?: string
  "aria-expanded"?: boolean
  "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling"
  "aria-label"?: string

  autoComplete?: string
  autoFocus?: boolean
  checked?: boolean
  disabled?: boolean
  id?: string
  inputMode?: "text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal"
  name?: string
  maxLength?: number

  xstyle?: any
  type?: string
  onValueChange?: any

  onChange?: (e: BaseSyntheticEvent) => void,
  onClick?: (event: BaseSyntheticEvent) => void,
  onBlur?: (e: BaseSyntheticEvent) => void,
  onFocus?: (e: BaseSyntheticEvent) => void
  onMouseUp?: (e: BaseSyntheticEvent) => void

  placeholder?: string
  role?: AriaRole
  spellCheck?: boolean
  tabIndex?: number
}

const baseInputReact = (props: BaseInputReactProps, ref: any) => {

  const {
    onChange,
    onClick,
    onValueChange,
    type = 'text',
    xstyle,
    ...restProps
  } = props


  const inputType = useMemo(() => {
    switch (type) {
      case 'switch':
        return 'checkbox';
      default:
        return type;
    }
  }, [type]);

  const isCheckboxOrRadio = inputType === "checkbox" || inputType === "radio"
  const isTextarea = inputType === "textarea"
  const inPressableContext = useContext(CometContainerPressableContext) != null
s

  const inputProps = {
    ...restProps,
    className: stylex(styles.root, xstyle, inPressableContext && styles.zIndex),
    dir: isRTL ? 'rtl' : 'ltr',
    onChange: (event) => {
      !isCheckboxOrRadio && onValueChange && onValueChange(event.target.value, event);
      onChange && onChange(event);
    },
    onClick: (event) => {
      isCheckboxOrRadio && onValueChange && onValueChange(event.target.checked, event);
      onClick && onClick(event);
    },
    ref,
  };



  return isTextarea ? (
    <textarea
      {...Object.assign(
        {
          suppressHydrationWarning: true
        },
        inputProps,
        {
          ref
        }
      )}
    />
  ) : (
    <input
      {...Object.assign(
        {
          suppressHydrationWarning: true
        },
        inputProps,
        {
          ref,
          type: inputType,
        }
      )}
    />
  )
}

baseInputReact.displayName = `${baseInputReact.name} [from BaseInput.react]`

const BaseInputReact = memo(forwardRef(baseInputReact));
export default BaseInputReact;
export { baseInputReact }



// __d("BaseInput.react", ["CometContainerPressableContext", "Locale", "react", "stylex", "testID"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useContext,
//         j = b.useMemo,
//         k = {
//             root: {
//                 WebkitTapHighlightColor: "x1i10hfl",
//                 boxSizing: "x9f619",
//                 touchAction: "xggy1nq",
//                 ":disabled_cursor": "x1s07b3s",
//                 $$css: !0
//             },
//             zIndex: {
//                 zIndex: "x1vjfegm",
//                 $$css: !0
//             }
//         },
//         l = d("Locale").isRTL();

//     function a(a, b) {
//         var d = a.onChange,
//             e = a.onClick,
//             f = a.onValueChange,
//             g = a.testid,
//             m = a.type,
//             n = m === void 0 ? "text" : m;
//         m = a.xstyle;
//         a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange", "onClick", "onValueChange", "testid", "type", "xstyle"]);
//         var o = j(function () {
//                 switch (n) {
//                     case "switch":
//                         return "checkbox";
//                     default:
//                         return n
//                 }
//             }, [n]),
//             p = o === "checkbox" || o === "radio",
//             q = o === "textarea",
//             r = i(c("CometContainerPressableContext")) != null;
//         a = babelHelpers["extends"]({
//             dir: l ? "rtl" : "ltr"
//         }, a, c("testID")(g), {
//             className: c("stylex")(k.root, m, r && k.zIndex),
//             onChange: function (a) {
//                 p || f && f(a.target.value, a), d && d(a)
//             },
//             onClick: function (a) {
//                 p && (f && f(a.target.checked, a)), e && e(a)
//             }
//         });
//         return q ? h.jsx("textarea", babelHelpers["extends"]({
//             suppressHydrationWarning: !0
//         }, a, {
//             ref: b
//         })) : h.jsx("input", babelHelpers["extends"]({
//             suppressHydrationWarning: !0
//         }, a, {
//             ref: b,
//             type: o
//         }))
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = h.memo(h.forwardRef(a));
//     g["default"] = e
// }), 98);