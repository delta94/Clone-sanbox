__d(
  "WACryptoDependencies",
  ["tweetnacl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = self.crypto;
    function a(a) {
      h = a;
      var b = 65536;
      d("tweetnacl").setPRNG(function (c, d) {
        var e,
          f = new Uint8Array(d);
        for (e = 0; e < d; e += b)
          a.getRandomValues(f.subarray(e, e + Math.min(d - e, b)));
        for (e = 0; e < d; e++) c[e] = f[e];
        for (e = 0; e < f.length; e++) f[e] = 0;
      });
    }
    function b() {
      return h;
    }
    g.setCrypto = a;
    g.getCrypto = b;
  },
  98
);

import tweetnacl from "tweetnacl";

let cryptoInstance: Crypto = self.crypto;

export function setCrypto(crypto: Crypto): void {
  cryptoInstance = crypto;
  const chunkSize = 65536;

  tweetnacl.setPRNG((output: Uint8Array, length: number): void => {
    const buffer = new Uint8Array(length);
    for (let i = 0; i < length; i += chunkSize) {
      cryptoInstance.getRandomValues(
        buffer.subarray(i, i + Math.min(length - i, chunkSize))
      );
    }
    for (let i = 0; i < length; i++) {
      output[i] = buffer[i];
    }
    buffer.fill(0);
  });
}

export function getCrypto(): Crypto {
  return cryptoInstance;
}
