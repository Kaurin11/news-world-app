import { SET_DISABLED, SET_SELECTED_COUNTRY } from "./types";

const initialState = {
    selectedCountry: 'us',
    disabledCountry: false
}

export const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_COUNTRY: 
        return {
            ...state,
            ...action.payload
        }
        case SET_DISABLED: 
        return {
            ...state,
            ...action.payload
        }
        default: 
            return state;
    }
}