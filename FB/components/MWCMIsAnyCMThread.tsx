__d(
  "MWCMIsAnyCMThread",
  ["I64", "LSIntEnum"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      if (
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(18)
        ) ||
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(19)
        ) ||
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(23)
        ) ||
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(24)
        ) ||
        (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(21))
      )
        return !0;
      else
        return (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(22)
        );
    }
    g["default"] = a;
  },
  98
);

import { I64 } from "I64";
import { LSIntEnum } from "LSIntEnum";

function MWCMIsAnyCMThread(a: any): boolean {
  const i64Instance = I64 as any;
  const lsIntEnumInstance = LSIntEnum as any;

  return (
    i64Instance.equal(a, lsIntEnumInstance.ofNumber(18)) ||
    i64Instance.equal(a, lsIntEnumInstance.ofNumber(19)) ||
    i64Instance.equal(a, lsIntEnumInstance.ofNumber(23)) ||
    i64Instance.equal(a, lsIntEnumInstance.ofNumber(24)) ||
    i64Instance.equal(a, lsIntEnumInstance.ofNumber(21)) ||
    i64Instance.equal(a, lsIntEnumInstance.ofNumber(22))
  );
}

export default MWCMIsAnyCMThread;
