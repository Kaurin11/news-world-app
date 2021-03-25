import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { newsForOneCategoriReq } from '../../constants/services/services';
import Header from '../header/header';

import {connect} from 'react-redux';

const CategoriesNews = ({countryNews}) => {

    const[categoriesNews, setCategoriesNews] = useState([]);

    const match = useRouteMatch();

    useEffect(() => {
        getCategoriesNews();
    },[countryNews]);

    const getCategoriesNews = async () => {
        const{categoriesNews} = match.params;
        try{
            const{data} = await newsForOneCategoriReq(countryNews,categoriesNews);
            setCategoriesNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    

    return(
        <div>
            <Header/>
            <div className="top-news">
            {categoriesNews.map((news) => {
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

const mapStateToProps = (state) => {
    return{
        countryNews : state.newsCountry
    }
}

export default connect(mapStateToProps)(CategoriesNews);