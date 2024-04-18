__d("Visibility", ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"], (function (a, b, c, d, e, f, g) {
  var h, i, j;
  (h || (h = c("ExecutionEnvironment"))).canUseDOM && (document.hidden !== void 0 ? (i = "hidden", j = "visibilitychange") : document.mozHidden !== void 0 ? (i = "mozHidden", j = "mozvisibilitychange") : document.msHidden !== void 0 ? (i = "msHidden", j = "msvisibilitychange") : document.webkitHidden !== void 0 && (i = "webkitHidden", j = "webkitvisibilitychange"));
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);

    function b() {
      var b, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
      return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = i, c.hiddenEvent = j, b) || babelHelpers.assertThisInitialized(c)
    }
    var d = b.prototype;
    d.isHidden = function () {
      return i ? document[i] : !1
    };
    d.isSupported = function () {
      return (h || (h = c("ExecutionEnvironment"))).canUseDOM && document.addEventListener() && j !== void 0
    };
    return b
  }(c("BaseEventEmitter"));
  var k = new a();
  k.isSupported() && document.addEventListener(k.hiddenEvent, c("TimeSlice").guard(function (a) {
    k.emit(k.isHidden() ? k.HIDDEN : k.VISIBLE, {
      changeTime: a.timeStamp
    })
  }, "visibility change"));
  b = k;
  g["default"] = b
}), 98);


import { EventEmitter } from 'events';
import { ExecutionEnvironment } from 'exenv';
import { guard } from 'time-slice';

interface VisibilityEvent {
  changeTime: number;
}

interface Visibility extends EventEmitter {
  readonly HIDDEN: 'hidden';
  readonly VISIBLE: 'visible';

  isHidden(): boolean;
  isSupported(): boolean;
}

interface ExtendDocument extends Document {
  mozHidden?: boolean; 
  msHidden?: boolean;
  webkitHidden?: boolean;
}

let hiddenKey: 'hidden' | 'mozHidden' | 'msHidden' | 'webkitHidden';
let hiddenEvent: string;

if (ExecutionEnvironment.canUseDOM) {
  if (document.hidden !== undefined) {
    hiddenKey = 'hidden';
    hiddenEvent = 'visibilitychange'; 
  } else if ((document as ExtendDocument).mozHidden !== undefined) {
    hiddenKey = 'mozHidden';
    hiddenEvent = 'mozvisibilitychange';
  } else if ((document as ExtendDocument).msHidden !== undefined) {
    hiddenKey = 'msHidden';
    hiddenEvent = 'msvisibilitychange';
  } else if ((document as ExtendDocument).webkitHidden !== undefined) {
    hiddenKey = 'webkitHidden';
    hiddenEvent = 'webkitvisibilitychange';
  }
}

class Visibility extends EventEmitter {
  private eventEmitter = new EventEmitter();
  readonly HIDDEN = 'hidden';
  readonly VISIBLE = 'visible';

  hiddenKey: string;
  hiddenEvent: string;

  emit(event: string, data: VisibilityEvent) {
    this.eventEmitter.emit(event, data); 
  }

  constructor() {
    super();
    this.hiddenKey = hiddenKey;
    this.hiddenEvent = hiddenEvent;
  }

  isHidden() {
    return !!this.hiddenKey && document[this.hiddenKey]; 
  }

  isSupported() {
    return ExecutionEnvironment.canUseDOM && 
      // document.addEventListener &&
      this.hiddenEvent !== undefined;
  }
}

const visibility = new Visibility();

if (visibility.isSupported()) {
  document.addEventListener(
    visibility.hiddenEvent,
    guard(() => {
      visibility.emit(
        visibility.isHidden() ? visibility.HIDDEN : visibility.VISIBLE,
        { changeTime: event?.timeStamp || 0 }  
      );
    }, 'visibility change')
  );
}

export default Visibility;