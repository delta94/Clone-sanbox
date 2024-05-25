__d("useSearchCometRecentSearchDataSource", ["Actor", "CometRelay", "CometSearchRecentDataSource", "CometSearchRecentDataSource.query", "WebPixelRatio", "XCometActivityLogControllerRouteBuilder", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useMemo,
        j = 16;

    function a(a) {
        var b = a.fetchAvailability,
            e = b === void 0 ? !1 : b;
        b = a.fetchSearchBadge;
        var f = b === void 0 ? !1 : b,
            g = a.filter,
            h = a.nullStateSurface,
            k = a.searchScopeEntityID,
            l = d("CometRelay").useRelayEnvironment();
        b = d("Actor").useActor();
        a = b[0];
        var m = c("XCometActivityLogControllerRouteBuilder").buildURL({
            category_key: "SEARCH",
            entry_point: "edit_search_history",
            log_filter: "search",
            vanity: a
        });
        return i(function () {
            return new(c("CometSearchRecentDataSource"))({
                activityLogURL: m,
                gqlQuery: d("CometSearchRecentDataSource.query").query,
                limit: j,
                normalize: d("CometSearchRecentDataSource.query").normalize,
                queryVariablesBuilderFunction: function () {
                    return {
                        fetch_availability: e,
                        fetch_nullstate: h != null,
                        fetch_recent_searches: g != null,
                        fetch_search_badge: f,
                        filter: g,
                        first: j,
                        scale: d("WebPixelRatio").get(),
                        search_null_state_argument: h != null ? {
                            surface: {
                                name: h
                            }
                        } : {
                            surface: {
                                name: "GLOBAL"
                            }
                        },
                        search_scope_entity_id: k
                    }
                },
                relayEnvironment: l
            })
        }, [m, f, g, h, l, k])
    }
    g["default"] = a
}), 98);





import { useMemo } from 'react';

import Actor from './Actor';
import { CometRelay } from 'CometRelay';
import { CometSearchRecentDataSource } from './CometSearchRecentDataSource';
import { query as recentQuery } from './CometSearchRecentDataSource.query';
import { WebPixelRatio } from './WebPixelRatio';
import { XCometActivityLogControllerRouteBuilder } from './XCometActivityLogControllerRouteBuilder';

interface Options {
  fetchAvailability?: boolean;
  fetchSearchBadge?: boolean; 
  filter?: string;
  nullStateSurface?: string;
  searchScopeEntityID?: string;
}

const useSearchCometRecentSearchDataSource = (options: Options) => {

  const { 
    fetchAvailability = false,
    fetchSearchBadge = false,
    filter,
    nullStateSurface,
    searchScopeEntityID    
  } = options;
  
  const environment = CometRelay.useRelayEnvironment();

  const [actor] = Actor.useActor();

  const activityLogURL = XCometActivityLogControllerRouteBuilder.buildURL({
    category_key: 'SEARCH',
    entry_point: 'edit_search_history', 
    log_filter: 'search',
    vanity: actor
  });

  return useMemo(() => {

    return new CometSearchRecentDataSource({
      activityLogURL,
      gqlQuery: recentQuery.query,
      limit: 16,
      normalize: recentQuery.normalize,
      queryVariablesBuilderFunction: () => ({
        fetch_availability: fetchAvailability,
        fetch_nullstate: nullStateSurface != null,
        fetch_recent_searches: filter != null,
        fetch_search_badge: fetchSearchBadge,
        filter,
        first: 16, 
        scale: WebPixelRatio.get(),
        search_null_state_argument: 
          nullStateSurface != null ? { surface: { name: nullStateSurface } } : { surface: { name: 'GLOBAL' } },
        search_scope_entity_id: searchScopeEntityID,
      }),
      relayEnvironment: environment,
    });

  }, [
    activityLogURL, 
    fetchSearchBadge,
    filter, 
    nullStateSurface,
    environment,
    searchScopeEntityID
  ]);

};

export default useSearchCometRecentSearchDataSource;