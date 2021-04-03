import React, { useEffect } from 'react';
import Header from '../header/header';

import qs from 'query-string';
import Button from '../../components/button/button';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setDisabledAction } from '../../store/countries/actions';

const NewsInfo = ({location}) => {

    const {disabledCountry} = useSelector(state => state.countries);
    const dispatch = useDispatch();
    console.log(disabledCountry)

    const history = useHistory();

    const article = qs.parse(location.search);
    console.log(article)

    useEffect(() => {
        disabledButton();
    }, []);

    const disabledButton = () => {
        setDisabledAction(true, dispatch);
    }

    const goBackHandler =() => {
        history.goBack();
    }

    return(
        <div className="news-info">
            <div className="news-info__title">{article.title}</div>
            <img className="news-info__img" src={article.urlToImage} />
            <div className="news-info__content">{article.content}</div>
            <Button onClick={goBackHandler} className="btn news-info__btn" name={'Back'} />
        </div>
    )
}

export default NewsInfo;