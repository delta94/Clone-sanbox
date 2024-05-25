__d(
  "MWXTextImpl.react",
  ["cr:6221", "cr:6222", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a, c) {
      var d = a.type,
        e = babelHelpers.objectWithoutPropertiesLoose(a, ["type"]);
      if (b("cr:6221") !== null)
        return i.jsx(b("cr:6221"), babelHelpers["extends"]({ ref: c }, a));
      return b("cr:6222") !== null
        ? i.jsx(
            b("cr:6222"),
            babelHelpers["extends"](
              {
                type:
                  d === "headlineEmphasized5"
                    ? "headlineEmphasized4"
                    : d === "entityHeaderMeta3"
                    ? "entityHeaderMeta2"
                    : d,
              },
              e,
              { ref: c }
            )
          )
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    c = i.forwardRef(a);
    e = c;
    g["default"] = e;
  },
  98
);

import React, { forwardRef, HTMLProps } from "react";
import TetraTextImpl from "cr:6222";

type MWXTextImplProps = HTMLProps<HTMLDivElement>;

const MWXTextImpl: React.ForwardRefRenderFunction<
  HTMLDivElement,
  MWXTextImplProps
> = (props, ref) => {
  const { type, ...rest } = props;

  if (TetraTextImpl !== null) {
    const newType =
      type === "headlineEmphasized5"
        ? "headlineEmphasized4"
        : type === "entityHeaderMeta3"
        ? "entityHeaderMeta2"
        : type;

    return <TetraTextImpl {...rest} type={newType} ref={ref} />;
  } else {
    return null;
  }
};

MWXTextImpl.displayName = `MWXTextImpl [from ${__filename}]`;

export default forwardRef(MWXTextImpl);
