__d(
  "MWV2MediaViewerContainer.react",
  [
    "MessengerBlurpleLogoSvg.react",
    "UNTRANSLATED_STRING_FIXME",
    "XMessengerDotComCometRootControllerRouteBuilder",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.actions,
        d = a.children;
      a = a.shouldShowMessengerLogo;
      return i.jsxs("div", {
        className:
          "x1qjc9v5 xal61yo x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d x6ikm8r x10wlt62 x1n2onr6 x87ps6o x1uvtmcs",
        "data-testid": void 0,
        children: [
          d,
          i.jsx("div", {
            className: "x10l6tqk x16q8cke x1tk7jg1",
            children: ((d = a) != null ? d : !1)
              ? i.jsx("a", {
                  "aria-label": c("UNTRANSLATED_STRING_FIXME")("Messenger"),
                  href: c(
                    "XMessengerDotComCometRootControllerRouteBuilder"
                  ).buildURL({}),
                  children: i.jsx(c("MessengerBlurpleLogoSvg.react"), {
                    height: "40",
                    width: "40",
                  }),
                })
              : null,
          }),
          i.jsx("div", { className: "x92rtbv x10l6tqk x1tk7jg1", children: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import MessengerBlurpleLogoSvg from "MessengerBlurpleLogoSvg.react";
import { UNTRANSLATED_STRING_FIXME } from "UNTRANSLATED_STRING_FIXME";
import { XMessengerDotComCometRootControllerRouteBuilder } from "XMessengerDotComCometRootControllerRouteBuilder";

type Props = {
  actions: React.ReactNode;
  children: React.ReactNode;
  shouldShowMessengerLogo: boolean;
};

const MWV2MediaViewerContainer: React.FC<Props> = ({
  actions,
  children,
  shouldShowMessengerLogo,
}) => {
  return (
    <div
      className="x1qjc9v5 xal61yo x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d x6ikm8r x10wlt62 x1n2onr6 x87ps6r x1uvtmcs"
      data-testid={undefined}
    >
      {children}
      <div className="x10l6tqk x16q8cke x1tk7jg1">
        {shouldShowMessengerLogo ? (
          <a
            aria-label={UNTRANSLATED_STRING_FIXME("Messenger")}
            href={XMessengerDotComCometRootControllerRouteBuilder.buildURL({})}
          >
            <MessengerBlurpleLogoSvg height="40" width="40" />
          </a>
        ) : null}
      </div>
      <div className="x92rtbv x10l6tqk x1tk7jg1">{actions}</div>
    </div>
  );
};

MWV2MediaViewerContainer.displayName = `${MWV2MediaViewerContainer.name} [from 98]`;

export default MWV2MediaViewerContainer;
