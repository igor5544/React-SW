import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthPageCont } from './components/AuthPage';
import { FilmsPageCont } from './components/FilmsPage';
import { HeaderCont } from './components/Header';
import { CharactersPageCont } from './components/CharactersPage';
import { PlanetsPageCont } from './components/PlanetsPage';

/** Main component */
export const App: React.FC = () => (
  <>
    <HeaderCont />
    <Switch>
      <Route path="/"render={() => <Redirect to="/films" />} exact  />
      <Route path="/auth" render={() => <AuthPageCont />} />
      <Route path="/films" render={() => <FilmsPageCont />} />
      <Route path="/characters" render={() => <CharactersPageCont />} />
      <Route path="/planets" render={() => <PlanetsPageCont />} />
    </Switch>
  </>
);
