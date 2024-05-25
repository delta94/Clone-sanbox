__d(
  "MWPAudioPlayerIcons.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      a = a.color;
      return i.jsx("svg", {
        "aria-hidden": !0,
        height: "24px",
        viewBox: "0 0 36 36",
        width: "24px",
        children: i.jsx("path", {
          d: "M10 25.5v-15a1.5 1.5 0 012.17-1.34l15 7.5a1.5 1.5 0 010 2.68l-15 7.5A1.5 1.5 0 0110 25.5z",
          fill: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      a = a.color;
      return i.jsx("svg", {
        "aria-hidden": !0,
        height: "24px",
        viewBox: "0 0 36 36",
        width: "24px",
        children: i.jsx("rect", {
          fill: a,
          height: "18",
          rx: "2",
          width: "18",
          x: "9",
          y: "9",
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function c(a) {
      a = a.color;
      return i.jsx("svg", {
        "aria-hidden": !0,
        height: "24px",
        viewBox: "0 0 36 36",
        width: "24px",
        children: i.jsx("path", {
          d: "M11 8.5c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5V10c0-.83-.67-1.5-1.5-1.5h-4zM21 8.5c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5V10c0-.83-.67-1.5-1.5-1.5h-4z",
          fill: a,
        }),
      });
    }
    c.displayName = c.name + " [from " + f.id + "]";
    g.PlayIcon = a;
    g.StopIcon = b;
    g.PauseIcon = c;
  },
  98
);

import React from "react";

interface IconProps {
  color?: string;
}

const PlayIcon: React.FC<IconProps> = ({ color }) => {
  return (
    <svg aria-hidden={true} height="24px" viewBox="0 0 36 36" width="24px">
      <path
        d="M10 25.5v-15a1.5 1.5 0 012.17-1.34l15 7.5a1.5 1.5 0 010 2.68l-15 7.5A1.5 1.5 0 0110 25.5z"
        fill={color}
      />
    </svg>
  );
};
PlayIcon.displayName = `PlayIcon [from MWPAudioPlayerIcons.react]`;

const StopIcon: React.FC<IconProps> = ({ color }) => {
  return (
    <svg aria-hidden={true} height="24px" viewBox="0 0 36 36" width="24px">
      <rect fill={color} height="18" rx="2" width="18" x="9" y="9" />
    </svg>
  );
};
StopIcon.displayName = `StopIcon [from MWPAudioPlayerIcons.react]`;

const PauseIcon: React.FC<IconProps> = ({ color }) => {
  return (
    <svg aria-hidden={true} height="24px" viewBox="0 0 36 36" width="24px">
      <path
        d="M11 8.5c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5V10c0-.83-.67-1.5-1.5-1.5h-4zM21 8.5c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5V10c0-.83-.67-1.5-1.5-1.5h-4z"
        fill={color}
      />
    </svg>
  );
};
PauseIcon.displayName = `PauseIcon [from MWPAudioPlayerIcons.react]`;

export { PlayIcon, StopIcon, PauseIcon };
