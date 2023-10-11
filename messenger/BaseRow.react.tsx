__d("BaseRow.react", ["BaseRowContext", "BaseView.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = d("react").useMemo
      , j = {
        expanding: {
            flexBasis: "x1r8uery",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            minWidth: "xeuugli",
            $$css: !0
        },
        row: {
            display: "x78zum5",
            flexShrink: "x2lah0s",
            $$css: !0
        }
    }
      , k = {
        center: {
            justifyContent: "xl56j7k",
            $$css: !0
        },
        end: {
            justifyContent: "x13a6bvl",
            $$css: !0
        },
        justify: {
            justifyContent: "x1qughib",
            $$css: !0
        },
        start: {
            justifyContent: "x1nhvcw1",
            $$css: !0
        }
    }
      , l = {
        bottom: {
            alignItems: "xuk3077",
            $$css: !0
        },
        center: {
            alignItems: "x6s0dn4",
            $$css: !0
        },
        stretch: {
            alignItems: "x1qjc9v5",
            $$css: !0
        },
        top: {
            alignItems: "x1cy8zhl",
            $$css: !0
        }
    }
      , m = {
        backward: {
            flexDirection: "x15zctf7",
            $$css: !0
        },
        forward: {
            flexDirection: "x1q0g3np",
            $$css: !0
        }
    }
      , n = {
        backward: {
            flexWrap: "x8hhl5t",
            $$css: !0
        },
        forward: {
            flexWrap: "x1a02dak",
            $$css: !0
        },
        none: {
            flexWrap: "xozqiw3",
            $$css: !0
        }
    }
      , o = {
        end: "start",
        start: "end"
    };
    function a(a, b) {
        var d = a.align;
        d = d === void 0 ? "justify" : d;
        var e = a.children
          , f = a.columns
          , g = f === void 0 ? 0 : f;
        f = a.direction;
        f = f === void 0 ? "forward" : f;
        var p = a.expanding;
        p = p === void 0 ? !1 : p;
        var q = a.verticalAlign;
        q = q === void 0 ? "stretch" : q;
        var r = a.wrap
          , s = r === void 0 ? "none" : r;
        r = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "children", "columns", "direction", "expanding", "verticalAlign", "wrap", "xstyle"]);
        var t = i(function() {
            return {
                columns: g,
                wrap: s
            }
        }, [g, s]);
        return h.jsx(c("BaseView.react"), babelHelpers["extends"]({}, a, {
            ref: b,
            xstyle: [j.row, p && j.expanding, k[f === "backward" && (d === "start" || d === "end") ? o[d] : d], l[q], n[s], m[f], r],
            children: h.jsx(c("BaseRowContext").Provider, {
                value: t,
                children: e
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}
), 98);





import React, { forwardRef, useMemo, ReactNode, CSSProperties } from 'react';
import { BaseRowContext } from './BaseRowContext';
import { BaseView } from './BaseView.react';

interface BaseRowProps {
  align?: 'start' | 'center' | 'justify' | 'end';
  children?: ReactNode;
  columns?: number;
  direction?: 'forward' | 'backward';
  expanding?: boolean;
  verticalAlign?: 'top' | 'bottom' | 'center' | 'stretch';
  wrap?: 'none' | 'forward' | 'backward';
  xstyle?: CSSProperties;
}

const expandingStyles = {
  flexBasis: "auto",
  flexGrow: 1,
  flexShrink: 0,
  minWidth: "0",
};

const rowStyles = {
  display: "flex",
  flexShrink: 0,
};

const alignStyles = {
  center: {
    justifyContent: "center",
  },
  end: {
    justifyContent: "flex-end",
  },
  justify: {
    justifyContent: "space-between",
  },
  start: {
    justifyContent: "flex-start",
  },
};

const verticalAlignStyles = {
  bottom: {
    alignItems: "flex-end",
  },
  center: {
    alignItems: "center",
  },
  stretch: {
    alignItems: "stretch",
  },
  top: {
    alignItems: "flex-start",
  },
};

const directionStyles = {
  backward: {
    flexDirection: "row-reverse",
  },
  forward: {
    flexDirection: "row",
  },
};

const wrapStyles = {
  backward: {
    flexWrap: "wrap-reverse",
  },
  forward: {
    flexWrap: "wrap",
  },
  none: {
    flexWrap: "nowrap",
  },
};

const reverseAlign = {
  end: "start",
  start: "end",
};

function BaseRow(
  {
    align = "justify",
    children,
    columns = 0,
    direction = "forward",
    expanding = false,
    verticalAlign = "stretch",
    wrap = "none",
    xstyle,
  }: BaseRowProps,
  ref: React.Ref<HTMLElement>
) {
  const contextValue = useMemo(() => ({ columns, wrap }), [columns, wrap]);

  return (
    <BaseView
      ref={ref}
      xstyle={[
        rowStyles,
        expanding && expandingStyles,
        direction === "backward" && (align === "start" || align === "end") ? { justifyContent: reverseAlign[align] } : alignStyles[align],
        verticalAlignStyles[verticalAlign],
        wrapStyles[wrap],
        directionStyles[direction],
        xstyle,
      ]}
    >
      <BaseRowContext.Provider value={contextValue}>{children}</BaseRowContext.Provider>
    </BaseView>
  );
}

export default forwardRef<BaseRowProps, HTMLElement>(BaseRow);
