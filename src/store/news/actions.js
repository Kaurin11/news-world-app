import { getTopNews,categoriesNewsReq, newsForOneCategoriReq } from "../../constants/services/services";
import { SET_CATEGORIE_NEWS, SET_NEWS_FOR_CATEGORIE, SET_TOP_NEWS } from "./types"

export const setTopNewsAction = () =>(topNews, dispatch) => {
    dispatch({
        type: SET_TOP_NEWS,
        payload: { topNews: topNews }
    });
}

export const getTopNewsAction =  async (country,dispatch) => {
    try{
        const {data} = await getTopNews(country);
        const topNews = data.articles;
        console.log(topNews)
        dispatch({
            type:  SET_TOP_NEWS,
            payload: { topNews }
        })
    }catch(err){
        console.log(err)
    }
   
}



export const setNewsForCategorieAction = () =>(newsForCategries, dispatch) => {
    dispatch({
        type: SET_NEWS_FOR_CATEGORIE,
        payload: { newsForCategries: newsForCategries }
    });
}

export const getNewsForCategorieAction =  async (country,categorieNews,dispatch) => {
    try{
        const{data} = await newsForOneCategoriReq(country,categorieNews);
        var newsForCategries = data.articles;
        console.log(newsForCategries);
    }catch(err){
        console.log(err);
    }

    dispatch({
        type:  SET_NEWS_FOR_CATEGORIE,
        payload: {  newsForCategries: newsForCategries }
    })
}





export const setCategoriesAction = () =>(categoriesNews, dispatch) => {
    dispatch({
        type: SET_CATEGORIE_NEWS,
        payload: { categoriesNews: categoriesNews }
    });
}

export const getCategoriesAction =  async (country,page,categorie,dispatch) => {
    try{
        const{data} = await categoriesNewsReq(country,page, categorie);
        var categoriesNews = data.articles;
        console.log(categoriesNews);
    }catch(err){
        console.log(err)
    }

    dispatch({
        type:  SET_CATEGORIE_NEWS,
        payload: {  categoriesNews: categoriesNews }
    })
}




