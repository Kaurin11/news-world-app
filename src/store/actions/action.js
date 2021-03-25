import * as actionTypes from "./actionTypes";

export const setCountryUs = (newsCountry) => {
    return {
      type: actionTypes.SET_COUNTRY_US,
      newsCountry,
    };
};

  export const setCountryGb = (newsCountry) => {
    return {
      type: actionTypes.SET_COUNTRY_GB,
      newsCountry,
    };
};