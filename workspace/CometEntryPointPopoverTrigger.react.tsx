__d("CometEntryPointPopoverTrigger.react", ["BaseEntryPointPopoverTrigger.react", "CometPopoverLoadingState.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.fallback;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
        return i.jsx(c("BaseEntryPointPopoverTrigger.react"), babelHelpers["extends"]({
            fallback: (b = b) != null ? b : i.jsx(c("CometPopoverLoadingState.react"), {
                withArrow: !0
            })
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React from 'react';

import { BaseEntryPointPopoverTrigger } from 'base-popover';
import { CometPopoverLoadingState } from 'loading-indicators';

interface EntryPointPopoverTriggerProps {
  fallback?: React.ReactNode;
  // Other props
}

const CometEntryPointPopoverTrigger: React.FC<EntryPointPopoverTriggerProps> = (props) => {

  const {
    fallback,
    ...otherProps
  } = props;

  return (
    <BaseEntryPointPopoverTrigger
      fallback={fallback ?? <CometPopoverLoadingState withArrow />}
      {...otherProps} 
    />
  );
};

CometEntryPointPopoverTrigger.displayName = `${CometEntryPointPopoverTrigger.name} [from moduleId]`;

export default CometEntryPointPopoverTrigger;
