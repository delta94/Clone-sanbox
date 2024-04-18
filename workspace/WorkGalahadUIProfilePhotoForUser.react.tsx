__d("WorkGalahadUIProfilePhotoForUser.react", ["ix", "CometTooltip.react", "RelayHooks", "TetraIcon.react", "WorkForeignEntityType", "WorkGalahadUIProfilePhotoForActor.react", "WorkGalahadUIProfilePhotoForUser_user.graphql", "WorkplaceDoNotDisturbUtils", "cr:5625", "fbicon", "getJSEnumSafe", "gkx", "profilePhotoUtils", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k, l = k || d("react"),
        m = {
            deactivated: {
                opacity: "xbyyjgo",
                $$css: !0
            }
        },
        n = c("gkx")("7278");

    function a(a) {
        var e, f, g = a.user,
            h = a.size,
            k = a.badgeData;
        a = a.disableAltText;
        a = a === void 0 ? !1 : a;
        g = d("RelayHooks").useFragment(i !== void 0 ? i : i = b("WorkGalahadUIProfilePhotoForUser_user.graphql"), g);
        e = g.is_work_user === !0 && !((e = g.work_info) == null ? void 0 : e.is_active_account);
        f = n ? "NOT_FOREIGN" : c("getJSEnumSafe")(c("WorkForeignEntityType"), (f = g.work_foreign_entity_info) == null ? void 0 : f.type);
        var p = n && !c("gkx")("7601") || b("cr:5625") != null && b("cr:5625")({
            user: g
        });
        f = o(f, e, p ? void 0 : k, g.name, h);
        return l.jsx("div", {
            className: (j || (j = c("stylex")))(e && m.deactivated),
            children: l.jsx(c("WorkGalahadUIProfilePhotoForActor.react"), {
                actor: g,
                addOn: f,
                alt: a ? void 0 : (p = g.name) != null ? p : "",
                size: h,
                shape: "circle"
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function o(a, b, c, e, f) {
        a = t(a, f);
        if (a != null) return a;
        if (c == null || b) return void 0;
        a = c.endDate;
        b = c.userStatus;
        c = b === "doNotDisturb" ? "activityBadge" : b === "active" ? "availabilityBadge" : void 0;
        b = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(f, c);
        f = b[0];
        return c === "activityBadge" ? u(e, a, f, c) : c === "availabilityBadge" ? {
            type: c
        } : void 0
    }

    function p(a, b) {
        return a == null ? d("WorkplaceDoNotDisturbUtils").getHumanReadableSelfDescription(b) : d("WorkplaceDoNotDisturbUtils").getHumanReadableDescriptionWithUserName(a, b)
    }

    function q(a) {
        return a >= 24 ? d("fbicon")._(h("832943"), 24) : a >= 20 ? d("fbicon")._(h("832941"), 20) : a >= 16 ? d("fbicon")._(h("832939"), 16) : d("fbicon")._(h("832937"), 12)
    }

    function r(a) {
        return a >= 24 ? d("fbicon")._(h("785429"), 24) : a >= 20 ? d("fbicon")._(h("785428"), 20) : a >= 16 ? d("fbicon")._(h("785427"), 16) : d("fbicon")._(h("785426"), 12)
    }

    function s(a) {
        return a >= 32 ? 32 : a >= 28 ? 28 : a >= 16 ? 16 : a >= 10 ? 10 : 8
    }

    function t(a, b) {
        if (a === "NOT_FOREIGN" || a === "LIMITED") return void 0;
        a = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(b);
        b = a[0];
        a = r(b);
        return {
            backgroundColor: "var(--card-background)",
            icon: l.jsx(c("TetraIcon.react"), {
                icon: a
            }),
            size: s(b),
            type: "activityBadge"
        }
    }

    function u(a, b, d, e) {
        return {
            backgroundColor: "var(--media-outer-border)",
            icon: l.jsx(c("CometTooltip.react"), {
                align: "start",
                tooltip: p(a, b),
                children: l.jsx(c("TetraIcon.react"), {
                    color: "disabled",
                    icon: q(d)
                })
            }),
            size: s(d),
            type: e
        }
    }
    g["default"] = a
}), 98);



import React from 'react';
import { CometTooltip } from 'CometTooltip.react';
import { useFragment } from 'RelayHooks';
import { TetraIcon } from 'TetraIcon.react';
import { WorkForeignEntityType } from 'WorkForeignEntityType';
import { WorkGalahadUIProfilePhotoForActor } from 'WorkGalahadUIProfilePhotoForActor.react';
import { WorkGalahadUIProfilePhotoForUser_user } from 'WorkGalahadUIProfilePhotoForUser_user.graphql';
import { WorkplaceDoNotDisturbUtils } from 'WorkplaceDoNotDisturbUtils';
import * as isWorkVisibilityHidden from 'isWorkVisibilityHidden'; 
import { fbicon } from 'fbicon';
import { getJSEnumSafe } from 'getJSEnumSafe';
import { gkx } from 'gkx';
import * as profilePhotoUtils from 'profilePhotoUtils';
import { stylex } from 'stylex';

const styles = {
  deactivated: stylex({
    opacity: 'xbyyjgo',
  })
};

const useNewForeignBadge = gkx('7278');

interface Props {
  user: WorkGalahadUIProfilePhotoForUser_user;
  size: number;
  badgeData?: {
    userStatus: string;
    endDate: Date;
  };
  disableAltText?: boolean;
}

function WorkGalahadUIProfilePhotoForUser(props: Props) {
  const { user, size, badgeData, disableAltText = false } = props;

  const userRef = useFragment(WorkGalahadUIProfilePhotoForUser_user, user);

  const isDeactivated = userRef.is_work_user === true && !userRef.work_info?.is_active_account;
  
  const foreignType = useNewForeignBadge ? 'NOT_FOREIGN' : getJSEnumSafe(WorkForeignEntityType, userRef.work_foreign_entity_info?.type);

  const showBadge = useNewForeignBadge && !gkx('7601') || isWorkVisibilityHidden != null && isWorkVisibilityHidden({user});

  const addOn = getAddOn(
    foreignType,
    isDeactivated,
    showBadge ? undefined : badgeData,
    user.name,
    size
  );

  return (
    <div className={isDeactivated && styles.deactivated}>
      <WorkGalahadUIProfilePhotoForActor
        actor={user}
        addOn={addOn}
        alt={disableAltText ? undefined : user.name ?? ''}
        size={size}
        shape="circle"
      />
    </div>
  );
}

function getAddOn(
  foreignType: WorkForeignEntityType,
  isDeactivated: boolean,
  badgeData?: {
    userStatus: string;
    endDate: Date;
  },
  name?: string,
  size: number
) {
  const foreignBadge = getForeignBadge(foreignType, size);
  if (foreignBadge != null) {
    return foreignBadge;
  }

  if (badgeData == null || isDeactivated) {
    return undefined;
  }

  const { endDate, userStatus } = badgeData;
  let badgeType;
  if (userStatus === 'doNotDisturb') {
    badgeType = 'activityBadge';
  } else if (userStatus === 'active') {
    badgeType = 'availabilityBadge';
  }

  const [badgeSize, badgeStrokeWidth] = profilePhotoUtils.getBadgeSizeAndStrokeWidth(size, badgeType);

  if (badgeType === 'activityBadge') {
    return getActivityBadge(name, endDate, badgeSize, badgeType);
  } else if (badgeType === 'availabilityBadge') {
    return {
      type: badgeType
    };
  }

  return undefined;
}

function getStatusText(name?: string, endDate: Date) {
  return name == null ? WorkplaceDoNotDisturbUtils.getHumanReadableSelfDescription(endDate) : 
    WorkplaceDoNotDisturbUtils.getHumanReadableDescriptionWithUserName(name, endDate);
}

function getActivityIcon(size: number) {
  if (size >= 24) {
    return fbicon._(/* asset */ '832943', 24);
  } else if (size >= 20) {
    return fbicon._(/* asset */ '832941', 20);
  } else if (size >= 16) {
    return fbicon._(/* asset */ '832939', 16);
  } else {
    return fbicon._(/* asset */ '832937', 12);
  }
}

function getAvailabilityIcon(size: number) {
  if (size >= 24) {
    return fbicon._(/* asset */ '785429', 24);
  } else if (size >= 20) { 
    return fbicon._(/* asset */ '785428', 20);
  } else if (size >= 16) {
    return fbicon._(/* asset */ '785427', 16);
  } else {
    return fbicon._(/* asset */ '785426', 12);
  }
}

function getIconSize(size: number) {
  if (size >= 32) {
    return 32;
  } else if (size >= 28) {
    return 28;
  } else if (size >= 16) {
    return 16;
  } else if (size >= 10) {
    return 10;
  } else {
    return 8;
  }
}

function getForeignBadge(foreignType: WorkForeignEntityType, size: number) {
  if (foreignType === 'NOT_FOREIGN' || foreignType === 'LIMITED') {
    return undefined;
  }

  const [badgeSize] = profilePhotoUtils.getBadgeSizeAndStrokeWidth(size);
  const icon = getAvailabilityIcon(badgeSize);

  return {
    backgroundColor: 'var(--card-background)',
    icon: <TetraIcon icon={icon} />,
    size: getIconSize(badgeSize),
    type: 'activityBadge',
  };
}

function getActivityBadge(
  name?: string,
  endDate?: Date,
  size: number,
  type: string
) {
  return {
    backgroundColor: 'var(--media-outer-border)',
    icon: (
      <CometTooltip
        align="start"
        tooltip={getStatusText(name, endDate)}
      >
        <TetraIcon
          color="disabled"
          icon={getActivityIcon(size)} 
        />
      </CometTooltip>
    ),
    size: getIconSize(size),
    type,
  };
}

export default WorkGalahadUIProfilePhotoForUser;