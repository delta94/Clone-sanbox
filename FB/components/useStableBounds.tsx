__d("useStableBounds", ["deepEquals", "useStableValue"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return d("useStableValue").useStableValue(a, c("deepEquals"))
    }
    g["default"] = a
}), 98);


import deepEquals from './your_module_path/deepEquals';
import { useStableValue } from './your_module_path/useStableValue';

const useStableBounds = (bounds: any) => {
    return useStableValue(bounds, deepEquals);
};

export default useStableBounds;
