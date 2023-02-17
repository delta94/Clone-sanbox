// __d("FriendListCometCloseFriendsBadge", ["CometIcon.react", "CometLazyPopoverTrigger.react", "CometPressable.react", "JSResourceForInteraction", "StarFilled12.svg.react", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react"),
//         i = c("JSResourceForInteraction")("FriendListCometCloseFriendsManagePopover.react").__setRef("FriendListCometCloseFriendsBadge"),
//         j = {
//             container: {
//                 alignItems: "x6s0dn4",
//                 backgroundColor: "xv9rvxn",
//                 borderTopStartRadius: "x1lcm9me",
//                 borderTopEndRadius: "x1yr5g0i",
//                 borderBottomEndRadius: "xrt01vj",
//                 borderBottomStartRadius: "x10y3i5r",
//                 display: "x78zum5",
//                 flexDirection: "x1q0g3np",
//                 height: "xmix8c7",
//                 paddingStart: "x1k2j06m",
//                 width: "x1a00udw",
//                 $$css: !0
//             },
//             pressableCursor: {
//                 cursor: "xmper1u",
//                 $$css: !0
//             }
//         };

//     function a(a) {
//         var b = a.closeFriendsListId,
//             d = a.storyOwnerName;
//         a = a.viewAuthorCloseFriendStatus;
//         var e = function () {
//                 return h.jsx("div", {
//                     "aria-label": "close-friends-badge",
//                     className: "x6s0dn4 xv9rvxn x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xmix8c7 x1k2j06m x1a00udw",
//                     children: h.jsx(c("CometIcon.react"), {
//                         color: "white",
//                         icon: c("StarFilled12.svg.react"),
//                         size: 12
//                     })
//                 })
//             },
//             f = function (a, b) {
//                 a === void 0 && (a = null);
//                 return h.jsx(c("CometPressable.react"), {
//                     "aria-label": "close-friends-comet-pressable",
//                     onHoverIn: b,
//                     onPress: b,
//                     ref: a,
//                     xstyle: j.pressableCursor,
//                     children: e()
//                 })
//             };
//         return b != null && d != null && a != null ? h.jsx(c("CometLazyPopoverTrigger.react"), {
//             align: "middle",
//             popoverProps: {
//                 closeFriendsListId: b,
//                 storyOwnerName: d,
//                 viewAuthorCloseFriendStatus: a
//             },
//             popoverResource: i,
//             position: "below",
//             children: f
//         }) : e()
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React from "react";
import JSResourceForInteraction from "JSResourceForInteraction";
import CometIcon from "CometIcon.react";
import CometLazyPopoverTrigger from "CometLazyPopoverTrigger.react";
import CometPressable from "CometPressable.react";
import StarFilled12 from "StarFilled12.svg.react";


const styles = {
    container: {
      alignItems: "x6s0dn4",
      backgroundColor: "xv9rvxn",
      borderTopStartRadius: "x1lcm9me",
      borderTopEndRadius: "x1yr5g0i",
      borderBottomEndRadius: "xrt01vj",
      borderBottomStartRadius: "x10y3i5r",
      display: "x78zum5",
      flexDirection: "x1q0g3np",
      height: "xmix8c7",
      paddingStart: "x1k2j06m",
      width: "x1a00udw",
      $$css: true
    },
    pressableCursor: {
      cursor: "xmper1u",
      $$css: true
    }
  };

  function FriendListCometCloseFriendsBadge(props) {
    const { closeFriendsListId, storyOwnerName, viewAuthorCloseFriendStatus } = props;
    const badge = () => {
    return (
    <div
         aria-label="close-friends-badge"
         className="x6s0dn4 xv9rvxn x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xmix8c7 x1k2j06m x1a00udw"
       >
    <CometIcon color="white" icon={StarFilled12} size={12} />
    </div>
    );
    };
    
    const pressable = (ref, onHoverIn) => {
        return (
            <CometPressable
                aria-label="close-friends-comet-pressable"
                onHoverIn={onHoverIn}
                onPress={onHoverIn}
                ref={ref}
                xstyle={styles.pressableCursor}
            >
                {badge()}
            </CometPressable>
        );
    };
    
        if (closeFriendsListId != null && storyOwnerName != null && viewAuthorCloseFriendStatus != null) {
            return (
                <CometLazyPopoverTrigger
                align="middle"
                popoverProps={{ closeFriendsListId, storyOwnerName, viewAuthorCloseFriendStatus }}
                popoverResource={JSResourceForInteraction("FriendListCometCloseFriendsManagePopover.react").__setRef("FriendListCometCloseFriendsBadge")}
                position="below"
                >
                    {pressable}
                </CometLazyPopoverTrigger>
            );
        }
        return badge();
    }
    FriendListCometCloseFriendsBadge.displayName = ${FriendListCometCloseFriendsBadge.name} [from ${f.id}];
    
    export default FriendListCometCloseFriendsBadge