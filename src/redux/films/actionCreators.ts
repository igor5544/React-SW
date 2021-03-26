import firebase from 'firebase';
import { Film } from '../../api/models/film';
import { SortDirection } from '../../api/models/firebase';
import {
  SET_FILMS,
  DELETE_FILM,
  CLEAR_FILMS,
  TOGGLE_IS_FETCHING,
  SET_START_AFTER,
  TOGGLE_IS_LAST_PORTION,
  SET_SEARCH_STR,
  SET_SORT_CATEGORY,
  SET_SORT_DIRECTION,
  SET_ACTIVE_FILM,
} from './reducer';

/** Set films */
export const setFilms = (films: Film[]) => ({
  type: SET_FILMS,
  films
});

/** Delte film */
export const removeFilm = (filmId: string) => ({
  type: DELETE_FILM,
  filmId
});

/** Clear films */
export const clearFilms = () => ({
  type: CLEAR_FILMS,
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

/** Set active film */
export const setActiveFilm = (activeFilm: Film) => ({
  type: SET_ACTIVE_FILM,
  activeFilm
});
