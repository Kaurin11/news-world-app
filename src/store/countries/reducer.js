import { SET_SELECTED_COUNTRY } from "./types";

const initialState = {
    selectedCountry: 'us'
}

export const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_COUNTRY: 
        return {
            ...state,
            ...action.payload
        }
        default: 
            return state;
    }
}