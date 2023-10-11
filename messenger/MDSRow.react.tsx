__d("MDSRow.react", ["BaseRow.react", "MDSColumnContext", "MDSColumnItem.react", "MDSRowContext", "MDSRowItem.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext
      , j = b.useMemo
      , k = {
        4: {
            paddingEnd: "x150jy0e",
            paddingStart: "x1e558r4",
            $$css: !0
        },
        8: {
            paddingEnd: "x1sxyh0",
            paddingStart: "xurb0ha",
            $$css: !0
        },
        10: {
            paddingEnd: "x1iji9kk",
            paddingStart: "x1sln4lm",
            $$css: !0
        },
        12: {
            paddingEnd: "xn6708d",
            paddingStart: "x1ye3gou",
            $$css: !0
        },
        16: {
            paddingEnd: "x1pi30zi",
            paddingStart: "x1swvt13",
            $$css: !0
        }
    }
      , l = {
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
        10: {
            paddingTop: "x889kno",
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
        }
    }
      , m = {
        4: {
            paddingBottom: "xjkvuk6",
            paddingTop: "x1iorvi4",
            $$css: !0
        },
        8: {
            paddingBottom: "xwib8y2",
            paddingTop: "x1y1aw1k",
            $$css: !0
        },
        10: {
            paddingBottom: "x1a8lsjc",
            paddingTop: "x889kno",
            $$css: !0
        },
        12: {
            paddingBottom: "xsag5q8",
            paddingTop: "xz9dl7a",
            $$css: !0
        },
        16: {
            paddingBottom: "x1l90r2v",
            paddingTop: "xyamay9",
            $$css: !0
        },
        20: {
            paddingBottom: "xx6bls6",
            paddingTop: "x1cnzs8",
            $$css: !0
        }
    }
      , n = {
        4: {
            marginEnd: "xwrv7xz",
            marginStart: "x8182xy",
            $$css: !0
        },
        8: {
            marginEnd: "xcud41i",
            marginStart: "x139jcc6",
            $$css: !0
        },
        10: {
            marginEnd: "x6zhf5e",
            marginStart: "xrzrlj5",
            $$css: !0
        },
        12: {
            marginEnd: "xykv574",
            marginStart: "xbmpl8g",
            $$css: !0
        },
        16: {
            marginEnd: "x1n0m28w",
            marginStart: "xp7jhwk",
            $$css: !0
        },
        24: {
            marginEnd: "x12rz0ws",
            marginStart: "x16hk5td",
            $$css: !0
        },
        32: {
            marginEnd: "x19f6ikt",
            marginStart: "x169t7cy",
            $$css: !0
        }
    }
      , o = {
        4: {
            marginBottom: "xmgb6t1",
            marginTop: "x1kgmq87",
            $$css: !0
        },
        8: {
            marginBottom: "x4vbgl9",
            marginTop: "x1rdy4ex",
            $$css: !0
        },
        10: {
            marginBottom: "xz62fqu",
            marginTop: "x16ldp7u",
            $$css: !0
        },
        12: {
            marginBottom: "x4cne27",
            marginTop: "xifccgj",
            $$css: !0
        },
        16: {
            marginBottom: "x1wsgfga",
            marginTop: "x9otpla",
            $$css: !0
        },
        24: {
            marginBottom: "xh3wvx0",
            marginTop: "x7wgvq7",
            $$css: !0
        },
        32: {
            marginBottom: "x1oo3vh0",
            marginTop: "xwya9rg",
            $$css: !0
        }
    };
    function a(a, b) {
        var d = i(c("MDSColumnContext"))
          , e = i(c("MDSRowContext"))
          , f = (d == null ? void 0 : d.paddingHorizontal) != null ? 0 : 12
          , g = (d == null ? void 0 : d.spacing) != null ? 0 : 16
          , p = a.children
          , q = a.paddingHorizontal;
        f = q === void 0 ? f : q;
        q = a.paddingVertical;
        q = q === void 0 ? 0 : q;
        var r = a.paddingTop;
        g = r === void 0 ? a.paddingVertical == null ? g : null : r;
        r = a.spacing;
        r = r === void 0 ? 12 : r;
        var s = a.spacingHorizontal
          , t = s === void 0 ? r : s;
        s = a.spacingVertical;
        var u = s === void 0 ? r : s;
        r = a.xstyle;
        s = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "paddingHorizontal", "paddingVertical", "paddingTop", "spacing", "spacingHorizontal", "spacingVertical", "xstyle"]);
        a = j(function() {
            return {
                spacingHorizontal: t,
                spacingVertical: u
            }
        }, [t, u]);
        b = h.jsx(c("BaseRow.react"), babelHelpers["extends"]({}, s, {
            ref: b,
            xstyle: [k[f], m[q], g != null && l[g], n[t], o[u], r],
            children: h.jsx(c("MDSRowContext").Provider, {
                value: a,
                children: p
            })
        }));
        if (e != null)
            return h.jsx(c("MDSRowItem.react"), {
                expanding: s.expanding,
                children: b
            });
        return d != null ? h.jsx(c("MDSColumnItem.react"), {
            expanding: s.expanding,
            children: b
        }) : b
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    d = e;
    g["default"] = d
}
), 98);




