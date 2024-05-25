__d(
  "useMWPMarkAudioAttachmentAsConsumed.react",
  ["FBLogger", "react", "useMWAttachmentUpdater"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useEffect;
    function a(a, b) {
      var d = c("useMWAttachmentUpdater")(b),
        e = b.isAttachmentConsumed;
      i(
        function () {
          var b = a == null ? void 0 : a.current;
          if (b == null) return;
          var f = function () {
            (e == null || e === !1) &&
              void d({ isAttachmentConsumed: !0 })["catch"](function (a) {
                c("FBLogger")("messenger_web_media", "attachment_update_error")
                  .catching(a)
                  .mustfix("Error marking attachment as consumed.");
              });
          };
          b.addEventListener("ended", f);
          return function () {
            b.removeEventListener("ended", f);
          };
        },
        [a, e, d]
      );
    }
    g["default"] = a;
  },
  98
);

import { useEffect, MutableRefObject } from "react";
import { useMWAttachmentUpdater } from "useMWAttachmentUpdater";
import { FBLogger } from "FBLogger";

interface AttachmentProps {
  attachmentFbid: string;
  messageId: string;
  threadKey: string;
  isAttachmentConsumed?: boolean;
}

function useMWPMarkAudioAttachmentAsConsumed(
  audioRef: MutableRefObject<HTMLAudioElement | null>,
  attachmentProps: AttachmentProps
): void {
  const { isAttachmentConsumed } = attachmentProps;
  const updateAttachment = useMWAttachmentUpdater(attachmentProps);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement == null) return;

    const handleEnded = () => {
      if (isAttachmentConsumed == null || isAttachmentConsumed === false) {
        updateAttachment({ isAttachmentConsumed: true }).catch((error) => {
          FBLogger("messenger_web_media", "attachment_update_error")
            .catching(error)
            .mustfix("Error marking attachment as consumed.");
        });
      }
    };

    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [audioRef, isAttachmentConsumed, updateAttachment]);
}

export default useMWPMarkAudioAttachmentAsConsumed;
