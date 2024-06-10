__d(
  "MWXThreadThemeColor",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a) {
      this.color = a;
    };
    function a(a) {
      return new g(a);
    }
    f.MWXThreadThemeColor = g;
    f.mwxThreadThemeColor = a;
  },
  66
);

class MWXThreadThemeColor {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

function mwxThreadThemeColor(color: string): MWXThreadThemeColor {
  return new MWXThreadThemeColor(color);
}

export { MWXThreadThemeColor, mwxThreadThemeColor };
