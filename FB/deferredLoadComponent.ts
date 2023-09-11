// __d("deferredLoadComponent", ["deferredLoadComponentBase"], (function (a, b, c, d, e, f, g) {
//     var h = function (a) {
//         return a
//     };

//     function a(a) {
//         return c("deferredLoadComponentBase")(a, h)
//     }
//     g["default"] = a
// }), 98);


import deferredLoadComponentBase from 'deferredLoadComponentBase';

const identity = (x) => x;

function deferredLoadComponent(module) {
  return deferredLoadComponentBase(module, identity);
}

export default deferredLoadComponent;
