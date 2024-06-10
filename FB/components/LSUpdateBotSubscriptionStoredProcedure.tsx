__d(
  "LSUpdateBotSubscriptionStoredProcedure",
  ["LSUpdateBotSubscription", "cr:8709"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      var d = [];
      d[0] = b.threadKey;
      d[1] = b.userActionType;
      return c("LSUpdateBotSubscription").apply(void 0, d.concat([a]));
    }
    g["default"] = a;
  },
  98
);

import LSUpdateBotSubscription from "LSUpdateBotSubscription";

interface SubscriptionParams {
  threadKey: string;
  userActionType: number;
}

function LSUpdateBotSubscriptionStoredProcedure(
  db: any,
  params: SubscriptionParams
): Promise<void> {
  const args = [params.threadKey, params.userActionType, db];

  return LSUpdateBotSubscription(...args);
}

export default LSUpdateBotSubscriptionStoredProcedure;
