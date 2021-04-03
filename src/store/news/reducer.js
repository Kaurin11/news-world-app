import { SET_DISABLED } from "../countries/types";
import { SET_CATEGORIE_NEWS, SET_TOP_NEWS,SET_NEWS_FOR_CATEGORIE } from "./types";

const initialState = {
    topNews: [],
    newsForCategries: []
}

export const newsReducer =  (state = initialState, action) =>{
    switch(action.type) {
        case SET_TOP_NEWS: 
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