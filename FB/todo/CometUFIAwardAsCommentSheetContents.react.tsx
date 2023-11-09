// __d("CometUFIAwardAsCommentSheetContents.react", ["fbt", "CometColumn.react", "CometColumnItem.react", "CometCommunityAwardsLoggerDeferred", "CometRelay", "CometRow.react", "CometRowItem.react", "CometUFIAwardAsCommentSheetContents_feedback.graphql", "CometUFIAwardAsCommentSheetSettings.react", "CometUFIAwardSelectionButtons.react", "CometUFIAwardsFbt", "TetraText.react", "react", "unrecoverableViolation", "useCometCommunityAwardAsCommentQPLLogger", "useCometCommunityAwardsViewImpression", "useCometUFILexicalEmptyListeners", "useCommunityAwardsFBFeedLocation"], (function(a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j, k = j || (j = d("react")), l = j.useCallback;
//     e = "404855548263802";
//     function a(a) {
//         var e, f = a.authorName, g = a.awardsQPLLogger, j = a.canViewerSendAwards, m = a.commentID, n = a.entrypoint, o = a.feedback$key, p = a.givenAwardEntities, q = a.multiDialogPushPage, r = a.onClose, s = a.onLogAwardsEventWithPresetID, t = a.pluginProps, u = a.replyLevel2Comment, v = a.replyToAward, w = a.replyToOneself, x = a.storyID;
//         a = a.testid;
//         a = d("CometRelay").useFragment(i !== void 0 ? i : i = b("CometUFIAwardAsCommentSheetContents_feedback.graphql"), o);
//         o = a.group;
//         var y = o.id;
//         a = (e = (e = a.award_bling_string_cta_data) == null ? void 0 : (e = e.meta_text) == null ? void 0 : e.text) != null ? e : (e = a.unavailable_sent_awards_meta_text) == null ? void 0 : e.text;
//         e = o.current_award_entities.map(function(a) {
//             return {
//                 animationUri: a.idle_animation_uri,
//                 ariaLabel: a.ax_title.text,
//                 delightsAnimationId: a.delights_animation_id,
//                 iconUri: a.icon_uri,
//                 id: a.id,
//                 title: a.title.text,
//                 type: a.award_type
//             }
//         });
//         if (t == null)
//             throw c("unrecoverableViolation")("Missing required variable: pluginProps in CometUFIAwardAsCommentSheetContents.js", "community_awards");
//         var z = t.addEmptyListener
//           , A = t.commentAction
//           , B = t.editor
//           , C = t.onCommit
//           , D = t.setComposerState
//           , E = d("useCometUFILexicalEmptyListeners").useCometUFILexicalIsEmpty(z);
//         t = c("useCommunityAwardsFBFeedLocation")();
//         var F = {
//             commentID: m,
//             entryPoint: n,
//             groupID: y,
//             storyID: x,
//             surface: t
//         };
//         z = c("useCometCommunityAwardsViewImpression")(babelHelpers["extends"]({
//             eventType: "view_award_giving_sheet"
//         }, F));
//         var G = l(function(a) {
//             var b = function(b) {
//                 return babelHelpers["extends"]({}, b, {
//                     attachment: {
//                         __type: "Award",
//                         awardEntity: a
//                     }
//                 })
//             };
//             E && A === "ADD" ? C(b) : (D(b),
//             B.focus());
//             r()
//         }, [A, B, E, r, C, D]);
//         t = function(a) {
//             var b = d("useCometCommunityAwardAsCommentQPLLogger").CommunityAwardAsCommentQPLPointName.SELECT_AWARD;
//             g == null ? void 0 : g.addPoint(b, {
//                 awardTypes: [a.type]
//             });
//             G(a);
//             d("CometCommunityAwardsLoggerDeferred").logCommunityAwardsEvent(babelHelpers["extends"]({
//                 awardTypes: [a.type],
//                 eventType: "select_award"
//             }, F))
//         }
//         ;
//         o = o.if_viewer_can_customize_community_awards != null && q == null;
//         w = w ? k.jsxs(c("CometColumnItem.react"), {
//             children: [k.jsx(c("TetraText.react"), {
//                 align: "center",
//                 numberOfLines: 1,
//                 type: "meta4",
//                 children: h._("__JHASH__hJ9KgzzPnnO__JHASH__")
//             }), k.jsx(c("TetraText.react"), {
//                 align: "center",
//                 numberOfLines: 1,
//                 type: "meta4",
//                 children: h._("__JHASH__WR7eyicpgKp__JHASH__")
//             })]
//         }) : !j && v === !0 ? k.jsx(c("CometColumnItem.react"), {
//             children: k.jsx(c("TetraText.react"), {
//                 align: "center",
//                 numberOfLines: 1,
//                 type: "meta4",
//                 children: h._("__JHASH__fWA_rDFQkKm__JHASH__")
//             })
//         }) : (u === !0 || !j) && m != null ? k.jsx(c("CometColumnItem.react"), {
//             children: k.jsx(c("TetraText.react"), {
//                 align: "center",
//                 numberOfLines: 1,
//                 type: "meta4",
//                 children: h._("__JHASH__guGM9WEYsHq__JHASH__")
//             })
//         }) : (u === !0 || !j) && x != null ? k.jsx(c("CometColumnItem.react"), {
//             children: k.jsx(c("TetraText.react"), {
//                 align: "center",
//                 numberOfLines: 1,
//                 type: "meta4",
//                 children: h._("__JHASH__9mhOjKxBsOi__JHASH__")
//             })
//         }) : a != null ? k.jsx(c("CometColumnItem.react"), {
//             children: k.jsx(c("TetraText.react"), {
//                 align: "center",
//                 numberOfLines: 1,
//                 type: "meta4",
//                 children: a
//             })
//         }) : null;
//         return k.jsxs(c("CometColumn.react"), {
//             paddingHorizontal: 20,
//             paddingVertical: 20,
//             spacing: 12,
//             testid: void 0,
//             children: [k.jsx(c("CometColumnItem.react"), {
//                 children: k.jsxs(c("CometRow.react"), {
//                     paddingHorizontal: 0,
//                     paddingTop: 0,
//                     paddingVertical: 12,
//                     verticalAlign: "center",
//                     children: [!q && k.jsx(c("CometRowItem.react"), {
//                         children: k.jsx(c("TetraText.react"), {
//                             align: "center",
//                             testid: void 0,
//                             type: "headlineEmphasized2",
//                             children: m != null ? d("CometUFIAwardsFbt").getAwardCommentTitle() : d("CometUFIAwardsFbt").getAwardPostTitle()
//                         })
//                     }), o && k.jsx(c("CometUFIAwardAsCommentSheetSettings.react"), {
//                         commentID: m,
//                         entryPoint: n,
//                         groupID: y,
//                         storyID: x
//                     })]
//                 })
//             }), k.jsx(c("CometColumnItem.react"), {
//                 ref: z,
//                 children: k.jsx(c("CometUFIAwardSelectionButtons.react"), {
//                     allSelectionDisabled: !j || u === !0,
//                     authorName: f,
//                     commentID: m,
//                     enabledAwardEntities: e,
//                     givenAwardEntities: p,
//                     isUndoDisabled: !0,
//                     multiDialogPushPage: q,
//                     onClick: t,
//                     onClose: r,
//                     onLogAwardsEventWithPresetID: s,
//                     storyID: x
//                 })
//             }), w]
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g.DEFAULT_AWARD_ANIMATION_ID = e;
//     g.CometUFIAwardAsCommentSheetContents = a
// }
// ), 98);





