// __d("CometProfilePlusAPPageInboxMessageButton.react", ["fbt", "CometProfilePlusAPPageInboxMessageButtonImpl.react", "CometRelay", "XPagesManagerInboxControllerRouteBuilder", "deferredLoadComponent", "gkx", "react", "recoverableViolation", "requireDeferredForDisplay"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j = i || (i = d("react"));
//     b = i;
//     var k = b.useCallback,
//         l = b.useRef,
//         m = b.useState,
//         n = c("deferredLoadComponent")(c("requireDeferredForDisplay")("MWChatBadgeCount.react").__setRef("CometProfilePlusAPPageInboxMessageButton.react"));

//     function a(a) {
//         a = a.mailboxID;
//         a = c("XPagesManagerInboxControllerRouteBuilder").buildURL({
//             page_token: a,
//             referrer: "comet_profile_plus_ap_page_inbox_message_button"
//         });
//         var b = c("gkx")("2530"),
//             e = m(0),
//             f = e[0],
//             g = e[1],
//             i = l(null);
//         e = k(function (a) {
//             g && g(a);
//             if (i.current === a) return;
//             i.current = a
//         }, [g]);
//         var o = d("CometRelay").useRelayEnvironment(),
//             p = k(function () {
//                 o.commitUpdate(function (a) {
//                     var b = a.getRoot();
//                     if (b == null) {
//                         c("recoverableViolation")("A store root must be present to move forward.", "messenger_comet");
//                         return
//                     }
//                     b = b.getLinkedRecord("viewer");
//                     if (b == null) {
//                         c("recoverableViolation")("A viewer record does not exist.", "messenger_comet");
//                         return
//                     }
//                     var d = b.getLinkedRecord("message_threads");
//                     if (d == null) {
//                         var e = "client:root:viewer:message_threads";
//                         d = a.create(e, "ViewerMessageThreadsConnection");
//                         b.setLinkedRecord(d, "message_threads")
//                     }
//                     d.setValue(0, "unseen_count")
//                 })
//             }, [o]);
//         f = f === 0 ? h._("__JHASH__lpjUQ8yq6fh__JHASH__") : h._("__JHASH__ScBkJbM4noF__JHASH__", [h._param("badge count", f)]);
//         return j.jsx(c("CometProfilePlusAPPageInboxMessageButtonImpl.react"), {
//             deferredBadgeCount: b ? n : null,
//             label: f,
//             linkProps: {
//                 target: "_blank",
//                 url: a
//             },
//             onPress: b ? p : void 0,
//             setBadgeCount: e
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);




import React, { useCallback, useRef, useState } from 'react';
import { useRelayEnvironment } from 'react-relay';

import fbt from 'fbt';
import CometProfilePlusAPPageInboxMessageButtonImpl from './CometProfilePlusAPPageInboxMessageButtonImpl';
import { deferredLoadComponent, requireDeferredForDisplay } from 'utils';
import { gkx } from 'gkx';
import { recoverableViolation } from 'recoverableViolation';
import { XPagesManagerInboxControllerRouteBuilder } from 'XPagesManagerInboxControllerRouteBuilder';

const MWChatBadgeCount = deferredLoadComponent(
  requireDeferredForDisplay('MWChatBadgeCount.react').__setRef('CometProfilePlusAPPageInboxMessageButton.react')  
);

interface Props {
  mailboxID: string;
}

const CometProfilePlusAPPageInboxMessageButton: React.FC<Props> = ({ mailboxID }) => {

  const inboxURL = XPagesManagerInboxControllerRouteBuilder.buildURL({
    page_token: mailboxID,
    referrer: 'comet_profile_plus_ap_page_inbox_message_button' 
  });

  const isBadgeCountEnabled = gkx('2530');

  const [badgeCount, setBadgeCount] = useState(0);
  
  const badgeCountRef = useRef(null);

  const updateBadgeCount = useCallback((count) => {
    if (count !== badgeCountRef.current) {
      badgeCountRef.current = count;
    }
    setBadgeCount(count);
  }, [setBadgeCount]);

  const environment = useRelayEnvironment();

  const resetUnseenCount = useCallback(() => {
    environment.commitUpdate(() => {
        const root = environment.getRoot();
        if (!root) {
            recoverableViolation('Root must be present', 'messenger_comet');
            return; 
        }

        const viewer = root.getLinkedRecord('viewer');
        if (!viewer) {
          recoverableViolation('Viewer not found', 'messenger_comet');
          return;
        }

        let threads = viewer.getLinkedRecord('message_threads');
        if (!threads) {
          const recordID = 'client:root:viewer:message_threads';
          threads = environment.create(recordID, 'ViewerMessageThreadsConnection');
          viewer.setLinkedRecord(threads, 'message_threads');
        }
  
        threads.setValue(0, 'unseen_count');
    });
  }, [environment]);

  let label = badgeCount === 0 
  ? '__JHASH__lpjUQ8yq6fh__JHASH__'
  : fbt.__('badge count', badgeCount);

  return (
    <CometProfilePlusAPPageInboxMessageButtonImpl  
      deferredBadgeCount={isBadgeCountEnabled ? MWChatBadgeCount : null}
      label={label} 
      linkProps={{  
        target: '_blank',
        url: inboxURL
      }}
      onPress={isBadgeCountEnabled ? resetUnseenCount : undefined}
      setBadgeCount={updateBadgeCount} 
    />
  );
}

export default CometProfilePlusAPPageInboxMessageButton;
