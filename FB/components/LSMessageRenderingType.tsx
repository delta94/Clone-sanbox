__d(
  "LSMessageRenderingType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DEFAULT: 0,
      NON_COLLAPSIBLE_ADMIN_MESSAGE: 1,
      HIDDEN: 2,
      RICH_TEXT_COMMON_MARK: 3,
    });
    f["default"] = a;
  },
  66
);

const LSMessageRenderingType = Object.freeze({
  DEFAULT: 0,
  NON_COLLAPSIBLE_ADMIN_MESSAGE: 1,
  HIDDEN: 2,
  RICH_TEXT_COMMON_MARK: 3,
} as const);

export default LSMessageRenderingType;