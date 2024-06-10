__d(
  "FDSDialogLoadingStateImpl.react",
  ["FDSGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        firstLine: {
          height: "x1kpxq89",
          marginBottom: "xyorhqc",
          maxWidth: "xq2pcee",
          $$css: !0,
        },
        glimmer: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          boxSizing: "x9f619",
          marginStart: "x1d52u69",
          marginLeft: null,
          marginRight: null,
          marginEnd: "xktsk01",
          $$css: !0,
        },
        heading: {
          height: "x1qx5ct2",
          marginTop: "x1sy10c2",
          marginBottom: "xieb3on",
          maxWidth: "xws0hc0",
          $$css: !0,
        },
        secondLine: {
          height: "x1kpxq89",
          marginBottom: "xieb3on",
          maxWidth: "xg16ivm",
          $$css: !0,
        },
      };
    function a() {
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("FDSGlimmer.react"), {
            index: 0,
            xstyle: [j.glimmer, j.heading],
          }),
          i.jsx(c("FDSGlimmer.react"), {
            index: 1,
            xstyle: [j.glimmer, j.firstLine],
          }),
          i.jsx(c("FDSGlimmer.react"), {
            index: 2,
            xstyle: [j.glimmer, j.secondLine],
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import FDSGlimmer from "FDSGlimmer.react";

const styles = {
  firstLine: {
    height: "x1kpxq89",
    marginBottom: "xyorhqc",
    maxWidth: "xq2pcee",
    $$css: true,
  },
  glimmer: {
    borderTopStartRadius: "x1lq5wgf",
    borderTopEndRadius: "xgqcy7u",
    borderBottomEndRadius: "x30kzoy",
    borderBottomStartRadius: "x9jhf4c",
    boxSizing: "x9f619",
    marginStart: "x1d52u69",
    marginLeft: null,
    marginRight: null,
    marginEnd: "xktsk01",
    $$css: true,
  },
  heading: {
    height: "x1qx5ct2",
    marginTop: "x1sy10c2",
    marginBottom: "xieb3on",
    maxWidth: "xws0hc0",
    $$css: true,
  },
  secondLine: {
    height: "x1kpxq89",
    marginBottom: "xieb3on",
    maxWidth: "xg16ivm",
    $$css: true,
  },
};

const FDSDialogLoadingStateImpl: React.FC = () => {
  return (
    <>
      <FDSGlimmer index={0} xstyle={[styles.glimmer, styles.heading]} />
      <FDSGlimmer index={1} xstyle={[styles.glimmer, styles.firstLine]} />
      <FDSGlimmer index={2} xstyle={[styles.glimmer, styles.secondLine]} />
    </>
  );
};

FDSDialogLoadingStateImpl.displayName = `FDSDialogLoadingStateImpl [from ${module.id}]`;

export default FDSDialogLoadingStateImpl;
