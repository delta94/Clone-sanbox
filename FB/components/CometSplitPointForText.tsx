__d(
  "CometSplitPointForText",
  ["EmojiRendererData", "UnicodeUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a, b, c, e) {
      c === void 0 && (c = 8);
      e === void 0 && (e = 0);
      var f = null,
        g = a.split("\n"),
        h = (i || (i = d("UnicodeUtils"))).strlen(a);
      h > b && h - b > e && (f = b);
      if (g.length > c) {
        e = g.slice(0, c).join("\n").length;
        f !== null ? (f = Math.min(e, f)) : (f = e);
      }
      if (f == null) return f;
      else {
        b = f + j(a, f);
        return b < h ? b : null;
      }
    }
    function j(a, b) {
      var e =
        b > 0 &&
        (h || (h = c("EmojiRendererData"))).isZWJ(
          (i || (i = d("UnicodeUtils"))).charAt(a, b - 1).codePointAt(0)
        );
      return k(a, e ? b - 1 : b);
    }
    function k(a, b) {
      var e = (i || (i = d("UnicodeUtils"))).charAt(a, b);
      if (e !== "") {
        e = e.codePointAt(0);
        if (
          (h || (h = c("EmojiRendererData"))).isEmojiModifier(e) ||
          (h || (h = c("EmojiRendererData"))).isEmojiVariationSelector(e) ||
          (h || (h = c("EmojiRendererData"))).isTextVariationSelector(e)
        )
          return 1 + k(a, b + 1);
        else if ((h || (h = c("EmojiRendererData"))).isZWJ(e)) {
          e = (i || (i = d("UnicodeUtils"))).charAt(a, b + 1);
          if (
            (h || (h = c("EmojiRendererData"))).isEmojiModifierBase(
              e.codePointAt(0)
            )
          )
            return 2 + k(a, b + 2);
        }
      }
      return 0;
    }
    g.findSplitPointForText = a;
  },
  98
);

import EmojiRendererData from "EmojiRendererData";
import UnicodeUtils from "UnicodeUtils";

function findSplitPointForText(
  text: string,
  maxLength: number,
  maxLines: number = 8,
  truncationThreshold: number = 0
): number | null {
  let splitPoint: number | null = null;
  const lines = text.split("\n");
  const textLength = UnicodeUtils.strlen(text);

  if (textLength > maxLength && textLength - maxLength > truncationThreshold) {
    splitPoint = maxLength;
  }

  if (lines.length > maxLines) {
    const lengthUpToMaxLines = lines.slice(0, maxLines).join("\n").length;
    splitPoint =
      splitPoint !== null
        ? Math.min(lengthUpToMaxLines, splitPoint)
        : lengthUpToMaxLines;
  }

  if (splitPoint === null) {
    return null;
  } else {
    const adjustedSplitPoint =
      splitPoint + adjustSplitPointForEmoji(text, splitPoint);
    return adjustedSplitPoint < textLength ? adjustedSplitPoint : null;
  }
}

function adjustSplitPointForEmoji(text: string, splitPoint: number): number {
  const isZWJ = EmojiRendererData.isZWJ(
    UnicodeUtils.charAt(text, splitPoint - 1).codePointAt(0)
  );
  return calculateAdditionalOffset(text, isZWJ ? splitPoint - 1 : splitPoint);
}

function calculateAdditionalOffset(text: string, splitPoint: number): number {
  const char = UnicodeUtils.charAt(text, splitPoint);
  if (char !== "") {
    const codePoint = char.codePointAt(0);
    if (
      EmojiRendererData.isEmojiModifier(codePoint) ||
      EmojiRendererData.isEmojiVariationSelector(codePoint) ||
      EmojiRendererData.isTextVariationSelector(codePoint)
    ) {
      return 1 + calculateAdditionalOffset(text, splitPoint + 1);
    } else if (EmojiRendererData.isZWJ(codePoint)) {
      const nextChar = UnicodeUtils.charAt(text, splitPoint + 1);
      if (EmojiRendererData.isEmojiModifierBase(nextChar.codePointAt(0))) {
        return 2 + calculateAdditionalOffset(text, splitPoint + 2);
      }
    }
  }
  return 0;
}

export { findSplitPointForText };
