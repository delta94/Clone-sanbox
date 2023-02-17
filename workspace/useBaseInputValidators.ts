import React from "react"
import useIsPristineValue from "useIsPristineValue"
import validateBaseInput from "validateBaseInput"

const useBaseInputValidators = (params) => {
    const { isInitialValuePristine = true, validator, value } = params;
    const isPristine = useIsPristineValue(value, isInitialValuePristine);
    
    return React.useMemo(() => {
        return validateBaseInput(isPristine, value, validator);
    }, [isPristine, validator, value]);
};
    
    export default useBaseInputValidators;

// __d("useBaseInputValidators", ["react", "useIsPristineValue", "validateBaseInput"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react").useMemo;

//     function a(a) {
//         var b = a.isInitialValuePristine;
//         b = b === void 0 ? !0 : b;
//         var d = a.validator,
//             e = a.value,
//             f = c("useIsPristineValue")(e, b);
//         return h(function () {
//             return c("validateBaseInput")(f, e, d)
//         }, [f, d, e])
//     }
//     g["default"] = a
// }), 98);