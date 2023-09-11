// __d("CometFeedInlineComposerWOYM.react", ["CometFeedInlineComposerWOYM_profile.graphql", "CometRefineRef", "CometRelay", "TextInputButton.react", "cr:1654613", "mergeRefs", "react"], (function (a, b, c, d, e, f, g) {
//   "use strict";
//   var h, i = d("react");

//   function a(a) {
//     var e, f = a.additionalInputButtonRef,
//       g = a.onHoverInPrerenderer,
//       j = a.onHoverOutPrerenderer,
//       k = a.onPress,
//       l = a.onPressInPrerenderer,
//       m = a.postPlainText,
//       n = a.profile$key;
//     a = a.triggerRef;
//     n = d("CometRelay").useFragment(h !== void 0 ? h : h = b("CometFeedInlineComposerWOYM_profile.graphql"), n);
//     n = b("cr:1654613")(n == null ? void 0 : n.short_name);
//     e = (e = m) != null ? e : n;
//     return i.jsx(c("TextInputButton.react"), {
//       isUserEnteredPreviewText: m != null,
//       label: e,
//       onHoverIn: g,
//       onHoverOut: j,
//       onPress: k,
//       onPressIn: l,
//       ref: c("mergeRefs")(c("CometRefineRef")(a), f),
//       testid: void 0
//     })
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   g["default"] = a
// }), 98);


import React from 'react';
import { useFragment } from 'CometRelay';
import TextInputButton from 'TextInputButton.react';
import { useCometFeedInlineComposerWOYMText } from 'useCometFeedInlineComposerWOYMText';
import mergeRefs from 'mergeRefs';
import CometRefineRef from 'CometRefineRef';

import CometFeedInlineComposerWOYM_profile from 'CometFeedInlineComposerWOYM_profile.graphql';

const CometFeedInlineComposerWOYM = ({
  additionalInputButtonRef,
  onHoverInPrerenderer,
  onHoverOutPrerenderer,
  onPress,
  onPressInPrerenderer,
  postPlainText,
  profile$key,
  triggerRef,
  testid,
}) => {
  const profileData = useFragment(CometFeedInlineComposerWOYM_profile, profile$key);
  const shortName = useCometFeedInlineComposerWOYMText(profileData?.short_name);
  const label = postPlainText != null ? postPlainText : shortName;

  return (
    <TextInputButton
      isUserEnteredPreviewText={postPlainText != null}
      label={label}
      onHoverIn={onHoverInPrerenderer}
      onHoverOut={onHoverOutPrerenderer}
      onPress={onPress}
      onPressIn={onPressInPrerenderer}
      ref={mergeRefs(CometRefineRef(triggerRef), additionalInputButtonRef)}
      testid={testid}
    />
  );
};

CometFeedInlineComposerWOYM.displayName = `${CometFeedInlineComposerWOYM.name} [from ${f.id}]`;

export default CometFeedInlineComposerWOYM;
