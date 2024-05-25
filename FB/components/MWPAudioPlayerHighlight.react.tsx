__d(
  "MWPAudioPlayerHighlight.react",
  [
    "MWPAudioPlayerScrubberBar.react",
    "MWPAudioPlayerSharedStyles",
    "MWPAudioPlayerUtils",
    "MWPAudioPlayerWaveform.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react"));
    b = i;
    e = b.forwardRef;
    var k = b.useImperativeHandle,
      l = b.useLayoutEffect,
      m = b.useRef,
      n = b.useState,
      o = e(function (a, b) {
        var e = a.audioEl,
          f = a.children,
          g = a.duration,
          i = a.hasEnded,
          o = a.isListened,
          q = a.isPlaying;
        q = q === void 0 ? !0 : q;
        var r = a.onUpdateScrubber,
          s = a.outgoing,
          t = a.waveformData;
        a = a.xstyle;
        var u = d("MWPAudioPlayerUtils").useShowNewUX(),
          v = m(),
          w = m(),
          x = n(0),
          y = x[0],
          z = x[1];
        x = n(0);
        var A = x[0],
          B = x[1];
        l(
          function () {
            if (
              (e == null ? void 0 : e.current) != null &&
              w.current != null &&
              g != null &&
              g > 0
            ) {
              var a = e.current.currentTime,
                b = w.current;
              B(p(b, (a / g) * 100));
            }
          },
          [e, g]
        );
        k(
          b,
          function () {
            return {
              updateHighlight: function (a) {
                var b = v.current,
                  c = w.current;
                if (b == null) return;
                if (u) {
                  if (c != null) {
                    c = p(c, a);
                    B(c);
                  }
                } else
                  b.style.transform =
                    "translateX(" + (a - 100).toFixed(1) + "%)";
              },
            };
          },
          [u]
        );
        x = function (a) {
          if (v.current != null) {
            var b, c;
            b = (b = v.current) == null ? void 0 : b.getBoundingClientRect();
            b = (b = b == null ? void 0 : b.left) != null ? b : 0;
            b = a.clientX - b;
            c =
              (c = (c = v.current) == null ? void 0 : c.offsetWidth) != null
                ? c
                : 0;
            z((b / c) * 100);
            if (g != null && g > 0) {
              b = d("MWPAudioPlayerUtils").getMousePos(a, v.current) * g;
              if (r != null && w.current != null) {
                c = w.current;
                r(b);
                B(p(c, (b / g) * 100));
              }
            }
          }
        };
        if (u) {
          return j.jsxs(j.Fragment, {
            children: [
              f,
              j.jsxs("div", {
                className: (h || (h = c("stylex")))(
                  d("MWPAudioPlayerSharedStyles").styles.highlight,
                  d("MWPAudioPlayerSharedStyles").styles.scrubber
                ),
                onMouseDownCapture: x,
                ref: v,
                children: [
                  j.jsx(c("MWPAudioPlayerScrubberBar.react"), {
                    currentTime:
                      e == null
                        ? void 0
                        : (b = e.current) == null
                        ? void 0
                        : b.currentTime,
                    duration:
                      (x =
                        e == null
                          ? void 0
                          : (f = e.current) == null
                          ? void 0
                          : f.duration) != null
                        ? x
                        : 0,
                    ref: w,
                    xPosition: y,
                  }),
                  j.jsx(c("MWPAudioPlayerWaveform.react"), {
                    hasEnded: i,
                    isListened: o,
                    isPlaying: q,
                    outgoing: s,
                    scrubberLeft: A,
                    waveformData: t,
                  }),
                ],
              }),
            ],
          });
        }
        return j.jsx("div", {
          className: (h || (h = c("stylex")))(
            d("MWPAudioPlayerSharedStyles").styles.highlight,
            a
          ),
          ref: v,
        });
      });
    function p(a, b) {
      a.style.left = b.toFixed(2) + "%";
      a.style.transition = "transform 1s ease-out";
      b = a.getBoundingClientRect();
      a = b.left;
      return a;
    }
    function a(a) {
      var b = a.hasScrubber,
        c = a.progressHighlightRef,
        e = a.scrubberRef,
        f = a.audioEl,
        g = a.children,
        h = a.currentTime,
        i = a.duration,
        k = a.hasEnded,
        l = a.isListened,
        m = a.isPlaying;
      m = m === void 0 ? !0 : m;
      var n = a.onUpdateScrubber,
        p = a.outgoing,
        q = a.waveformData;
      a = a.xstyle;
      var r = d("MWPAudioPlayerUtils").useShowNewUX();
      return r
        ? j.jsx(o, {
            audioEl: f,
            duration: i,
            hasEnded: k,
            isListened: l,
            isPlaying: m,
            onUpdateScrubber: n,
            outgoing: p,
            ref: c,
            waveformData: q,
            xstyle: a,
            children: g,
          })
        : j.jsxs(j.Fragment, {
            children: [
              j.jsx(o, { ref: c, xstyle: a }),
              b
                ? j.jsx(d("MWPAudioPlayerUtils").ScreenReaderLabel, {
                    currentTime: h,
                    duration: i,
                  })
                : null,
              j.jsx(o, { ref: e, xstyle: a }),
              g,
            ],
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.MWPAudioPlayerHighlightV1 = o;
    g.MWPAudioPlayerHighlightV2 = a;
  },
  98
);

import MWPAudioPlayerScrubberBar from "MWPAudioPlayerScrubberBar.react";
import MWPAudioPlayerSharedStyles from "MWPAudioPlayerSharedStyles";
import {
  useShowNewUX,
  getMousePos,
  ScreenReaderLabel,
  UseCaseContext,
} from "MWPAudioPlayerUtils";
import MWPAudioPlayerWaveform from "MWPAudioPlayerWaveform.react";
import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  MouseEvent,
  CSSProperties,
} from "react";
import stylex from "stylex";

