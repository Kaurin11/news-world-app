import React, { useEffect, useState } from 'react';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { getTopNewsUs, getTopNews } from '../../constants/services/services';
import Header from '../header/header';

import {useDispatch, useSelector} from 'react-redux';
import { getTopNewsAction } from '../../store/news/actions';

const TopNews = () => {

    const {selectedCountry} = useSelector(state => state.countries);

    const {topNews} = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        getNews()
    },[selectedCountry]);

    const getNews = () => {
        getTopNewsAction(selectedCountry,dispatch);
    }

    return(
        <div>
        {/* // TODO: kroz redux a ne da se prosledi funckija setCountry */}
        <Header />
        <h1 className="header__primary"> {selectedCountry === 'us' ? 
            (<p>&diams; Top News from United State</p>) : 
            (<p>&diams; Top News from Greath Britain</p>)}</h1>
        <div className="top-news">
            {topNews.map((news) => {
                return(
                    <TopNewsComponent
                        key={news.publishedAt + news.title}
                        title={news.title}
                        description={news.description}
                        url={news.url} 
                        content={news.content}
                        urlToImage={news.urlToImage} />
                )
            })}
        </div>
        </div>
    )
}

export default TopNews;

// const [topNewsUs, setTopNewsUs] = useState([]);

    // useEffect(() => {
    //     getNewsUs();
    // },[selectedCountry]);

    // const getNewsUs =async () => {
    //     try{
    //         const {data} = await getTopNews(selectedCountry);
    //         console.log(data);
    //         setTopNewsUs(data.articles);
    //         console.log(topNewsUs)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }