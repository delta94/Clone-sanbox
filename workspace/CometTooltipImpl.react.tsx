__d("CometTooltipImpl.react", ["CometPlaceholder.react", "deferredLoadComponent", "react", "requireDeferredForDisplay"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"),
        j = c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometTooltipDeferredImpl.react").__setRef("CometTooltipImpl.react"));

    function a(a) {
        return i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: i.jsx(j, babelHelpers["extends"]({}, a))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);



import React, { FC } from 'react';
import { CometPlaceholder } from 'CometPlaceholder.react';
import deferredLoadComponent from 'deferredLoadComponent';
import { requireDeferredForDisplay } from 'requireDeferredForDisplay';

const CometTooltipDeferredImpl = deferredLoadComponent(
  requireDeferredForDisplay('CometTooltipDeferredImpl.react')
);

interface CometTooltipImplProps {
  /* Define your props here */
}

const CometTooltipImpl: FC<CometTooltipImplProps> = (props) => {
  return (
    <CometPlaceholder fallback={null}>
      <CometTooltipDeferredImpl {...props} />
    </CometPlaceholder>
  );
};

CometTooltipImpl.displayName = `${CometTooltipImpl.name} [from ${98}]`;

export default CometTooltipImpl;
