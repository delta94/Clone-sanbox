__d("useSearchCometGlobalTypeaheadNullStateDataSource", ["qex", "useSearchCometRecentSearchDataSource"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return c("useSearchCometRecentSearchDataSource")({
            fetchAvailability: Boolean(c("qex")._("218")),
            fetchSearchBadge: Boolean(!0),
            filter: "all",
            nullStateSurface: "GLOBAL"
        })
    }
    g["default"] = a
}), 98);


import { qex } from './qex'; 
import { useSearchCometRecentSearchDataSource } from './useSearchCometRecentSearchDataSource';

const useSearchCometGlobalTypeaheadNullStateDataSource = () => {

  return useSearchCometRecentSearchDataSource({
    fetchAvailability: Boolean(qex._('218')),
    fetchSearchBadge: Boolean(true), 
    filter: 'all',
    nullStateSurface: 'GLOBAL'
  });

};

export default useSearchCometGlobalTypeaheadNullStateDataSource;