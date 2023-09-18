__d("CometProfilePhotoNotificationBadge.react", ["CometBadge.react", "TetraText.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
        a = a.number;
        return h.jsx(c("CometBadge.react"), {
            color: "red",
            isProfileBadge: !0,
            size: 18,
            wide: a > 9 ? "wide" : "normal",
            children: h.jsx("div", {
                className: "x6s0dn4 x78zum5 x5yr21d xl56j7k xuxw1ft xh8yej3",
                children: h.jsx(c("TetraText.react"), {
                    color: "primaryOnMedia",
                    type: "body4",
                    children: a > 9 ? "9+" : a
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react';

interface CometProfilePhotoNotificationBadgeProps {
  number: number;
}

const CometProfilePhotoNotificationBadge: React.FC<CometProfilePhotoNotificationBadgeProps> = ({
  number,
}) => {
  return (
    <CometBadge
      color="red"
      isProfileBadge={true}
      size={18}
      wide={number > 9 ? "wide" : "normal"}
    >
      <div className="x6s0dn4 x78zum5 x5yr21d xl56j7k xuxw1ft xh8yej3">
        <TetraText color="primaryOnMedia" type="body4">
          {number > 9 ? "9+" : number}
        </TetraText>
      </div>
    </CometBadge>
  );
};

export default CometProfilePhotoNotificationBadge;
