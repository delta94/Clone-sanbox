__d(
  "LSUpdateBotSubscription",
  ["LSIssueNewTask"],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        c = a[a.length - 1],
        d = [],
        e = [];
      return c.sequence([
        function (e) {
          return (
            (d[0] = new c.Map()),
            d[0].set("thread_key", a[0]),
            d[0].set("user_action_type", a[1]),
            (d[1] = c.toJSON(d[0])),
            c.storedProcedure(
              b("LSIssueNewTask"),
              "game_messenger_updates_management_xmat",
              c.i64.cast([0, 755]),
              d[1],
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
        function (a) {
          return c.resolve(e);
        },
      ]);
    }
    e.exports = a;
  },
  null
);

import { LSIssueNewTask } from "LSIssueNewTask";

type Sequence = (tasks: (() => Promise<any>)[]) => Promise<any>;

interface Task {
  Map: new () => Map<string, any>;
  toJSON: (map: Map<string, any>) => string;
  storedProcedure: (
    procedure: typeof LSIssueNewTask,
    name: string,
    param1: BigInt,
    param2: string,
    param3?: any,
    param4?: any,
    param5?: BigInt,
    param6?: BigInt,
    param7?: any,
    param8?: any,
    param9?: BigInt,
    param10?: BigInt
  ) => Promise<any>;
  i64: {
    cast: (arr: number[]) => BigInt;
  };
  resolve: (value?: any) => Promise<any>;
}

const updateBotSubscription = function (
  ...args: any[]
): (task: Task) => Promise<any> {
  const task = args[args.length - 1];
  const mapsArray: any[] = [];
  const resultArray: any[] = [];

  return task.sequence([
    async function () {
      mapsArray[0] = new task.Map();
      mapsArray[0].set("thread_key", args[0]);
      mapsArray[0].set("user_action_type", args[1]);
      mapsArray[1] = task.toJSON(mapsArray[0]);

      return task.storedProcedure(
        LSIssueNewTask,
        "game_messenger_updates_management_xmat",
        task.i64.cast([0, 755]),
        mapsArray[1],
        undefined,
        undefined,
        task.i64.cast([0, 0]),
        task.i64.cast([0, 0]),
        undefined,
        undefined,
        task.i64.cast([0, 0]),
        task.i64.cast([0, 0])
      );
    },
    async function () {
      return task.resolve(resultArray);
    },
  ]);
};

export default updateBotSubscription;
