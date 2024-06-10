__d(
  "useCometNUXTourTarget",
  [
    "BaseContextualLayerAnchorRootContext",
    "CometNUXTourConsumerContext",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef;
    function a(a) {
      var b = a.contextualLayerOptions,
        d = b === void 0 ? null : b,
        e = a.description,
        f = a.image;
      b = a.isTargetFixed;
      var g = b === void 0 ? !1 : b,
        h = a.targetKey,
        l = a.title;
      b = a.withArrow;
      var m = b === void 0 ? !0 : b,
        n = k(null),
        o = i(c("CometNUXTourConsumerContext")),
        p = i(c("BaseContextualLayerAnchorRootContext")),
        q = k({ hasAnsweredSurvey: !1 });
      j(
        function () {
          if (o == null) return;
          var a = o.registerTarget,
            b = o.unregisterTarget;
          a(h, {
            anchorRootRef: p,
            contextRef: n,
            contextualLayerOptions: (a = d) != null ? a : {},
            description: e,
            image: f,
            isTargetFixed: g,
            key: h,
            storageRef: q,
            title: l,
            withArrow: m,
          });
          return function () {
            b(h);
          };
        },
        [p, o, d, e, f, h, l]
      );
      o == null &&
        c("recoverableViolation")(
          "Unable to register nux tour targets",
          "comet_ui"
        );
      return n;
    }
    g["default"] = a;
  },
  98
);
