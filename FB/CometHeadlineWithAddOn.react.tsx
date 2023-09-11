// __d("CometHeadlineWithAddOn.react", ["BaseRow.react", "BaseRowItem.react", "Locale", "TetraText.react", "gkx", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react"),
//         i = {
//             addOn: {
//                 display: "x78zum5",
//                 flexDirection: "xdt5ytf",
//                 justifyContent: "xl56j7k",
//                 marginStart: "x1i64zmx",
//                 $$css: !0
//             },
//             nonBreakingSpace: {
//                 visibility: "xlshs6z",
//                 width: "xnalus7",
//                 $$css: !0
//             },
//             textFlexFixForIE: {
//                 flexBasis: "xdl72j9",
//                 $$css: !0
//             }
//         },
//         j = {
//             ltr: {
//                 direction: "xzt5al7",
//                 $$css: !0
//             },
//             rtl: {
//                 direction: "xzyj77d",
//                 $$css: !0
//             }
//         },
//         k = c("gkx")("1299319");

//     function a(a, b) {
//         var e = a.addOn,
//             f = a.children,
//             g = a.color,
//             l = a.headlineRef,
//             m = a.isPrimaryHeading,
//             n = a.isSemanticHeading,
//             o = a.numberOfLines,
//             p = a.truncationTooltip;
//         a = a.type;
//         return h.jsx(c("TetraText.react"), {
//             isSemanticHeading: !1,
//             ref: b,
//             type: a,
//             children: h.jsxs(c("BaseRow.react"), {
//                 verticalAlign: "center",
//                 xstyle: j[d("Locale").isRTL() ? "rtl" : "ltr"],
//                 children: [h.jsx(c("BaseRowItem.react"), {
//                     expanding: !0,
//                     xstyle: k && i.textFlexFixForIE,
//                     children: h.jsx(c("TetraText.react"), {
//                         color: g,
//                         isPrimaryHeading: m,
//                         isSemanticHeading: n,
//                         numberOfLines: o,
//                         ref: l,
//                         truncationTooltip: p,
//                         type: a,
//                         children: f
//                     })
//                 }), h.jsx(c("BaseRowItem.react"), {
//                     verticalAlign: "top",
//                     xstyle: i.addOn,
//                     children: h.jsxs(c("BaseRow.react"), {
//                         verticalAlign: "center",
//                         children: [h.jsx(c("BaseRowItem.react"), {
//                             xstyle: i.nonBreakingSpace,
//                             children: "\xa0"
//                         }), h.jsx(c("BaseRowItem.react"), {
//                             children: h.jsx(c("BaseRow.react"), {
//                                 children: e
//                             })
//                         })]
//                     })
//                 })]
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     b = h.forwardRef(a);
//     g["default"] = b
// }), 98);

import React, { forwardRef } from 'react';
import { BaseRow, BaseRowItem } from 'BaseRow.react';
import { TetraText } from 'TetraText.react';
import Locale from 'Locale';
import { gkx } from 'gkx';

const styles = {
  addOn: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    justifyContent: 'xl56j7k',
    marginStart: 'x1i64zmx',
    $$css: true,
  },
  nonBreakingSpace: {
    visibility: 'xlshs6z',
    width: 'xnalus7',
    $$css: true,
  },
  textFlexFixForIE: {
    flexBasis: 'xdl72j9',
    $$css: true,
  },
};

const directionStyles = {
  ltr: {
    direction: 'xzt5al7',
    $$css: true,
  },
  rtl: {
    direction: 'xzyj77d',
    $$css: true,
  },
};

const isRTL = Locale.isRTL();

const useTextFlexFixForIE = gkx('1299319');

function CometHeadlineWithAddOn(props, ref) {
  const {
    addOn,
    children,
    color,
    headlineRef,
    isPrimaryHeading,
    isSemanticHeading,
    numberOfLines,
    truncationTooltip,
    type,
  } = props;

  return (
    <TetraText
      isSemanticHeading={false}
      ref={ref}
      type={type}
    >
      <BaseRow verticalAlign="center" xstyle={directionStyles[isRTL ? 'rtl' : 'ltr']}>
        <BaseRowItem expanding={true} xstyle={useTextFlexFixForIE && styles.textFlexFixForIE}>
          <TetraText
            color={color}
            isPrimaryHeading={isPrimaryHeading}
            isSemanticHeading={isSemanticHeading}
            numberOfLines={numberOfLines}
            ref={headlineRef}
            truncationTooltip={truncationTooltip}
            type={type}
          >
            {children}
          </TetraText>
        </BaseRowItem>
        <BaseRowItem verticalAlign="top" xstyle={styles.addOn}>
          <BaseRow verticalAlign="center">
            <BaseRowItem xstyle={styles.nonBreakingSpace}>
              &nbsp;
            </BaseRowItem>
            <BaseRowItem>
              <BaseRow>
                {addOn}
              </BaseRow>
            </BaseRowItem>
          </BaseRow>
        </BaseRowItem>
      </BaseRow>
    </TetraText>
  );
}

CometHeadlineWithAddOn.displayName = `${CometHeadlineWithAddOn.name} [from ${f.id}]`;

const ForwardedCometHeadlineWithAddOn = forwardRef(CometHeadlineWithAddOn);

export default ForwardedCometHeadlineWithAddOn;
