__d(
  "LSPlatformClientSingleton",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = { contents: void 0 };
    function a(a) {
      g.contents = a;
    }
    f.saveInstance = a;
  },
  66
);

type LSPlatformClientInstance = any;

const instanceHolder = {
  contents: undefined as LSPlatformClientInstance | undefined,
};

function saveInstance(instance: LSPlatformClientInstance) {
  instanceHolder.contents = instance;
}

export { saveInstance };
