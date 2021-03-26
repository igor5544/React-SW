import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app/dispatchers';
import { getInitialized } from './redux/app/selectors';
import { App } from './App';
import { Loader } from './components/common/Loader';
import { RootState } from './redux/redux-store';

/** Props interfase */
interface Props {
  /** Function for check user */
  initializeApp: () => void;
  /** Condition for start app */
  initialized: boolean;
}

/** Check start app params */
const AppApiComponent: React.FC<Props> = ({ initializeApp, initialized }) => {
  useEffect(() => {
    initializeApp();
  }, []);

  return (
    initialized ?
      <App /> :
      < Loader />
  )
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  initialized: getInitialized(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  initializeApp
}

/** Set props and thunks form store */
export const AppCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(AppApiComponent);
