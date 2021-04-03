import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/searchBox/searchBox';
import TopNewsComponent from '../../components/topNewsComponent/topNewsComponent';
import { topNews,searchNewsReq } from '../../constants/services/services';
import Header from '../header/header';

import {useSelector} from 'react-redux';

const SearchNews = () => {

    const [serachTopNews, setSearchTopNews] = useState([]);
    const [search, setSearch] = useState('');

    const {selectedCountry} = useSelector(state => state.countries);

    useEffect(() => {
        filterNews();
    },[selectedCountry,search]);


    const filterNews =async () => {
        try{
            const {data} = await searchNewsReq(selectedCountry,search);
            console.log(data.articles);
            setSearchTopNews(data.articles);
        }catch(err){
            console.log(err);
        }   
    }


    return(

        <div>
           <h1 className="header__primary"> {selectedCountry === 'us' ? 
            (<p>&diams; Search News from United State</p>) : 
            (<p>&diams; Search News from Greath Britain</p>)}</h1>
            <SearchBox value={search} placeholder="Search for Country..."  onChange={({target : {value}}) => setSearch(value)} />
            
            <div className="top-news">
            {serachTopNews.map((news) => {
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


export default SearchNews;