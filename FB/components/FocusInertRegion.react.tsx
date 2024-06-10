__d(
  "FocusInertRegion.react",
  ["gkx", "react", "setElementCanTab"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useLayoutEffect,
      k = b.useRef,
      l = i.unstable_Scope,
      m = c("gkx")("329");
    function a(a) {
      var b = a.children,
        c = a.disabled,
        e = c === void 0 ? !1 : c,
        f = a.focusQuery;
      c = a.forceHTMLInert;
      a = c === void 0 ? !1 : c;
      var g = k(null);
      j(
        function () {
          var a = g.current;
          if (f && a != null) {
            a = a.DO_NOT_USE_queryAllNodes(f);
            if (a !== null)
              for (var b = 0; b < a.length; b++) {
                var c = a[b];
                d("setElementCanTab").setElementCanTab(c, e);
              }
          }
        },
        [e, f]
      );
      return i.jsx(l, {
        ref: g,
        children: !e && (m || a) ? i.jsx("div", { inert: "", children: b }) : b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useLayoutEffect, useRef, ReactNode } from "react";
import { gkx } from "some-module";
import { setElementCanTab } from "some-other-module";

interface FocusInertRegionProps {
  children: ReactNode;
  disabled?: boolean;
  focusQuery?: string;
  forceHTMLInert?: boolean;
}

const FocusInertRegion: React.FC<FocusInertRegionProps> = ({
  children,
  disabled = false,
  focusQuery,
  forceHTMLInert = false,
}) => {
  const ref = useRef<any>(null);
  const Scope = React.unstable_Scope;
  const isGkxEnabled = gkx("329");

  useLayoutEffect(() => {
    const scopeNode = ref.current;
    if (focusQuery && scopeNode != null) {
      const nodes = scopeNode.DO_NOT_USE_queryAllNodes(focusQuery);
      if (nodes !== null) {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          setElementCanTab(node, disabled);
        }
      }
    }
  }, [disabled, focusQuery]);

  return (
    <Scope ref={ref}>
      {!disabled && (isGkxEnabled || forceHTMLInert) ? (
        <div inert="">{children}</div>
      ) : (
        children
      )}
    </Scope>
  );
};

FocusInertRegion.displayName = `FocusInertRegion [from ${module.id}]`;

export default FocusInertRegion;
