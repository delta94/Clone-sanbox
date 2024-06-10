__d(
  "MAWVaultMaterials",
  ["FBLogger", "WAArrayBufferUtils", "randomInt", "tweetnacl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = null;
    function j(a) {
      i = a;
    }
    function k() {
      return h;
    }
    function l(a) {
      h = a;
    }
    function a() {
      (h = null), (i = null);
    }
    function m() {
      return o() != null && k() != null;
    }
    function n() {
      var a = 1e9,
        b = 9999999999;
      return c("randomInt")(a, b) + "##" + c("randomInt")(a, b);
    }
    function o() {
      return i;
    }
    function p() {
      if (!m())
        throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
          "Vault materials are null"
        );
      return { encryptionKey: h, prefixAndSuffix: i };
    }
    function b(a) {
      var b = m();
      c("FBLogger")("mpf_web_foundations").debug(
        "Setting vault materials -- vaultMaterials=%s, previouslySetup=%s",
        Boolean(a).toString(),
        b
      );
      if (!b) {
        q(
          (b = a) != null
            ? b
            : {
                encryptionKey: d("tweetnacl").randomBytes(32).buffer,
                prefixAndSuffix: n(),
              }
        );
      }
      return p();
    }
    function q(a) {
      var b = a.encryptionKey;
      a = a.prefixAndSuffix;
      if (b == null || a == null)
        throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
          "Cannot set null values for encryption key and prefix"
        );
      l(b);
      j(a);
    }
    function e() {
      return r(p());
    }
    function r(a) {
      var b = a.encryptionKey;
      a = a.prefixAndSuffix;
      if (a != null && b != null) {
        b = d("WAArrayBufferUtils").arrayBufferToString(b);
        return JSON.stringify({ encryptionKey: b, prefixAndSuffix: a });
      } else return "";
    }
    function f(a) {
      if (a === "") return null;
      else {
        a = JSON.parse(a);
        if (a.encryptionKey == null || a.prefixAndSuffix == null)
          throw c("FBLogger")("mpf_web_foundations").mustfixThrow(
            "Vault materials were not in correct format"
          );
        var b = d("WAArrayBufferUtils").stringToArrayBuffer(a.encryptionKey);
        a = a.prefixAndSuffix;
        return { encryptionKey: b, prefixAndSuffix: a };
      }
    }
    g.TEST_ONLY_clearVaultMaterials = a;
    g.hasVaultBeenSetup = m;
    g.getVaultPrefixAndSuffix = o;
    g.getVaultMaterials = p;
    g.initializeVaultMaterials = b;
    g.materialsToString = e;
    g.fromMaterialsToString = r;
    g.fromStringToMaterials = f;
  },
  98
);

import { FBLogger } from "FBLogger";
import { WAArrayBufferUtils } from "WAArrayBufferUtils";
import { randomInt } from "randomInt";
import { tweetnacl } from "tweetnacl";

type VaultMaterials = {
  encryptionKey: ArrayBuffer;
  prefixAndSuffix: string;
};

let encryptionKey: ArrayBuffer | null = null;
let prefixAndSuffix: string | null = null;

function setPrefixAndSuffix(prefixSuffix: string): void {
  prefixAndSuffix = prefixSuffix;
}

function getEncryptionKey(): ArrayBuffer | null {
  return encryptionKey;
}

function setEncryptionKey(key: ArrayBuffer): void {
  encryptionKey = key;
}

export function clearVaultMaterials(): void {
  encryptionKey = null;
  prefixAndSuffix = null;
}

export function hasVaultBeenSetup(): boolean {
  return getPrefixAndSuffix() !== null && getEncryptionKey() !== null;
}

export function generatePrefixAndSuffix(): string {
  const min = 1e9;
  const max = 9999999999;
  return `${randomInt(min, max)}##${randomInt(min, max)}`;
}

export function getPrefixAndSuffix(): string | null {
  return prefixAndSuffix;
}

export function getVaultMaterials(): VaultMaterials {
  if (!hasVaultBeenSetup()) {
    throw FBLogger("mpf_web_foundations").mustfixThrow(
      "Vault materials are null"
    );
  }
  return {
    encryptionKey: encryptionKey as ArrayBuffer,
    prefixAndSuffix: prefixAndSuffix as string,
  };
}

export function initializeVaultMaterials(
  materials?: VaultMaterials
): VaultMaterials {
  const wasSetup = hasVaultBeenSetup();
  FBLogger("mpf_web_foundations").debug(
    "Setting vault materials -- vaultMaterials=%s, previouslySetup=%s",
    Boolean(materials).toString(),
    wasSetup
  );

  if (!wasSetup) {
    setVaultMaterials(
      materials ?? {
        encryptionKey: tweetnacl.randomBytes(32).buffer,
        prefixAndSuffix: generatePrefixAndSuffix(),
      }
    );
  }

  return getVaultMaterials();
}

function setVaultMaterials(materials: VaultMaterials): void {
  const { encryptionKey, prefixAndSuffix } = materials;

  if (!encryptionKey || !prefixAndSuffix) {
    throw FBLogger("mpf_web_foundations").mustfixThrow(
      "Cannot set null values for encryption key and prefix"
    );
  }

  setEncryptionKey(encryptionKey);
  setPrefixAndSuffix(prefixAndSuffix);
}

export function materialsToString(): string {
  return fromMaterialsToString(getVaultMaterials());
}

export function fromMaterialsToString(materials: VaultMaterials): string {
  const { encryptionKey, prefixAndSuffix } = materials;

  if (encryptionKey && prefixAndSuffix) {
    const encryptionKeyString =
      WAArrayBufferUtils.arrayBufferToString(encryptionKey);
    return JSON.stringify({
      encryptionKey: encryptionKeyString,
      prefixAndSuffix,
    });
  } else {
    return "";
  }
}

export function fromStringToMaterials(
  materialsString: string
): VaultMaterials | null {
  if (materialsString === "") {
    return null;
  }

  const parsedMaterials = JSON.parse(materialsString);

  if (!parsedMaterials.encryptionKey || !parsedMaterials.prefixAndSuffix) {
    throw FBLogger("mpf_web_foundations").mustfixThrow(
      "Vault materials were not in correct format"
    );
  }

  const encryptionKey = WAArrayBufferUtils.stringToArrayBuffer(
    parsedMaterials.encryptionKey
  );
  const prefixAndSuffix = parsedMaterials.prefixAndSuffix;

  return { encryptionKey, prefixAndSuffix };
}
