__d(
  "LSPlatformWaitForTaskCompletion",
  [
    "I64",
    "Promise",
    "asyncToGeneratorRuntime",
    "emptyFunction",
    "err",
    "promiseDone",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a, b, c) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e, g) {
        var j = new Set(),
          k = [],
          l = 0,
          m = !0,
          n,
          o,
          p = new (i || (i = b("Promise")))(function (a, b) {
            (n = a), (o = b);
          }),
          q = c("uuidv4")(),
          r = !0,
          s = yield a.runInTransaction(
            (function () {
              var i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                i
              ) {
                yield i.mailbox_task_completion_notification_context.add({
                  notificationName: g,
                  notificationScopeKey: q,
                });
                var p = a.tables.pending_tasks.subscribe(function (a, b) {
                    a = (h || (h = d("I64"))).to_string(a[0]);
                    b.operation === "add" || b.operation === "put"
                      ? j.add(a)
                      : j["delete"](a);
                  }),
                  t = c("emptyFunction"),
                  u = a.tables.mailbox_task_completion_api_tasks.subscribe(
                    function (a, b) {
                      if (
                        b.operation === "add" ||
                        (b.operation === "put" &&
                          b.value.notificationScopeKey === q)
                      ) {
                        a = (h || (h = d("I64"))).to_string(b.value.taskId);
                        j["delete"](a);
                        b = b.value.success;
                        b == null
                          ? r && (k.push(a), (l += 1))
                          : ((m = b && m), (l -= 1));
                      }
                    }
                  );
                t = a.subscribeToCommit(function () {
                  l === 0 &&
                    j.size === 0 &&
                    (u(),
                    p(),
                    t(),
                    c("promiseDone")(
                      a.runInTransaction(
                        (function () {
                          var a = b("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (a) {
                              for (var b of k)
                                yield a.mailbox_task_completion_api_tasks[
                                  "delete"
                                ]((h || (h = d("I64"))).of_string(b));
                            }
                          );
                          return function (b) {
                            return a.apply(this, arguments);
                          };
                        })(),
                        "readwrite",
                        "background",
                        void 0,
                        f.id + ":125"
                      )
                    ),
                    m
                      ? n(s)
                      : o(c("err")("Not all tasks for " + g + " succeeded")));
                });
                try {
                  var v = yield e(i);
                  yield i.mailbox_task_completion_notification_context[
                    "delete"
                  ](q);
                  return v;
                } catch (a) {
                  t();
                  u();
                  p();
                  throw a;
                }
              });
              return function (a) {
                return i.apply(this, arguments);
              };
            })(),
            "readwrite",
            void 0,
            void 0,
            f.id + ":61"
          );
        r = !1;
        return p;
      });
      return j.apply(this, arguments);
    }
    g["default"] = a;
  },
  98
);

import { I64 } from "I64";
import { Promise as _Promise } from "Promise";
import asyncToGeneratorRuntime from "asyncToGeneratorRuntime";
import emptyFunction from "emptyFunction";
import { err } from "err";
import { promiseDone } from "promiseDone";
import { uuidv4 } from "uuidv4";

type TaskCompletionResult = {
  notificationName: string;
  notificationScopeKey: string;
};

type PendingTask = {
  operation: string;
  value: {
    notificationScopeKey: string;
    taskId: string;
    success: boolean | null;
  };
};

async function LSPlatformWaitForTaskCompletion(
  a: any,
  b: (i: any) => Promise<any>,
  g: string
): Promise<void> {
  const taskSet = new Set<string>();
  const pendingTaskIds: string[] = [];
  let pendingTaskCount = 0;
  let allTasksSucceeded = true;
  let resolveFn: (value?: void | PromiseLike<void>) => void;
  let rejectFn: (reason?: any) => void;

  const taskCompletionPromise = new Promise<void>((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
  });

  const notificationScopeKey = uuidv4();
  let isRunning = true;

  await a.runInTransaction(
    async (i: any) => {
      await i.mailbox_task_completion_notification_context.add({
        notificationName: g,
        notificationScopeKey,
      });

      const pendingTasksSubscription = a.tables.pending_tasks.subscribe(
        (task: I64[], change: { operation: string }) => {
          const taskId = I64.toString(task[0]);
          if (change.operation === "add" || change.operation === "put") {
            taskSet.add(taskId);
          } else {
            taskSet.delete(taskId);
          }
        }
      );

      const taskCompletionApiTasksSubscription =
        a.tables.mailbox_task_completion_api_tasks.subscribe(
          (task: I64[], change: PendingTask) => {
            if (
              change.operation === "add" ||
              (change.operation === "put" &&
                change.value.notificationScopeKey === notificationScopeKey)
            ) {
              const taskId = I64.toString(change.value.taskId);
              taskSet.delete(taskId);
              const success = change.value.success;
              if (success == null) {
                if (isRunning) {
                  pendingTaskIds.push(taskId);
                  pendingTaskCount += 1;
                }
              } else {
                allTasksSucceeded = success && allTasksSucceeded;
                pendingTaskCount -= 1;
              }
            }
          }
        );

      const commitSubscription = a.subscribeToCommit(() => {
        if (pendingTaskCount === 0 && taskSet.size === 0) {
          taskCompletionApiTasksSubscription();
          pendingTasksSubscription();
          commitSubscription();
          promiseDone(
            a.runInTransaction(
              async (i: any) => {
                for (const taskId of pendingTaskIds) {
                  await i.mailbox_task_completion_api_tasks.delete(
                    I64.ofString(taskId)
                  );
                }
              },
              "readwrite",
              "background",
              undefined,
              `${f.id}:125`
            )
          );
          allTasksSucceeded
            ? resolveFn()
            : rejectFn(new Error(`Not all tasks for ${g} succeeded`));
        }
      });

      try {
        const transactionResult = await b(i);
        await i.mailbox_task_completion_notification_context.delete(
          notificationScopeKey
        );
        return transactionResult;
      } catch (error) {
        commitSubscription();
        taskCompletionApiTasksSubscription();
        pendingTasksSubscription();
        throw error;
      }
    },
    "readwrite",
    undefined,
    undefined,
    `${f.id}:61`
  );

  isRunning = false;
  return taskCompletionPromise;
}

export default LSPlatformWaitForTaskCompletion;
