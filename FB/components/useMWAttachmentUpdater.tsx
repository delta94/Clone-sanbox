__d(
  "useMWAttachmentUpdater",
  ["Int64Hooks", "ReQL", "asyncToGeneratorRuntime", "useReStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var e = a.attachmentFbid,
        g = a.messageId,
        i = a.threadKey,
        j = (h || (h = c("useReStore")))();
      return d("Int64Hooks").useCallbackInt64(
        (function () {
          var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            yield j.runInTransaction(
              (function () {
                var c = b("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (b) {
                    b = b.attachments;
                    var c = yield d("ReQL").firstAsync(
                      d("ReQL").fromTableAscending(b).getKeyRange(i, g, e)
                    );
                    c != null &&
                      (yield b.put(babelHelpers["extends"]({}, c, a)));
                  }
                );
                return function (a) {
                  return c.apply(this, arguments);
                };
              })(),
              "readwrite",
              void 0,
              void 0,
              f.id + ":26"
            );
          });
          return function (b) {
            return a.apply(this, arguments);
          };
        })(),
        [j, i, g, e]
      );
    }
    g["default"] = a;
  },
  98
);

import { useCallbackInt64 } from "Int64Hooks";
import { ReQL } from "ReQL";
import { asyncToGeneratorRuntime } from "asyncToGeneratorRuntime";
import { useReStore } from "useReStore";

interface AttachmentUpdaterProps {
  attachmentFbid: string;
  messageId: string;
  threadKey: string;
}

function useMWAttachmentUpdater({
  attachmentFbid,
  messageId,
  threadKey,
}: AttachmentUpdaterProps) {
  const reStore = useReStore();

  return useCallbackInt64(
    async (updatedData: Record<string, any>) => {
      await reStore.runInTransaction(async () => {
        const attachments = reStore.attachments;
        const existingAttachment = await ReQL.firstAsync(
          ReQL.fromTableAscending(attachments).getKeyRange(
            threadKey,
            messageId,
            attachmentFbid
          )
        );

        if (existingAttachment != null) {
          await attachments.put({ ...existingAttachment, ...updatedData });
        }
      }, "readwrite");
    },
    [reStore, threadKey, messageId, attachmentFbid]
  );
}

export default useMWAttachmentUpdater;
