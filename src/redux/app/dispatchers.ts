import { AsyncVoidThunk } from '../../api/models/thunkTypes';
import { initialApp } from '../auth/dispatchers';
import { setInitialazedSuccess } from './actionCreators';

/** Initial app logic thunk */
export const initializeApp: AsyncVoidThunk = () => async (dispatch) => {
  /** Try get user data */
  await dispatch(initialApp())

  /** Set condition for start app */
  dispatch(setInitialazedSuccess());
}
