__d(
  "killswitch",
  ["KSConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return b("KSConfig").killed.has(a);
    }
    e.exports = a;
  },
  null
);

import KSConfig from "KSConfig";

function killswitch(feature: string): boolean {
  return KSConfig.killed.has(feature);
}

export default killswitch;
