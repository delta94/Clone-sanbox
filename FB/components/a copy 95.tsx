__d(
  "MultipleTabsLogger",
  [
    "BrowserLockManager",
    "InteractionTracingMetrics",
    "LockManager",
    "Promise",
    "QPLUserFlow",
    "hasMultipleTabs",
    "memoizeOneWithArgs",
    "regeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = !1,
      j = !1;
    function a() {
      return i;
    }
    function k() {
      return d("hasMultipleTabs").hasMultipleTabs(j);
    }
    function l() {
      var a;
      return b("regeneratorRuntime").async(
        function (c) {
          while (1)
            switch ((c.prev = c.next)) {
              case 0:
                c.next = 2;
                return b("regeneratorRuntime").awrap(k());
              case 2:
                a = c.sent;
                return c.abrupt(
                  "return",
                  a != null ? a.toString() : "undefined"
                );
              case 4:
              case "end":
                return c.stop();
            }
        },
        null,
        this
      );
    }
    function e(a) {
      void l().then(function (b) {
        return c("InteractionTracingMetrics").addMetadata(
          a,
          "hasMultipleTabs",
          b
        );
      });
    }
    function f(a, b) {
      void l().then(function (d) {
        b !== null
          ? c("QPLUserFlow").addAnnotations(
              a,
              { string: { hasMultipleTabs: d } },
              { instanceKey: b }
            )
          : c("QPLUserFlow").addAnnotations(a, {
              string: { hasMultipleTabs: d },
            });
      });
    }
    var m = c("memoizeOneWithArgs")(function (a) {
      c("BrowserLockManager") &&
        ((j = !0),
        void c("BrowserLockManager").request(
          d("hasMultipleTabs").MULTIPLE_TAB_LOCK_NAME,
          { mode: d("LockManager").LockMode.Exclusive },
          function (c) {
            if (c) {
              i = !0;
              return new (h || (h = b("Promise")))(function (b) {
                if (a) return b(a());
              });
            }
          }
        ));
    });
    g.hasUniqueLock = a;
    g.hasMultipleTabs = k;
    g.getMultipleTabsAnnotation = l;
    g.addAnnotationWithInteractionUuid = e;
    g.addAnnotationToQPLEvent = f;
    g.init = m;
  },
  98
);
