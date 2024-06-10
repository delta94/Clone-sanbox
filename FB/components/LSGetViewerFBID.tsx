__d(
  "LSGetViewerFBID",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1],
        c = [],
        d = [];
      return b.sequence([
        function (a) {
          return b.sequence([
            function (a) {
              return b.db
                .table(4)
                .fetch([[[b.i64.cast([0, 1])]]])
                .next()
                .then(function (a, d) {
                  var e = a.done;
                  a = a.value;
                  return e
                    ? (c[0] = b.i64.cast([-1, 4294967295]))
                    : ((d = a.item), (c[0] = d.facebookUserId));
                });
            },
            function (a) {
              return (d[0] = c[0]);
            },
          ]);
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    }
    e.exports = a;
  },
  null
);

function LSGetViewerFBID(...args: any[]): Promise<any> {
  const storedProcedure = args[args.length - 1];
  const c: any[] = [];
  const d: any[] = [];

  return storedProcedure.sequence([
    () =>
      storedProcedure.sequence([
        () =>
          storedProcedure.db
            .table(4)
            .fetch([[[storedProcedure.i64.cast([0, 1])]]])
            .next()
            .then((result: any) => {
              const isDone = result.done;
              const value = result.value;
              if (isDone) {
                c[0] = storedProcedure.i64.cast([-1, 4294967295]);
              } else {
                const item = value.item;
                c[0] = item.facebookUserId;
              }
            }),
        () => {
          d[0] = c[0];
        },
      ]),
    () => storedProcedure.resolve(d),
  ]);
}

export default LSGetViewerFBID;
