__d("JSResourceForInteraction", ["JSResource"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return c("JSResource").call(null, a)
    }
    b = a;
    g["default"] = b
}
), 98);

import JSResource from 'JSResource'; // Import JSResource from your actual module path

const JSResourceForInteraction = (resourceName) => {
  return JSResource(resourceName);
};

export default JSResourceForInteraction;
