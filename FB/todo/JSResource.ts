__d("JSResource", ["JSResourceReferenceImpl"], (function(a, b, c, d, e, f, g) {
    var h = {};
    function i(a, b) {
        h[a] = b
    }
    function j(a) {
        return h[a]
    }
    function a(a) {
        a = a;
        var b = j(a);
        if (b)
            return b;
        b = new (c("JSResourceReferenceImpl"))(a);
        i(a, b);
        return b
    }
    a.loadAll = c("JSResourceReferenceImpl").loadAll;
    g["default"] = a
}
), 98);


import JSResourceReferenceImpl from 'JSResourceReferenceImpl'; // Import JSResourceReferenceImpl from your actual module path

const resourceMap = {};

function registerResource(name, resource) {
  resourceMap[name] = resource;
}

function getResource(name) {
  const existingResource = resourceMap[name];
  if (existingResource) {
    return existingResource;
  }

  const newResource = new JSResourceReferenceImpl(name);
  registerResource(name, newResource);
  return newResource;
}

const JSResource = getResource;

JSResource.loadAll = JSResourceReferenceImpl.loadAll;

export default JSResource;
