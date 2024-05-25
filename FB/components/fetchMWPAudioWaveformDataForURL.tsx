__d(
  "fetchMWPAudioWaveformDataForURL",
  [
    "AudioContextSingleton",
    "FBLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "fetch",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
      var b = [];
      for (var c = 0; c < a.numberOfChannels; c++) b.push(a.getChannelData(c));
      a = b.reduce(function (a, b) {
        return a + b.length;
      }, 0);
      c = new Float32Array(a);
      for (a = 0; a < b.length; a++)
        for (var d = 0; d < b[a].length; d++) c[d * b.length + a] = b[a][d];
      return c;
    }
    function j(a) {
      var d = c("AudioContextSingleton").get();
      return new (h || (h = b("Promise")))(function (b, c) {
        d.decodeAudioData(a, b, c);
      });
    }
    function a(a) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = a.toString();
        try {
          var b = yield c("fetch")(a);
          b = yield b.arrayBuffer();
          b = yield j(b);
          return i(b);
        } catch (b) {
          c("FBLogger")("messenger_web_media", "audio_waveform_error")
            .catching(b)
            .mustfix("Error fetching waveform data for URL: %s", a);
          return Float32Array.of();
        }
      });
      return k.apply(this, arguments);
    }
    g["default"] = a;
  },
  98
);
import { AudioContextSingleton } from "AudioContextSingleton";
import { FBLogger } from "FBLogger";
import { Promise as FBPromise } from "Promise";
import { asyncToGeneratorRuntime } from "asyncToGeneratorRuntime";
import { fetch as fbFetch } from "fetch";

let FBPromiseInstance: typeof FBPromise;

function mergeChannelData(buffer: AudioBuffer): Float32Array {
  const channels: Float32Array[] = [];
  for (let i = 0; i < buffer.numberOfChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }
  const totalLength = channels.reduce(
    (total, channel) => total + channel.length,
    0
  );
  const mergedBuffer = new Float32Array(totalLength);
  for (let i = 0; i < channels.length; i++) {
    for (let j = 0; j < channels[i].length; j++) {
      mergedBuffer[j * channels.length + i] = channels[i][j];
    }
  }
  return mergedBuffer;
}

function decodeAudioData(arrayBuffer: ArrayBuffer): Promise<AudioBuffer> {
  const audioContext = AudioContextSingleton.get();
  return new (FBPromiseInstance || (FBPromiseInstance = FBPromise))(
    (resolve, reject) => {
      audioContext.decodeAudioData(arrayBuffer, resolve, reject);
    }
  );
}

async function fetchMWPAudioWaveformDataForURL(
  url: string
): Promise<Float32Array> {
  try {
    const response = await fbFetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await decodeAudioData(arrayBuffer);
    return mergeChannelData(audioBuffer);
  } catch (error) {
    FBLogger("messenger_web_media", "audio_waveform_error")
      .catching(error)
      .mustfix(`Error fetching waveform data for URL: ${url}`);
    return Float32Array.of();
  }
}

export default fetchMWPAudioWaveformDataForURL;
