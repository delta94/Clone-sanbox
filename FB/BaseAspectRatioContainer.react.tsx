// __d("BaseAspectRatioContainer.react", ["react", "stylex", "unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");

//     function a(a) {
//         var b = a.aspectRatio,
//             d = a.children,
//             e = a.contentStyle,
//             f = a.style,
//             g = a.testid;
//         g = a.xstyle;
//         if (b <= 0) throw c("unrecoverableViolation")("Aspect ratio must be a non-zero, positive number: " + b, "comet_ui");
//         return h.jsx("div", {
//             className: c("stylex")(i.container, g),
//             "data-testid": void 0,
//             style: babelHelpers["extends"]({}, f, {
//                 paddingTop: 100 / b + "%"
//             }),
//             children: d != null && h.jsx("div", {
//                 className: c("stylex")(i.content, e),
//                 children: d
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     var i = {
//         container: {
//             height: "xqtp20y",
//             position: "x1n2onr6",
//             width: "xh8yej3",
//             $$css: !0
//         },
//         content: {
//             alignItems: "x1qjc9v5",
//             borderBottomStyle: "x1q0q8m5",
//             borderBottomWidth: "x1qhh985",
//             borderEndStyle: "xu3j5b3",
//             borderEndWidth: "xcfux6l",
//             borderStartStyle: "x26u7qi",
//             borderStartWidth: "xm0m39n",
//             borderTopStyle: "x13fuv20",
//             borderTopWidth: "x972fbf",
//             bottom: "x1ey2m1c",
//             boxSizing: "x9f619",
//             display: "x78zum5",
//             end: "xds687c",
//             flexDirection: "xdt5ytf",
//             flexGrow: "x1iyjqo2",
//             flexShrink: "xs83m0k",
//             justifyContent: "x1qughib",
//             marginBottom: "xat24cr",
//             marginEnd: "x11i5rnm",
//             marginStart: "x1mh8g0r",
//             marginTop: "xdj266r",
//             minHeight: "x2lwn1j",
//             minWidth: "xeuugli",
//             paddingBottom: "x18d9i69",
//             paddingEnd: "x4uap5",
//             paddingStart: "xkhd6sd",
//             paddingTop: "xexx8yu",
//             position: "x10l6tqk",
//             start: "x17qophe",
//             top: "x13vifvy",
//             zIndex: "x1ja2u2z",
//             $$css: !0
//         }
//     };
//     g["default"] = a
// }), 98);

import React from 'react';
import { stylex } from 'stylex';
import { unrecoverableViolation } from 'unrecoverableViolation';

function BaseAspectRatioContainer({ aspectRatio, children, contentStyle, style, testid, xstyle }) {
  if (aspectRatio <= 0) {
    throw unrecoverableViolation(`Aspect ratio must be a non-zero, positive number: ${aspectRatio}`, 'comet_ui');
  }

  return (
    <div
      className={stylex(styles.container, xstyle)}
      data-testid={testid}
      style={{ ...style, paddingTop: `${100 / aspectRatio}%` }}
    >
      {children != null && (
        <div className={stylex(styles.content, contentStyle)}>
          {children}
        </div>
      )}
    </div>
  );
}

BaseAspectRatioContainer.displayName = `${BaseAspectRatioContainer.name} [from ${f.id}]`;

const styles = {
  container: {
    height: 'xqtp20y',
    position: 'x1n2onr6',
    width: 'xh8yej3',
    $$css: true,
  },
  content: {
    alignItems: 'x1qjc9v5',
    borderBottomStyle: 'x1q0q8m5',
    borderBottomWidth: 'x1qhh985',
    borderEndStyle: 'xu3j5b3',
    borderEndWidth: 'xcfux6l',
    borderStartStyle: 'x26u7qi',
    borderStartWidth: 'xm0m39n',
    borderTopStyle: 'x13fuv20',
    borderTopWidth: 'x972fbf',
    bottom: 'x1ey2m1c',
    boxSizing: 'x9f619',
    display: 'x78zum5',
    end: 'xds687c',
    flexDirection: 'xdt5ytf',
    flexGrow: 'x1iyjqo2',
    flexShrink: 'xs83m0k',
    justifyContent: 'x1qughib',
    marginBottom: 'xat24cr',
    marginEnd: 'x11i5rnm',
    marginStart: 'x1mh8g0r',
    marginTop: 'xdj266r',
    minHeight: 'x2lwn1j',
    minWidth: 'xeuugli',
    paddingBottom: 'x18d9i69',
    paddingEnd: 'x4uap5',
    paddingStart: 'xkhd6sd',
    paddingTop: 'xexx8yu',
    position: 'x10l6tqk',
    start: 'x17qophe',
    top: 'x13vifvy',
    zIndex: 'x1ja2u2z',
    $$css: true,
  },
};

export default BaseAspectRatioContainer;
