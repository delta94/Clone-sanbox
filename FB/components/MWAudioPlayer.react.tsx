__d(
  "MWAudioPlayer.react",
  [
    "I64",
    "MWChatImageStyles",
    "MWPAudioPlaybackButton.react",
    "MWPAudioPlayerButtons.react",
    "MWPAudioPlayerContainer.react",
    "MWPAudioPlayerHighlight.react",
    "MWPAudioPlayerKeyCommands.react",
    "MWPAudioPlayerSharedStyles",
    "MWPAudioPlayerTimer.react",
    "MWPAudioPlayerUtils",
    "react",
    "requireDeferred",
    "stylex",
    "useMWNextAttachment",
    "useMWPAudioWaveformData.react",
    "useMWPMarkAudioAttachmentAsConsumed.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = i || (i = d("react"));
    b = i;
    var l = b.useMemo,
      m = b.useRef,
      n = c("requireDeferred")("MWChatAudioLog").__setRef(
        "MWAudioPlayer.react"
      ),
      o = {
        incoming: {
          backgroundColor: "x1arowe1",
          opacity: "x1ptxcow",
          $$css: !0,
        },
        outgoing: {
          backgroundColor: "x14hiurz",
          opacity: "xz5rk10",
          $$css: !0,
        },
        root: { transform: "x5i6ehr", $$css: !0 },
      };
    function p(a) {
      return l(
        function () {
          return [o.root, a ? o.outgoing : o.incoming];
        },
        [a]
      );
    }
    function q() {
      n.onReady(function (a) {
        return a.logBrowserDenyAccess();
      });
    }
    function a(a) {
      var b = a.attachment,
        e = a.connectBottom,
        f = a.connectTop,
        g = a.getPlayableUrl,
        i = a.isReply;
      i = i === void 0 ? !1 : i;
      var l = a.mediaRenderQpl,
        n = a.message,
        o = a.outgoing,
        r = a.renderUnsupportedAttachment;
      a = a.width;
      var s = b.playableDurationMs;
      s =
        (j || (j = d("I64"))).to_float(
          (s = s) != null ? s : (j || (j = d("I64"))).zero
        ) / 1e3;
      var t = c("useMWNextAttachment")(b, n),
        u = g(b, "MWAudioPlayer", l),
        v = c("useMWPAudioWaveformData.react")(b, u);
      e = d("MWChatImageStyles").calculateBorderStyles(e, f, !1, o);
      f = d("MWPAudioPlayerUtils").useControlCenter(
        u,
        t != null ? g(t, "MWAudioPlayer") : void 0,
        n.messageId,
        t == null ? void 0 : t.messageId,
        q,
        !1,
        s,
        l
      );
      g = f[0];
      n = f[1];
      t = f[2];
      var w = f[3],
        x = f[4];
      f = f[5];
      c("useMWPMarkAudioAttachmentAsConsumed.react")(t, b);
      var y = g === d("MWPAudioPlayerUtils").State.NONE,
        z = g === d("MWPAudioPlayerUtils").State.PLAYING,
        A = g === d("MWPAudioPlayerUtils").State.PAUSED,
        B = g === d("MWPAudioPlayerUtils").State.LOADING;
      g = g === d("MWPAudioPlayerUtils").State.ENDED;
      var C = z || A,
        D = m(),
        E = p(o);
      a = d("MWPAudioPlayerUtils").useCalculatePlayerWidth(a);
      a = { width: a + "px" };
      var F = C ? Math.max(s - n, 0) : 0;
      if (u == null || u.length === 0) {
        l == null ? void 0 : l.addPoint("empty_playable_url");
        if (r != null) return r(b);
      }
      return k.jsx(c("MWPAudioPlayerKeyCommands.react"), {
        audioEl: t,
        children: k.jsx(c("MWPAudioPlayerContainer.react"), {
          audioEl: t,
          hasScrubber: C,
          scrubberRef: D,
          style: a,
          testid: void 0,
          useCase: d("MWPAudioPlayerUtils").UseCase.PLAYER,
          children: k.jsxs("div", {
            className: (h || (h = c("stylex")))(
              d("MWPAudioPlayerSharedStyles").styles.common,
              e.imageStyles,
              o
                ? d("MWPAudioPlayerSharedStyles").styles.commonOutgoing
                : d("MWPAudioPlayerSharedStyles").styles.commonIncoming,
              i && d("MWPAudioPlayerSharedStyles").styles.commonReply,
              o &&
                i &&
                d("MWPAudioPlayerSharedStyles").styles.commonOutgoingReply
            ),
            children: [
              k.jsx(
                d("MWPAudioPlayerHighlight.react").MWPAudioPlayerHighlightV2,
                {
                  audioEl: t,
                  currentTime: n,
                  duration: s,
                  hasEnded: g,
                  hasScrubber: C,
                  isListened: b.isAttachmentConsumed === !0,
                  isPlaying: z,
                  onUpdateScrubber: f,
                  outgoing: o,
                  progressHighlightRef: x,
                  scrubberRef: D,
                  waveformData: v,
                  xstyle: E,
                  children: k.jsx(c("MWPAudioPlaybackButton.react"), {
                    disabled: y,
                    hasEnded: g,
                    isLoading: B,
                    isPaused: A,
                    isPlaying: z,
                    onPress: w,
                    outgoing: o,
                    scrubberRef: D,
                  }),
                }
              ),
              k.jsx("div", {
                children: z
                  ? k.jsxs(k.Fragment, {
                      children: [
                        k.jsx(c("MWPAudioPlayerTimer.react"), {
                          outgoing: o,
                          time: F,
                        }),
                        k.jsx(
                          d("MWPAudioPlayerButtons.react").PlaybackRateButton,
                          { outgoing: o }
                        ),
                      ],
                    })
                  : k.jsx(c("MWPAudioPlayerTimer.react"), {
                      outgoing: o,
                      time: F,
                    }),
              }),
            ],
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.useHighlightStyles = p;
    g.MWAudioPlayer = a;
  },
  98
);

import React, { useMemo, useRef } from "react";
import { I64 } from "I64";
import { MWChatImageStyles } from "MWChatImageStyles";
import { MWPAudioPlaybackButton } from "MWPAudioPlaybackButton.react";
import { MWPAudioPlayerButtons } from "MWPAudioPlayerButtons.react";
import { MWPAudioPlayerContainer } from "MWPAudioPlayerContainer.react";
import { MWPAudioPlayerHighlight } from "MWPAudioPlayerHighlight.react";
import { MWPAudioPlayerKeyCommands } from "MWPAudioPlayerKeyCommands.react";
import { MWPAudioPlayerSharedStyles } from "MWPAudioPlayerSharedStyles";
import { MWPAudioPlayerTimer } from "MWPAudioPlayerTimer.react";
import { MWPAudioPlayerUtils, State, UseCase } from "MWPAudioPlayerUtils";
import { requireDeferred } from "requireDeferred";
import { stylex } from "stylex";
import { useMWNextAttachment } from "useMWNextAttachment";
import { useMWPAudioWaveformData } from "useMWPAudioWaveformData.react";
import { useMWPMarkAudioAttachmentAsConsumed } from "useMWPMarkAudioAttachmentAsConsumed.react";

const MWChatAudioLog = requireDeferred("MWChatAudioLog").__setRef(
  "MWAudioPlayer.react"
);

const styles = {
  incoming: {
    backgroundColor: "x1arowe1",
    opacity: "x1ptxcow",
    $$css: true,
  },
  outgoing: {
    backgroundColor: "x14hiurz",
    opacity: "xz5rk10",
    $$css: true,
  },
  root: { transform: "x5i6ehr", $$css: true },
};

function useHighlightStyles(outgoing: boolean) {
  return useMemo(
    () => [styles.root, outgoing ? styles.outgoing : styles.incoming],
    [outgoing]
  );
}

function logBrowserDenyAccess() {
  MWChatAudioLog.onReady((log: any) => log.logBrowserDenyAccess());
}

type Props = {
  attachment: any;
  connectBottom?: boolean;
  connectTop?: boolean;
  getPlayableUrl: (
    attachment: any,
    useCase?: string,
    mediaRenderQpl?: any
  ) => string | undefined;
  isReply?: boolean;
  mediaRenderQpl?: any;
  message: any;
  outgoing: boolean;
  renderUnsupportedAttachment?: (attachment: any) => JSX.Element;
  width: number;
};

const MWAudioPlayer: React.FC<Props> = ({
  attachment,
  connectBottom,
  connectTop,
  getPlayableUrl,
  isReply = false,
  mediaRenderQpl,
  message,
  outgoing,
  renderUnsupportedAttachment,
  width,
}) => {
  const playableDurationMs =
    I64.to_float(attachment.playableDurationMs ?? I64.zero) / 1000;
  const nextAttachment = useMWNextAttachment(attachment, message);
  const playableUrl = getPlayableUrl(
    attachment,
    "MWAudioPlayer",
    mediaRenderQpl
  );
  const waveformData = useMWPAudioWaveformData(attachment, playableUrl);

  const borderStyles = MWChatImageStyles.calculateBorderStyles(
    connectBottom,
    connectTop,
    false,
    outgoing
  );
  const [
    state,
    currentTime,
    audioEl,
    handlePlayback,
    progressHighlightRef,
    handleScrubber,
  ] = MWPAudioPlayerUtils.useControlCenter(
    playableUrl,
    nextAttachment
      ? getPlayableUrl(nextAttachment, "MWAudioPlayer")
      : undefined,
    message.messageId,
    nextAttachment?.messageId,
    logBrowserDenyAccess,
    false,
    playableDurationMs,
    mediaRenderQpl
  );

  useMWPMarkAudioAttachmentAsConsumed(audioEl, attachment);

  const isNone = state === State.NONE;
  const isPlaying = state === State.PLAYING;
  const isPaused = state === State.PAUSED;
  const isLoading = state === State.LOADING;
  const hasEnded = state === State.ENDED;
  const hasScrubber = isPlaying || isPaused;
  const scrubberRef = useRef<HTMLDivElement>(null);
  const playerWidth = MWPAudioPlayerUtils.useCalculatePlayerWidth(width);
  const playerStyle = { width: `${playerWidth}px` };
  const remainingTime = hasScrubber
    ? Math.max(playableDurationMs - currentTime, 0)
    : 0;
  const highlightStyles = useHighlightStyles(outgoing);

  if (!playableUrl || playableUrl.length === 0) {
    mediaRenderQpl?.addPoint("empty_playable_url");
    if (renderUnsupportedAttachment) {
      return renderUnsupportedAttachment(attachment);
    }
  }

  return (
    <MWPAudioPlayerKeyCommands audioEl={audioEl}>
      <MWPAudioPlayerContainer
        audioEl={audioEl}
        hasScrubber={hasScrubber}
        scrubberRef={scrubberRef}
        style={playerStyle}
        useCase={UseCase.PLAYER}
      >
        <div
          className={stylex(
            MWPAudioPlayerSharedStyles.styles.common,
            borderStyles.imageStyles,
            outgoing
              ? MWPAudioPlayerSharedStyles.styles.commonOutgoing
              : MWPAudioPlayerSharedStyles.styles.commonIncoming,
            isReply && MWPAudioPlayerSharedStyles.styles.commonReply,
            outgoing &&
              isReply &&
              MWPAudioPlayerSharedStyles.styles.commonOutgoingReply
          )}
        >
          <MWPAudioPlayerHighlight
            audioEl={audioEl}
            currentTime={currentTime}
            duration={playableDurationMs}
            hasEnded={hasEnded}
            hasScrubber={hasScrubber}
            isListened={attachment.isAttachmentConsumed === true}
            isPlaying={isPlaying}
            onUpdateScrubber={handleScrubber}
            outgoing={outgoing}
            progressHighlightRef={progressHighlightRef}
            scrubberRef={scrubberRef}
            waveformData={waveformData}
            xstyle={highlightStyles}
          >
            <MWPAudioPlaybackButton
              disabled={isNone}
              hasEnded={hasEnded}
              isLoading={isLoading}
              isPaused={isPaused}
              isPlaying={isPlaying}
              onPress={handlePlayback}
              outgoing={outgoing}
              scrubberRef={scrubberRef}
            />
          </MWPAudioPlayerHighlight>
          <div>
            {isPlaying ? (
              <>
                <MWPAudioPlayerTimer outgoing={outgoing} time={remainingTime} />
                <MWPAudioPlayerButtons.PlaybackRateButton outgoing={outgoing} />
              </>
            ) : (
              <MWPAudioPlayerTimer outgoing={outgoing} time={remainingTime} />
            )}
          </div>
        </div>
      </MWPAudioPlayerContainer>
    </MWPAudioPlayerKeyCommands>
  );
};

MWAudioPlayer.displayName = `${MWAudioPlayer.name} [from ${__filename}]`;

export { useHighlightStyles, MWAudioPlayer };
