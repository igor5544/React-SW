import { Starship } from '../../api/models/starship';
import {
  CLEAR_ACTIVE_STARSHIPS,
  SET_ACTIVE_STARSHIPS_LIST,
  SET_FULL_STARSHIPS
} from './reducer';

/** Set starships */
export const setStarships = (allStarships: Starship[]) => ({
  type: SET_FULL_STARSHIPS,
  allStarships
});

/** Set active starships list */
export const setActiveStarshipsList = (activeStarshipsList: Starship[]) => ({
  type: SET_ACTIVE_STARSHIPS_LIST,
  activeStarshipsList
});

/** Clear active starships */
export const clearActiveStarships = () => ({
  type: CLEAR_ACTIVE_STARSHIPS,
});
