__d(
  "MWXMessageBubbleCornerStyles.react",
  [],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        flatBottom: {
          borderBottomEndRadius: "x5pf9jr",
          borderBottomStartRadius: "xo71vjh",
          $$css: !0,
        },
        flatTop: {
          borderTopEndRadius: "x13lgxp2",
          borderTopStartRadius: "x168nmei",
          $$css: !0,
        },
        rounded: {
          borderTopStartRadius: "x1tlxs6b",
          borderTopEndRadius: "x1g8br2z",
          borderBottomEndRadius: "x1gn5b1j",
          borderBottomStartRadius: "x230xth",
          $$css: !0,
        },
      },
      i = {
        connectBottom: { borderBottomStartRadius: "x10y3i5r", $$css: !0 },
        connectTop: { borderTopStartRadius: "x1lcm9me", $$css: !0 },
      },
      j = {
        connectBottom: { borderBottomEndRadius: "xrt01vj", $$css: !0 },
        connectTop: { borderTopEndRadius: "x1yr5g0i", $$css: !0 },
      };
    function a(a) {
      var b, c, d, e;
      b = (b = a == null ? void 0 : a.align) != null ? b : "left";
      c = (c = a == null ? void 0 : a.connectBottom) != null ? c : !1;
      d = (d = a == null ? void 0 : a.connectTop) != null ? d : !1;
      e = (e = a == null ? void 0 : a.flatten) != null ? e : "none";
      a = (a = a == null ? void 0 : a.corners) != null ? a : "round";
      b = b === "right" ? j : i;
      return [
        a === "round" && h.rounded,
        d && b.connectTop,
        c && b.connectBottom,
        (e === "all" || e === "bottom") && h.flatBottom,
        (e === "all" || e === "top") && h.flatTop,
      ];
    }
    g.getMWXBubbleCornerStyles = a;
  },
  98
);
interface BubbleStyles {
  [key: string]: any;
}

interface BubbleProps {
  align?: "left" | "right";
  connectBottom?: boolean;
  connectTop?: boolean;
  flatten?: "all" | "top" | "bottom" | "none";
  corners?: "round" | "unset";
}

function getMWXBubbleCornerStyles(props: BubbleProps): BubbleStyles {
  const {
    align = "left",
    connectBottom = false,
    connectTop = false,
    flatten = "none",
    corners = "round",
  } = props;

  const styles: BubbleStyles = {
    flatBottom: {
      borderBottomEndRadius: "x5pf9jr",
      borderBottomStartRadius: "xo71vjh",
      $$css: true,
    },
    flatTop: {
      borderTopEndRadius: "x13lgxp2",
      borderTopStartRadius: "x168nmei",
      $$css: true,
    },
    rounded: {
      borderTopStartRadius: "x1tlxs6b",
      borderTopEndRadius: "x1g8br2z",
      borderBottomEndRadius: "x1gn5b1j",
      borderBottomStartRadius: "x230xth",
      $$css: true,
    },
  };

  const connectStyles = {
    connectBottom: { borderBottomStartRadius: "x10y3i5r", $$css: true },
    connectTop: { borderTopStartRadius: "x1lcm9me", $$css: true },
  };

  const flatStyles = {
    connectBottom: { borderBottomEndRadius: "xrt01vj", $$css: true },
    connectTop: { borderTopEndRadius: "x1yr5g0i", $$css: true },
  };

  const bubbleStyles = align === "right" ? flatStyles : connectStyles;

  const resultStyles: string[] = [
    corners === "round" && styles.rounded,
    connectTop && bubbleStyles.connectTop,
    connectBottom && bubbleStyles.connectBottom,
    (flatten === "all" || flatten === "bottom") && styles.flatBottom,
    (flatten === "all" || flatten === "top") && styles.flatTop,
  ];

  return resultStyles;
}

export { getMWXBubbleCornerStyles };
