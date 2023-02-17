

// __d("processBaseInputValidators", [], (function (a, b, c, d, e, f) {
//     "use strict";

//     function g(a, b) {
//         if (typeof b === "function") return [b(a)];
//         var c = [];
//         for (b of b) Array.isArray(b) ? c.push.apply(c, g(a, b)) : typeof b === "function" && c.push(b(a));
//         return c.filter(function (a) {
//             return a.type !== "CORRECT"
//         })
//     }
//     f["default"] = g
// }), 66);


const processBaseInputValidators = (value, validators) => {
    if (typeof validators === "function") {
      return [validators(value)];
    }
    let results = [];
    for (let validator of validators) {
      if (Array.isArray(validator)) {
        results.push(...processBaseInputValidators(value, validator));
      } else if (typeof validator === "function") {
        results.push(validator(value));
      }
    }
    return results.filter(result => result.type !== "CORRECT");
  };
  
  export default processBaseInputValidators;