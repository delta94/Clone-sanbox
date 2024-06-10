__d(
  "AdsAIMessengerUtils",
  ["AdsAISitevarConfig", "I64"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
      return (
        (h || (h = d("I64"))).to_string(a.senderId) ===
        c("AdsAISitevarConfig").bot_id
      );
    }
    function j(a) {
      return (
        a.botResponseId != null && a.botResponseId.startsWith("ads_ai_shiba")
      );
    }
    function a(a) {
      return i(a) || j(a);
    }
    g.isMessageFromAdsAIBot = i;
    g.isMessageFromAdsAIShibaBot = j;
    g.isMessageFromAdsAI = a;
  },
  98
);

import { AdsAISitevarConfig } from "./AdsAISitevarConfig";
import { I64 } from "I64";

type Message = {
  senderId: string;
  botResponseId?: string | null;
};

let cachedI64: typeof I64 | undefined;

function isMessageFromAdsAIBot(a: Message): boolean {
  cachedI64 = cachedI64 || I64;
  return cachedI64.to_string(a.senderId) === AdsAISitevarConfig.bot_id;
}

function isMessageFromAdsAIShibaBot(a: Message): boolean {
  return a.botResponseId != null && a.botResponseId.startsWith("ads_ai_shiba");
}

function isMessageFromAdsAI(a: Message): boolean {
  return isMessageFromAdsAIBot(a) || isMessageFromAdsAIShibaBot(a);
}

export {
  isMessageFromAdsAIBot,
  isMessageFromAdsAIShibaBot,
  isMessageFromAdsAI,
};
