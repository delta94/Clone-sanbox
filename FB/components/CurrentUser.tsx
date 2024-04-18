__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], (function (a, b, c, d, e, f) {
    var g, h = {
        getID: function () {
            return (g || (g = b("CurrentUserInitialData"))).USER_ID
        },
        getAccountID: function () {
            return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID
        },
        getPossiblyNonFacebookUserID: function () {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID) != null ? a : this.getID()
        },
        getEIMU: function () {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).IG_USER_EIMU) != null ? a : "0"
        },
        getEmployeeWorkUserID: function () {
            return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID
        },
        getName: function () {
            return (g || (g = b("CurrentUserInitialData"))).NAME
        },
        getShortName: function () {
            return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME
        },
        getEPOU: function () {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).EPOU_ID) != null ? a : "0"
        },
        getEOCPU: function () {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).EOCPU_ID) != null ? a : "0"
        },
        isLoggedIn: function () {
            return h.getPossiblyNonFacebookUserID() !== "0"
        },
        isLoggedInNow: function () {
            var a;
            if (!h.isLoggedIn()) return !1;
            if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).IS_ENTERPRISE_USER || (g || (g = b("CurrentUserInitialData"))).IS_IMAGINE_USER || (g || (g = b("CurrentUserInitialData"))).IS_INSTAGRAM_USER || (g || (g = b("CurrentUserInitialData"))).IS_META_SPARK_USER || (g || (g = b("CurrentUserInitialData"))).IS_OCULUS_USER || (g || (g = b("CurrentUserInitialData"))).IS_TOGETHER_APP_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORKROOMS_USER) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID === b("Cookie").get("c_user");
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === !0 ? (g || (g = b("CurrentUserInitialData"))).USER_ID == b("Cookie").get("c_user") : (g || (g = b("CurrentUserInitialData"))).USER_ID === ((a = b("Cookie").get("i_user")) != null ? a : b("Cookie").get("c_user"))
        },
        isEmployee: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE
        },
        isTestUser: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER
        },
        hasWorkUser: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER
        },
        isWorkUser: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER
        },
        isWorkroomsUser: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_WORKROOMS_USER
        },
        isGray: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY
        },
        isUnderage: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE
        },
        isMessengerOnlyUser: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER
        },
        isDeactivatedAllowedOnMessenger: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER
        },
        isMessengerCallGuestUser: function () {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER
        },
        isBusinessPersonAccount: function () {
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT
        },
        hasSecondaryBusinessPerson: function () {
            return (g || (g = b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON
        },
        getAppID: function () {
            return (g || (g = b("CurrentUserInitialData"))).APP_ID
        },
        isFacebookWorkAccount: function () {
            return (g || (g = b("CurrentUserInitialData"))).IS_FACEBOOK_WORK_ACCOUNT
        },
        getPageMessagingMailboxId: function () {
            var a;
            return String((a = (g || (g = b("CurrentUserInitialData"))).PAGE_MESSAGING_MAILBOX_ID) != null ? a : "0")
        }
    };
    e.exports = h
}), null);

import { Cookie } from "./Cookie";
import { CurrentUserInitialData } from "./CurrentUserInitialData";

type CurrentUserType = {
 getID: () => string;
 getAccountID: () => string;
 getPossiblyNonFacebookUserID: () => string;
 getEIMU: () => string;
 getEmployeeWorkUserID: () => string;
 getName: () => string;
 getShortName: () => string;
 getEPOU: () => string;
 getEOCPU: () => string;
 isLoggedIn: () => boolean;
 isLoggedInNow: () => boolean;
 isEmployee: () => boolean;
 isTestUser: () => boolean;
 hasWorkUser: () => boolean;
 isWorkUser: () => boolean;
 isWorkroomsUser: () => boolean;
 isGray: () => boolean;
 isUnderage: () => boolean;
 isMessengerOnlyUser: () => boolean;
 isDeactivatedAllowedOnMessenger: () => boolean;
 isMessengerCallGuestUser: () => boolean;
 isBusinessPersonAccount: () => boolean;
 hasSecondaryBusinessPerson: () => boolean;
 getAppID: () => string;
 isFacebookWorkAccount: () => boolean;
 getPageMessagingMailboxId: () => string;
};

