__d(
  "SupportedFacebookEmoji",
  ["SupportedCommonEmoji"],
  function (a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("SupportedCommonEmoji"));
    e.exports = a;
  },
  null
);

import { SupportedCommonEmoji } from "SupportedCommonEmoji";

const SupportedFacebookEmoji = {
  ...SupportedCommonEmoji,
};

export default SupportedFacebookEmoji;
