// __d("CAAWebGating", ["qex"], (function (a, b, c, d, e, f, g) {
//     "use strict";

//     function a() {
//         return c("qex")._("974") === !0
//     }

//     function b() {
//         return c("qex")._("120") === !0
//     }
//     g.showCAAFBMSGR = a;
//     g.showCAAFBLoggedOutHeader = b
// }), 98);


import { qex } from 'qex'; // Replace with actual import

export function showCAAFBMSGR() {
  return qex._("974") === true;
}

export function showCAAFBLoggedOutHeader() {
  return qex._("120") === true;
}
