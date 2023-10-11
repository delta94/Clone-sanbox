// __d("CometUFICommentListRenderer.react", ["CometFocusedStoryViewReferringFeedLocationContext", "CometRelay", "CometUFICommentListComposerProvider.react", "CometUFICommentListLayoutContext", "CometUFICommentListRenderer_feedback.graphql", "CometUFIQPLInstanceKeyContext", "CometUFIReparentedCommentIDsContext.react", "ErrorGuard", "UFI2RealtimeContainer.react", "mergeRefs", "react", "recoverableViolation", "requireDeferred", "useBoolean", "useCometHandleCommitCommentCreate.react", "useCometUFIAwardDelightsAnimator", "useCometUFICodedErrorDialog", "useTriggeredStoryCTAHandler"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j, k = j || (j = d("react"));
//     e = j;
//     var l = e.useCallback,
//         m = e.useContext,
//         n = e.useMemo,
//         o = e.useRef,
//         p = e.useState,
//         q = c("requireDeferred")("CometUFIDeleteCommentSubscription").__setRef("CometUFICommentListRenderer.react"),
//         r = c("requireDeferred")("CometUFIEditCommentSubscription").__setRef("CometUFICommentListRenderer.react"),
//         s = c("requireDeferred")("CometUFIFeedbackCommentReactSubscription").__setRef("CometUFICommentListRenderer.react"),
//         t = c("requireDeferred")("CometUFIFunnelLogger").__setRef("CometUFICommentListRenderer.react"),
//         u = c("requireDeferred")("CometUFIToggleCommentPermissionSubscription").__setRef("CometUFICommentListRenderer.react"),
//         v = c("requireDeferred")("CometUFIWorkQACommentTypeUpdateSubscription").__setRef("CometUFICommentListRenderer.react");

