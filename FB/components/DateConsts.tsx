__d(
  "DateConsts",
  [],
  function (a, b, c, d, e, f) {
    var g = 1e3;
    c = 60;
    d = 60;
    e = 24;
    var h = 7,
      i = 12,
      j = 1e3,
      k = 30.43,
      l = 4.333,
      m = 365.242,
      n = c * d,
      o = n * e,
      p = o * h,
      q = o * m,
      r = g * c,
      s = r * d,
      t = g * o,
      u = t * h,
      v = t * m,
      w = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
      };
    Object.freeze(w);
    function a(a, b) {
      return new Date(a, b, 0).getDate();
    }
    function b() {
      return Date.now() / g;
    }
    var x = { instantRange: { since: -864e10, until: 864e10 + 1 } };
    f.MS_PER_SEC = g;
    f.SEC_PER_MIN = c;
    f.MIN_PER_HOUR = d;
    f.HOUR_PER_DAY = e;
    f.DAYS_PER_WEEK = h;
    f.MONTHS_PER_YEAR = i;
    f.US_PER_MS = j;
    f.AVG_DAYS_PER_MONTH = k;
    f.AVG_WEEKS_PER_MONTH = l;
    f.AVG_DAYS_PER_YEAR = m;
    f.SEC_PER_HOUR = n;
    f.SEC_PER_DAY = o;
    f.SEC_PER_WEEK = p;
    f.SEC_PER_YEAR = q;
    f.MS_PER_MIN = r;
    f.MS_PER_HOUR = s;
    f.MS_PER_DAY = t;
    f.MS_PER_WEEK = u;
    f.MS_PER_YEAR = v;
    f.DAYS = w;
    f.getDaysInMonth = a;
    f.getCurrentTimeInSeconds = b;
    f["private"] = x;
  },
  66
);

const MS_PER_SEC = 1000;
const SEC_PER_MIN = 60;
const MIN_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const MONTHS_PER_YEAR = 12;
const US_PER_MS = 1000;
const AVG_DAYS_PER_MONTH = 30.43;
const AVG_WEEKS_PER_MONTH = 4.333;
const AVG_DAYS_PER_YEAR = 365.242;

const SEC_PER_HOUR = SEC_PER_MIN * MIN_PER_HOUR;
const SEC_PER_DAY = SEC_PER_HOUR * HOUR_PER_DAY;
const SEC_PER_WEEK = SEC_PER_DAY * DAYS_PER_WEEK;
const SEC_PER_YEAR = SEC_PER_DAY * AVG_DAYS_PER_YEAR;

const MS_PER_MIN = MS_PER_SEC * SEC_PER_MIN;
const MS_PER_HOUR = MS_PER_MIN * MIN_PER_HOUR;
const MS_PER_DAY = MS_PER_HOUR * HOUR_PER_DAY;
const MS_PER_WEEK = MS_PER_DAY * DAYS_PER_WEEK;
const MS_PER_YEAR = MS_PER_DAY * AVG_DAYS_PER_YEAR;

const DAYS = Object.freeze({
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
} as const);

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function getCurrentTimeInSeconds(): number {
  return Date.now() / MS_PER_SEC;
}

const instantRange = {
  since: -864e10,
  until: 864e10 + 1,
};

export {
  MS_PER_SEC,
  SEC_PER_MIN,
  MIN_PER_HOUR,
  HOUR_PER_DAY,
  DAYS_PER_WEEK,
  MONTHS_PER_YEAR,
  US_PER_MS,
  AVG_DAYS_PER_MONTH,
  AVG_WEEKS_PER_MONTH,
  AVG_DAYS_PER_YEAR,
  SEC_PER_HOUR,
  SEC_PER_DAY,
  SEC_PER_WEEK,
  SEC_PER_YEAR,
  MS_PER_MIN,
  MS_PER_HOUR,
  MS_PER_DAY,
  MS_PER_WEEK,
  MS_PER_YEAR,
  DAYS,
  getDaysInMonth,
  getCurrentTimeInSeconds,
  instantRange,
};
