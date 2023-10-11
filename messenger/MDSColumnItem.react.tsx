__d("MDSColumnItem.react", ["BaseView.react", "CometErrorBoundary.react", "CometPlaceholder.react", "MDSColumnContext", "MDSColumnItemContext", "isIE11OrGreater", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = d("react").useContext
      , j = {
        divider: {
            borderTopColor: "x8cjs6t",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            $$css: !0
        },
        expanding: {
            flexBasis: "x1l7klhg",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            minHeight: "x2lwn1j",
            $$css: !0
        },
        expandingIE11: {
            flexBasis: "xdl72j9",
            $$css: !0
        },
        firstChildDisplay: {
            display: "x1s85apg",
            $$css: !0
        },
        firstChildMargin: {
            marginTop: "xdj266r",
            $$css: !0
        },
        lastChildMargin: {
            marginBottom: "xat24cr",
            $$css: !0
        },
        root: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexShrink: "x2lah0s",
            maxWidth: "x193iq5w",
            $$css: !0
        }
    }
      , k = {
        center: {
            alignItems: "x6s0dn4",
            $$css: !0
        },
        end: {
            alignItems: "xuk3077",
            $$css: !0
        },
        start: {
            alignItems: "x1cy8zhl",
            $$css: !0
        }
    }
      , l = {
        4: {
            paddingStart: "x1e558r4",
            paddingEnd: "x150jy0e",
            $$css: !0
        },
        8: {
            paddingStart: "xurb0ha",
            paddingEnd: "x1sxyh0",
            $$css: !0
        },
        12: {
            paddingStart: "x1ye3gou",
            paddingEnd: "xn6708d",
            $$css: !0
        },
        16: {
            paddingStart: "x1swvt13",
            paddingEnd: "x1pi30zi",
            $$css: !0
        },
        20: {
            paddingStart: "x5ib6vp",
            paddingEnd: "xc73u3c",
            $$css: !0
        }
    }
      , m = {
        0: {
            paddingTop: "xexx8yu",
            $$css: !0
        },
        4: {
            paddingTop: "x1iorvi4",
            $$css: !0
        },
        8: {
            paddingTop: "x1y1aw1k",
            $$css: !0
        },
        12: {
            paddingTop: "xz9dl7a",
            $$css: !0
        },
        16: {
            paddingTop: "xyamay9",
            $$css: !0
        },
        20: {
            paddingTop: "x1cnzs8",
            $$css: !0
        },
        40: {
            paddingTop: "x13zrc24",
            $$css: !0
        }
    }
      , n = {
        4: {
            paddingTop: "x1iorvi4",
            paddingBottom: "xjkvuk6",
            $$css: !0
        },
        8: {
            paddingTop: "x1y1aw1k",
            paddingBottom: "xwib8y2",
            $$css: !0
        },
        12: {
            paddingTop: "xz9dl7a",
            paddingBottom: "xsag5q8",
            $$css: !0
        },
        16: {
            paddingTop: "xyamay9",
            paddingBottom: "x1l90r2v",
            $$css: !0
        },
        20: {
            paddingTop: "x1cnzs8",
            paddingBottom: "xx6bls6",
            $$css: !0
        }
    }
      , o = {
        4: {
            marginTop: "xr9ek0c",
            marginBottom: "xjpr12u",
            $$css: !0
        },
        8: {
            marginTop: "x1gslohp",
            marginBottom: "x12nagc",
            $$css: !0
        },
        12: {
            marginTop: "x1k70j0n",
            marginBottom: "xzueoph",
            $$css: !0
        },
        16: {
            marginTop: "x1xmf6yo",
            marginBottom: "x1e56ztr",
            $$css: !0
        },
        20: {
            marginTop: "x1anpbxc",
            marginBottom: "xyorhqc",
            $$css: !0
        },
        24: {
            marginTop: "x14vqqas",
            marginBottom: "xod5an3",
            $$css: !0
        },
        32: {
            marginTop: "xw7yly9",
            marginBottom: "x1yztbdb",
            $$css: !0
        },
        40: {
            marginTop: "x1sy10c2",
            marginBottom: "xieb3on",
            $$css: !0
        }
    }
      , p = {
        bottom: {
            justifyContent: "x13a6bvl",
            $$css: !0
        },
        center: {
            justifyContent: "xl56j7k",
            $$css: !0
        },
        "space-between": {
            justifyContent: "x1qughib",
            $$css: !0
        }
    }
      , q = {
        4: {
            marginStart: "xsgj6o6",
            marginEnd: "xw3qccf",
            $$css: !0
        },
        8: {
            marginStart: "x1i64zmx",
            marginEnd: "x1emribx",
            $$css: !0
        },
        12: {
            marginStart: "x16n37ib",
            marginEnd: "xq8finb",
            $$css: !0
        },
        16: {
            marginStart: "x1d52u69",
            marginEnd: "xktsk01",
            $$css: !0
        },
        20: {
            marginStart: "xmn8rco",
            marginEnd: "x1h5jrl4",
            $$css: !0
        }
    };
    function a(a, b) {
        var d, e, f, g;
        d = (d = i(c("MDSColumnContext"))) != null ? d : {};
        var s = a.align;
        e = s === void 0 ? (e = d.align) != null ? e : "stretch" : s;
        s = a.children;
        var t = a.expanding;
        t = t === void 0 ? !1 : t;
        var u = a.fallback
          , v = a.paddingHorizontal;
        f = v === void 0 ? (f = d.paddingHorizontal) != null ? f : 0 : v;
        v = a.paddingTop;
        var w = a.paddingVertical;
        w = w === void 0 ? 0 : w;
        var x = a.placeholder
          , y = a.verticalAlign;
        y = y === void 0 ? "top" : y;
        var z = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "children", "expanding", "fallback", "paddingHorizontal", "paddingTop", "paddingVertical", "placeholder", "verticalAlign"])
          , A = i(c("MDSColumnItemContext"))
          , B = A.isFirst;
        A = A.isLast;
        var C = c("stylex").compose(a.xstyle);
        g = h.jsxs(h.Fragment, {
            children: [d.hasDividers === !0 && h.jsx(c("BaseView.react"), {
                role: "separator",
                xstyle: [j.divider, q[(g = d.paddingHorizontal) != null ? g : 0], B && j.firstChildDisplay]
            }), h.jsx(c("BaseView.react"), babelHelpers["extends"]({}, z, {
                ref: b,
                xstyle: [j.root, t && [j.expanding, c("isIE11OrGreater") && j.expandingIE11], e !== "stretch" && k[e], y !== "top" && p[y], l[f], n[w], v != null && m[v], d.spacing != null && [o[d.spacing], C.marginTop == null && B && j.firstChildMargin, C.marginBottom == null && A && j.lastChildMargin], a.xstyle],
                children: h.jsx(c("MDSColumnContext").Provider, {
                    value: null,
                    children: s
                })
            }))]
        });
        if (u !== void 0) {
            a.fallback;
            var D = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
            u === null ? g = h.jsx(c("CometErrorBoundary.react"), {
                children: g
            }) : g = h.jsx(c("CometErrorBoundary.react"), {
                fallback: function(a, c) {
                    return h.jsx(r, babelHelpers["extends"]({}, D, {
                        ref: b,
                        children: typeof u === "function" ? u(a, c) : u
                    }))
                },
                children: g
            })
        }
        if (x !== void 0) {
            a.placeholder;
            z = babelHelpers.objectWithoutPropertiesLoose(a, ["placeholder"]);
            g = h.jsx(c("CometPlaceholder.react"), {
                fallback: x != null ? h.jsx(r, babelHelpers["extends"]({}, z, {
                    ref: b,
                    children: x
                })) : null,
                children: g
            })
        }
        return g
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var r = h.forwardRef(a);
    b = r;
    g["default"] = b
}
), 98);




