import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { newsForOneCategoriReq } from '../../constants/services/services';
import Header from '../header/header';

import {useDispatch, useSelector} from 'react-redux';
import {  getNewsForCategorieAction } from '../../store/news/actions';

const CategoriesNews = () => {

    //Without Redux Thunk
    //const[newsForCategorie, setNewsForCategorie] = useState([]);

    const {selectedCountry} = useSelector(state => state.countries);

    const {newsForCategries} = useSelector(state => state.news);
    const dispatch = useDispatch();

    const match = useRouteMatch();
    const{categoriesNews} = match.params;

    useEffect(() => {
        getCategoriesNews();
    },[selectedCountry]);

    const getCategoriesNews = () => {
        getNewsForCategorieAction(selectedCountry,categoriesNews,dispatch);
    }

    //Without Redux Thunk
    // const getCategoriesNews = async () => {
    //     const{categoriesNews} = match.params;
    //     try{
    //         const{data} = await newsForOneCategoriReq(selectedCountry,categoriesNews);
    //         setNewsForCategorie(data.articles);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    

    return(
        <div>
            <h1 className="header__primary"> {selectedCountry === 'us' ? 
            (<p>&diams; Top News for {categoriesNews} from United State</p>) : 
            (<p>&diams; Top News for {categoriesNews} from Greath Britain</p>)}</h1>
            <div className="top-news">
            {newsForCategries.map((news) => {
                return(
                    <TopNewsComponent
                        key={news.publishedAt + news.urlToImage}
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