// __d("CometFeedStoryFeedbackUFIStrategy.react", ["CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment.graphql", "CometFeedStoryFeedbackUFIStrategy_feedback.graphql", "CometFeedUFIContainer.react", "CometPlaceholder.react", "CometProgressIndicator.react", "CometRelay", "CometRelaySwitchActorContainer.react", "CometVisualCompletionAttributes", "react", "unrecoverableViolation", "useCometFeedStoryMatchDebugger"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j = d("react");
//     e = d("react");
//     var k = e.useMemo,
//         l = e.useState;

//     function a(a) {
//         var e = a.feedback;
//         a = a.variables;
//         e = d("CometRelay").useFragment(h !== void 0 ? h : h = b("CometFeedStoryFeedbackUFIStrategy_feedback.graphql"), e);
//         c("useCometFeedStoryMatchDebugger")(e);
//         var f = a.displayCommentsContextEnableComment,
//             g = a.displayCommentsContextIsAdPreview,
//             m = a.displayCommentsContextIsAggregatedShare,
//             n = a.displayCommentsContextIsStorySet,
//             o = a.displayCommentsFeedbackContext,
//             p = a.feedbackSource,
//             q = a.feedLocation,
//             r = a.focusCommentID,
//             s = p,
//             t = k(function () {
//                 return {
//                     enableComment: f,
//                     feedbackContext: o,
//                     isAdPreview: g,
//                     isAggregatedShare: m,
//                     isStorySet: n
//                 }
//             }, [f, o, g, m, n]);
//         a = e.story;
//         p = l(0);
//         var u = p[0],
//             v = p[1];
//         if (a == null) throw c("unrecoverableViolation")("story cannot be null in CometFeedStoryFeedbackUFIStrategy", "comet_feed");
//         return j.jsx("div", babelHelpers["extends"]({
//             className: "x168nmei x13lgxp2 x30kzoy x9jhf4c x6ikm8r x10wlt62"
//         }, c("CometVisualCompletionAttributes").IGNORE_DYNAMIC, {
//             children: j.jsx(c("CometPlaceholder.react"), {
//                 fallback: j.jsx("div", {
//                     className: "x6s0dn4 x78zum5 xl56j7k x889kno x1iji9kk x1a8lsjc x1sln4lm",
//                     children: j.jsx(c("CometProgressIndicator.react"), {})
//                 }),
//                 children: j.jsx(c("CometRelaySwitchActorContainer.react"), {
//                     fragment: i !== void 0 ? i : i = b("CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment.graphql"),
//                     fragmentRef: a,
//                     children: function (a) {
//                         var b = a.data,
//                             d = a.refetchAndSetActor;
//                         return j.jsx(c("CometFeedUFIContainer.react"), {
//                             displayCommentsContext: t,
//                             feedLocation: q,
//                             feedbackSource: s,
//                             focusCommentID: r,
//                             onActorSelected: function (a) {
//                                 v(function (a) {
//                                     return a + 1
//                                 }), d(a)
//                             },
//                             story: b
//                         }, u)
//                     }
//                 })
//             })
//         }))
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import {
    CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment,
    CometFeedStoryFeedbackUFIStrategy_feedback,
    CometFeedUFIContainer,
    CometPlaceholder,
    CometProgressIndicator,
    CometRelay,
    CometRelaySwitchActorContainer,
    CometVisualCompletionAttributes,
    react,
    unrecoverableViolation,
    useCometFeedStoryMatchDebugger,
  } from 'module-names'; // You'll need to replace 'module-names' with the actual module name or paths
  
  const CometFeedStoryFeedbackUFIStrategy = ({ feedback, variables }) => {
    const eFeedback = CometRelay.useFragment(
      CometFeedStoryFeedbackUFIStrategy_feedback,
      feedback
    );
  
    useCometFeedStoryMatchDebugger(eFeedback);
  
    const {
      displayCommentsContextEnableComment: enableComment,
      displayCommentsContextIsAdPreview: isAdPreview,
      displayCommentsContextIsAggregatedShare: isAggregatedShare,
      displayCommentsContextIsStorySet: isStorySet,
      displayCommentsFeedbackContext: feedbackContext,
      feedbackSource,
      feedLocation,
      focusCommentID,
    } = variables;
  
    const context = useMemo(
      () => ({
        enableComment,
        feedbackContext,
        isAdPreview,
        isAggregatedShare,
        isStorySet,
      }),
      [enableComment, feedbackContext, isAdPreview, isAggregatedShare, isStorySet]
    );
  
    const [counter, setCounter] = useState(0);
  
    if (!eFeedback.story) {
      throw unrecoverableViolation(
        'story cannot be null in CometFeedStoryFeedbackUFIStrategy',
        'comet_feed'
      );
    }
  
    return (
      <div
        className="x168nmei x13lgxp2 x30kzoy x9jhf4c x6ikm8r x10wlt62"
        {...CometVisualCompletionAttributes.IGNORE_DYNAMIC}
      >
        <CometPlaceholder
          fallback={
            <div
              className="x6s0dn4 x78zum5 xl56j7k x889kno x1iji9kk x1a8lsjc x1sln4lm"
            >
              <CometProgressIndicator />
            </div>
          }
        >
          <CometRelaySwitchActorContainer
            fragment={
              CometFeedStoryFeedbackUFIStrategySwitchEnvironmentFragment
            }
            fragmentRef={eFeedback.story}
            children={({ data: story, refetchAndSetActor }) => (
              <CometFeedUFIContainer
                displayCommentsContext={context}
                feedLocation={feedLocation}
                feedbackSource={feedbackSource}
                focusCommentID={focusCommentID}
                onActorSelected={(actor) => {
                  setCounter((prev) => prev + 1);
                  refetchAndSetActor(actor);
                }}
                story={story}
                key={counter}
              />
            )}
          />  
        </CometPlaceholder>
      </div>
    );
  };
  
  export default CometFeedStoryFeedbackUFIStrategy;
  