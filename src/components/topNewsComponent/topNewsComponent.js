import React from 'react';
import { useHistory } from 'react-router';
import { newsInfoUrl } from '../../constants/routes/routes';

const TopNewsComponent = ({title, description,urlToImage, url}) => {

    const history = useHistory();

    const moreHandler = () => {
        history.push(newsInfoUrl());
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