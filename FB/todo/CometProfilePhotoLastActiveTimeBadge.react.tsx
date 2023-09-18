__d("CometProfilePhotoLastActiveTimeBadge.react", ["CometRelativeTimestamp.react", "MWChatActivePill.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
        var b = a.border;
        b = b === void 0 ? "card-background" : b;
        var d = a.pressed;
        a = a.time;
        return h.jsx(c("MWChatActivePill.react"), {
            border: b,
            pressed: d,
            children: h.jsx(c("CometRelativeTimestamp.react"), {
                date: new Date(a * 1e3),
                format: "minimized"
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React from 'react';
import CometRelativeTimestamp from './CometRelativeTimestamp.react'; // Replace with the actual import path
import MWChatActivePill from './MWChatActivePill.react'; // Replace with the actual import path

interface CometProfilePhotoLastActiveTimeBadgeProps {
  border?: string;
  pressed?: boolean;
  time: number;
}

function CometProfilePhotoLastActiveTimeBadge(props: CometProfilePhotoLastActiveTimeBadgeProps) {
  const { border = 'card-background', pressed, time } = props;

  return (
    <MWChatActivePill pressed={pressed} border={border}>
      <CometRelativeTimestamp date={new Date(time * 1000)} format="minimized" />
    </MWChatActivePill>
  );
}

CometProfilePhotoLastActiveTimeBadge.displayName = `${CometProfilePhotoLastActiveTimeBadge.name} [from ${f.id}]`;

export default CometProfilePhotoLastActiveTimeBadge;
