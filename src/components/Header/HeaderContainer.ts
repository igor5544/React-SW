import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/dispatchers';
import { Header } from './Header';
import { getEmail, getIsAuth } from '../../redux/auth/selectors';
import { RootState } from '../../redux/redux-store';

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  isAuth: getIsAuth(state),
  email: getEmail(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  logout,
}

/**  Set props and thunks form store */
export const HeaderCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
