import { Species } from '../../api/models/species';
import {
  CLEAR_ACTIVE_SPECIES,
  SET_ACTIVE_SPECIES_LIST,
  SET_FULL_SPECIES
} from './reducer';

/** Set species */
export const setSpecies = (allSpecies: Species[]) => ({
  type: SET_FULL_SPECIES,
  allSpecies
});

/** Set active species list */
export const setActiveSpeciesList = (activeSpeciesList: Species[]) => ({
  type: SET_ACTIVE_SPECIES_LIST,
  activeSpeciesList
});

/** Clear active species */
export const clearActiveSpecies = () => ({
  type: CLEAR_ACTIVE_SPECIES,
});
