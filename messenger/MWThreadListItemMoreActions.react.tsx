// __d("MWThreadListItemMoreActions.react", ["fbt", "I64", "MWJewelPopoverDialogContext.react", "MWPGetThreadCTA", "MWPIsThreadUnread.bs", "MWThreadListFocusableTable.react", "MWXCircleButton.react", "MWXListCellHoverActions.react", "MWXListCellHoverButton.react", "MWXPopoverLoadingState.react", "MessageRequestsBulkActionsContext.react", "MessengerCamcorder.svg.react", "MessengerPhone.svg.react", "MessengerWebUXLogger", "SVGIcon", "cr:2580", "gkx", "react", "requireDeferred"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i = d("react");
//     e = d("react");
//     var j = e.useCallback,
//         k = e.useContext,
//         l = e.useMemo,
//         m = c("requireDeferred")("MWThreadListHoverButtonDropdownMenu.react").__setRef("MWThreadListItemMoreActions.react"),
//         n = c("gkx")("1977");

//     function a(a) {
//         var e = a.fbGroupId,
//             f = a.menuButtonVisibilityState,
//             g = a.messagingEntrypoint,
//             o = a.mutedUntilMs,
//             p = a.onClose,
//             q = a.selected,
//             r = a.thread;
//         a = l(function () {
//             return d("I64").to_string(r.threadKey)
//         }, [r]);
//         var s = d("MWPIsThreadUnread.bs").isThreadUnread(r),
//             t = f[0];
//         f = f[1];
//         var u = f.setMenuBtnFocused,
//             v = f.setMenuBtnHovered,
//             w = f.setMenuOpened;
//         f = k(c("MWJewelPopoverDialogContext.react"));
//         var x = f.setIsOpenForDialog,
//             y = j(function () {
//                 if (g === "jewel") return x(!1)
//             }, [g, x]),
//             z = c("MessengerWebUXLogger") == null ? void 0 : c("MessengerWebUXLogger").useInteractionLogger();
//         f = k(c("MessageRequestsBulkActionsContext.react"));
//         f = f.isBulkActionsEditMode;
//         var A = d("MWPGetThreadCTA").getThreadCTA(r);
//         return i.jsx(d("MWThreadListFocusableTable.react").MWThreadListFocusableTableCell, {
//             children: i.jsx("div", {
//                 role: "gridcell",
//                 children: f ? null : i.jsxs(c("MWXListCellHoverActions.react"), {
//                     hidden: !t,
//                     children: [n && A != null ? i.jsx(c("MWXCircleButton.react"), {
//                         color: "secondary",
//                         icon: d("SVGIcon").svgIcon(A === d("MWPGetThreadCTA").ThreadCTA.VideoCall ? c("MessengerCamcorder.svg.react") : c("MessengerPhone.svg.react")),
//                         label: h._("__JHASH__TF6qbw6BiBY__JHASH__"),
//                         size: 32,
//                         type: "overlay"
//                     }) : null, i.jsx(c("MWXListCellHoverButton.react"), {
//                         onFocusChange: u,
//                         onHoverChange: v,
//                         onMenuStateChange: function (a) {
//                             y();
//                             if (a) {
//                                 var c = r.threadKey,
//                                     d = r.threadType;
//                                 b("cr:2580") && b("cr:2580")({
//                                     threadKey: c,
//                                     threadType: d
//                                 }, "open_thread_settings_menu", g);
//                                 z == null ? void 0 : z({
//                                     eventName: "open_thread_overflow_menu",
//                                     threadKey: r.threadKey,
//                                     threadType: r.threadType
//                                 })
//                             }
//                             return w(a)
//                         },
//                         popoverFallback: i.jsx(c("MWXPopoverLoadingState.react"), {
//                             withArrow: !0
//                         }),
//                         popoverProps: {
//                             fbid: a,
//                             groupId: d("I64").to_string((f = e) != null ? f : d("I64").zero),
//                             isUnread: s,
//                             messagingEntrypoint: g,
//                             mutedUntil: o / 1e3,
//                             onCloseJewel: p,
//                             selected: q,
//                             thread: r
//                         },
//                         popoverResource: m,
//                         popoverTriggerType: "lazy",
//                         size: c("gkx")("571") ? 32 : void 0,
//                         testid: void 0
//                     })]
//                 })
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);





