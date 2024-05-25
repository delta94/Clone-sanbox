__d(
  "routeBuilderUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.split("/");
      return a
        .filter(function (a) {
          return a !== "";
        })
        .map(function (a) {
          var b = a.split(/{|}/);
          if (b.length < 3) return { isToken: !1, part: a };
          else {
            a = b[0];
            var c = b[1];
            b = b[2];
            var d = c[0] === "?",
              e = c[d ? 1 : 0] === "*";
            c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
            return {
              isToken: !0,
              optional: d,
              catchAll: e,
              prefix: a,
              suffix: b,
              token: c,
            };
          }
        });
    }
    f.getPathParts = a;
  },
  66
);

type PathPart = {
  isToken: boolean;
  part?: string;
  optional?: boolean;
  catchAll?: boolean;
  prefix?: string;
  suffix?: string;
  token?: string;
};

function getPathParts(path: string): PathPart[] {
  const parts = path.split("/");

  return parts
    .filter((part) => part !== "")
    .map((part) => {
      const segments = part.split(/{|}/);
      if (segments.length < 3) {
        return { isToken: false, part };
      } else {
        const prefix = segments[0];
        let token = segments[1];
        const suffix = segments[2];

        const optional = token[0] === "?";
        const catchAll = token[optional ? 1 : 0] === "*";
        token = token.substring((optional ? 1 : 0) + (catchAll ? 1 : 0));

        return {
          isToken: true,
          optional,
          catchAll,
          prefix,
          suffix,
          token,
        };
      }
    });
}

// Exporting the function
export { getPathParts };
