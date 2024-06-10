__d(
  "useMWV2MediaViewerURL",
  [
    "I64",
    "Int64Hooks",
    "LSIntEnum",
    "MessagingAttachmentType",
    "XCometMessengerMediaControllerRouteBuilder",
    "XCometMessengerPhotoControllerRouteBuilder",
    "justknobx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      return d("Int64Hooks").useMemoInt64(
        function () {
          var b = (h || (h = d("I64"))).equal(
            a.attachmentType,
            (i || (i = d("LSIntEnum"))).ofNumber(
              c("MessagingAttachmentType").ANIMATED_IMAGE
            )
          );
          return b && c("justknobx")._("1284") === !1
            ? c("XCometMessengerPhotoControllerRouteBuilder").buildURL({
                fbid: a.attachmentFbid,
                message_id: a.messageId,
                photo_ids: void 0,
              })
            : c("XCometMessengerMediaControllerRouteBuilder").buildURL({
                attachment_id: a.attachmentFbid,
                message_id: a.messageId,
                thread_id: h.to_string(a.threadKey),
              });
        },
        [a.threadKey, a.attachmentType, a.messageId, a.attachmentFbid]
      );
    }
    g["default"] = a;
  },
  98
);

import { useMemoInt64 } from "Int64Hooks";
import { LSIntEnum } from "LSIntEnum";
import { MessagingAttachmentType } from "MessagingAttachmentType";
import { XCometMessengerMediaControllerRouteBuilder } from "XCometMessengerMediaControllerRouteBuilder";
import { XCometMessengerPhotoControllerRouteBuilder } from "XCometMessengerPhotoControllerRouteBuilder";
import { _ as justknobx } from "justknobx";
import { equal } from "I64";

export default function useMWV2MediaViewerURL(attachmentData) {
  return useMemoInt64(() => {
    const isAnimatedImage = equal(
      attachmentData.attachmentType,
      LSIntEnum.ofNumber(MessagingAttachmentType.ANIMATED_IMAGE)
    );
    if (isAnimatedImage && justknobx._("1284") === false) {
      return XCometMessengerPhotoControllerRouteBuilder.buildURL({
        fbid: attachmentData.attachmentFbid,
        message_id: attachmentData.messageId,
        photo_ids: undefined,
      });
    } else {
      return XCometMessengerMediaControllerRouteBuilder.buildURL({
        attachment_id: attachmentData.attachmentFbid,
        message_id: attachmentData.messageId,
        thread_id: attachmentData.threadKey.toString(),
      });
    }
  }, [
    attachmentData.threadKey,
    attachmentData.attachmentType,
    attachmentData.messageId,
    attachmentData.attachmentFbid,
  ]);
}
