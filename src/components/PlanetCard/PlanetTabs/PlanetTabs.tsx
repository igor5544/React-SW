import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PlanetTabs.module.css';

/** Props interface */
interface Props {
  /** Planet id */
  id: string;
}

/** Planet tabs component */
export const PlanetTabs: React.FC<Props> = ({ id }) => (
  <ul className={styles.list}>
    <li>
      <NavLink
        activeClassName={styles.linkActive}
        className={styles.link}
        to={`/planets/${id}/main-info`}
      >
        Main info
        </NavLink>
    </li>
  </ul>
)
