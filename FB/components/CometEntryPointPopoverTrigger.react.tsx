__d(
  "CometEntryPointPopoverTrigger.react",
  [
    "BaseEntryPointPopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.fallback;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
      return i.jsx(
        c("BaseEntryPointPopoverTrigger.react"),
        babelHelpers["extends"](
          {
            fallback:
              (b = b) != null
                ? b
                : i.jsx(c("CometPopoverLoadingState.react"), { withArrow: !0 }),
          },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import BaseEntryPointPopoverTrigger from "BaseEntryPointPopoverTrigger.react";
import CometPopoverLoadingState from "CometPopoverLoadingState.react";

interface CometEntryPointPopoverTriggerProps {
  fallback?: React.ReactNode;
  [key: string]: any;
}

const CometEntryPointPopoverTrigger: React.FC<
  CometEntryPointPopoverTriggerProps
> = ({ fallback, ...props }) => {
  return (
    <BaseEntryPointPopoverTrigger
      fallback={
        fallback != null ? (
          fallback
        ) : (
          <CometPopoverLoadingState withArrow={true} />
        )
      }
      {...props}
    />
  );
};

CometEntryPointPopoverTrigger.displayName =
  "CometEntryPointPopoverTrigger [from CometEntryPointPopoverTrigger.react]";

export default CometEntryPointPopoverTrigger;
