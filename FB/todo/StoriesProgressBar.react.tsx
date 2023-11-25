__d("StoriesProgressBar.react", ["CometVisualCompletionAttributes", "StoriesCardTimer", "StoriesCardTimerSourceCometVideo", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"), k = .1, l = .3, m = {
        noAnimation: {
            transitionDuration: "x1nskb4t",
            $$css: !0
        },
        root: {
            display: "x78zum5",
            height: "xqu0tyb",
            marginTop: "x14vqqas",
            marginEnd: "xq8finb",
            marginBottom: "xod5an3",
            marginStart: "x16n37ib",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "x8pckko",
            $$css: !0
        },
        segment: {
            backgroundColor: "x1v0du78",
            borderTopStartRadius: "xdxvlk3",
            borderTopEndRadius: "x1fglp",
            borderBottomEndRadius: "x1rp6h8o",
            borderBottomStartRadius: "xg6i1s1",
            display: "x1rg5ohu",
            flex: "x12lumcd",
            height: "x5yr21d",
            position: "x1n2onr6",
            $$css: !0
        },
        segmentFill: {
            backgroundColor: "x1l3tlr0",
            borderTopStartRadius: "xdxvlk3",
            borderTopEndRadius: "x1fglp",
            borderBottomEndRadius: "x1rp6h8o",
            borderBottomStartRadius: "xg6i1s1",
            height: "x5yr21d",
            transitionDuration: "x1g2r6go",
            transitionProperty: "xxrbq2n",
            transitionTimingFunction: "xcj1dhv",
            width: "xnalus7",
            willChange: "x13w7htt",
            $$css: !0
        },
        segmentSpace: {
            marginEnd: "xw3qccf",
            $$css: !0
        }
    };
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (b = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                currentCardProgress: 0,
                prevCardCount: -1,
                prevCardIndex: -1
            },
            d.$1 = new (c("StoriesCardTimer"))(function() {}
            ,function() {}
            ),
            d.$2 = function(a) {
                d.setState({
                    currentCardProgress: a
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(d)
        }
        b.getDerivedStateFromProps = function(a, b) {
            return a.currentCardIndex !== b.prevCardIndex || a.cardCount !== b.prevCardCount ? {
                currentCardProgress: 0,
                prevCardCount: a.cardCount,
                prevCardIndex: a.currentCardIndex
            } : null
        }
        ;
        var d = b.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.$1 = new (c("StoriesCardTimer"))(function() {
                a.props.onDone()
            }
            ,this.$2);
            this.props.cardTimerSource != null && (this.$1.setSource(this.props.cardTimerSource),
            this.props.isPaused || this.$1.play())
        }
        ;
        d.componentDidUpdate = function(a) {
            (a.currentCardIndex !== this.props.currentCardIndex || a.cardCount > this.props.cardCount) && this.$1.stop(),
            a.cardTimerSource !== this.props.cardTimerSource && (this.$1.setSource(this.props.cardTimerSource),
            this.props.isPaused || this.$1.play()),
            a.isPaused !== this.props.isPaused && (this.props.isPaused ? this.$1.pause() : this.$1.play())
        }
        ;
        d.componentWillUnmount = function() {
            this.setState({
                currentCardProgress: 0
            }),
            this.$1.cleanup()
        }
        ;
        d.render = function() {
            var a = this.props
              , b = a.cardCount;
            a = a.currentCardIndex;
            var d = [];
            for (var e = 0; e < b; e++) {
                var f = 0;
                e < a ? f = 100 : e > a ? f = 0 : f = this.state.currentCardProgress;
                var g = this.props.cardTimerSource instanceof c("StoriesCardTimerSourceCometVideo");
                d.push(j.jsx(n, {
                    animationDuration: g ? l : k,
                    isLastSegment: e === b - 1,
                    percentDone: f
                }, e))
            }
            return j.jsx("div", {
                className: "x78zum5 xqu0tyb x14vqqas xq8finb xod5an3 x16n37ib x10l6tqk x13vifvy x8pckko",
                children: d
            })
        }
        ;
        return b
    }(j.PureComponent);
    var n = function(a) {
        var b = a.animationDuration
          , d = a.isLastSegment;
        a = a.percentDone;
        b = {
            transitionDuration: b + "s",
            width: a + "%"
        };
        return j.jsx("div", {
            className: (h || (h = c("stylex")))(m.segment, !d && m.segmentSpace),
            children: j.jsx("div", babelHelpers["extends"]({
                className: h(m.segmentFill, a === 0 && m.noAnimation)
            }, c("CometVisualCompletionAttributes").IGNORE, {
                style: b
            }))
        })
    };
    b = a;
    g["default"] = b
}
), 98);




