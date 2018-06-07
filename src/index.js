import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from './routes/index';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {indexRoutes.map((route, index) => 
        <Route path={route.path} component={route.component} key={index} />
      )}
    </Switch>
  </Router>,
  document.getElementById('root')
);