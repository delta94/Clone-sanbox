__d(
  "formatDurationSeconds",
  ["fbt", "padNumber"],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      var b = Math.floor(a / 3600),
        d = Math.floor((a / 60) % 60);
      a = Math.floor(a % 60);
      if (b)
        return h._("__JHASH__FQybzYZtMhO__JHASH__", [
          h._param("hours", b),
          h._param("minutes", c("padNumber")(d, 2)),
          h._param("seconds", c("padNumber")(a, 2)),
        ]);
      else
        return h._("__JHASH__dB1Hg5AxmjF__JHASH__", [
          h._param("minutes", d),
          h._param("seconds", c("padNumber")(a, 2)),
        ]);
    }
    g["default"] = a;
  },
  226
);

import fbt from "fbt";
import padNumber from "padNumber";

function formatDurationSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds / 60) % 60);
  const secs = Math.floor(seconds % 60);

  if (hours) {
    return fbt._("__JHASH__FQybzYZtMhO__JHASH__", [
      fbt._param("hours", hours),
      fbt._param("minutes", padNumber(minutes, 2)),
      fbt._param("seconds", padNumber(secs, 2)),
    ]);
  } else {
    return fbt._("__JHASH__dB1Hg5AxmjF__JHASH__", [
      fbt._param("minutes", minutes),
      fbt._param("seconds", padNumber(secs, 2)),
    ]);
  }
}

export default formatDurationSeconds;
