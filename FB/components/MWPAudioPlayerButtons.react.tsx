__d(
  "MWPAudioPlayerButtons.react",
  [
    "MWPAudioPlaybackContext.react",
    "MWPAudioPlayerSharedStyles",
    "MWPAudioPlayerUtils",
    "MWXPressable.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react");
    function a(a) {
      a = a.outgoing;
      var b = d("MWPAudioPlayerUtils").useShowNewUX(),
        e = d("MWPAudioPlaybackContext.react").useMWPAudioPlaybackRate(),
        f = e[0];
      e = e[1];
      if (!b) return null;
      b = a ? "var(--always-white)" : "var(--progress-ring-neutral-foreground)";
      return j.jsx(c("MWXPressable.react"), {
        onPress: e,
        overlayDisabled: !0,
        children: j.jsx("div", {
          className: (h || (h = c("stylex")))(
            d("MWPAudioPlayerSharedStyles").styles.rightSideTop,
            d("MWPAudioPlayerSharedStyles").styles.rightSideMargin,
            d("MWPAudioPlayerSharedStyles").styles.rightSideBottom,
            d("MWPAudioPlayerSharedStyles").styles.rightSideImprove
          ),
          style: {
            backgroundColor: "var(--placeholder-text-on-media)",
            borderRadius: 10,
            color: b,
          },
          children: f,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.disabled,
        e = a.icon,
        f = a.label;
      a.onHoverMove;
      a = a.onPress;
      var g = d("MWPAudioPlayerUtils").useShowNewUX(),
        h = g ? { backgroundColor: "transparent" } : {};
      return j.jsx(c("MWXPressable.react"), {
        "aria-label": f,
        disabled: b,
        onPress: a,
        overlayDisabled: g,
        overlayRadius: "50%",
        style: h,
        testid: void 0,
        xstyle: d("MWPAudioPlayerSharedStyles").styles.pressable,
        children: e,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.PlaybackRateButton = a;
    g.AudioPlayerPlaybackButton = b;
  },
  98
);

import { useMWPAudioPlaybackRate } from "MWPAudioPlaybackContext.react";
import { styles as sharedStyles } from "MWPAudioPlayerSharedStyles";
import { useShowNewUX } from "MWPAudioPlayerUtils";
import MWXPressable from "MWXPressable.react";
import React from "react";
import stylex from "stylex";

type PlaybackRateButtonProps = {
  outgoing: boolean;
};

type AudioPlayerPlaybackButtonProps = {
  disabled: boolean;
  icon: React.ReactNode;
  label: string;
  onHoverMove?: () => void;
  onPress: () => void;
};

const PlaybackRateButton: React.FC<PlaybackRateButtonProps> = ({
  outgoing,
}) => {
  const showNewUX = useShowNewUX();
  const [playbackRate, setPlaybackRate] = useMWPAudioPlaybackRate();

  if (!showNewUX) return null;

  const color = outgoing
    ? "var(--always-white)"
    : "var(--progress-ring-neutral-foreground)";

  return (
    <MWXPressable onPress={setPlaybackRate} overlayDisabled>
      <div
        className={stylex(
          sharedStyles.rightSideTop,
          sharedStyles.rightSideMargin,
          sharedStyles.rightSideBottom,
          sharedStyles.rightSideImprove
        )}
        style={{
          backgroundColor: "var(--placeholder-text-on-media)",
          borderRadius: 10,
          color: color,
        }}
      >
        {playbackRate}
      </div>
    </MWXPressable>
  );
};

PlaybackRateButton.displayName = `${PlaybackRateButton.name} [from ${module.id}]`;

const AudioPlayerPlaybackButton: React.FC<AudioPlayerPlaybackButtonProps> = ({
  disabled,
  icon,
  label,
  onHoverMove,
  onPress,
}) => {
  const showNewUX = useShowNewUX();
  const style = showNewUX ? { backgroundColor: "transparent" } : {};

  return (
    <MWXPressable
      aria-label={label}
      disabled={disabled}
      onPress={onPress}
      overlayDisabled={showNewUX}
      overlayRadius="50%"
      style={style}
      xstyle={sharedStyles.pressable}
    >
      {icon}
    </MWXPressable>
  );
};

AudioPlayerPlaybackButton.displayName = `${AudioPlayerPlaybackButton.name} [from ${module.id}]`;

export { PlaybackRateButton, AudioPlayerPlaybackButton };
