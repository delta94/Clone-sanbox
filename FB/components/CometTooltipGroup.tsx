__d("CometTooltipGroup.react", ["BaseTooltipGroup.react", "CometTooltipImpl.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        return i.jsx(d("BaseTooltipGroup.react").Container, babelHelpers["extends"]({}, a, {
            tooltipImpl: c("CometTooltipImpl.react")
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React from "react";
import BaseTooltipGroup from "BaseTooltipGroup"
import CometTooltipImpl from "CometTooltipImpl"

const CometTooltipGroup = (props) => {
    return (
        <BaseTooltipGroup.Container
            {...props}
            tooltipImpl={<CometTooltipImpl />}
        />
    )
}

export default CometTooltipGroup