__d(
  "MWPAudioPlaybackButton.react",
  [
    "MWPAudioPlaybackIcon.react",
    "MWPAudioPlayerButtons.react",
    "MWPAudioPlayerLabels",
    "MWPAudioPlayerSharedStyles",
    "MWPAudioPlayerUtils",
    "MWXSpinner.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react");
    function a(a) {
      var b = a.isLoading,
        e = a.onPress,
        f = a.scrubberRef,
        g = a.disabled,
        i = a.hasEnded,
        k = a.isPaused,
        l = a.isPlaying;
      a = a.outgoing;
      var m = d("MWPAudioPlayerUtils").usePlaybackButtonContainerStyle();
      f = d("MWPAudioPlayerUtils").useResetHighlightProgress(f);
      var n = l || k;
      return b
        ? j.jsx("div", {
            className: (h || (h = c("stylex")))(
              d("MWPAudioPlayerSharedStyles").styles.pressable
            ),
            onMouseMove: n ? f : void 0,
            style: m,
            children: j.jsx(c("MWXSpinner.react"), {
              color: "disabled",
              size: 16,
            }),
          })
        : j.jsx("div", {
            onMouseMove: n ? f : void 0,
            style: m,
            children: j.jsx(
              d("MWPAudioPlayerButtons.react").AudioPlayerPlaybackButton,
              {
                disabled: g,
                icon: j.jsx(c("MWPAudioPlaybackIcon.react"), {
                  disabled: g,
                  hasEnded: i,
                  isPaused: k,
                  isPlaying: l,
                  outgoing: a,
                }),
                label: l
                  ? d("MWPAudioPlayerLabels").pauseLabel
                  : d("MWPAudioPlayerLabels").playLabel,
                onPress: e,
              }
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import {
  MWPAudioPlaybackIcon,
  MWPAudioPlayerButtons,
  MWPAudioPlayerLabels,
  MWPAudioPlayerSharedStyles,
  MWPAudioPlayerUtils,
  MWXSpinner,
} from "required-modules"; // Adjust this import according to your project structure
import React, { MouseEventHandler } from "react";
import stylex from "stylex";

interface MWPAudioPlaybackButtonProps {
  isLoading: boolean;
  onPress: () => void;
  scrubberRef: React.RefObject<HTMLDivElement>;
  disabled: boolean;
  hasEnded: boolean;
  isPaused: boolean;
  isPlaying: boolean;
  outgoing: boolean;
}

const MWPAudioPlaybackButton: React.FC<MWPAudioPlaybackButtonProps> = ({
  isLoading,
  onPress,
  scrubberRef,
  disabled,
  hasEnded,
  isPaused,
  isPlaying,
  outgoing,
}) => {
  const containerStyle = MWPAudioPlayerUtils.usePlaybackButtonContainerStyle();
  const resetHighlightProgress =
    MWPAudioPlayerUtils.useResetHighlightProgress(scrubberRef);
  const isActive = isPlaying || isPaused;

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = isActive
    ? resetHighlightProgress
    : undefined;

  return isLoading ? (
    <div
      className={stylex(MWPAudioPlayerSharedStyles.styles.pressable)}
      onMouseMove={handleMouseMove}
      style={containerStyle}
    >
      <MWXSpinner color="disabled" size={16} />
    </div>
  ) : (
    <div onMouseMove={handleMouseMove} style={containerStyle}>
      <MWPAudioPlayerButtons.AudioPlayerPlaybackButton
        disabled={disabled}
        icon={
          <MWPAudioPlaybackIcon
            disabled={disabled}
            hasEnded={hasEnded}
            isPaused={isPaused}
            isPlaying={isPlaying}
            outgoing={outgoing}
          />
        }
        label={
          isPlaying
            ? MWPAudioPlayerLabels.pauseLabel
            : MWPAudioPlayerLabels.playLabel
        }
        onPress={onPress}
      />
    </div>
  );
};

MWPAudioPlaybackButton.displayName = `${MWPAudioPlaybackButton.name} [from MWPAudioPlaybackButton.react]`;

export default MWPAudioPlaybackButton;
