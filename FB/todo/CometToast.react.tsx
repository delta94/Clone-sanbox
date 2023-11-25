__d("CometToast.react", ["fbt", "ix", "BaseToast.react", "CometCircleButton.react", "CometPressable.react", "TetraText.react", "fbicon", "react"], (function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j, k = j || (j = d("react")),
        l = j.useMemo,
        m = {
            pressable: {
                alignItems: "x6s0dn4",
                display: "x78zum5",
                flexDirection: "x1q0g3np",
                width: "xh8yej3",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.action,
            e = a.href,
            f = a.icon,
            g = a.impressionLoggingRef,
            j = a.message,
            n = a.onDismiss,
            o = a.supressCloseButton;
        o = o === void 0 ? !1 : o;
        var p = a.target,
            q = a.testid;
        q = q === void 0 ? "Toast" : q;
        q = a.truncateText;
        var r = q === void 0 ? !0 : q,
            s = babelHelpers.objectWithoutPropertiesLoose(a, ["action", "href", "icon", "impressionLoggingRef", "message", "onDismiss", "supressCloseButton", "target", "testid", "truncateText"]),
            t = l(function () {
                return e != null ? {
                    target: p,
                    url: e
                } : void 0
            }, [e, p]);
        return k.jsx(c("BaseToast.react"), {
            action: b != null ? {
                label: b.label,
                labelRenderer: function (a) {
                    return k.jsx(c("TetraText.react"), {
                        color: "blueLink",
                        numberOfLines: 1,
                        type: "body3",
                        children: a
                    })
                },
                onPress: b.onPress,
                testid: b.testid
            } : void 0,
            addOnStart: f,
            closeButton: o !== !0 && k.jsx(c("CometCircleButton.react"), {
                icon: d("fbicon")._(i("478231"), 12),
                label: h._("__JHASH__cCrSTii9yXy__JHASH__"),
                onPress: n,
                size: 24
            }),
            linkWrapper: s.onPress != null || t != null ? function (a) {
                return k.jsx(c("CometPressable.react"), babelHelpers["extends"]({}, s, {
                    expanding: !0,
                    linkProps: t,
                    xstyle: m.pressable,
                    children: a
                }))
            } : void 0,
            message: function (a) {
                a = a.toastMessageId;
                return k.jsx(c("TetraText.react"), {
                    color: "primary",
                    id: a,
                    numberOfLines: r ? 4 : void 0,
                    type: "body3",
                    children: j
                })
            },
            onDismiss: n,
            testid: void 0,
            toastRef: g
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


// CometToast.tsx

import React, { useMemo } from 'react';

import BaseToast from 'BaseToast.react';
import CometCircleButton from 'CometCircleButton.react';
import CometPressable from 'CometPressable.react'; 
import TetraText from 'TetraText.react';
import fbicon from './fbicon';

interface ToastProps {
    action?: {
      label: string;
      onPress: () => void;
      testid?: string;
    };
    href?: string;
    icon?: JSX.Element;
    impressionLoggingRef?: React.RefObject<HTMLDivElement>;
    message: string; 
    onDismiss: () => void;
    onPress?: () => void;
    suppressCloseButton?: boolean;
    target?: string;
    testid?: string;
    truncateText?: boolean;
}

const containerStyles = {
    pressable: {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        flexDirection: "x1q0g3np",
        width: "xh8yej3",
        $$css: !0
    }
};

export default function CometToast({ 
    action,
    href,
    icon,
    impressionLoggingRef,
    message,
    onDismiss,
    suppressCloseButton = false,
    target,
    testid = 'Toast',
    truncateText = true,
    onPress,
    ...rest
  }: ToastProps) {
  const link = useMemo(() => {
    if (href) {
      return {
        target,
        url: href
      };
    }
  }, [href, target]);

  return (
    <BaseToast
      action={action && {
        label: action.label,
        labelRenderer: label => (
          <TetraText
            color="blueLink"
            numberOfLines={1}
            type="body3">
            {label}
          </TetraText>
        ),
        onPress: action.onPress,
        testid: action.testid
      }}
      addOnStart={icon}
      closeButton={!suppressCloseButton && 
        <CometCircleButton
          icon={fbicon('x')}
          label={"Close"} 
          onPress={onDismiss}
          size={24} 
        />
      }
      linkWrapper={onPress || link ? wrapper => (
        <CometPressable
          {...rest}
          expanding
          linkProps={link}
          xstyle={containerStyles}
        >
          {wrapper}
        </CometPressable>  
      ) : undefined}
      message={messageId => (
        <TetraText
          color="primary"
          id={messageId}
          numberOfLines={truncateText ? 4 : undefined} 
          type="body3"
        >
          {message}
        </TetraText>
      )}
      onDismiss={onDismiss}
      testid={testid}
      toastRef={impressionLoggingRef}
    />
  );

}