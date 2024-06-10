// __d(
//   "AdsMessengerContext.react",
//   ["AdsAIMessengerUtils", "react"],
//   function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     b = h || (h = d("react"));
//     var i = h.useContext,
//       j = b.createContext({
//         isMessageFromAdsAI: d("AdsAIMessengerUtils").isMessageFromAdsAI,
//         isMessengerInAds: !1,
//       });
//     function a() {
//       return i(j);
//     }
//     g.AdsMessengerContext = j;
//     g.useAdsMessengerContext = a;
//   },
//   98
// );

import React, { useContext, createContext } from "react";
import { isMessageFromAdsAI } from "./AdsAIMessengerUtils";

interface AdsMessengerContextProps {
  isMessageFromAdsAI: typeof isMessageFromAdsAI;
  isMessengerInAds: boolean;
}

const defaultContext: AdsMessengerContextProps = {
  isMessageFromAdsAI: isMessageFromAdsAI,
  isMessengerInAds: false,
};

const AdsMessengerContext =
  createContext<AdsMessengerContextProps>(defaultContext);

const useAdsMessengerContext = (): AdsMessengerContextProps => {
  return useContext(AdsMessengerContext);
};

export { AdsMessengerContext, useAdsMessengerContext };
