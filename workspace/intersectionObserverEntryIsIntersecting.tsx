__d("intersectionObserverEntryIsIntersecting", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.isIntersecting != null ? a.isIntersecting : a.intersectionRatio > 0 || a.intersectionRect && (a.intersectionRect.height > 0 || a.intersectionRect.width > 0)
    }
    f["default"] = a
}), 66);


/**
 * Determines whether an IntersectionObserverEntry represents an intersection.
 *
 * @param entry The IntersectionObserverEntry to check.
 * @returns True if the entry is intersecting, false otherwise.
 */
export const isIntersectionObserverEntryIntersecting = (
    entry: IntersectionObserverEntry
  ): boolean => {
    return (
      entry.isIntersecting !== null
        ? entry.isIntersecting
        : entry.intersectionRatio > 0 ||
          (entry.intersectionRect &&
            (entry.intersectionRect.height > 0 || entry.intersectionRect.width > 0))
    );
  };
  