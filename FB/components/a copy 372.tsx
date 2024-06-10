__d(
  "HiddenTabDataUtils",
  ["vc-tracker"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      function d() {
        var d;
        return (d =
          c("vc-tracker") == null
            ? void 0
            : c("vc-tracker").VisibilityState.getHiddenSpans(a, b)) != null
          ? d
          : [];
      }
      function e() {
        var a = d();
        return a.length > 0 ? a[0] : null;
      }
      function f() {
        var a = 0,
          b = d();
        b.forEach(function (b) {
          a += b.end - b.start;
        });
        return Math.round(a);
      }
      function g() {
        var a = f();
        return a > 0;
      }
      function h() {
        var a;
        a =
          (a =
            c("vc-tracker") == null
              ? void 0
              : c("vc-tracker").VisibilityState.getHiddenSpans(b - 1, b)) !=
          null
            ? a
            : [];
        return a.length > 0;
      }
      function i() {
        var a = e();
        return a != null ? Math.round(a.end - a.start) : 0;
      }
      function j() {
        var a = e();
        return a != null ? Math.round(a.start) : null;
      }
      function k() {
        var a = d();
        return a.length === 0 ? null : Math.round(a[a.length - 1].start);
      }
      return {
        firstTimeHidden: j,
        firstTimeHiddenDuration: i,
        isHidden: h,
        lastTimeHidden: k,
        totalHiddenTime: f,
        wasHidden: g,
      };
    }
    g.getHiddenTabDataForTimeInterval = a;
  },
  98
);

import vcTracker from "vc-tracker";

type HiddenSpan = {
  start: number;
  end: number;
};

function getHiddenTabDataForTimeInterval(a: number, b: number) {
  function getHiddenSpans(): HiddenSpan[] {
    const spans = vcTracker?.VisibilityState.getHiddenSpans(a, b);
    return spans != null ? spans : [];
  }

  function firstHiddenSpan(): HiddenSpan | null {
    const spans = getHiddenSpans();
    return spans.length > 0 ? spans[0] : null;
  }

  function totalHiddenDuration(): number {
    let total = 0;
    const spans = getHiddenSpans();
    spans.forEach((span) => {
      total += span.end - span.start;
    });
    return Math.round(total);
  }

  function wasHidden(): boolean {
    const total = totalHiddenDuration();
    return total > 0;
  }

  function isHidden(): boolean {
    const spans = vcTracker?.VisibilityState.getHiddenSpans(b - 1, b) ?? [];
    return spans.length > 0;
  }

  function firstTimeHiddenDuration(): number {
    const span = firstHiddenSpan();
    return span != null ? Math.round(span.end - span.start) : 0;
  }

  function firstTimeHidden(): number | null {
    const span = firstHiddenSpan();
    return span != null ? Math.round(span.start) : null;
  }

  function lastTimeHidden(): number | null {
    const spans = getHiddenSpans();
    return spans.length === 0
      ? null
      : Math.round(spans[spans.length - 1].start);
  }

  return {
    firstTimeHidden,
    firstTimeHiddenDuration,
    isHidden,
    lastTimeHidden,
    totalHiddenTime: totalHiddenDuration,
    wasHidden,
  };
}

export { getHiddenTabDataForTimeInterval };
