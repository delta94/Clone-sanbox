__d(
  "MWV2ChatContainer.react",
  [
    "CometDOMOnlyBoundary.react",
    "MWChatEncryptedBackupsHandleRestoreWrapperDeferred.react",
    "MWV2ChatTabsRoot.react",
    "cr:28",
    "cr:8408",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = (e = b("cr:28")) != null ? e : i.Fragment;

    function a() {
      var a = i.jsxs(i.Fragment, {
        children: [
          i.jsx(j, {
            children: i.jsx(c("MWV2ChatTabsRoot.react"), {}),
          }),
          i.jsx(c("CometDOMOnlyBoundary.react"), {
            children: i.jsx(
              c("MWChatEncryptedBackupsHandleRestoreWrapperDeferred.react"),
              {}
            ),
          }),
        ],
      });
      return b("cr:8408") == null
        ? a
        : i.jsx(b("cr:8408"), {
            id: "chat_tabs",
            children: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import { CometDOMOnlyBoundary } from "CometDOMOnlyBoundary.react";
import { MWChatEncryptedBackupsHandleRestoreWrapperDeferred } from "MWChatEncryptedBackupsHandleRestoreWrapperDeferred.react";
import { MWV2ChatTabsRoot } from "MWV2ChatTabsRoot.react";

interface MWV2ChatContainerProps {}

const MWV2ChatContainer: React.FC<MWV2ChatContainerProps> = () => {
  const ChatTabsComponent = <MWV2ChatTabsRoot />;
  const EncryptedBackupsComponent = (
    <CometDOMOnlyBoundary>
      <MWChatEncryptedBackupsHandleRestoreWrapperDeferred />
    </CometDOMOnlyBoundary>
  );

  const renderedComponent = (
    <>
      {ChatTabsComponent}
      {EncryptedBackupsComponent}
    </>
  );

  return renderedComponent;
};

MWV2ChatContainer.displayName = `${MWV2ChatContainer.name} [from ${f.id}]`;

export default MWV2ChatContainer;
