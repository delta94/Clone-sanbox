__d(
  "MAWKeychainCrypto",
  [
    "FBLogger",
    "MAWCryptoConsts",
    "MAWKeychainUtil",
    "MAWSubtleCrypto",
    "MessengerWebInitData",
    "WABase64",
    "asyncToGeneratorRuntime",
    "err",
    "memoizeOneWithArgs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("MAWKeychainUtil").makeAAD(
      d("MAWCryptoConsts").VERSION,
      d("MAWCryptoConsts").CIPHER_ID
    );
    function a(a, b, e) {
      var f = d("MAWKeychainUtil").getBufferWithRandomValuesFromLength(
          d("MAWCryptoConsts").AES_GCM_IV_LENGTH_IN_BYTES
        ),
        g = e ? e : h;
      return d("MAWSubtleCrypto")
        .MAWSubtleCrypto.encrypt(
          {
            additionalData: g,
            iv: new Uint8Array(f),
            name: d("MAWCryptoConsts").AES_GCM,
            tagLength: d("MAWCryptoConsts").AES_GCM_TAG_LENGTH,
          },
          a,
          b
        )
        .then(function (a) {
          a = d("MAWKeychainUtil").mergeBuffers([g, f, a]);
          return d("WABase64").encodeB64(a);
        })
        ["catch"](function (b) {
          throw c("FBLogger")("mpf_web_foundations")
            .catching(b)
            .mustfixThrow(
              "Failed to encryptDataToStringBuffer",
              typeof a,
              a.constructor.name
            );
        });
    }
    function e(a, b) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var e,
          f = new Uint8Array(d("WABase64").decodeB64(b)),
          g = f.subarray(
            0,
            (e = d("MAWCryptoConsts")).ADDITIONAL_DATA_LENGTH_IN_BYTES
          ),
          h = f.subarray(
            e.ADDITIONAL_DATA_LENGTH_IN_BYTES,
            e.AES_GCM_IV_LENGTH_IN_BYTES + e.ADDITIONAL_DATA_LENGTH_IN_BYTES
          );
        f = f.subarray(
          e.AES_GCM_IV_LENGTH_IN_BYTES + e.ADDITIONAL_DATA_LENGTH_IN_BYTES
        );
        try {
          e = yield d("MAWSubtleCrypto").MAWSubtleCrypto.decrypt(
            {
              additionalData: g,
              iv: h,
              name: d("MAWCryptoConsts").AES_GCM,
              tagLength: d("MAWCryptoConsts").AES_GCM_TAG_LENGTH,
            },
            a,
            f
          );
          return e;
        } catch (d) {
          c("FBLogger")("mpf_web_foundations")
            .catching(d)
            .mustfix(
              "Failed to decryptDataToArrayBuffer",
              a.constructor.name,
              b.length,
              String(d)
            );
          throw d;
        }
      });
      return i.apply(this, arguments);
    }
    function j() {
      var a = d("MAWKeychainUtil").fromHexString(
        c("MessengerWebInitData").accountKey
      );
      if (a == null)
        throw c("err")(
          "Invalid value for account key. Is empty=" +
            String(c("MessengerWebInitData").accountKey.length === 0)
        );
      return a.buffer;
    }
    function k() {
      var a = j();
      return d("MAWSubtleCrypto").MAWSubtleCrypto.importKey(
        "raw",
        a,
        { name: d("MAWCryptoConsts").AES_GCM },
        !1,
        ["encrypt", "decrypt"]
      );
    }
    function f() {
      return d("WABase64").encodeB64(
        d("MAWKeychainUtil").getBufferWithRandomValuesFromLength(
          d("MAWCryptoConsts").HKDF_SEED_LENGTH_IN_BYTES
        )
      );
    }
    function l(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = d("WABase64").decodeB64(a);
        try {
          a = yield d("MAWSubtleCrypto").MAWSubtleCrypto.importKey(
            "raw",
            a,
            { name: d("MAWCryptoConsts").HKDF },
            !1,
            ["deriveKey"]
          );
          return a;
        } catch (a) {
          c("FBLogger")("mpf_web_foundations")
            .catching(a)
            .mustfix("Failed to importBrowserEncryptionKey");
          throw a;
        }
      });
      return m.apply(this, arguments);
    }
    function n() {
      return d("MAWKeychainUtil").getBufferWithRandomValuesFromLength(
        d("MAWCryptoConsts").HKDF_SEED_LENGTH_IN_BYTES
      );
    }
    function o(a, b) {
      var e;
      return d("MAWSubtleCrypto")
        .MAWSubtleCrypto.deriveKey(
          {
            hash: { name: (e = d("MAWCryptoConsts")).SHA256 },
            info: e.HKDF_INFO,
            name: e.HKDF,
            salt: b,
          },
          a,
          { length: e.AES_GCM_KEY_LENGTH, name: e.AES_GCM },
          !0,
          ["encrypt", "decrypt"]
        )
        .then(function (a) {
          return d("MAWSubtleCrypto").MAWSubtleCrypto.exportKey("raw", a);
        })
        ["catch"](function (a) {
          c("FBLogger")("mpf_web_foundations")
            .catching(a)
            .mustfix("Failed to genDatabaseEncryptionKey");
          throw a;
        });
    }
    function p(a) {
      a = a.slice(0, d("MAWCryptoConsts").ADDITIONAL_DATA_LENGTH_IN_BYTES);
      return new DataView(a).getUint8(0);
    }
    function q(a) {
      return p(d("WABase64").decodeB64(a));
    }
    var r = c("memoizeOneWithArgs")(function () {
      return k();
    });
    function s(a) {
      return t.apply(this, arguments);
    }
    function t() {
      t = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = d("WABase64").decodeB64(a);
        a = yield d("MAWSubtleCrypto").MAWSubtleCrypto.digest(
          d("MAWCryptoConsts").SHA256,
          a
        );
        return d("WABase64").encodeB64(a);
      });
      return t.apply(this, arguments);
    }
    g.ADDITIONAL_DATA = h;
    g.encryptDataToStringBuffer = a;
    g.decryptDataToArrayBuffer = e;
    g.getAccountKeyBuffer = j;
    g.genAccountKey = k;
    g.genBrowserEncryptionKeyString = f;
    g.importBrowserEncryptionKey = l;
    g.genDatabaseEncryptionSeed = n;
    g.genDatabaseEncryptionKey = o;
    g.getKeyVersionFromCipherData = p;
    g.getKeyVersionFromCipherDataString = q;
    g.getAccountKey = r;
    g.generateHashString = s;
  },
  98
);

