__d(
  "isUnjoinedCMThread",
  ["I64", "LSIntEnum"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      return (
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(19)
        ) ||
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(24)
        ) ||
        (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(22))
      );
    }
    g.isUnjoinedCMThread = a;
  },
  98
);

import I64 from "I64";
import { LSIntEnum } from "LSIntEnum";

let I64Instance: typeof I64;
let LSIntEnumInstance: typeof LSIntEnum;

function isUnjoinedCMThread(threadType: any): boolean {
  if (!I64Instance) {
    I64Instance = I64;
  }
  if (!LSIntEnumInstance) {
    LSIntEnumInstance = LSIntEnum;
  }

  return (
    I64Instance.equal(threadType, LSIntEnumInstance.ofNumber(19)) ||
    I64Instance.equal(threadType, LSIntEnumInstance.ofNumber(24)) ||
    I64Instance.equal(threadType, LSIntEnumInstance.ofNumber(22))
  );
}

export { isUnjoinedCMThread };
