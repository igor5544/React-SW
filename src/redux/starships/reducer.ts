import { Starship } from '../../api/models/starship';
import { createNewItemsList } from '../../utils/itemsListUtils';

export const SET_FULL_STARSHIPS = 'SET_FULL_STARSHIPS/STARSHIPS';
export const SET_ACTIVE_STARSHIPS_LIST = 'SET_ACTIVE_STARSHIPS_LIST/STARSHIPS';
export const CLEAR_ACTIVE_STARSHIPS = 'CLEAR_ACTIVE_STARSHIPS/STARSHIPS';

/** State interfase */
export interface StarshipsState {
  /** Starships */
  allStarships: Starship[];
  /** Active Starships list */
  activeStarshipsList: Starship[];
}

/** Initial state */
const initialState: StarshipsState = {
  allStarships: [],
  activeStarshipsList: [],
}

/** Reducer for starships data */
export const starshipsReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case SET_FULL_STARSHIPS:
      return ({
        ...state,
        allStarships: action.allStarships
      })
    case SET_ACTIVE_STARSHIPS_LIST:
      return ({
        ...state,
        activeStarshipsList: createNewItemsList(
          state.activeStarshipsList,
          action.activeStarshipsList
        ),
      })
    case CLEAR_ACTIVE_STARSHIPS:
      return ({
        ...state,
        activeStarshipsList: [],
      })
    default:
      return state;
  }
}
