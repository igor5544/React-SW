import { Species } from '../../api/models/species';
import { createNewItemsList } from '../../utils/itemsListUtils';

export const SET_FULL_SPECIES = 'SET_FULL_SPECIES/SPECIES';
export const SET_ACTIVE_SPECIES_LIST = 'SET_ACTIVE_SPECIES_LIST/SPECIES';
export const CLEAR_ACTIVE_SPECIES = 'CLEAR_ACTIVE_SPECIES/SPECIES';

/** State interfase */
export interface SpeciesStater {
  /** Species */
  allSpecies: Species[];
  /** Active Species list */
  activeSpeciesList: Species[];
}

/** Initial state */
const initialState: SpeciesStater = {
  allSpecies: [],
  activeSpeciesList: [],
}

/** Reducer for species form data */
export const speciesReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case SET_FULL_SPECIES:
      return ({
        ...state,
        allSpecies: action.allSpecies
      })
    case SET_ACTIVE_SPECIES_LIST:
      return ({
        ...state,
        activeSpeciesList: createNewItemsList(
          state.activeSpeciesList,
          action.activeSpeciesList
        ),
      })
    case CLEAR_ACTIVE_SPECIES:
      return ({
        ...state,
        activeSpeciesList: [],
      })
    default:
      return state;
  }
}
