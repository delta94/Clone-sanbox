hZZo: function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var E = n("cDcd")
      , r = n.n(E)
      , _ = n("Pc05") // classnames
      , i = n.n(_)
      , T = n("hHcI");
    n("/je4");
    const o = T.e + "-avatar";
    class s extends E.PureComponent {
        constructor() {
            super(...arguments),
            this.state = {
                loadedSrc: ""
            },
            this.renderImage = ()=>{
                const {alt: e, src: t, onLoad: n, onError: E} = this.props;
                return t ? r.a.createElement("img", {
                    className: o + "-img",
                    alt: e,
                    src: t,
                    onLoad: n,
                    onError: E
                }) : null
            }
        }
        render() {
            const {size: e, shape: t, onClick: n, onContextMenu: E, className: _} = this.props
              , T = "number" == typeof e
              , s = i()(o, o + "-" + t, _, {
                [o + "-" + e]: !T
            })
              , u = T ? {
                width: e,
                height: e
            } : void 0;
            return r.a.createElement("div", {
                className: s,
                onClick: n,
                onContextMenu: E,
                style: u
            }, this.renderImage())
        }
    }
    s.defaultProps = {
        alt: "",
        size: "small",
        shape: "circle",
        onError: T.d,
        onLoad: T.d,
        onClick: T.d,
        onContextMenu: T.d
    };
    class u extends E.PureComponent {
        constructor() {
            super(...arguments),
            this.handleClick = e=>{
                this.props.onAvatarClick(e)
            }
            ,
            this.handleLoadError = ()=>{
                this.props.onLoadError()
            }
            ,
            this.handleloadSuccess = ()=>{
                this.props.onLoadSuccess()
            }
        }
        render() {
            const {className: e, url: t, size: n} = this.props
              , E = "number" == typeof n
              , _ = i()(T.e + "-avatar", {
                [T.e + "-avatar-" + n]: !E,
                [e]: Boolean(e)
            });
            let o = {};
            return E && (o = {
                width: n + "px",
                height: n + "px"
            }),
            t ? r.a.createElement("div", {
                className: _,
                onClick: this.handleClick,
                style: o
            }, r.a.createElement("img", {
                className: T.e + "-avatar-img",
                alt: "Avatar",
                src: t,
                onError: this.handleLoadError,
                onLoad: this.handleloadSuccess
            })) : r.a.createElement("div", {
                className: _,
                onClick: this.handleClick,
                style: o
            })
        }
    }
    u.defaultProps = {
        className: "",
        onAvatarClick: T.d,
        onLoadError: T.d,
        onLoadSuccess: T.d,
        size: "small",
        url: ""
    };
    class a extends E.PureComponent {
        render() {
            const e = this.props
              , {src: t, alt: n, size: E, shape: _, onError: i, onLoad: T, onClick: o, onContextMenu: a, className: A} = e
              , S = function(e, t) {
                if (null == e)
                    return {};
                var n, E, r = {}, _ = Object.keys(e);
                for (E = 0; E < _.length; E++)
                    n = _[E],
                    t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, ["src", "alt", "size", "shape", "onError", "onLoad", "onClick", "onContextMenu", "className"]);
            return void 0 !== t ? r.a.createElement(s, {
                src: t,
                alt: n,
                size: E,
                shape: _,
                onError: i,
                onLoad: T,
                onClick: o,
                onContextMenu: a,
                className: A
            }) : r.a.createElement(u, Object.assign({}, S, {
                size: E,
                className: A
            }))
        }
    }
},



import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { larkc as constants } from './constant';

const avatarClassPrefix = constants.larkc + '-avatar';

class AvatarImage extends PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        loadedSrc: '',
      };
  
      this.renderImage = () => {
        const { alt, src, onLoad, onError } = this.props;
        return src ? (
          <img
            className={`${avatarClassPrefix}-img`}
            alt={alt}
            src={src}
            onLoad={onLoad}
            onError={onError}
          />
        ) : null;
      };
    }
  
    render() {
      const { size, shape, onClick, onContextMenu, className } = this.props;
      const isNumberSize = typeof size === 'number';
  
      const avatarClassName = classNames(
        avatarClassPrefix,
        `${avatarClassPrefix}-${shape}`,
        className,
        {
          [`${avatarClassPrefix}-${size}`]: !isNumberSize,
        }
      );
  
      const avatarStyle = isNumberSize ? { width: size, height: size } : undefined;
  
      return (
        <div
          className={avatarClassName}
          onClick={onClick}
          onContextMenu={onContextMenu}
          style={avatarStyle}
        >
          {this.renderImage()}
        </div>
      );
    }
  }
  
  AvatarImage.defaultProps = {
    alt: '',
    size: 'small',
    shape: 'circle',
    onError: T.defaultOnError,
    onLoad: T.defaultOnLoad,
    onClick: T.defaultOnClick,
    onContextMenu: T.defaultOnContextMenu,
  };


  class AvatarLink extends PureComponent {
    handleClick = (event) => {
      this.props.onAvatarClick(event);
    }
  
    handleLoadError = () => {
      this.props.onLoadError();
    }
  
    handleLoadSuccess = () => {
      this.props.onLoadSuccess();
    }
  
    render() {
      const { className, url, size } = this.props;
      const isNumberSize = typeof size === 'number';
  
      const avatarClassName = classNames(avatarClassPrefix, {
        [`${avatarClassPrefix}-${size}`]: !isNumberSize,
        [className]: Boolean(className),
      });
  
      const avatarStyle = isNumberSize ? { width: size, height: size } : {};
  
      return url ? (
        <div
          className={avatarClassName}
          onClick={this.handleClick}
          style={avatarStyle}
        >
          <img
            className={`${avatarClassPrefix}-img`}
            alt="Avatar"
            src={url}
            onError={this.handleLoadError}
            onLoad={this.handleLoadSuccess}
          />
        </div>
      ) : (
        <div className={avatarClassName} onClick={this.handleClick} style={avatarStyle} />
      );
    }
  }
  
  AvatarLink.defaultProps = {
    className: '',
    onAvatarClick: constants.d,
    onLoadError: constants.d,
    onLoadSuccess: constants.d,
    size: 'small',
    url: '',
  };


  class Avatar extends PureComponent {
    render() {
      const propsToPass = Object.keys(this.props).reduce((filteredProps, propKey) => {
        if (!['src', 'alt', 'size', 'shape', 'onError', 'onLoad', 'onClick', 'onContextMenu', 'className'].includes(propKey)) {
          filteredProps[propKey] = this.props[propKey];
        }
        return filteredProps;
      }, {});
  
      return this.props.src !== undefined ? <AvatarImage {...this.props} /> : <AvatarLink {...propsToPass} size={this.props.size} className={this.props.className} />;
    }
  }
  
  export default Avatar;