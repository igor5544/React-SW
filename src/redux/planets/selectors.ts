import { PaginationSettings } from '../../api/models/paginationSettings';
import { Planet } from '../../api/models/planet';
import { SearchSettings } from '../../api/models/searchSettings';
import { RootState } from '../redux-store';

/** Selector for pagination setting */
export const getPaginationSettings = (state: RootState): PaginationSettings => (
  state.planets.paginationSettings
)

/** Selector for searching string */
export const getSearchSettings = (state: RootState): SearchSettings => (
  state.planets.searchSettings
)

/** Selector for planets */
export const getPlanets = (state: RootState): Planet[] => (
  state.planets.planets
)

/** Selector for fetching condition */
export const getIsFetchingPlanets = (state: RootState): boolean => (
  state.planets.isFetching
)

/** Selector for last portion condition */
export const getIsLastPortion = (state: RootState): boolean => (
  state.planets.isLastPortion
)

/** Selector for active planet */
export const getActivePlanet = (state: RootState): Planet => (
  state.planets.activePlanet
)

/** Get all planets list */
export const getFullPlanetsList = (state: RootState): Planet[] => (
  state.planets.allPlanets
)

/** Selector for active planets list */
export const getActivePlanetsList = (state: RootState): Planet[] => (
  state.planets.activePlanetsList
)
