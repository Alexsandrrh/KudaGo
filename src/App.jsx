import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import EventPage from './pages/EventPage/EventPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/favorite" component={FavoritePage} />
          <Route path="/event/:id" component={EventPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
