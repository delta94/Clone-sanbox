__d(
  "BaseCometTextWithEntities.react",
  [
    "CometSeeMoreExpandingUtils",
    "CometSplitPointForText",
    "CometTextWithEntitiesBase.react",
    "CometTrackingNodeProvider.react",
    "FocusRegion.react",
    "UnicodeUtils",
    "focusScopeQueries",
    "getTextDirectionAttribute",
    "gkx",
    "killswitch",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = i || (i = d("react"));
    b = i;
    var l = b.useCallback,
      m = b.useRef,
      n = b.useState,
      o = 0.6,
      p = 20,
      q = {
        paragraph: {
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          wordWrap: "x1vvkbs",
          $$css: !0,
        },
        paragraphSpaced: { marginTop: "xtlvy1s", $$css: !0 },
        preserveWhiteSpace: { whiteSpace: "x126k92a", $$css: !0 },
      },
      r = {
        auto: { textAlign: "start" },
        center: { textAlign: "center" },
        ltr: { textAlign: "left" },
        rtl: { textAlign: "right" },
      };
    function s(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (
          d != null &&
          d.offset != null &&
          d.length != null &&
          d.entity != null &&
          d.entity.__typename != null
        ) {
          var e;
          b.push({
            entity: d.entity,
            entity_is_weak_reference:
              (e = d.entity_is_weak_reference) != null ? e : null,
            length: d.length,
            offset: d.offset,
          });
        }
      }
      return b;
    }
    function t(a, b, c) {
      return a
        .map(function (a) {
          return babelHelpers["extends"]({}, a, { offset: a.offset - b });
        })
        .filter(function (a) {
          return a.offset >= 0 && a.offset < c;
        });
    }
    function u(a) {
      var b = a.ranges;
      a = a.text;
      var c = 0;
      return a
        .split("\n")
        .map(function (a) {
          var e = t(b, c, (j || (j = d("UnicodeUtils"))).strlen(a));
          c += j.strlen(a) + 1;
          return { ranges: e, text: a };
        })
        .filter(function (a) {
          return a.text.trim() !== "";
        });
    }
    function v(a, b) {
      var c = a.ranges;
      a = a.text;
      var e = 0;
      return a.split(/(?=\n\s*\n)/).map(function (a) {
        var f, g;
        f = (f = a.match(/(^\n\s*\n)?([^]*$)/)) != null ? f : [];
        g = (g = f[1]) != null ? g : "";
        f = (f = f[2]) != null ? f : a;
        g = t(c, e + g.length, (j || (j = d("UnicodeUtils"))).strlen(f));
        e += j.strlen(a);
        return b ? u({ ranges: g, text: f }) : { ranges: g, text: f };
      });
    }
    function a(a) {
      var b = a.maxLength;
      b = b === void 0 ? 800 : b;
      var e = a.maxLines;
      e = e === void 0 ? 8 : e;
      var f = a.ranges;
      f = f === void 0 ? [] : f;
      var g = a.text,
        i = a.truncationFactor_DEPRECATED;
      i = i === void 0 ? o : i;
      var u = a.truncationStyle;
      u = u === void 0 ? "none" : u;
      var w = a.truncationThreshold;
      w = w === void 0 ? p : w;
      var x = a.withLineBreaks;
      x = x === void 0 ? !1 : x;
      var y = a.withParagraphs;
      y = y === void 0 ? !1 : y;
      var z = a.onToggleExpanded,
        A = a.seeMoreFragment,
        B = a.expanded,
        C = a.preserveWhiteSpace,
        D = C === void 0 ? !1 : C,
        E = a.align;
      C = a.maintainExpansionState;
      var F = C === void 0 ? !1 : C,
        G = babelHelpers.objectWithoutPropertiesLoose(a, [
          "maxLength",
          "maxLines",
          "ranges",
          "text",
          "truncationFactor_DEPRECATED",
          "truncationStyle",
          "truncationThreshold",
          "withLineBreaks",
          "withParagraphs",
          "onToggleExpanded",
          "seeMoreFragment",
          "expanded",
          "preserveWhiteSpace",
          "align",
          "maintainExpansionState",
        ]);
      a = n((C = B) != null ? C : !1);
      C = a[0];
      var H = a[1],
        I = B != null ? B : C;
      a = m(-1);
      B = l(
        function () {
          F ||
            H(function (a) {
              return !a;
            }),
            z != null && z();
        },
        [z, F]
      );
      C = s(f);
      f = g;
      if (u !== "none" && !I) {
        u = d("CometSplitPointForText").findSplitPointForText(g, b * i, e, w);
        u != null &&
          ((f = (j || (j = d("UnicodeUtils"))).substring(g, 0, u)),
          (C = t(C, 0, j.strlen(f))),
          (a.current = u));
      }
      var J =
        A != null
          ? k.jsx(c("CometTrackingNodeProvider.react"), {
              trackingNode: 44,
              children: A(I, a.current, B),
            })
          : null;
      if (!y) {
        if (c("gkx")("24279") && I && a != null && a.current != null) {
          b = d(
            "CometSeeMoreExpandingUtils"
          ).getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts(
            C,
            f,
            a.current
          );
          i = b.entitiesBeforeTruncatedOffset;
          e = b.entitiesFromTruncatedOffset;
          w = b.newTruncatedEntityOffset;
          return k.jsxs(k.Fragment, {
            children: [
              k.jsx(
                c("CometTextWithEntitiesBase.react"),
                babelHelpers["extends"](
                  { ranges: i, text: f.substring(0, w) },
                  G
                )
              ),
              k.jsx(d("FocusRegion.react").FocusRegion, {
                autoFocusQuery: d("focusScopeQueries").focusableScopeQuery,
                children: k.jsx(
                  c("CometTextWithEntitiesBase.react"),
                  babelHelpers["extends"](
                    { ranges: e, text: f.substring(w) },
                    G
                  )
                ),
              }),
            ],
          });
        }
        return k.jsxs(k.Fragment, {
          children: [
            k.jsx(
              c("CometTextWithEntitiesBase.react"),
              babelHelpers["extends"]({ ranges: C, text: f }, G)
            ),
            J,
          ],
        });
      }
      var K = v({ ranges: C, text: f }, x);
      c("killswitch")("COMET_MESSAGE_EMPTY_PARAGRAPH_FILTERING") ||
        (K = K.filter(function (a) {
          return !Array.isArray(a) || a.length > 0;
        }));
      g = d(
        "CometSeeMoreExpandingUtils"
      ).filterParagraphsGetTruncatedLinesEntityRangesAndIndex(I, K, a);
      var L = g.filteredEntitiesBeforeTruncatedPosition,
        M = g.filteredEntitiesFromTruncatedPosition,
        N = g.hiddenContentOffset,
        O = g.truncatedLineIndex,
        P = g.truncatedParagraphIndex;
      return k.jsx(k.Fragment, {
        children: K.map(function (a, b) {
          return k.jsx(
            "div",
            {
              className: (h || (h = c("stylex")))(
                q.paragraph,
                b !== 0 && q.paragraphSpaced,
                D && q.preserveWhiteSpace
              ),
              children: Array.isArray(a)
                ? a.map(function (e, f) {
                    var g = e.ranges;
                    e = e.text;
                    var h =
                      E === "center" ? E : c("getTextDirectionAttribute")(e);
                    return k.jsxs(
                      "div",
                      {
                        dir: h,
                        style: r[h],
                        children: [
                          I && P === b && O === f
                            ? k.jsxs(k.Fragment, {
                                children: [
                                  k.jsx(
                                    c("CometTextWithEntitiesBase.react"),
                                    babelHelpers["extends"](
                                      { ranges: L, text: e.substring(0, N) },
                                      G
                                    )
                                  ),
                                  k.jsx(d("FocusRegion.react").FocusRegion, {
                                    autoFocusQuery:
                                      d("focusScopeQueries")
                                        .focusableScopeQuery,
                                    children: k.jsx(
                                      c("CometTextWithEntitiesBase.react"),
                                      babelHelpers["extends"](
                                        { ranges: M, text: e.substring(N) },
                                        G
                                      )
                                    ),
                                  }),
                                ],
                              })
                            : k.jsx(
                                c("CometTextWithEntitiesBase.react"),
                                babelHelpers["extends"](
                                  { ranges: g, text: e },
                                  G
                                )
                              ),
                          b === K.length - 1 && f === a.length - 1 ? J : null,
                        ],
                      },
                      f
                    );
                  })
                : k.jsxs(k.Fragment, {
                    children: [
                      k.jsx(
                        c("CometTextWithEntitiesBase.react"),
                        babelHelpers["extends"](
                          { ranges: a.ranges, text: a.text },
                          G
                        )
                      ),
                      b === K.length - 1 ? J : null,
                    ],
                  }),
            },
            b
          );
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useCallback, useRef, useState } from "react";
import { html } from "react-strict-dom";
import CometSeeMoreExpandingUtils from "CometSeeMoreExpandingUtils";
import CometSplitPointForText from "CometSplitPointForText";
import CometTextWithEntitiesBase from "CometTextWithEntitiesBase.react";
import CometTrackingNodeProvider from "CometTrackingNodeProvider.react";
import FocusRegion from "FocusRegion.react";
import UnicodeUtils from "UnicodeUtils";
import focusScopeQueries from "focusScopeQueries";
import getTextDirectionAttribute from "getTextDirectionAttribute";
import gkx from "gkx";
import killswitch from "killswitch";
import stylex from "stylex";

const DEFAULT_MAX_LENGTH = 800;
const DEFAULT_MAX_LINES = 8;
const DEFAULT_TRUNCATION_FACTOR = 0.6;
const DEFAULT_TRUNCATION_THRESHOLD = 20;

const styles = {
  paragraph: {
    marginTop: "xdj266r",
    marginEnd: "x11i5rnm",
    marginBottom: "xat24cr",
    marginStart: "x1mh8g0r",
    wordWrap: "x1vvkbs",
    $$css: true,
  },
  paragraphSpaced: { marginTop: "xtlvy1s", $$css: true },
  preserveWhiteSpace: { whiteSpace: "x126k92a", $$css: true },
};

const textAlignStyles = {
  auto: { textAlign: "start" },
  center: { textAlign: "center" },
  ltr: { textAlign: "left" },
  rtl: { textAlign: "right" },
};

interface Entity {
  entity: any;
  entity_is_weak_reference: boolean | null;
  length: number;
  offset: number;
}

interface Paragraph {
  ranges: Entity[];
  text: string;
}

interface Props {
  maxLength?: number;
  maxLines?: number;
  ranges?: Entity[];
  text: string;
  truncationFactor_DEPRECATED?: number;
  truncationStyle?: string;
  truncationThreshold?: number;
  withLineBreaks?: boolean;
  withParagraphs?: boolean;
  onToggleExpanded?: () => void;
  seeMoreFragment?: (
    expanded: boolean,
    current: number,
    onClick: () => void
  ) => React.ReactNode;
  expanded?: boolean;
  preserveWhiteSpace?: boolean;
  align?: string;
  maintainExpansionState?: boolean;
  [key: string]: any;
}

const extractEntities = (ranges: Entity[]): Entity[] => {
  return ranges
    .filter(
      (range) =>
        range != null &&
        range.offset != null &&
        range.length != null &&
        range.entity != null &&
        range.entity.__typename != null
    )
    .map((range) => ({
      entity: range.entity,
      entity_is_weak_reference: range.entity_is_weak_reference ?? null,
      length: range.length,
      offset: range.offset,
    }));
};

const adjustEntities = (
  entities: Entity[],
  start: number,
  length: number
): Entity[] => {
  return entities
    .map((entity) => ({
      ...entity,
      offset: entity.offset - start,
    }))
    .filter((entity) => entity.offset >= 0 && entity.offset < length);
};

const splitTextIntoParagraphs = (
  text: string,
  ranges: Entity[]
): Paragraph[] => {
  let currentOffset = 0;
  return text
    .split("\n")
    .map((paragraph) => {
      const paragraphLength = UnicodeUtils.strlen(paragraph);
      const adjustedRanges = adjustEntities(
        ranges,
        currentOffset,
        paragraphLength
      );
      currentOffset += paragraphLength + 1;
      return { ranges: adjustedRanges, text: paragraph };
    })
    .filter((paragraph) => paragraph.text.trim() !== "");
};

const processTextWithLineBreaks = (
  text: string,
  ranges: Entity[],
  withLineBreaks: boolean
): Paragraph[] => {
  let currentOffset = 0;
  return text.split(/(?=\n\s*\n)/).reduce((acc: Paragraph[], block) => {
    const match = block.match(/(^\n\s*\n)?([^]*$)/) || [];
    const prefix = match[1] || "";
    const content = match[2] || block;
    const adjustedRanges = adjustEntities(
      ranges,
      currentOffset + prefix.length,
      UnicodeUtils.strlen(content)
    );
    currentOffset += UnicodeUtils.strlen(block);

    if (withLineBreaks) {
      const paragraphs = splitTextIntoParagraphs(content, adjustedRanges);
      return acc.concat(paragraphs);
    } else {
      acc.push({ ranges: adjustedRanges, text: content });
      return acc;
    }
  }, []);
};

const BaseCometTextWithEntities: React.FC<Props> = ({
  maxLength = DEFAULT_MAX_LENGTH,
  maxLines = DEFAULT_MAX_LINES,
  ranges = [],
  text,
  truncationFactor_DEPRECATED = DEFAULT_TRUNCATION_FACTOR,
  truncationStyle = "none",
  truncationThreshold = DEFAULT_TRUNCATION_THRESHOLD,
  withLineBreaks = false,
  withParagraphs = false,
  onToggleExpanded,
  seeMoreFragment,
  expanded,
  preserveWhiteSpace = false,
  align,
  maintainExpansionState = false,
  ...props
}) => {
  const [isExpanded, setExpanded] = useState(expanded ?? false);
  const splitPointRef = useRef(-1);

  const toggleExpanded = useCallback(() => {
    if (!maintainExpansionState) {
      setExpanded((prev) => !prev);
    }
    onToggleExpanded?.();
  }, [onToggleExpanded, maintainExpansionState]);

  const entityRanges = extractEntities(ranges);
  let displayText = text;
  if (truncationStyle !== "none" && !isExpanded) {
    const splitPoint = CometSplitPointForText.findSplitPointForText(
      text,
      maxLength * truncationFactor_DEPRECATED,
      maxLines,
      truncationThreshold
    );
    if (splitPoint != null) {
      displayText = UnicodeUtils.substring(text, 0, splitPoint);
      const adjustedEntities = adjustEntities(
        entityRanges,
        0,
        UnicodeUtils.strlen(displayText)
      );
      entityRanges.splice(0, entityRanges.length, ...adjustedEntities);
      splitPointRef.current = splitPoint;
    }
  }

  const seeMoreElement = seeMoreFragment ? (
    <CometTrackingNodeProvider trackingNode={44}>
      {seeMoreFragment(isExpanded, splitPointRef.current, toggleExpanded)}
    </CometTrackingNodeProvider>
  ) : null;

  if (!withParagraphs) {
    if (gkx("24279") && isExpanded && splitPointRef.current != null) {
      const {
        entitiesBeforeTruncatedOffset,
        entitiesFromTruncatedOffset,
        newTruncatedEntityOffset,
      } =
        CometSeeMoreExpandingUtils.getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts(
          entityRanges,
          displayText,
          splitPointRef.current
        );
      return (
        <>
          <CometTextWithEntitiesBase
            ranges={entitiesBeforeTruncatedOffset}
            text={displayText.substring(0, newTruncatedEntityOffset)}
            {...props}
          />
          <FocusRegion autoFocusQuery={focusScopeQueries.focusableScopeQuery}>
            <CometTextWithEntitiesBase
              ranges={entitiesFromTruncatedOffset}
              text={displayText.substring(newTruncatedEntityOffset)}
              {...props}
            />
          </FocusRegion>
        </>
      );
    }
    return (
      <>
        <CometTextWithEntitiesBase
          ranges={entityRanges}
          text={displayText}
          {...props}
        />
        {seeMoreElement}
      </>
    );
  }

  const paragraphs = processTextWithLineBreaks(
    displayText,
    entityRanges,
    withLineBreaks
  );
  if (!killswitch("COMET_MESSAGE_EMPTY_PARAGRAPH_FILTERING")) {
    paragraphs.filter(
      (paragraph) => !Array.isArray(paragraph) || paragraph.length > 0
    );
  }

  const {
    filteredEntitiesBeforeTruncatedPosition,
    filteredEntitiesFromTruncatedPosition,
    hiddenContentOffset,
    truncatedLineIndex,
    truncatedParagraphIndex,
  } =
    CometSeeMoreExpandingUtils.filterParagraphsGetTruncatedLinesEntityRangesAndIndex(
      isExpanded,
      paragraphs,
      splitPointRef
    );

  return (
    <>
      {paragraphs.map((paragraph, paragraphIndex) => (
        <div
          key={paragraphIndex}
          className={stylex(
            styles.paragraph,
            paragraphIndex !== 0 && styles.paragraphSpaced,
            preserveWhiteSpace && styles.preserveWhiteSpace
          )}
        >
          {Array.isArray(paragraph) ? (
            paragraph.map((line, lineIndex) => {
              const { ranges, text } = line;
              const direction =
                align === "center" ? align : getTextDirectionAttribute(text);
              return (
                <div
                  key={lineIndex}
                  dir={direction}
                  style={textAlignStyles[direction]}
                >
                  {isExpanded &&
                  truncatedParagraphIndex === paragraphIndex &&
                  truncatedLineIndex === lineIndex ? (
                    <>
                      <CometTextWithEntitiesBase
                        ranges={filteredEntitiesBeforeTruncatedPosition}
                        text={text.substring(0, hiddenContentOffset)}
                        {...props}
                      />
                      <FocusRegion
                        autoFocusQuery={focusScopeQueries.focusableScopeQuery}
                      >
                        <CometTextWithEntitiesBase
                          ranges={filteredEntitiesFromTruncatedPosition}
                          text={text.substring(hiddenContentOffset)}
                          {...props}
                        />
                      </FocusRegion>
                    </>
                  ) : (
                    <CometTextWithEntitiesBase
                      ranges={ranges}
                      text={text}
                      {...props}
                    />
                  )}
                  {paragraphIndex === paragraphs.length - 1 &&
                  lineIndex === paragraph.length - 1
                    ? seeMoreElement
                    : null}
                </div>
              );
            })
          ) : (
            <>
              <CometTextWithEntitiesBase
                ranges={paragraph.ranges}
                text={paragraph.text}
                {...props}
              />
              {paragraphIndex === paragraphs.length - 1 ? seeMoreElement : null}
            </>
          )}
        </div>
      ))}
    </>
  );
};

BaseCometTextWithEntities.displayName = `BaseCometTextWithEntities [from BaseCometTextWithEntities]`;

export default BaseCometTextWithEntities;
