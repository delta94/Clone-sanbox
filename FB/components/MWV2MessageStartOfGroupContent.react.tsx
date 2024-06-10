__d(
  "MWV2MessageStartOfGroupContent.react",
  [
    "I64",
    "MWPDateBreak.react",
    "MWPMessageListColumn.react",
    "MWV2ChatAdminMessage.react",
    "MWV2MessageRowSimple.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h || d("react");
    function k(a, b) {
      if (b != null)
        return (
          (i || (i = d("I64"))).compare(
            i.abs(i.sub(a.timestampMs, b.timestampMs)),
            i.of_string("900000")
          ) > 0
        );
      else return !0;
    }
    function l(a) {
      var b = a.domElementRef,
        e = a.message,
        f = a.prevMessage;
      a = a.renderTextWrapper;
      if (k(e, f))
        return j.jsx(c("MWV2MessageRowSimple.react"), {
          domElementRef: b,
          children: j.jsx(
            d("MWPMessageListColumn.react").MWPMessageListColumnShrinkwrap,
            {
              children: j.jsx(
                d("MWV2ChatAdminMessage.react").MWV2ChatAdminMessageContainer,
                {
                  nextMessage: e,
                  prevMessage: f,
                  children: j.jsx(c("MWPDateBreak.react"), {
                    renderTextWrapper: a,
                    timestamp: (i || (i = d("I64"))).to_float(e.timestampMs),
                  }),
                }
              ),
            }
          ),
        });
      else return null;
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.domElementRef,
        c = a.message,
        d = a.prevMessage;
      a = a.renderTextWrapper;
      return j.jsx(l, {
        domElementRef: b,
        message: c,
        prevMessage: d,
        renderTextWrapper: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import { I64 } from "I64";
import { MWPDateBreak } from "MWPDateBreak.react";
import { MWPMessageListColumnShrinkwrap } from "MWPMessageListColumn.react";
import { MWV2ChatAdminMessageContainer } from "MWV2ChatAdminMessage.react";
import { MWV2MessageRowSimple } from "MWV2MessageRowSimple.react";
import { createElement, FC, Ref } from "react";

interface Message {
  timestampMs: string;
}

interface StartOfGroupContentProps {
  domElementRef: Ref<any>;
  message: Message;
  prevMessage?: Message;
  renderTextWrapper?: () => JSX.Element;
}

const isTimeDifferenceGreaterThan15Minutes = (
  currentMessage: Message,
  previousMessage?: Message
): boolean => {
  if (previousMessage) {
    return (
      I64.compare(
        I64.abs(
          I64.sub(currentMessage.timestampMs, previousMessage.timestampMs)
        ),
        I64.of_string("900000")
      ) > 0
    );
  }
  return true;
};

const MessageStartOfGroupContent: FC<StartOfGroupContentProps> = ({
  domElementRef,
  message,
  prevMessage,
  renderTextWrapper,
}) => {
  if (isTimeDifferenceGreaterThan15Minutes(message, prevMessage)) {
    return createElement(MWV2MessageRowSimple, {
      domElementRef,
      children: createElement(MWPMessageListColumnShrinkwrap, {
        children: createElement(MWV2ChatAdminMessageContainer, {
          nextMessage: message,
          prevMessage,
          children: createElement(MWPDateBreak, {
            renderTextWrapper,
            timestamp: I64.to_float(message.timestampMs),
          }),
        }),
      }),
    });
  }
  return null;
};

MessageStartOfGroupContent.displayName = `MessageStartOfGroupContent [from Meta]`;

export default MessageStartOfGroupContent;
