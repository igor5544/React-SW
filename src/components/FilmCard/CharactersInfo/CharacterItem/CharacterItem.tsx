import { ListItem } from '@material-ui/core';
import React from 'react';
import { Characters } from '../../../../api/models/characters';
import styles from '../../shared/listInfoTab.module.css';

/** Props interface */
interface Props {
  /** Character */
  character: Characters;
}

/** Character item componet */
export const CharacterItem: React.FC<Props> = ({ character }) => (
  <ListItem className={styles.itemCard} >
    <h2>
      {character.name}
    </h2>

    <ul className={styles.statList}>
      <li className={styles.statItem}>
        <h3>
          Gender
      </h3>
        <p>
          {character.gender}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Height
      </h3>
        <p>
          {character.height}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Eyes
      </h3>
        <p>
          {character.eyes}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Hair
      </h3>
        <p>
          {character.hair}
        </p>
      </li>
      <li className={styles.statItem}>
        <h3>
          Birth
      </h3>
        <p>
          {character.birth}
        </p>
      </li>
    </ul>
  </ListItem >
)
