__d(
  "CometHideLayerOnEscape.react",
  ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || (i = d("react")),
      k = i.useMemo;
    function a(a) {
      var b = a.children,
        d = a.debugName;
      d = d === void 0 ? "ModalLayer" : d;
      var e = a.onHide;
      a = k(
        function () {
          return [
            {
              command: { key: c("CometKeys").ESCAPE },
              description: h._("__JHASH__coz4yRiHZKL__JHASH__"),
              handler: e,
              triggerFromInputs: !0,
              triggerOnRepeats: !1,
            },
          ];
        },
        [e]
      );
      return j.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: a,
        debugName: d,
        isWrapperFocusable: !0,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { fbt } from "fbt";
import CometComponentWithKeyCommands from "CometComponentWithKeyCommands.react";
import CometKeys from "CometKeys";
import React, { useMemo, ReactNode } from "react";

interface CometHideLayerOnEscapeProps {
  children: ReactNode;
  debugName?: string;
  onHide: () => void;
}

const CometHideLayerOnEscape: React.FC<CometHideLayerOnEscapeProps> = ({
  children,
  debugName = "ModalLayer",
  onHide,
}) => {
  const commandConfigs = useMemo(
    () => [
      {
        command: { key: CometKeys.ESCAPE },
        description: fbt._("__JHASH__coz4yRiHZKL__JHASH__"),
        handler: onHide,
        triggerFromInputs: true,
        triggerOnRepeats: false,
      },
    ],
    [onHide]
  );

  return (
    <CometComponentWithKeyCommands
      commandConfigs={commandConfigs}
      debugName={debugName}
      isWrapperFocusable={true}
    >
      {children}
    </CometComponentWithKeyCommands>
  );
};

CometHideLayerOnEscape.displayName = `${CometHideLayerOnEscape.name} [from CometHideLayerOnEscape.react]`;

export default CometHideLayerOnEscape;
