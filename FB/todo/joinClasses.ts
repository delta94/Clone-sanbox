__d("joinClasses", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var b = a || ""
          , c = arguments.length <= 1 ? 0 : arguments.length - 1;
        for (var d = 0; d < c; d++) {
            var e = d + 1 < 1 || arguments.length <= d + 1 ? void 0 : arguments[d + 1];
            e != null && e !== "" && (b = (b ? b + " " : "") + e)
        }
        return b
    }
    f["default"] = a
}
), 66);

function joinClasses(...classNames: (string | undefined | null | false)[]): string {
    return classNames.filter(Boolean).join(' ');
  }
  
  export default joinClasses;
  