__d(
  "WABase64",
  ["WACryptoDependencies", "WAErr", "WALogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "Found unexpected character code while decoding B64 at index ",
        ", length ",
        ": ",
        "",
      ]);
      h = function () {
        return a;
      };
      return a;
    }
    var i = 43,
      j = 47,
      k = 61,
      l = 45,
      m = 95,
      n = 3e3,
      o = "data:image/jpeg;base64,",
      p = function (a) {
        return (
          typeof a === "string" &&
          /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            a
          )
        );
      };
    function q(a) {
      return r(a, i, j, !0);
    }
    function a(a, b) {
      b === void 0 && (b = !1);
      return r(a, l, m, b);
    }
    function r(a, b, c, d) {
      a = Array.isArray(a) || a instanceof ArrayBuffer ? new Uint8Array(a) : a;
      if (a.length <= n) return s(a, b, c, d);
      else {
        var e = [];
        for (var f = 0; f < a.length; f += n)
          e.push(s(a.subarray(f, f + n), b, c, d));
        return e.join("");
      }
    }
    function s(a, b, c, d) {
      var e = Math.ceil((a.length * 4) / 3),
        f = 4 * Math.ceil(a.length / 3),
        g = new Array(f);
      for (var h = 0, i = 0; h < f; h += 4, i += 3) {
        var j = (a[i] << 16) | (a[i + 1] << 8) | a[i + 2];
        g[h] = j >> 18;
        g[h + 1] = (j >> 12) & 63;
        g[h + 2] = (j >> 6) & 63;
        g[h + 3] = j & 63;
      }
      for (j = 0; j < e; j++) {
        a = g[j];
        a < 26
          ? (g[j] = 65 + a)
          : a < 52
          ? (g[j] = 71 + a)
          : a < 62
          ? (g[j] = a - 4)
          : a === 62
          ? (g[j] = b)
          : (g[j] = c);
      }
      for (h = e; h < f; h++) g[h] = 61;
      i = String.fromCharCode.apply(String, g);
      return d ? i : i.substring(0, e);
    }
    function t(a, b, c, e) {
      var f = a.length,
        g = new Int32Array(f + (f % 4));
      for (var i = 0; i < f; i++) {
        var j = a.charCodeAt(i);
        if (65 <= j && j <= 90) g[i] = j - 65;
        else if (97 <= j && j <= 122) g[i] = j - 71;
        else if (48 <= j && j <= 57) g[i] = j + 4;
        else if (j === b) g[i] = 62;
        else if (j === c) g[i] = 63;
        else if (j === e) {
          f = i;
          break;
        } else {
          self.ERROR != null && d("WALogger").ERROR(h(), i, f, j);
          return null;
        }
      }
      j = g.length / 4;
      for (b = 0, c = 0; b < j; b++, c += 4)
        g[b] = (g[c] << 18) | (g[c + 1] << 12) | (g[c + 2] << 6) | g[c + 3];
      e = Math.floor((f * 3) / 4);
      i = new Uint8Array(e);
      a = 0;
      b = 0;
      for (; b + 3 <= e; a++, b += 3) {
        j = g[a];
        i[b] = j >> 16;
        i[b + 1] = (j >> 8) & 255;
        i[b + 2] = j & 255;
      }
      switch (e - b) {
        case 2:
          i[b] = g[a] >> 16;
          i[b + 1] = (g[a] >> 8) & 255;
          break;
        case 1:
          i[b] = g[a] >> 16;
      }
      return i;
    }
    function b(a) {
      a = t(a, i, j, k);
      if (a) return a.buffer;
      else throw c("WAErr")("Base64.decode given invalid string");
    }
    function e(a, b) {
      b === void 0 && (b = !1);
      a = t(a, l, m, b ? k : -1);
      if (a) return a.buffer;
      else throw c("WAErr")("Base64.decode given invalid string");
    }
    function f(a) {
      a = a instanceof ArrayBuffer ? new Uint8Array(a) : t(a, i, j, k);
      return a && Array.from(a);
    }
    function u(a) {
      return Math.floor((a.length * 3) / 4);
    }
    function v(a) {
      a = new Uint8Array(a);
      d("WACryptoDependencies").getCrypto().getRandomValues(a);
      return q(a);
    }
    g.BASE64_DATA_URL_SCHEME = o;
    g.isBase64 = p;
    g.encodeB64 = q;
    g.encodeB64UrlSafe = a;
    g.decodeB64 = b;
    g.decodeB64UrlSafe = e;
    g.decodeB64ToJsArray = f;
    g.sizeWhenB64Decoded = u;
    g.randomBase64 = v;
  },
  98
);

import { WACryptoDependencies } from "WACryptoDependencies";
import { WAErr } from "WAErr";
import { WALogger } from "WALogger";

const BASE64_DATA_URL_SCHEME = "data:image/jpeg;base64,";
const MAX_ARRAY_LENGTH = 3000;

const CHAR_PLUS = 43;
const CHAR_SLASH = 47;
const CHAR_EQUAL = 61;
const CHAR_DASH = 45;
const CHAR_UNDERSCORE = 95;

function taggedTemplateLiteralLoose(
  strings: TemplateStringsArray,
  ...values: any[]
) {
  return strings.raw;
}

function unexpectedCharCodeError(
  index: number,
  length: number,
  charCode: number
) {
  return `Found unexpected character code while decoding B64 at index ${index}, length ${length}: ${charCode}`;
}

function isBase64(str: string): boolean {
  return (
    typeof str === "string" &&
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str)
  );
}

function encodeB64(
  data: Uint8Array | ArrayBuffer | any[],
  urlSafe: boolean = false
): string {
  return encodeBase64(data, CHAR_PLUS, CHAR_SLASH, urlSafe);
}

