import { Card } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Planet } from '../../api/models/planet';
import { PlanetInfo } from '../PlanetInfo/PlanetInfo';
import styles from './PlanetCard.module.css';
import { PlanetTabs } from './PlanetTabs';

/** Props interface */
interface Props {
  /** Planet */
  planet: Planet;
}

/** Planet card component */
export const PlanetCard: React.FC<Props> = ({ planet }) => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <PlanetTabs id={planet.id} />

      <Card className={styles.card}>
        <Switch>
          <Route
            path="/planets/:id"
            render={() => <Redirect to={`${location.pathname}/main-info`} />}
            exact
          />
          <Route
            path="/planets/:id/main-info"
            render={() => <PlanetInfo planet={planet} />}
          />
        </Switch>
      </Card>
    </div >
  )
}