import React, { useContext, forwardRef } from 'react';

import {
  MDSColumnContext,
  MDSColumnItemContext,
} from './MDSColumnContext'; // Update the import path to the actual context
import { isIE11OrGreater } from './isIE11OrGreater'; // Update the import path to the actual isIE11OrGreater function
import { BaseView } from './BaseView'; // Update the import path to the actual BaseView component
import { CometErrorBoundary } from './CometErrorBoundary'; // Update the import path to the actual CometErrorBoundary component
import { CometPlaceholder } from './CometPlaceholder'; // Update the import path to the actual CometPlaceholder component
import { stylex } from './stylex'; // Update the import path to the actual stylex module

interface MDSColumnItemProps {
  align?: 'stretch' | 'center' | 'end' | 'start';
  children: React.ReactNode;
  expanding?: boolean;
  fallback?: React.ReactNode | ((error: any, info: any) => React.ReactNode);
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingVertical?: number;
  placeholder?: React.ReactNode;
  verticalAlign?: 'top' | 'center' | 'bottom' | 'space-between';
  xstyle?: any;
}

const styles = {
    divider: {
        borderTopColor: "x8cjs6t",
        borderTopStyle: "x13fuv20",
        borderTopWidth: "x178xt8z",
        $$css: !0
    },
    expanding: {
        flexBasis: "x1l7klhg",
        flexGrow: "x1iyjqo2",
        flexShrink: "xs83m0k",
        minHeight: "x2lwn1j",
        $$css: !0
    },
    expandingIE11: {
        flexBasis: "xdl72j9",
        $$css: !0
    },
    firstChildDisplay: {
        display: "x1s85apg",
        $$css: !0
    },
    firstChildMargin: {
        marginTop: "xdj266r",
        $$css: !0
    },
    lastChildMargin: {
        marginBottom: "xat24cr",
        $$css: !0
    },
    root: {
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        flexShrink: "x2lah0s",
        maxWidth: "x193iq5w",
        $$css: !0
    }
}

