__d(
  "MWV2AdminMsgE2EECutoverRollback.react",
  [
    "CurrentEnvironment",
    "I64",
    "MWAdminTextLayout.react",
    "MWInboxRouteBuilder",
    "MWXLink.react",
    "ReQL",
    "ReQLSuspense",
    "WALoggerDeferred",
    "XPolarisDirectInboxControllerRouteBuilder",
    "react",
    "react-strict-dom",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    function k() {
      var a = babelHelpers.taggedTemplateLiteralLoose([
        "Failed to generate the url, thread is missing in mi_act_mapping table for threadKey ",
        "",
      ]);
      k = function () {
        return a;
      };
      return a;
    }
    var l = j || d("react"),
      m = {
        adminTextCta: {
          color: "xz94kzr",
          display: "x1rg5ohu",
          fontWeight: "xk50ysn",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.message,
        e = (h || (h = c("useReStore")))();
      a = d("ReQLSuspense").useFirst(
        function () {
          return d("ReQL")
            .fromTableAscending(e.tables.mi_act_mapping_table)
            .getKeyRange(b.threadKey)
            .map(function (a) {
              return (i || (i = d("I64"))).to_string(a.jid);
            });
        },
        [e, b.threadKey],
        f.id + ":40"
      );
      a =
        a != null
          ? c("CurrentEnvironment").instagramdotcom
            ? c("XPolarisDirectInboxControllerRouteBuilder").buildExtraURL(
                "/direct/t/{?thread_key}/",
                { thread_key: a }
              )
            : d("MWInboxRouteBuilder").buildURL({ thread_key: a })
          : (d("WALoggerDeferred").LOG(
              k(),
              (i || (i = d("I64"))).to_string(b.threadKey)
            ),
            d("MWInboxRouteBuilder").buildHomeURL());
      var g = d("ReQLSuspense").useFirst(
        function () {
          var a;
          return d("ReQL")
            .fromTableAscending(e.tables.admin_message_ctas)
            .getKeyRange(
              b.threadKey,
              b.messageId,
              (a = b.adminMsgCtaId) != null ? a : (i || (i = d("I64"))).neg_one
            );
        },
        [e, b],
        f.id + ":65"
      );
      g = g == null ? void 0 : g.title;
      a =
        g != null
          ? l.jsx(d("react-strict-dom").html.div, {
              style: m.adminTextCta,
              children: l.jsx(c("MWXLink.react"), {
                href: a,
                target: "_self",
                children: g,
              }),
            })
          : null;
      return l.jsx(c("MWAdminTextLayout.react"), { cta: a, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import { CurrentEnvironment } from "CurrentEnvironment";
import { I64 } from "I64";
import MWAdminTextLayout from "MWAdminTextLayout.react";
import { buildURL, buildHomeURL } from "MWInboxRouteBuilder";
import MWXLink from "MWXLink.react";
import { fromTableAscending } from "ReQL";
import { useFirst } from "ReQLSuspense";
import { LOG as WALoggerDeferredLOG } from "WALoggerDeferred";
import { buildExtraURL as buildPolarisURL } from "XPolarisDirectInboxControllerRouteBuilder";
import { html } from "react-strict-dom";
import { useReStore } from "useReStore";

const styles = {
  adminTextCta: {
    color: "xz94kzr",
    display: "x1rg5ohu",
    fontWeight: "xk50ysn",
    $$css: true,
  },
};

interface MessageProps {
  message: {
    threadKey: any;
    messageId: any;
    adminMsgCtaId?: any;
  };
}

const MWV2AdminMsgE2EECutoverRollback: React.FC<MessageProps> = ({
  message,
}) => {
  const reStore = useReStore();

  const threadJid = useFirst(
    () =>
      fromTableAscending(reStore.tables.mi_act_mapping_table)
        .getKeyRange(message.threadKey)
        .map((entry) => I64.to_string(entry.jid)),
    [reStore, message.threadKey],
    `MWV2AdminMsgE2EECutoverRollback:40`
  );

  let threadUrl;
  if (threadJid) {
    threadUrl = CurrentEnvironment.instagramdotcom
      ? buildPolarisURL("/direct/t/{?thread_key}/", { thread_key: threadJid })
      : buildURL({ thread_key: threadJid });
  } else {
    WALoggerDeferredLOG`Failed to generate the url, thread is missing in mi_act_mapping table for threadKey ${I64.to_string(
      message.threadKey
    )}`;
    threadUrl = buildHomeURL();
  }

  const ctaTitle = useFirst(
    () => {
      const adminMsgCtaId =
        message.adminMsgCtaId != null ? message.adminMsgCtaId : I64.neg_one;
      return fromTableAscending(reStore.tables.admin_message_ctas).getKeyRange(
        message.threadKey,
        message.messageId,
        adminMsgCtaId
      );
    },
    [reStore, message],
    `MWV2AdminMsgE2EECutoverRollback:65`
  )?.title;

  const cta = ctaTitle ? (
    <html.div style={styles.adminTextCta}>
      <MWXLink href={threadUrl} target="_self">
        {ctaTitle}
      </MWXLink>
    </html.div>
  ) : null;

  return <MWAdminTextLayout cta={cta} message={message} />;
};

MWV2AdminMsgE2EECutoverRollback.displayName =
  "MWV2AdminMsgE2EECutoverRollback [from MWV2AdminMsgE2EECutoverRollback]";

export default MWV2AdminMsgE2EECutoverRollback;
