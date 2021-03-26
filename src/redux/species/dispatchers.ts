import { Dispatch } from 'redux';
import { speciesAPI } from '../../api/firebase/speciesAPI';
import { SpeciesMapper } from '../../api/mappers/species-mapper';
import { getByKeysCreator } from '../../utils/getByKeysCreator';
import { getFullDataCreator } from '../../utils/getFullDataCreator';
import { clearActiveSpecies, setActiveSpeciesList, setSpecies } from './actionCreators';


/** Thunk for clear species */
export const clearSpeciesData = () => (dispatch: Dispatch<any>): void => {
  dispatch(clearActiveSpecies());
}

/** Thunc for get all species */
export const getFullSpecies = getFullDataCreator(
  speciesAPI.getFullSpecies,
  SpeciesMapper.getSpecies,
  setSpecies
);

/** Get species by PK */
export const getActiveSpeciesList = getByKeysCreator(
  speciesAPI.getSpeciesByPersKeys,
  SpeciesMapper.getSpecies,
  setActiveSpeciesList,
);
