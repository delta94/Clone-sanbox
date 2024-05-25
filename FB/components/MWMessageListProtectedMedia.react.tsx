__d(
  "MWMessageListProtectedMedia.react",
  [
    "fbt",
    "$InternalEnum",
    "MWLSThreadDisplayContext",
    "MWVerticalRhythm",
    "MWXPressable.react",
    "MWXText.react",
    "emptyFunction",
    "react",
    "setTimeout",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = j || (j = d("react"));
    e = j;
    var l = e.useMemo,
      m = e.useRef,
      n = e.useState,
      o = b("$InternalEnum").Mirrored(["Protected", "Blurred", "Unprotected"]),
      p = {
        container: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          minHeight: "x7v6ubd",
          minWidth: "xfb3i0g",
          position: "x1n2onr6",
          $$css: !0,
        },
        containerForInbox: { minWidth: "xlm99nl", $$css: !0 },
        containerUncoverable: { minWidth: "xfb3i0g", $$css: !0 },
        overlay: {
          maxWidth: "x193iq5w",
          ":before_content": "x1gftdam",
          ":before_height": "xw22vqi",
          ":before_position": "x1te0kx0",
          ":before_start": "x7r5wyf",
          ":before_top": "x1ehtkf2",
          ":before_width": "xy7dqi3",
          ":before_zIndex": "x1wl4osp",
          $$css: !0,
        },
        overlayBlurred: { filter: "xj2j9hd", $$css: !0 },
        overlayDisabled: { pointerEvents: "x47corl", $$css: !0 },
        pressable: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        sneezeguard: {
          backgroundColor: "x11dxs5c",
          height: "x5yr21d",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          width: "xh8yej3",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        sneezeguardTransparent: { backgroundColor: "x1cw4mn1", $$css: !0 },
      };
    function q(a) {
      var b = a.mediaType,
        d = a.state;
      a = a.uncoverable;
      a = a === void 0 ? !0 : a;
      var e = h._("__JHASH__ffo2a6Rimy8__JHASH__"),
        f = h._("__JHASH__SmhjEO8LZM7__JHASH__"),
        g = h._("__JHASH__fSHhveuOoUn__JHASH__"),
        i = h._("__JHASH__9LbnXUNEOkH__JHASH__"),
        j = h._("__JHASH__grSMjsZRe9-__JHASH__"),
        l = h._("__JHASH__4a9auIct2D0__JHASH__"),
        m = h._("__JHASH___nqNxb75_gn__JHASH__"),
        n = h._("__JHASH__cegqh2566-V__JHASH__"),
        p = h._("__JHASH__NU6koyzdQfy__JHASH__");
      f = k.jsx(c("MWXText.react"), {
        color: "white",
        testid: void 0,
        type: "body3",
        children: b === "Image" ? f : b === "Video" ? e : g,
      });
      return d === o.Unprotected
        ? null
        : k.jsx(
            "div",
            {
              "aria-live": "polite",
              "aria-relevant": "all",
              className:
                "x6s0dn4 x9f619 x78zum5 xdt5ytf x5yr21d xl56j7k xyamay9 x1pi30zi x1l90r2v x1swvt13 x10l6tqk x17qophe x13vifvy xh8yej3 xhtitgo",
              children: k.jsx("div", {
                className: "x78zum5 xdt5ytf xurgmgr x2b8uid",
                children:
                  d === o.Protected
                    ? k.jsxs(k.Fragment, {
                        children: [
                          f,
                          a
                            ? k.jsxs(k.Fragment, {
                                children: [
                                  k.jsx(c("MWVerticalRhythm"), { height: 25 }),
                                  k.jsx(c("MWXText.react"), {
                                    color: "white",
                                    testid: void 0,
                                    type: "bodyLink3",
                                    children:
                                      b === "Image" ? j : b === "Video" ? i : l,
                                  }),
                                ],
                              })
                            : null,
                        ],
                      })
                    : k.jsxs(k.Fragment, {
                        children: [
                          f,
                          k.jsx(c("MWVerticalRhythm"), { height: 25 }),
                          k.jsx(c("MWXText.react"), {
                            color: "white",
                            testid: void 0,
                            type: "bodyLink3",
                            children: b === "Image" ? n : b === "Video" ? m : p,
                          }),
                        ],
                      }),
              }),
            },
            d
          );
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.ariaLabel,
        e = a.children,
        f = a.disabled,
        g = a.linkProps,
        h = a.mediaType,
        j = a.onPress,
        r = j === void 0 ? c("emptyFunction") : j;
      j = a.overlayDisabled;
      j = j === void 0 ? !1 : j;
      var s = a.testid,
        t = a.type;
      s = a.uncoverable;
      s = s === void 0 ? !0 : s;
      var u = a.url;
      a = a.xstyle;
      var v = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),
        w = n(o.Protected),
        x = w[0],
        y = w[1],
        z = x === o.Unprotected;
      w = x === o.Blurred;
      var A = m(null),
        B = l(function () {
          return { url: "#" };
        }, []),
        C = l(
          function () {
            if (t === "video") return;
            if (u != null)
              return {
                backgroundImage: "url(" + u + ")",
                backgroundSize: "cover",
                filter: "blur(10px)",
                height: "100%",
                left: "0",
                position: "absolute",
                right: "0",
                transform: "scale(1.2)",
                width: "100%",
              };
          },
          [u, t]
        );
      v = k.jsxs("div", {
        className: (i || (i = c("stylex")))(
          p.container,
          v === "Inbox" ? p.containerForInbox : !1,
          s ? p.containerUncoverable : !1
        ),
        children: [
          k.jsx("div", { style: C }),
          k.jsx("div", {
            "aria-hidden": !z,
            className: i(
              p.overlay,
              !z && p.overlayDisabled,
              w && p.overlayBlurred
            ),
            children: e,
          }),
          z
            ? null
            : k.jsx("div", {
                className: (i || (i = c("stylex")))(
                  p.sneezeguard,
                  w && p.sneezeguardTransparent
                ),
              }),
          k.jsx(q, { mediaType: h, state: x, uncoverable: s }),
        ],
      });
      return !s
        ? k.jsx("div", {
            className: (i || (i = c("stylex")))(a, p.pressable),
            "data-testid": void 0,
            children: v,
          })
        : k.jsx(c("MWXPressable.react"), {
            "aria-label": z ? b : void 0,
            disabled: f,
            linkProps: z ? g : B,
            onPress: function () {
              z
                ? r()
                : y(function (a) {
                    switch (a) {
                      case o.Protected:
                        return o.Blurred;
                      case o.Blurred:
                        c("setTimeout")(function () {
                          var a = A.current;
                          if (a != null) return a.focus();
                        }, 0);
                        return o.Unprotected;
                      case o.Unprotected:
                        return a;
                    }
                  });
            },
            overlayDisabled: j,
            ref: A,
            testid: void 0,
            xstyle: [a, p.pressable],
            children: v,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { fbt } from "fbt";
import { $InternalEnum } from "$InternalEnum";
import { MWLSThreadDisplayContext } from "MWLSThreadDisplayContext";
import { MWVerticalRhythm } from "MWVerticalRhythm";
import { MWXPressable } from "MWXPressable.react";
import { MWXText } from "MWXText.react";
import { emptyFunction } from "emptyFunction";
import React, { useMemo, useRef, useState, ReactNode } from "react";
import { setTimeout } from "setTimeout";
import stylex from "stylex";

type MediaType = "Image" | "Video";
type State = "Protected" | "Blurred" | "Unprotected";
type MWMessageListProtectedMediaProps = {
  ariaLabel?: string;
  children: ReactNode;
  disabled?: boolean;
  linkProps?: object;
  mediaType: MediaType;
  onPress?: () => void;
  overlayDisabled?: boolean;
  testid?: string;
  type?: string;
  uncoverable?: boolean;
  url?: string;
  xstyle?: object;
};

const states = $InternalEnum.Mirrored<State>([
  "Protected",
  "Blurred",
  "Unprotected",
]);

const styles = {
  container: {
    alignItems: "x6s0dn4",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    minHeight: "x7v6ubd",
    minWidth: "xfb3i0g",
    position: "x1n2onr6",
    $$css: true,
  },
  containerForInbox: { minWidth: "xlm99nl", $$css: true },
  containerUncoverable: { minWidth: "xfb3i0g", $$css: true },
  overlay: {
    maxWidth: "x193iq5w",
    ":before_content": "x1gftdam",
    ":before_height": "xw22vqi",
    ":before_position": "x1te0kx0",
    ":before_start": "x7r5wyf",
    ":before_top": "x1ehtkf2",
    ":before_width": "xy7dqi3",
    ":before_zIndex": "x1wl4osp",
    $$css: true,
  },
  overlayBlurred: { filter: "xj2j9hd", $$css: true },
  overlayDisabled: { pointerEvents: "x47corl", $$css: true },
  pressable: {
    alignItems: "x6s0dn4",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    overflowX: "x6ikm8r",
    overflowY: "x10wlt62",
    position: "x1n2onr6",
    $$css: true,
  },
  sneezeguard: {
    backgroundColor: "x11dxs5c",
    height: "x5yr21d",
    position: "x10l6tqk",
    start: "x17qophe",
    top: "x13vifvy",
    width: "xh8yej3",
    zIndex: "x1vjfegm",
    $$css: true,
  },
  sneezeguardTransparent: { backgroundColor: "x1cw4mn1", $$css: true },
};

function OverlayContent({
  mediaType,
  state,
  uncoverable = true,
}: {
  mediaType: MediaType;
  state: State;
  uncoverable?: boolean;
}) {
  const imageMsg = fbt("__JHASH__SmhjEO8LZM7__JHASH__");
  const videoMsg = fbt("__JHASH__ffo2a6Rimy8__JHASH__");
  const genericMsg = fbt("__JHASH__fSHhveuOoUn__JHASH__");
  const imageLink = fbt("__JHASH__grSMjsZRe9-__JHASH__");
  const videoLink = fbt("__JHASH__9LbnXUNEOkH__JHASH__");
  const genericLink = fbt("__JHASH__4a9auIct2D0__JHASH__");
  const imageAltLink = fbt("__JHASH__cegqh2566-V__JHASH__");
  const videoAltLink = fbt("__JHASH___nqNxb75_gn__JHASH__");
  const genericAltLink = fbt("__JHASH__NU6koyzdQfy__JHASH__");

  const mainMessage =
    mediaType === "Image"
      ? imageMsg
      : mediaType === "Video"
      ? videoMsg
      : genericMsg;
  const linkMessage =
    mediaType === "Image"
      ? imageLink
      : mediaType === "Video"
      ? videoLink
      : genericLink;
  const altLinkMessage =
    mediaType === "Image"
      ? imageAltLink
      : mediaType === "Video"
      ? videoAltLink
      : genericAltLink;

  return state === states.Unprotected ? null : (
    <div
      aria-live="polite"
      aria-relevant="all"
      className="x6s0dn4 x9f619 x78zum5 xdt5ytf x5yr21d xl56j7k xyamay9 x1pi30zi x1l90r2v x1swvt13 x10l6tqk x17qophe x13vifvy xh8yej3 xhtitgo"
    >
      <div className="x78zum5 xdt5ytf xurgmgr x2b8uid">
        {state === states.Protected ? (
          <>
            <MWXText color="white" testid={undefined} type="body3">
              {mainMessage}
            </MWXText>
            {uncoverable && (
              <>
                <MWVerticalRhythm height={25} />
                <MWXText color="white" testid={undefined} type="bodyLink3">
                  {linkMessage}
                </MWXText>
              </>
            )}
          </>
        ) : (
          <>
            <MWXText color="white" testid={undefined} type="body3">
              {mainMessage}
            </MWXText>
            <MWVerticalRhythm height={25} />
            <MWXText color="white" testid={undefined} type="bodyLink3">
              {altLinkMessage}
            </MWXText>
          </>
        )}
      </div>
    </div>
  );
}

OverlayContent.displayName = `${OverlayContent.name} [from ${f.id}]`;

const MWMessageListProtectedMedia: React.FC<
  MWMessageListProtectedMediaProps
> = ({
  ariaLabel,
  children,
  disabled,
  linkProps,
  mediaType,
  onPress = emptyFunction,
  overlayDisabled = false,
  testid,
  type,
  uncoverable = true,
  url,
  xstyle,
}) => {
  const displayContext = MWLSThreadDisplayContext.useMWLSThreadDisplayContext();
  const [state, setState] = useState<State>(states.Protected);
  const isUnprotected = state === states.Unprotected;
  const isBlurred = state === states.Blurred;
  const ref = useRef<HTMLDivElement>(null);

  const defaultLinkProps = useMemo(() => ({ url: "#" }), []);
  const blurredImageStyle = useMemo(() => {
    if (type === "video") return;
    if (url != null)
      return {
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        filter: "blur(10px)",
        height: "100%",
        left: "0",
        position: "absolute",
        right: "0",
        transform: "scale(1.2)",
        width: "100%",
      };
  }, [url, type]);

  const containerClassName = stylex(
    styles.container,
    displayContext === "Inbox" ? styles.containerForInbox : false,
    uncoverable ? styles.containerUncoverable : false
  );

  const overlayClassName = stylex(
    styles.overlay,
    !isUnprotected && styles.overlayDisabled,
    isBlurred && styles.overlayBlurred
  );

  const sneezeguardClassName = stylex(
    styles.sneezeguard,
    isBlurred && styles.sneezeguardTransparent
  );

  const handlePress = () => {
    if (isUnprotected) {
      onPress();
    } else {
      setState((prevState) => {
        switch (prevState) {
          case states.Protected:
            return states.Blurred;
          case states.Blurred:
            setTimeout(() => {
              ref.current?.focus();
            }, 0);
            return states.Unprotected;
          case states.Unprotected:
            return prevState;
        }
      });
    }
  };

  const content = (
    <div className={containerClassName}>
      <div style={blurredImageStyle} />
      <div aria-hidden={!isUnprotected} className={overlayClassName}>
        {children}
      </div>
      {!isUnprotected && <div className={sneezeguardClassName} />}
      <OverlayContent
        mediaType={mediaType}
        state={state}
        uncoverable={uncoverable}
      />
    </div>
  );

  return !uncoverable ? (
    <div className={stylex(xstyle, styles.pressable)} data-testid={testid}>
      {content}
    </div>
  ) : (
    <MWXPressable
      aria-label={isUnprotected ? ariaLabel : undefined}
      disabled={disabled}
      linkProps={isUnprotected ? linkProps : defaultLinkProps}
      onPress={handlePress}
      overlayDisabled={overlayDisabled}
      ref={ref}
      testid={testid}
      xstyle={[xstyle, styles.pressable]}
    >
      {content}
    </MWXPressable>
  );
};

MWMessageListProtectedMedia.displayName = `${MWMessageListProtectedMedia.name} [from ${f.id}]`;

export default MWMessageListProtectedMedia;
