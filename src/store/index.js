import { combineReducers, createStore } from 'redux';

import { countriesReducer } from './countries/reducer';

const storeReducers = {
    countries: countriesReducer,
}

export const store = createStore(combineReducers(storeReducers))