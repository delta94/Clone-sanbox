__d("WorkGalahadUIProfilePhotoForActor.react", ["CometProfilePhoto.react", "RelayHooks", "WebPixelRatio", "WorkGalahadUIProfilePhotoForActor_actor.graphql", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");

    function a(a) {
        var e = a.actor,
            f = a.size;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["actor", "size"]);
        e = d("RelayHooks").useFragment(h !== void 0 ? h : h = b("WorkGalahadUIProfilePhotoForActor_actor.graphql"), e);
        e = (e = e.profile_picture) != null ? e : {};
        var g = e.scale;
        e = e.uri;
        if (e == null) return null;
        g = {
            height: f,
            scale: (g = g) != null ? g : d("WebPixelRatio").get(),
            uri: e,
            width: f
        };
        return j.jsx(c("CometProfilePhoto.react"), babelHelpers["extends"]({
            size: f,
            source: g
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React from "react";
import { CometProfilePhoto } from "./CometProfilePhoto"; // Assuming the correct path for CometProfilePhoto
import { useFragment } from "RelayHooks"; // Assuming the correct path for RelayHooks
import type { WorkGalahadUIProfilePhotoForActor_actor$key } from "./WorkGalahadUIProfilePhotoForActor_actor.graphql";
import { WorkGalahadUIProfilePhotoForActor_actor } from "./WorkGalahadUIProfilePhotoForActor_actor.graphql";
import WebPixelRatio from "WebPixelRatio"

interface WorkGalahadUIProfilePhotoProps {
  actor: WorkGalahadUIProfilePhotoForActor_actor$key;
  size: number;
  // Add other required props with their types
}

const WorkGalahadUIProfilePhotoForActor: React.FC<WorkGalahadUIProfilePhotoProps> = ({ actor, size, ...rest }) => {
  const actorData = useFragment<WorkGalahadUIProfilePhotoForActor_actor$key>(WorkGalahadUIProfilePhotoForActor_actor,
    actor
  );

  const { scale, uri } = actorData.profile_picture || {};

  if (!uri) {
    return null;
  }

  const source = {
    height: size,
    scale: scale || WebPixelRatio.get(),
    uri,
    width: size,
  };

  return <CometProfilePhoto size={size} source={source} {...rest} />;
};

WorkGalahadUIProfilePhotoForActor.displayName = "WorkGalahadUIProfilePhotoForActor";

export default WorkGalahadUIProfilePhotoForActor;
