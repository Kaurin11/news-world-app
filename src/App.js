import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { categoriesUrl, mainViewUrl } from './constants/routes/routes';
import MainView from './view';
import Categoires from './view/categories/categories';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={mainViewUrl()} component={MainView} />
          <Redirect to={mainViewUrl()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
