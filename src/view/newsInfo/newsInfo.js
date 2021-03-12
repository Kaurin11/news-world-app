import React from 'react';
import Header from '../header/header';

import qs from 'query-string';

const NewsInfo = ({location}) => {

    const article = qs.parse(location.search);
    console.log(article)

    return(
        <div className="news-info">
            <Header />
            <div className="news-info__title">{article.title}</div>
            <img className="news-info__img" src={article.urlToImage} />
            <div className="news-info__content">{article.content}</div>
        </div>
    )
}

export default NewsInfo;