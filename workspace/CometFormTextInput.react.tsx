import React, { useState,forwardRef } from "react";
import BaseTextInput from "BaseTextInput.react";
import CometFormInputPasswordStateIcon from "CometFormInputPasswordStateIcon.react";
import CometFormInputWrapper from "CometFormInputWrapper.react";
import CometIcon from "CometIcon.react";
import CometPressable from "CometPressable.react"; // done
import { useBaseInputValidators } from "useBaseInputValidators"; // done

const cssStyles = {
    disabled: {
        backgroundColor: "x443n21",
        color: "x1dntmbh",
        cursor: "x1h6gzvc",
        $$css: !0
    },
    emoji: {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        paddingStart: "x1ye3gou",
        pointerEvents: "x47corl",
        $$css: !0
    },
    icon: {
        paddingStart: "x1swvt13",
        paddingTop: "x109j2v6",
        pointerEvents: "x47corl",
        $$css: !0
    },
    input: {
        backgroundColor: "xjbqb8w",
        borderTop: "x76ihet",
        borderEnd: "xwmqs3e",
        borderBottom: "x112ta8",
        borderStart: "xxxdfa6",
        boxSizing: "x9f619",
        color: "xzsf02u",
        fontSize: "x1uxerd5",
        fontWeight: "x1fcty0u",
        lineHeight: "x132q4wb",
        paddingBottom: "x1a8lsjc",
        paddingEnd: "x1pi30zi",
        paddingStart: "x1swvt13",
        paddingTop: "x9desvi",
        width: "xh8yej3",
        "::-ms-clear_display": "x15h3p50",
        "::-ms-reveal_display": "x10emqs4",
        $$css: !0
    }
};

