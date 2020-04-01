import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Order from '../pages/Order';
import OrderForm from '../pages/Order/OrderForm';
import Profile from '../pages/Profile';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/orders" exact component={Order} isPrivate />
      <Route path="/orders/new" exact component={OrderForm} isPrivate />
      <Route path="/orders/edit/:id" exact component={OrderForm} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
