__d(
  "baseTextTransformAllStrings",
  ["DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function j(a) {
      var b;
      return (
        ((b = c(
          "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE"
        )(a)) == null
          ? void 0
          : b.type) === i.Fragment &&
        typeof ((b = c(
          "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE"
        )(a)) == null
          ? void 0
          : (a = b.props) == null
          ? void 0
          : a.children) === "string"
      );
    }
    function k(a, b, c, d) {
      var e;
      c === void 0 && (c = 3);
      d === void 0 && (d = 0);
      var f = 0;
      if (a == null || typeof a === "number" || typeof a === "boolean")
        return a;
      if (typeof a === "string") {
        var g = a;
        return b(g, d + "-" + f++);
      }
      if (Array.isArray(a))
        return a.map(function (a) {
          if (j(a))
            return i.cloneElement(a, {
              children: b(a.props.children, d + "-" + f++),
            });
          return d < c ? k(a, b, c, d + 1) : a;
        });
      g = i.Children.only(a);
      if (j(g))
        return i.cloneElement(g, {
          children: b(g.props.children, d + "-" + f++),
        });
      if (
        typeof (g == null
          ? void 0
          : (e = g.props) == null
          ? void 0
          : e.children) === "string"
      )
        return i.cloneElement(g, {
          children: b(g.props.children, d + "-" + f++),
        });
      return Array.isArray(
        g == null ? void 0 : (e = g.props) == null ? void 0 : e.children
      )
        ? i.cloneElement(g, { children: k(g.props.children, b, c, d + 1) })
        : a;
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = k;
  },
  98
);

import React, { ReactElement, Children } from "react";
import { DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE } from "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE";

type TransformFunction = (text: string, key: string) => string | ReactElement;

function isFragmentWithText(element: ReactElement): boolean {
  const internalElement =
    DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE(element);
  return (
    internalElement?.type === React.Fragment &&
    typeof internalElement?.props?.children === "string"
  );
}

function baseTextTransformAllStrings(
  input: any,
  transform: TransformFunction,
  maxDepth: number = 3,
  currentDepth: number = 0
): any {
  let keyIndex = 0;

  if (
    input == null ||
    typeof input === "number" ||
    typeof input === "boolean"
  ) {
    return input;
  }

  if (typeof input === "string") {
    return transform(input, `${currentDepth}-${keyIndex++}`);
  }

  if (Array.isArray(input)) {
    return input.map((child) => {
      if (isFragmentWithText(child)) {
        return React.cloneElement(child, {
          children: transform(
            child.props.children,
            `${currentDepth}-${keyIndex++}`
          ),
        });
      }
      return currentDepth < maxDepth
        ? baseTextTransformAllStrings(
            child,
            transform,
            maxDepth,
            currentDepth + 1
          )
        : child;
    });
  }

  const element = Children.only(input);
  if (isFragmentWithText(element)) {
    return React.cloneElement(element, {
      children: transform(
        element.props.children,
        `${currentDepth}-${keyIndex++}`
      ),
    });
  }

  if (typeof element?.props?.children === "string") {
    return React.cloneElement(element, {
      children: transform(
        element.props.children,
        `${currentDepth}-${keyIndex++}`
      ),
    });
  }

  if (Array.isArray(element?.props?.children)) {
    return React.cloneElement(element, {
      children: baseTextTransformAllStrings(
        element.props.children,
        transform,
        maxDepth,
        currentDepth + 1
      ),
    });
  }

  return input;
}

baseTextTransformAllStrings.displayName = `${baseTextTransformAllStrings.name} [from ${f.id}]`;
export default baseTextTransformAllStrings;
