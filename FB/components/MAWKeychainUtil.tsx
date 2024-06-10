__d(
  "MAWKeychainUtil",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return self.crypto.getRandomValues(new Uint8Array(a));
    }
    function b(a) {
      var b = a.reduce(function (a, b) {
          return a + b.byteLength;
        }, 0),
        c = new Uint8Array(b);
      a.reduce(function (a, b) {
        c.set(new Uint8Array(b), a);
        return a + b.byteLength;
      }, 0);
      return c.buffer;
    }
    function c(a, b) {
      return new Uint8Array([a, b]).buffer;
    }
    function d(a) {
      var b = a.length;
      if (b > 0 && b % 2 === 0 && /^[\da-f]+$/gi.test(a)) {
        var c = [];
        for (var d = 0, b = b / 2; d < b; ++d) {
          var e = parseInt(a.substring(d * 2, d * 2 + 2), 16);
          c.push(e);
        }
        return new Uint8Array(c);
      } else return null;
    }
    f.getBufferWithRandomValuesFromLength = a;
    f.mergeBuffers = b;
    f.makeAAD = c;
    f.fromHexString = d;
  },
  66
);
/**
 * Generates a buffer with random values of the specified length.
 * @param length - The length of the buffer.
 * @returns A Uint8Array filled with random values.
 */
function getBufferWithRandomValuesFromLength(length: number): Uint8Array {
  return self.crypto.getRandomValues(new Uint8Array(length));
}

/**
 * Merges multiple ArrayBuffers into one.
 * @param buffers - An array of ArrayBuffers to merge.
 * @returns A single merged ArrayBuffer.
 */
function mergeBuffers(buffers: ArrayBuffer[]): ArrayBuffer {
  const totalLength = buffers.reduce(
    (acc, buffer) => acc + buffer.byteLength,
    0
  );
  const mergedArray = new Uint8Array(totalLength);

  buffers.reduce((offset, buffer) => {
    mergedArray.set(new Uint8Array(buffer), offset);
    return offset + buffer.byteLength;
  }, 0);

  return mergedArray.buffer;
}

/**
 * Creates an AAD (Additional Authenticated Data) buffer from two byte values.
 * @param byte1 - The first byte.
 * @param byte2 - The second byte.
 * @returns A Uint8Array containing the two bytes.
 */
function makeAAD(byte1: number, byte2: number): ArrayBuffer {
  return new Uint8Array([byte1, byte2]).buffer;
}

/**
 * Converts a hex string to a Uint8Array.
 * @param hexString - The hex string to convert.
 * @returns A Uint8Array representing the hex string, or null if the input is invalid.
 */
function fromHexString(hexString: string): Uint8Array | null {
  const length = hexString.length;
  if (length > 0 && length % 2 === 0 && /^[\da-f]+$/i.test(hexString)) {
    const byteArray: number[] = [];
    for (let i = 0; i < length / 2; i++) {
      const byte = parseInt(hexString.substring(i * 2, i * 2 + 2), 16);
      byteArray.push(byte);
    }
    return new Uint8Array(byteArray);
  }
  return null;
}

export {
  getBufferWithRandomValuesFromLength,
  mergeBuffers,
  makeAAD,
  fromHexString,
};
