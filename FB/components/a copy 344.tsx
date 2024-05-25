__d(
  "MWV2AttachmentProgressBar.react",
  [
    "MWV2ComposerMediaProgressBar.react",
    "ReQL",
    "ReQLSuspense",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react");
    function a(a) {
      var b = a.attachment.offlineAttachmentId,
        e = (h || (h = c("useReStore")))();
      a = d("ReQLSuspense").useFirst(
        function () {
          return b != null
            ? d("ReQL")
                .fromTableAscending(e.tables.media_staging)
                .getKeyRange(b)
            : d("ReQL").empty();
        },
        [b],
        f.id + ":24"
      );
      return a != null && a.isSent
        ? j.jsx(c("MWV2ComposerMediaProgressBar.react"), {
            height: 5,
            mediaStaging: a,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import MWV2ComposerMediaProgressBar from "MWV2ComposerMediaProgressBar.react";
import { ReQL, fromTableAscending, empty } from "ReQL";
import { useFirst } from "ReQLSuspense";
import React, { FC } from "react";
import { useReStore } from "useReStore";

interface Attachment {
  offlineAttachmentId: string | null;
}

interface MediaStaging {
  isSent: boolean;
}

const MWV2AttachmentProgressBar: FC<{ attachment: Attachment }> = ({
  attachment,
}) => {
  const { offlineAttachmentId } = attachment;
  const reStore = useReStore();

  const mediaStaging = useFirst(
    () =>
      offlineAttachmentId != null
        ? fromTableAscending(reStore.tables.media_staging).getKeyRange(
            offlineAttachmentId
          )
        : empty(),
    [offlineAttachmentId],
    `${MWV2AttachmentProgressBar.displayName}:24`
  );

  return mediaStaging != null && mediaStaging.isSent ? (
    <MWV2ComposerMediaProgressBar height={5} mediaStaging={mediaStaging} />
  ) : null;
};

MWV2AttachmentProgressBar.displayName = `${MWV2AttachmentProgressBar.name} [from MWV2AttachmentProgressBar]`;

export default MWV2AttachmentProgressBar;
