bfgy: function(e, t, n) {
    "use strict";
    function r(e) {
        let t = !1;
        const n = {
            register(e) {
                if (t)
                    console.debug("service registered already");
                else {
                    if (e.register)
                        throw new Error("`register` method is preserved");
                    Object.assign(n, e),
                    t = !0
                }
            }
        };
        return e && Object.assign(n, e),
        n
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
},


function createService(initialService = null) {
    let registered = false;
    const service = {
        register(newService) {
            if (registered) {
                console.debug("Service already registered.");
            } else {
                if (newService.register) {
                    throw new Error("`register` method is reserved.");
                }
                Object.assign(service, newService);
                registered = true;
            }
        },
    };

    if (initialService) {
        Object.assign(service, initialService);
    }

    return service;
}

export { createService };