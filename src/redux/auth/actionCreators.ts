import {
  SET_USER_DATA,
  TOGGLE_IS_SENDING,
  SET_ERROR_MESSAGE
} from './reducer';

/** Set user data */
export const setUserData = (isAuth: boolean, email: string) => ({
  type: SET_USER_DATA,
  isAuth,
  email
});

/** Toggle sending condition */
export const toggleIsSending = (isSending: boolean) => ({
  type: TOGGLE_IS_SENDING,
  isSending
});

/** Set error message */
export const setErrorMessage = (errorMessage: string) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage
});
