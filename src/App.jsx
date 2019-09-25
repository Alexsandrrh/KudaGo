import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import EventPage from './pages/EventPage/EventPage';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div
        className="app-content"

      >
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/event/:id" component={EventPage} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
