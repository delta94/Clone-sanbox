// __d("CometFeedUFI.react", ["CometFeedUFI_feedback.graphql", "CometFeedUFI_shareable.graphql", "CometFeedUFI_story.graphql", "CometRelay", "CometStoryRenderLocationContext.react", "react", "recoverableViolation", "requireDeferred"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j, k = d("react"),
//         l = d("react").useContext;
//     e = c("requireDeferred")("CometUFIReactionsAnimationPreloader").__setRef("CometFeedUFI.react");
//     e.onReady(function (a) {
//         return new a().preloadAll()
//     });

//     function a(a, e) {
//         var f, g = a.displayCommentsContext,
//             m = a.feedback,
//             n = a.feedbackSource,
//             o = a.feedLocation,
//             p = a.focusCommentID,
//             q = a.isTextOnlyStory,
//             r = a.narrow,
//             s = a.onActorSelected,
//             t = a.shareable;
//         a = a.story;
//         m = d("CometRelay").useFragment(h !== void 0 ? h : h = b("CometFeedUFI_feedback.graphql"), m);
//         t = d("CometRelay").useFragment(i !== void 0 ? i : i = b("CometFeedUFI_shareable.graphql"), t);
//         a = d("CometRelay").useFragment(j !== void 0 ? j : j = b("CometFeedUFI_story.graphql"), a);
//         f = (f = l(c("CometStoryRenderLocationContext.react"))) != null ? f : "newsstand";
//         var u = m == null ? void 0 : m.ufi_renderer,
//             v;
//         if ((u == null ? void 0 : u.__typename) === "SimplifiedUFIRenderer") v = {
//             feedbackSource: n,
//             feedLocation: o,
//             isTextOnlyStory: q,
//             onActorSelected: s,
//             renderer: u,
//             shareable: t,
//             story: a,
//             storyRenderLocation: f
//         };
//         else if ((u == null ? void 0 : u.__typename) === "FullUFIRenderer") {
//             v = {
//                 displayCommentsContext: (g = g) != null ? g : {},
//                 feedbackSource: n,
//                 feedLocation: o,
//                 focusCommentID: p,
//                 isTextOnlyStory: q,
//                 narrow: r,
//                 onActorSelected: s,
//                 renderer: u,
//                 shareable: (g = t) != null ? g : null,
//                 story: a,
//                 storyRenderLocation: f
//             }
//         } else if ((u == null ? void 0 : u.__typename) === "InlineLiveUFIRenderer") v = {
//             feedbackSource: n,
//             feedLocation: o,
//             isTextOnlyStory: q,
//             onActorSelected: s,
//             renderer: u,
//             shareable: t,
//             story: a,
//             storyRenderLocation: f
//         };
//         else {
//             c("recoverableViolation")("CometFeedUFI: Expected a valid UFI renderer", "ufi2");
//             return null
//         }
//         return k.jsx(d("CometRelay").MatchContainer, {
//             match: u,
//             props: babelHelpers["extends"]({}, v, {
//                 ref: e
//             })
//         }, (r = m == null ? void 0 : (p = m.viewer_actor) == null ? void 0 : p.id) != null ? r : "UNKNOWN")
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = k.memo(k.forwardRef(a));
//     g["default"] = e
// }), 98);


import {
    CometFeedUFI_feedback,
    CometFeedUFI_shareable,
    CometFeedUFI_story,
    CometRelay,
    CometStoryRenderLocationContext,
    react,
    recoverableViolation,
    requireDeferred
  } from 'module-names'; // Replace 'module-names' with the actual module paths
  
  const CometUFIReactionsAnimationPreloader = requireDeferred("CometUFIReactionsAnimationPreloader").__setRef("CometFeedUFI.react");
  CometUFIReactionsAnimationPreloader.onReady((instanceCreator) => {
    const instance = new instanceCreator();
    instance.preloadAll();
  });
  
  const CometFeedUFI = (props, ref) => {
    const {
      displayCommentsContext,
      feedback,
      feedbackSource,
      feedLocation,
      focusCommentID,
      isTextOnlyStory,
      narrow,
      onActorSelected,
      shareable,
      story
    } = props;
  
    const feedbackFragment = CometRelay.useFragment(CometFeedUFI_feedback, feedback);
    const shareableFragment = CometRelay.useFragment(CometFeedUFI_shareable, shareable);
    const storyFragment = CometRelay.useFragment(CometFeedUFI_story, story);
  
    const storyRenderLocation = useContext(CometStoryRenderLocationContext) || "newsstand";
    const ufiRenderer = feedbackFragment?.ufi_renderer;
    let rendererProps;
  
    switch (ufiRenderer?.__typename) {
      case "SimplifiedUFIRenderer":
        rendererProps = {
          feedbackSource,
          feedLocation,
          isTextOnlyStory,
          onActorSelected,
          renderer: ufiRenderer,
          shareable: shareableFragment,
          story: storyFragment,
          storyRenderLocation
        };
        break;
      case "FullUFIRenderer":
        rendererProps = {
          displayCommentsContext: displayCommentsContext || {},
          feedbackSource,
          feedLocation,
          focusCommentID,
          isTextOnlyStory,
          narrow,
          onActorSelected,
          renderer: ufiRenderer,
          shareable: shareableFragment || null,
          story: storyFragment,
          storyRenderLocation
        };
        break;
      case "InlineLiveUFIRenderer":
        rendererProps = {
          feedbackSource,
          feedLocation,
          isTextOnlyStory,
          onActorSelected,
          renderer: ufiRenderer,
          shareable: shareableFragment,
          story: storyFragment,
          storyRenderLocation
        };
        break;
      default:
        recoverableViolation("CometFeedUFI: Expected a valid UFI renderer", "ufi2");
        return null;
    }
  
    return (
      <CometRelay.MatchContainer 
        match={ufiRenderer} 
        props={{ ...rendererProps, ref }}
        fallback={feedbackFragment?.viewer_actor?.id || "UNKNOWN"}
      />
    );
  };
  
  export default React.memo(React.forwardRef(CometFeedUFI));
  