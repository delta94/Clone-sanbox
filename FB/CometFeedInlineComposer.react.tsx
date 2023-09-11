// __d("CometFeedInlineComposer.react", ["fbt", "CometCard.react", "CometComposerAttachmentPluginTypes", "CometComposerFooterAttachmentPluginTypes", "CometFeedInlineComposerPressableProfilePic.react", "CometFeedInlineComposerQuery.graphql", "CometFeedInlineComposerSproutsList.react", "CometFeedInlineComposerWOYM.react", "CometRelay", "CometScreenReaderHeading.react", "cometGetKeyCommandConfig", "cr:1993522", "cr:3594", "getComposerUnsavedChangesAlert", "gkx", "qex", "react", "stylex", "useComposerTerminalEventLog", "useFeedComposerCometDialog", "useLayerKeyCommands", "useNullthrowsViolation", "useOnBeforeUnload", "usePostInProgress", "useResumableComposerViewState"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j = d("react");
//     e = d("react");
//     var k = e.useCallback,
//         l = e.useMemo,
//         m = e.useRef,
//         n = {
//             body: {
//                 alignItems: "x6s0dn4",
//                 display: "x78zum5",
//                 flexWrap: "x1a02dak",
//                 paddingBottom: "x1a8lsjc",
//                 paddingEnd: "x1pi30zi",
//                 paddingStart: "x1swvt13",
//                 paddingTop: "xz9dl7a",
//                 $$css: !0
//             },
//             bodyNoSprouts: {
//                 paddingBottom: "xsag5q8",
//                 $$css: !0
//             },
//             inlineBtn: {
//                 marginStart: "x1i64zmx",
//                 $$css: !0
//             },
//             topPart: {
//                 alignItems: "x1cy8zhl",
//                 display: "x78zum5",
//                 flexGrow: "x1iyjqo2",
//                 flexShrink: "xs83m0k",
//                 width: "xh8yej3",
//                 $$css: !0
//             }
//         },
//         o = {
//             current: null
//         };

