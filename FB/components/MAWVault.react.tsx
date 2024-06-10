__d(
  "MAWVault",
  ["FBLogger", "MAWKeychainNaClCrypto", "MAWVaultMaterials", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = new Map();
    function j(a) {
      if (!c("gkx")("23909")) return !1;
      var b = d("MAWVaultMaterials").getVaultPrefixAndSuffix();
      b = b == null ? !1 : new RegExp(b + ".*" + b).test(a);
      return b;
    }
    function k(a, b) {
      b === void 0 && (b = !1);
      if (!c("gkx")("23909")) return a;
      if (j(a)) {
        var e = d("MAWVaultMaterials").getVaultMaterials(),
          f = e.encryptionKey;
        e = e.prefixAndSuffix;
        if (e == null)
          throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
            "Vault prefix and suffix should not be null when unvaulting"
          );
        var g = new RegExp(e + "(.*)" + e);
        g = a.match(g);
        if (g == null || g.length != 2)
          throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
            "Could not retrieve inner value to unvault"
          );
        if (f == null)
          throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
            "Vault encryption key was null before unvault"
          );
        g = g[1];
        e = "" + e + g + e;
        var h = m(f, g);
        return a.replace(e, function () {
          return h;
        });
      }
      if (b) {
        f = new RegExp("^[0-9]{10}##[0-9]{10}.*[0-9]{10}##[0-9]{10}$").test(a);
        if (f)
          throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
            "Encountered vaulted value with incorrect key."
          );
      }
      return a;
    }
    function a(a) {
      if (a === "") return a;
      if (!c("gkx")("23909")) return a;
      if (!d("MAWVaultMaterials").hasVaultBeenSetup()) {
        c("FBLogger")("mpf_web_foundations").mustfix(
          "Attempted to vault value while materials were not setup"
        );
        return a;
      }
      if (j(a)) {
        c("FBLogger")("mpf_web_foundations").warn(
          "Attempted to vault value that's already been vaulted"
        );
        return a;
      }
      var b = d("MAWVaultMaterials").getVaultMaterials(),
        e = b.encryptionKey;
      b = b.prefixAndSuffix;
      if (b == null || e == null)
        throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
          "Cannot vault before vault materials are set"
        );
      e = l(e, a);
      return "" + b + e + b;
    }
    function b(a) {
      if (!c("gkx")("23909")) return a;
      if (!j(a))
        throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
          "Value should be vaulted"
        );
      return k(a);
    }
    function l(a, b) {
      var c = h == null ? void 0 : h.get(b);
      if (c != null) return c;
      c = new TextEncoder().encode(b).buffer;
      a = d("MAWKeychainNaClCrypto").encryptTweetNaCl(a, new Uint8Array(c));
      h == null ? void 0 : h.set(b, a);
      i == null ? void 0 : i.set(a, b);
      return a;
    }
    function m(a, b) {
      var c = i == null ? void 0 : i.get(b);
      if (c != null) return c;
      c = new TextDecoder().decode(
        d("MAWKeychainNaClCrypto").decryptTweetNaCl(a, b)
      );
      h == null ? void 0 : h.set(c, b);
      i == null ? void 0 : i.set(b, c);
      return c;
    }
    g.isVaulted = j;
    g.unvault = k;
    g.vault = a;
    g.unvaultOrThrow = b;
  },
  98
);

import FBLogger from "FBLogger";
import { encryptTweetNaCl, decryptTweetNaCl } from "MAWKeychainNaClCrypto";
import {
  getVaultMaterials,
  getVaultPrefixAndSuffix,
  hasVaultBeenSetup,
} from "MAWVaultMaterials";
import gkx from "gkx";

// Maps for caching
const encryptionCache = new Map<string, string>();
const decryptionCache = new Map<string, string>();

// Check if the value is vaulted
function isVaulted(value: string): boolean {
  if (!gkx("23909")) return false;
  const prefixSuffix = getVaultPrefixAndSuffix();
  return prefixSuffix
    ? new RegExp(`${prefixSuffix}.*${prefixSuffix}`).test(value)
    : false;
}

// Vault a value
function vault(value: string): string {
  if (value === "") return value;
  if (!gkx("23909")) return value;
  if (!hasVaultBeenSetup()) {
    FBLogger("mpf_web_foundations").mustfix(
      "Attempted to vault value while materials were not setup"
    );
    return value;
  }
  if (isVaulted(value)) {
    FBLogger("mpf_web_foundations").warn(
      "Attempted to vault value that's already been vaulted"
    );
    return value;
  }

  const { encryptionKey, prefixAndSuffix } = getVaultMaterials();
  if (!prefixAndSuffix || !encryptionKey) {
    throw FBLogger("mpf_web_foundations").mustfixThrow(
      "Cannot vault before vault materials are set"
    );
  }

  const encryptedValue = encryptValue(encryptionKey, value);
  return `${prefixAndSuffix}${encryptedValue}${prefixAndSuffix}`;
}

// Unvault a value
function unvault(value: string, allowIncomplete = false): string {
  if (!gkx("23909")) return value;
  if (isVaulted(value)) {
    const { encryptionKey, prefixAndSuffix } = getVaultMaterials();
    if (!prefixAndSuffix) {
      throw FBLogger("mpf_web_foundations").mustfixThrow(
        "Vault prefix and suffix should not be null when unvaulting"
      );
    }
    if (!encryptionKey) {
      throw FBLogger("mpf_web_foundations").mustfixThrow(
        "Vault encryption key was null before unvault"
      );
    }

    const regex = new RegExp(`${prefixAndSuffix}(.*)${prefixAndSuffix}`);
    const match = value.match(regex);
    if (!match || match.length !== 2) {
      throw FBLogger("mpf_web_foundations").mustfixThrow(
        "Could not retrieve inner value to unvault"
      );
    }

    const innerValue = match[1];
    const originalValue = decryptValue(encryptionKey, innerValue);
    return value.replace(regex, originalValue);
  }

  if (allowIncomplete) {
    const isIncorrectlyVaulted =
      /^[0-9]{10}##[0-9]{10}.*[0-9]{10}##[0-9]{10}$/.test(value);
    if (isIncorrectlyVaulted) {
      throw FBLogger("mpf_web_foundations").mustfixThrow(
        "Encountered vaulted value with incorrect key."
      );
    }
  }

  return value;
}

// Unvault or throw if the value is not vaulted
function unvaultOrThrow(value: string): string {
  if (!gkx("23909")) return value;
  if (!isVaulted(value)) {
    throw FBLogger("mpf_web_foundations").mustfixThrow(
      "Value should be vaulted"
    );
  }
  return unvault(value);
}

// Encrypt the value and cache it
function encryptValue(encryptionKey: string, value: string): string {
  if (encryptionCache.has(value)) {
    return encryptionCache.get(value)!;
  }

  const buffer = new TextEncoder().encode(value).buffer;
  const encrypted = encryptTweetNaCl(encryptionKey, new Uint8Array(buffer));
  encryptionCache.set(value, encrypted);
  decryptionCache.set(encrypted, value);
  return encrypted;
}

// Decrypt the value and cache it
function decryptValue(encryptionKey: string, value: string): string {
  if (decryptionCache.has(value)) {
    return decryptionCache.get(value)!;
  }

  const decrypted = new TextDecoder().decode(
    decryptTweetNaCl(encryptionKey, value)
  );
  encryptionCache.set(decrypted, value);
  decryptionCache.set(value, decrypted);
  return decrypted;
}

export { isVaulted, unvault, vault, unvaultOrThrow };
