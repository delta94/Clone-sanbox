__d("getIntersectionMarginFromViewportMargin", [], (function (a, b, c, d, e, f) {
    "use strict";
    var g = new Map();

    function a(a) {
        var b = "bottom:" + a.bottom + "|top:" + a.top + "|left:" + a.left + "|right:" + a.right,
            c = g.get(b);
        c == null && (c = {
            bottom: a.bottom * -1,
            left: a.left * -1,
            right: a.right * -1,
            top: a.top * -1
        }, g.set(b, c));
        return c
    }
    f["default"] = a
}), 66);

type ViewportMargin = {
    bottom: number;
    top: number;
    left: number;
    right: number;
  };
  
  const marginCache: Map<string, ViewportMargin> = new Map();
  
  function getIntersectionMarginFromViewportMargin(margin: ViewportMargin): ViewportMargin {
    const marginKey = `bottom:${margin.bottom}|top:${margin.top}|left:${margin.left}|right:${margin.right}`;
    let cachedMargin = marginCache.get(marginKey);
  
    if (cachedMargin === undefined) {
      cachedMargin = {
        bottom: margin.bottom * -1,
        left: margin.left * -1,
        right: margin.right * -1,
        top: margin.top * -1,
      };
      marginCache.set(marginKey, cachedMargin);
    }
  
    return cachedMargin;
  }
  
  export default getIntersectionMarginFromViewportMargin;
  