__d("LSFilteredThreadsRangesQuery", ["LSGetCursor", "LSIssueNewTaskAndGetTaskID"], (function (a, b, c, d, e, f) {
    function a() {
        var a = arguments,
            c = a[a.length - 1],
            d = [],
            e = [];
        return c.sequence([function (e) {
            return c.i64.neq(a[10], void 0) ? d[0] = a[10] : d[0] = c.i64.cast([0, 0]), a[11] !== void 0 ? d[1] = a[11] : d[1] = "", (a[2] && c.i64.neq(a[7], void 0) && c.i64.neq(a[4], void 0) || a[3] && c.i64.neq(a[6], void 0) && c.i64.neq(a[5], void 0)) && !(a[2] && c.i64.neq(a[7], void 0) && c.i64.neq(a[4], void 0) && a[3] && c.i64.neq(a[6], void 0) && c.i64.neq(a[5], void 0)) ? c.sequence([function (e) {
                return d[3] = a[4] == null ? c.i64.cast([-2147483648, 0]) : a[4], d[4] = a[7] == null ? c.i64.cast([0, 1]) : a[7], d[10] = c.i64.gt(d[4], c.i64.cast([0, 1])) && c.i64.gt(d[3], c.i64.cast([-2147483648, 0])), c.storedProcedure(b("LSGetCursor"), c.i64.cast([0, 1])).then(function (a) {
                    return a = a, d[2] = a[0], a
                })
            }, function (e) {
                return d[5] = new c.Map(), d[5].set("cursor", d[2]), d[5].set("filter", a[1]), d[5].set("is_after", a[3]), d[5].set("parent_thread_key", a[0]), d[5].set("reference_activity_timestamp", a[3] ? a[6] : a[7]), d[5].set("reference_thread_key", a[3] ? a[5] : a[4]), d[5].set("secondary_filter", d[0]), d[5].set("filter_value", d[1]), d[5].set("sync_group", c.i64.cast([0, 1])), c.i64.gt(c.i64.cast([0, 0]), c.i64.cast([0, 0])) ? (d[11] = c.i64.of_float(Date.now()), d[6] = c.i64.add(d[11], c.i64.cast([0, 0]))) : d[6] = c.i64.cast([0, 0]), d[7] = c.toJSON(d[5]), c.storedProcedure(b("LSIssueNewTaskAndGetTaskID"), "trq", c.i64.cast([0, 313]), d[7], void 0, void 0, c.i64.cast([0, 0]), c.i64.cast([0, 0]), void 0, void 0, d[6], c.i64.cast([0, 0])).then(function (a) {
                    return a = a, d[8] = a[0], a
                })
            }, function (b) {
                return c.filter(c.db.table(247).fetch([
                    [
                        [a[0]]
                    ]
                ]), function (b) {
                    return c.i64.eq(b.parentThreadKey, a[0]) && c.i64.eq(b.threadRangeFilter, a[1]) && c.i64.eq(b.secondaryThreadRangeFilter, d[0]) && b.threadRangeFilterValue === d[1]
                }).next().then(function (b, e) {
                    e = b.done;
                    b = b.value;
                    return e ? c.db.table(247).add({
                        folderName: "",
                        parentThreadKey: a[0],
                        minThreadKey: d[3] == null ? c.i64.cast([-2147483648, 0]) : d[3],
                        minLastActivityTimestampMs: d[4] == null ? c.i64.cast([0, 1]) : d[4],
                        threadRangeFilter: a[1],
                        secondaryThreadRangeFilter: d[0],
                        threadRangeFilterValue: d[1],
                        maxLastActivityTimestampMs: c.i64.cast([0, 1]),
                        maxThreadKey: c.i64.cast([-2147483648, 0]),
                        isLoadingBefore: !0,
                        isLoadingAfter: !1,
                        hasMoreBefore: d[10],
                        hasMoreAfter: !1
                    }) : (b.item, c.forEach(c.filter(c.db.table(247).fetch([
                        [
                            [a[0]]
                        ]
                    ]), function (b) {
                        return c.i64.eq(b.parentThreadKey, a[0]) && c.i64.eq(b.threadRangeFilter, a[1]) && c.i64.eq(b.secondaryThreadRangeFilter, d[0]) && b.threadRangeFilterValue === d[1]
                    }), function (a) {
                        var b = a.update;
                        a.item;
                        return b({
                            isLoadingBefore: !0,
                            isLoadingAfter: !1,
                            hasMoreBefore: d[10],
                            hasMoreAfter: !1
                        })
                    }))
                })
            }]) : c.resolve()
        }, function (a) {
            return c.resolve(e)
        }])
    }
    e.exports = a
}), null);



import { LSGetCursor, LSIssueNewTaskAndGetTaskID } from "./dependencies";

