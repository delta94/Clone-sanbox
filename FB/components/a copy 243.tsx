__d("CurrentMessengerUser", ["CurrentEnvironment", "CurrentUser"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return c("CurrentUser").getID()
    }

    function b() {
        return c("CurrentEnvironment").instagramdotcom ? c("CurrentUser").getEIMU() : c("CurrentUser").getID()
    }

    function d() {
        return c("CurrentUser").getPageMessagingMailboxId()
    }

    function e() {
        return c("CurrentUser").isWorkUser()
    }

    function f() {
        return c("CurrentUser").isTestUser()
    }

    function h() {
        return c("CurrentUser").isEmployee()
    }

    function i() {
        return c("CurrentUser").getAppID()
    }

    function j() {
        return c("CurrentUser").getAccountID()
    }

    function k() {
        return c("CurrentUser").isLoggedInNow()
    }
    g.getID = a;
    g.getIDorEIMU = b;
    g.getPageMessagingMailboxId = d;
    g.isWorkUser = e;
    g.isTestUser = f;
    g.isEmployee = h;
    g.getAppID = i;
    g.getAccountID = j;
    g.isLoggedInNow = k
}), 98);

import { CurrentEnvironment, CurrentUser } from './types'; // Assuming types are defined in a separate file

export const getCurrentMessengerUserID = (): string => {
  return CurrentUser.getID();
};

export const getCurrentMessengerUserOrEIMU = (): string => {
  return CurrentEnvironment.instagramdotcom ? CurrentUser.getEIMU() : CurrentUser.getID();
};

export const getPageMessagingMailboxID = (): string => {
  return CurrentUser.getPageMessagingMailboxId();
};

export const isWorkUser = (): boolean => {
  return CurrentUser.isWorkUser();
};

export const isTestUser = (): boolean => {
  return CurrentUser.isTestUser();
};

export const isEmployee = (): boolean => {
  return CurrentUser.isEmployee();
};

export const getCurrentAppID = (): string => {
  return CurrentUser.getAppID();
};

export const getCurrentAccountID = (): string => {
  return CurrentUser.getAccountID();
};

export const isLoggedInNow = (): boolean => {
  return CurrentUser.isLoggedInNow();
};