import FBLogger from "FBLogger";
import {
  AES_GCM,
  AES_GCM_IV_LENGTH_IN_BYTES,
  AES_GCM_KEY_LENGTH,
  AES_GCM_TAG_LENGTH,
  ADDITIONAL_DATA_LENGTH_IN_BYTES,
  HKDF,
  HKDF_INFO,
  HKDF_SEED_LENGTH_IN_BYTES,
  SHA256,
  VERSION,
  CIPHER_ID,
} from "MAWCryptoConsts";
import {
  makeAAD,
  getBufferWithRandomValuesFromLength,
  mergeBuffers,
  fromHexString,
} from "MAWKeychainUtil";
import { MAWSubtleCrypto } from "MAWSubtleCrypto";
import MessengerWebInitData from "MessengerWebInitData";
import WABase64 from "WABase64";
import err from "err";
import memoizeOneWithArgs from "memoizeOneWithArgs";

const ADDITIONAL_DATA = makeAAD(VERSION, CIPHER_ID);

async function encryptDataToStringBuffer(
  key: CryptoKey,
  data: ArrayBuffer,
  additionalData?: Uint8Array
): Promise<string> {
  const iv = getBufferWithRandomValuesFromLength(AES_GCM_IV_LENGTH_IN_BYTES);
  const aad = additionalData ? additionalData : ADDITIONAL_DATA;

  try {
    const encrypted = await MAWSubtleCrypto.encrypt(
      {
        additionalData: aad,
        iv: new Uint8Array(iv),
        name: AES_GCM,
        tagLength: AES_GCM_TAG_LENGTH,
      },
      key,
      data
    );
    const mergedBuffer = mergeBuffers([aad, iv, encrypted]);
    return WABase64.encodeB64(mergedBuffer);
  } catch (error) {
    throw FBLogger("mpf_web_foundations")
      .catching(error)
      .mustfixThrow(
        "Failed to encryptDataToStringBuffer",
        typeof key,
        key.constructor.name
      );
  }
}

