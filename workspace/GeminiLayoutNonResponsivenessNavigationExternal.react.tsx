__d("GeminiLayoutNonResponsivenessNavigationExternal.react", ["fbt", "ChannelGeminiToggle", "react"], (function (a, b, c, d, e, f, g, h) {
  "use strict";
  var i, j = i || d("react");

  function a() {
    return j.jsx(j.Fragment, {
      children: b("ChannelGeminiToggle") && j.jsx(b("ChannelGeminiToggle"), {})
    })
  }
  a.displayName = a.name + " [from " + f.id + "]";

  function c(a) {
    var b = a.children;
    a = a.onMouseEnter;
    return j.jsx("div", {
      "aria-label": h._("Workplace"),
      className: "x2atdfe x1qjc9v5 x2t7q83 x9f619 x78zum5 x2lah0s xl56j7k x6ikm8r x1odjw0f x1l90r2v xyamay9 x13oubkp x1vjfegm xy80clv x26u7qi xckqwgs xm81vs4 xu3j5b3 x1ch86jh x5yr21d",
      onMouseEnter: a,
      role: "navigation",
      children: j.jsx("div", {
        className: "xd10rxx x78zum5 xh8yej3 x150jy0e x1e558r4",
        children: b
      })
    })
  }
  c.displayName = c.name + " [from " + f.id + "]";

  function e() {
    return null
  }
  e.displayName = e.name + " [from " + f.id + "]";
  g.GeminiNavigationChannelToggle = a;
  g.GeminiNavigationNavArea = c;
  g.GeminiNavigationBurgerToggle = e
}), 98);




import React, { Fragment } from 'react';
import { fbt } from './fbt'; // Assuming location
import ChannelGeminiToggle from './ChannelGeminiToggle.react'; 

interface GeminiNavigationChannelToggleProps {}
const GeminiNavigationChannelToggle: React.FC<GeminiNavigationChannelToggleProps> = () => {
  return (
    <Fragment>
      {ChannelGeminiToggle && <ChannelGeminiToggle />}
    </Fragment>
  );
};

interface GeminiNavigationNavAreaProps {
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}
const GeminiNavigationNavArea: React.FC<GeminiNavigationNavAreaProps> = ({
  children,
  onMouseEnter,
}) => {
  return (
    <div
      aria-label={fbt('Workplace')}
      className="x2atdfe x1qjc9v5 x2t7q83 x9f619 x78zum5 x2lah0s xl56j7k x6ikm8r x1odjw0f x1l90r2v xyamay9 x13oubkp x1vjfegm xy80clv x26u7qi xckqwgs xm81vs4 xu3j5b3 x1ch86jh x5yr21d"
      role="navigation"
      onMouseEnter={onMouseEnter}
    >
      <div className="xd10rxx x78zum5 xh8yej3 x150jy0e x1e558r4">{children}</div>
    </div>
  );
};

interface GeminiNavigationBurgerToggleProps {}
const GeminiNavigationBurgerToggle: React.FC<GeminiNavigationBurgerToggleProps> = () => {
  return null;
};

export { GeminiNavigationChannelToggle, GeminiNavigationNavArea, GeminiNavigationBurgerToggle };
