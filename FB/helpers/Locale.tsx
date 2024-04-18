// __d("Locale", ["SiteData"], (function (a, b, c, d, e, f) {
//   function a() {
//     return b("SiteData").is_rtl
//   }
//   e.exports = {
//     isRTL: a
//   }
// }), null);

import { SiteData } from './SiteData'; // Adjust the import path according to your project structure

const Locale = {
  isRTL: (): boolean => SiteData.is_rtl,
};

export default Locale;
