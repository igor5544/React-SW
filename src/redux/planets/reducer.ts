import { PaginationSettings } from '../../api/models/paginationSettings';
import { Planet } from '../../api/models/planet';
import { SearchSettings } from '../../api/models/searchSettings';
import { createNewItemsList } from '../../utils/itemsListUtils';

export const SET_PLANETS = 'SET_PLANETS/PLANETS';
export const SET_FULL_PLANETS = 'SET_FULL_PLANETS/FILM-FORM';
export const CLEAR_PLANETS = 'CLEAR_PLANETS/PLANETS';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING/PLANETS';
export const TOGGLE_IS_LAST_PORTION = 'TOGGLE_IS_LAST_PORTION/PLANETS';
export const SET_START_AFTER = 'SET_START_AFTER/PLANETS';
export const SET_SEARCH_STR = 'SET_SEARCH_STR/PLANETS';
export const SET_SORT_CATEGORY = 'SET_SORT_CATEGORY/PLANETS';
export const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION/PLANETS';
export const SET_ACTIVE_PLANET = 'SET_ACTIVE_PLANET/PLANETS';
export const SET_ACTIVE_PLANETS_LIST = 'SET_ACTIVE_PLANETS_LIST/PLANETS';
export const CLEAR_ACTIVE_PLANETS = 'CLEAR_ACTIVE_PLANETS/PLANETS';

/** State interfase */
export interface PlanetsState {
  /** Planets */
  planets: Planet[];
  /** Planets */
  allPlanets: Planet[];
  /** Fetching condition */
  isFetching: boolean;
  /** Pagination settings */
  paginationSettings: PaginationSettings;
  /** Last portion condition */
  isLastPortion: boolean;
  /** Search settings */
  searchSettings: SearchSettings;
  /** Active planet */
  activePlanet: Planet;
  /** Active planets list */
  activePlanetsList: Planet[];
}

/** Initial state */
const initialState: PlanetsState = {
  planets: [],
  allPlanets: [],
  isFetching: true,
  paginationSettings: {
    limit: 6,
    startAfterDoc: null,
  },
  searchSettings: {
    searchStr: '',
    sortCategory: '',
    direction: 'asc',
  },
  isLastPortion: false,
  activePlanet: {
    name: '',
    climate: '',
    diameter: 0,
    gravity: '',
    orbitalPeriod: 0,
    population: 0,
    rotationPeriod: 0,
    water: 0,
    terrain: '',
    pk: 0,
    id: '',
  },
  activePlanetsList: [],
}

/** Reducer for planets data */
export const planetsReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case SET_PLANETS:
      return ({
        ...state,
        planets: createNewItemsList(state.planets, action.planets),
      })
    case SET_FULL_PLANETS:
      return ({
        ...state,
        allPlanets: action.planets
      })
    case CLEAR_PLANETS:
      return ({
        ...state,
        planets: [],
      })
    case TOGGLE_IS_FETCHING:
      return ({
        ...state,
        isFetching: action.isFetching
      })
    case SET_START_AFTER:
      return ({
        ...state,
        paginationSettings: {
          ...state.paginationSettings,
          startAfterDoc: action.paginationSettings.startAfterDoc,
        }
      })
    case TOGGLE_IS_LAST_PORTION:
      return ({
        ...state,
        isLastPortion: action.isLastPortion,
      })
    case SET_SEARCH_STR:
      return ({
        ...state,
        searchSettings: {
          ...state.searchSettings,
          searchStr: action.searchSettings.searchStr,
        }
      })
    case SET_SORT_CATEGORY:
      return ({
        ...state,
        searchSettings: {
          ...state.searchSettings,
          sortCategory: action.searchSettings.sortCategory,
        }
      })
    case SET_SORT_DIRECTION:
      return ({
        ...state,
        searchSettings: {
          ...state.searchSettings,
          direction: action.searchSettings.direction,
        }
      })
    case SET_ACTIVE_PLANET:
      return ({
        ...state,
        activePlanet: action.activePlanet
      })
    case SET_ACTIVE_PLANETS_LIST:
      return ({
        ...state,
        activePlanetsList: createNewItemsList(
          state.activePlanetsList,
          action.activePlanetsList
        ),
      })
    case CLEAR_ACTIVE_PLANETS:
      return ({
        ...state,
        activePlanetsList: [],
      })
    default:
      return state;
  }
}
