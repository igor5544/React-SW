import { Dispatch } from 'react';
import shajs from 'sha.js';
import { authAPI } from '../../api/firebase/authAPI';
import { VoidThunk } from '../../api/models/thunkTypes';
import { setErrorMessage, setUserData, toggleIsSending } from './actionCreators';

/** Hash func for passwords */
const getHash = (str: string): string => shajs('sha256').update(str).digest('hex')

/** Thunk for check user data */
export const initialApp: VoidThunk = () => (dispatch) => {
  /** Get user data from local storage */
  const email = localStorage.getItem('user');

  if (email) {
    dispatch(setUserData(true, email));
  }
}

/** Clear error messsage thunk */
export const closeError: VoidThunk = () => (dispatch) => {
  dispatch(setErrorMessage(''));
}

/** Save user data in local storage */
const setLocalStorage = (email: string): void => {
  localStorage.setItem('user', email);
}

/** Clear local storage */
const removeLocalStorage = (): void => {
  localStorage.removeItem('user');
}

/** Main logic for login func */
const loginFunc = (
  email: string,
  password: string,
  response: any,
  dispatch: Dispatch<any>
): void => {
  /** Check correct data */
  if (!response.exists || response.data().password !== getHash(password)) {
    dispatch(setErrorMessage('Incorrect email or password'));
    return;
  }

  /** Set user data in redux store */
  dispatch(setUserData(true, email));
  /** Save user data in local storage */
  setLocalStorage(email);
}

/** Main logic for registration func */
const registrationFunc = async (
  email: string,
  password: string,
  response: any,
  dispatch: Dispatch<any>
): Promise<void> => {
  /** Check unic user data */
  if (response.exists) {
    dispatch(setErrorMessage('this email is already taken'));
    return;
  }

  /** Save user data in base */
  await authAPI.setUser(email, getHash(password)).catch(error => {
    dispatch(setErrorMessage(error));

  });

  /** Set user data in redux store */
  dispatch(setUserData(true, email));
  /** Save user data in local storage */
  setLocalStorage(email);
}

type FuncCreator = (action: typeof loginFunc) =>
  (email: string, password: string) =>
   (dispatch: Dispatch<any>) => Promise<void>;

/** Thunc creator for logic, registrate funcs */
const authFuncCreator: FuncCreator = (action) =>
  (email, password) =>
    async (dispatch) => {
      /** Set true condition for disable submit btn */
      dispatch(toggleIsSending(true));
      /** Try get user data from base */
      const response = await authAPI.getUser(email);

      /** Main action with user data */
      action(email, password, response, dispatch);

      /** Set false condition for disable submit btn */
      dispatch(toggleIsSending(false));
    }

/** Login func */
export const login = authFuncCreator(loginFunc);
/** Registration func */
export const registration = authFuncCreator(registrationFunc);

/** Logout func */
export const logout: VoidThunk = () => (dispatch) => {
  /** Clear user data in redux store */
  dispatch(setUserData(false, ''));
  /** Clear user data in local storage */
  removeLocalStorage();
}
