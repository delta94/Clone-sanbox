__d("CometSSRClientRender", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "CometSSRClientRenderError"
      , h = function(a) {
        this.message = g + ": " + a,
        this.name = "CometSSRClientRenderError"
    };
    function a(a) {
        throw new h(a)
    }
    f.CometSSRClientRenderError = g;
    f.ClientRenderSentinel = h;
    f.CometSSRClientRender = a
}
), 66);



class CometSSRClientRenderError extends Error {
  constructor(message: string) {
    super(`CometSSRClientRenderError: ${message}`);
    this.name = "CometSSRClientRenderError";
  }
}

class ClientRenderSentinel extends CometSSRClientRenderError {}

function CometSSRClientRender(message: string): never {
  throw new CometSSRClientRenderError(message);
}

export { CometSSRClientRenderError, ClientRenderSentinel, CometSSRClientRender };








