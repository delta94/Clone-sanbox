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

import JSResourceReferenceImpl from 'JSResourceReferenceImpl';

const resources: { [key: string]: any } = {};

function registerResource(name: string, resource: any): void {
    resources[name] = resource;
}

function getResource(name: string): any {
    return resources[name];
}

function JSResource(name: string) {
    let resource = getResource(name);
    if (resource) {
        return resource;
    }
    resource = new JSResourceReferenceImpl(name);
    registerResource(name, resource);
    return resource;
}

JSResource.loadAll = JSResourceReferenceImpl.loadAll;

export default JSResource;
