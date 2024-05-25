__d("useStableValue", ["I64", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = (h || d("react")).useRef;

    function a(a) {
        return k(a, (i || (i = d("I64"))).equal)
    }

    function k(a, b) {
        var c = j(a);
        b(c.current, a) || (c.current = a);
        return c.current
    }
    g.useStableI64 = a;
    g.useStableValue = k
}), 98);

import { useRef } from 'react';
import { I64 } from './your_module_path/I64';

const useStableValue = (value: any, equal: (a: any, b: any) => boolean): any => {
    const ref = useRef(value);
    if (!equal(ref.current, value)) {
        ref.current = value;
    }
    return ref.current;
};

const useStableI64 = (value: I64): I64 => {
    return useStableValue(value, I64.equal);
};

export { useStableValue, useStableI64 };
