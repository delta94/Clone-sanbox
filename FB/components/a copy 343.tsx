__d(
  "MWV2LogMessageClick",
  [
    "I64",
    "LSMessagingThreadTypeUtil",
    "Promise",
    "ReQL",
    "UserAgentData",
    "promiseDone",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = c("requireDeferred")("LsMessageClickFalcoEvent").__setRef(
        "MWV2LogMessageClick"
      );
    function a(a, e, f, g) {
      var k = e.threadKey;
      c("promiseDone")(
        d("ReQL")
          .firstAsync(
            d("ReQL").fromTableAscending(a.tables.threads).getKeyRange(k)
          )
          .then(function (a) {
            a != null &&
              !d("LSMessagingThreadTypeUtil").isArmadilloSecure(a.threadType) &&
              j.onReady(function (a) {
                a.log(function () {
                  var a;
                  return {
                    click: { category: 2 },
                    click_target: { type: f },
                    extra: JSON.stringify({
                      action: (a = g) != null ? a : void 0,
                      browserName: c("UserAgentData").browserName,
                    }),
                    message: {
                      id: e.messageId,
                      sender_id: void 0,
                      sent_time: (i || (i = d("I64"))).to_float(e.timestampMs),
                    },
                    thread: {
                      id: i.to_string(e.threadKey),
                      key: void 0,
                      type: void 0,
                    },
                    xma: void 0,
                  };
                });
              });
            return (h || (h = b("Promise"))).resolve();
          })
      );
    }
    g.log = a;
  },
  98
);

import { I64 } from "I64";
import { isArmadilloSecure } from "LSMessagingThreadTypeUtil";
import { Promise as BluebirdPromise } from "Promise";
import { ReQL, fromTableAscending, firstAsync } from "ReQL";
import { browserName } from "UserAgentData";
import { promiseDone } from "promiseDone";
import { requireDeferred } from "requireDeferred";

const LsMessageClickFalcoEvent = requireDeferred(
  "LsMessageClickFalcoEvent"
).__setRef("MWV2LogMessageClick");

interface Tables {
  threads: any;
}

interface MessageEvent {
  threadKey: string;
  messageId: string;
  timestampMs: string;
}

export function logMessageClick(
  store: { tables: Tables },
  event: MessageEvent,
  targetType: number,
  action?: string
): void {
  const { threadKey } = event;

  promiseDone(
    firstAsync(
      fromTableAscending(store.tables.threads).getKeyRange(threadKey)
    ).then((thread) => {
      if (thread != null && !isArmadilloSecure(thread.threadType)) {
        LsMessageClickFalcoEvent.onReady((logger) => {
          logger.log(() => ({
            click: { category: 2 },
            click_target: { type: targetType },
            extra: JSON.stringify({
              action: action ?? undefined,
              browserName: browserName,
            }),
            message: {
              id: event.messageId,
              sender_id: undefined,
              sent_time: I64.to_float(event.timestampMs),
            },
            thread: {
              id: I64.to_string(event.threadKey),
              key: undefined,
              type: undefined,
            },
            xma: undefined,
          }));
        });

        return BluebirdPromise.resolve();
      }
    })
  );
}
