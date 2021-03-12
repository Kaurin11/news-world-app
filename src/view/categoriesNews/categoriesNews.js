import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { categoriesNewsReq } from '../../constants/services/services';
import Header from '../header/header';

const CategoriesNews = () => {

    const[categoriesNews, setCategoriesNews] = useState([]);
    const[country, setCountry] = useState('us');

    const match = useRouteMatch();

    useEffect(() => {
        getCategoriesNews();
    },[country]);

    const getCategoriesNews = async () => {
        const{categoriesNews} = match.params;
        try{
            const{data} = await categoriesNewsReq(country,categoriesNews);
            setCategoriesNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <Header setCountry={setCountry} />
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

export default CategoriesNews;