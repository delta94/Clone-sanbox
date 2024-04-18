__d("CometAppLoggedInNavigationSearchSection.react", ["CometAppLoggedInNavigationSearchComponent.react", "SearchCometTypeaheadLoggingContextProvider", "react", "useSearchCometTypeaheadLoggingProvider"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.initialGlobalSearchQuery,
            e = a.isHome,
            f = a.showGlobalTypeaheadExpandedOutsideHome;
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
}), 98);


import React, { FC } from "react";
import {
  SearchCometTypeaheadLoggingContextProvider,
  useSearchCometTypeaheadLoggingProvider,
  CometAppLoggedInNavigationSearchComponent
} from "path-to-your-dependencies"; // Update path accordingly

interface CometAppLoggedInNavigationSearchSectionProps {
  initialGlobalSearchQuery?: string;
  isHome?: boolean;
  showGlobalTypeaheadExpandedOutsideHome?: boolean;
}

const CometAppLoggedInNavigationSearchSection: FC<CometAppLoggedInNavigationSearchSectionProps> = (props) => {
    const {
        initialGlobalSearchQuery,
        isHome,
        showGlobalTypeaheadExpandedOutsideHome,
    } = props

  const shouldExpandInput =
    isHome ||
    showGlobalTypeaheadExpandedOutsideHome ||
    (initialGlobalSearchQuery?.length ?? 0) > 0;

  const logger = useSearchCometTypeaheadLoggingProvider({
    context: "search_global",
  });

  return (
    <SearchCometTypeaheadLoggingContextProvider logger={logger}>
      <CometAppLoggedInNavigationSearchComponent
        {...props}
        inputMayBeExpanded={shouldExpandInput}
      />
    </SearchCometTypeaheadLoggingContextProvider>
  );
};

export default CometAppLoggedInNavigationSearchSection;
