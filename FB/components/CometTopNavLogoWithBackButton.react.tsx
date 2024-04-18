// __d("CometTopNavLogoWithBackButton.react", ["fbt", "ix", "CometCircleButton.react", "CometLoggedInFacebookLogo.react", "CometTooltip.react", "Locale", "fbicon", "react", "stylex"], (function (a, b, c, d, e, f, g, h, i) {
//     "use strict";
//     var j, k, l = k || d("react"),
//         m = d("Locale").isRTL(),
//         n = 40,
//         o = {
//             backButton: {
//                 opacity: "x1hc1fzr",
//                 position: "x10l6tqk",
//                 start: "x10ja8i0",
//                 left: null,
//                 right: null,
//                 transform: "xcd74o5",
//                 transitionDuration: "x1k90msu",
//                 transitionProperty: "x6o7n8i",
//                 transitionTimingFunction: "xbxq160",
//                 $$css: !0
//             },
//             backButtonHidden: {
//                 opacity: "xg01cxk",
//                 pointerEvents: "x47corl",
//                 $$css: !0
//             },
//             backButtonVisibleLTR: {
//                 transform: "xtzu7as",
//                 $$css: !0
//             },
//             backButtonVisibleRTL: {
//                 transform: "x61iya9",
//                 $$css: !0
//             },
//             logo: {
//                 opacity: "x1hc1fzr",
//                 transitionDuration: "x1k90msu",
//                 transitionProperty: "x6o7n8i",
//                 transitionTimingFunction: "xbxq160",
//                 $$css: !0
//             },
//             logoHidden: {
//                 opacity: "xg01cxk",
//                 pointerEvents: "x47corl",
//                 $$css: !0
//             },
//             logoWithBackButtonLTR: {
//                 transform: "xtzu7as",
//                 $$css: !0
//             },
//             logoWithBackButtonRTL: {
//                 transform: "x61iya9",
//                 $$css: !0
//             }
//         };

//     function p(a) {
//         a = a.children;
//         return l.jsx(c("CometTooltip.react"), {
//             position: "below",
//             tooltip: h._("__JHASH__mq0TtI3_EPy__JHASH__"),
//             children: a
//         })
//     }
//     p.displayName = p.name + " [from " + f.id + "]";

//     function q(a) {
//         a = a.children;
//         return a
//     }

//     function a(a) {
//         var b = a.logoHidden;
//         b = b === void 0 ? !1 : b;
//         var e = a.logoWithShadow;
//         e = e === void 0 ? !1 : e;
//         var f = a.onPressBackButton,
//             g = a.shouldUseCloseButton;
//         g = g === void 0 ? !1 : g;
//         a = a.showBackButton;
//         a = a === void 0 ? !1 : a;
//         var k = g ? p : q;
//         return l.jsxs(l.Fragment, {
//             children: [l.jsx("div", {
//                 className: (j || (j = c("stylex")))([o.backButton, a ? m ? o.backButtonVisibleRTL : o.backButtonVisibleLTR : o.backButtonHidden]),
//                 children: l.jsx(k, {
//                     children: l.jsx(c("CometCircleButton.react"), {
//                         "aria-hidden": !a,
//                         color: g ? "white" : "primary",
//                         disabled: !a,
//                         icon: g ? d("fbicon")._(i("478233"), 20) : m ? d("fbicon")._(i("514454"), 20) : d("fbicon")._(i("512647"), 20),
//                         label: g ? h._("__JHASH__a_qj__uOTBG__JHASH__") : h._("__JHASH__PS-q9pFoZzf__JHASH__"),
//                         onPress: f,
//                         size: n,
//                         testid: void 0,
//                         type: g ? "dark-overlay" : void 0
//                     })
//                 })
//             }), l.jsx(c("CometLoggedInFacebookLogo.react"), {
//                 "aria-hidden": b,
//                 withShadow: e,
//                 xstyle: [o.logo, b && o.logoHidden, a && (m ? o.logoWithBackButtonRTL : o.logoWithBackButtonLTR)]
//             })]
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React, { FC } from 'react';

import fbt from 'fbt'; 
import stylex from 'stylex'; 
import { CometCircleButton, CometLoggedInFacebookLogo, CometTooltip } from 'components';

import { useLocale } from 'Locale';
import { fbicon } from 'fbicon';  

interface Props {
  logoHidden?: boolean;
  logoWithShadow?: boolean;
  onPressBackButton?: () => void; 
  shouldUseCloseButton?: boolean;
  showBackButton?: boolean;
}

const isRTL = useLocale().isRTL;

const IconTooltip: FC = ({ children }) => (
  <CometTooltip position="below" tooltip="Press Esc to close">{children}</CometTooltip>
);

const BackButton: FC<Props> = ({
  logoHidden = false,
  logoWithShadow,  
  onPressBackButton,
  shouldUseCloseButton,
  showBackButton  
}) => {

  const Wrapper = shouldUseCloseButton ? IconTooltip : React.Fragment;

  return (
    <>
      <div 
        className={stylex([styles.backButton, showBackButton ? isRTL ? styles.backButtonVisibleRTL : styles.backButtonVisibleLTR: styles.backButtonHidden])}
      >
        <Wrapper>
          <CometCircleButton
            aria-hidden={!showBackButton}
            color={shouldUseCloseButton ? 'white' : 'primary'}
            disabled={!showBackButton}
            icon={shouldUseCloseButton ? fbicon._(("478233"), 20) : isRTL ? fbicon._(("514454"), 20) : fbicon._(("512647"), 20)} 
            label={shouldUseCloseButton ? 'Close' : "Back to previous page"}
            onPress={onPressBackButton}
            size={40} 
            type={shouldUseCloseButton ? 'dark-overlay' : undefined}
          />
        </Wrapper>
      </div>
      <CometLoggedInFacebookLogo  
        aria-hidden={logoHidden}
        withShadow={logoWithShadow}
        xstyle={[
          styles.logo,
          logoHidden && styles.logoHidden,
          showBackButton && (isRTL ? styles.logoWithBackButtonRTL : styles.logoWithBackButtonLTR), 
        ]}
      />
    </>
  );
};

const styles = {
    backButton: {
        opacity: "x1hc1fzr",
        position: "x10l6tqk",
        start: "x10ja8i0",
        left: null,
        right: null,
        transform: "xcd74o5",
        transitionDuration: "x1k90msu",
        transitionProperty: "x6o7n8i",
        transitionTimingFunction: "xbxq160",
        $$css: !0
    },
    backButtonHidden: {
        opacity: "xg01cxk",
        pointerEvents: "x47corl",
        $$css: !0
    },
    backButtonVisibleLTR: {
        transform: "xtzu7as",
        $$css: !0
    },
    backButtonVisibleRTL: {
        transform: "x61iya9",
        $$css: !0
    },
    logo: {
        opacity: "x1hc1fzr",
        transitionDuration: "x1k90msu",
        transitionProperty: "x6o7n8i",
        transitionTimingFunction: "xbxq160",
        $$css: !0
    },
    logoHidden: {
        opacity: "xg01cxk",
        pointerEvents: "x47corl",
        $$css: !0
    },
    logoWithBackButtonLTR: {
        transform: "xtzu7as",
        $$css: !0
    },
    logoWithBackButtonRTL: {
        transform: "x61iya9",
        $$css: !0
    }
};

export default BackButton;
