__d(
  "MWXPressable.react",
  ["MessengerWebUXLogger", "cr:133", "cr:323", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useCallback;
    function k(a) {
      switch (a) {
        case "normal":
          return 8;
        case "compact":
          return 4;
        case "50%":
          return "50%";
        case "inherit":
        default:
          return void 0;
      }
    }
    function a(a, d) {
      var e = a.loggingEvent,
        f = a.onPress,
        g = a.overlayRadius;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "loggingEvent",
        "onPress",
        "overlayRadius",
      ]);
      var h = c("MessengerWebUXLogger").useInteractionLogger(),
        l = j(
          function (a) {
            f == null ? void 0 : f(a), e && (h == null ? void 0 : h(e));
          },
          [h, e, f]
        );
      if (b("cr:133"))
        return i.jsx(
          b("cr:133"),
          babelHelpers["extends"]({ onPress: l, overlayRadius: k(g) }, a, {
            ref: d,
          })
        );
      return b("cr:323")
        ? i.jsx(
            b("cr:323"),
            babelHelpers["extends"]({ onPress: l, overlayRadius: g }, a, {
              ref: d,
            })
          )
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
import { useInteractionLogger } from "MessengerWebUXLogger";
import CometPressable from "cr:133"; // CometPressable
import React, { useCallback, forwardRef } from "react";

type OverlayRadius = "normal" | "compact" | "50%" | "inherit";

interface MWXPressableProps extends React.HTMLProps<HTMLDivElement> {
  loggingEvent?: string;
  onPress?: (event: React.MouseEvent<HTMLDivElement>) => void;
  overlayRadius?: OverlayRadius;
}

const getOverlayRadius = (
  radius: OverlayRadius | undefined
): number | string | undefined => {
  switch (radius) {
    case "normal":
      return 8;
    case "compact":
      return 4;
    case "50%":
      return "50%";
    case "inherit":
    default:
      return undefined;
  }
};

const MWXPressable: React.FC<MWXPressableProps> = (props, ref) => {
  const { loggingEvent, onPress, overlayRadius, ...rest } = props;
  const logger = useInteractionLogger();

  const handlePress = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (onPress) {
        onPress(event);
      }
      if (loggingEvent) {
        logger?.(loggingEvent);
      }
    },
    [logger, loggingEvent, onPress]
  );

  const radius = getOverlayRadius(overlayRadius);

  if (CometPressable) {
    return (
      <CometPressable
        onPress={handlePress}
        overlayRadius={radius}
        {...rest}
        ref={ref}
      />
    );
  }

  return null;
};

MWXPressable.displayName = `${MWXPressable.name} [from ${module.id}]`;

export default forwardRef<HTMLDivElement, MWXPressableProps>(MWXPressable);
