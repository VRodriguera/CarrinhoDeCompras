import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../Pages/cart';
import Api from '../API/api';


  function Router() {
    return (
      <Switch>
        <Route exact path="/" component={ Cart } />
        <Route exact path="/api" component={ Api } />
      </Switch>
    );
  }

export default Router;
