__d(
  "BaseDialogLabelIDProvider",
  ["HiddenSubtreeContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    d = h;
    var j = d.useContext,
      k = d.useId,
      l = i.createContext(void 0);
    function a(a) {
      a = a.children;
      var b = k();
      return i.jsx(l.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      var a = j(l),
        b = j(c("HiddenSubtreeContext"));
      b = b.hidden;
      return b ? void 0 : a;
    }
    function e() {
      return j(l);
    }
    g.BaseDialogLabelIDContext = l;
    g.BaseDialogLabelIDProvider = a;
    g.useDialogHeaderID = b;
    g.useDialogLabelID = e;
  },
  98
);

import { HiddenSubtreeContext } from "HiddenSubtreeContext";
import React, { createContext, useContext, useId } from "react";

interface BaseDialogLabelIDProviderProps {
  children: React.ReactNode;
}

const BaseDialogLabelIDContext = createContext<string | undefined>(undefined);

const BaseDialogLabelIDProvider: React.FC<BaseDialogLabelIDProviderProps> = ({
  children,
}) => {
  const id = useId();
  return (
    <BaseDialogLabelIDContext.Provider value={id}>
      {children}
    </BaseDialogLabelIDContext.Provider>
  );
};

BaseDialogLabelIDProvider.displayName = `${BaseDialogLabelIDProvider.name} [from BaseDialogLabelIDProvider.react]`;

function useDialogHeaderID(): string | undefined {
  const dialogLabelID = useContext(BaseDialogLabelIDContext);
  const hiddenSubtreeContext = useContext(HiddenSubtreeContext);
  const isHidden = hiddenSubtreeContext.hidden;

  return isHidden ? undefined : dialogLabelID;
}

function useDialogLabelID(): string | undefined {
  return useContext(BaseDialogLabelIDContext);
}

export {
  BaseDialogLabelIDContext,
  BaseDialogLabelIDProvider,
  useDialogHeaderID,
  useDialogLabelID,
};
