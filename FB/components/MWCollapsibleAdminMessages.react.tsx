__d(
  "MWCollapsibleAdminMessages.react",
  [
    "fbt",
    "BaseView.react",
    "MWMessageRow.react",
    "MWPMessageListColumn.react",
    "MWV2ChatAdminMessage.react",
    "MWV2MessageActionsVisibility.react",
    "MWXLink.react",
    "MWXText.react",
    "ODS",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = i || (i = d("react")),
      l = i.useState,
      m = {
        collapsed: {
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          $$css: !0,
        },
        expanded: {
          paddingBottom: "x1120s5i",
          paddingTop: "xz9dl7a",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
      };

    function a(a) {
      var b = d("MWV2MessageActionsVisibility.react").useStopHoveringRef(),
        e = a.messages,
        f = babelHelpers.objectWithoutPropertiesLoose(a, ["messages"]);
      a = l(!1);
      var g = a[0],
        i = a[1];
      return k.jsx(
        d("MWPMessageListColumn.react").MWPMessageListColumnShrinkwrap,
        {
          centered: !0,
          children: k.jsxs(
            d("MWV2ChatAdminMessage.react").MWV2ChatAdminMessageContainer,
            {
              children: [
                k.jsx(c("MWXText.react"), {
                  type: "bodyLink4",
                  children: k.jsx(c("MWXLink.react"), {
                    color: "highlight",
                    onClick: function () {
                      (j || (j = d("ODS"))).bumpEntityKey(
                        3303,
                        "collapsible_admin_messages",
                        g ? "hide_messages" : "show_messages"
                      ),
                        i(function (a) {
                          return !a;
                        });
                    },
                    role: "button",
                    children: k.jsx(c("BaseView.react"), {
                      xstyle: g ? m.expanded : m.collapsed,
                      children: g
                        ? h._("__JHASH__k2cKnwAsyRP__JHASH__")
                        : h._("__JHASH__ZpmrUMcuTWA__JHASH__", [
                            h._param("number of admin udpates", e.length),
                          ]),
                    }),
                  }),
                }),
                g
                  ? e.map(function (a, c) {
                      return k.createElement(
                        d("MWMessageRow.react").MWMessageRow,
                        babelHelpers["extends"]({}, f, {
                          key: a.messageId,
                          message: a,
                          nextMessage: e[c + 1],
                          prevMessage: e[c - 1],
                          stopHoveringRef: b,
                        })
                      );
                    })
                  : null,
              ],
            }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import React, { useState } from "react";
import { fbt } from "fbt";
import BaseView from "BaseView.react";
import MWMessageRow from "MWMessageRow.react";
import { MWPMessageListColumn } from "MWPMessageListColumn.react";
import { MWV2ChatAdminMessage } from "MWV2ChatAdminMessage.react";
import { MWV2MessageActionsVisibility } from "MWV2MessageActionsVisibility.react";
import MWXLink from "MWXLink.react";
import MWXText from "MWXText.react";
import ODS from "ODS";

const styles = {
  collapsed: {
    paddingTop: "xz9dl7a",
    paddingBottom: "xsag5q8",
    $$css: true,
  },
  expanded: {
    paddingBottom: "x1120s5i",
    paddingTop: "xz9dl7a",
    position: "x1n2onr6",
    zIndex: "x1vjfegm",
    $$css: true,
  },
};

interface Message {
  messageId: string;
  // other properties of Message can be added here
}

interface MWCollapsibleAdminMessagesProps {
  messages: Message[];
  // any other props can be added here
}

const MWCollapsibleAdminMessages: React.FC<MWCollapsibleAdminMessagesProps> = (
  props
) => {
  const { messages, ...restProps } = props;
  const stopHoveringRef = MWV2MessageActionsVisibility.useStopHoveringRef();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    ODS.bumpEntityKey(
      3303,
      "collapsible_admin_messages",
      isExpanded ? "hide_messages" : "show_messages"
    );
    setIsExpanded(!isExpanded);
  };

  return (
    <MWPMessageListColumn.MWPMessageListColumnShrinkwrap centered>
      <MWV2ChatAdminMessage.MWV2ChatAdminMessageContainer>
        <MWXText type="bodyLink4">
          <MWXLink color="highlight" onClick={handleClick} role="button">
            <BaseView xstyle={isExpanded ? styles.expanded : styles.collapsed}>
              {isExpanded ? "Hide updates" : "See 5 updates"}
            </BaseView>
          </MWXLink>
        </MWXText>
        {isExpanded &&
          messages.map((message, index) => (
            <MWMessageRow
              {...restProps}
              key={message.messageId}
              message={message}
              nextMessage={messages[index + 1]}
              prevMessage={messages[index - 1]}
              stopHoveringRef={stopHoveringRef}
            />
          ))}
      </MWV2ChatAdminMessage.MWV2ChatAdminMessageContainer>
    </MWPMessageListColumn.MWPMessageListColumnShrinkwrap>
  );
};

MWCollapsibleAdminMessages.displayName = "MWCollapsibleAdminMessages";

export default MWCollapsibleAdminMessages;
