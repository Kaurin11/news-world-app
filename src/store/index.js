import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { countriesReducer } from './countries/reducer';
import { newsReducer } from './news/reducer';

const storeReducers = {
    countries: countriesReducer,
    news: newsReducer
}

export const store = createStore(combineReducers(storeReducers),applyMiddleware(thunk))