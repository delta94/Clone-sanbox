"7YiB": function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return s
    }
    )),
    n.d(t, "a", (function() {
        return i.e
    }
    )),
    n.d(t, "b", (function() {
        return u
    }
    ));
    var r = n("cDcd")
      , o = n.n(r)
      , i = n("OqZs")
      , a = n("bfgy")
      , s = Object(a.a)()
      , c = n("j1WJ");
    class u extends o.a.PureComponent {
        constructor(e) {
            super(e),
            this.pushChattersCb = e=>{
                if (!e)
                    return;
                const {chatterId: t} = this.props
                  , n = e[t];
                n && this.setState({
                    avatarKey: s.getAvatarKey(t, n.avatarKey)
                })
            }
            ;
            const {chatterId: t, avatarKey: n} = e;
            this.state = {
                avatarKey: s.getAvatarKey(t, n)
            },
            this.logger = Object(c.d)("larkw-chatter-avatar", e.tracing)
        }
        componentDidMount() {
            s.onPushChatters(this.pushChattersCb)
        }
        componentWillReceiveProps(e) {
            const {chatterId: t, avatarKey: n} = e;
            if (t !== this.props.chatterId) {
                const e = s.getAvatarKey(t, n);
                this.setState({
                    avatarKey: e
                })
            }
        }
        componentWillUnmount() {
            s.offPushChatters(this.pushChattersCb)
        }
        render() {
            const {avatarKey: e} = this.state
              , {tracing: t, chatterId: n, alt: r, size: a, shape: s, onClick: u, onContextMenu: l, className: d, disablePreload: p} = this.props;
            return o.a.createElement(i.d, {
                tracing: Object(c.e)(this.logger.span, t),
                entityId: n,
                avatarKey: e,
                alt: r,
                size: a,
                shape: s,
                onClick: u,
                onContextMenu: l,
                disablePreload: p,
                className: d
            })
        }
    }
    u.defaultProps = {
        alt: "",
        size: "small",
        shape: "circle"
    }
},

import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { getAvatarKey, onPushChatters, offPushChatters } from 'bfgy';
import { AvatarProps } from 'OqZs';
import AvatarComponent from './AvatarComponent';
import { getLogger, startSpan, createSpanContext } from 'j1WJ';

class ChatterAvatar extends PureComponent<AvatarProps> {
  state = {
    avatarKey: getAvatarKey(this.props.chatterId, this.props.avatarKey),
  };

  logger = getLogger('larkw-chatter-avatar', this.props.tracing);

  pushChattersCb = (chatters: Record<string, any>) => {
    if (!chatters) return;

    const { chatterId } = this.props;
    const chatterInfo = chatters[chatterId];

    if (chatterInfo) {
      this.setState({
        avatarKey: getAvatarKey(chatterId, chatterInfo.avatarKey),
      });
    }
  };

  componentDidMount() {
    onPushChatters(this.pushChattersCb);
  }

  componentWillReceiveProps(nextProps: AvatarProps) {
    if (nextProps.chatterId !== this.props.chatterId) {
      const avatarKey = getAvatarKey(nextProps.chatterId, nextProps.avatarKey);
      this.setState({
        avatarKey,
      });
    }
  }

  componentWillUnmount() {
    offPushChatters(this.pushChattersCb);
  }

  render(): ReactNode {
    const { avatarKey } = this.state;
    const {
      tracing,
      chatterId,
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
        tracing={createSpanContext(this.logger.span, tracing)}
        entityId={chatterId}
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

ChatterAvatar.defaultProps = {
  alt: '',
  size: 'small',
  shape: 'circle',
};

export default ChatterAvatar;
