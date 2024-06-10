__d(
  "MWPMessageIsReply",
  ["LSIntEnum", "LSMessageReplySourceTypeV2"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      return (
        a.replySourceTypeV2 != null &&
        (h || (h = d("LSIntEnum"))).toNumber(a.replySourceTypeV2) !==
          c("LSMessageReplySourceTypeV2").FORWARD
      );
    }
    g["default"] = a;
  },
  98
);

import { LSIntEnum } from "LSIntEnum";
import { LSMessageReplySourceTypeV2 } from "LSMessageReplySourceTypeV2";

interface Message {
  replySourceTypeV2: number | null;
}

const isReplyMessage = (message: Message): boolean => {
  return (
    message.replySourceTypeV2 != null &&
    LSIntEnum.toNumber(message.replySourceTypeV2) !==
      LSMessageReplySourceTypeV2.FORWARD
  );
};

export default isReplyMessage;
