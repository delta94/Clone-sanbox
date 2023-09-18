__d("CometSVGIcon.react", ["react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = d("react").useId
      , j = {
        icon: {
            display: "x1lliihq",
            transitionDuration: "x1k90msu",
            transitionProperty: "x2h7rmj",
            transitionTimingFunction: "x1qfuztq",
            $$css: !0
        },
        inline: {
            display: "x1rg5ohu",
            $$css: !0
        },
        shadow: {
            filter: "x1ssd25i",
            $$css: !0
        }
    }
      , k = {
        8: {
            height: "xdk7pt",
            width: "x1xc55vz",
            $$css: !0
        },
        10: {
            height: "x170jfvy",
            width: "x1fsd2vl",
            $$css: !0
        },
        12: {
            height: "x1kpxq89",
            width: "xsmyaan",
            $$css: !0
        },
        16: {
            height: "xlup9mm",
            width: "x1kky2od",
            $$css: !0
        },
        18: {
            height: "xmix8c7",
            width: "x1xp8n7a",
            $$css: !0
        },
        20: {
            height: "x1qx5ct2",
            width: "xw4jnvo",
            $$css: !0
        },
        24: {
            height: "xxk0z11",
            width: "xvy4d1p",
            $$css: !0
        },
        28: {
            height: "x1fgtraw",
            width: "xgd8bvy",
            $$css: !0
        },
        30: {
            height: "x1gnnpzl",
            width: "x1849jeq",
            $$css: !0
        },
        32: {
            height: "x10w6t97",
            width: "x1td3qas",
            $$css: !0
        },
        36: {
            height: "xc9qbxq",
            width: "x14qfxbe",
            $$css: !0
        },
        40: {
            height: "x1vqgdyp",
            width: "x100vrsf",
            $$css: !0
        },
        48: {
            height: "xsdox4t",
            width: "x1useyqa",
            $$css: !0
        },
        52: {
            height: "xdd8jsf",
            width: "xvni27",
            $$css: !0
        },
        56: {
            height: "xnnlda6",
            width: "x15yg21f",
            $$css: !0
        },
        60: {
            height: "xng8ra",
            width: "x1247r65",
            $$css: !0
        },
        72: {
            height: "xy75621",
            width: "xni59qk",
            $$css: !0
        },
        112: {
            height: "x19swzb4",
            width: "xj35x94",
            $$css: !0
        },
        132: {
            height: "x1h5wmu3",
            width: "x16s0kzc",
            $$css: !0
        }
    }
      , l = {
        "active-tab": {
            color: "x5e5rjt",
            $$css: !0
        },
        baseCherry: {
            color: "xmw33a7",
            $$css: !0
        },
        baseLemon: {
            color: "xedzdh8",
            $$css: !0
        },
        baseLime: {
            color: "xdb1l0v",
            $$css: !0
        },
        black: {
            color: "x1p6odiv",
            $$css: !0
        },
        blueLink: {
            color: "x1fey0fg",
            $$css: !0
        },
        disabled: {
            color: "x1eu2eya",
            $$css: !0
        },
        "fb-logo": {
            color: "xig6vdn",
            $$css: !0
        },
        highlight: {
            color: "x1qq9wsj",
            $$css: !0
        },
        "inactive-tab": {
            color: "xcza8v6",
            $$css: !0
        },
        negative: {
            color: "x1a1m0xk",
            $$css: !0
        },
        none: {
            color: "x19co3pv",
            $$css: !0
        },
        positive: {
            color: "x6u5lvz",
            $$css: !0
        },
        primary: {
            color: "x198g3q0",
            $$css: !0
        },
        "rating-star-active": {
            color: "x1n8qakd",
            $$css: !0
        },
        secondary: {
            color: "xcza8v6",
            $$css: !0
        },
        tertiary: {
            color: "xfuq9xy",
            $$css: !0
        },
        warning: {
            color: "xcly8g5",
            $$css: !0
        },
        white: {
            color: "x14ctfv",
            $$css: !0
        },
        "work-iris": {
            color: "xx4snyb",
            $$css: !0
        }
    };
    function a(a) {
        var b = i();
        if (a.viewBox === void 0) {
            var d = a.alt
              , e = a.color
              , f = a.component
              , g = a.inline;
            g = g === void 0 ? !1 : g;
            var m = a.shadow;
            m = m === void 0 ? !1 : m;
            var n = a.size;
            f = f;
            return h.jsx(f, {
                className: c("stylex")([j.icon, g && j.inline, m && j.shadow, l[e], k[n]]),
                title: d == null || d === "" ? void 0 : d
            })
        } else {
            f = a.children;
            g = a.color;
            m = a.inline;
            e = m === void 0 ? !1 : m;
            n = a.shadow;
            d = n === void 0 ? !1 : n;
            m = a.size;
            n = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "color", "inline", "shadow", "size"]);
            a = [];
            var o;
            g != null && typeof g !== "string" && h.isValidElement(g) && (a.push(h.cloneElement(g, {
                id: b,
                key: "1",
                suppressHydrationWarning: !0
            })),
            o = "url(#" + b + ")");
            return h.jsxs("svg", babelHelpers["extends"]({}, n, {
                className: c("stylex")([j.icon, e && j.inline, d && j.shadow, typeof g === "string" && l[g]]),
                fill: (b = o) != null ? b : "currentColor",
                height: m,
                suppressHydrationWarning: !0,
                width: m,
                children: [a.length > 0 ? h.jsx("defs", {
                    children: a
                }) : void 0, f]
            }))
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { useState } from 'react';
import { stylex } from 'stylex'; // Assuming 'stylex' is correctly imported.

interface CometSVGIconProps {
  alt?: string;
  color?: keyof typeof colorStyles;
  component: React.ComponentType<any>;
  inline?: boolean;
  shadow?: boolean;
  size: keyof typeof iconSizes;
  viewBox?: string;
  children?: React.ReactNode;
}

const iconStyles = {
  icon: {
    display: 'x1lliihq',
    transitionDuration: 'x1k90msu',
    transitionProperty: 'x2h7rmj',
    transitionTimingFunction: 'x1qfuztq',
  },
  inline: {
    display: 'x1rg5ohu',
  },
  shadow: {
    filter: 'x1ssd25i',
  },
};

const iconSizes = {
  8: {
    height: "xdk7pt",
    width: "x1xc55vz",
    $$css: !0
},
10: {
    height: "x170jfvy",
    width: "x1fsd2vl",
    $$css: !0
},
12: {
    height: "x1kpxq89",
    width: "xsmyaan",
    $$css: !0
},
16: {
    height: "xlup9mm",
    width: "x1kky2od",
    $$css: !0
},
18: {
    height: "xmix8c7",
    width: "x1xp8n7a",
    $$css: !0
},
20: {
    height: "x1qx5ct2",
    width: "xw4jnvo",
    $$css: !0
},
24: {
    height: "xxk0z11",
    width: "xvy4d1p",
    $$css: !0
},
28: {
    height: "x1fgtraw",
    width: "xgd8bvy",
    $$css: !0
},
30: {
    height: "x1gnnpzl",
    width: "x1849jeq",
    $$css: !0
},
32: {
    height: "x10w6t97",
    width: "x1td3qas",
    $$css: !0
},
36: {
    height: "xc9qbxq",
    width: "x14qfxbe",
    $$css: !0
},
40: {
    height: "x1vqgdyp",
    width: "x100vrsf",
    $$css: !0
},
48: {
    height: "xsdox4t",
    width: "x1useyqa",
    $$css: !0
},
52: {
    height: "xdd8jsf",
    width: "xvni27",
    $$css: !0
},
56: {
    height: "xnnlda6",
    width: "x15yg21f",
    $$css: !0
},
60: {
    height: "xng8ra",
    width: "x1247r65",
    $$css: !0
},
72: {
    height: "xy75621",
    width: "xni59qk",
    $$css: !0
},
112: {
    height: "x19swzb4",
    width: "xj35x94",
    $$css: !0
},
132: {
    height: "x1h5wmu3",
    width: "x16s0kzc",
    $$css: !0
}
};

const colorStyles = {
  "active-tab": {
    color: "x5e5rjt",
    $$css: !0
},
baseCherry: {
    color: "xmw33a7",
    $$css: !0
},
baseLemon: {
    color: "xedzdh8",
    $$css: !0
},
baseLime: {
    color: "xdb1l0v",
    $$css: !0
},
black: {
    color: "x1p6odiv",
    $$css: !0
},
blueLink: {
    color: "x1fey0fg",
    $$css: !0
},
disabled: {
    color: "x1eu2eya",
    $$css: !0
},
"fb-logo": {
    color: "xig6vdn",
    $$css: !0
},
highlight: {
    color: "x1qq9wsj",
    $$css: !0
},
"inactive-tab": {
    color: "xcza8v6",
    $$css: !0
},
negative: {
    color: "x1a1m0xk",
    $$css: !0
},
none: {
    color: "x19co3pv",
    $$css: !0
},
positive: {
    color: "x6u5lvz",
    $$css: !0
},
primary: {
    color: "x198g3q0",
    $$css: !0
},
"rating-star-active": {
    color: "x1n8qakd",
    $$css: !0
},
secondary: {
    color: "xcza8v6",
    $$css: !0
},
tertiary: {
    color: "xfuq9xy",
    $$css: !0
},
warning: {
    color: "xcly8g5",
    $$css: !0
},
white: {
    color: "x14ctfv",
    $$css: !0
},
"work-iris": {
    color: "xx4snyb",
    $$css: !0
}
};

function CometSVGIcon({
  alt = '',
  color = 'black',
  component: IconComponent,
  inline = false,
  shadow = false,
  size,
  viewBox,
  children,
  ...rest
}: CometSVGIconProps) {
  const uniqueId = useId();
  
  if (viewBox === undefined) {
    return (
      <IconComponent
        className={stylex([
          iconStyles.icon,
          inline && iconStyles.inline,
          shadow && iconStyles.shadow,
          colorStyles[color],
          iconSizes[size],
        ])}
        title={alt || undefined}
      />
    );
  } else {
    const defs = [];
    let fillValue;

    if (color !== null && typeof color !== "string" && React.isValidElement(color)) {
      defs.push(
        React.cloneElement(color, {
          id: uniqueId,
          key: "1",
          suppressHydrationWarning: true
        })
      );
      fillValue = `url(#${uniqueId})`;
    }

    return (
      <svg
        className={stylex([
          iconStyles.icon,
          inline && iconStyles.inline,
          shadow && iconStyles.shadow,
          typeof color === 'string' && colorStyles[color],
        ])}
        fill={fillValue !== undefined ? fillValue : "currentColor"}
        height={size}
        width={size}
        suppressHydrationWarning={true}
        {...rest}
      >
         {defs.length > 0 ? <defs>{defs}</defs> : null}
        {children}
      </svg>
    );
  }
}

CometSVGIcon.displayName = `${CometSVGIcon.name} [from ${f.id}]`;

export default CometSVGIcon;
