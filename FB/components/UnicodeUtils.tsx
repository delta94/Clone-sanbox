__d(
  "UnicodeUtils",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 55296,
      j = 56319,
      k = 56320,
      l = 57343,
      m = /[\uD800-\uDFFF]/;
    function n(a) {
      return i <= a && a <= l;
    }
    function a(a, b) {
      (0 <= b && b < a.length) || h(0, 1346, b, a.length);
      if (b + 1 === a.length) return !1;
      var c = a.charCodeAt(b);
      a = a.charCodeAt(b + 1);
      return i <= c && c <= j && k <= a && a <= l;
    }
    function o(a) {
      return m.test(a);
    }
    function p(a, b) {
      a = n(a.charCodeAt(b));
      return a ? 2 : 1;
    }
    function b(a) {
      if (!o(a)) return a.length;
      var b = 0;
      for (var c = 0; c < a.length; c += p(a, c)) b++;
      return b;
    }
    function c(a, b) {
      return r(a, b, b + 1);
    }
    function q(a, b, c) {
      var d = b || 0;
      c = c === void 0 ? Infinity : c || 0;
      if (!o(a)) return a.substr(d, c);
      var e = a.length;
      if (e <= 0 || d > e || c <= 0) return "";
      var f = 0;
      if (d > 0) {
        for (; d > 0 && f < e; d--) f += p(a, f);
        if (f >= e) return "";
      } else if (b < 0) {
        for (f = e; d < 0 && 0 < f; d++) f -= p(a, f - 1);
        f < 0 && (f = 0);
      }
      b = e;
      if (c < e) for (b = f; c > 0 && b < e; c--) b += p(a, b);
      return a.substring(f, b);
    }
    function r(a, b, c) {
      b = b || 0;
      c = c === void 0 ? Infinity : c || 0;
      b < 0 && (b = 0);
      c < 0 && (c = 0);
      var d = Math.abs(c - b);
      b = b < c ? b : c;
      return q(a, b, d);
    }
    function d(a) {
      var b = [];
      for (var c = 0; c < a.length; c += p(a, c)) b.push(a.codePointAt(c));
      return b;
    }
    g.isCodeUnitInSurrogateRange = n;
    g.isSurrogatePair = a;
    g.hasSurrogateUnit = o;
    g.getUTF16Length = p;
    g.strlen = b;
    g.charAt = c;
    g.substr = q;
    g.substring = r;
    g.getCodePoints = d;
  },
  98
);

import invariant from "invariant";

const HIGH_SURROGATE_START = 0xd800;
const HIGH_SURROGATE_END = 0xdbff;
const LOW_SURROGATE_START = 0xdc00;
const LOW_SURROGATE_END = 0xdfff;
const SURROGATE_REGEX = /[\uD800-\uDFFF]/;

function isCodeUnitInSurrogateRange(codeUnit: number): boolean {
  return HIGH_SURROGATE_START <= codeUnit && codeUnit <= LOW_SURROGATE_END;
}

function isSurrogatePair(str: string, index: number): boolean {
  invariant(
    0 <= index && index < str.length,
    `Index ${index} is out of bounds for length ${str.length}`
  );
  if (index + 1 === str.length) return false;
  const highSurrogate = str.charCodeAt(index);
  const lowSurrogate = str.charCodeAt(index + 1);
  return (
    HIGH_SURROGATE_START <= highSurrogate &&
    highSurrogate <= HIGH_SURROGATE_END &&
    LOW_SURROGATE_START <= lowSurrogate &&
    lowSurrogate <= LOW_SURROGATE_END
  );
}

function hasSurrogateUnit(str: string): boolean {
  return SURROGATE_REGEX.test(str);
}

function getUTF16Length(str: string, index: number): number {
  const codeUnit = str.charCodeAt(index);
  return isCodeUnitInSurrogateRange(codeUnit) ? 2 : 1;
}

function strlen(str: string): number {
  if (!hasSurrogateUnit(str)) return str.length;
  let length = 0;
  for (let i = 0; i < str.length; i += getUTF16Length(str, i)) {
    length++;
  }
  return length;
}

function charAt(str: string, index: number): string {
  return substring(str, index, index + 1);
}

function substr(str: string, start: number, length?: number): string {
  let from = start || 0;
  let len = length === undefined ? Infinity : length || 0;
  if (!hasSurrogateUnit(str)) return str.substr(from, len);
  const strLength = str.length;
  if (strLength <= 0 || from > strLength || len <= 0) return "";
  let utf16Length = 0;

  if (from > 0) {
    for (; from > 0 && utf16Length < strLength; from--) {
      utf16Length += getUTF16Length(str, utf16Length);
    }
    if (utf16Length >= strLength) return "";
  } else if (start < 0) {
    for (utf16Length = strLength; from < 0 && utf16Length > 0; from++) {
      utf16Length -= getUTF16Length(str, utf16Length - 1);
    }
    if (utf16Length < 0) utf16Length = 0;
  }

  let end = strLength;
  if (len < strLength) {
    for (end = utf16Length; len > 0 && end < strLength; len--) {
      end += getUTF16Length(str, end);
    }
  }
  return str.substring(utf16Length, end);
}

function substring(str: string, start: number, end?: number): string {
  const from = start || 0;
  const to = end === undefined ? Infinity : end || 0;
  const length = Math.abs(to - from);
  const startIndex = Math.min(from, to);
  return substr(str, startIndex, length);
}

function getCodePoints(str: string): number[] {
  const codePoints: number[] = [];
  for (let i = 0; i < str.length; i += getUTF16Length(str, i)) {
    codePoints.push(str.codePointAt(i)!);
  }
  return codePoints;
}

export {
  isCodeUnitInSurrogateRange,
  isSurrogatePair,
  hasSurrogateUnit,
  getUTF16Length,
  strlen,
  charAt,
  substr,
  substring,
  getCodePoints,
};
