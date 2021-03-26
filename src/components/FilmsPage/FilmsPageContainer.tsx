import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Film } from '../../api/models/film';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { SearchSettings } from '../../api/models/searchSettings';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { withUnsubscribes } from '../../hocs/withUnsubscribes';
import {
  getFilmsData,
  getNextFilmsData,
  setSearchFilm,
  setSortDirectionFilms,
  setSortFilms
} from '../../redux/films/dispatchers';
import {
  getFilms,
  getIsFetchingFilms,
  getIsLastPortion,
  getPaginationSettings,
  getSearchSettings
} from '../../redux/films/selectors';
import { RootState } from '../../redux/redux-store';
import { FilmsPage } from './FilmsPage';

/** Props interface */
interface Props {
  /** Films */
  films: Film[];
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

/** Get films data */
const FilmsPageAPIComponent: React.FC<Props> = ({
  searchSettings,
  paginationSettings,
  addSub,
  unsubscribes,
  ...props
}) => {
  const dispatch = useDispatch();

  useEffect(() => (
    getFilmsData(searchSettings, paginationSettings, dispatch)
  ), [searchSettings]);

  useEffect(() => unsubscribes, []);

  /** Get next films portion */
  const getNextFilms = (): void => {
    const sub = getNextFilmsData(searchSettings, paginationSettings, dispatch);

    addSub(sub);
  }

  return <FilmsPage {...props} getNextFilms={getNextFilms} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  films: getFilms(state),
  isFetching: getIsFetchingFilms(state),
  searchSettings: getSearchSettings(state),
  paginationSettings: getPaginationSettings(state),
  isLastPortion: getIsLastPortion(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  setSearchStr: setSearchFilm,
  setSortCategory: setSortFilms,
  setSortDirection: setSortDirectionFilms,
}

/**
 * Add auth redirect logc
 * Ad unsubscribes logic
 * Set props and thunks form store
 */
export const FilmsPageCont = compose<React.FC>(
  withAuthRedirect,
  withUnsubscribes,
  connect(mapStateToProps, mapDispatchToProps)
)(FilmsPageAPIComponent);
