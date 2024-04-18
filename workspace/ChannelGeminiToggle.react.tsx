__d("ChannelGeminiToggle.react", ["fbt", "GeminiNavAndChannelContext", "WorkGalahadColumnCollapseButton.react", "react"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || d("react"),
        k = {
            buttonBackground: {
                backgroundColor: "x881uwn",
                $$css: !0
            }
        };

    function a() {
        var a = d("GeminiNavAndChannelContext").useNavUIState(),
            b = a.isAutoHideEnabled,
            e = a.isNavHovered,
            f = a.onMouseEnter,
            g = a.onMouseLeave,
            i = a.setIsAutoHideEnabled;
        a = b ? h._("Keep menu open") : h._("Close the menu");
        return j.jsx(c("WorkGalahadColumnCollapseButton.react"), {
            "aria-label": a,
            columnPosition: "left",
            mode: b ? "expand" : "collapse",
            onClick: function () {
                b ? f() : g(), i(!b)
            },
            tooltipMessage: a,
            visible: e || b,
            xstyle: k.buttonBackground
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { useContext } from 'react';
import { fbt } from './fbt'; // Assuming location
import { GeminiNavAndChannelContext } from './GeminiNavAndChannelContext'; // Assuming location
import WorkGalahadColumnCollapseButton from './WorkGalahadColumnCollapseButton.react';


const buttonBackground = {
  backgroundColor: 'x881uwn',
};

const ChannelGeminiToggle: React.FC = () => {
  const {
    isAutoHideEnabled,
    isNavHovered,
    onMouseEnter,
    onMouseLeave,
    setIsAutoHideEnabled,
  } = useContext(GeminiNavAndChannelContext);

  const ariaLabel = isAutoHideEnabled ? fbt('Keep menu open') : fbt('Close the menu');

  return (
    <WorkGalahadColumnCollapseButton
      aria-label={ariaLabel}
      columnPosition="left"
      mode={isAutoHideEnabled ? 'expand' : 'collapse'}
      onClick={() => {
        isAutoHideEnabled ? onMouseEnter() : onMouseLeave();
        setIsAutoHideEnabled(!isAutoHideEnabled)
      }}
      tooltipMessage={ariaLabel}
      visible={isNavHovered || isAutoHideEnabled}
      xstyle={buttonBackground}
    />
  );
};

export default ChannelGeminiToggle;
