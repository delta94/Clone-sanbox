__d(
  "MWXCircleButton.react",
  [
    "BaseTheme.react",
    "MWXSvgIcon",
    "MWXThreadThemeColor",
    "cr:6680", // CometCircleButton
    "cr:6681", // null
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useMemo;
    e = i.forwardRef(a);
    function a(a, e) {
      a = babelHelpers["extends"]({}, a);
      var f = a.color,
        g = a.icon,
        h = a.size;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "color",
        "icon",
        "size",
      ]);
      var k =
          f instanceof d("MWXThreadThemeColor").MWXThreadThemeColor
            ? "primary"
            : f,
        l = j(
          function () {
            return f instanceof d("MWXThreadThemeColor").MWXThreadThemeColor
              ? {
                  dark: { "primary-icon": f.color },
                  light: { "primary-icon": f.color },
                  type: "VARIABLES",
                }
              : void 0;
          },
          [f]
        ),
        m = g instanceof d("MWXSvgIcon").MWXSvgIcon ? g.component : g,
        n = null;
      b("cr:6680") != null &&
        (n = i.jsx(
          b("cr:6680"),
          babelHelpers["extends"]({ color: k, icon: m, size: h }, a, { ref: e })
        ));
      b("cr:6681") != null &&
        (n = i.jsx(
          b("cr:6681"),
          babelHelpers["extends"](
            { color: k, icon: m, size: h },
            g instanceof d("MWXSvgIcon").MWXSvgIcon
              ? { iconRatio: "medium" }
              : {},
            a,
            { ref: e }
          )
        ));
      l != null &&
        (n = i.jsx(c("BaseTheme.react"), { config: l, children: n }));
      return n;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a;
  },
  98
);

import React, { forwardRef, useMemo } from "react";
import { MWXThreadThemeColor } from "MWXThreadThemeColor";
import { MWXSvgIcon } from "MWXSvgIcon";
import { CometCircleButton } from "CometCircleButton";
import BaseTheme from "BaseTheme.react";

type Props = {
  color: MWXThreadThemeColor | string;
  icon: React.ReactNode;
  size?: number;
};

const MWXCircleButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  Props
> = (props, ref) => {
  const { color, icon, size, ...rest } = props;

  const colorKey = color instanceof MWXThreadThemeColor ? "primary" : color;

  const themeConfig = useMemo(() => {
    if (color instanceof MWXThreadThemeColor) {
      return {
        dark: { "primary-icon": color.color },
        light: { "primary-icon": color.color },
        type: "VARIABLES",
      };
    }
    return undefined;
  }, [color]);

  const SvgIconComponent = icon instanceof MWXSvgIcon ? icon.component : icon;

  let circleButton = null;

  if (CometCircleButton != null) {
    circleButton = (
      <CometCircleButton
        color={colorKey}
        icon={SvgIconComponent}
        size={size}
        {...rest}
        ref={ref}
      />
    );
  }

  if (themeConfig != null) {
    circleButton = <BaseTheme config={themeConfig}>{circleButton}</BaseTheme>;
  }

  return circleButton;
};

MWXCircleButton.displayName = `${MWXCircleButton.name} [from 98]`;

export default forwardRef(MWXCircleButton);
