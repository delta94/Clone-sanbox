__d("useStoryClickEventLogger", ["CometFeedClickEventsLoggerContext", "CometFeedLoggingExtraFieldsContext", "CometTrackingCodeContext", "CometTrackingNodesContext", "DataUrlUtils", "MailLinkUtils", "getAbsoluteUrl", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback
      , i = b.useContext;
    function a() {
        var a = i(c("CometFeedClickEventsLoggerContext"))
          , b = i(c("CometTrackingNodesContext"))
          , e = i(c("CometTrackingCodeContext"))
          , f = e.encrypted_tracking[0]
          , g = i(c("CometFeedLoggingExtraFieldsContext"));
        return h(function(e, h, i, j) {
            var k = i;
            !d("MailLinkUtils").isMailToLink(i) && !d("DataUrlUtils").isDataUrl(i) && (k = c("getAbsoluteUrl")(i));
            a(e, b, f, h, k, g, j)
        }, [a, b, f, g])
    }
    g["default"] = a
}
), 98);


import React, { useCallback, useContext } from 'react';
import {
  CometFeedClickEventsLoggerContext,
  CometFeedLoggingExtraFieldsContext,
  CometTrackingCodeContext,
  CometTrackingNodesContext,
} from './your-context-paths'; // Replace with the correct import paths
import { isMailToLink } from './MailLinkUtils'; // Replace with the correct import path
import { isDataUrl } from './DataUrlUtils'; // Replace with the correct import path
import { getAbsoluteUrl } from './getAbsoluteUrl'; // Replace with the correct import path

const useStoryClickEventLogger = () => {
  const loggerContext = useContext(CometFeedClickEventsLoggerContext);
  const trackingNodes = useContext(CometTrackingNodesContext);
  const trackingCode = useContext(CometTrackingCodeContext);
  const encryptedTracking = trackingCode.encrypted_tracking[0];
  const extraFields = useContext(CometFeedLoggingExtraFieldsContext);

  const logEvent = useCallback(
    (timestamp: number, eventType: number, url: string, eventId: string) => {
      let finalUrl = url;
      if (!isMailToLink(url) && !isDataUrl(url)) {
        finalUrl = getAbsoluteUrl(url);
      }
      loggerContext(timestamp, trackingNodes, encryptedTracking, eventType, finalUrl, extraFields, eventId);
    },
    [loggerContext, trackingNodes, encryptedTracking, extraFields]
  );

  return logEvent;
};

export default useStoryClickEventLogger;
