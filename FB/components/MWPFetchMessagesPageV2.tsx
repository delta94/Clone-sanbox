__d("MWPFetchMessagesPageV2", ["FBLogger", "LSFactory", "LSIntEnum", "LSIssueMessagesRangeQueryStoredProcedure", "LSMailboxMessagesRangeQueryDirection", "LSMessagingThreadTypeUtil", "MWPFetchMessagesThreadLocks", "asyncToGeneratorRuntime", "nullthrows", "qex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a, b, c, d, e, f, g, h) {
        return i.apply(this, arguments)
    }

    function i() {
        i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, e, f, g, h, i, j) {
            var k, m;
            k = (yield(k = a.tables.messages_ranges_v2__generated).get.apply(k, f));
            if (k == null) return;
            m = h && (yield(m = a.tables.messages_ranges_v2__generated).get.apply(m, h));
            if (m == null && h != null) return;
            h = d("LSMessagingThreadTypeUtil").isArmadilloSecure(g);
            g = i != null ? d("LSMessagingThreadTypeUtil").isArmadilloSecure(i) : !1;
            if (e === "before")
                if (k.hasMoreBefore)
                    if (h) return l(a, b, e, k, j);
                    else return n(a, f, k.threadKey, e);
            else if (m != null)
                if (g) return l(a, b, e, m, j);
                else return n(a, [m.threadKey, m.minTimestampMs, m.minMessageId], m.threadKey, e);
            else return;
            else {
                e;
                if (k.hasMoreAfter)
                    if (h) throw c("FBLogger")("messenger_web_product").mustfix("Not possible to fetch more after for secure messages");
                    else return n(a, f, k.threadKey, e);
                else if (m != null) {
                    g = d("LSMessagingThreadTypeUtil").isArmadilloSecure(c("nullthrows")(i));
                    if (g) throw c("FBLogger")("messenger_web_product").mustfix("Not possible to fetch more after for secure messages");
                    else return n(a, [m.threadKey, m.minTimestampMs, m.minMessageId], m.threadKey, e)
                } else return
            }
        });
        return i.apply(this, arguments)
    }
    var j = new Map(),
        k = new Map();

    function l(a, b, c, d, e) {
        return m.apply(this, arguments)
    }

    function m() {
        m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, e, f, g) {
            if (c("qex")._("1215") !== !0) {
                var h = d("MWPFetchMessagesThreadLocks").localThreadStatus(j, f.threadKey);
                if (h.state[e]) return;
                try {
                    h.lock[e]();
                    var i = (yield a.tables.messages.index("messageId").get(f.minMessageId));
                    return yield g.fetchSecureMessagesProtocol(a, f.threadKey, i == null ? void 0 : i.primarySortKey, f, e, b)
                } finally {
                    h.release[e]()
                }
            }
        });
        return m.apply(this, arguments)
    }

    function n(a, b, c, d) {
        return o.apply(this, arguments)
    }

    function o() {
        o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e, f, g) {
            f = d("MWPFetchMessagesThreadLocks").localThreadStatus(k, f);
            if (f.state[g]) return;
            try {
                f.lock[g]();
                return yield a.runInTransaction(function () {
                    var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                        var b;
                        b = (yield(b = a.messages_ranges_v2__generated).get.apply(b, e));
                        if (!b) return;
                        if (b.isLoadingBefore && g === "before") return;
                        if (b.isLoadingAfter && g === "after") return;
                        return c("LSIssueMessagesRangeQueryStoredProcedure")(c("LSFactory")(a), {
                            direction: (h || (h = d("LSIntEnum"))).ofNumber(g === "before" ? c("LSMailboxMessagesRangeQueryDirection").BEFORE : c("LSMailboxMessagesRangeQueryDirection").AFTER),
                            referenceTimestampMs: b.minTimestampMs,
                            threadKey: b.threadKey
                        })
                    });
                    return function (b) {
                        return a.apply(this, arguments)
                    }
                }(), "readwrite", "ui")
            } finally {
                f.release[g]()
            }
        });
        return o.apply(this, arguments)
    }
    g["default"] = a
}), 98);


import FBLogger from "./FBLogger";
import LSFactory from "./LSFactory";
import LSIntEnum from "./LSIntEnum";
import LSIssueMessagesRangeQueryStoredProcedure from "./LSIssueMessagesRangeQueryStoredProcedure";
import LSMailboxMessagesRangeQueryDirection from "./LSMailboxMessagesRangeQueryDirection";
import LSMessagingThreadTypeUtil from "./LSMessagingThreadTypeUtil";
import MWPFetchMessagesThreadLocks from "./MWPFetchMessagesThreadLocks";
import nullthrows from "./nullthrows";
import qex from "./qex";

