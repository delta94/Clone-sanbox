import processBaseInputValidators from "processBaseInputValidators"

const validateBaseInput = (isPristine, value, validator) => {
    let allResults = validator && !isPristine ? processBaseInputValidators(value, validator) : [];
    if (allResults.length === 0) {
        return {
            allResults: allResults,
            topResultReason: null,
            topResultType: "CORRECT"
        };
    }
    let hasError = allResults.some(result => result.type === "ERROR");
    let topResult = allResults.find(result => result.type === (hasError ? "ERROR" : "WARN")) || null;
    return {
        allResults: allResults,
        topResultReason: topResult && topResult.reason ? topResult.reason : null,
        topResultType: topResult ? topResult.type : "CORRECT"
    };
};

export default validateBaseInput;


// __d("validateBaseInput", ["processBaseInputValidators"], (function (a, b, c, d, e, f, g) {
//     "use strict";

//     function a(a, b, d) {
//         a = d != null && !a ? c("processBaseInputValidators")(b, d) : [];
//         if (a.length === 0) return {
//             allResults: a,
//             topResultReason: null,
//             topResultType: "CORRECT"
//         };
//         var e = a.some(function (a) {
//             return a.type === "ERROR"
//         });
//         d = (b = a.find(function (a) {
//             return a.type === (e ? "ERROR" : "WARN")
//         })) != null ? b : null;
//         return {
//             allResults: a,
//             topResultReason: d != null && d.reason != null ? d.reason : null,
//             topResultType: d != null ? d.type : "CORRECT"
//         }
//     }
//     g["default"] = a
// }), 98);