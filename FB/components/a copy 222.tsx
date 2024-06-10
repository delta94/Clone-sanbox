__d(
  "LSFactory",
  [
    "LS",
    "LSDynamicDependencies",
    "LSLocalizedStrings",
    "LSLocalizedStringsV2",
    "LSMetadata",
    "cr:8709",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      dynamic: !1,
    };

    function a(a, e) {
      e === void 0 && (e = h);
      a = c("LS")(
        1,
        d("LSMetadata").metadata,
        d("LSDynamicDependencies").cachedModules,
        c("LSLocalizedStrings"),
        c("LSLocalizedStringsV2"),
        a,
        void 0,
        void 0,
        e.dynamic
      );
      return b("cr:8709") != null && b("cr:8709").isProfilingEnabled()
        ? b("cr:8709").profile(a)
        : a;
    }
    g["default"] = a;
  },
  98
);

import LS from "LS";
import { metadata as LSMetadata } from "./LSMetadata";
import { cachedModules as LSDynamicDependencies } from "./LSDynamicDependencies";
import { LSLocalizedStrings } from "./LSLocalizedStrings";
import { LSLocalizedStringsV2 } from "./LSLocalizedStringsV2";
import {
  isProfilingEnabled as cr8709IsProfilingEnabled,
  profile as cr8709Profile,
} from "cr:8709";

interface LSFactoryOptions {
  dynamic?: boolean;
}

const defaultOptions: LSFactoryOptions = {
  dynamic: false,
};

export default function LSFactory(
  a: any,
  options: LSFactoryOptions = defaultOptions
): any {
  const { dynamic = false } = options;
  let instance = LS(
    1,
    LSMetadata,
    LSDynamicDependencies,
    LSLocalizedStrings,
    LSLocalizedStringsV2,
    a,
    undefined,
    undefined,
    dynamic
  );

  if (
    typeof cr8709IsProfilingEnabled === "function" &&
    cr8709IsProfilingEnabled()
  ) {
    instance = cr8709Profile(instance);
  }

  return instance;
}
