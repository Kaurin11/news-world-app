import React, { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import CategoriesNewsComponent from '../../components/categoriesNewsComponent/categoriesNewsComponent';
import { generateCategoriesNewsUrl, generateCategoriesUrls } from '../../constants/routes/routes';

import { categoriesNewsReq} from '../../constants/services/services';
import Header from '../header/header';

import { useDispatch, useSelector} from 'react-redux';
import { getCategoriesAction } from '../../store/news/actions';

const Categoires = () => {

    const[entertainmentNews, setEntertainmentNews] = useState([]);
    const[generalNews, setGeneralNews] = useState([]);
    const[healthNews, setHealthNews] = useState([]);
    const[scienceNews, setScienceNews] = useState([]);
    const[sportNews, setSportNews] = useState([]);

    const history = useHistory();
    const match = useRouteMatch();
    const {page} = match.params;
    console.log(page);

    const {selectedCountry} = useSelector(state => state.countries);

    const {categoriesNews} = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(()=> {
        getEntertainmentNews();
        getGeneralNews();
        getHealthNews();
        getScienceNews();
        getSportNews();
    },[selectedCountry, page]);
    

    // const getEntertainmentNews = () => {
    //     getCategoriesAction(selectedCountry,page, 'entertainment', dispatch)
    // }

    const getEntertainmentNews =async () => {
        try{
            const{data} = await categoriesNewsReq(selectedCountry,page, 'entertainment');
            console.log(data);
            setEntertainmentNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getGeneralNews =async () => {
        try{
            const{data} = await categoriesNewsReq(selectedCountry,page, 'general');
            console.log(data);
            setGeneralNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getHealthNews =async () => {
        try{
            const{data} = await categoriesNewsReq(selectedCountry,page, 'health');
            console.log(data);
            setHealthNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getScienceNews =async () => {
        try{
            const{data} = await categoriesNewsReq(selectedCountry,page, 'science');
            console.log(data);
            setScienceNews(data.articles);
        }catch(err){
            console.log(err);
        }
    }

    const getSportNews =async () => {
        try{
            const{data} = await categoriesNewsReq(selectedCountry,page, 'sport');
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

    

    const nextPageHandler =() => {
        history.push(generateCategoriesUrls((parseInt(page)+1)).toString());
    }

    const previousPageHandler = () => {
        if(page <= 1){
            return null
        }else{
            history.push(generateCategoriesUrls((parseInt(page)-1)).toString())
        } 
    }

    return(
        <div>
            <h1 className="header__primary"> {selectedCountry === 'us' ? 
            (<p>&diams; Top Categories News from United State</p>) : 
            (<p>&diams; Top Categories News from Greath Britain</p>)}</h1>
            <div className="accordion">
                <section id="item1">
                    <span className="header__secondary"  onClick={() => getNewsForCategorie('entertainment')}>Entertainment</span >
                    <a href="#item1"><h1><ion-icon size="large" name="caret-down-outline"></ion-icon></h1></a>
                    <p className="categories-news">
                    <button  onClick={previousPageHandler}> &lang; &lang; {page}</button>
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
                        <button  onClick={nextPageHandler}>{page} &rang; &rang;</button>
                    </p>
                </section>
            
                <section id="item2">
                    <span className="header__secondary" onClick={() => getNewsForCategorie('general')}>General</span >
                    <a href="#item2"><h1><ion-icon size="large" name="caret-down-outline"></ion-icon></h1></a>
                    <p className="categories-news">
                    <button  onClick={previousPageHandler}> &lang; &lang; {page}</button>
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
                    <button  onClick={nextPageHandler}>{page} &rang; &rang;</button>
                    </p>
                </section>

            <section id="item3">
                <span className="header__secondary" onClick={() => getNewsForCategorie('health')}>Health</span >
                <a href="#item3"><h1><ion-icon size="large" name="caret-down-outline"></ion-icon></h1></a>
                <p className="categories-news">
                <button  onClick={previousPageHandler}> &lang; &lang; {page}</button>
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
                <button  onClick={nextPageHandler}>{page} &rang; &rang;</button>
                </p>
            </section>

            <section id="item4">
                <span className="header__secondary" onClick={() => getNewsForCategorie('science')}>Science</span >
                <a href="#item4"><h1><ion-icon size="large" name="caret-down-outline"></ion-icon></h1></a>
                <p className="categories-news">
                <button  onClick={previousPageHandler}> &lang; &lang; {page}</button>
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
                <button  onClick={nextPageHandler}>{page} &rang; &rang;</button>
                </p>
            </section>

            <section id="item5">
                <span className="header__secondary" onClick={() => getNewsForCategorie('sport')}>Sport</span >
                <a href="#item5"><h1><ion-icon size="large" name="caret-down-outline"></ion-icon></h1></a>
                <p className="categories-news">
                <button  onClick={previousPageHandler}> &lang; &lang; {page}</button>
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
                <button  onClick={nextPageHandler}>{page} &rang; &rang;</button>
                </p> 
            </section>
            </div>
        </div>
    )
}



export default Categoires;