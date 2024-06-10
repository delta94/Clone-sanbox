__d(
  "FDSGlimmer.react",
  ["BaseGlimmer.react", "react", "useCurrentDisplayMode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        dark: { backgroundColor: "xhzw6zf", $$css: !0 },
        light: { backgroundColor: "x1vtvx1t", $$css: !0 },
      };
    function a(a) {
      var b = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle"]);
      var d = c("useCurrentDisplayMode")();
      return i.jsx(
        c("BaseGlimmer.react"),
        babelHelpers["extends"](
          { xstyle: [d === "dark" ? j.dark : j.light, b] },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import BaseGlimmer from "BaseGlimmer.react";
import { useCurrentDisplayMode } from "useCurrentDisplayMode";

const styles = {
  dark: { backgroundColor: "xhzw6zf", $$css: true },
  light: { backgroundColor: "x1vtvx1t", $$css: true },
};

interface Props extends React.ComponentProps<typeof BaseGlimmer> {
  xstyle?: any;
}

const FDSGlimmer: React.FC<Props> = (props) => {
  const { xstyle, ...rest } = props;
  const displayMode = useCurrentDisplayMode();
  return (
    <BaseGlimmer
      xstyle={[displayMode === "dark" ? styles.dark : styles.light, xstyle]}
      {...rest}
    />
  );
};

FDSGlimmer.displayName = `FDSGlimmer [from ${module.id}]`;

export default FDSGlimmer;
