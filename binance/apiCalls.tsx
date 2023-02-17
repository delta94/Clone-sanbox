import { __awaiter, __generator } from "D57K";
import { U2 } from "LL52";

const fetchCountryShortV1 = async () => {
const response = await U2("/bapi/accounts/v1/public/account/ip/country-short");
return response.data;
};

const fetchCountryShortV2 = async () => {
const response = await U2("/bapi/accounts/v2/public/account/ip/country-short");
return response.data;
};

const fetchPromoteEmail = async () => {
const response = await U2("/bapi/accounts/v1/public/account/country/promote/email/show");
return response.data;
};


const getPublicCountryList = () => U2("/bapi/accounts/v1/public/country/list");
const getPrivateUserRestrictedCountry = () => U2("/bapi/accounts/v2/private/country/user/restricted");
const getPrivateCountryDisableTimeleft = () => U2("/bapi/accounts/v1/private/country/disable/timeleft");
const getPublicCountrySupportMobileRegister = (e = {}) => U2("/bapi/accounts/v2/public/country/support/mobile/register", e);

export default {
    fv: getPublicCountryList,
    _n: getPrivateUserRestrictedCountry,
    M3: getPrivateCountryDisableTimeleft,
    Qo: getPublicCountrySupportMobileRegister
};

export { fetchCountryShortV1, fetchCountryShortV2, fetchPromoteEmail };