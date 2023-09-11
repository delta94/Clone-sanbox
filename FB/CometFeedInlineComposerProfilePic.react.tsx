// __d("CometFeedInlineComposerProfilePic.react", ["ix", "CometFeedInlineComposerProfilePic_profile.graphql", "CometProfilePhoto.react", "CometRelay", "react", "recoverableViolation"], (function (a, b, c, d, e, f, g, h) {
//   "use strict";
//   var i, j = d("react");

//   function a(a) {
//     a = a.profile$key;
//     a = d("CometRelay").useFragment(i !== void 0 ? i : i = b("CometFeedInlineComposerProfilePic_profile.graphql"), a);
//     if (a == null || a.id == null) return c("recoverableViolation")("Unable to fetch profile for composer profile pic", "comet_composer");
//     a = a == null ? void 0 : (a = a.profile_picture) == null ? void 0 : a.uri;
//     return j.jsx("div", {
//       "data-testid": void 0,
//       children: j.jsx(c("CometProfilePhoto.react"), {
//         shape: "circle",
//         size: 40,
//         source: {
//           uri: a != null ? a : h("762679")
//         }
//       })
//     })
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   g["default"] = a
// }), 98);


import React from 'react';
import { useFragment } from 'CometRelay';
import CometProfilePhoto from 'CometProfilePhoto.react';
import { recoverableViolation } from 'recoverableViolation';

import CometFeedInlineComposerProfilePic_profile from 'CometFeedInlineComposerProfilePic_profile.graphql';
import { h } from 'ix';

const styles = {
  profilePic: {
    shape: 'circle',
    size: 40,
  },
};

const CometFeedInlineComposerProfilePic = ({ profile$key }) => {
  const profileData = useFragment(CometFeedInlineComposerProfilePic_profile, profile$key);

  if (profileData == null || profileData.id == null) {
    recoverableViolation('Unable to fetch profile for composer profile pic', 'comet_composer');
    return null;
  }

  const profilePictureUri = profileData?.profile_picture?.uri;

  return (
    <div data-testid={null}>
      <CometProfilePhoto {...styles.profilePic} source={{ uri: profilePictureUri || h('762679') }} />
    </div>
  );
};

export default CometFeedInlineComposerProfilePic;