function encodeB64UrlSafe(
  data: Uint8Array | ArrayBuffer | any[],
  urlSafe: boolean = false
): string {
  return encodeBase64(data, CHAR_DASH, CHAR_UNDERSCORE, urlSafe);
}

function encodeBase64(
  data: Uint8Array | ArrayBuffer | any[],
  bChar: number,
  cChar: number,
  urlSafe: boolean
): string {
  if (Array.isArray(data) || data instanceof ArrayBuffer) {
    data = new Uint8Array(data);
  }
  if (data.length <= MAX_ARRAY_LENGTH) {
    return processEncoding(data, bChar, cChar, urlSafe);
  } else {
    const result: string[] = [];
    for (let i = 0; i < data.length; i += MAX_ARRAY_LENGTH) {
      result.push(
        processEncoding(
          data.subarray(i, i + MAX_ARRAY_LENGTH),
          bChar,
          cChar,
          urlSafe
        )
      );
    }
    return result.join("");
  }
}

function processEncoding(
  data: Uint8Array,
  bChar: number,
  cChar: number,
  urlSafe: boolean
): string {
  const outputLength = Math.ceil((data.length * 4) / 3);
  const paddedLength = 4 * Math.ceil(data.length / 3);
  const output = new Array(paddedLength);
  let dataIndex = 0;
  let outputIndex = 0;

  while (outputIndex < paddedLength) {
    const chunk =
      (data[dataIndex] << 16) |
      (data[dataIndex + 1] << 8) |
      data[dataIndex + 2];
    output[outputIndex] = chunk >> 18;
    output[outputIndex + 1] = (chunk >> 12) & 63;
    output[outputIndex + 2] = (chunk >> 6) & 63;
    output[outputIndex + 3] = chunk & 63;
    dataIndex += 3;
    outputIndex += 4;
  }

  for (let i = 0; i < outputLength; i++) {
    let charCode = output[i];
    output[i] =
      charCode < 26
        ? 65 + charCode
        : charCode < 52
        ? 71 + charCode
        : charCode < 62
        ? charCode - 4
        : charCode === 62
        ? bChar
        : cChar;
  }
  for (let i = outputLength; i < paddedLength; i++) {
    output[i] = 61;
  }
  const result = String.fromCharCode(...output);
  return urlSafe ? result : result.substring(0, outputLength);
}

function decodeBase64(
  input: string,
  bChar: number,
  cChar: number,
  padChar: number
): Uint8Array | null {
  let length = input.length;
  const array = new Int32Array(length + (length % 4));
  for (let i = 0; i < length; i++) {
    const charCode = input.charCodeAt(i);
    if (65 <= charCode && charCode <= 90) array[i] = charCode - 65;
    else if (97 <= charCode && charCode <= 122) array[i] = charCode - 71;
    else if (48 <= charCode && charCode <= 57) array[i] = charCode + 4;
    else if (charCode === bChar) array[i] = 62;
    else if (charCode === cChar) array[i] = 63;
    else if (charCode === padChar) {
      length = i;
      break;
    } else {
      WALogger.ERROR(unexpectedCharCodeError(i, length, charCode));
      return null;
    }
  }

  const chunkLength = array.length / 4;
  for (let i = 0, j = 0; i < chunkLength; i++, j += 4) {
    array[i] =
      (array[j] << 18) |
      (array[j + 1] << 12) |
      (array[j + 2] << 6) |
      array[j + 3];
  }

  const resultLength = Math.floor((length * 3) / 4);
  const result = new Uint8Array(resultLength);
  for (let i = 0, j = 0; j + 3 <= resultLength; i++, j += 3) {
    const chunk = array[i];
    result[j] = chunk >> 16;
    result[j + 1] = (chunk >> 8) & 255;
    result[j + 2] = chunk & 255;
  }

  switch (resultLength % 3) {
    case 2:
      result[resultLength - 2] = array[array.length - 1] >> 16;
      result[resultLength - 1] = (array[array.length - 1] >> 8) & 255;
      break;
    case 1:
      result[resultLength - 1] = array[array.length - 1] >> 16;
  }
  return result;
}

function decodeB64(input: string): ArrayBuffer {
  const result = decodeBase64(input, CHAR_PLUS, CHAR_SLASH, CHAR_EQUAL);
  if (result) {
    return result.buffer;
  } else {
    throw WAErr("Base64.decode given invalid string");
  }
}

function decodeB64UrlSafe(
  input: string,
  padChar: boolean = false
): ArrayBuffer {
  const result = decodeBase64(
    input,
    CHAR_DASH,
    CHAR_UNDERSCORE,
    padChar ? CHAR_EQUAL : -1
  );
  if (result) {
    return result.buffer;
  } else {
    throw WAErr("Base64.decode given invalid string");
  }
}

function decodeB64ToJsArray(input: string | ArrayBuffer): number[] {
  let array: Uint8Array | null;

  if (input instanceof ArrayBuffer) {
    array = new Uint8Array(input);
  } else {
    array = decodeBase64(input, CHAR_PLUS, CHAR_SLASH, CHAR_EQUAL);
  }

  return array ? Array.from(array) : [];
}

function sizeWhenB64Decoded(input: string): number {
  return Math.floor((input.length * 3) / 4);
}

function randomBase64(length: number): string {
  const array = new Uint8Array(length);
  WACryptoDependencies.getCrypto().getRandomValues(array);
  return encodeB64(array);
}

export {
  BASE64_DATA_URL_SCHEME,
  isBase64,
  encodeB64,
  encodeB64UrlSafe,
  decodeB64,
  decodeB64UrlSafe,
  decodeB64ToJsArray,
  sizeWhenB64Decoded,
  randomBase64,
};
