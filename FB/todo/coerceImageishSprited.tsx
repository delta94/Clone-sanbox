__d("coerceImageishSprited", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (!a || typeof a !== "object" || !a.sprited)
            return null;
        return a.sprited === 1 ? {
            type: "css",
            className: a.spriteMapCssClass + " " + a.spriteCssClass,
            identifier: a.loggingID
        } : {
            type: "cssless",
            style: {
                backgroundImage: "url('" + a.spi + "')",
                backgroundPosition: a.p,
                backgroundSize: a.sz,
                width: a.w + "px",
                height: a.h + "px",
                backgroundRepeat: "no-repeat",
                display: "inline-block"
            },
            identifier: a.loggingID
        }
    }
    f["default"] = a
}
), 66);


interface SpritedImage {
    sprited: number;
    spriteMapCssClass: string;
    spriteCssClass: string;
    loggingID: string;
    spi: string;
    p: string;
    sz: string;
    w: number;
    h: number;
  }
  
  type CoercedImage = {
    type: "css";
    className: string;
    identifier: string;
  } | {
    type: "cssless";
    style: {
      backgroundImage: string;
      backgroundPosition: string;
      backgroundSize: string;
      width: string;
      height: string;
      backgroundRepeat: string;
      display: string;
    };
    identifier: string;
  } | null;
  
  function coerceImageishSprited(image: SpritedImage | null): CoercedImage {
    if (!image || typeof image !== "object" || !image.sprited) {
      return null;
    }
  
    return image.sprited === 1 ? {
      type: "css",
      className: `${image.spriteMapCssClass} ${image.spriteCssClass}`,
      identifier: image.loggingID
    } : {
      type: "cssless",
      style: {
        backgroundImage: `url('${image.spi}')`,
        backgroundPosition: image.p,
        backgroundSize: image.sz,
        width: `${image.w}px`,
        height: `${image.h}px`,
        backgroundRepeat: "no-repeat",
        display: "inline-block"
      },
      identifier: image.loggingID
    };
  }
  
  export default coerceImageishSprited;
  