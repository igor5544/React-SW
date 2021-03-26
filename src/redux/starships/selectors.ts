import { Starship } from '../../api/models/starship';
import { RootState } from '../redux-store';

/** Selector for all starships */
export const getFullStarshipsList = (state: RootState): Starship[] => (
  state.starships.allStarships
)

/** Selector for active starships list */
export const getActiveStarshipsList = (state: RootState): Starship[] => (
  state.starships.activeStarshipsList
)
