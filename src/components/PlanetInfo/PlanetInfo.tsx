import React from 'react';
import { CardContent } from '@material-ui/core';
import { Planet } from '../../api/models/planet';
import styles from './PlanetInfo.module.css';

/** Props interface */
interface Props {
  /** Planet */
  planet: Planet;
}

/** Planet info component */
export const PlanetInfo: React.FC<Props> = ({ planet }) => (
  <CardContent>
    <h2 className={styles.title}>
      {planet.name}
    </h2>

    <ul className={styles.infoList}>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Climate: </h3>
        <p>{planet.climate}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Diameter: </h3>
        <p>{planet.diameter}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Gravity: </h3>
        <p>{planet.gravity}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Orbital Period: </h3>
        <p>{planet.orbitalPeriod}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Population: </h3>
        <p>{planet.population}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Rotation Period: </h3>
        <p>{planet.rotationPeriod}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Water: </h3>
        <p>{planet.water}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Terrain: </h3>
        <p>{planet.terrain}</p>
      </li>
    </ul>
  </CardContent>
)
