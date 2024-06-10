__d(
  "MWV2AdminMsgE2EEDescription.react",
  [
    "fbt",
    "CurrentEnvironment",
    "I64",
    "JSResourceForInteraction",
    "MDSLockSvgIcon.react",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "ReQL",
    "ReQLSuspense",
    "XInstagramHelpDotComContentControllerRouteBuilder",
    "react",
    "useMWXLazyDialog",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = k || d("react"),
      m = c("JSResourceForInteraction")(
        "MAWLearnMoreCutoverDialog.react"
      ).__setRef("MWV2AdminMsgE2EEDescription.react"),
      n = h._("__JHASH__8YEBJluoCs5__JHASH__");
    function a(a) {
      var b,
        e = a.message,
        g = (i || (i = c("useReStore")))();
      a = d("ReQLSuspense").useFirst(
        function () {
          var a;
          return d("ReQL")
            .fromTableAscending(g.tables.admin_message_ctas)
            .getKeyRange(
              e.threadKey,
              e.messageId,
              (a = e.adminMsgCtaId) != null ? a : (j || (j = d("I64"))).neg_one
            );
        },
        [g, e],
        f.id + ":52"
      );
      b =
        (b = c("XInstagramHelpDotComContentControllerRouteBuilder")
          .buildUri({ cms_id: "491565145294150" })
          .setDomain("help.instagram.com")) == null
          ? void 0
          : (b = b.setProtocol("https")) == null
          ? void 0
          : b.toString();
      var h = {},
        k = c("useMWXLazyDialog")(m),
        o = k[0];
      k = function () {
        return o(h);
      };
      a = a == null ? void 0 : a.title;
      b =
        a != null
          ? c("CurrentEnvironment").instagramdotcom
            ? l.jsx(c("MWXLink.react"), {
                href: b,
                target: "_blank",
                children: n,
              })
            : l.jsx("div", {
                className: "xz94kzr x1rg5ohu xk50ysn",
                children: l.jsx(c("MWXLink.react"), {
                  onClick: k,
                  target: "_blank",
                  children: a,
                }),
              })
          : null;
      return l.jsxs(l.Fragment, {
        children: [
          l.jsx("div", {
            className: "x1o583il x1rg5ohu x177n6bx x1n2onr6",
            children: l.jsx(c("MDSLockSvgIcon.react"), {
              color: "tertiary",
              size: 16,
            }),
          }),
          l.jsx(c("MWAdminTextLayout.react"), { cta: b, message: e }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { fbt } from "fbt";
import CurrentEnvironment from "CurrentEnvironment";
import I64 from "I64";
import JSResourceForInteraction from "JSResourceForInteraction";
import MDSLockSvgIcon from "MDSLockSvgIcon.react";
import MWAdminTextLayout from "MWAdminTextLayout.react";
import MWXLink from "MWXLink.react";
import { ReQL, ReQLSuspense } from "ReQL";
import XInstagramHelpDotComContentControllerRouteBuilder from "XInstagramHelpDotComContentControllerRouteBuilder";
import React, { Fragment } from "react";
import { useMWXLazyDialog } from "useMWXLazyDialog";
import { useReStore } from "useReStore";

const MAWLearnMoreCutoverDialog = JSResourceForInteraction(
  "MAWLearnMoreCutoverDialog.react"
).__setRef("MWV2AdminMsgE2EEDescription.react");

const MWV2AdminMsgE2EEDescription: React.FC<{ message: any }> = ({
  message,
}) => {
  const reStore = useReStore();
  const adminMessageCtas = ReQLSuspense.useFirst(
    () =>
      ReQL.fromTableAscending(reStore.tables.admin_message_ctas).getKeyRange(
        message.threadKey,
        message.messageId,
        message.adminMsgCtaId ?? I64.neg_one
      ),
    [reStore, message],
    "MWV2AdminMsgE2EEDescription.react:52"
  );

  let helpUrl = XInstagramHelpDotComContentControllerRouteBuilder.buildUri({
    cms_id: "491565145294150",
  })
    .setDomain("help.instagram.com")
    ?.setProtocol("https")
    ?.toString();

  const [showDialog] = useMWXLazyDialog(MAWLearnMoreCutoverDialog);

  const handleLearnMoreClick = () => {
    showDialog({});
  };

  const ctaTitle = adminMessageCtas?.title;

  const ctaLink = ctaTitle ? (
    CurrentEnvironment.instagramdotcom ? (
      <MWXLink href={helpUrl} target="_blank">
        {fbt("__JHASH__8YEBJluoCs5__JHASH__")}
      </MWXLink>
    ) : (
      <div className="xz94kzr x1rg5ohu xk50ysn">
        <MWXLink onClick={handleLearnMoreClick} target="_blank">
          {ctaTitle}
        </MWXLink>
      </div>
    )
  ) : null;

  return (
    <Fragment>
      <div className="x1o583il x1rg5ohu x177n6bx x1n2onr6">
        <MDSLockSvgIcon color="tertiary" size={16} />
      </div>
      <MWAdminTextLayout cta={ctaLink} message={message} />
    </Fragment>
  );
};

MWV2AdminMsgE2EEDescription.displayName = `MWV2AdminMsgE2EEDescription [from ${MWV2AdminMsgE2EEDescription.name}]`;

export default MWV2AdminMsgE2EEDescription;
