wiaK: function(e, t, n) {
  "use strict";
  var r = {};
  n.r(r),
  n.d(r, "onPushChats", (function() {
      return d
  }
  )),
  n.d(r, "offPushChats", (function() {
      return p
  }
  )),
  n.d(r, "checkAvatar", (function() {
      return h
  }
  )),
  n.d(r, "getAvatarKey", (function() {
      return _
  }
  )),
  n.d(r, "getAvatarUrl", (function() {
      return E
  }
  ));
  var o = n("kI3H")
    , a = n.n(o)
    , i = n("uBEG") // TODO: globalThis.vendors_lib.LarkServices.transport 
    , s = n("iUqk")
    , c = n("Ls4X")
    , u = n("B4JS");
  const l = new WeakMap
    , d = e=>{
      window._avatarKeyMap || (window._avatarKeyMap = new a.a({
          max: 200
      })),
      l.set(e, ({chats: t})=>{
          Object.keys(t).forEach(e=>{
              if (window._avatarKeyMap.get(e)) {
                  const n = t[e];
                  window._avatarKeyMap.set(e, n.avatarKey)
              }
          }
          ),
          e(t)
      }
      ),
      Object(i.on)(c.we, l.get(e))
  }
    , p = e=>{
      Object(i.off)(c.we, l.get(e)),
      l.delete(e)
  }
    , f = new u.a({
      checkAvatarKeys: e=>{
          Object(i.callApi)(c.zg, {
              chatIds: e
          })
      }
  })
    , h = (e,t)=>f.checkAvatar(e)
    , _ = (e,t)=>{
      if (!e || !t)
          return "";
      window._avatarKeyMap || (window._avatarKeyMap = new a.a({
          max: 200
      }));
      const n = window._avatarKeyMap.get(e);
      return t !== n && h(e, t),
      n || window._avatarKeyMap.set(e, t),
      window._avatarKeyMap.get(e)
  }
    , E = (e,t,n,r,o)=>{
      const a = _(e, t);
      return a ? s.getAvatarUrl(a, n, e, r, o) : ""
  }
  ;
  var m = n("ibPe")
    , g = n("cDcd")
    , T = n.n(g)
    , A = n("ADAr")
    , y = n("k1fL")
    , b = Object(y.a)()
    , M = n("e8Z0");
  class v extends T.a.PureComponent {
      constructor(e) {
          super(e),
          this.handlePushChatCb = e=>{
              if (!e)
                  return;
              const {chatId: t} = this.props
                , n = e[t];
              n && this.setState({
                  avatarKey: b.getAvatarKey(t, n.avatarKey)
              })
          }
          ;
          const {chatId: t, avatarKey: n} = e;
          this.state = {
              avatarKey: b.getAvatarKey(t, n)
          },
          this.logger = Object(M.d)("larkw-chat-avatar", e.tracing)
      }
      componentDidMount() {
          b.onPushChats(this.handlePushChatCb)
      }
      componentWillReceiveProps(e) {
          const {chatId: t, avatarKey: n} = e;
          if (t !== this.props.chatId) {
              const e = b.getAvatarKey(t, n);
              this.setState({
                  avatarKey: e
              })
          }
      }
      componentWillUnmount() {
          b.offPushChats(this.handlePushChatCb)
      }
      render() {
          const {avatarKey: e} = this.state
            , {tracing: t, chatId: n, alt: r, size: o, shape: a, onClick: i, onContextMenu: s, className: c, disablePreload: u} = this.props;
          return T.a.createElement(A.d, {
              tracing: Object(M.e)(this.logger.span, t),
              entityId: n,
              avatarKey: e,
              alt: r,
              size: o,
              shape: a,
              onClick: i,
              onContextMenu: s,
              disablePreload: u,
              className: c
          })
      }
  }
  v.defaultProps = {
      alt: "",
      size: "small",
      shape: "circle"
  };
  var S = n("1+iM");
  Object(S.a)(),
  b.register(r),
  A.e.register(m);
  t.a = v
},





