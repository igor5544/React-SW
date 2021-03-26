import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/selectors';
import { RootState } from '../redux/redux-store';

/** Get auth condition from redux store */
const mapStateToPropsRedirect = (state: RootState) => ({
  isAuth: getIsAuth(state)
})

/** Hoc for redirect users without login */
export const withAuthRedirect = (Component: React.FC) => {

  /** Redirect logic */
  const RedirectComponent = (props: any) => {
    if (!props.isAuth) {
      return <Redirect to="/auth" />
    }

    return <Component {...props} />
  }

  /** Conect props from redux sotre */
  return connect(
    mapStateToPropsRedirect
  )(RedirectComponent);
}
