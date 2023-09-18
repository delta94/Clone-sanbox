__d("ReactEventHelpers", [], (function(a, b, c, d, e, f) {
    b = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
    c = typeof window !== "undefined" && window.PointerEvent != null;
    function a(a, b) {
        return b == null ? !1 : typeof a.containsNode === "function" ? a.containsNode(b) : a.contains(b)
    }
    f.isMac = b;
    f.hasPointerEvents = c;
    f.isRelatedTargetWithin = a
}
), 66);


const isMac =
  typeof window !== "undefined" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : false;

const hasPointerEvents =
  typeof window !== "undefined" && window.PointerEvent != null;

function isRelatedTargetWithin(
  focusWithinTarget: any,
  relatedTarget?: EventTarget
): boolean {
  if (relatedTarget == null) {
    return false;
  }

  // As the focusWithinTarget can be a Scope Instance (experimental API),
  // we need to use the containsNode() method. Otherwise, focusWithinTarget
  // must be a Node, which means we can use the contains() method.
  return typeof focusWithinTarget.containsNode === "function"
    ? focusWithinTarget.containsNode(relatedTarget)
    : focusWithinTarget.contains(relatedTarget);
}

const ReactEventHelpers = {
  isMac,
  hasPointerEvents,
  isRelatedTargetWithin,
};

export default ReactEventHelpers;