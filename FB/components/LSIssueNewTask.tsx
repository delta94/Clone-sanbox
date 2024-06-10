__d(
  "LSIssueNewTask",
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1],
        c = [],
        d = [];
      return b.sequence([
        function (d) {
          return b.sequence([
            function (d) {
              return (
                (c[0] = b.i64.of_float(Date.now())),
                b.db.table(2).add({
                  taskId: void 0,
                  queueName: a[0],
                  context: b.i64.to_string(a[1]),
                  taskValue: a[2],
                  enqueueTimestampMs: c[0],
                  httpUrlOverride: a[3],
                  timeoutTimestampMs: a[4],
                  pluginType: a[5],
                  priority: a[6],
                  syncGroupId: a[7],
                  transportKey: a[8],
                  minTimeToSyncTimestampMs: a[9],
                })
              );
            },
            function (d) {
              return b
                .filter(
                  b.db.table(2).fetchDesc([[[a[0]]], "queueNameTaskId"]),
                  function (c) {
                    return (
                      c.queueName === a[0] &&
                      c.context === b.i64.to_string(a[1]) &&
                      c.taskValue === a[2]
                    );
                  }
                )
                .next()
                .then(function (a, d) {
                  var e = a.done;
                  a = a.value;
                  return e
                    ? (c[1] = b.i64.cast([-1, 4294967295]))
                    : ((d = a.item), (c[1] = d.taskId));
                });
            },
            function (a) {
              return (function (a) {
                b.logger(a).info(a);
              })(["NewTask", " ", b.i64.to_string(c[1])].join(""));
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
type Sequence = (tasks: (() => Promise<any>)[]) => Promise<any>;

interface Task {
  i64: {
    of_float: (value: number) => BigInt;
    to_string: (value: any) => string;
    cast: (arr: number[]) => BigInt;
  };
  db: {
    table: (index: number) => {
      add: (entry: Record<string, any>) => Promise<any>;
      fetchDesc: (params: any) => {
        filter: (callback: (entry: any) => boolean) => {
          next: () => Promise<{ done: boolean; value: any }>;
        };
      };
    };
  };
  filter: (
    source: any,
    callback: (entry: any) => boolean
  ) => {
    next: () => Promise<{ done: boolean; value: any }>;
  };
  logger: (entry: any) => { info: (message: string) => void };
  sequence: Sequence;
  resolve: (value?: any) => Promise<any>;
}

const issueNewTask = function (...args: any[]): (task: Task) => Promise<any> {
  const task = args[args.length - 1];
  const timestampArray: any[] = [];
  const resultArray: any[] = [];

  return task.sequence([
    async function () {
      return task.sequence([
        async function () {
          timestampArray[0] = task.i64.of_float(Date.now());
          return task.db.table(2).add({
            taskId: undefined,
            queueName: args[0],
            context: task.i64.to_string(args[1]),
            taskValue: args[2],
            enqueueTimestampMs: timestampArray[0],
            httpUrlOverride: args[3],
            timeoutTimestampMs: args[4],
            pluginType: args[5],
            priority: args[6],
            syncGroupId: args[7],
            transportKey: args[8],
            minTimeToSyncTimestampMs: args[9],
          });
        },
        async function () {
          return task
            .filter(
              task.db.table(2).fetchDesc([[[args[0]]], "queueNameTaskId"]),
              function (entry) {
                return (
                  entry.queueName === args[0] &&
                  entry.context === task.i64.to_string(args[1]) &&
                  entry.taskValue === args[2]
                );
              }
            )
            .next()
            .then(function (result) {
              const isDone = result.done;
              const value = result.value;
              timestampArray[1] = isDone
                ? task.i64.cast([-1, 4294967295])
                : value.item.taskId;
            });
        },
        async function () {
          task
            .logger(
              ["NewTask", " ", task.i64.to_string(timestampArray[1])].join("")
            )
            .info(
              ["NewTask", " ", task.i64.to_string(timestampArray[1])].join("")
            );
        },
      ]);
    },
    async function () {
      return task.resolve(resultArray);
    },
  ]);
};

export default issueNewTask;
