__d(
  "MWPAudioPlayerWaveform.react",
  ["MWChatRecorderUtils", "MWPAudioPlayerSharedStyles", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react"));
    b = i;
    var k = b.useLayoutEffect,
      l = b.useMemo,
      m = b.useRef,
      n = b.useState,
      o = Float32Array.of(
        0.5,
        0.1875,
        0.375,
        0.75,
        0.5,
        1,
        1,
        0.75,
        0.25,
        0.375,
        0.75,
        1,
        1,
        0.5,
        0.75,
        1,
        0.75,
        0.75,
        0.5,
        0.25,
        0.25,
        0.375,
        0.5,
        1,
        0.75,
        0.5,
        0.5,
        0.75,
        0.25,
        0.5,
        0.75,
        1,
        0.5,
        0.25,
        0.75
      ),
      p = 3,
      q = 3,
      r = 44,
      s = 4;
    function t(a, b) {
      var c = l(
        function () {
          return a == null || a === ""
            ? o
            : Float32Array.from(a.split(",").map(Number));
        },
        [a]
      );
      return l(
        function () {
          if (b <= 0 || c.length === 0) return [];
          var a = Math.floor(b / (q * 2));
          a = d("MWChatRecorderUtils").linearConversion(
            d("MWChatRecorderUtils").computeWaveformAmplitudes(c, a),
            s,
            r
          );
          return a.map(function (a, b) {
            a = Math.ceil(a);
            var c = p,
              d = q;
            b = b * q * 2;
            var e = "calc(50% - " + a / 2 + "px)";
            return { height: a, rx: c, width: d, x: b, y: e };
          });
        },
        [b, c]
      );
    }
    function u(a) {
      var b = a.hasEnded,
        e = b === void 0 ? !1 : b;
      b = a.isPlaying;
      var f = b === void 0 ? !1 : b,
        g = a.outgoing,
        i = a.scrubberLeft;
      b = babelHelpers.objectWithoutPropertiesLoose(a, [
        "hasEnded",
        "isPlaying",
        "outgoing",
        "scrubberLeft",
      ]);
      var l = m(null);
      a = n("auto");
      var o = a[0],
        p = a[1];
      k(
        function () {
          var a = l.current;
          p(function () {
            var b = "auto";
            (e || f) &&
              (b =
                g === !0
                  ? "var(--non-media-pressed-on-dark)"
                  : "var(--secondary-button-background-on-dark)");
            if (a == null) return b;
            var c = a.getBoundingClientRect();
            c = c.left;
            return i > c
              ? g === !0
                ? "var(--always-white)"
                : "var(--progress-ring-neutral-foreground)"
              : b;
          });
        },
        [e, f, g, i]
      );
      a = (h || (h = c("stylex")))(
        g === !0
          ? d("MWPAudioPlayerSharedStyles").styles.outgoingWaveFormStyle
          : d("MWPAudioPlayerSharedStyles").styles.incomingWaveFormStyle
      );
      return j.jsx(
        "rect",
        babelHelpers["extends"]({}, b, {
          className: a,
          ref: l,
          style: { fill: o },
        })
      );
    }
    u.displayName = u.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.hasEnded,
        e = a.isListened,
        f = a.isPlaying,
        g = a.outgoing,
        i = a.scrubberLeft;
      a = a.waveformData;
      var l = m(null),
        o = n(0),
        p = o[0],
        q = o[1],
        r = b === !0 || e === !0;
      k(function () {
        if (l.current != null) {
          var a = l.current.getBoundingClientRect();
          q(a.width);
        }
      }, []);
      o = t(a, p);
      return o.length === 0
        ? j.jsx("div", {
            className: (h || (h = c("stylex")))(
              d("MWPAudioPlayerSharedStyles").styles.waveform
            ),
            ref: l,
          })
        : j.jsx("div", {
            className: (h || (h = c("stylex")))(
              d("MWPAudioPlayerSharedStyles").styles.waveform
            ),
            ref: l,
            children: j.jsx("svg", {
              "aria-hidden": !0,
              className: h(d("MWPAudioPlayerSharedStyles").styles.mask),
              children: o.map(function (a, b) {
                return j.createElement(
                  u,
                  babelHelpers["extends"]({}, a, {
                    hasEnded: r,
                    isPlaying: f,
                    key: b,
                    outgoing: g,
                    scrubberLeft: i,
                  })
                );
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { MWChatRecorderUtils } from "MWChatRecorderUtils";
import { styles as MWPAudioPlayerSharedStyles } from "MWPAudioPlayerSharedStyles";
import stylex from "stylex";

const defaultWaveformData = Float32Array.of(
  0.5,
  0.1875,
  0.375,
  0.75,
  0.5,
  1,
  1,
  0.75,
  0.25,
  0.375,
  0.75,
  1,
  1,
  0.5,
  0.75,
  1,
  0.75,
  0.75,
  0.5,
  0.25,
  0.25,
  0.375,
  0.5,
  1,
  0.75,
  0.5,
  0.5,
  0.75,
  0.25,
  0.5,
  0.75,
  1,
  0.5,
  0.25,
  0.75
);
const barWidth = 3;
const barSpacing = 3;
const maxAmplitude = 44;
const minAmplitude = 4;

interface WaveformProps {
  hasEnded?: boolean;
  isPlaying?: boolean;
  outgoing: boolean;
  scrubberLeft: number;
  waveformData?: string;
  isListened?: boolean;
}

function generateWaveformData(
  waveformData: string | undefined,
  containerWidth: number
) {
  const data = useMemo(() => {
    return waveformData == null || waveformData === ""
      ? defaultWaveformData
      : Float32Array.from(waveformData.split(",").map(Number));
  }, [waveformData]);

  return useMemo(() => {
    if (containerWidth <= 0 || data.length === 0) return [];
    const numBars = Math.floor(containerWidth / (barSpacing * 2));
    const convertedData = MWChatRecorderUtils.linearConversion(
      MWChatRecorderUtils.computeWaveformAmplitudes(data, numBars),
      minAmplitude,
      maxAmplitude
    );
    return convertedData.map((amplitude, index) => {
      const height = Math.ceil(amplitude);
      const radiusX = barWidth;
      const radiusY = barSpacing;
      const x = index * barSpacing * 2;
      const y = `calc(50% - ${height / 2}px)`;
      return { height, rx: radiusX, width: radiusY, x, y };
    });
  }, [containerWidth, data]);
}

function WaveformBar(props: any) {
  const {
    hasEnded = false,
    isPlaying = false,
    outgoing,
    scrubberLeft,
    ...otherProps
  } = props;
  const ref = useRef<SVGRectElement | null>(null);
  const [fill, setFill] = useState<string>("auto");

  useLayoutEffect(() => {
    const bar = ref.current;
    setFill(() => {
      let newFill = "auto";
      if (hasEnded || isPlaying) {
        newFill = outgoing
          ? "var(--non-media-pressed-on-dark)"
          : "var(--secondary-button-background-on-dark)";
      }
      if (bar == null) return newFill;
      const barLeft = bar.getBoundingClientRect().left;
      return scrubberLeft > barLeft
        ? outgoing
          ? "var(--always-white)"
          : "var(--progress-ring-neutral-foreground)"
        : newFill;
    });
  }, [hasEnded, isPlaying, outgoing, scrubberLeft]);

  const className = stylex(
    outgoing
      ? MWPAudioPlayerSharedStyles.outgoingWaveFormStyle
      : MWPAudioPlayerSharedStyles.incomingWaveFormStyle
  );

  return (
    <rect {...otherProps} className={className} ref={ref} style={{ fill }} />
  );
}

WaveformBar.displayName = "WaveformBar";

const MWPAudioPlayerWaveform: React.FC<WaveformProps> = ({
  hasEnded = false,
  isListened = false,
  isPlaying = false,
  outgoing,
  scrubberLeft,
  waveformData,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const hasEndedOrListened = hasEnded || isListened;

  useLayoutEffect(() => {
    if (containerRef.current != null) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerWidth(rect.width);
    }
  }, []);

  const waveformBars = generateWaveformData(waveformData, containerWidth);

  return waveformBars.length === 0 ? (
    <div
      className={stylex(MWPAudioPlayerSharedStyles.waveform)}
      ref={containerRef}
    />
  ) : (
    <div
      className={stylex(MWPAudioPlayerSharedStyles.waveform)}
      ref={containerRef}
    >
      <svg
        aria-hidden="true"
        className={stylex(MWPAudioPlayerSharedStyles.mask)}
      >
        {waveformBars.map((barProps, index) => (
          <WaveformBar
            key={index}
            {...barProps}
            hasEnded={hasEndedOrListened}
            isPlaying={isPlaying}
            outgoing={outgoing}
            scrubberLeft={scrubberLeft}
          />
        ))}
      </svg>
    </div>
  );
};

MWPAudioPlayerWaveform.displayName = "MWPAudioPlayerWaveform";

export default MWPAudioPlayerWaveform;
