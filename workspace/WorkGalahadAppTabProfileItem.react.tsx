__d("WorkGalahadAppTabProfileItem.react", ["CometEntryPointPopoverTrigger.react", "CurrentUser", "GeminiUserSettingsMenu.entrypoint", "TrackingNodes", "WorkGalahadProfileIcon.react", "WorkGalahadUIAppNavButton.react", "WorkGalahadUIAppsListItem.react", "emptyFunction", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        a = a.isDisabled;
        var b = a === void 0 ? !1 : a,
            d = c("CurrentUser").getName();
        return i.jsx(c("CometEntryPointPopoverTrigger.react"), {
            align: "middle",
            entryPointParams: {},
            popoverEntryPoint: c("GeminiUserSettingsMenu.entrypoint"),
            otherProps: {},
            popoverType: "menu",
            position: "end",
            children: function (a, e) {
                return i.jsx(c("WorkGalahadUIAppsListItem.react"), {
                    ref: a,
                    withTopSpacing: !1,
                    children: i.jsx(c("WorkGalahadUIAppNavButton.react"), {
                        label: d,
                        ariaLabel: d,
                        elementId: "profile",
                        selected: !1,
                        linkDataFT: c("TrackingNodes").getTrackingInfo(404),
                        "data-testid": void 0,
                        onPress: b ? c("emptyFunction") : e,
                        largeAddOn: !0,
                        addOn: i.jsx(c("WorkGalahadProfileIcon.react"), {
                            size: 40
                        })
                    })
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React from 'react';

import { CometEntryPointPopoverTrigger } from 'popovers';
import { CurrentUser } from 'users';
import { GeminiUserSettingsMenu } from 'menus';
import { TrackingNodes } from 'analytics'; 

import { WorkGalahadProfileIcon, WorkGalahadUIAppNavButton, WorkGalahadUIAppsListItem } from 'components';

interface ProfileItemProps {
  isDisabled?: boolean;
}

const WorkGalahadAppTabProfileItem: React.FC<ProfileItemProps> = ({
  isDisabled = false  
}) => {

  const userName = CurrentUser.getName();

  return (
    <CometEntryPointPopoverTrigger
      align="middle"
      entryPointParams={{}}
      popoverEntryPoint={GeminiUserSettingsMenu}
      popoverType="menu"
      position="end"
    >
      {({ ref, showPopover }) => (
        <WorkGalahadUIAppsListItem
          ref={ref}
          withTopSpacing={false}  
        >
          <WorkGalahadUIAppNavButton
            label={userName}
            ariaLabel={userName}
            elementId="profile"
            selected={false}
            linkDataFT={TrackingNodes.getProfileTracking()}
            onPress={isDisabled ? () => {} : showPopover} 
            largeAddOn
            addOn={
              <WorkGalahadProfileIcon size={40} />
            }
          />
        </WorkGalahadUIAppsListItem>
      )}
    </CometEntryPointPopoverTrigger>
  );
}

export default WorkGalahadAppTabProfileItem;
