__d("MAWFetchCutoverMessages", ["I64", "LSFactory", "LSIssueMessagesRangeQueryStoredProcedure", "MAWBridgeSendAndReceive", "MAWDbMsg", "MAWMiActOnActThreadReady", "MWEncryptedBackupsIssueRangeQueryDeferred", "Promise", "ReQL", "WATagsLogger", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["useFetchSecureMessages: threadJid: ", " threadId: ", " minMsgSortOrderTsResponse ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["MAWFetchCutoverMessages: response is ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["'MAWFetchCutoverMessages: start loadMoreMsgs'"]);
        l = function () {
            return a
        };
        return a
    }
    var m = d("WATagsLogger").TAGS(["labyrinth_web", "useFetchSecureMessages"]);

    function n(a, d, e, f) {
        return a.runInTransaction(function (a) {
            return f != null && e != null ? c("LSIssueMessagesRangeQueryStoredProcedure")(c("LSFactory")(a), {
                direction: d,
                referenceTimestampMs: e.minTimestampMs,
                threadKey: f
            }) : (i || (i = b("Promise"))).resolve()
        }, "readwrite")
    }

    function a(a, b, c, d, e) {
        return o.apply(this, arguments)
    }

    function o() {
        o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c, e, f) {
            var g = (yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.tables.messages_ranges_v2__generated).getKeyRange(c))),
                i = (yield d("ReQL").firstAsync(e != null ? d("ReQL").fromTableAscending(a.tables.messages_ranges_v2__generated).getKeyRange(e) : d("ReQL").empty()));
            if (g == null) return;
            var o = g.hasMoreBefore,
                p = d("MAWDbMsg").toMsgId(g.minMessageId);
            return d("MAWMiActOnActThreadReady").onActThreadReady(a.tables, c, "MAWFetchMoreMessages", function (c, g, q) {
                m.LOG(l());
                return d("MAWBridgeSendAndReceive").sendAndReceive("backend", "loadMoreMsgs", {
                    chatJid: q,
                    direction: "before",
                    numMsgs: f,
                    offsetMsgId: p,
                    threadId: g
                }).then(function (c) {
                    m.LOG(k(), c.hasMoreBefore.toString());
                    if (c.hasMoreBefore) return;
                    return d("MAWBridgeSendAndReceive").sendAndReceive("backend", "getMaybeNextNonAdminMsgSortOrderMs", {
                        mayBeAdminMsgId: p,
                        threadId: g
                    }).then(function (c) {
                        m.LOG(j(), q, g, c.minMsgTimestampMs);
                        d("MWEncryptedBackupsIssueRangeQueryDeferred").issueRangeQueryDeferred({
                            db: a,
                            newerNumMessages: (h || (h = d("I64"))).zero,
                            numMessages: h.of_string("10"),
                            sortOrderMs: h.of_float(c.minMsgTimestampMs),
                            threadId: g
                        });
                        if (!o) return n(a, b, i, e)
                    })
                })
            })
        });
        return o.apply(this, arguments)
    }
    g["default"] = a
}), 98);

import { I64 } from "I64";
import { LSFactory } from "LSFactory";
import { LSIssueMessagesRangeQueryStoredProcedure } from "./LSIssueMessagesRangeQueryStoredProcedure";
import { MAWBridgeSendAndReceive } from "./MAWBridgeSendAndReceive";
import { MAWDbMsg } from "./MAWDbMsg";
import { MAWMiActOnActThreadReady } from "./MAWMiActOnActThreadReady";
import { MWEncryptedBackupsIssueRangeQueryDeferred } from "./MWEncryptedBackupsIssueRangeQueryDeferred";
import { ReQL } from "./ReQL";
import { WATagsLogger } from "./WATagsLogger";

const TAGS = WATagsLogger.TAGS(["labyrinth_web", "useFetchSecureMessages"]);

function logUseFetchSecureMessages(threadJid: string, threadId: string, minMsgSortOrderTsResponse: string) {
    TAGS.LOG`useFetchSecureMessages: threadJid: ${threadJid} threadId: ${threadId} minMsgSortOrderTsResponse ${minMsgSortOrderTsResponse}`;
}

function logResponse(response: string) {
    TAGS.LOG`MAWFetchCutoverMessages: response is ${response}`;
}

function logStart() {
    TAGS.LOG`'MAWFetchCutoverMessages: start loadMoreMsgs'`;
}

async function runInTransaction(
    db: any,
    direction: string,
    referenceTimestampMs: { minTimestampMs: number } | null,
    threadKey: string | null
): Promise<void> {
    return db.runInTransaction((txn: any) => {
        if (threadKey != null && referenceTimestampMs != null) {
            return LSIssueMessagesRangeQueryStoredProcedure(LSFactory(txn), {
                direction,
                referenceTimestampMs: referenceTimestampMs.minTimestampMs,
                threadKey,
            });
        } else {
            return Promise.resolve();
        }
    }, "readwrite");
}

export default async function MAWFetchCutoverMessages(
    db: any,
    direction: string,
    threadId: string,
    newerThreadId: string | null,
    numMsgs: number
): Promise<void> {
    const minRange = await ReQL.firstAsync(ReQL.fromTableAscending(db.tables.messages_ranges_v2__generated).getKeyRange(threadId));
    const newerMinRange = await ReQL.firstAsync(
        newerThreadId != null
            ? ReQL.fromTableAscending(db.tables.messages_ranges_v2__generated).getKeyRange(newerThreadId)
            : ReQL.empty()
    );

    if (minRange == null) {
        return;
    }

    const hasMoreBefore = minRange.hasMoreBefore;
    const offsetMsgId = MAWDbMsg.toMsgId(minRange.minMessageId);

    return MAWMiActOnActThreadReady.onActThreadReady(db.tables, threadId, "MAWFetchMoreMessages", async (_, threadId, chatJid) => {
        logStart();

        const response = await MAWBridgeSendAndReceive.sendAndReceive("backend", "loadMoreMsgs", {
            chatJid,
            direction: "before",
            numMsgs,
            offsetMsgId,
            threadId,
        });

        logResponse(response.hasMoreBefore.toString());

        if (!response.hasMoreBefore) {
            const result = await MAWBridgeSendAndReceive.sendAndReceive("backend", "getMaybeNextNonAdminMsgSortOrderMs", {
                mayBeAdminMsgId: offsetMsgId,
                threadId,
            });

            logUseFetchSecureMessages(chatJid, threadId, result.minMsgTimestampMs);

            MWEncryptedBackupsIssueRangeQueryDeferred.issueRangeQueryDeferred({
                db,
                newerNumMessages: I64.zero,
                numMessages: I64.of_string("10"),
                sortOrderMs: I64.of_float(result.minMsgTimestampMs),
                threadId,
            });

            if (!hasMoreBefore) {
                return runInTransaction(db, direction, newerMinRange, newerThreadId);
            }
        }
    });
}