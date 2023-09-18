__d("CometPressableChildrenWithOverlay.react", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children;
        a = a.overlay;
        return h.jsxs("div", {
            className: "x4k7w5x x1h91t0o x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1jfb8zj x1beo9mf x3igimt xarpa2k x1n2onr6 x1qrby5j",
            children: [b, a]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { ReactNode } from 'react';

interface CometPressableChildrenWithOverlayProps {
  children: ReactNode;
  overlay: ReactNode;
}

function CometPressableChildrenWithOverlay(props: CometPressableChildrenWithOverlayProps): JSX.Element {
  const { children, overlay } = props;

  return (
    <div className="x4k7w5x x1h91t0o x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1jfb8zj x1beo9mf x3igimt xarpa2k x1n2onr6 x1qrby5j">
      {children}
      {overlay}
    </div>
  );
}

CometPressableChildrenWithOverlay.displayName = `${CometPressableChildrenWithOverlay.name} [from ${import.meta.url}]`;

export default CometPressableChildrenWithOverlay;
