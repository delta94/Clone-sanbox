__d(
  "MAWKeychainNaClCrypto",
  ["MAWCryptoConsts", "MAWKeychainCrypto", "WABase64", "tweetnacl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a(a) {
        var c;
        c = b.call(this, a) || this;
        c.name = "EARError";
        c.message = a;
        return c;
      }
      return a;
    })(babelHelpers.wrapNativeSuper(Error));
    function i(a, b, c) {
      c = c ? c : d("MAWKeychainCrypto").ADDITIONAL_DATA;
      c = new Uint8Array(c);
      var e = d("tweetnacl").randomBytes(d("tweetnacl").secretbox.nonceLength);
      b = d("tweetnacl").secretbox(b, e, new Uint8Array(a));
      a = new Uint8Array(
        d("MAWCryptoConsts").ADDITIONAL_DATA_LENGTH_IN_BYTES +
          e.length +
          b.length
      );
      a.set(c);
      a.set(e, d("MAWCryptoConsts").ADDITIONAL_DATA_LENGTH_IN_BYTES);
      a.set(b, d("MAWCryptoConsts").ADDITIONAL_DATA_LENGTH_IN_BYTES + e.length);
      return a.buffer;
    }
    function j(a, b, c) {
      return d("WABase64").encodeB64(i(a, b, c));
    }
    function k(a, b, c) {
      var e, f;
      b.slice(0, (e = d("MAWCryptoConsts")).ADDITIONAL_DATA_LENGTH_IN_BYTES);
      var g = b.slice(
        e.ADDITIONAL_DATA_LENGTH_IN_BYTES,
        e.ADDITIONAL_DATA_LENGTH_IN_BYTES +
          (f = d("tweetnacl")).secretbox.nonceLength
      );
      e = b.slice(
        e.ADDITIONAL_DATA_LENGTH_IN_BYTES + f.secretbox.nonceLength,
        e.ADDITIONAL_DATA_LENGTH_IN_BYTES +
          f.secretbox.nonceLength +
          4 * Math.ceil(b.byteLength / 3)
      );
      b = f.secretbox.open(
        new Uint8Array(e),
        new Uint8Array(g),
        new Uint8Array(a)
      );
      if (b == null) {
        throw new h(
          "decryptTweetNaCl was unable to decrypt an entity. Attempting to use key version : " +
            ((f = c) != null ? f : "non-provided") +
            "."
        );
      }
      return b;
    }
    function l(a, b, c) {
      return k(a, d("WABase64").decodeB64(b), c);
    }
    function a(a, b, c) {
      return j(a, b, c);
    }
    function b(a, b, c) {
      return l(a, b, c);
    }
    g.EARDecryptionError = h;
    g.encryptTweetNaClArrayBuffer = i;
    g.encryptTweetNaCl = j;
    g.decryptTweetNaClArrayBuffer = k;
    g.decryptTweetNaCl = l;
    g.encrypt = a;
    g.decrypt = b;
  },
  98
);

import MAWCryptoConsts from "MAWCryptoConsts";
import { ADDITIONAL_DATA } from "MAWKeychainCrypto";
import WABase64 from "WABase64";
import nacl from "tweetnacl";

class EARDecryptionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EARDecryptionError";
  }
}

function encryptTweetNaClArrayBuffer(
  key: Uint8Array,
  message: Uint8Array,
  additionalData?: Uint8Array
): ArrayBuffer {
  const ad = additionalData ? additionalData : ADDITIONAL_DATA;
  const adUint8Array = new Uint8Array(ad);
  const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
  const encrypted = nacl.secretbox(message, nonce, new Uint8Array(key));
  const combined = new Uint8Array(
    MAWCryptoConsts.ADDITIONAL_DATA_LENGTH_IN_BYTES +
      nonce.length +
      encrypted.length
  );
  combined.set(adUint8Array);
  combined.set(nonce, MAWCryptoConsts.ADDITIONAL_DATA_LENGTH_IN_BYTES);
  combined.set(
    encrypted,
    MAWCryptoConsts.ADDITIONAL_DATA_LENGTH_IN_BYTES + nonce.length
  );
  return combined.buffer;
}

function encryptTweetNaCl(
  key: Uint8Array,
  message: Uint8Array,
  additionalData?: Uint8Array
): string {
  return WABase64.encodeB64(
    encryptTweetNaClArrayBuffer(key, message, additionalData)
  );
}

function decryptTweetNaClArrayBuffer(
  key: Uint8Array,
  encrypted: Uint8Array,
  version?: string
): Uint8Array {
  const adLength = MAWCryptoConsts.ADDITIONAL_DATA_LENGTH_IN_BYTES;
  const nonceLength = nacl.secretbox.nonceLength;

  const nonce = encrypted.slice(adLength, adLength + nonceLength);
  const ciphertext = encrypted.slice(adLength + nonceLength);

  const decrypted = nacl.secretbox.open(ciphertext, nonce, new Uint8Array(key));
  if (decrypted === null) {
    throw new EARDecryptionError(
      `decryptTweetNaCl was unable to decrypt an entity. Attempting to use key version: ${
        version ?? "non-provided"
      }.`
    );
  }

  return decrypted;
}

function decryptTweetNaCl(
  key: Uint8Array,
  base64String: string,
  version?: string
): Uint8Array {
  const encrypted = WABase64.decodeB64(base64String);
  return decryptTweetNaClArrayBuffer(key, encrypted, version);
}

function encrypt(
  key: Uint8Array,
  message: Uint8Array,
  additionalData?: Uint8Array
): string {
  return encryptTweetNaCl(key, message, additionalData);
}

function decrypt(
  key: Uint8Array,
  base64String: string,
  version?: string
): Uint8Array {
  return decryptTweetNaCl(key, base64String, version);
}

export {
  EARDecryptionError,
  encryptTweetNaClArrayBuffer,
  encryptTweetNaCl,
  decryptTweetNaClArrayBuffer,
  decryptTweetNaCl,
  encrypt,
  decrypt,
};