const CurrentUser: CurrentUserType = {
 getID(): string {
   return (CurrentUserInitialData?.USER_ID) ?? "";
 },
 getAccountID(): string {
   return (CurrentUserInitialData?.ACCOUNT_ID) ?? "";
 },
 getPossiblyNonFacebookUserID(): string {
   return (CurrentUserInitialData?.NON_FACEBOOK_USER_ID) ?? this.getID();
 },
 getEIMU(): string {
   return (CurrentUserInitialData?.IG_USER_EIMU) ?? "0";
 },
 getEmployeeWorkUserID(): string {
   return (CurrentUserInitialData?.WORK_USER_ID) ?? "";
 },
 getName(): string {
   return (CurrentUserInitialData?.NAME) ?? "";
 },
 getShortName(): string {
   return (CurrentUserInitialData?.SHORT_NAME) ?? "";
 },
 getEPOU(): string {
   return (CurrentUserInitialData?.EPOU_ID) ?? "0";
 },
 getEOCPU(): string {
   return (CurrentUserInitialData?.EOCPU_ID) ?? "0";
 },
 isLoggedIn(): boolean {
   return this.getPossiblyNonFacebookUserID() !== "0";
 },
 isLoggedInNow(): boolean {
   if (!this.isLoggedIn()) return false;
   if (CurrentUserInitialData?.IS_INTERN_SITE) return true;
   if (
     CurrentUserInitialData?.IS_ENTERPRISE_USER ||
     CurrentUserInitialData?.IS_IMAGINE_USER ||
     CurrentUserInitialData?.IS_INSTAGRAM_USER ||
     CurrentUserInitialData?.IS_META_SPARK_USER ||
     CurrentUserInitialData?.IS_OCULUS_USER ||
     CurrentUserInitialData?.IS_TOGETHER_APP_USER ||
     CurrentUserInitialData?.IS_WORK_MESSENGER_CALL_GUEST_USER ||
     CurrentUserInitialData?.IS_WORK_USER ||
     CurrentUserInitialData?.IS_WORKROOMS_USER
   )
     return true;
   if (CurrentUserInitialData?.ORIGINAL_USER_ID !== null && CurrentUserInitialData?.ORIGINAL_USER_ID !== "")
     return CurrentUserInitialData.ORIGINAL_USER_ID === Cookie.get("c_user");
   return CurrentUserInitialData?.IS_BUSINESS_DOMAIN === true
     ? CurrentUserInitialData.USER_ID === Cookie.get("c_user")
     : CurrentUserInitialData.USER_ID === (Cookie.get("i_user") ?? Cookie.get("c_user"));
 },
 isEmployee(): boolean {
   return !!CurrentUserInitialData?.IS_EMPLOYEE;
 },
 isTestUser(): boolean {
   return !!CurrentUserInitialData?.IS_TEST_USER;
 },
 hasWorkUser(): boolean {
   return !!CurrentUserInitialData?.HAS_WORK_USER;
 },
 isWorkUser(): boolean {
   return !!CurrentUserInitialData?.IS_WORK_USER;
 },
 isWorkroomsUser(): boolean {
   return !!CurrentUserInitialData?.IS_WORKROOMS_USER;
 },
 isGray(): boolean {
   return !!CurrentUserInitialData?.IS_GRAY;
 },
 isUnderage(): boolean {
   return !!CurrentUserInitialData?.IS_UNDERAGE;
 },
 isMessengerOnlyUser(): boolean {
   return !!CurrentUserInitialData?.IS_MESSENGER_ONLY_USER;
 },
 isDeactivatedAllowedOnMessenger(): boolean {
   return !!CurrentUserInitialData?.IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
 },
 isMessengerCallGuestUser(): boolean {
   return !!CurrentUserInitialData?.IS_MESSENGER_CALL_GUEST_USER;
 },
 isBusinessPersonAccount(): boolean {
   return !!CurrentUserInitialData?.IS_BUSINESS_PERSON_ACCOUNT;
 },
 hasSecondaryBusinessPerson(): boolean {
   return !!CurrentUserInitialData?.HAS_SECONDARY_BUSINESS_PERSON;
 },
 getAppID(): string {
   return (CurrentUserInitialData?.APP_ID) ?? "";
 },
 isFacebookWorkAccount(): boolean {
   return !!CurrentUserInitialData?.IS_FACEBOOK_WORK_ACCOUNT;
 },
 getPageMessagingMailboxId(): string {
   return String(CurrentUserInitialData?.PAGE_MESSAGING_MAILBOX_ID ?? "0");
 },
};

export default CurrentUser;