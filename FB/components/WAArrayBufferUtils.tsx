__d(
  "WAArrayBufferUtils",
  ["Promise", "WAErr"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var b = new ArrayBuffer(a.length);
      b = new Uint8Array(b);
      var c, d;
      for (c = 0, d = a.length; c < d; c++) b[c] = a.charCodeAt(c);
      return b.buffer;
    }
    function d(a, c) {
      c === void 0 && (c = 5e5);
      return new (h || (h = b("Promise")))(function (b, d) {
        var e = a.length,
          f = new ArrayBuffer(e),
          g = new Uint8Array(f),
          h = 0;
        setTimeout(i, 0);
        function i() {
          var d = Math.min(h + c, e);
          while (h < d) (g[h] = a.charCodeAt(h)), h++;
          if (h === e) {
            b(f);
            return;
          }
          setTimeout(i, 16);
        }
      });
    }
    function e(a) {
      return String.fromCharCode.apply(null, new Uint8Array(a));
    }
    var i = 8388607;
    function f(a, b) {
      a = new Uint8Array(a);
      if (b > i) throw c("WAErr")("Divisor is too big");
      var d = 0;
      for (var e = 0; e < a.length; ++e) d = ((d << 8) + a[e]) % b;
      return d;
    }
    function j(a) {
      a = a.map(function (a) {
        return new Uint8Array(a);
      });
      var b = a.reduce(function (a, b) {
          return a + b.byteLength;
        }, 0),
        c = new Uint8Array(b);
      a.reduce(function (a, b) {
        c.set(b, a);
        return a + b.byteLength;
      }, 0);
      return c.buffer.slice(c.byteOffset, c.byteOffset + c.byteLength);
    }
    function k(a, b) {
      a = new Uint8Array(a);
      b = new Uint8Array(b);
      return l(a, b);
    }
    function l(a, b) {
      if (a.byteLength !== b.byteLength) return !1;
      for (var c = 0; c !== a.byteLength; c++) if (a[c] !== b[c]) return !1;
      return !0;
    }
    g.stringToArrayBuffer = a;
    g.largeStringToArrayBuffer = d;
    g.arrayBufferToString = e;
    g.arrayBufferMod = f;
    g.concatBuffers = j;
    g.arrayBuffersEqualUNSAFE = k;
    g.uint8ArraysEqualUNSAFE = l;
  },
  98
);

import { Promise as WAPromise } from "Promise";
import { WAErr } from "WAErr";

const MAX_UINT8_ARRAY_LENGTH = 8388607;

export function stringToArrayBuffer(str: string): ArrayBuffer {
  const buffer = new ArrayBuffer(str.length);
  const view = new Uint8Array(buffer);
  for (let i = 0, len = str.length; i < len; i++) {
    view[i] = str.charCodeAt(i);
  }
  return buffer;
}

export function largeStringToArrayBuffer(
  str: string,
  chunkSize: number = 500000
): Promise<ArrayBuffer> {
  return new WAPromise((resolve, reject) => {
    const length = str.length;
    const buffer = new ArrayBuffer(length);
    const view = new Uint8Array(buffer);
    let position = 0;

    function processChunk() {
      const end = Math.min(position + chunkSize, length);
      for (let i = position; i < end; i++) {
        view[i] = str.charCodeAt(i);
      }
      position = end;

      if (position === length) {
        resolve(buffer);
      } else {
        setTimeout(processChunk, 16);
      }
    }

    setTimeout(processChunk, 0);
  });
}

export function arrayBufferToString(buffer: ArrayBuffer): string {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

export function arrayBufferMod(buffer: ArrayBuffer, divisor: number): number {
  if (divisor > MAX_UINT8_ARRAY_LENGTH) {
    throw WAErr("Divisor is too big");
  }
  const view = new Uint8Array(buffer);
  let mod = 0;
  for (let i = 0; i < view.length; i++) {
    mod = ((mod << 8) + view[i]) % divisor;
  }
  return mod;
}

export function concatBuffers(buffers: ArrayBuffer[]): ArrayBuffer {
  const totalLength = buffers.reduce(
    (acc, buffer) => acc + buffer.byteLength,
    0
  );
  const result = new Uint8Array(totalLength);

  let offset = 0;
  buffers.forEach((buffer) => {
    result.set(new Uint8Array(buffer), offset);
    offset += buffer.byteLength;
  });

  return result.buffer;
}

export function arrayBuffersEqualUNSAFE(
  buffer1: ArrayBuffer,
  buffer2: ArrayBuffer
): boolean {
  return uint8ArraysEqualUNSAFE(
    new Uint8Array(buffer1),
    new Uint8Array(buffer2)
  );
}

export function uint8ArraysEqualUNSAFE(
  array1: Uint8Array,
  array2: Uint8Array
): boolean {
  if (array1.byteLength !== array2.byteLength) {
    return false;
  }
  for (let i = 0; i < array1.byteLength; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