const paddingXMappings: { [key: number]: { [key: string]: string | boolean } } = {
    4: {
        paddingStart: "x1e558r4",
        paddingEnd: "x150jy0e",
        $$css: !0
    },
    8: {
        paddingStart: "xurb0ha",
        paddingEnd: "x1sxyh0",
        $$css: !0
    },
    12: {
        paddingStart: "x1ye3gou",
        paddingEnd: "xn6708d",
        $$css: !0
    },
    16: {
        paddingStart: "x1swvt13",
        paddingEnd: "x1pi30zi",
        $$css: !0
    },
    20: {
        paddingStart: "x5ib6vp",
        paddingEnd: "xc73u3c",
        $$css: !0
    }
};

const paddingTopMappings: { [key: number]: { [key: string]: string | boolean } } = {
    0: {
        paddingTop: "xexx8yu",
        $$css: !0
    },
    4: {
        paddingTop: "x1iorvi4",
        $$css: !0
    },
    8: {
        paddingTop: "x1y1aw1k",
        $$css: !0
    },
    12: {
        paddingTop: "xz9dl7a",
        $$css: !0
    },
    16: {
        paddingTop: "xyamay9",
        $$css: !0
    },
    20: {
        paddingTop: "x1cnzs8",
        $$css: !0
    },
    40: {
        paddingTop: "x13zrc24",
        $$css: !0
    }
};

const paddingYMappings: { [key: number]: { [key: string]: string | boolean } } = {
    4: {
        paddingTop: "x1iorvi4",
        paddingBottom: "xjkvuk6",
        $$css: !0
    },
    8: {
        paddingTop: "x1y1aw1k",
        paddingBottom: "xwib8y2",
        $$css: !0
    },
    12: {
        paddingTop: "xz9dl7a",
        paddingBottom: "xsag5q8",
        $$css: !0
    },
    16: {
        paddingTop: "xyamay9",
        paddingBottom: "x1l90r2v",
        $$css: !0
    },
    20: {
        paddingTop: "x1cnzs8",
        paddingBottom: "xx6bls6",
        $$css: !0
    }
};

const marginYMappings: { [key: number]: { [key: string]: string | boolean } } = {
    4: {
        marginTop: "xr9ek0c",
        marginBottom: "xjpr12u",
        $$css: !0
    },
    8: {
        marginTop: "x1gslohp",
        marginBottom: "x12nagc",
        $$css: !0
    },
    12: {
        marginTop: "x1k70j0n",
        marginBottom: "xzueoph",
        $$css: !0
    },
    16: {
        marginTop: "x1xmf6yo",
        marginBottom: "x1e56ztr",
        $$css: !0
    },
    20: {
        marginTop: "x1anpbxc",
        marginBottom: "xyorhqc",
        $$css: !0
    },
    24: {
        marginTop: "x14vqqas",
        marginBottom: "xod5an3",
        $$css: !0
    },
    32: {
        marginTop: "xw7yly9",
        marginBottom: "x1yztbdb",
        $$css: !0
    },
    40: {
        marginTop: "x1sy10c2",
        marginBottom: "xieb3on",
        $$css: !0
    }
};

