__d(
  "useCometLoadingStateTracker",
  ["CometVisualCompletionAttributes", "InteractionTracing", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
      j = b.useRef;
    function a() {
      var a = j(null);
      i(function () {
        var b = a.current,
          c = [];
        b != null && (c = k(b));
        return function () {
          c.forEach(function (a) {
            a();
          });
        };
      }, []);
      return [c("CometVisualCompletionAttributes").LOADING_STATE, a];
    }
    function k(a) {
      var b = [];
      c("InteractionTracing")
        .getPendingInteractions()
        .forEach(function (c) {
          c = c.getTrace();
          c && c.vcTracker && b.push(c.vcTracker.waitLoadingState(a));
        });
      return b;
    }
    g["default"] = a;
  },
  98
);

import { CometVisualCompletionAttributes } from "path_to_CometVisualCompletionAttributes";
import { getPendingInteractions } from "path_to_InteractionTracing";
import React, { useEffect, useRef } from "react";

type UseCometLoadingStateTrackerResult = [
  typeof CometVisualCompletionAttributes.LOADING_STATE,
  () => void
];

function useCometLoadingStateTracker(): UseCometLoadingStateTrackerResult {
  const loadingStateRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cleanupCallbacks: (() => void)[] = [];
    const element = loadingStateRef.current;

    if (element !== null) {
      const callbacks = trackLoadingState(element);
      cleanupCallbacks.push(...callbacks);
    }

    return () => {
      cleanupCallbacks.forEach((callback) => callback());
    };
  }, []);

  return [CometVisualCompletionAttributes.LOADING_STATE, loadingStateRef];
}

function trackLoadingState(element: HTMLElement): (() => void)[] {
  const cleanupCallbacks: (() => void)[] = [];

  getPendingInteractions().forEach((interaction) => {
    const trace = interaction.getTrace();
    if (trace && trace.vcTracker) {
      const cleanup = trace.vcTracker.waitLoadingState(element);
      cleanupCallbacks.push(cleanup);
    }
  });

  return cleanupCallbacks;
}

export default useCometLoadingStateTracker;
