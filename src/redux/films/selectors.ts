import { Film } from '../../api/models/film';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { SearchSettings } from '../../api/models/searchSettings';
import { RootState } from '../redux-store';

/** Selector for pagination setting */
export const getPaginationSettings = (state: RootState): PaginationSettings => (
  state.films.paginationSettings
)

/** Selector for searching string */
export const getSearchSettings = (state: RootState): SearchSettings => (
  state.films.searchSettings
)

/** Selector for films */
export const getFilms = (state: RootState): Film[] => (
  state.films.films
)

/** Selector for fetching condition */
export const getIsFetchingFilms = (state: RootState): boolean => (
  state.films.isFetching
)

/** Selector for last portion condition */
export const getIsLastPortion = (state: RootState): boolean => (
  state.films.isLastPortion
)

/** Selector for active film */
export const getActiveFilm = (state: RootState): Film => (
  state.films.activeFilm
)

/** Selector for characters keys */
export const getCharactersKeys = (state: RootState): string[] => (
  state.films.activeFilm.characters
)

/** Selector for planets keys */
export const getPlanetsKeys = (state: RootState): string[] => (
  state.films.activeFilm.planets
)

/** Selector for species keys */
export const getSpeciesKeys = (state: RootState): string[] => (
  state.films.activeFilm.species
)
/** Selector for starships keys */
export const getStarshipsKeys = (state: RootState): string[] => (
  state.films.activeFilm.starships
)

/** Selector for vehicles keys */
export const getVehiclesKeys = (state: RootState): string[] => (
  state.films.activeFilm.vehicles
)
