import React from 'react';
import { CardContent, List } from '@material-ui/core';
import { Planet } from '../../../api/models/planet';
import styles from '../shared/listInfoTab.module.css';
import { PlanetItem } from './PlanetItem';

/** Props interface */
interface Props {
  /** Planets */
  planets: Planet[];
}

/** Planets info component */
export const PlanetsInfo: React.FC<Props> = ({ planets }) => {
  /** Create planets list */
  const planetsItems = planets.map((planet) => (
    <PlanetItem key={planet.id} planet={planet}/>
  ));

  return (
    <CardContent>
      <List className={styles.cardsList}>
        {planetsItems}
      </List>
    </CardContent >
  )
}