async function decryptDataToArrayBuffer(
  key: CryptoKey,
  base64String: string
): Promise<ArrayBuffer> {
  const buffer = new Uint8Array(WABase64.decodeB64(base64String));
  const additionalData = buffer.subarray(0, ADDITIONAL_DATA_LENGTH_IN_BYTES);
  const iv = buffer.subarray(
    ADDITIONAL_DATA_LENGTH_IN_BYTES,
    ADDITIONAL_DATA_LENGTH_IN_BYTES + AES_GCM_IV_LENGTH_IN_BYTES
  );
  const encryptedData = buffer.subarray(
    ADDITIONAL_DATA_LENGTH_IN_BYTES + AES_GCM_IV_LENGTH_IN_BYTES
  );

  try {
    const decrypted = await MAWSubtleCrypto.decrypt(
      {
        additionalData,
        iv,
        name: AES_GCM,
        tagLength: AES_GCM_TAG_LENGTH,
      },
      key,
      encryptedData
    );
    return decrypted;
  } catch (error) {
    FBLogger("mpf_web_foundations")
      .catching(error)
      .mustfix(
        "Failed to decryptDataToArrayBuffer",
        key.constructor.name,
        base64String.length,
        String(error)
      );
    throw error;
  }
}

function getAccountKeyBuffer(): ArrayBuffer {
  const accountKeyHex = MessengerWebInitData.accountKey;
  const accountKey = fromHexString(accountKeyHex);
  if (!accountKey) {
    throw err(
      `Invalid value for account key. Is empty=${String(
        accountKeyHex.length === 0
      )}`
    );
  }
  return accountKey.buffer;
}

function genAccountKey(): Promise<CryptoKey> {
  const accountKeyBuffer = getAccountKeyBuffer();
  return MAWSubtleCrypto.importKey(
    "raw",
    accountKeyBuffer,
    { name: AES_GCM },
    false,
    ["encrypt", "decrypt"]
  );
}

function genBrowserEncryptionKeyString(): string {
  return WABase64.encodeB64(
    getBufferWithRandomValuesFromLength(HKDF_SEED_LENGTH_IN_BYTES)
  );
}

async function importBrowserEncryptionKey(
  base64Key: string
): Promise<CryptoKey> {
  const keyBuffer = WABase64.decodeB64(base64Key);
  try {
    return await MAWSubtleCrypto.importKey(
      "raw",
      keyBuffer,
      { name: HKDF },
      false,
      ["deriveKey"]
    );
  } catch (error) {
    FBLogger("mpf_web_foundations")
      .catching(error)
      .mustfix("Failed to importBrowserEncryptionKey");
    throw error;
  }
}

function genDatabaseEncryptionSeed(): ArrayBuffer {
  return getBufferWithRandomValuesFromLength(HKDF_SEED_LENGTH_IN_BYTES);
}

async function genDatabaseEncryptionKey(
  baseKey: CryptoKey,
  salt: Uint8Array
): Promise<ArrayBuffer> {
  try {
    const derivedKey = await MAWSubtleCrypto.deriveKey(
      {
        hash: { name: SHA256 },
        info: HKDF_INFO,
        name: HKDF,
        salt,
      },
      baseKey,
      { length: AES_GCM_KEY_LENGTH, name: AES_GCM },
      true,
      ["encrypt", "decrypt"]
    );
    return MAWSubtleCrypto.exportKey("raw", derivedKey);
  } catch (error) {
    FBLogger("mpf_web_foundations")
      .catching(error)
      .mustfix("Failed to genDatabaseEncryptionKey");
    throw error;
  }
}

function getKeyVersionFromCipherData(cipherData: ArrayBuffer): number {
  const additionalData = cipherData.slice(0, ADDITIONAL_DATA_LENGTH_IN_BYTES);
  return new DataView(additionalData).getUint8(0);
}

function getKeyVersionFromCipherDataString(base64String: string): number {
  return getKeyVersionFromCipherData(WABase64.decodeB64(base64String));
}

const getAccountKey = memoizeOneWithArgs(() => genAccountKey());

async function generateHashString(base64String: string): Promise<string> {
  const data = WABase64.decodeB64(base64String);
  const hash = await MAWSubtleCrypto.digest(SHA256, data);
  return WABase64.encodeB64(hash);
}

export {
  ADDITIONAL_DATA,
  encryptDataToStringBuffer,
  decryptDataToArrayBuffer,
  getAccountKeyBuffer,
  genAccountKey,
  genBrowserEncryptionKeyString,
  importBrowserEncryptionKey,
  genDatabaseEncryptionSeed,
  genDatabaseEncryptionKey,
  getKeyVersionFromCipherData,
  getKeyVersionFromCipherDataString,
  getAccountKey,
  generateHashString,
};
