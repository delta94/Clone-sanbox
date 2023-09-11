// __d("CometComponentWithKeyCommands.react", ["CometKeyCommandWrapper.react", "react", "useKeyCommands"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react"),
//         i = {
//             displayInherit: {
//                 display: "x1jfb8zj",
//                 $$css: !0
//             },
//             inherit: {
//                 alignContent: "x4k7w5x",
//                 alignItems: "x1h91t0o",
//                 flexDirection: "x1beo9mf",
//                 flexGrow: "xaigb6o",
//                 flexShrink: "x12ejxvf",
//                 height: "x3igimt",
//                 justifyContent: "xarpa2k",
//                 maxHeight: "xedcshv",
//                 maxWidth: "x1lytzrv",
//                 minHeight: "x1t2pt76",
//                 minWidth: "x7ja8zs",
//                 position: "x1n2onr6",
//                 width: "x1qrby5j",
//                 $$css: !0
//             }
//         };

//     function j(a) {
//         c("useKeyCommands")(a.commandConfigs);
//         return null
//     }

//     function a(a) {
//         var b = a.children,
//             d = a.commandConfigs,
//             e = a.elementType,
//             f = a.xstyle;
//         a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "commandConfigs", "elementType", "xstyle"]);
//         var g = e === "span" ? i.inherit : [i.inherit, i.displayInherit];
//         return h.jsxs(c("CometKeyCommandWrapper.react"), babelHelpers["extends"]({
//             elementType: e,
//             xstyle: f != null ? f : g
//         }, a, {
//             children: [h.jsx(j, {
//                 commandConfigs: d
//             }), b]
//         }))
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React from 'react';
import { CometKeyCommandWrapper } from 'CometKeyCommandWrapper.react';
import useKeyCommands from 'useKeyCommands';

const styles = {
  displayInherit: {
    display: 'x1jfb8zj',
    $$css: true,
  },
  inherit: {
    alignContent: 'x4k7w5x',
    alignItems: 'x1h91t0o',
    flexDirection: 'x1beo9mf',
    flexGrow: 'xaigb6o',
    flexShrink: 'x12ejxvf',
    height: 'x3igimt',
    justifyContent: 'xarpa2k',
    maxHeight: 'xedcshv',
    maxWidth: 'x1lytzrv',
    minHeight: 'x1t2pt76',
    minWidth: 'x7ja8zs',
    position: 'x1n2onr6',
    width: 'x1qrby5j',
    $$css: true,
  },
};

function KeyCommandHandler({ commandConfigs }) {
  useKeyCommands(commandConfigs);
  return null;
}

function CometComponentWithKeyCommands({ children, commandConfigs, elementType, xstyle, ...props }) {
  const wrapperStyles = elementType === 'span' ? styles.inherit : [styles.inherit, styles.displayInherit];
  
  return (
    <CometKeyCommandWrapper elementType={elementType} xstyle={xstyle != null ? xstyle : wrapperStyles} {...props}>
      <KeyCommandHandler commandConfigs={commandConfigs} />
      {children}
    </CometKeyCommandWrapper>
  );
}

CometComponentWithKeyCommands.displayName = `${CometComponentWithKeyCommands.name} [from ${f.id}]`;

export default CometComponentWithKeyCommands;
