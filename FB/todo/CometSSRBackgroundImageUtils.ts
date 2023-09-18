__d("CometSSRBackgroundImageUtils", ["CometSSRPreloadImageCollection", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        var b;
        if (a === null || c("ExecutionEnvironment").canUseDOM)
            return;
        b = (b = (b = a.spi) != null ? b : a._spi) != null ? b : a.uri;
        if (!b)
            return;
        d("CometSSRPreloadImageCollection").addImage(b)
    }
    g.processSpritedImagesForSSRPreload = a
}
), 98);


import ExecutionEnvironment from 'ExecutionEnvironment'; // You might need to replace this with the actual import
import { CometSSRPreloadImageCollection } from 'CometSSRPreloadImageCollection'; // You might need to replace this with the actual import

function processSpritedImagesForSSRPreload(imageInfo) {
  if (imageInfo === null || ExecutionEnvironment.canUseDOM) {
    return;
  }

  let uri = imageInfo.uri || imageInfo.spi || imageInfo._spi;

  if (!uri) {
    return;
  }

  CometSSRPreloadImageCollection.addImage(uri);
}

export { processSpritedImagesForSSRPreload };
