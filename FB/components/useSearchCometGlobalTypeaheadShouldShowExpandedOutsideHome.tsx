// __d("useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome", ["useCometRouterState"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = ["watch", "marketplace", "groups", "gaming"];

//     function a() {
//         var a = c("useCometRouterState")();
//         a = (a == null ? void 0 : a.main.route) || {};
//         a = a.tabKey;
//         return a !== "home" && !h.includes(a)
//     }
//     g["default"] = a
// }), 98);

import { useCometRouterState } from 'path-to-useCometRouterState'; // Update with the actual path

const excludedTabs: string[] = ["watch", "marketplace", "groups", "gaming"];

const useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome = (): boolean => {
    const { main } = useCometRouterState() || {};
    const currentTab = (main?.route || {}).tabKey;

    return currentTab !== "home" && !excludedTabs.includes(currentTab);
};

export default useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome;
