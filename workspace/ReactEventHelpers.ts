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
