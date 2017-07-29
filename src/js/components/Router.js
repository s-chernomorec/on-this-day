import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './homePage/HomePage';
import AboutPage from './aboutPage/AboutPage';
import BookmarksPage from './bookmarksPage/BookmarksPage';

const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <HomePage {...props} />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/bookmarks" render={() => <BookmarksPage {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
