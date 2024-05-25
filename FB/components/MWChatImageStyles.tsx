__d(
  "MWChatImageStyles",
  ["MWXMessageBubbleCornerStyles.react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c, e) {
      e = e === !0 ? "right" : "left";
      e = d("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
        align: e,
        connectBottom: a,
        connectTop: b,
        flatten: c === !0 ? "bottom" : "none",
      });
      c = d("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
        connectBottom: a,
        connectTop: b,
        corners: "unset",
      });
      return { imageStyles: e, insetShadowStyles: c };
    }
    g.calculateBorderStyles = a;
  },
  98
);

import { MWXMessageBubbleCornerStyles } from "MWXMessageBubbleCornerStyles.react";

interface BorderStyles {
  imageStyles: any; // Replace 'any' with the actual type if known
  insetShadowStyles: any; // Replace 'any' with the actual type if known
}

function calculateBorderStyles(
  connectBottom: boolean,
  connectTop: boolean,
  flatten?: boolean,
  outgoing?: boolean
): BorderStyles {
  const align = outgoing === true ? "right" : "left";
  const imageStyles = MWXMessageBubbleCornerStyles.getMWXBubbleCornerStyles({
    align,
    connectBottom,
    connectTop,
    flatten: flatten === true ? "bottom" : "none",
  });
  const insetShadowStyles =
    MWXMessageBubbleCornerStyles.getMWXBubbleCornerStyles({
      connectBottom,
      connectTop,
      corners: "unset",
    });
  return { imageStyles, insetShadowStyles };
}

export { calculateBorderStyles };
