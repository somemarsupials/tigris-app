import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { HomeContainer, CallbackContainer } from './containers';
import { SiteHeader } from './components/header';
import './css/main.css';

export const App = function () {
  return (
    <HashRouter>
      <div className="main">
        <Route
          component={SiteHeader}
        />
        <Route 
          exact 
          path="/" 
          component={HomeContainer} 
        />
        <Route 
          exact
          path="/auth/:provider/callback" 
          component={CallbackContainer} 
        />
      </div>
    </HashRouter>
  );
};
