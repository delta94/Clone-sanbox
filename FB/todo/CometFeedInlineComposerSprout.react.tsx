__d("CometFeedInlineComposerSprout.react", ["CometFeedInlineComposerSproutInternal.react", "CometFeedInlineComposerSprout_sprout.graphql", "CometRelay", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    function a(a) {
        var e = a.sprout;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["sprout"]);
        e = d("CometRelay").useFragment(h !== void 0 ? h : h = b("CometFeedInlineComposerSprout_sprout.graphql"), e);
        a = babelHelpers["extends"]({}, a, {
            icon: e.icon.uri,
            label: e.inline_label
        });
        return j.jsx(c("CometFeedInlineComposerSproutInternal.react"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react';
import { useFragment } from 'CometRelay';
import CometFeedInlineComposerSproutInternal from 'CometFeedInlineComposerSproutInternal.react';
import CometFeedInlineComposerSprout_sproutGraphQL from 'CometFeedInlineComposerSprout_sprout.graphql';

interface Props {
    sprout: any; // Define a better type for this if you have one.
    [key: string]: any; // To capture the rest of the properties.
}

const CometFeedInlineComposerSprout: React.FC<Props> = (props) => {
    const { sprout, ...otherProps } = props;
    const sproutFragment = useFragment(
        CometFeedInlineComposerSprout_sproutGraphQL,
        sprout
    );

    const combinedProps = {
        ...otherProps,
        icon: sproutFragment.icon.uri,
        label: sproutFragment.inline_label
    };

    return <CometFeedInlineComposerSproutInternal {...combinedProps} />;
}

export default CometFeedInlineComposerSprout;
