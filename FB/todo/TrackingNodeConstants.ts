export const BASE_CODE_START: number = 58;
export const BASE_CODE_END: number = 126;
export const BASE_CODE_SIZE: number = 69;
export const PREFIX_CODE_START: number = 42;
export const PREFIX_CODE_END: number = 47;
export const PREFIX_CODE_SIZE: number = 6;
export const ENCODE_NUMBER_MAX: number = 100;
export const ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE: number = 33;
export const ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE: number = 38;
export const TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING: number = (PREFIX_CODE_SIZE + 1) * BASE_CODE_SIZE;
export const TN_URL_PARAM: string = "__tn__";



__d("TrackingNodeConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 58;
    b = 126;
    c = 69;
    d = 42;
    e = 47;
    var g = 6
      , h = 100
      , i = 33
      , j = 38
      , k = (g + 1) * c
      , l = "__tn__";
    f.BASE_CODE_START = a;
    f.BASE_CODE_END = b;
    f.BASE_CODE_SIZE = c;
    f.PREFIX_CODE_START = d;
    f.PREFIX_CODE_END = e;
    f.PREFIX_CODE_SIZE = g;
    f.ENCODE_NUMBER_MAX = h;
    f.ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE = i;
    f.ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE = j;
    f.TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING = k;
    f.TN_URL_PARAM = l
}
), 66);
