__d("SVGIcon", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a) {
        this.component = a
    };
    function a(a) {
        return new g(a)
    }
    c = function(a) {
        this.codepoints = a
    }
    ;
    var h = function(a) {
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
}
), 66);



class SVGIcon {
    component: any;
  
    constructor(component: any) {
      this.component = component;
    }
  }
  
  function svgIcon(component: any): SVGIcon {
    return new SVGIcon(component);
  }
  
  class EmojiIcon {
    codepoints: any;
  
    constructor(codepoints: any) {
      this.codepoints = codepoints;
    }
  }
  
  function legacySVGIcon(component: any): SVGIcon {
    return new SVGIcon(component);
  }
  
  export { SVGIcon, svgIcon, EmojiIcon, legacySVGIcon };
  