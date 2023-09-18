__d("IconSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c) {
        this.$$typeof = "fb.iconsource",
        this.src = b,
        this.size = c
    }
    ;
    f["default"] = a
}
), 66);


class IconSource {
    $$typeof: string;
    src: string;
    size: number;
  
    constructor(src: string, size: number) {
      this.$$typeof = 'fb.iconsource';
      this.src = src;
      this.size = size;
    }
  }
  
  export default IconSource;
  