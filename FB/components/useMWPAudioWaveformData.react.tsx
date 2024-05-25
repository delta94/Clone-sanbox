__d(
  "useMWPAudioWaveformData.react",
  [
    "ConstUriUtils",
    "FBLogger",
    "asyncToGeneratorRuntime",
    "fetchMWPAudioWaveformDataForURL",
    "promiseDone",
    "react",
    "useMWAttachmentUpdater",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = h || d("react");
    var i = e.useCallback,
      j = e.useEffect,
      k = e.useState,
      l = 3,
      m = ",",
      n = ["blob:", "data:"];
    function a(a, e) {
      var f = k(a.waveformData),
        g = f[0],
        h = f[1],
        o = c("useMWAttachmentUpdater")(a),
        p = i(
          b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (e != null && e !== "") {
              var a = d("ConstUriUtils").getUri(e);
              if (a != null && n.includes(a.getProtocol())) {
                a = yield c("fetchMWPAudioWaveformDataForURL")(a);
                a.length > l && h(a.join(m));
              }
            }
          }),
          [e]
        );
      j(
        function () {
          if (g != null && g.length > l) return;
          c("promiseDone")(p());
        },
        [p, g]
      );
      j(
        function () {
          g != null &&
            g.length > l &&
            g !== a.waveformData &&
            o({ waveformData: g })["catch"](function (a) {
              c("FBLogger")("messenger_web_media", "audio_waveform_error")
                .catching(a)
                .mustfix("Error from updating attachment waveform data");
            });
        },
        [a.waveformData, o, g]
      );
      return g;
    }
    g["default"] = a;
  },
  98
);

import { ConstUriUtils } from "ConstUriUtils";
import { FBLogger } from "FBLogger";
import { fetchMWPAudioWaveformDataForURL } from "fetchMWPAudioWaveformDataForURL";
import { promiseDone } from "promiseDone";
import React, { useCallback, useEffect, useState } from "react";
import { useMWAttachmentUpdater } from "useMWAttachmentUpdater";

const MIN_WAVEFORM_DATA_LENGTH = 3;
const WAVEFORM_DATA_SEPARATOR = ",";
const ALLOWED_PROTOCOLS = ["blob:", "data:"];

type WaveformDataUpdater = (update: { waveformData: string }) => Promise<void>;

interface MWPAudioProps {
  waveformData: string;
}

function useMWPAudioWaveformData(
  props: MWPAudioProps,
  url: string | null
): string {
  const [waveformData, setWaveformData] = useState<string>(props.waveformData);
  const updateAttachment = useMWAttachmentUpdater(props);

  const fetchWaveformData = useCallback(async () => {
    if (url != null && url !== "") {
      const uri = ConstUriUtils.getUri(url);
      if (uri != null && ALLOWED_PROTOCOLS.includes(uri.getProtocol())) {
        const data = await fetchMWPAudioWaveformDataForURL(uri);
        if (data.length > MIN_WAVEFORM_DATA_LENGTH) {
          setWaveformData(data.join(WAVEFORM_DATA_SEPARATOR));
        }
      }
    }
  }, [url]);

  useEffect(() => {
    if (waveformData != null && waveformData.length > MIN_WAVEFORM_DATA_LENGTH)
      return;
    promiseDone(fetchWaveformData());
  }, [fetchWaveformData, waveformData]);

  useEffect(() => {
    if (
      waveformData != null &&
      waveformData.length > MIN_WAVEFORM_DATA_LENGTH &&
      waveformData !== props.waveformData
    ) {
      updateAttachment({ waveformData }).catch((error) => {
        FBLogger("messenger_web_media", "audio_waveform_error")
          .catching(error)
          .mustfix("Error from updating attachment waveform data");
      });
    }
  }, [props.waveformData, updateAttachment, waveformData]);

  return waveformData;
}

export default useMWPAudioWaveformData;
