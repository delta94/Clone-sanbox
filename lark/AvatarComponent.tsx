OqZs: function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "c", (function() {
        return A
    }
    )),
    n.d(t, "a", (function() {
        return S
    }
    )),
    n.d(t, "e", (function() {
        return u
    }
    )),
    n.d(t, "d", (function() {
        return I
    }
    ));
    var E, r = n("cDcd"), _ = n.n(r), i = n("hZZo"), T = n("E6oR");
    !function(e) {
        e[e.EXCELLENT = 1] = "EXCELLENT",
        e[e.EVALUATING = 2] = "EVALUATING",
        e[e.WEAK = 3] = "WEAK",
        e[e.NET_UNAVAILABLE = 4] = "NET_UNAVAILABLE",
        e[e.SERVICE_UNAVAILABLE = 5] = "SERVICE_UNAVAILABLE",
        e[e.OFFLINE = 6] = "OFFLINE"
    }(E || (E = {}));
    var o = n("j1WJ")
      , s = n("bfgy")
      , u = Object(s.a)();
    const a = 98
      , A = 33
      , S = 5;
    var N;
    !function(e) {
        e[e.FAIL = 0] = "FAIL",
        e[e.SUCCESS = 1] = "SUCCESS"
    }(N || (N = {}));
    var R = n("oiIn");
    class I extends _.a.Component {
        constructor(e) {
            super(e),
            this.isLoading = !0,
            this.isOnNetListener = !1,
            this.loadedCount = 0,
            this.firstShown = !1,
            this.reloadOnNetCount = 0,
            this.unmount = !1,
            this.offDevicePixelRatioChange = R.a,
            this.handleDevicePixelRatioChange = ()=>{
                const {avatarKey: e, entityId: t, size: n} = this.props
                  , E = this.turnSizeToNumber(n);
                this.setState({
                    avatarUrl: u.getAvatarUrl(e, E, t, !0, this.logger.span.context.spanId)
                }),
                this.logger.info("avatar dpr change: " + window.devicePixelRatio)
            }
            ,
            this.handleLoadError = ()=>{
                this.isLoading = !1,
                this.logger.error("avatar.load.error", {
                    attributes: {
                        key: this.props.avatarKey
                    }
                }),
                this.isOnNetListener || (u.onNetChange(this.onNetListener),
                this.isOnNetListener = !0,
                this.loaded(o.a.UNAVAILABLE))
            }
            ,
            this.handleLoadSuccess = ()=>{
                this.isLoading = !1,
                this.offNetStatusChange(),
                this.loaded(o.a.OK)
            }
            ,
            this.loaded = e=>{
                this.loadedCount++,
                this.firstShown || e !== o.a.OK || (this.firstShown = !0,
                this.logger.storeMetrics({
                    metrics: {
                        "larkw-avatar.fmp": Date.now() - this.logger.span.userStartTime
                    },
                    data: {
                        avatarKey: this.props.avatarKey
                    },
                    attributes: {
                        size: this.props.size,
                        loadedCount: this.loadedCount
                    }
                }))
            }
            ,
            this.onNetListener = ({netStatus: e})=>{
                e !== E.EXCELLENT && e !== E.EVALUATING || this.getMaxReloadCountPromise.then(e=>{
                    this.reloadAvatar(e)
                }
                ).catch(()=>{
                    this.reloadAvatar(S)
                }
                )
            }
            ,
            this.reloadAvatar = e=>{
                if (this.reloadOnNetCount > e || this.isLoading)
                    return;
                this.isLoading = !0,
                this.reloadOnNetCount += 1;
                const {avatarKey: t, size: n, entityId: E} = this.props;
                this.setState({
                    avatarUrl: u.getAvatarUrl(t, this.turnSizeToNumber(n), E, !0, this.logger.span.context.spanId)
                })
            }
            ,
            this.logger = Object(o.d)("larkw-avatar", e.tracing);
            const {disablePreload: t, size: n, avatarKey: r, entityId: _} = e;
            this.state = {
                avatarUrl: this.getAvatarUrlBeforehand(r, n, t, _)
            },
            this.getMaxReloadCountPromise = u.getMaxReloadCount()
        }
        componentDidMount() {
            const {disablePreload: e, size: t, avatarKey: n, entityId: E} = this.props;
            this.preloadAvatar(n, t, e, E),
            this.offDevicePixelRatioChange = u.onDevicePixelRatioChange(this.handleDevicePixelRatioChange)
        }
        componentWillReceiveProps(e) {
            const {avatarKey: t, size: n, disablePreload: E, entityId: r} = e;
            t !== this.props.avatarKey && (this.setState({
                avatarUrl: this.getAvatarUrlBeforehand(t, n, E, r)
            }),
            this.preloadAvatar(t, n, E, r),
            this.reloadOnNetCount = 0,
            this.isLoading = !0)
        }
        componentWillUnmount() {
            this.unmount = !0,
            this.offDevicePixelRatioChange(),
            this.offNetStatusChange(),
            this.logger.endSpan()
        }
        render() {
            const e = this.props
              , {entityId: t, url: n, avatarPath: E, avatarKey: r, onAvatarClick: T, onClick: o, onContextMenu: s} = e
              , u = function(e, t) {
                if (null == e)
                    return {};
                var n, E, r = {}, _ = Object.keys(e);
                for (E = 0; E < _.length; E++)
                    n = _[E],
                    t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, ["entityId", "url", "avatarPath", "avatarKey", "onAvatarClick", "onClick", "onContextMenu"]);
            return _.a.createElement(i.a, Object.assign({}, u, {
                key: t || r,
                src: this.state.avatarUrl || E || n || "",
                onClick: o || T,
                onContextMenu: s,
                onError: this.handleLoadError,
                onLoad: this.handleLoadSuccess
            }))
        }
        getAvatarUrlBeforehand(e, t, n, E) {
            const r = this.logger.span.context.spanId
              , _ = this.turnSizeToNumber(t);
            return u.needPreload(_) && !n ? u.getAvatarUrl(e, 1, E, !1, r) : u.getAvatarUrl(e, _, E, !1, r)
        }
        preloadAvatar(e, t, n, E) {
            const r = this.turnSizeToNumber(t);
            if (!u.needPreload(r) || n)
                return;
            const _ = new Image
              , i = u.getAvatarUrl(e, r, E, !1, this.logger.span.context.spanId);
            _.onload = ()=>{
                this.unmount || this.setState({
                    avatarUrl: i
                })
            }
            ,
            _.onerror = this.handleLoadError,
            _.src = i
        }
        offNetStatusChange() {
            this.isOnNetListener && (u.offNetChange(this.onNetListener),
            this.isOnNetListener = !1)
        }
        turnSizeToNumber(e="small") {
            return "string" == typeof e ? T.a[e] : e
        }
    }
},



