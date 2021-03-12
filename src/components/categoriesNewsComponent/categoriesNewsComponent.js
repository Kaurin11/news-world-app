import React from 'react';
import { useHistory } from 'react-router';
import { newsInfoUrls } from '../../constants/routes/routes';
import qs from 'query-string';

const CategoriesNewsComponent =({title,description,urlToImage,content}) => {

    const history = useHistory();

    const moreHandler = () => {
        const q = qs.stringify({ title, urlToImage, content });

        //history.push({path:newsInfoUrl(),search:q});
        history.push(newsInfoUrls(q));
    }


    return (
        <div onClick={moreHandler} className="categories-news__content">
            <img className="categories-news__img" src={urlToImage} />
            <div>{title}</div>
        </div>
    )
}

export default CategoriesNewsComponent;