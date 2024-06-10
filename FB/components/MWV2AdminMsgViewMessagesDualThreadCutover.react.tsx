__d(
  "MWV2AdminMsgViewMessagesDualThreadCutover.react",
  [
    "I64",
    "LSFactory",
    "LSIntEnum",
    "LSPlatformWaitForTaskCompletion",
    "LSVerifyThreadRowExistsStoredProcedure",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "MWXText.react",
    "ReQL",
    "WALoggerDeferred",
    "asyncToGeneratorRuntime",
    "promiseDone",
    "react",
    "useAsyncReStore",
    "useMWNavigation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    function k() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "[Dual-thread-cutover] Failed to navitage to open messages thread ",
        "",
      ]);
      k = function () {
        return a;
      };
      return a;
    }
    var l = h || (h = d("react")),
      m = h.useCallback;
    function a(a) {
      var e = a.message,
        f = c("useAsyncReStore")(),
        g = c("useMWNavigation")();
      a = m(
        function () {
          c("promiseDone")(
            f,
            (function () {
              var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                a
              ) {
                var b,
                  f =
                    (b = yield d("ReQL").firstAsync(
                      d("ReQL")
                        .fromTableAscending(a.tables.mi_act_mapping_table)
                        .getKeyRange(e.threadKey)
                    )) == null
                      ? void 0
                      : b.jid;
                f &&
                  (yield c("LSPlatformWaitForTaskCompletion")(
                    a,
                    function (a) {
                      return c("LSVerifyThreadRowExistsStoredProcedure")(
                        c("LSFactory")(a),
                        {
                          syncGroup: (i || (i = d("LSIntEnum"))).ofNumber(1),
                          threadKey: f,
                          threadType: i.ofNumber(1),
                        }
                      );
                    },
                    "readwrite"
                  ));
                b = f
                  ? yield d("ReQL").firstAsync(
                      d("ReQL")
                        .fromTableAscending(a.tables.threads)
                        .getKeyRange(f)
                    )
                  : null;
                b
                  ? g.openTabOrInbox(
                      {
                        clientThreadKey: b.clientThreadKey,
                        threadKey: b.threadKey,
                        threadType: b.threadType,
                      },
                      "preCutoverThread"
                    )
                  : void d("WALoggerDeferred").LOG(
                      k(),
                      (j || (j = d("I64"))).to_string(e.threadKey)
                    );
              });
              return function (b) {
                return a.apply(this, arguments);
              };
            })()
          );
        },
        [f, e.threadKey, g]
      );
      var h = e.adminMsgCtaTitle;
      a =
        h != null
          ? l.jsx(c("MWXLink.react"), {
              onClick: a,
              role: "button",
              children: l.jsx(c("MWXText.react"), {
                color: "blueLink",
                type: "body4",
                children: h,
              }),
            })
          : null;
      return l.jsx(c("MWAdminTextLayout.react"), { cta: a, message: e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import {
  I64,
  LSFactory,
  LSIntEnum,
  LSPlatformWaitForTaskCompletion,
  LSVerifyThreadRowExistsStoredProcedure,
  MWAdminTextLayout,
  MWXLink,
  MWXText,
  ReQL,
  WALoggerDeferred,
  promiseDone,
  useAsyncReStore,
  useMWNavigation,
} from "your-import-paths";
import React, { useCallback } from "react";

const logFailedNavigationMessage = (threadKey: string) =>
  `[Dual-thread-cutover] Failed to navigate to open messages thread ${threadKey}`;

interface MWV2AdminMsgViewMessagesDualThreadCutoverProps {
  message: {
    threadKey: string;
    adminMsgCtaTitle?: string | null;
  };
}

const MWV2AdminMsgViewMessagesDualThreadCutover: React.FC<
  MWV2AdminMsgViewMessagesDualThreadCutoverProps
> = ({ message }) => {
  const asyncReStore = useAsyncReStore();
  const mwNavigation = useMWNavigation();

  const handleClick = useCallback(() => {
    promiseDone(asyncReStore, async function (a: any) {
      const mappingRecord = await ReQL.firstAsync(
        ReQL.fromTableAscending(a.tables.mi_act_mapping_table).getKeyRange(
          message.threadKey
        )
      );
      const jid = mappingRecord?.jid;

      if (jid) {
        await LSPlatformWaitForTaskCompletion(
          a,
          (context: any) =>
            LSVerifyThreadRowExistsStoredProcedure(LSFactory(context), {
              syncGroup: LSIntEnum.ofNumber(1),
              threadKey: jid,
              threadType: LSIntEnum.ofNumber(1),
            }),
          "readwrite"
        );

        const threadRecord = await ReQL.firstAsync(
          ReQL.fromTableAscending(a.tables.threads).getKeyRange(jid)
        );

        if (threadRecord) {
          mwNavigation.openTabOrInbox(
            {
              clientThreadKey: threadRecord.clientThreadKey,
              threadKey: threadRecord.threadKey,
              threadType: threadRecord.threadType,
            },
            "preCutoverThread"
          );
        } else {
          WALoggerDeferred.LOG(
            logFailedNavigationMessage(I64.to_string(message.threadKey))
          );
        }
      } else {
        WALoggerDeferred.LOG(
          logFailedNavigationMessage(I64.to_string(message.threadKey))
        );
      }
    });
  }, [asyncReStore, message.threadKey, mwNavigation]);

  const adminMsgCtaTitle = message.adminMsgCtaTitle;

  const cta = adminMsgCtaTitle ? (
    <MWXLink onClick={handleClick} role="button">
      <MWXText color="blueLink" type="body4">
        {adminMsgCtaTitle}
      </MWXText>
    </MWXLink>
  ) : null;

  return <MWAdminTextLayout cta={cta} message={message} />;
};

MWV2AdminMsgViewMessagesDualThreadCutover.displayName = `MWV2AdminMsgViewMessagesDualThreadCutover [from ${module.id}]`;

export default MWV2AdminMsgViewMessagesDualThreadCutover;
