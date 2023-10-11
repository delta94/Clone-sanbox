__d("InlineComposerLiveProducerSprout.react", ["CometFeedInlineComposerSprout.react", "InlineComposerLiveProducerSprout_sprout.graphql", "RelayHooks", "XCometLiveProducerControllerRouteBuilder", "react", "useCometRouterDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react")), k = i.useCallback;
    function a(a) {
        var e = a.sprout;
        a = a.triggerRef;
        e = d("RelayHooks").useFragment(h !== void 0 ? h : h = b("InlineComposerLiveProducerSprout_sprout.graphql"), e);
        var f = c("useCometRouterDispatcher")()
          , g = k(function() {
            if (f != null) {
                var a = c("XCometLiveProducerControllerRouteBuilder").buildURL({
                    entry_point: "inline_profile_sprouts",
                    source: "CAMERA"
                });
                f.go(a, {})
            }
        }, [f]);
        return j.jsx(c("CometFeedInlineComposerSprout.react"), {
            onPress: g,
            sprout: e,
            testid: void 0,
            triggerRef: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { useCallback } from 'react';
import { useFragment } from 'RelayHooks';
import { buildURL as buildLiveProducerURL } from 'XCometLiveProducerControllerRouteBuilder';
import CometFeedInlineComposerSprout from 'CometFeedInlineComposerSprout.react';
import { useCometRouterDispatcher } from 'useCometRouterDispatcher';

const InlineComposerLiveProducerSprout = ({ sprout, triggerRef }) => {
    const sproutFragment = useFragment(
        InlineComposerLiveProducerSprout_sproutGraphQL,
        sprout
    );

    const routerDispatcher = useCometRouterDispatcher();

    const handlePress = useCallback(() => {
        if (routerDispatcher) {
            const url = buildLiveProducerURL({
                entry_point: 'inline_profile_sprouts',
                source: 'CAMERA'
            });
            routerDispatcher.go(url, {});
        }
    }, [routerDispatcher]);

    return (
        <CometFeedInlineComposerSprout
            onPress={handlePress}
            sprout={sproutFragment}
            testid={undefined}
            triggerRef={triggerRef}
        />
    );
}

export default InlineComposerLiveProducerSprout;
