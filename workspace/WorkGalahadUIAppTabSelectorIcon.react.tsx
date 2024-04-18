__d("WorkGalahadUIAppTabSelectorIcon.react", ["WorkGalahadUIAppTabSelectorSVGIcon.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.icon;
        a = a.selected;
        return i.jsx(c("WorkGalahadUIAppTabSelectorSVGIcon.react"), {
            selected: a,
            iconName: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { JSXElementConstructor } from 'react';
import WorkGalahadUIAppTabSelectorSVGIcon, { WorkGalahadUIAppTabSelectorSVGIconProps } from './WorkGalahadUIAppTabSelectorSVGIcon';

interface WorkGalahadUIAppTabSelectorIconProps {
  icon: string;
  selected: boolean;
}

const WorkGalahadUIAppTabSelectorIcon: JSXElementConstructor<WorkGalahadUIAppTabSelectorIconProps> = (
  props: WorkGalahadUIAppTabSelectorIconProps
) => {
  const { icon, selected } = props;
  return <WorkGalahadUIAppTabSelectorSVGIcon selected={selected} iconName={icon} />;
};

WorkGalahadUIAppTabSelectorIcon.displayName = `${WorkGalahadUIAppTabSelectorIcon.name} [from ${f.id}]`;

export default WorkGalahadUIAppTabSelectorIcon;