import React, { useContext, useMemo, forwardRef } from 'react';
import { MDSColumnContext } from './MDSColumnContext'; // Replace with your actual import paths
import { MDSRowContext } from './MDSRowContext'; // Replace with your actual import paths
import BaseRow from './BaseRow'; // Replace with your actual import paths
import MDSColumnItem from './MDSColumnItem'; // Replace with your actual import paths
import MDSRowItem from './MDSRowItem'; // Replace with your actual import paths

const paddingValues = {
    4: {
        paddingEnd: "x150jy0e",
        paddingStart: "x1e558r4",
        $$css: !0
    },
    8: {
        paddingEnd: "x1sxyh0",
        paddingStart: "xurb0ha",
        $$css: !0
    },
    10: {
        paddingEnd: "x1iji9kk",
        paddingStart: "x1sln4lm",
        $$css: !0
    },
    12: {
        paddingEnd: "xn6708d",
        paddingStart: "x1ye3gou",
        $$css: !0
    },
    16: {
        paddingEnd: "x1pi30zi",
        paddingStart: "x1swvt13",
        $$css: !0
    }
};

const paddingTopValues = {
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
    10: {
        paddingTop: "x889kno",
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
    }
};

const paddingBottomValues = {
    4: {
        paddingBottom: "xjkvuk6",
        paddingTop: "x1iorvi4",
        $$css: !0
    },
    8: {
        paddingBottom: "xwib8y2",
        paddingTop: "x1y1aw1k",
        $$css: !0
    },
    10: {
        paddingBottom: "x1a8lsjc",
        paddingTop: "x889kno",
        $$css: !0
    },
    12: {
        paddingBottom: "xsag5q8",
        paddingTop: "xz9dl7a",
        $$css: !0
    },
    16: {
        paddingBottom: "x1l90r2v",
        paddingTop: "xyamay9",
        $$css: !0
    },
    20: {
        paddingBottom: "xx6bls6",
        paddingTop: "x1cnzs8",
        $$css: !0
    }
};

const marginValues = {
    4: {
        marginEnd: "xwrv7xz",
        marginStart: "x8182xy",
        $$css: !0
    },
    8: {
        marginEnd: "xcud41i",
        marginStart: "x139jcc6",
        $$css: !0
    },
    10: {
        marginEnd: "x6zhf5e",
        marginStart: "xrzrlj5",
        $$css: !0
    },
    12: {
        marginEnd: "xykv574",
        marginStart: "xbmpl8g",
        $$css: !0
    },
    16: {
        marginEnd: "x1n0m28w",
        marginStart: "xp7jhwk",
        $$css: !0
    },
    24: {
        marginEnd: "x12rz0ws",
        marginStart: "x16hk5td",
        $$css: !0
    },
    32: {
        marginEnd: "x19f6ikt",
        marginStart: "x169t7cy",
        $$css: !0
    }
};

const marginVerticalValues = {
    4: {
        marginBottom: "xmgb6t1",
        marginTop: "x1kgmq87",
        $$css: !0
    },
    8: {
        marginBottom: "x4vbgl9",
        marginTop: "x1rdy4ex",
        $$css: !0
    },
    10: {
        marginBottom: "xz62fqu",
        marginTop: "x16ldp7u",
        $$css: !0
    },
    12: {
        marginBottom: "x4cne27",
        marginTop: "xifccgj",
        $$css: !0
    },
    16: {
        marginBottom: "x1wsgfga",
        marginTop: "x9otpla",
        $$css: !0
    },
    24: {
        marginBottom: "xh3wvx0",
        marginTop: "x7wgvq7",
        $$css: !0
    },
    32: {
        marginBottom: "x1oo3vh0",
        marginTop: "xwya9rg",
        $$css: !0
    }
};

function MDSRow(props, ref) {
  const columnContext = useContext(MDSColumnContext);
  const rowContext = useContext(MDSRowContext);

  let _paddingHorizontal = columnContext?.paddingHorizontal !== undefined ? 0 : 12;
  let _spacing = columnContext?.spacing !== undefined ? 0 : 16;

  const {
        children,
        paddingHorizontal = _paddingHorizontal,
        paddingVertical = 0,
        paddingTop = ( paddingVertical ? _spacing : null),
        spacing = 12,
        spacingHorizontal = _spacing,
        spacingVertical = _spacing,
        ...rest
  } = props;

  const xstyle = [
    paddingValues[paddingHorizontal],
    paddingBottomValues[paddingVertical],
    paddingTopValues[paddingTop],
    marginValues[spacingHorizontal],
    marginVerticalValues[spacingVertical],
    props.xstyle,
  ];

  const rowContextValue = useMemo(() => {
    return {
      spacingHorizontal: spacingHorizontal,
      spacingVertical: spacingVertical,
    };
  }, [spacingHorizontal, spacingVertical]);

  const rowElement = (
    <BaseRow {...rest} ref={ref} xstyle={xstyle}>
      <MDSRowContext.Provider value={rowContextValue}>
        {children}
      </MDSRowContext.Provider>
    </BaseRow>
  );

  if (rowContext != null) {
    return <MDSRowItem expanding={rest.expanding}>{rowElement}</MDSRowItem>;
  }

  return columnContext != null ? (
    <MDSColumnItem expanding={rest.expanding}>{rowElement}</MDSColumnItem>
  ) : (
    rowElement
  );
}

MDSRow.displayName = `${MDSRow.name} [from ${'your_module_id'}]`;

export default forwardRef(MDSRow);
