import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CategoriesNewsComponent from '../../components/categoriesNewsComponent/categoriesNewsComponent';
import { generateCategoriesNewsUrl } from '../../constants/routes/routes';

import { categoriesNewsReq} from '../../constants/services/services';
import Header from '../header/header';



const Categoires = () => {

    const[entertainmentNews, setEntertainmentNews] = useState([]);
    const[generalNews, setGeneralNews] = useState([]);
    const[healthNews, setHealthNews] = useState([]);
    const[scienceNews, setScienceNews] = useState([]);
    const[sportNews, setSportNews] = useState([]);

    const history = useHistory();
    
    const [country , setCountry] = useState('us');

    const [open, setOpen] = useState(false);

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

    const getNewsForCategorie = (categoriesNews) => {
        history.push(generateCategoriesNewsUrl(categoriesNews));
        console.log(categoriesNews)
    }

    return(
        <div>
            <Header setCountry={setCountry} />
            <span onClick={() => getNewsForCategorie('entertainment')}>Entertainment</span >
            <div className="categories-news">
                {entertainmentNews.map((enews) =>{
                    return(
                        <CategoriesNewsComponent
                            key={enews.title}
                            urlToImage={enews.urlToImage}
                            title={enews.title}
                            content={enews.content}
                            />
                    )
                })}
            </div>
            <span onClick={() => getNewsForCategorie('general')}>General</span >
            <div className="categories-news">
                {generalNews.map((gnews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={gnews.title}
                                urlToImage={gnews.urlToImage}
                                title={gnews.title}
                                content={gnews.content}
                                />
                        )
                    })}
            </div>
            <span onClick={() => getNewsForCategorie('health')}>Health</span >
            <div className="categories-news">
                {healthNews.map((hnews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={hnews.title}
                                urlToImage={hnews.urlToImage}
                                title={hnews.title}
                                content={hnews.content}
                                />
                        )
                    })}
            </div>
            <span onClick={() => getNewsForCategorie('science')}>Science</span >
            <div className="categories-news">
                {scienceNews.map((snews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={snews.title}
                                urlToImage={snews.urlToImage}
                                title={snews.title}
                                content={snews.content}
                                />
                        )
                    })}
            </div>
            <span onClick={() => getNewsForCategorie('sport')}>Sport</span >
            <div className="categories-news">
                {sportNews.map((spnews) =>{
                        return(
                            <CategoriesNewsComponent
                                key={spnews.title}
                                urlToImage={spnews.urlToImage}
                                title={spnews.title}
                                content={spnews.content}
                                />
                        )
                    })}
            </div>
        </div>
    )
}

export default Categoires;