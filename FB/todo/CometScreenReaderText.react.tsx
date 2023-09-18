__d("CometScreenReaderText.react", ["BaseView.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = {
        visuallyHidden: {
            clip: "xzpqnlu",
            clipPath: "x1hyvwdk",
            height: "xjm9jq1",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x10l6tqk",
            width: "x1i1rx1s",
            $$css: !0
        }
    };
    function a(a) {
        var b = a.text;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["text"]);
        return h.jsx(c("BaseView.react"), babelHelpers["extends"]({}, a, {
            xstyle: i.visuallyHidden,
            children: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react';
import BaseView from 'BaseView.react';

const styles = {
  visuallyHidden: {
    clip: 'xzpqnlu',
    clipPath: 'x1hyvwdk',
    height: 'xjm9jq1',
    overflowX: 'x6ikm8r',
    overflowY: 'x10wlt62',
    position: 'x10l6tqk',
    width: 'x1i1rx1s',
    $$css: true,
  },
};

interface CometScreenReaderTextProps {
  text: string;
}

function CometScreenReaderText({ text, ...props }: CometScreenReaderTextProps) {
  return (
    <BaseView {...props} xstyle={styles.visuallyHidden}>
      {text}
    </BaseView>
  );
}

export default CometScreenReaderText;
