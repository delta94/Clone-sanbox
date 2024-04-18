// __d("useFeedImageErrorEventLoggerCbs", ["Banzai", "CometInteractionSourceContext", "Random", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     b = d("react");
//     var h = b.useCallback,
//         i = b.useContext,
//         j = b.useRef,
//         k = 1e3,
//         l = function (a) {
//             var b = a.result,
//                 e = a.src;
//             a = a.surface;
//             d("Random").coinflip(k) && c("Banzai").post("logger:WWWImageLoadSrcEventLoggerConfig", {
//                 result: b,
//                 src: e,
//                 surface: a
//             })
//         };

//     function a(a) {
//         var b = a.onError,
//             d = a.onLoad,
//             e = a.src,
//             f = j(null);
//         a = i(c("CometInteractionSourceContext"));
//         var g = a === 3 ? "profile" : a === 0 ? "feed" : null;
//         a = h(function (a) {
//             d != null && d(a);
//             if (f.current === e) return;
//             typeof e === "string" && (l({
//                 result: "success",
//                 src: e,
//                 surface: g
//             }), f.current = e)
//         }, [d, e, g]);
//         var k = h(function (a) {
//             b != null && b(a);
//             if (f.current === e) return;
//             typeof e === "string" && (l({
//                 result: "error",
//                 src: e,
//                 surface: g
//             }), f.current = e)
//         }, [b, e, g]);
//         return g == null || typeof e !== "string" ? {
//             _onError: b,
//             _onLoad: d
//         } : {
//             _onError: k,
//             _onLoad: a
//         }
//     }
//     g["default"] = a
// }), 98);

import React, { useCallback, useContext, useRef } from 'react';
import { Banzai } from 'Banzai'; // Assuming 'Banzai' is an external module
import { CometInteractionSourceContext } from 'CometInteractionSourceContext'; // Assuming 'CometInteractionSourceContext' is an external module
import { Random } from 'Random'; // Assuming 'Random' is an external module

const k = 1000;

const logImageLoadEvent = ({result, src, surface}) => {
  if (Random.coinflip(k)) {
    Banzai.post('logger:WWWImageLoadSrcEventLoggerConfig', {
      result,
      src,
      surface,
    });
  }
};

const useFeedImageErrorEventLoggerCbs = (props) => {
  const { onError: onErrorProp, onLoad: onLoadProp, src } = props;
  const interactionSource = useContext(CometInteractionSourceContext);

  const surface = interactionSource === 3 ? 'profile' : interactionSource === 0 ? 'feed' : null;
  const srcRef = useRef(null);

  const onError = useCallback(
    (error) => {
      onErrorProp != null && onErrorProp(error);
      if (srcRef.current === src) return;
      typeof src === 'string' &&
        logImageLoadEvent({ result: 'error', src, surface });
        srcRef.current = src;
    },
    [onErrorProp, src, surface]
  );

  const onLoad = useCallback(
    (event) => {
      onLoadProp != null && onLoadProp(event);
      if (srcRef.current === src) return;
      typeof src === 'string' &&
        logImageLoadEvent({ result: 'success', src, surface });
        srcRef.current = src;
    },
    [onLoadProp, src, surface]
  );

  return surface === null || typeof src !== 'string'
    ? { _onError: onErrorProp, _onLoad: onLoadProp }
    : { _onError: onError, _onLoad: onLoad };};

export default useFeedImageErrorEventLoggerCbs;