import * as React from 'react';
import { CometVisualCompletionAttributes } from 'CometVisualCompletionAttributes';
import { StoriesCardTimer } from 'StoriesCardTimer';
import { StoriesCardTimerSourceCometVideo } from 'StoriesCardTimerSourceCometVideo';
import stylex from 'stylex';

interface Props {
  cardCount: number;
  currentCardIndex: number;
  cardTimerSource?: any;
  isPaused: boolean;
  onDone: () => void;
}

interface State {
  currentCardProgress: number;
  prevCardCount: number;
  prevCardIndex: number;
}

const shortAnimationDuration = 0.1; 
const longAnimationDuration = 0.3; 

const styles = stylex.create({
  // ... your styles here
});

const StoriesProgressBar: React.FC<Props> = ({
  cardCount,
  currentCardIndex,
  cardTimerSource,
  isPaused,
  onDone,
}) => {
  const [state, setState] = React.useState<State>({
    currentCardProgress: 0,
    prevCardCount: -1,
    prevCardIndex: -1,
  });

  const cardTimerRef = React.useRef<any>();

  React.useEffect(() => {
    cardTimerRef.current = new StoriesCardTimer(
      () => onDone(),
      (progress: number) => {
        setState((prev) => ({ ...prev, currentCardProgress: progress }));
      },
    );

    return () => {
      setState({ currentCardProgress: 0, prevCardCount: -1, prevCardIndex: -1 });
      cardTimerRef.current.cleanup();
    };
  }, []);

  React.useEffect(() => {
    if (cardTimerSource != null) {
      cardTimerRef.current.setSource(cardTimerSource);
      if (!isPaused) cardTimerRef.current.play();
    }
  }, [cardTimerSource, isPaused]);

  React.useEffect(() => {
    if (currentCardIndex !== state.prevCardIndex || cardCount !== state.prevCardCount) {
      cardTimerRef.current.stop();
      setState({
        currentCardProgress: 0,
        prevCardCount: cardCount,
        prevCardIndex: currentCardIndex,
      });
    }
  }, [currentCardIndex, cardCount]);

  const renderSegment = (percentDone: number, isLastSegment: boolean, animationDuration: number, key: number) => {
    const style = {
      transitionDuration: `${animationDuration}s`,
      width: `${percentDone}%`,
    };

    return (
      <div key={key} className={stylex(styles.segment, !isLastSegment && styles.segmentSpace)}>
        <div
          {...CometVisualCompletionAttributes.IGNORE}
          className={stylex(styles.segmentFill, percentDone === 0 && styles.noAnimation)}
          style={style}
        />
      </div>
    );
  };

  const segments = Array.from({ length: cardCount }, (_, i) => {
    let percentDone = 0;
    if (i < currentCardIndex) {
      percentDone = 100;
    } else if (i > currentCardIndex) {
      percentDone = 0;
    } else {
      percentDone = state.currentCardProgress;
    }

    const isLastSegment = i === cardCount - 1;
    const isVideoSource = cardTimerSource instanceof StoriesCardTimerSourceCometVideo;
    const animationDuration = isVideoSource ? l : k;

    return renderSegment(percentDone, isLastSegment, animationDuration, i);
  });

  return <div className={stylex(styles.root)}>{segments}</div>;
};

export default StoriesProgressBar;
