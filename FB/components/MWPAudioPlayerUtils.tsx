__d(
  "MWPAudioPlayerUtils",
  [
    "fbt",
    "$InternalEnum",
    "MWLSThreadDisplayContext",
    "MWPAudioPlaybackContext.react",
    "MessengerSurfaceQuickChat.bs",
    "cancelAnimationFrame",
    "getErrorNameFromMediaErrorCode",
    "gkx",
    "promiseDone",
    "react",
    "requestAnimationFrameAcrossTransitions",
    "useStable",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || (i = d("react")),
      k = i,
      l = k.createContext,
      m = k.useCallback,
      n = k.useContext,
      o = k.useEffect,
      p = k.useRef,
      q = k.useState,
      r = b("$InternalEnum").Mirrored(["PLAYER", "RECORDER"]),
      s = l(r.PLAYER),
      t = c("gkx")("24145");
    function u() {
      var a = n(s);
      return t && a === r.PLAYER;
    }
    function a(a, b) {
      if (b == null) return 0;
      b = b.getBoundingClientRect();
      var c = b.left;
      b = b.width;
      a = a.clientX - c;
      c = b > 0 && a > 0 ? a / b : 0;
      return v(c, 0, 1);
    }
    function v(a, b, c) {
      return Math.min(Math.max(b, a), c);
    }
    function e(a) {
      var b = a.currentTime;
      a = a.duration;
      return j.jsx("div", {
        "aria-label": h._("__JHASH__cCPjPb_WWZb__JHASH__"),
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": b,
        role: "slider",
        style: { position: "absolute" },
        tabIndex: 0,
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    function w() {
      var a = u();
      return a
        ? { marginLeft: 12, marginRight: 12 }
        : { marginLeft: 6, marginRight: 6 };
    }
    function x(a) {
      return m(
        function (b) {
          var c = a.current;
          if (c != null) {
            b.stopPropagation();
            return c.updateHighlight(0);
          }
        },
        [a]
      );
    }
    function y(a, b, d, e, f, g) {
      f === void 0 && (f = !1);
      var h = p();
      o(
        function () {
          var d = function (a) {
            var b = h.current;
            if (b != null) return b.updateHighlight(a);
          };
          if (g) {
            f ? d(100) : d(0);
            return;
          }
          if (e) {
            var i = { contents: void 0 },
              j,
              k = function e(f) {
                var g;
                if (b.current != null)
                  g = b.current.currentTime / b.current.duration;
                else {
                  var h = i.contents,
                    k = 0;
                  h != null ? (k = f - h) : (i.contents = f);
                  g = k / (a * 1e3);
                }
                h = Math.min(g * 100, 100);
                d(h);
                if (h < 100) {
                  j = c("requestAnimationFrameAcrossTransitions")(e);
                  return;
                }
              };
            j = c("requestAnimationFrameAcrossTransitions")(k);
            return function () {
              j != null && c("cancelAnimationFrame")(j);
            };
          }
          if (b.current != null) {
            k = b.current.currentTime / b.current.duration;
            d(k * 100);
          }
        },
        [a, e, g, h, b, f, d]
      );
      return h;
    }
    var z = b("$InternalEnum").Mirrored([
      "ENDED",
      "LOADING",
      "NONE",
      "PAUSED",
      "PLAYING",
    ]);
    function A(a, b, e, f, g, h, i, j) {
      var k = u(),
        l = c("useStable")(function () {
          return g;
        }),
        n = d("MWPAudioPlaybackContext.react").useMWPAudioPlaybackElement(
          a,
          b,
          e,
          f,
          k
        ),
        r = p(n);
      a = q(z.NONE);
      var s = a[0],
        t = a[1];
      b = q(function () {
        var a;
        return (a = n == null ? void 0 : n.currentTime) != null ? a : 0;
      });
      e = b[0];
      var v = b[1];
      o(
        function () {
          if (n == null) {
            t(z.NONE);
            return;
          }
          n.ended && t(z.ENDED);
          t(function () {
            return n.paused ? z.PAUSED : z.PLAYING;
          });
          v(n.currentTime);
          r.current = n;
        },
        [n]
      );
      o(
        function () {
          var a = r.current;
          if (a == null) return;
          var b = function (a) {
              a = a.currentTarget;
              a = a.error;
              a = c("getErrorNameFromMediaErrorCode")(
                a == null ? void 0 : a.code
              );
              j == null
                ? void 0
                : j.endFail("load-audio-error", {
                    string: { audio_error_name: a },
                  });
            },
            d = function () {
              j == null ? void 0 : j.endSuccess();
            },
            e = function () {
              return t(z.PAUSED);
            },
            f = function () {
              return t(z.PLAYING);
            },
            g = function () {
              return t(z.LOADING);
            },
            h = function () {
              r.current != null && v(r.current.currentTime);
            },
            i = function () {
              (r.current = a), e(), d();
            },
            l = function () {
              r.current != null && ((r.current.currentTime = 0), v(0)),
                t(z.ENDED);
            };
          (a == null ? void 0 : a.readyState) != null &&
            a.readyState >= 2 &&
            d();
          a.addEventListener("loadstart", g);
          a.addEventListener("canplay", i);
          a.addEventListener("timeupdate", h);
          a.addEventListener("playing", f);
          a.addEventListener("pause", e);
          a.addEventListener("ended", l);
          a.addEventListener("error", b);
          return function () {
            a.removeEventListener("loadstart", g),
              a.removeEventListener("canplay", i),
              a.removeEventListener("timeupdate", h),
              a.removeEventListener("playing", f),
              a.removeEventListener("pause", e),
              a.removeEventListener("ended", l),
              a.removeEventListener("error", b),
              k || a.pause();
          };
        },
        [n, j, k]
      );
      f = m(
        function () {
          var a = r.current;
          if (a == null) return;
          switch (s) {
            case z.NONE:
            case z.LOADING:
              return;
            case z.ENDED:
            case z.PAUSED:
              c("promiseDone")(
                a.play(),
                function () {
                  return t(z.PLAYING);
                },
                l
              );
              return;
            case z.PLAYING:
              a.pause();
              t(z.PAUSED);
              return;
          }
        },
        [l, s]
      );
      a = m(function (a) {
        var b = r.current;
        if (b == null) return;
        b.currentTime = a;
        v(a);
      }, []);
      return [s, e, r, f, y(i, r, e, s === z.PLAYING, h, s === z.ENDED), a];
    }
    function B() {
      var a = d("MWPAudioPlaybackContext.react").useMWPAudioOutOfChatPlayback(),
        b = a[0],
        e = a[1];
      a = a[2];
      var f = q(function () {
          if (b == null) return z.NONE;
          return b.ended ? z.ENDED : b.paused ? z.PAUSED : z.PLAYING;
        }),
        g = f[0],
        h = f[1];
      f = q(function () {
        return b != null ? b.duration - b.currentTime : 0;
      });
      var i = f[0],
        j = f[1];
      o(
        function () {
          if (b == null) return;
          var a = function () {
              return j(b.duration - b.currentTime);
            },
            d = function () {
              return h(z.LOADING);
            },
            e = function () {
              return h(z.ENDED);
            };
          b.addEventListener("timeupdate", a);
          b.addEventListener("loadstart", d);
          b.addEventListener("ended", e);
          c("promiseDone")(b.play(), function () {
            return h(z.PLAYING);
          });
          return function () {
            b.removeEventListener("timeupdate", a),
              b.removeEventListener("loadstart", d),
              b.removeEventListener("ended", e);
          };
        },
        [b]
      );
      f = m(
        function () {
          if (b == null) return;
          switch (g) {
            case z.NONE:
            case z.LOADING:
              return;
            case z.ENDED:
            case z.PAUSED:
              c("promiseDone")(b.play(), function () {
                return h(z.PLAYING);
              });
              return;
            case z.PLAYING:
              b.pause();
              h(z.PAUSED);
              return;
          }
        },
        [b, g]
      );
      return [a, g === z.PLAYING, b != null && a != null && t, i, f, e];
    }
    function C(a) {
      var b = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),
        c = d("MessengerSurfaceQuickChat.bs").useIsQuickChatSurface();
      return ((a = a) != null ? a : b === "Inbox")
        ? 218
        : b === "ChatTab" && c
        ? 168
        : 180;
    }
    function D(a) {
      var b = u();
      return b && a === r.PLAYER ? 70 : 36;
    }
    g.UseCase = r;
    g.UseCaseContext = s;
    g.isEnabled = t;
    g.useShowNewUX = u;
    g.getMousePos = a;
    g.ScreenReaderLabel = e;
    g.usePlaybackButtonContainerStyle = w;
    g.useResetHighlightProgress = x;
    g.useProgressLiveUpdate = y;
    g.State = z;
    g.useControlCenter = A;
    g.useOutOfChatControlCenter = B;
    g.useCalculatePlayerWidth = C;
    g.useCalculatePlayerHeight = D;
  },
  226
);

import { $InternalEnum } from "$InternalEnum";
import { MWLSThreadDisplayContext } from "MWLSThreadDisplayContext";
import { MWPAudioPlaybackContext } from "MWPAudioPlaybackContext.react";
import { MessengerSurfaceQuickChat } from "MessengerSurfaceQuickChat.bs";
import { cancelAnimationFrame } from "cancelAnimationFrame";
import { fbt } from "fbt";
import { getErrorNameFromMediaErrorCode } from "getErrorNameFromMediaErrorCode";
import { gkx } from "gkx";
import { promiseDone } from "promiseDone";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { requestAnimationFrameAcrossTransitions } from "requestAnimationFrameAcrossTransitions";
import { useStable } from "useStable";

type PlaybackState = "ENDED" | "LOADING" | "NONE" | "PAUSED" | "PLAYING";
const PlaybackStateEnum = $InternalEnum.Mirrored<PlaybackState>([
  "ENDED",
  "LOADING",
  "NONE",
  "PAUSED",
  "PLAYING",
]);

const UseCase = $InternalEnum.Mirrored(["PLAYER", "RECORDER"]);
const UseCaseContext = createContext(UseCase.PLAYER);
const isEnabled = gkx("24145");

function useShowNewUX() {
  const context = useContext(UseCaseContext);
  return isEnabled && context === UseCase.PLAYER;
}

function getMousePos(
  event: React.MouseEvent,
  element: HTMLElement | null
): number {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const width = rect.width;
  return clamp(offsetX / width, 0, 1);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(min, value), max);
}

interface ScreenReaderLabelProps {
  currentTime: number;
  duration: number;
}

function ScreenReaderLabel({ currentTime, duration }: ScreenReaderLabelProps) {
  return (
    <div
      aria-label={fbt._("__JHASH__cCPjPb_WWZb__JHASH__")}
      aria-valuemax={duration}
      aria-valuemin={0}
      aria-valuenow={currentTime}
      role="slider"
      style={{ position: "absolute" }}
      tabIndex={0}
    />
  );
}
ScreenReaderLabel.displayName = `ScreenReaderLabel [from ${ScreenReaderLabel.name}]`;

function usePlaybackButtonContainerStyle() {
  return useShowNewUX()
    ? { marginLeft: 12, marginRight: 12 }
    : { marginLeft: 6, marginRight: 6 };
}

function useResetHighlightProgress(scrubberRef: React.RefObject<any>) {
  return useCallback(
    (event: React.MouseEvent) => {
      const scrubber = scrubberRef.current;
      if (scrubber) {
        event.stopPropagation();
        scrubber.updateHighlight(0);
      }
    },
    [scrubberRef]
  );
}

function useProgressLiveUpdate(
  duration: number,
  progressRef: React.RefObject<HTMLAudioElement>,
  currentTime: number,
  isProgressing: boolean,
  isUpdateHighlight: boolean,
  isCompleted: boolean
) {
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateHighlight = (progress: number) => {
      const scrubber = animationRef.current;
      if (scrubber) scrubber.updateHighlight(progress);
    };

    if (isCompleted) {
      isUpdateHighlight ? updateHighlight(100) : updateHighlight(0);
      return;
    }

    if (isProgressing) {
      let lastTime = { contents: undefined as number | undefined };
      let requestId;

      const step = (timestamp: number) => {
        let percentage: number;

        const progress = progressRef.current;

        if (progress) {
          percentage = progress.currentTime / progress.duration;
        } else {
          const { contents } = lastTime;
          let elapsed = 0;

          if (contents != null) {
            elapsed = timestamp - contents;
          } else {
            lastTime.contents = timestamp;
          }
          percentage = elapsed / (duration * 1000);
        }

        const clampedProgress = Math.min(percentage * 100, 100);
        updateHighlight(clampedProgress);

        if (clampedProgress < 100) {
          requestId = requestAnimationFrameAcrossTransitions(step);
          return;
        }
      };

      requestId = requestAnimationFrameAcrossTransitions(step);
      return () => {
        if (requestId) cancelAnimationFrame(animationRef.current);
      };
    }

    if (progressRef.current !== null) {
      const progress =
        progressRef.current.currentTime / progressRef.current.duration;
      updateHighlight(progress * 100);
    }
  }, [
    duration,
    isProgressing,
    isCompleted,
    progressRef,
    animationRef,
    isUpdateHighlight,
    currentTime,
  ]);

  return animationRef;
}

