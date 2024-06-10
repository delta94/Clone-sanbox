__d(
  "MWPMessageListColumn.react",
  ["react", "react-strict-dom"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        bubble: { minWidth: "xeuugli", $$css: !0 },
        centered: { alignItems: "x6s0dn4", $$css: !0 },
        customHeight: function (a) {
          return [
            { height: "x1jwls1v", $$css: !0 },
            {
              "--height": (function (a) {
                return typeof a === "number"
                  ? a + "px"
                  : a != null
                  ? a
                  : "initial";
              })(a),
            },
          ];
        },
        grow: { flexGrow: "x1iyjqo2", $$css: !0 },
        justifyContentStart: { justifyContent: "x1nhvcw1", $$css: !0 },
        paint: { backgroundColor: "x1eb86dx", $$css: !0 },
        profile: { paddingEnd: "x1sxyh0", paddingStart: "x1nvil2r", $$css: !0 },
        root: {
          alignItems: "x1h91t0o",
          alignSelf: "xkh2ocl",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "x13a6bvl",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
        selfCentered: { alignSelf: "xamitd3", $$css: !0 },
        shrinkwrap: { flexGrow: "x1c4vz4f", $$css: !0 },
        spacer: { flexBasis: "x1r8uery", flexGrow: "x1iyjqo2", $$css: !0 },
        vr: { backgroundColor: "x1eb86dx", width: "xh8yej3", $$css: !0 },
        withGutters: {
          paddingEnd: "xe53cfu",
          paddingStart: "xrgni87",
          $$css: !0,
        },
      };
    function k(a) {
      var b = a.bubble,
        c = a.centered,
        e = a.children,
        f = a.grow,
        g = a.justifyContent,
        h = a.paint,
        k = a.profile;
      a.rounded;
      var l = a.selfCentered,
        m = a.shrinkwrap;
      a = a.withGutters;
      return i.jsx(d("react-strict-dom").html.div, {
        role: "none",
        style: [
          j.root,
          f === !0 ? j.grow : !1,
          m === !0 ? j.shrinkwrap : !1,
          h === !0 ? j.paint : !1,
          k === !0 ? j.profile : !1,
          a === !0 ? j.withGutters : !1,
          b === !0 ? j.bubble : !1,
          c === !0 ? j.centered : !1,
          l === !0 ? j.selfCentered : !1,
          g === "flex-start" ? j.justifyContentStart : !1,
        ],
        children: e,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.children,
        c = a.grow;
      a = a.shrinkwrap;
      return i.jsx(k, {
        grow: c != null ? c : !1,
        paint: !0,
        shrinkwrap: a != null ? a : !1,
        withGutters: !0,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.children;
      a = a.selfCentered;
      return i.jsx(k, {
        paint: !0,
        profile: !0,
        selfCentered: a != null ? a : !1,
        shrinkwrap: !0,
        children: b,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function c(a) {
      var b = a.centered,
        c = a.children;
      a = a.paint;
      return i.jsx(k, {
        centered: b != null ? b : !1,
        paint: a != null ? a : !0,
        shrinkwrap: !0,
        children: c,
      });
    }
    c.displayName = c.name + " [from " + f.id + "]";
    function e(a) {
      a = a.children;
      return i.jsx(k, { grow: !0, paint: !0, children: a });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    function l(a) {
      a = a.children;
      return i.jsx(k, {
        grow: !0,
        justifyContent: "flex-start",
        paint: !0,
        children: a,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.children;
      a = a.paint;
      return i.jsx(k, { bubble: !0, paint: a, children: b });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n() {
      return i.jsx(d("react-strict-dom").html.div, {
        role: "none",
        style: j.spacer,
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
      a = a.height;
      return i.jsx(d("react-strict-dom").html.div, {
        role: "none",
        style: [j.vr, j.customHeight(a)],
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.MWPMessageListColumnWithGutters = a;
    g.MWPMessageListColumnProfile = b;
    g.MWPMessageListColumnShrinkwrap = c;
    g.MWPMessageListColumnGrow = e;
    g.MWPMessageListColumnGrowJustified = l;
    g.MWPMessageListColumnBubble = m;
    g.MWPMessageListColumnHorizontalSpacer = n;
    g.MWPMessageListColumnVerticalRhythm = o;
  },
  98
);

import React, { JSX } from "react";
import { html } from "react-strict-dom";

interface StyleProps {
  [key: string]: any;
}

const styles: { [key: string]: StyleProps | ((arg: any) => StyleProps) } = {
  bubble: { minWidth: "xeuugli", $$css: true },
  centered: { alignItems: "x6s0dn4", $$css: true },
  customHeight: (height: number | string | null) => [
    { height: "x1jwls1v", $$css: true },
    {
      "--height":
        typeof height === "number"
          ? height + "px"
          : height != null
          ? height
          : "initial",
    },
  ],
  grow: { flexGrow: "x1iyjqo2", $$css: true },
  justifyContentStart: { justifyContent: "x1nhvcw1", $$css: true },
  paint: { backgroundColor: "x1eb86dx", $$css: true },
  profile: { paddingEnd: "x1sxyh0", paddingStart: "x1nvil2r", $$css: true },
  root: {
    alignItems: "x1h91t0o",
    alignSelf: "xkh2ocl",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    justifyContent: "x13a6bvl",
    maxWidth: "x193iq5w",
    $$css: true,
  },
  selfCentered: { alignSelf: "xamitd3", $$css: true },
  shrinkwrap: { flexGrow: "x1c4vz4f", $$css: true },
  spacer: { flexBasis: "x1r8uery", flexGrow: "x1iyjqo2", $$css: true },
  vr: { backgroundColor: "x1eb86dx", width: "xh8yej3", $$css: true },
  withGutters: { paddingEnd: "xe53cfu", paddingStart: "xrgni87", $$css: true },
};

function MWPMessageListColumn({
  bubble,
  centered,
  children,
  grow,
  justifyContent,
  paint,
  profile,
  selfCentered,
  shrinkwrap,
  withGutters,
}: {
  bubble?: boolean;
  centered?: boolean;
  children: React.ReactNode;
  grow?: boolean;
  justifyContent?: "flex-start" | undefined;
  paint?: boolean;
  profile?: boolean;
  selfCentered?: boolean;
  shrinkwrap?: boolean;
  withGutters?: boolean;
}): JSX.Element {
  return (
    <html.div
      role="none"
      style={[
        styles.root,
        grow ? styles.grow : undefined,
        shrinkwrap ? styles.shrinkwrap : undefined,
        paint ? styles.paint : undefined,
        profile ? styles.profile : undefined,
        withGutters ? styles.withGutters : undefined,
        bubble ? styles.bubble : undefined,
        centered ? styles.centered : undefined,
        selfCentered ? styles.selfCentered : undefined,
        justifyContent === "flex-start"
          ? styles.justifyContentStart
          : undefined,
      ]}
    >
      {children}
    </html.div>
  );
}

MWPMessageListColumn.displayName = "MWPMessageListColumn";

function MWPMessageListColumnWithGutters({
  children,
  grow = false,
  paint = true,
  shrinkwrap = false,
}: {
  children: React.ReactNode;
  grow?: boolean;
  paint?: boolean;
  shrinkwrap?: boolean;
}): JSX.Element {
  return (
    <MWPMessageListColumn
      grow={grow}
      paint={paint}
      shrinkwrap={shrinkwrap}
      withGutters
    >
      {children}
    </MWPMessageListColumn>
  );
}

MWPMessageListColumnWithGutters.displayName = "MWPMessageListColumnWithGutters";

function MWPMessageListColumnProfile({
  children,
  selfCentered = false,
  paint = true,
  shrinkwrap = true,
}: {
  children: React.ReactNode;
  selfCentered?: boolean;
  paint?: boolean;
  shrinkwrap?: boolean;
}): JSX.Element {
  return (
    <MWPMessageListColumn
      paint={paint}
      profile
      shrinkwrap={shrinkwrap}
      selfCentered={selfCentered}
    >
      {children}
    </MWPMessageListColumn>
  );
}

MWPMessageListColumnProfile.displayName = "MWPMessageListColumnProfile";

function MWPMessageListColumnShrinkwrap({
  children,
  centered = false,
  paint = true,
}: {
  children: React.ReactNode;
  centered?: boolean;
  paint?: boolean;
}): JSX.Element {
  return (
    <MWPMessageListColumn centered={centered} paint={paint} shrinkwrap>
      {children}
    </MWPMessageListColumn>
  );
}

MWPMessageListColumnShrinkwrap.displayName = "MWPMessageListColumnShrinkwrap";

function MWPMessageListColumnGrow({
  children,
  paint = true,
}: {
  children: React.ReactNode;
  paint?: boolean;
}): JSX.Element {
  return (
    <MWPMessageListColumn grow paint={paint}>
      {children}
    </MWPMessageListColumn>
  );
}

MWPMessageListColumnGrow.displayName = "MWPMessageListColumnGrow";

function MWPMessageListColumnGrowJustified({
  children,
  paint = true,
}: {
  children: React.ReactNode;
  paint?: boolean;
}): JSX.Element {
  return (
    <MWPMessageListColumn grow justifyContent="flex-start" paint={paint}>
      {children}
    </MWPMessageListColumn>
  );
}

MWPMessageListColumnGrowJustified.displayName =
  "MWPMessageListColumnGrowJustified";

function MWPMessageListColumnBubble({
  children,
  paint = true,
}: {
  children: React.ReactNode;
  paint?: boolean;
}): JSX.Element {
  return (
    <MWPMessageListColumn bubble paint={paint}>
      {children}
    </MWPMessageListColumn>
  );
}

MWPMessageListColumnBubble.displayName = "MWPMessageListColumnBubble";

function MWPMessageListColumnHorizontalSpacer(): JSX.Element {
  return <div role="none" style={styles.spacer} />;
}

MWPMessageListColumnHorizontalSpacer.displayName =
  "MWPMessageListColumnHorizontalSpacer";

function MWPMessageListColumnVerticalRhythm({
  height,
}: {
  height: number | string | null;
}): JSX.Element {
  return <div role="none" style={[styles.vr, styles.customHeight(height)]} />;
}

MWPMessageListColumnVerticalRhythm.displayName =
  "MWPMessageListColumnVerticalRhythm";

export {
  MWPMessageListColumnWithGutters,
  MWPMessageListColumnProfile,
  MWPMessageListColumnShrinkwrap,
  MWPMessageListColumnGrow,
  MWPMessageListColumnGrowJustified,
  MWPMessageListColumnBubble,
  MWPMessageListColumnHorizontalSpacer,
  MWPMessageListColumnVerticalRhythm,
};
