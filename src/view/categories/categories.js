import React, { useEffect, useState } from 'react';
import CategoriesNewsComponent from '../../components/categoriesNewsComponent/categoriesNewsComponent';

import { categoriesNewsReq} from '../../constants/services/services';
import Header from '../header/header';

const Categoires = () => {

    const[entertainmentNews, setEntertainmentNews] = useState([]);
    const[generalNews, setGeneralNews] = useState([]);
    const[healthNews, setHealthNews] = useState([]);
    const[scienceNews, setScienceNews] = useState([]);
    const[sportNews, setSportNews] = useState([]);
    
    const [country , setCountry] = useState('us');

    useEffect(()=> {
        getEntertainmentNews();
        getGeneralNews();
        getHealthNews();
        getScienceNews();
        getSportNews();
    },[country]);

    const getEntertainmentNews =async () => {
        try{
            const{data} = await categoriesNewsReq(country, 'entertainment');
            console.log(data);
            setEntertainmentNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getGeneralNews =async () => {
        try{
            const{data} = await categoriesNewsReq(country, 'general');
            console.log(data);
            setGeneralNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getHealthNews =async () => {
        try{
            const{data} = await categoriesNewsReq(country, 'health');
            console.log(data);
            setHealthNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getScienceNews =async () => {
        try{
            const{data} = await categoriesNewsReq(country, 'science');
            console.log(data);
            setScienceNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getSportNews =async () => {
        try{
            const{data} = await categoriesNewsReq(country, 'sport');
            console.log(data);
            setSportNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <Header setCountry={setCountry} />
            <p>Entertainment</p>
            <div className="categories-news">
                {entertainmentNews.map((enews) =>{
                    return(
                        <CategoriesNewsComponent
                            key={enews.title}
                            urlToImage={enews.urlToImage}
                            title={enews.title}
                            />
                    )
                })}
            </div>
            <p>General</p>
            <div className="categories-news">
                {generalNews.map((gnews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={gnews.title}
                                urlToImage={gnews.urlToImage}
                                title={gnews.title}
                                />
                        )
                    })}
            </div>
            <p>Health</p>
            <div className="categories-news">
                {healthNews.map((hnews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={hnews.title}
                                urlToImage={hnews.urlToImage}
                                title={hnews.title}
                                />
                        )
                    })}
            </div>
            <p>Science</p>
            <div className="categories-news">
                {scienceNews.map((snews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={snews.title}
                                urlToImage={snews.urlToImage}
                                title={snews.title}
                                />
                        )
                    })}
            </div>
            <p>Sport</p>
            <div className="categories-news">
                {sportNews.map((spnews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={spnews.title}
                                urlToImage={spnews.urlToImage}
                                title={spnews.title}
                                />
                        )
                    })}
            </div>
        </div>
    )
}

export default Categoires;