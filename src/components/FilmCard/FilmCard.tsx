import { Card } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Film } from '../../api/models/film';
import { FilmFormCont } from '../FilmForm';
import { CharactersInfoCont } from './CharactersInfo';
import styles from './FilmCard.module.css';
import { FilmMainInfo } from './FilmMainInfo';
import { FilmTabs } from './FilmTabs';
import { PlanetsInfoCont } from './PlanetsInfo';
import { SpeciesInfoCont } from './SpeciesInfo';
import { StarshipsInfoCont } from './StarshipsInfo';
import { VehiclesInfoCont } from './VehiclesInfo';

/** Props interface */
interface Props {
  /** Film */
  film: Film;
  /** Delete film func */
  deleteFilm: (id: string) => void;
}

/** Film card component */
export const FilmCard: React.FC<Props> = ({ film, deleteFilm }) => {
  /** Current URL */
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <FilmTabs id={film.id} />

      <Card className={styles.card}>
        <Switch>
          <Route
            path="/films/:id"
            render={() => <Redirect to={`${location.pathname}/main-info`} />}
            exact
          />
          <Route
            path="/films/:id/form"
            render={() => <FilmFormCont startValues={film} />}
          />
          <Route
            path="/films/:id/main-info"
            render={() => <FilmMainInfo deleteFilm={deleteFilm} film={film} />}
          />
          <Route
            path="/films/:id/characters"
            render={() => <CharactersInfoCont />}
          />
          <Route
            path="/films/:id/planets"
            render={() => <PlanetsInfoCont />}
          />
          <Route
            path="/films/:id/species"
            render={() => <SpeciesInfoCont />}
          />
          <Route
            path="/films/:id/starships"
            render={() => <StarshipsInfoCont />}
          />
          <Route
            path="/films/:id/vehicles"
            render={() => <VehiclesInfoCont />}
          />
        </Switch>
      </Card>
    </div >
  )
}
