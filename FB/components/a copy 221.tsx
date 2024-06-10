__d(
  "LSFilteredThreadsRangesQueryStoredProcedure",
  ["LSFilteredThreadsRangesQuery", "cr:8709"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      var d = [];
      d[0] = b.parentThreadKey;
      d[1] = b.filter;
      d[2] = b.isLoadingBefore;
      d[3] = b.isLoadingAfter;
      d[4] = b.minThreadKey;
      d[5] = b.maxThreadKey;
      d[6] = b.maxLastActivityTimestampMs;
      d[7] = b.minLastActivityTimestampMs;
      d[8] = b.numThreads;
      d[9] = b.numMessages;
      d[10] = b.secondaryFilter;
      d[11] = b.filterValue;
      return c("LSFilteredThreadsRangesQuery").apply(void 0, d.concat([a]));
    }
    g["default"] = a;
  },
  98
);

import LSFilteredThreadsRangesQuery from "./LSFilteredThreadsRangesQuery";
// Assuming cr:8709 is an external dependency, import it if needed

interface LSFilteredThreadsRangesQueryParams {
  parentThreadKey: string;
  filter: string;
  isLoadingBefore: boolean;
  isLoadingAfter: boolean;
  minThreadKey: string;
  maxThreadKey: string;
  maxLastActivityTimestampMs: number;
  minLastActivityTimestampMs: number;
  numThreads: number;
  numMessages: number;
  secondaryFilter: string;
  filterValue: string;
}

function LSFilteredThreadsRangesQueryStoredProcedure(
  store: any, // Assuming 'store' represents some context or configuration parameter
  queryOptions: LSFilteredThreadsRangesQueryParams
): any {
  const {
    parentThreadKey,
    filter,
    isLoadingBefore,
    isLoadingAfter,
    minThreadKey,
    maxThreadKey,
    maxLastActivityTimestampMs,
    minLastActivityTimestampMs,
    numThreads,
    numMessages,
    secondaryFilter,
    filterValue,
  } = queryOptions;

  const queryParams = [
    parentThreadKey,
    filter,
    isLoadingBefore,
    isLoadingAfter,
    minThreadKey,
    maxThreadKey,
    maxLastActivityTimestampMs,
    minLastActivityTimestampMs,
    numThreads,
    numMessages,
    secondaryFilter,
    filterValue,
  ];

  return LSFilteredThreadsRangesQuery(...queryParams, store);
}

export default LSFilteredThreadsRangesQueryStoredProcedure;
