import { Card } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Characters } from '../../api/models/characters';
import { PlanetInfoCont } from '../PlanetInfo';
import styles from './CharactersCard.module.css';
import { CharactersMainInfo } from './CharactersMainInfo';
import { CharactersTabs } from './CharactersTabs';

/** Props interface */
interface Props {
  /** Characters */
  characters: Characters;
}

/** Poeple card component */
export const CharactersCard: React.FC<Props> = ({ characters }) => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <CharactersTabs id={characters.id} />

      <Card className={styles.card}>
        <Switch>
          <Route
            path="/characters/:id"
            render={() => <Redirect to={`${location.pathname}/main-info`} />}
            exact
          />
          <Route
            path="/characters/:id/main-info"
            render={() => <CharactersMainInfo characters={characters} />}
          />
          <Route
            path="/characters/:id/home-world"
            render={() => <PlanetInfoCont />}
          />
        </Switch>
      </Card>
    </div >
  )
}
