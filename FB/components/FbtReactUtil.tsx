__d(
  "FbtReactUtil",
  [],
  function (a, b, c, d, e, f) {
    a =
      (typeof Symbol === "function" &&
        Symbol["for"] &&
        Symbol["for"]("react.element")) ||
      60103;
    var g = !1;
    b = {
      REACT_ELEMENT_TYPE: a,
      injectReactShim: function (a) {
        var b = { validated: !0 };
        g
          ? Object.defineProperty(a, "_store", {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: b,
            })
          : (a._store = b);
      },
    };
    e.exports = b;
  },
  null
);

const REACT_ELEMENT_TYPE =
  (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) ||
  60103;
let g = false;

const FbtReactUtil = {
  REACT_ELEMENT_TYPE,

  injectReactShim(element: any) {
    const store = { validated: true };
    if (g) {
      Object.defineProperty(element, "_store", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: store,
      });
    } else {
      element._store = store;
    }
  },
};

export { FbtReactUtil };
