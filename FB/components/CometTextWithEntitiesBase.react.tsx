__d(
  "CometTextWithEntitiesBase.react",
  ["UnicodeUtils", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h || d("react"),
      k = j.Fragment;
    function l(a) {
      return Array.from(a).sort(function (a, b) {
        return a.offset - b.offset || b.length - a.length;
      });
    }
    function m(a, b) {
      return b != null
        ? b.reduce(function (a, b) {
            return b(a);
          }, a)
        : a;
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a, b, c, d, e, f, g, h, i) {
      var l = a.__typename;
      h = Object.prototype.hasOwnProperty.call(h, l) ? h[l].concat(i) : i;
      return j.jsx(
        k,
        {
          children:
            h && h.length > 0
              ? h.reduce(function (d, f) {
                  return f(d, a, c, e, b);
                }, f)
              : d,
        },
        g
      );
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a, b, c, e, f, g, h, l, o, p, q, r) {
      a = (i || (i = d("UnicodeUtils"))).substr(a, b, c - b);
      c = o.length;
      a.length > 0 &&
        l.push(j.jsx(k, { children: m(a, p) }, "c" + b + "_" + c + "_" + r));
      p = o.pop();
      o[o.length - 1].subElements.push(
        n(e, f, g, l, a, l, b + "_" + c + "_" + r, h, q)
      );
      return p;
    }
    function a(a) {
      var b = a.ranges;
      b = b === void 0 ? [] : b;
      var e = a.renderers,
        f = a.transforms,
        g = f === void 0 ? [] : f,
        h = a.text;
      f = a.disableRangeSort;
      a = f === void 0 ? !1 : f;
      var p = (f = e) != null ? f : {},
        q = 0,
        r =
          (e = Object.prototype.hasOwnProperty.call(p, "*") ? p["*"] : []) !=
          null
            ? e
            : [];
      f = a ? b : l(b);
      var s = [
        {
          entity: { __typename: "" },
          entity_is_weak_reference: !1,
          entityType: "",
          length: h.length,
          offset: 0,
          subElements: [],
        },
      ];
      if (!c("gkx")("24280"))
        for (e = 0; e < f.length; ++e) {
          a = f[e];
          b = a.entity;
          var t = a.entity_is_weak_reference,
            u = a.entity_type,
            v = a.length;
          a = a.offset;
          if (q >= h.length || a > h.length) break;
          var w = s[s.length - 1],
            x = w.entity,
            y = w.entity_is_weak_reference,
            z = w.entityType,
            A = w.length,
            B = w.offset;
          w = w.subElements;
          var C = B + A;
          while (C <= a && s.length > 1) {
            o(h, q, C, x, y, z, p, w, s, g, r, e);
            q = C;
            var D = s[s.length - 1];
            x = D.entity;
            y = D.entity_is_weak_reference;
            z = D.entityType;
            A = D.length;
            B = D.offset;
            w = D.subElements;
            C = B + A;
          }
          q < a &&
            (s[s.length - 1].subElements.push(
              j.jsx(
                k,
                {
                  children: m(
                    (i || (i = d("UnicodeUtils"))).substr(h, q, a - q),
                    g
                  ),
                },
                "c" + q + "_" + s.length
              )
            ),
            (q = a));
          if (B <= a && C >= a + v) {
            s.push({
              entity: b,
              entity_is_weak_reference: (D = t) != null ? D : null,
              entityType: (C = u) != null ? C : null,
              length: v,
              offset: a,
              subElements: [],
            });
          } else {
            var E;
            D = (i || (i = d("UnicodeUtils"))).substr(h, a, v);
            C = m(D, g);
            s[s.length - 1].subElements.push(
              n(
                b,
                (E = t) != null ? E : null,
                (E = u) != null ? E : null,
                D,
                D,
                C,
                q + "_" + s.length,
                p,
                r
              )
            );
            q = a + v;
          }
        }
      else {
        var F = [];
        f.forEach(function (a) {
          F.push({ index: a.offset, range: a, type: "start" }),
            F.push({ index: a.offset + a.length, range: a, type: "end" });
        });
        F.sort(function (a, b) {
          if (a.index !== b.index) return a.index - b.index;
          if (a.range.length === 0 && b.range.length !== 0) return 1;
          else if (a.range.length !== 0 && b.range.length === 0) return -1;
          if (a.type !== b.type)
            return a.range === b.range
              ? b.type === "start"
                ? 1
                : -1
              : b.type === "end"
              ? 1
              : -1;
          else if (a.type === "start") return b.range.length - a.range.length;
          else return a.range.length - b.range.length;
        });
        var G = 0;
        while (G < F.length) {
          var H = F[G];
          if (q >= h.length || H.index > h.length) break;
          if (H.type === "start") {
            if (H.index > q) {
              E = (i || (i = d("UnicodeUtils"))).substr(h, q, H.index - q);
              s[s.length - 1].subElements.push(
                j.jsx(k, { children: m(E, g) }, "c" + q + "_" + s.length)
              );
            }
            D = H.range;
            b = D.entity;
            var t = D.entity_is_weak_reference,
              u = D.entity_type,
              v = D.length;
            a = D.offset;
            s.push({
              entity: b,
              entity_is_weak_reference: (C = t) != null ? C : null,
              entityType: (e = u) != null ? e : null,
              length: v,
              offset: a,
              subElements: [],
            });
            G++;
            q = H.index;
          } else {
            var I = new Set();
            f = F[G];
            E = function () {
              var d = F[G];
              G++;
              var e = null;
              I.forEach(function (a) {
                a.entity === d.range.entity && (e = a);
              });
              if (e != null) I["delete"](e);
              else if (s.length > 1) {
                var i = s[s.length - 1],
                  a = i.entity,
                  b = i.entity_is_weak_reference,
                  c = i.entityType;
                i = i.subElements;
                var j = o(h, q, H.index, a, b, c, p, i, s, g, r, F.length - G);
                q = H.index;
                while (s.length > 1 && j.entity !== d.range.entity) {
                  I.add(j);
                  var k = s[s.length - 1];
                  a = k.entity;
                  b = k.entity_is_weak_reference;
                  c = k.entityType;
                  i = k.subElements;
                  j = o(h, q, q, a, b, c, p, i, s, g, r, F.length - G);
                }
              }
              f = F[G];
            };
            while (f && f.index === H.index && f.type === "end") E();
            q = H.index;
            D = Array.from(I);
            for (b = D.length - 1; b >= 0; b--) {
              t = D[b];
              s.push({
                entity: t.entity,
                entity_is_weak_reference: t.entity_is_weak_reference,
                entityType: t.entityType,
                length: t.offset + t.length - q,
                offset: q,
                subElements: [],
              });
            }
          }
        }
      }
      while (s.length > 1) {
        C = s[s.length - 1];
        var x = C.entity,
          y = C.entity_is_weak_reference,
          z = C.entityType,
          A = C.length,
          B = C.offset;
        w = C.subElements;
        u = B + A;
        o(h, q, u, x, y, z, p, w, s, g, r, s.length);
        q = u;
      }
      if (q < h.length) {
        e = s[s.length - 1].subElements;
        e.push(
          j.jsx(
            k,
            { children: m((i || (i = d("UnicodeUtils"))).substr(h, q), g) },
            "c" + q
          )
        );
      }
      return j.jsx(j.Fragment, { children: s[s.length - 1].subElements });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import { UnicodeUtils } from "UnicodeUtils";
import { gkx } from "gkx";
import React, { Fragment } from "react";

type Entity = {
  __typename: string;
};

interface Range {
  entity: Entity;
  entity_is_weak_reference: boolean;
  entity_type: string;
  length: number;
  offset: number;
  subElements: React.ReactNode[];
}

interface ExtendsRange extends Omit<Range, "entity_type"> {
  entityType: string;
}

type Renderer = Record<
  string,
  ((
    node: React.ReactNode,
    entity: Entity,
    entityType: string | null,
    text: string,
    originalText: string
  ) => React.ReactNode)[]
>;

type Transform = (text: string) => string;

interface CometTextWithEntitiesBaseProps {
  ranges?: ExtendsRange[];
  renderers?: Renderer;
  transforms?: Transform[];
  text: string;
  disableRangeSort?: boolean;
}

function sortRanges(ranges: Range[]): Range[] {
  return Array.from(ranges).sort(
    (a, b) => a.offset - b.offset || b.length - a.length
  );
}

function applyTransforms(text: string, transforms: Transform[]): string {
  return transforms != null
    ? transforms.reduce((text, transform) => transform(text), text)
    : text;
}

applyTransforms.displayName = `${applyTransforms.name} [from applyTransforms]`;

function renderEntity(
  entity: Entity,
  entityIsWeakReference: boolean,
  entityType: string | null,
  subElements: React.ReactNode[],
  originalText: string,
  transformed: any,
  key: string,
  renderers: Renderer[],
  transformFns: Transform
): React.ReactNode {
  const typename = entity.__typename;
  const rendererFns = Object.prototype.hasOwnProperty.call(renderers, typename)
    ? renderers[typename].concat(transformFns)
    : transformFns;

  return (
    <Fragment key={key}>
      {rendererFns && rendererFns.length > 0
        ? rendererFns.reduce(
            (children, fn) =>
              fn(
                children,
                entity,
                entityType,
                originalText,
                entityIsWeakReference
              ),
            transformed
          )
        : subElements}
    </Fragment>
  );
}

renderEntity.displayName = `${renderEntity.name} [from renderEntity}]`;

function processSubElements(
  text: string,
  start: number,
  end: number,
  entity: Entity,
  entityIsWeakReference: boolean,
  entityType: string | null,
  renderers: Renderer[],
  subElements: React.ReactNode[],
  stack: ExtendsRange[],
  transformFns: Transform[],
  globalTransforms: Transform,
  index: number
): ExtendsRange {
  const substr = UnicodeUtils.substr(text, start, end - start);
  const subElementsLength = stack.length;

  if (substr.length > 0) {
    subElements.push(
      <Fragment key={`c${start}_${subElementsLength}_${index}`}>
        {applyTransforms(substr, transformFns)}
      </Fragment>
    );
  }

  const lastElement = stack.pop();
  stack[stack.length - 1].subElements.push(
    renderEntity(
      entity,
      entityIsWeakReference,
      entityType,
      subElements,
      substr,
      subElements,
      `${start}_${subElementsLength}_${index}`,
      renderers,
      globalTransforms
    )
  );

  return lastElement!;
}

const CometTextWithEntitiesBase: React.FC<CometTextWithEntitiesBaseProps> = ({
  ranges = [],
  renderers,
  transforms = [],
  text,
  disableRangeSort = false,
}) => {
  const sortedRenderers = renderers ?? {};
  let currentOffset = 0;
  const defaultRenderers = Object.prototype.hasOwnProperty.call(
    sortedRenderers,
    "*"
  )
    ? sortedRenderers["*"]
    : [];
  const sortedRanges = disableRangeSort ? ranges : sortRanges(ranges);

  const stack: ExtendsRange[] = [
    {
      entity: { __typename: "" },
      entity_is_weak_reference: false,
      entityType: "",
      length: text.length,
      offset: 0,
      subElements: [],
    },
  ];

  if (!gkx("24280")) {
    for (let i = 0; i < sortedRanges.length; ++i) {
      const range = sortedRanges[i];
      const { entity, entity_is_weak_reference, entity_type, length, offset } =
        range;

      if (currentOffset >= text.length || offset > text.length) break;

      let currentRange = stack[stack.length - 1];
      let {
        entity: currentEntity,
        entity_is_weak_reference: currentEntityIsWeakReference,
        entityType: currentEntityType,
        length: currentLength,
        offset: currentOffsetInRange,
        subElements: currentSubElements,
      } = currentRange;
      let currentRangeEnd = currentOffsetInRange + currentLength;

      while (currentRangeEnd <= offset && stack.length > 1) {
        processSubElements(
          text,
          currentOffset,
          currentRangeEnd,
          currentEntity,
          currentEntityIsWeakReference,
          currentEntityType,
          sortedRenderers,
          currentSubElements,
          stack,
          transforms,
          defaultRenderers,
          i
        );
        currentOffset = currentRangeEnd;

        currentRange = stack[stack.length - 1];
        currentEntity = currentRange.entity;
        currentEntityIsWeakReference = currentRange.entity_is_weak_reference;
        currentEntityType = currentRange.entityType;
        currentLength = currentRange.length;
        currentOffsetInRange = currentRange.offset;
        currentSubElements = currentRange.subElements;
        currentRangeEnd = currentOffsetInRange + currentLength;
      }

      if (currentOffset < offset) {
        stack[stack.length - 1].subElements.push(
          <Fragment key={`c${currentOffset}_${stack.length}`}>
            {applyTransforms(
              UnicodeUtils.substr(text, currentOffset, offset - currentOffset),
              transforms
            )}
          </Fragment>
        );
        currentOffset = offset;
      }

      if (
        currentOffsetInRange <= offset &&
        currentRangeEnd >= offset + length
      ) {
        stack.push({
          entity,
          entity_is_weak_reference: entity_is_weak_reference ?? null,
          entityType: entity_type ?? null,
          length,
          offset,
          subElements: [],
        });
      } else {
        const substr = UnicodeUtils.substr(text, offset, length);
        const transformed = applyTransforms(substr, transforms);

        stack[stack.length - 1].subElements.push(
          renderEntity(
            entity,
            entity_is_weak_reference ?? null,
            entity_type ?? null,
            substr,
            substr,
            transformed,
            `${currentOffset}_${stack.length}`,
            sortedRenderers,
            defaultRenderers
          )
        );

        currentOffset = offset + length;
      }
    }
  } else {
    const events = sortedRanges
      .flatMap((range) => [
        { index: range.offset, range, type: "start" },
        { index: range.offset + range.length, range, type: "end" },
      ])
      .sort((a, b) => {
        if (a.index !== b.index) return a.index - b.index;
        if (a.range.length === 0 && b.range.length !== 0) return 1;
        if (a.range.length !== 0 && b.range.length === 0) return -1;
        if (a.type !== b.type)
          return a.range === b.range
            ? b.type === "start"
              ? 1
              : -1
            : b.type === "end"
            ? 1
            : -1;
        return a.type === "start"
          ? b.range.length - a.range.length
          : a.range.length - b.range.length;
      });

    let eventIndex = 0;

    while (eventIndex < events.length) {
      const event = events[eventIndex];

      if (currentOffset >= text.length || event.index > text.length) break;

      if (event.type === "start") {
        if (event.index > currentOffset) {
          const substr = UnicodeUtils.substr(
            text,
            currentOffset,
            event.index - currentOffset
          );
          stack[stack.length - 1].subElements.push(
            <Fragment key={`c${currentOffset}_${stack.length}`}>
              {applyTransforms(substr, transforms)}
            </Fragment>
          );
        }

        stack.push({
          entity: event.range.entity,
          entity_is_weak_reference:
            event.range.entity_is_weak_reference ?? null,
          entityType: event.range.entity_type ?? null,
          length: event.range.length,
          offset: event.range.offset,
          subElements: [],
        });

        eventIndex++;
        currentOffset = event.index;
      } else {
        const endEventSet = new Set<ExtendsRange>();
        const processEndEvent = () => {
          const currentEvent = events[eventIndex];
          eventIndex++;

          let matchedRange: ExtendsRange | null = null;
          endEventSet.forEach((range) => {
            if (range.entity === currentEvent.range.entity) {
              matchedRange = range;
            }
          });

          if (matchedRange) {
            endEventSet.delete(matchedRange);
          } else if (stack.length > 1) {
            let rangeToProcess = stack[stack.length - 1];
            const {
              entity,
              entity_is_weak_reference,
              entityType,
              subElements,
            } = rangeToProcess;

            rangeToProcess = processSubElements(
              text,
              currentOffset,
              event.index,
              entity,
              entity_is_weak_reference,
              entityType,
              sortedRenderers,
              subElements,
              stack,
              transforms,
              defaultRenderers,
              events.length - eventIndex
            );
            currentOffset = event.index;

            while (
              stack.length > 1 &&
              rangeToProcess.entity !== currentEvent.range.entity
            ) {
              endEventSet.add(rangeToProcess);
              rangeToProcess = stack[stack.length - 1];
            }
          }
        };

        let nextEvent = events[eventIndex];
        while (
          nextEvent &&
          nextEvent.index === event.index &&
          nextEvent.type === "end"
        ) {
          processEndEvent();
          nextEvent = events[eventIndex];
        }

        currentOffset = event.index;
        const remainingRanges = Array.from(endEventSet);
        for (let i = remainingRanges.length - 1; i >= 0; i--) {
          const range = remainingRanges[i];
          stack.push({
            entity: range.entity,
            entity_is_weak_reference: range.entity_is_weak_reference,
            entityType: range.entityType,
            length: range.offset + range.length - currentOffset,
            offset: currentOffset,
            subElements: [],
          });
        }
      }
    }
  }

  while (stack.length > 1) {
    const lastRange = stack[stack.length - 1];
    const {
      entity,
      entity_is_weak_reference,
      entityType,
      length,
      offset,
      subElements,
    } = lastRange;
    const rangeEnd = offset + length;

    processSubElements(
      text,
      currentOffset,
      rangeEnd,
      entity,
      entity_is_weak_reference,
      entityType,
      sortedRenderers,
      subElements,
      stack,
      transforms,
      defaultRenderers,
      stack.length
    );
    currentOffset = rangeEnd;
  }

  if (currentOffset < text.length) {
    const remainingSubElements = stack[stack.length - 1].subElements;
    remainingSubElements.push(
      <Fragment key={`c${currentOffset}`}>
        {applyTransforms(UnicodeUtils.substr(text, currentOffset), transforms)}
      </Fragment>
    );
  }

  return <Fragment>{stack[stack.length - 1].subElements}</Fragment>;
};

CometTextWithEntitiesBase.displayName = `${CometTextWithEntitiesBase.name} [from CometTextWithEntitiesBase]`;

export default CometTextWithEntitiesBase;
