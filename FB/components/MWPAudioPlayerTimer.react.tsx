__d(
  "MWPAudioPlayerTimer.react",
  [
    "MWPAudioPlayerSharedStyles",
    "MWPAudioPlayerUtils",
    "formatDurationSeconds",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react");
    function a(a) {
      var b = a.outgoing;
      b = b === void 0 ? !0 : b;
      a = a.time;
      var e = d("MWPAudioPlayerUtils").useShowNewUX();
      b = e
        ? {
            color: b
              ? "var(--always-white)"
              : "var(--progress-ring-neutral-foreground)",
          }
        : {
            color: b
              ? "var(--chat-composer-button-color)"
              : "var(--always-black)",
            cursor: "pointer",
          };
      return j.jsx("div", {
        className: (h || (h = c("stylex")))(
          d("MWPAudioPlayerSharedStyles").styles.rightSideTop,
          !e && d("MWPAudioPlayerSharedStyles").styles.rightSideBottom,
          e && d("MWPAudioPlayerSharedStyles").styles.rightSideImprove
        ),
        "data-testid": void 0,
        style: b,
        children: c("formatDurationSeconds")(a),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import MWPAudioPlayerSharedStyles from "MWPAudioPlayerSharedStyles";
import { useShowNewUX } from "MWPAudioPlayerUtils";
import formatDurationSeconds from "formatDurationSeconds";
import React from "react";
import stylex from "stylex";

interface MWPAudioPlayerTimerProps {
  outgoing?: boolean;
  time: number;
}

const MWPAudioPlayerTimer: React.FC<MWPAudioPlayerTimerProps> = ({
  outgoing = true,
  time,
}) => {
  const showNewUX = useShowNewUX();

  const style = showNewUX
    ? {
        color: outgoing
          ? "var(--always-white)"
          : "var(--progress-ring-neutral-foreground)",
      }
    : {
        color: outgoing
          ? "var(--chat-composer-button-color)"
          : "var(--always-black)",
        cursor: "pointer",
      };

  return (
    <div
      className={stylex(
        MWPAudioPlayerSharedStyles.styles.rightSideTop,
        !showNewUX && MWPAudioPlayerSharedStyles.styles.rightSideBottom,
        showNewUX && MWPAudioPlayerSharedStyles.styles.rightSideImprove
      )}
      data-testid={undefined}
      style={style}
    >
      {formatDurationSeconds(time)}
    </div>
  );
};

MWPAudioPlayerTimer.displayName = `MWPAudioPlayerTimer [from ${__filename}]`;

export default MWPAudioPlayerTimer;
