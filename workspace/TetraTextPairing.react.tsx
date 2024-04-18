__d("TetraTextPairing.react", ["CometHeadlineWithAddOn.react", "TetraText.react", "getTetraTextHierarchyStyle", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"),
        k = {
            item: {
                marginBottom: "xu06os2",
                marginTop: "x1ok221b",
                $$css: !0
            },
            root: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                marginBottom: "xz62fqu",
                marginTop: "x16ldp7u",
                $$css: !0
            }
        },
        l = {
            1: {
                marginBottom: "x11tup63",
                marginTop: "x16z1lm9",
                $$css: !0
            },
            2: {
                marginBottom: "x4cne27",
                marginTop: "xifccgj",
                $$css: !0
            },
            entityHeader1: {
                marginBottom: "x1wsgfga",
                marginTop: "x9otpla",
                $$css: !0
            },
            entityHeader2: {
                marginBottom: "x1wsgfga",
                marginTop: "x9otpla",
                $$css: !0
            }
        },
        m = {
            1: {
                marginBottom: "xwoyzhm",
                marginTop: "x1rhet7l",
                $$css: !0
            },
            2: {
                marginBottom: "xzueoph",
                marginTop: "x1k70j0n",
                $$css: !0
            },
            entityHeader1: {
                marginBottom: "x1e56ztr",
                marginTop: "x1xmf6yo",
                $$css: !0
            },
            entityHeader2: {
                marginBottom: "x1e56ztr",
                marginTop: "x1xmf6yo",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.body,
            d = a.bodyColor;
        d = d === void 0 ? "primary" : d;
        var e = a.bodyLineLimit,
            f = a.bodyRef,
            g = a.bodyTruncationTooltip,
            i = a.dir;
        i = i === void 0 ? "auto" : i;
        var n = a.headline,
            o = a.headlineAddOn,
            p = a.headlineColor;
        p = p === void 0 ? "primary" : p;
        var q = a.headlineLineLimit,
            r = a.headlineRef,
            s = a.headlineTruncationTooltip,
            t = a.isPrimaryHeading,
            u = a.isSemanticHeading,
            v = a.level,
            w = a.meta,
            x = a.metaColor;
        x = x === void 0 ? "secondary" : x;
        var y = a.metaLineLimit,
            z = a.metaLocation;
        z = z === void 0 ? "below" : z;
        var A = a.metaRef,
            B = a.metaTestID;
        B = a.metaTruncationTooltip;
        var C = a.reduceEmphasis;
        C = C === void 0 ? !1 : C;
        var D = a.testid;
        D = a.textAlign;
        a = D === void 0 ? "start" : D;
        D = c("getTetraTextHierarchyStyle")(v, C);
        C = D.bodyType;
        var E = D.headlineType;
        D = D.metaType;
        var F = (h || (h = c("stylex")))(k.item, m[v]);
        o = n != null && j.jsx("div", {
            className: F,
            children: o != null ? j.jsx(c("CometHeadlineWithAddOn.react"), {
                addOn: o,
                color: p,
                headlineRef: r,
                isPrimaryHeading: t,
                isSemanticHeading: u,
                numberOfLines: q,
                truncationTooltip: s,
                type: E,
                children: n
            }) : j.jsx(c("TetraText.react"), {
                align: a,
                color: p,
                dir: i,
                isPrimaryHeading: t,
                isSemanticHeading: u,
                numberOfLines: q,
                ref: r,
                truncationTooltip: s,
                type: E,
                children: n
            })
        });
        p = w != null && j.jsx("div", {
            className: F,
            children: j.jsx(c("TetraText.react"), {
                align: a,
                color: x,
                dir: i,
                isSemanticHeading: !1,
                numberOfLines: y,
                ref: A,
                testid: void 0,
                truncationTooltip: B,
                type: D,
                children: w
            })
        });
        return j.jsxs("div", {
            className: h(k.root, l[v]),
            "data-testid": void 0,
            children: [z === "above" && p, o, b != null && j.jsx("div", {
                className: F,
                children: j.jsx(c("TetraText.react"), {
                    align: a,
                    color: d,
                    dir: i,
                    isSemanticHeading: !1,
                    numberOfLines: e,
                    ref: f,
                    truncationTooltip: g,
                    type: C,
                    children: b
                })
            }), z === "below" && p]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);



import React from 'react';
import { stylex, css } from '@anthropic/stylex';
import { TetraText } from './TetraText';
import { CometHeadlineWithAddOn } from './CometHeadlineWithAddOn'; 
import { getTetraTextHierarchyStyle } from './getTetraTextHierarchyStyle';

export interface TetraTextPairingProps {
  body?: React.ReactNode;
  bodyColor?: 'primary' | 'secondary';
  bodyLineLimit?: number;
  bodyRef?: React.RefObject<HTMLSpanElement>;
  bodyTruncationTooltip?: React.ReactNode;
  dir?: 'auto' | 'ltr' | 'rtl';
  headline?: React.ReactNode;
  headlineAddOn?: React.ReactNode;
  headlineColor?: 'primary' | 'secondary';
  headlineLineLimit?: number;
  headlineRef?: React.RefObject<HTMLHeadingElement>;
  headlineTruncationTooltip?: React.ReactNode;
  isPrimaryHeading?: boolean;
  isSemanticHeading?: boolean;
  level: 1 | 2;
  meta?: React.ReactNode
  metaColor?: 'primary' | 'secondary';
  metaLineLimit?: number;
  metaLocation?: 'above' | 'below';
  metaRef?: React.RefObject<HTMLSpanElement>;
  metaTruncationTooltip?: React.ReactNode;
  reduceEmphasis?: boolean;
  textAlign?: 'start' | 'end' | 'center' | 'justify';
}

const cssStyles = {
  item: {
    marginBottom: '8px', 
    marginTop: '4px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '8px',
    marginTop: '4px',
  }
};

const levelStyles = {
  1: {
    marginBottom: '12px',
    marginTop: '4px',
  },
  2: {
    marginBottom: '8px',
    marginTop: '4px',
  },
  entityHeader1: {
    marginBottom: '20px',
    marginTop: '12px',
  },
  entityHeader2: {
    marginBottom: '20px',
    marginTop: '12px',
  }
};

const condensedLevelStyles = {
    1: {
        marginBottom: "xwoyzhm",
        marginTop: "x1rhet7l",
        $$css: !0
    },
    2: {
        marginBottom: "xzueoph",
        marginTop: "x1k70j0n",
        $$css: !0
    },
    entityHeader1: {
        marginBottom: "x1e56ztr",
        marginTop: "x1xmf6yo",
        $$css: !0
    },
    entityHeader2: {
        marginBottom: "x1e56ztr",
        marginTop: "x1xmf6yo",
        $$css: !0
    }
};

export default function TetraTextPairing({
  body,
  bodyColor = 'primary',
  bodyLineLimit,
  bodyRef,
  bodyTruncationTooltip,
  dir = 'auto',
  headline,
  headlineAddOn,
  headlineColor = 'primary',
  headlineLineLimit,
  headlineRef,
  headlineTruncationTooltip,
  isPrimaryHeading,
  isSemanticHeading,
  level,
  meta,
  metaColor = 'secondary',
  metaLineLimit,
  metaLocation = 'below',
  metaRef,
  metaTruncationTooltip,
  reduceEmphasis = false,
  textAlign = 'start',
}: TetraTextPairingProps) {

  const { bodyType, headlineType, metaType } = getTetraTextHierarchyStyle(level, reduceEmphasis);

  const itemStyles = css(cssStyles.item, condensedLevelStyles[level]);
  
  let headlineContent = null;
  if (headline) {
    headlineContent = (
      <div className={itemStyles}>
        {headlineAddOn ? (
          <CometHeadlineWithAddOn
            addOn={headlineAddOn}
            color={headlineColor}
            headlineRef={headlineRef}
            isPrimaryHeading={isPrimaryHeading}
            isSemanticHeading={isSemanticHeading}
            numberOfLines={headlineLineLimit}
            truncationTooltip={headlineTruncationTooltip}
            type={headlineType}
          >
            {headline}
          </CometHeadlineWithAddOn>
        ) : (
          <TetraText
            align={textAlign}
            color={headlineColor}
            dir={dir}
            isPrimaryHeading={isPrimaryHeading}
            isSemanticHeading={isSemanticHeading}
            numberOfLines={headlineLineLimit}
            ref={headlineRef}
            truncationTooltip={headlineTruncationTooltip}
            type={headlineType}
          >
            {headline}
          </TetraText>
        )}
      </div>
    );
  }

  let metaContent = null;
  if (meta) {
    metaContent = (
      <div className={itemStyles}>
        <TetraText
          align={textAlign}
          color={metaColor}
          dir={dir}
          isSemanticHeading={false}
          numberOfLines={metaLineLimit}
          ref={metaRef}
          truncationTooltip={metaTruncationTooltip}
          type={metaType}
        >
          {meta}
        </TetraText>
      </div>
    );
  }

  return (
    <div 
      className={css(cssStyles.root, levelStyles[level])}
      data-testid={undefined}
    >
      {metaLocation === 'above' && metaContent}
      {headlineContent}
      {body && (
        <div className={itemStyles}>
          <TetraText
            align={textAlign}
            color={bodyColor}
            dir={dir}
            isSemanticHeading={false}
            numberOfLines={bodyLineLimit}
            ref={bodyRef}
            truncationTooltip={bodyTruncationTooltip}
            type={bodyType}
          >
            {body}
          </TetraText>
        </div>
      )}
      {metaLocation === 'below' && metaContent}
    </div>
  );
}