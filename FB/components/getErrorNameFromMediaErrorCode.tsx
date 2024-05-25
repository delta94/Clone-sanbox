__d(
  "getErrorNameFromMediaErrorCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case 1:
          return "MEDIA_ERR_ABORTED";
        case 2:
          return "MEDIA_ERR_NETWORK";
        case 3:
          return "MEDIA_ERR_DECODE";
        case 4:
          return "MEDIA_ERR_SRC_NOT_SUPPORTED";
        default:
          return "MEDIA_ERR_UNKNOWN_" + ((a = a) != null ? a : "UNDEFINED");
      }
    }
    f["default"] = a;
  },
  66
);

export default function getErrorNameFromMediaErrorCode(
  errorCode: number
): string {
  switch (errorCode) {
    case 1:
      return "MEDIA_ERR_ABORTED";
    case 2:
      return "MEDIA_ERR_NETWORK";
    case 3:
      return "MEDIA_ERR_DECODE";
    case 4:
      return "MEDIA_ERR_SRC_NOT_SUPPORTED";
    default:
      return "MEDIA_ERR_UNKNOWN_" + (errorCode ?? "UNDEFINED");
  }
}
