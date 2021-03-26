import React from 'react';
import { CardContent } from '@material-ui/core';
import { Characters } from '../../../api/models/characters';
import styles from './CharactersMainInfo.module.css';

/** Props interface */
interface Props {
  /** Characters */
  characters: Characters;
}

/** Characters info component */
export const CharactersMainInfo: React.FC<Props> = ({ characters }) => (
  <CardContent>
    <h2 className={styles.title}>
      {characters.name}
    </h2>

    <ul className={styles.infoList}>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Birth: </h3>
        <p>{characters.birth}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Eyes: </h3>
        <p>{characters.eyes}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Gender: </h3>
        <p>{characters.gender}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Hair: </h3>
        <p>{characters.hair}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Height: </h3>
        <p>{characters.height}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Mass: </h3>
        <p>{characters.mass}</p>
      </li>
      <li className={styles.infoItem}>
        <h3 className={styles.itemTitle}>Skin: </h3>
        <p>{characters.skin}</p>
      </li>
    </ul>

  </CardContent>
)
