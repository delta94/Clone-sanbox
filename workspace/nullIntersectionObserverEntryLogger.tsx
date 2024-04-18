__d("nullIntersectionObserverEntryLogger", ["FBLogger", "Random"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        a == null && d("Random").coinflip(100) && c("FBLogger")("comet_infra").warn(b)
    }
    g["default"] = a
}), 98);

import FBLogger from 'FBLogger'; // Assuming FBLogger is available
import { coinflip } from 'Random'; // Assuming Random is available

/**
 * Logs a warning message with FBLogger if the entry is null and a random coinflip succeeds.
 *
 * @param entry The IntersectionObserverEntry to check.
 * @param message The warning message to log.
 */
export function logNullIntersectionObserverEntry(entry: IntersectionObserverEntry | null, message: string) {
  if (entry === null && coinflip(100)) {
    FBLogger('comet_infra').warn(message);
  }
}