function LSFilteredThreadsRangesQuery(...args) {
    const [c] = args.slice(-1);
    let d = [];
    let e = [];

    return c.sequence([
        function (e) {
            if (c.i64.neq(args[10], undefined)) {
                d[0] = args[10];
            } else {
                d[0] = c.i64.cast([0, 0]);
            }

            if (args[11] !== undefined) {
                d[1] = args[11];
            } else {
                d[1] = "";
            }

            if (
                (args[2] && c.i64.neq(args[7], undefined) && c.i64.neq(args[4], undefined)) ||
                (args[3] && c.i64.neq(args[6], undefined) && c.i64.neq(args[5], undefined))
            ) {
                if (
                    !(args[2] && c.i64.neq(args[7], undefined) && c.i64.neq(args[4], undefined) && args[3] && c.i64.neq(args[6], undefined) && c.i64.neq(args[5], undefined))
                ) {
                    return c.sequence([
                        function (e) {
                            d[3] = args[4] == null ? c.i64.cast([-2147483648, 0]) : args[4];
                            d[4] = args[7] == null ? c.i64.cast([0, 1]) : args[7];
                            d[10] = c.i64.gt(d[4], c.i64.cast([0, 1])) && c.i64.gt(d[3], c.i64.cast([-2147483648, 0]));

                            return c.storedProcedure(b("LSGetCursor"), c.i64.cast([0, 1])).then(function (a) {
                                d[2] = a[0];
                                return a;
                            });
                        },
                        function (e) {
                            d[5] = new c.Map();
                            d[5].set("cursor", d[2]);
                            d[5].set("filter", args[1]);
                            d[5].set("is_after", args[3]);
                            d[5].set("parent_thread_key", args[0]);
                            d[5].set("reference_activity_timestamp", args[3] ? args[6] : args[7]);
                            d[5].set("reference_thread_key", args[3] ? args[5] : args[4]);
                            d[5].set("secondary_filter", d[0]);
                            d[5].set("filter_value", d[1]);
                            d[5].set("sync_group", c.i64.cast([0, 1]));

                            if (c.i64.gt(c.i64.cast([0, 0]), c.i64.cast([0, 0]))) {
                                d[11] = c.i64.of_float(Date.now());
                                d[6] = c.i64.add(d[11], c.i64.cast([0, 0]));
                            } else {
                                d[6] = c.i64.cast([0, 0]);
                            }

                            d[7] = c.toJSON(d[5]);

                            return c.storedProcedure(
                                b("LSIssueNewTaskAndGetTaskID"),
                                "trq",
                                c.i64.cast([0, 313]),
                                d[7],
                                undefined,
                                undefined,
                                c.i64.cast([0, 0]),
                                c.i64.cast([0, 0]),
                                undefined,
                                undefined,
                                d[6],
                                c.i64.cast([0, 0])
                            ).then(function (a) {
                                d[8] = a[0];
                                return a;
                            });
                        },
                        function (b) {
                            return c
                                .filter(
                                    c.db.table(247).fetch([
                                        [
                                            [args[0]]
                                        ]
                                    ]),
                                    function (b) {
                                        return (
                                            c.i64.eq(b.parentThreadKey, args[0]) &&
                                            c.i64.eq(b.threadRangeFilter, args[1]) &&
                                            c.i64.eq(b.secondaryThreadRangeFilter, d[0]) &&
                                            b.threadRangeFilterValue === d[1]
                                        );
                                    }
                                )
                                .next()
                                .then(function (b, e) {
                                    e = b.done;
                                    b = b.value;

                                    if (e) {
                                        return c.db.table(247).add({
                                            folderName: "",
                                            parentThreadKey: args[0],
                                            minThreadKey: d[3] == null ? c.i64.cast([-2147483648, 0]) : d[3],
                                            minLastActivityTimestampMs: d[4] == null ? c.i64.cast([0, 1]) : d[4],
                                            threadRangeFilter: args[1],
                                            secondaryThreadRangeFilter: d[0],
                                            threadRangeFilterValue: d[1],
                                            maxLastActivityTimestampMs: c.i64.cast([0, 1]),
                                            maxThreadKey: c.i64.cast([-2147483648, 0]),
                                            isLoadingBefore: true,
                                            isLoadingAfter: false,
                                            hasMoreBefore: d[10],
                                            hasMoreAfter: false
                                        });
                                    } else {
                                        b.item;

                                        return c.forEach(
                                            c.filter(
                                                c.db.table(247).fetch([
                                                    [
                                                        [args[0]]
                                                    ]
                                                ]),
                                                function (b) {
                                                    return (
                                                        c.i64.eq(b.parentThreadKey, args[0]) &&
                                                        c.i64.eq(b.threadRangeFilter, args[1]) &&
                                                        c.i64.eq(b.secondaryThreadRangeFilter, d[0]) &&
                                                        b.threadRangeFilterValue === d[1]
                                                    );
                                                }
                                            ),
                                            function (a) {
                                                var b = a.update;
                                                a.item;

                                                return b({
                                                    isLoadingBefore: true,
                                                    isLoadingAfter: false,
                                                    hasMoreBefore: d[10],
                                                    hasMoreAfter: false
                                                });
                                            }
                                        );
                                    }
                                });
                        }
                    ]);
                }
            }

            return c.resolve();
        },
        function (a) {
            return c.resolve(e);
        }
    ]);
}

export default LSFilteredThreadsRangesQuery;
