__d(
  "MWJewelPopoverDialogContextProvider.react",
  ["MWJewelPopoverDialogContext.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useMemo,
      k = b.useState;
    function a(a) {
      a = a.children;
      var b = k(!1),
        d = b[0],
        e = b[1];
      b = j(
        function () {
          return { isOpenForDialog: d, setIsOpenForDialog: e };
        },
        [d]
      );
      return i.jsx(c("MWJewelPopoverDialogContext.react").Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
