__d(
  "VisualCompletionAttributes",
  ["VisualCompletionConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = {
      IGNORE:
        ((a = {}),
        (a[(h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME] =
          h.IGNORE),
        a),
      IGNORE_DYNAMIC: ((b = {}), (b[h.ATTRIBUTE_NAME] = h.IGNORE_DYNAMIC), b),
      IGNORE_LATE_MUTATION:
        ((d = {}), (d[h.ATTRIBUTE_NAME] = h.IGNORE_LATE_MUTATION), d),
      LOADING_STATE: ((e = {}), (e[h.ATTRIBUTE_NAME] = h.LOADING_STATE), e),
      MEDIA_VC_IMAGE: ((f = {}), (f[h.ATTRIBUTE_NAME] = h.MEDIA_VC_IMAGE), f),
      CSS_IMG: ((c = {}), (c[h.ATTRIBUTE_NAME] = h.CSS_IMG), c),
    };
    g["default"] = a;
  },
  98
);

import VisualCompletionConstants from "VisualCompletionConstants";

const VisualCompletionAttributes = {
  IGNORE: {
    [VisualCompletionConstants.ATTRIBUTE_NAME]:
      VisualCompletionConstants.IGNORE,
  },
  IGNORE_DYNAMIC: {
    [VisualCompletionConstants.ATTRIBUTE_NAME]:
      VisualCompletionConstants.IGNORE_DYNAMIC,
  },
  IGNORE_LATE_MUTATION: {
    [VisualCompletionConstants.ATTRIBUTE_NAME]:
      VisualCompletionConstants.IGNORE_LATE_MUTATION,
  },
  LOADING_STATE: {
    [VisualCompletionConstants.ATTRIBUTE_NAME]:
      VisualCompletionConstants.LOADING_STATE,
  },
  MEDIA_VC_IMAGE: {
    [VisualCompletionConstants.ATTRIBUTE_NAME]:
      VisualCompletionConstants.MEDIA_VC_IMAGE,
  },
  CSS_IMG: {
    [VisualCompletionConstants.ATTRIBUTE_NAME]:
      VisualCompletionConstants.CSS_IMG,
  },
};

export default VisualCompletionAttributes;
