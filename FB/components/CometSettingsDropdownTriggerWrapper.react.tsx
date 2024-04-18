// __d("CometSettingsDropdownTriggerWrapper.react", ["fbt", "CometPlaceholder.react", "CometSettingsBadge.react", "CometSettingsDropdownPopoverTrigger.react", "CometSettingsDropdownTrigger.react", "CometTooltip.react", "gkx", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j, k = j || d("react"),
//         l = {
//             badge: {
//                 end: "xds687c",
//                 left: null,
//                 right: null,
//                 position: "x10l6tqk",
//                 top: "x13vifvy",
//                 $$css: !0
//             },
//             horizontalOffset: {
//                 paddingStart: "x1ye3gou",
//                 paddingLeft: null,
//                 paddingRight: null,
//                 paddingEnd: "xn6708d",
//                 $$css: !0
//             },
//             wrapper: {
//                 display: "x78zum5",
//                 position: "x1n2onr6",
//                 $$css: !0
//             }
//         },
//         m = c("gkx")("1663500"),
//         n = h._("__JHASH__mp7QcW6dSyw__JHASH__");

//     function a(a) {
//         var b = a.dropdownPosition,
//             d = b === void 0 ? "below" : b;
//         a.isSelected;
//         a.onVisibilityChange;
//         var e = a.profilePictureUri;
//         b = m ? "small" : "large";
//         return k.jsx(c("CometSettingsDropdownPopoverTrigger.react"), {
//             dropdownPosition: d,
//             iconSize: b,
//             tracePolicy: "comet.jewel.settings",
//             children: function (a, b, f, g, h, j, m, p) {
//                 return k.jsx(c("CometTooltip.react"), {
//                     position: d,
//                     tooltip: n,
//                     children: k.jsxs("div", {
//                         className: (i || (i = c("stylex")))(l.wrapper, d === "end" && l.horizontalOffset),
//                         ref: a,
//                         children: [k.jsx(c("CometSettingsDropdownTrigger.react"), {
//                             onHoverIn: g,
//                             onHoverOut: h,
//                             onPress: b,
//                             onPressIn: j,
//                             profilePictureUri: e,
//                             size: 40,
//                             testid: void 0,
//                             type: p ? "deemphasized-overlay" : "normal"
//                         }), k.jsx(o, {
//                             isVisible: p
//                         })]
//                     })
//                 })
//             }
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";

//     function o(a) {
//         a = a.isVisible;
//         return k.jsx("div", {
//             className: "xds687c x10l6tqk x13vifvy",
//             children: k.jsx(c("CometPlaceholder.react"), {
//                 fallback: null,
//                 children: k.jsx(c("CometSettingsBadge.react"), {
//                     isActive: a
//                 })
//             })
//         })
//     }
//     o.displayName = o.name + " [from " + f.id + "]";
//     b = k.memo(a);
//     g["default"] = b
// }), 98);


import React, { FC, useState } from 'react';
import { CometSettingsDropdownPopoverTrigger, CometSettingsDropdownTrigger, CometTooltip } from 'components';
import { CometPlaceholder, CometSettingsBadge } from 'comet';  

import fbt from 'fbt';
import { gkx } from 'gkx';
import stylex from 'stylex';

interface Props {
  dropdownPosition?: 'above' | 'below' | 'end';
  isSelected?: boolean; 
  onVisibilityChange?: () => void;
  profilePictureUri?: string;
}

const tooltipText = fbt('Settings');

const isSmallIcon = gkx('1663500'); 

const CometSettingsDropdownTriggerWrapper: FC<Props> = ({
  dropdownPosition = 'below',
  isSelected,
  onVisibilityChange,
  profilePictureUri  
}) => {

  const iconSize = isSmallIcon ? 'small' : 'large';

  return (
    <CometSettingsDropdownPopoverTrigger
      dropdownPosition={dropdownPosition}
      iconSize={iconSize}
      tracePolicy="comet.jewel.settings"
    >
      {
        (ref, onPress, _, onHoverIn, onHoverOut, onPressIn, _, isVisible) => (
          <CometTooltip position={dropdownPosition} tooltip={tooltipText}>
            <div 
              className={stylex(styles.wrapper, dropdownPosition === 'end' && styles.horizontalOffset)}
              ref={ref}  
            >
              <CometSettingsDropdownTrigger 
                onHoverIn={onHoverIn}
                onHoverOut={onHoverOut}
                onPress={onPress} 
                onPressIn={onPressIn}
                profilePictureUri={profilePictureUri}
                size={40}
                type={isVisible ? 'deemphasized-overlay' : 'normal'} 
              />
              {isVisible && <BadgeIcon isVisible={isVisible} />}
            </div>
          </CometTooltip>
        )
      }
    </CometSettingsDropdownPopoverTrigger>
  );
};

interface BadgeIconProps {
  isVisible: boolean;
}

const BadgeIcon: FC<BadgeIconProps> = ({ isVisible }) => (
  <div className={stylex(styles.badge)}>
    <CometPlaceholder fallback={null}>
      <CometSettingsBadge isActive={isVisible} />
    </CometPlaceholder>
  </div>  
);

const styles = {
    badge: {
        end: "xds687c",
        left: null,
        right: null,
        position: "x10l6tqk",
        top: "x13vifvy",
        $$css: !0
    },
    horizontalOffset: {
        paddingStart: "x1ye3gou",
        paddingLeft: null,
        paddingRight: null,
        paddingEnd: "xn6708d",
        $$css: !0
    },
    wrapper: {
        display: "x78zum5",
        position: "x1n2onr6",
        $$css: !0
    }
};

export default CometSettingsDropdownTriggerWrapper;
