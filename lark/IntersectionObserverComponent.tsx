"1OI8": function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }
    ));
    var r = n("cDcd")
      , o = n.n(r)
      , i = n("faye")
      , a = n.n(i)
      , s = n("cNRa")
      , c = n.n(s);
    class u extends r.Component {
        constructor() {
            super(...arguments),
            this.handleIntersectionChange = e=>{
                const {onIntersection: t, onUnIntersection: n} = this.props;
                e.forEach(e=>{
                    const {intersectionRatio: r} = e;
                    r > 0 ? t && t(e.target) : n && n(e.target)
                }
                )
            }
        }
        componentDidMount() {
            const e = a.a.findDOMNode(this)
              , t = this.props.root ? document.querySelector(this.props.root) : null;
            this.intersectionOberver = new IntersectionObserver(this.handleIntersectionChange,{
                root: t,
                rootMargin: this.props.rootMargin,
                threshold: this.props.threshold
            }),
            this.intersectionOberver.observe(e)
        }
        componentWillUnmount() {
            if (this.intersectionOberver) {
                if (
                this.intersectionOberver.disconnect(),
                this.intersectionOberver = null,
                !this.props.onIntersectionUnmount
                )
                    return;
                this.props.onIntersectionUnmount()
            }
        }
        render() {
            return o.a.Children.only(this.props.children)
        }
    }
    u.defaultProps = {
        rootMargin: "0px",
        threshold: [1e-6]
    },
    u.propTypes = {
        root: c.a.string,
        rootMargin: c.a.string,
        threshold: c.a.array,
        onIntersection: c.a.func,
        onUnIntersection: c.a.func
    }
}



import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

class IntersectionObserverComponent extends Component {
  constructor(props) {
    super(props);

    this.handleIntersectionChange = (entries) => {
      const { onIntersection, onUnIntersection } = this.props;

      entries.forEach((entry) => {
        const { intersectionRatio } = entry;
        if (intersectionRatio > 0) {
          if (onIntersection) onIntersection(entry.target);
        } else {
          if (onUnIntersection) onUnIntersection(entry.target);
        }
      });
    };
  }

  componentDidMount() {
    const element = findDOMNode(this);
    const { root, rootMargin, threshold } = this.props;

    this.intersectionObserver = new IntersectionObserver(this.handleIntersectionChange, {
      root: root ? document.querySelector(root) : null,
      rootMargin: rootMargin,
      threshold: threshold,
    });

    this.intersectionObserver.observe(element);
  }

  componentWillUnmount() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;

      if (!this.props.onIntersectionUnmount) return;
      
      this.props.onIntersectionUnmount();
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

IntersectionObserverComponent.defaultProps = {
  rootMargin: "0px",
  threshold: [1e-6],
};

IntersectionObserverComponent.propTypes = {
  root: PropTypes.string,
  rootMargin: PropTypes.string,
  threshold: PropTypes.array,
  onIntersection: PropTypes.func,
  onUnIntersection: PropTypes.func,
  onIntersectionUnmount: PropTypes.func,
};

export default IntersectionObserverComponent;
