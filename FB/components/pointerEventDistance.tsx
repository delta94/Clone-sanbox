__d(
  "pointerEventDistance",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1,
      h = 5;
    function i(a, b, c, d) {
      return Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2));
    }
    function j(a, b) {
      return i(a.clientX, a.clientY, b.clientX, b.clientY);
    }
    function a(a, b) {
      var c = b.pointerType === "touch" || b.pointerType === "pen" ? h : g;
      a = j(a, b);
      return a <= c;
    }
    f.isWithinThreshold = a;
  },
  66
);

const MOUSE_THRESHOLD = 1;
const TOUCH_THRESHOLD = 5;

function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function getPointerDistance(
  eventA: PointerEvent,
  eventB: PointerEvent
): number {
  return calculateDistance(
    eventA.clientX,
    eventA.clientY,
    eventB.clientX,
    eventB.clientY
  );
}

function isWithinThreshold(
  eventA: PointerEvent,
  eventB: PointerEvent
): boolean {
  const threshold =
    eventB.pointerType === "touch" || eventB.pointerType === "pen"
      ? TOUCH_THRESHOLD
      : MOUSE_THRESHOLD;
  const distance = getPointerDistance(eventA, eventB);
  return distance <= threshold;
}

export default { isWithinThreshold };
