__d(
  "filterNulls",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e != null && b.push(e);
      }
      return b;
    }
    f["default"] = a;
  },
  66
);

function filterNulls<T>(array: (T | null | undefined)[]): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (item != null) {
      result.push(item);
    }
  }
  return result;
}

export default filterNulls;
