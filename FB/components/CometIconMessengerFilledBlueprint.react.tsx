__d(
  "CometIconMessengerFilledBlueprint.react",
  ["CometSVGIcon.react", "FBNucleusAppMessengerFilled24.svg.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      return i.jsx(
        c("CometSVGIcon.react"),
        babelHelpers["extends"]({}, a, {
          component: c("FBNucleusAppMessengerFilled24.svg.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import CometSVGIcon from "CometSVGIcon.react";
import FBNucleusAppMessengerFilled24 from "FBNucleusAppMessengerFilled24.svg.react";

interface CometIconMessengerFilledBlueprintProps {
  [key: string]: any;
}

const CometIconMessengerFilledBlueprint: React.FC<
  CometIconMessengerFilledBlueprintProps
> = (props) => {
  return <CometSVGIcon {...props} component={FBNucleusAppMessengerFilled24} />;
};

CometIconMessengerFilledBlueprint.displayName =
  "CometIconMessengerFilledBlueprint [from CometIconMessengerFilledBlueprint.react]";

export default CometIconMessengerFilledBlueprint;
