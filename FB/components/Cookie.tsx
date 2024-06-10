__d(
  "Cookie",
  ["CookieConsent", "CookieCore", "InitialCookieConsent", "ODS"],
  function (a, b, c, d, e, f, g) {
    var h, i, j;

    function k(a) {
      if (!(j || (j = c("CookieConsent"))).hasConsent(1)) {
        (h || (h = d("ODS"))).bumpEntityKey(798, "defer_cookies", "set." + a);
        return !1;
      }
      return !0;
    }

    function l() {
      return !(i || (i = c("InitialCookieConsent"))).noCookies;
    }

    function a(a, b) {
      if (!l() || !k(a)) return;
      d("CookieCore").set(a, b);
    }

    function b(a, b) {
      if (!l()) return;
      d("CookieCore").set(a, b);
    }

    function e(a, b, c, e, f, g) {
      if (!l() || !k(a)) return;
      d("CookieCore").setWithoutChecks(a, b, c, e, f, null, g);
    }
    a = {
      clear: (f = d("CookieCore")).clear,
      get: f.get,
      set: a,
      setIfFirstPartyContext: f.setIfFirstPartyContext,
      setWithoutCheckingUserConsent_DANGEROUS: b,
      setWithoutChecks: e,
      setWithoutChecksIfFirstPartyContext:
        f.setWithoutChecksIfFirstPartyContext,
    };
    g["default"] = a;
  },
  98
);

import CookieConsent from "./CookieConsent";
import CookieCore from "./CookieCore";
import InitialCookieConsent from "./InitialCookieConsent";
import ODS from "./ODS";

type CookieType = {
  clear: () => void;
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
  setIfFirstPartyContext: (name: string, value: string) => void;
  setWithoutCheckingUserConsent_DANGEROUS: (
    name: string,
    value: string
  ) => void;
  setWithoutChecks: (
    name: string,
    value: string,
    expires?: number,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: string
  ) => void;
  setWithoutChecksIfFirstPartyContext: (
    name: string,
    value: string,
    expires?: number,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: string
  ) => void;
};

let CookieConsent_: CookieConsent | null = null;
let InitialCookieConsent_: InitialCookieConsent | null = null;
let ODS_: ODS | null = null;

function hasUserConsent(feature: number): boolean {
  if (
    !(CookieConsent_ || (CookieConsent_ = new CookieConsent())).hasConsent(
      feature
    )
  ) {
    if (ODS_ || (ODS_ = new ODS())) {
      ODS_.bumpEntityKey(798, "defer_cookies", "set." + feature);
    }
    return false;
  }
  return true;
}

function noCookiesAllowed(): boolean {
  return !(
    InitialCookieConsent_ ||
    (InitialCookieConsent_ = new InitialCookieConsent())
  ).noCookies;
}

const Cookie: CookieType = {
  clear: CookieCore.clear,
  get: CookieCore.get,
  set: (name: string, value: string) => {
    if (!noCookiesAllowed() && hasUserConsent(1)) {
      CookieCore.set(name, value);
    }
  },
  setIfFirstPartyContext: CookieCore.setIfFirstPartyContext,
  setWithoutCheckingUserConsent_DANGEROUS: (name: string, value: string) => {
    if (!noCookiesAllowed()) {
      CookieCore.set(name, value);
    }
  },
  setWithoutChecks: (
    name: string,
    value: string,
    expires?: number,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: string
  ) => {
    if (!noCookiesAllowed() && hasUserConsent(1)) {
      CookieCore.setWithoutChecks(
        name,
        value,
        expires,
        path,
        domain,
        secure,
        sameSite
      );
    }
  },
  setWithoutChecksIfFirstPartyContext:
    CookieCore.setWithoutChecksIfFirstPartyContext,
};

export default Cookie;
