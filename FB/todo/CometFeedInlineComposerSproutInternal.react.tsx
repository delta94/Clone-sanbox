__d("CometFeedInlineComposerSproutInternal.react", ["CometImage.react", "CometPressable.react", "CometRefineRef", "TetraText.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"), j = {
        root: {
            alignItems: "x6s0dn4",
            borderTopStartRadius: "x1lq5wgf",
            borderTopEndRadius: "xgqcy7u",
            borderBottomEndRadius: "x30kzoy",
            borderBottomStartRadius: "x9jhf4c",
            display: "x78zum5",
            flexBasis: "x1r8uery",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            justifyContent: "xl56j7k",
            minWidth: "x1pshirs",
            paddingTop: "x1y1aw1k",
            paddingEnd: "x1sxyh0",
            paddingBottom: "xwib8y2",
            paddingStart: "xurb0ha",
            $$css: !0
        },
        sprout: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            lineHeight: "x1rfph6h",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: !0
        },
        sproutIcon: {
            display: "x3nfvp2",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            marginEnd: "x1emribx",
            $$css: !0
        }
    };
    function a(a) {
        var b = a.disabled
          , d = a.icon
          , e = a.label
          , f = a.onHoverIn
          , g = a.onHoverOut
          , h = a.onPress
          , k = a.onPressIn
          , l = a.testid;
        l = a.triggerRef;
        return i.jsx(c("CometPressable.react"), {
            disabled: b,
            display: "block",
            onHoverIn: f,
            onHoverOut: g,
            onPress: h,
            onPressIn: k,
            ref: c("CometRefineRef")(l),
            testid: void 0,
            xstyle: j.root,
            children: i.jsxs("div", {
                className: "x6s0dn4 x78zum5 xl56j7k x1rfph6h x6ikm8r x10wlt62",
                children: [i.jsx("span", {
                    className: "x3nfvp2 x1c4vz4f x2lah0s x1emribx",
                    children: i.jsx(c("CometImage.react"), {
                        height: 24,
                        src: d,
                        width: 24
                    })
                }), i.jsx(c("TetraText.react"), {
                    color: "secondary",
                    numberOfLines: 1,
                    type: "bodyLink3",
                    children: e
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { FC, Ref } from 'react';
import CometImage from 'CometImage.react';
import CometPressable from 'CometPressable.react';
import CometRefineRef from 'CometRefineRef';
import TetraText from 'TetraText.react';

interface Props {
    disabled?: boolean;
    icon: string;
    label: string;
    onHoverIn?: () => void;
    onHoverOut?: () => void;
    onPress: () => void;
    onPressIn?: () => void;
    testid?: string;
    triggerRef: Ref<any>;  // Specify a better type if you have one
}

const styles = {
    root: {
        alignItems: "x6s0dn4",
        borderTopStartRadius: "x1lq5wgf",
        borderTopEndRadius: "xgqcy7u",
        borderBottomEndRadius: "x30kzoy",
        borderBottomStartRadius: "x9jhf4c",
        display: "x78zum5",
        flexBasis: "x1r8uery",
        flexGrow: "x1iyjqo2",
        flexShrink: "xs83m0k",
        justifyContent: "xl56j7k",
        minWidth: "x1pshirs",
        paddingTop: "x1y1aw1k",
        paddingEnd: "x1sxyh0",
        paddingBottom: "xwib8y2",
        paddingStart: "xurb0ha",
        $$css: true
    },
    sprout: {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        lineHeight: "x1rfph6h",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: true
    },
    sproutIcon: {
        display: "x3nfvp2",
        flexGrow: "x1c4vz4f",
        flexShrink: "x2lah0s",
        marginEnd: "x1emribx",
        $$css: true
    }
};

const CometFeedInlineComposerSproutInternal: FC<Props> = ({
    disabled = false,
    icon,
    label,
    onHoverIn,
    onHoverOut,
    onPress,
    onPressIn,
    testid,
    triggerRef
}) => {
    return (
        <CometPressable
            disabled={disabled}
            display="block"
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            onPress={onPress}
            onPressIn={onPressIn}
            ref={CometRefineRef(triggerRef)}
            testid={testid}
            xstyle={styles.root}
        >
            <div className={styles.sprout}>
                <span className={styles.sproutIcon}>
                    <CometImage
                        height={24}
                        src={icon}
                        width={24}
                    />
                </span>
                <TetraText
                    color="secondary"
                    numberOfLines={1}
                    type="bodyLink3"
                >
                    {label}
                </TetraText>
            </div>
        </CometPressable>
    );
}

export default CometFeedInlineComposerSproutInternal;
