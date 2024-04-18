__d("WorkGalahadUIAppTabSelectorSVGIcon.react", ["ix", "Image.react", "WorkCometIconAdminPanel.react", "WorkCometIconAdminPanelFilled.react", "WorkCometIconCalendar.react", "WorkCometIconCalendarFilled.react", "WorkCometIconChat.react", "WorkCometIconChatFilled.react", "WorkCometIconCompass.react", "WorkCometIconCompassFilled.react", "WorkCometIconInbox.react", "WorkCometIconInboxFilled.react", "WorkCometIconKnowledgeLibrary.react", "WorkCometIconKnowledgeLibraryFilled.react", "WorkCometIconNewsfeed.react", "WorkCometIconNewsfeedFilled.react", "WorkCometIconNotifications.react", "WorkCometIconNotificationsFilled.react", "WorkCometIconProfile.react", "WorkCometIconProfileFilled.react", "WorkCometIconTools.react", "WorkCometIconToolsFilled.react", "WorkCometIconWatchTv.react", "WorkCometIconWatchTvFilled.react", "WorkCometIconWorkplace.react", "WorkCometIconWorkrooms.react", "WorkCometIconWorkroomsFilled.react", "deferredLoadComponent", "react", "requireDeferredForDisplay"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || d("react"),
        k = c("deferredLoadComponent")(c("requireDeferredForDisplay")("WorkCometIconShifts.react").__setRef("WorkGalahadUIAppTabSelectorSVGIcon.react")),
        l = 32;

    function a(a) {
        var b = a.iconName;
        a = a.selected;
        var d = a ? "active-tab" : "inactive-tab";
        switch (b) {
            case "ADMIN":
                return a ? j.jsx(c("WorkCometIconAdminPanelFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconAdminPanel.react"), {
                    size: l,
                    color: d
                });
            case "CHAT":
                return a ? j.jsx(c("WorkCometIconChatFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconChat.react"), {
                    size: l,
                    color: d
                });
            case "HOME":
                return j.jsx(c("WorkCometIconWorkplace.react"), {
                    size: l,
                    color: d
                });
            case "NOTIFICATIONS":
                return a ? j.jsx(c("WorkCometIconNotificationsFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconNotifications.react"), {
                    size: l,
                    color: d
                });
            case "FEED":
                return a ? j.jsx(c("WorkCometIconNewsfeedFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconNewsfeed.react"), {
                    size: l,
                    color: d
                });
            case "COMPASS":
                return a ? j.jsx(c("WorkCometIconCompassFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconCompass.react"), {
                    size: l,
                    color: d
                });
            case "PROFILE":
                return a ? j.jsx(c("WorkCometIconProfileFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconProfile.react"), {
                    size: l,
                    color: d
                });
            case "DIRECT":
                return a ? j.jsx(c("WorkCometIconInboxFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconInbox.react"), {
                    size: l,
                    color: d
                });
            case "KNOWLEDGE_LIBRARY":
                return a ? j.jsx(c("WorkCometIconKnowledgeLibraryFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconKnowledgeLibrary.react"), {
                    size: l,
                    color: d
                });
            case "CONTENT_MANAGER":
                return a ? j.jsx(c("Image.react"), {
                    src: h("968083")
                }) : j.jsx(c("Image.react"), {
                    src: h("291098")
                });
            case "MEETING":
                return a ? j.jsx(c("WorkCometIconCalendarFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconCalendar.react"), {
                    size: l,
                    color: d
                });
            case "TOOLS":
                return a ? j.jsx(c("WorkCometIconToolsFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconTools.react"), {
                    size: l,
                    color: d
                });
            case "WATCH":
                return a ? j.jsx(c("WorkCometIconWatchTvFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconWatchTv.react"), {
                    size: l,
                    color: d
                });
            case "WORKROOMS":
                return a ? j.jsx(c("WorkCometIconWorkroomsFilled.react"), {
                    size: l,
                    color: d
                }) : j.jsx(c("WorkCometIconWorkrooms.react"), {
                    size: l,
                    color: d
                });
            case "SHIFTS":
                return j.jsx(k, {
                    selected: a
                });
            default:
                return null
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.supportsIcon = function (a) {
        return a !== "HEADLINES"
    };
    g["default"] = a
}), 98);


import React, { JSXElementConstructor } from 'react';
import deferredLoadComponent from "deferredLoadComponent"
import requireDeferredForDisplay from "requireDeferredForDisplay"
import WorkCometIconShifts from "WorkCometIconShifts"
import WorkCometIconAdminPanelFilled from "WorkCometIconAdminPanelFilled"
import WorkCometIconAdminPanel from "WorkCometIconAdminPanel"


interface WorkGalahadUIAppTabSelectorSVGIconProps {
  iconName: string;
  selected: boolean;
}

const WorkCometIconShifts = deferredLoadComponent(requireDeferredForDisplay(WorkCometIconShifts))

const WorkGalahadUIAppTabSelectorSVGIcon: JSXElementConstructor<WorkGalahadUIAppTabSelectorSVGIconProps> = (
  props: WorkGalahadUIAppTabSelectorSVGIconProps
) => {
  const { iconName, selected } = props;
  const activeTab = selected ? 'active-tab' : 'inactive-tab';

  switch (iconName) {
    case 'ADMIN':
      return selected ? <WorkCometIconAdminPanelFilled size={32} color={activeTab} /> : <WorkCometIconAdminPanel size={32} color={activeTab} />;
    case 'CHAT':
      return selected ? <WorkCometIconChatFilled size={32} color={activeTab} /> : <WorkCometIconChat size={32} color={activeTab} />;
    case 'HOME':
      return <WorkCometIconWorkplace size={32} color={activeTab} />;
    case 'NOTIFICATIONS':
      return selected ? <WorkCometIconNotificationsFilled size={32} color={activeTab} /> : <WorkCometIconNotifications size={32} color={activeTab} />;
    case 'FEED':
      return selected ? <WorkCometIconNewsfeedFilled size={32} color={activeTab} /> : <WorkCometIconNewsfeed size={32} color={activeTab} />;
    case 'COMPASS':
      return selected ? <WorkCometIconCompassFilled size={32} color={activeTab} /> : <WorkCometIconCompass size={32} color={activeTab} />;
    case 'PROFILE':
      return selected ? <WorkCometIconProfileFilled size={32} color={activeTab} /> : <WorkCometIconProfile size={32} color={activeTab} />;
    case 'DIRECT':
      return selected ? <WorkCometIconInboxFilled size={32} color={activeTab} /> : <WorkCometIconInbox size={32} color={activeTab} />;
    case 'KNOWLEDGE_LIBRARY':
      return selected ? <WorkCometIconKnowledgeLibraryFilled size={32} color={activeTab} /> : <WorkCometIconKnowledgeLibrary size={32} color={activeTab} />;
    case 'CONTENT_MANAGER':
      return selected ? <Image src={""} /> : <Image src={""} />;
    case 'MEETING':
      return selected ? <WorkCometIconCalendarFilled size={32} color={activeTab} /> : <WorkCometIconCalendar size={32} color={activeTab} />;
    case 'TOOLS':
      return selected ? <WorkCometIconToolsFilled size={32} color={activeTab} /> : <WorkCometIconTools size={32} color={activeTab} />;
    case 'WATCH':
      return selected ? <WorkCometIconWatchTvFilled size={32} color={activeTab} /> : <WorkCometIconWatchTv size={32} color={activeTab} />;
    case 'WORKROOMS':
      return selected ? <WorkCometIconWorkroomsFilled size={32} color={activeTab} /> : <WorkCometIconWorkrooms size={32} color={activeTab} />;
    case 'SHIFTS':
      return <WorkCometIconShifts selected={selected} />;
    default:
      return null;
  }
};

WorkGalahadUIAppTabSelectorSVGIcon.displayName = `${WorkGalahadUIAppTabSelectorSVGIcon.name} [from ${f.id}]`;

WorkGalahadUIAppTabSelectorSVGIcon.supportsIcon = function (icon: string) {
  return icon !== 'HEADLINES';
};

export default WorkGalahadUIAppTabSelectorSVGIcon;
