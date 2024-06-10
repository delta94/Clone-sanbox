__d(
  "LSPlatformClientDeferred",
  ["requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("requireDeferred")("LSPlatformClient").__setRef(
      "LSPlatformClientDeferred"
    );
    b = a;
    g["default"] = b;
  },
  98
);

import { requireDeferred } from "requireDeferred";

const LSPlatformClient = requireDeferred("LSPlatformClient").__setRef(
  "LSPlatformClientDeferred"
);

export default LSPlatformClient;
