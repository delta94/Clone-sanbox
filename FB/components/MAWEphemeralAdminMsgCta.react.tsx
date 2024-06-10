__d(
  "MAWEphemeralAdminMsgCta.react",
  [
    "CometTextWithEntities.react",
    "JSResourceForInteraction",
    "MWXPressable.react",
    "QPLUserFlow",
    "qpl",
    "react",
    "useMWXLazyDialog",
    "useSecureThreadJid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = c("JSResourceForInteraction")(
        "MAWEphemeralSettingsDialog.react"
      ).__setRef("MAWEphemeralAdminMsgCta.react");
    function a(a) {
      var b = a.threadKey;
      a = a.title;
      var d = c("useSecureThreadJid")(b),
        e = { getThreadJid: d, threadKey: b };
      d = c("useMWXLazyDialog")(j);
      var f = d[0],
        g = function () {
          c("QPLUserFlow").start(c("qpl")._(1056845690, "2034"), {
            annotations: {
              string: { action_type: "change_ephemeral_message_duration" },
            },
          }),
            f(e);
        };
      return i.jsx(c("MWXPressable.react"), {
        onPress: function () {
          return g();
        },
        children: i.jsx(c("CometTextWithEntities.react"), { text: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import CometTextWithEntities from "CometTextWithEntities.react";
import JSResourceForInteraction from "JSResourceForInteraction";
import MWXPressable from "MWXPressable.react";
import QPLUserFlow from "QPLUserFlow";
import { _ } from "qpl";
import React from "react";
import { useMWXLazyDialog } from "useMWXLazyDialog";
import { useSecureThreadJid } from "useSecureThreadJid";

interface MAWEphemeralAdminMsgCtaProps {
  threadKey: string;
  title: string;
}

const MAWEphemeralSettingsDialog = JSResourceForInteraction(
  "MAWEphemeralSettingsDialog.react"
).__setRef("MAWEphemeralAdminMsgCta.react");

const MAWEphemeralAdminMsgCta: React.FC<MAWEphemeralAdminMsgCtaProps> = ({
  threadKey,
  title,
}) => {
  const getThreadJid = useSecureThreadJid(threadKey);
  const [showDialog] = useMWXLazyDialog(MAWEphemeralSettingsDialog);

  const handlePress = () => {
    QPLUserFlow.start(_(1056845690, "2034"), {
      annotations: {
        string: { action_type: "change_ephemeral_message_duration" },
      },
    });
    showDialog({ getThreadJid, threadKey });
  };

  return (
    <MWXPressable onPress={handlePress}>
      <CometTextWithEntities text={title} />
    </MWXPressable>
  );
};

MAWEphemeralAdminMsgCta.displayName = `${MAWEphemeralAdminMsgCta.name} [from MAWEphemeralAdminMsgCta.react]`;

export default MAWEphemeralAdminMsgCta;
