__d(
  "MWXLink.react",
  ["E2EEMessagingLinkContext.react", "cr:269", "cr:820", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    c = i.forwardRef(a);
    function a(a, c) {
      var e = a.encryptedLink;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["encryptedLink"]);
      var f = d("E2EEMessagingLinkContext.react").useE2EEMessagingLink();
      f =
        f || e === !0
          ? {
              disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV:
                !0,
              disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV:
                !0,
              rel: ["noreferrer", "noopener", "nofollow"],
            }
          : {};
      if (b("cr:269"))
        return i.jsx(
          b("cr:269"),
          babelHelpers["extends"]({}, a, f, { ref: c })
        );
      return b("cr:820")
        ? i.jsx(b("cr:820"), babelHelpers["extends"]({}, a, f, { ref: c }))
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c;
    g["default"] = e;
  },
  98
);

import E2EEMessagingLinkContext from "E2EEMessagingLinkContext.react";
import CometLink from "cr:269";
import React, { forwardRef, JSX } from "react";

interface MWXLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  encryptedLink?: boolean;
}

const MWXLink = forwardRef<HTMLAnchorElement, MWXLinkProps>(
  (props, ref): JSX.Element | null => {
    const { encryptedLink, ...rest } = props;
    const e2eeMessagingLink = E2EEMessagingLinkContext.useE2EEMessagingLink();

    const linkProps =
      e2eeMessagingLink || encryptedLink === true
        ? {
            disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV:
              true,
            disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV:
              true,
            rel: ["noreferrer", "noopener", "nofollow"],
          }
        : {};

    if (CometLink) {
      return <CometLink {...rest} {...linkProps} ref={ref} />;
    }

    return null;
  }
);

MWXLink.displayName = `${MWXLink.name} [from MWXLink.react]`;

export default MWXLink;
