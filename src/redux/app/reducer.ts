export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS/APP';

/** State interfase */
export interface AppState {
  /** Initialized app condition */
  initialized: boolean;
}

/** Initial state */
const initialState = {
  initialized: false,
};

/** Reducer for first render app */
export const appReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return ({
        ...state,
        initialized: true
      })
    default:
      return state;
  }
}
