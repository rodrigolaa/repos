import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function Routes(){
  return(
    <React.StrictMode>
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/repositorio/:repositorio" component={Repositorio} />
      </Switch>
    </BrowserRouter>
    </React.StrictMode>
  );
}