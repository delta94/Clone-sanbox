__d(
  "MWPAudioPlaybackIcon.react",
  ["MWPAudioPlayerIcons.react", "MWPAudioPlayerUtils", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.disabled,
        c = a.hasEnded,
        e = a.isPaused,
        f = a.isPlaying;
      a = a.outgoing;
      var g = d("MWPAudioPlayerUtils").useShowNewUX();
      g = g
        ? a
          ? "var(--always-white)"
          : "var(--progress-ring-neutral-foreground)"
        : a
        ? "var(--chat-outgoing-message-bubble-background-color)"
        : void 0;
      if (f)
        return i.jsx(d("MWPAudioPlayerIcons.react").PauseIcon, { color: g });
      return e || c || b
        ? i.jsx(d("MWPAudioPlayerIcons.react").PlayIcon, { color: g })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import { MWPAudioPlayerIcons } from "required-modules"; // Adjust this import according to your project structure
import { MWPAudioPlayerUtils } from "required-modules";
import React from "react";

interface MWPAudioPlaybackIconProps {
  disabled: boolean;
  hasEnded: boolean;
  isPaused: boolean;
  isPlaying: boolean;
  outgoing: boolean;
}

const MWPAudioPlaybackIcon: React.FC<MWPAudioPlaybackIconProps> = ({
  disabled,
  hasEnded,
  isPaused,
  isPlaying,
  outgoing,
}) => {
  const showNewUX = MWPAudioPlayerUtils.useShowNewUX();

  const color = showNewUX
    ? outgoing
      ? "var(--always-white)"
      : "var(--progress-ring-neutral-foreground)"
    : outgoing
    ? "var(--chat-outgoing-message-bubble-background-color)"
    : undefined;

  if (isPlaying) {
    return <MWPAudioPlayerIcons.PauseIcon color={color} />;
  }

  if (isPaused || hasEnded || disabled) {
    return <MWPAudioPlayerIcons.PlayIcon color={color} />;
  }

  return null;
};

MWPAudioPlaybackIcon.displayName = `${MWPAudioPlaybackIcon.name} [from MWPAudioPlaybackIcon.react]`;

export default MWPAudioPlaybackIcon;
