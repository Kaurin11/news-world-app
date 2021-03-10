import React, { useEffect, useState } from 'react';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { getTopNewsUs, topNews } from '../../constants/services/services';
import Header from '../header/header';

const TopNews = () => {

    const [topNewsUs, setTopNewsUs] = useState([]);
    const [country , setCountry] = useState('us');

    useEffect(() => {
        getNewsUs();
    }, [country]);

    const getNewsUs =async () => {
        try{
            const{data} = await topNews(country);
            console.log(data.articles);
            setTopNewsUs(data.articles);
            console.log(topNewsUs)
        }catch(err){
            console.log(err);
        }
    }

    console.log(country)

    return(
        <div>
        <Header setCountry={setCountry} />
        <div className="top-news">
            {topNewsUs.map((news) => {
                return(
                    <TopNewsComponent
                        key={news.publishedAt}
                        title={news.title}
                        description={news.description}
                        url={news.url} 
                        urlToImage={news.urlToImage} />
                )
            })}
        </div>
        </div>
    )
}

export default TopNews;