__d(
  "LSIssueMessagesRangeQuery",
  ["LSGetCursor", "LSIssueNewTask"],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        c = a[a.length - 1],
        d = [],
        e = [];
      return c.sequence([
        function (e) {
          return (
            (d[2] = c.i64.eq(a[2], c.i64.cast([-1, 4294967295]))
              ? c.i64.cast([0, 0])
              : a[2]),
            c
              .islc(
                c.filter(c.db.table(13).fetchDesc([[[a[0]]]]), function (b) {
                  return (
                    c.i64.eq(b.threadKey, a[0]) &&
                    (c.i64.eq(b.minTimestampMs, void 0) ||
                      c.i64.le(b.minTimestampMs, a[1]))
                  );
                }),
                0,
                c.i64.to_float(c.i64.cast([0, 1]))
              )
              .next()
              .then(function (e, f) {
                var g = e.done;
                e = e.value;
                return g
                  ? (d[0] = !1)
                  : ((f = e.item),
                    c.sequence([
                      function (e) {
                        return (
                          (d[5] = f.threadKey),
                          (d[6] = c.i64.cast([0, 0])),
                          (d[7] = f.minTimestampMs),
                          (d[8] = f.minMessageId),
                          c.i64.eq(d[2], c.i64.cast([0, 1]))
                            ? (d[3] = !f.isLoadingAfter)
                            : (d[3] = !f.isLoadingBefore),
                          d[3]
                            ? c.sequence([
                                function (e) {
                                  return (
                                    c.i64.eq(d[2], c.i64.cast([0, 1]))
                                      ? (d[9] = f.hasMoreAfter)
                                      : (d[9] = f.hasMoreBefore),
                                    d[9]
                                      ? c.sequence([
                                          function (a) {
                                            return c.i64.eq(
                                              d[2],
                                              c.i64.cast([0, 1])
                                            )
                                              ? c.sequence([
                                                  function (a) {
                                                    return c.forEach(
                                                      c.filter(
                                                        c.db
                                                          .table(13)
                                                          .fetch([
                                                            [
                                                              [
                                                                d[5],
                                                                d[7],
                                                                d[8],
                                                              ],
                                                            ],
                                                          ]),
                                                        function (a) {
                                                          return (
                                                            c.i64.eq(
                                                              a.threadKey,
                                                              d[5]
                                                            ) &&
                                                            c.i64.eq(
                                                              c.i64.cast([
                                                                0, 0,
                                                              ]),
                                                              d[6]
                                                            ) &&
                                                            c.i64.eq(
                                                              a.minTimestampMs,
                                                              d[7]
                                                            ) &&
                                                            a.minMessageId ===
                                                              d[8]
                                                          );
                                                        }
                                                      ),
                                                      function (a) {
                                                        var b = a.update;
                                                        a.item;
                                                        return b({
                                                          isLoadingAfter: !0,
                                                        });
                                                      }
                                                    );
                                                  },
                                                  function (a) {
                                                    return (
                                                      (a = [
                                                        f.maxTimestampMs,
                                                        f.maxMessageId,
                                                      ]),
                                                      (d[10] = a[0]),
                                                      (d[11] = a[1]),
                                                      a
                                                    );
                                                  },
                                                ])
                                              : c.sequence([
                                                  function (a) {
                                                    return c.forEach(
                                                      c.filter(
                                                        c.db
                                                          .table(13)
                                                          .fetch([
                                                            [
                                                              [
                                                                d[5],
                                                                d[7],
                                                                d[8],
                                                              ],
                                                            ],
                                                          ]),
                                                        function (a) {
                                                          return (
                                                            c.i64.eq(
                                                              a.threadKey,
                                                              d[5]
                                                            ) &&
                                                            c.i64.eq(
                                                              c.i64.cast([
                                                                0, 0,
                                                              ]),
                                                              d[6]
                                                            ) &&
                                                            c.i64.eq(
                                                              a.minTimestampMs,
                                                              d[7]
                                                            ) &&
                                                            a.minMessageId ===
                                                              d[8]
                                                          );
                                                        }
                                                      ),
                                                      function (a) {
                                                        var b = a.update;
                                                        a.item;
                                                        return b({
                                                          isLoadingBefore: !0,
                                                        });
                                                      }
                                                    );
                                                  },
                                                  function (a) {
                                                    return (
                                                      (a = [d[7], d[8]]),
                                                      (d[10] = a[0]),
                                                      (d[11] = a[1]),
                                                      a
                                                    );
                                                  },
                                                ]);
                                          },
                                          function (b) {
                                            return c.db
                                              .table(9)
                                              .fetch([[[a[0]]]])
                                              .next()
                                              .then(function (b, e) {
                                                var a = b.done;
                                                b = b.value;
                                                return a
                                                  ? (d[12] = c.i64.cast([0, 1]))
                                                  : ((e = b.item),
                                                    (d[19] = e.syncGroup),
                                                    c.i64.neq(d[19], void 0)
                                                      ? (d[18] = d[19])
                                                      : (d[18] = c.i64.cast([
                                                          0, 1,
                                                        ])),
                                                    (d[12] = d[18]));
                                              });
                                          },
                                          function (a) {
                                            return c
                                              .storedProcedure(
                                                b("LSGetCursor"),
                                                d[12]
                                              )
                                              .then(function (a) {
                                                return (
                                                  (a = a), (d[14] = a[0]), a
                                                );
                                              });
                                          },
                                          function (e) {
                                            return (
                                              (d[15] = new c.Map()),
                                              d[15].set("thread_key", a[0]),
                                              d[15].set("direction", d[2]),
                                              d[15].set(
                                                "reference_timestamp_ms",
                                                d[10]
                                              ),
                                              d[15].set(
                                                "reference_message_id",
                                                d[11]
                                              ),
                                              d[15].set("sync_group", d[12]),
                                              d[15].set("cursor", d[14]),
                                              (d[16] = d[15].get("thread_key")),
                                              d[15],
                                              (d[17] = c.toJSON(d[15])),
                                              c.storedProcedure(
                                                b("LSIssueNewTask"),
                                                "mrq.{}"
                                                  .split("{}")
                                                  .join(c.i64.to_string(d[16])),
                                                c.i64.cast([0, 228]),
                                                d[17],
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
                                        ])
                                      : c.resolve()
                                  );
                                },
                                function (a) {
                                  return (d[4] = !0);
                                },
                              ])
                            : c.resolve((d[4] = !1))
                        );
                      },
                      function (a) {
                        return (d[0] = d[4]);
                      },
                    ]));
              })
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

import { LSGetCursor, LSIssueNewTask } from "./dependencies";

interface ThreadItem {
  threadKey: bigint;
  minTimestampMs?: bigint;
  minMessageId: string;
  isLoadingAfter: boolean;
  isLoadingBefore: boolean;
  hasMoreAfter: boolean;
  hasMoreBefore: boolean;
  maxTimestampMs: bigint;
  maxMessageId: string;
}

interface ThreadFetchItem {
  item: ThreadItem;
  update: (updates: Partial<ThreadItem>) => void;
}

interface ThreadFetchResult {
  done: boolean;
  value: ThreadFetchItem;
}

interface SyncGroupItem {
  syncGroup?: bigint;
}

interface SyncGroupFetchResult {
  done: boolean;
  value: {
    item: SyncGroupItem;
  };
}

const LSIssueMessagesRangeQuery = async (...args: any[]): Promise<any[]> => {
  const context = args[args.length - 1];
  const result: any[] = [];

  return context.sequence([
    async () => {
      const direction = context.i64.eq(
        args[2],
        context.i64.cast([-1, 4294967295])
      )
        ? context.i64.cast([0, 0])
        : args[2];

      await context
        .islc(
          context.filter(
            context.db.table(13).fetchDesc([[args[0]]]),
            (thread: ThreadItem) =>
              context.i64.eq(thread.threadKey, args[0]) &&
              (context.i64.eq(thread.minTimestampMs, undefined) ||
                context.i64.le(thread.minTimestampMs!, args[1]))
          ),
          0,
          context.i64.to_float(context.i64.cast([0, 1]))
        )
        .next()
        .then(async (fetchResult: ThreadFetchResult) => {
          const { done, value } = fetchResult;
          if (done) {
            result[0] = false;
          } else {
            const { item: thread } = value;
            await context.sequence([
              async () => {
                const threadKey = thread.threadKey;
                const minTimestampMs = thread.minTimestampMs;
                const minMessageId = thread.minMessageId;
                const isLoading = context.i64.eq(
                  direction,
                  context.i64.cast([0, 1])
                )
                  ? !thread.isLoadingAfter
                  : !thread.isLoadingBefore;

                if (isLoading) {
                  await context.sequence([
                    async () => {
                      const hasMore = context.i64.eq(
                        direction,
                        context.i64.cast([0, 1])
                      )
                        ? thread.hasMoreAfter
                        : thread.hasMoreBefore;

                      if (hasMore) {
                        await context.sequence([
                          async () => {
                            if (
                              context.i64.eq(
                                direction,
                                context.i64.cast([0, 1])
                              )
                            ) {
                              await context.sequence([
                                async () => {
                                  await context.forEach(
                                    context.filter(
                                      context.db
                                        .table(13)
                                        .fetch([
                                          [
                                            [
                                              threadKey,
                                              minTimestampMs,
                                              minMessageId,
                                            ],
                                          ],
                                        ]),
                                      (threadItem: ThreadItem) =>
                                        context.i64.eq(
                                          threadItem.threadKey,
                                          threadKey
                                        ) &&
                                        context.i64.eq(
                                          context.i64.cast([0, 0]),
                                          context.i64.cast([0, 0])
                                        ) &&
                                        context.i64.eq(
                                          threadItem.minTimestampMs!,
                                          minTimestampMs
                                        ) &&
                                        threadItem.minMessageId === minMessageId
                                    ),
                                    (fetchItem: ThreadFetchItem) => {
                                      const { update } = fetchItem;
                                      return update({ isLoadingAfter: true });
                                    }
                                  );
                                },
                                async () => {
                                  const [maxTimestampMs, maxMessageId] = [
                                    thread.maxTimestampMs,
                                    thread.maxMessageId,
                                  ];
                                  return [maxTimestampMs, maxMessageId];
                                },
                              ]);
                            } else {
                              await context.sequence([
                                async () => {
                                  await context.forEach(
                                    context.filter(
                                      context.db
                                        .table(13)
                                        .fetch([
                                          [
                                            [
                                              threadKey,
                                              minTimestampMs,
                                              minMessageId,
                                            ],
                                          ],
                                        ]),
                                      (threadItem: ThreadItem) =>
                                        context.i64.eq(
                                          threadItem.threadKey,
                                          threadKey
                                        ) &&
                                        context.i64.eq(
                                          context.i64.cast([0, 0]),
                                          context.i64.cast([0, 0])
                                        ) &&
                                        context.i64.eq(
                                          threadItem.minTimestampMs!,
                                          minTimestampMs
                                        ) &&
                                        threadItem.minMessageId === minMessageId
                                    ),
                                    (fetchItem: ThreadFetchItem) => {
                                      const { update } = fetchItem;
                                      return update({ isLoadingBefore: true });
                                    }
                                  );
                                },
                                async () => {
                                  const [refTimestampMs, refMessageId] = [
                                    minTimestampMs,
                                    minMessageId,
                                  ];
                                  return [refTimestampMs, refMessageId];
                                },
                              ]);
                            }
                          },
                          async () => {
                            return context.db
                              .table(9)
                              .fetch([[[args[0]]]])
                              .next()
                              .then((fetchResult: SyncGroupFetchResult) => {
                                const { done, value } = fetchResult;
                                if (done) {
                                  return context.i64.cast([0, 1]);
                                } else {
                                  const { item } = value;
                                  const syncGroup =
                                    item.syncGroup !== undefined
                                      ? item.syncGroup
                                      : context.i64.cast([0, 1]);
                                  return syncGroup;
                                }
                              });
                          },
                          async (syncGroup: bigint) => {
                            return context
                              .storedProcedure(LSGetCursor, syncGroup)
                              .then((cursorResult: any) => {
                                const cursor = cursorResult[0];
                                return cursor;
                              });
                          },
                          async (cursor: any) => {
                            const taskParams = new context.Map();
                            taskParams.set("thread_key", args[0]);
                            taskParams.set("direction", direction);
                            taskParams.set(
                              "reference_timestamp_ms",
                              thread.maxTimestampMs
                            );
                            taskParams.set(
                              "reference_message_id",
                              thread.maxMessageId
                            );
                            taskParams.set("sync_group", syncGroup);
                            taskParams.set("cursor", cursor);

                            const taskParamsJson = context.toJSON(taskParams);

                            return context.storedProcedure(
                              LSIssueNewTask,
                              `mrq.${context.i64.to_string(args[0])}`,
                              context.i64.cast([0, 228]),
                              taskParamsJson,
                              undefined,
                              undefined,
                              context.i64.cast([0, 0]),
                              context.i64.cast([0, 0]),
                              undefined,
                              undefined,
                              context.i64.cast([0, 0]),
                              context.i64.cast([0, 0])
                            );
                          },
                        ]);
                      } else {
                        return context.resolve();
                      }
                    },
                    async () => {
                      result[4] = true;
                    },
                  ]);
                } else {
                  result[4] = false;
                }
              },
            ]);
          }
        });
    },
  ]);
};

export default LSIssueMessagesRangeQuery;