import { on as onEvent, off as offEvent, callApi } from "iUqk";
import { we, zg } from "Ls4X";
import LRUCache from "lru-cache";
import { checkAvatarKeys as checkAvatarKeysApi } from "B4JS";

const avatarKeyMap = new WeakMap();

export const onPushChats = (callback) => {
  if (!window._avatarKeyMap) {
    window._avatarKeyMap = new LRUCache({ max: 200 });
  }
  avatarKeyMap.set(callback, ({ chats }) => {
    Object.keys(chats).forEach((chatId) => {
      if (window._avatarKeyMap.get(chatId)) {
        const newAvatarKey = chats[chatId].avatarKey;
        window._avatarKeyMap.set(chatId, newAvatarKey);
      }
    });
    callback(chats);
  });
  onEvent(we, avatarKeyMap.get(callback));
};

export const offPushChats = (callback) => {
  offEvent(we, avatarKeyMap.get(callback));
  avatarKeyMap.delete(callback);
};

const checkAvatar = (chatIds) => {
  callApi(zg, { chatIds });
};

export const getAvatarKey = (chatId, newAvatarKey) => {
  if (!chatId || !newAvatarKey) {
    return "";
  }
  if (!window._avatarKeyMap) {
    window._avatarKeyMap = new LRUCache({ max: 200 });
  }
  const currentAvatarKey = window._avatarKeyMap.get(chatId);
  if (newAvatarKey !== currentAvatarKey) {
    checkAvatar(chatId);
  }
  if (!currentAvatarKey) {
    window._avatarKeyMap.set(chatId, newAvatarKey);
  }
  return window._avatarKeyMap.get(chatId);
};

export const getAvatarUrl = (chatId, newAvatarKey, size, retina, spanId) => {
  const avatarKey = getAvatarKey(chatId, newAvatarKey);
  return avatarKey ? getAvatarUrlFromService(avatarKey, size, chatId, retina, spanId) : "";
};

const MAX_CACHE_SIZE = 200;
const avatarKeyCache = new LRUCache({ max: MAX_CACHE_SIZE });

export default class ChatAvatar extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePushChatCb = (chats) => {
      if (!chats) return;
      const { chatId } = this.props;
      const chatInfo = chats[chatId];
      if (chatInfo) {
        this.setState({
          avatarKey: getAvatarKey(chatId, chatInfo.avatarKey),
        });
      }
    };

    const { chatId, avatarKey } = this.props;
    this.state = {
      avatarKey: getAvatarKey(chatId, avatarKey),
    };
    this.logger = getLogger("larkw-chat-avatar", props.tracing);
  }

  componentDidMount() {
    onPushChats(this.handlePushChatCb);
  }

  componentWillReceiveProps(nextProps) {
    const { chatId, avatarKey } = nextProps;
    if (chatId !== this.props.chatId) {
      const newAvatarKey = getAvatarKey(chatId, avatarKey);
      this.setState({
        avatarKey: newAvatarKey,
      });
    }
  }

  componentWillUnmount() {
    offPushChats(this.handlePushChatCb);
  }

  render() {
    const { avatarKey } = this.state;
    const {
      tracing,
      chatId,
      alt,
      size,
      shape,
      onClick,
      onContextMenu,
      className,
      disablePreload,
    } = this.props;
    return (
      <AvatarComponent
        tracing={spanContext(this.logger.span, tracing)}
        entityId={chatId}
        avatarKey={avatarKey}
        alt={alt}
        size={size}
        shape={shape}
        onClick={onClick}
        onContextMenu={onContextMenu}
        disablePreload={disablePreload}
        className={className}
      />
    );
  }
}

ChatAvatar.defaultProps = {
  alt: "",
  size: "small",
  shape: "circle",
};
