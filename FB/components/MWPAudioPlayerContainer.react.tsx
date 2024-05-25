__d(
  "MWPAudioPlayerContainer.react",
  ["MWPAudioPlayerSharedStyles", "MWPAudioPlayerUtils", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react")),
      k = i.useRef;
    function a(a) {
      var b = a.audioEl,
        e = a.children,
        f = a.hasScrubber,
        g = a.scrubberRef,
        i = a.style,
        l = a.testid;
      l = a.useCase;
      a = d("MWPAudioPlayerUtils").useShowNewUX();
      var m = k(),
        n = function (a) {
          var c = b.current,
            e = m.current;
          c != null &&
            e != null &&
            Number.isFinite(c.duration) &&
            (c.currentTime =
              d("MWPAudioPlayerUtils").getMousePos(a, e) * c.duration);
        },
        o = function (a) {
          if (m.current != null && g.current != null)
            return g.current.updateHighlight(
              d("MWPAudioPlayerUtils").getMousePos(a, m.current) * 100
            );
        },
        p = function () {
          if (g.current != null) return g.current.updateHighlight(0);
        },
        q = d("MWPAudioPlayerUtils").useCalculatePlayerHeight(l);
      q = babelHelpers["extends"](
        { cursor: f ? "pointer" : "default", height: q },
        i
      );
      i = f && !a;
      return j.jsx(d("MWPAudioPlayerUtils").UseCaseContext.Provider, {
        value: l,
        children: j.jsx("div", {
          className: (h || (h = c("stylex")))(
            d("MWPAudioPlayerSharedStyles").styles.container
          ),
          "data-testid": void 0,
          onClick: i ? n : void 0,
          onMouseLeave: f ? p : void 0,
          onMouseMove: i ? o : void 0,
          ref: m,
          style: q,
          children: e,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import MWPAudioPlayerSharedStyles from "MWPAudioPlayerSharedStyles";
import {
  useShowNewUX,
  getMousePos,
  useCalculatePlayerHeight,
  UseCaseContext,
} from "MWPAudioPlayerUtils";
import React, { useRef, CSSProperties, MouseEvent } from "react";
import stylex from "stylex";

interface MWPAudioPlayerContainerProps {
  audioEl: React.RefObject<HTMLAudioElement>;
  children: React.ReactNode;
  hasScrubber: boolean;
  scrubberRef: React.RefObject<any>;
  style?: CSSProperties;
  testid?: string;
  useCase: string;
}

const MWPAudioPlayerContainer: React.FC<MWPAudioPlayerContainerProps> = ({
  audioEl,
  children,
  hasScrubber,
  scrubberRef,
  style,
  testid,
  useCase,
}) => {
  const showNewUX = useShowNewUX();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseClick = (event: MouseEvent<HTMLDivElement>) => {
    const audio = audioEl.current;
    const container = containerRef.current;
    if (audio && container && Number.isFinite(audio.duration)) {
      audio.currentTime = getMousePos(event, container) * audio.duration;
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container && scrubberRef.current) {
      scrubberRef.current.updateHighlight(getMousePos(event, container) * 100);
    }
  };

  const handleMouseLeave = () => {
    if (scrubberRef.current) {
      scrubberRef.current.updateHighlight(0);
    }
  };

  const playerHeight = useCalculatePlayerHeight(useCase);
  const containerStyle: CSSProperties = {
    cursor: hasScrubber ? "pointer" : "default",
    height: playerHeight,
    ...style,
  };

  const shouldHandleMouseEvents = hasScrubber && !showNewUX;

  return (
    <UseCaseContext.Provider value={useCase}>
      <div
        className={stylex(MWPAudioPlayerSharedStyles.styles.container)}
        data-testid={testid}
        onClick={shouldHandleMouseEvents ? handleMouseClick : undefined}
        onMouseLeave={hasScrubber ? handleMouseLeave : undefined}
        onMouseMove={shouldHandleMouseEvents ? handleMouseMove : undefined}
        ref={containerRef}
        style={containerStyle}
      >
        {children}
      </div>
    </UseCaseContext.Provider>
  );
};

MWPAudioPlayerContainer.displayName =
  "MWPAudioPlayerContainer [from " + __filename + "]";
export default MWPAudioPlayerContainer;
