__d("getImageSourceURLFromImageish", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (typeof a === "string") return a;
        return a != null && typeof a === "object" && (!a.sprited && a.uri && typeof a.uri === "string") ? a.uri : ""
    }
    f["default"] = a
}), 66);

type Imageish = 
  | string
  | {
      sprited?: boolean;
      uri?: string;
    };

function getImageSourceURLFromImageish(imageish: Imageish): string {
  if (typeof imageish === 'string') {
    return imageish;
  }

  if (
    imageish != null && 
    typeof imageish === 'object' &&
    !imageish.sprited &&
    imageish.uri &&
    typeof imageish.uri === 'string'
  ) {
    return imageish.uri;
  }

  return '';
}

export default getImageSourceURLFromImageish;