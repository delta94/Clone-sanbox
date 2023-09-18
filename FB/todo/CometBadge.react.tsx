__d("CometBadge.react", ["BaseStyledBadge.react", "getCometBadgeColorStyle", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = {
        borderDark: {
            borderTopColor: "x1o7swki",
            borderEndColor: "xp7cj6j",
            borderBottomColor: "x1bkzgmd",
            borderStartColor: "xl02xpf",
            $$css: !0
        },
        borderWhite: {
            borderTopColor: "x6zyg47",
            borderEndColor: "x1xm1mqw",
            borderBottomColor: "xpn8fn3",
            borderStartColor: "xtct9fg",
            $$css: !0
        },
        isNoneProfileBadge: {
            marginEnd: "x1emribx",
            $$css: !0
        }
    }
      , j = {
        6: {
            marginStart: "x1w4ip6v",
            width: "x1wc42o8",
            $$css: !0
        },
        7: {
            marginStart: "x1b2warb",
            width: "xaw7vzs",
            $$css: !0
        },
        8: {
            marginStart: "xsgj6o6",
            width: "xsmyaan",
            $$css: !0
        },
        9: {
            marginStart: "x1hvlnb8",
            width: "x197psvt",
            $$css: !0
        },
        10: {
            marginStart: "x8j4wrb",
            width: "x1a00udw",
            $$css: !0
        },
        12: {
            marginStart: "x1mnrxsn",
            width: "x1xp8n7a",
            $$css: !0
        },
        14: {
            marginStart: "xnfveip",
            width: "x1kl0l3y",
            $$css: !0
        },
        15: {
            marginStart: "xpw6ms",
            width: "xpcibvc",
            $$css: !0
        },
        18: {
            marginStart: "x1cxxrxm",
            width: "xo7uitg",
            $$css: !0
        },
        20: {
            marginStart: "x17adc0v",
            width: "x1849jeq",
            $$css: !0
        },
        22: {
            marginStart: "x1hy63sm",
            width: "x1npj6m0",
            $$css: !0
        },
        24: {
            marginStart: "x16n37ib",
            width: "x14qfxbe",
            $$css: !0
        },
        32: {
            marginStart: "x1d52u69",
            width: "x1useyqa",
            $$css: !0
        },
        41: {
            marginStart: "x1v860g0",
            width: "x1yaf2ey",
            $$css: !0
        }
    }
      , k = {
        6: {
            marginStart: "x1mnrxsn",
            width: "xsmyaan",
            $$css: !0
        },
        7: {
            marginStart: "xnfveip",
            width: "x6jxa94",
            $$css: !0
        },
        8: {
            marginStart: "x1i64zmx",
            width: "x1kky2od",
            $$css: !0
        },
        9: {
            marginStart: "x1cxxrxm",
            width: "x1xp8n7a",
            $$css: !0
        },
        10: {
            marginStart: "x17adc0v",
            width: "xw4jnvo",
            $$css: !0
        },
        12: {
            marginStart: "x16n37ib",
            width: "xvy4d1p",
            $$css: !0
        },
        14: {
            marginStart: "xwycmqc",
            width: "xgd8bvy",
            $$css: !0
        },
        15: {
            marginStart: "x13ibhcj",
            width: "x1849jeq",
            $$css: !0
        },
        18: {
            marginStart: "x1sliqq",
            width: "x14qfxbe",
            $$css: !0
        },
        20: {
            marginStart: "xmn8rco",
            width: "x100vrsf",
            $$css: !0
        },
        22: {
            marginStart: "x1tv9t25",
            width: "x187nhsf",
            $$css: !0
        },
        24: {
            marginStart: "xmupa6y",
            width: "x1useyqa",
            $$css: !0
        },
        32: {
            marginStart: "x8vdgqj",
            width: "x1fu8urw",
            $$css: !0
        },
        41: {
            marginStart: "x2vb376",
            width: "x1pigqs1",
            $$css: !0
        }
    };
    function a(a) {
        var b = a.border;
        b = b === void 0 ? "none" : b;
        var d = a.children
          , e = a.color;
        e = e === void 0 ? "blue" : e;
        var f = a.colorOverride
          , g = a.isProfileBadge;
        g = g === void 0 ? !1 : g;
        var l = a.label
          , m = a.size;
        m = m === void 0 ? 8 : m;
        var n = a.wide;
        n = n === void 0 ? "normal" : n;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["border", "children", "color", "colorOverride", "isProfileBadge", "label", "size", "wide"]);
        return h.jsx(c("BaseStyledBadge.react"), babelHelpers["extends"]({}, a, {
            "aria-label": l,
            border: b !== "none",
            colorXStyle: (a = f) != null ? a : c("getCometBadgeColorStyle")(e),
            size: m,
            xstyle: [!g && i.isNoneProfileBadge, b === "white" && i.borderWhite, b === "dark" && i.borderDark, n === "wide" && j[m], n === "extraWide" && k[m]],
            children: d
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);





import React from 'react';
import { getCometBadgeColorStyle } from 'getCometBadgeColorStyle'; // Adjust the import path as needed
import BaseStyledBadge from 'BaseStyledBadge.react'; // Adjust the import path as needed

interface CometBadgeProps {
  border?: "none" | "white" | "dark";
  children: React.ReactNode;
  color?: string;
  colorOverride?: string;
  isProfileBadge?: boolean;
  label?: string;
  size?: number;
  wide?: "normal" | "wide" | "extraWide";
  [key: string]: any;
}

const borderStyles = {
    borderDark: {
        borderTopColor: "x1o7swki",
        borderEndColor: "xp7cj6j",
        borderBottomColor: "x1bkzgmd",
        borderStartColor: "xl02xpf",
        $$css: !0
    },
    borderWhite: {
        borderTopColor: "x6zyg47",
        borderEndColor: "x1xm1mqw",
        borderBottomColor: "xpn8fn3",
        borderStartColor: "xtct9fg",
        $$css: !0
    },
    isNoneProfileBadge: {
        marginEnd: "x1emribx",
        $$css: !0
    }
}


const sizeStylesSmall = {
    6: {
        marginStart: "x1w4ip6v",
        width: "x1wc42o8",
        $$css: !0
    },
    7: {
        marginStart: "x1b2warb",
        width: "xaw7vzs",
        $$css: !0
    },
    8: {
        marginStart: "xsgj6o6",
        width: "xsmyaan",
        $$css: !0
    },
    9: {
        marginStart: "x1hvlnb8",
        width: "x197psvt",
        $$css: !0
    },
    10: {
        marginStart: "x8j4wrb",
        width: "x1a00udw",
        $$css: !0
    },
    12: {
        marginStart: "x1mnrxsn",
        width: "x1xp8n7a",
        $$css: !0
    },
    14: {
        marginStart: "xnfveip",
        width: "x1kl0l3y",
        $$css: !0
    },
    15: {
        marginStart: "xpw6ms",
        width: "xpcibvc",
        $$css: !0
    },
    18: {
        marginStart: "x1cxxrxm",
        width: "xo7uitg",
        $$css: !0
    },
    20: {
        marginStart: "x17adc0v",
        width: "x1849jeq",
        $$css: !0
    },
    22: {
        marginStart: "x1hy63sm",
        width: "x1npj6m0",
        $$css: !0
    },
    24: {
        marginStart: "x16n37ib",
        width: "x14qfxbe",
        $$css: !0
    },
    32: {
        marginStart: "x1d52u69",
        width: "x1useyqa",
        $$css: !0
    },
    41: {
        marginStart: "x1v860g0",
        width: "x1yaf2ey",
        $$css: !0
    }
}

const sizeStylesLarge = {
    6: {
        marginStart: "x1mnrxsn",
        width: "xsmyaan",
        $$css: !0
    },
    7: {
        marginStart: "xnfveip",
        width: "x6jxa94",
        $$css: !0
    },
    8: {
        marginStart: "x1i64zmx",
        width: "x1kky2od",
        $$css: !0
    },
    9: {
        marginStart: "x1cxxrxm",
        width: "x1xp8n7a",
        $$css: !0
    },
    10: {
        marginStart: "x17adc0v",
        width: "xw4jnvo",
        $$css: !0
    },
    12: {
        marginStart: "x16n37ib",
        width: "xvy4d1p",
        $$css: !0
    },
    14: {
        marginStart: "xwycmqc",
        width: "xgd8bvy",
        $$css: !0
    },
    15: {
        marginStart: "x13ibhcj",
        width: "x1849jeq",
        $$css: !0
    },
    18: {
        marginStart: "x1sliqq",
        width: "x14qfxbe",
        $$css: !0
    },
    20: {
        marginStart: "xmn8rco",
        width: "x100vrsf",
        $$css: !0
    },
    22: {
        marginStart: "x1tv9t25",
        width: "x187nhsf",
        $$css: !0
    },
    24: {
        marginStart: "xmupa6y",
        width: "x1useyqa",
        $$css: !0
    },
    32: {
        marginStart: "x8vdgqj",
        width: "x1fu8urw",
        $$css: !0
    },
    41: {
        marginStart: "x2vb376",
        width: "x1pigqs1",
        $$css: !0
    }
};

const CometBadge: React.FC<CometBadgeProps> = ({
  border = "none",
  children,
  color = "blue",
  colorOverride,
  isProfileBadge = false,
  label,
  size = 8,
  wide = "normal",
  ...restProps
}) => {
  return (
    <BaseStyledBadge
      {...restProps}
      aria-label={label}
      border={border !== "none"}
      colorXStyle={colorOverride ?? getCometBadgeColorStyle(color)}
      size={size}
      xstyle={[
        !isProfileBadge && borderStyles.isNoneProfileBadge,
        border === "white" && borderStyles.borderWhite,
        border === "dark" && borderStyles.borderDark,
        wide === "wide" && sizeStylesSmall[size],
        wide === "extraWide" && sizeStylesLarge[size],
      ]}
    >
      {children}
    </BaseStyledBadge>
  );
};

CometBadge.displayName = `${CometBadge.name} [from ${'your module ID'}]`;

export default CometBadge;
