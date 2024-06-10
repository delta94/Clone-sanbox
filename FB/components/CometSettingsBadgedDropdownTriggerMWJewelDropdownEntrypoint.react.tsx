__d(
  "CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react",
  [
    "CometMessagingJewelDropdownClassicEntrypoint",
    "CometSettingsBadgedDropdownTrigger.react",
    "MWJewelPopoverDialogContext.react",
    "MessageRequestsBulkActionsContext.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useContext;
    d(
      "CometMessagingJewelDropdownClassicEntrypoint"
    ).DeferredRoot.getModuleId();

    function a(a) {
      var b = j(c("MessageRequestsBulkActionsContext.react"));
      b = b.isBulkActionsEditMode;
      var e = j(c("MWJewelPopoverDialogContext.react"));
      e = e.isOpenForDialog;
      return i.jsx(
        c("CometSettingsBadgedDropdownTrigger.react"),
        babelHelpers["extends"]({}, a, {
          doNotCloseOnOutsideClick: e || b,
          dropdownEntryPoint: d("CometMessagingJewelDropdownClassicEntrypoint")
            .Entrypoint,
          preloadTrigger: "tooltip",
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useContext } from "react";
import CometMessagingJewelDropdownClassicEntrypoint from "CometMessagingJewelDropdownClassicEntrypoint";
import CometSettingsBadgedDropdownTrigger from "CometSettingsBadgedDropdownTrigger.react";
import MWJewelPopoverDialogContext from "MWJewelPopoverDialogContext.react";
import MessageRequestsBulkActionsContext from "MessageRequestsBulkActionsContext.react";

interface CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypointProps {
  [key: string]: any;
}

const CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint: React.FC<
  CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypointProps
> = (props) => {
  const { isBulkActionsEditMode } = useContext(
    MessageRequestsBulkActionsContext
  );
  const { isOpenForDialog } = useContext(MWJewelPopoverDialogContext);

  return (
    <CometSettingsBadgedDropdownTrigger
      {...props}
      doNotCloseOnOutsideClick={isOpenForDialog || isBulkActionsEditMode}
      dropdownEntryPoint={
        CometMessagingJewelDropdownClassicEntrypoint.Entrypoint
      }
      preloadTrigger="tooltip"
    />
  );
};

CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.displayName =
  "CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint [from CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react]";

export default CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint;
