import { Dispatch } from 'redux';
import { starshipAPI } from '../../api/firebase/starshipAPI';
import { StarshipMapper } from '../../api/mappers/starship-mapper';
import { getByKeysCreator } from '../../utils/getByKeysCreator';
import { getFullDataCreator } from '../../utils/getFullDataCreator';
import { clearActiveStarships, setActiveStarshipsList, setStarships } from './actionCreators';

/** Thunk for clear starships */
export const clearStarshipsData = () => (dispatch: Dispatch<any>): void => {
  dispatch(clearActiveStarships());
}

/** Thunc for get all starships */
export const getFullStarships = getFullDataCreator(
  starshipAPI.getFullStarships,
  StarshipMapper.getStarship,
  setStarships
);

/** Get starships by PK */
export const getActiveStarshipsList = getByKeysCreator(
  starshipAPI.getStarshipsByPersKeys,
  StarshipMapper.getStarship,
  setActiveStarshipsList,
);
