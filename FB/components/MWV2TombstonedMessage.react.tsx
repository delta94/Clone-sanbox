__d(
  "MWV2TombstonedMessage.react",
  [
    "MWXMessageBubbleCornerStyles.react",
    "MWXText.react",
    "react",
    "react-strict-dom",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        message: {
          fontStyle: "x1k4tb9n",
          marginBottom: "x12nagc",
          marginTop: "x1gslohp",
          $$css: !0,
        },
        root: {
          borderTopColor: "x2z21go",
          borderEndColor: "x7glw7h",
          borderBottomColor: "xytfwv8",
          borderStartColor: "x1c7a9eh",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x178xt8z",
          borderEndWidth: "xm81vs4",
          borderBottomWidth: "xso031l",
          borderStartWidth: "xy80clv",
          color: "x1tbs7aw",
          maxWidth: "x193iq5w",
          paddingTop: "x1y1aw1k",
          paddingEnd: "xn6708d",
          paddingBottom: "xwib8y2",
          paddingStart: "x1ye3gou",
          wordBreak: "x13faqbe",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        e = a.connectBottom;
      e = e === void 0 ? !1 : e;
      var f = a.connectTop;
      f = f === void 0 ? !1 : f;
      a = a.xstyle;
      e = d("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
        connectBottom: e,
        connectTop: f,
      });
      return i.jsx(d("react-strict-dom").html.div, {
        style: [j.root, e, a],
        children: i.jsx(c("MWXText.react"), {
          color: "disabled",
          type: "body3",
          children: i.jsx(d("react-strict-dom").html.div, {
            style: j.message,
            children: b,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import { getMWXBubbleCornerStyles } from "MWXMessageBubbleCornerStyles.react";
import MWXText from "MWXText.react";
import React from "react";
import { html } from "react-strict-dom";

const styles = {
  message: {
    fontStyle: "x1k4tb9n",
    marginBottom: "x12nagc",
    marginTop: "x1gslohp",
    $$css: true,
  },
  root: {
    borderTopColor: "x2z21go",
    borderEndColor: "x7glw7h",
    borderBottomColor: "xytfwv8",
    borderStartColor: "x1c7a9eh",
    borderTopStyle: "x13fuv20",
    borderEndStyle: "xu3j5b3",
    borderBottomStyle: "x1q0q8m5",
    borderStartStyle: "x26u7qi",
    borderTopWidth: "x178xt8z",
    borderEndWidth: "xm81vs4",
    borderBottomWidth: "xso031l",
    borderStartWidth: "xy80clv",
    color: "x1tbs7aw",
    maxWidth: "x193iq5w",
    paddingTop: "x1y1aw1k",
    paddingEnd: "xn6708d",
    paddingBottom: "xwib8y2",
    paddingStart: "x1ye3gou",
    wordBreak: "x13faqbe",
    $$css: true,
  },
};

interface TombstonedMessageProps {
  children: React.ReactNode;
  connectBottom?: boolean;
  connectTop?: boolean;
  xstyle?: React.CSSProperties;
}

const TombstonedMessage: React.FC<TombstonedMessageProps> = ({
  children,
  connectBottom = false,
  connectTop = false,
  xstyle,
}) => {
  const cornerStyles = getMWXBubbleCornerStyles({
    connectBottom,
    connectTop,
  });

  return (
    <html.div style={{ ...styles.root, ...cornerStyles, ...xstyle }}>
      <MWXText color="disabled" type="body3">
        <html.div style={styles.message}>{children}</html.div>
      </MWXText>
    </html.div>
  );
};

TombstonedMessage.displayName =
  "TombstonedMessage [from MWV2TombstonedMessage.react]";

export default TombstonedMessage;
