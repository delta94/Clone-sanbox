__d(
  "LSCommunityBitOffset",
  ["I64", "LSBitFlag"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, b) {
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
    g.has = a;
  },
  98
);

import { I64 } from "I64";
import { LSBitFlag } from "LSBitFlag";

interface Capabilities {
  capabilities: number;
  capabilities2: number;
  capabilities3: number;
}

export function hasCapability(
  offset: number,
  capabilities: Capabilities
): boolean {
  if (offset >= 128) {
    return LSBitFlag.has(
      I64.lsl_(I64.one, offset - 128),
      capabilities.capabilities3
    );
  } else if (offset >= 64) {
    return LSBitFlag.has(
      I64.lsl_(I64.one, offset - 64),
      capabilities.capabilities2
    );
  } else {
    return LSBitFlag.has(I64.lsl_(I64.one, offset), capabilities.capabilities);
  }
}
