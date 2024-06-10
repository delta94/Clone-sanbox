__d(
  "CometSettingsDropdownPopoverTrigger.react",
  [
    "CometSetProfileSwitcherEducationContext",
    "CometSettingsDropdownLoadingState.react",
    "CometSettingsDropdownPopoverTrigger.entrypoint",
    "cr:1875563", //CometEntryPointPopoverTrigger
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useContext;

    function a(a) {
      var d = a.children,
        e = a.dropdownPosition;
      e = e === void 0 ? "below" : e;
      var f = a.iconSize,
        g = a.onVisibilityChange;
      a = a.tracePolicy;
      var h = j(c("CometSetProfileSwitcherEducationContext")),
        k = h.resetSwitcherEducationState;
      h = c("gkx")("1266082");
      return i.jsx(b("cr:1875563"), {
        align: "end",
        entryPointParams: {},
        fallback: i.jsx(c("CometSettingsDropdownLoadingState.react"), {
          iconSize: f,
          shouldShowSimpleDropdownHeader: h,
        }),
        onVisibilityChange: function (a) {
          a || k(), g == null ? void 0 : g(a);
        },
        otherProps: {},
        popoverEntryPoint: c("CometSettingsDropdownPopoverTrigger.entrypoint"),
        position: e,
        preloadTrigger: "button",
        tracePolicy: a,
        children: d,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useContext } from "react";
import CometSetProfileSwitcherEducationContext from "CometSetProfileSwitcherEducationContext";
import CometSettingsDropdownLoadingState from "CometSettingsDropdownLoadingState.react";
import CometSettingsDropdownPopoverTriggerEntrypoint from "CometSettingsDropdownPopoverTrigger.entrypoint";
import CometEntryPointPopoverTrigger from "cr:1875563";
import { gkx } from "gkx";

interface CometSettingsDropdownPopoverTriggerProps {
  children: React.ReactNode;
  dropdownPosition?: "above" | "below";
  iconSize?: number;
  onVisibilityChange?: (isVisible: boolean) => void;
  tracePolicy?: any;
}

const CometSettingsDropdownPopoverTrigger: React.FC<
  CometSettingsDropdownPopoverTriggerProps
> = ({
  children,
  dropdownPosition = "below",
  iconSize,
  onVisibilityChange,
  tracePolicy,
}) => {
  const educationContext = useContext(CometSetProfileSwitcherEducationContext);
  const resetSwitcherEducationState =
    educationContext.resetSwitcherEducationState;
  const shouldShowSimpleDropdownHeader = gkx("1266082");

  return (
    <CometEntryPointPopoverTrigger
      align="end"
      entryPointParams={{}}
      fallback={
        <CometSettingsDropdownLoadingState
          iconSize={iconSize}
          shouldShowSimpleDropdownHeader={shouldShowSimpleDropdownHeader}
        />
      }
      onVisibilityChange={(isVisible) => {
        if (!isVisible) resetSwitcherEducationState();
        onVisibilityChange?.(isVisible);
      }}
      otherProps={{}}
      popoverEntryPoint={CometSettingsDropdownPopoverTriggerEntrypoint}
      position={dropdownPosition}
      preloadTrigger="button"
      tracePolicy={tracePolicy}
    >
      {children}
    </CometEntryPointPopoverTrigger>
  );
};

CometSettingsDropdownPopoverTrigger.displayName =
  "CometSettingsDropdownPopoverTrigger [from CometSettingsDropdownPopoverTrigger.react]";

export default CometSettingsDropdownPopoverTrigger;
