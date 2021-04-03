import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { categoriesUrls, newsInfoUrl, topNewsUrl,categoriesNewsUrl, searcheNewsUrl, expanUrl } from '../constants/routes/routes';
import Categoires from './categories/categories';
import CategoriesNews from './categoriesNews/categoriesNews';
import Expand from './expand/expand';
import Header from './header/header';
import NewsInfo from './newsInfo/newsInfo';
import SearchNews from './searchNews/searchNews';
import TopNews from './topNews/topNews';

const MainView = () => {

    return(
        <div>
            <Header />
            <Switch>
                <Route path={topNewsUrl()} component={TopNews} />
                <Route path={categoriesUrls()} component={Categoires} />
                <Route path={searcheNewsUrl()} component={SearchNews} />
                <Route path={newsInfoUrl()} component={NewsInfo} />
                <Route path={categoriesNewsUrl()} component={CategoriesNews} />
                <Route path={expanUrl()} component={Expand} />
                
                <Redirect to={topNewsUrl()} />                
            </Switch>
        </div>
    )
} 

export default MainView;