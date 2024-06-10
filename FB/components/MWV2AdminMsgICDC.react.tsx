__d(
  "MWV2AdminMsgICDC.react",
  [
    "fbt",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "react",
    "react-strict-dom",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || d("react"),
      k =
        "https://www.facebook.com/help/messenger-app/1577627185919537/?helpref=uf_permalink&parent_cms_id=1084673321594605";
    function a(a) {
      a = a.message;
      return j.jsx(c("MWAdminTextLayout.react"), {
        cta: j.jsx(d("react-strict-dom").html.div, {
          children: j.jsx(c("MWXLink.react"), {
            href: k,
            target: "_blank",
            children: h._("__JHASH__t0_WbzixXKp__JHASH__"),
          }),
        }),
        message: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { fbt } from "fbt";
import MWAdminTextLayout from "MWAdminTextLayout.react";
import MWXLink from "MWXLink.react";
import React from "react";
import { html } from "react-strict-dom";

const helpLink =
  "https://www.facebook.com/help/messenger-app/1577627185919537/?helpref=uf_permalink&parent_cms_id=1084673321594605";

interface MWV2AdminMsgICDCProps {
  message: any;
}

const MWV2AdminMsgICDC: React.FC<MWV2AdminMsgICDCProps> = ({ message }) => {
  return (
    <MWAdminTextLayout
      cta={
        <html.div>
          <MWXLink href={helpLink} target="_blank">
            {fbt("__JHASH__t0_WbzixXKp__JHASH__")}
          </MWXLink>
        </html.div>
      }
      message={message}
    />
  );
};

MWV2AdminMsgICDC.displayName = `MWV2AdminMsgICDC [from ${MWV2AdminMsgICDC.name}]`;

export default MWV2AdminMsgICDC;
