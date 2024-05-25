__d(
  "getLoadingStateAriaProps",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      var c;
      b =
        a == null
          ? {
              "aria-label": h._("__JHASH__6lD-XyRyuHe__JHASH__"),
              role: "status",
            }
          : {
              "aria-valuemax":
                (c = b == null ? void 0 : b.max) != null ? c : 100,
              "aria-valuemin": (c = b == null ? void 0 : b.min) != null ? c : 0,
              "aria-valuenow": a,
              role: "progressbar",
            };
      return babelHelpers["extends"]({}, b);
    }
    g["default"] = a;
  },
  226
);

import fbt from "fbt";

interface AriaProps {
  "aria-label"?: string;
  role: string;
  "aria-valuemax"?: number;
  "aria-valuemin"?: number;
  "aria-valuenow"?: number;
}

interface ProgressProps {
  max?: number;
  min?: number;
}

function getLoadingStateAriaProps(
  value: number | null,
  progressProps?: ProgressProps
): AriaProps {
  if (value === null) {
    return {
      "aria-label": fbt("__JHASH__6lD-XyRyuHe__JHASH__"),
      role: "status",
    };
  } else {
    return {
      "aria-valuemax": progressProps?.max ?? 100,
      "aria-valuemin": progressProps?.min ?? 0,
      "aria-valuenow": value,
      role: "progressbar",
    };
  }
}

export default getLoadingStateAriaProps;
