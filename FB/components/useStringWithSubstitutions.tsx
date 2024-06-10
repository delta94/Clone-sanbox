__d(
  "useStringWithSubstitutions",
  [
    "fbt",
    "CurrentMessengerUser",
    "Env",
    "I64",
    "Int64Hooks",
    "LSAuthorityLevel",
    "LSContactBlockedByViewerStatus",
    "LSContactGender",
    "LSContactIdType",
    "LSContactType",
    "LSContactViewerRelationship",
    "LSContactWorkForeignEntityType",
    "LSFactory",
    "LSVerifyContactRowExistsStoredProcedure",
    "Promise",
    "ReQL",
    "ReQLSuspense",
    "gkx",
    "nullthrows",
    "promiseDone",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l,
      m,
      n = m || d("react"),
      o = n.useEffect,
      p = n.useMemo;
    n = Boolean((j || (j = c("Env"))).isMessengerDotComOnComet)
      ? "Messenger"
      : c("gkx")("22979")
      ? "Instagram"
      : "Facebook";
    var q = h
        ._("__JHASH__9kaBCOd2SjE__JHASH__", [h._param("Platform Name", n)])
        .toString(),
      r = /(\$?)\$([a-zA-Z_]+)(?:\((.*?)\))?/g,
      s = /()(@)(?:(.*?)@msgr)/g;
    function t(a, b) {
      b = (l || (l = d("I64"))).of_string(b);
      return c("LSVerifyContactRowExistsStoredProcedure")(c("LSFactory")(a), {
        authorityLevel: l.of_int32(c("LSAuthorityLevel").OPTIMISTIC),
        blockedByViewerStatus: l.of_int32(
          c("LSContactBlockedByViewerStatus").UNBLOCKED
        ),
        contactIdType: l.of_int32(c("LSContactIdType").FBID),
        contactType: l.of_int32(c("LSContactType").USER),
        contactViewerRelationship: l.of_int32(
          c("LSContactViewerRelationship").UNKNOWN
        ),
        gender: l.of_int32(c("LSContactGender").UNKNOWN),
        id: b,
        isBlocked: !1,
        isMemorialized: !1,
        isSelf: b === d("CurrentMessengerUser").getID(),
        workForeignEntityType: l.of_int32(
          c("LSContactWorkForeignEntityType").UNKNOWN
        ),
      });
    }
    function u(a, b) {
      var c = 0,
        d = a.length - 1;
      while (c <= d) {
        var e = (c + d) >> 1;
        a[e][0] < b ? (c = e + 1) : (d = e - 1);
      }
      return d;
    }
    function v(a, b, c, d) {
      var e = [[-1, 0]];
      a = a.replace(c, function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), f = 1;
          f < b;
          f++
        )
          c[f - 1] = arguments[f];
        var g = c[c.length - 2],
          h = d.apply(void 0, [a].concat(c));
        if (h.length === a.length) return h;
        e.push([g, a.length - h.length + e[e.length - 1][1]]);
        return h;
      });
      if (e.length === 1) return { textWithSubstitutions: a, updatedRanges: b };
      c = [];
      for (
        var b = b,
          f = Array.isArray(b),
          g = 0,
          b = f
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= b.length) break;
          h = b[g++];
        } else {
          g = b.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        var i = u(e, h.offset);
        c.push(
          babelHelpers["extends"]({}, h, {
            length:
              h.length -
              (e[i + 1] != null && e[i + 1][0] <= h.offset + h.length
                ? e[i + 1][1] - e[i][1]
                : 0),
            offset: h.offset - e[i][1],
          })
        );
      }
      return { textWithSubstitutions: a, updatedRanges: c };
    }
    var w = {
      CONTACT_FIRST_NAME: [
        function (a) {
          return function (b) {
            return d("ReQL")
              .fromTableAscending(a.tables.contacts, [
                "name",
                "firstName",
                "id",
              ])
              .getKeyRange((l || (l = d("I64"))).of_string(b))
              .map(function (a) {
                var b = a.firstName;
                a = a.name;
                return (b = b) != null ? b : a;
              });
          };
        },
        function (a) {
          return q;
        },
        t,
      ],
      CONTACT_FULL_NAME: [
        function (a) {
          return function (b) {
            return d("ReQL")
              .fromTableAscending(a.tables.contacts, ["name"])
              .getKeyRange((l || (l = d("I64"))).of_string(b))
              .map(function (a) {
                a = a.name;
                return a;
              });
          };
        },
        function (a) {
          return q;
        },
        t,
      ],
      PARTICIPANT_FIRST_NAME: [
        function (a) {
          return function (b, c) {
            var e = c.threadKey;
            return d("ReQL")
              .fromTableAscending(a.tables.contacts, [
                "name",
                "firstName",
                "id",
              ])
              .getKeyRange((l || (l = d("I64"))).of_string(b))
              .map(function (b) {
                var c = b.firstName,
                  g = b.id;
                b = b.name;
                g =
                  e == null
                    ? null
                    : d("ReQLSuspense").first(
                        d("ReQL")
                          .fromTableAscending(a.tables.participants, [
                            "nickname",
                          ])
                          .getKeyRange(e, g),
                        f.id + ":177"
                      );
                return (g =
                  (g = g == null ? void 0 : g.nickname) != null ? g : c) != null
                  ? g
                  : b;
              });
          };
        },
        function (a) {
          return q;
        },
        t,
      ],
      PARTICIPANT_FULL_NAME: [
        function (a) {
          return function (b, c) {
            var e = c.threadKey;
            return d("ReQL")
              .fromTableAscending(a.tables.contacts, ["name", "id"])
              .getKeyRange((l || (l = d("I64"))).of_string(b))
              .map(function (b) {
                var c = b.id;
                b = b.name;
                c =
                  e == null
                    ? null
                    : d("ReQLSuspense").first(
                        d("ReQL")
                          .fromTableAscending(a.tables.participants, [
                            "nickname",
                          ])
                          .getKeyRange(e, c),
                        f.id + ":196"
                      );
                return (c = c == null ? void 0 : c.nickname) != null ? c : b;
              });
          };
        },
        function (a) {
          return q;
        },
        t,
      ],
    };
    function x(a, e, g, h, j) {
      var l = (k || (k = c("useReStore")))(),
        m = d("Int64Hooks").useMemoInt64(
          function () {
            return { threadKey: g };
          },
          [g]
        ),
        n = p(
          function () {
            var b,
              d = [],
              e = 0;
            if (a != null) {
              h.lastIndex = 0;
              var f = function () {
                var a = c("nullthrows")(b);
                a[0];
                var f = a[1],
                  g = a[2],
                  h = a[3];
                if (!f) {
                  var i = e,
                    k = j[g];
                  k != null &&
                    (d.push([
                      k[0](l)(h, m)
                        .take(1)
                        .map(function (a) {
                          return [i, a];
                        }),
                      function (a) {
                        return k[2](a, h);
                      },
                    ]),
                    e++);
                }
              };
              while ((b = h.exec(a)) !== null) f();
            }
            return d;
          },
          [m, l, a, h, j]
        ),
        q = d("ReQLSuspense").useArray(
          function () {
            return n.length
              ? n.length === 1
                ? n[0][0]
                : d("ReQL").union.apply(
                    void 0,
                    n.map(function (a) {
                      return a[0];
                    })
                  )
              : d("ReQL").empty();
          },
          [n],
          f.id + ":258"
        ),
        r = p(
          function () {
            return new Map(q);
          },
          [q]
        );
      o(
        function () {
          var a = n
            .map(function (a, b) {
              a[0];
              a = a[1];
              return r.has(b) ? null : a;
            })
            .filter(Boolean);
          a.length &&
            c("promiseDone")(
              l.runInTransaction(
                function (c) {
                  return (i || (i = b("Promise"))).all(
                    a.map(function (a) {
                      return a(c);
                    })
                  );
                },
                "readwrite",
                void 0,
                void 0,
                f.id + ":285"
              )
            );
        },
        [l, n, r]
      );
      return p(
        function () {
          if (a == null) return null;
          var b = 0;
          return v(a, e, h, function (a, c, d, e) {
            var f = j[d];
            return c || f == null ? a : r.get(b++) || j[d][1](e);
          });
        },
        [a, e, h, r, j]
      );
    }
    function a(a, b) {
      return (a = x(a, [], b, r, w)) == null
        ? void 0
        : (b = a.textWithSubstitutions) == null
        ? void 0
        : b.replace == null
        ? void 0
        : b.replace(/\$\$/g, "$$");
    }
    function e(a, b, c) {
      var e = p(
        function () {
          return {
            "@": [
              function (a) {
                return function (b) {
                  return c.has(b)
                    ? d("ReQL")
                        .fromTableAscending(a.tables.contacts, ["name"])
                        .getKeyRange((l || (l = d("I64"))).of_string(b))
                        .map(function (a) {
                          a = a.name;
                          return "@" + a;
                        })
                    : d("ReQL").empty();
                };
              },
              function (a) {
                return c.has(a) ? "@" + q : "@" + a + "@msgr";
              },
              t,
            ],
          };
        },
        [c]
      );
      return x(a, b, void 0, s, e);
    }
    g.useStringWithSubstitutions = a;
    g.useStringWithMentionSubstitutionsAndUpdatedRanges = e;
  },
  226
);
