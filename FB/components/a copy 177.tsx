__d("LSIssueMessagesRangeQueryStoredProcedure", ["LSIssueMessagesRangeQuery", "cr:8709"], (function (a, b, c, d, e, f, g) {
    function a(a, b) {
        var d = [];
        d[0] = b.threadKey;
        d[1] = b.referenceTimestampMs;
        d[2] = b.direction;
        return c("LSIssueMessagesRangeQuery").apply(void 0, d.concat([a]))
    }
    g["default"] = a
}), 98);

import LSIssueMessagesRangeQuery from './LSIssueMessagesRangeQuery';

interface Thread {
  threadKey: string;
  referenceTimestampMs: number;
  direction: string;
}

const LSIssueMessagesRangeQueryStoredProcedure = (LSIssueMessagesRangeQueryInstance: any, threadInfo: Thread): any => {
  const { threadKey, referenceTimestampMs, direction } = threadInfo;
  const parameters: any[] = [threadKey, referenceTimestampMs, direction];
  return LSIssueMessagesRangeQuery(...parameters, LSIssueMessagesRangeQueryInstance);
};

export default LSIssueMessagesRangeQueryStoredProcedure;
