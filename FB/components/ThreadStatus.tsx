__d(
  "ThreadStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ DEFAULT: 0, PAUSED: 1 });
    f["default"] = a;
  },
  66
);

const ThreadStatus = Object.freeze({
  DEFAULT: 0,
  PAUSED: 1,
} as const);

export default ThreadStatus;
