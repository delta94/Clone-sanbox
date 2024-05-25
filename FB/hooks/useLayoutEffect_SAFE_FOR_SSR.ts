import {
  useLayoutEffect,
  useEffect
} from "react";

import {
  ExecutionEnvironment
} from "ExecutionEnvironment";

const useLayoutEffect_SAFE_FOR_SSR = ExecutionEnvironment.canUseDOM ?
  useLayoutEffect :
  useEffect;

export {
  useLayoutEffect_SAFE_FOR_SSR
};
export default useLayoutEffect_SAFE_FOR_SSR;


__d("useLayoutEffect_SAFE_FOR_SSR", ["ExecutionEnvironment", "react"], (function (a, b, c, d, e, f, g) {
  "use strict";
  a = d("react");
  b = a.useEffect;
  e = a.useLayoutEffect;
  f = c("ExecutionEnvironment").canUseDOM ? e : b;
  d = f;
  g["default"] = d
}), 98);