//     function a(a) {
//         a = a.feedInlineComposerQueryReference;
//         var e = m(!1),
//             f = c("useResumableComposerViewState")(),
//             g = f.clearResumableViewState,
//             p = f.getResumableViewState,
//             q = f.saveResumableViewState;
//         f = c("usePostInProgress")();
//         var r = f.postPlainText,
//             s = f.updatePostPlainText,
//             t = m(!1);
//         c("useOnBeforeUnload")(function () {
//             return t.current === !0 ? c("getComposerUnsavedChangesAlert")() : void 0
//         });
//         c("useComposerTerminalEventLog")(function () {
//             return t.current
//         }, function () {
//             return p().creationSessionID
//         });
//         f = k(function (a) {
//             if (e.current === !0) t.current = !1, g(), s(p());
//             else {
//                 var b;
//                 t.current = (b = a == null ? void 0 : a.isDirty) != null ? b : !1;
//                 q(a);
//                 s(p())
//             }
//         }, [g, s, p, q]);
//         var u = function () {
//                 e.current = !1
//             },
//             v = function () {
//                 t.current = !0, e.current = !1
//             },
//             w = function () {
//                 e.current = !0
//             },
//             x = h._("__JHASH__ecVLcDRqpWJ__JHASH__");
//         a = d("CometRelay").usePreloadedQuery(i !== void 0 ? i : i = b("CometFeedInlineComposerQuery.graphql"), a);
//         a = a.viewer;
//         var y = c("useNullthrowsViolation")(a.actor.id, "Unable to render CometFeedInlineComposer with null viewerID and type " + a.actor.__typename),
//             z = a.actor.has_professional_features_for_watch === !0,
//             A = z && c("gkx")("1430759");
//         z = c("useFeedComposerCometDialog")({
//             composerEntryPointName: "inline_composer",
//             composerSourceSurface: "newsfeed",
//             composerType: "feed",
//             onBeforeClose: f,
//             onSave: u,
//             onSaveError: v,
//             onSubmit: w,
//             profileID: y,
//             title: x,
//             tracePolicy: "comet.composer.feed"
//         });
//         var B = z[0];
//         f = z[1];
//         u = z[2];
//         v = z[3];
//         w = z[4];
//         var C = k(function (a) {
//             var b;
//             t.current = !1;
//             var e = c("gkx")("1224637");
//             e = p(a == null ? void 0 : a.additionalMediaAttachmentItems, {
//                 startWithHeaderTextStyle: e
//             });
//             e = babelHelpers["extends"]({}, e, {
//                 characterLimit: 63206,
//                 featureDefinitionsGating: {
//                     areAttachmentFeaturesSupported: !c("gkx")("1224637")
//                 },
//                 isFooterButtonModularizationEnabled: (b = c("qex")._("217")) != null ? b : !1,
//                 mediaAttachmentsLimit: 80,
//                 videoComposerData: {
//                     shouldOpenVideoSpecificComposer: A,
//                     targetID: y
//                 }
//             });
//             if ((a == null ? void 0 : a.pushedPageOnLoad) === "get_messages") {
//                 b = c("gkx")("6262");
//                 e = babelHelpers["extends"]({}, e, {
//                     attachmentArea: babelHelpers["extends"]({}, e.attachmentArea, {
//                         activeAttachmentType: c("CometComposerAttachmentPluginTypes").GET_MESSAGES
//                     }),
//                     isGetMessagesPost: !0,
//                     isGetMessagesPostAttachmentOptional: b
//                 })
//             }(a == null ? void 0 : a.pushedPageOnLoad) === "get_whatsapp_messages" && (e = babelHelpers["extends"]({}, e, {
//                 footerAttachmentArea: {
//                     activeFooterAttachmentType: d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.GET_WHATSAPP_MESSAGES
//                 },
//                 isGetWhatsAppMessagePost: !0,
//                 isGetWhatsappMessagesPostAttachmentOptional: !0
//             }));
//             B({
//                 beginningViewState: e,
//                 pushedPageOnLoad: a == null ? void 0 : a.pushedPageOnLoad
//             })
//         }, [p, B, y, A]);
//         x = l(function () {
//             return [d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig("newsfeed", "newPost", C)]
//         }, [C]);
//         c("useLayerKeyCommands")(x);
//         z = h._("__JHASH__wQWxG07eOjM__JHASH__");
//         x = j.jsx(c("CometCard.react"), {
//             background: "white",
//             dropShadow: 1,
//             children: j.jsxs("div", {
//                 "aria-label": z,
//                 className: c("stylex")(n.body, !c("CometFeedInlineComposerSproutsList.react") && n.bodyNoSprouts),
//                 role: "region",
//                 children: [j.jsxs("div", {
//                     className: "x1cy8zhl x78zum5 x1iyjqo2 xs83m0k xh8yej3",
//                     children: [j.jsx(c("CometScreenReaderHeading.react"), {
//                         children: z
//                     }), j.jsx(c("CometFeedInlineComposerPressableProfilePic.react"), {
//                         profile$key: a.actor
//                     }), j.jsx(c("CometFeedInlineComposerWOYM.react"), {
//                         onHoverInPrerenderer: u,
//                         onHoverOutPrerenderer: v,
//                         onPress: function () {
//                             return C()
//                         },
//                         onPressInPrerenderer: w,
//                         postPlainText: r,
//                         profile$key: a.actor,
//                         triggerRef: f
//                     }), b("cr:3594") && j.jsx("div", {
//                         className: "x1i64zmx",
//                         children: j.jsx(b("cr:3594"), {
//                             composer: a.feed_comet_composer,
//                             onPress: C
//                         })
//                     })]
//                 }), !b("cr:3594") && j.jsx(c("CometFeedInlineComposerSproutsList.react"), {
//                     composer: a.feed_comet_composer,
//                     onHoverInPrerenderer: u,
//                     onHoverOutPrerenderer: v,
//                     onPressInPrerenderer: w,
//                     profile$key: a.actor,
//                     showFeedComposerDialog: C,
//                     triggerRef: f
//                 })]
//             })
//         });
//         if (b("cr:1993522") == null) return x;
//         else return j.jsx(b("cr:1993522"), {
//             enableFeature: !1,
//             fallback: j.jsx(c("CometCard.react"), {
//                 background: "white",
//                 dropShadow: 1,
//                 children: j.jsxs("div", {
//                     "aria-label": z,
//                     className: "x6s0dn4 x78zum5 x1a02dak x1a8lsjc x1pi30zi x1swvt13 xz9dl7a",
//                     role: "region",
//                     children: [j.jsx(c("CometScreenReaderHeading.react"), {
//                         children: z
//                     }), j.jsx(c("CometFeedInlineComposerPressableProfilePic.react"), {
//                         profile$key: a.actor
//                     }), j.jsx(c("CometFeedInlineComposerWOYM.react"), {
//                         onPress: function () {},
//                         profile$key: a.actor,
//                         triggerRef: o
//                     }), c("CometFeedInlineComposerSproutsList.react") && j.jsx(c("CometFeedInlineComposerSproutsList.react"), {
//                         composer: null,
//                         showFeedComposerDialog: function () {},
//                         triggerRef: o
//                     })]
//                 })
//             }),
//             children: x
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React, { useCallback, useMemo, useRef } from 'react';
import { useComposerTerminalEventLog } from 'useComposerTerminalEventLog';
import { useFeedComposerCometDialog } from 'useFeedComposerCometDialog';
import { useNullthrowsViolation } from 'useNullthrowsViolation';
import { useLayerKeyCommands } from 'useLayerKeyCommands';
import { useOnBeforeUnload } from 'useOnBeforeUnload';
import { usePostInProgress, useResumableComposerViewState } from 'usePostInProgress';
import { CometRelay, usePreloadedQuery } from 'CometRelay';
import { getComposerUnsavedChangesAlert } from 'getComposerUnsavedChangesAlert';
import { gkx } from 'gkx';
import { qex } from 'qex';
import { CometScreenReaderHeading } from 'CometScreenReaderHeading.react';
import { getCometAndGeminiKeyCommandConfig } from 'cometGetKeyCommandConfig';
import { CometCard } from 'CometCard.react';
import { cometGetKeyCommandConfig } from 'cometGetKeyCommandConfig';
import { CometComposerAttachmentPluginTypes } from 'CometComposerAttachmentPluginTypes';
import { CometComposerFooterAttachmentPluginTypes } from 'CometComposerFooterAttachmentPluginTypes';
import { CometFeedInlineComposerPressableProfilePic } from 'CometFeedInlineComposerPressableProfilePic.react';
import { CometFeedInlineComposerSproutsList } from 'CometFeedInlineComposerSproutsList.react';
import { CometFeedInlineComposerWOYM } from 'CometFeedInlineComposerWOYM.react';
import { CometFeedInlineComposerQuery } from 'CometFeedInlineComposerQuery.graphql';

