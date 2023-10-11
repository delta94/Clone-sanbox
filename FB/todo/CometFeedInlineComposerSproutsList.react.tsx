__d("CometFeedInlineComposerSproutsList.react", ["CometFeedInlineComposerSproutsList_composer.graphql", "CometFeedInlineComposerSproutsList_profile.graphql", "CometInlineComposerSproutListMatcher.react", "RelayHooks", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = d("react");
    function a(a) {
        d("RelayHooks").useFragment(h !== void 0 ? h : h = b("CometFeedInlineComposerSproutsList_profile.graphql"), a.profile$key);
        var e = d("RelayHooks").useFragment(i !== void 0 ? i : i = b("CometFeedInlineComposerSproutsList_composer.graphql"), a.composer);
        e = (e = e == null ? void 0 : e.inline_sprouts) != null ? e : [];
        return j.jsx("div", {
            className: "xe4j0kc x78zum5 x1a02dak x1vqgdyp x1l1ennw x14vqqas x6ikm8r x10wlt62 x1y1aw1k xh8yej3",
            children: j.jsx(c("CometInlineComposerSproutListMatcher.react"), {
                onHoverIn: a.onHoverInPrerenderer,
                onHoverOut: a.onHoverOutPrerenderer,
                onPressIn: a.onPressInPrerenderer,
                showComposerDialog: a.showFeedComposerDialog,
                sprouts: e,
                triggerRef: a.triggerRef
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React from 'react';
import { useFragment } from 'RelayHooks'; // Replace with the actual import path
import CometInlineComposerSproutListMatcher from 'CometInlineComposerSproutListMatcher.react'; // Replace with the actual import path
import CometFeedInlineComposerSproutsList_profile from "CometFeedInlineComposerSproutsList_profile.graphql"
import CometFeedInlineComposerSproutsList_composer from "CometFeedInlineComposerSproutsList_composer.graphql"

type ComposerFragment = {
  inline_sprouts?: any[]; // Replace with the actual type for inline_sprouts
};

type ProfileFragment = {
  profile$key: any; // Replace with the actual type for profile$key
};

type Props = {
  composer: ComposerFragment;
  profile: ProfileFragment;
  onHoverInPrerenderer: () => void;
  onHoverOutPrerenderer: () => void;
  onPressInPrerenderer: () => void;
  showFeedComposerDialog: () => void;
  triggerRef: any; // Replace with the actual type for triggerRef
};

const CometFeedInlineComposerSproutsList: React.FC<Props> = (props) => {
  const { profile$key, composer } = props;
  useFragment(CometFeedInlineComposerSproutsList_profile, profile$key);
  const composerData = useFragment(CometFeedInlineComposerSproutsList_composer, composer);
  const sprouts = composerData.inline_sprouts || [];

  return (
    <div className="xe4j0kc x78zum5 x1a02dak x1vqgdyp x1l1ennw x14vqqas x6ikm8r x10wlt62 x1y1aw1k xh8yej3">
      <CometInlineComposerSproutListMatcher
        onHoverIn={props.onHoverInPrerenderer}
        onHoverOut={props.onHoverOutPrerenderer}
        onPressIn={props.onPressInPrerenderer}
        showComposerDialog={props.showFeedComposerDialog}
        sprouts={sprouts}
        triggerRef={props.triggerRef}
      />
    </div>
  );
};

CometFeedInlineComposerSproutsList.displayName =
  'CometFeedInlineComposerSproutsList';

export default CometFeedInlineComposerSproutsList;