//     function a(a) {
//         var e = a.displayCommentsContext,
//             f = a.fallback,
//             g = a.feedback,
//             j = a.feedbackSource,
//             w = a.feedLocation,
//             x = a.focusCommentID,
//             y = a.listRef,
//             z = a.narrow,
//             A = a.onCommitCommentCreate;
//         a = a.storyRenderLocation;
//         var B = d("CometRelay").useFragment(h !== void 0 ? h : h = b("CometUFICommentListRenderer_feedback.graphql"), g),
//             C = o(null),
//             D = d("CometRelay").useRelayEnvironment();
//         g = c("useTriggeredStoryCTAHandler")();
//         var E = g[0];
//         g = p(null);
//         var F = g[0];
//         g = g[1];
//         var G = p(null),
//             H = G[0];
//         G = G[1];
//         var I = c("useBoolean")(!1),
//             J = I.setTrue;
//         I = I.value;
//         var K = c("useCometUFICodedErrorDialog")(),
//             aa = K.errorDialog,
//             L = K.setError;
//         K = m(d("CometUFIReparentedCommentIDsContext.react").CometUFIReparentedCommentIDsContext);
//         var ba = K.addReparentedCommentIds,
//             M = B == null ? void 0 : B.id,
//             N = B == null ? void 0 : B.subscription_target_id;
//         K = l(function () {
//             var a;
//             if (M == null || N == null) return null;
//             var b = !1,
//                 d = [],
//                 e = {
//                     dispose: function () {
//                         b = !0, d.forEach(function (a) {
//                             return (i || (i = c("ErrorGuard"))).applyWithGuard(a, null, [])
//                         })
//                     }
//                 };
//             s.onReady(function (a) {
//                 if (!b) {
//                     a = a.subscribe(D, {
//                         top_level_feedback_id: M
//                     }, !1, !0);
//                     d.push(a.dispose)
//                 }
//             });
//             B && B.is_eligible_for_enhanced_comment_updates === !0 && !((a = B.associated_video) == null ? void 0 : a.broadcast_is_ama_enabled) && (q.onReady(function (a) {
//                 if (!b) {
//                     a = a.subscribe({
//                         addReparentedCommentIds: ba,
//                         environment: D,
//                         feedbackSource: j,
//                         topLevelFeedbackID: M
//                     });
//                     d.push(a.dispose)
//                 }
//             }), r.onReady(function (a) {
//                 if (!b) {
//                     a = a.subscribe({
//                         environment: D,
//                         topLevelFeedbackID: M
//                     });
//                     d.push(a.dispose)
//                 }
//             }));
//             B && B.is_synced_qa_post === !0 && v.onReady(function (a) {
//                 if (!b) {
//                     a = a.subscribe({
//                         environment: D,
//                         feedbackID: M
//                     });
//                     d.push(a.dispose)
//                 }
//             });
//             return e
//         }, [D, B, M, j, N]);
//         var ca = l(function () {
//                 var a = C.current;
//                 if (a == null) return;
//                 a.Actions.expandList({
//                     focusComposer: !0,
//                     scrollToComposer: !0
//                 })
//             }, []),
//             da = l(function () {
//                 if (M == null || N == null) return;
//                 var a = !1,
//                     b = function () {},
//                     c = {
//                         dispose: function () {
//                             a = !0, b()
//                         }
//                     };
//                 u.onReady(function (c) {
//                     if (!a) {
//                         c = c.subscribe(D, {
//                             feedback_id: M
//                         }, !1);
//                         b = c.dispose
//                     }
//                 });
//                 return c
//             }, [D, M, N]),
//             O = m(c("CometUFIQPLInstanceKeyContext")),
//             ea = o(null),
//             P = l(function (a) {
//                 t.onReady(function (a) {
//                     return a.addPoint(O, a.CometUFIFunnelLoggerEvents.COMMENT_EDIT_ERROR)
//                 }), L(a)
//             }, [O, L]),
//             Q = p(function () {
//                 return new Set()
//             }),
//             R = Q[0];
//         Q = Q[1];
//         var S = p(function () {
//                 return new Set()
//             }),
//             T = S[0],
//             fa = S[1];
//         S = l(function (a) {
//             if (a == null) return;
//             var b = (a = a.node) == null ? void 0 : a.id;
//             if (b == null) {
//                 c("recoverableViolation")("Could not discern an `id` having received a realtime comment. Realtime comment handling might be broken. Investigate immediately.", "ufi2");
//                 return
//             }
//             fa(function (a) {
//                 return new Set(a).add(b)
//             })
//         }, []);
//         var U = c("useCometUFIAwardDelightsAnimator")();
//         U = U.animationComponent;
//         var V = m(c("CometFocusedStoryViewReferringFeedLocationContext"));
//         V = c("useCometHandleCommitCommentCreate.react")({
//             feedbackRef: B,
//             feedLocation: w,
//             focusCommentID: x,
//             onCommit: A,
//             referringFeedLocation: V,
//             setError: L,
//             setLocallyComposedCommentIds: Q
//         });
//         var W = l(function () {
//                 E("COMMENT_BUTTON_TAP")
//             }, [E]),
//             X = n(function () {
//                 return c("mergeRefs")(y, C)
//             }, [y]),
//             ga = n(function () {
//                 return {
//                     narrow: z
//                 }
//             }, [z]);
//         if (M == null) {
//             c("recoverableViolation")("No id on feedback when fetching from relay story in CometUFICommentListRenderer, this indicates relays store/environment has been bonkered some how", "ufi2");
//             return null
//         }
//         var Y = B == null ? void 0 : B.comment_list_renderer,
//             Z, $;
//         (Y == null ? void 0 : Y.__typename) === "XFBCommentListRendererForDisplayComments" ? Z = {
//             depth: 0,
//             displayCommentsContext: e,
//             editingCommentID: F,
//             fallback: f,
//             feedbackSource: j,
//             feedbackTargetID: M,
//             feedLocation: w,
//             focusCommentID: x,
//             listRef: X,
//             locallyComposedCommentIds: R,
//             onAddCommentClick: ca,
//             onCommitCommentCreate: V,
//             onComposerFocusCallback: W,
//             onEditCommentError: P,
//             onRealtimeCommentReceived: S,
//             onTranslateAllClick: J,
//             realtimeCommentIds: T,
//             renderedTranslationCommentID: H,
//             renderer: Y,
//             setEditingCommentID: g,
//             setRenderedTranslationCommentID: G,
//             shouldRequestTranslationForAllComments: I,
//             storyRenderLocation: a,
//             subscribeToCommentToggling: da,
//             useDefaultActor: !1,
//             viewSelectorRef: ea
//         }: ((Y == null ? void 0 : Y.__typename) === "XFBCommentListRendererForCommentsAPI" || (Y == null ? void 0 : Y.__typename) === "XFBCommentListRendererForCommentsAPIPermalink" || (Y == null ? void 0 : Y.__typename) === "XFBCommentListRendererForCommentsAPIMediaViewer" || (Y == null ? void 0 : Y.__typename) === "XFBCommentListRendererForCommentsAPITahoe" || (Y == null ? void 0 : Y.__typename) === "XFBCommentListRendererForCommentsAPITahoeWithLiveVOD") && ($ = {
//             editingCommentID: F,
//             feedbackSource: j,
//             feedLocation: w,
//             focusCommentID: x,
//             handleCreateCommentProps: {
//                 onCommit: A,
//                 setError: L,
//                 setLocallyComposedCommentIds: Q
//             },
//             listRef: X,
//             locallyComposedCommentIds: R,
//             onComposerFocusCallback: W,
//             onEditCommentError: P,
//             onRealtimeCommentReceived: S,
//             onTranslateAllClick: J,
//             realtimeCommentIds: T,
//             renderedTranslationCommentID: H,
//             setEditingCommentID: g,
//             setRenderedTranslationCommentID: G,
//             shouldRequestTranslationForAllComments: I,
//             storyRenderLocation: a,
//             useDefaultActor: !1
//         });
//         f = k.jsx(d("CometRelay").MatchContainer, {
//             match: Y,
//             props: (e = Z) != null ? e : babelHelpers["extends"]({}, $, {
//                 renderer: Y
//             })
//         });
//         return k.jsxs(c("UFI2RealtimeContainer.react"), {
//             subscribe: K,
//             children: [k.jsx(d("CometUFIReparentedCommentIDsContext.react").CometUFIReparentedCommentIDsContextProvider, {
//                 children: k.jsx(c("CometUFICommentListComposerProvider.react"), {
//                     children: k.jsx(c("CometUFICommentListLayoutContext").Provider, {
//                         value: ga,
//                         children: f
//                     })
//                 })
//             }), aa, U]
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = k.memo(a);
//     g["default"] = e
// }), 98);



