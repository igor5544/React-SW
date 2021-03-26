import { Species } from '../../api/models/species';
import { RootState } from '../redux-store';

/** Selector for all species */
export const getFullSpeciesList = (state: RootState): Species[] => (
  state.species.allSpecies
)

/** Selector for active species list */
export const getActiveSpeciesList = (state: RootState): Species[] => (
  state.species.activeSpeciesList
)

