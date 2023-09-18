// j1WJ: function(e, t, n) {
//     "use strict";
//     n.d(t, "d", (function() {
//         return l
//     }
//     )),
//     n.d(t, "e", (function() {
//         return u
//     }
//     )),
//     n.d(t, "c", (function() {
//         return d
//     }
//     )),
//     n.d(t, "f", (function() {
//         return p
//     }
//     )),
//     n.d(t, "a", (function() {
//         return s.a
//     }
//     ));
//     var r, a, i, s = n("myn6");
//     function o() {
//         return (o = Object.assign || function(e) {
//             for (var t = 1; t < arguments.length; t++) {
//                 var n = arguments[t];
//                 for (var r in n)
//                     Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//             }
//             return e
//         }
//         ).apply(this, arguments)
//     }
//     !function(e) {
//         e.Search = "search",
//         e.Messenger = "messenger",
//         e.MessengerCreateGroup = "messenger.create-group",
//         e.MessengerFeed = "messenger.feed",
//         e.MessengerPinnedChats = "messenger.pinned-chats",
//         e.MessengerChat = "messenger.chat",
//         e.MessengerChatMessage = "messenger.chat-message",
//         e.MessengerNameCard = "messenger.name-card",
//         e.Video = "video",
//         e.VC = "vc",
//         e.Doc = "doc",
//         e.Sheet = "sheet",
//         e.PPT = "ppt",
//         e.Mail = "mail",
//         e.Calendar = "calendar",
//         e.Contacts = "contacts",
//         e.ContactsShareLink = "contacts.share-link",
//         e.ContactsShareQRCode = "contacts.share-qrcode",
//         e.ContactsSearch = "contacts.search",
//         e.Other = "other"
//     }(r || (r = {})),
//     function(e) {
//         e.WechatQRCode = "wechat.qrcode",
//         e.WechatLink = "wechat.link",
//         e.LarkQRCode = "lark.qrcode",
//         e.LarkLink = "lark.link",
//         e.Other = "other"
//     }(a || (a = {})),
//     function(e) {
//         e.RustSDK = "RustSDK",
//         e.JSSDK = "JSSDK",
//         e.Memory = "memory",
//         e.LocalStorage = "LocalStorage",
//         e.IndexDB = "IndexDB",
//         e.Disk = "disk",
//         e.None = "none"
//     }(i || (i = {}));
//     const c = new s.e;
//     function l(e, t) {
//         if (!t)
//             return c.logger.startSpan(e);
//         let n;
//         t.spanId && t.traceId && (n = {
//             spanId: t.spanId,
//             traceId: t.traceId,
//             traceFlags: s.f.NONE
//         });
//         const r = o({
//             module: t.module,
//             userSource: t.userSource || a.Other
//         }, t.attributes);
//         return t.app && (r.app = t.app,
//         r.appVersion = t.appVersion),
//         c.logger.startSpan(e, {
//             parent: n,
//             attributes: r,
//             startTime: t.userStartTime || s.g.timer.now()
//         })
//     }
//     function u(e, t, n) {
//         if (!t)
//             return {
//                 traceId: e.context.traceId,
//                 spanId: e.context.spanId,
//                 module: r.Other
//             };
//         const a = o({}, t, n, {
//             traceId: e.context.traceId,
//             spanId: e.context.spanId,
//             module: t && t.module || r.Other
//         });
//         return t.attributes && n && n.attributes && (a.attributes = o({}, t.attributes, n.attributes)),
//         a
//     }
//     function d(e) {
//         if (!e.message && !e.stack)
//             return "";
//         const t = e.message || e.stack || ""
//           , n = [];
//         return e.attributes && e.attributes.spanName && n.push("spanName=" + e.attributes.spanName),
//         e.data && e.data.traceId && n.push("traceId=" + e.data.traceId),
//         n.push("message=" + t),
//         n.join("&")
//     }
//     function p(e) {
//         if (!e)
//             return {
//                 protocol: "unknown",
//                 domain: "unknown"
//             };
//         const t = e.match(/^(https?):\/\/([^/]+)/);
//         return {
//             protocol: t && t[1] || "file",
//             domain: t && t[2] || "unknown"
//         }
//     }
//     c.logger.setAttributes({
//         lib: "lark-widgets"
//     });
//     t.b = c.logger
// },

import { Logger, SpanContext, TraceFlags, Timer } from './tracerManager';

// Define enums
enum ModuleType {
  Search = 'search',
  Messenger = 'messenger',
  // ... (other enum values)
  Other = 'other',
}

enum LinkType {
  WechatQRCode = 'wechat.qrcode',
  WechatLink = 'wechat.link',
  LarkQRCode = 'lark.qrcode',
  LarkLink = 'lark.link',
  Other = 'other',
}

enum StorageType {
  RustSDK = 'RustSDK',
  JSSDK = 'JSSDK',
  Memory = 'memory',
  LocalStorage = 'LocalStorage',
  IndexDB = 'IndexDB',
  Disk = 'disk',
  None = 'none',
}

// Create a logger instance
const logger = new Logger();

// Define a function to start a span
function startSpan(
  spanName: string,
  context?: SpanContext | undefined
): SpanContext {
  if (!context) {
    return logger.startSpan(spanName);
  }

  let parent: SpanContext | undefined;
  if (context.spanId && context.traceId) {
    parent = {
      spanId: context.spanId,
      traceId: context.traceId,
      traceFlags: TraceFlags.NONE,
    };
  }

  const attributes = {
    module: context.module,
    userSource: context.userSource || LinkType.Other,
    ...(context.attributes || {}),
  };

  if (context.app) {
    attributes.app = context.app;
    attributes.appVersion = context.appVersion;
  }

  return logger.startSpan(spanName, {
    parent,
    attributes,
    startTime: context.userStartTime || Timer.now(),
  });
}

// Define a function to create a span context
function createSpanContext(
  context: SpanContext | undefined,
  moduleType: ModuleType,
  attributes: Record<string, any> = {},
  app?: string,
  appVersion?: string
): SpanContext {
  if (!context) {
    return {
      traceId: undefined,
      spanId: undefined,
      module: ModuleType.Other,
    };
  }

  const spanContext: SpanContext = {
    traceId: context.traceId,
    spanId: context.spanId,
    module: context.module || ModuleType.Other,
    ...attributes,
  };

  if (context.attributes && attributes) {
    spanContext.attributes = { ...context.attributes, ...attributes };
  }

  if (app) {
    spanContext.app = app;
    spanContext.appVersion = appVersion;
  }

  return spanContext;
}

// Define a function to format error information
function formatError(error: Error): string {
  if (!error.message && !error.stack) {
    return '';
  }

  const message = error.message || error.stack || '';
  const errorInfo: string[] = [];

  if (error.attributes && error.attributes.spanName) {
    errorInfo.push(`spanName=${error.attributes.spanName}`);
  }

  if (error.data && error.data.traceId) {
    errorInfo.push(`traceId=${error.data.traceId}`);
  }

  errorInfo.push(`message=${message}`);

  return errorInfo.join('&');
}

// Define a function to parse a URL
function parseUrl(url: string | undefined): { protocol: string; domain: string } {
  if (!url) {
    return { protocol: 'unknown', domain: 'unknown' };
  }

  const matches = url.match(/^(https?):\/\/([^/]+)/);

  return {
    protocol: matches && matches[1] ? matches[1] : 'file',
    domain: matches && matches[2] ? matches[2] : 'unknown',
  };
}

// Set logger attributes
logger.setAttributes({
  lib: 'lark-widgets',
});

export { logger , startSpan, createSpanContext, formatError, parseUrl };
