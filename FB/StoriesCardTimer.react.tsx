class StoriesCardTimer {
    constructor(onComplete, onUpdate) {
        this.$1 = 0;
        this.$4 = "";
        this.$6 = 0;
        this.$8 = null;
        this.$9 = () => {
            const a = this.$5;
            if (a == null || this.$7 == null) return;
            this.$6 = a.getNewTimeElapsed(this.$6);
            this.$1 = a.getDuration();
            let progress = this.$1 > 0 ? this.$6 / this.$1 : 0;
            progress = Math.min(100 * progress, 100);
            const isChanged = this.$8 !== progress;
            if (isChanged && this.$3) this.$3(progress);
            this.$8 = progress;
            if (progress === 100) {
                this.$10();
                if (isChanged && this.$2) this.$2();
            } else {
                const timeLeft = this.$1 - this.$6;
                const timeout = Math.min(timeLeft, h);
                this.$7 = setTimeout(this.$9, timeout);
            }
        };
        this.$2 = onComplete;
        this.$3 = onUpdate;
    }

    isFrozen() {
        return null;
    }

    getDuration() {
        return this.$1;
    }

    getID() {
        return this.$4;
    }

    setSource(source) {
        this.stop();
        this.$5 = source;
    }

    pause() {
        if (this.$5) this.$5.pause();
        this.$10();
    }

    play() {
        if (this.$5) this.$5.play();
        if (gkx("709647")) {
            if (this.$3) this.$3(100);
            return;
        }
        this.$7 = setTimeout(this.$9, 0);
    }

    stop() {
        this.$6 = 0;
        this.$10();
        if (this.$5 && this.$5.resetSourceOnStop()) this.$5 = null;
    }

    cleanup() {
        this.stop();
        this.$5 = null;
        this.$2 = null;
        this.$3 = null;
    }

    $10() {
        if (this.$7 == null) return;
        clearTimeout(this.$7);
        this.$7 = null;
    }
}

// export default StoriesCardTimer;

// $1: A property that stores the duration of the timer.
// $4: A property that stores the ID of the timer.
// $6: A property that stores the elapsed time of the timer.
// $8: A property that stores the progress of the timer.
// $9: A function that updates the timer's progress and calls the onComplete and onUpdate callbacks.
// $2: A callback that is called when the timer completes.
// $3: A callback that is called when the timer's progress is updated.
// $5: A property that stores the source of the timer.
// $7: A property that stores the timeout that is used to update the timer's progress.
// $10: A function that stops the timer by clearing the timeout.

// __d("StoriesCardTimer", ["gkx", "setTimeout"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = 100;
//     a = function () {
//         function a(a, b) {
//             var d = this;
//             this.$1 = 0;
//             this.$4 = "";
//             this.$6 = 0;
//             this.$8 = null;
//             this.$9 = function () {
//                 var a = d.$5;
//                 if (a == null || d.$7 == null) return;
//                 d.$6 = a.getNewTimeElapsed(d.$6);
//                 d.$1 = a.getDuration();
//                 a = d.$1 > 0 ? d.$6 / d.$1 : 0;
//                 a = Math.min(100 * a, 100);
//                 var b = d.$8 !== a;
//                 b && (d.$3 && d.$3(a), d.$8 = a);
//                 if (a === 100) d.$10(), b && (d.$2 && d.$2());
//                 else {
//                     a = d.$1 - d.$6;
//                     b = Math.min(a, h);
//                     d.$7 = c("setTimeout")(d.$9, b)
//                 }
//             };
//             this.$2 = a;
//             this.$3 = b
//         }
//         var b = a.prototype;
//         b.isFrozen = function () {
//             return null
//         };
//         b.getDuration = function () {
//             return this.$1
//         };
//         b.getID = function () {
//             return this.$4
//         };
//         b.setSource = function (a) {
//             this.stop(), this.$5 = a
//         };
//         b.pause = function () {
//             this.$5 && this.$5.pause(), this.$10()
//         };
//         b.play = function () {
//             this.$5 && this.$5.play();
//             if (c("gkx")("709647")) {
//                 this.$3 && this.$3(100);
//                 return
//             }
//             this.$7 = c("setTimeout")(this.$9, 0)
//         };
//         b.stop = function () {
//             this.$6 = 0, this.$10(), this.$5 && this.$5.resetSourceOnStop() && (this.$5 = null)
//         };
//         b.cleanup = function () {
//             this.stop(), this.$5 = null, this.$2 = null, this.$3 = null
//         };
//         b.$10 = function () {
//             if (this.$7 == null) return;
//             window.clearTimeout(this.$7);
//             this.$7 = null
//         };
//         return a
//     }();
//     g["default"] = a
// }), 98);