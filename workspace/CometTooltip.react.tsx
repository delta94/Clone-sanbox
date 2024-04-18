__d("CometTooltip.react", ["BaseTooltip.react", "CometTooltipImpl.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.delayMs;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["delayMs"]);
        return i.jsx(c("BaseTooltip.react"), babelHelpers["extends"]({}, a, {
            delayTooltipMs: b,
            tooltipImpl: c("CometTooltipImpl.react")
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React from 'react';
import BaseTooltip from 'BaseTooltip.react'; // Assuming this is the correct import path
import CometTooltipImpl from 'CometTooltipImpl.react'; // Assuming this is the correct import path

interface CometTooltipProps {
  delayMs?: number;
  disabled?: boolean;
  tooltipImpl: React.ComponentType<any>;
  children: React.ReactNode;
  forceInlineDisplay?: boolean;
  onVisibilityChange?: (isVisible: boolean) => void;
}

function CometTooltip({ delayMs, ...rest }: CometTooltipProps): JSX.Element {
  return (
    <BaseTooltip
      {...rest}
      delayTooltipMs={delayMs}
      tooltipImpl={CometTooltipImpl}
    />
  );
}

CometTooltip.displayName = `${CometTooltip.name} [from ${f.id}]`;

export default CometTooltip;
