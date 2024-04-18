__d("CometProfilePlusAPPageInboxMessageButtonImpl.react", ["CometErrorBoundary.react", "CometIconMessengerFilled.react", "CometPlaceholder.react", "CometPressable.react", "DmaMessengerOptOutFilled24.svg.react", "MWFacebookUserWithoutMessengerAccess", "SVGIcon", "TetraCircleButton.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.deferredBadgeCount,
            e = a.label,
            f = a.linkProps,
            g = a.onPress;
        a = a.setBadgeCount;
        b = b;
        var h = d("MWFacebookUserWithoutMessengerAccess").useIsFacebookUserWithoutMessengerAccess();
        h = h ? c("DmaMessengerOptOutFilled24.svg.react") : d("SVGIcon").legacySVGIcon(c("CometIconMessengerFilled.react"));
        return i.jsxs(c("CometPressable.react"), {
            label: e,
            linkProps: f,
            onPress: g,
            style: {
                borderRadius: "50%"
            },
            children: [i.jsx(c("TetraCircleButton.react"), {
                icon: h,
                label: e,
                linkProps: f,
                onPress: g,
                size: 40
            }), b != null && i.jsx(c("CometErrorBoundary.react"), {
                children: i.jsx(c("CometPlaceholder.react"), {
                    fallback: i.jsx("span", {}),
                    children: i.jsx("span", {
                        className: "x10l6tqk x8zc4e7 xtu2xtp x1vjfegm",
                        children: i.jsx(b, {
                            setBadgeCount: a
                        })
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { FC } from 'react';
import { CometErrorBoundary } from './CometErrorBoundary.react';
import { CometIconMessengerFilled } from './CometIconMessengerFilled.react';
import { CometPlaceholder } from './CometPlaceholder.react';
import { CometPressable } from './CometPressable.react';
import { DmaMessengerOptOutFilled24 } from './DmaMessengerOptOutFilled24.svg.react';
import { MWFacebookUserWithoutMessengerAccess } from './MWFacebookUserWithoutMessengerAccess';
import { SVGIcon } from './SVGIcon';
import { TetraCircleButton } from './TetraCircleButton.react';

interface Props {
  deferredBadgeCount: React.ReactNode;
  label: string;
  linkProps: any; // Type of linkProps should be defined properly
  onPress: () => void;
  setBadgeCount: () => void; // Type of setBadgeCount should be defined properly
}

const CometProfilePlusAPPageInboxMessageButtonImpl: FC<Props> = ({
  deferredBadgeCount,
  label,
  linkProps,
  onPress,
  setBadgeCount,
}) => {
  const isFacebookUserWithoutMessengerAccess = MWFacebookUserWithoutMessengerAccess.useIsFacebookUserWithoutMessengerAccess();
  const IconComponent = isFacebookUserWithoutMessengerAccess ? DmaMessengerOptOutFilled24 : SVGIcon.legacySVGIcon(CometIconMessengerFilled);

  return (
    <CometPressable
      label={label}
      linkProps={linkProps}
      onPress={onPress}
      style={{ borderRadius: "50%" }}
    >
      <>
        <TetraCircleButton
          icon={<IconComponent />}
          label={label}
          linkProps={linkProps}
          onPress={onPress}
          size={40}
        />
        {deferredBadgeCount != null && (
          <CometErrorBoundary>
            <CometPlaceholder
              fallback={<span />}
            >
              <span className="x10l6tqk x8zc4e7 xtu2xtp x1vjfegm">
                {React.createElement(deferredBadgeCount, {
                  setBadgeCount: setBadgeCount,
                })}
              </span>
            </CometPlaceholder>
          </CometErrorBoundary>
        )}
      </>
    </CometPressable>
  );
};

export default CometProfilePlusAPPageInboxMessageButtonImpl;
