__d("CometGlimmer.react", ["BaseGlimmer.react", "react", "useCurrentDisplayMode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"), j = {
        dark: {
            backgroundColor: "xhzw6zf",
            $$css: !0
        },
        light: {
            backgroundColor: "x1vtvx1t",
            $$css: !0
        }
    };
    function a(a) {
        var b = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle"]);
        var d = c("useCurrentDisplayMode")();
        return i.jsx(c("BaseGlimmer.react"), babelHelpers["extends"]({
            xstyle: [d === "dark" ? j.dark : j.light, b]
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);

import React from 'react';
import BaseGlimmer from 'BaseGlimmer.react';
import useCurrentDisplayMode from 'useCurrentDisplayMode';

interface Props {
  xstyle: string;
}

const cssStyles = {
  dark: {
    backgroundColor: 'xhzw6zf',
    $$css: true
  },
  light: {
    backgroundColor: 'x1vtvx1t',
    $$css: true
  }
};

const CometGlimmer = ({
  xstyle,
  ...rest
}: Props) => {

  const mode = useCurrentDisplayMode();

  return (
    <BaseGlimmer
      xstyle={[
        mode === 'dark' ? cssStyles.dark : cssStyles.light,
        xstyle  
      ]}
      {...rest} 
    />
  );
}

export default CometGlimmer;