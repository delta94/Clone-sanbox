__d(
  "FBEmojiResource",
  [
    "EmojiImageURL",
    "EmojiRenderer",
    "FBEmojiUtils",
    "SupportedEmoji3",
    "SupportedEmojiExtended",
    "SupportedFacebookEmoji",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = d("FBEmojiUtils").normalizeKey(a);
      return c("SupportedFacebookEmoji")[a] || c("SupportedEmoji3")[a]
        ? a
        : null;
    }
    function i(a) {
      if (c("SupportedEmoji3")[a]) return "EMOJI_3";
      else if (c("SupportedFacebookEmoji")[a]) return "FB_EMOJI";
      else return null;
    }
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getImageURL = function (a) {
        var b = this.$1;
        if (c("SupportedEmojiExtended")[b])
          return d("EmojiImageURL").getFBEmojiExtendedURL(b, a);
        var e = i(b);
        switch (e) {
          case "EMOJI_3":
            return d("EmojiImageURL").getEmoji3URL(b, a);
          case "FB_EMOJI":
            return d("EmojiImageURL").getFBEmojiURL(b, a);
        }
        return null;
      };
      a.firstFromText = function (b) {
        b = d("EmojiRenderer").parse(b);
        return b.length === 0 ? null : a.fromCodepoints(b[0].emoji);
      };
      a.fromCodepoints = function (b) {
        b = h(d("FBEmojiUtils").getKeyFromCodepoints(b));
        return b == null ? null : new a(b);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);

import { EmojiImageURL } from "EmojiImageURL";
import { EmojiRenderer } from "EmojiRenderer";
import { FBEmojiUtils } from "FBEmojiUtils";
import { SupportedEmoji3 } from "SupportedEmoji3";
import { SupportedEmojiExtended } from "SupportedEmojiExtended";
import { SupportedFacebookEmoji } from "SupportedFacebookEmoji";

function normalizeKey(key: string): string | null {
  const normalizedKey = FBEmojiUtils.normalizeKey(key);
  return SupportedFacebookEmoji[normalizedKey] || SupportedEmoji3[normalizedKey]
    ? normalizedKey
    : null;
}

function getEmojiType(key: string): "EMOJI_3" | "FB_EMOJI" | null {
  if (SupportedEmoji3[key]) return "EMOJI_3";
  if (SupportedFacebookEmoji[key]) return "FB_EMOJI";
  return null;
}

class FBEmojiResource {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  getImageURL(size: number): string | null {
    const key = this.key;

    if (SupportedEmojiExtended[key]) {
      return EmojiImageURL.getFBEmojiExtendedURL(key, size);
    }

    const emojiType = getEmojiType(key);
    switch (emojiType) {
      case "EMOJI_3":
        return EmojiImageURL.getEmoji3URL(key, size);
      case "FB_EMOJI":
        return EmojiImageURL.getFBEmojiURL(key, size);
    }

    return null;
  }

  static firstFromText(text: string): FBEmojiResource | null {
    const parsed = EmojiRenderer.parse(text);
    return parsed.length === 0
      ? null
      : FBEmojiResource.fromCodepoints(parsed[0].emoji);
  }

  static fromCodepoints(codepoints: string[]): FBEmojiResource | null {
    const key = normalizeKey(FBEmojiUtils.getKeyFromCodepoints(codepoints));
    return key == null ? null : new FBEmojiResource(key);
  }
}

export default FBEmojiResource;
