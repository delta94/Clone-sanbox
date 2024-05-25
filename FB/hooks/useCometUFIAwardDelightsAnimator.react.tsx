__d("useCometUFIAwardDelightsAnimator", ["CometPlaceholder.react", "CometRelay", "CometTextDelightAnimation.entrypoint", "CometUFIAwardAsCommentSheetContents.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useMemo
      , k = b.useRef
      , l = b.useState
      , m = {
        animationContainer: {
            paddingTop: "x1ay6j6u",
            paddingEnd: "x1doxw15",
            paddingBottom: "xy64zza",
            paddingStart: "x8n26zg",
            $$css: !0
        }
    };
    function a() {
        var a = d("CometRelay").useRelayEnvironment()
          , b = j(function() {
            return {
                getEnvironment: function() {
                    return a
                }
            }
        }, [a]);
        b = d("CometRelay").useEntryPointLoader(b, c("CometTextDelightAnimation.entrypoint"));
        var e = b[0]
          , f = b[1];
        b = l(!1);
        var g = b[0]
          , h = b[1]
          , n = k(!1);
        function o() {
            h(!1),
            n.current = !0
        }
        function p(a) {
            if (g)
                return;
            f({
                id: a !== "" ? a : d("CometUFIAwardAsCommentSheetContents.react").DEFAULT_AWARD_ANIMATION_ID
            });
            h(!0)
        }
        b = 2 / 3;
        var q = m.animationContainer;
        e = i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: g && e != null && i.jsx(d("CometRelay").EntryPointContainer, {
                entryPointReference: e,
                props: {
                    heightScale: b,
                    onRepeatEnd: o,
                    xstyle: q
                }
            })
        });
        return {
            animationComponent: e,
            hasPlayedAnimationRef: n,
            playAnimation: p
        }
    }
    g["default"] = a
}
), 98);


import React, { useMemo, useRef, useState, ReactNode } from 'react';
import { useRelayEnvironment, EntryPointContainer, useEntryPointLoader } from 'CometRelay';  // Importing these assuming they are part of 'CometRelay'
import { DEFAULT_AWARD_ANIMATION_ID } from 'CometUFIAwardAsCommentSheetContents.react';  // Assuming you have named exports in this module
import CometPlaceholder from 'CometPlaceholder.react';

interface EntryPointProps {
    heightScale: number;
    onRepeatEnd: () => void;
    xstyle: any;  // Use a specific type instead of 'any' if available.
}

interface UseCometUFIAwardDelightsAnimatorReturn {
    animationComponent: ReactNode;
    hasPlayedAnimationRef: React.MutableRefObject<boolean>;
    playAnimation: (a: string) => void;
}

const animationContainerStyles = {
    paddingTop: "x1ay6j6u",
    paddingEnd: "x1doxw15",
    paddingBottom: "xy64zza",
    paddingStart: "x8n26zg",
    $$css: true
};

function useCometUFIAwardDelightsAnimator(): UseCometUFIAwardDelightsAnimatorReturn {
    const relayEnvironment = useRelayEnvironment();
    const entryPointOptions = useMemo(() => ({
        getEnvironment: () => relayEnvironment
    }), [relayEnvironment]);

    const [entryPointReference, loadEntryPoint] = useEntryPointLoader(entryPointOptions, 'CometTextDelightAnimation.entrypoint');
    const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
    const hasPlayedAnimationRef = useRef(false);

    const stopAnimation = () => {
        setHasPlayedAnimation(false);
        hasPlayedAnimationRef.current = true;
    }

    const playAnimation = (id: string) => {
        if (hasPlayedAnimation) return;

        loadEntryPoint({
            id: id !== "" ? id : DEFAULT_AWARD_ANIMATION_ID
        });
        setHasPlayedAnimation(true);
    }

    const heightScale = 2 / 3;

    const animationComponent = (
        <CometPlaceholder fallback={null}>
            {hasPlayedAnimation && entryPointReference && (
                <EntryPointContainer
                    entryPointReference={entryPointReference}
                    props={{
                        heightScale: heightScale,
                        onRepeatEnd: stopAnimation,
                        xstyle: animationContainerStyles
                    }}
                />
            )}
        </CometPlaceholder>
    );

    return {
        animationComponent,
        hasPlayedAnimationRef,
        playAnimation
    };
}

export default useCometUFIAwardDelightsAnimator;
