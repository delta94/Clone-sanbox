__d("GeminiAppsGlimmer.react", ["CometGlimmer.react", "react"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h, i = h || d("react"),
    j = {
      root: {
        width: "xh8yej3",
        $$css: !0
      },
      iconRow: {
        height: "xng8ra",
        marginBottom: "x12nagc",
        width: "xh8yej3",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: !0
      },
      icon: {
        borderTopStartRadius: "x107yiy2",
        borderTopEndRadius: "xv8uw2v",
        borderBottomEndRadius: "x1tfwpuw",
        borderBottomStartRadius: "x2g32xy",
        width: "x100vrsf",
        height: "x1vqgdyp",
        $$css: !0
      }
    };

  function a() {
    return i.jsxs("div", {
      className: "xh8yej3",
      children: [i.jsx("div", {
        className: "xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k",
        children: i.jsx(c("CometGlimmer.react"), {
          index: 0,
          xstyle: j.icon
        })
      }), i.jsx("div", {
        className: "xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k",
        children: i.jsx(c("CometGlimmer.react"), {
          index: 1,
          xstyle: j.icon
        })
      }), i.jsx("div", {
        className: "xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k",
        children: i.jsx(c("CometGlimmer.react"), {
          index: 2,
          xstyle: j.icon
        })
      })]
    })
  }
  a.displayName = a.name + " [from " + f.id + "]";
  g["default"] = a
}), 98);


import React from 'react';
import CometGlimmer from 'CometGlimmer.react'; 

const styles = {
  root: {
    width: "xh8yej3",
  },
  iconRow: {
    height: "xng8ra",
    marginBottom: "x12nagc",
    width: "xh8yej3",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
  },
  icon: {
    borderTopStartRadius: "x107yiy2",
    borderTopEndRadius: "xv8uw2v",
    borderBottomEndRadius: "x1tfwpuw",
    borderBottomStartRadius: "x2g32xy",
    width: "x100vrsf",
    height: "x1vqgdyp",
  },
};

function GeminiAppsGlimmer() {
  return (
    <div className="xh8yej3">
      <div className="xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k">
        <CometGlimmer index={0} xstyle={styles.icon} />
      </div>
      <div className="xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k">
        <CometGlimmer index={1} xstyle={styles.icon} />
      </div>
      <div className="xng8ra x12nagc xh8yej3 x78zum5 x6s0dn4 xl56j7k">
        <CometGlimmer index={2} xstyle={styles.icon} />
      </div>
    </div>
  );
}

GeminiAppsGlimmer.displayName = `${GeminiAppsGlimmer.name} [from ${f.id}]`;

export default GeminiAppsGlimmer;
