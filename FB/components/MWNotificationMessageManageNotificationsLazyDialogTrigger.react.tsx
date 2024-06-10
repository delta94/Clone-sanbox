__d(
  "MWNotificationMessageManageNotificationsLazyDialogTrigger.react",
  ["JSResourceForInteraction", "emptyFunction", "react", "useMWXLazyDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || d("react");
    var i = c("JSResourceForInteraction")(
      "MWNotificationMessagesManageNotificationsDialog.react"
    ).__setRef(
      "MWNotificationMessageManageNotificationsLazyDialogTrigger.react"
    );
    function a(a) {
      var b = a.isOptOut,
        d = a.renderer,
        e = a.targetId;
      a = a.threadKey;
      var f = { isOptOut: b, targetId: e, threadKey: a };
      b = c("useMWXLazyDialog")(i);
      var g = b[0];
      e = function () {
        return g(f, c("emptyFunction"));
      };
      return d(e);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import JSResourceForInteraction from "JSResourceForInteraction";
import emptyFunction from "emptyFunction";
import React from "react";
import { useMWXLazyDialog } from "useMWXLazyDialog";

const MWNotificationMessagesManageNotificationsDialog =
  JSResourceForInteraction(
    "MWNotificationMessagesManageNotificationsDialog.react"
  ).__setRef("MWNotificationMessageManageNotificationsLazyDialogTrigger.react");

interface MWNotificationMessageManageNotificationsLazyDialogTriggerProps {
  isOptOut: boolean;
  renderer: (triggerDialog: () => void) => React.ReactNode;
  targetId: string;
  threadKey: string;
}

const MWNotificationMessageManageNotificationsLazyDialogTrigger: React.FC<
  MWNotificationMessageManageNotificationsLazyDialogTriggerProps
> = ({ isOptOut, renderer, targetId, threadKey }) => {
  const [showDialog] = useMWXLazyDialog(
    MWNotificationMessagesManageNotificationsDialog
  );

  const dialogParams = { isOptOut, targetId, threadKey };

  const triggerDialog = () => {
    showDialog(dialogParams, emptyFunction);
  };

  return renderer(triggerDialog);
};

MWNotificationMessageManageNotificationsLazyDialogTrigger.displayName = `MWNotificationMessageManageNotificationsLazyDialogTrigger [from ${MWNotificationMessageManageNotificationsLazyDialogTrigger.name}]`;

export default MWNotificationMessageManageNotificationsLazyDialogTrigger;
