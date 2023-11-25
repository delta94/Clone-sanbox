__d("SearchCometGlobalTypeaheadGlimmer.react", ["CometTypeaheadRoundedInputGlimmer.react", "react", "stylex", "useSearchCometGlobalTypeaheadStyles"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"), k = {
        inputGlimmer: {
            flexGrow: "x1iyjqo2",
            height: "x1vqgdyp",
            $$css: !0
        },
        inputStyle: {
            paddingEnd: "x1sxyh0",
            paddingLeft: null,
            paddingRight: null,
            $$css: !0
        }
    };
    function a(a) {
        a = a.inputStartContent;
        var b = c("useSearchCometGlobalTypeaheadStyles")();
        b = b.inputXStyle;
        return j.jsxs("div", {
            className: (h || (h = c("stylex")))(b, k.inputStyle),
            children: [a, j.jsx(c("CometTypeaheadRoundedInputGlimmer.react"), {
                xStyle: k.inputGlimmer
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react';
import CometTypeaheadRoundedInputGlimmer from 'CometTypeaheadRoundedInputGlimmer.react';
import stylex from 'stylex';
import useSearchCometGlobalTypeaheadStyles from 'useSearchCometGlobalTypeaheadStyles';

interface Props {
  inputStartContent: React.ReactNode;
}

const cssStyles = {
  inputGlimmer: {
    flexGrow: 'x1iyjqo2', 
    height: 'x1vqgdyp',
    $$css: true
  },
  inputStyle: {
    paddingEnd: 'x1sxyh0',
    paddingLeft: null,
    paddingRight: null,
    $$css: true
  }
};

const SearchCometGlobalTypeaheadGlimmer = ({
  inputStartContent  
}: Props) => {

  const styles = useSearchCometGlobalTypeaheadStyles();
  const inputStyle = styles.inputXStyle;

  return (
    <div 
      className={stylex(inputStyle, cssStyles.inputStyle)}
    >
      {inputStartContent}
      <CometTypeaheadRoundedInputGlimmer 
        xStyle={cssStyles.inputGlimmer}
      />
    </div>
  );
};

export default SearchCometGlobalTypeaheadGlimmer;