async function MWPFetchMessagesPageV2(
    db: any,
    numMsgs: number,
    direction: string,
    threadKeyMinRange: any[],
    threadType: bigint,
    newerThreadKeyMinRange: any[] | null,
    newerThreadType: bigint,
    fetchProtocol: any
): Promise<void> {
    let minRange = await db.tables.messages_ranges_v2__generated.get(...threadKeyMinRange);
    if (minRange == null) {
        return;
    }

    let newerMinRange = newerThreadKeyMinRange && (await db.tables.messages_ranges_v2__generated.get(...newerThreadKeyMinRange));
    if (newerMinRange == null && newerThreadKeyMinRange != null) {
        return;
    }

    const isSecure = LSMessagingThreadTypeUtil.isArmadilloSecure(threadType);
    const isNewerSecure = newerThreadType != null ? LSMessagingThreadTypeUtil.isArmadilloSecure(newerThreadType) : false;

    if (direction === "before") {
        if (minRange.hasMoreBefore) {
            if (isSecure) {
                return fetchSecureMessages(db, numMsgs, direction, minRange, fetchProtocol);
            } else {
                return fetchRegularMessages(db, threadKeyMinRange, minRange.threadKey, direction);
            }
        } else if (newerMinRange != null) {
            if (isNewerSecure) {
                return fetchSecureMessages(db, numMsgs, direction, newerMinRange, fetchProtocol);
            } else {
                return fetchRegularMessages(db, [newerMinRange.threadKey, newerMinRange.minTimestampMs, newerMinRange.minMessageId], newerMinRange.threadKey, direction);
            }
        } else {
            return;
        }
    } else {
        if (minRange.hasMoreAfter) {
            if (isSecure) {
                throw FBLogger("messenger_web_product").mustfix("Not possible to fetch more after for secure messages");
            } else {
                return fetchRegularMessages(db, threadKeyMinRange, minRange.threadKey, direction);
            }
        } else if (newerMinRange != null) {
            const isNewerSecure = LSMessagingThreadTypeUtil.isArmadilloSecure(nullthrows(newerThreadType));
            if (isNewerSecure) {
                throw FBLogger("messenger_web_product").mustfix("Not possible to fetch more after for secure messages");
            } else {
                return fetchRegularMessages(db, [newerMinRange.threadKey, newerMinRange.minTimestampMs, newerMinRange.minMessageId], newerMinRange.threadKey, direction);
            }
        } else {
            return;
        }
    }
}

const secureThreadLocks = new Map();
const regularThreadLocks = new Map();

async function fetchSecureMessages(
    db: any,
    numMsgs: number,
    direction: string,
    minRange: any,
    fetchProtocol: any
): Promise<void> {
    if (qex._("1215") !== true) {
        const threadStatus = MWPFetchMessagesThreadLocks.localThreadStatus(secureThreadLocks, minRange.threadKey);
        if (threadStatus.state[direction]) {
            return;
        }

        try {
            threadStatus.lock[direction]();
            const message = await db.tables.messages.index("messageId").get(minRange.minMessageId);
            return await fetchProtocol.fetchSecureMessagesProtocol(db, minRange.threadKey, message?.primarySortKey, minRange, direction, numMsgs);
        } finally {
            threadStatus.release[direction]();
        }
    }
}

async function fetchRegularMessages(
    db: any,
    threadKeyMinRange: any[],
    threadKey: string,
    direction: string
): Promise<void> {
    const threadStatus = MWPFetchMessagesThreadLocks.localThreadStatus(regularThreadLocks, threadKey);
    if (threadStatus.state[direction]) {
        return;
    }

    try {
        threadStatus.lock[direction]();
        return await db.runInTransaction(
            async (txn: any) => {
                const minRange = await txn.messages_ranges_v2__generated.get(...threadKeyMinRange);
                if (!minRange) {
                    return;
                }

                if (minRange.isLoadingBefore && direction === "before") {
                    return;
                }

                if (minRange.isLoadingAfter && direction === "after") {
                    return;
                }

                return LSIssueMessagesRangeQueryStoredProcedure(LSFactory(txn), {
                    direction: LSIntEnum.ofNumber(direction === "before" ? LSMailboxMessagesRangeQueryDirection.BEFORE : LSMailboxMessagesRangeQueryDirection.AFTER),
                    referenceTimestampMs: minRange.minTimestampMs,
                    threadKey: minRange.threadKey,
                });
            },
            "readwrite",
            "ui"
        );
    } finally {
        threadStatus.release[direction]();
    }
}

export default MWPFetchMessagesPageV2;