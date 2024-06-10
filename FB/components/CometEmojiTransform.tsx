__d(
  "CometEmojiTransform",
  [
    "CometEmojiWithContextualSize.react",
    "EmojiRenderer",
    "baseTextTransformAllStrings",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a, b) {
      a = a === void 0 ? {} : a;
      var e = a.size;
      return function (a) {
        var f = 0;
        return c("baseTextTransformAllStrings")(
          a,
          function (a, b) {
            return d("EmojiRenderer").render(a, function (a) {
              return i.jsx(
                c("CometEmojiWithContextualSize.react"),
                { emoji: a, size: e },
                b + "-" + f++
              );
            });
          },
          b
        );
      };
    }
    g["default"] = a;
  },
  98
);

import React from "react";
import CometEmojiWithContextualSize from "CometEmojiWithContextualSize.react";
import { EmojiRenderer } from "EmojiRenderer";
import baseTextTransformAllStrings from "baseTextTransformAllStrings";

type CometEmojiTransformProps = {
  size?: string;
};

function CometEmojiTransform(
  props: CometEmojiTransformProps = {}
): (input: any) => any {
  const { size } = props;
  return function (input: any): any {
    let keyIndex = 0;
    return baseTextTransformAllStrings(
      input,
      (text: string, key: string) => {
        return EmojiRenderer.render(text, (emoji: string) => {
          return (
            <CometEmojiWithContextualSize
              emoji={emoji}
              size={size}
              key={`${key}-${keyIndex++}`}
            />
          );
        });
      },
      keyIndex
    );
  };
}

export default CometEmojiTransform;
