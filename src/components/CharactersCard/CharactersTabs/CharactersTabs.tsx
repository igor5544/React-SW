import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CharactersTabs.module.css';

/** Props interface */
interface Props {
  /** Characters id */
  id: string;
}

/** Characters tabs component */
export const CharactersTabs: React.FC<Props> = ({ id }) => (
  <ul className={styles.list}>
    <li>
      <NavLink
        activeClassName={styles.linkActive}
        className={styles.link}
        to={`/characters/${id}/main-info`}
      >
        Main info
        </NavLink>
    </li>
    <li>
      <NavLink
        activeClassName={styles.linkActive}
        className={styles.link}
        to={`/characters/${id}/home-world`}
      >
        Home world
        </NavLink>
    </li>
  </ul>
)

