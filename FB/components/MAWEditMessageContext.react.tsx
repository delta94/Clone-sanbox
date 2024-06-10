__d(
  "MAWEditMessageContext.react",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    e = b.createContext;
    var j = b.useMemo,
      k = b.useState;
    function a(a) {
      a = a.children;
      var b = k(null),
        c = b[0],
        d = b[1];
      b = j(
        function () {
          return { editMessageData: c, setEditMessageData: d };
        },
        [c, d]
      );
      return i.jsx(l.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var l = e({
      editMessageData: null,
      setEditMessageData: c("emptyFunction"),
    });
    g.MAWEditMessageContext = a;
    g.Context = l;
  },
  98
);

import React, { createContext, useMemo, useState, ReactNode } from "react";
import emptyFunction from "emptyFunction";

interface EditMessageData {
  messageId: string;
  // Add other properties of editMessageData if available
}

interface MAWEditMessageContextType {
  editMessageData: EditMessageData | null;
  setEditMessageData: React.Dispatch<
    React.SetStateAction<EditMessageData | null>
  >;
}

const Context = createContext<MAWEditMessageContextType>({
  editMessageData: null,
  setEditMessageData: emptyFunction,
});

interface MAWEditMessageContextProps {
  children: ReactNode;
}

const MAWEditMessageContext: React.FC<MAWEditMessageContextProps> = ({
  children,
}) => {
  const [editMessageData, setEditMessageData] =
    useState<EditMessageData | null>(null);

  const value = useMemo(
    () => ({ editMessageData, setEditMessageData }),
    [editMessageData, setEditMessageData]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

MAWEditMessageContext.displayName =
  MAWEditMessageContext.name + " [from " + "module.id" + "]"; // Adjust as necessary

export { MAWEditMessageContext, Context };
