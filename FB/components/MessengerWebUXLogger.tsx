__d(
  "MessengerWebUXLogger",
  ["cr:160"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c =
      (a = b("cr:160")) != null
        ? a
        : {
            useImpressionLogger: function () {},
            useImpressionLoggerRef: function (a, b) {},
            useInteractionLogger: function () {},
            useLogOnPressInteraction: function () {
              return function (a, b) {
                return a;
              };
            },
          };
    d = c;
    g["default"] = d;
  },
  98
);

import MessengerWebUXLoggerImpl from "cr:160";

interface Logger {
  useImpressionLogger: () => void;
  useImpressionLoggerRef: (a: any, b: any) => void;
  useInteractionLogger: () => void;
  useLogOnPressInteraction: () => (a: any, b: any) => any;
}

const defaultLogger: Logger = {
  useImpressionLogger: () => {},
  useImpressionLoggerRef: (a: any, b: any) => {},
  useInteractionLogger: () => {},
  useLogOnPressInteraction: () => {
    return (a: any, b: any) => {
      return a;
    };
  },
};

const MessengerWebUXLogger: Logger = MessengerWebUXLoggerImpl ?? defaultLogger;

export default MessengerWebUXLogger;
