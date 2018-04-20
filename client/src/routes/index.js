import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from '../layouts/CoreLayout';
import CharManagerApp from '../layouts/CharManagerApp';
import LoginView from '../views/LoginView';
import DashboardView from '../views/DashboardView';
import RegisterView from '../views/RegisterView';

export default (
  <Route component = { CoreLayout } path = '/'>
    <IndexRoute component = { CharManagerApp } name = 'home' />
    <Route component = { LoginView } path = 'login' name = 'login' />
    <Route component = { DashboardView } path = 'dashboard' name = 'dashboard' />
    <Route component = { RegisterView } path = 'register' name = 'register' />
  </Route>
);
