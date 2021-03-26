import firebase from 'firebase';
import { Characters } from '../../api/models/characters';
import { SortDirection } from '../../api/models/firebase';
import {
  SET_CHARACTERS,
  SET_FULL_CHARACTERS,
  CLEAR_CHARACTERS,
  TOGGLE_IS_FETCHING,
  SET_START_AFTER,
  TOGGLE_IS_LAST_PORTION,
  SET_SEARCH_STR,
  SET_SORT_CATEGORY,
  SET_SORT_DIRECTION,
  SET_ACTIVE_CHARACTERS,
  SET_ACTIVE_CHARACTERS_LIST,
  CLEAR_ACTIVE_CHARACTERS
} from './reducer';

/** Set characters */
export const setCharacters = (characters: Characters[]) => ({
  type: SET_CHARACTERS,
  characters
});

/** Set peoeple */
export const setAllCharacters = (characters: Characters[]) => ({
  type: SET_FULL_CHARACTERS,
  characters
});

/** Clear characters */
export const clearCharacters = () => ({
  type: CLEAR_CHARACTERS,
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

/** Set active characters */
export const setActiveCharacters = (activeCharacters: Characters) => ({
  type: SET_ACTIVE_CHARACTERS,
  activeCharacters
});

/** Set active characters list */
export const setActiveCharactersList = (activeCharactersList: Characters[]) => ({
  type: SET_ACTIVE_CHARACTERS_LIST,
  activeCharactersList
});

/** Clear active characters */
export const clearActiveCharacters = () => ({
  type: CLEAR_ACTIVE_CHARACTERS,
});
