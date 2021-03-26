import { PaginationSettings } from '../../api/models/paginationSettings';
import { Characters } from '../../api/models/characters';
import { SearchSettings } from '../../api/models/searchSettings';
import { RootState } from '../redux-store';

/** Selector for pagination setting */
export const getPaginationSettings = (state: RootState): PaginationSettings => (
  state.characters.paginationSettings
)

/** Selector for searching string */
export const getSearchSettings = (state: RootState): SearchSettings => (
  state.characters.searchSettings
)

/** Selector for characters */
export const getCharacters = (state: RootState): Characters[] => (
  state.characters.characters
)

/** Selector for fetching condition */
export const getIsFetchingCharacters = (state: RootState): boolean => (
  state.characters.isFetching
)

/** Selector for last portion condition */
export const getIsLastPortion = (state: RootState): boolean => (
  state.characters.isLastPortion
)

/** Selector for active characters */
export const getActiveCharacters = (state: RootState): Characters => (
  state.characters.activeCharacters
)

/** Selector for active planets keys */
export const getHomeWorldPk = (state: RootState): string => (
  state.characters.activeCharacters.home
)

/** Get all characters list */
export const getFullCharactersList = (state: RootState): Characters[] => (
  state.characters.allCharacters
)

/** Selector for active characters list */
export const getActiveCharactersList = (state: RootState): Characters[] => (
  state.characters.activeCharactersList
)
