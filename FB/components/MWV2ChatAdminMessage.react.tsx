__d(
  "MWV2ChatAdminMessage.react",
  [
    "MWAdminTextLayout.react",
    "MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta.react",
    "MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta.react",
    "MWV2AdminMsgArmadilloEphemeralChangeDuration.react",
    "MWV2AdminMsgDMLearnMore.react",
    "MWV2AdminMsgE2EECutoverRollback.react",
    "MWV2AdminMsgE2EEDescription.react",
    "MWV2AdminMsgICDC.react",
    "MWV2AdminMsgNotificationMessageManageNotifications.react",
    "MWV2AdminMsgP2BPrivacyDisclosure.react",
    "MWV2AdminMsgPostMessageRemoveActions.react",
    "MWV2AdminMsgServiceBookingLegalDisclaimer.react",
    "MWV2AdminMsgShowPinnedMessages.react",
    "MWV2AdminMsgViewMessagesDualThreadCutover.react",
    "MWV2AdminMsgViewPoll.react",
    "MWV2AdminMsgWebUrl.react",
    "MWV2SBGProactiveChatMutationUrl.react",
    "MWXText.react",
    "gkx",
    "react",
    "react-strict-dom",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        color: { color: "x186z157", fontWeight: "xk50ysn", $$css: !0 },
        container: {
          paddingTop: "xyamay9",
          paddingBottom: "x1l90r2v",
          paddingStart: "x5ib6vp",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "xc73u3c",
          $$css: !0,
        },
        containerThatPrecedesAdminMessage: {
          paddingBottom: "x1a8lsjc",
          $$css: !0,
        },
        containerThatProceedsAdminMessage: { paddingTop: "x889kno", $$css: !0 },
        content: {
          marginTop: "xr1yuqi",
          marginEnd: "xkrivgy",
          marginBottom: "x4ii5y1",
          marginStart: "x1gryazu",
          maxWidth: "x1ekjcvx",
          textAlign: "x2b8uid",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
      };
    function k(a) {
      if (a != null) return a.isAdminMessage;
      else return !1;
    }
    function l(a) {
      var b = a.children,
        c = a.nextMessage;
      a = a.prevMessage;
      return i.jsx(d("react-strict-dom").html.div, {
        "data-testid": void 0,
        style: [
          j.container,
          k(a) ? j.containerThatProceedsAdminMessage : !1,
          k(c) ? j.containerThatPrecedesAdminMessage : !1,
        ],
        children: i.jsx(d("react-strict-dom").html.div, {
          style: j.content,
          children: b,
        }),
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.message;
      a.nextMessage;
      a.prevMessage;
      switch (b.adminMsgCtaType) {
        case "admin_msg_armadillo_ephemeral_change_duration":
          return i.jsx(
            c("MWV2AdminMsgArmadilloEphemeralChangeDuration.react"),
            { message: b }
          );
        case "admin_msg_dual_thread_cutover":
          return i.jsx(c("MWV2AdminMsgViewMessagesDualThreadCutover.react"), {
            message: b,
          });
        case "admin_msg_web_url":
          return i.jsx(c("MWV2AdminMsgWebUrl.react"), { message: b });
        case "admin_msg_sbg_proactive_chat_opt_in":
          return i.jsx(c("MWV2SBGProactiveChatMutationUrl.react"), {
            message: b,
            opted_in: !0,
          });
        case "admin_msg_sbg_proactive_chat_opt_out":
          return i.jsx(c("MWV2SBGProactiveChatMutationUrl.react"), {
            message: b,
            opted_in: !1,
          });
        case "admin_msg_p2b_privacy_disclosure":
          if (c("gkx")("24144"))
            return i.jsx(c("MWV2AdminMsgP2BPrivacyDisclosure.react"), {
              message: b,
            });
          else break;
        case "admin_notification_messages_opt_out":
          return i.jsx(
            c("MWV2AdminMsgNotificationMessageManageNotifications.react"),
            { isOptOut: !0, message: b }
          );
        case "admin_notification_messages_opt_in":
          return i.jsx(
            c("MWV2AdminMsgNotificationMessageManageNotifications.react"),
            { isOptOut: !1, message: b }
          );
        case "admin_msg_thread_level_cutover":
          return i.jsx(c("MWV2AdminMsgE2EEDescription.react"), { message: b });
        case "admin_msg_e2ee_thread":
          return null;
        case "admin_msg_cutover_rollback":
          return i.jsx(c("MWV2AdminMsgE2EECutoverRollback.react"), {
            message: b,
          });
        case "xmat_instant_game_bot_message_subscribe":
          return i.jsx(
            c(
              "MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta.react"
            ),
            { message: b, shouldSubscribe: !0 }
          );
        case "xmat_instant_game_bot_message_unsubscribe":
          return i.jsx(
            c(
              "MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta.react"
            ),
            { message: b, shouldSubscribe: !1 }
          );
        case "admin_msg_view_pin_msgs_v2":
          return i.jsx(c("MWV2AdminMsgShowPinnedMessages.react"), {
            message: b,
          });
        case "xmat_instant_game_custom_update_message_mute":
          return i.jsx(
            c(
              "MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta.react"
            ),
            { message: b, shouldMute: !0 }
          );
        case "xmat_instant_game_custom_update_message_unmute":
          return i.jsx(
            c(
              "MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta.react"
            ),
            { message: b, shouldMute: !1 }
          );
        case "admin_message_service_booking_legal_disclaimer":
          return i.jsx(c("MWV2AdminMsgServiceBookingLegalDisclaimer.react"), {
            message: b,
          });
        case "admin_msg_admod_post_msg_remove_actions":
          return i.jsx(c("MWV2AdminMsgPostMessageRemoveActions.react"), {
            message: b,
          });
        case "admin_msg_poll_details":
          return i.jsx(c("MWV2AdminMsgViewPoll.react"), { message: b });
        case "admin_msg_icdc":
          return i.jsx(c("MWV2AdminMsgICDC.react"), { message: b });
        case "admin_msg_ig_dm_learn_more":
          return i.jsx(c("MWV2AdminMsgDMLearnMore.react"), { message: b });
      }
      return i.jsx(c("MWAdminTextLayout.react"), { message: b });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.message,
        e = a.nextMessage;
      a = a.prevMessage;
      return b.adminMsgCtaType === "admin_msg_e2ee_thread"
        ? null
        : i.jsx(l, {
            nextMessage: e,
            prevMessage: a,
            children: i.jsx(c("MWXText.react"), {
              color: "tertiary",
              type: "meta4",
              children: i.jsx(d("react-strict-dom").html.div, {
                style: j.color,
                children: i.jsx(m, { message: b }),
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.isAdminMessage = k;
    g.MWV2ChatAdminMessageContainer = l;
    g.MWV2ChatAdminMessage = a;
  },
  98
);

import React, { FC } from "react";
import { html } from "react-strict-dom";
import MWAdminTextLayout from "MWAdminTextLayout.react";
import MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta from "MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta.react";
import MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta from "MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta.react";
import MWV2AdminMsgArmadilloEphemeralChangeDuration from "MWV2AdminMsgArmadilloEphemeralChangeDuration.react";
import MWV2AdminMsgDMLearnMore from "MWV2AdminMsgDMLearnMore.react";
import MWV2AdminMsgE2EECutoverRollback from "MWV2AdminMsgE2EECutoverRollback.react";
import MWV2AdminMsgE2EEDescription from "MWV2AdminMsgE2EEDescription.react";
import MWV2AdminMsgICDC from "MWV2AdminMsgICDC.react";
import MWV2AdminMsgNotificationMessageManageNotifications from "MWV2AdminMsgNotificationMessageManageNotifications.react";
import MWV2AdminMsgP2BPrivacyDisclosure from "MWV2AdminMsgP2BPrivacyDisclosure.react";
import MWV2AdminMsgPostMessageRemoveActions from "MWV2AdminMsgPostMessageRemoveActions.react";
import MWV2AdminMsgServiceBookingLegalDisclaimer from "MWV2AdminMsgServiceBookingLegalDisclaimer.react";
import MWV2AdminMsgShowPinnedMessages from "MWV2AdminMsgShowPinnedMessages.react";
import MWV2AdminMsgViewMessagesDualThreadCutover from "MWV2AdminMsgViewMessagesDualThreadCutover.react";
import MWV2AdminMsgViewPoll from "MWV2AdminMsgViewPoll.react";
import MWV2AdminMsgWebUrl from "MWV2AdminMsgWebUrl.react";
import MWV2SBGProactiveChatMutationUrl from "MWV2SBGProactiveChatMutationUrl.react";
import MWXText from "MWXText.react";
import gkx from "gkx";

interface Message {
  adminMsgCtaType?: string;
  isAdminMessage?: boolean;
}

interface AdminMessageContainerProps {
  children: React.ReactNode;
  nextMessage?: Message;
  prevMessage?: Message;
}

interface AdminMessageProps {
  message: Message;
  nextMessage?: Message;
  prevMessage?: Message;
}

const styles = {
  color: { color: "x186z157", fontWeight: "xk50ysn", $$css: true },
  container: {
    paddingTop: "xyamay9",
    paddingBottom: "x1l90r2v",
    paddingStart: "x5ib6vp",
    paddingEnd: "xc73u3c",
    $$css: true,
  },
  containerThatPrecedesAdminMessage: {
    paddingBottom: "x1a8lsjc",
    $$css: true,
  },
  containerThatProceedsAdminMessage: {
    paddingTop: "x889kno",
    $$css: true,
  },
  content: {
    marginTop: "xr1yuqi",
    marginEnd: "xkrivgy",
    marginBottom: "x4ii5y1",
    marginStart: "x1gryazu",
    maxWidth: "x1ekjcvx",
    textAlign: "x2b8uid",
    wordBreak: "x13faqbe",
    $$css: true,
  },
};

const isAdminMessage = (message?: Message): boolean => {
  return message?.isAdminMessage ?? false;
};

const AdminMessageContainer: FC<AdminMessageContainerProps> = ({
  children,
  nextMessage,
  prevMessage,
}) => {
  return (
    <html.div
      data-testid={undefined}
      style={[
        styles.container,
        isAdminMessage(prevMessage)
          ? styles.containerThatProceedsAdminMessage
          : false,
        isAdminMessage(nextMessage)
          ? styles.containerThatPrecedesAdminMessage
          : false,
      ]}
    >
      <html.div style={styles.content}>{children}</html.div>
    </html.div>
  );
};

AdminMessageContainer.displayName = `AdminMessageContainer [from Meta]`;

const renderAdminMessageContent = (message: Message) => {
  switch (message.adminMsgCtaType) {
    case "admin_msg_armadillo_ephemeral_change_duration":
      return <MWV2AdminMsgArmadilloEphemeralChangeDuration message={message} />;
    case "admin_msg_dual_thread_cutover":
      return <MWV2AdminMsgViewMessagesDualThreadCutover message={message} />;
    case "admin_msg_web_url":
      return <MWV2AdminMsgWebUrl message={message} />;
    case "admin_msg_sbg_proactive_chat_opt_in":
      return (
        <MWV2SBGProactiveChatMutationUrl message={message} opted_in={true} />
      );
    case "admin_msg_sbg_proactive_chat_opt_out":
      return (
        <MWV2SBGProactiveChatMutationUrl message={message} opted_in={false} />
      );
    case "admin_msg_p2b_privacy_disclosure":
      if (gkx("24144")) {
        return <MWV2AdminMsgP2BPrivacyDisclosure message={message} />;
      }
      break;
    case "admin_notification_messages_opt_out":
      return (
        <MWV2AdminMsgNotificationMessageManageNotifications
          isOptOut={true}
          message={message}
        />
      );
    case "admin_notification_messages_opt_in":
      return (
        <MWV2AdminMsgNotificationMessageManageNotifications
          isOptOut={false}
          message={message}
        />
      );
    case "admin_msg_thread_level_cutover":
      return <MWV2AdminMsgE2EEDescription message={message} />;
    case "admin_msg_e2ee_thread":
      return null;
    case "admin_msg_cutover_rollback":
      return <MWV2AdminMsgE2EECutoverRollback message={message} />;
    case "xmat_instant_game_bot_message_subscribe":
      return (
        <MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta
          message={message}
          shouldSubscribe={true}
        />
      );
    case "xmat_instant_game_bot_message_unsubscribe":
      return (
        <MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta
          message={message}
          shouldSubscribe={false}
        />
      );
    case "admin_msg_view_pin_msgs_v2":
      return <MWV2AdminMsgShowPinnedMessages message={message} />;
    case "xmat_instant_game_custom_update_message_mute":
      return (
        <MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta
          message={message}
          shouldMute={true}
        />
      );
    case "xmat_instant_game_custom_update_message_unmute":
      return (
        <MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta
          message={message}
          shouldMute={false}
        />
      );
    case "admin_message_service_booking_legal_disclaimer":
      return <MWV2AdminMsgServiceBookingLegalDisclaimer message={message} />;
    case "admin_msg_admod_post_msg_remove_actions":
      return <MWV2AdminMsgPostMessageRemoveActions message={message} />;
    case "admin_msg_poll_details":
      return <MWV2AdminMsgViewPoll message={message} />;
    case "admin_msg_icdc":
      return <MWV2AdminMsgICDC message={message} />;
    case "admin_msg_ig_dm_learn_more":
      return <MWV2AdminMsgDMLearnMore message={message} />;
    default:
      return <MWAdminTextLayout message={message} />;
  }
};

const AdminMessage: FC<AdminMessageProps> = ({
  message,
  nextMessage,
  prevMessage,
}) => {
  return message.adminMsgCtaType === "admin_msg_e2ee_thread" ? null : (
    <AdminMessageContainer nextMessage={nextMessage} prevMessage={prevMessage}>
      <MWXText color="tertiary" type="meta4">
        <html.div style={styles.color}>
          {renderAdminMessageContent(message)}
        </html.div>
      </MWXText>
    </AdminMessageContainer>
  );
};

AdminMessage.displayName = `AdminMessage [from Meta]`;

export { isAdminMessage, AdminMessageContainer, AdminMessage };
