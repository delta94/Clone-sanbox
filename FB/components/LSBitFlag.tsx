__d(
  "LSBitFlag",
  ["I64"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, b) {
      return (h || (h = d("I64"))).equal(h.and_(b, a), a);
    }
    function b(a, b) {
      return (h || (h = d("I64"))).or_(b, a);
    }
    function c(a, b) {
      return (h || (h = d("I64"))).and_(b, h.lognot(a));
    }
    g.has = a;
    g.set = b;
    g.clear = c;
    g.empty = (h || (h = d("I64"))).zero;
  },
  98
);

import I64 from "I64";

let I64Instance: typeof I64;

function has(flag: any, value: any): boolean {
  if (!I64Instance) {
    I64Instance = I64;
  }
  return I64Instance.equal(I64Instance.and_(value, flag), flag);
}

function set(flag: any, value: any): any {
  if (!I64Instance) {
    I64Instance = I64;
  }
  return I64Instance.or_(value, flag);
}

function clear(flag: any, value: any): any {
  if (!I64Instance) {
    I64Instance = I64;
  }
  return I64Instance.and_(value, I64Instance.lognot(flag));
}

const empty = (I64Instance || (I64Instance = I64)).zero;

export { has, set, clear, empty };
