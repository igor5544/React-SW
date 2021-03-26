import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { Characters } from '../../api/models/characters';
import { SearchSettings } from '../../api/models/searchSettings';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { withUnsubscribes } from '../../hocs/withUnsubscribes';
import {
  getNextCharactersData,
  getCharactersData,
  setSearchCharacters,
  setSortDirectionCharacters,
  setSortCharacters
} from '../../redux/characters/dispatchers';
import {
  getIsFetchingCharacters,
  getIsLastPortion,
  getPaginationSettings,
  getCharacters,
  getSearchSettings
} from '../../redux/characters/selectors';
import { RootState } from '../../redux/redux-store';
import { CharactersPage } from './CharactersPage';

/** Props interface */
interface Props {
  /** Characters */
  characters: Characters[];
  /** Fetching condition */
  isFetching: boolean;
  /** Pagination settings */
  paginationSettings: PaginationSettings;
  /** Add sub func */
  addSub: (sub: () => void) => void;
  /** Unsubscribe func */
  unsubscribes: () => void;
  /** Last portion condition */
  isLastPortion: boolean;
  /** Search settings */
  searchSettings: SearchSettings;
  /** Set search string function */
  setSearchStr: (string: string) => void;
  /** Set sort category func */
  setSortCategory: (category: string) => void;
  /** Set sort direction func */
  setSortDirection: (direction: string) => void;
}

/** Get peopel data */
const CharactersPageAPIComponent: React.FC<Props> = ({
  searchSettings,
  paginationSettings,
  addSub,
  unsubscribes,
  ...props
}) => {
  const dispatch = useDispatch();

  useEffect((): any => (
    getCharactersData(searchSettings, paginationSettings, dispatch)
  ), [searchSettings]);

  useEffect(() => unsubscribes, []);

  /** Get next characters portion */
  const getNextCharacters = (): void => {
    const sub = getNextCharactersData(searchSettings, paginationSettings, dispatch);

    addSub(sub);
  }

  return <CharactersPage {...props} getNextCharacters={getNextCharacters} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  characters: getCharacters(state),
  isFetching: getIsFetchingCharacters(state),
  searchSettings: getSearchSettings(state),
  paginationSettings: getPaginationSettings(state),
  isLastPortion: getIsLastPortion(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  setSearchStr: setSearchCharacters,
  setSortCategory: setSortCharacters,
  setSortDirection: setSortDirectionCharacters,
}

/**
 * Add auth redirect logc
 * Ad unsubscribes logic
 * Set props and thunks form store
 */
export const CharactersPageCont = compose<React.FC>(
  withAuthRedirect,
  withUnsubscribes,
  connect(mapStateToProps, mapDispatchToProps)
)(CharactersPageAPIComponent);
