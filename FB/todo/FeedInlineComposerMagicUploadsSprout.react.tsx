__d("FeedInlineComposerMagicUploadsSprout.react", ["CometFeedInlineComposerSprout.react", "FeedInlineComposerMagicUploadsSprout_sprout.graphql", "RelayHooks", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    function a(a) {
        var e = a.onHoverIn
          , f = a.onHoverOut
          , g = a.onPressIn
          , i = a.showComposerDialog
          , k = a.sprout;
        a = a.triggerRef;
        k = d("RelayHooks").useFragment(h !== void 0 ? h : h = b("FeedInlineComposerMagicUploadsSprout_sprout.graphql"), k);
        var l = function() {
            i({
                additionalMediaAttachmentItems: []
            })
        };
        return j.jsx(c("CometFeedInlineComposerSprout.react"), {
            onHoverIn: e,
            onHoverOut: f,
            onPress: l,
            onPressIn: g,
            sprout: k,
            triggerRef: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React, { FC } from 'react';
import { useFragment } from 'RelayHooks';
import CometFeedInlineComposerSprout from 'CometFeedInlineComposerSprout.react';
import FeedInlineComposerMagicUploadsSprout_sproutGraphQL from 'FeedInlineComposerMagicUploadsSprout_sprout.graphql';

interface Props {
    onHoverIn?: () => void;
    onHoverOut?: () => void;
    onPressIn?: () => void;
    showComposerDialog: (args: { additionalMediaAttachmentItems: any[] }) => void; // Refine the type if needed
    sprout: any; // Define a more specific type if you have one
    triggerRef: any; // Define a more specific type if you have one
}

const FeedInlineComposerMagicUploadsSprout: FC<Props> = ({
    onHoverIn,
    onHoverOut,
    onPressIn,
    showComposerDialog,
    sprout,
    triggerRef
}) => {
    const sproutFragment = useFragment(
        FeedInlineComposerMagicUploadsSprout_sproutGraphQL,
        sprout
    );

    const handlePress = () => {
        showComposerDialog({
            additionalMediaAttachmentItems: []
        });
    };

    return (
        <CometFeedInlineComposerSprout
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            onPress={handlePress}
            onPressIn={onPressIn}
            sprout={sproutFragment}
            triggerRef={triggerRef}
        />
    );
}

export default FeedInlineComposerMagicUploadsSprout;