function useControlCenter(
  playable: React.RefObject<HTMLAudioElement>,
  nextPlayable: React.RefObject<HTMLAudioElement>,
  messageId: string,
  nextMessageId: string | undefined,
  logBrowserDenyAccess: (errorName: string, context: any) => void,
  highlightProgress: boolean,
  duration?: React.Dispatch<React.SetStateAction<number>>,
  mediaRenderQpl?: any
) {
  const showNewUX = useShowNewUX();
  const stableError = useStable(() => logBrowserDenyAccess);
  const playbackElement = MWPAudioPlaybackContext.useMWPAudioPlaybackElement(
    playable,
    nextPlayable,
    messageId,
    nextMessageId,
    showNewUX
  );

  const currentAudioRef = useRef(playbackElement);
  const [playbackState, setPlaybackStateInternal] = useState<PlaybackState>(
    PlaybackStateEnum.NONE
  );
  const [currentTime, setCurrentTime] = useState(
    currentAudioRef?.currentTime ?? 0
  );

  useEffect(() => {
    if (!playbackElement) {
      setPlaybackStateInternal(PlaybackStateEnum.NONE);
      return;
    }

    playbackElement.ended && setPlaybackStateInternal(PlaybackStateEnum.ENDED);
    setPlaybackStateInternal(
      playbackElement.paused
        ? PlaybackStateEnum.PAUSED
        : PlaybackStateEnum.PLAYING
    );
    setCurrentTime(playbackElement.currentTime);
    currentAudioRef.current = playbackElement;
  }, [playbackElement]);

  useEffect(() => {
    const audioElement = currentAudioRef.current;
    if (!audioElement) return;

    const handleLoadError = (event: Event) => {
      const error = (event.currentTarget as HTMLAudioElement).error;
      const errorName = getErrorNameFromMediaErrorCode(error?.code);
      mediaRenderQpl?.endFail(`load-audio-error`, {
        string: { audio_error_name: errorName },
      });
    };

    const handleCanPlay = () => {
      audioElement.currentTime = audioElement;
      mediaRenderQpl?.endSuccess();
      setPlaybackStateInternal(PlaybackStateEnum.PAUSED);
    };

    const handlePlaying = () =>
      setPlaybackStateInternal(PlaybackStateEnum.PLAYING);
    const handlePause = () =>
      setPlaybackStateInternal(PlaybackStateEnum.PAUSED);
    const handleLoading = () =>
      setPlaybackStateInternal(PlaybackStateEnum.LOADING);
    const handleTimeUpdate = () => {
      if (currentAudioRef.current)
        setCurrentTime(currentAudioRef.current.currentTime);
    };

    const handleEnd = () => {
      if (currentAudioRef.current) currentAudioRef.current.currentTime = 0;
      setCurrentTime(0);
      setPlaybackStateInternal(PlaybackStateEnum.ENDED);
    };

    audioElement.addEventListener("loadstart", handleLoading);
    audioElement.addEventListener("canplay", handleCanPlay);
    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("playing", handlePlaying);
    audioElement.addEventListener("pause", handlePause);
    audioElement.addEventListener("ended", handleEnd);
    audioElement.addEventListener("error", handleLoadError);

    return () => {
      audioElement.removeEventListener("loadstart", handleLoading);
      audioElement.removeEventListener("canplay", handleCanPlay);
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("playing", handlePlaying);
      audioElement.removeEventListener("pause", handlePause);
      audioElement.removeEventListener("ended", handleEnd);
      audioElement.removeEventListener("error", handleLoadError);
      if (!showNewUX) audioElement.pause();
    };
  }, [playbackElement, mediaRenderQpl, showNewUX]);

  const togglePlayPause = useCallback(() => {
    const audioElement = currentAudioRef.current;
    if (!audioElement) return;

    switch (playbackState) {
      case PlaybackStateEnum.NONE:
      case PlaybackStateEnum.LOADING:
        return;
      case PlaybackStateEnum.ENDED:
      case PlaybackStateEnum.PAUSED:
        promiseDone(
          audioElement.play(),
          () => setPlaybackStateInternal(PlaybackStateEnum.PLAYING),
          stableError
        );
        return;
      case PlaybackStateEnum.PLAYING:
        audioElement.pause();
        setPlaybackStateInternal(PlaybackStateEnum.PAUSED);
        return;
    }
  }, [playbackState, stableError]);

  const setCurrentTimeAndHighlight = useCallback((newTime: number) => {
    const audioElement = currentAudioRef.current;
    if (!audioElement) return;
    audioElement.currentTime = newTime;
    setCurrentTime(newTime);
  }, []);

  return [
    playbackState,
    currentTime,
    currentAudioRef,
    togglePlayPause,
    useProgressLiveUpdate(
      duration,
      currentAudioRef,
      currentTime,
      playbackState === PlaybackStateEnum.PLAYING,
      highlightProgress,
      playbackState === PlaybackStateEnum.ENDED
    ),
    setCurrentTimeAndHighlight,
  ] as const;
}

