__d(
  "MWPAudioPlayerScrubberBar.react",
  ["fbt", "MWPAudioPlayerSharedStyles", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = j || d("react");
    b = k.forwardRef(a);
    e = b;
    function a(a, b) {
      var e = a.xPosition,
        f = a.currentTime;
      a = a.duration;
      return k.jsx("div", {
        "aria-label": h._("__JHASH__cCPjPb_WWZb__JHASH__"),
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": f,
        className: (i || (i = c("stylex")))(
          f === 0
            ? d("MWPAudioPlayerSharedStyles").styles.transparentBar
            : d("MWPAudioPlayerSharedStyles").styles.bar
        ),
        ref: b,
        role: "slider",
        style: { left: e.toFixed(2) + "%" },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;
    g["default"] = b;
  },
  226
);

import fbt from "fbt";
import MWPAudioPlayerSharedStyles from "MWPAudioPlayerSharedStyles";
import React, { forwardRef } from "react";
import stylex from "stylex";

interface MWPAudioPlayerScrubberBarProps {
  xPosition: number;
  currentTime: number;
  duration: number;
}

const MWPAudioPlayerScrubberBar = forwardRef<
  HTMLDivElement,
  MWPAudioPlayerScrubberBarProps
>(({ xPosition, currentTime, duration }, ref) => {
  return (
    <div
      aria-label={fbt._("__JHASH__cCPjPb_WWZb__JHASH__")}
      aria-valuemax={duration}
      aria-valuemin={0}
      aria-valuenow={currentTime}
      className={stylex(
        currentTime === 0
          ? MWPAudioPlayerSharedStyles.styles.transparentBar
          : MWPAudioPlayerSharedStyles.styles.bar
      )}
      ref={ref}
      role="slider"
      style={{ left: `${xPosition.toFixed(2)}%` }}
    />
  );
});

MWPAudioPlayerScrubberBar.displayName =
  "MWPAudioPlayerScrubberBar [from " + __filename + "]";
export default MWPAudioPlayerScrubberBar;
