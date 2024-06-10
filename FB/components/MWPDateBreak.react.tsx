__d(
  "MWPDateBreak.react",
  [
    "BaseHeading.react",
    "FDSTimestamp.react",
    "MWTheme.react",
    "MWXText.react",
    "formatDate",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react"),
      k = {
        mask: { backgroundColor: "x1eb86dx", $$css: !0 },
        root: {
          marginBottom: "xjpr12u",
          marginTop: "xr9ek0c",
          textAlign: "x2b8uid",
          $$css: !0,
        },
      };
    function l(a) {
      var b = a.renderTextWrapper;
      a = a.timestamp;
      a = j.jsx("span", {
        className: "x186z157 xk50ysn",
        children: c("formatDate")(new Date(a), {
          future: "g:ia",
          older: "m/d/Y g:ia",
          thisYear: "M jS, g:ia",
          today: "g:ia",
          withinWeek: "D g:ia",
        }),
      });
      return b != null ? b(a) : a;
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.renderTextWrapper;
      a = a.timestamp;
      var e = d("MWTheme.react").useTheme();
      return j.jsxs(c("BaseHeading.react"), {
        testid: void 0,
        children: [
          j.jsx("div", {
            className: "xzpqnlu x1hyvwdk xqtp20y x6ikm8r x10wlt62 xnalus7",
            children: j.jsx(c("FDSTimestamp.react"), { date: new Date(a) }),
          }),
          j.jsx("div", {
            "aria-hidden": !0,
            className: (h || (h = c("stylex")))(
              k.root,
              d("MWTheme.react").isGradient(e) && k.mask
            ),
            "data-scope": "date_break",
            children: j.jsx(c("MWXText.react"), {
              color: "tertiary",
              type: "meta4",
              children: j.jsx(l, { renderTextWrapper: b, timestamp: a }),
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import BaseHeading from "BaseHeading.react";
import FDSTimestamp from "FDSTimestamp.react";
import MWTheme from "MWTheme.react";
import MWXText from "MWXText.react";
import formatDate from "formatDate";
import stylex from "stylex";

interface MWPDateBreakProps {
  renderTextWrapper?: (element: JSX.Element) => JSX.Element;
  timestamp: number;
}

const styles = {
  mask: { backgroundColor: "x1eb86dx", $$css: true },
  root: {
    marginBottom: "xjpr12u",
    marginTop: "xr9ek0c",
    textAlign: "x2b8uid",
    $$css: true,
  },
};

const FormattedDate: React.FC<{
  renderTextWrapper?: (element: JSX.Element) => JSX.Element;
  timestamp: number;
}> = ({ renderTextWrapper, timestamp }) => {
  const formattedDate = (
    <span className="x186z157 xk50ysn">
      {formatDate(new Date(timestamp), {
        future: "g:ia",
        older: "m/d/Y g:ia",
        thisYear: "M jS, g:ia",
        today: "g:ia",
        withinWeek: "D g:ia",
      })}
    </span>
  );

  return renderTextWrapper ? renderTextWrapper(formattedDate) : formattedDate;
};

FormattedDate.displayName = `${FormattedDate.name} [from ${module.id}]`;

const MWPDateBreak: React.FC<MWPDateBreakProps> = ({
  renderTextWrapper,
  timestamp,
}) => {
  const theme = MWTheme.useTheme();

  return (
    <BaseHeading>
      <div className="xzpqnlu x1hyvwdk xqtp20y x6ikm8r x10wlt62 xnalus7">
        <FDSTimestamp date={new Date(timestamp)} />
      </div>
      <div
        aria-hidden="true"
        className={stylex(
          styles.root,
          MWTheme.isGradient(theme) && styles.mask
        )}
        data-scope="date_break"
      >
        <MWXText color="tertiary" type="meta4">
          <FormattedDate
            renderTextWrapper={renderTextWrapper}
            timestamp={timestamp}
          />
        </MWXText>
      </div>
    </BaseHeading>
  );
};

MWPDateBreak.displayName = `${MWPDateBreak.name} [from ${module.id}]`;

export default MWPDateBreak;
