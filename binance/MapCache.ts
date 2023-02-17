import { clear as clearFn, delete as deleteFn, get as getFn, has as hasFn, set as setFn } from "m5o6", "d0UJ", "eask", "9SKQ", "e63W";

class MapCache {
    constructor(e) {
        let t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            let r = e[t];
            this.set(r[0], r[1])
        }
    }

    clear = clearFn;
    delete = deleteFn;
    get = getFn;
    has = hasFn;
    set = setFn;
}

export default MapCache;



