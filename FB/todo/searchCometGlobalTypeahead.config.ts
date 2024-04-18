__d("searchCometGlobalTypeahead.config", [], (function (a, b, c, d, e, f) {
    "use strict";
    a = 8;
    b = {
        dataSources: {
            bootstrapKeywordsDataSourceParams: {
                queryVariables: {
                    first: 2e3
                }
            },
            keywordDataSourceParams: {
                queryVariables: {
                    fetch_count: a,
                    fetch_mode: "blended"
                }
            }
        },
        logging: {
            sessionContext: "SEARCH_GLOBAL"
        },
        view: {
            renderLimit: a,
            sectionLimits: new Map([
                ["other", a],
                ["recent_searches", a]
            ])
        }
    };
    f["default"] = b
}), 66);


import { TypeaheadConfig } from 'comet/typeahead/config';

interface SearchCometGlobalConfig extends TypeaheadConfig {
  dataSources: {
    bootstrapKeywordsDataSourceParams: {
      queryVariables: {
        first: number;  
      };
    };
    keywordDataSourceParams: {
      queryVariables: {
        fetch_count: number;
        fetch_mode: string;   
      };
    };
  };
  logging: {
    sessionContext: string; 
  };
  view: {
    renderLimit: number;
    sectionLimits: Map<string, number>; 
  };
}

const fetchCount = 8;

const config: SearchCometGlobalConfig = {
  dataSources: {
    bootstrapKeywordsDataSourceParams: {
      queryVariables: {
        first: 2000  
      }
    },
    keywordDataSourceParams: {
      queryVariables: {
        fetch_count: fetchCount,
        fetch_mode: 'blended'  
      }
    }
  },
  logging: {
    sessionContext: 'SEARCH_GLOBAL'
  },
  view: {
    renderLimit: fetchCount,
    sectionLimits: new Map([
      ['other', fetchCount],
      ['recent_searches', fetchCount]  
    ])
  }
};

export default config;