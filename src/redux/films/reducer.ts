import { Film } from '../../api/models/film';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { SearchSettings } from '../../api/models/searchSettings';
import { createNewItemsList, deleteItem } from '../../utils/itemsListUtils';

export const SET_FILMS = 'SET_FILMS/FILMS';
export const DELETE_FILM = 'DELETE_FILM/FILMS';
export const CLEAR_FILMS = 'CLEAR_FILMS/FILMS';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING/FILMS';
export const SET_START_AFTER = 'SET_START_AFTER/FILMS';
export const TOGGLE_IS_LAST_PORTION = 'TOGGLE_IS_LAST_PORTION/FILMS';
export const SET_SEARCH_STR = 'SET_SEARCH_STR/FILMS';
export const SET_SORT_CATEGORY = 'SET_SORT_CATEGORY/FILMS';
export const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION/FILMS';
export const SET_ACTIVE_FILM = 'SET_ACTIVE_FILM/FILMS';

/** State interfase */
export interface FilmsState {
  /** Type */
  films: Film[];
  /** Film id */
  filmId: string;
  /** Fetching condition */
  isFetching: boolean;
  /** Pagination settings */
  paginationSettings: PaginationSettings;
  /** Last portion condition */
  isLastPortion: boolean;
  /** Search setting */
  searchSettings: SearchSettings;
  /** Active Film */
  activeFilm: Film;
}

/** Initial state */
const initialState: FilmsState = {
  films: [],
  filmId: '',
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
  activeFilm: {
    title: '',
    director: '',
    opening: '',
    producer: '',
    release: new Date(),
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    id: '',
  }
}

/** Reducer for films data */
export const filmsReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case SET_FILMS:
      return ({
        ...state,
        films: createNewItemsList(state.films, action.films),
      })
    case DELETE_FILM:
      return ({
        ...state,
        films: deleteItem(state.films, action.filmId),
      })
    case CLEAR_FILMS:
      return ({
        ...state,
        films: [],
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
    case SET_ACTIVE_FILM:
      return ({
        ...state,
        activeFilm: action.activeFilm,
      })
    default:
      return state;
  }
}
