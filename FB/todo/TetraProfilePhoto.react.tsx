__d("TetraProfilePhoto.react", ["CometProfilePhoto.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
        return h.jsx(c("CometProfilePhoto.react"), babelHelpers["extends"]({}, a, {
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}
), 98);


import React, { forwardRef, Ref } from 'react';
import CometProfilePhoto from 'CometProfilePhoto';

type Props = {
  // Define your prop types here
};

const TetraProfilePhoto = forwardRef(function TetraProfilePhoto(
  props: Props,
  ref: Ref<HTMLDivElement>
) {
  return <CometProfilePhoto {...props} ref={ref} />;
});

TetraProfilePhoto.displayName = `${TetraProfilePhoto.name} [from ${f.id}]`;

export default TetraProfilePhoto;
