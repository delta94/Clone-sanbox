__d(
  "MAWSubtleCrypto",
  [],
  function (a, b, c, d, e, f) {
    a = self.crypto;
    b = a && (a.subtle || a.webkitSubtle || a.subtle);
    f.MAWSubtleCrypto = b;
  },
  66
);

const crypto = self.crypto;
const subtleCrypto: SubtleCrypto | null =
  crypto && (crypto.subtle || (crypto as any).webkitSubtle);

export const MAWSubtleCrypto = subtleCrypto;
