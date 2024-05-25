__d(
  "useMWMessageListAttachmentDimensions",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useMemo;
    function a(a, b) {
      return i(
        function () {
          var c = b.previewWidthLarge,
            d = b.previewHeightLarge;
          return c != null && d != null && a === "Inbox"
            ? [c, d]
            : [b.previewWidth, b.previewHeight];
        },
        [a, b]
      );
    }
    g["default"] = a;
  },
  98
);

import { useMemo } from "react";

interface AttachmentDimensions {
  previewWidth: number | null;
  previewHeight: number | null;
  previewWidthLarge: number | null;
  previewHeightLarge: number | null;
}

type InboxType = "Inbox" | string;

function useMWMessageListAttachmentDimensions(
  type: InboxType,
  dimensions: AttachmentDimensions
): [number | null, number | null] {
  return useMemo(() => {
    const {
      previewWidthLarge,
      previewHeightLarge,
      previewWidth,
      previewHeight,
    } = dimensions;
    if (
      type === "Inbox" &&
      previewWidthLarge != null &&
      previewHeightLarge != null
    ) {
      return [previewWidthLarge, previewHeightLarge];
    } else {
      return [previewWidth, previewHeight];
    }
  }, [type, dimensions]);
}

export default useMWMessageListAttachmentDimensions;
