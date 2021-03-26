import { Button, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './NavBar.module.css';

/** Props interface */
interface Props {
  /** Auth condition */
  isAuth: boolean;
  /** Email */
  email: string;
  /** Logout func */
  logout: () => void;
}

/** Navbar component */
export const NavBar: React.FC<Props> = ({ isAuth, email, logout }) => (
    <Toolbar className={styles.wrapper}>
      <Typography variant="h5">
        Star Wars
      </Typography>

      {
        isAuth &&
        <>
          <nav>
            <ul className={styles.menu}>
              <li>
                <NavLink
                  activeClassName={styles.linkActive}
                  className={styles.link}
                  to="/films"
                >
                  Films
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.linkActive}
                  className={styles.link}
                  to="/characters"
                >
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.linkActive}
                  className={styles.link}
                  to="/planets"
                >
                  Planets
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.auth}>
            <p className={styles.login}>
              {email}
            </p>
            <Button onClick={logout}>
              Logout
            </Button>
          </div>
        </>
      }

    </Toolbar>
  )
