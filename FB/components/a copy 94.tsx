__d(
  "MessageRequestsBulkActionsContextProvider.react",
  ["MessageRequestsBulkActionsContext.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useEffect,
      k = b.useMemo,
      l = b.useState;
    function a(a) {
      a = a.children;
      var b = l(!1),
        d = b[0],
        e = b[1];
      b = l(new Set());
      var f = b[0],
        g = b[1];
      b = l(new Set());
      var h = b[0],
        m = b[1];
      j(
        function () {
          g(function () {
            return new Set();
          }),
            m(function () {
              return new Set();
            });
        },
        [d, g, m]
      );
      b = k(
        function () {
          return {
            bulkActionsSelectedThreads: f,
            bulkActionsUnreadSelectedThreads: h,
            isBulkActionsEditMode: d,
            setBulkActionsSelectedThreads: g,
            setBulkActionsUnreadSelectedThreads: m,
            setIsBulkActionsEditMode: e,
          };
        },
        [f, d, h]
      );
      return i.jsx(c("MessageRequestsBulkActionsContext.react").Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
