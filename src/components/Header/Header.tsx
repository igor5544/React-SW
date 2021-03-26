import { AppBar } from '@material-ui/core';
import React from 'react';
import { NavBar } from '../NavBar';

/** Props interface */
interface Props {
  /** Auth condition */
  isAuth: boolean;
  /** Email */
  email: string;
  /** Logout func */
  logout: () => void;
}

/** Header component */
export const Header: React.FC<Props> = ({ isAuth, email, logout }) => (
  <AppBar color="secondary" position="static">
    <NavBar email={email} isAuth={isAuth} logout={logout} />
  </AppBar >
)
