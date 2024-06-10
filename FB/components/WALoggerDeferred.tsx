__d(
  "WALoggerDeferred",
  ["requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("WATagsLogger").__setRef("WALoggerDeferred");
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.load().then(function (b) {
        return b.whenReady().then(function () {
          var d;
          return (d = b.TAGS([])).DEV.apply(d, [a].concat(c));
        });
      });
    }
    function b(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.load().then(function (b) {
        return b.whenReady().then(function () {
          var d;
          return (d = b.TAGS([])).DEV_XMPP.apply(d, [a].concat(c));
        });
      });
    }
    function d(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.load().then(function (b) {
        return b.whenReady().then(function () {
          var d;
          return (d = b.TAGS([])).LOG.apply(d, [a].concat(c));
        });
      });
    }
    function e(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.load().then(function (b) {
        return b.whenReady().then(function () {
          var d;
          return (d = b.TAGS([])).WARN.apply(d, [a].concat(c));
        });
      });
    }
    function f(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.load().then(function (b) {
        return b.whenReady().then(function () {
          var d;
          return (d = b.TAGS([])).ERROR.apply(d, [a].concat(c));
        });
      });
    }
    function i(a, b, c) {
      return h.load().then(function (d) {
        return d
          .whenReady()
          .then(function () {
            return d.TAGS(a);
          })
          .then(function (a) {
            a[c](b);
          });
      });
    }
    g.DEV = a;
    g.DEV_XMPP = b;
    g.LOG = d;
    g.WARN = e;
    g.ERROR = f;
    g.logWithTags = i;
  },
  98
);

import { requireDeferred } from "./requireDeferred"; // Adjust the import path if needed

const WATagsLoggerPromise = requireDeferred("WATagsLogger");

// Type for the logger (add more methods/properties if the real logger has them)
interface ILogger {
  TAGS(tags: any[]): any; // Adjust the type of 'tags' if known
  whenReady(): Promise<ILogger>;
  DEV(...args: any[]): void;
  DEV_XMPP(...args: any[]): void;
  LOG(...args: any[]): void;
  WARN(...args: any[]): void;
  ERROR(...args: any[]): void;
}

async function logWithTags(
  tags: any[],
  message: string,
  level: keyof ILogger
): Promise<void> {
  const logger = await WATagsLoggerPromise;
  await logger.whenReady();
  logger.TAGS(tags)[level](message);
}

// Logging Functions (Using async/await for cleaner code)
async function DEV(message: string, ...args: any[]): Promise<void> {
  await logWithTags([], message, "DEV"); // No tags for DEV
}

async function DEV_XMPP(message: string, ...args: any[]): Promise<void> {
  await logWithTags([], message, "DEV_XMPP"); // No tags for DEV_XMPP
}

async function LOG(message: string, ...args: any[]): Promise<void> {
  await logWithTags([], message, "LOG"); // No tags for LOG
}

async function WARN(message: string, ...args: any[]): Promise<void> {
  await logWithTags([], message, "WARN"); // No tags for WARN
}

async function ERROR(message: string, ...args: any[]): Promise<void> {
  await logWithTags([], message, "ERROR"); // No tags for ERROR
}

// Export
export { DEV, DEV_XMPP, LOG, WARN, ERROR, logWithTags };
