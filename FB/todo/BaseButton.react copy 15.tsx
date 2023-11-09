__d("CometAppLoggedInNavigationSearchSection.react", ["CometAppLoggedInNavigationSearchComponent.react", "SearchCometTypeaheadLoggingContextProvider", "react", "useSearchCometTypeaheadLoggingProvider"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");
    function a(a) {
        var b = a.initialGlobalSearchQuery
          , e = a.isHome
          , f = a.showGlobalTypeaheadExpandedOutsideHome;
        e = e || f || (b == null ? void 0 : b.length) > 0;
        f = c("useSearchCometTypeaheadLoggingProvider")({
            context: "search_global"
        });
        return i.jsx(d("SearchCometTypeaheadLoggingContextProvider").SearchCometTypeaheadLoggingContextProvider, {
            logger: f,
            children: i.jsx(c("CometAppLoggedInNavigationSearchComponent.react"), babelHelpers["extends"]({
                inputMayBeExpanded: e
            }, a))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React, { ReactElement } from 'react';
import { useSearchCometTypeaheadLoggingProvider } from 'path-to-useSearchCometTypeaheadLoggingProvider';
import { SearchCometTypeaheadLoggingContextProvider } from 'path-to-SearchCometTypeaheadLoggingContextProvider';
import CometAppLoggedInNavigationSearchComponent from 'path-to-CometAppLoggedInNavigationSearchComponent';

interface CometAppLoggedInNavigationSearchSectionProps {
  initialGlobalSearchQuery?: string;
  isHome?: boolean;
  showGlobalTypeaheadExpandedOutsideHome?: boolean;
}

const CometAppLoggedInNavigationSearchSection: React.FC<CometAppLoggedInNavigationSearchSectionProps> = ({
  initialGlobalSearchQuery = '',
  isHome = false,
  showGlobalTypeaheadExpandedOutsideHome = false,
  ...rest
}): ReactElement => {
  const shouldInputBeExpanded = isHome || showGlobalTypeaheadExpandedOutsideHome || initialGlobalSearchQuery.length > 0;
  const logger = useSearchCometTypeaheadLoggingProvider({ context: 'search_global' });

  return (
    <SearchCometTypeaheadLoggingContextProvider logger={logger}>
      <CometAppLoggedInNavigationSearchComponent inputMayBeExpanded={shouldInputBeExpanded} {...rest} />
    </SearchCometTypeaheadLoggingContextProvider>
  );
};

CometAppLoggedInNavigationSearchSection.displayName = `${CometAppLoggedInNavigationSearchSection.name} [from ${'module-id'}]`;

export default CometAppLoggedInNavigationSearchSection;
