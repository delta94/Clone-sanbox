__d(
  "useMWNextAttachment",
  ["ReQL", "ReQLSuspense", "justknobx", "useReStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, b) {
      var e = (h || (h = c("useReStore")))(),
        g = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableAscending(
                e.tables.messages.index("messageDisplayOrder")
              )
              .getKeyRange(b.threadKey)
              .bounds({
                gt: d("ReQL").key(b.primarySortKey, b.secondarySortKey),
              })
              .filter(function (a) {
                return !a.isUnsent;
              });
          },
          [e, b.threadKey, b.primarySortKey],
          f.id + ":25"
        ),
        i = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableAscending(e.tables.messages.index("messageId"))
              .bounds({ gt: d("ReQL").key(a.messageId) })
              .filter(function (a) {
                return !a.isUnsent;
              });
          },
          [e, a.messageId],
          f.id + ":39"
        ),
        j = d("ReQLSuspense").useFirst(
          function () {
            return c("justknobx")._("2376")
              ? g != null
                ? d("ReQL")
                    .fromTableAscending(e.tables.attachments)
                    .getKeyRange(g.threadKey, g.messageId)
                : d("ReQL").empty()
              : i != null
              ? d("ReQL")
                  .fromTableAscending(e.tables.attachments)
                  .getKeyRange(i.threadKey, i.messageId)
              : d("ReQL").empty();
          },
          [e, g, i],
          f.id + ":47"
        );
      return j;
    }
    g["default"] = a;
  },
  98
);

import { ReQL } from "ReQL";
import { ReQLSuspense } from "ReQLSuspense";
import justknobx from "justknobx";
import useReStore from "useReStore";

interface Message {
  threadKey: string;
  primarySortKey: string;
  secondarySortKey: string;
  messageId: string;
  isUnsent: boolean;
}

interface Attachment {
  threadKey: string;
  messageId: string;
}

function useMWNextAttachment(
  message: Message,
  key: { threadKey: string; primarySortKey: string; secondarySortKey: string }
) {
  const store = useReStore();

  const nextMessage = ReQLSuspense.useFirst(
    () =>
      ReQL.fromTableAscending(
        store.tables.messages.index("messageDisplayOrder")
      )
        .getKeyRange(key.threadKey)
        .bounds({ gt: ReQL.key(key.primarySortKey, key.secondarySortKey) })
        .filter((msg: Message) => !msg.isUnsent),
    [store, key.threadKey, key.primarySortKey],
    "useMWNextAttachment:25"
  );

  const nextMessageById = ReQLSuspense.useFirst(
    () =>
      ReQL.fromTableAscending(store.tables.messages.index("messageId"))
        .bounds({ gt: ReQL.key(message.messageId) })
        .filter((msg: Message) => !msg.isUnsent),
    [store, message.messageId],
    "useMWNextAttachment:39"
  );

  const attachmentQuery = ReQLSuspense.useFirst(
    () => {
      if (justknobx._("2376")) {
        return nextMessage != null
          ? ReQL.fromTableAscending(store.tables.attachments).getKeyRange(
              nextMessage.threadKey,
              nextMessage.messageId
            )
          : ReQL.empty();
      } else {
        return nextMessageById != null
          ? ReQL.fromTableAscending(store.tables.attachments).getKeyRange(
              nextMessageById.threadKey,
              nextMessageById.messageId
            )
          : ReQL.empty();
      }
    },
    [store, nextMessage, nextMessageById],
    "useMWNextAttachment:47"
  );

  return attachmentQuery;
}

export default useMWNextAttachment;
