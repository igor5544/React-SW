import { ListItem } from '@material-ui/core';
import React from 'react';
import { Planet } from '../../../../api/models/planet';
import styles from '../../shared/listInfoTab.module.css';

/** Props interface */
interface Props {
  /** Planet */
  planet: Planet;
}

/** Planet item componet */
export const PlanetItem: React.FC<Props> = ({ planet }) => (
  <ListItem className={styles.itemCard} >
      <h2>
        {planet.name}
      </h2>

      <ul className={styles.statList}>
        <li className={styles.statItem}>
          <h3>
            Climate
            </h3>
          <p>
            {planet.climate}
          </p>
        </li>
        <li className={styles.statItem}>
          <h3>
            Population
            </h3>
          <p>
            {planet.population}
          </p>
        </li>
        <li className={styles.statItem}>
          <h3>
            Diameter
            </h3>
          <p>
            {planet.diameter}
          </p>
        </li>
        <li className={styles.statItem}>
          <h3>
            Gravity
            </h3>
          <p>
            {planet.gravity}
          </p>
        </li>
        <li className={styles.statItem}>
          <h3>
            Water
            </h3>
          <p>
            {planet.water}
          </p>
        </li>
      </ul>
    </ListItem >
)
