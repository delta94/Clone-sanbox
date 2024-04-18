__d("WorkGalahadColumnCollapseButton.react", ["ix", "CometIcon.react", "CometPressable.react", "CometTooltip.react", "Locale", "fbicon", "react", "stylex", "testID", "useGeminiHoverState"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = j || d("react"),
        l = {
            tooltip: {
                position: "x1n2onr6",
                borderTopStartRadius: "x14yjl9h",
                borderTopEndRadius: "xudhj91",
                borderBottomEndRadius: "x18nykt9",
                borderBottomStartRadius: "xww2gxu",
                $$css: !0
            },
            hidden: {
                display: "x1s85apg",
                $$css: !0
            },
            button: {
                borderTopStartRadius: "x14yjl9h",
                borderTopEndRadius: "xudhj91",
                borderBottomEndRadius: "x18nykt9",
                borderBottomStartRadius: "xww2gxu",
                boxSizing: "x9f619",
                height: "x10w6t97",
                width: "x1td3qas",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                $$css: !0
            },
            bounceLeft: {
                animationDuration: "xof6966",
                animationIterationCount: "x1v7wizp",
                animationName: "xbyf6lo",
                animationTimingFunction: "x4hg4is",
                $$css: !0
            },
            bounceRight: {
                animationDuration: "xof6966",
                animationIterationCount: "x1v7wizp",
                animationName: "xjyisfg",
                animationTimingFunction: "x4hg4is",
                $$css: !0
            }
        };

    function a(a) {
        var b = a["aria-label"],
            e = a.columnPosition,
            f = a.mode,
            g = a.onClick,
            h = a.tooltipMessage,
            j = a.visible;
        a = a.xstyle;
        var n = c("useGeminiHoverState")(),
            o = n[0];
        n = n[1];
        var p = d("Locale").isRTL() === (e === "left");
        p = p === (f === "collapse");
             = e === "left" !== (f === "collapse");
        return k.jsx("div", babelHelpers["extends"]({
            className: (i || (i = c("stylex")))(l.tooltip, !j && l.hidden)
        }, c("testID")("galahad-channel-toggle"), {
            children: k.jsx(c("CometTooltip.react"), {
                align: e === "left" ? "start" : "end",
                tooltip: h,
                children: k.jsx(c("CometPressable.react"), {
                    onHoverIn: n.onMouseEnter,
                    onHoverOut: n.onMouseLeave,
                    xstyle: [l.button, a, o && (f ? l.bounceLeft : l.bounceRight)],
                    onPress: g,
                    "aria-label": b,
                    role: "button",
                    children: k.jsx(c("CometIcon.react"), {
                        icon: m(p, o),
                        color: o ? "secondary" : "tertiary"
                    })
                })
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m(a, b) {
        if (b) return a ? d("fbicon")._(h("665119"), 20) : d("fbicon")._(h("641698"), 20);
        else return a ? d("fbicon")._(h("665122"), 20) : d("fbicon")._(h("641700"), 20)
    }
    g["default"] = a
}), 98);



import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { CometIcon, CometPressable, CometTooltip } from 'comet'; 
import { useGeminiHoverState } from 'comet/use-gemini-hover-state';
import { fbicon } from 'facebook-icons';
import {isRTL} from "Locale"

const styles = StyleSheet.create({
    tooltip: {
        position: "x1n2onr6",
        borderTopStartRadius: "x14yjl9h",
        borderTopEndRadius: "xudhj91",
        borderBottomEndRadius: "x18nykt9",
        borderBottomStartRadius: "xww2gxu",
        $$css: !0
    },
    hidden: {
        display: "x1s85apg",
        $$css: !0
    },
    button: {
        borderTopStartRadius: "x14yjl9h",
        borderTopEndRadius: "xudhj91",
        borderBottomEndRadius: "x18nykt9",
        borderBottomStartRadius: "xww2gxu",
        boxSizing: "x9f619",
        height: "x10w6t97",
        width: "x1td3qas",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: !0
    },
    bounceLeft: {
        animationDuration: "xof6966",
        animationIterationCount: "x1v7wizp",
        animationName: "xbyf6lo",
        animationTimingFunction: "x4hg4is",
        $$css: !0
    },
    bounceRight: {
        animationDuration: "xof6966",
        animationIterationCount: "x1v7wizp",
        animationName: "xjyisfg",
        animationTimingFunction: "x4hg4is",
        $$css: !0
    }
});

interface Props {
    ariaLabel: string;
    columnPosition: 'left' | 'right';
    mode: 'collapse' | 'expand';
    onClick: () => void;
    tooltipMessage: string;
    visible: boolean;
    xstyle?: React.CSSProperties;
}

function ColumnCollapseButton({
  ariaLabel,
  columnPosition, 
  mode,
  onClick,
  tooltipMessage,
  visible,
  xstyle
}: Props) {

  const [isHovered, hoverHandlers] = useGeminiHoverState();
  const { onMouseEnter, onMouseLeave } = hoverHandlers;
  const isRtl = isRTL();

  const isIconExpanded =
  (isRtl === (columnPosition === 'left')) === (mode === 'collapse');
  const isIconCollapsed = columnPosition === 'left' !== (mode === 'collapse');

  return (
    <div 
      className={css(
        styles.tooltip,
        !visible && styles.hidden
      )}
      data-testid="galahad-channel-toggle"
    >
      <CometTooltip
        align={columnPosition === 'left' ? 'start' : 'end'}
        tooltip={tooltipMessage}
      >
        <CometPressable
          onHoverIn={onMouseEnter}
          onHoverOut={onMouseLeave}  
          style={[
            styles.button,
            xstyle,
            isHovered && (isIconCollapsed ? styles.bounceLeft : styles.bounceRight)
          ]}
          onPress={onClick}
          aria-label={ariaLabel}
          role="button"
        >
          <CometIcon 
            icon={getIcon(isIconExpanded, isHovered)}
            color={isHovered ? 'secondary' : 'tertiary'}
          />
        </CometPressable>
      </CometTooltip>
    </div>
  );
}

function getIcon(isExpanded, isHovered) {
  if (isHovered) {
    return isExpanded  
      ? fbicon._("665119")
      : fbicon._("641698");
  } else {
    return isExpanded
      ? fbicon._("665122")  
      : fbicon._("641700");
  }
}

export default ColumnCollapseButton;