import React, { useCallback } from "react";
import {
  CometColumn,
  CometColumnItem,
  CometCommunityAwardsLoggerDeferred,
  CometRelay,
  CometRow,
  CometRowItem,
  CometUFIAwardAsCommentSheetContents_feedback,
  CometUFIAwardAsCommentSheetSettings,
  CometUFIAwardSelectionButtons,
  CometUFIAwardsFbt,
  TetraText,
  unrecoverableViolation,
  useCometCommunityAwardAsCommentQPLLogger,
  useCometCommunityAwardsViewImpression,
  useCometUFILexicalEmptyListeners,
  useCommunityAwardsFBFeedLocation,
} from "some-module-path"; // replace with actual module path

interface AwardEntity {
  animationUri: string;
  ariaLabel: string;
  delightsAnimationId: string;
  iconUri: string;
  id: string;
  title: string;
  type: string;
}

interface Props {
  authorName: string;
  awardsQPLLogger?: any;
  canViewerSendAwards: boolean;
  commentID?: string;
  entrypoint: any;
  feedback$key: any;
  givenAwardEntities: any;
  multiDialogPushPage?: any;
  onClose: () => void;
  onLogAwardsEventWithPresetID: any;
  pluginProps: any;
  replyLevel2Comment: boolean;
  replyToAward: boolean;
  replyToOneself: boolean;
  storyID?: string;
  testid?: string;
}

const DEFAULT_AWARD_ANIMATION_ID = "404855548263802";

