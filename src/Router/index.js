import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../Pages/cart';
import CartFreeShipping from '../Components/cartFreeShipping';
import CartWithShipping from '../Components/cartWithShipping';


function Router() {

    return (
      <Switch>
        <Route exact path="/" component={ Cart } />
        <Route exact path="/freeShipping" component={ CartFreeShipping } />
        <Route exact path="/withShipping" component={ CartWithShipping } />
      </Switch>
    );
  }

export default Router;
