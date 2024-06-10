__d(
  "ComponentWithDataAttributes.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.children,
        c = a.dataAttributes;
      a =
        c != null
          ? Object.keys(c).reduce(function (a, b) {
              a != null && b != null && (a["data-" + b] = c[b]);
              return a;
            }, {})
          : null;
      return a != null
        ? i.jsx("div", babelHelpers["extends"]({}, a, { children: b }))
        : b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { ReactNode } from "react";

type DataAttributes = { [key: string]: string };

interface ComponentWithDataAttributesProps {
  children: ReactNode;
  dataAttributes?: DataAttributes;
}

const ComponentWithDataAttributes: React.FC<
  ComponentWithDataAttributesProps
> = ({ children, dataAttributes }) => {
  const attributeProps = dataAttributes
    ? Object.keys(dataAttributes).reduce((props, key) => {
        if (props && key) {
          props[`data-${key}`] = dataAttributes[key];
        }
        return props;
      }, {} as { [key: string]: string })
    : undefined;

  return attributeProps ? (
    <div {...attributeProps}>{children}</div>
  ) : (
    <>{children}</>
  );
};

export default ComponentWithDataAttributes;
