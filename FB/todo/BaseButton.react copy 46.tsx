__d("BaseToast.react", ["BaseInlinePressable.react", "BaseTheme.react", "BaseView.react", "FocusRegion.react", "focusScopeQueries", "react", "useCurrentDisplayMode"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useId,
        k = b.useMemo,
        l = {
            dark: "__fb-dark-mode ",
            light: "__fb-light-mode ",
            type: "CLASSNAMES"
        },
        m = {
            item: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                paddingBottom: "x19yoh24",
                paddingEnd: "xpowjs8",
                paddingLeft: null,
                paddingRight: null,
                paddingStart: "xrxijuk",
                paddingTop: "x6enp1t",
                $$css: !0
            },
            itemText: {
                flexGrow: "x1iyjqo2",
                $$css: !0
            },
            link: {
                wordBreak: "xdnwjd9",
                $$css: !0
            },
            root: {
                alignItems: "x6s0dn4",
                backgroundColor: "x1wkzo03",
                borderTopStartRadius: "x1192kqh",
                borderTopEndRadius: "xjfsc2c",
                borderBottomEndRadius: "xg8fqjl",
                borderBottomStartRadius: "x1kdh5me",
                boxShadow: "xi1c1fh",
                display: "x78zum5",
                flexShrink: "x2lah0s",
                maxWidth: "x1cs6qxi",
                minWidth: "x1hqenl9",
                paddingStart: "xuv3zuj",
                paddingLeft: null,
                paddingRight: null,
                paddingEnd: "xd3owfx",
                paddingTop: "x192rfv7",
                paddingBottom: "x13jxccy",
                $$css: !0
            },
            rootFullWidth: {
                width: "xh8yej3",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.action,
            e = a.addOnStart,
            f = a.closeButton,
            g = a.linkWrapper,
            h = a.message,
            n = a.onDismiss,
            o = a.size;
        o = o === void 0 ? "full-width" : o;
        var p = a.testid;
        p = a.toastRef;
        a = a.useInvertedDisplayMode;
        a = a === void 0 ? !0 : a;
        var q = c("useCurrentDisplayMode")();
        q = q === "dark" ? "light" : "dark";
        var r = j(),
            s = k(function () {
                if (b != null) return {};
                else return {
                    "aria-atomic": !0,
                    role: "alert"
                }
            }, [b]);
        e = i.jsxs(i.Fragment, {
            children: [e != null && i.jsx(c("BaseView.react"), {
                xstyle: m.item,
                children: e
            }), i.jsx(c("BaseView.react"), babelHelpers["extends"]({
                xstyle: [m.item, m.itemText]
            }, s, {
                children: h({
                    toastMessageId: r
                })
            })), b != null && i.jsx(d("FocusRegion.react").FocusRegion, {
                autoFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
                children: i.jsx(c("BaseView.react"), {
                    "aria-labelledby": r,
                    role: "group",
                    xstyle: m.item,
                    children: b.element != null ? b.element : b.labelRenderer && i.jsx(c("BaseInlinePressable.react"), {
                        onPress: function (a) {
                            n(), b.onPress(a)
                        },
                        testid: void 0,
                        xstyle: m.link,
                        children: b.labelRenderer(b.label)
                    })
                })
            }), f != null && i.jsx(c("BaseView.react"), {
                xstyle: m.item,
                children: f
            })]
        });
        e = g != null ? g(e) : e;
        return a ? i.jsx(c("BaseTheme.react"), {
            config: l,
            displayMode: q,
            ref: p,
            testid: void 0,
            xstyle: [m.root, o === "full-width" && m.rootFullWidth],
            children: e
        }) : i.jsx(c("BaseView.react"), {
            ref: p,
            testid: void 0,
            xstyle: [m.root, o === "full-width" && m.rootFullWidth],
            children: e
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


// BaseToast.tsx

import React, { ReactNode, useId, useMemo } from 'react';

import BaseInlinePressable from './BaseInlinePressable.react';
import BaseTheme from './BaseTheme.react';
import BaseView from './BaseView.react';
import FocusRegion from './FocusRegion.react';
import { tabbableScopeQuery } from './focusScopeQueries';
import useCurrentDisplayMode from './useCurrentDisplayMode';

interface BaseToastProps {
  action?: {
    element?: ReactNode;
    label: string;
    labelRenderer?: (label: string) => ReactNode; 
    onPress: () => void;
    testid?: string;
  };
  addOnStart?: ReactNode;
  closeButton?: ReactNode;
  linkWrapper?: (children: ReactNode) => ReactNode;
  message: (props: {toastMessageId: string}) => ReactNode;
  onDismiss: () => void;
  size?: 'full-width';
  testid?: string;
  toastRef?: React.RefObject<HTMLDivElement>;
  useInvertedDisplayMode?: boolean; 
}


const containerStyles = {
    item: {
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        paddingBottom: "x19yoh24",
        paddingEnd: "xpowjs8",
        paddingLeft: null,
        paddingRight: null,
        paddingStart: "xrxijuk",
        paddingTop: "x6enp1t",
        $$css: !0
    },
    itemText: {
        flexGrow: "x1iyjqo2",
        $$css: !0
    },
    link: {
        wordBreak: "xdnwjd9",
        $$css: !0
    },
    root: {
        alignItems: "x6s0dn4",
        backgroundColor: "x1wkzo03",
        borderTopStartRadius: "x1192kqh",
        borderTopEndRadius: "xjfsc2c",
        borderBottomEndRadius: "xg8fqjl",
        borderBottomStartRadius: "x1kdh5me",
        boxShadow: "xi1c1fh",
        display: "x78zum5",
        flexShrink: "x2lah0s",
        maxWidth: "x1cs6qxi",
        minWidth: "x1hqenl9",
        paddingStart: "xuv3zuj",
        paddingLeft: null,
        paddingRight: null,
        paddingEnd: "xd3owfx",
        paddingTop: "x192rfv7",
        paddingBottom: "x13jxccy",
        $$css: !0
    },
    rootFullWidth: {
        width: "xh8yej3",
        $$css: !0
    }
};

const themeConfigs = {
    dark: "__fb-dark-mode ",
    light: "__fb-light-mode ",
    type: "CLASSNAMES"
}

export default function BaseToast(props: BaseToastProps) {
  const {
    action,
    addOnStart,
    closeButton,
    linkWrapper,
    message,
    onDismiss,
    size = 'full-width',
    toastRef,
    useInvertedDisplayMode = true
  } = props;

  const displayMode = useCurrentDisplayMode();
  const invertedMode = displayMode === 'dark' ? 'light' : 'dark';

  const messageId = useId();

  const rootProps = useMemo(() => {
    if (!action) {
      return {
        'aria-atomic': true,
        role: 'alert'
      };
    }
    return {};
  }, [action]);

  const content = (
    <>
      {addOnStart && 
        <BaseView xstyle={containerStyles.item}>
            {addOnStart}
        </BaseView>
      }
      <BaseView {...rootProps} xstyle={[containerStyles.item, containerStyles.itemText]}>
        {message({toastMessageId: messageId})}
      </BaseView>
      {action && (
        <FocusRegion autoFocusQuery={tabbableScopeQuery}>
          <BaseView aria-labelledby={messageId} role="group" xstyle={containerStyles.item}>
            {action.element ? (
                action.element
            ) : action.labelRenderer ? (
                <BaseInlinePressable
                    onPress={() => {
                        onDismiss();
                        action.onPress();
                    }}
                    xstyle={containerStyles.link}
                >
                    {action.labelRenderer(action.label)}
                </BaseInlinePressable>
            ) : null}
          </BaseView>
        </FocusRegion>  
      )}
      {closeButton && <BaseView>{closeButton}</BaseView>} 
    </>
  );

  const wrappedContent = useInvertedDisplayMode 
  ? (
    <BaseTheme 
      config={themeConfigs}
      displayMode={invertedMode}
      ref={toastRef}
      xstyle={[containerStyles.root, size === "full-width" && containerStyles.rootFullWidth]}

    >
      {linkWrapper ? linkWrapper(content) : content}
    </BaseTheme>
  )
  : (
    <BaseView 
      ref={toastRef}
      xstyle={[containerStyles.root, size === "full-width" && containerStyles.rootFullWidth]}
    >
      {linkWrapper ? linkWrapper(content) : content}
    </BaseView>
  );

  return wrappedContent

}