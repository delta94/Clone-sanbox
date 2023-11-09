__d("StoriesCardTimerSourceCometVideo", ["JSScheduler", "cometUniqueID", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = 1e3;
    a = function() {
        function a(a) {
            this.$2 = 0,
            this.$3 = 0,
            this.$4 = "",
            this.$4 = c("cometUniqueID")(),
            this.$1 = a
        }
        var b = a.prototype;
        b.isFrozen = function() {
            if (this.$1) {
                var a = this.$1.getCurrentState();
                return a.stalling
            }
            return !1
        }
        ;
        b.setDuration = function(a) {
            this.$2 = a
        }
        ;
        b.getDuration = function() {
            return this.$2 * i
        }
        ;
        b.setTimeElapsed = function(a) {
            this.$3 = a * i
        }
        ;
        b.getNewTimeElapsed = function(a) {
            return this.$3
        }
        ;
        b.getID = function() {
            return this.$4
        }
        ;
        b.play = function() {
            var a = this;
            c("gkx")("3729") ? (h || (h = c("JSScheduler"))).scheduleNormalPriCallback(function() {
                a.$1.play("user_initiated")
            }) : this.$1.play("user_initiated")
        }
        ;
        b.pause = function() {
            this.$1.pause("user_initiated")
        }
        ;
        b.resetSourceOnStop = function() {
            return c("gkx")("3729")
        }
        ;
        return a
    }();
    g["default"] = a
}
), 98);


import JSScheduler from 'JSScheduler';
import cometUniqueID from 'cometUniqueID';
import gkx from 'gkx';

const MILLI_SECONDS_MULTIPLIER = 1000;

class StoriesCardTimerSourceCometVideo {
  #timeElapsed = 0;
  #duration = 0;
  #uniqueID = "";
  #player;

  constructor(player) {
    this.#uniqueID = cometUniqueID();
    this.#player = player;
  }

  isFrozen() {
    if (this.#player) {
      const state = this.#player.getCurrentState();
      return state.stalling;
    }
    return false;
  }

  setDuration(duration) {
    this.#duration = duration;
  }

  getDuration() {
    return this.#duration * MILLI_SECONDS_MULTIPLIER;
  }

  setTimeElapsed(timeElapsed) {
    this.#timeElapsed = timeElapsed * MILLI_SECONDS_MULTIPLIER;
  }

  getNewTimeElapsed() {
    return this.#timeElapsed;
  }

  getID() {
    return this.#uniqueID;
  }

  play() {
    if (gkx('3729')) {
      JSScheduler.scheduleNormalPriCallback(() => {
        this.#player.play('user_initiated');
      });
    } else {
      this.#player.play('user_initiated');
    }
  }

  pause() {
    this.#player.pause('user_initiated');
  }

  resetSourceOnStop() {
    return true
  }
}

export default StoriesCardTimerSourceCometVideo;
