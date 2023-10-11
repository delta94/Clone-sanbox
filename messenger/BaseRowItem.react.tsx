__d("BaseRowItem.react", ["BaseRowContext", "BaseView.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = d("react").useContext
      , j = {
        expanding: {
            flexBasis: "x1r8uery",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            $$css: !0
        },
        expandingWithWrap: {
            flexBasis: "x1l7klhg",
            $$css: !0
        },
        item: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexShrink: "x2lah0s",
            maxWidth: "x193iq5w",
            minWidth: "xeuugli",
            $$css: !0
        },
        item_DEPRECATED: {
            maxWidth: "x193iq5w",
            minWidth: "xeuugli",
            $$css: !0
        }
    }
      , k = {
        1: {
            flexBasis: "x1l7klhg",
            $$css: !0
        },
        2: {
            flexBasis: "x4pfjvb",
            $$css: !0
        },
        3: {
            flexBasis: "x1upgvki",
            $$css: !0
        },
        4: {
            flexBasis: "xhnlq4v",
            $$css: !0
        },
        5: {
            flexBasis: "x15foiic",
            $$css: !0
        },
        6: {
            flexBasis: "xd8mu38",
            $$css: !0
        },
        7: {
            flexBasis: "xjtu8lc",
            $$css: !0
        },
        8: {
            flexBasis: "xvuwby9",
            $$css: !0
        },
        9: {
            flexBasis: "x1m2iiog",
            $$css: !0
        },
        10: {
            flexBasis: "x3cfelu",
            $$css: !0
        }
    }
      , l = {
        bottom: {
            alignSelf: "xpvyfi4",
            $$css: !0
        },
        center: {
            alignSelf: "xamitd3",
            $$css: !0
        },
        stretch: {
            alignSelf: "xkh2ocl",
            $$css: !0
        },
        top: {
            alignSelf: "xqcrz7y",
            $$css: !0
        }
    };
    function a(a, b) {
        var d = a.expanding;
        d = d === void 0 ? !1 : d;
        var e = a.useDeprecatedStyles;
        e = e === void 0 ? !1 : e;
        var f = a.verticalAlign
          , g = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["expanding", "useDeprecatedStyles", "verticalAlign", "xstyle"]);
        var m = i(c("BaseRowContext"))
          , n = m.columns;
        m = m.wrap;
        return h.jsx(c("BaseView.react"), babelHelpers["extends"]({}, a, {
            ref: b,
            xstyle: [e ? j.item_DEPRECATED : j.item, d && j.expanding, d && m !== "none" && j.expandingWithWrap, n > 0 && k[n], f != null && l[f], g]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}
), 98);



import React, { forwardRef, useContext, CSSProperties } from 'react';
import { BaseRowContext } from './BaseRowContext';
import { BaseView } from './BaseView.react';

interface BaseRowItemProps {
  expanding?: boolean;
  useDeprecatedStyles?: boolean;
  verticalAlign?: 'top' | 'bottom' | 'center' | 'stretch';
  xstyle?: CSSProperties;
}

const styles = {
    expanding: {
        flexBasis: "x1r8uery",
        flexGrow: "x1iyjqo2",
        flexShrink: "xs83m0k",
        $$css: !0
    },
    expandingWithWrap: {
        flexBasis: "x1l7klhg",
        $$css: !0
    },
    item: {
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        flexShrink: "x2lah0s",
        maxWidth: "x193iq5w",
        minWidth: "xeuugli",
        $$css: !0
    },
    item_DEPRECATED: {
        maxWidth: "x193iq5w",
        minWidth: "xeuugli",
        $$css: !0
    }
}

const alignStyles = {
  bottom: {
    alignSelf: 'flex-end',
  },
  center: {
    alignSelf: 'center',
  },
  stretch: {
    alignSelf: 'stretch',
  },
  top: {
    alignSelf: 'flex-start',
  },
};

const flexBasisStyles = {
    1: {
        flexBasis: "x1l7klhg",
        $$css: !0
    },
    2: {
        flexBasis: "x4pfjvb",
        $$css: !0
    },
    3: {
        flexBasis: "x1upgvki",
        $$css: !0
    },
    4: {
        flexBasis: "xhnlq4v",
        $$css: !0
    },
    5: {
        flexBasis: "x15foiic",
        $$css: !0
    },
    6: {
        flexBasis: "xd8mu38",
        $$css: !0
    },
    7: {
        flexBasis: "xjtu8lc",
        $$css: !0
    },
    8: {
        flexBasis: "xvuwby9",
        $$css: !0
    },
    9: {
        flexBasis: "x1m2iiog",
        $$css: !0
    },
    10: {
        flexBasis: "x3cfelu",
        $$css: !0
    }
}

function BaseRowItem(
  {
    expanding = false,
    useDeprecatedStyles = false,
    verticalAlign = "stretch",
    xstyle,
    ...rest
  }: BaseRowItemProps,
  ref: React.Ref<HTMLElement>
) {
  const context = useContext(BaseRowContext);
  const { columns, wrap } = context || {};

  return (
    <BaseView
      {...rest}
      ref={ref}
      xstyle={[
        useDeprecatedStyles ? styles.item_DEPRECATED : styles.item,
        expanding && styles.expanding,
        expanding && wrap !== 'none' && styles.expandingWithWrap,
        columns && columns > 0 && flexBasisStyles[columns],
        alignStyles[verticalAlign],
        xstyle,
      ]}
    />
  );
}

export default forwardRef<BaseRowItemProps, HTMLElement>(BaseRowItem);
