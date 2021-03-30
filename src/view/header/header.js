import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {generateCategoriesUrls ,searcheNewsUrl, topNewsUrl } from '../../constants/routes/routes';
import './style.scss';

import { connect, useDispatch, useSelector } from "react-redux";
import { setCurrentCountryAction } from '../../store/countries/actions';

// TODO: kroz redux a ne da se prosledi funckija setCountry
const Header = ({disabled}) => {
    const history = useHistory();

    const dispatch = useDispatch();
    const {selectedCountry} = useSelector(state => state.countries);
    
    const topnewsHandler = () => {
        history.push(topNewsUrl());
    }

    const searchHandler = () => {
        history.push(searcheNewsUrl());
    }

    const categoriesHandler = () => {
        history.push(generateCategoriesUrls(1));
    }

    return(
        <div className="header">
            <div className="header__options">
                <h2 onClick={topnewsHandler}>Top News</h2>
                <h2 onClick={categoriesHandler}>Categoires</h2>
                <h2 onClick={searchHandler}>Search</h2>
            </div>
            <div className="header__region">
                <h2 onClick={() => setCurrentCountryAction('us', dispatch)}><button disabled={disabled}>US</button></h2>
                <h2 onClick={() => setCurrentCountryAction('gb', dispatch)}><button disabled={disabled}>GB</button></h2>
            </div>
        </div>
    )
}


export default Header;