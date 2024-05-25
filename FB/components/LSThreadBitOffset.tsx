__d(
  "LSThreadBitOffset",
  ["FBLogger", "I64", "LSBitFlag", "isUnjoinedCMThread"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    f = ["capabilities", "capabilities2", "capabilities3", "capabilities4"];
    var i = 4,
      j = i * 64;
    function a(a, b) {
      if (d("isUnjoinedCMThread").isUnjoinedCMThread(b.threadType)) return !1;
      if (a >= j) {
        c("FBLogger")("LSThreadBitOffset", "out_of_bounds_bit_offset").mustfix(
          "Invalid bitOffset; expected a value between 0 and %d but found %s instead",
          j - 1,
          a
        );
        return !1;
      }
      if (a >= 192)
        return d("LSBitFlag").has(
          (h || (h = d("I64"))).lsl_(h.one, a - 192),
          b.capabilities4
        );
      if (a >= 128)
        return d("LSBitFlag").has(
          (h || (h = d("I64"))).lsl_(h.one, a - 128),
          b.capabilities3
        );
      return a >= 64
        ? d("LSBitFlag").has(
            (h || (h = d("I64"))).lsl_(h.one, a - 64),
            b.capabilities2
          )
        : d("LSBitFlag").has(
            (h || (h = d("I64"))).lsl_(h.one, a),
            b.capabilities
          );
    }
    function b(a, b, c, e, f) {
      return a.reduce(
        function (a, b) {
          var c = a[0],
            e = a[1],
            f = a[2];
          a = a[3];
          if (b >= 192)
            return [
              c,
              e,
              f,
              d("LSBitFlag").set((h || (h = d("I64"))).lsl_(h.one, b - 192), a),
            ];
          if (b >= 128)
            return [
              c,
              e,
              d("LSBitFlag").set((h || (h = d("I64"))).lsl_(h.one, b - 128), f),
              a,
            ];
          return b >= 64
            ? [
                c,
                d("LSBitFlag").set(
                  (h || (h = d("I64"))).lsl_(h.one, b - 64),
                  e
                ),
                f,
                a,
              ]
            : [
                d("LSBitFlag").set((h || (h = d("I64"))).lsl_(h.one, b), c),
                e,
                f,
                a,
              ];
        },
        [b, c, e, f]
      );
    }
    function e(a, b, c, e, f) {
      return a.reduce(
        function (a, b) {
          var c = a[0],
            e = a[1],
            f = a[2];
          a = a[3];
          if (b >= 192)
            return [
              c,
              e,
              f,
              d("LSBitFlag").clear(
                (h || (h = d("I64"))).lsl_(h.one, b - 192),
                a
              ),
            ];
          if (b >= 128)
            return [
              c,
              e,
              d("LSBitFlag").clear(
                (h || (h = d("I64"))).lsl_(h.one, b - 128),
                f
              ),
              a,
            ];
          return b >= 64
            ? [
                c,
                d("LSBitFlag").clear(
                  (h || (h = d("I64"))).lsl_(h.one, b - 64),
                  e
                ),
                f,
                a,
              ]
            : [
                d("LSBitFlag").clear((h || (h = d("I64"))).lsl_(h.one, b), c),
                e,
                f,
                a,
              ];
        },
        [b, c, e, f]
      );
    }
    g.threadCapabilityFields = f;
    g.MAX_SUPPORTED_THREAD_CAPABILITY = i;
    g.has = a;
    g.set = b;
    g.clear = e;
    g.empty = (h || (h = d("I64"))).zero;
  },
  98
);

import FBLogger from "FBLogger";
import { I64 } from "I64";
import LSBitFlag from "LSBitFlag";
import { isUnjoinedCMThread } from "isUnjoinedCMThread";

const threadCapabilityFields = [
  "capabilities",
  "capabilities2",
  "capabilities3",
  "capabilities4",
] as const;
const MAX_SUPPORTED_THREAD_CAPABILITY = 4;
const TOTAL_BIT_OFFSETS = MAX_SUPPORTED_THREAD_CAPABILITY * 64;

interface Thread {
  capabilities: bigint;
  capabilities2: bigint;
  capabilities3: bigint;
  capabilities4: bigint;
  threadType: string;
}

function has(bitOffset: number, thread: Thread): boolean {
  if (isUnjoinedCMThread(thread.threadType)) return false;
  if (bitOffset >= TOTAL_BIT_OFFSETS) {
    FBLogger("LSThreadBitOffset", "out_of_bounds_bit_offset").mustfix(
      "Invalid bitOffset; expected a value between 0 and %d but found %s instead",
      TOTAL_BIT_OFFSETS - 1,
      bitOffset
    );
    return false;
  }

  const I64Instance = I64.one;

  if (bitOffset >= 192) {
    return LSBitFlag.has(
      I64Instance.lsl(I64.one, bitOffset - 192),
      thread.capabilities4
    );
  }
  if (bitOffset >= 128) {
    return LSBitFlag.has(
      I64Instance.lsl(I64.one, bitOffset - 128),
      thread.capabilities3
    );
  }
  if (bitOffset >= 64) {
    return LSBitFlag.has(
      I64Instance.lsl(I64.one, bitOffset - 64),
      thread.capabilities2
    );
  }
  return LSBitFlag.has(
    I64Instance.lsl(I64.one, bitOffset),
    thread.capabilities
  );
}

function set(
  bitOffsets: number[],
  b: bigint,
  c: bigint,
  e: bigint,
  f: bigint
): [bigint, bigint, bigint, bigint] {
  const I64Instance = I64.one;
  return bitOffsets.reduce(
    ([c, e, f, g], bitOffset) => {
      if (bitOffset >= 192) {
        return [
          c,
          e,
          f,
          LSBitFlag.set(I64Instance.lsl(I64.one, bitOffset - 192), g),
        ];
      }
      if (bitOffset >= 128) {
        return [
          c,
          e,
          LSBitFlag.set(I64Instance.lsl(I64.one, bitOffset - 128), f),
          g,
        ];
      }
      if (bitOffset >= 64) {
        return [
          c,
          LSBitFlag.set(I64Instance.lsl(I64.one, bitOffset - 64), e),
          f,
          g,
        ];
      }
      return [LSBitFlag.set(I64Instance.lsl(I64.one, bitOffset), c), e, f, g];
    },
    [b, c, e, f]
  );
}

function clear(
  bitOffsets: number[],
  b: bigint,
  c: bigint,
  e: bigint,
  f: bigint
): [bigint, bigint, bigint, bigint] {
  const I64Instance = I64.one;
  return bitOffsets.reduce(
    ([c, e, f, g], bitOffset) => {
      if (bitOffset >= 192) {
        return [
          c,
          e,
          f,
          LSBitFlag.clear(I64Instance.lsl(I64.one, bitOffset - 192), g),
        ];
      }
      if (bitOffset >= 128) {
        return [
          c,
          e,
          LSBitFlag.clear(I64Instance.lsl(I64.one, bitOffset - 128), f),
          g,
        ];
      }
      if (bitOffset >= 64) {
        return [
          c,
          LSBitFlag.clear(I64Instance.lsl(I64.one, bitOffset - 64), e),
          f,
          g,
        ];
      }
      return [LSBitFlag.clear(I64Instance.lsl(I64.one, bitOffset), c), e, f, g];
    },
    [b, c, e, f]
  );
}

const empty = I64.zero;

export {
  threadCapabilityFields,
  MAX_SUPPORTED_THREAD_CAPABILITY,
  has,
  set,
  clear,
  empty,
};
