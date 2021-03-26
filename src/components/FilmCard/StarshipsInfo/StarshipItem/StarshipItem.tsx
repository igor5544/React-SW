import { ListItem } from '@material-ui/core';
import React from 'react';
import { Starship } from '../../../../api/models/starship';
import styles from '../../shared/listInfoTab.module.css';

/** Props interface */
interface Props {
  /** Starship */
  starship: Starship;
}

/** Starship item componet */
export const StarshipItem: React.FC<Props> = ({ starship }) => (
  <ListItem className={styles.itemCard} >
    <ul className={styles.statList}>
      <li className={styles.statItem}>
        <h3>
          MGLT
        </h3>
        <p>
          {starship.mglt}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Hyperdrive
        </h3>
        <p>
          {starship.hyperdrive}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Class
        </h3>
        <p>
          {starship.class}
        </p>
      </li>
    </ul>
  </ListItem >
)
