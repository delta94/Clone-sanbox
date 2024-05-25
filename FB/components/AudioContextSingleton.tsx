__d(
  "AudioContextSingleton",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    var h =
        window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext,
      i = new Map();
    a = {
      get: function (a) {
        a = a == null ? void 0 : a.sampleRate;
        var b = i.get(a);
        if (b == null) {
          var d = new h({ sampleRate: a });
          i.set(a, d);
          return d;
        }
        if (b.state === "closed") {
          c("FBLogger")("project").warn(
            "AudioContext Singleton has been closed"
          );
          d = new h({ sampleRate: a });
          i.set(a, d);
          return d;
        }
        return b;
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
import { FBLogger } from "FBLogger";

const AudioContextClass =
  window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

type AudioContextSingletonOptions = {
  sampleRate?: number;
};

class AudioContextSingleton {
  private static instances: Map<number | undefined, AudioContext> = new Map();

  public static get(options?: AudioContextSingletonOptions): AudioContext {
    const sampleRate = options?.sampleRate;
    let audioContext = this.instances.get(sampleRate);

    if (!audioContext) {
      audioContext = new AudioContextClass({ sampleRate });
      this.instances.set(sampleRate, audioContext);
      return audioContext;
    }

    if (audioContext.state === "closed") {
      FBLogger("project").warn("AudioContext Singleton has been closed");
      audioContext = new AudioContextClass({ sampleRate });
      this.instances.set(sampleRate, audioContext);
    }

    return audioContext;
  }
}

export default AudioContextSingleton;