function useOutOfChatControlCenter() {
  const [audioElement, setAudioElement] =
    MWPAudioPlaybackContext.useMWPAudioOutOfChatPlayback();
  const [playbackState, setPlaybackState] = useState<PlaybackState>(() => {
    if (!audioElement) return PlaybackStateEnum.NONE;
    return audioElement.ended
      ? PlaybackStateEnum.ENDED
      : audioElement.paused
      ? PlaybackStateEnum.PAUSED
      : PlaybackStateEnum.PLAYING;
  });

  const [remainingTime, setRemainingTime] = useState(() => {
    return audioElement ? audioElement.duration - audioElement.currentTime : 0;
  });

  useEffect(() => {
    if (!audioElement) return;

    const handleTimeUpdate = () =>
      setRemainingTime(audioElement.duration - audioElement.currentTime);
    const handleLoading = () => setPlaybackState(PlaybackStateEnum.LOADING);
    const handleEnd = () => setPlaybackState(PlaybackStateEnum.ENDED);

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("loadstart", handleLoading);
    audioElement.addEventListener("ended", handleEnd);

    promiseDone(audioElement.play(), () =>
      setPlaybackState(PlaybackStateEnum.PLAYING)
    );

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("loadstart", handleLoading);
      audioElement.removeEventListener("ended", handleEnd);
    };
  }, [audioElement]);

  const togglePlayPause = useCallback(() => {
    if (!audioElement) return;

    switch (playbackState) {
      case PlaybackStateEnum.NONE:
      case PlaybackStateEnum.LOADING:
        return;
      case PlaybackStateEnum.ENDED:
      case PlaybackStateEnum.PAUSED:
        promiseDone(audioElement.play(), () =>
          setPlaybackState(PlaybackStateEnum.PLAYING)
        );
        return;
      case PlaybackStateEnum.PLAYING:
        audioElement.pause();
        setPlaybackState(PlaybackStateEnum.PAUSED);
        return;
    }
  }, [audioElement, playbackState]);

  return [
    audioElement,
    playbackState === PlaybackStateEnum.PLAYING,
    audioElement && isEnabled,
    remainingTime,
    togglePlayPause,
    setAudioElement,
  ] as const;
}

function useCalculatePlayerWidth(surface: string) {
  const displayContext = MWLSThreadDisplayContext.useMWLSThreadDisplayContext();
  const isQuickChatSurface = MessengerSurfaceQuickChat.useIsQuickChatSurface();
  return (
    surface ??
    (displayContext === "Inbox"
      ? 218
      : displayContext === "ChatTab" && isQuickChatSurface
      ? 168
      : 180)
  );
}

function useCalculatePlayerHeight(surface: string) {
  const showNewUX = useShowNewUX();
  return showNewUX && surface === UseCase.PLAYER ? 70 : 36;
}

export {
  ScreenReaderLabel,
  PlaybackStateEnum as State,
  UseCase,
  UseCaseContext,
  getMousePos,
  isEnabled,
  useCalculatePlayerHeight,
  useCalculatePlayerWidth,
  useControlCenter,
  useOutOfChatControlCenter,
  usePlaybackButtonContainerStyle,
  useProgressLiveUpdate,
  useResetHighlightProgress,
  useShowNewUX,
};
