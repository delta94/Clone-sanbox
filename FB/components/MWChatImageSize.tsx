__d(
  "MWChatImageSize",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a, b, c) {
      var d = b != null ? b : !1,
        e = j();
      c = k();
      b = c[0];
      var f = c[1];
      i(
        function () {
          if (a == null) return;
          if (e.current == null && !d) {
            var b = new Image();
            b.src = a;
            b.onload = function () {
              return f({ height: b.naturalHeight, width: b.naturalWidth });
            };
            e.current = b;
          }
          return function () {
            f(function () {});
            var a = e.current;
            if (a == null) return;
            a.onload = null;
          };
        },
        [a, d, f]
      );
      return b;
    }
    g.useImageSize = a;
  },
  98
);

import React, { useEffect, useRef, useState } from "react";

interface ImageSize {
  height: number;
  width: number;
}

const useImageSize = (
  src: string | null,
  shouldLoadImmediately: boolean = false
): ImageSize | undefined => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [size, setSize] = useState<ImageSize | undefined>(undefined);

  useEffect(() => {
    if (src == null) return;

    if (imageRef.current == null && !shouldLoadImmediately) {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        setSize({ height: img.naturalHeight, width: img.naturalWidth });
      imageRef.current = img;
    }

    return () => {
      setSize(undefined);
      const img = imageRef.current;
      if (img == null) return;
      img.onload = null;
    };
  }, [src, shouldLoadImmediately]);

  return size;
};

export { useImageSize };
