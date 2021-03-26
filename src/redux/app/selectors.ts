import { RootState } from '../redux-store';

/** Selector for start app condition */
export const getInitialized = (state: RootState): boolean => (
  state.initial.initialized
)
