import React from 'react';
import Header from '../header/header';

import qs from 'query-string';
import Button from '../../components/button/button';
import { useHistory } from 'react-router';
import { topNewsUrl } from '../../constants/routes/routes';

const NewsInfo = ({location}) => {

    const history = useHistory();

    const article = qs.parse(location.search);
    console.log(article)

    const goBackHandler =() => {
        history.push(topNewsUrl());
    }

    return(
        <div className="news-info">
            <Header />
            <div className="news-info__title">{article.title}</div>
            <img className="news-info__img" src={article.urlToImage} />
            <div className="news-info__content">{article.content}</div>
            <Button onClick={goBackHandler} className="btn news-info__btn" name={'Back'} />
        </div>
    )
}

export default NewsInfo;