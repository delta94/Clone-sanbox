__d(
  "getPrefersReducedMotion",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = null;
    function h(a) {
      g = a.matches;
    }
    function a() {
      if (g == null)
        if (typeof window.matchMedia === "function") {
          var a = matchMedia("(prefers-reduced-motion: reduce)");
          a.addListener(h);
          g = a.matches;
        } else g = !1;
      return g;
    }
    f["default"] = a;
  },
  66
);

let prefersReducedMotion: boolean | null = null;

function handleChange(event: MediaQueryListEvent) {
  prefersReducedMotion = event.matches;
}

function getPrefersReducedMotion(): boolean {
  if (prefersReducedMotion === null) {
    if (typeof window.matchMedia === "function") {
      const mediaQueryList = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );
      mediaQueryList.addListener(handleChange);
      prefersReducedMotion = mediaQueryList.matches;
    } else {
      prefersReducedMotion = false;
    }
  }
  return prefersReducedMotion;
}

export default getPrefersReducedMotion;
