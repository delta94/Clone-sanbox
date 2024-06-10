__d(
  "BaseThemeProvider.react",
  [
    "BaseThemeConfigContext",
    "BaseThemeDisplayModeContext",
    "react",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useContext,
      k = b.useMemo;

    function a(a) {
      var b = a.children,
        d = a.config;
      a = a.displayMode;
      var e = j(c("BaseThemeConfigContext")),
        f = c("useCurrentDisplayMode")(),
        g = (a = a) != null ? a : f;
      a = k(
        function () {
          var a;
          d != null && d.type === "CLASSNAMES"
            ? (a = g === "dark" ? d.dark : d.light)
            : (a = g === "dark" ? e.darkClassName : e.lightClassName);
          return a != null
            ? {
                $$css: !0,
                theme: a,
              }
            : null;
        },
        [d, e.darkClassName, e.lightClassName, g]
      );
      f = a;
      a = k(
        function () {
          if (d != null)
            if (d.type === "VARIABLES")
              return babelHelpers["extends"]({}, e, {
                darkVariables: babelHelpers["extends"](
                  {},
                  e.darkVariables,
                  d.dark
                ),
                lightVariables: babelHelpers["extends"](
                  {},
                  e.lightVariables,
                  d.light
                ),
              });
            else if (d.type === "CLASSNAMES")
              return babelHelpers["extends"]({}, e, {
                darkClassName: d.dark,
                lightClassName: d.light,
              });
          return e;
        },
        [d, e]
      );
      var h = l(g === "dark" ? a.darkVariables : a.lightVariables);
      return i.jsx(c("BaseThemeConfigContext").Provider, {
        value: a,
        children: i.jsx(c("BaseThemeDisplayModeContext").Provider, {
          value: g,
          children: b(f, h),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function l(a) {
      var b = {};
      Object.keys(a).forEach(function (c) {
        b["--" + c] = a[c];
      });
      return b;
    }
    g["default"] = a;
  },
  98
);

import React, { useContext, useMemo } from "react";

import { BaseThemeConfigContext } from "BaseThemeConfigContext";
import { BaseThemeDisplayModeContext } from "BaseThemeDisplayModeContext";

import { useCurrentDisplayMode } from "useCurrentDisplayMode";

interface BaseThemeProviderProps {
  children: (
    theme: React.CSSProperties,
    variables: React.CSSProperties
  ) => React.ReactNode;
  config?: {
    type: "VARIABLES" | "CLASSNAMES";
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
  displayMode?: "light" | "dark";
}

const BaseThemeProvider: React.FC<BaseThemeProviderProps> = ({
  children,
  config,
  displayMode,
}) => {
  const baseThemeConfig = useContext(BaseThemeConfigContext);
  const currentDisplayMode = useCurrentDisplayMode();
  const mode = displayMode ?? currentDisplayMode;

  const theme = useMemo(() => {
    let className;

    if (config !== null && config.type === "CLASSNAMES") {
      className = mode === "dark" ? config.dark : config.light;
    } else {
      className =
        mode === "dark"
          ? baseThemeConfig.darkClassName
          : baseThemeConfig.lightClassName;
    }

    if (className != null) {
      return {
        theme: className,
      };
    }

    return null;
  }, [
    config,
    mode,
    baseThemeConfig.darkClassName,
    baseThemeConfig.lightClassName,
  ]);

  const newConfig = useMemo(() => {
    if (config !== null && config?.type === "VARIABLES") {
      return {
        ...baseThemeConfig,
        darkVariables: {
          ...baseThemeConfig.darkVariables,
          ...config.dark,
        },
        lightVariables: {
          ...baseThemeConfig.lightVariables,
          ...config.light,
        },
      };
    } else if (config !== null && config?.type === "CLASSNAMES") {
      return {
        ...baseThemeConfig,
        darkClassName: config.dark,
        lightClassName: config.light,
      };
    }

    return baseThemeConfig;
  }, [config, baseThemeConfig]);

  const variables = useMemo(() => {
    const vars =
      mode === "dark" ? newConfig.darkVariables : newConfig.lightVariables;

    const cssVars: React.CSSProperties = {};

    Object.keys(vars).forEach((key) => {
      cssVars[`--${key}`] = vars[key];
    });

    return cssVars;
  }, [mode, newConfig]);

  return (
    <BaseThemeConfigContext.Provider value={newConfig}>
      <BaseThemeDisplayModeContext.Provider value={mode}>
        {children(theme, variables)}
      </BaseThemeDisplayModeContext.Provider>
    </BaseThemeConfigContext.Provider>
  );
};

export default BaseThemeProvider;