import CometFocusedStoryViewReferringFeedLocationContext from "CometFocusedStoryViewReferringFeedLocationContext";
import CometRelay, { useFragment, useRelayEnvironment } from "CometRelay";
import { CometUFICommentListLayoutContext } from 'CometUFICommentListLayoutContext'; // Replace with the actual import path
import CometUFICommentListRenderer_feedback from "CometUFICommentListRenderer_feedback";
import CometUFIQPLInstanceKeyContext from "CometUFIQPLInstanceKeyContext";
import { CometUFIReparentedCommentIDsContext } from 'CometUFIReparentedCommentIDsContext.react'; // Replace with the actual import path
import ErrorGuard from "ErrorGuard";
import UFI2RealtimeContainer from 'UFI2RealtimeContainer'; // Replace 'UFI2RealtimeContainer' with the actual import path
import mergeRefs from "mergeRefs";
import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { requireDeferred } from 'somewhere'; // Replace 'somewhere' with the actual import path
import useBoolean from 'useBoolean'; // Replace 'useBoolean' with the actual import path
import useCometHandleCommitCommentCreate from "useCometHandleCommitCommentCreate";
import useCometUFIAwardDelightsAnimator from "useCometUFIAwardDelightsAnimator";
import useCometUFICodedErrorDialog from "useCometUFICodedErrorDialog";
import useTriggeredStoryCTAHandler from 'useTriggeredStoryCTAHandler'; // Replace 'useTriggeredStoryCTAHandler' with the actual import path

