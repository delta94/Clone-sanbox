__d(
  "MWChatMessageUnreadIndicator.react",
  [
    "fbt",
    "MDSRow.react",
    "MDSRowItem.react",
    "MWXText.react",
    "react",
    "react-strict-dom",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || d("react"),
      k = {
        color: { color: "x186z157", $$css: !0 },
        line: {
          backgroundColor: "x1m026b5",
          flexGrow: "x1iyjqo2",
          height: "xjm9jq1",
          $$css: !0,
        },
      };
    function a() {
      var a = h._("__JHASH__dAK4xN4bf5e__JHASH__");
      return j.jsxs(c("MDSRow.react"), {
        "aria-label": a,
        paddingVertical: 12,
        spacingVertical: 0,
        children: [
          j.jsx(c("MDSRowItem.react"), {
            verticalAlign: "center",
            xstyle: k.line,
            children: j.jsx(j.Fragment, {}),
          }),
          j.jsx(c("MDSRowItem.react"), {
            children: j.jsx(c("MWXText.react"), {
              color: "secondary",
              isSemanticHeading: !0,
              type: "meta4",
              children: j.jsx(d("react-strict-dom").html.div, {
                style: k.color,
                children: a,
              }),
            }),
          }),
          j.jsx(c("MDSRowItem.react"), {
            verticalAlign: "center",
            xstyle: k.line,
            children: j.jsx(j.Fragment, {}),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import React, { Fragment } from "react";
import { html } from "react-strict-dom";
import MDSRow from "MDSRow.react";
import MDSRowItem from "MDSRowItem.react";
import MWXText from "MWXText.react";

interface Props {}

const MWChatMessageUnreadIndicator: React.FC<Props> = () => {
  const styles = {
    color: { color: "x186z157", $$css: true },
    line: {
      backgroundColor: "x1m026b5",
      flexGrow: "x1iyjqo2",
      height: "xjm9jq1",
      $$css: true,
    },
  };

  return (
    <MDSRow
      aria-label="Unread messages"
      paddingVertical={12}
      spacingVertical={0}
    >
      <MDSRowItem verticalAlign="center" xstyle={styles.line}>
        <Fragment />
      </MDSRowItem>
      <MDSRowItem>
        <MWXText color="secondary" isSemanticHeading={true} type="meta4">
          <html.div style={styles.color}>Unread messages</html.div>
        </MWXText>
      </MDSRowItem>
      <MDSRowItem verticalAlign="center" xstyle={styles.line}>
        <Fragment />
      </MDSRowItem>
    </MDSRow>
  );
};

MWChatMessageUnreadIndicator.displayName = `${MWChatMessageUnreadIndicator.name} [from ${f.id}]`;

export default MWChatMessageUnreadIndicator;
