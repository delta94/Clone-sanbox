__d(
  "MWV2MessageRowSimple.react",
  [
    "FocusWithinHandler.react",
    "MWEditMessageOverlay.react",
    "MWMessageTableFocusTable.react",
    "react",
    "stylex",
    "useMAWEditMessageData",
    "useMWPEditMessageDeemphasizer",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react"));
    b = i;
    var k = b.useEffect,
      l = b.useRef,
      m = {
        row: { position: "x1n2onr6", $$css: !0 },
        rowFocusVisible: { zIndex: "x1vjfegm", $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        e = a.domElementRef;
      a = a.focusCellOnRender;
      var f = a === void 0 ? !1 : a;
      a = c("useMAWEditMessageData")();
      var g = a != null;
      a = c("useMWPEditMessageDeemphasizer")();
      var i = l(null);
      k(
        function () {
          if (f) {
            var a;
            (a = i.current) == null ? void 0 : a.focus();
            (a = i.current) == null ? void 0 : a.scrollIntoView();
          }
        },
        [f]
      );
      return j.jsx(d("MWMessageTableFocusTable.react").FocusTable[1], {
        children: j.jsx("div", {
          className: (h || (h = c("stylex")))(a),
          ref: e,
          role: "row",
          children: j.jsx(d("MWMessageTableFocusTable.react").FocusTable[2], {
            children: j.jsx(c("FocusWithinHandler.react"), {
              children: function (a, e) {
                return j.jsxs("div", {
                  className: (h || (h = c("stylex")))(
                    m.row,
                    e ? m.rowFocusVisible : !1
                  ),
                  "data-release-focus-from": "CLICK",
                  "data-scope": d("MWMessageTableFocusTable.react").scopeID,
                  ref: i,
                  role: "gridcell",
                  tabIndex: g ? -1 : 0,
                  children: [b, j.jsx(c("MWEditMessageOverlay.react"), {})],
                });
              },
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import { FocusWithinHandler } from "FocusWithinHandler.react";
import { MWEditMessageOverlay } from "MWEditMessageOverlay.react";
import {
  MWMessageTableFocusTable,
  scopeID,
} from "MWMessageTableFocusTable.react";
import React, { useEffect, useRef } from "react";
import stylex from "stylex";
import { useMAWEditMessageData } from "useMAWEditMessageData";
import { useMWPEditMessageDeemphasizer } from "useMWPEditMessageDeemphasizer";

const styles = {
  row: { position: "x1n2onr6", $$css: true },
  rowFocusVisible: { zIndex: "x1vjfegm", $$css: true },
};

interface MWV2MessageRowSimpleProps {
  children: React.ReactNode;
  domElementRef?: React.Ref<HTMLDivElement>;
  focusCellOnRender?: boolean;
}

function MWV2MessageRowSimple({
  children,
  domElementRef,
  focusCellOnRender = false,
}: MWV2MessageRowSimpleProps): JSX.Element {
  const editMessageData = useMAWEditMessageData();
  const hasEditMessageData = editMessageData != null;
  const deemphasizer = useMWPEditMessageDeemphasizer();
  const cellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focusCellOnRender) {
      cellRef.current?.focus();
      cellRef.current?.scrollIntoView();
    }
  }, [focusCellOnRender]);

  return (
    <MWMessageTableFocusTable.Table>
      <div className={stylex(deemphasizer)} ref={domElementRef} role="row">
        <MWMessageTableFocusTable.TableCell>
          <FocusWithinHandler>
            {(focusWithin, isFocused) => (
              <div
                className={stylex(
                  styles.row,
                  isFocused ? styles.rowFocusVisible : false
                )}
                data-release-focus-from="CLICK"
                data-scope={scopeID}
                ref={cellRef}
                role="gridcell"
                tabIndex={hasEditMessageData ? -1 : 0}
              >
                {children}
                <MWEditMessageOverlay />
              </div>
            )}
          </FocusWithinHandler>
        </MWMessageTableFocusTable.TableCell>
      </div>
    </MWMessageTableFocusTable.Table>
  );
}

MWV2MessageRowSimple.displayName = `MWV2MessageRowSimple [from ${f.id}]`;

export default MWV2MessageRowSimple;
