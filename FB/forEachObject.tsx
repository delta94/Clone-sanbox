__d("forEachObject", [], (function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;

    function a(a, b, c) {
        for (var d in a) {
            var e = d;
            g.call(a, e) && b.call(c, a[e], e, a)
        }
    }
    f["default"] = a
}), 66);


const forEachObject = (obj, callback, context) => {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        callback.call(context, obj[key], key, obj);
      }
    }
  };
  
export default forEachObject;
  