import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { categoriesUrl, newsInfoUrl, topNewsUrl } from '../constants/routes/routes';
import Categoires from './categories/categories';
import Header from './header/header';
import NewsInfo from './newsInfo/newsInfo';
import TopNews from './topNews/topNews';

const MainView = () => {

    return(
        <div>
            <Switch>
                <Route path={topNewsUrl()} component={TopNews} />
                <Route path={categoriesUrl()} component={Categoires} />
                <Route path={newsInfoUrl()} component={NewsInfo} />
                <Redirect to={topNewsUrl()} />                
            </Switch>
        </div>
    )
} 

export default MainView;