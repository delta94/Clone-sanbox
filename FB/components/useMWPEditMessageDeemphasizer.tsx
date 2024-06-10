__d(
  "useMWPEditMessageDeemphasizer",
  ["MAWEditMessageContext.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useContext,
      j = { deemphasize: { filter: "x4xejrh", $$css: !0 } };
    function a(a) {
      var b = i(d("MAWEditMessageContext.react").Context);
      b = b.editMessageData;
      b =
        (b == null ? void 0 : b.messageId) != null &&
        (b == null ? void 0 : b.messageId) !== a;
      return b ? j.deemphasize : null;
    }
    g["default"] = a;
  },
  98
);

import { useContext } from "react";
import { MAWEditMessageContext } from "MAWEditMessageContext.react";

interface Style {
  filter: string;
  $$css: boolean;
}

const styles: { deemphasize: Style } = {
  deemphasize: { filter: "x4xejrh", $$css: true },
};

function useMWPEditMessageDeemphasizer(messageId: string | null): Style | null {
  const { editMessageData } = useContext(MAWEditMessageContext.Context) || {};
  const isDeemphasized =
    editMessageData?.messageId != null &&
    editMessageData.messageId !== messageId;
  return isDeemphasized ? styles.deemphasize : null;
}

export default useMWPEditMessageDeemphasizer;