const CometFormTextInput = forwardRef(({
  autoComplete,
  autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
  auxContent,
  disabled = false,
  emojiSkittle,
  helperText,
  helperTextIsHidden = false,
  icon,
  inputMode,
  label,
  labelRef,
  maxLength,
  onBlur,
  onClick,
  onFocus,
  onValueChange,
  placeholder,
  readOnly,
  suppressFocusRing,
  testid,
  type = "text",
  validationState,
  validator,
  value,
  xstyle,
  ...rest
},ref) => {
  const { topResultReason, topResultType } = useBaseInputValidators({
    validator,
    value: value || "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const isPassword = type === "password";

  const passwordToggle =
    isPassword && Boolean(value)
      ? (
        <div className="x78zum5">
          <div className="x1pi30zi x109j2v6">
            <CometPressable
              onPress={() => setPasswordVisible(!isPasswordVisible)}
              overlayDisabled
              children={
                <CometFormInputPasswordStateIcon isVisible={isPasswordVisible} />
              }
            />
          </div>
        </div>
      )
      : null;

      const inputType = isPassword ? (isPasswordVisible ? "text" : "password") : type;
      const validation = topResultType !== "CORRECT" ? topResultType : validationState;
  
    return (
        <CometFormInputWrapper
            addOnStart={
                icon != null ? (
                <div className="x1swvt13 x109j2v6 x47corl">
                    <CometIcon color="secondary" icon={icon} />
                </div>
                ) : emojiSkittle != null ? (
                <div className="x6s0dn4 x78zum5 xl56j7k x1ye3gou x47corl">
                    {emojiSkittle}
                </div>
                ) : null
            }
            auxContent={
                isPassword && value
                  ? (
                    passwordToggle
                  )
                  : auxContent
              }
            cursor="text"
            disabled={disabled}
            helperText={helperText}
            helperTextIsHidden={helperTextIsHidden}
            label={label}
            labelRef={labelRef}
            suppressFocusRing={suppressFocusRing}
            validationState={validation}
            value={value}
        >
            {({ focused, helperTextID, id }) => (
                <BaseTextInput
                    aria-describedby={helperTextID}
                    aria-invalid={validation === 'ERROR'}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD}
                    disabled={disabled}
                    id={id}
                    inputMode={inputMode}
                    maxLength={maxLength}
                    onBlur={onBlur}
                    onClick={onClick}
                    onFocus={onFocus}
                    onValueChange={onValueChange}
                    placeholder={focused ? placeholder : null}
                    readOnly={readOnly}
                    ref={ref}
                    suppressFocusRing
                    testid={undefined}
                    type={inputType}
                    value={value}
                    xstyle={[cssStyles.input, disabled && cssStyles.disabled, readOnly && cssStyles.disabled, xstyle]}
                    {...rest}
                />
            )}
        </CometFormInputWrapper>
    )

})

export default CometFormTextInput;



// __d("CometFormTextInput.react", ["BaseTextInput.react", "CometFormInputPasswordStateIcon.react", "CometFormInputWrapper.react", "CometIcon.react", "CometPressable.react", "react", "useBaseInputValidators"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react"),
//         i = d("react").useState,
//         j = {
//             disabled: {
//                 backgroundColor: "x443n21",
//                 color: "x1dntmbh",
//                 cursor: "x1h6gzvc",
//                 $$css: !0
//             },
//             emoji: {
//                 alignItems: "x6s0dn4",
//                 display: "x78zum5",
//                 justifyContent: "xl56j7k",
//                 paddingStart: "x1ye3gou",
//                 pointerEvents: "x47corl",
//                 $$css: !0
//             },
//             icon: {
//                 paddingStart: "x1swvt13",
//                 paddingTop: "x109j2v6",
//                 pointerEvents: "x47corl",
//                 $$css: !0
//             },
//             input: {
//                 backgroundColor: "xjbqb8w",
//                 borderTop: "x76ihet",
//                 borderEnd: "xwmqs3e",
//                 borderBottom: "x112ta8",
//                 borderStart: "xxxdfa6",
//                 boxSizing: "x9f619",
//                 color: "xzsf02u",
//                 fontSize: "x1uxerd5",
//                 fontWeight: "x1fcty0u",
//                 lineHeight: "x132q4wb",
//                 paddingBottom: "x1a8lsjc",
//                 paddingEnd: "x1pi30zi",
//                 paddingStart: "x1swvt13",
//                 paddingTop: "x9desvi",
//                 width: "xh8yej3",
//                 "::-ms-clear_display": "x15h3p50",
//                 "::-ms-reveal_display": "x10emqs4",
//                 $$css: !0
//             }
//         };

//     function a(a, b) {
//         var d = a.autoComplete,
//             e = a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
//             f = a.auxContent,
//             g = a.disabled,
//             k = g === void 0 ? !1 : g;
//         g = a.emojiSkittle;
//         var l = a.helperText,
//             m = a.helperTextIsHidden;
//         m = m === void 0 ? !1 : m;
//         var n = a.icon,
//             o = a.inputMode,
//             p = a.label,
//             q = a.labelRef,
//             r = a.maxLength,
//             s = a.onBlur,
//             t = a.onClick,
//             u = a.onFocus,
//             v = a.onValueChange,
//             w = a.placeholder,
//             x = a.readOnly,
//             y = a.suppressFocusRing,
//             z = a.testid;
//         z = a.type;
//         z = z === void 0 ? "text" : z;
//         var A = a.validationState,
//             B = a.validator,
//             C = a.value,
//             D = a.xstyle,
//             E = babelHelpers.objectWithoutPropertiesLoose(a, ["autoComplete", "autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD", "auxContent", "disabled", "emojiSkittle", "helperText", "helperTextIsHidden", "icon", "inputMode", "label", "labelRef", "maxLength", "onBlur", "onClick", "onFocus", "onValueChange", "placeholder", "readOnly", "suppressFocusRing", "testid", "type", "validationState", "validator", "value", "xstyle"]);
//         B = c("useBaseInputValidators")({
//             validator: B,
//             value: (a = C) != null ? a : ""
//         });
//         a = B.topResultReason;
//         B = B.topResultType;
//         var F = z === "password",
//             G = i(!1),
//             H = G[0],
//             I = G[1];
//         G = F && Boolean(C);
//         G = G ? h.jsx("div", {
//             className: "x78zum5",
//             children: h.jsx("div", {
//                 className: "x1pi30zi x109j2v6",
//                 children: h.jsx(c("CometPressable.react"), {
//                     onPress: function () {
//                         return I(!H)
//                     },
//                     overlayDisabled: !0,
//                     children: h.jsx(c("CometFormInputPasswordStateIcon.react"), {
//                         isVisible: H
//                     })
//                 })
//             })
//         }) : null;
//         var J = F ? H ? "text" : "password" : z,
//             K = B !== "CORRECT" ? B : A;
//         return h.jsx(c("CometFormInputWrapper.react"), {
//             addOnStart: n != null && h.jsx("div", {
//                 className: "x1swvt13 x109j2v6 x47corl",
//                 children: h.jsx(c("CometIcon.react"), {
//                     color: "secondary",
//                     icon: n
//                 })
//             }) || g != null && h.jsx("div", {
//                 className: "x6s0dn4 x78zum5 xl56j7k x1ye3gou x47corl",
//                 children: g
//             }),
//             auxContent: (F = G) != null ? F : f,
//             cursor: "text",
//             disabled: k,
//             helperText: a != null ? a : l,
//             helperTextIsHidden: m,
//             label: p,
//             labelRef: q,
//             suppressFocusRing: y,
//             validationState: K,
//             value: C,
//             children: function (a) {
//                 var f = a.focused,
//                     g = a.helperTextID;
//                 a = a.id;
//                 return h.jsx(c("BaseTextInput.react"), babelHelpers["extends"]({
//                     "aria-describedby": g,
//                     "aria-invalid": K === "ERROR",
//                     autoComplete: d,
//                     autoFocus: e,
//                     disabled: k,
//                     id: a,
//                     inputMode: o,
//                     maxLength: r,
//                     onBlur: s,
//                     onClick: t,
//                     onFocus: u,
//                     onValueChange: v,
//                     placeholder: f ? w : null,
//                     readOnly: x,
//                     ref: b,
//                     suppressFocusRing: !0,
//                     testid: void 0,
//                     type: J,
//                     value: C,
//                     xstyle: [j.input, k && j.disabled, x != null && x === !0 && j.disabled, D]
//                 }, E))
//             }
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     b = h.forwardRef(a);
//     g["default"] = b
// }), 98);