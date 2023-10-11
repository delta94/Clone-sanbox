__d("useFeedPressEventHandler", ["FBLogger", "cr:11054", "emptyFunction", "react", "useStoryClickEventLogger", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback
      , i = (e = b("cr:11054")) != null ? e : function() {
        return c("emptyFunction")
    }
    ;
    function a(a, b) {
        var d = c("useStoryClickEventLogger")()
          , e = i();
        return h(function(f) {
            try {
                e(f)
            } catch (a) {
                c("FBLogger")("voyage").catching(a).mustfix("Voyage press logger threw")
            }
            a && a(f);
            var g = f.buttons
              , h = f.timeStamp;
            f = f.type;
            if (f === "click" || f === "press" || f === "contextmenu" || f === "pressstart" && g === 4) {
                f = f === "contextmenu" ? 2 : g === 4 ? 1 : 0;
                g = c("uuidv4")();
                d(h, f, b, g)
            }
        }, [a, d, b, e])
    }
    g["default"] = a
}
), 98);

import React, { useCallback } from 'react';
import { FBLogger } from './FBLogger'; // Thay thế đường dẫn import thực tế
import { useStoryClickEventLogger } from './useStoryClickEventLogger'; // Thay thế đường dẫn import thực tế
import { v4 as uuidv4 } from 'uuid';

const useFeedPressEventHandler = (
  customCallback: (event: MouseEvent) => void | null,
  additionalData: any
) => {
  const logEvent = useStoryClickEventLogger();
  const customLogger = additionalData != null ? additionalData : () => {};

  return useCallback(
    (event: MouseEvent) => {
      try {
        customLogger(event);
      } catch (error) {
        FBLogger('voyage').catching(error).mustfix('Voyage press logger threw');
      }

      if (customCallback) {
        customCallback(event);
      }

      const { buttons, timeStamp, type } = event;
      if (
        type === 'click' ||
        type === 'press' ||
        type === 'contextmenu' ||
        (type === 'pressstart' && buttons === 4)
      ) {
        const eventType = type === 'contextmenu' ? 2 : buttons === 4 ? 1 : 0;
        const eventId = uuidv4();
        logEvent(timeStamp, eventType, additionalData, eventId);
      }
    },
    [customCallback, logEvent, additionalData, customLogger]
  );
};

export default useFeedPressEventHandler;
