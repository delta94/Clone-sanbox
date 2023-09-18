__d("coerceImageishURL", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a && typeof a === "object" && !a.sprited && typeof a.uri === "string" && a.width !== void 0 && a.height !== void 0)
            return a;
        else
            return null
    }
    f["default"] = a
}
), 66);


interface ImageishURL {
    uri: string;
    width?: number;
    height?: number;
    sprited?: boolean;
    // Add any other properties if necessary
  }
  
  function coerceImageishURL(image: ImageishURL | null): ImageishURL | null {
    if (
      image &&
      typeof image === "object" &&
      !image.sprited &&
      typeof image.uri === "string" &&
      image.width !== undefined &&
      image.height !== undefined
    ) {
      return image;
    } else {
      return null;
    }
  }
  
  export default coerceImageishURL;
  