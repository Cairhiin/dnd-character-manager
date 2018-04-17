import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from '../layouts/CoreLayout';
import CharManagerApp from '../layouts/CharManagerApp';
import LoginView from '../views/LoginView';

export default (
  <Route component = { CoreLayout } path = '/'>
    <IndexRoute component = { CharManagerApp } name = 'home' />
    <Route component = { LoginView } path = 'login' name = 'login' />
  </Route>
);
