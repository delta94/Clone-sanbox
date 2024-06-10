__d(
  "FBEmojiUtils",
  ["EmojiRendererData", "SupportedEmoji3"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = /_fe0f/g,
      j = [127995, 127996, 127997, 127998, 127999];
    function a(a) {
      return a
        .map(function (a) {
          return String.fromCodePoint(a);
        })
        .join("");
    }
    var k = function (a) {
        return a
          .filter(function (a) {
            return a.length > 0;
          })
          .map(function (a) {
            return a.codePointAt(0).toString(16);
          })
          .join("_")
          .replace(i, "");
      },
      l = function (a) {
        a = k(a);
        if (a == null) return null;
        return c("SupportedEmoji3")[a] ? a : null;
      };
    b = function (a) {
      return a.replace(i, "");
    };
    d = function (a) {
      var b = [];
      if (!(h || (h = c("EmojiRendererData"))).isEmojiModifierBase(a[0]))
        return b;
      j.forEach(function (d) {
        var e = a.reduce(function (a, b) {
          if (
            a.length &&
            (h || (h = c("EmojiRendererData"))).isEmojiVariationSelector(b) &&
            (h || (h = c("EmojiRendererData"))).isEmojiModifier(a[a.length - 1])
          )
            return a;
          a.push(b);
          (h || (h = c("EmojiRendererData"))).isEmojiModifierBase(b) &&
            a.push(d);
          return a;
        }, []);
        l(
          e.map(function (a) {
            return String.fromCodePoint(a);
          })
        ) && b.push(e);
      });
      return b;
    };
    g.codepointsToString = a;
    g.getKeyFromCodepoints = k;
    g.getSupportedKey = l;
    g.normalizeKey = b;
    g.getSupportedModifierSequences = d;
  },
  98
);

import { EmojiRendererData } from "EmojiRendererData";
import { SupportedEmoji3 } from "SupportedEmoji3";

const VARIATION_SELECTOR_REGEX = /_fe0f/g;
const MODIFIER_CODEPOINTS = [127995, 127996, 127997, 127998, 127999];

function codepointsToString(codepoints: number[]): string {
  return codepoints
    .map((codepoint) => String.fromCodePoint(codepoint))
    .join("");
}

function getKeyFromCodepoints(codepoints: string[]): string {
  return codepoints
    .filter((codepoint) => codepoint.length > 0)
    .map((codepoint) => codepoint.codePointAt(0)!.toString(16))
    .join("_")
    .replace(VARIATION_SELECTOR_REGEX, "");
}

function getSupportedKey(codepoints: string[]): string | null {
  const key = getKeyFromCodepoints(codepoints);
  return key && SupportedEmoji3[key] ? key : null;
}

function normalizeKey(key: string): string {
  return key.replace(VARIATION_SELECTOR_REGEX, "");
}

function getSupportedModifierSequences(baseCodepoints: number[]): number[][] {
  const supportedSequences: number[][] = [];
  if (!EmojiRendererData.isEmojiModifierBase(baseCodepoints[0])) {
    return supportedSequences;
  }

  MODIFIER_CODEPOINTS.forEach((modifier) => {
    const sequence = baseCodepoints.reduce<number[]>((acc, codepoint) => {
      if (
        acc.length &&
        EmojiRendererData.isEmojiVariationSelector(codepoint) &&
        EmojiRendererData.isEmojiModifier(acc[acc.length - 1])
      ) {
        return acc;
      }
      acc.push(codepoint);
      if (EmojiRendererData.isEmojiModifierBase(codepoint)) {
        acc.push(modifier);
      }
      return acc;
    }, []);

    if (
      getSupportedKey(sequence.map((cp) => String.fromCodePoint(cp))) !== null
    ) {
      supportedSequences.push(sequence);
    }
  });

  return supportedSequences;
}

export {
  codepointsToString,
  getKeyFromCodepoints,
  getSupportedKey,
  normalizeKey,
  getSupportedModifierSequences,
};
