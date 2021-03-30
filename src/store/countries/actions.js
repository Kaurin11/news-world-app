import { SET_SELECTED_COUNTRY } from "./types"

export const setCurrentCountryAction = (currentCountry, dispatch) => {
    dispatch({
        type: SET_SELECTED_COUNTRY,
        payload: { selectedCountry: currentCountry }
    })
}