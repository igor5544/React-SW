import { Dispatch } from 'react';
import { filmsAPI } from '../../api/firebase/filmsAPI';
import { FilmMapper } from '../../api/mappers/film-mapper';
import { Film } from '../../api/models/film';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { SearchSettings } from '../../api/models/searchSettings';
import { GetByIdThunk, SearchThunk, SortCategoryThunk, SortDirectionThunk } from '../../api/models/thunkTypes';
import {
  setSearchStr,
  setSortCategory,
  setSortDirection,
  toggleIsFetching,
  setStartAfetr,
  setFilms,
  clearFilms,
  toggleIsLastPortion,
  setActiveFilm,
  removeFilm
} from './actionCreators';
import { getByKeysCreator } from '../../utils/getByKeysCreator';
import { clearActiveCharacters } from '../characters/actionCreators';

/** Thunk for search film */
export const setSearchFilm: SearchThunk = (searchStr) => (dispatch) => {
  dispatch(setSearchStr(searchStr));
}

/** Thunk for sort film */
export const setSortFilms: SortCategoryThunk = (sortCategory) => {
  const correctSortCategory = FilmMapper.getCorrectCategory(sortCategory);

  return (dispatch: Dispatch<any>): void => {
    dispatch(setSortCategory(correctSortCategory));
  }
}

/** Thunk for sort direction */
export const setSortDirectionFilms: SortDirectionThunk = (sortDirection) =>
  (dispatch) => {
    dispatch(setSortDirection(sortDirection));
  }

/** Clear films params */
const clearFilmsSettings = (dispatch: Dispatch<any>): void => {
  dispatch(clearFilms());
  dispatch(setStartAfetr(null));
  dispatch(toggleIsLastPortion(false));
}

/** Set timeout for get next data portion function */
const setRequestTimeout = (dispatch: Dispatch<any>): void => {
  dispatch(toggleIsLastPortion(true));

  setTimeout(() => {
    dispatch(toggleIsLastPortion(false));
  }, 1000);
}

/** Set film data */
const setFilmData = (response: any, dispatch: Dispatch<any>): void => {
  /** Set timeout for get next data func */
  if (response.docs.length === 0) {
    setRequestTimeout(dispatch);
  }

  /** Last doc in response */
  const lastFilmDoc = response.docs[response.docs.length - 1];

  if (lastFilmDoc) {
    const films: Film[] = [];

    /** Check response type */
    response.docChanges().forEach((filmChange: any) => {
      const { id } = filmChange.doc;
      const filmDto = filmChange.doc.data();

      switch (filmChange.type) {
        case 'removed':
          dispatch(removeFilm(id));
          break;
        default:
          films.push(FilmMapper.getFilm(filmDto, id));
      }
    });

    /** Set films */
    dispatch(setFilms(films));
    /** Set last doc for pagination */
    dispatch(setStartAfetr(lastFilmDoc));
  }

  /** Set false condition for loading data */
  dispatch(toggleIsFetching(false));
}

/** Thunk for get first film data portion */
export const getFilmsData = (
  searchSettings: SearchSettings,
  paginationSet: PaginationSettings,
  dispatch: Dispatch<any>,
): () => void => {
  /** Clear films params */
  clearFilmsSettings(dispatch);
  /** Set true condition for loading data */
  dispatch(toggleIsFetching(true));

  /** Get films */
  return filmsAPI.getFilms(
    searchSettings,
    { ...paginationSet, startAfterDoc: null },
  ).onSnapshot((response: any) => {
    setFilmData(response, dispatch);
  });
}

/** Get next films portion */
export const getNextFilmsData = (
  searchSettings: SearchSettings,
  paginationSet: PaginationSettings,
  dispatch: Dispatch<any>
): () => void => {
  /** Set true condition for loading data */
  dispatch(toggleIsFetching(true));

  return filmsAPI.getFilms(searchSettings, paginationSet)
    .onSnapshot((response: any) => {
      setFilmData(response, dispatch);
    });
}

/** Thunk for clear characters */
export const clearCharactersData = () => (dispatch: Dispatch<any>): void => {
  dispatch(clearActiveCharacters());
}

/** Thunk for get film by id */
export const getFilmById: GetByIdThunk = (id, dispatch) =>
  filmsAPI.getFilmById(id).onSnapshot((filmResponse: any): void => {
    const { id } = filmResponse;
    const filmDto = filmResponse.data();
    const film = FilmMapper.getFilm(filmDto, id);

    dispatch(setActiveFilm(film));
  })

/** Thunk for add new film */
export const addNewFilm = (film: Film): () => void => (): void => {
  const filmDto = FilmMapper.getFilmDto(film);

  filmsAPI.addFilm(filmDto);
}

/** Thunc for update film data */
export const editFilm = (film: Film, id: string): () => void => (): void => {
  const filmDto = FilmMapper.getFilmDto(film);
  filmsAPI.editFilm(filmDto, id);
}

/** Thunk for delete film */
export const deleteFilm = (id: string): () => void => (): void => {
  filmsAPI.deleteFilm(id);
}
