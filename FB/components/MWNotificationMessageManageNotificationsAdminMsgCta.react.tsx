__d(
  "MWNotificationMessageManageNotificationsAdminMsgCta.react",
  [
    "CometTextWithEntities.react",
    "MWNotificationMessageManageNotificationsLazyDialogTrigger.react",
    "MWXPressable.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.isOptOut,
        d = a.targetId,
        e = a.threadKey,
        f = a.title;
      a = function (a) {
        return i.jsx(c("MWXPressable.react"), {
          onPress: function () {
            return a();
          },
          children: i.jsx(c("CometTextWithEntities.react"), { text: f }),
        });
      };
      return i.jsx(
        c("MWNotificationMessageManageNotificationsLazyDialogTrigger.react"),
        { isOptOut: b, renderer: a, targetId: d, threadKey: e }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
