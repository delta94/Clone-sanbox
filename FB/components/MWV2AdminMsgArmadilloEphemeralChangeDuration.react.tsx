__d(
  "MWV2AdminMsgArmadilloEphemeralChangeDuration.react",
  ["MWAdminTextLayout.react", "cr:7125", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      a = a.message;
      var d = a.adminMsgCtaTitle;
      d =
        d != null && b("cr:7125") != null
          ? i.jsx("div", {
              className: "xz94kzr x1rg5ohu xo1l8bm",
              children: i.jsx(b("cr:7125"), {
                //MAWEphemeralAdminMsgCta
                threadKey: a.threadKey,
                title: d,
              }),
            })
          : null;
      return i.jsx(c("MWAdminTextLayout.react"), { cta: d, message: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import MWAdminTextLayout from "MWAdminTextLayout.react";
import MAWEphemeralAdminMsgCta from "cr:7125";
import React from "react";

interface Message {
  threadKey: string;
  adminMsgCtaTitle?: string;
}

interface MWV2AdminMsgArmadilloEphemeralChangeDurationProps {
  message: Message;
}

const MWV2AdminMsgArmadilloEphemeralChangeDuration: React.FC<
  MWV2AdminMsgArmadilloEphemeralChangeDurationProps
> = ({ message }) => {
  const { adminMsgCtaTitle, threadKey } = message;

  const cta =
    adminMsgCtaTitle != null && MAWEphemeralAdminMsgCta != null ? (
      <div className="xz94kzr x1rg5ohu xo1l8bm">
        <MAWEphemeralAdminMsgCta
          threadKey={threadKey}
          title={adminMsgCtaTitle}
        />
      </div>
    ) : null;

  return <MWAdminTextLayout cta={cta} message={message} />;
};

MWV2AdminMsgArmadilloEphemeralChangeDuration.displayName = `${MWV2AdminMsgArmadilloEphemeralChangeDuration.name} [from MWV2AdminMsgArmadilloEphemeralChangeDuration.react]`;

export default MWV2AdminMsgArmadilloEphemeralChangeDuration;