function CometUFICommentListRenderer(props) {
  const {
    displayCommentsContext,
    fallback,
    feedback,
    feedbackSource,
    feedLocation,
    focusCommentID,
    listRef,
    narrow,
    onCommitCommentCreate,
    storyRenderLocation,
  } = props;

  const feedbackData = useFragment(CometUFICommentListRenderer_feedback, feedback);
  const commentListRef = useRef(null);
  const relayEnvironment = useRelayEnvironment();

  const [triggeredStoryCTAHandler] = useTriggeredStoryCTAHandler();
  const [editingCommentID, setEditingCommentID] = useState(null);
  const [renderedTranslationCommentID, setRenderedTranslationCommentID] = useState(null);

  const { value, setTrue } = useBoolean(false);
  const { errorDialog, setError } = useCometUFICodedErrorDialog()
  const { addReparentedCommentIds } = CometUFIReparentedCommentIDsContext

  const feedbackId = feedbackData?.id;
  const subscriptionTargetId = feedbackData?.subscription_target_id;

  const subscribe = useCallback(() => {
    if (!feedbackId || !subscriptionTargetId) {
      return null;
    }

    let isDisposed = false;
    const disposables: Array<() => void> = [];

    requireDeferred('CometUFIFeedbackCommentReactSubscription').onReady((module) => {
        if (!isDisposed) {
          const disposable = module.subscribe(relayEnvironment, {
            top_level_feedback_id: feedbackId
          }, false, true);
          disposables.push(disposable.dispose);
        }
    });

    if (feedbackData && feedbackData.is_eligible_for_enhanced_comment_updates === true && feedbackData.associated_video && feedbackData.associated_video.broadcast_is_ama_enabled ) {
        requireDeferred('CometUFIDeleteCommentSubscription').onReady((module) => {
          if (!isDisposed) {
            const disposable = module.subscribe({
              addReparentedCommentIds,
              environment: relayEnvironment,
              feedbackSource,
              topLevelFeedbackID: feedbackId,
            });
            disposables.push(disposable.dispose);
          }
    });

      requireDeferred('CometUFIEditCommentSubscription').onReady((module) => {
        if (!isDisposed) {
          const disposable = module.subscribe({
            environment: relayEnvironment,
            topLevelFeedbackID: feedbackId,
          });
          disposables.push(disposable.dispose);
        }
      });
    }

    if (feedbackData.is_synced_qa_post) {
      requireDeferred('CometUFIWorkQACommentTypeUpdateSubscription').onReady((module) => {
        if (!isDisposed) {
          const disposable = module.subscribe({
            environment: relayEnvironment,
            feedbackID: feedbackId,
          });
          disposables.push(disposable);
        }
      });
    }

    return {
      dispose: () => {
        isDisposed = true;
        disposables.forEach((disposable) => ErrorGuard.applyWithGuard(disposable, null, []));
      },
    };
  }, [feedbackData, feedbackSource, relayEnvironment, subscriptionTargetId, feedbackId]);

  const onAddCommentClick = useCallback(() => {
    var commentList = commentListRef.current;
    if (commentList == null) return;
    commentList.Actions.expandList({
        focusComposer: true,
        scrollToComposer: true
    })
   }, [])


   const subscribeToCommentToggling = useCallback(() => {
    if (!feedbackId || !subscriptionTargetId) return;

    let isDisposed = false;
    let disposeCallback = function () {};

    const subscription = {
        dispose: function () {
          isDisposed = true;
          disposeCallback();
        }
    };
    requireDeferred('CometUFIToggleCommentPermissionSubscription').onReady(function (module) {
        if (!isDisposed) {
            const commentPermissionSubscription = module.subscribe(relayEnvironment, {
                feedback_id: feedbackId
            }, false);
            disposeCallback = commentPermissionSubscription.dispose
        }
    });
    return subscription
  }, [relayEnvironment, feedbackId, subscriptionTargetId])

  const instanceKeyContext = useContext(CometUFIQPLInstanceKeyContext);
  const viewSelectorRef = useRef(null);

  const onEditCommentError = useCallback(
    (error) => {
      requireDeferred('CometUFIFunnelLogger').onReady((logger) =>
        logger.addPoint(instanceKeyContext, logger.CometUFIFunnelLoggerEvents.COMMENT_EDIT_ERROR)
      );
      setError(error);
    },
    [instanceKeyContext, setError]
  );

  const [locallyComposedCommentIds, setLocallyComposedCommentIds] = useState(() => new Set());
  const [realtimeCommentIds, setRealtimeCommentIds] = useState(() => new Set());


  const onRealtimeCommentReceived = useCallback((comment) => {
    if (comment == null) return;
    const commentId = comment.node?.id;

    if (!commentId) {
        console.error("Could not discern an `id` having received a realtime comment. Realtime comment handling might be broken. Investigate immediately.", "ufi2");
        return
    }
    setRealtimeCommentIds((ids) => {
        return new Set(ids).add(commentId)
    })
  }, []);

  const { animationComponent } = useCometUFIAwardDelightsAnimator();
  const referringFeedLocation = useContext(CometFocusedStoryViewReferringFeedLocationContext);

  const handleCommitCommentCreate = useCometHandleCommitCommentCreate({
    feedbackRef: feedbackData,
    feedLocation,
    focusCommentID,
    onCommit: onCommitCommentCreate,
    referringFeedLocation: referringFeedLocation,
    setError: setError,
    setLocallyComposedCommentIds: setLocallyComposedCommentIds,
  })

  const onComposerFocusCallback = useCallback(() => {
      triggeredStoryCTAHandler('COMMENT_BUTTON_TAP');
    }, [triggeredStoryCTAHandler]);
  
  const mergedRefs = useMemo(
      () => mergeRefs(listRef, commentListRef),
      [listRef]
  );
  
  const layoutContextValue = useMemo(
      () => ({
        narrow,
      }),
      [narrow]
  );


  if (!feedbackId) {
    console.error(
      "No id on feedback when fetching from relay story in CometUFICommentListRenderer, this indicates relay's store/environment has been compromised somehow",
      'ufi2'
    );
    return null;
  }

  const commentListRenderer = feedbackData?.comment_list_renderer;
  let renderProps, renderComponent;
  if (commentListRenderer?.__typename === 'XFBCommentListRendererForDisplayComments') {
    renderProps = {
      depth: 0,
      displayCommentsContext,
      editingCommentID,
      fallback,
      feedbackSource,
      feedbackTargetID: feedbackId,
      feedLocation,
      focusCommentID,
      listRef: mergedRefs,
      locallyComposedCommentIds,
      onAddCommentClick,
      onCommitCommentCreate: handleCommitCommentCreate,
      onComposerFocusCallback,
      onEditCommentError,
      onRealtimeCommentReceived,
      onTranslateAllClick: setTrue,
      realtimeCommentIds,
      renderedTranslationCommentID,
      renderer: commentListRenderer,
      setEditingCommentID,
      setRenderedTranslationCommentID,
      shouldRequestTranslationForAllComments: value,
      storyRenderLocation,
      subscribeToCommentToggling,
      useDefaultActor: false,
      viewSelectorRef,
    };
  } else if(commentListRenderer?.__typename === "XFBCommentListRendererForCommentsAPI" || commentListRenderer?.__typename === "XFBCommentListRendererForCommentsAPIPermalink" || commentListRenderer.__typename === "XFBCommentListRendererForCommentsAPIMediaViewer" || commentListRenderer?.__typename === "XFBCommentListRendererForCommentsAPITahoe" || commentListRenderer?.__typename === "XFBCommentListRendererForCommentsAPITahoeWithLiveVOD") {
    renderComponent = {
        editingCommentID,
        feedbackSource,
        feedLocation,
        focusCommentID,
        handleCreateCommentProps: {
            onCommit: onCommitCommentCreate,
            setError,
            setLocallyComposedCommentIds
        },
        listRef: mergedRefs,
        locallyComposedCommentIds,
        onComposerFocusCallback,
        onEditCommentError,
        onRealtimeCommentReceived,
        onTranslateAllClick: setTrue,
        realtimeCommentIds,
        renderedTranslationCommentID,
        setEditingCommentID,
        setRenderedTranslationCommentID,
        shouldRequestTranslationForAllComments: value,
        storyRenderLocation,
        useDefaultActor: false
    }
  }

  return (
    <UFI2RealtimeContainer subscribe={subscribe}>
        {errorDialog}
        {animationComponent}
        <CometUFIReparentedCommentIDsContext.Provider>
            <CometUFICommentListLayoutContext.Provider value={layoutContextValue}>
                <CometRelay.MatchContainer
                    match={commentListRenderer}
                    props={renderProps ? renderProps : { ...renderComponent, renderer: commentListRenderer }}
                />
            </CometUFICommentListLayoutContext.Provider>
        </CometUFIReparentedCommentIDsContext.Provider>
    </UFI2RealtimeContainer>
  
  );
}


export default CometUFICommentListRenderer;