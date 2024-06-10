__d(
  "MWMessageTableFocusTable.react",
  ["fbt", "CometKeys", "FocusTable.react", "emptyFunction", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    i || d("react");
    var j = "messages_table";
    a = function (a, b, c) {
      return c.getAttribute("data-scope") === j;
    };
    b = d("FocusTable.react").createFocusTable(a);
    e = { key: c("CometKeys").UP };
    f = { key: c("CometKeys").DOWN };
    d = { key: c("CometKeys").LEFT };
    var k = { key: c("CometKeys").RIGHT };
    e = [
      {
        command: e,
        description: h._("__JHASH__HYvhkJNYo2M__JHASH__"),
        handler: c("emptyFunction"),
      },
      {
        command: f,
        description: h._("__JHASH__6tFY25IlnV4__JHASH__"),
        handler: c("emptyFunction"),
      },
      {
        command: d,
        description: h._("__JHASH__6tFY25IlnV4__JHASH__"),
        handler: c("emptyFunction"),
      },
      {
        command: k,
        description: h._("__JHASH__HYvhkJNYo2M__JHASH__"),
        handler: c("emptyFunction"),
      },
    ];
    g.scopeID = j;
    g.scopeQuery = a;
    g.FocusTable = b;
    g.commandConfigs = e;
  },
  226
);

import { _ as fbt } from "fbt";
import { CometKeys } from "CometKeys";
import { createFocusTable } from "FocusTable.react";
import emptyFunction from "emptyFunction";
import React from "react";

const SCOPE_ID = "messages_table";

const scopeQuery = (element: HTMLElement, key: any, event: Event): boolean => {
  return element.getAttribute("data-scope") === SCOPE_ID;
};

const FocusTable = createFocusTable(scopeQuery);

const commandConfigs = [
  {
    command: { key: CometKeys.UP },
    description: fbt._("__JHASH__HYvhkJNYo2M__JHASH__"),
    handler: emptyFunction,
  },
  {
    command: { key: CometKeys.DOWN },
    description: fbt._("__JHASH__6tFY25IlnV4__JHASH__"),
    handler: emptyFunction,
  },
  {
    command: { key: CometKeys.LEFT },
    description: fbt._("__JHASH__6tFY25IlnV4__JHASH__"),
    handler: emptyFunction,
  },
  {
    command: { key: CometKeys.RIGHT },
    description: fbt._("__JHASH__HYvhkJNYo2M__JHASH__"),
    handler: emptyFunction,
  },
];

export { SCOPE_ID as scopeID, scopeQuery, FocusTable, commandConfigs };
