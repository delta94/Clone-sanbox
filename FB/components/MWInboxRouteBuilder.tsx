__d(
  "MWInboxRouteBuilder",
  [
    "CurrentEnvironment",
    "XCometMessengerControllerRouteBuilder",
    "XCometMessengerE2EEThreadControllerRouteBuilder",
    "XMessengerDotComCometE2EEThreadControllerRouteBuilder",
    "XMessengerDotComCometMainControllerRouteBuilder",
    "XMessengerDotComCometRootControllerRouteBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("CurrentEnvironment").facebookdotcom
      ? {
          buildE2EEThreadURL: function (a) {
            a = a.thread_key;
            return c(
              "XCometMessengerE2EEThreadControllerRouteBuilder"
            ).buildURL({ thread_key: a });
          },
          buildHomeURL: function () {
            return c("XCometMessengerControllerRouteBuilder").buildURL({});
          },
          buildNewThreadURL: function (a) {
            return c("XCometMessengerControllerRouteBuilder").buildExtraURL(
              "/messages/new/",
              a
            );
          },
          buildURL: function (a) {
            var b = a.link_hash;
            a = a.thread_key;
            return c("XCometMessengerControllerRouteBuilder").buildURL({
              link_hash: b,
              thread_key: a,
            });
          },
        }
      : {
          buildE2EEThreadURL: function (a) {
            a = a.thread_key;
            return c(
              "XMessengerDotComCometE2EEThreadControllerRouteBuilder"
            ).buildURL({ thread_key: a });
          },
          buildHomeURL: function () {
            return c(
              "XMessengerDotComCometRootControllerRouteBuilder"
            ).buildExtraURL("/t/", {});
          },
          buildNewThreadURL: function (a) {
            var b = a.extra_junk,
              d = a.initial_e2ee_toggle_position,
              e = a.link_hash;
            a = a.thread_key;
            return c(
              "XMessengerDotComCometMainControllerRouteBuilder"
            ).buildExtraURL("/new/", {
              extra_junk: b,
              initial_e2ee_toggle_position: d,
              link_hash: e,
              thread_key: a,
            });
          },
          buildURL: function (a) {
            var b = a.link_hash;
            a = a.thread_key;
            return c(
              "XMessengerDotComCometMainControllerRouteBuilder"
            ).buildURL({ link_hash: b, thread_key: a });
          },
        };
    b = a.buildURL;
    d = a.buildHomeURL;
    e = a.buildNewThreadURL;
    f = a.buildE2EEThreadURL;
    g.buildURL = b;
    g.buildHomeURL = d;
    g.buildNewThreadURL = e;
    g.buildE2EEThreadURL = f;
  },
  98
);

import CurrentEnvironment from "CurrentEnvironment";
import XCometMessengerControllerRouteBuilder from "XCometMessengerControllerRouteBuilder";
import XCometMessengerE2EEThreadControllerRouteBuilder from "XCometMessengerE2EEThreadControllerRouteBuilder";
import XMessengerDotComCometE2EEThreadControllerRouteBuilder from "XMessengerDotComCometE2EEThreadControllerRouteBuilder";
import XMessengerDotComCometMainControllerRouteBuilder from "XMessengerDotComCometMainControllerRouteBuilder";
import XMessengerDotComCometRootControllerRouteBuilder from "XMessengerDotComCometRootControllerRouteBuilder";

type ThreadKey = { thread_key: string };
type BuildNewThreadURLParams = {
  extra_junk?: string;
  initial_e2ee_toggle_position?: string;
  link_hash?: string;
  thread_key: string;
};
type BuildURLParams = {
  link_hash?: string;
  thread_key?: string;
};

interface RouteBuilder {
  buildE2EEThreadURL: (params: ThreadKey) => string;
  buildHomeURL: () => string;
  buildNewThreadURL: (params: BuildNewThreadURLParams) => string;
  buildURL: (params: BuildURLParams) => string;
}

const routeBuilder: RouteBuilder = CurrentEnvironment.facebookdotcom
  ? {
      buildE2EEThreadURL: ({ thread_key }) => {
        return XCometMessengerE2EEThreadControllerRouteBuilder.buildURL({
          thread_key,
        });
      },
      buildHomeURL: () => {
        return XCometMessengerControllerRouteBuilder.buildURL({});
      },
      buildNewThreadURL: (params) => {
        return XCometMessengerControllerRouteBuilder.buildExtraURL(
          "/messages/new/",
          params
        );
      },
      buildURL: (params) => {
        const { link_hash, thread_key } = params;
        return XCometMessengerControllerRouteBuilder.buildURL({
          link_hash,
          thread_key,
        });
      },
    }
  : {
      buildE2EEThreadURL: ({ thread_key }) => {
        return XMessengerDotComCometE2EEThreadControllerRouteBuilder.buildURL({
          thread_key,
        });
      },
      buildHomeURL: () => {
        return XMessengerDotComCometRootControllerRouteBuilder.buildExtraURL(
          "/t/",
          {}
        );
      },
      buildNewThreadURL: (params) => {
        const {
          extra_junk,
          initial_e2ee_toggle_position,
          link_hash,
          thread_key,
        } = params;
        return XMessengerDotComCometMainControllerRouteBuilder.buildExtraURL(
          "/new/",
          {
            extra_junk,
            initial_e2ee_toggle_position,
            link_hash,
            thread_key,
          }
        );
      },
      buildURL: (params) => {
        const { link_hash, thread_key } = params;
        return XMessengerDotComCometMainControllerRouteBuilder.buildURL({
          link_hash,
          thread_key,
        });
      },
    };

export const buildURL = routeBuilder.buildURL;
export const buildHomeURL = routeBuilder.buildHomeURL;
export const buildNewThreadURL = routeBuilder.buildNewThreadURL;
export const buildE2EEThreadURL = routeBuilder.buildE2EEThreadURL;
