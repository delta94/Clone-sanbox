__d("useSearchCometGlobalTypeaheadCompositeDataSource", ["useSearchCometTypeaheadCompositeDataSource"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        instance: null
    };

    function a(a) {
        a = c("useSearchCometTypeaheadCompositeDataSource")(a);
        h.instance == null && (h.instance = a);
        return h.instance
    }
    g["default"] = a
}), 98);


import useSearchCometTypeaheadCompositeDataSource from './useSearchCometTypeaheadCompositeDataSource';

let instance: ReturnType<typeof useSearchCometTypeaheadCompositeDataSource> | null = null;

export default function useSearchCometGlobalTypeaheadCompositeDataSource(params: Parameters<typeof useSearchCometTypeaheadCompositeDataSource>[0]) {
  if (instance === null) {
    instance = useSearchCometTypeaheadCompositeDataSource(params); 
  }

  return instance;
}