interface MWPAudioPlayerHighlightProps {
  audioEl: React.RefObject<HTMLAudioElement>;
  children: React.ReactNode;
  duration?: number;
  hasEnded?: boolean;
  isListened?: boolean;
  isPlaying?: boolean;
  onUpdateScrubber?: (time: number) => void;
  outgoing?: boolean;
  waveformData?: any;
  xstyle?: CSSProperties;
}

const MWPAudioPlayerHighlightV1 = forwardRef<any, MWPAudioPlayerHighlightProps>(
  (
    {
      audioEl,
      children,
      duration,
      hasEnded,
      isListened,
      isPlaying = true,
      onUpdateScrubber,
      outgoing,
      waveformData,
      xstyle,
    },
    ref
  ) => {
    const showNewUX = useShowNewUX();
    const highlightRef = useRef<HTMLDivElement>(null);
    const scrubberRef = useRef<HTMLDivElement>(null);
    const [xPosition, setXPosition] = useState(0);
    const [scrubberLeft, setScrubberLeft] = useState(0);

    useLayoutEffect(() => {
      if (audioEl.current && scrubberRef.current && duration && duration > 0) {
        const currentTime = audioEl.current.currentTime;
        const scrubber = scrubberRef.current;
        setScrubberLeft(
          updateScrubberPosition(scrubber, (currentTime / duration) * 100)
        );
      }
    }, [audioEl, duration]);

    useImperativeHandle(
      ref,
      () => ({
        updateHighlight: (percentage: number) => {
          const highlight = highlightRef.current;
          const scrubber = scrubberRef.current;
          if (!highlight) return;
          if (showNewUX) {
            if (scrubber) {
              const newPosition = updateScrubberPosition(scrubber, percentage);
              setScrubberLeft(newPosition);
            }
          } else {
            highlight.style.transform = `translateX(${(
              percentage - 100
            ).toFixed(1)}%)`;
          }
        },
      }),
      [showNewUX]
    );

    const handleMouseDownCapture = (event: MouseEvent<HTMLDivElement>) => {
      if (highlightRef.current) {
        const rect = highlightRef.current.getBoundingClientRect();
        const left = rect.left ?? 0;
        const width = highlightRef.current.offsetWidth ?? 0;
        const newPosition = ((event.clientX - left) / width) * 100;
        setXPosition(newPosition);

        if (duration && duration > 0) {
          const newTime = getMousePos(event, highlightRef.current) * duration;
          if (onUpdateScrubber && scrubberRef.current) {
            const scrubber = scrubberRef.current;
            onUpdateScrubber(newTime);
            setScrubberLeft(
              updateScrubberPosition(scrubber, (newTime / duration) * 100)
            );
          }
        }
      }
    };

    if (showNewUX) {
      return (
        <>
          {children}
          <div
            className={stylex(
              MWPAudioPlayerSharedStyles.styles.highlight,
              MWPAudioPlayerSharedStyles.styles.scrubber
            )}
            onMouseDownCapture={handleMouseDownCapture}
            ref={highlightRef}
          >
            <MWPAudioPlayerScrubberBar
              currentTime={audioEl?.current?.currentTime}
              duration={audioEl?.current?.duration ?? 0}
              ref={scrubberRef}
              xPosition={xPosition}
            />
            <MWPAudioPlayerWaveform
              hasEnded={hasEnded}
              isListened={isListened}
              isPlaying={isPlaying}
              outgoing={outgoing}
              scrubberLeft={scrubberLeft}
              waveformData={waveformData}
            />
          </div>
        </>
      );
    }

    return (
      <div
        className={stylex(MWPAudioPlayerSharedStyles.styles.highlight, xstyle)}
        ref={highlightRef}
      >
        {children}
      </div>
    );
  }
);

