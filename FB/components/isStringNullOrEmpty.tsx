__d(
  "isStringNullOrEmpty",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a == null || a === "";
    }
    f["default"] = a;
  },
  66
);

const isStringNullOrEmpty = (input: string | null | undefined): boolean => {
  return input == null || input === "";
};

export default isStringNullOrEmpty;
