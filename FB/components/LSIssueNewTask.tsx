__d("LSIssueNewTask", [], (function (a, b, c, d, e, f) {
    function a() {
        var a = arguments,
            b = a[a.length - 1],
            c = [],
            d = [];
        return b.sequence([function (d) {
            return b.sequence([function (d) {
                return c[0] = b.i64.of_float(Date.now()), b.db.table(2).add({
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
                    minTimeToSyncTimestampMs: a[9]
                })
            }, function (d) {
                return b.filter(b.db.table(2).fetchDesc([
                    [
                        [a[0]]
                    ], "queueNameTaskId"
                ]), function (c) {
                    return c.queueName === a[0] && c.context === b.i64.to_string(a[1]) && c.taskValue === a[2]
                }).next().then(function (a, d) {
                    var e = a.done;
                    a = a.value;
                    return e ? c[1] = b.i64.cast([-1, 4294967295]) : (d = a.item, c[1] = d.taskId)
                })
            }, function (a) {
                return function (a) {
                    b.logger(a).info(a)
                }(["NewTask", " ", b.i64.to_string(c[1])].join(""))
            }])
        }, function (a) {
            return b.resolve(d)
        }])
    }
    e.exports = a
}), null);

interface Task {
    taskId: bigint | undefined;
    queueName: string;
    context: string;
    taskValue: string;
    enqueueTimestampMs: bigint;
    httpUrlOverride: string | undefined;
    timeoutTimestampMs: bigint | undefined;
    pluginType: bigint | undefined;
    priority: bigint | undefined;
    syncGroupId: bigint | undefined;
    transportKey: bigint | undefined;
    minTimeToSyncTimestampMs: bigint | undefined;
  }
  
  const LSIssueNewTask = (...args: any[]): Promise<any> => {
    const context = args[args.length - 1];
    const taskData: (bigint | undefined)[] = [];
    const result: any[] = [];
  
    return context.sequence([
      (resolve: any) =>
        context.sequence([
          (resolveAdd: any) => {
            taskData[0] = context.i64.of_float(Date.now());
            return context.db.table(2).add({
              taskId: undefined,
              queueName: args[0],
              context: context.i64.to_string(args[1]),
              taskValue: args[2],
              enqueueTimestampMs: taskData[0],
              httpUrlOverride: args[3],
              timeoutTimestampMs: args[4],
              pluginType: args[5],
              priority: args[6],
              syncGroupId: args[7],
              transportKey: args[8],
              minTimeToSyncTimestampMs: args[9],
            });
          },
          (resolveFetch: any) =>
            context.filter(
              context.db.table(2).fetchDesc([[[args[0]]], "queueNameTaskId"]),
              (task: Task) =>
                task.queueName === args[0] &&
                task.context === context.i64.to_string(args[1]) &&
                task.taskValue === args[2]
            ).next().then((fetchResult: { done: boolean, value: { item: Task } }) => {
              const { done, value } = fetchResult;
              if (done) {
                taskData[1] = context.i64.cast([-1, 4294967295]);
              } else {
                const { item } = value;
                taskData[1] = item.taskId;
              }
            }),
          (resolveLog: any) =>
            ((logMessage: string) => {
              context.logger(logMessage).info(logMessage);
            })(["NewTask", " ", context.i64.to_string(taskData[1])].join("")),
        ]),
      (resolveResult: any) => context.resolve(result),
    ]);
  };
  
  export { LSIssueNewTask };