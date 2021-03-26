import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FilmTabs.module.css';

/** Props interface */
interface Props {
  /** Film id */
  id: string;
}

export const FilmTabs: React.FC<Props> = ({ id }) => (
    <ul className={styles.list}>
      <li>
        <NavLink
          activeClassName={styles.linkActive}
          className={styles.link}
          to={`/films/${id}/main-info`}
        >
          Main info
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.linkActive}
          className={styles.link}
          to={`/films/${id}/characters`}
        >
          Characters
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.linkActive}
          className={styles.link}
          to={`/films/${id}/planets`}
        >
          Planets
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.linkActive}
          className={styles.link}
          to={`/films/${id}/species`}
        >
          Species
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.linkActive}
          className={styles.link}
          to={`/films/${id}/starships`}
        >
          Starships
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.linkActive}
          className={styles.link}
          to={`/films/${id}/vehicles`}
        >
          Vehicles
        </NavLink>
      </li>
    </ul>
  )
