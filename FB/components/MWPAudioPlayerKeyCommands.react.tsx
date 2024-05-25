__d(
  "MWPAudioPlayerKeyCommands.react",
  ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
      l = b.useMemo;
    function m(a) {
      if (a > 30) return 5;
      else if (a > 10) return 3;
      else if (a > 5) return 2;
      else if (a > 2) return 1;
      else return 0.5;
    }
    function a(a) {
      var b = a.audioEl;
      a = a.children;
      var d = k(
          function () {
            if (b.current == null) return;
            var a = b.current.duration;
            b.current.currentTime -= m(a);
          },
          [b]
        ),
        e = k(
          function () {
            if (b.current == null) return;
            var a = b.current.duration;
            b.current.currentTime += m(a);
          },
          [b]
        ),
        f = k(
          function () {
            b.current != null && (b.current.currentTime = 0);
          },
          [b]
        ),
        g = k(
          function () {
            if (b.current == null) return;
            var a = b.current.duration;
            b.current.currentTime = a;
          },
          [b]
        ),
        i = l(
          function () {
            var a;
            return [
              {
                command: { key: (a = c("CometKeys")).UP },
                description: h._("__JHASH__0poPtptaPoq__JHASH__"),
                handler: e,
              },
              {
                command: { key: a.DOWN },
                description: h._("__JHASH__rYkfY7o-Wnk__JHASH__"),
                handler: d,
              },
              {
                command: { key: a.LEFT },
                description: h._("__JHASH__1Lid3qpGe7D__JHASH__"),
                handler: d,
              },
              {
                command: { key: a.RIGHT },
                description: h._("__JHASH__SFoCE2wpUn9__JHASH__"),
                handler: e,
              },
              {
                command: { key: a.HOME },
                description: h._("__JHASH__d6P7X8Ve8io__JHASH__"),
                handler: f,
              },
              {
                command: { key: a.END },
                description: h._("__JHASH__QXmXaNdkPYM__JHASH__"),
                handler: g,
              },
            ];
          },
          [d, e, f, g]
        );
      return j.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: i,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { fbt } from "fbt";
import CometComponentWithKeyCommands from "CometComponentWithKeyCommands.react";
import { CometKeys } from "CometKeys";
import React, {
  useCallback,
  useMemo,
  ReactNode,
  MutableRefObject,
} from "react";

interface MWPAudioPlayerKeyCommandsProps {
  audioEl: MutableRefObject<HTMLAudioElement | null>;
  children: ReactNode;
}

function adjustTime(duration: number): number {
  if (duration > 30) return 5;
  else if (duration > 10) return 3;
  else if (duration > 5) return 2;
  else if (duration > 2) return 1;
  else return 0.5;
}

const MWPAudioPlayerKeyCommands: React.FC<MWPAudioPlayerKeyCommandsProps> = ({
  audioEl,
  children,
}) => {
  const rewind = useCallback(() => {
    if (audioEl.current == null) return;
    const duration = audioEl.current.duration;
    audioEl.current.currentTime -= adjustTime(duration);
  }, [audioEl]);

  const forward = useCallback(() => {
    if (audioEl.current == null) return;
    const duration = audioEl.current.duration;
    audioEl.current.currentTime += adjustTime(duration);
  }, [audioEl]);

  const toStart = useCallback(() => {
    if (audioEl.current != null) audioEl.current.currentTime = 0;
  }, [audioEl]);

  const toEnd = useCallback(() => {
    if (audioEl.current == null) return;
    const duration = audioEl.current.duration;
    audioEl.current.currentTime = duration;
  }, [audioEl]);

  const commandConfigs = useMemo(() => {
    return [
      {
        command: { key: CometKeys.UP },
        description: fbt("__JHASH__0poPtptaPoq__JHASH__"),
        handler: forward,
      },
      {
        command: { key: CometKeys.DOWN },
        description: fbt("__JHASH__rYkfY7o-Wnk__JHASH__"),
        handler: rewind,
      },
      {
        command: { key: CometKeys.LEFT },
        description: fbt("__JHASH__1Lid3qpGe7D__JHASH__"),
        handler: rewind,
      },
      {
        command: { key: CometKeys.RIGHT },
        description: fbt("__JHASH__SFoCE2wpUn9__JHASH__"),
        handler: forward,
      },
      {
        command: { key: CometKeys.HOME },
        description: fbt("__JHASH__d6P7X8Ve8io__JHASH__"),
        handler: toStart,
      },
      {
        command: { key: CometKeys.END },
        description: fbt("__JHASH__QXmXaNdkPYM__JHASH__"),
        handler: toEnd,
      },
    ];
  }, [forward, rewind, toStart, toEnd]);

  return (
    <CometComponentWithKeyCommands commandConfigs={commandConfigs}>
      {children}
    </CometComponentWithKeyCommands>
  );
};

MWPAudioPlayerKeyCommands.displayName =
  "MWPAudioPlayerKeyCommands [from " + __filename + "]";

export default MWPAudioPlayerKeyCommands;
