__d(
  "MWChatRecorderUtils",
  ["DateConsts"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a.reduce(function (a, b) {
        return a + b.length;
      }, 0);
    }
    function a(a) {
      var b = h(a),
        c = new Float32Array(b);
      a.reduce(function (a, b) {
        c.set(b, a);
        return a + b.length;
      }, 0);
      return c;
    }
    function b(a, b) {
      var c = h([a, b]);
      return new Float32Array(c).map(function (c, d) {
        c = Math.floor(d / 2);
        if (d % 2 === 0) return a[c];
        else return b[c];
      });
    }
    function i(a, b, c) {
      c.forEach(function (c, d) {
        c = Math.max(-1, Math.min(1, c));
        d = b + (d << 1);
        c = c < 0 ? Math.abs(c) * -32768 : Math.abs(c) * 32767;
        a.setInt16(d, c, !0);
      });
    }
    function j(a, b, c) {
      Array.from(c).forEach(function (d, e) {
        d = c.charCodeAt(e);
        a.setUint8(b + e, d);
      });
    }
    function k(a) {
      var b = a.numberOfChannels,
        c = a.sampleRate;
      a = a.samples;
      var d = a.length;
      d = d << 1;
      var e = new ArrayBuffer(44 + d);
      e = new DataView(e);
      j(e, 0, "RIFF");
      e.setUint32(4, 36 + d, !0);
      j(e, 8, "WAVE");
      j(e, 12, "fmt ");
      e.setUint32(16, 16, !0);
      e.setUint16(20, 1, !0);
      e.setUint16(22, b, !0);
      e.setUint32(24, c, !0);
      e.setUint32(28, c * b * 2, !0);
      e.setUint16(32, b * 2, !0);
      e.setUint16(34, 16, !0);
      j(e, 36, "data");
      e.setUint32(40, d, !0);
      i(e, 44, a);
      return e;
    }
    function c(a) {
      var b = a.numberOfChannels,
        c = a.sampleRate;
      a = a.samples;
      b = k({ numberOfChannels: b, sampleRate: c, samples: a });
      return new File([b], "audio_clip.wav", { type: "audio/wav" });
    }
    function e(a) {
      var b = a.numberOfChannels,
        c = a.sampleRate;
      a = a.samples;
      var e = Float32Array.BYTES_PER_ELEMENT;
      a = a.byteLength / e / b;
      return (a / c) % d("DateConsts").SEC_PER_MIN;
    }
    function l(a, b, c) {
      return a + (b - a) * c;
    }
    function f(a, b) {
      var c = new Array(Math.ceil(b));
      if (b === 0 || a.length === 0) return c;
      if (b === a.length) return Array.from(a);
      if (a.length === 1) return c.fill(a[0]);
      c[0] = a[0];
      var d = (a.length - 1) / (b - 1);
      for (var e = 1; e < b; e++) {
        var f = e * d,
          g = Math.floor(f),
          h = Math.ceil(f);
        f = f - g;
        c[e] = l(a[g], a[h], f);
      }
      b >= 2 && (c[c.length - 1] = a[a.length - 1]);
      return c;
    }
    function m(a, b, c) {
      var d = Math.min.apply(Math, a),
        e = Math.max.apply(Math, a),
        f = e - d,
        g = c - b;
      return a.map(function (a) {
        return ((a - d) / f) * g + b;
      });
    }
    g.getTotalBuffersLen = h;
    g.flattenBuffer = a;
    g.interleave = b;
    g.exportWAV = c;
    g.getAudioDuration = e;
    g.computeWaveformAmplitudes = f;
    g.linearConversion = m;
  },
  98
);

import { SEC_PER_MIN } from "DateConsts";

interface AudioBufferData {
  numberOfChannels: number;
  sampleRate: number;
  samples: Float32Array;
}

function getTotalBuffersLen(buffers: Float32Array[]): number {
  return buffers.reduce((total, buffer) => total + buffer.length, 0);
}

function flattenBuffer(buffers: Float32Array[]): Float32Array {
  const totalLength = getTotalBuffersLen(buffers);
  const result = new Float32Array(totalLength);
  buffers.reduce((offset, buffer) => {
    result.set(buffer, offset);
    return offset + buffer.length;
  }, 0);
  return result;
}

function interleave(
  buffer1: Float32Array,
  buffer2: Float32Array
): Float32Array {
  const totalLength = getTotalBuffersLen([buffer1, buffer2]);
  return new Float32Array(totalLength).map((_, index) => {
    const sourceIndex = Math.floor(index / 2);
    return index % 2 === 0 ? buffer1[sourceIndex] : buffer2[sourceIndex];
  });
}

function writePCM(output: DataView, offset: number, input: Float32Array): void {
  input.forEach((value, index) => {
    value = Math.max(-1, Math.min(1, value));
    const intValue =
      value < 0 ? Math.abs(value) * -32768 : Math.abs(value) * 32767;
    output.setInt16(offset + index * 2, intValue, true);
  });
}

function writeString(view: DataView, offset: number, string: string): void {
  Array.from(string).forEach((char, index) => {
    view.setUint8(offset + index, string.charCodeAt(index));
  });
}

function encodeWAV(audioBuffer: AudioBufferData): DataView {
  const { numberOfChannels, sampleRate, samples } = audioBuffer;
  const bufferLength = samples.length * 2;
  const arrayBuffer = new ArrayBuffer(44 + bufferLength);
  const view = new DataView(arrayBuffer);

  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + bufferLength, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numberOfChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numberOfChannels * 2, true);
  view.setUint16(32, numberOfChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, bufferLength, true);
  writePCM(view, 44, samples);

  return view;
}

function exportWAV(audioBuffer: AudioBufferData): File {
  const wavData = encodeWAV(audioBuffer);
  return new File([wavData], "audio_clip.wav", { type: "audio/wav" });
}

function getAudioDuration(audioBuffer: AudioBufferData): number {
  const { numberOfChannels, sampleRate, samples } = audioBuffer;
  const totalSamples =
    samples.byteLength / Float32Array.BYTES_PER_ELEMENT / numberOfChannels;
  return totalSamples / sampleRate / SEC_PER_MIN;
}

function linearInterpolation(
  start: number,
  end: number,
  ratio: number
): number {
  return start + (end - start) * ratio;
}

function computeWaveformAmplitudes(
  samples: Float32Array,
  targetLength: number
): number[] {
  const result = new Array<number>(Math.ceil(targetLength));
  if (targetLength === 0 || samples.length === 0) return result;
  if (targetLength === samples.length) return Array.from(samples);
  if (samples.length === 1) return result.fill(samples[0]);

  result[0] = samples[0];
  const step = (samples.length - 1) / (targetLength - 1);
  for (let i = 1; i < targetLength; i++) {
    const position = i * step;
    const leftIndex = Math.floor(position);
    const rightIndex = Math.ceil(position);
    const ratio = position - leftIndex;
    result[i] = linearInterpolation(
      samples[leftIndex],
      samples[rightIndex],
      ratio
    );
  }
  if (targetLength >= 2)
    result[result.length - 1] = samples[samples.length - 1];
  return result;
}

function linearConversion(
  values: number[],
  min: number,
  max: number
): number[] {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const dataRange = dataMax - dataMin;
  const targetRange = max - min;
  return values.map(
    (value) => ((value - dataMin) / dataRange) * targetRange + min
  );
}

export {
  getTotalBuffersLen,
  flattenBuffer,
  interleave,
  exportWAV,
  getAudioDuration,
  computeWaveformAmplitudes,
  linearConversion,
};
