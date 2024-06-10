__d(
  "BaseTheme.react",
  ["BaseThemeProvider.react", "BaseView.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");

    function a(a, b) {
      var d = a.config,
        e = a.displayMode,
        f = a.style,
        g = a.xstyle,
        h = babelHelpers.objectWithoutPropertiesLoose(a, [
          "config",
          "displayMode",
          "style",
          "xstyle",
        ]);
      return i.jsx(c("BaseThemeProvider.react"), {
        config: d,
        displayMode: e,
        children: function (a, d) {
          return i.jsx(
            c("BaseView.react"),
            babelHelpers["extends"]({}, h, {
              ref: b,
              style: babelHelpers["extends"]({}, d, f),
              xstyle: [a, g],
            })
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);

import { BaseThemeProvider } from "BaseThemeProvider.react";
import { BaseView } from "BaseView.react";
import React, { forwardRef } from "react";

type ThemeConfig = {
  [key: string]: string;
};

type Props = {
  config: ThemeConfig;
  displayMode?: string;
  style?: React.CSSProperties;
  xstyle?: React.CSSProperties;
};
const BaseTheme: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  props,
  ref
) => {
  const { config, displayMode, style, xstyle, ...rest } = props;

  return (
    <BaseThemeProvider config={config} displayMode={displayMode}>
      {(themeStyles, displayMode) => (
        <BaseView
          {...rest}
          ref={ref}
          style={{ ...themeStyles, ...style }}
          xstyle={[themeStyles, xstyle]}
        />
      )}
    </BaseThemeProvider>
  );
};

BaseTheme.displayName = `${BaseTheme.name} [from 98]`;

export default forwardRef(BaseTheme);
