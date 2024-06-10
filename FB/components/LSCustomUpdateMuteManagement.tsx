__d(
  "LSCustomUpdateMuteManagement",
  ["LSGetViewerFBID", "LSIssueNewTask"],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        c = a[a.length - 1],
        d = [],
        e = [];
      return c.sequence([
        function (e) {
          return c.sequence([
            function (a) {
              return c.storedProcedure(b("LSGetViewerFBID")).then(function (a) {
                return (a = a), (d[0] = a[0]), a;
              });
            },
            function (e) {
              return (
                (d[1] = new c.Map()),
                d[1].set("game_id", a[1]),
                d[1].set("muted_user_id", a[0]),
                d[1].set("owner_id", d[0]),
                d[1].set("user_action_type", a[2]),
                (d[2] = c.toJSON(d[1])),
                c.storedProcedure(
                  b("LSIssueNewTask"),
                  "instant_game_custom_update_mute_management",
                  c.i64.cast([0, 759]),
                  d[2],
                  void 0,
                  void 0,
                  c.i64.cast([0, 0]),
                  c.i64.cast([0, 0]),
                  void 0,
                  void 0,
                  c.i64.cast([0, 0]),
                  c.i64.cast([0, 0])
                )
              );
            },
          ]);
        },
        function (a) {
          return c.resolve(e);
        },
      ]);
    }
    e.exports = a;
  },
  null
);

import LSGetViewerFBID from "LSGetViewerFBID";
import LSIssueNewTask from "LSIssueNewTask";

function LSCustomUpdateMuteManagement(...args: any[]): Promise<any> {
  const storedProcedure = args[args.length - 1];
  const context = args;
  const d: any[] = [];
  const e: any[] = [];

  return storedProcedure.sequence([
    () =>
      storedProcedure.sequence([
        () =>
          storedProcedure
            .storedProcedure(LSGetViewerFBID)
            .then((result: any) => {
              d[0] = result[0];
              return result;
            }),
        () => {
          d[1] = new storedProcedure.Map();
          d[1].set("game_id", context[1]);
          d[1].set("muted_user_id", context[0]);
          d[1].set("owner_id", d[0]);
          d[1].set("user_action_type", context[2]);
          d[2] = storedProcedure.toJSON(d[1]);

          return storedProcedure.storedProcedure(
            LSIssueNewTask,
            "instant_game_custom_update_mute_management",
            storedProcedure.i64.cast([0, 759]),
            d[2],
            undefined,
            undefined,
            storedProcedure.i64.cast([0, 0]),
            storedProcedure.i64.cast([0, 0]),
            undefined,
            undefined,
            storedProcedure.i64.cast([0, 0]),
            storedProcedure.i64.cast([0, 0])
          );
        },
      ]),
    () => storedProcedure.resolve(e),
  ]);
}

export default LSCustomUpdateMuteManagement;
