__d(
  "MAWUnvaultTransform",
  ["MAWVault", "baseTextTransformAllStrings"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return function (a) {
        return c("baseTextTransformAllStrings")(a, function (a, b) {
          return h(a, b);
        });
      };
    }
    function h(a, b) {
      if (a.length === 0) return [a];
      return d("MAWVault").isVaulted(a) ? [d("MAWVault").unvault(a)] : [a];
    }
    g["default"] = a;
  },
  98
);

import { MAWVault } from "MAWVault";
import { baseTextTransformAllStrings } from "baseTextTransformAllStrings";

export default function MAWUnvaultTransform(): (input: string) => string[] {
  return function (input: string): string[] {
    return baseTextTransformAllStrings(input, (text: string, context: any) =>
      transformText(text, context)
    );
  };
}

function transformText(text: string, context: any): string[] {
  if (text.length === 0) {
    return [text];
  }
  return MAWVault.isVaulted(text) ? [MAWVault.unvault(text)] : [text];
}