const styles = {
  body: {
    alignItems: "x6s0dn4",
    display: "x78zum5",
    flexWrap: "x1a02dak",
    paddingBottom: "x1a8lsjc",
    paddingEnd: "x1pi30zi",
    paddingStart: "x1swvt13",
    paddingTop: "xz9dl7a",
  },
  bodyNoSprouts: {
    paddingBottom: "xsag5q8",
  },
  inlineBtn: {
    marginStart: "x1i64zmx",
  },
  topPart: {
    alignItems: "x1cy8zhl",
    display: "x78zum5",
    flexGrow: "x1iyjqo2",
    flexShrink: "xs83m0k",
    width: "xh8yej3",
  },
};

function CometFeedInlineComposer({ feedInlineComposerQueryReference }) {
    const isDirtyRef = useRef(false);

    const {
    clearResumableViewState,
    getResumableViewState,
    saveResumableViewState,
  } = useResumableComposerViewState();

  const { postPlainText, updatePostPlainText } = usePostInProgress();

  const isUnloadingRef = useRef(false);

  useOnBeforeUnload(() => {
    return isUnloadingRef.current === true ? getComposerUnsavedChangesAlert() : undefined;

  });

  useComposerTerminalEventLog(() => isUnloadingRef.current, () => getResumableViewState().creationSessionID);

  const handleBeforeClose = useCallback((composerState) => {
    if (isDirtyRef.current === true) {
      isUnloadingRef.current = false;
      clearResumableViewState();
      updatePostPlainText(getResumableViewState());
    } else {
      const composerIsDirty = composerState?.isDirty ?? false;
      isUnloadingRef.current = !composerIsDirty;
      saveResumableViewState(composerState);
      updatePostPlainText(getResumableViewState());
    }
  },[clearResumableViewState,updatePostPlainText,getResumableViewState,saveResumableViewState]);

  const handleSave = () => {
    isDirtyRef.current = false;
  };

  const handleSaveError = () => {
    isUnloadingRef.current = true;
    isDirtyRef.current = false;
  };

  const handleSubmit = () => {
    isDirtyRef.current = false;
  };

  const title = '__JHASH__ecVLcDRqpWJ__JHASH__';

  const {viewer,feed_comet_composer} = usePreloadedQuery(CometFeedInlineComposerQuery, feedInlineComposerQueryReference);

  const profileID = useNullthrowsViolation(viewer.actor.id, 'Unable to render CometFeedInlineComposer with null viewerID and type ' + viewer.actor.__typename);

  const hasProfessionalFeaturesForWatch = viewer?.actor?.has_professional_features_for_watch === true;
  const isProfessional = hasProfessionalFeaturesForWatch && gkx('1430759');

  const [
    showFeedComposerDialog,
    triggerRef,
    onHoverInPrerenderer,
    onHoverOutPrerenderer,
    onPressInPrerenderer,
  ] = useFeedComposerCometDialog({
    composerEntryPointName: "inline_composer",
    composerSourceSurface: "newsfeed",
    composerType: "feed",
    onBeforeClose: handleBeforeClose,
    onSave: handleSave,
    onSaveError: handleSaveError,
    onSubmit: handleSubmit,
    profileID: profileID,
    title: title,
    tracePolicy: "comet.composer.feed",
  });

  const handleOpenComposerDialog = useCallback((additionalMediaAttachmentItems) => {
   isUnloadingRef.current = false;
   const shouldOpenVideoSpecificComposer = gkx("1224637");

   let beginningViewState = {
    ...getResumableViewState(additionalMediaAttachmentItems, {
        startWithHeaderTextStyle: shouldOpenVideoSpecificComposer,
    }),
    characterLimit: 63206,
    featureDefinitionsGating: {
      areAttachmentFeaturesSupported: !gkx("1224637"),
    },
    mediaAttachmentsLimit: 80,
    videoComposerData: {
      shouldOpenVideoSpecificComposer: isProfessional,
      targetID: profileID,
    },
  };


    if (additionalMediaAttachmentItems.pushedPageOnLoad === 'get_messages') {
      const isGetMessagesPostAttachmentOptional = gkx('6262');
      beginningViewState = {
        ...beginningViewState,
        activeAttachmentType: CometComposerAttachmentPluginTypes.GET_MESSAGES,
        isGetMessagesPost: true,
        isGetMessagesPostAttachmentOptional,
      };
    } else if (additionalMediaAttachmentItems.pushedPageOnLoad === 'get_whatsapp_messages') {
        beginningViewState = {
        ...beginningViewState,
        footerAttachmentArea: {
          activeFooterAttachmentType: CometComposerFooterAttachmentPluginTypes.GET_WHATSAPP_MESSAGES,
        },
        isGetWhatsAppMessagePost: true,
        isGetWhatsappMessagesPostAttachmentOptional: true,
      };
    }

    showFeedComposerDialog({
      beginningViewState,
      pushedPageOnLoad: additionalMediaAttachmentItems.pushedPageOnLoad,
    });
  }, [getResumableViewState,showFeedComposerDialog,isProfessional,profileID]);

  const keyCommandConfig = useMemo(() => {
    return [cometGetKeyCommandConfig.getCometAndGeminiKeyCommandConfig('newsfeed', 'newPost', handleOpenComposerDialog)];
  }, [handleOpenComposerDialog]);

  useLayerKeyCommands(keyCommandConfig);

  const ariaLabel = "__JHASH__wQWxG07eOjM__JHASH__";

  return (
    <CometCard background="white" dropShadow={1}>
        <div
            aria-label={ariaLabel}
            className={styles.body}
            role="region"
        > 
             <div className={styles.topPart}>   
                <CometScreenReaderHeading>{ariaLabel}</CometScreenReaderHeading>
                <CometFeedInlineComposerPressableProfilePic profile$key={viewer.actor} />
                <CometFeedInlineComposerWOYM
                    onHoverInPrerenderer={onHoverInPrerenderer}
                    onHoverOutPrerenderer={onHoverOutPrerenderer}
                    onPress={handleOpenComposerDialog}
                    onPressInPrerenderer={onPressInPrerenderer}
                    postPlainText={postPlainText}
                    profile$key={viewer.actor}
                    triggerRef={triggerRef}
                />
             </div>
      
            <CometFeedInlineComposerSproutsList
                onHoverInPrerenderer={onHoverInPrerenderer}
                onHoverOutPrerenderer={onHoverOutPrerenderer}
                onPress={handleOpenComposerDialog}
                showFeedComposerDialog={showFeedComposerDialog}
                composer={feed_comet_composer}
                triggerRef={triggerRef}
                profile$key={viewer.actor}
            />
       
      </div>
    </CometCard>
)
}
