import { Dispatch } from 'react';
import { planetAPI } from '../../api/firebase/planetAPI';
import { PlanetMapper } from '../../api/mappers/planet-mapper';
import { SortDirection } from '../../api/models/firebase';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { Planet } from '../../api/models/planet';
import { SearchSettings } from '../../api/models/searchSettings';
import { GetByIdThunk, GetByPkThunk, SearchThunk, SortCategoryThunk, SortDirectionThunk } from '../../api/models/thunkTypes';
import { getByKeysCreator } from '../../utils/getByKeysCreator';
import { getFullDataCreator } from '../../utils/getFullDataCreator';
import {
  clearActivePlanets,
  clearPlanets,
  setActivePlanet,
  setActivePlanetsList,
  setAllPlanets,
  setPlanets,
  setSearchStr,
  setSortCategory,
  setSortDirection,
  setStartAfetr,
  toggleIsFetching,
  toggleIsLastPortion
} from './actionCreators';

/** Thunk for search planet */
export const setSearchPlanet: SearchThunk = (searchStr) => (dispatch) => {
  dispatch(setSearchStr(searchStr));
}

/** Thunk for sort planets */
export const setSortPlanets: SortCategoryThunk = (sortCategory) => {
  const correctSortCategory = PlanetMapper.getCorrectCategory(sortCategory);

  return (dispatch) => {
    dispatch(setSortCategory(correctSortCategory));
  }
}

/** Thunk for sort direction */
export const setSortDirectionPlanets: SortDirectionThunk = (sortDirection: SortDirection) =>
  (dispatch) => {
    dispatch(setSortDirection(sortDirection));
  }

/** Clear characters params */
const clearPlanetsSettings = (dispatch: Dispatch<any>): void => {
  dispatch(clearPlanets());
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

/** Set Planets data */
const setPlanetsData = (response: any, dispatch: Dispatch<any>): void => {
  /** Set timeout for get next data func */
  if (response.docs.length === 0) {
    setRequestTimeout(dispatch);
  }

  /** Last doc in response */
  const lastPlanetDoc = response.docs[response.docs.length - 1];

  if (lastPlanetDoc) {
    const planets: Planet[] = [];

    response.forEach((planet: any) => {
      const { id } = planet;
      const planetDto = planet.data();

      planets.push(PlanetMapper.getPlanet(planetDto, id));
    })

    /** Set planets */
    dispatch(setPlanets(planets));
    /** Set last doc for pagination */
    dispatch(setStartAfetr(lastPlanetDoc));
  }

  /** Set false condition for loading data */
  dispatch(toggleIsFetching(false));
}

/** Thunk for get first planets data portion */
export const getPlanetsData = (
  searchSettings: SearchSettings,
  paginationSet: PaginationSettings,
  dispatch: Dispatch<any>
): () => void => {
  /** Clear characters params */
  clearPlanetsSettings(dispatch);
  /** Set true condition for loading data */
  dispatch(toggleIsFetching(true));

  /** Get planets */
  return planetAPI.getPlanets(
    searchSettings,
    { ...paginationSet, startAfterDoc: null },
  ).onSnapshot((response: any) => {
    setPlanetsData(response, dispatch);
  });
}

/** Get next planets portion */
export const getNextPlanetsData = (
  searchSettings: SearchSettings,
  paginationSet: PaginationSettings,
  dispatch: Dispatch<any>
): () => void => {
  /** Set true condition for loading data */
  dispatch(toggleIsFetching(true));

  return planetAPI.getPlanets(searchSettings, paginationSet)
    .onSnapshot((response: any): void => {
      setPlanetsData(response, dispatch);
    });
}

/** Set active planet data */
const setPlanetData = (planetResponse: any, dispatch: Dispatch<any>) => {
  const { id } = planetResponse;
  const planetDto = planetResponse.data();
  const planet = PlanetMapper.getPlanet(planetDto, id);

  dispatch(setActivePlanet(planet));
}

/** Thunk for get planet by id */
export const getPlanetById: GetByIdThunk = (id, dispatch) =>
  planetAPI.getPlanetById(id).onSnapshot((planetResponse: any): void => {
    setPlanetData(planetResponse, dispatch);
  })

/** Thunk for get characters by pk */
export const getPlanetByPk: GetByPkThunk = (pk, dispatch) =>
  planetAPI.getPlanetByPk(pk).onSnapshot((response: any): void => {
    response.forEach((planetResponse: any) => {
      setPlanetData(planetResponse, dispatch);
    })
  })

/** Thunk for clear planets */
export const clearPlanetsData = () => (dispatch: Dispatch<any>): void => {
  dispatch(clearActivePlanets());
}

/** Thunc for get all planets */
export const getFullPlanet = getFullDataCreator(
  planetAPI.getFullPlanets,
  PlanetMapper.getPlanet,
  setAllPlanets
);

/** Get planets by PK */
export const getActivePlanetsList = getByKeysCreator(
  planetAPI.getPlanetsByPersKeys,
  PlanetMapper.getPlanet,
  setActivePlanetsList,
);
