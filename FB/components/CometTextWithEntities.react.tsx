__d(
  "CometTextWithEntities.react",
  ["BaseCometTextWithExpansionEntities.react", "CometLink.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      return i.jsx(
        c("BaseCometTextWithExpansionEntities.react"),
        babelHelpers["extends"]({ LinkRenderer: c("CometLink.react") }, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import BaseCometTextWithExpansionEntities from "BaseCometTextWithExpansionEntities.react";
import CometLink from "CometLink.react";

interface Props {
  [key: string]: any;
}

const CometTextWithEntities: React.FC<Props> = (props) => {
  return (
    <BaseCometTextWithExpansionEntities {...props} LinkRenderer={CometLink} />
  );
};

CometTextWithEntities.displayName = `CometTextWithEntities [from ${module.id}]`;

export default CometTextWithEntities;
