import { SiteData } from "SiteData";

function isRTL(): boolean {
  return SiteData.is_rtl;
}

const Locale = {
  isRTL,
};

export default Locale;
