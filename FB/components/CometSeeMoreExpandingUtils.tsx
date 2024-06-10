__d(
  "CometSeeMoreExpandingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      var c = b;
      while (c >= 0) {
        if (a.charAt(c) === " " || a.charAt(c) === "\n") break;
        c -= 1;
      }
      a.charAt(b) !== "\n" ? (c += 1) : (c = b + 1);
      b = a.substring(c);
      a = /\s/;
      b = b.search(a) + c - 1;
      return { truncatedEntityEndIndex: b, truncatedEntityOffset: c };
    }
    function h(a, b, c) {
      var d = [];
      b = g(b, c);
      c = b.truncatedEntityEndIndex;
      b = b.truncatedEntityOffset;
      b = b;
      var e = !1;
      for (
        var a = a,
          f = Array.isArray(a),
          h = 0,
          a = f
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var i;
        if (f) {
          if (h >= a.length) break;
          i = a[h++];
        } else {
          h = a.next();
          if (h.done) break;
          i = h.value;
        }
        i = i;
        var j = i.entity,
          k = i.entity_type,
          l = i.length;
        i = i.offset;
        i != null &&
          l != null &&
          j != null &&
          j.__typename != null &&
          (d.push({ entity: j, entity_type: k, length: l, offset: i }),
          !e && i + l >= c && b >= i && ((b = i), (e = !0)));
      }
      e ||
        d.push({
          entity: { __typename: "SeeMoreTruncation" },
          entity_type: "SEE_MORE_ANCHOR",
          length: 0,
          offset: b,
        });
      return { newEntityRanges: d, newTruncatedEntityOffset: b };
    }
    function i(a, b) {
      var c = [],
        d = [];
      if (b != null)
        for (
          var a = a,
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          var h = g.entity,
            i = g.entity_type,
            j = g.length;
          g = g.offset;
          g != null &&
            j != null &&
            h != null &&
            h.__typename != null &&
            (g < b
              ? (c.push({ entity: h, entity_type: i, length: j, offset: g }),
                g + j > b &&
                  d.push({
                    entity: h,
                    entity_type: i,
                    length: g + j - b,
                    offset: 0,
                  }))
              : d.push({
                  entity: h,
                  entity_type: i,
                  length: j,
                  offset: g - b,
                }));
        }
      return {
        entitiesBeforeTruncatedOffset: c,
        entitiesFromTruncatedOffset: d,
      };
    }
    function j(a, b, c) {
      a = h(a, b, c);
      b = a.newEntityRanges;
      c = a.newTruncatedEntityOffset;
      a = i(b, c);
      b = a.entitiesBeforeTruncatedOffset;
      a = a.entitiesFromTruncatedOffset;
      return {
        entitiesBeforeTruncatedOffset: b,
        entitiesFromTruncatedOffset: a,
        newTruncatedEntityOffset: c,
      };
    }
    function a(a, b, c) {
      var d = [],
        e = [],
        f = -1,
        g = -1,
        h = -1;
      if (!a)
        return {
          filteredEntitiesBeforeTruncatedPosition: d,
          filteredEntitiesFromTruncatedPosition: e,
          hiddenContentOffset: f,
          truncatedLineIndex: g,
          truncatedParagraphIndex: h,
        };
      a = 0;
      var i;
      for (var k = 0; k < b.length; k++) {
        var l = b[k];
        if (Array.isArray(l) && c != null && c.current != null) {
          var m = c.current;
          for (var n = 0; n < l.length; n++) {
            var o = l[n].ranges,
              p = l[n].text,
              q = p.length;
            i = m - a;
            a += q;
            if (h < 0 && i >= 0 && a >= m) {
              h = k;
              g = n;
              i = j(o, p, m - a + q);
              o = i.entitiesBeforeTruncatedOffset;
              p = i.entitiesFromTruncatedOffset;
              q = i.newTruncatedEntityOffset;
              d = o;
              e = p;
              f = q;
              break;
            }
          }
        }
        if (h >= 0 && g >= 0) break;
      }
      return {
        filteredEntitiesBeforeTruncatedPosition: d,
        filteredEntitiesFromTruncatedPosition: e,
        hiddenContentOffset: f,
        truncatedLineIndex: g,
        truncatedParagraphIndex: h,
      };
    }
    f.getTruncatedEntityRangesAfterExpandingSeeMore = h;
    f.splitEntityRangesIntoRegularAndHiddenParts = i;
    f.getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts = j;
    f.filterParagraphsGetTruncatedLinesEntityRangesAndIndex = a;
  },
  66
);

