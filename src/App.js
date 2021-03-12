import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { categoriesUrl, expanUrl, mainViewUrl } from './constants/routes/routes';
import MainView from './view';
import Categoires from './view/categories/categories';
import Expand from './view/expand/expand';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={mainViewUrl()} component={MainView} />
          <Route path={expanUrl()} component={Expand} />
          <Redirect to={mainViewUrl()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
