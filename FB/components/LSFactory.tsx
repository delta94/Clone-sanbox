__d("LSFactory", ["LS", "LSDynamicDependencies", "LSLocalizedStrings", "LSLocalizedStringsV2", "LSMetadata"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        dynamic: !1
    };

    function a(a, e) {
        e === void 0 && (e = h);
        a = c("LS")(1, d("LSMetadata").metadata, d("LSDynamicDependencies").cachedModules, c("LSLocalizedStrings"), c("LSLocalizedStringsV2"), a, void 0, void 0, e.dynamic);
        return b("cr:8709") != null && b("cr:8709").isProfilingEnabled() ? b("cr:8709").profile(a) : a
    }
    g["default"] = a
}), 98);

import LS from "LS";
import { LSMetadata } from "LSMetadata";
import { LSDynamicDependencies } from "LSDynamicDependencies";
import { LSLocalizedStrings } from "LSLocalizedStrings";
import { LSLocalizedStringsV2 } from "LSLocalizedStringsV2";

interface LSFactoryOptions {
    dynamic?: boolean;
}

const defaultOptions: LSFactoryOptions = {
    dynamic: false
};

export default function LSFactory(a: any, options: LSFactoryOptions = defaultOptions): any {
    const { dynamic = false } = options;
    const instance = LS(
        1,
        LSMetadata.metadata,
        LSDynamicDependencies.cachedModules,
        LSLocalizedStrings,
        LSLocalizedStringsV2,
        a,
        undefined,
        undefined,
        dynamic
    );
  
    return instance;
}
