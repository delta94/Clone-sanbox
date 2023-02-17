import react, {useMemo} from "react";
import mergeRefs from "mergeRefs";

const useMergeRefs = (...args) => {
    return useMemo(() => {
        return mergeRefs(...args);
    }, [...args]);
};

export default useMergeRefs;