import React, { useCallback, useContext, useMemo } from 'react';
import { I64 } from 'I64'; // Replace 'I64' with the actual import path
import { MWJewelPopoverDialogContext } from 'MWJewelPopoverDialogContext.react'; // Replace with the actual import path
import MWPGetThreadCTA from 'MWPGetThreadCTA'; // Replace with the actual import path
import { MWPIsThreadUnread } from 'MWPIsThreadUnread.bs'; // Replace with the actual import path
import MWThreadListFocusableTable from 'MWThreadListFocusableTable.react'; // Replace with the actual import path
import MWXCircleButton from 'MWXCircleButton.react'; // Replace with the actual import path
import MWXListCellHoverActions from 'MWXListCellHoverActions.react'; // Replace with the actual import path
import MWXListCellHoverButton from 'MWXListCellHoverButton.react'; // Replace with the actual import path
import MWXPopoverLoadingState from 'MWXPopoverLoadingState.react'; // Replace with the actual import path
import MessageRequestsBulkActionsContext from 'MessageRequestsBulkActionsContext.react'; // Replace with the actual import path
import MessengerCamcorder from 'MessengerCamcorder.svg.react'; // Replace with the actual import path
import MessengerPhone from 'MessengerPhone.svg.react'; // Replace with the actual import path
import MessengerWebUXLogger from 'MessengerWebUXLogger'; // Replace with the actual import path
import SVGIcon from 'SVGIcon'; // Replace with the actual import path
import cr2580 from 'cr:2580'; // Replace with the actual import path
import { gkx } from 'gkx'; // Replace with the actual import path
import requireDeferred from 'requireDeferred';


const MWThreadListHoverButtonDropdownMenu = requireDeferred("MWThreadListHoverButtonDropdownMenu").__setRef("MWThreadListItemMoreActions.react");


const MWThreadListItemMoreActions = ({
  fbGroupId,
  menuButtonVisibilityState,
  messagingEntrypoint,
  mutedUntilMs,
  onClose,
  selected,
  thread
}) => {
  const threadKeyStr = useMemo(() => I64.to_string(thread.threadKey), [thread]);
  const isUnread = MWPIsThreadUnread.isThreadUnread(thread);
  const [visible, visibilityStateMethods] = menuButtonVisibilityState;
  const { setMenuBtnFocused, setMenuBtnHovered, setMenuOpened } = visibilityStateMethods;
  const popoverDialogContext = useContext(MWJewelPopoverDialogContext);
  const {setIsOpenForDialog} = popoverDialogContext;
  const closeDialog = useCallback(() => {
    if (messagingEntrypoint === 'jewel') setIsOpenForDialog(false);
  }, [messagingEntrypoint, setIsOpenForDialog]);
  const webUXLogger = MessengerWebUXLogger?.useInteractionLogger();

  const {isBulkActionsEditMode} = useContext(MessageRequestsBulkActionsContext);
  const threadCTAIcon = MWPGetThreadCTA.getThreadCTA(thread);

  return (
    <MWThreadListFocusableTable.MWThreadListFocusableTableCell>
      <div role="gridcell">
        {!isBulkActionsEditMode && (
          <MWXListCellHoverActions hidden={!visible}>
            {gkx('1977') && threadCTAIcon && (
              <MWXCircleButton
                color="secondary"
                icon={SVGIcon.svgIcon(threadCTAIcon === MWPGetThreadCTA.ThreadCTA.VideoCall ? MessengerCamcorder : MessengerPhone)}
                label="__JHASH__TF6qbw6BiBY__JHASH__"
                size={32}
                type="overlay"
              />
            )}
            <MWXListCellHoverButton
              onFocusChange={setMenuBtnFocused}
              onHoverChange={setMenuBtnHovered}
              onMenuStateChange={isOpen => {
                closeDialog();
                if (isOpen) {
                  const { threadKey, threadType } = thread;
                  cr2580?.({
                    threadKey: threadKey,
                    threadType: threadType,
                  }, 'open_thread_settings_menu', messagingEntrypoint);
                  webUXLogger?.({
                    eventName: 'open_thread_overflow_menu',
                    threadKey: thread.threadKey,
                    threadType: thread.threadType,
                  });
                }
                return setMenuOpened(isOpen);
              }}
              popoverFallback={<MWXPopoverLoadingState withArrow />}
              popoverProps={{
                fbid: threadKeyStr,
                groupId: I64.to_string(fbGroupId ?? I64.zero),
                isUnread: isUnread,
                messagingEntrypoint: messagingEntrypoint,
                mutedUntil: mutedUntilMs / 1000,
                onCloseJewel: onClose,
                selected: selected,
                thread: thread,
              }}
              popoverResource={MWThreadListHoverButtonDropdownMenu}
              popoverTriggerType="lazy"
              size={gkx('571') ? 32 : undefined}
            />
          </MWXListCellHoverActions>
        )}
      </div>
    </MWThreadListFocusableTable.MWThreadListFocusableTableCell>
  );
};

export default MWThreadListItemMoreActions;
