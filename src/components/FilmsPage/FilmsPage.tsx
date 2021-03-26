import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Film } from '../../api/models/film';
import { FilmCardCont } from '../FilmCard';
import { FilmFormCont } from '../FilmForm';
import { FilmsList } from '../FilmsList';

/** Props interface */
interface Props {
  /** Films */
  films: Film[];
  /** Get next films func */
  getNextFilms: () => void;
  /** Fetching condition */
  isFetching: boolean;
  /** Last portion condition */
  isLastPortion: boolean;
  /** Set search string function */
  setSearchStr: (string: string) => void;
  /** Set sort category func */
  setSortCategory: (category: string) => void;
  /** Set sort direction func */
  setSortDirection: (direction: string) => void;
}

/** Film page component */
export const FilmsPage: React.FC<Props> = (props) => (
  <div className="main-page">
    <div className="main-page-bar">
      <FilmsList {...props} />
    </div>

    <div className="main-page-content">
      <Switch>
        <Route component={FilmFormCont} path="/films/form" exact />
        <Route component={FilmCardCont} path="/films/:id" />
      </Switch>
    </div>
  </div>
)
