__d(
  "EmojiImageURL",
  ["invariant", "EmojiConfig", "EmojiStaticConfig"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(b, c) {
      var d = a.unescape(encodeURIComponent(b));
      c = c;
      for (var e = 0; e < d.length; e++)
        (c = (c << 5) - c + b.charCodeAt(e)), (c &= 4294967295);
      return (c & 255).toString(16);
    }
    function j(a, b, d) {
      b in c("EmojiStaticConfig").supportedSizes || h(0, 772, b);
      b =
        c("EmojiConfig").pixelRatio +
        "/" +
        b +
        "/" +
        a +
        c("EmojiStaticConfig").fileExt;
      a = i(b, c("EmojiStaticConfig").checksumBase);
      return c("EmojiConfig").schemaAuth + "/" + d + a + "/" + b;
    }
    function b(a, b) {
      b === void 0 && (b = 16);
      return j(a, b, c("EmojiStaticConfig").types.COMPOSITE);
    }
    function d(a, b) {
      b === void 0 && (b = 16);
      return j(a, b, c("EmojiStaticConfig").types.EMOJI_3);
    }
    function e(a, b) {
      b === void 0 && (b = 16);
      return j(a, b, c("EmojiStaticConfig").types.FB_EMOJI_EXTENDED);
    }
    function f(a, b) {
      b === void 0 && (b = 16);
      return j(a, b, c("EmojiStaticConfig").types.FBEMOJI);
    }
    function k(a, b) {
      return j(a, b, c("EmojiStaticConfig").types.MESSENGER);
    }
    g.getCompositeURL = b;
    g.getEmoji3URL = d;
    g.getFBEmojiExtendedURL = e;
    g.getFBEmojiURL = f;
    g.getMessengerURL = k;
  },
  98
);

import invariant from "invariant";
import { EmojiConfig } from "EmojiConfig";
import { EmojiStaticConfig } from "EmojiStaticConfig";

function computeChecksum(input: string, base: number): string {
  const unescapedInput = unescape(encodeURIComponent(input));
  let checksum = base;
  for (let i = 0; i < unescapedInput.length; i++) {
    checksum = (checksum << 5) - checksum + input.charCodeAt(i);
    checksum &= 4294967295; // Keep it within 32 bits
  }
  return (checksum & 255).toString(16);
}

function constructURL(name: string, size: number, type: string): string {
  if (!(size in EmojiStaticConfig.supportedSizes)) {
    invariant(false, "Unsupported size: %s", size);
  }

  const path = `${EmojiConfig.pixelRatio}/${size}/${name}${EmojiStaticConfig.fileExt}`;
  const checksum = computeChecksum(path, EmojiStaticConfig.checksumBase);
  return `${EmojiConfig.schemaAuth}/${type}${checksum}/${path}`;
}

export function getCompositeURL(name: string, size: number = 16): string {
  return constructURL(name, size, EmojiStaticConfig.types.COMPOSITE);
}

export function getEmoji3URL(name: string, size: number = 16): string {
  return constructURL(name, size, EmojiStaticConfig.types.EMOJI_3);
}

export function getFBEmojiExtendedURL(name: string, size: number = 16): string {
  return constructURL(name, size, EmojiStaticConfig.types.FB_EMOJI_EXTENDED);
}

export function getFBEmojiURL(name: string, size: number = 16): string {
  return constructURL(name, size, EmojiStaticConfig.types.FBEMOJI);
}

export function getMessengerURL(name: string, size: number): string {
  return constructURL(name, size, EmojiStaticConfig.types.MESSENGER);
}
