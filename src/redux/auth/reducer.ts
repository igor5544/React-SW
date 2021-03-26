export const SET_USER_DATA = 'SET_USER_DATA/AUTH';
export const TOGGLE_IS_SENDING = 'TOGGLE_IS_SENDING/AUTH';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE/AUTH';

/** State interfase */
export interface AuthState {
  /** Auth condition */
  isAuth: boolean;
  /** Sending condition */
  isSending: boolean;
  /** Email */
  email: string;
  /** Error message */
  errorMessage: string;
}

/** Initial state */
const initialState: AuthState = {
  isAuth: false,
  isSending: false,
  email: '',
  errorMessage: '',
};

/** Reducer for auth data */
export const authReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case SET_USER_DATA:
      return ({
        ...state,
        isAuth: action.isAuth,
        email: action.email
      })
    case SET_ERROR_MESSAGE:
      return ({
        ...state,
        errorMessage: action.errorMessage
      })
    case TOGGLE_IS_SENDING:
      return ({
        ...state,
        isSending: action.isSending
      })
    default:
      return state;
  }
}
