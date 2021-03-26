import firebase from 'firebase';
import { SortDirection } from '../../api/models/firebase';
import { Planet } from '../../api/models/planet';
import {
  TOGGLE_IS_FETCHING,
  SET_START_AFTER,
  TOGGLE_IS_LAST_PORTION,
  SET_SEARCH_STR,
  SET_SORT_CATEGORY,
  SET_SORT_DIRECTION,
  SET_PLANETS, SET_FULL_PLANETS,
  CLEAR_PLANETS, SET_ACTIVE_PLANET,
  SET_ACTIVE_PLANETS_LIST,
  CLEAR_ACTIVE_PLANETS
} from './reducer';

/** Set planets */
export const setPlanets = (planets: Planet[]) => ({
  type: SET_PLANETS,
  planets
});

/** Set planets */
export const setAllPlanets = (planets: Planet[]) => ({
  type: SET_FULL_PLANETS,
  planets
});

/** Clear planets */
export const clearPlanets = () => ({
  type: CLEAR_PLANETS,
});

/** Toggle fetching condition */
export const toggleIsFetching = (isFetching: boolean) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

/** Set start after doc */
export const setStartAfetr = (startAfterDoc: firebase.firestore.QueryDocumentSnapshot | null) => ({
  type: SET_START_AFTER,
  paginationSettings: {
    startAfterDoc,
  }
});

/** Toggle last portion condition */
export const toggleIsLastPortion = (isLastPortion: boolean) => ({
  type: TOGGLE_IS_LAST_PORTION,
  isLastPortion,
});

/** Set search string */
export const setSearchStr = (searchStr: string) => ({
  type: SET_SEARCH_STR,
  searchSettings: {
    searchStr
  }
});

/** Set sort catergory */
export const setSortCategory = (sortCategory: string) => ({
  type: SET_SORT_CATEGORY,
  searchSettings: {
    sortCategory
  }
});

/** Set sort direction */
export const setSortDirection = (direction: SortDirection) => ({
  type: SET_SORT_DIRECTION,
  searchSettings: {
    direction
  }
});

/** Set active planet */
export const setActivePlanet = (activePlanet: Planet) => ({
  type: SET_ACTIVE_PLANET,
  activePlanet
});

/** Set active planets list */
export const setActivePlanetsList = (activePlanetsList: Planet[]) => ({
  type: SET_ACTIVE_PLANETS_LIST,
  activePlanetsList
});

/** Clear active planets */
export const clearActivePlanets = () => ({
  type: CLEAR_ACTIVE_PLANETS,
});
