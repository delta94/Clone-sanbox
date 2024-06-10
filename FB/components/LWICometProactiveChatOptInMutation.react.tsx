__d(
  "LWICometProactiveChatOptInMutation.react",
  ["CometRelay", "LWICometProactiveChatOptInMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("LWICometProactiveChatOptInMutation.graphql"));
    function a(a) {
      var b = a.entryPoint,
        c = a.environment,
        e = a.optInValue,
        f = a.setLoading,
        g = a.setOptedIn;
      d("CometRelay").commitMutation(c, {
        mutation: i,
        onCompleted: function (a, b) {
          a = e;
          g(a);
          f(!1);
        },
        onError: function () {
          f(!1);
        },
        variables: {
          input: {
            entry_point: b,
            is_opted_in: e,
            topic: "ADVERTISER_GUIDANCE",
          },
        },
      });
    }
    g.commitProactiveChatOptInMutation = a;
  },
  98
);

import { commitMutation, Environment } from "CometRelay";
import { LWICometProactiveChatOptInMutation as LWICometProactiveChatOptInMutationGraphQL } from "LWICometProactiveChatOptInMutation.graphql";

interface CommitProactiveChatOptInMutationProps {
  entryPoint: string;
  environment: Environment;
  optInValue: boolean;
  setLoading: (loading: boolean) => void;
  setOptedIn: (optedIn: boolean) => void;
}

function commitProactiveChatOptInMutation({
  entryPoint,
  environment,
  optInValue,
  setLoading,
  setOptedIn,
}: CommitProactiveChatOptInMutationProps) {
  commitMutation(environment, {
    mutation: LWICometProactiveChatOptInMutationGraphQL,
    variables: {
      input: {
        entry_point: entryPoint,
        is_opted_in: optInValue,
        topic: "ADVERTISER_GUIDANCE",
      },
    },
    onCompleted: () => {
      setOptedIn(optInValue);
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
    },
  });
}

export { commitProactiveChatOptInMutation };
