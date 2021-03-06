import React from 'react';
import { useHistory } from 'react-router';
import { newsInfoUrls } from '../../constants/routes/routes';

import qs from 'query-string';
import Button from '../button/button';

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
            <h3>{description}</h3>
            <Button onClick={moreHandler} className='btn top-news__btn' name={'More'}/>
        </div>
    )
}

export default TopNewsComponent;