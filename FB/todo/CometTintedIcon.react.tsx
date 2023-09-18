__d("CometTintedIcon.react", ["BaseImage_DEPRECATED.react", "TintableIconSource", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = {
        image: {
            verticalAlign: "x1b0d499",
            $$css: !0
        }
    }
      , j = {
        accent: {
            filter: "xi3auck",
            $$css: !0
        },
        blueLink: {
            filter: "x1vv9jnp",
            $$css: !0
        },
        disabled: {
            filter: "xmgbrsx",
            $$css: !0
        },
        negative: {
            filter: "x1d2xfc3",
            $$css: !0
        },
        placeholder: {
            filter: "xuo83w3",
            $$css: !0
        },
        positive: {
            filter: "x1hq76kk",
            $$css: !0
        },
        primary: {
            filter: "xep6ejk",
            $$css: !0
        },
        secondary: {
            filter: "x1d69dk1",
            $$css: !0
        },
        warning: {
            filter: "xgzi2j0",
            $$css: !0
        },
        white: {
            filter: "xaj1gnb",
            $$css: !0
        }
    };
    function a(a, b) {
        var d = a.alt;
        d = d === void 0 ? "" : d;
        var e = a.color;
        e = e === void 0 ? "black" : e;
        var f = a.draggable
          , g = a.icon
          , k = a.testid;
        k = a.xstyle;
        a = g instanceof c("TintableIconSource");
        return h.jsx(c("BaseImage_DEPRECATED.react"), {
            alt: d,
            className: c("stylex")(i.image, a && e !== "black" && j[e], k),
            draggable: f,
            ref: b,
            src: g.src,
            testid: void 0
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    b.name = "CometTintedIcon";
    e = b;
    g["default"] = e
}
), 98);


import React, { forwardRef } from 'react';
import BaseImage_DEPRECATED from './BaseImage_DEPRECATED.react'; // Replace './BaseImage_DEPRECATED.react' with the actual path to the BaseImage module.
import TintableIconSource from './TintableIconSource'; // Replace './TintableIconSource' with the actual path to the TintableIconSource module.
import { stylex } from 'stylex'; // Assuming 'stylex' is correctly imported.

interface CometTintedIconProps {
  alt?: string;
  color?: string;
  draggable?: boolean;
  icon: TintableIconSource;
  testid?: string;
  xstyle?: Record<string, any>;
}


const style = {
    image: {
        verticalAlign: "x1b0d499",
        $$css: !0
    }
}
const colorFilterStyles = {
    accent: {
        filter: "xi3auck",
        $$css: !0
    },
    blueLink: {
        filter: "x1vv9jnp",
        $$css: !0
    },
    disabled: {
        filter: "xmgbrsx",
        $$css: !0
    },
    negative: {
        filter: "x1d2xfc3",
        $$css: !0
    },
    placeholder: {
        filter: "xuo83w3",
        $$css: !0
    },
    positive: {
        filter: "x1hq76kk",
        $$css: !0
    },
    primary: {
        filter: "xep6ejk",
        $$css: !0
    },
    secondary: {
        filter: "x1d69dk1",
        $$css: !0
    },
    warning: {
        filter: "xgzi2j0",
        $$css: !0
    },
    white: {
        filter: "xaj1gnb",
        $$css: !0
    }
};

const CometTintedIcon = forwardRef<HTMLImageElement, CometTintedIconProps>((
    {
      alt = '',
      color = 'black',
      draggable,
      icon,
      testid,
      xstyle,
    }: CometTintedIconProps,
    ref: React.RefObject<Element>
  ) => {
    const isTinted = icon instanceof TintableIconSource;
    return (
      <BaseImage_DEPRECATED
        alt={alt}
        className={stylex(
          { verticalAlign: 'x1b0d499' },
          style.image && color !== 'black' && colorFilterStyles[color], // Assuming j[color] is correctly imported.
          xstyle
        )}
        draggable={draggable}
        ref={ref}
        src={icon.src}
        testid={testid}
      />
    );
  }
);

CometTintedIcon.displayName = `${CometTintedIcon.name} [from ${f.id}]`;

export default CometTintedIcon;
