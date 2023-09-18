__d("CometSSRPreloadImageCollection", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Set()
      , h = new Set();
    function a(a) {
        g.add(a)
    }
    function b() {
        g.clear()
    }
    function c() {
        if (!g || g.size === 0)
            return "";
        var a = [];
        g == null ? void 0 : g.forEach(function(b) {
            h.has(b) || (a.push('<link rel="preload" as="image" href="' + b + '" />'),
            h.add(b))
        });
        return a.join("\n")
    }
    f.addImage = a;
    f.clearImageCollection = b;
    f.imagesToHTMLLinkString = c
}
), 66);



class CometSSRPreloadImageCollection {
    private static images = new Set<string>();
    private static processedImages = new Set<string>();
  
    static addImage(uri: string): void {
      this.images.add(uri);
    }
  
    static clearImageCollection(): void {
      this.images.clear();
    }
  
    static imagesToHTMLLinkString(): string {
      if (!this.images || this.images.size === 0) {
        return "";
      }
  
      const linkStrings: string[] = [];
      this.images.forEach((uri) => {
        if (!this.processedImages.has(uri)) {
          linkStrings.push(`<link rel="preload" as="image" href="${uri}" />`);
          this.processedImages.add(uri);
        }
      });
  
      return linkStrings.join("\n");
    }
  }
  
  export default CometSSRPreloadImageCollection;
  