import React from 'react';
import { useHistory } from 'react-router';
import { newsInfoUrls } from '../../constants/routes/routes';

import qs from 'query-string';

const TopNewsComponent = ({title, description,urlToImage, url,content}) => {

    const history = useHistory();

    const moreHandler = () => {
        const q = qs.stringify({ title, urlToImage, content });

        //history.push({path:newsInfoUrl(),search:q});
        history.push(newsInfoUrls(q));
    }

    return(
        <div className="top-news__content">
            <h1>{title}</h1>
            <img className="top-news__img" src={urlToImage} />
            <h2>{description}</h2>
            <a
            target="_blank"
            href={url}>More</a>
            <button onClick={moreHandler}>More</button>
        </div>
    )
}

export default TopNewsComponent;