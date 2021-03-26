import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, registration, closeError } from '../../redux/auth/dispatchers';
import { AuthPage } from './AuthPage';
import { getIsAuth, gerIsSendingAuth, getErrorMessage } from '../../redux/auth/selectors';
import { RootState } from '../../redux/redux-store';

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  isAuth: getIsAuth(state),
  isSending: gerIsSendingAuth(state),
  error: getErrorMessage(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  login,
  registration,
  closeError,
}

/** Conect props from redux sotre */
export const AuthPageCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(AuthPage);