import React, { Component } from "react";
import * as n from "some-module"; // Replace "some-module" with the actual module names
import { emptyFunction } from "./constant"; // Replace "another-module" with the actual module name
import createService from "./createService"

enum NetStatus {
    EXCELLENT = 1,
    EVALUATING = 2,
    WEAK = 3,
    NET_UNAVAILABLE = 4,
    SERVICE_UNAVAILABLE = 5,
    OFFLINE = 6
  }
  
  enum LoadStatus {
    FAIL = 0,
    SUCCESS = 1
  }

  const AVATAR_SIZES = {
    small: 1,
    medium: 2,
    large: 3,
  };

  type Props = {
    avatarKey: string;
    size: string | number;
    entityId: string;
    disablePreload: boolean;
    url?: string;
    avatarPath?: string;
    onAvatarClick?: () => void;
    onClick?: () => void;
    onContextMenu?: () => void;
    tracing: any; // Assuming this is the correct type.
  };

  type State = {
    avatarUrl: string;
  };

class AvatarComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.isLoading = true;
    this.isOnNetListener = false;
    this.loadedCount = 0;
    this.firstShown = false;
    this.reloadOnNetCount = 0;
    this.unmount = false;
    this.offDevicePixelRatioChange = emptyFunction;
    this.logger = n.d("larkw-avatar", props.tracing);

    const { disablePreload, size, avatarKey, entityId } = props;
    this.state = {
      avatarUrl: this.getAvatarUrlBeforehand(avatarKey, size, disablePreload, entityId),
    };

    this.getMaxReloadCountPromise = 5 /* createService.getMaxReloadCount(); */
  }

  componentDidMount() {
    const { disablePreload, size, avatarKey, entityId } = this.props;
    this.preloadAvatar(avatarKey, size, disablePreload, entityId);
    this.offDevicePixelRatioChange = n.onDevicePixelRatioChange(this.handleDevicePixelRatioChange);
  }

  componentWillReceiveProps(nextProps) {
    const { avatarKey, size, disablePreload, entityId } = nextProps;
    if (avatarKey !== this.props.avatarKey) {
      this.setState({
        avatarUrl: this.getAvatarUrlBeforehand(avatarKey, size, disablePreload, entityId),
      });
      this.preloadAvatar(avatarKey, size, disablePreload, entityId);
      this.reloadOnNetCount = 0;
      this.isLoading = true;
    }
  }

  componentWillUnmount() {
    this.unmount = true;
    this.offDevicePixelRatioChange();
    this.offNetStatusChange();
    this.logger.endSpan();
  }

  handleDevicePixelRatioChange = () => {
    const { avatarKey, entityId, size } = this.props;
    const imageSize = this.turnSizeToNumber(size);
    this.setState({
      avatarUrl: n.getAvatarUrl(avatarKey, imageSize, entityId, true, this.logger.span.context.spanId),
    });
    this.logger.info("avatar dpr change: " + window.devicePixelRatio);
  };

  handleLoadError = () => {
    this.isLoading = false;
    this.logger.error("avatar.load.error", {
      attributes: {
        key: this.props.avatarKey,
      },
    });
    if (!this.isOnNetListener) {
      n.onNetChange(this.onNetListener);
      this.isOnNetListener = true;
      this.loaded(n.UNAVAILABLE);
    }
  };

  handleLoadSuccess = () => {
    this.isLoading = false;
    this.offNetStatusChange();
    this.loaded(n.OK);
  };

  loaded = (status) => {
    this.loadedCount++;
    if (!this.firstShown && status === n.OK) {
      this.firstShown = true;
      this.logger.storeMetrics({
        metrics: {
          "larkw-avatar.fmp": Date.now() - this.logger.span.userStartTime,
        },
        data: {
          avatarKey: this.props.avatarKey,
        },
        attributes: {
          size: this.props.size,
          loadedCount: this.loadedCount,
        },
      });
    }
  };

  onNetListener = ({ netStatus }) => {
    if (netStatus !== n.EXCELLENT && netStatus !== n.EVALUATING) {
      this.getMaxReloadCountPromise
        .then((e) => {
          this.reloadAvatar(e);
        })
        .catch(() => {
          this.reloadAvatar(S);
        });
    }
  };

  reloadAvatar = (e) => {
    if (this.reloadOnNetCount > e || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.reloadOnNetCount += 1;
    const { avatarKey, size, entityId } = this.props;
    this.setState({
      avatarUrl: n.getAvatarUrl(avatarKey, this.turnSizeToNumber(size), entityId, true, this.logger.span.context.spanId),
    });
  };

  getAvatarUrlBeforehand = (avatarKey, size, disablePreload, entityId) => {
    const r = this.logger.span.context.spanId;
    const _ = this.turnSizeToNumber(size);
    return n.needPreload(_) && !disablePreload
      ? n.getAvatarUrl(avatarKey, 1, entityId, false, r)
      : n.getAvatarUrl(avatarKey, _, entityId, false, r);
  };

  preloadAvatar = (avatarKey, size, disablePreload, entityId) => {
    const r = this.turnSizeToNumber(size);
    if (!n.needPreload(r) || disablePreload) {
      return;
    }
    const _ = new Image();
    const i = n.getAvatarUrl(avatarKey, r, entityId, false, this.logger.span.context.spanId);
    _.onload = () => {
      if (!this.unmount) {
        this.setState({
          avatarUrl: i,
        });
      }
    };
    _.onerror = this.handleLoadError;
    _.src = i;
  };

  offNetStatusChange() {
    if (this.isOnNetListener) {
      n.offNetChange(this.onNetListener);
      this.isOnNetListener = false;
    }
  }

  turnSizeToNumber(size = "small") {
    return typeof size === "string" ? n.T[size] : size;
  }

  render() {
    const { entityId, url, avatarPath, avatarKey, onAvatarClick, onClick, onContextMenu, ...rest } = this.props;
    return (
      <img
        {...rest}
        key={entityId || avatarKey}
        src={this.state.avatarUrl || avatarPath || url || ""}
        onClick={onClick || onAvatarClick}
        onContextMenu={onContextMenu}
        onError={this.handleLoadError}
        onLoad={this.handleLoadSuccess}
      />
    );
  }
}

export default AvatarComponent;
