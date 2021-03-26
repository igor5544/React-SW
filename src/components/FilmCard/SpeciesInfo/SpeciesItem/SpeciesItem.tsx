import { ListItem } from '@material-ui/core';
import React from 'react';
import { Species } from '../../../../api/models/species';
import styles from '../../shared/listInfoTab.module.css';

/** Props interface */
interface Props {
  /** Species */
  speciesItem: Species;
}

/** Species item componet */
export const SpeciesItem: React.FC<Props> = ({ speciesItem }) => (
  <ListItem className={styles.itemCard} >
    <h2>
      {speciesItem.name}
    </h2>

    <ul className={styles.statList}>
      <li className={styles.statItem}>
        <h3>
          Life
            </h3>
        <p>
          {speciesItem.life}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Height
            </h3>
        <p>
          {speciesItem.height}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Eyes
            </h3>
        <p>
          {speciesItem.eye}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Hair
            </h3>
        <p>
          {speciesItem.hair}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Language
            </h3>
        <p>
          {speciesItem.language}
        </p>
      </li>
    </ul>
  </ListItem >
)
