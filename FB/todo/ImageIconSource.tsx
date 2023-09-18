__d("ImageIconSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c, d) {
        d === void 0 && (d = "cover"),
        this.$$typeof = "fb.imageiconsource",
        this.src = a,
        this.width = b,
        this.height = c,
        this.resizeStrategy = d
    }
    ;
    f["default"] = a
}
), 66);


class ImageIconSource {
    $$typeof: string;
    src: string;
    width: number;
    height: number;
    resizeStrategy: string;
  
    constructor(src: string, width: number, height: number, resizeStrategy: string = 'cover') {
      this.$$typeof = 'fb.imageiconsource';
      this.src = src;
      this.width = width;
      this.height = height;
      this.resizeStrategy = resizeStrategy;
    }
  }
  
  export default ImageIconSource;
  