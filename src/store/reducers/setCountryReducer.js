import * as actionTypes from "../actions/actionTypes";

const initialState = {
    newsCountry: "us",
};

const setCountryReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_COUNTRY_US:
        return {
          ...state,
          newsCountry: "us",
        };
      case actionTypes.SET_COUNTRY_GB:
        return {
          ...state,
          newsCountry: "gb",
        };
      default:
        return state;
    }
  };
  
  export default setCountryReducer;