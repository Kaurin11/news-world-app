import { SET_DISABLED, SET_SELECTED_COUNTRY } from "./types"

export const setCurrentCountryAction = (currentCountry, dispatch) => {
    dispatch({
        type: SET_SELECTED_COUNTRY,
        payload: { selectedCountry: currentCountry }
    })
}

export const setDisabledAction = (disabledCountry, dispatch) => {
    dispatch({
        type: SET_DISABLED,
        payload: { disabledCountry: disabledCountry }
    })
}