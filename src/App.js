import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeContainer } from './containers';
import { SiteHeader } from './components/header';


export const App = function (props) {
  return (
    <BrowserRouter>
      <div>
        <SiteHeader />
        <div>
          <Route exact path="/" component={HomeContainer} />
        </div>
      </div>
    </BrowserRouter>
  );
};
