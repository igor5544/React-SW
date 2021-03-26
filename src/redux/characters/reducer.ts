import { PaginationSettings } from '../../api/models/paginationSettings';
import { Characters } from '../../api/models/characters';
import { SearchSettings } from '../../api/models/searchSettings';
import { createNewItemsList } from '../../utils/itemsListUtils';

export const SET_CHARACTERS = 'SET_CHARACTERS/CHARACTERS';
export const SET_FULL_CHARACTERS = 'SET_FULL_CHARACTERS/FILM-FORM';
export const CLEAR_CHARACTERS = 'CLEAR_CHARACTERS/CHARACTERS';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING/CHARACTERS';
export const SET_START_AFTER = 'SET_START_AFTER/CHARACTERS';
export const TOGGLE_IS_LAST_PORTION = 'TOGGLE_IS_LAST_PORTION/CHARACTERS';
export const SET_SEARCH_STR = 'SET_SEARCH_STR/CHARACTERS';
export const SET_SORT_CATEGORY = 'SET_SORT_CATEGORY/CHARACTERS';
export const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION/CHARACTERS';
export const SET_ACTIVE_CHARACTERS = 'SET_ACTIVE_CHARACTERS/CHARACTERS';
export const SET_ACTIVE_CHARACTERS_LIST = 'SET_ACTIVE_CHARACTERS_LIST/CHARACTERS';
export const CLEAR_ACTIVE_CHARACTERS = 'CLEAR_ACTIVE_CHARACTERS/CHARACTERS';

/** State interfase */
export interface CharactersState {
  /** Characters */
  characters: Characters[];
  /** All characters for form */
  allCharacters: Characters[];
  /** Fetching condition */
  isFetching: boolean;
  /** Pagination settings */
  paginationSettings: PaginationSettings;
  /** Last portion condition */
  isLastPortion: boolean;
  /** Search settings */
  searchSettings: SearchSettings;
  /** Active characters */
  activeCharacters: Characters;
  /** Active characters list */
  activeCharactersList: Characters[];
}

/** Initial state */
const initialState: CharactersState = {
  characters: [],
  allCharacters: [],
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
  activeCharacters: {
    name: '',
    birth: '',
    eyes: '',
    gender: '',
    hair: '',
    height: 0,
    home: '',
    mass: '',
    skin: '',
    pk: 0,
    id: '',
  },
  activeCharactersList: [],
}

/** Reducer for characters data */
export const charactersReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case SET_CHARACTERS:
      return ({
        ...state,
        characters: createNewItemsList(state.characters, action.characters),
      })
    case SET_FULL_CHARACTERS:
      return ({
        ...state,
        allCharacters: action.characters
      })
    case CLEAR_CHARACTERS:
      return ({
        ...state,
        characters: [],
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
    case SET_ACTIVE_CHARACTERS:
      return ({
        ...state,
        activeCharacters: action.activeCharacters
      })
    case SET_ACTIVE_CHARACTERS_LIST:
      return ({
        ...state,
        activeCharactersList: createNewItemsList(
          state.activeCharactersList,
          action.activeCharactersList
        ),
      })
    case CLEAR_ACTIVE_CHARACTERS:
      return ({
        ...state,
        activeCharactersList: [],
      })
    default:
      return state;
  }
}
