// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AtheletePage';
import NotFoundPage from './components/NotFound';

// routes is a jsx variable
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athelete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