const CometUFIAwardAsCommentSheetContents: React.FC<Props> = (props) => {
  const {
    authorName,
    awardsQPLLogger,
    canViewerSendAwards,
    commentID,
    entrypoint,
    feedback$key,
    givenAwardEntities,
    multiDialogPushPage,
    onClose,
    onLogAwardsEventWithPresetID,
    pluginProps,
    replyLevel2Comment,
    replyToAward,
    replyToOneself,
    storyID,
  } = props;


  const feedback = CometRelay.useFragment(
    CometUFIAwardAsCommentSheetContents_feedback,
    feedback$key
  );

  const { group } = feedback;
  const groupId = group.id;
  const metaText =
    feedback.award_bling_string_cta_data?.meta_text?.text ||
    feedback.unavailable_sent_awards_meta_text?.text;

  const awardEntities: AwardEntity[] = group.current_award_entities.map(
    (entity) => ({
      animationUri: entity.idle_animation_uri,
      ariaLabel: entity.ax_title.text,
      delightsAnimationId: entity.delights_animation_id,
      iconUri: entity.icon_uri,
      id: entity.id,
      title: entity.title.text,
      type: entity.award_type,
    })
  );

  if (!pluginProps) {
    throw unrecoverableViolation(
      "Missing required variable: pluginProps in CometUFIAwardAsCommentSheetContents.js",
      "community_awards"
    );
  }

  const {
    addEmptyListener,
    commentAction,
    editor,
    onCommit,
    setComposerState,
  } = pluginProps;

  const isLexicalEmpty = useCometUFILexicalEmptyListeners.useCometUFILexicalIsEmpty(addEmptyListener);
  const location = useCommunityAwardsFBFeedLocation();

  const feedLocation = {
    commentID,
    entryPoint: entrypoint,
    groupID: groupId,
    storyID,
    surface: location,
  };

  const viewImpressionRef = useCometCommunityAwardsViewImpression({
    eventType: "view_award_giving_sheet",
    ...feedLocation,
  });

  const handleAwardSelection = useCallback(
    (awardEntity: AwardEntity) => {
      const pointName =
        useCometCommunityAwardAsCommentQPLLogger.CommunityAwardAsCommentQPLPointName.SELECT_AWARD;
      awardsQPLLogger?.addPoint(pointName, {
        awardTypes: [awardEntity.type],
      });
      if (isLexicalEmpty && commentAction === "ADD") {
        onCommit((b: any) => ({
          ...b,
          attachment: {
            __type: "Award",
            awardEntity,
          },
        }));
      } else {
        setComposerState((b: any) => ({
          ...b,
          attachment: {
            __type: "Award",
            awardEntity,
          },
        }));
        editor.focus();
      }
      onClose();
      CometCommunityAwardsLoggerDeferred.logCommunityAwardsEvent({
        awardTypes: [awardEntity.type],
        eventType: "select_award",
        ...feedLocation,
      });
    },
    [commentAction, editor, isLexicalEmpty, onClose, onCommit, setComposerState]
  );

  const isViewerCustomizingAwards = group.if_viewer_can_customize_community_awards != null && multiDialogPushPage == null;

  const awardContent =
    replyToOneself ? (
      <CometColumnItem>
        <TetraText align="center" numberOfLines={1} type="meta4">
          You can't award yourself
        </TetraText>
        <TetraText align="center" numberOfLines={1} type="meta4">
          Use gifts to show appreciation in your community.
        </TetraText>
      </CometColumnItem>
    ) : !canViewerSendAwards && replyToAward === true ? (
      <CometColumnItem>
        <TetraText align="center" numberOfLines={1} type="meta4">
          You can’t give gifts to a comment that is a gift.
        </TetraText>
      </CometColumnItem>
    ) : (replyLevel2Comment === true || !canViewerSendAwards) && commentID != null ? (
      <CometColumnItem>
        <TetraText align="center" numberOfLines={1} type="meta4">
          You can't give gifts on this comment right now.
        </TetraText>
      </CometColumnItem>
    ) : (replyLevel2Comment === true || !canViewerSendAwards) && storyID != null ? (
      <CometColumnItem>
        <TetraText align="center" numberOfLines={1} type="meta4">
          You can't give gifts on this post right now.
        </TetraText>
      </CometColumnItem>
    ) : metaText != null ? (
      <CometColumnItem>
        <TetraText align="center" numberOfLines={1} type="meta4">
          {metaText}
        </TetraText>
      </CometColumnItem>
    ) : null;

  return (
    <CometColumn testid={undefined} paddingHorizontal={20} paddingVertical={20} spacing={12}>
      <CometColumnItem>
        <CometRow paddingHorizontal={0} paddingTop={0} paddingVertical={12} verticalAlign="center">
          {!multiDialogPushPage && (
            <CometRowItem>
              <TetraText align="center" type="headlineEmphasized2">
                {commentID ? CometUFIAwardsFbt.getAwardCommentTitle() : CometUFIAwardsFbt.getAwardPostTitle()}
              </TetraText>
            </CometRowItem>
            )}
            {isViewerCustomizingAwards && (
              <CometUFIAwardAsCommentSheetSettings commentID={commentID} entryPoint={entrypoint} groupID={groupId} storyID={storyID} />  
            )}
        </CometRow>
      </CometColumnItem>

      <CometColumnItem ref={viewImpressionRef}>
          <CometUFIAwardSelectionButtons allSelectionDisabled={!canViewerSendAwards || replyLevel2Comment === false} authorName={authorName} commentID={commentID} enabledAwardEntities={awardEntities} givenAwardEntities={givenAwardEntities} isUndoDisabled={true} multiDialogPushPage={multiDialogPushPage} onClick={handleAwardSelection} onClose={onClose} onLogAwardsEventWithPresetID={onLogAwardsEventWithPresetID} storyID={storyID} />
      </CometColumnItem>

      {awardContent}
    </CometColumn>
  );
};

export { CometUFIAwardAsCommentSheetContents, DEFAULT_AWARD_ANIMATION_ID };
