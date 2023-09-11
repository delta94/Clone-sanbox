// __d("CometFeedUFIContainer.react", ["CometFeedUFI.react", "CometFeedUFIContainer_story.graphql", "CometFeedUnitIsFocusedStoryViewContext", "CometRelay", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = d("react"),
//         j = d("react").useContext;

//     function a(a) {
//         var e, f = a.displayCommentsContext,
//             g = a.feedbackSource,
//             k = a.feedLocation,
//             l = a.focusCommentID,
//             m = a.onActorSelected;
//         a = a.story;
//         a = d("CometRelay").useFragment(h !== void 0 ? h : h = b("CometFeedUFIContainer_story.graphql"), a);
//         e = a == null ? void 0 : (e = a.feedback_context) == null ? void 0 : e.feedback_target_with_context;
//         var n = j(c("CometFeedUnitIsFocusedStoryViewContext"));
//         return e == null || n ? null : i.jsx(c("CometFeedUFI.react"), {
//             displayCommentsContext: f,
//             feedLocation: (n = k) != null ? n : "NEWSFEED",
//             feedback: e,
//             feedbackSource: (f = g) != null ? f : 1,
//             focusCommentID: (k = l) != null ? k : null,
//             isTextOnlyStory: a.is_text_only_story === !0,
//             onActorSelected: m,
//             shareable: (n = a.shareable_from_perspective_of_feed_ufi) != null ? n : null,
//             story: a
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import {
    CometFeedUFI,
    CometFeedUFIContainer_story,
    CometFeedUnitIsFocusedStoryViewContext,
    CometRelay,
    react
  } from 'module-names';  // Replace 'module-names' with actual module paths
  
  const CometFeedUFIContainer = ({
    displayCommentsContext,
    feedbackSource,
    feedLocation,
    focusCommentID,
    onActorSelected,
    story
  }) => {
    const storyFragment = CometRelay.useFragment(
      CometFeedUFIContainer_story,
      story
    );
  
    const feedbackTargetWithContext = storyFragment?.feedback_context?.feedback_target_with_context;
  
    const isFocusedStoryView = useContext(CometFeedUnitIsFocusedStoryViewContext);
  
    if (!feedbackTargetWithContext || isFocusedStoryView) return null;
  
    return (
      <CometFeedUFI
        displayCommentsContext={displayCommentsContext}
        feedLocation={feedLocation ?? 'NEWSFEED'}
        feedback={feedbackTargetWithContext}
        feedbackSource={feedbackSource ?? 1}
        focusCommentID={focusCommentID || null}
        isTextOnlyStory={storyFragment.is_text_only_story === true}
        onActorSelected={onActorSelected}
        shareable={storyFragment.shareable_from_perspective_of_feed_ufi || null}
        story={storyFragment}
      />
    );
  };
  
  export default CometFeedUFIContainer;
  