import React from "react";

interface Paragraph {
  ranges: EntityRange[];
  text: string;
}

interface Entity {
  __typename: string;
}

interface EntityRange {
  entity: Entity;
  entity_type: string | null;
  length: number;
  offset: number;
}

interface SplitEntityResult {
  truncatedEntityEndIndex: number;
  truncatedEntityOffset: number;
}

interface TruncatedEntityRanges {
  newEntityRanges: EntityRange[];
  newTruncatedEntityOffset: number;
}

interface EntityParts {
  entitiesBeforeTruncatedOffset: EntityRange[];
  entitiesFromTruncatedOffset: EntityRange[];
}

interface FilteredParagraphsResult {
  filteredEntitiesBeforeTruncatedPosition: EntityRange[];
  filteredEntitiesFromTruncatedPosition: EntityRange[];
  hiddenContentOffset: number;
  truncatedLineIndex: number;
  truncatedParagraphIndex: number;
}

function findSplitPoint(text: string, position: number): SplitEntityResult {
  let splitPosition = position;
  while (splitPosition >= 0) {
    if (
      text.charAt(splitPosition) === " " ||
      text.charAt(splitPosition) === "\n"
    )
      break;
    splitPosition -= 1;
  }
  if (text.charAt(position) !== "\n") {
    splitPosition += 1;
  } else {
    splitPosition = position + 1;
  }
  const substring = text.substring(splitPosition);
  const spaceMatch = substring.search(/\s/);
  const truncatedEntityEndIndex = spaceMatch + splitPosition - 1;
  return { truncatedEntityEndIndex, truncatedEntityOffset: splitPosition };
}

function getTruncatedEntityRangesAfterExpandingSeeMore(
  entityRanges: EntityRange[],
  text: string,
  splitPosition: number
): TruncatedEntityRanges {
  const newEntityRanges: EntityRange[] = [];
  const { truncatedEntityEndIndex, truncatedEntityOffset } = findSplitPoint(
    text,
    splitPosition
  );
  let hasTruncatedEntity = false;
  let updatedOffset = truncatedEntityOffset;

  for (const range of entityRanges) {
    const { entity, entity_type, length, offset } = range;
    if (
      offset != null &&
      length != null &&
      entity != null &&
      entity.__typename != null
    ) {
      newEntityRanges.push({ entity, entity_type, length, offset });
      if (
        !hasTruncatedEntity &&
        offset + length >= truncatedEntityEndIndex &&
        updatedOffset >= offset
      ) {
        updatedOffset = offset;
        hasTruncatedEntity = true;
      }
    }
  }
  if (!hasTruncatedEntity) {
    newEntityRanges.push({
      entity: { __typename: "SeeMoreTruncation" },
      entity_type: "SEE_MORE_ANCHOR",
      length: 0,
      offset: updatedOffset,
    });
  }
  return { newEntityRanges, newTruncatedEntityOffset: updatedOffset };
}

