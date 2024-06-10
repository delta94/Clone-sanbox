__d(
  "useSecureThreadJid",
  [
    "I64",
    "Int64Hooks",
    "LSMessagingThreadTypeUtil",
    "MAWMiActOnActThreadReady",
    "Promise",
    "ReQL",
    "ReQLSuspense",
    "promiseDone",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = (k || d("react")).useRef;
    function a(a) {
      var e,
        g = (i || (i = c("useReStore")))(),
        k = l();
      e =
        (e = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableAscending(g.tables.threads, ["threadType"])
              .getKeyRange(a);
          },
          [g, a],
          f.id + ":33"
        )) == null
          ? void 0
          : e.threadType;
      var m = e ? d("LSMessagingThreadTypeUtil").isArmadilloSecure(e) : !1;
      d("Int64Hooks").useEffectInt64(
        function () {
          if (
            a == null ||
            (j || (j = d("I64"))).equal(a, (j || (j = d("I64"))).zero || !m)
          )
            return;
          c("promiseDone")(
            d("MAWMiActOnActThreadReady").onActThreadReady(
              g.tables,
              a,
              "useThreadJid",
              function (a, c) {
                k.current = c;
                return (h || (h = b("Promise"))).resolve();
              }
            )
          );
        },
        [g, a, m]
      );
      return function () {
        return k.current;
      };
    }
    g["default"] = a;
  },
  98
);

import { useRef } from "react";
import { I64 } from "I64";
import { useEffectInt64 } from "Int64Hooks";
import { isArmadilloSecure } from "LSMessagingThreadTypeUtil";
import { onActThreadReady } from "MAWMiActOnActThreadReady";
import { useFirst } from "ReQLSuspense";
import { fromTableAscending } from "ReQL";
import { promiseDone } from "promiseDone";
import { useReStore } from "useReStore";
import { Promise as BluebirdPromise } from "bluebird";

function useSecureThreadJid(threadId: any): () => any {
  const reStore = useReStore();
  const ref = useRef<any>();

  const threadType = useFirst(
    () =>
      fromTableAscending(reStore.tables.threads, ["threadType"]).getKeyRange(
        threadId
      ),
    [reStore, threadId],
    `${f.id}:33`
  )?.threadType;

  const isSecure = threadType ? isArmadilloSecure(threadType) : false;

  useEffectInt64(() => {
    if (threadId == null || I64.equal(threadId, I64.zero()) || !isSecure) {
      return;
    }

    promiseDone(
      onActThreadReady(
        reStore.tables,
        threadId,
        "useThreadJid",
        (store, jid) => {
          ref.current = jid;
          return BluebirdPromise.resolve();
        }
      )
    );
  }, [reStore, threadId, isSecure]);

  return () => ref.current;
}

export default useSecureThreadJid;
