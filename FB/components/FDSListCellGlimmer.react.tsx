__d(
  "FDSListCellGlimmer.react",
  [
    "BaseLoadingStateElement.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometLegacyListItemBase.react",
    "FDSGlimmer.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react")),
      k = i.useMemo,
      l = {
        firstItem: { paddingTop: "xexx8yu", $$css: !0 },
        imageSize20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        imageSize36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        imageSize40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        imageSize48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        imageSize56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
        imageSize60: { height: "xng8ra", width: "x1247r65", $$css: !0 },
        imageStyleCircle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        imageStyleRoundedRect: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        item: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: !0 },
        textGlimmer: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          height: "xx3o462",
          $$css: !0,
        },
        textGlimmerWidth100: { width: "xh8yej3", $$css: !0 },
        textGlimmerWidth50: { width: "x3hqpx7", $$css: !0 },
        textGlimmerWidth67: { width: "xgkjt62", $$css: !0 },
        textGlimmerWidth83: { width: "x1l3jyfm", $$css: !0 },
      };
    function a(a) {
      var b = a.imageSize,
        d = b === void 0 ? 36 : b;
      b = a.imageStyle;
      var e = b === void 0 ? "none" : b;
      b = a.numberOfItems;
      var f = b === void 0 ? 1 : b;
      b = a.paddingHorizontal;
      b = b === void 0 ? 16 : b;
      var g = a.removeFirstItemPadding,
        i = g === void 0 ? !0 : g;
      g = a.spacing;
      a = k(
        function () {
          return Array(f)
            .fill()
            .map(function (a, b) {
              return Math.floor((Math.PI * Math.pow(10, b % 10)) % 4);
            });
        },
        [f]
      );
      return j.jsx(c("BaseLoadingStateElement.react"), {
        children: j.jsx(c("CometColumn.react"), {
          paddingHorizontal: b,
          spacing: g,
          children: a.map(function (a, b) {
            return j.jsx(
              c("CometColumnItem.react"),
              {
                children: j.jsx(c("CometLegacyListItemBase.react"), {
                  addon:
                    e !== "none"
                      ? j.jsx(c("FDSGlimmer.react"), {
                          index: b,
                          xstyle: [
                            d === 20 && l.imageSize20,
                            d === 36 && l.imageSize36,
                            d === 40 && l.imageSize40,
                            d === 48 && l.imageSize48,
                            d === 56 && l.imageSize56,
                            d === 60 && l.imageSize60,
                            e === "circle" && l.imageStyleCircle,
                            e === "roundedRect" && l.imageStyleRoundedRect,
                          ],
                        })
                      : null,
                  className: (h || (h = c("stylex")))(
                    l.item,
                    b === 0 && i && l.firstItem
                  ),
                  children: j.jsx(c("FDSGlimmer.react"), {
                    index: b,
                    xstyle: [
                      l.textGlimmer,
                      a === 0 && l.textGlimmerWidth50,
                      a === 1 && l.textGlimmerWidth67,
                      a === 2 && l.textGlimmerWidth83,
                      a === 3 && l.textGlimmerWidth100,
                    ],
                  }),
                }),
              },
              b
            );
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useMemo } from "react";
import BaseLoadingStateElement from "BaseLoadingStateElement.react";
import CometColumn from "CometColumn.react";
import CometColumnItem from "CometColumnItem.react";
import CometLegacyListItemBase from "CometLegacyListItemBase.react";
import FDSGlimmer from "FDSGlimmer.react";
import { stylex } from "stylex";

const styles = {
  firstItem: { paddingTop: "xexx8yu", $$css: true },
  imageSize20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: true },
  imageSize36: { height: "xc9qbxq", width: "x14qfxbe", $$css: true },
  imageSize40: { height: "x1vqgdyp", width: "x100vrsf", $$css: true },
  imageSize48: { height: "xsdox4t", width: "x1useyqa", $$css: true },
  imageSize56: { height: "xnnlda6", width: "x15yg21f", $$css: true },
  imageSize60: { height: "xng8ra", width: "x1247r65", $$css: true },
  imageStyleCircle: {
    borderTopStartRadius: "x14yjl9h",
    borderTopEndRadius: "xudhj91",
    borderBottomEndRadius: "x18nykt9",
    borderBottomStartRadius: "xww2gxu",
    $$css: true,
  },
  imageStyleRoundedRect: {
    borderTopStartRadius: "x1lq5wgf",
    borderTopEndRadius: "xgqcy7u",
    borderBottomEndRadius: "x30kzoy",
    borderBottomStartRadius: "x9jhf4c",
    $$css: true,
  },
  item: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: true },
  textGlimmer: {
    borderTopStartRadius: "x1lq5wgf",
    borderTopEndRadius: "xgqcy7u",
    borderBottomEndRadius: "x30kzoy",
    borderBottomStartRadius: "x9jhf4c",
    height: "xx3o462",
    $$css: true,
  },
  textGlimmerWidth100: { width: "xh8yej3", $$css: true },
  textGlimmerWidth50: { width: "x3hqpx7", $$css: true },
  textGlimmerWidth67: { width: "xgkjt62", $$css: true },
  textGlimmerWidth83: { width: "x1l3jyfm", $$css: true },
};

interface FDSListCellGlimmerProps {
  imageSize?: 20 | 36 | 40 | 48 | 56 | 60;
  imageStyle?: "none" | "circle" | "roundedRect";
  numberOfItems?: number;
  paddingHorizontal?: number;
  removeFirstItemPadding?: boolean;
  spacing?: number;
}

const FDSListCellGlimmer: React.FC<FDSListCellGlimmerProps> = ({
  imageSize = 36,
  imageStyle = "none",
  numberOfItems = 1,
  paddingHorizontal = 16,
  removeFirstItemPadding = true,
  spacing,
}) => {
  const itemOrder = useMemo(
    () =>
      Array(numberOfItems)
        .fill(null)
        .map((_, index) =>
          Math.floor((Math.PI * Math.pow(10, index % 10)) % 4)
        ),
    [numberOfItems]
  );

  return (
    <BaseLoadingStateElement>
      <CometColumn paddingHorizontal={paddingHorizontal} spacing={spacing}>
        {itemOrder.map((order, index) => (
          <CometColumnItem key={index}>
            <CometLegacyListItemBase
              addon={
                imageStyle !== "none" ? (
                  <FDSGlimmer
                    index={index}
                    xstyle={[
                      imageSize === 20 && styles.imageSize20,
                      imageSize === 36 && styles.imageSize36,
                      imageSize === 40 && styles.imageSize40,
                      imageSize === 48 && styles.imageSize48,
                      imageSize === 56 && styles.imageSize56,
                      imageSize === 60 && styles.imageSize60,
                      imageStyle === "circle" && styles.imageStyleCircle,
                      imageStyle === "roundedRect" &&
                        styles.imageStyleRoundedRect,
                    ]}
                  />
                ) : null
              }
              className={stylex(
                styles.item,
                index === 0 && removeFirstItemPadding && styles.firstItem
              )}
            >
              <FDSGlimmer
                index={index}
                xstyle={[
                  styles.textGlimmer,
                  order === 0 && styles.textGlimmerWidth50,
                  order === 1 && styles.textGlimmerWidth67,
                  order === 2 && styles.textGlimmerWidth83,
                  order === 3 && styles.textGlimmerWidth100,
                ]}
              />
            </CometLegacyListItemBase>
          </CometColumnItem>
        ))}
      </CometColumn>
    </BaseLoadingStateElement>
  );
};

FDSListCellGlimmer.displayName =
  "FDSListCellGlimmer [from FDSListCellGlimmer.react]";

export default FDSListCellGlimmer;
