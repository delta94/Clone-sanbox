// __d("FlightSerializableIcon", ["IconSource", "ImageIconSource", "TintableIconSource"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     function a(a) {
//         if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "TintableIconSource" || a.$$typeof === "fb.tintableiconsource")) {
//             var b = a;
//             return new (c("TintableIconSource"))(b.domain,b.src,b.size)
//         }
//         if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "IconSource" || a.$$typeof === "fb.iconsource")) {
//             b = a;
//             return new (c("IconSource"))(b.domain,b.src,b.size)
//         }
//         if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "ImageIconSource" || a.$$typeof === "fb.imageiconsource")) {
//             b = a;
//             return new (c("ImageIconSource"))(b.src,b.width,b.height,b.resizeStrategy)
//         }
//         return a
//     }
//     g.parseFlightIcon = a
// }

import IconSource from './IconSource'; // Replace './IconSource' with the actual path to the IconSource module.
import ImageIconSource from './ImageIconSource'; // Replace './ImageIconSource' with the actual path to the ImageIconSource module.
import TintableIconSource from './TintableIconSource'; // Replace './TintableIconSource' with the actual path to the TintableIconSource module.

function parseFlightIcon(icon: any): IconSource | ImageIconSource | TintableIconSource | any {
  if (typeof icon === 'object' && typeof icon !== 'function' && icon !== null) {
    if (icon.flight_icon_type === 'TintableIconSource' || icon.$$typeof === 'fb.tintableiconsource') {
      const tintableIcon = icon as TintableIconSource;
      return new TintableIconSource(tintableIcon.domain, tintableIcon.src, tintableIcon.size);
    }

    if (icon.flight_icon_type === 'IconSource' || icon.$$typeof === 'fb.iconsource') {
      const iconSource = icon as IconSource;
      return new IconSource(iconSource.domain, iconSource.src, iconSource.size);
    }

    if (icon.flight_icon_type === 'ImageIconSource' || icon.$$typeof === 'fb.imageiconsource') {
      const imageIconSource = icon as ImageIconSource;
      return new ImageIconSource(imageIconSource.src, imageIconSource.width, imageIconSource.height, imageIconSource.resizeStrategy);
    }
  }

  return icon;
}

export { parseFlightIcon };
