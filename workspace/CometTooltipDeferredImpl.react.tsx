__d("CometTooltipDeferredImpl.react", ["BaseTooltipImpl.react", "CometProgressRingIndeterminate.react", "TetraTextPairing.react", "react", "useCometTheme"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.headline,
            d = a.tooltip,
            e = a.tooltipTheme;
        e = e === void 0 ? "invert" : e;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["headline", "tooltip", "tooltipTheme"]);
        e = c("useCometTheme")(e);
        var f = e[0];
        e = e[1];
        var g = i.jsx(c("CometProgressRingIndeterminate.react"), {
            color: "dark",
            size: 20
        });
        d = d != null ? i.jsx(c("TetraTextPairing.react"), {
            body: d,
            bodyColor: "primary",
            headline: b,
            headlineColor: "primary",
            level: 4
        }) : null;
        return i.jsx(f, {
            children: i.jsx(c("BaseTooltipImpl.react"), babelHelpers["extends"]({}, a, {
                loadingState: g,
                tooltip: d,
                xstyle: e
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { FC } from 'react';
import BaseTooltipImpl from 'BaseTooltipImpl.react';
import CometProgressRingIndeterminate from 'CometProgressRingIndeterminate.react';
import TetraTextPairing from 'TetraTextPairing.react';
import useCometTheme from 'useCometTheme';

interface CometTooltipDeferredImplProps {
  headline: string;
  tooltip?: string | null;
  tooltipTheme?: string;
  /* Other props here */
}

const CometTooltipDeferredImpl: FC<CometTooltipDeferredImplProps> = ({
  headline,
  tooltip,
  tooltipTheme = 'invert',
  /* Other props */
}) => {
  const [Component, tooltipStyle] = useCometTheme(tooltipTheme);
  const loadingState = <CometProgressRingIndeterminate color="dark" size={20} />;

  const tooltipComponent =
    tooltip != null ? (
      <TetraTextPairing
        body={tooltip}
        bodyColor="primary"
        headline={headline}
        headlineColor="primary"
        level={4}
      />
    ) : null;

  return (
    <Component>
      <BaseTooltipImpl loadingState={loadingState} tooltip={tooltipComponent} xstyle={tooltipStyle} />
    </Component>
  );
};

CometTooltipDeferredImpl.displayName = `${CometTooltipDeferredImpl.name} [from ${98}]`;

export default CometTooltipDeferredImpl;
