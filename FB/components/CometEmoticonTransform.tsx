__d(
  "CometEmoticonTransform",
  [
    "CometEmojiWithContextualSize.react",
    "EmoticonRenderer",
    "FBEmojiResource",
    "FBEmojiUtils",
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
            return d("EmoticonRenderer").render(
              a,
              function (a) {
                return i.jsx(
                  c("CometEmojiWithContextualSize.react"),
                  {
                    emoji: [
                      d("FBEmojiUtils").codepointsToString(
                        a.split("_").map(function (a) {
                          return Number("0x" + a);
                        })
                      ),
                    ],
                    resource: new (c("FBEmojiResource"))(a),
                    size: e,
                  },
                  b + "-" + f++
                );
              },
              function (a, d) {
                return i.jsx(
                  c("CometEmojiWithContextualSize.react"),
                  {
                    emoji: d,
                    resource: new (c("FBEmojiResource"))(a),
                    size: e,
                  },
                  b + "-" + f++
                );
              }
            );
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
import EmoticonRenderer from "EmoticonRenderer";
import FBEmojiResource from "FBEmojiResource";
import FBEmojiUtils from "FBEmojiUtils";
import baseTextTransformAllStrings from "baseTextTransformAllStrings";

interface CometEmoticonTransformProps {
  size?: string;
}

const CometEmoticonTransform = ({ size }: CometEmoticonTransformProps = {}) => {
  let count = 0;

  return (text: string, key: string) => {
    return baseTextTransformAllStrings(
      text,
      (match: string, matchKey: string) => {
        return EmoticonRenderer.render(
          match,
          (emoji: string) => (
            <CometEmojiWithContextualSize
              key={`${matchKey}-${count++}`}
              emoji={[
                FBEmojiUtils.codepointsToString(
                  emoji.split("_").map((code) => Number(`0x${code}`))
                ),
              ]}
              resource={new FBEmojiResource(emoji)}
              size={size}
            />
          ),
          (emoji: string, renderedEmoji: string) => (
            <CometEmojiWithContextualSize
              key={`${matchKey}-${count++}`}
              emoji={renderedEmoji}
              resource={new FBEmojiResource(emoji)}
              size={size}
            />
          )
        );
      },
      key
    );
  };
};

export default CometEmoticonTransform;