const updateScrubberPosition = (
  element: HTMLDivElement,
  percentage: number
): number => {
  element.style.left = `${percentage.toFixed(2)}%`;
  element.style.transition = "transform 1s ease-out";
  const rect = element.getBoundingClientRect();
  return rect.left;
};

interface MWPAudioPlayerHighlightV2Props {
  hasScrubber: boolean;
  progressHighlightRef: React.Ref<any>;
  scrubberRef: React.Ref<any>;
  audioEl: React.RefObject<HTMLAudioElement>;
  children: React.ReactNode;
  currentTime: number;
  duration: number;
  hasEnded: boolean;
  isListened: boolean;
  isPlaying?: boolean;
  onUpdateScrubber?: (time: number) => void;
  outgoing?: boolean;
  waveformData?: any;
  xstyle?: CSSProperties;
}

const MWPAudioPlayerHighlightV2: React.FC<MWPAudioPlayerHighlightV2Props> = ({
  hasScrubber,
  progressHighlightRef,
  scrubberRef,
  audioEl,
  children,
  currentTime,
  duration,
  hasEnded,
  isListened,
  isPlaying = true,
  onUpdateScrubber,
  outgoing,
  waveformData,
  xstyle,
}) => {
  const showNewUX = useShowNewUX();

  if (showNewUX) {
    return (
      <MWPAudioPlayerHighlightV1
        audioEl={audioEl}
        duration={duration}
        hasEnded={hasEnded}
        isListened={isListened}
        isPlaying={isPlaying}
        onUpdateScrubber={onUpdateScrubber}
        outgoing={outgoing}
        ref={progressHighlightRef}
        waveformData={waveformData}
        xstyle={xstyle}
      >
        {children}
      </MWPAudioPlayerHighlightV1>
    );
  }

  return (
    <>
      <MWPAudioPlayerHighlightV1 ref={progressHighlightRef} xstyle={xstyle} />
      {hasScrubber && (
        <ScreenReaderLabel currentTime={currentTime} duration={duration} />
      )}
      <MWPAudioPlayerHighlightV1 ref={scrubberRef} xstyle={xstyle} />
      {children}
    </>
  );
};

MWPAudioPlayerHighlightV2.displayName =
  "MWPAudioPlayerHighlightV2 [from " + __filename + "]";
export { MWPAudioPlayerHighlightV1, MWPAudioPlayerHighlightV2 };
