import { RootState } from '../redux-store';

/** Selector for auth condition */
export const getIsAuth = (state: RootState): boolean => (
  state.auth.isAuth
)

/** Selector for user email */
export const getEmail = (state: RootState): string => (
  state.auth.email
)

/** Selector for form sending condition */
export const gerIsSendingAuth = (state: RootState): boolean => (
  state.auth.isSending
)

/** Selector for auth error message */
export const getErrorMessage = (state: RootState): string => (
  state.auth.errorMessage
)
