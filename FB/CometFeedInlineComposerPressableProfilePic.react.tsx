// __d("CometFeedInlineComposerPressableProfilePic.react", ["fbt", "CometFeedInlineComposerPressableProfilePic_profile.graphql", "CometFeedInlineComposerProfilePic.react", "CometPressable.react", "CometRelay", "react", "recoverableViolation"], (function (a, b, c, d, e, f, g, h) {
//   "use strict";
//   var i, j = d("react"),
//     k = {
//       profilePic: {
//         display: "x78zum5",
//         marginEnd: "x1emribx",
//         $$css: !0
//       }
//     };

//   function a(a) {
//     var e = a.disableDefaultProfileURI,
//       f = a.onClick;
//     a = a.profile$key;
//     a = d("CometRelay").useFragment(i !== void 0 ? i : i = b("CometFeedInlineComposerPressableProfilePic_profile.graphql"), a);
//     if (a == null) return c("recoverableViolation")("Unable to fetch profile for composer profile pic", "comet_composer");
//     e = e === !0 ? null : a == null ? void 0 : a.url;
//     return j.jsx(c("CometPressable.react"), {
//       "aria-label": (a == null ? void 0 : a.name) != null ? h._("__JHASH__CAdiMQCOr4R__JHASH__", [h._param("userName", a == null ? void 0 : a.name)]) : h._("__JHASH__rpsI0Frdl3u__JHASH__"),
//       display: "inline",
//       linkProps: {
//         routeTarget: "self",
//         url: e
//       },
//       onPress: f,
//       overlayRadius: "50%",
//       xstyle: k.profilePic,
//       children: j.jsx(c("CometFeedInlineComposerProfilePic.react"), {
//         profile$key: a
//       })
//     })
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   g["default"] = a
// }), 98);

import React from 'react';
import { useFragment } from 'CometRelay';
import { fbt } from 'fbt';
import CometFeedInlineComposerProfilePic from 'CometFeedInlineComposerProfilePic.react';
import CometPressable from 'CometPressable.react';
import { recoverableViolation } from 'recoverableViolation';

import CometFeedInlineComposerPressableProfilePic_profile from 'CometFeedInlineComposerPressableProfilePic_profile.graphql';

const styles = {
  profilePic: {
    display: 'x78zum5',
    marginEnd: 'x1emribx',
  },
};

const CometFeedInlineComposerPressableProfilePic = ({ disableDefaultProfileURI, onClick, profile$key }) => {
  const profileData = useFragment(CometFeedInlineComposerPressableProfilePic_profile, profile$key);

  if (profileData == null) {
    recoverableViolation('Unable to fetch profile for composer profile pic', 'comet_composer');
    return null;
  }

  const profileURL = disableDefaultProfileURI === true ? null : profileData?.url;

  return (
    <CometPressable
      aria-label={profileData?.name != null ? fbt._("__JHASH__CAdiMQCOr4R__JHASH__", [fbt._param("userName", profileData?.name)]) : fbt._("__JHASH__rpsI0Frdl3u__JHASH__")}
      display="inline"
      linkProps={{ routeTarget: 'self', url: profileURL }}
      onPress={onClick}
      overlayRadius="50%"
      xstyle={styles.profilePic}
    >
      <CometFeedInlineComposerProfilePic profile$key={profileData} />
    </CometPressable>
  );
};

export default CometFeedInlineComposerPressableProfilePic;
