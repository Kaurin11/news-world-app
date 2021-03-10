import React from 'react';
import { useHistory } from 'react-router';
import { categoriesUrl } from '../../constants/routes/routes';
import './style.scss';

const Header = ({setCountry}) => {

    const history = useHistory();

    const categoriesHandler = () => {
        history.push(categoriesUrl());
    }

    const setUscountryHandler= () => {
        setCountry('us');
    }

    const setGbcountryHandler= () => {
        setCountry('gb');
    }

    return(
        <div className="header">
            <div className="header__options">
                <h2>Top News</h2>
                <h2 onClick={categoriesHandler}>Categoires</h2>
                <h2>Search</h2>
            </div>
            <div className="header__region">
                <h2 onClick={setUscountryHandler}>US</h2>
                <h2 onClick={setGbcountryHandler}>GB</h2>
            </div>
        </div>
    )
}
export default Header;