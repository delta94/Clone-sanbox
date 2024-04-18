__d("SVGIcon", [], (function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a) {
        this.component = a
    };

    function a(a) {
        return new g(a)
    }
    c = function (a, b) {
        this.codepoints = a, this.component = b
    };
    var h = function (a) {
        this.component = a
    };

    function b(a) {
        return new h(a)
    }
    f.SVGIcon = g;
    f.svgIcon = a;
    f.EmojiIcon = c;
    f.LegacySVGIcon = h;
    f.legacySVGIcon = b
}), 66);

import React from 'react'

class SVGIcon {
    component: React.ComponentType<any>;

    constructor(component) {
      this.component = component;
    }
  }
  
  function svgIcon(component) {
    return new SVGIcon(component);
  }
  
  class EmojiIcon {
    codepoints: string | null;
    component: React.ComponentType<any>;

    constructor(codepoints, component) {
      this.codepoints = codepoints;
      this.component = component;
    }
  }
  
  function emojiIcon(component) {
    return new EmojiIcon(null, component);
  }
  
  class LegacySVGIcon {
    component: React.ComponentType<any>;
    constructor(component) {
      this.component = component;
    }
  }
  
  function legacySVGIcon(component) {
    return new LegacySVGIcon(component);
  }
  
  export { SVGIcon, svgIcon, EmojiIcon, emojiIcon, LegacySVGIcon, legacySVGIcon };
  