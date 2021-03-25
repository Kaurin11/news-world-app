import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { categoriesUrl,categoriesUrls,generateCategoriesUrls ,searcheNewsUrl, topNewsUrl } from '../../constants/routes/routes';
import './style.scss';

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/action";

// TODO: kroz redux a ne da se prosledi funckija setCountry
const Header = ({setCountry,disabled,setCountryNewsUsStore,setCountryNewsGbStore}) => {

    const [page,setPage] = useState('1');
    const history = useHistory();

    const topnewsHandler = () => {
        history.push(topNewsUrl());
    }

    const searchHandler = () => {
        history.push(searcheNewsUrl());
    }

    const categoriesHandler = () => {
        history.push(generateCategoriesUrls(1));
    }

    // TODO: kroz redux a ne da se prosledi funckija setCountry
    const setUscountryHandler= () => {
        setCountry('us');
    }

    // TODO: kroz redux a ne da se prosledi funckija setCountry
    const setGbcountryHandler= () => {
        setCountry('gb');
    }

    return(
        <div className="header">
            <div className="header__options">
                <h2 onClick={topnewsHandler}>Top News</h2>
                <h2 onClick={categoriesHandler}>Categoires</h2>
                <h2 onClick={searchHandler}>Search</h2>
            </div>
            <div className="header__region">
                <h2 onClick={() => setCountryNewsUsStore()}><button disabled={disabled}>US</button></h2>
                <h2 onClick={() => setCountryNewsGbStore()}><button disabled={disabled}>GB</button></h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countryNews : state.newsCountry
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setCountryNewsUsStore: () => dispatch(actionCreators.setCountryUs()),
      setCountryNewsGbStore: () => dispatch(actionCreators.setCountryGb())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Header);