function splitEntityRangesIntoRegularAndHiddenParts(
  entityRanges: EntityRange[],
  splitPosition: number
): EntityParts {
  const entitiesBeforeTruncatedOffset: EntityRange[] = [];
  const entitiesFromTruncatedOffset: EntityRange[] = [];
  if (splitPosition != null) {
    for (const range of entityRanges) {
      const { entity, entity_type, length, offset } = range;
      if (
        offset != null &&
        length != null &&
        entity != null &&
        entity.__typename != null
      ) {
        if (offset < splitPosition) {
          entitiesBeforeTruncatedOffset.push({
            entity,
            entity_type,
            length,
            offset,
          });
          if (offset + length > splitPosition) {
            entitiesFromTruncatedOffset.push({
              entity,
              entity_type,
              length: offset + length - splitPosition,
              offset: 0,
            });
          }
        } else {
          entitiesFromTruncatedOffset.push({
            entity,
            entity_type,
            length,
            offset: offset - splitPosition,
          });
        }
      }
    }
  }
  return {
    entitiesBeforeTruncatedOffset,
    entitiesFromTruncatedOffset,
  };
}

function getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts(
  entityRanges: EntityRange[],
  text: string,
  splitPosition: number
): EntityParts & { newTruncatedEntityOffset: number } {
  const truncatedEntityRanges = getTruncatedEntityRangesAfterExpandingSeeMore(
    entityRanges,
    text,
    splitPosition
  );
  const splitEntities = splitEntityRangesIntoRegularAndHiddenParts(
    truncatedEntityRanges.newEntityRanges,
    truncatedEntityRanges.newTruncatedEntityOffset
  );
  return {
    ...splitEntities,
    newTruncatedEntityOffset: truncatedEntityRanges.newTruncatedEntityOffset,
  };
}

function filterParagraphsGetTruncatedLinesEntityRangesAndIndex(
  isExpanded: boolean,
  paragraphs: (Paragraph | Paragraph[])[],
  splitPositionRef: React.RefObject<number>
): FilteredParagraphsResult {
  let filteredEntitiesBeforeTruncatedPosition: EntityRange[] = [];
  let filteredEntitiesFromTruncatedPosition: EntityRange[] = [];
  let hiddenContentOffset = -1;
  let truncatedLineIndex = -1;
  let truncatedParagraphIndex = -1;

  if (!isExpanded) {
    return {
      filteredEntitiesBeforeTruncatedPosition,
      filteredEntitiesFromTruncatedPosition,
      hiddenContentOffset,
      truncatedLineIndex,
      truncatedParagraphIndex,
    };
  }

  let accumulatedLength = 0;
  let splitPosition: number | null = null;

  if (splitPositionRef.current != null) {
    splitPosition = splitPositionRef.current;
  }

  for (
    let paragraphIndex = 0;
    paragraphIndex < paragraphs.length;
    paragraphIndex++
  ) {
    const paragraph = paragraphs[paragraphIndex];
    if (Array.isArray(paragraph) && splitPosition != null) {
      for (let lineIndex = 0; lineIndex < paragraph.length; lineIndex++) {
        const { ranges, text } = paragraph[lineIndex];
        const lineLength = text.length;
        const remainingLength = splitPosition - accumulatedLength;

        accumulatedLength += lineLength;
        if (
          truncatedParagraphIndex < 0 &&
          remainingLength >= 0 &&
          accumulatedLength >= splitPosition
        ) {
          truncatedParagraphIndex = paragraphIndex;
          truncatedLineIndex = lineIndex;

          const truncatedEntities =
            getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts(
              ranges,
              text,
              remainingLength
            );
          filteredEntitiesBeforeTruncatedPosition =
            truncatedEntities.entitiesBeforeTruncatedOffset;
          filteredEntitiesFromTruncatedPosition =
            truncatedEntities.entitiesFromTruncatedOffset;
          hiddenContentOffset = truncatedEntities.newTruncatedEntityOffset;
          break;
        }
      }
    }
    if (truncatedParagraphIndex >= 0 && truncatedLineIndex >= 0) break;
  }

  return {
    filteredEntitiesBeforeTruncatedPosition,
    filteredEntitiesFromTruncatedPosition,
    hiddenContentOffset,
    truncatedLineIndex,
    truncatedParagraphIndex,
  };
}

export default {
  getTruncatedEntityRangesAfterExpandingSeeMore,
  splitEntityRangesIntoRegularAndHiddenParts,
  getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts,
  filterParagraphsGetTruncatedLinesEntityRangesAndIndex,
};
