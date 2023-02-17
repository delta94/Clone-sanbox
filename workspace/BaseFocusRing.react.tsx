import React from "react";
import FocusWithinHandler from "FocusWithinHandler.react"; // done
import gkx from "gkx";


const styles = {
    focused: {
        outline: "x1i4iak8",
        "@media (-webkit-min-device-pixel-ratio: 0)_outline": "x1n22pj5",
        $$css: !0
    },
    newFocused: {
        boxShadow: "x90kdol",
        outline: "x1a2a7pz",
        $$css: !0
    },
    newFocusedInset: {
        boxShadow: "xsgs0p0",
        outline: "x1a2a7pz",
        $$css: !0
    },
    newFocusedLink: {
        outline: "x11312b7",
        $$css: !0
    },
    unfocused: {
        outline: "x1a2a7pz",
        $$css: !0
    }
}

const focusRingStyles = {
    "default": styles.newFocused,
    inset: styles.newFocusedInset
};

const enableNewFocusRing = gkx("1721477") || gkx("1459");

const BaseFocusRing = ({
    children,
    focusRingPosition = "default",
    mode = "focus-visible",
    suppressFocusRing = false,
    testOnly
    }) => {
        const focusedStyle = enableNewFocusRing ? focusRingStyles[focusRingPosition] : styles.focused;
      
        return (
            <FocusWithinHandler testOnly={testOnly}>
                {(isWithin, isFocused) => {
                    let shouldApplyFocusedStyle = false;
                   
                    if (!suppressFocusRing) {
                        if (isWithin && isFocused) {
                            shouldApplyFocusedStyle = true;
                        } else if (isWithin && mode === "focus") {
                            shouldApplyFocusedStyle = true;
                        }
                    }
                    return children(shouldApplyFocusedStyle ? focusedStyle : styles.unfocused);
                }}
            </FocusWithinHandler>
        );
    };
    
    BaseFocusRing.displayName = BaseFocusRing [from ${__filename}];
    BaseFocusRing.focusRingXStyle = enableNewFocusRing ? styles.newFocused : styles.focused;
    BaseFocusRing.focusRingInsetXStyle = enableNewFocusRing ? styles.newFocusedInset : styles.focused;
    BaseFocusRing.linkFocusRingXStyle = enableNewFocusRing ? styles.newFocusedLink : styles.focused;
    
    export default BaseFocusRing;


    // __d("BaseFocusRing.react", ["FocusWithinHandler.react", "gkx", "react"], (function (a, b, c, d, e, f, g) {
    //     "use strict";
    //     var h = d("react"),
    //         i = {
                
    //         },
    //         j = {
    //             "default": i.newFocused,
    //             inset: i.newFocusedInset
    //         },
    //         k = c("gkx")("1721477") || c("gkx")("1459");
    
    //     function a(a) {
    //         var b = a.children,
    //             d = a.focusRingPosition;
    //         d = d === void 0 ? "default" : d;
    //         var e = a.mode,
    //             f = e === void 0 ? "focus-visible" : e;
    //         e = a.suppressFocusRing;
    //         var g = e === void 0 ? !1 : e;
    //         e = a.testOnly;
    //         var l = k ? j[d] : i.focused;
    //         return h.jsx(c("FocusWithinHandler.react"), {
    //             testOnly: e,
    //             children: function (a, c) {
    //                 var d = !1;
    //                 g || (a && c ? d = !0 : a && f === "focus" && (d = !0));
    //                 return b(d ? l : i.unfocused)
    //             }
    //         })
    //     }
    //     a.displayName = a.name + " [from " + f.id + "]";
    //     a.focusRingXStyle = k ? i.newFocused : i.focused;
    //     a.focusRingInsetXStyle = k ? i.newFocusedInset : i.focused;
    //     a.linkFocusRingXStyle = k ? i.newFocusedLink : i.focused;
    //     g["default"] = a
    // }), 98);