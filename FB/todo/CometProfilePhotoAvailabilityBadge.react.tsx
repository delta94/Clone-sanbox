__d("CometProfilePhotoAvailabilityBadge.react", ["fbt", "CometBadge.react", "CometPressableChildrenWithOverlay.react", "CometPressableOverlay.react", "CometScreenReaderText.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react")
      , j = h._("__JHASH__Pm4800857Zv__JHASH__");
    function a(a) {
        var b = a.pressed;
        a = a.size;
        return i.jsxs("div", {
            className: "x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x6ikm8r x10wlt62 x1n2onr6",
            children: [i.jsx(c("CometPressableChildrenWithOverlay.react"), {
                overlay: i.jsx(c("CometPressableOverlay.react"), {
                    pressed: b,
                    radius: "50%"
                }),
                children: i.jsx(c("CometBadge.react"), {
                    color: "green",
                    isProfileBadge: !0,
                    size: a
                })
            }), i.jsx(c("CometScreenReaderText.react"), {
                text: j
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react';
import { _ } from 'fbt';
import CometBadge from 'CometBadge.react'; // Adjust the import path as needed
import CometPressableChildrenWithOverlay from 'CometPressableChildrenWithOverlay.react'; // Adjust the import path as needed
import CometPressableOverlay from 'CometPressableOverlay.react'; // Adjust the import path as needed
import CometScreenReaderText from 'CometScreenReaderText.react'; // Adjust the import path as needed

interface CometProfilePhotoAvailabilityBadgeProps {
  pressed: boolean;
  size: number;
}

const CometProfilePhotoAvailabilityBadge: React.FC<CometProfilePhotoAvailabilityBadgeProps> = ({
  pressed,
  size,
}) => {
  return (
    <div className="x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x6ikm8r x10wlt62 x1n2onr6">
      <CometPressableChildrenWithOverlay
        overlay={
          <CometPressableOverlay pressed={pressed} radius="50%" />
        }
      >
        <CometBadge color="green" isProfileBadge size={size} />
      </CometPressableChildrenWithOverlay>
      <CometScreenReaderText text={_(['__JHASH__Pm4800857Zv__JHASH__'])} />
    </div>
  );
};

CometProfilePhotoAvailabilityBadge.displayName = `${CometProfilePhotoAvailabilityBadge.name} [from ${'your module ID'}]`;

export default CometProfilePhotoAvailabilityBadge;
