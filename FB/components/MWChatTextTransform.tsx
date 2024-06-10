__d(
  "MWChatTextTransform",
  ["CometEmojiTransform", "CometEmoticonTransform", "cr:3078"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d = c("CometEmoticonTransform")();
    e = c("CometEmojiTransform")();
    f = [d, e];
    var h = f.slice();
    b("cr:3078") != null && h.push(b("cr:3078")());
    function a(a) {
      return [c("CometEmoticonTransform")(a), c("CometEmojiTransform")(a)];
    }
    g.emoticonTransform = d;
    g.emojiTransform = e;
    g.textTransformsNoVault = f;
    g.textTransforms = h;
    g.textTransformsWithOptions = a;
  },
  98
);

import CometEmojiTransform from "CometEmojiTransform";
import CometEmoticonTransform from "CometEmoticonTransform";
import MAWUnvaultTransform from "cr:3078";

const emoticonTransform = CometEmoticonTransform();
const emojiTransform = CometEmojiTransform();
const textTransformsNoVault = [emoticonTransform, emojiTransform];
const textTransforms = textTransformsNoVault.slice();

if (MAWUnvaultTransform != null) {
  textTransforms.push(MAWUnvaultTransform());
}

function textTransformsWithOptions(options: any) {
  return [CometEmoticonTransform(options), CometEmojiTransform(options)];
}

export {
  emoticonTransform,
  emojiTransform,
  textTransformsNoVault,
  textTransforms,
  textTransformsWithOptions,
};
