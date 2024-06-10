__d(
  "useMAWEditMessageData",
  ["MAWEditMessageContext.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useContext;
    function a() {
      var a = i(d("MAWEditMessageContext.react").Context);
      a = a.editMessageData;
      return a;
    }
    g["default"] = a;
  },
  98
);

import { useContext } from "react";
import { MAWEditMessageContext } from "MAWEditMessageContext.react";

interface EditMessageData {
  messageId: string;
  // Add other properties of editMessageData if available
}

function useMAWEditMessageData(): EditMessageData | null {
  const context = useContext(MAWEditMessageContext);
  return context.editMessageData;
}

export default useMAWEditMessageData;
