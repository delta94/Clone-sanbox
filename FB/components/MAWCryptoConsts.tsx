__d(
  "MAWCryptoConsts",
  [],
  function (a, b, c, d, e, f) {
    a = 60 * 60;
    b = 24 * a;
    c = 32;
    d = new Uint8Array(0).buffer;
    e = 128;
    a = 256;
    var g = 12,
      h = 1,
      i = 2,
      j = 2;
    b = b * 30 * 6;
    var k = 3,
      l = "AES-GCM",
      m = "HKDF",
      n = "SHA-256";
    f.HKDF_SEED_LENGTH_IN_BYTES = c;
    f.HKDF_INFO = d;
    f.AES_GCM_TAG_LENGTH = e;
    f.AES_GCM_KEY_LENGTH = a;
    f.AES_GCM_IV_LENGTH_IN_BYTES = g;
    f.VERSION = h;
    f.CIPHER_ID = i;
    f.ADDITIONAL_DATA_LENGTH_IN_BYTES = j;
    f.ENC_KEY_TTL = b;
    f.MAX_KEYCHAIN_SETUP_RETRIES = k;
    f.AES_GCM = l;
    f.HKDF = m;
    f.SHA256 = n;
  },
  66
);

const ONE_HOUR_IN_SECONDS = 60 * 60;
const ONE_DAY_IN_SECONDS = 24 * ONE_HOUR_IN_SECONDS;
const HKDF_SEED_LENGTH_IN_BYTES = 32;
const HKDF_INFO = new Uint8Array(0).buffer;
const AES_GCM_TAG_LENGTH = 128;
const AES_GCM_KEY_LENGTH = 256;
const AES_GCM_IV_LENGTH_IN_BYTES = 12;
const VERSION = 1;
const CIPHER_ID = 2;
const ADDITIONAL_DATA_LENGTH_IN_BYTES = 2;
const ENC_KEY_TTL = ONE_DAY_IN_SECONDS * 30 * 6;
const MAX_KEYCHAIN_SETUP_RETRIES = 3;
const AES_GCM = "AES-GCM";
const HKDF = "HKDF";
const SHA256 = "SHA-256";

export {
  HKDF_SEED_LENGTH_IN_BYTES,
  HKDF_INFO,
  AES_GCM_TAG_LENGTH,
  AES_GCM_KEY_LENGTH,
  AES_GCM_IV_LENGTH_IN_BYTES,
  VERSION,
  CIPHER_ID,
  ADDITIONAL_DATA_LENGTH_IN_BYTES,
  ENC_KEY_TTL,
  MAX_KEYCHAIN_SETUP_RETRIES,
  AES_GCM,
  HKDF,
  SHA256,
};
