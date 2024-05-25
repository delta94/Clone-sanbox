__d("useSearchCometGlobalTypeaheadInitializeDataSource", ["SearchCometTypeaheadEventEmitterContext", "react", "searchCometGlobalTypeahead.config", "useSearchCometEventEmitterContext", "useSearchCometGlobalTypeaheadCompositeDataSource", "useSearchCometGlobalTypeaheadNullStateDataSource"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useEffect;

    function a() {
        var a = c("useSearchCometGlobalTypeaheadNullStateDataSource")(),
            b = c("useSearchCometGlobalTypeaheadCompositeDataSource")({
                config: c("searchCometGlobalTypeahead.config"),
                recentDataSource: a
            });
        a = (a = c("useSearchCometEventEmitterContext")(c("SearchCometTypeaheadEventEmitterContext"))) != null ? a : {};
        var d = a.subscribeToClearGlobalRecentSearches,
            e = a.subscribeToRecentSearchEntryAdded,
            f = a.subscribeToRefreshRecentSearches;
        i(function () {
            return e == null ? void 0 : e(function (a) {
                b.addRecentEntry(a)
            })
        }, [b, e]);
        i(function () {
            return d == null ? void 0 : d(function () {
                b.clearRecentSearches()
            })
        }, [b, d]);
        i(function () {
            return f == null ? void 0 : f(function () {
                b.refreshRecentSearches()
            })
        }, [b, f]);
        i(function () {
            b.bootstrap()
        }, [b])
    }
    g["default"] = a
}), 98);




import { useEffect } from 'react';

import { SearchCometTypeaheadEventEmitterContext } from './SearchCometTypeaheadEventEmitterContext';
import { useSearchCometEventEmitterContext } from './useSearchCometEventEmitterContext';
import { useSearchCometGlobalTypeaheadCompositeDataSource } from './useSearchCometGlobalTypeaheadCompositeDataSource'; 
import { useSearchCometGlobalTypeaheadNullStateDataSource } from './useSearchCometGlobalTypeaheadNullStateDataSource';
import { searchCometGlobalTypeaheadConfig } from '../todo/searchCometGlobalTypeahead.config';

const useSearchCometGlobalTypeaheadInitializeDataSource = () => {
  const nullStateDataSource = useSearchCometGlobalTypeaheadNullStateDataSource();

  const compositeDataSource = useSearchCometGlobalTypeaheadCompositeDataSource({
    config: searchCometGlobalTypeaheadConfig,
    recentDataSource: nullStateDataSource,
  });

  const eventEmitterContext = useSearchCometEventEmitterContext(
    SearchCometTypeaheadEventEmitterContext
  );

  useEffect(() => {
    eventEmitterContext?.subscribeToRecentSearchEntryAdded((entry) => {
      compositeDataSource.addRecentEntry(entry);
    });
  }, [compositeDataSource, eventEmitterContext]);

  useEffect(() => {
    eventEmitterContext?.subscribeToClearGlobalRecentSearches((entry) => {
      compositeDataSource.clearRecentSearches(entry);
    });
  }, [compositeDataSource, eventEmitterContext]);

  useEffect(() => {
    eventEmitterContext?.subscribeToRefreshRecentSearches((entry) => {
      compositeDataSource.refreshRecentSearches(entry);
    });
  }, [compositeDataSource, eventEmitterContext]);

  useEffect(() => {
    compositeDataSource.bootstrap();
  }, [compositeDataSource]);
}

export default useSearchCometGlobalTypeaheadInitializeDataSource;