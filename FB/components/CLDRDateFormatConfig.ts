export const CLDRDateFormatConfig = {
  supportedPHPFormatsKeys: {
    D: "E",
    "D g:ia": "Ejm",
    "D M d": "MMMEd",
    "D M d, Y": "yMMMEd",
    "D M j": "MMMEd",
    "D M j, y": "yMMMEd",
    "D, M j": "MMMEd",
    "D, M j, Y": "yMMMEd",
    "F d": "MMMMd",
    "F d, Y": "date_long",
    "F j": "MMMMd",
    "F j, Y": "date_long",
    "F j, Y @ g:i A": "dateTime_long_short",
    "F j, Y g:i a": "dateTime_long_short",
    "F j, Y @ g:i:s A": "dateTime_long_medium",
    "F jS": "MMMMd",
    "F jS, g:ia": "dateTime_long_short",
    "F jS, Y": "date_long",
    "F Y": "yMMMM",
    "g A": "j",
    "G:i": "time_short",
    "g:i": "time_short",
    "g:i a": "time_short",
    "g:i A": "time_short",
    "g:i:s A": "time_medium",
    "g:ia": "time_short",
    "g:iA": "time_short",
    "g:ia F jS, Y": "dateTime_long_short",
    "g:iA l, F jS": "dateTime_full_short",
    "g:ia M jS": "dateTime_medium_short",
    "g:ia, F jS": "dateTime_long_short",
    "g:iA, l M jS": "dateTime_full_short",
    "h:i a": "time_short",
    "h:m:s m/d/Y": "dateTime_short_short",
    j: "d",
    "j F Y": "date_long",
    "l F d, Y": "date_full",
    "l, F d, Y": "date_full",
    "l, F j": "date_full",
    "l, F j, Y": "date_full",
    "l, F jS": "date_full",
    "l, F jS, g:ia": "dateTime_full_short",
    "l, M j": "date_full",
    "l, M j, Y": "date_full",
    "l, M j, Y g:ia": "dateTime_full_short",
    "M d": "MMMd",
    "M d, Y": "date_medium",
    "M d, Y g:ia": "dateTime_medium_short",
    "M d, Y ga": "dateTime_medium_short",
    "M j": "MMMd",
    "M j, Y": "date_medium",
    "M j, Y g:i A": "dateTime_medium_short",
    "M j, Y g:ia": "dateTime_medium_short",
    "M jS, g:ia": "dateTime_medium_short",
    "M y": "yMMM",
    "M Y": "yMMM",
    "M. d": "MMMd",
    "M. d, Y": "date_medium",
    "m/d": "Md",
    "m/d/Y g:ia": "dateTime_short_short",
    "m/d/y H:i:s": "dateTime_short_short",
    n: "M",
    "n/j": "Md",
    "n/j, g:ia": "dateTime_short_short",
    "n/j/y": "date_short",
    Y: "y",
  },
  isLocaleInConfigerator: true,
  CLDRConfigeratorFormats: {
    dateFormats: {
      full: "EEEE, d MMMM, y",
      long: "d MMMM, y",
      medium: "d MMM, y",
      short: "d/M/yy",
    },
    timeFormats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm",
    },
    dateTimeFormats: {
      full: "{0} {1}",
      long: "{0} {1}",
      medium: "{0} {1}",
      short: "{0} {1}",
    },
    availableFormats: {
      Bh: "h 'giờ' B",
      Bhm: "h:mm B",
      Bhms: "h:mm:ss B",
      E: "ccc",
      EBhm: "h:mm B E",
      EBhms: "h:mm:ss B E",
      EHm: "HH:mm E",
      EHms: "HH:mm:ss E",
      Ed: "E, 'ngày' d",
      Ehm: "h:mm a E",
      Ehms: "h:mm:ss a E",
      Gy: "y G",
      GyMMM: "MMM y G",
      GyMMMEd: "E, d MMM, y G",
      GyMMMd: "d MMM, y G",
      GyMd: "d/M/y G",
      H: "HH 'giờ'",
      Hm: "H:mm",
      Hms: "HH:mm:ss",
      Hmsv: "HH:mm:ss v",
      Hmv: "HH:mm v",
      M: "L",
      MEd: "E, d/M",
      MMM: "LLL",
      MMMEd: "E, d MMM",
      MMMMEd: "E, d MMMM",
      "MMMMW-count-other": "'tuần' W 'của' 'tháng' M",
      MMMMd: "d MMMM",
      MMMd: "d MMM",
      MMdd: "dd-MM",
      Md: "d/M",
      d: "d",
      h: "h a",
      hm: "h:mm a",
      hms: "h:mm:ss a",
      hmsv: "h:mm:ss a v",
      hmv: "h:mm a v",
      mmss: "mm:ss",
      ms: "mm:ss",
      y: "y",
      yM: "M/y",
      yMEd: "E, d/M/y",
      yMM: "'tháng' MM, y",
      yMMM: "MMM y",
      yMMMEd: "E, d MMM, y",
      yMMMM: "MMMM 'năm' y",
      yMMMd: "d MMM, y",
      yMd: "d/M/y",
      yQQQ: "QQQ y",
      yQQQQ: "QQQQ 'năm' y",
      "yw-count-other": "'tuần' w 'của' 'năm' Y",
    },
  },
  CLDRRegionalConfigeratorFormats: {
    dateFormats: {
      full: "EEEE, d MMMM, y",
      long: "d MMMM, y",
      medium: "d MMM, y",
      short: "d/M/yy",
    },
    timeFormats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm",
    },
    dateTimeFormats: {
      full: "{0} {1}",
      long: "{0} {1}",
      medium: "{0} {1}",
      short: "{0} {1}",
    },
    availableFormats: {
      Bh: "h 'giờ' B",
      Bhm: "h:mm B",
      Bhms: "h:mm:ss B",
      E: "ccc",
      EBhm: "h:mm B E",
      EBhms: "h:mm:ss B E",
      EHm: "HH:mm E",
      EHms: "HH:mm:ss E",
      Ed: "E, 'ngày' d",
      Ehm: "h:mm a E",
      Ehms: "h:mm:ss a E",
      Gy: "y G",
      GyMMM: "MMM y G",
      GyMMMEd: "E, d MMM, y G",
      GyMMMd: "d MMM, y G",
      GyMd: "d/M/y G",
      H: "HH 'giờ'",
      Hm: "H:mm",
      Hms: "HH:mm:ss",
      Hmsv: "HH:mm:ss v",
      Hmv: "HH:mm v",
      M: "L",
      MEd: "E, d/M",
      MMM: "LLL",
      MMMEd: "E, d MMM",
      MMMMEd: "E, d MMMM",
      "MMMMW-count-other": "'tuần' W 'của' 'tháng' M",
      MMMMd: "d MMMM",
      MMMd: "d MMM",
      MMdd: "dd-MM",
      Md: "d/M",
      d: "d",
      h: "h a",
      hm: "h:mm a",
      hms: "h:mm:ss a",
      hmsv: "h:mm:ss a v",
      hmv: "h:mm a v",
      mmss: "mm:ss",
      ms: "mm:ss",
      y: "y",
      yM: "M/y",
      yMEd: "E, d/M/y",
      yMM: "'tháng' MM, y",
      yMMM: "MMM y",
      yMMMEd: "E, d MMM, y",
      yMMMM: "MMMM 'năm' y",
      yMMMd: "d MMM, y",
      yMd: "d/M/y",
      yQQQ: "QQQ y",
      yQQQQ: "QQQQ 'năm' y",
      "yw-count-other": "'tuần' w 'của' 'năm' Y",
    },
  },
  CLDRToPHPSymbolConversion: {
    G: "",
    yyyy: "Y",
    yy: "y",
    y: "Y",
    LLLLL: "M",
    LLLL: "f",
    LLL: "M",
    LL: "m",
    L: "n",
    MMMMM: "M",
    MMMM: "F",
    MMM: "M",
    MM: "m",
    M: "n",
    dd: "d",
    d: "j",
    ccccc: "D",
    cccc: "l",
    ccc: "D",
    cc: "D",
    c: "D",
    EEEEE: "D",
    EEEE: "l",
    EEE: "D",
    EE: "D",
    E: "D",
    aaaaa: "A",
    aaaa: "A",
    aaa: "A",
    aa: "A",
    a: "A",
    bbbbb: "A",
    bbbb: "A",
    bbb: "A",
    bb: "A",
    b: "A",
    BBBBB: "A",
    BBBB: "A",
    BBB: "A",
    BB: "A",
    B: "A",
    HH: "H",
    H: "G",
    hh: "h",
    h: "g",
    K: "g",
    mm: "i",
    m: "i",
    ss: "s",
    s: "s",
    z: "",
    zz: "",
    zzz: "",
  },
  intlDateSpecialChars: {
    cldrDelimiter: "'",
    singleQuote: "'",
    singleQuoteHolder: "*",
  },
};
