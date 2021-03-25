import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { categoriesUrl,categoriesUrls, newsInfoUrl, topNewsUrl,categoriesNewsUrl, searcheNewsUrl } from '../constants/routes/routes';
import Categoires from './categories/categories';
import CategoriesNews from './categoriesNews/categoriesNews';
import NewsInfo from './newsInfo/newsInfo';
import SearchNews from './searchNews/searchNews';
import TopNews from './topNews/topNews';

const MainView = () => {

    return(
        <div>
            <Switch>
                <Route path={topNewsUrl()} component={TopNews} />
                <Route path={categoriesUrls()} component={Categoires} />
                <Route path={searcheNewsUrl()} component={SearchNews} />
                <Route path={newsInfoUrl()} component={NewsInfo} />
                <Route path={categoriesNewsUrl()} component={CategoriesNews} />
                
                <Redirect to={topNewsUrl()} />                
            </Switch>
        </div>
    )
} 

export default MainView;