const justifyContentMappings = {
    bottom: {
        justifyContent: "x13a6bvl",
        $$css: !0
    },
    center: {
        justifyContent: "xl56j7k",
        $$css: !0
    },
    "space-between": {
        justifyContent: "x1qughib",
        $$css: !0
    }
}

const alignItemsMappings = {
    center: {
        alignItems: "x6s0dn4",
        $$css: !0
    },
    end: {
        alignItems: "xuk3077",
        $$css: !0
    },
    start: {
        alignItems: "x1cy8zhl",
        $$css: !0
    }
}


const marginXMappings: { [key: number]: { [key: string]: string | boolean } } = {
    4: {
        marginStart: "xsgj6o6",
        marginEnd: "xw3qccf",
        $$css: !0
    },
    8: {
        marginStart: "x1i64zmx",
        marginEnd: "x1emribx",
        $$css: !0
    },
    12: {
        marginStart: "x16n37ib",
        marginEnd: "xq8finb",
        $$css: !0
    },
    16: {
        marginStart: "x1d52u69",
        marginEnd: "xktsk01",
        $$css: !0
    },
    20: {
        marginStart: "xmn8rco",
        marginEnd: "x1h5jrl4",
        $$css: !0
    }
};

const MDSColumnItem = forwardRef((
  props: MDSColumnItemProps,
  ref: React.Ref<any>
) => {
  const columnContext = useContext(MDSColumnContext) || {};
  const {
    align = columnContext.align || 'stretch',
    children,
    expanding = false,
    fallback,
    paddingHorizontal = columnContext.paddingHorizontal || 0,
    paddingTop,
    paddingVertical = 0,
    placeholder,
    verticalAlign = 'top',
    xstyle,
    ...rest
  } = props;

  const isFirst = useContext(MDSColumnItemContext).isFirst;
  const isLast = useContext(MDSColumnItemContext).isLast;

  const rootStyle = [
    styles.root,
    expanding && [styles.expanding, isIE11OrGreater() && styles.expandingIE11],
    align !== 'stretch' && alignItemsMappings[align],
    verticalAlign !== 'top' && justifyContentMappings[verticalAlign],
    paddingXMappings[paddingHorizontal],
    paddingYMappings[paddingVertical],
    paddingTop != null && paddingTopMappings[paddingTop],
    columnContext.spacing != null && [
      marginXMappings[columnContext.spacing],
      isFirst && styles.firstChildMargin,
      isLast && styles.lastChildMargin,
    ],
    xstyle,
  ];

  const renderedComponent = (
    <React.Fragment>
      {columnContext.hasDividers === true && (
        <BaseView
          role="separator"
          xstyle={[styles.divider, paddingXMappings[paddingHorizontal], isFirst && styles.firstChildDisplay]}
        />
      )}
      <BaseView {...rest} ref={ref} xstyle={rootStyle}>
        {children}
      </BaseView>
    </React.Fragment>
  );

  if (fallback !== undefined) {
    const restProps = {
      align,
      children,
      expanding,
      fallback,
      paddingHorizontal,
      paddingTop,
      paddingVertical,
      placeholder,
      verticalAlign,
      xstyle,
    };
    return fallback ? (
      <CometErrorBoundary>{renderedComponent}</CometErrorBoundary>
    ) : (
      <CometErrorBoundary
        fallback={(error, info) => (
          <MDSColumnItem {...restProps} ref={ref}>
            {typeof fallback === "function"? fallback(error, info): fallback}
          </MDSColumnItem>
        )}
      >
        {renderedComponent}
      </CometErrorBoundary>
    );
  }

  if (placeholder !== undefined) {
    const restProps = {
      align,
      children,
      expanding,
      paddingHorizontal,
      paddingTop,
      paddingVertical,
      placeholder,
      verticalAlign,
      xstyle,
    };
    return (
      <CometPlaceholder
        fallback={placeholder !== null ? <MDSColumnItem {...restProps} ref={ref} /> : null}
      >
        {placeholder}
      </CometPlaceholder>
    );
  }

  return renderedComponent;
})

MDSColumnItem.displayName = 'MDSColumnItem';

export default MDSColumnItem;
