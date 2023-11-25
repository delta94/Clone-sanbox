__d("SearchCometGlobalTypeaheadDataSourceLoader.react", ["react", "useSearchCometGlobalTypeaheadInitializeDataSource"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h, i = h || d("react");

  function a() {
    c("useSearchCometGlobalTypeaheadInitializeDataSource")();
    return i.jsx("div", {
      "data-testid": void 0
    })
  }
  a.displayName = a.name + " [from " + f.id + "]";
  g["default"] = a
}), 98);


import React from 'react';
import { useSearchCometGlobalTypeaheadInitializeDataSource } from './useSearchCometGlobalTypeaheadInitializeDataSource';

const SearchCometGlobalTypeaheadDataSourceLoader: React.FC = () => {
  useSearchCometGlobalTypeaheadInitializeDataSource();
  
  return <div data-testid={undefined} />;
};

export default SearchCometGlobalTypeaheadDataSourceLoader;