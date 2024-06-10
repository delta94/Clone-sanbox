__d(
  "MWXSvgIcon",
  ["SVGIcon", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function j(a) {
      var b = function (b) {
        return i.jsx(
          a,
          babelHelpers["extends"]({}, b, {
            overflow: "visible",
            viewBox: "6 6 24 24",
          })
        );
      };
      b._isSVG = !0;
      return d("SVGIcon").svgIcon(b);
    }
    var k = (function () {
        function a(a, b) {
          (this.$1 = b),
            (this.originalComponent = a),
            (this.component = b ? j(a.component) : a);
        }
        var b = a.prototype;
        b.asMenuItemIcon_ESCAPE_HATCH = function () {
          return new l(this.originalComponent, this.$1);
        };
        return a;
      })(),
      l = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        return a;
      })(k);
    function a(a, b) {
      return new k(a, b);
    }
    function b(a, b) {
      return new l(a, b);
    }
    g.MWXSvgIcon = k;
    g.MWXSvgMenuItemIcon = l;
    g.mwxSvgIcon = a;
    g.mwxSvgMenuItemIcon = b;
  },
  98
);

import React from "react";
import SVGIcon, { svgIcon } from "SVGIcon";

function createSVGIcon(
  Component: React.ComponentType<any>
): React.ComponentType<any> {
  const WrappedComponent: React.FC<any> = (props) => {
    const svgProps = {
      ...props,
      overflow: "visible",
      viewBox: "6 6 24 24",
    };
    return <Component {...svgProps} />;
  };
  WrappedComponent._isSVG = true;
  return svgIcon(WrappedComponent);
}

class MWXSvgIcon {
  originalComponent: React.ComponentType<any>;
  component: React.ComponentType<any>;

  constructor(component: React.ComponentType<any>, useWrapper: boolean) {
    this.originalComponent = component;
    this.component = useWrapper ? createSVGIcon(component) : component;
  }

  asMenuItemIcon_ESCAPE_HATCH(): MWXSvgMenuItemIcon {
    return new MWXSvgMenuItemIcon(this.originalComponent, this.$1);
  }
}

class MWXSvgMenuItemIcon extends MWXSvgIcon {}

function mwxSvgIcon(
  component: React.ComponentType<any>,
  useWrapper: boolean
): MWXSvgIcon {
  return new MWXSvgIcon(component, useWrapper);
}

function mwxSvgMenuItemIcon(
  component: React.ComponentType<any>,
  useWrapper: boolean
): MWXSvgMenuItemIcon {
  return new MWXSvgMenuItemIcon(component, useWrapper);
}

export { MWXSvgIcon, MWXSvgMenuItemIcon, mwxSvgIcon, mwxSvgMenuItemIcon };
