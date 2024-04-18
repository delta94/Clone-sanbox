__d("WorkGalahadUIAppNavButton.react", ["ChannelGeminiNavFocusableGroup.react", "CometPlaceholder.react", "CometPressable.react", "CometTooltip.react", "CometVisualCompletionAttributes", "ErrorBoundary.react", "WorkGalahadUIBaseAppTabBadge.react", "cr:1829651", "react", "stylex", "workplace2DSThemeConditionallyApply"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    e = {
        container: {
            width: "xh8yej3",
            $$css: !0
        },
        link: {
            borderTopStartRadius: "x1lq5wgf",
            borderTopEndRadius: "xgqcy7u",
            borderBottomEndRadius: "x30kzoy",
            borderBottomStartRadius: "x9jhf4c",
            boxSizing: "x9f619",
            display: "x78zum5",
            height: "xng8ra",
            paddingBottom: "xwib8y2",
            paddingEnd: "x150jy0e",
            paddingLeft: null,
            paddingRight: null,
            paddingStart: "x1e558r4",
            paddingTop: "x1y1aw1k",
            width: "xh8yej3",
            $$css: !0
        },
        tooltipContainer: {
            width: "xh8yej3",
            $$css: !0
        },
        linkLight: {
            color: "xi81zsa",
            $$css: !0
        },
        linkHoveredLight: {
            backgroundColor: "x1wpzbip",
            $$css: !0
        },
        linkSelectedNoLabel: {
            backgroundColor: "x1hr4nm9",
            $$css: !0
        },
        content: {
            borderTopStyle: "x13fuv20",
            borderStartStyle: "x26u7qi",
            borderEndStyle: "xu3j5b3",
            borderBottomStyle: "x1q0q8m5",
            borderTopWidth: "x972fbf",
            borderStartWidth: "xm0m39n",
            borderEndWidth: "xcfux6l",
            borderBottomWidth: "x1qhh985",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            marginTop: "xdj266r",
            marginEnd: "x11i5rnm",
            marginLeft: null,
            marginRight: null,
            marginBottom: "xat24cr",
            marginStart: "x1mh8g0r",
            minHeight: "x2lwn1j",
            minWidth: "xeuugli",
            paddingTop: "xexx8yu",
            paddingEnd: "x4uap5",
            paddingLeft: null,
            paddingRight: null,
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            flexGrow: "x1iyjqo2",
            flexShrink: "x2lah0s",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            wordBreak: "xdnwjd9",
            $$css: !0
        },
        addOn: {
            height: "xt7dq6l",
            position: "x1n2onr6",
            $$css: !0
        },
        largeAddOn: {
            height: "x1vqgdyp",
            $$css: !0
        }
    };
    var k = {
            link: {
                borderTopStartRadius: "xdxvlk3",
                borderTopEndRadius: "x1fglp",
                borderBottomEndRadius: "x1rp6h8o",
                borderBottomStartRadius: "xg6i1s1",
                width: "x1247r65",
                marginStart: "x1gryazu",
                marginLeft: null,
                marginRight: null,
                marginEnd: "xkrivgy",
                $$css: !0
            },
            linkLight: {
                color: "xcmpq1v",
                $$css: !0
            },
            linkHoveredLight: {
                backgroundColor: "x1wpzbip",
                $$css: !0
            },
            largeAddOn: {
                height: "x10wjd1d",
                $$css: !0
            }
        },
        l = c("workplace2DSThemeConditionallyApply")(e, k);

    function a(a, e) {
        var f = a.label,
            g = a.ariaLabel,
            i = a.selected,
            k = i === void 0 ? !1 : i;
        i = a.useGreyBadging;
        var m = i === void 0 ? !1 : i;
        i = a.badgeCount;
        var n = i === void 0 ? 0 : i,
            o = a.BadgeRenderer;
        i = a.href;
        var p = a.onPress,
            q = a.elementId,
            r = a.linkDataFT,
            s = a.largeAddOn,
            t = s === void 0 ? !1 : s;
        s = a.preventLocalNavigation;
        s = s === void 0 ? !0 : s;
        var u = a.addOn,
            v = a.onPressIn,
            w = a.onHoverIn,
            x = a.onHoverOut,
            y = a["data-testid"];
        y = a.target;
        a = a.tooltipHidden;
        a = a === void 0 ? !1 : a;
        var z = k ? {
                role: "link",
                "aria-current": "page"
            } : {
                role: "link"
            },
            A = l.linkHoveredLight,
            B = l.linkSelectedNoLabel,
            C = B;
        B = j.jsx(b("cr:1829651"), {
            name: "nav-button." + q,
            children: j.jsx(d("ChannelGeminiNavFocusableGroup.react").WorkGalahadNavFocusableItem, {
                children: j.jsx("div", babelHelpers["extends"]({
                    "data-ft": r,
                    "data-testid": void 0
                }, (h || (h = c("stylex"))).spread(l.container), {
                    children: j.jsx(c("CometPressable.react"), babelHelpers["extends"]({}, z, {
                        ref: e,
                        id: q,
                        "aria-label": g != null ? g : f,
                        onPress: p,
                        linkProps: i != null ? {
                            url: i,
                            preventLocalNavigation: s,
                            target: y
                        } : void 0,
                        xstyle: function (a) {
                            a = a.hovered;
                            return [l.link, l.linkLight, a && A, k && C]
                        },
                        onPressIn: v,
                        onHoverIn: w,
                        onHoverOut: x,
                        children: function (a) {
                            var b = a.hovered;
                            a = a.overlay;
                            return j.jsxs(j.Fragment, {
                                children: [j.jsx("div", babelHelpers["extends"]({
                                    className: (h || (h = c("stylex")))(l.content)
                                }, c("CometVisualCompletionAttributes").IGNORE_DYNAMIC, {
                                    children: j.jsxs("div", {
                                        className: h(l.addOn, t && l.largeAddOn),
                                        children: [u, o ? j.jsx(c("ErrorBoundary.react"), {
                                            fallback: function () {
                                                return null
                                            },
                                            children: j.jsx(c("CometPlaceholder.react"), {
                                                fallback: null,
                                                children: j.jsx(o, {
                                                    hovered: b,
                                                    selected: k,
                                                    useGreyBadging: m
                                                })
                                            })
                                        }) : j.jsx(c("WorkGalahadUIBaseAppTabBadge.react"), {
                                            count: n,
                                            hovered: b,
                                            selected: k,
                                            useGreyBadging: m
                                        })]
                                    })
                                })), a]
                            })
                        }
                    }))
                }))
            })
        });
        return j.jsx("span", {
            className: h(l.tooltipContainer),
            children: a ? B : j.jsx(c("CometTooltip.react"), {
                position: "end",
                tooltip: f,
                delayMs: 0,
                children: B
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    k = j.memo(e);
    g["default"] = k
}), 98);

import React, { ForwardRefRenderFunction, memo } from 'react';
import { ChannelGeminiNavFocusableGroup } from 'ChannelGeminiNavFocusableGroup.react';
import { CometPlaceholder } from 'CometPlaceholder.react';
import { CometPressable } from 'CometPressable.react';
import { CometTooltip } from 'CometTooltip.react';
import { CometVisualCompletionAttributes } from 'CometVisualCompletionAttributes';
import { ErrorBoundary } from 'ErrorBoundary.react';
import { WorkGalahadUIBaseAppTabBadge } from 'WorkGalahadUIBaseAppTabBadge.react';
import { stylex, css } from 'stylex';
import { work2DSTheme } from 'workplace2DSTheme';
import { work2DSThemeConditionallyApply } from 'workplace2DSThemeConditionallyApply';
import { VoyageUserJourneyUILayerContext } from 'VoyageUserJourneyUILayerContext';

const baseStyles = {
    container: {
        width: "xh8yej3",
        $$css: !0
    },
    link: {
        borderTopStartRadius: "x1lq5wgf",
        borderTopEndRadius: "xgqcy7u",
        borderBottomEndRadius: "x30kzoy",
        borderBottomStartRadius: "x9jhf4c",
        boxSizing: "x9f619",
        display: "x78zum5",
        height: "xng8ra",
        paddingBottom: "xwib8y2",
        paddingEnd: "x150jy0e",
        paddingLeft: null,
        paddingRight: null,
        paddingStart: "x1e558r4",
        paddingTop: "x1y1aw1k",
        width: "xh8yej3",
        $$css: !0
    },
    tooltipContainer: {
        width: "xh8yej3",
        $$css: !0
    },
    linkLight: {
        color: "xi81zsa",
        $$css: !0
    },
    linkHoveredLight: {
        backgroundColor: "x1wpzbip",
        $$css: !0
    },
    linkSelectedNoLabel: {
        backgroundColor: "x1hr4nm9",
        $$css: !0
    },
    content: {
        borderTopStyle: "x13fuv20",
        borderStartStyle: "x26u7qi",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderTopWidth: "x972fbf",
        borderStartWidth: "xm0m39n",
        borderEndWidth: "xcfux6l",
        borderBottomWidth: "x1qhh985",
        boxSizing: "x9f619",
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginLeft: null,
        marginRight: null,
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        minHeight: "x2lwn1j",
        minWidth: "xeuugli",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingLeft: null,
        paddingRight: null,
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        position: "x1n2onr6",
        zIndex: "x1ja2u2z",
        flexGrow: "x1iyjqo2",
        flexShrink: "x2lah0s",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        width: "xh8yej3",
        wordBreak: "xdnwjd9",
        $$css: !0
    },
    addOn: {
        height: "xt7dq6l",
        position: "x1n2onr6",
        $$css: !0
    },
    largeAddOn: {
        height: "x1vqgdyp",
        $$css: !0
    }
};

const condensedStyles = {
    link: {
        borderTopStartRadius: "xdxvlk3",
        borderTopEndRadius: "x1fglp",
        borderBottomEndRadius: "x1rp6h8o",
        borderBottomStartRadius: "xg6i1s1",
        width: "x1247r65",
        marginStart: "x1gryazu",
        marginLeft: null,
        marginRight: null,
        marginEnd: "xkrivgy",
        $$css: !0
    },
    linkLight: {
        color: "xcmpq1v",
        $$css: !0
    },
    linkHoveredLight: {
        backgroundColor: "x1wpzbip",
        $$css: !0
    },
    largeAddOn: {
        height: "x10wjd1d",
        $$css: !0
    }
};

const styles = work2DSThemeConditionallyApply(baseStyles, condensedStyles);

export interface WorkGalahadUIAppNavButtonProps {
  label?: string;
  ariaLabel?: string;
  selected?: boolean;
  useGreyBadging?: boolean;
  badgeCount?: number;
  BadgeRenderer?: React.ComponentType;
  href?: string;
  onPress?: () => void;
  elementId: string;
  linkDataFT?: object;
  largeAddOn?: boolean;
  preventLocalNavigation?: boolean;
  addOn?: React.ReactNode;
  onPressIn?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  'data-testid'?: string;
  target?: string;
  tooltipHidden?: boolean;
}

export const WorkGalahadUIAppNavButton = React.forwardRef<
  HTMLDivElement,
  WorkGalahadUIAppNavButtonProps
>(
  (
    {
      label,
      ariaLabel,
      selected = false,
      useGreyBadging = false,
      badgeCount = 0,
      BadgeRenderer,
      href,
      onPress,
      elementId, 
      linkDataFT,
      largeAddOn = false,
      preventLocalNavigation = true,
      addOn,
      onPressIn,
      onHoverIn,
      onHoverOut,
      'data-testid': testId,
      target,
      tooltipHidden = false,
    },
    ref
  ) => {
    const linkProps = href
      ? {
          url: href,
          preventLocalNavigation,
          target,
        }
      : undefined;

    const ariaProps = selected
      ? {
          role: 'link',
          'aria-current': 'page',
        }
      : { role: 'link' };

    const { linkSelectedNoLabel, linkHoveredLight } = styles;
    let tooltip = (
        <VoyageUserJourneyUILayerContext name={`nav-button.${elementId}`}>
            <ChannelGeminiNavFocusableGroup.WorkGalahadNavFocusableItem>           
                <div
                    data-ft={linkDataFT}
                    data-testid={testId}
                    className={css(styles.container)}
                >
                    <CometPressable
                        {...ariaProps}
                        ref={ref}
                        id={elementId}
                        aria-label={ariaLabel ?? label}
                        onPress={onPress}
                        linkProps={linkProps}
                        xstyle={({ hovered }) => [
                            styles.link,
                            styles.linkLight,
                            hovered && linkHoveredLight,
                            selected && linkSelectedNoLabel,
                        ]}
                        onPressIn={onPressIn}
                        onHoverIn={onHoverIn}
                        onHoverOut={onHoverOut}
                    >
                        {({ hovered, overlay }) => (
                        <>
                            <div
                                className={stylex(
                                styles.content,
                                CometVisualCompletionAttributes.IGNORE_DYNAMIC
                            )}
                            >
                                <div
                                    className={stylex(
                                    styles.addOn,
                                    largeAddOn && styles.largeAddOn
                                    )}
                                >
                                    {addOn}
                                    {BadgeRenderer ? (
                                        <ErrorBoundary fallback={() => null}>
                                            <CometPlaceholder fallback={null}>
                                                <BadgeRenderer
                                                    hovered={hovered}
                                                    selected={selected}
                                                    useGreyBadging={useGreyBadging}
                                                />
                                            </CometPlaceholder>
                                        </ErrorBoundary>
                                    ) : (
                                        <WorkGalahadUIBaseAppTabBadge
                                            count={badgeCount}
                                            hovered={hovered}
                                            selected={selected}
                                            useGreyBadging={useGreyBadging}
                                        />
                                    )}              
                                </div>
                            </div>
                            {overlay}
                        </>
                        )}
                    </CometPressable>
                </div>
            </ChannelGeminiNavFocusableGroup.WorkGalahadNavFocusableItem>
        </VoyageUserJourneyUILayerContext>
    );

    return (
      <span className={css(styles.tooltipContainer)}>
        {tooltipHidden ? (
          tooltip
        ) : (
          <CometTooltip position="end" tooltip={label} delayMs={0}>
            {tooltip}
          </CometTooltip>
        )}
      </span>
    );
  }
);

WorkGalahadUIAppNavButton.displayName = 
  `WorkGalahadUIAppNavButton [from ${__filename}]`;

export default memo(WorkGalahadUIAppNavButton);