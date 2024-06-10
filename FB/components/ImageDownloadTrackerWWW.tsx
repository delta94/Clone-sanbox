__d(
  "ImageDownloadTrackerWWW",
  ["NetworkStatus", "Promise", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = 2,
      j = 250;
    function a(a, d) {
      var e = 0,
        f;
      return new (h || (h = b("Promise")))(function (b, g) {
        function h() {
          var f = new Image();
          f.onload = function () {
            c("NetworkStatus").reportSuccess(), b();
          };
          f.onerror = function () {
            var a = e <= i;
            a ? c("setTimeout")(h, j) : (c("NetworkStatus").reportError(), g());
          };
          e++;
          d();
          f.src = a;
        }
        c("NetworkStatus").isOnline()
          ? h()
          : (f = c("NetworkStatus").onChange(function (a) {
              a = a.online;
              a && (h(), f.remove());
            }));
      });
    }
    g["default"] = a;
  },
  98
);

import NetworkStatus from "NetworkStatus";
import Promise from "Promise";
import { setTimeout } from "setTimeout";

const MAX_RETRIES = 2;
const RETRY_DELAY = 250;

function ImageDownloadTracker(
  url: string,
  callback: () => void
): Promise<void> {
  let attempt = 0;

  return new Promise<void>((resolve, reject) => {
    function tryLoadImage() {
      const img = new Image();
      img.onload = () => {
        NetworkStatus.reportSuccess();
        resolve();
      };
      img.onerror = () => {
        const shouldRetry = attempt <= MAX_RETRIES;
        if (shouldRetry) {
          setTimeout(tryLoadImage, RETRY_DELAY);
        } else {
          NetworkStatus.reportError();
          reject();
        }
      };
      attempt++;
      callback();
      img.src = url;
    }

    if (NetworkStatus.isOnline()) {
      tryLoadImage();
    } else {
      const removeListener = NetworkStatus.onChange((status) => {
        if (status.online) {
          tryLoadImage();
          removeListener();
        }
      });
    }
  });
}

export default ImageDownloadTracker;
