__d("CometHideableComponentExperiment.react", ["CometVirtualization.react", "gkx", "qex", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"),
        j = ["comet_feed_unit_card", "comet_watch_tab"],
        k = new Set(((e = c("qex")._("641")) != null ? e : "").split(",").map(function (a) {
            return a.trim()
        }));
    k.add("polaris_feed_story_tray_item");
    var l = (d = c("qex")._("642")) != null ? d : "all",
        m = (e = c("qex")._("648")) != null ? e : !0,
        n = (d = c("qex")._("885")) != null ? d : !1,
        o = a((e = c("qex")._("628")) != null ? e : "");

    function a(a) {
        var b = new Map();
        a.split(",").forEach(function (a) {
            a = a.trim();
            a = a.split(":");
            var c = a[0];
            a = a[1];
            c = (c = c == null ? void 0 : c.trim()) != null ? c : "";
            a = parseInt((a = a == null ? void 0 : a.trim()) != null ? a : "", 10);
            c.length > 0 && !Number.isNaN(a) && b.set(c, a)
        });
        return b
    }

    function b(a) {
        var b = a.callingSurface,
            d = a.children,
            e = a.disableHidding;
        a = a.topBottomMarginOverride;
        var f = new Set(j),
            g = new Set(j);
        c("gkx")("221") === !0 ? g.clear() : f.clear();
        e = (e = e) != null ? e : !1;
        f.has(b) ? e = !1 : g.has(b) && (e = !0);
        g = k.has(b) || f.has(b);
        (l.includes("all") || l.split(",").includes(b)) && c("qex")._("692");
        return i.jsx(c("CometVirtualization.react"), {
            disableHidding: e || !g,
            pinChildrenOnInteraction: g && m,
            pinChildrenWithPlayer: n,
            topBottomMargin: a != null && a >= 0 ? a : o.get(b),
            unmountHiddenChildren: g,
            children: d
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b
}), 98);

import React from "React"
import { CometVirtualization } from "CometVirtualization.react";
import { gkx, qex } from "./utils";

interface CometHideableComponentProps {
 callingSurface: string;
 children: React.ReactNode;
 disableHidding?: boolean;
 topBottomMarginOverride?: number;
}

const supportedSurfaces = ["comet_feed_unit_card", "comet_watch_tab"];
const enabledExperiments = new Set(
 (qex.get("641") ?? "")
   .split(",")
   .map((item) => item.trim())
);
enabledExperiments.add("polaris_feed_story_tray_item");

const enabledSurfaces = qex.get("642") ?? "all";
const pinChildrenOnInteraction = qex.get("648") ?? true;
const pinChildrenWithPlayer = qex.get("885") ?? false;
const topBottomMargin = qex.get("628") ?? "";

export function parseTopBottomMargin(config: string): Map<string, number> {
   const result = new Map<string, number>();
    
   config.split(",").forEach((item) => {
   const [key, value] = item.trim().split(":");
   const margin = parseInt(value.trim(), 10);

   if (key && !isNaN(margin)) {
    result.set(key.trim(), margin);
   }
 });
 return result;
}

export default function CometHideableComponent({
 callingSurface,
 children,
 disableHidding,
 topBottomMarginOverride,
}: CometHideableComponentProps) {
 const supportedSurfacesSet = new Set(supportedSurfaces);
 const enabledSurfacesSet = new Set(supportedSurfaces);
//  const enabledSurfacesSet = new Set(
//    typeof enabledSurfaces === "string"
//      ? enabledSurfaces.split(",").map((item) => item.trim())
//      : []
//  );

 const shouldDisableHidding = disableHidding ?? false;
 const shouldEnableHidding =
   supportedSurfacesSet.has(callingSurface) ||
   enabledSurfacesSet.has(callingSurface);

 if (gkx("221")) {
   enabledSurfacesSet.clear();
 } else {
   supportedSurfacesSet.clear();
 }

 

 const shouldPinChildren = enabledExperiments.has(callingSurface) || supportedSurfacesSet.has(callingSurface);
 const topBottomMarginValue =
   topBottomMarginOverride !== undefined && topBottomMarginOverride >= 0
     ? topBottomMarginOverride
     : parseTopBottomMargin(topBottomMargin).get(callingSurface) || 0;


  enabledSurfaces.includes("all") || enabledSurfaces.split(",").includes(callingSurface) && qex._("692")
 return (
   <CometVirtualization
     disableHidding={shouldDisableHidding || !shouldEnableHidding}
     pinChildrenOnInteraction={shouldPinChildren && pinChildrenOnInteraction}
     pinChildrenWithPlayer={pinChildrenWithPlayer}
     topBottomMargin={topBottomMarginValue}
     unmountHiddenChildren={shouldEnableHidding}
   >
     {children}
   </CometVirtualization>
 );
}