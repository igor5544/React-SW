import { Dispatch } from 'react';
import { charactersAPI } from '../../api/firebase/charactersAPI';
import { CharactersMapper } from '../../api/mappers/characters-mapper';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { Characters } from '../../api/models/characters';
import { SearchSettings } from '../../api/models/searchSettings';
import {
  GetByIdThunk,
  SearchThunk,
  SortCategoryThunk,
  SortDirectionThunk
} from '../../api/models/thunkTypes';
import {
  setActiveCharacters,
  setCharacters,
  setSearchStr,
  setSortCategory,
  setSortDirection,
  setStartAfetr,
  toggleIsFetching,
  toggleIsLastPortion,
  clearCharacters,
  setAllCharacters,
  setActiveCharactersList
} from './actionCreators';
import { getFullDataCreator } from '../../utils/getFullDataCreator';
import { getByKeysCreator } from '../../utils/getByKeysCreator';


/** Thunk for search characters */
export const setSearchCharacters: SearchThunk = (searchStr) => (dispatch) => {
  dispatch(setSearchStr(searchStr));
}

/** Thunk for sort characters */
export const setSortCharacters: SortCategoryThunk = (sortCategory) => {
  const correctSortCategory = CharactersMapper.getCorrectCategory(sortCategory);

  return (dispatch) => {
    dispatch(setSortCategory(correctSortCategory));
  }
}

/** Thunk for sort direction */
export const setSortDirectionCharacters: SortDirectionThunk = (sortDirection) =>
  (dispatch) => {
    dispatch(setSortDirection(sortDirection));
  }

/** Clear characters params */
const clearCharactersSettings = (dispatch: Dispatch<any>): void => {
  dispatch(clearCharacters());
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

/** Set characters data */
const setCharactersData = (response: any, dispatch: Dispatch<any>): void => {
  /** Set timeout for get next data func */
  if (response.docs.length === 0) {
    setRequestTimeout(dispatch);
  }

  /** Last doc in response */
  const lastCharactersDoc = response.docs[response.docs.length - 1];

  if (lastCharactersDoc) {
    const characters: Characters[] = [];

    response.forEach((person: any) => {
      const { id } = person;
      const personDto = person.data();

      characters.push(CharactersMapper.getCharacters(personDto, id));
    })

    /** Set characters */
    dispatch(setCharacters(characters));
    /** Set last doc for pagination */
    dispatch(setStartAfetr(lastCharactersDoc));
  }

  /** Set false condition for loading data */
  dispatch(toggleIsFetching(false));
}

/** Thunk for get first characters data portion */
export const getCharactersData = (
  searchSettings: SearchSettings,
  paginationSet: PaginationSettings,
  dispatch: Dispatch<any>
): () => void => {
  /** Clear characters params */
  clearCharactersSettings(dispatch);
  /** Set true condition for loading data */
  dispatch(toggleIsFetching(true));

  /** Get characters */
  return charactersAPI.getCharacters(
    searchSettings,
    { ...paginationSet, startAfterDoc: null },
  ).onSnapshot((response: any) => {
    setCharactersData(response, dispatch);
  });
}

/** Get next characters portion */
export const getNextCharactersData = (
  searchSettings: SearchSettings,
  paginationSet: PaginationSettings,
  dispatch: Dispatch<any>
): () => void => {
  /** Set true condition for loading data */
  dispatch(toggleIsFetching(true));

  return charactersAPI.getCharacters(searchSettings, paginationSet)
    .onSnapshot((response: any): void => {
      setCharactersData(response, dispatch);
    });
}

/** Thunk for get characters by id */
export const getCharactersById: GetByIdThunk = (id, dispatch) =>
  charactersAPI.getCharactersById(id).onSnapshot((charactersResponse: any): void => {
    const { id } = charactersResponse;
    const charactersDto = charactersResponse.data();
    const characters = CharactersMapper.getCharacters(charactersDto, id);

    dispatch(setActiveCharacters(characters));
  })

/** Thunc for get all characters */
export const getFullCharacters = getFullDataCreator(
  charactersAPI.getFullCharacters,
  CharactersMapper.getCharacters,
  setAllCharacters
);

/** Get characters list by PK */
export const getActiveCharactersList = getByKeysCreator(
  charactersAPI.getCharactersByPersKeys,
  CharactersMapper.getCharacters,
  setActiveCharactersList,
);

