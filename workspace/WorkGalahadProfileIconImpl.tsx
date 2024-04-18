__d("WorkGalahadProfileIconImpl.react", ["RelayHooks", "WebPixelRatio", "WorkGalahadProfileIconImplQuery.graphql", "WorkGalahadUIProfilePhotoForUser.react", "react", "recoverableViolation", "useWorkUserStatus"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");

    function a(a) {
        var e, f, g = a.size;
        a = a.disableAltText;
        a = a === void 0 ? !1 : a;
        var i = d("RelayHooks").useLazyLoadQuery(h !== void 0 ? h : h = b("WorkGalahadProfileIconImplQuery.graphql"), {
            scale: d("WebPixelRatio").get()
        });
        e = c("useWorkUserStatus")(i == null ? void 0 : (e = i.viewer) == null ? void 0 : (e = e.actor) == null ? void 0 : e.id);
        if ((i == null ? void 0 : (f = i.viewer) == null ? void 0 : f.actor) == null) {
            c("recoverableViolation")("current actor returned null", "work_comet_core");
            return null
        }
        return j.jsx(c("WorkGalahadUIProfilePhotoForUser.react"), {
            size: g,
            user: i.viewer.actor,
            badgeData: e,
            disableAltText: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);



import * as React from 'react';
import { useLazyLoadQuery } from 'relay-hooks';
import WorkGalahadProfileIconImplQuery from './WorkGalahadProfileIconImplQuery.graphql';
import { useWorkUserStatus } from 'useWorkUserStatus'; 
import { recoverableViolation } from 'recoverableViolation';
import { WebPixelRatio } from 'WebPixelRatio';
import WorkGalahadUIProfilePhotoForUser from './WorkGalahadProfileIconImpl';

interface Props {
  size: number;
  disableAltText?: boolean; 
}

const WorkGalahadProfileIconImpl: React.FC<Props> = ({ 
  size,
  disableAltText = false  
}) => {

  const data = useLazyLoadQuery<WorkGalahadProfileIconImplQuery>(
    WorkGalahadProfileIconImplQuery,
    { scale: WebPixelRatio.get() },
  );

  const badgeData = useWorkUserStatus(data?.viewer.actor.id);

  if (!data?.viewer.actor) {
    recoverableViolation(
      'current actor returned null', 
      'work_comet_core'
    );
    return null;
  }

  return (
    <WorkGalahadUIProfilePhotoForUser
      size={size}
      user={data.viewer.actor}
      badgeData={badgeData}
      disableAltText={disableAltText} 
    />
  );
};

export default WorkGalahadProfileIconImpl;