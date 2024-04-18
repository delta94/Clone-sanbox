__d("CometTopNavTargetedTabWrapper.react", ["CometRelay", "CometTopNavTabComponentShared.react", "react", "useHideNotificationsToasts", "useToasterStateManager"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useEffect,
        k = b.useMemo;

    function a(a) {
        var b = a.actorID,
            e = a.badgeComponent,
            f = a.badgeSubscriptionCallback,
            g = a.badgeTestID,
            h = babelHelpers.objectWithoutPropertiesLoose(a, ["actorID", "badgeComponent", "badgeSubscriptionCallback", "badgeTestID"]),
            m = d("CometRelay").useRelayEnvironment(),
            n = c("useToasterStateManager")(),
            o = c("useHideNotificationsToasts")();
        j(function () {
            if (f) return f(b, m, n, o)
        }, [b, f, m, o, n]);
        a = k(function () {
            return l(e, h.badgeCount, g)
        }, [e, h.badgeCount, g]);
        return i.jsx(c("CometTopNavTabComponentShared.react"), babelHelpers["extends"]({
            badgeRenderer: a
        }, h))
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function l(a, b, c) {
        return function (c) {
            var d = c.isBadgeHidden,
                e = c.isTab;
            c = c.overflow;
            return a == null ? null : i.jsx(a, {
                isBadgeHidden: d,
                isTab: e,
                overflow: c,
                testid: void 0,
                value: (d = b) != null ? d : 0
            })
        }
    }
    g["default"] = a
}), 98);


import { CometRelay, useRelayEnvironment } from 'CometRelay';
import CometTopNavTabComponentShared from 'CometTopNavTabComponentShared.react';
import React, { useEffect, useMemo } from 'react';
import useHideNotificationsToasts from 'useHideNotificationsToasts';
import useToasterStateManager from 'useToasterStateManager';

interface Props {
  actorID: string;
  badgeComponent?: React.ComponentType<{
    isBadgeHidden: boolean;
    isTab: boolean;
    overflow: boolean;
    testid?: string;
    value: number;
  }>;
  badgeSubscriptionCallback?: (
    actorID: string,
    relayEnvironment: any,
    toasterStateManager: any,
    hideNotificationsToasts: boolean
  ) => void;
  badgeTestID?: string;
  badgeCount?: number;
}

function CometTopNavTargetedTabWrapper({
  actorID,
  badgeComponent,
  badgeSubscriptionCallback,
  badgeTestID,
  ...props
}: Props) {
  const relayEnvironment = CometRelay.useRelayEnvironment();
  const toasterStateManager = useToasterStateManager();
  const hideNotificationsToasts = useHideNotificationsToasts();

  useEffect(() => {
    if (badgeSubscriptionCallback) {
      return badgeSubscriptionCallback(
        actorID,
        relayEnvironment,
        toasterStateManager,
        hideNotificationsToasts
      );
    }
  }, [actorID, badgeSubscriptionCallback, relayEnvironment, hideNotificationsToasts, toasterStateManager]);

  const badgeRenderer = useMemo(
    () => getBadgeRenderer(badgeComponent, props.badgeCount, badgeTestID),
    [badgeComponent, props.badgeCount, badgeTestID]
  );

  return (
    <CometTopNavTabComponentShared
      badgeRenderer={badgeRenderer}
      {...props}
    />
  );
}

CometTopNavTargetedTabWrapper.displayName = `${CometTopNavTargetedTabWrapper.name} [from ???]`;

function getBadgeRenderer(
  badgeComponent: Props['badgeComponent'],
  badgeCount: Props['badgeCount'],
  testid?: string
) {
  return ({ isBadgeHidden, isTab, overflow }: any) => {
    if (badgeComponent == null) {
      return null;
    }

    const value = badgeCount != null ? badgeCount : 0;

    const BadgeComp = badgeComponent
    
    return (
      <BadgeComp
        isBadgeHidden={isBadgeHidden}
        isTab={isTab}
        overflow={overflow}
        testid={undefined}
        value={value}
      />
    );
  };
}

export default CometTopNavTargetedTabWrapper;