import React, { useEffect, useState } from 'react';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { getTopNewsUs, topNews } from '../../constants/services/services';
import Header from '../header/header';

import {useSelector} from 'react-redux';

const TopNews = () => {

    const [topNewsUs, setTopNewsUs] = useState([]);
    const {selectedCountry} = useSelector(state => state.countries);

    useEffect(() => {
        getNewsUs();
    },[selectedCountry]);

    const getNewsUs =async () => {
        try{
            const {data} = await topNews(selectedCountry);
            console.log(data);
            setTopNewsUs(data.articles);
            console.log(topNewsUs)
        }catch(err){
            console.log(err);
        }
    }


    return(
        <div>
        {/* // TODO: kroz redux a ne da se prosledi funckija setCountry */}
        <Header />
        <h1 className="header__primary"> {selectedCountry === 'us' ? 
            (<p>&diams; Top News from United State</p>) : 
            (<p>&diams; Top News from Greath Britain</p>)}</h1>
        <div className="top-news">
            {topNewsUs.map((news) => {
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