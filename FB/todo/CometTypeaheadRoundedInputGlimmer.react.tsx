__d("CometTypeaheadRoundedInputGlimmer.react", ["CometGlimmer.react", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"), k = {
        glimmer: {
            borderTopStartRadius: "xnwf7zb",
            borderTopEndRadius: "x40j3uw",
            borderBottomEndRadius: "x1s7lred",
            borderBottomStartRadius: "x15gyhx8",
            height: "x5yr21d",
            width: "xh8yej3",
            $$css: !0
        }
    };
    function a(a) {
        a = a.xStyle;
        return j.jsx("div", {
            className: (h || (h = c("stylex")))(a),
            children: j.jsx(c("CometGlimmer.react"), {
                index: 0,
                xstyle: k.glimmer
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react'; 
import CometGlimmer from 'CometGlimmer.react';
import stylex from 'stylex';

interface Props {
  xStyle: string; 
}

const cssStyles = {
  glimmer: {
    borderTopStartRadius: 'xnwf7zb',
    borderTopEndRadius: 'x40j3uw', 
    borderBottomEndRadius: 'x1s7lred',
    borderBottomStartRadius: 'x15gyhx8',
    height: 'x5yr21d',
    width: 'xh8yej3',
    $$css: true
  }
};

const CometTypeaheadRoundedInputGlimmer = ({
  xStyle  
}: Props) => {

  return (
    <div className={stylex(xStyle)}>
      <CometGlimmer
        index={0} 
        xstyle={cssStyles.glimmer}  
      />
    </div>
  );
};

export default CometTypeaheadRoundedInputGlimmer;