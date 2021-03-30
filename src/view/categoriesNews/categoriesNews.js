import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { newsForOneCategoriReq } from '../../constants/services/services';
import Header from '../header/header';

import {useSelector} from 'react-redux';

const CategoriesNews = () => {

    const[newsForCategorie, setNewsForCategorie] = useState([]);
    const {selectedCountry} = useSelector(state => state.countries);

    const match = useRouteMatch();
    const{categoriesNews} = match.params;

    useEffect(() => {
        getCategoriesNews();
    },[newsForCategorie,selectedCountry]);

    const getCategoriesNews = async () => {
        const{categoriesNews} = match.params;
        try{
            const{data} = await newsForOneCategoriReq(selectedCountry,categoriesNews);
            setNewsForCategorie(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    

    return(
        <div>
            <Header/>
            <h1 className="header__primary"> {selectedCountry === 'us' ? 
            (<p>&diams; Top News for {categoriesNews} from United State</p>) : 
            (<p>&diams; Top News for {categoriesNews} from Greath Britain</p>)}</h1>
            <div className="top-news">
            {newsForCategorie.map((news) => {
                return(
                    <TopNewsComponent
                        key={news.publishedAt}
                        title={news.title}
                        description={news.description}
                        url={news.url} 
                        urlToImage={news.urlToImage}
                        content={news.content} />
                )
            })}
        </div>
        </div>
    )
}



export default CategoriesNews;